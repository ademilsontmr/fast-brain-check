import { serve } from 'https://deno.land/std@0.190.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Webhook vem do Abacate Pay (servidor), não do browser — CORS só para OPTIONS
function getCorsHeaders(req: Request): Record<string, string> {
  if (req.method === 'OPTIONS') {
    return {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
      'Access-Control-Max-Age': '86400',
    };
  }
  return {};
}

function jsonResponse(data: object, corsHeaders: Record<string, string>, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json; charset=utf-8' },
  });
}

async function safeParseWebhookBody(req: Request): Promise<{ data: any; rawBody: string }> {
  let rawBody = '';
  try {
    const clonedReq = req.clone();
    try {
      rawBody = await clonedReq.text();
    } catch {
      try {
        const buffer = await req.arrayBuffer();
        rawBody = new TextDecoder().decode(buffer);
      } catch (e) {
        console.error('Failed to read body:', e);
        return { data: {}, rawBody: '' };
      }
    }
    if (!rawBody || rawBody.trim() === '') return { data: {}, rawBody };
    try {
      return { data: JSON.parse(rawBody), rawBody };
    } catch {
      console.error('Webhook JSON parse failed');
      return { data: { rawBody }, rawBody };
    }
  } catch (e) {
    console.error('Unexpected error parsing body:', e);
    return { data: {}, rawBody };
  }
}

serve(async req => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders, status: 200 });
  }

  if (req.method === 'GET') {
    return jsonResponse({ status: 'ok', service: 'payment-webhook', timestamp: new Date().toISOString() }, corsHeaders);
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json', Allow: 'POST, GET, OPTIONS' },
    });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data: payload, rawBody } = await safeParseWebhookBody(req);

    // Secret SEMPRE obrigatório
    const webhookSecret = Deno.env.get('ABACATE_PAY_WEBHOOK_SECRET');
    if (!webhookSecret) {
      console.error('❌ ABACATE_PAY_WEBHOOK_SECRET not configured');
      return jsonResponse({ success: false, error: 'Server misconfiguration' }, corsHeaders, 500);
    }

    const url = new URL(req.url);
    const providedSecret = url.searchParams.get('webhookSecret');
    if (!providedSecret || providedSecret !== webhookSecret) {
      console.error('❌ Invalid or missing webhook secret');
      return jsonResponse({ success: false, error: 'Unauthorized' }, corsHeaders, 401);
    }

    // Body vazio = health check
    if (!rawBody || rawBody.trim() === '' || Object.keys(payload).length === 0) {
      return jsonResponse({ success: true, message: 'Empty body acknowledged' }, corsHeaders);
    }

    const event = payload.event || payload.type || 'billing.updated';
    const data = payload.data || {};
    const paymentObject = data.checkout || data.transparent || data.billing || data.pixQrCode || data;
    const billingId = paymentObject.id;
    const status = paymentObject.status;
    const metadata = paymentObject.metadata || payload.metadata;

    // Idempotência
    const webhookId = payload.id || `${billingId}_${event}_${payload.timestamp || Date.now()}`;
    const { data: existing } = await supabase
      .from('webhook_processing_log')
      .select('id')
      .eq('webhook_id', webhookId)
      .maybeSingle();

    if (existing) {
      return jsonResponse({ success: true, message: 'Webhook already processed' }, corsHeaders);
    }

    await supabase.from('webhook_processing_log').insert({
      webhook_id: webhookId,
      webhook_type: 'payment',
      payload,
      status: 'success',
    });

    if (!billingId) {
      console.error('No billing ID found. Payload:', JSON.stringify(payload));
      return jsonResponse({ success: true, message: 'No billing ID found in payload' }, corsHeaders);
    }

    // Buscar pagamento
    let payment: any = null;

    const { data: paymentByAbacate, error: findError } = await supabase
      .from('payments')
      .select('*')
      .eq('abacate_pay_id', billingId)
      .maybeSingle();

    if (findError) {
      console.error('Error finding payment by abacate_pay_id:', findError);
    } else {
      payment = paymentByAbacate;
    }

    // Fallback: buscar por idempotency_key
    if (!payment) {
      const idempotencyKey =
        metadata?.idempotencyKey ||
        paymentObject?.metadata?.idempotencyKey ||
        data?.billing?.metadata?.idempotencyKey;

      if (idempotencyKey) {
        const { data: paymentByKey, error: keyError } = await supabase
          .from('payments')
          .select('*')
          .eq('idempotency_key', idempotencyKey)
          .maybeSingle();

        if (!keyError && paymentByKey) {
          payment = paymentByKey;
          if (!payment.abacate_pay_id) {
            await supabase.from('payments').update({ abacate_pay_id: billingId }).eq('id', payment.id);
          }
        }
      }
    }

    if (!payment) {
      console.error('Payment not found for billing:', billingId);
      return jsonResponse({ success: true, message: 'Payment not found but webhook acknowledged' }, corsHeaders);
    }

    // Mapear status
    let newStatus: 'pending' | 'approved' | 'rejected' | 'cancelled' = 'pending';
    const statusUpper = (status || '').toUpperCase();
    const eventUpper = (event || '').toUpperCase();

    if (['PAID', 'APPROVED', 'COMPLETED', 'SUCCESS', 'CONFIRMED'].some(s => eventUpper.includes(s) || statusUpper === s)) {
      newStatus = 'approved';
    } else if (['CANCEL', 'CANCELED', 'CANCELLED', 'REFUND', 'REFUNDED'].some(s => eventUpper.includes(s) || statusUpper === s)) {
      newStatus = 'cancelled';
    } else if (['EXPIRE', 'EXPIRED'].some(s => eventUpper.includes(s) || statusUpper === s)) {
      newStatus = 'rejected';
    } else if (['FAIL', 'FAILED', 'REJECT', 'REJECTED', 'ERROR'].some(s => eventUpper.includes(s) || statusUpper === s)) {
      newStatus = 'rejected';
    }

    if (payment.status !== newStatus) {
      const updateData: Record<string, any> = { status: newStatus };
      if (newStatus === 'approved') updateData.paid_at = new Date().toISOString();

      const { error: updateError } = await supabase
        .from('payments')
        .update(updateData)
        .eq('id', payment.id);

      if (updateError) {
        console.error('❌ Failed to update payment:', updateError.message);
        return jsonResponse({ success: true, message: 'Webhook received but update failed', paymentId: payment.id }, corsHeaders);
      }

      // Anonimizar dados pessoais após pagamento (LGPD)
      if (newStatus === 'approved') {
        const { error: anonError } = await supabase
          .from('payments')
          .update({
            customer_name: null,
            customer_email: null,
            customer_phone: null,
            pix_copy_paste: null,
            quiz_answers: null,
            customer_ip: null,
            anonymized_at: new Date().toISOString(),
          })
          .eq('id', payment.id);

        if (anonError) {
          console.error('❌ Anonymization failed:', anonError.message);
        } else {
          console.warn('✅ Payment anonymized:', payment.id);
        }
      }
    }

    return jsonResponse({
      success: true,
      paymentId: payment.id,
      status: newStatus,
      timestamp: new Date().toISOString(),
    }, corsHeaders);

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('=== Webhook Error ===', errorMessage);
    // Retorna 200 para evitar retries infinitos do Abacate Pay
    return jsonResponse({
      success: true,
      error: errorMessage,
      message: 'Error occurred but webhook acknowledged to prevent retries',
    }, corsHeaders);
  }
});
