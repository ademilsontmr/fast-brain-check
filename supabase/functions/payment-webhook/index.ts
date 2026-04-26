import { serve } from 'https://deno.land/std@0.190.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

function anonymize(cpf: string, email: string, whatsapp: string) {
  return {
    user_cpf: cpf ? `${cpf.substring(0, 3)}.***.***-${cpf.substring(cpf.length - 2)}` : null,
    user_email: email ? `${email.substring(0, 2)}***@***${email.substring(email.lastIndexOf('.'))}` : null,
    user_whatsapp: whatsapp ? `${whatsapp.substring(0, 4)}****${whatsapp.substring(whatsapp.length - 4)}` : null,
  };
}

serve(async (req) => {
  if (req.method === 'GET') {
    return new Response(JSON.stringify({ status: 'ok' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const url = new URL(req.url);
  const webhookSecret = url.searchParams.get('webhookSecret');
  if (!webhookSecret || webhookSecret !== Deno.env.get('ABACATE_PAY_WEBHOOK_SECRET')) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  if (!body || Object.keys(body).length === 0) {
    return new Response(JSON.stringify({ received: true }));
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  );

  const eventId = body.id || `abacate-${Date.now()}`;

  // Idempotência
  const { data: existing } = await supabase
    .from('webhook_processing_log')
    .select('id').eq('event_id', eventId).eq('gateway', 'abacate-pay').maybeSingle();
  if (existing) return new Response(JSON.stringify({ received: true }));

  await supabase.from('webhook_processing_log').insert({ event_id: eventId, gateway: 'abacate-pay' });

  if (body.event === 'billing.paid' || body.event === 'pixQrCode.paid') {
    const billingId = body.data?.pixQrCode?.id || body.data?.id;
    if (billingId) {
      const { data: payment } = await supabase
        .from('payments')
        .select('id, user_cpf, user_email, user_whatsapp')
        .eq('gateway_payment_id', billingId)
        .eq('status', 'pending')
        .single();

      if (payment) {
        await supabase.from('payments')
          .update({ status: 'approved', ...anonymize(payment.user_cpf, payment.user_email, payment.user_whatsapp) })
          .eq('id', payment.id);
      }
    }
  }

  return new Response(JSON.stringify({ received: true }));
});
