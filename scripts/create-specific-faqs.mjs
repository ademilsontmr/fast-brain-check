import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const articlesDir = path.join(__dirname, '../src/pages/blog');

// Mapeamento de FAQs ESPECÍFICOS para cada artigo
const specificFAQs = {
  'AtividadesQueAumentamQI.tsx': [
    { q: "Quais atividades realmente aumentam o QI?", a: "Xadrez, aprender idiomas, tocar instrumentos musicais, resolver quebra-cabeças complexos, programação e leitura crítica. Estudos mostram ganhos de 5-10 pontos em 6 meses com prática diária de 30 minutos." },
    { q: "Quanto tempo de prática é necessário?", a: "Mínimo 20-30 minutos diários. Resultados iniciais em 4-6 semanas. Ganhos significativos (5-10 pontos) em 6-12 meses. Consistência é mais importante que duração." },
    { q: "Posso combinar várias atividades?", a: "Sim, é recomendado! Combine atividades físicas (corrida, natação) com mentais (xadrez, leitura). Variedade estimula diferentes áreas cerebrais e maximiza ganhos cognitivos." },
    { q: "Atividades físicas aumentam QI?", a: "Sim. Exercício aeróbico 3-5x/semana aumenta BDNF (fator neurotrófico) e neurogênese. Estudos mostram aumento de 3-7 pontos de QI com exercício regular." },
    { q: "Videogames ajudam a aumentar QI?", a: "Jogos estratégicos (StarCraft, Civilization) e puzzles (Portal, The Witness) sim. Jogos de ação melhoram atenção. Evite jogos repetitivos sem desafio cognitivo." }
  ],
  
  'ComoAdvogadosMelhoramQI.tsx': [
    { q: "Advogados têm QI mais alto que a média?", a: "Sim. QI médio de advogados é 120-125, significativamente acima da média populacional de 100. Raciocínio lógico e verbal são especialmente desenvolvidos." },
    { q: "Como advogados podem aumentar QI?", a: "Estudar casos complexos, praticar argumentação, aprender idiomas jurídicos, resolver problemas lógicos e ler doutrina diversificada. Leitura técnica diária aumenta inteligência cristalizada." },
    { q: "QI alto garante sucesso na advocacia?", a: "Não sozinho. Inteligência emocional (empatia com clientes), networking e habilidades de negociação são igualmente importantes. QI 120+ com soft skills gera melhores resultados." },
    { q: "Qual área do direito exige mais QI?", a: "Direito tributário e constitucional exigem QI 125+. Direito criminal e trabalhista valorizam mais inteligência emocional e social. Direito empresarial requer QI 120+ e visão estratégica." },
    { q: "Advogados podem monetizar QI alto?", a: "Sim. Especialização em nichos complexos (tributário, M&A, propriedade intelectual) permite honorários 3-5x maiores que áreas generalistas. QI 130+ em consultoria jurídica estratégica pode gerar R$50k+/mês." }
  ],

  'ComoAndarCavaloMelhoraQI.tsx': [
    { q: "Andar a cavalo realmente melhora o QI?", a: "Sim. Equitação desenvolve coordenação motora, equilíbrio, tomada de decisão rápida e conexão emocional. Estudos mostram melhora de 3-5 pontos em crianças que praticam regularmente." },
    { q: "Como a equitação estimula o cérebro?", a: "Requer coordenação simultânea de múltiplos sistemas: motor (controle do corpo), cognitivo (decisões rápidas), emocional (conexão com animal) e espacial (navegação). Estimulação multissensorial única." },
    { q: "Qual idade é melhor para começar?", a: "Crianças a partir de 6 anos têm maior plasticidade cerebral e ganhos cognitivos. Adultos também se beneficiam, especialmente em coordenação e redução de estresse." },
    { q: "Quantas vezes por semana é necessário?", a: "2-3 vezes por semana, 1 hora por sessão. Benefícios cognitivos aparecem após 3 meses de prática regular. Consistência é fundamental." },
    { q: "Equitação é melhor que outros esportes para QI?", a: "Equitação é única pela conexão animal-humano e coordenação complexa. Natação e artes marciais também são excelentes. Combine diferentes atividades para desenvolvimento completo." }
  ],

  'ComoAprenderMaisRapidoNeurociencia.tsx': [
    { q: "Como a neurociência explica aprendizado rápido?", a: "Neuroplasticidade: cérebro cria novas conexões neurais com repetição espaçada, sono adequado e atenção focada. Técnicas como Pomodoro e recall ativo aceleram formação de memórias." },
    { q: "Qual a técnica mais eficaz para aprender rápido?", a: "Recall ativo (testar-se sem consultar material) é 2-3x mais eficaz que reler. Combine com repetição espaçada (revisar em intervalos crescentes: 1 dia, 3 dias, 7 dias, 30 dias)." },
    { q: "Sono realmente ajuda no aprendizado?", a: "Sim, é crucial. Sono profundo consolida memórias de curto para longo prazo. Estudar antes de dormir e dormir 7-9h aumenta retenção em 40%. Cochilos de 20min após estudo também ajudam." },
    { q: "Como aumentar velocidade de leitura sem perder compreensão?", a: "Elimine subvocalização (falar mentalmente), use guia visual (dedo/caneta), leia em blocos de palavras. Pratique 20min/dia. Velocidade aumenta de 200 para 400-600 palavras/min em 30 dias." },
    { q: "Suplementos nootrópicos funcionam?", a: "Cafeína + L-teanina (chá verde) melhora foco. Ômega-3 suporta saúde cerebral. Creatina pode ajudar em tarefas cognitivas. Evite promessas milagrosas. Sono e exercício são mais eficazes." }
  ],

  'ComoAtivarModoFocoProfundo.tsx': [
    { q: "O que é modo de foco profundo?", a: "Estado de concentração intensa onde você trabalha sem distrações por 90-120 minutos. Cérebro entra em fluxo (flow state), produtividade aumenta 5x e qualidade do trabalho melhora drasticamente." },
    { q: "Como entrar em foco profundo rapidamente?", a: "Protocolo: 1) Elimine distrações (celular modo avião, internet bloqueada); 2) Ritual de início (música específica, café); 3) Tarefa clara e desafiadora; 4) Timer de 90min. Cérebro aprende o padrão em 7-14 dias." },
    { q: "Quantas sessões de foco profundo por dia?", a: "2-3 sessões de 90 minutos com pausas de 20-30min entre elas. Mais que isso causa fadiga cognitiva. Manhã é ideal (cortisol alto, mente fresca). Evite após almoço pesado." },
    { q: "Música ajuda ou atrapalha o foco?", a: "Depende. Música sem letra (lo-fi, clássica, ambient) ajuda. Música com letra compete por atenção verbal. Silêncio é ideal para trabalho que exige linguagem. Teste e veja o que funciona para você." },
    { q: "Como recuperar foco quando distraído?", a: "Técnica dos 5 segundos: conte 5-4-3-2-1 e volte imediatamente à tarefa. Não se culpe (gasta energia). Anote distração em papel e volte ao trabalho. Melhora com prática." }
  ],
};

// Função para substituir FAQs genéricos por específicos
function replaceFAQs(filePath, fileName) {
  const faqs = specificFAQs[fileName];
  if (!faqs) {
    console.log(`⊘ ${fileName} - sem FAQs específicos mapeados`);
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Remove FAQs antigos
  const faqPattern = /<ArticleFAQ faqs=\{[\s\S]*?\}\] \/>/;
  
  if (!content.match(faqPattern)) {
    console.log(`⊘ ${fileName} - padrão FAQ não encontrado`);
    return false;
  }

  // Cria novo código FAQ
  const newFAQCode = `<ArticleFAQ faqs={${JSON.stringify(faqs.map(f => ({ question: f.q, answer: f.a })), null, 10)}} />`;

  // Substitui
  content = content.replace(faqPattern, newFAQCode);

  fs.writeFileSync(filePath, content, 'utf8');
  return true;
}

// Processa artigos
let updated = 0;
for (const [fileName, faqs] of Object.entries(specificFAQs)) {
  const filePath = path.join(articlesDir, fileName);
  if (fs.existsSync(filePath)) {
    if (replaceFAQs(filePath, fileName)) {
      console.log(`✓ ${fileName}`);
      updated++;
    }
  }
}

console.log(`\n✓ Total atualizado: ${updated} arquivos`);
console.log(`\nPróximos ${Object.keys(specificFAQs).length} de 134 artigos atualizados.`);
console.log(`Restam ${134 - Object.keys(specificFAQs).length} artigos para mapear FAQs específicos.`);
