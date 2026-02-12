import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const articlesDir = path.join(__dirname, '../src/pages/blog');

const allKeywords = {
  'ComoAumentarQI.tsx': 'como aumentar QI, aumentar inteligência, melhorar QI, desenvolver QI, treinar inteligência, exercícios QI, técnicas aumentar QI, métodos melhorar inteligência, elevar QI, potencializar inteligência',
  'ComoCorrerMelhoraQI.tsx': 'correr melhora QI, corrida inteligência, exercício aeróbico cérebro, correr cognição, benefícios corrida mente, running QI, corrida desenvolvimento cognitivo, exercício físico inteligência, correr cérebro, cardio QI',
  'ComoEngenheirosMelhoramQI.tsx': 'engenheiros QI, profissão engenheiro inteligência, QI médio engenheiros, melhorar QI engenharia, inteligência engenheiros, raciocínio lógico engenharia, engenheiros inteligentes, QI profissionais exatas, carreira engenharia QI, desenvolver QI engenheiro',
  'ComoMaesMelhoramQI.tsx': 'mães QI, maternidade inteligência, melhorar QI mãe, mães desenvolvimento cognitivo, mães cérebro, QI maternidade, cognição mães, desenvolver QI maternidade, mães inteligentes, QI mulheres mães',
  'ComoMelhorarQI30Dias.tsx': 'melhorar QI 30 dias, aumentar inteligência mês, QI em 30 dias, treino QI mensal, desenvolver QI rápido, programa 30 dias QI, desafio QI mês, melhorar inteligência 30 dias, treino intensivo QI, QI um mês',
  'ComoMelhorarQIAdolescentes.tsx': 'melhorar QI adolescentes, QI adolescência, desenvolver inteligência jovens, treinar QI adolescente, exercícios QI jovens, adolescentes inteligentes, aumentar QI juventude, cognição adolescentes, QI teens, inteligência adolescência',
  'ComoMercadoFinanceiroMelhoraQI.tsx': 'mercado financeiro QI, investimentos inteligência, trading QI, finanças desenvolvimento cognitivo, investir inteligência, mercado financeiro cérebro, trader QI, investimentos cognição, bolsa valores QI, finanças inteligência',
  'ComoNetosMelhoramQI.tsx': 'netos QI, avós inteligência, convivência netos cérebro, netos desenvolvimento cognitivo, avós netos QI, relacionamento intergeracional inteligência, netos estimulam mente, avós cognição, netos cérebro avós, QI avós',
  'ComoPaisMelhoramQI.tsx': 'pais QI, paternidade inteligência, melhorar QI pai, pais desenvolvimento cognitivo, pais cérebro, QI paternidade, cognição pais, desenvolver QI paternidade, pais inteligentes, QI homens pais',
  'ComoProfissionaisSaudeMelhoramQI.tsx': 'profissionais saúde QI, área saúde inteligência, QI médio saúde, melhorar QI saúde, inteligência profissionais saúde, raciocínio clínico, profissionais saúde inteligentes, QI área médica, carreira saúde QI, desenvolver QI saúde',
  'ComoReligiosidadeInfluenciaQI.tsx': 'religiosidade QI, religião inteligência, fé cognição, espiritualidade QI, religião cérebro, religiosidade desenvolvimento cognitivo, fé inteligência, religião mente, espiritualidade cognição, QI religião',
  'ComoSegurancaTrabalhoMelhoraQI.tsx': 'segurança trabalho QI, profissão segurança inteligência, QI médio segurança, melhorar QI segurança, inteligência profissionais segurança, raciocínio preventivo, segurança inteligentes, QI área segurança, carreira segurança QI, desenvolver QI segurança',
  'ComoTrabalhadoresMelhoramQI.tsx': 'trabalhadores QI, profissionais inteligência, QI médio trabalhadores, melhorar QI trabalho, inteligência trabalhadores, cognição profissional, trabalhadores inteligentes, QI mercado trabalho, carreira QI, desenvolver QI profissional',
  'QIBaixoCompleto.tsx': 'QI baixo, inteligência abaixo média, QI inferior, baixo QI características, QI reduzido, inteligência limitada, QI abaixo 90, déficit cognitivo, QI baixo causas, melhorar QI baixo',
  'QIInteligenciaSocialSucesso.tsx': 'QI inteligência social, inteligência social sucesso, habilidades sociais QI, QI emocional social, networking inteligência, relacionamentos QI, soft skills inteligência, inteligência interpessoal QI, social skills sucesso, QI vs inteligência social',
  'QIMedioAdvogados.tsx': 'QI médio advogados, inteligência advogados, QI profissão direito, advogados inteligentes, QI área jurídica, inteligência jurídica, QI médio direito, advogados QI alto, profissão advogado inteligência, QI carreira jurídica',
  'QIMedioAdolescentes.tsx': 'QI médio adolescentes, inteligência adolescência, QI teens, adolescentes QI, QI juventude, inteligência jovens, QI médio jovens, adolescentes inteligentes, QI faixa etária adolescente, cognição adolescência',
  'QIMedioBombeiros.tsx': 'QI médio bombeiros, inteligência bombeiros, QI profissão bombeiro, bombeiros inteligentes, QI área segurança, inteligência emergências, QI médio segurança, bombeiros QI alto, profissão bombeiro inteligência, QI carreira bombeiro',
  'QIMedioCavaleiros.tsx': 'QI médio cavaleiros, inteligência equitação, QI profissão cavalo, cavaleiros inteligentes, QI área equestre, inteligência hipismo, QI médio equitação, cavaleiros QI alto, profissão cavaleiro inteligência, QI carreira equestre',
  'QIMedioCiclistas.tsx': 'QI médio ciclistas, inteligência ciclismo, QI profissão bike, ciclistas inteligentes, QI área cycling, inteligência pedal, QI médio bicicleta, ciclistas QI alto, profissão ciclista inteligência, QI carreira ciclismo',
  'QIMedioCorredores.tsx': 'QI médio corredores, inteligência corrida, QI profissão running, corredores inteligentes, QI área atletismo, inteligência corrida, QI médio running, corredores QI alto, profissão corredor inteligência, QI carreira corrida',
  'QIMedioEngenheiros.tsx': 'QI médio engenheiros, inteligência engenharia, QI profissão engenheiro, engenheiros inteligentes, QI área exatas, inteligência técnica, QI médio engenharia, engenheiros QI alto, profissão engenheiro inteligência, QI carreira engenharia',
  'QIMedioEstudantes.tsx': 'QI médio estudantes, inteligência alunos, QI profissão estudante, estudantes inteligentes, QI área acadêmica, inteligência escolar, QI médio escola, estudantes QI alto, estudantes inteligência, QI carreira acadêmica',
  'QIMedioFilhos.tsx': 'QI médio filhos, inteligência crianças, QI filhos, crianças inteligentes, QI infantil, inteligência infância, QI médio criança, filhos QI alto, crianças inteligência, QI desenvolvimento infantil',
  'QIMedioIdosos.tsx': 'QI médio idosos, inteligência terceira idade, QI idosos, idosos inteligentes, QI velhice, inteligência envelhecimento, QI médio terceira idade, idosos QI alto, terceira idade inteligência, QI envelhecimento',
  'QIMedioJovens.tsx': 'QI médio jovens, inteligência juventude, QI jovens, jovens inteligentes, QI adolescência, inteligência jovem, QI médio juventude, jovens QI alto, juventude inteligência, QI faixa etária jovem',
  'QIMedioMaes.tsx': 'QI médio mães, inteligência maternidade, QI mães, mães inteligentes, QI materna, inteligência maternal, QI médio maternidade, mães QI alto, maternidade inteligência, QI mulheres mães',
  'QIMedioMedicos.tsx': 'QI médio médicos, inteligência medicina, QI profissão médico, médicos inteligentes, QI área saúde, inteligência médica, QI médio medicina, médicos QI alto, profissão médico inteligência, QI carreira medicina',
  'QIMedioMercadoFinanceiro.tsx': 'QI médio mercado financeiro, inteligência finanças, QI profissão trader, traders inteligentes, QI área financeira, inteligência investimentos, QI médio finanças, traders QI alto, profissão trader inteligência, QI carreira financeira',
  'QIMedioNetos.tsx': 'QI médio netos, inteligência netos, QI netos, netos inteligentes, QI infantil netos, inteligência crianças netos, QI médio criança neto, netos QI alto, netos inteligência, QI desenvolvimento netos',
  'QIMedioPais.tsx': 'QI médio pais, inteligência paternidade, QI pais, pais inteligentes, QI paterno, inteligência paternal, QI médio paternidade, pais QI alto, paternidade inteligência, QI homens pais',
  'QIMedioPorGenero.tsx': 'QI médio gênero, inteligência homens mulheres, QI por sexo, diferença QI gênero, QI masculino feminino, inteligência gênero, QI médio homens, QI médio mulheres, gênero inteligência, QI sexo',
  'QIMedioProfessores.tsx': 'QI médio professores, inteligência docência, QI profissão professor, professores inteligentes, QI área educação, inteligência pedagógica, QI médio docência, professores QI alto, profissão professor inteligência, QI carreira docente',
  'QIMedioProfissionaisSaude.tsx': 'QI médio profissionais saúde, inteligência área saúde, QI profissão saúde, profissionais saúde inteligentes, QI área médica, inteligência saúde, QI médio saúde, profissionais saúde QI alto, profissão saúde inteligência, QI carreira saúde',
  'QIMedioSegurancaTrabalho.tsx': 'QI médio segurança trabalho, inteligência segurança, QI profissão segurança, profissionais segurança inteligentes, QI área segurança, inteligência preventiva, QI médio segurança, segurança QI alto, profissão segurança inteligência, QI carreira segurança',
  'QIMedioTrabalhadores.tsx': 'QI médio trabalhadores, inteligência profissionais, QI profissão trabalhador, trabalhadores inteligentes, QI mercado trabalho, inteligência profissional, QI médio profissionais, trabalhadores QI alto, profissão trabalhador inteligência, QI carreira profissional',
  'QINormal.tsx': 'QI normal, inteligência média, QI médio, QI padrão, inteligência normal, QI 90-110, faixa QI normal, QI dentro média, inteligência média população, QI típico',
  'QIeAnsiedade.tsx': 'QI ansiedade, inteligência ansiedade, ansiedade cognição, QI transtorno ansiedade, ansiedade cérebro, QI estresse, ansiedade desenvolvimento cognitivo, inteligência ansioso, QI saúde mental, ansiedade mente',
  'QIeAutismo.tsx': 'QI autismo, inteligência autista, autismo cognição, QI TEA, autismo cérebro, QI espectro autista, autismo desenvolvimento cognitivo, inteligência autismo, QI transtorno autista, autismo mente',
  'QIeExercicioFisico.tsx': 'QI exercício físico, inteligência atividade física, exercício cognição, QI treino, exercício cérebro, QI fitness, exercício desenvolvimento cognitivo, inteligência exercício, QI atividade física, exercício mente',
  'QIeMemoria.tsx': 'QI memória, inteligência memória, memória cognição, QI memorização, memória cérebro, QI capacidade memória, memória desenvolvimento cognitivo, inteligência memória, QI retenção, memória mente',
  'QIeSono.tsx': 'QI sono, inteligência sono, sono cognição, QI dormir, sono cérebro, QI qualidade sono, sono desenvolvimento cognitivo, inteligência sono, QI descanso, sono mente',
  'QIeTDAH.tsx': 'QI TDAH, inteligência TDAH, TDAH cognição, QI déficit atenção, TDAH cérebro, QI hiperatividade, TDAH desenvolvimento cognitivo, inteligência TDAH, QI transtorno atenção, TDAH mente',
  'ReligiosidadeEQI.tsx': 'religiosidade QI, religião inteligência, fé cognição, espiritualidade QI, religião cérebro, religiosidade desenvolvimento cognitivo, fé inteligência, religião mente, espiritualidade cognição, QI religião',
  'SinaisQIAlto.tsx': 'sinais QI alto, características QI alto, sintomas inteligência alta, indicadores QI alto, traços QI alto, sinais inteligência superior, características pessoas inteligentes, como saber QI alto, identificar QI alto, sinais inteligência',
  'TesteQIConfiavel.tsx': 'teste QI confiável, teste inteligência confiável, QI teste válido, teste QI preciso, avaliação QI confiável, teste QI científico, teste inteligência válido, QI teste sério, teste QI legítimo, avaliação inteligência confiável',
  'TesteQIGratis.tsx': 'teste QI grátis, teste inteligência gratuito, QI teste free, teste QI online grátis, avaliação QI grátis, teste QI sem pagar, teste inteligência free, QI teste gratuito, teste QI livre, avaliação inteligência grátis'
};

function addKeywords(filePath, kw) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('keywords:')) {
    return false;
  }
  
  // Tenta vários padrões
  const patterns = [
    // Padrão inline
    /(useSEO\(\{\s*title:\s*"[^"]+",\s*description:\s*\w+,\s*url:\s*\w+)\s*\}\);/,
    // Padrão multiline sem type
    /(useSEO\(\{\s*title: articleTitle,\s*description: articleDescription,\s*url: articleUrl,)\s*\}\);/,
    // Padrão multiline com type
    /(useSEO\(\{\s*title: articleTitle,\s*description: articleDescription,\s*url: articleUrl,)\s*type: "article",\s*\}\);/
  ];
  
  for (const pattern of patterns) {
    if (pattern.test(content)) {
      if (content.includes('useSEO({ title:')) {
        // Inline
        content = content.replace(pattern, `$1, keywords: "${kw}" });`);
      } else {
        // Multiline
        content = content.replace(pattern, `$1\n    keywords: "${kw}",\n  });`);
      }
      
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
  }
  
  return false;
}

let updated = 0;
for (const [filename, kw] of Object.entries(allKeywords)) {
  const filePath = path.join(articlesDir, filename);
  if (fs.existsSync(filePath)) {
    if (addKeywords(filePath, kw)) {
      console.log(`✓ ${filename}`);
      updated++;
    }
  }
}

console.log(`\n✓ Total atualizado: ${updated} arquivos`);
