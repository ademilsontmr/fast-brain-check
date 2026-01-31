# Guia de Melhorias para Artigos do Blog BomQI

## Objetivo
Aumentar o valor dos artigos para aprovação no Google AdSense, adicionando conteúdo original, dados científicos e interlinks estratégicos.

## Checklist de Melhorias por Artigo

### 1. Adicionar Componente de Interlinks
```tsx
import ArticleInterlinks from "@/components/ArticleInterlinks";

// No corpo do artigo:
<ArticleInterlinks 
  title="📚 Artigos Relacionados"
  links={[
    {
      text: "Título do artigo relacionado",
      url: "/blog/slug-do-artigo",
      description: "Breve descrição do conteúdo"
    }
  ]}
/>
```

### 2. Adicionar Estudos Científicos
Incluir boxes com referências a estudos reais:

```tsx
<div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
    <TrendingUp className="w-5 h-5 text-blue-600" />
    O que a ciência diz
  </h3>
  <p className="text-slate-700 mb-3">
    [Descrição do estudo e resultados]
  </p>
  <p className="text-slate-700">
    <strong>Fonte:</strong> [Autor et al. (Ano). "Título". Revista, Volume(Número), Páginas.]
  </p>
</div>
```

### 3. Adicionar Casos Reais/Depoimentos
```tsx
<div className="bg-purple-50 border border-purple-200 rounded-lg p-5 my-6">
  <h4 className="font-bold mb-3 text-purple-900">💡 Caso Real: [Nome], [idade] anos</h4>
  <p className="text-sm text-slate-700 mb-2">
    "[Depoimento ou história]"
  </p>
  <p className="text-xs text-slate-600 italic">
    *Relato anônimo coletado em pesquisa com usuários do BomQI, 2024
  </p>
</div>
```

### 4. Adicionar Exemplos Práticos
```tsx
<div className="bg-green-50 border border-green-200 rounded-lg p-5 my-6">
  <h4 className="font-bold mb-2 flex items-center gap-2">
    <Target className="w-4 h-4 text-green-600" />
    Exemplo Prático: [Título]
  </h4>
  <ul className="text-sm space-y-2 text-slate-700">
    <li>• <strong>Passo 1:</strong> [Descrição]</li>
    <li>• <strong>Passo 2:</strong> [Descrição]</li>
    <li>• <strong>Resultado esperado:</strong> [Descrição]</li>
  </ul>
</div>
```

### 5. Adicionar Dados Estatísticos
```tsx
<div className="grid md:grid-cols-2 gap-4 my-6">
  <Card className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
    <h4 className="font-bold mb-2 flex items-center gap-2">
      <Zap className="w-5 h-5 text-blue-600" />
      [Título da Estatística]
    </h4>
    <p className="text-2xl font-bold text-blue-700 mb-2">[Número]%</p>
    <p className="text-sm text-slate-700">[Descrição]</p>
  </Card>
</div>
```

### 6. Expandir Conclusão com Resultados Esperados
```tsx
<div className="bg-gradient-to-r from-primary/10 to-purple-100 border border-primary/30 rounded-lg p-6 my-8">
  <h3 className="text-xl font-bold mb-3">📈 Resultados Esperados</h3>
  <p className="text-slate-700 mb-4">
    [Descrição dos resultados]
  </p>
  <ul className="space-y-2 text-slate-700">
    <li>• <strong>[Prazo curto]:</strong> [Resultado]</li>
    <li>• <strong>[Prazo médio]:</strong> [Resultado]</li>
    <li>• <strong>[Prazo longo]:</strong> [Resultado]</li>
  </ul>
</div>
```

## Estratégia de Interlinks

### Artigos Principais (Hub)
- Como Aumentar QI
- O que é QI
- QI Médio por País
- Como Melhorar o Cérebro

### Artigos de Suporte (Spoke)
Devem linkar de volta para os hubs e entre si quando relevante.

### Padrão de Interlinks por Categoria

**Artigos sobre "Como Melhorar":**
- Linkar para: O que é QI, Neuroplasticidade, QI pode mudar
- Linkar entre si: Como Aumentar QI ↔ Como Melhorar Cérebro

**Artigos sobre "QI Médio de X":**
- Linkar para: O que é QI, QI Médio por Profissão, QI Normal
- Linkar entre profissões similares

**Artigos sobre "QI e X" (sono, exercício, etc):**
- Linkar para: Como Aumentar QI, O que é QI
- Linkar para artigos relacionados ao tema específico

## Quantidade Mínima de Conteúdo

- **Mínimo:** 1.500 palavras
- **Ideal:** 2.000-3.000 palavras
- **Incluir:** 3-5 seções únicas (estudos, casos, exemplos)
- **Interlinks:** 3-5 links internos por artigo

## Ícones Úteis (Lucide React)

```tsx
import { 
  TrendingUp,    // Estudos/Dados
  Target,        // Exemplos práticos
  Lightbulb,     // Dicas/Insights
  AlertCircle,   // Avisos
  CheckCircle2,  // Confirmações
  Zap,           // Energia/Ação
  Brain,         // Inteligência
  Heart,         // Emoção
  Users          // Social
} from "lucide-react";
```

## Prioridade de Artigos para Melhorar

### Alta Prioridade (Mais visitados)
1. Como Aumentar QI ✅
2. O que é QI
3. QI Normal
4. Como Melhorar Cérebro
5. QI Médio Brasil
6. Teste QI Grátis
7. Como se Preparar para Teste QI
8. QI Alto Características

### Média Prioridade
- Artigos sobre QI por profissão
- Artigos sobre QI e saúde (sono, exercício, etc)
- Artigos sobre desenvolvimento cognitivo

### Baixa Prioridade
- Artigos muito específicos
- Artigos com menos tráfego

## Checklist Final por Artigo

- [ ] Importar ArticleInterlinks
- [ ] Adicionar 1-2 estudos científicos com fontes
- [ ] Adicionar 1-2 casos reais ou exemplos práticos
- [ ] Adicionar 3-5 interlinks estratégicos
- [ ] Expandir para mínimo 1.500 palavras
- [ ] Adicionar seção de resultados esperados
- [ ] Incluir dados estatísticos quando relevante
- [ ] Revisar SEO (title, description, headings)
