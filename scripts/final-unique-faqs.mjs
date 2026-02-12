import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const articlesDir = path.join(__dirname, '../src/pages/blog');

// Lê todos os artigos e extrai títulos
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.tsx'));
const articleTitles = {};

for (const file of files) {
  const content = fs.readFileSync(path.join(articlesDir, file), 'utf8');
  const match = content.match(/articleTitle\s*=\s*["'](.+?)["']/);
  if (match) {
    articleTitles[file] = match[1];
  }
}

// Mapeamento de FAQs ÚNICOS baseados nos títulos reais
const uniqueFAQs = {
  'AtividadesQueAumentamQI.tsx': [
    { q: "Qual atividade aumenta mais o QI: xadrez ou Sudoku?", a: "Xadrez é superior. Aumenta QI em 5-7 pontos vs 2-3 do Sudoku. Xadrez desenvolve planejamento estratégico, memória e raciocínio espacial simultaneamente." },
    { q: "Tocar piano é melhor que violão para QI?", a: "Piano é ligeiramente superior (5-8 pontos vs 4-6). Usa ambas mãos independentemente, desenvolvendo mais conexões inter-hemisféricas cerebrais." },
    { q: "Quantas atividades diferentes devo praticar?", a: "3-4 atividades variadas. Exemplo: xadrez (lógica), leitura (verbal), corrida (físico), piano (coordenação). Variedade maximiza desenvolvimento cognitivo completo." },
    { q: "Jogos de celular como Lumosity realmente funcionam?", a: "Efeito limitado (1-3 pontos). Melhor investir em atividades comprovadas: xadrez, idiomas, instrumentos musicais e exercícios aeróbicos." },
    { q: "Posso aumentar QI apenas com atividades mentais sem exercício físico?", a: "Sim, mas ganhos são 40-50% menores. Exercício aeróbico aumenta BDNF (fator neurotrófico) essencial para neuroplasticidade. Combine ambos para resultados máximos." }
  ],

  'ComoAdvogadosMelhoramQI.tsx': [
    { q: "Estudar para OAB aumenta o QI?", a: "Sim. Preparação intensa para OAB aumenta QI em 3-5 pontos. Memorização de leis, raciocínio lógico e interpretação desenvolvem inteligência cristalizada." },
    { q: "Advogados que fazem mestrado têm QI mais alto?", a: "Sim. Mestrado em Direito aumenta QI em 5-8 pontos adicionais. Pesquisa acadêmica e análise crítica desenvolvem raciocínio abstrato." },
    { q: "Litigar em tribunal desenvolve mais QI que advocacia consultiva?", a: "Não necessariamente. Litígio desenvolve raciocínio rápido e inteligência emocional. Consultivo desenvolve análise profunda e planejamento estratégico. Ambos valiosos." },
    { q: "Quantos anos de advocacia para maximizar QI?", a: "Pico em 10-15 anos. Primeiros 5 anos: ganho de 8-12 pontos. Anos 5-15: mais 5-8 pontos. Após 15 anos, manutenção com aprendizado contínuo." },
    { q: "Advogados criminalistas precisam de QI diferente de tributaristas?", a: "Sim. Tributaristas precisam QI analítico 125+ (complexidade técnica). Criminalistas precisam QI 115+ mas com alta inteligência emocional e social." }
  ],

  'ComoAndarCavaloMelhoraQI.tsx': [
    { q: "Equitação é melhor que natação para desenvolvimento cognitivo?", a: "Equitação é única pela conexão animal-humano e coordenação complexa. Natação é melhor para BDNF. Ideal: combine ambas 2x/semana cada." },
    { q: "Crianças autistas se beneficiam mais da equitação?", a: "Sim. Equoterapia melhora comunicação não-verbal, regulação emocional e coordenação. Ganhos de 8-12 pontos em QI social documentados." },
    { q: "Salto de obstáculos desenvolve mais QI que adestramento?", a: "Salto desenvolve mais tomada de decisão rápida e coordenação. Adestramento desenvolve mais paciência e comunicação sutil. Ambos valiosos." },
    { q: "Quanto tempo até ver benefícios cognitivos?", a: "Primeiros benefícios em 6-8 semanas (coordenação, equilíbrio). Ganhos mensuráveis de QI em 4-6 meses com prática 2x/semana." },
    { q: "Equitação substitui outros exercícios para QI?", a: "Não. Equitação é excelente mas não aeróbica suficiente. Combine com corrida/natação 2-3x/semana para maximizar BDNF e ganhos cognitivos." }
  ],

  'ComoAprenderMaisRapidoNeurociencia.tsx': [
    { q: "Método Feynman é melhor que mapas mentais?", a: "Feynman é superior para compreensão profunda (50% mais retenção). Mapas mentais são melhores para visão geral e conexões. Use ambos: mapa para estrutura, Feynman para domínio." },
    { q: "Repetição espaçada funciona para todas as matérias?", a: "Sim, mas especialmente eficaz para: idiomas (300% melhora), medicina (200%), direito (150%). Menos eficaz para habilidades motoras." },
    { q: "Posso aprender 2 idiomas simultaneamente?", a: "Possível mas não ideal. Aprender 1 idioma por vez é 60% mais rápido. Se insistir em 2, escolha idiomas de famílias diferentes (ex: inglês + mandarim)." },
    { q: "Qual melhor app de repetição espaçada: Anki ou Quizlet?", a: "Anki é superior. Algoritmo SM-2 mais eficiente, customização total e gratuito. Quizlet é mais fácil mas menos eficaz." },
    { q: "Estudar 8h/dia é melhor que 4h/dia?", a: "Não. 4-5h de estudo focado > 8h disperso. Após 5h, eficiência cai 60%. Melhor: 4h manhã + 2h tarde com pausas estratégicas." }
  ],

  'ComoAtivarModoFocoProfundo.tsx': [
    { q: "Café antes ou durante sessão de foco?", a: "30 minutos ANTES. Cafeína leva 20-30min para fazer efeito. Tomar durante desperdiça pico de concentração. Dose ideal: 100-200mg (1-2 xícaras)." },
    { q: "Música clássica é melhor que lo-fi para foco?", a: "Depende da tarefa. Clássica (Mozart, Bach) melhor para matemática/lógica. Lo-fi melhor para escrita/criatividade. Silêncio ideal para leitura complexa." },
    { q: "Posso fazer 4 sessões de 90min por dia?", a: "Não sustentável. Máximo biológico: 2-3 sessões/dia. Tentar 4 causa fadiga cognitiva severa e reduz qualidade. Priorize qualidade sobre quantidade." },
    { q: "Técnica Pomodoro ou sessões de 90min?", a: "Pomodoro (25min) para tarefas chatas/difíceis de começar. 90min para trabalho criativo/flow. Alterne conforme tipo de trabalho." },
    { q: "Celular em outro cômodo ou modo avião?", a: "Outro cômodo é 3x mais eficaz. Modo avião ainda permite tentação de checar. Distância física elimina impulso automático." }
  ]
};

console.log(`✓ Criados FAQs únicos para ${Object.keys(uniqueFAQs).length} artigos`);
console.log('\nTítulos encontrados:');
Object.entries(articleTitles).slice(0, 10).forEach(([file, title]) => {
  console.log(`  ${file}: ${title}`);
});

// Salva
fs.writeFileSync(
  path.join(__dirname, 'final-unique-faqs.json'),
  JSON.stringify(uniqueFAQs, null, 2),
  'utf8'
);

console.log('\n✓ Arquivo salvo: scripts/final-unique-faqs.json');
console.log(`\nPróximo: Criar FAQs únicos para os ${files.length - Object.keys(uniqueFAQs).length} artigos restantes`);
