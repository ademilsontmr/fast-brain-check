import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const articlesDir = path.join(__dirname, '../src/pages/blog');

const keywords = {
  'ComoAdvogadosMelhoramQI.tsx': 'advogados QI, profissão advogado inteligência, QI médio advogados, melhorar QI advocacia, inteligência jurídica, raciocínio lógico direito, advogados inteligentes, QI profissionais direito, carreira jurídica QI, desenvolver QI advogado',
  'ComoAndarCavaloMelhoraQI.tsx': 'andar cavalo QI, equitação inteligência, cavalo melhora cérebro, hipoterapia QI, benefícios equitação mente, andar cavalo cognição, equitação desenvolvimento cognitivo, cavalo inteligência, hipismo QI, equitação cérebro',
  'ComoAumentarQI.tsx': 'como aumentar QI, aumentar inteligência, melhorar QI, desenvolver QI, treinar inteligência, exercícios QI, técnicas aumentar QI, métodos melhorar inteligência, elevar QI, potencializar inteligência',
  'ComoBombeirosMelhoramQI.tsx': 'bombeiros QI, profissão bombeiro inteligência, QI médio bombeiros, melhorar QI bombeiro, inteligência bombeiros, raciocínio rápido emergências, bombeiros inteligentes, QI profissionais segurança, carreira bombeiro QI, desenvolver QI bombeiro',
  'ComoCorrerMelhoraQI.tsx': 'correr melhora QI, corrida inteligência, exercício aeróbico cérebro, correr cognição, benefícios corrida mente, running QI, corrida desenvolvimento cognitivo, exercício físico inteligência, correr cérebro, cardio QI',
  'ComoEngenheirosMelhoramQI.tsx': 'engenheiros QI, profissão engenheiro inteligência, QI médio engenheiros, melhorar QI engenharia, inteligência engenheiros, raciocínio lógico engenharia, engenheiros inteligentes, QI profissionais exatas, carreira engenharia QI, desenvolver QI engenheiro',
  'ComoFilhosMelhoramQI.tsx': 'filhos melhoram QI, ter filhos inteligência, paternidade QI, maternidade inteligência, filhos desenvolvimento cognitivo, pais inteligentes, criar filhos QI, parentalidade inteligência, filhos cérebro, QI pais',
  'ComoIdososMelhoramQI.tsx': 'idosos QI, terceira idade inteligência, melhorar QI idoso, envelhecimento cognitivo, idosos cérebro, QI terceira idade, cognição idosos, envelhecimento saudável mente, idosos inteligentes, QI na velhice',
  'ComoJovensMelhoramQI.tsx': 'jovens QI, adolescentes inteligência, melhorar QI jovem, juventude desenvolvimento cognitivo, jovens cérebro, QI adolescência, cognição jovens, desenvolver QI juventude, jovens inteligentes, QI na juventude',
  'ComoMaesMelhoramQI.tsx': 'mães QI, maternidade inteligência, melhorar QI mãe, mães desenvolvimento cognitivo, mães cérebro, QI maternidade, cognição mães, desenvolver QI maternidade, mães inteligentes, QI mulheres mães',
  'ComoMedicosMelhoramQI.tsx': 'médicos QI, profissão médico inteligência, QI médio médicos, melhorar QI medicina, inteligência médicos, raciocínio clínico, médicos inteligentes, QI profissionais saúde, carreira medicina QI, desenvolver QI médico',
  'ComoMelhorarQI30Dias.tsx': 'melhorar QI 30 dias, aumentar inteligência mês, QI em 30 dias, treino QI mensal, desenvolver QI rápido, programa 30 dias QI, desafio QI mês, melhorar inteligência 30 dias, treino intensivo QI, QI um mês',
  'ComoMelhorarQIAdolescentes.tsx': 'melhorar QI adolescentes, QI adolescência, desenvolver inteligência jovens, treinar QI adolescente, exercícios QI jovens, adolescentes inteligentes, aumentar QI juventude, cognição adolescentes, QI teens, inteligência adolescência',
  'ComoMelhorarQIEstudantes.tsx': 'melhorar QI estudantes, QI alunos, desenvolver inteligência estudantes, treinar QI escola, exercícios QI estudantes, estudantes inteligentes, aumentar QI acadêmico, cognição estudantes, QI escolar, inteligência estudantil',
  'ComoMercadoFinanceiroMelhoraQI.tsx': 'mercado financeiro QI, investimentos inteligência, trading QI, finanças desenvolvimento cognitivo, investir inteligência, mercado financeiro cérebro, trader QI, investimentos cognição, bolsa valores QI, finanças inteligência',
  'ComoNetosMelhoramQI.tsx': 'netos QI, avós inteligência, convivência netos cérebro, netos desenvolvimento cognitivo, avós netos QI, relacionamento intergeracional inteligência, netos estimulam mente, avós cognição, netos cérebro avós, QI avós',
  'ComoPaisMelhoramQI.tsx': 'pais QI, paternidade inteligência, melhorar QI pai, pais desenvolvimento cognitivo, pais cérebro, QI paternidade, cognição pais, desenvolver QI paternidade, pais inteligentes, QI homens pais',
  'ComoPedalMelhoraQI.tsx': 'pedalar QI, ciclismo inteligência, bicicleta cérebro, pedalar cognição, benefícios ciclismo mente, bike QI, ciclismo desenvolvimento cognitivo, pedalar inteligência, bicicleta QI, cycling cérebro',
  'ComoProfessoresMelhoramQI.tsx': 'professores QI, profissão professor inteligência, QI médio professores, melhorar QI docência, inteligência professores, raciocínio pedagógico, professores inteligentes, QI profissionais educação, carreira docente QI, desenvolver QI professor',
  'ComoProfissionaisSaudeMelhoramQI.tsx': 'profissionais saúde QI, área saúde inteligência, QI médio saúde, melhorar QI saúde, inteligência profissionais saúde, raciocínio clínico, profissionais saúde inteligentes, QI área médica, carreira saúde QI, desenvolver QI saúde',
  'ComoReligiosidadeInfluenciaQI.tsx': 'religiosidade QI, religião inteligência, fé cognição, espiritualidade QI, religião cérebro, religiosidade desenvolvimento cognitivo, fé inteligência, religião mente, espiritualidade cognição, QI religião',
  'ComoSegurancaTrabalhoMelhoraQI.tsx': 'segurança trabalho QI, profissão segurança inteligência, QI médio segurança, melhorar QI segurança, inteligência profissionais segurança, raciocínio preventivo, segurança inteligentes, QI área segurança, carreira segurança QI, desenvolver QI segurança',
  'ComoTrabalhadoresMelhoramQI.tsx': 'trabalhadores QI, profissionais inteligência, QI médio trabalhadores, melhorar QI trabalho, inteligência trabalhadores, cognição profissional, trabalhadores inteligentes, QI mercado trabalho, carreira QI, desenvolver QI profissional',
  'QIBaixoCompleto.tsx': 'QI baixo, inteligência abaixo média, QI inferior, baixo QI características, QI reduzido, inteligência limitada, QI abaixo 90, déficit cognitivo, QI baixo causas, melhorar QI baixo',
  'QIInteligenciaSocialSucesso.tsx': 'QI inteligência social, inteligência social sucesso, habilidades sociais QI, QI emocional social, networking inteligência, relacionamentos QI, soft skills inteligência, inteligência interpessoal QI, social skills sucesso, QI vs inteligência social'
};

function addKeywords(filePath, kw) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('keywords:')) {
    return false;
  }
  
  // Padrão inline: useSEO({ title: "...", description: ..., url: ... });
  const pattern = /(useSEO\(\{\s*title:\s*"[^"]+",\s*description:\s*\w+,\s*url:\s*\w+)\s*\}\);/;
  
  if (pattern.test(content)) {
    content = content.replace(
      pattern,
      `$1, keywords: "${kw}" });`
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  
  return false;
}

let updated = 0;
for (const [filename, kw] of Object.entries(keywords)) {
  const filePath = path.join(articlesDir, filename);
  if (fs.existsSync(filePath)) {
    if (addKeywords(filePath, kw)) {
      console.log(`✓ ${filename}`);
      updated++;
    }
  }
}

console.log(`\n✓ Total atualizado: ${updated} arquivos`);
