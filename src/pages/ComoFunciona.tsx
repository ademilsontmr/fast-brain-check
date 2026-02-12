import { useNavigate } from "react-router-dom";
import { Brain, Clock, Target, Trophy, Sparkles, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/use-seo";

const ComoFunciona = () => {
  const navigate = useNavigate();

  useSEO({
    title: "Como Funciona o Teste de QI",
    description: "Entenda cada etapa do nosso teste de QI e como calculamos seu quociente de inteligência de forma científica.",
    keywords: "como funciona teste QI, etapas teste inteligência, cálculo QI, metodologia teste QI, teste QI científico, avaliação cognitiva, processo teste inteligência, como é feito teste QI, teste QI online funciona, validação teste QI",
    url: "https://bomqi.com.br/como-funciona",
  });

  return <div className="min-h-screen bg-gradient-hero flex flex-col">
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate("/")}>
              <Brain className="w-8 h-8 text-primary" />
              <div className="text-2xl font-bold">BomQI</div>
            </div>
            
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

      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Como Funciona o Teste de QI</h1>
          <p className="text-xl text-muted-foreground">
            Entenda cada etapa do nosso teste e como calculamos seu QI
          </p>
        </div>

        <div className="space-y-8 mb-12">
          <Card className="p-8 shadow-elegant animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">1. Responda 30 Perguntas</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nosso teste é composto por 30 questões cuidadosamente elaboradas que avaliam diferentes aspectos da sua inteligência: raciocínio lógico, compreensão verbal, pensamento abstrato e resolução de problemas.
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm font-medium mb-2">⏱️ Tempo médio: 3-5 minutos</p>
                  <p className="text-sm text-muted-foreground">
                    Não há limite de tempo, mas recomendamos responder no ritmo natural para resultados mais precisos.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-elegant animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">2. Análise Instantânea</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ao finalizar o teste, nosso algoritmo analisa suas respostas comparando com um banco de dados de milhares de participantes. Cada questão tem um peso específico baseado em estudos psicométricos.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-primary/5 rounded-lg p-3">
                    <CheckCircle className="w-5 h-5 text-primary mb-2" />
                    <p className="text-sm font-medium">Algoritmo validado</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-3">
                    <CheckCircle className="w-5 h-5 text-primary mb-2" />
                    <p className="text-sm font-medium">Resultado preciso</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-elegant animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">3. Resultado Estimado Grátis</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Você receberá uma estimativa do seu QI gratuitamente, com uma faixa aproximada do seu resultado. Isso já te dá uma boa noção da sua inteligência.
                </p>
                <div className="bg-gradient-primary text-primary-foreground rounded-lg p-4">
                  <p className="text-sm font-medium">
                    🎁 Grátis: Estimativa aproximada do seu QI
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-elegant animate-fade-in border-2 border-primary/20" style={{
          animationDelay: "0.3s"
        }}>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <Trophy className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">4. Desbloqueie o Resultado Completo</h2>
                
                <div className="space-y-2">
                  {["Seu QI exato e percentil", "Comparação com celebridades e gênios", "Sua força cognitiva dominante", "Dicas personalizadas para desenvolver sua inteligência", "Diagnóstico completo com pontos fortes e áreas de melhoria", "Badge exclusivo para compartilhar no WhatsApp"].map((item, index) => <div key={index} className="flex items-center gap-3 p-2 bg-primary/5 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 shadow-elegant bg-gradient-to-br from-primary/5 to-background">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para descobrir seu QI?
            </h2>
            <p className="text-muted-foreground mb-6">
              Mais de 50.000 pessoas já descobriram sua inteligência. Agora é sua vez!
            </p>
            <Button onClick={() => navigate("/teste")} size="lg" className="shadow-elegant">
              Começar o Teste Agora
            </Button>
          </div>
        </Card>
      </main>

      <Footer />
    </div>;
};
export default ComoFunciona;