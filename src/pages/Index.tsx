import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, CheckCircle, Sparkles, TrendingUp, Users, Zap, UserX, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBrain from "@/assets/hero-brain.png";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => navigate("/")}
            >
              <Brain className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold">BomQI</h1>
            </div>
            <Button onClick={() => navigate("/teste")}>
              Fazer o Teste
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 animate-scale-in">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Teste de QI Científico</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Descubra Seu QI em 3 Minutos
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Você é mais inteligente que seus amigos? Só existe um jeito de saber.
            </p>
            
            {/* Badges sutis */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <UserX className="w-4 h-4 text-primary" />
                </div>
                <span>Sem cadastro</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <span>3 minutos</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <span>Super simples</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => navigate("/teste")}
                size="lg"
                className="shadow-elegant text-lg px-8 hover-scale group"
              >
                Começar o Teste
                <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
              
              <Button
                onClick={() => navigate("/sobre-o-teste")}
                size="lg"
                variant="outline"
                className="text-lg px-8"
              >
                Como Funciona
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4 border-t border-border/50">
              <div className="flex items-center gap-2 text-sm">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background" />
                  <div className="w-8 h-8 rounded-full bg-accent/20 border-2 border-background" />
                  <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-background" />
                </div>
                <span className="text-muted-foreground">
                  <span className="font-bold text-foreground">50.000+</span> pessoas já testaram
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl animate-pulse" />
              
              <img
                src={heroBrain}
                alt="Cérebro estilizado representando inteligência"
                className="w-full max-w-md rounded-2xl shadow-elegant relative z-10 hover-scale"
              />
              
              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 bg-background border border-border rounded-2xl p-4 shadow-elegant animate-scale-in z-20" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-xs text-muted-foreground">Precisão</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-background border border-border rounded-2xl p-4 shadow-elegant animate-scale-in z-20" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-accent" />
                  <div>
                    <div className="text-2xl font-bold">3 min</div>
                    <div className="text-xs text-muted-foreground">Duração</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Como Funciona</h2>
          <p className="text-xl text-muted-foreground">
            Simples, rápido e preciso
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 text-center shadow-elegant">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Responda 30 perguntas rápidas</h3>
            <p className="text-muted-foreground">
              Teste suas habilidades de raciocínio lógico, matemático e verbal
            </p>
          </Card>

          <Card className="p-6 text-center shadow-elegant">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Veja um resultado básico grátis</h3>
            <p className="text-muted-foreground">
              Descubra uma estimativa do seu QI imediatamente
            </p>
          </Card>

          <Card className="p-6 text-center shadow-elegant">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Desbloqueie o resultado completo</h3>
            <p className="text-muted-foreground">
              QI exato, ranking, comparação com famosos e badge exclusivo
            </p>
          </Card>
        </div>
      </section>

      {/* O que você desbloqueia */}
      <section className="container mx-auto px-4 py-16 bg-muted/30 rounded-3xl my-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            O que você desbloqueia no resultado completo
          </h2>
          <p className="text-xl text-muted-foreground">
            Se você é inteligente, prove.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <Card className="p-6 shadow-elegant">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold mb-1">Seu QI exato</h3>
                <p className="text-muted-foreground">
                  Resultado preciso baseado em seu desempenho completo
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-elegant">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold mb-1">Seu percentil</h3>
                <p className="text-muted-foreground">
                  Descubra acima de quantas pessoas você está
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-elegant">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold mb-1">Comparação com celebridades</h3>
                <p className="text-muted-foreground">
                  Veja quem tem QI similar ao seu
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-elegant">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold mb-1">Sua força cognitiva dominante</h3>
                <p className="text-muted-foreground">
                  Entenda o que seu cérebro faz melhor
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-elegant">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold mb-1">Badge de vitória para compartilhar</h3>
                <p className="text-muted-foreground">
                  Mostre seu resultado no WhatsApp e desafie seus amigos
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">O que as pessoas estão dizendo</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 shadow-elegant">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-primary text-xl">★</span>
              ))}
            </div>
            <p className="mb-4">
              "Mostrei no grupo da família, virei assunto na hora 😂"
            </p>
            <p className="text-sm text-muted-foreground">— João M.</p>
          </Card>

          <Card className="p-6 shadow-elegant">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-primary text-xl">★</span>
              ))}
            </div>
            <p className="mb-4">
              "Descobri que meu QI é maior que 92% das pessoas."
            </p>
            <p className="text-sm text-muted-foreground">— Laura S.</p>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-12 text-center shadow-elegant bg-gradient-primary text-primary-foreground">
          <TrendingUp className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">
            Prepare-se. Vamos testar esse cérebro.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            3 minutos para descobrir algo que você nunca soube sobre você mesmo
          </p>
          <Button
            onClick={() => navigate("/teste")}
            size="lg"
            variant="secondary"
            className="text-lg px-8"
          >
            Começar o Teste Agora
          </Button>
        </Card>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
