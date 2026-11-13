import { useRef } from "react";
import { ADSENSE_CLIENT } from "@/constants/adsense";
import { useAdSenseUnit } from "@/hooks/use-adsense-unit";

type AdSenseUnitProps = {
  slot: string;
  className?: string;
  minHeight?: number;
};

const AdSenseUnit = ({ slot, className = "", minHeight = 90 }: AdSenseUnitProps) => {
  const insRef = useRef<HTMLModElement>(null);
  useAdSenseUnit(insRef);

  return (
    <ins
      ref={insRef}
      className={`adsbygoogle block w-full ${className}`}
      style={{ display: "block", minHeight }}
      data-ad-client={ADSENSE_CLIENT}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdSenseUnit;
