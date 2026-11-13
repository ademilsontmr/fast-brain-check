import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import ArticleMidAdSense from "@/components/ArticleMidAdSense";

const MID_AD_MARKER = "data-bomqi-mid-ad";

/**
 * Insere bomqi 3 no meio do `.prose` do artigo:
 * - 3+ H2: antes do 3º H2 (fim da 2ª seção)
 * - senão: ~60% dos filhos diretos do prose (após lead AdSense)
 */
function findMidAdInsertBefore(prose: HTMLElement): Element | null {
  const children = Array.from(prose.children);
  const h2s = children.filter((el) => el.tagName === "H2");

  if (h2s.length >= 3) {
    return h2s[2];
  }

  if (children.length <= 2) {
    return null;
  }

  const idx = Math.min(children.length, Math.max(2, Math.floor(children.length * 0.6)));
  return children[idx] ?? null;
}

const ArticleInContentMidAd = () => {
  const location = useLocation();
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setAnchor(null);

    const placeAd = () => {
      const prose = document.querySelector("article .prose, article .prose-lg");
      if (!prose) return false;

      let host = prose.querySelector(`[${MID_AD_MARKER}]`) as HTMLElement | null;
      if (!host) {
        const insertBefore = findMidAdInsertBefore(prose as HTMLElement);
        host = document.createElement("div");
        host.setAttribute(MID_AD_MARKER, "true");
        host.className = "not-prose";

        if (insertBefore && insertBefore.parentElement === prose) {
          prose.insertBefore(host, insertBefore);
        } else {
          prose.appendChild(host);
        }
      }

      setAnchor(host);
      return true;
    };

    if (placeAd()) return;

    const t1 = window.setTimeout(() => {
      if (placeAd()) return;
      window.setTimeout(placeAd, 150);
    }, 0);

    return () => {
      window.clearTimeout(t1);
      const prose = document.querySelector("article .prose, article .prose-lg");
      const host = prose?.querySelector(`[${MID_AD_MARKER}]`);
      host?.remove();
      setAnchor(null);
    };
  }, [location.pathname]);

  if (!anchor) return null;
  return createPortal(<ArticleMidAdSense />, anchor);
};

export default ArticleInContentMidAd;
