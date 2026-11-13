import { ADSENSE_ARTICLE_INTER_SLOT } from "@/constants/adsense";
import AdSenseUnit from "@/components/AdSenseUnit";

/** AdSense (bomqi inter artigo) — imediatamente acima do Footer em posts /blog/… */
const ArticleInterAdSense = () => (
  <div className="not-prose my-10" aria-label="Publicidade">
    <AdSenseUnit slot={ADSENSE_ARTICLE_INTER_SLOT} minHeight={100} />
  </div>
);

export default ArticleInterAdSense;
