export const SITE_URL = "https://bomqi.com.br";
/** Imagem social padrão (1200×630) — também usada como logo Organization (≥112px) */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const SITE_LOGO = DEFAULT_OG_IMAGE;
export const SITE_BRAND = "BomQI";

/** Rotas do funil de conversão — sem banners Amazon para não distrair */
export const CONVERSION_FUNNEL_PATHS = [
  "/teste",
  "/resultado-basico",
  "/dados-usuario",
  "/pagamento",
  "/resultado-completo",
] as const;

export const isConversionFunnelPath = (pathname: string) =>
  CONVERSION_FUNNEL_PATHS.some((path) => pathname === path || pathname.startsWith(`${path}/`));
