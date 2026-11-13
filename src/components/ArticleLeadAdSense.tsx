import { ADSENSE_ARTICLE_LEAD_SLOT } from "@/constants/adsense";
import AdSenseUnit from "@/components/AdSenseUnit";

/** AdSense in-content (bomqi 2) — acima do primeiro parágrafo do artigo. */
const ArticleLeadAdSense = () => (
  <div className="not-prose my-8" aria-label="Publicidade">
    <AdSenseUnit slot={ADSENSE_ARTICLE_LEAD_SLOT} minHeight={100} />
  </div>
);

export default ArticleLeadAdSense;
