/**
 * Cloudflare Worker - BomQI (Otimizado)
 * Usa KV apenas para armazenar resultados pagos (essencial)
 */

export interface Env {
  USER_DATA: KVNamespace;
  STRIPE_SECRET_KEY: string;
  STRIPE_WEBHOOK_SECRET: string;
  FRONTEND_URL: string;
}

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const STRIPE_API = 'https://api.stripe.com/v1';

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    // CORS preflight
    if (method === 'OPTIONS') {
      return new Response(null, { headers: CORS });
    }

    // Rotas
    const isCheckoutPath = path === '/api/checkout' || path.endsWith('/checkout');
    const isWebhookPath = path === '/api/webhook' || path.endsWith('/webhook');
    const isResultsPath = path === '/api/results' || path.endsWith('/results');
    const isUsersPath = path === '/api/users' || path === '/users' || path.endsWith('/users');

    // Salvar dados do usuário (daily-*) - Apenas nome e whatsapp no KV, mas retorna userId
    if (isUsersPath && method === 'POST') {
      try {
        const data = await request.json();
        
        if (!data.name || !data.whatsapp) {
          return new Response(JSON.stringify({ error: 'Nome e WhatsApp são obrigatórios' }), {
            status: 400,
            headers: { ...CORS, 'Content-Type': 'application/json' },
          });
        }

        // Gerar userId (necessário para o Stripe checkout)
        const timestampMs = Date.now();
        const dataHash = btoa(`${data.name}-${data.whatsapp}-${timestampMs}`)
          .replace(/[^a-zA-Z0-9]/g, '')
          .substring(0, 6)
          .toLowerCase();
        const userId = `${timestampMs}-${dataHash}`;

        // Criar chave única por dia: daily-YYYY-MM-DD
        const today = new Date();
        const dateKey = today.toISOString().split('T')[0]; // YYYY-MM-DD
        const dailyKey = `daily-${dateKey}`;

        try {
          // Buscar dados existentes do dia (se houver)
          const existingData = await env.USER_DATA.get(dailyKey);
          let dailyUsers: Array<{ name: string; whatsapp: string }> = [];
          
          if (existingData) {
            try {
              dailyUsers = JSON.parse(existingData);
            } catch (e) {
              dailyUsers = [];
            }
          }
          
          // Adicionar novo usuário ao array do dia (apenas nome e whatsapp)
          dailyUsers.push({
            name: data.name.trim(),
            whatsapp: data.whatsapp.trim(),
          });
          
          // Salvar array completo na mesma chave (todos os dados do dia juntos)
          await env.USER_DATA.put(dailyKey, JSON.stringify(dailyUsers));
        } catch (kvError: any) {
          // Erro ao salvar no KV, mas continua retornando userId
          console.error('Erro ao salvar no KV:', kvError);
        }

        // Retornar userId para o frontend (necessário para Stripe)
        return new Response(JSON.stringify({ success: true, userId }), {
          headers: { ...CORS, 'Content-Type': 'application/json' },
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: 'Erro ao processar requisição' }), {
          status: 500,
          headers: { ...CORS, 'Content-Type': 'application/json' },
        });
      }
    }

    // Buscar dados diários (GET /users) - Retorna apenas nome e whatsapp
    if (isUsersPath && method === 'GET') {
      try {
        const date = url.searchParams.get('date');
        
        if (date) {
          // Validar formato da data (YYYY-MM-DD)
          if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            return new Response(JSON.stringify({ error: 'Formato de data inválido. Use YYYY-MM-DD' }), {
              status: 400,
              headers: { ...CORS, 'Content-Type': 'application/json' },
            });
          }

          const dailyKey = `daily-${date}`;
          const dailyData = await env.USER_DATA.get(dailyKey);
          
          if (!dailyData) {
            return new Response(JSON.stringify({ date, users: [] }), {
              headers: { ...CORS, 'Content-Type': 'application/json' },
            });
          }
          
          try {
            const users = JSON.parse(dailyData);
            return new Response(JSON.stringify({ date, users }), {
              headers: { ...CORS, 'Content-Type': 'application/json' },
            });
          } catch (e) {
            return new Response(JSON.stringify({ error: 'Erro ao processar dados' }), {
              status: 500,
              headers: { ...CORS, 'Content-Type': 'application/json' },
            });
          }
        }
        
        // Listar todas as datas disponíveis
        const keys = await env.USER_DATA.list();
        const dailyKeys = keys.keys
          .filter(key => key.name.startsWith('daily-'))
          .map(key => key.name.replace('daily-', ''))
          .sort()
          .reverse();
        
        return new Response(JSON.stringify({ dates: dailyKeys }), {
          headers: { ...CORS, 'Content-Type': 'application/json' },
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: 'Erro ao buscar dados' }), {
          status: 500,
          headers: { ...CORS, 'Content-Type': 'application/json' },
        });
      }
    }

    // Criar sessão de checkout do Stripe
    if (isCheckoutPath && method === 'POST') {
      try {
        const data = await request.json();
        const { userId, priceId } = data;

        if (!userId || !priceId) {
          return new Response(JSON.stringify({ error: 'userId e priceId são obrigatórios' }), {
            status: 400,
            headers: { ...CORS, 'Content-Type': 'application/json' },
          });
        }

        // Gerar token único para o resultado
        const resultToken = btoa(`${userId}-${Date.now()}-${Math.random()}`)
          .replace(/[^a-zA-Z0-9]/g, '')
          .substring(0, 32);

        // Criar sessão de checkout no Stripe
        // Garantir que a URL tenha protocolo e não termine com barra
        const baseUrl = env.FRONTEND_URL?.trim().replace(/\/$/, '') || 'https://bomqi.com.br';
        const successUrl = `${baseUrl}/pagamento/sucesso?session_id={CHECKOUT_SESSION_ID}`;
        const cancelUrl = `${baseUrl}/pagamento`;

        const formData = new URLSearchParams();
        formData.append('mode', 'payment');
        formData.append('payment_method_types[]', 'card');
        formData.append('line_items[0][price]', priceId);
        formData.append('line_items[0][quantity]', '1');
        formData.append('success_url', successUrl);
        formData.append('cancel_url', cancelUrl);
        formData.append('metadata[userId]', userId);
        formData.append('metadata[resultToken]', resultToken);
        
        if (data.email && data.email.trim() && data.email.includes('@')) {
          formData.append('customer_email', data.email.trim());
        }

        const stripeResponse = await fetch(`${STRIPE_API}/checkout/sessions`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData.toString(),
        });

        const stripeData = await stripeResponse.json();

        if (!stripeResponse.ok) {
          return new Response(JSON.stringify({ error: stripeData.error?.message || 'Erro ao criar sessão' }), {
            status: 500,
            headers: { ...CORS, 'Content-Type': 'application/json' },
          });
        }

        // NÃO salvar checkout no KV (economiza escritas - dados temporários)

        return new Response(JSON.stringify({ 
          sessionId: stripeData.id,
          url: stripeData.url,
          resultToken 
        }), {
          headers: { ...CORS, 'Content-Type': 'application/json' },
        });
      } catch (error: any) {
        return new Response(JSON.stringify({ error: 'Erro ao processar checkout' }), {
          status: 500,
          headers: { ...CORS, 'Content-Type': 'application/json' },
        });
      }
    }

    // Webhook do Stripe (apenas valida, não salva nada no KV)
    if (isWebhookPath && method === 'POST') {
      try {
        const signature = request.headers.get('stripe-signature');
        if (!signature) {
          return new Response(JSON.stringify({ error: 'Assinatura não encontrada' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        const body = await request.text();
        const event = JSON.parse(body);

        // Apenas valida o evento - não salva nada no KV
        // O resultado será salvo quando o usuário acessar /pagamento/sucesso
        if (event.type === 'checkout.session.completed') {
          // Validação feita, mas não salva no KV (economiza escritas)
        }

        return new Response(JSON.stringify({ received: true }), {
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (error: any) {
        return new Response(JSON.stringify({ error: 'Erro ao processar webhook' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // Salvar resultado com token único (ÚNICO uso de KV - essencial)
    if (isResultsPath && method === 'POST') {
      try {
        const data = await request.json();
        const { token, resultData } = data;

        if (!token || !resultData) {
          return new Response(JSON.stringify({ error: 'token e resultData são obrigatórios' }), {
            status: 400,
            headers: { ...CORS, 'Content-Type': 'application/json' },
          });
        }

        // Otimizar estrutura de dados (remover campos desnecessários, compactar)
        const optimizedData = {
          u: resultData.userId,           // userId
          n: resultData.name,              // name
          w: resultData.whatsapp,          // whatsapp
          s: resultData.score,             // score
          i: resultData.iqScore,           // iqScore
          t: resultData.averageAnswerTime, // averageAnswerTime (opcional)
          c: resultData.celebrity,         // celebrity
          g: resultData.cognitiveStrength,  // cognitiveStrength
          p: resultData.percentile,         // percentile
          d: Date.now(),                   // createdAt (timestamp)
        };

        // ÚNICA escrita no KV - apenas resultados pagos
        await env.USER_DATA.put(`r-${token}`, JSON.stringify(optimizedData));

        return new Response(JSON.stringify({ success: true }), {
          headers: { ...CORS, 'Content-Type': 'application/json' },
        });
      } catch (error: any) {
        return new Response(JSON.stringify({ error: 'Erro ao salvar resultado' }), {
          status: 500,
          headers: { ...CORS, 'Content-Type': 'application/json' },
        });
      }
    }

    // Buscar resultado por token (ÚNICA leitura do KV - essencial)
    if (isResultsPath && method === 'GET') {
      try {
        const token = url.searchParams.get('token');

        if (!token) {
          return new Response(JSON.stringify({ error: 'token é obrigatório' }), {
            status: 400,
            headers: { ...CORS, 'Content-Type': 'application/json' },
          });
        }

        const resultData = await env.USER_DATA.get(`r-${token}`);

        if (!resultData) {
          return new Response(JSON.stringify({ error: 'Resultado não encontrado' }), {
            status: 404,
            headers: { ...CORS, 'Content-Type': 'application/json' },
          });
        }

        // Descompactar dados
        const data = JSON.parse(resultData);
        const expanded = {
          userId: data.u,
          name: data.n,
          whatsapp: data.w,
          score: data.s,
          iqScore: data.i,
          averageAnswerTime: data.t,
          celebrity: data.c,
          cognitiveStrength: data.g,
          percentile: data.p,
          createdAt: new Date(data.d).toISOString(),
        };

        return new Response(JSON.stringify(expanded), {
          headers: { ...CORS, 'Content-Type': 'application/json' },
        });
      } catch (error: any) {
        return new Response(JSON.stringify({ error: 'Erro ao buscar resultado' }), {
          status: 500,
          headers: { ...CORS, 'Content-Type': 'application/json' },
        });
      }
    }

    return new Response('Not Found', { status: 404 });
  },
};
