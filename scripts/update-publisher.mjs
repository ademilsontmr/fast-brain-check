import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const articlesDir = path.join(__dirname, '../src/pages/blog');

const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.tsx'));
let updated = 0;

for (const file of files) {
  const filePath = path.join(articlesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Substitui todas as ocorrências de publisher e author com BomQI para Equipe Bom QI
  const oldPattern1 = /"name":\s*"BomQI"/g;
  
  if (content.match(oldPattern1)) {
    content = content.replace(oldPattern1, '"name": "Equipe Bom QI"');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ ${file}`);
    updated++;
  }
}

console.log(`\n✓ Total atualizado: ${updated} arquivos`);
