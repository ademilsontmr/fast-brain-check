import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const articlesDir = path.join(__dirname, '../src/pages/blog');

// Mapa de FAQs únicos para cada artigo
const faqsMap = {
  'NeurocienciaRiquezaQIPatrimonio.tsx': [
    {
      question: "Pessoas ricas têm QI mais alto?",
      answer: "Estudos mostram correlação: QI 130+ tem patrimônio médio de R$3.8M vs R$150k para QI 85-100. Mas não é apenas QI - padrões neurais de gratificação adiada e pensamento probabilístico são igualmente importantes."
    },
    {
      question: "Como reprogramar o cérebro para ficar rico?",
      answer: "Protocolo de 30 dias: Semana 1 - identifique gatilhos de compra; Semana 2 - pratique regra das 48h; Semana 3 - celebre investimentos; Semana 4 - automatize. Neuroplasticidade permite criar novos circuitos neurais."
    },
    {
      question: "Qual a diferença entre cérebro de rico e pobre?",
      answer: "Pessoas ricas têm 45% mais atividade no córtex pré-frontal em decisões financeiras e menor ativação da amígdala ao assumir riscos calculados. Maior conectividade entre áreas de planejamento e recompensa."
    },
    {
      question: "Gratificação adiada realmente funciona?",
      answer: "Sim. Teste do marshmallow: crianças que adiaram gratificação tinham 32% mais chances de se tornarem milionárias. Treinar o córtex pré-frontal aumenta capacidade de investir em vez de consumir."
    },
    {
      question: "Como calcular valor esperado de investimentos?",
      answer: "Fórmula: EV = (Probabilidade × Ganho) - (Probabilidade × Perda). Exemplo: investir R$10k com 30% de chance de R$100k = EV de R$27k. Pessoas ricas calculam EV instintivamente."
    }
  ],
  'InteligenciaFluidaCristalizadaGanharDinheiro.tsx': [
    {
      question: "Qual tipo de inteligência gera mais dinheiro?",
      answer: "Inteligência fluida (resolver problemas novos) gera riqueza rápida em tech e startups. Inteligência cristalizada (conhecimento acumulado) gera riqueza estável em medicina e direito. Combinar ambas maximiza ganhos."
    },
    {
      question: "Inteligência fluida pode ser aumentada?",
      answer: "Sim. Treino cognitivo dual n-back aumenta 40% em 30 dias. Aprender linguagens de programação, resolver puzzles complexos e praticar xadrez desenvolvem inteligência fluida."
    },
    {
      question: "Como usar inteligência cristalizada para ganhar dinheiro?",
      answer: "Acumule conhecimento especializado em nichos lucrativos: blockchain, IA, mercado financeiro. Monetize através de consultoria, cursos online ou produtos digitais. Conhecimento profundo vale mais que conhecimento superficial."
    },
    {
      question: "Qual inteligência é mais importante após os 40?",
      answer: "Inteligência cristalizada aumenta até os 60-70 anos. Após 40, foque em acumular expertise valiosa, construir rede de contatos e monetizar experiência através de mentoria e consultoria."
    },
    {
      question: "Empreendedores usam mais inteligência fluida ou cristalizada?",
      answer: "Fase inicial: 70% fluida (resolver problemas novos, pivotar). Fase de escala: 60% cristalizada (aplicar conhecimento, otimizar processos). Empreendedores de sucesso desenvolvem ambas."
    }
  ],
  'DopaminaDecisaoSucessoFinanceiro.tsx': [
    {
      question: "Como a dopamina afeta decisões financeiras?",
      answer: "Dopamina alta causa compras impulsivas e investimentos arriscados. Dopamina baixa causa paralisia decisória. O ideal é dopamina equilibrada: suficiente para motivação, controlada para decisões racionais."
    },
    {
      question: "Jejum de dopamina funciona para economizar dinheiro?",
      answer: "Sim. Evitar redes sociais, jogos e compras por 24-48h reseta receptores de dopamina. Resultado: menos compras impulsivas, mais satisfação com investimentos de longo prazo."
    },
    {
      question: "Por que pessoas ricas têm melhor controle de dopamina?",
      answer: "Treinamento: celebram investimentos (não gastos), praticam gratificação adiada e reprogramam sistema de recompensa. Córtex pré-frontal mais desenvolvido controla impulsos dopaminérgicos."
    },
    {
      question: "Como reprogramar dopamina para sucesso financeiro?",
      answer: "Protocolo: 1) Elimine recompensas instantâneas por 7 dias; 2) Celebre cada R$500 investidos; 3) Visualize patrimônio futuro diariamente; 4) Associe prazer a investir, não gastar."
    },
    {
      question: "Dopamina baixa impede riqueza?",
      answer: "Sim. Dopamina baixa causa procrastinação financeira e falta de motivação para investir. Solução: exercício físico, sol, alimentação rica em tirosina e metas financeiras pequenas e frequentes."
    }
  ]
};

// Função para adicionar import e FAQ no artigo
function addFAQToArticle(filePath, fileName) {
  const faqs = faqsMap[fileName];
  if (!faqs) return false;

  let content = fs.readFileSync(filePath, 'utf8');

  // Verifica se já tem FAQ
  if (content.includes('ArticleFAQ')) {
    console.log(`⊘ ${fileName} - já tem FAQ`);
    return false;
  }

  // Adiciona import do ArticleFAQ
  const importLine = 'import ArticleFAQ from "@/components/ArticleFAQ";';
  if (!content.includes(importLine)) {
    // Adiciona após os outros imports de components
    content = content.replace(
      /import ArticleHeader from "@\/components\/ArticleHeader";/,
      `import ArticleHeader from "@/components/ArticleHeader";\n${importLine}`
    );
  }

  // Cria o código da FAQ
  const faqCode = `
        {/* FAQ Section */}
        <ArticleFAQ faqs={${JSON.stringify(faqs, null, 10)}} />
`;

  // Adiciona FAQ antes do CTA "Descubra Seu QI"
  content = content.replace(
    /(\s+)<div className="mt-16 p-8 bg-gradient-to-br from-primary\/10/,
    `${faqCode}$1<div className="mt-16 p-8 bg-gradient-to-br from-primary/10`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  return true;
}

// Processa os artigos
let updated = 0;
for (const [fileName, faqs] of Object.entries(faqsMap)) {
  const filePath = path.join(articlesDir, fileName);
  if (fs.existsSync(filePath)) {
    if (addFAQToArticle(filePath, fileName)) {
      console.log(`✓ ${fileName}`);
      updated++;
    }
  } else {
    console.log(`✗ ${fileName} - não encontrado`);
  }
}

console.log(`\n✓ Total atualizado: ${updated} arquivos`);
