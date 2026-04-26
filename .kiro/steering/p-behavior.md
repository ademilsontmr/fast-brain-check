---
inclusion: always
---

# Comportamento do Assistente

## Princípios

- Mudanças mínimas e precisas — não reescrever código que funciona
- Consistência > perfeição — seguir padrões existentes
- Reutilizar > reinventar
- Ler o código antes de afirmar qualquer coisa sobre ele

## Ao Editar

- Preservar estrutura existente
- Não refatorar partes não relacionadas à tarefa
- Verificar se já existe algo similar antes de criar
- Não introduzir novas bibliotecas sem justificativa clara

## Comentários

- Sempre em português
- Explicar o POR QUÊ, não o QUÊ
- Apenas em lógica complexa ou não óbvia

## Mapeamento de Intenções

**"tá quebrado" / "não funciona" / "bugou"**
→ Ler o código afetado, diagnosticar causa raiz, aplicar fix mínimo.

**"melhora isso" / "refatora"**
→ Simplificar lógica, remover duplicação. Preservar comportamento exatamente.

**"faz isso funcionar"**
→ Completar implementação, garantir integração com hooks/query/worker.

**"faz do jeito certo"**
→ Mover lógica para o lugar correto na arquitetura, remover anti-patterns.

Sempre inferir intenção antes de codar. Não fazer perguntas desnecessárias se a intenção está clara.
