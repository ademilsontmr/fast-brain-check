---
inclusion: always
---

# Contexto do Projeto — Fast Brain Check (BomQI)

Quiz de teste de QI com paywall. Usuário faz o quiz, vê resultado parcial, paga para ver resultado completo com score detalhado, percentil, comparação com celebridades e ranking.

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS + shadcn/ui (Radix UI)
- React Router v6
- TanStack Query — data fetching
- React Hook Form + Zod — formulários
- **Backend: Supabase Edge Functions (Deno)**
- **Banco: Supabase PostgreSQL**
- **Pagamentos: Stripe (cartão) + Abacate Pay (PIX)**
- Deploy: Cloudflare Pages (frontend) + Supabase (backend)

## Estrutura

```
src/
├── components/ui/        # shadcn/ui
├── pages/                # rotas
├── hooks/                # custom hooks
├── services/api.ts       # chamadas às Edge Functions
├── types/quiz.ts         # tipos e lógica de QI
└── lib/utils.ts

supabase/
├── schema.sql            # tabelas Postgres
├── rls.sql               # Row Level Security
├── functions.sql         # funções SQL (ranking)
└── functions/
    ├── create-payment/   # Stripe + Abacate Pay PIX
    ├── payment-webhook/  # webhooks Stripe + Abacate Pay
    ├── get-results/      # busca resultado por token
    └── get-rank/         # ranking do usuário
```

## Fluxo Principal

```
Quiz → UserData (coleta dados) → Payment (Stripe/PIX) → Resultado
```

1. Usuário faz quiz → score salvo no `localStorage`
2. Preenche dados pessoais (`/dados-usuario`)
3. Escolhe pagamento (`/pagamento`) → Stripe redireciona ou PIX abre modal com QR
4. Webhook confirma pagamento → status `approved`
5. Resultado acessado via `resultAccessToken` (`/resultado?token=...`)

## Variáveis de Ambiente

Frontend (`.env`):
- `VITE_SUPABASE_FUNCTIONS_URL` — ex: `https://<ref>.supabase.co/functions/v1`

Edge Functions (Supabase Dashboard → Settings → Edge Functions):
- `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`
- `ABACATE_PAY_API_KEY`, `ABACATE_PAY_WEBHOOK_SECRET`
- `FRONTEND_URL`
- `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` (injetadas automaticamente)

## Convenções

- Código: inglês | Comentários e UI: português brasileiro
- Path alias: `@/*` → `./src/*`
- Nunca commitar chaves de API
