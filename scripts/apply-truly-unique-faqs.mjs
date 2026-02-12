import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const articlesDir = path.join(__dirname, '../src/pages/blog');

// Carrega FAQs únicos
const uniqueFAQs = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'truly-unique-faqs.json'), 'utf8')
);

// Atualiza FAQs
function updateFAQs(filePath, fileName) {
  const faqs = uniqueFAQs[fileName];
  if (!faqs) return false;

  let content = fs.readFileSync(filePath, 'utf8');
  const faqPattern = /<ArticleFAQ faqs=\{[\s\S]*?\]\} \/>/;
  
  if (!content.match(faqPattern)) {
    console.log(`⊘ ${fileName} - FAQ não encontrado`);
    return false;
  }

  const faqsFormatted = faqs.map(f => ({ question: f.q, answer: f.a }));
  const newFAQCode = `<ArticleFAQ faqs={${JSON.stringify(faqsFormatted, null, 10)}} />`;
  
  content = content.replace(faqPattern, newFAQCode);
  fs.writeFileSync(filePath, content, 'utf8');
  return true;
}

// Processa
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.tsx'));
let updated = 0;

for (const file of files) {
  if (updateFAQs(path.join(articlesDir, file), file)) {
    console.log(`✓ ${file}`);
    updated++;
  }
}

console.log(`\n✓ ${updated} artigos atualizados com FAQs únicos!`);
