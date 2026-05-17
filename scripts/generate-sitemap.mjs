import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const today = '2026-05-08';

const staticPages = [
  { loc: 'https://bomqi.com.br/', changefreq: 'weekly', priority: '1.0', lastmod: today },
  { loc: 'https://bomqi.com.br/blog', changefreq: 'weekly', priority: '0.9', lastmod: today },
  { loc: 'https://bomqi.com.br/sobre-o-teste', changefreq: 'monthly', priority: '0.8', lastmod: today },
  { loc: 'https://bomqi.com.br/como-funciona', changefreq: 'monthly', priority: '0.8', lastmod: today },
  { loc: 'https://bomqi.com.br/perguntas-frequentes', changefreq: 'monthly', priority: '0.8', lastmod: today },
  { loc: 'https://bomqi.com.br/qi-por-pais', changefreq: 'monthly', priority: '0.8', lastmod: today },
  { loc: 'https://bomqi.com.br/contato', changefreq: 'monthly', priority: '0.6', lastmod: today },
  { loc: 'https://bomqi.com.br/politica-privacidade', changefreq: 'yearly', priority: '0.4', lastmod: today },
  { loc: 'https://bomqi.com.br/termos-uso', changefreq: 'yearly', priority: '0.4', lastmod: today },
];

// Extrair slugs dos arquivos de artigos
const blogDir = path.join(__dirname, '../src/pages/blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.tsx'));

const articleSlugs = [];
for (const file of files) {
  const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
  const match = content.match(/const articleUrl = "https:\/\/bomqi\.com\.br\/blog\/([^"]+)"/);
  if (match) {
    articleSlugs.push(match[1]);
  }
}

articleSlugs.sort();

// Artigos de alta prioridade (mais buscados)
const highPriority = [
  'como-descobrir-meu-qi', 'teste-qi-criancas', 'qi-de-einstein',
  'como-aumentar-qi', 'o-que-e-qi', 'melhor-teste-qi-2026',
  'qi-medio-brasil', 'qi-medio-mundial', 'como-saber-meu-qi-sem-pagar',
  'teste-qi-gratis', 'teste-qi-online-guia-completo', 'como-aumentar-qi-rapidamente',
  'qi-alto-caracteristicas', 'o-que-e-qi-baixo', 'sinais-qi-alto',
  'qi-pode-aumentar-ao-longo-vida', 'qi-medio-por-pais', 'qi-medio-por-profissao',
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Páginas estáticas
for (const page of staticPages) {
  xml += `  <url>
    <loc>${page.loc}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${page.lastmod}</lastmod>
  </url>\n`;
}

xml += `\n  <!-- Blog Articles -->\n`;

// Artigos do blog
for (const slug of articleSlugs) {
  const priority = highPriority.includes(slug) ? '0.9' : '0.7';
  xml += `  <url>
    <loc>https://bomqi.com.br/blog/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
    <lastmod>${today}</lastmod>
  </url>\n`;
}

xml += `</urlset>\n`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), xml, 'utf8');
console.log(`✓ Sitemap gerado com ${articleSlugs.length} artigos + ${staticPages.length} páginas estáticas`);
