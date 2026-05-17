import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogDir = path.join(__dirname, '../src/pages/blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.tsx'));

// Mapeamento de formatos antigos para o novo formato
const dateMap = {
  'Janeiro 2024': '15 de Janeiro de 2024',
  'Fevereiro 2024': '15 de Fevereiro de 2024',
  'Março 2024': '15 de Março de 2024',
  'Abril 2024': '15 de Abril de 2024',
  'Maio 2024': '15 de Maio de 2024',
  'Junho 2024': '15 de Junho de 2024',
  'Julho 2024': '15 de Julho de 2024',
  'Agosto 2024': '15 de Agosto de 2024',
  'Setembro 2024': '15 de Setembro de 2024',
  'Outubro 2024': '15 de Outubro de 2024',
  'Novembro 2024': '15 de Novembro de 2024',
  'Dezembro 2024': '15 de Dezembro de 2024',
  'Janeiro 2025': '15 de Janeiro de 2025',
  'Fevereiro 2025': '15 de Fevereiro de 2025',
  'Março 2025': '15 de Março de 2025',
  'Abril 2025': '15 de Abril de 2025',
  'Maio 2025': '15 de Maio de 2025',
  'Junho 2025': '15 de Junho de 2025',
  'Julho 2025': '15 de Julho de 2025',
  'Agosto 2025': '15 de Agosto de 2025',
  'Setembro 2025': '15 de Setembro de 2025',
  'Outubro 2025': '15 de Outubro de 2025',
  'Novembro 2025': '15 de Novembro de 2025',
  'Dezembro 2025': '15 de Dezembro de 2025',
  'Janeiro 2026': '15 de Janeiro de 2026',
  'Fevereiro 2026': '15 de Fevereiro de 2026',
  'Março 2026': '15 de Março de 2026',
  'Abril 2026': '15 de Abril de 2026',
};

let updated = 0;

files.forEach(file => {
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const [old, newDate] of Object.entries(dateMap)) {
    const regex = new RegExp(`<time>${old}</time>`, 'g');
    if (regex.test(content)) {
      content = content.replace(regex, `<time>${newDate}</time>`);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ ${file}`);
    updated++;
  }
});

console.log(`\nConcluído! ${updated} arquivos atualizados.`);
