import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const articlesDir = path.join(__dirname, '../src/pages/blog');

// Função para gerar keywords baseadas no nome do arquivo
function generateKeywords(filename) {
  const name = filename.replace('.tsx', '');
  
  // Mapeamento manual para artigos específicos
  const manualKeywords = {
    'ComoAdvogadosMelhoramQI': 'advogados QI, profissão advogado inteligência, QI médio advogados, melhorar QI advocacia, inteligência jurídica, raciocínio lógico direito, advogados inteligentes, QI profissionais direito, carreira jurídica QI, desenvolver QI advogado',
    'ComoAndarCavaloMelhoraQI': 'andar cavalo QI, equitação inteligência, cavalo melhora cérebro, hipoterapia QI, benefícios equitação mente, andar cavalo cognição, equitação desenvolvimento cognitivo, cavalo inteligência, hipismo QI, equitação cérebro',
    'ComoAprenderMaisRapidoNeurociencia': 'aprender mais rápido, neurociência aprendizado, técnicas aprendizado rápido, aprender rápido neurociência, métodos aprendizado eficaz, acelerar aprendizado, neurociência educação, aprendizado eficiente, técnicas estudo rápido, otimizar aprendizado',
    'ComoAtivarModoFocoProfundo': 'modo foco profundo, ativar foco, concentração profunda, deep work, foco intenso, técnicas concentração, melhorar foco, estado flow, concentração máxima, produtividade foco',
    'ComoBombeirosMelhoramQI': 'bombeiros QI, profissão bombeiro inteligência, QI médio bombeiros, melhorar QI bombeiro, inteligência bombeiros, raciocínio rápido emergências, bombeiros inteligentes, QI profissionais segurança, carreira bombeiro QI, desenvolver QI bombeiro',
    'ComoCorrerMelhoraQI': 'correr melhora QI, corrida inteligência, exercício aeróbico cérebro, correr cognição, benefícios corrida mente, running QI, corrida desenvolvimento cognitivo, exercício físico inteligência, correr cérebro, cardio QI',
    'ComoEngenheirosMelhoramQI': 'engenheiros QI, profissão engenheiro inteligência, QI médio engenheiros, melhorar QI engenharia, inteligência engenheiros, raciocínio lógico engenharia, engenheiros inteligentes, QI profissionais exatas, carreira engenharia QI, desenvolver QI engenheiro',
    'ComoFicarRicoInternetQI': 'ficar rico internet QI, inteligência ganhar dinheiro online, QI negócios digitais, empreendedorismo digital inteligência, renda online QI, internet riqueza inteligência, negócios online QI, ganhar dinheiro internet inteligente, QI empreendedor digital, riqueza digital QI',
    'ComoFicarRicoRelacaoQI': 'ficar rico QI, relação QI riqueza, inteligência gera dinheiro, QI e sucesso financeiro, inteligência financeira, QI milionários, riqueza inteligência, QI pessoas ricas, sucesso financeiro QI, inteligência patrimônio',
    'ComoFilhosMelhoramQI': 'filhos melhoram QI, ter filhos inteligência, paternidade QI, maternidade inteligência, filhos desenvolvimento cognitivo, pais inteligentes, criar filhos QI, parentalidade inteligência, filhos cérebro, QI pais',
    'ComoIdososMelhoramQI': 'idosos QI, terceira idade inteligência, melhorar QI idoso, envelhecimento cognitivo, idosos cérebro, QI terceira idade, cognição idosos, envelhecimento saudável mente, idosos inteligentes, QI na velhice',
    'ComoInterpretarResultadoQI': 'interpretar resultado QI, entender pontuação QI, resultado teste QI, análise QI, compreender QI, significado pontuação QI, avaliar resultado QI, interpretação teste inteligência, entender score QI, análise resultado QI',
    'ComoJovensMelhoramQI': 'jovens QI, adolescentes inteligência, melhorar QI jovem, juventude desenvolvimento cognitivo, jovens cérebro, QI adolescência, cognição jovens, desenvolver QI juventude, jovens inteligentes, QI na juventude',
    'ComoMaesMelhoramQI': 'mães QI, maternidade inteligência, melhorar QI mãe, mães desenvolvimento cognitivo, mães cérebro, QI maternidade, cognição mães, desenvolver QI maternidade, mães inteligentes, QI mulheres mães'
  };
  
  return manualKeywords[name] || `${name}, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior`;
}

function addKeywordsToFile(filePath, keywords) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('keywords:')) {
    return false;
  }
  
  const patterns = [
    /(useSEO\(\{\s*title: articleTitle,\s*description: articleDescription,\s*url: articleUrl,)\s*\}\);/,
    /(useSEO\(\{\s*title: articleTitle,\s*description: articleDescription,\s*url: articleUrl,)\s*type: "article",\s*\}\);/
  ];
  
  for (const pattern of patterns) {
    if (pattern.test(content)) {
      content = content.replace(
        pattern,
        `$1\n    keywords: "${keywords}",\n  });`
      );
      
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
  }
  
  return false;
}

const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.tsx'));
let updated = 0;

for (const file of files) {
  const filePath = path.join(articlesDir, file);
  const keywords = generateKeywords(file);
  
  if (addKeywordsToFile(filePath, keywords)) {
    console.log(`✓ ${file}`);
    updated++;
  }
}

console.log(`\n✓ Total atualizado: ${updated} arquivos`);
