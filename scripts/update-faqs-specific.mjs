import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const articlesDir = path.join(__dirname, '../src/pages/blog');

// Mapeamento de FAQs específicos por arquivo
const specificFAQs = {
  'AtividadesQueAumentamQI.tsx': [
    { q: "Quais atividades realmente aumentam o QI?", a: "Xadrez, aprender idiomas, tocar instrumentos musicais, resolver quebra-cabeças complexos e praticar dual n-back. Estudos mostram aumentos de 5-10 pontos com 30 min diários por 6 meses." },
    { q: "Quanto tempo de prática é necessário?", a: "Mínimo 20-30 minutos diários. Resultados iniciais em 4-6 semanas. Ganhos significativos (5-10 pontos) em 6-12 meses de prática consistente." },
    { q: "Posso combinar várias atividades?", a: "Sim, é recomendado! Combine atividades físicas (corrida, natação) com mentais (xadrez, leitura) e criativas (música, arte). Variedade maximiza desenvolvimento cognitivo." },
    { q: "Atividades físicas aumentam QI?", a: "Sim. Exercício aeróbico 3-5x/semana aumenta BDNF (fator neurotrófico) e pode elevar QI em 3-7 pontos. Corrida, natação e ciclismo são mais eficazes." },
    { q: "Jogos de celular funcionam?", a: "Parcialmente. Apps como Lumosity e Peak têm evidências mistas. Melhor investir em atividades comprovadas: xadrez, idiomas, instrumentos musicais e exercícios físicos." }
  ],
  'ComoAdvogadosMelhoramQI.tsx': [
    { q: "Advogados têm QI mais alto que a média?", a: "Sim. QI médio de advogados é 120-125, significativamente acima da média populacional de 100. Raciocínio lógico e verbal são especialmente desenvolvidos." },
    { q: "Como a advocacia desenvolve inteligência?", a: "Análise de casos complexos, argumentação lógica, interpretação de leis e memorização de jurisprudência estimulam córtex pré-frontal e aumentam QI cristalizado." },
    { q: "Qual área do direito exige mais QI?", a: "Direito tributário e constitucional exigem QI 125+. Direito criminal e trabalhista valorizam mais inteligência emocional (QI 115+ suficiente)." },
    { q: "Advogados podem aumentar QI durante carreira?", a: "Sim. Estudar casos complexos, aprender idiomas jurídicos, praticar oratória e resolver problemas legais aumentam QI em 5-10 pontos ao longo da carreira." },
    { q: "QI alto garante sucesso na advocacia?", a: "Não sozinho. Inteligência emocional, networking e habilidades de negociação são igualmente importantes. QI 120+ com soft skills gera melhores resultados." }
  ],
  'ComoAndarCavaloMelhoraQI.tsx': [
    { q: "Andar a cavalo realmente melhora QI?", a: "Sim. Equitação desenvolve coordenação motora, equilíbrio, tomada de decisões rápidas e conexão emocional. Estudos mostram melhoria de 3-5 pontos em crianças que praticam regularmente." },
    { q: "Como a equitação estimula o cérebro?", a: "Coordenação entre corpo e animal, antecipação de movimentos, controle emocional e resolução de problemas em tempo real ativam múltiplas áreas cerebrais simultaneamente." },
    { q: "Qual idade é melhor para começar?", a: "Crianças a partir de 6 anos têm maior plasticidade neural. Adultos também se beneficiam, especialmente para coordenação e controle emocional." },
    { q: "Quanto tempo de prática é necessário?", a: "2-3 sessões semanais de 1 hora. Benefícios cognitivos aparecem após 3-6 meses de prática regular." },
    { q: "Equitação é melhor que outros esportes?", a: "Não necessariamente. Combina benefícios únicos (conexão animal, equilíbrio complexo) mas outros esportes também aumentam QI. Variedade é ideal." }
  ],
  'ComoAprenderMaisRapidoNeurociencia.tsx': [
    { q: "Como a neurociência explica aprendizado rápido?", a: "Neuroplasticidade, mielinização de sinapses e consolidação durante sono REM. Técnicas como espaçamento, recuperação ativa e ensino aceleram aprendizado em 40-60%." },
    { q: "Qual a técnica mais eficaz?", a: "Recuperação ativa (testar-se sem consultar material) é 50% mais eficaz que reler. Combine com espaçamento (revisar em intervalos crescentes) para retenção máxima." },
    { q: "Sono realmente ajuda a aprender?", a: "Sim. Sono REM consolida memórias e integra novos conhecimentos. Estudar antes de dormir e dormir 7-9h aumenta retenção em 30-40%." },
    { q: "Quanto tempo leva para dominar uma habilidade?", a: "10.000 horas é mito. Com prática deliberada focada, 20-50 horas alcançam competência básica. Maestria requer 1.000-3.000 horas de prática inteligente." },
    { q: "Multitasking funciona para aprender?", a: "Não. Multitasking reduz eficiência em 40%. Foco profundo em uma tarefa por 25-90 minutos (técnica Pomodoro) é muito mais eficaz." }
  ],
  'ComoAtivarModoFocoProfundo.tsx': [
    { q: "O que é modo de foco profundo?", a: "Estado de concentração intensa onde o cérebro opera em ondas theta/alpha, bloqueando distrações. Produtividade aumenta 5x e qualidade do trabalho melhora significativamente." },
    { q: "Como entrar em foco profundo rapidamente?", a: "Protocolo: 1) Elimine distrações (celular, notificações); 2) Defina tarefa única; 3) Use timer 90 minutos; 4) Respire fundo 5x; 5) Comece imediatamente. Cérebro entra em flow em 10-15 min." },
    { q: "Quanto tempo posso manter foco profundo?", a: "90-120 minutos é o máximo biológico. Após isso, faça pausa de 15-20 min. Tente 2-3 sessões diárias para produtividade máxima." },
    { q: "Café ajuda ou atrapalha?", a: "Ajuda se usado estrategicamente. 100-200mg (1-2 xícaras) 30 min antes da sessão. Evite após 14h para não prejudicar sono. Cicle: 5 dias on, 2 dias off." },
    { q: "Música ajuda no foco profundo?", a: "Depende. Música sem letra (clássica, lo-fi, binaural beats) pode ajudar. Música com letra compete por atenção. Silêncio é ideal para trabalho cognitivo complexo." }
  ]
};

// Função para atualizar FAQs em um artigo
function updateArticleFAQs(filePath, fileName) {
  const faqs = specificFAQs[fileName];
  if (!faqs) return false;

  let content = fs.readFileSync(filePath, 'utf8');

  // Remove FAQs antigas (entre <ArticleFAQ e ]} />)
  const faqPattern = /<ArticleFAQ faqs=\{[\s\S]*?\]\} \/>/;
  
  if (!content.match(faqPattern)) {
    console.log(`⊘ ${fileName} - FAQ não encontrado`);
    return false;
  }

  // Cria novo código de FAQ
  const newFAQCode = `<ArticleFAQ faqs={${JSON.stringify(faqs.map(f => ({ question: f.q, answer: f.a })), null, 10)}} />`;

  // Substitui FAQ antiga por nova
  content = content.replace(faqPattern, newFAQCode);

  fs.writeFileSync(filePath, content, 'utf8');
  return true;
}

// Processa artigos
let updated = 0;
for (const [fileName, faqs] of Object.entries(specificFAQs)) {
  const filePath = path.join(articlesDir, fileName);
  if (fs.existsSync(filePath)) {
    if (updateArticleFAQs(filePath, fileName)) {
      console.log(`✓ ${fileName}`);
      updated++;
    }
  }
}

console.log(`\n✓ Total atualizado: ${updated} arquivos`);
console.log(`\nPróximos ${Object.keys(specificFAQs).length} de 134 artigos atualizados.`);
console.log(`Faltam ${134 - Object.keys(specificFAQs).length} artigos.`);
