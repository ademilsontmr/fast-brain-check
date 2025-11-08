import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Share2, Trophy, TrendingUp, Award, Zap } from "lucide-react";
import { calculateIQ, getCelebrityComparison, getCognitiveStrength } from "@/types/quiz";
import { useToast } from "@/hooks/use-toast";

const CompleteResult = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [score, setScore] = useState(0);

  useEffect(() => {
    const savedScore = localStorage.getItem("quizScore");
    const isPaid = localStorage.getItem("isPaid");
    
    if (!savedScore || !isPaid) {
      navigate("/");
      return;
    }
    setScore(parseInt(savedScore));
  }, [navigate]);

  const result = calculateIQ(score, 30);
  const celebrity = getCelebrityComparison(result.iqScore);
  const strength = getCognitiveStrength(result.iqScore);

  const shareOnWhatsApp = () => {
    const message = encodeURIComponent(
      `🧠 Acabei de descobrir meu QI: ${result.iqScore}!\n\nEstou no TOP ${100 - result.percentile}% das pessoas mais inteligentes! 🚀\n\nAcha que consegue me superar? Faça o teste em 3 minutos: https://bomqi.com.br`
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
    
    toast({
      title: "Desafiando seus amigos! 🔥",
      description: "Vamos ver quem tem o QI mais alto...",
    });
  };

  const getIQDescription = (iq: number): string => {
    if (iq >= 130) return "Excepcional";
    if (iq >= 120) return "Superior";
    if (iq >= 110) return "Acima da Média";
    if (iq >= 90) return "Média";
    return "Abaixo da Média";
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
            <Trophy className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Seu Resultado Completo
          </h1>
          <p className="text-xl text-muted-foreground">
            Análise detalhada do seu desempenho
          </p>
        </div>

        <Card className="p-8 mb-6 shadow-elegant bg-gradient-primary text-primary-foreground">
          <div className="text-center">
            <p className="text-sm opacity-90 mb-2">Seu QI é</p>
            <div className="text-7xl font-bold mb-2">
              {result.iqScore}
            </div>
            <p className="text-xl opacity-90">{getIQDescription(result.iqScore)}</p>
          </div>
        </Card>

        <div className="grid gap-4 mb-6">
          <Card className="p-6 shadow-elegant">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Seu Percentil</h3>
                <p className="text-2xl font-bold text-primary mb-2">
                  Top {100 - result.percentile}%
                </p>
                <p className="text-muted-foreground">
                  Você está acima de {result.percentile}% da população
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-elegant border-2 border-primary/20">
            <h3 className="font-bold text-lg mb-4 text-center">Ranking de Celebridades</h3>
            <div className="space-y-3">
              {[
                { name: "Albert Einstein", iq: 160, highlighted: result.iqScore >= 135 },
                { name: "Elon Musk", iq: 155, highlighted: result.iqScore >= 130 && result.iqScore < 135 },
                { name: "Mark Zuckerberg", iq: 152, highlighted: result.iqScore >= 125 && result.iqScore < 130 },
                { name: "Emma Watson", iq: 138, highlighted: result.iqScore >= 120 && result.iqScore < 125 },
                { name: "Will Smith", iq: 115, highlighted: result.iqScore >= 115 && result.iqScore < 120 },
                { name: "Tom Cruise", iq: 110, highlighted: result.iqScore >= 110 && result.iqScore < 115 },
                { name: "Brad Pitt", iq: 108, highlighted: result.iqScore >= 105 && result.iqScore < 110 },
                { name: "Jennifer Aniston", iq: 101, highlighted: result.iqScore >= 100 && result.iqScore < 105 },
                { name: "Shakira", iq: 95, highlighted: result.iqScore >= 90 && result.iqScore < 100 },
              ].map((celeb, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                    celeb.highlighted
                      ? "bg-primary/10 border-2 border-primary"
                      : "bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {celeb.highlighted && (
                      <Award className="w-5 h-5 text-primary" />
                    )}
                    <span className={celeb.highlighted ? "font-bold" : ""}>
                      {celeb.name}
                    </span>
                  </div>
                  <span className={`font-mono ${celeb.highlighted ? "font-bold text-primary" : "text-muted-foreground"}`}>
                    QI {celeb.iq}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-primary/10 rounded-lg text-center">
              <p className="text-sm">
                <span className="font-bold">Você:</span> QI {result.iqScore} - Parecido com {celebrity}
              </p>
            </div>
          </Card>

          <Card className="p-6 shadow-elegant">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Sua Força Cognitiva Dominante</h3>
                <p className="text-muted-foreground">{strength}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Challenge Section - Destaque */}
        <Card className="p-8 mb-6 shadow-elegant border-2 border-primary bg-gradient-primary text-primary-foreground">
          <div className="text-center">
            <Zap className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Desafie Seus Amigos!
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Você está no top {100 - result.percentile}% das pessoas mais inteligentes. Será que seus amigos conseguem te superar?
            </p>
            <div className="bg-primary-foreground/10 rounded-lg p-6 mb-6">
              <div className="text-primary-foreground">
                <Trophy className="w-12 h-12 mx-auto mb-2" />
                <p className="text-sm mb-1">Meu QI</p>
                <p className="text-5xl font-bold">{result.iqScore}</p>
                <p className="text-sm mt-1">Top {100 - result.percentile}%</p>
              </div>
            </div>
            <Button
              onClick={shareOnWhatsApp}
              size="lg"
              variant="secondary"
              className="w-full text-lg shadow-elegant"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Compartilhar no WhatsApp e Desafiar
            </Button>
          </div>
        </Card>

        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            Você acertou {score} de 30 perguntas
          </p>
          <Button
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
            variant="outline"
          >
            Fazer o teste novamente
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompleteResult;
