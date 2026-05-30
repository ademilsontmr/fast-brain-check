import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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

// Extrair slugs dos arquivos de artigos
const blogDir = path.join(__dirname, '../src/pages/blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.tsx'));

const articleEntries = [];
for (const file of files) {
  const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
  const slugMatch = content.match(/const articleUrl = "https:\/\/bomqi\.com\.br\/blog\/([^"]+)"/);
  if (!slugMatch) continue;
  const dateMatch =
    content.match(/publishDate:\s*"([^"]+)"/) ||
    content.match(/const publishDate = "([^"]+)"/);
  const lastmod = dateMatch ? dateMatch[1] : today;
  articleEntries.push({ slug: slugMatch[1], lastmod });
}

articleEntries.sort((a, b) => b.lastmod.localeCompare(a.lastmod) || a.slug.localeCompare(b.slug));

// Artigos de alta prioridade (mais buscados)
const highPriority = [
  'como-descobrir-meu-qi', 'teste-qi-criancas', 'qi-de-einstein',
  'como-aumentar-qi', 'o-que-e-qi', 'melhor-teste-qi-2026',
  'qi-medio-brasil', 'qi-medio-mundial', 'como-saber-meu-qi-sem-pagar',
  'teste-qi-gratis', 'teste-qi-online-guia-completo', 'como-aumentar-qi-rapidamente',
  'tabela-escala-qi', 'como-medir-qi', 'teste-mensa-brasil', 'qi-faixas-pontuacao-significado',
  'onde-fazer-teste-qi-brasil', 'superdotacao-o-que-e',
  'qi-pele', 'qi-neymar', 'qi-ronaldo-fenomeno', 'qi-ayrton-senna',
  'qi-gisele-bundchen', 'qi-santos-dumont', 'qi-machado-de-assis',
  'qi-silvio-santos', 'qi-xuxa', 'qi-paulo-coelho', 'qi-anitta', 'qi-lula',
  'qi-ronaldinho', 'qi-kaka', 'qi-marta', 'qi-bolsonaro', 'qi-faustao',
  'qi-pablo-marcal', 'qi-tom-jobim', 'qi-chico-buarque', 'qi-elis-regina',
  'qi-oscar-niemeyer', 'qi-drauzio-varella', 'qi-ivete-sangalo',
  'qi-romario', 'qi-rivaldo', 'qi-gal-costa', 'qi-caetano-veloso',
  'qi-gilberto-gil', 'qi-luciano-huck', 'qi-casimiro',
  'qi-fernando-henrique-cardoso', 'qi-tite', 'qi-gugu-liberato',
  'qi-jorge-ben-jor', 'qi-zeze-di-camargo',
  'qi-raul-seixas', 'qi-rita-lee', 'qi-roberto-carlos', 'qi-whindersson-nunes',
  'qi-alok', 'qi-ludmilla', 'qi-gusttavo-lima', 'qi-marina-silva',
  'qi-sergio-moro', 'qi-ratinho', 'qi-rai', 'qi-adriana-lima',
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
console.log(`✓ Sitemap gerado com ${articleEntries.length} artigos + ${staticPages.length} páginas estáticas`);
