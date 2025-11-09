import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, CreditCard, Lock, Shield, Star, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { calculateIQ, getCelebrityComparison } from "@/types/quiz";

const Payment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
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
  const celebrity = getCelebrityComparison(result.iqScore);

  const handlePayment = () => {
    setIsProcessing(true);
    
    // Simula processamento de pagamento
    setTimeout(() => {
      localStorage.setItem("isPaid", "true");
      toast({
        title: "Pagamento confirmado!",
        description: "Acessando seu resultado completo...",
      });
      
      setTimeout(() => {
        navigate("/resultado-completo");
      }, 1000);
    }, 2000);
  };

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
          <h1 className="text-4xl font-bold mb-4">
            Você está a um passo de descobrir algo incrível
          </h1>
          <p className="text-xl text-muted-foreground">
            Seu QI pode ser maior do que você imagina
          </p>
        </div>

        {/* Celebrity Comparison Teaser */}
        <Card className="p-8 mb-6 shadow-elegant border-2 border-primary/20 bg-gradient-primary text-primary-foreground">
          <div className="text-center">
            <Star className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Seu QI pode ser comparável ao de {celebrity}
            </h2>
            <p className="text-lg opacity-90">
              Pessoas com desempenho similar ao seu costumam ter QI entre {result.iqScore - 5} e {result.iqScore + 5}
            </p>
          </div>
        </Card>

        <Card className="p-8 mb-6 shadow-elegant">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">O que você vai receber:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="font-medium">Seu QI exato e detalhado</p>
                  <p className="text-sm text-muted-foreground">
                    Análise completa do seu desempenho
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="font-medium">Seu percentil nacional</p>
                  <p className="text-sm text-muted-foreground">
                    Descubra sua posição entre milhares
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="font-medium">Comparação com celebridades</p>
                  <p className="text-sm text-muted-foreground">
                    Veja quem tem QI similar ao seu
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="font-medium">Sua força cognitiva dominante</p>
                  <p className="text-sm text-muted-foreground">
                    Entenda suas habilidades principais
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="font-medium">Badge exclusivo para compartilhar</p>
                  <p className="text-sm text-muted-foreground">
                    Mostre seu resultado no WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium">Total</span>
              <span className="text-3xl font-bold text-primary">R$ 5,00</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Pagamento único • Sem mensalidades • Acesso imediato
            </p>
          </div>

          <Button
            onClick={handlePayment}
            disabled={isProcessing}
            size="lg"
            className="w-full shadow-elegant text-lg"
          >
            <CreditCard className="w-5 h-5 mr-2" />
            {isProcessing ? "Processando..." : "Pagar com Cartão"}
          </Button>

          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Pagamento seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span>Dados protegidos</span>
            </div>
          </div>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          <p>Mais de 50.000 pessoas já descobriram seu QI completo</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
