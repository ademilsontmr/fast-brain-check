import { useState, type ReactNode } from "react";
import { Brain, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

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

const NAV_LINKS = [
  { label: "Blog", path: "/blog" },
  { label: "Como funciona", path: "/como-funciona" },
  { label: "QI por país", path: "/qi-por-pais" },
  { label: "Sobre o teste", path: "/sobre-o-teste" },
] as const;

const SiteHeader = ({
  onStartTest,
  showNav = true,
  showCta = true,
  rightSlot,
}: SiteHeaderProps) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStart = () => {
    setMenuOpen(false);
    if (onStartTest) {
      onStartTest();
      return;
    }
    navigate("/teste");
  };

  const goTo = (path: string) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3.5">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            className="flex items-center gap-2.5 group min-w-0"
            onClick={() => navigate("/")}
            aria-label="BomQI — início"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
              <Brain className="h-5 w-5" strokeWidth={2.25} />
            </span>
            <span className="font-display text-2xl tracking-tight text-foreground truncate">BomQI</span>
          </button>

          {showNav && (
            <nav className="hidden md:flex items-center gap-7 text-[15px] text-muted-foreground">
              {NAV_LINKS.map((item) => (
                <button
                  key={item.path}
                  type="button"
                  onClick={() => navigate(item.path)}
                  className="hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}

          <div className="flex items-center gap-2 shrink-0">
            {showNav && (
              <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="md:hidden h-10 w-10 rounded-xl"
                    aria-label="Abrir menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[min(100vw-2rem,20rem)]">
                  <SheetHeader>
                    <SheetTitle className="text-left font-display text-xl">Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="mt-8 flex flex-col gap-1">
                    {NAV_LINKS.map((item) => (
                      <button
                        key={item.path}
                        type="button"
                        onClick={() => goTo(item.path)}
                        className="rounded-lg px-3 py-3 text-left text-base font-medium text-foreground hover:bg-muted transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                    {showCta && !rightSlot && (
                      <Button onClick={handleStart} className="mt-4 w-full rounded-xl font-semibold">
                        Fazer o teste
                      </Button>
                    )}
                  </nav>
                </SheetContent>
              </Sheet>
            )}

            {rightSlot ? (
              <div className="flex items-center gap-4">{rightSlot}</div>
            ) : showCta ? (
              <Button
                onClick={handleStart}
                className="hidden sm:inline-flex rounded-xl px-5 font-semibold shadow-sm hover:brightness-105"
              >
                Fazer o teste
              </Button>
            ) : (
              <div className="w-[1px]" aria-hidden />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
