import { useNavigate } from "react-router-dom";
import { Brain, Award, Users, Shield, Target, Sparkles, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/use-seo";

const SobreOTeste = () => {
  const navigate = useNavigate();

  useSEO({
    title: "Sobre o Teste de QI BomQI",
    description: "Conheça a história, metodologia e ciência por trás do teste de QI do BomQI. Entenda como medimos a inteligência de forma precisa.",
    keywords: "sobre teste QI, metodologia teste inteligência, ciência QI, validação teste QI, história teste inteligência, BomQI teste, teste QI confiável, psicometria, avaliação cognitiva científica, teste QI validado",
    url: "https://bomqi.com.br/sobre-o-teste",
  });

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => navigate("/")}
            >
              <Brain className="w-8 h-8 text-primary" />
              <div className="text-2xl font-bold">BomQI</div>
            </div>
            <Button onClick={() => navigate("/teste")} size="lg">
              Fazer o Teste
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Sobre o Teste de QI BomQI</h1>
          <p className="text-xl text-muted-foreground">
            Conheça a história, metodologia e ciência por trás do nosso teste
          </p>
        </div>

        <div className="space-y-8 mb-12">
          <Card className="p-8 shadow-elegant">
            <h2 className="text-3xl font-bold mb-4">O que é QI?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              QI significa <strong>Quociente de Inteligência</strong> e é uma medida padronizada da capacidade cognitiva de uma pessoa em relação à população geral. O conceito foi desenvolvido no início do século XX e tornou-se uma das formas mais utilizadas para avaliar inteligência.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Um QI de 100 representa a média populacional. A maioria das pessoas (cerca de 68%) tem QI entre 85 e 115. QI acima de 130 é considerado excepcionalmente alto, e acima de 145, indicando superdotação.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 shadow-elegant">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Nossa Missão</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Democratizar o acesso a testes de inteligência de qualidade, oferecendo uma forma rápida, acessível e divertida de descobrir seu QI. Acreditamos que conhecer suas capacidades cognitivas é o primeiro passo para desenvolvê-las.
              </p>
            </Card>

            <Card className="p-6 shadow-elegant">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Privacidade Garantida</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Seu resultado é completamente anônimo. Não coletamos dados pessoais identificáveis e você tem total controle sobre compartilhar ou não seu QI. Seus dados são processados de forma segura e criptografada.
              </p>
            </Card>
          </div>

          <Card className="p-8 shadow-elegant bg-gradient-to-br from-primary/5 to-background">
            <h2 className="text-3xl font-bold mb-6 text-center">Metodologia Científica</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Questões Validadas</h4>
                  <p className="text-sm text-muted-foreground">
                    Cada pergunta do nosso teste foi cuidadosamente elaborada e validada por especialistas em psicometria. Utilizamos princípios da Teoria de Resposta ao Item (TRI) para garantir precisão.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Normalização Estatística</h4>
                  <p className="text-sm text-muted-foreground">
                    Comparamos seu desempenho com um banco de dados de milhares de participantes para calcular seu QI normalizado. Atualizamos constantemente nossos algoritmos para manter a precisão.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Múltiplas Dimensões Cognitivas</h4>
                  <p className="text-sm text-muted-foreground">
                    Avaliamos raciocínio lógico, verbal, abstrato, numérico e espacial para uma medida mais completa da inteligência, não apenas um tipo específico de habilidade.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-elegant">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Por que fazer o teste BomQI?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-bold mb-2">🎯 Rápido e Preciso</h4>
                <p className="text-sm text-muted-foreground">
                  Apenas 3-5 minutos para um resultado confiável e detalhado
                </p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-bold mb-2">💰 Acessível</h4>
                <p className="text-sm text-muted-foreground">
                  Resultado completo por apenas R$ 5,00, mais barato que uma xícara de café
                </p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-bold mb-2">📊 Análise Completa</h4>
                <p className="text-sm text-muted-foreground">
                  Não apenas um número, mas insights profundos sobre suas capacidades
                </p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-bold mb-2">🎓 Educacional</h4>
                <p className="text-sm text-muted-foreground">
                  Receba dicas personalizadas para desenvolver sua inteligência
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-elegant border-2 border-primary/20">
            <div className="text-center">
              <Award className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Mais de 50.000 pessoas já descobriram seu QI
              </h2>
              <p className="text-muted-foreground mb-4">
                Junte-se a milhares de pessoas que já conhecem suas capacidades cognitivas
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Resultado instantâneo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>100% anônimo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Pagamento seguro</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center bg-gradient-primary text-primary-foreground rounded-lg p-8 shadow-elegant">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para conhecer seu QI?
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Descubra seu potencial em apenas 3 minutos
          </p>
          <Button 
            onClick={() => navigate("/teste")} 
            size="lg" 
            variant="secondary"
            className="shadow-elegant"
          >
            Começar o Teste Agora
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SobreOTeste;
