import { useEffect, useRef, type RefObject } from "react";
import { ADSENSE_CLIENT } from "@/constants/adsense";

export const ADSENSE_SCRIPT_ID = "google-adsense-script";

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

function ensureAdSenseScript(): HTMLScriptElement {
  let script = document.getElementById(ADSENSE_SCRIPT_ID) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = ADSENSE_SCRIPT_ID;
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }
  return script;
}

/** Carrega o script global e faz push de um único bloco <ins>. */
export function useAdSenseUnit(insRef: RefObject<HTMLModElement | null>) {
  const filledRef = useRef(false);

  useEffect(() => {
    const script = ensureAdSenseScript();

    const fillAd = () => {
      if (filledRef.current || !insRef.current) return;
      try {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
        filledRef.current = true;
      } catch {
        // adblock ou script indisponível
      }
    };

    if (script.dataset.loaded === "true") {
      fillAd();
    } else {
      script.addEventListener(
        "load",
        () => {
          script.dataset.loaded = "true";
          fillAd();
        },
        { once: true }
      );
    }

    if (window.adsbygoogle) {
      fillAd();
    }
  }, [insRef]);
}
