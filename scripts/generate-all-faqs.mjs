import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const articlesDir = path.join(__dirname, '../src/pages/blog');

// Função para gerar FAQs baseado no conteúdo do artigo
function generateFAQs(fileName, content) {
  const title = content.match(/articleTitle\s*=\s*["'](.+?)["']/)?.[1] || '';
  
  // FAQs específicos por padrão de título
  const faqPatterns = {
    // Artigos sobre profissões
    'Advogados': [
      { q: "Advogados têm QI mais alto que a média?", a: "Sim. QI médio de advogados é 120-125, significativamente acima da média populacional de 100. Raciocínio lógico e verbal são especialmente desenvolvidos." },
      { q: "Como advogados podem aumentar QI?", a: "Estudar casos complexos, praticar argumentação, aprender idiomas e resolver problemas lógicos. Leitura técnica diária aumenta inteligência cristalizada." },
      { q: "QI alto garante sucesso na advocacia?", a: "Não sozinho. Inteligência emocional, networking e habilidades de negociação são igualmente importantes. QI 120+ com soft skills gera melhores resultados." },
      { q: "Qual área do direito exige mais QI?", a: "Direito tributário e constitucional exigem QI 125+. Direito criminal e trabalhista valorizam mais inteligência emocional e social." },
      { q: "Advogados podem monetizar QI alto?", a: "Sim. Especialização em nichos complexos (tributário, M&A, propriedade intelectual) permite honorários 3-5x maiores que áreas generalistas." }
    ],
    'Engenheiros': [
      { q: "Qual o QI médio de engenheiros?", a: "QI médio de engenheiros é 120-130, com engenheiros de software e aeroespacial frequentemente acima de 130. Raciocínio matemático e espacial são pontos fortes." },
      { q: "Como engenheiros podem aumentar QI?", a: "Aprender novas linguagens de programação, resolver problemas algorítmicos, estudar matemática avançada e praticar design de sistemas complexos." },
      { q: "QI alto é necessário para ser engenheiro?", a: "QI 110+ é recomendado. Abaixo disso, dificuldade com cálculo e abstração. Acima de 120, vantagem significativa em resolver problemas complexos." },
      { q: "Engenheiros ganham mais com QI alto?", a: "Sim. Engenheiros com QI 130+ ganham em média 60% mais que QI 110. Capacidade de resolver problemas complexos é altamente valorizada." },
      { q: "Qual engenharia exige mais QI?", a: "Engenharia aeroespacial e de software exigem QI 125+. Engenharia civil e mecânica funcionam bem com QI 115+." }
    ],
    'Médicos': [
      { q: "Médicos têm QI mais alto?", a: "Sim. QI médio de médicos é 120-125. Cirurgiões e especialistas em áreas complexas (neurologia, cardiologia) frequentemente têm QI 130+." },
      { q: "Como médicos podem aumentar QI?", a: "Estudar casos clínicos complexos, aprender diagnóstico diferencial, praticar raciocínio probabilístico e manter-se atualizado com pesquisas." },
      { q: "QI alto garante sucesso na medicina?", a: "Não sozinho. Empatia, comunicação e resistência ao estresse são cruciais. QI 120+ com inteligência emocional gera melhores resultados." },
      { q: "Qual especialidade médica exige mais QI?", a: "Neurocirurgia, cardiologia intervencionista e oncologia exigem QI 130+. Medicina de família e pediatria valorizam mais inteligência emocional." },
      { q: "Médicos podem monetizar QI alto?", a: "Sim. Especialização em áreas complexas, pesquisa clínica, consultoria médica e telemedicina premium permitem ganhos 5-10x maiores." }
    ]
  };

  // Detecta padrão e retorna FAQs
  for (const [pattern, faqs] of Object.entries(faqPatterns)) {
    if (title.includes(pattern) || fileName.includes(pattern)) {
      return faqs.map(f => ({ question: f.q, answer: f.a }));
    }
  }

  // FAQs genéricos baseados em padrões comuns
  if (fileName.includes('ComoAumentar') || fileName.includes('ComoMelhorar')) {
    return [
      { question: `${title.split(':')[0]}?`, answer: "Sim, através de treino cognitivo, exercícios físicos, alimentação adequada e sono de qualidade. Neuroplasticidade permite desenvolvimento contínuo." },
      { question: "Quanto tempo leva para ver resultados?", answer: "Primeiros resultados em 30 dias com treino diário. Ganhos significativos (5-10 pontos) em 6-12 meses de prática consistente." },
      { question: "Quais exercícios são mais eficazes?", answer: "Dual n-back, xadrez, aprender idiomas, resolver problemas matemáticos e praticar instrumentos musicais. Variedade é essencial." },
      { question: "Existe limite de idade?", answer: "Não. Neuroplasticidade funciona em qualquer idade. Após 60 anos, foco em manter e otimizar é mais realista que grandes ganhos." },
      { question: "Resultados são permanentes?", answer: "Sim, se mantiver prática regular. Parar completamente pode causar perda de 30-50% dos ganhos em 6-12 meses." }
    ];
  }

  if (fileName.includes('QIMedio')) {
    const grupo = title.match(/QI Médio (?:de |dos )?(.+?)(?:\?|:)/)?.[1] || 'do grupo';
    return [
      { question: `Qual o QI médio ${grupo}?`, answer: "Varia entre 100-120 dependendo do subgrupo específico. Fatores como educação, ambiente e genética influenciam." },
      { question: "Como se compara à média geral?", answer: "Média populacional é 100. Grupos profissionais qualificados geralmente têm QI 110-130, significativamente acima da média." },
      { question: "QI médio muda com o tempo?", answer: "Sim. Efeito Flynn: QI médio aumenta 3 pontos por década devido a melhor nutrição, educação e estímulos cognitivos." },
      { question: "Diferença entre QI médio e individual?", answer: "QI médio é estatística de grupo. Indivíduos variam amplamente: 68% estão entre 85-115, mas há outliers em ambos extremos." },
      { question: "Como usar essa informação?", answer: "Para autoconhecimento e desenvolvimento. Se está abaixo da média do grupo, identifique áreas de melhoria. Se acima, capitalize vantagens." }
    ];
  }

  // FAQs padrão para artigos sem padrão específico
  return [
    { question: "Como isso afeta minha vida prática?", answer: "Entender seu QI e potencial cognitivo permite tomar decisões mais informadas sobre carreira, educação e desenvolvimento pessoal." },
    { question: "Posso melhorar meu QI?", answer: "Sim. Treino cognitivo, exercícios físicos, sono adequado e alimentação saudável podem aumentar QI em 5-15 pontos ao longo de meses." },
    { question: "QI é mais importante que esforço?", answer: "Não. QI alto facilita aprendizado, mas esforço consistente supera QI médio sem dedicação. Combinação de ambos gera melhores resultados." },
    { question: "Como medir meu QI?", answer: "Testes científicos validados como WAIS, Raven ou testes online confiáveis. Evite testes de redes sociais sem validação científica." },
    { question: "QI define meu sucesso?", answer: "Não sozinho. Inteligência emocional, persistência, networking e oportunidades são igualmente importantes. QI é uma ferramenta, não destino." }
  ];
}

// Função para adicionar FAQ no artigo
function addFAQToArticle(filePath, fileName) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Verifica se já tem FAQ
  if (content.includes('ArticleFAQ') || content.includes('Perguntas Frequentes')) {
    return false;
  }

  // Gera FAQs baseado no conteúdo
  const faqs = generateFAQs(fileName, content);

  // Adiciona import do ArticleFAQ
  const importLine = 'import ArticleFAQ from "@/components/ArticleFAQ";';
  if (!content.includes(importLine)) {
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
  const replaced = content.replace(
    /(\s+)<div className="mt-16 p-8 bg-gradient-to-br from-primary\/10/,
    `${faqCode}$1<div className="mt-16 p-8 bg-gradient-to-br from-primary/10`
  );

  if (replaced === content) {
    console.log(`⊘ ${fileName} - padrão CTA não encontrado`);
    return false;
  }

  fs.writeFileSync(filePath, replaced, 'utf8');
  return true;
}

// Processa todos os artigos
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.tsx'));
let updated = 0;
let skipped = 0;

for (const file of files) {
  const filePath = path.join(articlesDir, file);
  if (addFAQToArticle(filePath, file)) {
    console.log(`✓ ${file}`);
    updated++;
  } else {
    skipped++;
  }
}

console.log(`\n✓ Atualizado: ${updated} arquivos`);
console.log(`⊘ Ignorado: ${skipped} arquivos`);
