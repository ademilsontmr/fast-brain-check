import { useEffect } from "react";
import { DEFAULT_OG_IMAGE } from "@/constants/site";

type MetaTagAttribute = "name" | "property";

type UseSEOOptions = {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: "website" | "article";
  canonical?: string;
  noIndex?: boolean;
};

const SITE_NAME = "BomQI";
const DEFAULT_TWITTER_CARD = "summary_large_image";

const setMetaTag = (attr: MetaTagAttribute, key: string, value: string) => {
  if (!value) {
    return;
  }

  let element = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", value);
};

const removeMetaTag = (attr: MetaTagAttribute, key: string) => {
  const element = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (element) {
    document.head.removeChild(element);
  }
};

const normalizeUrl = (href: string) =>
  href.endsWith("/") && href !== "https://bomqi.com.br/" ? href.slice(0, -1) : href;

const setCanonicalLink = (href?: string) => {
  const existing = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (href) {
    const normalizedHref = normalizeUrl(href);
    if (existing) {
      existing.setAttribute("href", normalizedHref);
    } else {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", normalizedHref);
      document.head.appendChild(link);
    }
    return;
  }

  if (existing) {
    document.head.removeChild(existing);
  }
};

const setHreflangLinks = (pageUrl?: string) => {
  document.querySelectorAll('link[data-bomqi-hreflang="1"]').forEach((el) => el.remove());
  if (!pageUrl) return;

  const href = normalizeUrl(pageUrl);
  const variants: Array<{ lang: string; href: string }> = [
    { lang: "pt-BR", href },
    { lang: "x-default", href },
  ];

  for (const v of variants) {
    const link = document.createElement("link");
    link.setAttribute("rel", "alternate");
    link.setAttribute("hreflang", v.lang);
    link.setAttribute("href", v.href);
    link.setAttribute("data-bomqi-hreflang", "1");
    document.head.appendChild(link);
  }
};

export const useSEO = ({
  title,
  description,
  keywords,
  url,
  image,
  type = "article",
  canonical,
  noIndex = false,
}: UseSEOOptions) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.title = fullTitle;

    if (description) {
      setMetaTag("name", "description", description);
    }

    if (keywords) {
      setMetaTag("name", "keywords", keywords);
    }

    const canonicalTarget = canonical ?? url;

    if (noIndex) {
      setMetaTag("name", "robots", "noindex, nofollow");
      setMetaTag("name", "googlebot", "noindex, nofollow");
      // Mantém canonical do hub quando informado (ex.: /blog?q= → /blog)
      setCanonicalLink(canonical ?? undefined);
      setHreflangLinks(undefined);
    } else {
      setMetaTag("name", "robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
      setMetaTag("name", "googlebot", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
      setMetaTag("name", "bingbot", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
      setCanonicalLink(canonicalTarget);
      setHreflangLinks(canonicalTarget);
    }

    setMetaTag("property", "og:title", fullTitle);
    if (description) {
      setMetaTag("property", "og:description", description);
    }
    setMetaTag("property", "og:site_name", SITE_NAME);
    setMetaTag("property", "og:type", type);
    setMetaTag("property", "og:locale", "pt_BR");
    if (url) {
      setMetaTag("property", "og:url", noIndex && canonical ? canonical : url);
    }

    const ogImage = image || DEFAULT_OG_IMAGE;
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:image:width", "1200");
    setMetaTag("property", "og:image:height", "630");
    setMetaTag("name", "twitter:image", ogImage);

    setMetaTag("name", "twitter:card", DEFAULT_TWITTER_CARD);
    setMetaTag("name", "twitter:title", fullTitle);
    if (description) {
      setMetaTag("name", "twitter:description", description);
    }
    if (url) {
      setMetaTag("name", "twitter:url", noIndex && canonical ? canonical : url);
    }

    return () => {
      // Evitar remover título/metas à medida que a próxima página irá substituí-los.
    };
  }, [title, description, keywords, url, image, type, canonical, noIndex]);
};

export default useSEO;
