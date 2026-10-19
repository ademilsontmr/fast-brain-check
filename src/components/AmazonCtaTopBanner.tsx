import { useLocation } from "react-router-dom";
import AmazonCta from "@/components/AmazonCta";
import { isConversionFunnelPath } from "@/constants/site";
import { useAmazonCtaDismiss } from "@/hooks/use-amazon-cta-dismiss";

const AmazonCtaTopBanner = () => {
  const { pathname } = useLocation();
  const { dismissed, dismiss } = useAmazonCtaDismiss();

  if (pathname === "/" || isConversionFunnelPath(pathname)) {
    return null;
  }

  if (dismissed) {
    return null;
  }

  return <AmazonCta variant="top" onDismiss={dismiss} />;
};

export default AmazonCtaTopBanner;
