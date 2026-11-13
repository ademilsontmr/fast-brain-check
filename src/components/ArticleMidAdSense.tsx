import { ADSENSE_ARTICLE_MID_SLOT } from "@/constants/adsense";
import AdSenseUnit from "@/components/AdSenseUnit";

/** AdSense in-content (bomqi 3) — inserido via ArticleInContentMidAd (após 2º H2 ou ~60% do prose). */
const ArticleMidAdSense = () => (
  <div className="not-prose my-8" aria-label="Publicidade">
    <AdSenseUnit slot={ADSENSE_ARTICLE_MID_SLOT} minHeight={100} />
  </div>
);

export default ArticleMidAdSense;
