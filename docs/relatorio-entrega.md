# Relatório de Entrega — BomQI

**Data:** 25/04/2026  
**Projeto:** Fast Brain Check (BomQI) — `bomqi.com.br`

---

## Stack Final

- **Frontend:** React 18 + TypeScript + Vite + Tailwind + shadcn/ui — deploy Cloudflare Pages
- **Backend:** Supabase Edge Functions (Deno)
- **Banco:** Supabase PostgreSQL
- **Pagamentos:** Abacate Pay (PIX)

---

## Migração: Cloudflare Worker + D1 → Supabase

A maior mudança do projeto foi a **migração completa de infraestrutura**:

### Antes
- Backend: Cloudflare Worker (`worker/index.ts`) com Hono
- Banco: Cloudflare D1 (SQLite) com migrations (`migrations/`)
- Pagamentos: Stripe (cartão) + Abacate Pay (PIX)
- Config: `wrangler.toml`, `seed.sql`
- API no frontend: `VITE_API_URL` → `/api`

### Depois
- Backend: Supabase Edge Functions (Deno) — 4 functions independentes
- Banco: Supabase PostgreSQL com RLS
- Pagamentos: Abacate Pay (PIX) apenas — Stripe removido
- Config: variáveis `VITE_SUPABASE_*`
- API no frontend: `VITE_SUPABASE_FUNCTIONS_URL` → Edge Functions

### Arquivos removidos na migração
- `worker/index.ts` — 378 linhas de Cloudflare Worker com Hono
- `functions/create-payment/index.ts` — versão antiga (Cloudflare)
- `functions/payment-webhook/index.ts` — versão antiga (Cloudflare)
- `migrations/0000_create_initial_tables.sql` — schema D1
- `wrangler.toml` — config Cloudflare
- `seed.sql` — seed D1

---

## Edge Functions criadas (Supabase/Deno)

### `create-payment`
- Recebe dados do usuário e produto
- Valida produto e preço no banco (previne price manipulation)
- Cria cobrança PIX via Abacate Pay
- Salva payment no Supabase com status `pending`
- Retorna `brCode` (QR code) e `accessToken`

### `payment-webhook`
- Recebe evento `pixQrCode.paid` da Abacate Pay
- Valida `webhookSecret` via query param
- Idempotência via `webhook_processing_log` (evita processar duplicado)
- Atualiza status do payment para `approved`

### `get-results`
- Busca resultado completo via `result_access_token`
- Retorna dados do pagamento + score + IQ + percentil + celebridade

### `get-rank`
- Retorna posição do usuário no ranking global
- Usa função SQL `get_user_rank()` com window function `RANK()`

---

## Banco de dados (Supabase PostgreSQL)

### Tabelas
- `products` — catálogo de produtos com preço validado no backend
- `payments` — pagamentos com dados do usuário, score, IQ, status
- `webhook_processing_log` — log de idempotência dos webhooks

### Configurações
- RLS habilitado nas 3 tabelas
- Policy de leitura pública apenas em `products` ativos
- Trigger `updated_at` automático em `payments`
- Função SQL `get_user_rank()` com `SECURITY DEFINER`
- 5 índices: `status`, `gateway`, `result_access_token`, `gateway_payment_id`, `user_cpf`
- Produto seed: `fast_brain_check_test` — R$ 29,90

---

## Frontend — refatorações

### `src/services/api.ts`
- Removida integração com Stripe (`createCardPayment`)
- Removida URL `VITE_API_URL` → substituída por `VITE_SUPABASE_FUNCTIONS_URL`
- Adicionado helper `callFunction()` com retry automático (cold start das Edge Functions)
- Adicionado helper `getQuizData()` que lê score e tempo do localStorage
- Adicionado `getResultByToken()` para polling de status do pagamento

### `src/pages/Payment.tsx`
- Removido botão de cartão (Stripe) — apenas PIX
- Removido `SocialProofCarousel`
- Adicionado **polling automático** a cada 3s enquanto modal PIX está aberta
- Ao detectar `status === 'approved'`, redireciona para `/resultado-completo?token=...`
- Código PIX exibido em linha única com truncate (sem overflow)
- Lógica de reutilização de PIX existente (evita gerar novo QR se já tem um válido)

### `src/pages/Test.tsx`
- Refatorado timer: refs substituem estado para evitar closure stale
- Limpeza automática do localStorage ao iniciar novo quiz
- Salvamento de `quizAverageAnswerTime`, `quizTimeUsed`, `quizTimeUp`, `quizGender`, `quizAgeRange`
- Coleta de tempo por questão para cálculo de tempo médio de resposta

### `src/pages/CompleteResult.tsx`
- Busca resultado via `token` na query string
- Exibe IQ, percentil, celebridade, força cognitiva, ranking

### `src/pages/BasicResult.tsx`
- Exibe resultado parcial (sem pagar) com IQ "bloqueado"

### `src/pages/UserData.tsx`
- Formulário com validação Zod: nome, email, CPF, WhatsApp
- Salva dados no localStorage para uso no pagamento

### `src/App.tsx`
- Removidas rotas de Stripe (`/pagamento/sucesso`, `/pagamento/cancelado`)

### `src/lib/session.ts` *(novo)*
- Helpers `markFreeResult()` e `markPremiumResult()` para controle de sessão

---
