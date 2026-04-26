---
inclusion: always
---

# Segurança — Boas Práticas

## Worker (Cloudflare)

- Nunca confiar em valores de preço vindos do frontend — sempre validar no banco
- Webhooks sempre com verificação de assinatura/secret antes de processar
- Prepared statements em todas as queries D1 — sem concatenação de strings SQL
- Variáveis sensíveis via `wrangler secret put`, nunca hardcoded

**Stripe webhook — verificação obrigatória:**
```ts
const rawBody = await c.req.text();
const signature = c.req.header('stripe-signature') ?? '';
const event = await stripe.webhooks.constructEventAsync(rawBody, signature, c.env.STRIPE_WEBHOOK_SECRET);
```

**Abacate Pay webhook — verificação obrigatória:**
```ts
const secret = new URL(c.req.url).searchParams.get('webhookSecret');
if (!secret || secret !== c.env.ABACATE_PAY_WEBHOOK_SECRET) {
  return c.json({ error: 'Unauthorized' }, 401);
}
```

## Validação de Input no Worker

Sempre validar antes de inserir no banco:
```ts
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const cpfDigits = userData.cpf?.replace(/\D/g, '') ?? '';
if (!userData.name?.trim()) return c.json({ error: 'Nome inválido' }, 400);
if (!emailRegex.test(userData.email)) return c.json({ error: 'Email inválido' }, 400);
if (cpfDigits.length !== 11) return c.json({ error: 'CPF inválido' }, 400);
```

## Dados Pessoais (LGPD)

- Anonimizar CPF, email e WhatsApp após pagamento aprovado
- Nunca logar dados pessoais em `console.log`
- `worker/.dev.vars` no `.gitignore` — nunca commitar chaves

## Frontend

- Validação com Zod antes de enviar ao worker
- Nunca processar pagamento direto no frontend
- Nunca confiar no status de pagamento retornado pelo frontend

## Anti-patterns

- ❌ Chaves de API hardcoded
- ❌ Webhook sem verificação de assinatura/secret
- ❌ Preço vindo do frontend sem validar no banco
- ❌ SQL por concatenação de strings
- ❌ Logar dados pessoais
