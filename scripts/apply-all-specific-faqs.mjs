import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const articlesDir = path.join(__dirname, '../src/pages/blog');

// Carrega FAQs específicos
const allFAQs = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'all-specific-faqs.json'), 'utf8')
);

// Função para atualizar FAQs em um artigo
function updateArticleFAQs(filePath, fileName) {
  const faqs = allFAQs[fileName];
  if (!faqs) {
    console.log(`⊘ ${fileName} - sem FAQs definidos`);
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Remove FAQs antigas
  const faqPattern = /<ArticleFAQ faqs=\{[\s\S]*?\]\} \/>/;
  
  if (!content.match(faqPattern)) {
    console.log(`⊘ ${fileName} - FAQ não encontrado no arquivo`);
    return false;
  }

  // Cria novo código de FAQ com formatação limpa
  const faqsFormatted = faqs.map(f => ({
    question: f.q,
    answer: f.a
  }));
  
  const newFAQCode = `<ArticleFAQ faqs={${JSON.stringify(faqsFormatted, null, 10)}} />`;

  // Substitui FAQ antiga por nova
  content = content.replace(faqPattern, newFAQCode);

  fs.writeFileSync(filePath, content, 'utf8');
  return true;
}

// Processa todos os artigos
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.tsx'));
let updated = 0;
let skipped = 0;

console.log(`Processando ${files.length} artigos...\n`);

for (const file of files) {
  const filePath = path.join(articlesDir, file);
  if (updateArticleFAQs(filePath, file)) {
    console.log(`✓ ${file}`);
    updated++;
  } else {
    skipped++;
  }
}

console.log(`\n✓ Total atualizado: ${updated} arquivos`);
console.log(`⊘ Total ignorado: ${skipped} arquivos`);
console.log(`\n🎉 Todos os ${updated} artigos agora têm FAQs únicos e específicos!`);
