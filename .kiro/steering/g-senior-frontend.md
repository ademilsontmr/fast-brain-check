---
inclusion: fileMatch
fileMatchPattern: ['**/*.tsx', '**/*.ts', 'src/**']
---

# Senior Frontend — React + Tailwind + shadcn/ui

Stack: React 18 + TypeScript + Vite + Tailwind + shadcn/ui + TanStack Query.

## Componentes

- Functional components com arrow functions
- Máximo ~150 linhas — extrair se crescer
- Early returns para evitar ternários aninhados

```tsx
// ✅
const ResultCard = ({ status, iqScore }: Props) => {
  if (status === 'pending') return <PendingState />;
  if (!iqScore) return <LoadingState />;
  return <ScoreDisplay iqScore={iqScore} />;
};
```

## Data Fetching

Nunca `useEffect` para buscar dados — sempre TanStack Query:

```tsx
// ✅ hooks/useResult.ts
export const useResult = (token: string) =>
  useQuery({
    queryKey: ['result', token],
    queryFn: () => getResultByToken(token),
    enabled: !!token,
  });
```

## Formulários

React Hook Form + Zod, sempre:

```tsx
const schema = z.object({
  name: z.string().min(3, 'Nome muito curto'),
  email: z.string().email('Email inválido'),
  taxId: z.string().regex(/^\d{11}$/, 'CPF inválido'),
});
```

## Tailwind

- Cores semânticas: `text-primary`, `text-destructive`, `bg-muted` — nunca `text-red-500`
- Escala consistente: `gap-4`, `gap-6`, `gap-8` (múltiplos de 4)
- Mobile-first: `text-base md:text-lg`

## Imports

Diretos, não barrel:
```tsx
// ❌
import { Button, Card } from '@/components/ui'
// ✅
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
```

## Anti-patterns

- ❌ `fetch('/api/...')` direto em componentes — usar `services/api.ts`
- ❌ `useEffect` para data fetching
- ❌ Lógica de negócio no JSX
- ❌ Estado global para server state — usar TanStack Query
