import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Lock, TrendingUp } from "lucide-react";
import { calculateIQ } from "@/types/quiz";

const BasicResult = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);

  useEffect(() => {
    const savedScore = localStorage.getItem("quizScore");
    if (!savedScore) {
      navigate("/");
      return;
    }
    setScore(parseInt(savedScore));
  }, [navigate]);

  const result = calculateIQ(score, 30);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold">BomQI</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
            <TrendingUp className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Seu desempenho foi acima da média 👀
          </h1>
          <p className="text-xl text-muted-foreground">
            Você acertou {score} de 30 perguntas
          </p>
        </div>

        <Card className="p-8 mb-6 shadow-elegant">
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-primary mb-2">
              {result.iqScore}
            </div>
            <p className="text-muted-foreground">Estimativa aproximada de QI</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <Lock className="w-5 h-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="font-medium">Seu QI exato</p>
                <p className="text-sm text-muted-foreground">
                  Com análise detalhada
                </p>
              </div>
              <div className="text-primary font-bold">Bloqueado</div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <Lock className="w-5 h-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="font-medium">Seu percentil</p>
                <p className="text-sm text-muted-foreground">
                  Acima de quantas pessoas você está
                </p>
              </div>
              <div className="text-primary font-bold">Bloqueado</div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <Lock className="w-5 h-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="font-medium">Comparação com celebridades</p>
                <p className="text-sm text-muted-foreground">
                  Descubra quem tem QI parecido com o seu
                </p>
              </div>
              <div className="text-primary font-bold">Bloqueado</div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <Lock className="w-5 h-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="font-medium">Sua força cognitiva dominante</p>
                <p className="text-sm text-muted-foreground">
                  O que seu cérebro faz melhor
                </p>
              </div>
              <div className="text-primary font-bold">Bloqueado</div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <Lock className="w-5 h-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="font-medium">Badge de vitória</p>
                <p className="text-sm text-muted-foreground">
                  Para compartilhar no WhatsApp
                </p>
              </div>
              <div className="text-primary font-bold">Bloqueado</div>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={() => navigate("/pagamento")}
              size="lg"
              className="w-full shadow-elegant text-lg"
            >
              Ver Meu QI Completo (R$ 5,00)
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Pagamento único • Resultado instantâneo • 100% seguro
            </p>
          </div>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          <p>Mais de 50.000 pessoas já descobriram seu QI</p>
        </div>
      </div>
    </div>
  );
};

export default BasicResult;
