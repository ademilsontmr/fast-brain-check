import { useEffect } from "react";

type MetaTagAttribute = "name" | "property";

type UseSEOOptions = {
  title?: string;
  description?: string;
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

const setCanonicalLink = (href?: string) => {
  const existing = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (href) {
    // Normalizar URL: remover trailing slash (exceto para root) e garantir formato correto
    const normalizedHref = href.endsWith('/') && href !== 'https://bomqi.com.br/' 
      ? href.slice(0, -1) 
      : href;
    
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

  // Se não houver href e existir canonical, remover (para páginas noIndex)
  if (existing) {
    document.head.removeChild(existing);
  }
};

export const useSEO = ({
  title,
  description,
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

    if (noIndex) {
      setMetaTag("name", "robots", "noindex, nofollow");
      // Remover canonical para páginas noIndex
      setCanonicalLink(undefined);
    } else {
      // Restaurar robots para index, follow
      setMetaTag("name", "robots", "index, follow");
      // Definir canonical apenas para páginas indexáveis
      setCanonicalLink(canonical ?? url);
    }

    setMetaTag("property", "og:title", fullTitle);
    if (description) {
      setMetaTag("property", "og:description", description);
    }
    setMetaTag("property", "og:site_name", SITE_NAME);
    setMetaTag("property", "og:type", type);
    if (url) {
      setMetaTag("property", "og:url", url);
    }

    if (image) {
      setMetaTag("property", "og:image", image);
      setMetaTag("name", "twitter:image", image);
    }

    setMetaTag("name", "twitter:card", DEFAULT_TWITTER_CARD);
    setMetaTag("name", "twitter:title", fullTitle);
    if (description) {
      setMetaTag("name", "twitter:description", description);
    }

    return () => {
      // Evitar remover título/metas à medida que a próxima página irá substituí-los.
    };
  }, [title, description, url, image, type, canonical, noIndex]);
};

export default useSEO;

