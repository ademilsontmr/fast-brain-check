import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";
import net from "net";
import puppeteer from "puppeteer";
import { getAllPrerenderRoutes } from "./blog-routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const assetsDir = path.join(distDir, "assets");

const CONCURRENCY = Number(process.env.PRERENDER_CONCURRENCY || 8);
const WAIT_MS = Number(process.env.PRERENDER_WAIT_MS || 800);

async function findFreePort(preferred = 4173) {
  const tryPort = (port) =>
    new Promise((resolve, reject) => {
      const server = net.createServer();
      server.unref();
      server.on("error", reject);
      server.listen(port, "127.0.0.1", () => {
        const { port: bound } = server.address();
        server.close(() => resolve(bound));
      });
    });

  try {
    return await tryPort(preferred);
  } catch {
    return tryPort(0);
  }
}

function findMainCssFile() {
  const files = fs.readdirSync(assetsDir).filter((f) => /^index-.*\.css$/.test(f));
  if (files.length === 0) throw new Error("CSS principal não encontrado em dist/assets/");
  return files[0];
}

/** Cópia estável /styles.css — evita depender só do hash no HTML prerenderizado. */
function publishStableStylesheet(cssFileName) {
  const src = path.join(assetsDir, cssFileName);
  const dest = path.join(distDir, "styles.css");
  fs.copyFileSync(src, dest);
  return "/styles.css";
}

function sanitizeHtml(html, stableCssHref, hashedCssHref) {
  let out = html;

  if (!out.includes("prerendered-by-bomqi")) {
    out = out.replace(/<head>/i, "<head>\n  <!-- prerendered-by-bomqi -->");
  }

  // Remove TODOS os crossorigin (Safari + CORS em stylesheet/module)
  out = out.replace(/\s+crossorigin(?:=["'][^"']*["'])?/gi, "");

  // Remove links de stylesheet quebrados/antigos e reinsere links limpos no <head>
  out = out.replace(/<link[^>]*rel=["']stylesheet["'][^>]*>\s*/gi, "");

  const cssLinks = [
    `<link rel="stylesheet" href="${stableCssHref}">`,
    hashedCssHref && hashedCssHref !== stableCssHref
      ? `<link rel="stylesheet" href="${hashedCssHref}">`
      : "",
  ]
    .filter(Boolean)
    .join("\n  ");

  out = out.replace(
    /<!-- prerendered-by-bomqi -->/,
    `<!-- prerendered-by-bomqi -->\n  ${cssLinks}`
  );

  return out;
}

async function resolveChromePath() {
  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    return process.env.PUPPETEER_EXECUTABLE_PATH;
  }

  const candidates = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  return undefined;
}

function routeToOutputPath(route) {
  if (route === "/" || route === "") {
    return path.join(distDir, "index.html");
  }
  return path.join(distDir, route.replace(/^\//, ""), "index.html");
}

function startPreviewServer(port) {
  const baseUrl = `http://127.0.0.1:${port}`;

  return new Promise((resolve, reject) => {
    const server = spawn(
      "npx",
      ["vite", "preview", "--host", "127.0.0.1", "--port", String(port), "--strictPort"],
      { cwd: rootDir, stdio: ["ignore", "pipe", "pipe"], env: process.env }
    );

    let started = false;
    let output = "";
    const timeout = setTimeout(() => {
      if (!started) {
        server.kill("SIGTERM");
        reject(new Error(`Timeout ao iniciar vite preview na porta ${port}\n${output}`));
      }
    }, 60000);

    const onData = (chunk) => {
      const text = chunk.toString();
      output += text;
      if (!started && (text.includes("Local:") || text.includes(`127.0.0.1:${port}`))) {
        started = true;
        clearTimeout(timeout);
        resolve({ server, baseUrl });
      }
    };

    server.stdout.on("data", onData);
    server.stderr.on("data", onData);
    server.on("error", reject);
    server.on("exit", (code) => {
      if (!started) {
        clearTimeout(timeout);
        reject(new Error(`vite preview encerrou com código ${code} (porta ${port})\n${output}`));
      }
    });
  });
}

async function waitForServerReady(baseUrl) {
  for (let attempt = 0; attempt < 30; attempt++) {
    try {
      const res = await fetch(`${baseUrl}/`);
      if (res.ok) return;
    } catch {
      // servidor ainda subindo
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Servidor de preview não respondeu a tempo (${baseUrl})`);
}

async function prerenderRoute(browser, route, stableCssHref, hashedCssHref, baseUrl) {
  const page = await browser.newPage();
  const url = `${baseUrl}${route}`;

  try {
    await page.setViewport({ width: 1280, height: 900 });
    await page.goto(url, { waitUntil: "load", timeout: 120000 });
    await page.waitForSelector("h1, article h1, main h1", { timeout: 45000 });
    await new Promise((r) => setTimeout(r, WAIT_MS));

    const hasDescription = await page.evaluate(() => {
      const meta = document.querySelector('meta[name="description"]');
      return Boolean(meta?.getAttribute("content")?.trim());
    });

    if (!hasDescription) {
      await new Promise((r) => setTimeout(r, WAIT_MS));
    }

    const pageCheck = await page.evaluate(() => {
      const title = document.title || "";
      const h1 = document.querySelector("h1")?.textContent?.trim() || "";
      return { title, h1 };
    });

    if (
      /não encontrada|pagina nao encontrada/i.test(pageCheck.title) ||
      /^404\b/.test(pageCheck.h1)
    ) {
      return {
        route,
        ok: false,
        error: `Prerender gerou 404 (title="${pageCheck.title}", h1="${pageCheck.h1}") — rota ausente no App?`,
      };
    }

    let html = await page.content();
    html = sanitizeHtml(html, stableCssHref, hashedCssHref);

    const outputPath = routeToOutputPath(route);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, html, "utf8");

    return { route, ok: true };
  } catch (error) {
    return { route, ok: false, error: error instanceof Error ? error.message : String(error) };
  } finally {
    await page.close();
  }
}

async function runPool(browser, routes, stableCssHref, hashedCssHref, baseUrl) {
  const results = [];
  let index = 0;

  async function worker() {
    while (index < routes.length) {
      const current = routes[index++];
      results.push(await prerenderRoute(browser, current, stableCssHref, hashedCssHref, baseUrl));
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));
  return results;
}

async function main() {
  if (!fs.existsSync(distDir)) {
    console.error("✗ Pasta dist/ não encontrada. Rode vite build antes do prerender.");
    process.exit(1);
  }

  // Remove apenas catch-all em _redirects (quebra CSS/JS no Cloudflare Pages)
  for (const name of ["_redirects", "_redirects.txt"]) {
    const p = path.join(distDir, name);
    if (!fs.existsSync(p)) continue;
    const raw = fs.readFileSync(p, "utf8");
    const lines = raw.split("\n");
    const safe = lines.filter((line) => {
      const t = line.trim();
      if (!t || t.startsWith("#")) return true;
      // Catch-all /* → /index.html (ou similar) é perigoso
      return !/^\/\*\s+\/index\.html/i.test(t) && !/^\/\*\s+\//.test(t);
    });
    if (safe.filter((l) => l.trim() && !l.trim().startsWith("#")).length === 0) {
      fs.unlinkSync(p);
      console.log(`→ Removido ${name} do dist (só tinha catch-all)`);
    } else if (safe.length !== lines.length) {
      fs.writeFileSync(p, safe.join("\n"), "utf8");
      console.log(`→ Limpo catch-all de ${name}; redirects pontuais mantidos`);
    }
  }

  const cssFile = findMainCssFile();
  const hashedCssHref = `/assets/${cssFile}`;
  const stableCssHref = publishStableStylesheet(cssFile);
  console.log(`→ CSS: ${hashedCssHref} + cópia estável ${stableCssHref}`);

  // Home SPA também ganha /styles.css sem crossorigin
  const homeIndexPath = path.join(distDir, "index.html");
  if (fs.existsSync(homeIndexPath)) {
    let homeHtml = fs.readFileSync(homeIndexPath, "utf8");
    homeHtml = homeHtml.replace(/\s+crossorigin(?:=["'][^"']*["'])?/gi, "");
    if (!homeHtml.includes('href="/styles.css"')) {
      homeHtml = homeHtml.replace(
        /<link rel="stylesheet" href="\/assets\/[^"]+\.css">/,
        `<link rel="stylesheet" href="${stableCssHref}">\n  <link rel="stylesheet" href="${hashedCssHref}">`
      );
    }
    fs.writeFileSync(homeIndexPath, homeHtml, "utf8");
    console.log("→ index.html da home atualizado");
  }

  const routes = getAllPrerenderRoutes();
  console.log(`→ Prerender de ${routes.length} rotas (blog + institucionais, concorrência ${CONCURRENCY})...`);

  const port = Number(process.env.PRERENDER_PORT) || (await findFreePort(4173));
  console.log(`→ Preview em http://127.0.0.1:${port}`);

  const { server, baseUrl } = await startPreviewServer(port);
  await waitForServerReady(baseUrl);

  const browser = await puppeteer.launch({
    headless: true,
    executablePath: await resolveChromePath(),
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  try {
    const results = await runPool(browser, routes, stableCssHref, hashedCssHref, baseUrl);
    const failed = results.filter((r) => !r.ok);
    const succeeded = results.filter((r) => r.ok);

    console.log(`✓ Prerender concluído: ${succeeded.length}/${routes.length} páginas`);

    // Sanity: blog index deve referenciar styles.css e não ter crossorigin no stylesheet
    const blogIndex = fs.readFileSync(path.join(distDir, "blog", "index.html"), "utf8");
    if (!blogIndex.includes('href="/styles.css"')) {
      throw new Error("blog/index.html sem /styles.css — abortando");
    }
    if (/rel=["']stylesheet["'][^>]*crossorigin/i.test(blogIndex)) {
      throw new Error("blog/index.html ainda tem crossorigin no CSS — abortando");
    }
    console.log("✓ HTML do blog validado (styles.css, sem crossorigin)");

    if (failed.length > 0) {
      console.warn(`⚠ ${failed.length} página(s) com falha:`);
      for (const item of failed.slice(0, 20)) {
        console.warn(`  - ${item.route}: ${item.error}`);
      }
      process.exitCode = 1;
    }
  } finally {
    await browser.close();
    server.kill("SIGTERM");
  }
}

main().catch((error) => {
  console.error("✗ Erro no prerender:", error);
  process.exit(1);
});
