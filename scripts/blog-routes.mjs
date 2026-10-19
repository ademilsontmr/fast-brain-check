import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { INSTITUTIONAL_PRERENDER_ROUTES } from "./seo-redirects.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");

/** Slugs extraídos dos artigos (articleUrl nos .tsx). */
export function getBlogArticleSlugs() {
  const blogDir = path.join(rootDir, "src/pages/blog");
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".tsx"));
  const slugs = [];

  for (const file of files) {
    const content = fs.readFileSync(path.join(blogDir, file), "utf8");
    const slugMatch = content.match(
      /const articleUrl = "https:\/\/bomqi\.com\.br\/blog\/([^"]+)"/
    );
    if (slugMatch) slugs.push(slugMatch[1]);
  }

  return [...new Set(slugs)].sort();
}

/** Rotas /blog/* registradas no App.tsx (fonte de verdade para o router). */
export function getBlogRoutesFromApp() {
  const appPath = path.join(rootDir, "src/App.tsx");
  const content = fs.readFileSync(appPath, "utf8");
  const routes = new Set(["/blog"]);

  for (const match of content.matchAll(/path="(\/blog[^"]*)"/g)) {
    routes.add(match[1]);
  }

  return [...routes].sort();
}

/** Rotas que só redirecionam (<Navigate />) — não geram HTML no prerender. */
export function getBlogRedirectRoutes() {
  const appPath = path.join(rootDir, "src/App.tsx");
  const content = fs.readFileSync(appPath, "utf8");
  const redirects = new Set();

  for (const match of content.matchAll(
    /path="(\/blog\/[^"]+)"\s+element=\{<Navigate\b/g
  )) {
    redirects.add(match[1]);
  }

  return [...redirects];
}

/** Todas as rotas do blog para prerender. */
export function getBlogPrerenderRoutes() {
  const redirectRoutes = new Set(getBlogRedirectRoutes());
  const fromApp = getBlogRoutesFromApp().filter((route) => !redirectRoutes.has(route));
  const fromArticles = getBlogArticleSlugs().map((slug) => `/blog/${slug}`);
  return [...new Set([...fromApp, ...fromArticles])]
    .filter((route) => !redirectRoutes.has(route))
    .sort();
}

/** Rotas institucionais + home para prerender (além do blog). */
export function getInstitutionalPrerenderRoutes() {
  return [...INSTITUTIONAL_PRERENDER_ROUTES];
}

/** Todas as rotas SEO-críticas para prerender. */
export function getAllPrerenderRoutes() {
  return [...new Set([...getInstitutionalPrerenderRoutes(), ...getBlogPrerenderRoutes()])].sort(
    (a, b) => a.length - b.length || a.localeCompare(b)
  );
}
