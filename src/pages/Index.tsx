import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, CheckCircle, Sparkles, TrendingUp, Users, Zap, UserX, Clock, Globe, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBrain from "@/assets/hero-brain.png";
import Footer from "@/components/Footer";
import { getCountryFlag } from "@/utils/countryFlags";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";

const Index = () => {
  const navigate = useNavigate();

  // Structured Data para SEO e Rich Results
  useStructuredData([
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "BomQI",
      "url": "https://bomqi.com.br",
      "logo": "https://bomqi.com.br/favicon-brain-icon.png",
      "description": "Teste de QI online científico e preciso. Descubra seu quociente de inteligência em apenas 3 minutos.",
      "sameAs": [],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "contato@bomqi.com.br"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "BomQI",
      "url": "https://bomqi.com.br",
      "description": "Teste de QI online científico e preciso. Descubra seu quociente de inteligência em apenas 3 minutos.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://bomqi.com.br/blog?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Teste de QI Online",
      "description": "Teste de QI científico e preciso que avalia suas habilidades de raciocínio lógico, matemático e verbal. Resultado completo em 3 minutos.",
      "provider": {
        "@type": "Organization",
        "name": "BomQI"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Brasil"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "BRL"
      }
    }
  ]);

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
              <div className="text-2xl font-bold">BomQI</div>
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

      {/* Médias de QI por País */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <Globe className="w-5 h-5" />
            <span className="text-sm font-semibold">Dados Globais</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Médias de QI por País
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra como o Brasil se compara com outros países do mundo. Os dados são baseados em estudos científicos internacionais sobre inteligência.
          </p>
        </div>

        <Card className="p-8 shadow-elegant max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Coluna 1 - Top 10 */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold mb-4 text-center pb-2 border-b border-border">
                Top 10 Países
              </h3>
              {[
                { rank: 1, country: "Singapura", iq: 108 },
                { rank: 2, country: "Hong Kong", iq: 108 },
                { rank: 3, country: "Taiwan", iq: 106 },
                { rank: 4, country: "Coreia do Sul", iq: 106 },
                { rank: 5, country: "Japão", iq: 105 },
                { rank: 6, country: "China", iq: 104 },
                { rank: 7, country: "Eslovênia", iq: 103 },
                { rank: 8, country: "Suíça", iq: 102 },
                { rank: 9, country: "Holanda", iq: 102 },
                { rank: 10, country: "Coreia do Norte", iq: 102 },
              ].map((item) => (
                <div
                  key={item.rank}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-muted-foreground w-6">
                      {item.rank}.
                    </span>
                    <span className="text-xl">{getCountryFlag(item.country)}</span>
                    <span className="font-medium">{item.country}</span>
                  </div>
                  <span className="font-bold text-primary">{item.iq}</span>
                </div>
              ))}
            </div>

            {/* Coluna 2 - Ranks 11-20 */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold mb-4 text-center pb-2 border-b border-border">
                Ranks 11-20
              </h3>
              {[
                { rank: 11, country: "Macau", iq: 101 },
                { rank: 12, country: "Islândia", iq: 101 },
                { rank: 13, country: "Finlândia", iq: 101 },
                { rank: 14, country: "Canadá", iq: 101 },
                { rank: 15, country: "Bélgica", iq: 100 },
                { rank: 16, country: "Alemanha", iq: 100 },
                { rank: 17, country: "Reino Unido", iq: 100 },
                { rank: 18, country: "Áustria", iq: 100 },
                { rank: 19, country: "Nova Zelândia", iq: 100 },
                { rank: 20, country: "Israel", iq: 100 },
              ].map((item) => (
                <div
                  key={item.rank}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-muted-foreground w-6">
                      {item.rank}.
                    </span>
                    <span className="text-xl">{getCountryFlag(item.country)}</span>
                    <span className="font-medium">{item.country}</span>
                  </div>
                  <span className="font-bold text-primary">{item.iq}</span>
                </div>
              ))}
            </div>

            {/* Coluna 3 - Ranks 21-30 + Brasil */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold mb-4 text-center pb-2 border-b border-border">
                Ranks 21-30
              </h3>
              {[
                { rank: 21, country: "Malta", iq: 99 },
                { rank: 22, country: "Eslováquia", iq: 99 },
                { rank: 23, country: "Noruega", iq: 99 },
                { rank: 24, country: "Suécia", iq: 99 },
                { rank: 25, country: "Luxemburgo", iq: 99 },
                { rank: 26, country: "Dinamarca", iq: 99 },
                { rank: 27, country: "República Tcheca", iq: 99 },
                { rank: 28, country: "Estônia", iq: 99 },
                { rank: 29, country: "Austrália", iq: 99 },
                { rank: 30, country: "França", iq: 98 },
              ].map((item) => (
                <div
                  key={item.rank}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-muted-foreground w-6">
                      {item.rank}.
                    </span>
                    <span className="text-xl">{getCountryFlag(item.country)}</span>
                    <span className="font-medium">{item.country}</span>
                  </div>
                  <span className="font-bold text-primary">{item.iq}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Botão Ver Ranking Completo */}
          <div className="text-center mt-8 mb-6">
            <Button
              onClick={() => navigate("/qi-por-pais")}
              variant="outline"
              size="lg"
              className="shadow-elegant"
            >
              Ver Ranking Completo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Brasil destacado */}
          <div className="pt-6 border-t border-border">
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Brain className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-bold text-lg">Brasil</div>
                    <div className="text-sm text-muted-foreground">
                      Média de QI: 87 (Rank ~70)
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">87</div>
                  <div className="text-xs text-muted-foreground">QI médio</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                O Brasil está abaixo da média global (100). Faça o teste e descubra se você está acima da média brasileira!
              </p>
            </div>
          </div>

          {/* Nota informativa */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Nota:</strong> Os dados são baseados em estudos científicos internacionais. 
              A média global de QI é 100. Seu resultado individual pode variar significativamente.
            </p>
          </div>
        </Card>

        <div className="text-center mt-8">
          <Button
            onClick={() => navigate("/teste")}
            size="lg"
            className="shadow-elegant"
          >
            Descubra Seu QI Agora
            <Brain className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Distribuição de QI - Curva de Sino */}
      <section className="container mx-auto px-4 py-16 bg-muted/20 rounded-3xl my-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
              <Brain className="w-5 h-5" />
              <span className="text-sm font-semibold">Ciência do QI</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Distribuição de QI na População
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Entenda como o QI é distribuído na população mundial e descubra em qual faixa você se encontra
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Gráfico de Distribuição */}
            <Card className="p-8 shadow-elegant">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Distribuição de Pontuação de QI
              </h3>
              
              {/* Curva de Sino Visual Profissional */}
              <div className="relative mb-6 bg-white rounded-lg p-4">
                <svg viewBox="0 0 600 380" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    {/* Gradientes para os segmentos */}
                    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.7" />
                    </linearGradient>
                    <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#ea580c" stopOpacity="0.6" />
                    </linearGradient>
                    <linearGradient id="lightBlueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
                    </linearGradient>
                    <linearGradient id="grayGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#9ca3af" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#6b7280" stopOpacity="0.3" />
                    </linearGradient>
                    {/* Marker para setas (início e fim) - de dentro pra fora */}
                    {/* Seta 68%: início aponta para direita, fim aponta para esquerda - pontas tocam as linhas tracejadas */}
                    <marker id="arrowhead68-start" markerWidth="10" markerHeight="10" refX="10" refY="3" orient="auto" markerUnits="strokeWidth">
                      <polygon points="0 0, 10 3, 0 6" fill="#2563eb" />
                    </marker>
                    <marker id="arrowhead68-end" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                      <polygon points="10 0, 0 3, 10 6" fill="#2563eb" />
                    </marker>
                    {/* Seta 95%: EXATAMENTE igual à seta 68% - pontas tocam as linhas tracejadas */}
                    <marker id="arrowhead95-start" markerWidth="10" markerHeight="10" refX="10" refY="3" orient="auto" markerUnits="strokeWidth">
                      <polygon points="0 0, 10 3, 0 6" fill="#8b5cf6" />
                    </marker>
                    <marker id="arrowhead95-end" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                      <polygon points="10 0, 0 3, 10 6" fill="#8b5cf6" />
                    </marker>
                  </defs>
                  
                  {/* Eixo X (linha base) */}
                  <line x1="50" y1="330" x2="550" y2="330" stroke="#d1d5db" strokeWidth="2" />
                  
                  {/* Linhas verticais de divisão */}
                  <line x1="100" y1="330" x2="100" y2="320" stroke="#9ca3af" strokeWidth="1.5" />
                  <line x1="200" y1="330" x2="200" y2="320" stroke="#9ca3af" strokeWidth="1.5" />
                  <line x1="300" y1="330" x2="300" y2="320" stroke="#6366f1" strokeWidth="2.5" strokeDasharray="5 3" />
                  <line x1="400" y1="330" x2="400" y2="320" stroke="#9ca3af" strokeWidth="1.5" />
                  <line x1="500" y1="330" x2="500" y2="320" stroke="#9ca3af" strokeWidth="1.5" />
                  
                  {/* Áreas preenchidas sob a curva por segmento */}
                  
                  {/* Segmento <55 (0.1% - cinza) - cauda esquerda */}
                  <path
                    d="M 20 330 Q 30 328, 40 325 Q 45 322, 50 318 L 50 330 Z"
                    fill="#9ca3af"
                    opacity="0.5"
                  />
                  
                  {/* Segmento 55-70 (2% - azul claro) - área sob a curva */}
                  <path
                    d="M 50 318 Q 60 310, 70 300 Q 75 290, 80 280 Q 85 270, 90 260 Q 95 250, 100 240 L 100 330 L 50 330 Z"
                    fill="url(#lightBlueGradient)"
                  />
                  
                  {/* Segmento 70-85 (14% - laranja) - área sob a curva */}
                  <path
                    d="M 100 240 Q 120 220, 150 190 Q 170 170, 200 150 L 200 330 L 100 330 Z"
                    fill="url(#orangeGradient)"
                  />
                  
                  {/* Segmento 85-100 (34% - azul escuro) - área sob a curva */}
                  <path
                    d="M 200 150 Q 230 130, 250 120 Q 270 115, 300 110 L 300 330 L 200 330 Z"
                    fill="url(#blueGradient)"
                  />
                  
                  {/* Segmento 100-115 (34% - azul escuro) - área sob a curva */}
                  <path
                    d="M 300 110 Q 330 115, 350 120 Q 370 130, 400 150 L 400 330 L 300 330 Z"
                    fill="url(#blueGradient)"
                  />
                  
                  {/* Segmento 115-130 (14% - laranja) - área sob a curva */}
                  <path
                    d="M 400 150 Q 430 170, 450 190 Q 480 220, 500 240 L 500 330 L 400 330 Z"
                    fill="url(#orangeGradient)"
                  />
                  
                  {/* Segmento 130-145 (2% - azul claro) - área sob a curva */}
                  <path
                    d="M 500 240 Q 505 250, 510 260 Q 515 270, 520 280 Q 525 290, 530 300 Q 540 310, 550 318 L 550 330 L 500 330 Z"
                    fill="url(#lightBlueGradient)"
                  />
                  
                  {/* Segmento >145 (0.1% - cinza) - cauda direita */}
                  <path
                    d="M 550 318 Q 560 322, 565 325 Q 570 328, 580 330 L 550 330 Z"
                    fill="#9ca3af"
                    opacity="0.5"
                  />
                  
                  {/* Curva completa (contorno superior) */}
                  <path
                    d="M 20 330 Q 30 328, 40 325 Q 45 322, 50 318 Q 60 310, 70 300 Q 75 290, 80 280 Q 85 270, 90 260 Q 95 250, 100 240 Q 120 220, 150 190 Q 170 170, 200 150 Q 230 130, 250 120 Q 270 115, 300 110 Q 330 115, 350 120 Q 370 130, 400 150 Q 430 170, 450 190 Q 480 220, 500 240 Q 505 250, 510 260 Q 515 270, 520 280 Q 525 290, 530 300 Q 540 310, 550 318 Q 560 322, 565 325 Q 570 328, 580 330"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="3"
                    className="drop-shadow-sm"
                  />
                  
                  {/* Linha vertical central (QI 100 - média) */}
                  <line x1="300" y1="120" x2="300" y2="330" stroke="#6366f1" strokeWidth="2.5" strokeDasharray="6 4" />
                  
                  {/* Labels dos valores de QI no eixo X */}
                  <text x="35" y="350" textAnchor="middle" className="text-xs fill-gray-600 font-medium">55</text>
                  <text x="100" y="350" textAnchor="middle" className="text-sm fill-gray-700 font-semibold">70</text>
                  <text x="200" y="350" textAnchor="middle" className="text-sm fill-gray-700 font-semibold">85</text>
                  <text x="300" y="350" textAnchor="middle" className="text-base fill-primary font-bold">100</text>
                  <text x="400" y="350" textAnchor="middle" className="text-sm fill-gray-700 font-semibold">115</text>
                  <text x="500" y="350" textAnchor="middle" className="text-sm fill-gray-700 font-semibold">130</text>
                  <text x="565" y="350" textAnchor="middle" className="text-xs fill-gray-600 font-medium">145</text>
                  
                  {/* Percentuais fora dos segmentos (acima da curva) */}
                  <text x="35" y="310" textAnchor="middle" className="text-xs fill-gray-600 font-medium">0.1%</text>
                  <text x="75" y="250" textAnchor="middle" className="text-xs fill-gray-700 font-semibold">2%</text>
                  <text x="150" y="170" textAnchor="middle" className="text-sm fill-orange-700 font-bold">14%</text>
                  <text x="250" y="105" textAnchor="middle" className="text-base fill-blue-800 font-bold">34%</text>
                  <text x="350" y="105" textAnchor="middle" className="text-base fill-blue-800 font-bold">34%</text>
                  <text x="450" y="170" textAnchor="middle" className="text-sm fill-orange-700 font-bold">14%</text>
                  <text x="525" y="250" textAnchor="middle" className="text-xs fill-gray-700 font-semibold">2%</text>
                  <text x="565" y="310" textAnchor="middle" className="text-xs fill-gray-600 font-medium">0.1%</text>
                  
                  {/* Labels dos percentuais cumulativos */}
                  {/* Linhas tracejadas verticais */}
                  {/* Linhas tracejadas da 68% */}
                  <line x1="200" y1="80" x2="200" y2="330" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
                  <line x1="400" y1="80" x2="400" y2="330" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
                  {/* Linha horizontal que une as tracejadas da 68% */}
                  <line x1="200" y1="80" x2="400" y2="80" stroke="#2563eb" strokeWidth="3" />
                  
                  {/* Linhas tracejadas da 95% */}
                  <line x1="100" y1="40" x2="100" y2="330" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
                  <line x1="500" y1="40" x2="500" y2="330" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
                  {/* Linha horizontal que une as tracejadas da 95% */}
                  <line x1="100" y1="40" x2="500" y2="40" stroke="#8b5cf6" strokeWidth="3" />
                  
                  {/* Labels dos percentuais */}
                  <text x="300" y="68" textAnchor="middle" className="text-xl fill-blue-700 font-bold">68%</text>
                  <text x="300" y="28" textAnchor="middle" className="text-xl fill-purple-600 font-bold">95%</text>
                </svg>
                
                {/* Legenda abaixo do gráfico */}
                <div className="mt-6 text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">QI Médio:</span> 100 | <span className="font-semibold">Desvio Padrão:</span> 15
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-600 rounded"></div>
                      <span className="text-muted-foreground">34% (85-100 e 100-115)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-orange-500 rounded"></div>
                      <span className="text-muted-foreground">14% (70-85 e 115-130)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-400 rounded"></div>
                      <span className="text-muted-foreground">2% (55-70 e 130-145)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Estatísticas rápidas */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-3 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">68%</div>
                  <div className="text-xs text-muted-foreground">QI 85-115</div>
                </div>
                <div className="text-center p-3 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-xs text-muted-foreground">QI 70-130</div>
                </div>
                <div className="text-center p-3 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">2%</div>
                  <div className="text-xs text-muted-foreground">QI 130+</div>
                </div>
              </div>
            </Card>

            {/* Explicação e CTA */}
            <div className="space-y-6">
              <Card className="p-6 shadow-elegant">
                <h3 className="text-2xl font-bold mb-4">
                  Por que fazer este teste de QI?
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  O <strong>BomQI</strong> apresenta uma série de questões desafiadoras e divertidas, 
                  projetadas para medir suas habilidades de inteligência fluida e fornecer pontuações 
                  precisas e confiáveis.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Você pode fazer o teste online a qualquer momento, de qualquer dispositivo móvel ou 
                  computador, em um ambiente confortável e relaxado. Imediatamente após completar, você 
                  receberá um relatório detalhado que mostra como seu desempenho se compara a milhares 
                  de adultos de todo o mundo e ajuda você a identificar áreas para desenvolvimento.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-primary text-primary-foreground shadow-elegant">
                <h4 className="text-xl font-bold mb-3">
                  Entenda sua posição na distribuição
                </h4>
                <ul className="space-y-2 text-sm opacity-90">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>QI 55-70:</strong> 2% da população (abaixo da média)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>QI 70-85:</strong> 14% da população (média baixa)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>QI 85-100:</strong> 34% da população (média)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>QI 100-115:</strong> 34% da população (acima da média)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>QI 115-130:</strong> 14% da população (alto)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>QI 130-145:</strong> 2% da população (superdotado)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>QI 145+:</strong> 0,1% da população (genialidade)</span>
                  </li>
                </ul>
              </Card>

              <Button
                onClick={() => navigate("/teste")}
                size="lg"
                className="w-full shadow-elegant text-lg"
              >
                Descobrir Meu QI Agora
                <Brain className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Informações adicionais para SEO */}
          <Card className="p-6 mt-8 bg-background/50 shadow-elegant">
            <h4 className="text-lg font-bold mb-3">
              O que é a Distribuição Normal de QI?
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A distribuição de QI segue uma <strong>curva normal (curva de sino)</strong>, onde a maioria 
              das pessoas (68%) possui QI entre 85 e 115, próximo da média de 100. Apenas 2% da população 
              possui QI acima de 130 (superdotação) e 2% possui QI abaixo de 70. Esta distribuição é 
              consistente em diferentes países e culturas, sendo um dos padrões mais estudados em psicometria. 
              O desvio padrão de 15 pontos significa que aproximadamente 95% da população possui QI entre 70 e 130.
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
                <h3 className="text-lg font-bold mb-1">Badge de vitória</h3>
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
        <SocialProofCarousel />
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
