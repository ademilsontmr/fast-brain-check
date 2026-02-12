import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogDir = path.join(__dirname, '../src/pages/blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.tsx'));

console.log(`Atualizando ${files.length} arquivos...`);

let updated = 0;
let skipped = 0;

files.forEach(file => {
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Adicionar import do ArticleHeader se não existir
  if (!content.includes('ArticleHeader')) {
    content = content.replace(
      /import Footer from "@\/components\/Footer";/,
      'import Footer from "@/components/Footer";\nimport ArticleHeader from "@/components/ArticleHeader";'
    );
  }
  
  // Substituir o header inline pelo componente
  const headerRegex = /<header className="border-b border-border bg-background\/80 backdrop-blur-sm sticky top-0 z-50">[\s\S]*?<\/header>/;
  
  if (headerRegex.test(content)) {
    content = content.replace(headerRegex, '<ArticleHeader />');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ ${file}`);
    updated++;
  } else {
    console.log(`⊘ ${file} (já atualizado)`);
    skipped++;
  }
});

console.log(`\nConcluído! ${updated} atualizados, ${skipped} ignorados.`);
