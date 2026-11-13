import AdSenseUnit from "@/components/AdSenseUnit";

type BelowMenuAdSenseProps = {
  slot: string;
};

/** Faixa AdSense full-width logo abaixo do SiteHeader. */
const BelowMenuAdSense = ({ slot }: BelowMenuAdSenseProps) => (
  <div
    className="border-b border-border/60 bg-muted/30 pt-4 pb-5 md:pt-5 md:pb-7"
    aria-label="Publicidade"
  >
    <div className="container mx-auto max-w-4xl px-4">
      <AdSenseUnit slot={slot} minHeight={90} />
    </div>
  </div>
);

export default BelowMenuAdSense;
