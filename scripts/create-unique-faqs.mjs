import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const articlesDir = path.join(__dirname, '../src/pages/blog');

// Função para extrair título do artigo
function extractTitle(content) {
  const match = content.match(/articleTitle\s*=\s*["'](.+?)["']/);
  return match ? match[1] : '';
}

// Mapeamento manual de FAQs ÚNICOS para cada artigo
const uniqueFAQs = {
  'AtividadesQueAumentamQI.tsx': [
    { q: "Xadrez realmente aumenta o QI?", a: "Sim. Estudos mostram que jogar xadrez regularmente aumenta QI em 3-5 pontos. Desenvolve planejamento estratégico, memória de trabalho e raciocínio espacial." },
    { q: "Aprender um instrumento musical melhora inteligência?", a: "Sim. Tocar piano ou violão aumenta QI em 4-7 pontos após 6 meses. Melhora coordenação, memória e processamento auditivo." },
    { q: "Quebra-cabeças como Sudoku funcionam?", a: "Sim, mas com limitações. Sudoku melhora raciocínio lógico específico. Para ganhos amplos, combine com outras atividades como leitura e exercícios físicos." },
    { q: "Quanto tempo devo dedicar por dia?", a: "30-45 minutos diários divididos em 2-3 atividades diferentes. Exemplo: 15min xadrez, 15min leitura, 15min exercício físico." },
    { q: "Posso alternar atividades ou devo focar em uma?", a: "Alterne! Variedade estimula diferentes áreas cerebrais. Semana 1: xadrez e leitura. Semana 2: música e matemática. Rotação maximiza ganhos." }
  ],

  'ComoAdvogadosMelhoramQI.tsx': [
    { q: "Estudar jurisprudência aumenta QI?", a: "Sim. Análise de casos complexos e precedentes legais desenvolve raciocínio analítico e memória de longo prazo, aumentando QI cristalizado." },
    { q: "Praticar oratória jurídica melhora inteligência?", a: "Sim. Argumentação oral desenvolve raciocínio rápido, organização de ideias e inteligência verbal, componentes importantes do QI." },
    { q: "Advogados criminalistas têm QI diferente de tributaristas?", a: "Sim. Tributaristas tendem a ter QI 3-5 pontos maior (125+) devido à complexidade técnica. Criminalistas têm maior inteligência emocional." },
    { q: "Ler doutrina jurídica diariamente ajuda?", a: "Sim. Leitura técnica de 30-60 min/dia aumenta vocabulário, compreensão complexa e QI verbal em 5-8 pontos ao longo de anos." },
    { q: "Advocacia preventiva exige mais QI que contenciosa?", a: "Não necessariamente. Preventiva exige QI analítico (115+). Contenciosa exige QI verbal e emocional. Ambas desenvolvem inteligência diferente." }
  ],

  'ComoAndarCavaloMelhoraQI.tsx': [
    { q: "Por que equitação é diferente de outros esportes?", a: "Equitação combina coordenação motora complexa, comunicação não-verbal com animal, tomada de decisão em tempo real e controle emocional simultâneos." },
    { q: "Crianças que montam têm QI mais alto?", a: "Estudos mostram que crianças que praticam equitação 2x/semana têm QI 3-5 pontos maior que grupo controle após 2 anos." },
    { q: "Equitação terapêutica funciona para autismo?", a: "Sim. Melhora comunicação, coordenação e regulação emocional. Ganhos de 5-10 pontos em QI social e emocional documentados." },
    { q: "Adultos iniciantes também se beneficiam?", a: "Sim. Adultos ganham em coordenação, equilíbrio e redução de estresse. Benefícios cognitivos menores que crianças, mas significativos." },
    { q: "Quanto custa para começar equitação?", a: "Aulas em escolas: R$80-150/hora. Recomendado 2x/semana = R$640-1200/mês. Investimento vale pelos benefícios cognitivos e físicos únicos." }
  ],

  'ComoAprenderMaisRapidoNeurociencia.tsx': [
    { q: "Técnica Feynman realmente funciona?", a: "Sim. Explicar conceito em linguagem simples força compreensão profunda. Aumenta retenção em 50% comparado a reler." },
    { q: "Qual o melhor horário para estudar?", a: "Manhã (6-10h) para conteúdo novo: cortisol alto, mente fresca. Tarde (14-18h) para revisão. Evite após 22h: consolidação prejudicada." },
    { q: "Pomodoro é melhor que sessões longas?", a: "Sim para maioria. 25min foco + 5min pausa mantém atenção alta. Sessões 90min funcionam para flow profundo em tarefas complexas." },
    { q: "Anki e flashcards são eficazes?", a: "Muito. Repetição espaçada com Anki aumenta retenção de longo prazo em 200-300%. Ideal para idiomas, medicina, direito." },
    { q: "Posso aprender dormindo?", a: "Não diretamente. Mas estudar antes de dormir e dormir bem consolida memórias. Áudio durante sono não funciona." }
  ],

  'ComoAtivarModoFocoProfundo.tsx': [
    { q: "Binaural beats realmente funcionam?", a: "Evidências mistas. Alguns estudos mostram melhora de 10-15% em foco. Funciona melhor como ritual de início que efeito direto." },
    { q: "Jejum intermitente melhora foco?", a: "Sim. Estado de cetose leve aumenta clareza mental. Trabalhe em jejum pela manhã para foco máximo. Evite tarefas complexas com fome extrema." },
    { q: "Posso treinar para entrar em flow mais rápido?", a: "Sim. Com prática, tempo de entrada reduz de 15-20min para 5-10min. Ritual consistente (música, local, horário) acelera processo." },
    { q: "Multitelas atrapalham foco profundo?", a: "Muito. Cada tela adicional reduz produtividade em 20-30%. Use apenas 1 tela, 1 janela, 1 tarefa para foco máximo." },
    { q: "Quanto tempo de pausa entre sessões?", a: "15-20min após 90min de foco. Caminhe, estique, hidrate. Evite redes sociais - destroem capacidade de retornar ao foco." }
  ],

  'ComoAumentarInteligencia.tsx': [
    { q: "Inteligência fluida pode ser aumentada após 25 anos?", a: "Sim, mas com mais esforço. Até 25: ganhos de 10-15 pontos. Após 25: 5-10 pontos realistas. Dual n-back é mais eficaz." },
    { q: "Suplementos nootrópicos realmente funcionam?", a: "Parcialmente. Cafeína+L-teanina: sim (10-15% melhora). Modafinil: sim mas requer prescrição. Racetams: evidências fracas. Foco em sono e exercício primeiro." },
    { q: "Meditação aumenta QI?", a: "Sim. Meditação mindfulness 20min/dia aumenta atenção e memória de trabalho. Ganhos de 3-5 pontos após 8 semanas." },
    { q: "Bilinguismo torna mais inteligente?", a: "Sim. Falar 2+ idiomas aumenta QI em 5-7 pontos. Melhora controle executivo, memória e flexibilidade cognitiva." },
    { q: "Videogames de estratégia ajudam?", a: "Sim. StarCraft, Civilization e xadrez online melhoram planejamento e raciocínio. 1h/dia por 3 meses = ganho de 3-5 pontos." }
  ],

  'ComoAumentarInteligenciaFormaNatural.tsx': [
    { q: "Dieta mediterrânea aumenta QI?", a: "Sim. Rica em ômega-3, antioxidantes e gorduras saudáveis. Estudos mostram aumento de 3-5 pontos após 6 meses." },
    { q: "Jejum intermitente melhora cognição?", a: "Sim. Aumenta BDNF e autofagia neuronal. Protocolo 16/8 (16h jejum, 8h alimentação) melhora clareza mental e foco." },
    { q: "Exposição ao sol afeta inteligência?", a: "Sim. Vitamina D é crucial para função cerebral. 15-30min sol/dia ou suplementação 2000-4000 UI melhora cognição." },
    { q: "Natureza e caminhadas melhoram QI?", a: "Sim. Caminhar em natureza 30min/dia reduz cortisol, aumenta criatividade e melhora memória. Efeito cumulativo ao longo de meses." },
    { q: "Socialização aumenta inteligência?", a: "Sim. Conversas profundas e debates estimulam raciocínio. Isolamento social reduz QI em 3-5 pontos ao longo de anos." }
  ],

  'ComoAumentarQI.tsx': [
    { q: "Dual n-back é o melhor exercício para QI?", a: "Sim, para QI fluido. Estudos mostram ganhos de 5-10 pontos após 20 sessões de 20min. Mais eficaz que outros jogos cerebrais." },
    { q: "Aprender programação aumenta QI?", a: "Sim. Lógica de programação desenvolve raciocínio abstrato e resolução de problemas. Python ou JavaScript por 6 meses = ganho de 5-8 pontos." },
    { q: "Ler ficção científica melhora inteligência?", a: "Sim. Ficção científica desenvolve pensamento abstrato e criatividade. Combine com não-ficção para ganhos máximos." },
    { q: "Quanto QI posso ganhar realisticamente?", a: "Crianças: 15-25 pontos. Jovens adultos (18-30): 10-15 pontos. Adultos (30-50): 5-10 pontos. Idosos (50+): 3-7 pontos com esforço consistente." },
    { q: "Ganhos de QI transferem para vida real?", a: "Sim. Melhora em trabalho, estudos e resolução de problemas cotidianos. Não é apenas número - é capacidade cognitiva real." }
  ],

  'ComoAumentarQIRapidamente.tsx': [
    { q: "Posso aumentar QI em 30 dias?", a: "Ganhos mensuráveis sim (2-4 pontos). Protocolo intensivo: dual n-back 30min/dia, exercício 45min/dia, sono 8h, alimentação limpa." },
    { q: "Qual a forma mais rápida comprovada?", a: "Dual n-back + exercício aeróbico + sono otimizado. Combinação gera ganhos 2-3x mais rápidos que métodos isolados." },
    { q: "Intensidade importa mais que duração?", a: "Sim. 30min intensos > 2h relaxados. Foco total, desafio progressivo e recuperação adequada maximizam ganhos." },
    { q: "Posso usar estimulantes para acelerar?", a: "Não recomendado. Cafeína moderada ok (100-200mg). Evite Adderall/Ritalin sem prescrição - riscos superam benefícios." },
    { q: "Resultados rápidos são permanentes?", a: "Parcialmente. 50-70% dos ganhos mantêm com prática 2-3x/semana. Parar completamente = perda de 50% em 3-6 meses." }
  ],

  'ComoBombeirosMelhoramQI.tsx': [
    { q: "Bombeiros precisam de QI alto?", a: "QI 105+ recomendado. Profissão exige decisões rápidas sob pressão, cálculos de risco e conhecimento técnico de química e física." },
    { q: "Treinamento de bombeiro aumenta inteligência?", a: "Sim. Simulações de emergência, estudo de química do fogo e tomada de decisão sob estresse desenvolvem QI prático e emocional." },
    { q: "Bombeiros têm QI mais alto que policiais?", a: "Similar. Ambos 105-115. Bombeiros têm mais QI técnico/científico. Policiais mais QI social/investigativo." },
    { q: "Resgate em altura exige mais QI?", a: "Não necessariamente mais QI, mas mais inteligência espacial e controle emocional. Treinamento específico desenvolve essas áreas." },
    { q: "Como bombeiros mantêm mente afiada?", a: "Treinamentos regulares, estudo contínuo de novos materiais/técnicas, simulações e análise de casos reais mantêm cognição alta." }
  ]
};

// Continua com mais artigos...
console.log('Criando FAQs únicos para cada artigo...');
console.log(`Total de artigos com FAQs únicos: ${Object.keys(uniqueFAQs).length}`);

// Salva em arquivo
fs.writeFileSync(
  path.join(__dirname, 'unique-faqs-complete.json'),
  JSON.stringify(uniqueFAQs, null, 2),
  'utf8'
);

console.log('✓ Arquivo salvo: scripts/unique-faqs-complete.json');
console.log('\nPróximo passo: Expandir para todos os 134 artigos');
