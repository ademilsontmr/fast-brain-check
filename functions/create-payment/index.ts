import { serve } from 'https://deno.land/std@0.190.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// CORS restrito ao domínio de produção
const ALLOWED_ORIGINS = [
  'https://bomcristao.com.br',
  'https://www.bomcristao.com.br',
  Deno.env.get('ALLOWED_ORIGIN') || '',
  // Dev local
  'http://localhost:5173',
  'http://localhost:8080',
  'http://localhost:3000',
].filter(Boolean);

function getCorsHeaders(origin: string | null): Record<string, string> {
  const allowed = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Vary': 'Origin',
  };
}

// Rate limiting em memória: 3 req/IP por 60s (fallback — banco é a proteção principal)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (entry.count >= 3) return false;
  entry.count++;
  return true;
}

serve(async req => {
  const origin = req.headers.get('origin');
  const corsHeaders = getCorsHeaders(origin);

  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (!checkRateLimit(ip)) {
    return new Response(
      JSON.stringify({ error: 'Muitas tentativas. Aguarde 1 minuto e tente novamente.' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 429 }
    );
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceRole = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const abacateApiKey = Deno.env.get('ABACATE_PAY_API_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceRole);

    const {
      amount,
      customerName,
      customerEmail,
      customerTaxId,
      customerPhone,
      testType,
      quizAnswers,
      score,
      maxScore,
    } = await req.json();

    const sanitizedScore = Math.floor(Number(score || 0));
    const sanitizedMaxScore = Math.max(1, Math.floor(Number(maxScore || 90)));
    const sanitizedPhone = customerPhone ? String(customerPhone).replace(/\D/g, '') : '';
    const sanitizedQuizAnswers = quizAnswers || {};

    // Validar amount contra preço real no banco — previne price manipulation
    const { data: product, error: productError } = await supabase
      .from('products')
      .select('price')
      .eq('key', 'christian_quiz_test')
      .single();

    if (productError || !product) {
      return new Response(
        JSON.stringify({ error: 'Produto não encontrado' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    const expectedAmount = Number(product.price);
    const receivedAmount = Number(amount);

    if (Math.abs(receivedAmount - expectedAmount) > 0.01) {
      console.error('Price manipulation attempt', { received: receivedAmount, expected: expectedAmount });
      return new Response(
        JSON.stringify({ error: 'Valor inválido' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    const testTypeMap: Record<string, string> = {
      catholic_quiz: 'combo',
      christian_quiz: 'combo',
      relationship: 'relationship',
      spiritual_gifts: 'spiritual_gifts',
      combo: 'combo',
    };
    const sanitizedTestType = testTypeMap[testType] || 'combo';

    // Criar PIX via Abacate Pay
    const abacatePayload = {
      amount: Math.round(expectedAmount * 100), // usa preço do banco, não do frontend
      description: `Pagamento - ${testType || 'Teste'}`,
      customer: {
        name: customerName,
        email: customerEmail,
        taxId: customerTaxId,
        cellphone: sanitizedPhone,
      },
    };

    // Log apenas em dev
    if (Deno.env.get('ENVIRONMENT') !== 'production') {
      console.warn('🔍 Abacate Pay Request:', {
        url: 'https://api.abacatepay.com/v1/pixQrCode/create',
        amount: abacatePayload.amount,
        apiKeyPrefix: abacateApiKey.substring(0, 15) + '...',
      });
    }

    const abacateResponse = await fetch('https://api.abacatepay.com/v1/pixQrCode/create', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${abacateApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(abacatePayload),
    });

    const abacateData = await abacateResponse.json();

    if (!abacateResponse.ok) {
      console.error('❌ Abacate Pay error:', abacateData.error);
      throw new Error(abacateData.error || 'Failed to create Pix charge');
    }

    const billingId = abacateData.data.id;
    const brCode = abacateData.data.brCode;

    // Salvar no Supabase
    const { data: payment, error: dbError } = await supabase
      .from('payments')
      .insert({
        amount: expectedAmount, // preço do banco
        status: 'pending',
        abacate_pay_id: billingId,
        customer_email: customerEmail,
        customer_name: customerName,
        customer_phone: sanitizedPhone,
        pix_copy_paste: brCode,
        test_type: sanitizedTestType,
        quiz_answers: sanitizedQuizAnswers,
        score: sanitizedScore,
        max_score: sanitizedMaxScore,
        niche_id: 'christian',
        idempotency_key: billingId,
        customer_ip: ip,
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError.message);
      throw new Error(`Failed to save payment record: ${dbError.message}`);
    }

    return new Response(
      JSON.stringify({
        paymentId: payment.id,
        billingId,
        brCode,
        accessToken: payment.access_token,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    );
  } catch (error) {
    console.error('Payment creation error:', error instanceof Error ? error.message : String(error));
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Erro desconhecido' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    );
  }
});
