/**
 * Fonte única de consolidação SEO (canibalização).
 * Pillar = URL canônica; from = satélite que perde força e redireciona 301.
 */
export const SEO_REDIRECTS = [
  // Cluster: QI médio Brasil
  { from: "/blog/qi-medio-brasil", to: "/blog/media-qi-brasil" },

  // Cluster: genética vs ambiente
  { from: "/blog/nature-vs-nurture-genetica-ambiente-qi", to: "/blog/genetica-vs-ambiente-qi" },
  { from: "/blog/qi-e-genetica-quanto-nasce-aprende", to: "/blog/genetica-vs-ambiente-qi" },
  { from: "/blog/qi-e-genetica-quanto-nasce-quanto-aprende", to: "/blog/genetica-vs-ambiente-qi" },

  // Cluster: teste QI gratuito
  { from: "/blog/teste-qi-gratis", to: "/blog/teste-qi-gratuito-e-confiavel" },
  { from: "/blog/teste-qi-gratuito-sem-cadastro", to: "/blog/teste-qi-gratuito-e-confiavel" },

  // Cluster: como saber / descobrir meu QI
  { from: "/blog/como-descobrir-meu-qi", to: "/blog/como-saber-meu-qi" },

  // Já existentes (mantidos)
  { from: "/blog/melhores-testes-qi-online-2025", to: "/blog/melhores-testes-qi-online-2026" },
  { from: "/blog/inteligencias-multiplas-monetizar", to: "/blog/inteligencia-multiplas-monetizar" },
];

export const REDIRECT_SLUGS = new Set(
  SEO_REDIRECTS.map((r) => r.from.replace(/^\/blog\//, ""))
);

export const INSTITUTIONAL_PRERENDER_ROUTES = [
  "/",
  "/sobre-o-teste",
  "/como-funciona",
  "/perguntas-frequentes",
  "/qi-por-pais",
  "/contato",
  "/politica-privacidade",
  "/termos-uso",
];
