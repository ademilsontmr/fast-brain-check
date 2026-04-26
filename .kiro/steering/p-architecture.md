---
inclusion: always
---

# Arquitetura e Padrões

## Separação de Responsabilidades

```
Components → services/api.ts → Edge Functions (Deno) → Supabase PostgreSQL
```

- Components: apenas UI, delega chamadas para `services/api.ts`
- `services/api.ts`: todas as chamadas HTTP às Edge Functions, tipagem das respostas
- `supabase/functions/`: lógica de negócio, validação, banco de dados

## Regras Fundamentais

**Nunca chamar as Edge Functions diretamente em componentes** — sempre via `services/api.ts`.

**Data fetching com TanStack Query:**
```tsx
// ✅ hooks/useResult.ts
export const useResult = (token: string) =>
  useQuery({
    queryKey: ['result', token],
    queryFn: () => getResultByToken(token),
    enabled: !!token,
  });
```

**Formulários com React Hook Form + Zod:**
```tsx
const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  taxId: z.string().regex(/^\d{11}$/),
});
```

**Edge Function — padrão:**
```ts
// 1. Validar input
// 2. Validar produto no banco (previne price manipulation)
// 3. Chamar gateway externo
// 4. Salvar no Supabase
// 5. Retornar resposta
```

## Anti-patterns

- ❌ `fetch(...)` direto em componentes — usar `services/api.ts`
- ❌ `useEffect` para data fetching
- ❌ Lógica de negócio no JSX
- ❌ Calcular QI no frontend (deve ser na Edge Function)
- ❌ Confiar em valores de preço vindos do frontend
- ❌ Usar anon key nas Edge Functions — sempre service_role
