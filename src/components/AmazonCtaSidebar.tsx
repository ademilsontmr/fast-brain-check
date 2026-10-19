import { useLocation } from "react-router-dom";
import AmazonCta from "@/components/AmazonCta";
import { isConversionFunnelPath } from "@/constants/site";
import { useAmazonCtaDismiss } from "@/hooks/use-amazon-cta-dismiss";

const AmazonCtaSidebar = () => {
  const { pathname } = useLocation();
  const { dismissed } = useAmazonCtaDismiss();

  if (pathname === "/" || isConversionFunnelPath(pathname)) {
    return null;
  }

  return (
    <aside
      className={`pointer-events-none fixed right-4 z-30 hidden w-72 xl:block 2xl:right-8 ${
        dismissed ? "top-28" : "top-40"
      }`}
      aria-label="Ofertas Amazon"
    >
      <div className="pointer-events-auto">
        <AmazonCta variant="sidebar" />
      </div>
    </aside>
  );
};

export default AmazonCtaSidebar;
