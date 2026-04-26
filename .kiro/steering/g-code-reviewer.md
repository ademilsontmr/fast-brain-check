---
inclusion: manual
---

# Code Reviewer — Checklist

Use ao revisar PRs ou auditar código do projeto.

## 🔴 Segurança (bloqueia deploy)

- [ ] Webhook Stripe valida assinatura com `constructEventAsync`
- [ ] Webhook Abacate Pay valida `webhookSecret` via query param
- [ ] Nenhuma query D1 por concatenação de string — só `.bind()`
- [ ] Preço sempre validado no banco, nunca vindo do frontend
- [ ] Nenhuma chave de API hardcoded ou commitada

## 🟡 Correção

- [ ] Todas as rotas do worker validam input antes de processar
- [ ] Erros do D1 tratados com try/catch e resposta adequada
- [ ] `gateway_payment_id` salvo após criar cobrança PIX
- [ ] Anonimização de dados pessoais após pagamento aprovado
- [ ] Idempotência nos webhooks via `webhook_processing_log`

## 🟠 Qualidade

- [ ] Nenhum `fetch('/api/...')` direto em componentes — via `services/api.ts`
- [ ] Nenhum `useEffect` para data fetching — TanStack Query
- [ ] Cálculo de QI feito no worker, não no frontend
- [ ] Imports diretos, não barrel (`from '@/components/ui/button'`)
- [ ] Cores semânticas no Tailwind, não hardcoded

## ✅ O que está bem feito neste projeto

- Prepared statements em todas as queries D1
- Idempotência nos webhooks
- Anonimização LGPD após pagamento
- Validação de produto no backend antes de criar pagamento
- Schema do banco com índices relevantes
