import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileStickyTestCtaProps {
  onStart: () => void;
}

const MobileStickyTestCta = ({ onStart }: MobileStickyTestCtaProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-primary/20 bg-background/95 p-3 shadow-lg backdrop-blur-md md:hidden">
      <Button className="w-full gap-2 font-semibold shadow-elegant" size="lg" onClick={onStart}>
        Descobrir Meu QI Agora
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default MobileStickyTestCta;
