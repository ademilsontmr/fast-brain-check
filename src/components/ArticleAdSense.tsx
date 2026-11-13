import { ADSENSE_ARTICLE_SLOT } from "@/constants/adsense";
import BelowMenuAdSense from "@/components/BelowMenuAdSense";

/** Banner AdSense (bomqi 1) — abaixo do menu, acima do breadcrumb. */
const ArticleAdSense = () => <BelowMenuAdSense slot={ADSENSE_ARTICLE_SLOT} />;

export default ArticleAdSense;
