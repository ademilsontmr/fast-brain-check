import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";
import puppeteer from "puppeteer";
import { getBlogPrerenderRoutes } from "./blog-routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const distDir = path.join(rootDir, "dist");

const PORT = Number(process.env.PRERENDER_PORT || 4173);
const BASE_URL = `http://127.0.0.1:${PORT}`;
const CONCURRENCY = Number(process.env.PRERENDER_CONCURRENCY || 8);
const WAIT_MS = Number(process.env.PRERENDER_WAIT_MS || 800);

function routeToOutputPath(route) {
  if (route === "/blog") {
    return path.join(distDir, "blog", "index.html");
  }
  const slug = route.replace(/^\/blog\//, "");
  return path.join(distDir, "blog", slug, "index.html");
}

function startPreviewServer() {
  return new Promise((resolve, reject) => {
    const server = spawn(
      "npx",
      ["vite", "preview", "--host", "127.0.0.1", "--port", String(PORT), "--strictPort"],
      { cwd: rootDir, stdio: ["ignore", "pipe", "pipe"], env: process.env }
    );

    let started = false;
    const timeout = setTimeout(() => {
      if (!started) {
        server.kill("SIGTERM");
        reject(new Error("Timeout ao iniciar vite preview"));
      }
    }, 60000);

    const onData = (chunk) => {
      const text = chunk.toString();
      if (!started && (text.includes("Local:") || text.includes(`127.0.0.1:${PORT}`))) {
        started = true;
        clearTimeout(timeout);
        resolve(server);
      }
    };

    server.stdout.on("data", onData);
    server.stderr.on("data", onData);
    server.on("error", reject);
    server.on("exit", (code) => {
      if (!started) {
        clearTimeout(timeout);
        reject(new Error(`vite preview encerrou com código ${code}`));
      }
    });
  });
}

async function waitForServerReady() {
  for (let attempt = 0; attempt < 30; attempt++) {
    try {
      const res = await fetch(`${BASE_URL}/`);
      if (res.ok) return;
    } catch {
      // servidor ainda subindo
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("Servidor de preview não respondeu a tempo");
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage();
  const url = `${BASE_URL}${route}`;

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

    let html = await page.content();
    if (!html.includes("prerendered-by-bomqi")) {
      html = html.replace("<head>", "<head>\n  <!-- prerendered-by-bomqi -->");
    }

    // Garante stylesheet absoluto e sem depender de CORS no Safari
    html = html.replace(
      /<link[^>]*rel=["']stylesheet["'][^>]*>/i,
      (tag) => tag.replace(/\s*crossorigin(?:="[^"]*")?/i, "")
    );
    html = html.replace(
      /<script([^>]*\ssrc=["']\/assets\/[^"']+["'][^>]*)>/gi,
      (full, attrs) => `<script${attrs.replace(/\s*crossorigin(?:="[^"]*")?/gi, "")}>`
    );

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

async function runPool(browser, routes) {
  const results = [];
  let index = 0;

  async function worker() {
    while (index < routes.length) {
      const current = routes[index++];
      results.push(await prerenderRoute(browser, current));
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

  const routes = getBlogPrerenderRoutes();
  console.log(`→ Prerender de ${routes.length} rotas do blog (concorrência ${CONCURRENCY})...`);

  const server = await startPreviewServer();
  await waitForServerReady();

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  try {
    const results = await runPool(browser, routes);
    const failed = results.filter((r) => !r.ok);
    const succeeded = results.filter((r) => r.ok);

    console.log(`✓ Prerender concluído: ${succeeded.length}/${routes.length} páginas`);

    if (failed.length > 0) {
      console.warn(`⚠ ${failed.length} página(s) com falha:`);
      for (const item of failed.slice(0, 20)) {
        console.warn(`  - ${item.route}: ${item.error}`);
      }
      if (failed.length > 20) {
        console.warn(`  ... e mais ${failed.length - 20}`);
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
