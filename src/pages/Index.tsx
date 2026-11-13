import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Brain,
  CheckCircle,
  TrendingUp,
  Zap,
  Clock,
  Globe,
  ArrowRight,
  BookOpen,
  ChevronDown,
  Target,
  BarChart3,
  Users,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useState, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { getSessionState, clearSession, SessionState } from "@/lib/session";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";
import MobileStickyTestCta from "@/components/MobileStickyTestCta";
import { DEFAULT_OG_IMAGE } from "@/constants/site";
import { getCountryFlag } from "@/utils/countryFlags";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { useSEO } from "@/hooks/use-seo";
import BelowMenuAdSense from "@/components/BelowMenuAdSense";
import ContentBandAdSense from "@/components/ContentBandAdSense";
import {
  ADSENSE_HOME_1_SLOT,
  ADSENSE_HOME_2_SLOT,
  ADSENSE_HOME_3_SLOT,
} from "@/constants/adsense";
import {
  BRAZIL_IQ,
  getTopCountries,
  NATIONAL_IQ_SOURCE,
} from "@/data/nationalIq";

const homeTopCountries = getTopCountries(30);

const Index = () => {
  const navigate = useNavigate();
  const [sessionModal, setSessionModal] = useState<SessionState | null>(null);

  const handleStartQuiz = useCallback(() => {
    const state = getSessionState();
    if (state.type !== 'none') {
      setSessionModal(state);
    } else {
      navigate("/teste");
    }
  }, [navigate]);

  const handleContinue = () => {
    setSessionModal(null);
    if (sessionModal?.type === 'premium') {
      navigate(`/resultado-completo?token=${(sessionModal as any).token}`);
    } else {
      navigate("/dados-usuario");
    }
  };

  const handleRestart = () => {
    clearSession();
    setSessionModal(null);
    handleStartQuiz();
  };

  // SEO para a página inicial
  useSEO({
    title: "Teste de QI Online Confiável | Resultado em Minutos",
    description: "Faça o teste de QI online do BomQI em 3 minutos. Resultado completo com QI, percentil e análise — confiável e acessível.",
    keywords: "teste de QI, teste de QI online, teste de QI confiável, teste de inteligência online, descobrir QI, teste QI rápido, avaliação QI, medir inteligência",
    url: "https://bomqi.com.br/",
    type: "website",
    image: DEFAULT_OG_IMAGE,
  });

  // Structured Data para SEO e Rich Results
  useStructuredData([
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "BomQI",
      "url": "https://bomqi.com.br",
      "logo": "https://bomqi.com.br/og-image.jpg",
      "description": "Teste de QI online confiável. Resultado completo com análise científica em minutos.",
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
      "description": "Teste de QI online confiável. Resultado completo com análise científica em minutos.",
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
      }
    }
  ]);

  return (
    <div className="home-guide min-h-screen">
      <SiteHeader onStartTest={handleStartQuiz} />
      <BelowMenuAdSense slot={ADSENSE_HOME_1_SLOT} />

      {/* Hero — composição centrada */}
      <section className="relative overflow-hidden pt-8 pb-4 md:pt-10 md:pb-6">
        <div className="container mx-auto px-4 pt-4 pb-12 md:pt-6 md:pb-16">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-4 py-1.5 text-sm text-muted-foreground shadow-sm">
              <Brain className="h-4 w-4 text-primary" />
              <span>Teste de QI online · resultado em minutos</span>
            </div>

            <div className="mb-8 flex items-center justify-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md animate-scale-in">
                <Zap className="h-7 w-7" strokeWidth={2.25} />
              </div>
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(222_40%_18%)] text-white shadow-md animate-scale-in"
                style={{ animationDelay: "80ms" }}
              >
                <BookOpen className="h-7 w-7" strokeWidth={2} />
              </div>
            </div>

            <p className="mb-3 font-display text-3xl md:text-4xl text-primary tracking-tight">
              BomQI
            </p>

            <h1 className="mb-6 text-4xl leading-[1.12] text-foreground md:text-5xl lg:text-[3.35rem]">
              Descubra seu QI com clareza — teste rápido, sério e fácil de entender
            </h1>

            <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Avalie raciocínio lógico e velocidade mental em cerca de 3 minutos.
              Depois, veja seu QI, percentil e onde você se posiciona.
            </p>

            <div className="mb-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button
                onClick={() => handleStartQuiz()}
                size="lg"
                className="rounded-xl px-8 text-base font-semibold shadow-elegant hover:brightness-105 group"
              >
                Começar o teste
                <ArrowRight className="ml-1.5 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[15px]">
                <button
                  type="button"
                  onClick={() => navigate("/sobre-o-teste")}
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  Como funciona
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/blog")}
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  Guias de QI
                </button>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">50.000+</span> pessoas já testaram · sem cadastro complicado
            </p>
          </div>

          <div className="mt-14 flex justify-center text-muted-foreground/70 animate-bounce-subtle">
            <ChevronDown className="h-6 w-6" aria-hidden />
          </div>
        </div>
      </section>

      <ContentBandAdSense slot={ADSENSE_HOME_2_SLOT} />

      {/* Como funciona — passos limpos */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Em 3 passos
          </p>
          <h2 className="mb-3 text-3xl md:text-4xl text-foreground">Como funciona o teste</h2>
          <p className="text-lg text-muted-foreground">Simples, rápido e com resultado interpretável</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {[
            {
              n: "1",
              title: "Responda 30 perguntas",
              body: "Raciocínio lógico, padrões e velocidade — no seu ritmo, em poucos minutos.",
              tint: "bg-[hsl(210_60%_96%)]",
              icon: Target,
            },
            {
              n: "2",
              title: "Veja a prévia do seu nível",
              body: "Entenda sua faixa antes de desbloquear o QI exato e a análise completa.",
              tint: "bg-[hsl(256_55%_95%)]",
              icon: BarChart3,
            },
            {
              n: "3",
              title: "Desbloqueie o resultado",
              body: "QI, percentil, ranking e leitura clara do seu desempenho cognitivo.",
              tint: "bg-[hsl(160_35%_94%)]",
              icon: Brain,
            },
          ].map((step) => (
            <div
              key={step.n}
              className={`rounded-2xl border border-border/70 ${step.tint} p-7 transition-shadow hover:shadow-elegant`}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-background/80 text-primary shadow-sm">
                <step.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Passo {step.n}
              </p>
              <h3 className="mb-2 text-xl text-foreground">{step.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hub de exploração — cards editoriais */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="mb-3 text-3xl md:text-4xl text-foreground">Explore o BomQI</h2>
          <p className="text-lg text-muted-foreground">
            Teste, compare médias e leia guias práticos sobre inteligência
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              to: "/teste",
              onClick: true,
              label: "Teste de QI",
              title: "Faça o teste agora",
              excerpt: "Resultado com QI, percentil e análise — em cerca de 3 minutos.",
              tint: "bg-[hsl(256_60%_95%)]",
              icon: Zap,
              cta: "Começar →",
            },
            {
              to: "/qi-por-pais",
              label: "Dados globais",
              title: "QI médio por país",
              excerpt: "Veja o ranking mundial e onde o Brasil aparece na média.",
              tint: "bg-[hsl(210_55%_95%)]",
              icon: Globe,
              cta: "Ver ranking →",
            },
            {
              to: "/blog/qual-meu-qi",
              label: "Guia prático",
              title: "Qual meu QI?",
              excerpt: "Descubra seu score agora, entenda as faixas e o que fazer com o resultado.",
              tint: "bg-[hsl(340_40%_96%)]",
              icon: BookOpen,
              cta: "Ler guia →",
            },
            {
              to: "/blog/qi-de-famosos",
              label: "Curiosidades",
              title: "QI de famosos",
              excerpt: "Estimativas e contexto sobre personalidades conhecidas.",
              tint: "bg-[hsl(280_30%_96%)]",
              icon: Users,
              cta: "Ver índice →",
            },
            {
              to: "/blog/teste-qi-online-gratuito",
              label: "Grátis online",
              title: "Teste QI online gratuito",
              excerpt: "Compare MyIQ, Tua Saúde, Mensa e veja o que é grátis de verdade.",
              tint: "bg-[hsl(160_35%_94%)]",
              icon: CheckCircle,
              cta: "Ler comparativo →",
            },
            {
              to: "/como-funciona",
              label: "Método",
              title: "Como o BomQI funciona",
              excerpt: "O que medimos, quanto tempo leva e o que vem no resultado.",
              tint: "bg-[hsl(220_25%_95%)]",
              icon: Clock,
              cta: "Saiba mais →",
            },
          ].map((item) => {
            const Icon = item.icon;
            const inner = (
              <>
                <div className={`-mx-6 -mt-6 mb-5 flex h-28 items-center justify-center rounded-t-2xl ${item.tint}`}>
                  <Icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
                </div>
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  {item.label}
                </p>
                <h3 className="mb-2 text-xl text-foreground">{item.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
                <span className="text-sm font-semibold text-primary">{item.cta}</span>
              </>
            );
            const className =
              "flex h-full flex-col rounded-2xl border border-border/70 bg-background p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-elegant";
            if (item.onClick) {
              return (
                <button key={item.to} type="button" onClick={() => handleStartQuiz()} className={`${className} text-left`}>
                  {inner}
                </button>
              );
            }
            return (
              <Link key={item.to} to={item.to} className={className}>
                {inner}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Médias de QI por País */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Dados globais
          </p>
          <h2 className="mb-3 text-3xl md:text-4xl text-foreground">Médias de QI por país</h2>
          <p className="text-lg text-muted-foreground">
            Fonte: {NATIONAL_IQ_SOURCE.primary} — amostra online global. Veja como o Brasil se compara.
          </p>
        </div>

        <Card className="max-w-6xl mx-auto rounded-2xl border-border/70 p-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Top 10", slice: homeTopCountries.slice(0, 10) },
              { title: "Ranks 11–20", slice: homeTopCountries.slice(10, 20) },
              { title: "Ranks 21–30", slice: homeTopCountries.slice(20, 30) },
            ].map((col) => (
              <div key={col.title} className="space-y-2">
                <h3 className="text-lg font-bold mb-4 text-center pb-2 border-b border-border">
                  {col.title}
                </h3>
                {col.slice.map((item) => (
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
            ))}
          </div>

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

          <div className="pt-6 border-t border-border">
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Brain className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-bold text-lg">Brasil</div>
                    <div className="text-sm text-muted-foreground">
                      IIT 2025: ~{NATIONAL_IQ_SOURCE.brazilIit} (≈ {NATIONAL_IQ_SOURCE.brazilRankIit}º)
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{BRAZIL_IQ.iq}</div>
                  <div className="text-xs text-muted-foreground">QI médio</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Compilações clássicas (Lynn &amp; Becker) estimavam ~{NATIONAL_IQ_SOURCE.brazilLynnApprox}.
                A média de referência nos testes é 100 — descubra o seu QI individual no BomQI.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Nota:</strong> {NATIONAL_IQ_SOURCE.updatedLabel}. Médias nacionais têm limitações de amostragem;
              seu resultado individual pode variar bastante.
            </p>
          </div>
        </Card>

        <div className="text-center mt-8">
          <Button
            onClick={() => handleStartQuiz()}
            size="lg"
            className="shadow-elegant"
          >
            Descubra Seu QI Agora
            <Brain className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Distribuição de QI - Curva de Sino */}
      <section className="container mx-auto my-8 rounded-3xl bg-muted/30 px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Ciência do QI
            </p>
            <h2 className="mb-3 text-3xl md:text-4xl text-foreground">
              Distribuição de QI na população
            </h2>
            <p className="text-lg text-muted-foreground">
              Entenda a curva normal e em qual faixa você pode se encontrar
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
                onClick={() => handleStartQuiz()}
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
      <section className="container mx-auto my-8 rounded-3xl bg-primary/[0.04] px-4 py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-3 text-3xl md:text-4xl text-foreground">
            O que você desbloqueia no resultado completo
          </h2>
          <p className="text-lg text-muted-foreground">QI exato, percentil e leitura clara do seu desempenho</p>
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
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl text-foreground">O que as pessoas estão dizendo</h2>
        </div>
        <SocialProofCarousel />
      </section>

      <ContentBandAdSense slot={ADSENSE_HOME_3_SLOT} />

      {/* Guias populares — links internos SEO */}
      <section className="container mx-auto px-4 pb-8 md:pb-12">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="mb-2 text-3xl md:text-4xl text-foreground">Guias mais buscados</h2>
          <p className="text-muted-foreground">Leituras rápidas para entender QI e testes online</p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
          <Link
            to="/blog/teste-qi-gratuito-e-confiavel"
            className="rounded-2xl border border-border/70 bg-background p-6 transition-all hover:-translate-y-0.5 hover:shadow-elegant"
          >
            <BookOpen className="mb-3 h-5 w-5 text-primary" />
            <p className="font-display mb-1 text-lg text-foreground">Teste confiável</p>
            <p className="text-sm text-muted-foreground">Como escolher um teste sério</p>
          </Link>
          <Link
            to="/blog/como-saber-meu-qi"
            className="rounded-2xl border border-border/70 bg-background p-6 transition-all hover:-translate-y-0.5 hover:shadow-elegant"
          >
            <Target className="mb-3 h-5 w-5 text-primary" />
            <p className="font-display mb-1 text-lg text-foreground">Como saber meu QI</p>
            <p className="text-sm text-muted-foreground">6 métodos práticos em 2026</p>
          </Link>
          <Link
            to="/blog/teste-qi-com-resultado-imediato"
            className="rounded-2xl border border-border/70 bg-background p-6 transition-all hover:-translate-y-0.5 hover:shadow-elegant"
          >
            <Zap className="mb-3 h-5 w-5 text-primary" />
            <p className="font-display mb-1 text-lg text-foreground">Resultado imediato</p>
            <p className="text-sm text-muted-foreground">Score na hora após o teste</p>
          </Link>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-[hsl(222_40%_14%)] px-8 py-14 text-center text-white shadow-elegant md:px-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
          <TrendingUp className="relative mx-auto mb-5 h-10 w-10 text-primary" />
          <h2 className="relative mb-3 text-3xl md:text-4xl">
            Prepare-se. Vamos testar esse cérebro.
          </h2>
          <p className="relative mx-auto mb-8 max-w-xl text-lg text-white/75">
            3 minutos para descobrir algo que você ainda não sabia sobre você mesmo
          </p>
          <Button
            onClick={() => handleStartQuiz()}
            size="lg"
            className="relative rounded-xl bg-primary px-8 text-base font-semibold text-primary-foreground hover:brightness-105"
          >
            Começar o teste agora
            <ArrowRight className="ml-1.5 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      
      {/* Modal de sessão existente */}
      <Dialog open={sessionModal !== null} onOpenChange={() => setSessionModal(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {sessionModal?.type === 'premium' ? '🏆 Resultado Premium salvo' : '📊 Resultado salvo'}
            </DialogTitle>
            <DialogDescription>
              {sessionModal?.type === 'premium'
                ? 'Você já tem um resultado completo disponível por mais algumas horas. Deseja ver ou refazer o teste?'
                : 'Você já completou o teste recentemente. Deseja ver seu resultado ou refazer do zero?'}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-2">
            <Button onClick={handleContinue} size="lg" className="w-full">
              {sessionModal?.type === 'premium' ? 'Ver resultado completo' : 'Ver resultado'}
            </Button>
            <Button onClick={handleRestart} variant="outline" size="lg" className="w-full">
              Refazer o teste
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <Footer />
      <MobileStickyTestCta onStart={handleStartQuiz} />
    </div>
  );
};

export default Index;
