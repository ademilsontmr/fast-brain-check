import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const articlesDir = path.join(__dirname, '../src/pages/blog');

// Mapeamento de keywords específicas por arquivo
const keywordsMap = {
  'AtividadesQueAumentamQI.tsx': 'atividades aumentam QI, exercícios cognitivos, jogos inteligência, treinar cérebro, melhorar QI atividades, exercícios mentais, atividades cerebrais, desenvolver inteligência, práticas aumentar QI, hobbies inteligentes',
  'ComoAumentarQI.tsx': 'como aumentar QI, aumentar inteligência, melhorar QI, desenvolver QI, treinar inteligência, exercícios QI, técnicas aumentar QI, métodos melhorar inteligência, elevar QI, potencializar inteligência',
  'ComoAumentarQIRapidamente.tsx': 'aumentar QI rápido, melhorar inteligência rápido, QI rápido, técnicas rápidas QI, acelerar inteligência, métodos rápidos QI, desenvolver QI rápido, treino intensivo QI, boost inteligência, QI em pouco tempo',
  'ComoFicarMaisInteligente.tsx': 'como ficar mais inteligente, ser mais inteligente, desenvolver inteligência, melhorar capacidade mental, aumentar inteligência, treinar mente, ficar inteligente, desenvolver cérebro, potencializar mente, inteligência superior',
};

function addKeywordsToFile(filePath, keywords) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Verifica se já tem keywords
  if (content.includes('keywords:')) {
    console.log(`✓ ${path.basename(filePath)} já tem keywords`);
    return false;
  }
  
  // Procura pelo padrão useSEO sem keywords
  const pattern = /(useSEO\(\{\s*title: articleTitle,\s*description: articleDescription,\s*url: articleUrl,)\s*\}\);/;
  
  if (pattern.test(content)) {
    content = content.replace(
      pattern,
      `$1\n    keywords: "${keywords}",\n  });`
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Adicionado keywords em ${path.basename(filePath)}`);
    return true;
  }
  
  console.log(`✗ Padrão não encontrado em ${path.basename(filePath)}`);
  return false;
}

let updated = 0;
for (const [filename, keywords] of Object.entries(keywordsMap)) {
  const filePath = path.join(articlesDir, filename);
  if (fs.existsSync(filePath)) {
    if (addKeywordsToFile(filePath, keywords)) {
      updated++;
    }
  }
}

console.log(`\n✓ Total atualizado: ${updated} arquivos`);
