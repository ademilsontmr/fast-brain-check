import { Hono } from 'hono';
import { cors } from 'hono/cors';
import Stripe from 'stripe';
import { v4 as uuidv4 } from 'uuid';

// --- Tipos e Interfaces ---
export interface Env {
	DB: D1Database;
	STRIPE_SECRET_KEY: string;
	STRIPE_WEBHOOK_SECRET: string;
	ABACATE_PAY_API_KEY: string;
	ABACATE_PAY_WEBHOOK_SECRET: string;
	FRONTEND_URL: string;
}

interface UserData {
	name: string;
	email: string;
	cpf: string;
	whatsapp: string;
	score: number;
	averageAnswerTime?: number;
}

interface Product {
	id: string;
	name: string;
	price: number;
	stripePriceId: string;
}

// --- Inicialização ---
const app = new Hono<{ Bindings: Env }>();

// --- Middlewares ---
app.use('/*', cors({
	origin: (origin) => {
		// Permite acesso do frontend e variantes (ex: preview do Cloudflare Pages)
		const allowedOrigin = new URL(origin);
		const frontendUrl = new URL(c.env.FRONTEND_URL);
		if (allowedOrigin.hostname.endsWith(frontendUrl.hostname)) {
			return origin;
		}
		return frontendUrl.origin; // Retorna a URL base como padrão
	},
	allowMethods: ['POST', 'GET', 'OPTIONS'],
	allowHeaders: ['Content-Type', 'Authorization'],
}));

// --- Funções Auxiliares ---
const anonymizeData = (cpf: string, email: string, whatsapp: string) => {
	const anonymizedCpf = cpf ? `${cpf.substring(0, 3)}.***.***-${cpf.substring(cpf.length - 2)}` : 'N/A';
	const anonymizedEmail = email ? `${email.substring(0, 2)}***@***${email.substring(email.lastIndexOf('.'))}`: 'N/A';
	const anonymizedWhatsapp = whatsapp ? `${whatsapp.substring(0, 4)}****${whatsapp.substring(whatsapp.length - 4)}` : 'N/A';
	return { anonymizedCpf, anonymizedEmail, anonymizedWhatsapp };
};

const calculateIQ = (score: number, totalQuestions: number, averageTime?: number) => {
    const baseIQ = 70 + (score / totalQuestions) * 80;
    const timeBonus = averageTime ? Math.max(0, 15 - averageTime) : 0;
    const iqScore = Math.round(Math.min(155, baseIQ + timeBonus));
    const percentile = Math.round((iqScore - 70) / 85 * 100);
    return { iqScore, percentile };
};

const getCelebrityComparison = (iq: number) => {
    if (iq >= 150) return "Albert Einstein";
    if (iq >= 140) return "Stephen Hawking";
    if (iq >= 130) return "Bill Gates";
    if (iq >= 120) return "Elon Musk";
    if (iq >= 110) return "Oprah Winfrey";
    return "indivíduo médio";
};

const getCognitiveStrength = (iq: number) => {
    if (iq >= 130) return "Raciocínio Lógico-Abstrato";
    if (iq >= 115) return "Pensamento Crítico e Analítico";
    if (iq >= 100) return "Resolução de Problemas Complexos";
    return "Processamento de Informações";
};


// --- Rotas da API ---

// GET /api/products - Lista os produtos disponíveis
app.get('/api/products', async (c) => {
	try {
		const { results } = await c.env.DB.prepare(`SELECT id, name, price, stripe_price_id as stripePriceId FROM "abacate-pay-products" WHERE is_active = 1`).all<Product>();
		return c.json(results);
	} catch (e: any) {
		console.error("Erro ao buscar produtos:", e.message);
		return c.json({ error: 'Falha ao buscar produtos.' }, 500);
	}
});

// POST /api/create-payment/card - Cria uma sessão de pagamento com Stripe (Cartão)
app.post('/api/create-payment/card', async (c) => {
	const { productId, userData } = await c.req.json<{ productId: string, userData: UserData }>();

	if (!productId || !userData) {
		return c.json({ error: 'Dados insuficientes para criar o pagamento.' }, 400);
	}

	// 1. Validar produto e preço no backend
	const product = await c.env.DB.prepare(`SELECT price, stripe_price_id as stripePriceId FROM "abacate-pay-products" WHERE id = ? AND is_active = 1`)
		.bind(productId).first<Product>();

	if (!product) {
		return c.json({ error: 'Produto não encontrado ou inativo.' }, 404);
	}

	const stripe = new Stripe(c.env.STRIPE_SECRET_KEY);
	const resultAccessToken = uuidv4();

	// 2. Inserir registro de pagamento no DB com status 'pending'
	try {
		const { iqScore, percentile } = calculateIQ(userData.score, 30, userData.averageAnswerTime);
		const celebrity = getCelebrityComparison(iqScore);
		const cognitiveStrength = getCognitiveStrength(iqScore);

		await c.env.DB.prepare(
			`INSERT INTO "abacate-pay-payments" (id, product_id, user_name, user_email, user_cpf, user_whatsapp, amount, status, gateway, result_access_token, score, iq_score, percentile, celebrity, cognitive_strength, average_answer_time)
       VALUES (?, ?, ?, ?, ?, ?, ?, 'pending', 'stripe', ?, ?, ?, ?, ?, ?, ?)`
		).bind(
			uuidv4(), productId, userData.name, userData.email, userData.cpf, userData.whatsapp, product.price,
			resultAccessToken, userData.score, iqScore, percentile, celebrity, cognitiveStrength, userData.averageAnswerTime
		).run();

	} catch (e: any) {
		console.error("Erro ao inserir pagamento no DB:", e.message);
		return c.json({ error: 'Falha ao iniciar o processo de pagamento.' }, 500);
	}

	// 3. Criar sessão de checkout no Stripe
	const session = await stripe.checkout.sessions.create({
		payment_method_types: ['card'],
		line_items: [{ price: product.stripePriceId, quantity: 1 }],
		mode: 'payment',
		success_url: `${c.env.FRONTEND_URL}/pagamento/sucesso?token=${resultAccessToken}`,
		cancel_url: `${c.env.FRONTEND_URL}/pagamento`,
		customer_email: userData.email,
		metadata: {
			resultAccessToken: resultAccessToken,
		},
	});

	return c.json({ checkoutUrl: session.url });
});

// POST /api/create-payment/pix - Cria um pagamento PIX com Abacate Pay
app.post('/api/create-payment/pix', async (c) => {
	const { productId, userData } = await c.req.json<{ productId: string, userData: UserData }>();

	if (!productId || !userData) {
		return c.json({ error: 'Dados insuficientes para criar o pagamento.' }, 400);
	}

	// 1. Validar produto e preço no backend
	const product = await c.env.DB.prepare(`SELECT price FROM "abacate-pay-products" WHERE id = ? AND is_active = 1`)
		.bind(productId).first<{ price: number }>();

	if (!product) {
		return c.json({ error: 'Produto não encontrado ou inativo.' }, 404);
	}

	const resultAccessToken = uuidv4();
	const paymentId = uuidv4();

	// 2. Inserir registro de pagamento no DB com status 'pending'
	try {
		const { iqScore, percentile } = calculateIQ(userData.score, 30, userData.averageAnswerTime);
		const celebrity = getCelebrityComparison(iqScore);
		const cognitiveStrength = getCognitiveStrength(iqScore);

		await c.env.DB.prepare(
			`INSERT INTO "abacate-pay-payments" (id, product_id, user_name, user_email, user_cpf, user_whatsapp, amount, status, gateway, result_access_token, score, iq_score, percentile, celebrity, cognitive_strength, average_answer_time)
       VALUES (?, ?, ?, ?, ?, ?, ?, 'pending', 'abacate-pay', ?, ?, ?, ?, ?, ?, ?)`
		).bind(
			paymentId, productId, userData.name, userData.email, userData.cpf, userData.whatsapp, product.price,
			resultAccessToken, userData.score, iqScore, percentile, celebrity, cognitiveStrength, userData.averageAnswerTime
		).run();
	} catch (e: any) {
		console.error("Erro ao inserir pagamento PIX no DB:", e.message);
		return c.json({ error: 'Falha ao iniciar o processo de pagamento.' }, 500);
	}

	// 3. Criar cobrança na Abacate Pay
	const abacateResponse = await fetch('https://api.abacatepay.com.br/v1/charges', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${c.env.ABACATE_PAY_API_KEY}`,
		},
		body: JSON.stringify({
			amount: product.price * 100, // Em centavos
			customer: {
				name: userData.name,
				email: userData.email,
				document: userData.cpf.replace(/\D/g, ''),
			},
			payment_method: 'pix',
			reference: resultAccessToken, // Usar nosso token como referência
		}),
	});

	if (!abacateResponse.ok) {
		const errorBody = await abacateResponse.text();
		console.error("Erro da Abacate Pay:", errorBody);
		return c.json({ error: 'Falha ao gerar cobrança PIX.' }, 500);
	}

	const abacateData = await abacateResponse.json();

	return c.json({
		qrCode: abacateData.pix_qr_code,
		qrCodeText: abacateData.pix_emv,
		resultAccessToken,
	});
});

// --- Webhooks ---

// POST /api/webhook/stripe - Recebe confirmações de pagamento do Stripe
app.post('/api/webhook/stripe', async (c) => {
	const event = c.req.body();

	// Registrar o evento para idempotência
	try {
		await c.env.DB.prepare(`INSERT INTO "abacate-pay-webhook_processing_log" (event_id, gateway) VALUES (?, 'stripe')`).bind(event.id).run();
	} catch (e: any) {
		// ... (lógica de erro sem alteração) ...
	}

	if (event.type === 'checkout.session.completed') {
		const session = event.data.object as Stripe.Checkout.Session;
		const resultAccessToken = session.metadata?.resultAccessToken;

		if (resultAccessToken) {
			// Atualiza o status do pagamento para 'approved'
			const { success } = await c.env.DB.prepare(
				`UPDATE "abacate-pay-payments" SET status = 'approved', updated_at = CURRENT_TIMESTAMP WHERE result_access_token = ? AND status = 'pending'`
			).bind(resultAccessToken).run();

			if (success) {
				// Anonimizar dados após confirmação
				const payment = await c.env.DB.prepare(`SELECT user_cpf, user_email, user_whatsapp FROM "abacate-pay-payments" WHERE result_access_token = ?`)
					.bind(resultAccessToken).first<{ user_cpf: string, user_email: string, user_whatsapp: string }>();
				
				if (payment) {
					const { anonymizedCpf, anonymizedEmail, anonymizedWhatsapp } = anonymizeData(payment.user_cpf, payment.user_email, payment.user_whatsapp);
					await c.env.DB.prepare(`UPDATE "abacate-pay-payments" SET user_cpf = ?, user_email = ?, user_whatsapp = ? WHERE result_access_token = ?`)
						.bind(anonymizedCpf, anonymizedEmail, anonymizedWhatsapp, resultAccessToken).run();
				}
			}
		}
	}

	return c.json({ received: true });
});

// POST /api/webhook/abacate - Recebe confirmações de pagamento da Abacate Pay
app.post('/api/webhook/abacate', async (c) => {
	const event = c.req.body();

	// Registrar o evento para idempotência
	try {
		await c.env.DB.prepare(`INSERT INTO "abacate-pay-webhook_processing_log" (event_id, gateway) VALUES (?, 'abacate-pay')`).bind(event.id).run();
	} catch (e: any) {
		// ... (lógica de erro sem alteração) ...
	}

	if (body.event === 'charge.paid') {
		const resultAccessToken = body.data.reference;
		if (resultAccessToken) {
			// Atualiza o status do pagamento para 'approved'
			const { success } = await c.env.DB.prepare(
				`UPDATE "abacate-pay-payments" SET status = 'approved', updated_at = CURRENT_TIMESTAMP WHERE result_access_token = ? AND status = 'pending'`
			).bind(resultAccessToken).run();

			if (success) {
				// Anonimizar dados após confirmação
				const payment = await c.env.DB.prepare(`SELECT user_cpf, user_email, user_whatsapp FROM "abacate-pay-payments" WHERE result_access_token = ?`)
					.bind(resultAccessToken).first<{ user_cpf: string, user_email: string, user_whatsapp: string }>();
				
				if (payment) {
					const { anonymizedCpf, anonymizedEmail, anonymizedWhatsapp } = anonymizeData(payment.user_cpf, payment.user_email, payment.user_whatsapp);
					await c.env.DB.prepare(`UPDATE "abacate-pay-payments" SET user_cpf = ?, user_email = ?, user_whatsapp = ? WHERE result_access_token = ?`)
						.bind(anonymizedCpf, anonymizedEmail, anonymizedWhatsapp, resultAccessToken).run();
				}
			}
		}
	}

	return c.json({ received: true });
});

// --- Rota de Resultados ---

// GET /api/results?token=... - Busca o resultado de um teste pago
app.get('/api/results', async (c) => {
	const token = c.req.query('token');
	if (!token) {
		return c.json({ error: 'Token de acesso é obrigatório.' }, 400);
	}

	try {
		const result = await c.env.DB.prepare(
			`SELECT id, status, user_name as name, score, iq_score as iqScore, percentile, celebrity, cognitive_strength as cognitiveStrength, average_answer_time as averageAnswerTime
       FROM "abacate-pay-payments" WHERE result_access_token = ?`
		).bind(token).first();

		if (!result) {
			return c.json({ error: 'Resultado não encontrado ou token inválido.' }, 404);
		}

		return c.json(result);
	} catch (e: any) {
		console.error("Erro ao buscar resultado:", e.message);
		return c.json({ error: 'Falha ao buscar resultado.' }, 500);
	}
});

// GET /api/rank/:userId - Busca o ranking de um usuário
app.get('/api/rank/:userId', async (c) => {
    const userId = c.req.param('userId');

    try {
        // Esta query é um exemplo e pode precisar de otimização em um DB real
        const rankQuery = `
            WITH UserRank AS (
                SELECT 
                    id,
                    iq_score,
                    RANK() OVER (ORDER BY iq_score DESC, created_at ASC) as position
                FROM "abacate-pay-payments"
                WHERE status = 'approved'
            )
            SELECT position FROM UserRank WHERE id = ?;
        `;
        
        const totalQuery = `SELECT COUNT(id) as total FROM "abacate-pay-payments" WHERE status = 'approved';`;

        const rankResult = await c.env.DB.prepare(rankQuery).bind(userId).first<{ position: number }>();
        const totalResult = await c.env.DB.prepare(totalQuery).first<{ total: number }>();

        if (!rankResult) {
            return c.json({ error: 'Usuário não encontrado no ranking.' }, 404);
        }

        return c.json({
            position: rankResult.position,
            total: totalResult?.total || 0,
        });

    } catch (e: any) {
        console.error("Erro ao buscar ranking:", e.message);
        return c.json({ error: 'Falha ao calcular o ranking.' }, 500);
    }
});

export default app;
