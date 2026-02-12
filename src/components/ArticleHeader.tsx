import { Brain } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ArticleHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Brain className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold">BomQI</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => navigate("/blog")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Blog
            </button>
            <button
              onClick={() => navigate("/como-funciona")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Como Funciona
            </button>
          </nav>
          
          <Button onClick={() => navigate("/teste")} size="lg">
            Fazer o Teste
          </Button>
        </div>
      </div>
    </header>
  );
};

export default ArticleHeader;
