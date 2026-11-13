import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { REDIRECT_SLUGS } from './seo-redirects.mjs';
import { getBlogPrerenderRoutes } from './blog-routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const today = new Date().toISOString().slice(0, 10);

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

const blogDir = path.join(__dirname, '../src/pages/blog');
const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.tsx'));

/** lastmod por slug (melhor data encontrada nos .tsx) */
const lastmodBySlug = new Map();
for (const file of files) {
  const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
  const slugMatch = content.match(/const articleUrl = "https:\/\/bomqi\.com\.br\/blog\/([^"]+)"/);
  if (!slugMatch) continue;
  const slug = slugMatch[1];
  if (REDIRECT_SLUGS.has(slug)) continue;
  const dateMatch =
    content.match(/modifiedDate:\s*"([^"]+)"/) ||
    content.match(/publishDate:\s*"([^"]+)"/) ||
    content.match(/const publishDate = "([^"]+)"/);
  const lastmod = dateMatch ? dateMatch[1] : today;
  const prev = lastmodBySlug.get(slug);
  if (!prev || lastmod > prev) lastmodBySlug.set(slug, lastmod);
}

// Fonte de verdade: rotas reais do App (sem Navigate/301)
const liveSlugs = getBlogPrerenderRoutes()
  .filter((r) => r.startsWith('/blog/') && r !== '/blog')
  .map((r) => r.replace(/^\/blog\//, ''))
  .filter((slug) => !REDIRECT_SLUGS.has(slug));

const articleEntries = [...new Set(liveSlugs)].map((slug) => ({
  slug,
  lastmod: lastmodBySlug.get(slug) || today,
}));

articleEntries.sort((a, b) => b.lastmod.localeCompare(a.lastmod) || a.slug.localeCompare(b.slug));

const highPriority = [
  'teste-de-qi',
  'teste-de-qi-gratuito',
  'teste-de-qi-gratuito-rapido',
  'teste-do-qi',
  'teste-de-qi-sem-cadastro',
  'teste-de-qi-no-celular',
  'teste-saude-mental-ou-qi',
  'media-qi-brasil',
  'genetica-vs-ambiente-qi',
  'teste-qi-criancas',
  'qi-de-einstein',
  'como-aumentar-qi',
  'o-que-e-qi',
  'melhor-teste-qi-2026',
  'qi-medio-mundial',
  'como-saber-meu-qi-sem-pagar',
  'como-saber-meu-qi',
  'teste-qi-gratuito-e-confiavel',
  'teste-qi-oficial',
  'teste-qi-em-portugues',
  'teste-qi-com-resultado-imediato',
  'teste-qi-online-guia-completo',
  'como-aumentar-qi-rapidamente',
  'tabela-escala-qi',
  'como-medir-qi',
  'teste-mensa-brasil',
  'qi-faixas-pontuacao-significado',
  'onde-fazer-teste-qi-brasil',
  'superdotacao-o-que-e',
  'qi-medio-por-pais',
  'o-que-e-considerado-qi-alto',
  'como-interpretar-resultado-qi',
  'o-que-e-qi-medio',
  'teste-de-inteligencia-online',
  'qi-de-famosos',
  'qi-pode-aumentar-ao-longo-vida',
  'qi-medio-por-profissao',
  'quanto-custa-teste-de-qi',
  'qi-100-significa',
  'qi-110-e-bom',
  'percentil-qi-o-que-significa',
  'teste-raciocinio-logico-online',
  'como-fazer-teste-de-qi',
  'qi-120-e-bom',
  'qi-130-significa',
  'idade-certa-para-fazer-teste-qi',
  'melhores-testes-qi-online-2026',
  'qual-meu-qi',
  'teste-qi-online-gratuito',
  'teste-qi-infantil',
  'myiq-e-confiavel',
  'calcular-qi',
  'qi-140-significa',
  'qi-150-significa',
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const page of staticPages) {
  xml += `  <url>
    <loc>${page.loc}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${page.lastmod}</lastmod>
  </url>\n`;
}

xml += `\n  <!-- Blog Articles -->\n`;

for (const { slug, lastmod } of articleEntries) {
  const priority = highPriority.includes(slug) ? '0.9' : '0.7';
  xml += `  <url>
    <loc>https://bomqi.com.br/blog/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
    <lastmod>${lastmod}</lastmod>
  </url>\n`;
}

xml += `</urlset>\n`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), xml, 'utf8');
console.log(
  `✓ Sitemap gerado com ${articleEntries.length} artigos + ${staticPages.length} páginas estáticas (satélites 301 excluídos)`
);
