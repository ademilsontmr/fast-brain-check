import AdSenseUnit from "@/components/AdSenseUnit";

type ContentBandAdSenseProps = {
  slot: string;
  minHeight?: number;
};

/** Faixa horizontal entre seções (home, etc.) — visível após scroll, sem cobrir o CTA principal. */
const ContentBandAdSense = ({ slot, minHeight = 90 }: ContentBandAdSenseProps) => (
  <div className="border-y border-border/50 bg-muted/25" aria-label="Publicidade">
    <div className="container mx-auto max-w-5xl px-4 py-4 md:py-5">
      <AdSenseUnit slot={slot} minHeight={minHeight} />
    </div>
  </div>
);

export default ContentBandAdSense;
