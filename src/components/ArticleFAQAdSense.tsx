import { ADSENSE_ARTICLE_FAQ_SLOT } from "@/constants/adsense";
import AdSenseUnit from "@/components/AdSenseUnit";

/** AdSense in-content (bomqi 4) — acima do bloco Perguntas Frequentes. */
const ArticleFAQAdSense = () => (
  <div className="not-prose my-8" aria-label="Publicidade">
    <AdSenseUnit slot={ADSENSE_ARTICLE_FAQ_SLOT} minHeight={100} />
  </div>
);

export default ArticleFAQAdSense;
