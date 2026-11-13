import AdSenseUnit from "@/components/AdSenseUnit";

type BelowMenuAdSenseProps = {
  slot: string;
};

/** Faixa AdSense full-width logo abaixo do SiteHeader. */
const BelowMenuAdSense = ({ slot }: BelowMenuAdSenseProps) => (
  <div className="border-b border-border/60 bg-muted/30" aria-label="Publicidade">
    <div className="container mx-auto max-w-4xl px-4 py-3">
      <AdSenseUnit slot={slot} />
    </div>
  </div>
);

export default BelowMenuAdSense;
