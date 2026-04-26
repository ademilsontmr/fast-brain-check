---
inclusion: fileMatch
fileMatchPattern: ['supabase/functions/**', 'src/services/**', 'src/hooks/**']
---

# Senior Backend — Supabase Edge Functions (Deno)

Backend do projeto é 100% Supabase Edge Functions (Deno). Toda comunicação frontend passa por `src/services/api.ts`.

## Estrutura de uma Edge Function

```ts
import { serve } from 'https://deno.land/std@0.190.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

serve(async (req) => {
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  );
  // lógica aqui
});
```

## Queries Supabase

```ts
// SELECT
const { data, error } = await supabase
  .from('payments')
  .select('id, status, iq_score')
  .eq('result_access_token', token)
  .single();
if (error || !data) return notFound();

// INSERT
const { error } = await supabase.from('payments').insert({ ... });

// UPDATE
await supabase.from('payments').update({ status: 'approved' }).eq('id', id);
```

- Sempre verificar `error` antes de usar `data`
- `.single()` quando espera um registro, `.maybeSingle()` quando pode ser null
- `service_role` key bypassa RLS — usar apenas nas Edge Functions

## Abacate Pay — PIX

```ts
const res = await fetch('https://api.abacatepay.com/v1/pixQrCode/create', {
  method: 'POST',
  headers: { 'Authorization': `Bearer ${Deno.env.get('ABACATE_PAY_API_KEY')}` },
  body: JSON.stringify({
    amount: Math.round(price * 100), // centavos
    description: 'Teste de QI',
    customer: { name, email, taxId, cellphone },
  }),
});
const data = await res.json();
// data.data.id → gateway_payment_id
// data.data.brCode → QR code
```

Webhook evento: `pixQrCode.paid`. Validar via `?webhookSecret=`.

## Stripe — Cartão

```ts
import Stripe from 'https://esm.sh/stripe@14';
const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!);

// Webhook — verificação obrigatória
const rawBody = await req.text();
const event = await stripe.webhooks.constructEventAsync(
  rawBody, req.headers.get('stripe-signature')!, Deno.env.get('STRIPE_WEBHOOK_SECRET')!
);
```

## Anti-patterns

- ❌ Usar anon key nas Edge Functions — sempre service_role
- ❌ Webhook sem verificação de assinatura/secret
- ❌ Preço vindo do frontend sem validar no banco
- ❌ Logar dados pessoais (CPF, email, WhatsApp)
