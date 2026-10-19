import type { ReactNode } from "react";
import { Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface SiteHeaderProps {
  /** Se definido, usa no CTA em vez de navegar para /teste */
  onStartTest?: () => void;
  /** Exibe links de navegação (padrão: true) */
  showNav?: boolean;
  /** Exibe botão “Fazer o teste” (padrão: true) */
  showCta?: boolean;
  /** Conteúdo à direita (ex.: timer do teste). Substitui o CTA se informado junto com showCta=false */
  rightSlot?: ReactNode;
}

const SiteHeader = ({
  onStartTest,
  showNav = true,
  showCta = true,
  rightSlot,
}: SiteHeaderProps) => {
  const navigate = useNavigate();

  const handleStart = () => {
    if (onStartTest) {
      onStartTest();
      return;
    }
    navigate("/teste");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3.5">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            className="flex items-center gap-2.5 group"
            onClick={() => navigate("/")}
            aria-label="BomQI — início"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
              <Brain className="h-5 w-5" strokeWidth={2.25} />
            </span>
            <span className="font-display text-2xl tracking-tight text-foreground">BomQI</span>
          </button>

          {showNav && (
            <nav className="hidden md:flex items-center gap-7 text-[15px] text-muted-foreground">
              <button type="button" onClick={() => navigate("/blog")} className="hover:text-foreground transition-colors">
                Blog
              </button>
              <button type="button" onClick={() => navigate("/como-funciona")} className="hover:text-foreground transition-colors">
                Como funciona
              </button>
              <button type="button" onClick={() => navigate("/qi-por-pais")} className="hover:text-foreground transition-colors">
                QI por país
              </button>
              <button type="button" onClick={() => navigate("/sobre-o-teste")} className="hover:text-foreground transition-colors">
                Sobre o teste
              </button>
            </nav>
          )}

          {rightSlot ? (
            <div className="flex items-center gap-4">{rightSlot}</div>
          ) : showCta ? (
            <Button
              onClick={handleStart}
              className="rounded-xl px-5 font-semibold shadow-sm hover:brightness-105"
            >
              Fazer o teste
            </Button>
          ) : (
            <div className="w-[1px]" aria-hidden />
          )}
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
