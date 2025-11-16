import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Lock, Shield, Star, Zap, CheckCircle2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { calculateIQ, getCelebrityComparison } from "@/types/quiz";
import { createCheckoutSession } from "@/services/api";
import Footer from "@/components/Footer";
import SocialProofCarousel from "@/components/SocialProofCarousel";

// Price ID do produto no Stripe (Produção)
const STRIPE_PRICE_ID = import.meta.env.VITE_STRIPE_PRICE_ID || 'price_1STUfDG0HYZrAR0LAzL3Syub';

const Payment = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState("");
  const [averageAnswerTime, setAverageAnswerTime] = useState<number | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const savedScore = localStorage.getItem("quizScore");
    const savedUserName = localStorage.getItem("userName");
    const userWhatsApp = localStorage.getItem("userWhatsApp");
    const savedUserId = localStorage.getItem("userId");
    
    // Verificar se o usuário completou o teste e forneceu os dados
    if (!savedScore) {
      navigate("/");
      return;
    }
    
    // Se não tem dados do usuário, redirecionar para coleta
    if (!savedUserName || !userWhatsApp || !savedUserId) {
      navigate("/dados-usuario");
      return;
    }
    
    setScore(parseInt(savedScore));
    setUserName(savedUserName);
    
    // Obter tempo médio de resposta do localStorage
    const savedAverageTime = localStorage.getItem("quizAverageAnswerTime");
    if (savedAverageTime) {
      setAverageAnswerTime(parseFloat(savedAverageTime));
    }
  }, [navigate]);
  const result = calculateIQ(score, 30, averageAnswerTime);
  const celebrity = getCelebrityComparison(result.iqScore);

  const handlePayment = async () => {
    const userId = localStorage.getItem("userId");
    const userEmail = localStorage.getItem("userEmail");
    
    if (!userId || !userName) {
      toast({
        title: "Erro",
        description: "Dados incompletos. Por favor, tente novamente.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Criar sessão de checkout no Stripe
      const checkout = await createCheckoutSession(
        userId,
        STRIPE_PRICE_ID,
        userEmail || undefined
      );

      // Salvar token no localStorage para referência
      localStorage.setItem("resultToken", checkout.resultToken);
      localStorage.setItem("checkoutSessionId", checkout.sessionId);

      // Redirecionar para o Stripe Checkout
      window.location.href = checkout.url;
    } catch (error: any) {
      setIsLoading(false);
      toast({
        title: "Erro ao processar pagamento",
        description: error.message || "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    }
  };
  return <div className="min-h-screen bg-gradient-hero">
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate("/")}>
            <Brain className="w-8 h-8 text-primary" />
            <div className="text-2xl font-bold">BomQI</div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            {userName ? `Olá, ${userName}! 👋` : "Você está a um passo de descobrir algo incrível"}
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            {userName ? "Seu resultado completo está quase pronto!" : "Seu QI pode ser maior do que você imagina"}
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">Acesso imediato</span>
          </div>
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
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">O que você vai receber:</h3>
            </div>
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

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 mb-6 border-2 border-primary/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium">Acesso Completo</span>
              <div className="text-right">
                <span className="text-3xl font-bold text-primary">R$ 7,00</span>
                <p className="text-xs text-muted-foreground opacity-60">Pagamento único</p>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-muted-foreground">Acesso imediato após pagamento</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-muted-foreground">URL única e exclusiva</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-muted-foreground">Pagamento seguro via Stripe</span>
              </div>

            </div>
            <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
              <p className="text-sm font-semibold text-primary text-center">
                💳 Pagamento seguro e rápido
              </p>
            </div>
          </div>

          <Button 
            onClick={handlePayment} 
            size="lg" 
            className="w-full shadow-elegant text-lg bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Processando...
              </>
            ) : (
              <>
                <Zap className="w-5 h-5 mr-2" />
                Desbloquear por R$ 7,00
              </>
            )}
          </Button>

          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-green-500" />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>100% seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span>Dados protegidos</span>
            </div>
          </div>
        </Card>

        <div className="text-center space-y-2">
          <p className="text-sm font-semibold text-primary">
            💳 Pagamento seguro via Stripe
          </p>
          <p className="text-sm text-muted-foreground">
            Mais de 50.000 pessoas já descobriram seu QI completo
          </p>
          <p className="text-xs text-muted-foreground italic">
            Após o pagamento, você receberá uma URL única com seu resultado
          </p>
        </div>
      </div>

      {/* Social Proof Carousel */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">O que as pessoas estão dizendo</h2>
        </div>
        <SocialProofCarousel />
      </section>

      <Footer />
    </div>;
  };
  
  export default Payment;