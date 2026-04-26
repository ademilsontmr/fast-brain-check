import { serve } from 'https://deno.land/std@0.190.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const ALLOWED_ORIGINS = [
  Deno.env.get('FRONTEND_URL') || '',
  'http://localhost:5173',
  'http://localhost:5174',
].filter(Boolean);

function corsHeaders(origin: string | null) {
  // Aceita qualquer localhost em dev
  const isLocalhost = origin?.startsWith('http://localhost');
  const allowed = isLocalhost ? origin : (origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0]);
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Vary': 'Origin',
  };
}

// Lógica idêntica ao frontend (src/types/quiz.ts) — manter sincronizado
function calculateIQ(score: number, totalQuestions: number, averageTime?: number) {
  const percentage = (score / totalQuestions) * 100;

  let iqScore: number;
  let percentile: number;

  if (percentage >= 90) {
    iqScore = 130 + Math.floor(((percentage - 90) / 10) * 15);
    percentile = 95 + Math.floor(((percentage - 90) / 10) * 4);
  } else if (percentage >= 80) {
    iqScore = 120 + Math.floor(((percentage - 80) / 10) * 10);
    percentile = 90 + Math.floor(((percentage - 80) / 10) * 5);
  } else if (percentage >= 70) {
    iqScore = 110 + Math.floor(((percentage - 70) / 10) * 10);
    percentile = 75 + Math.floor(((percentage - 70) / 10) * 15);
  } else if (percentage >= 60) {
    iqScore = 100 + Math.floor(((percentage - 60) / 10) * 10);
    percentile = 50 + Math.floor(((percentage - 60) / 10) * 25);
  } else if (percentage >= 50) {
    iqScore = 95 + Math.floor(((percentage - 50) / 10) * 5);
    percentile = 40 + Math.floor(((percentage - 50) / 10) * 10);
  } else if (percentage >= 40) {
    iqScore = 90 + Math.floor(((percentage - 40) / 10) * 5);
    percentile = 30 + Math.floor(((percentage - 40) / 10) * 10);
  } else {
    iqScore = 85 + Math.floor((percentage / 40) * 5);
    percentile = 15 + Math.floor((percentage / 40) * 15);
  }

  if (averageTime !== undefined && averageTime > 0) {
    let adj = 0;
    if (averageTime < 10) adj = Math.min(5, (10 - averageTime) * 0.5);
    else if (averageTime < 20) adj = Math.min(3, (20 - averageTime) * 0.3);
    else if (averageTime < 30) adj = 0;
    else if (averageTime < 40) adj = -Math.min(2, (averageTime - 30) * 0.2);
    else adj = -Math.min(5, 2 + (averageTime - 40) * 0.3);
    iqScore = Math.round(iqScore + adj);
  }

  iqScore = Math.max(85, Math.min(145, iqScore));
  percentile = Math.max(15, Math.min(99, percentile));
  return { iqScore, percentile };
}

function getCelebrityComparison(iq: number) {
  if (iq >= 140) return 'Albert Einstein';
  if (iq >= 135) return 'Stephen Hawking';
  if (iq >= 130) return 'Elon Musk';
  if (iq >= 125) return 'Bill Gates';
  if (iq >= 120) return 'Emma Watson';
  if (iq >= 115) return 'Will Smith';
  if (iq >= 110) return 'Tom Cruise';
  if (iq >= 105) return 'Brad Pitt';
  if (iq >= 100) return 'Jennifer Aniston';
  if (iq >= 95) return 'Shakira';
  if (iq >= 90) return 'pessoas bem-sucedidas';
  return 'pessoas determinadas';
}

function getCognitiveStrength(iq: number) {
  if (iq >= 130) return 'Raciocínio Lógico Excepcional e Pensamento Estratégico';
  if (iq >= 120) return 'Pensamento Analítico Avançado e Resolução Criativa de Problemas';
  if (iq >= 110) return 'Resolução de Problemas Complexos e Pensamento Crítico';
  if (iq >= 100) return 'Compreensão Verbal e Numérica com Boa Capacidade Analítica';
  if (iq >= 90) return 'Raciocínio Prático e Versatilidade Cognitiva';
  return 'Pensamento Estruturado com Grande Potencial de Desenvolvimento';
}

serve(async (req) => {
  const origin = req.headers.get('origin');
  const headers = corsHeaders(origin);

  if (req.method === 'OPTIONS') return new Response(null, { headers });

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const { productId, userData } = await req.json();

    // Validar input
    if (!productId || !userData?.name || !userData?.email || !userData?.cpf) {
      return new Response(JSON.stringify({ error: 'Dados insuficientes' }), {
        status: 400, headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    // Validar score — deve ser inteiro entre 0 e 30
    const score = parseInt(userData.score ?? 0);
    if (isNaN(score) || score < 0 || score > 30) {
      return new Response(JSON.stringify({ error: 'Score inválido' }), {
        status: 400, headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    // Validar produto no banco — previne price manipulation
    const { data: product, error: productError } = await supabase
      .from('products')
      .select('price')
      .eq('id', productId)
      .eq('is_active', true)
      .single();

    if (productError || !product) {
      return new Response(JSON.stringify({ error: 'Produto não encontrado' }), {
        status: 404, headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    // Rate limiting: bloqueia múltiplos pagamentos do mesmo CPF em 10 minutos
    const cpfClean = userData.cpf?.replace(/\D/g, '');
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000).toISOString();
    const { data: existing } = await supabase
      .from('payments')
      .select('result_access_token')
      .eq('user_cpf', cpfClean)
      .eq('status', 'pending')
      .gte('created_at', tenMinutesAgo)
      .maybeSingle();

    if (existing) {
      return new Response(JSON.stringify({ error: 'Pagamento já em andamento. Aguarde alguns minutos.' }), {
        status: 429, headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    const resultAccessToken = crypto.randomUUID();
    const paymentId = crypto.randomUUID();
    const { iqScore, percentile } = calculateIQ(score, 30, userData.averageAnswerTime);

    const { error: insertError } = await supabase.from('payments').insert({
      id: paymentId,
      product_id: productId,
      user_name: userData.name,
      user_email: userData.email,
      user_cpf: userData.cpf,
      user_whatsapp: userData.whatsapp,
      amount: product.price,
      status: 'pending',
      gateway: 'abacate-pay',
      result_access_token: resultAccessToken,
      score: score,
      iq_score: iqScore,
      percentile,
      celebrity: getCelebrityComparison(iqScore),
      cognitive_strength: getCognitiveStrength(iqScore),
      average_answer_time: userData.averageAnswerTime,
    });

    if (insertError) throw new Error(insertError.message);

    const abacateRes = await fetch('https://api.abacatepay.com/v1/pixQrCode/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Deno.env.get('ABACATE_PAY_API_KEY')}`,
      },
      body: JSON.stringify({
        amount: Math.round(Number(product.price) * 100),
        description: 'Teste de QI',
        customer: {
          name: userData.name,
          email: userData.email,
          taxId: userData.cpf.replace(/\D/g, ''),
          cellphone: (userData.whatsapp || '').replace(/\D/g, ''),
        },
      }),
    });

    const abacateData = await abacateRes.json();
    if (!abacateRes.ok) throw new Error(abacateData.error || 'Falha ao gerar PIX');

    await supabase.from('payments')
      .update({ gateway_payment_id: abacateData.data.id })
      .eq('id', paymentId);

    return new Response(JSON.stringify({
      qrCode: abacateData.data.brCode,
      resultAccessToken,
    }), { headers: { ...headers, 'Content-Type': 'application/json' } });

  } catch (err) {
    console.error('create-payment error:', err instanceof Error ? err.message : err);
    return new Response(JSON.stringify({ error: 'Erro interno' }), {
      status: 500, headers: { ...headers, 'Content-Type': 'application/json' },
    });
  }
});
