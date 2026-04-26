import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Star, Sparkles, CheckCircle, Shield, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { calculateIQ, getCelebrityComparison } from "@/types/quiz";
import { useSEO } from "@/hooks/use-seo";
import Footer from "@/components/Footer";

const PRICE = "R$ 14,90";

const testimonials = [
  { text: "Muito rápido e fácil de fazer. Recomendo!", author: "Mariana F." },
  { text: "A análise do resultado foi muito completa e útil.", author: "Ricardo T." },
  { text: "Fiz com minha filha e ela adorou descobrir o QI dela.", author: "Patrícia M." },
  { text: "Resultado surpreendente! Muito melhor do que esperava.", author: "Carlos S." },
];

const BasicResult = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);

  const [averageAnswerTime, setAverageAnswerTime] = useState<number | undefined>(undefined);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useSEO({
    title: "Resultado do Teste de QI",
    description: "Veja seu resultado do teste de QI.",
    noIndex: true,
  });

  useEffect(() => {
    const savedScore = localStorage.getItem("quizScore");
    if (!savedScore) {
      navigate("/");
      return;
    }
    setScore(parseInt(savedScore, 10));
    const savedAverageTime = localStorage.getItem("quizAverageAnswerTime");
    if (savedAverageTime) setAverageAnswerTime(parseFloat(savedAverageTime));
  }, [navigate]);

  const result = calculateIQ(score, 30, averageAnswerTime);
  const celebrity = getCelebrityComparison(result.iqScore);

  const visibleTestimonials = [
    testimonials[testimonialIndex % testimonials.length],
    testimonials[(testimonialIndex + 1) % testimonials.length],
    testimonials[(testimonialIndex + 2) % testimonials.length],
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate("/")}
          >
            <Brain className="w-8 h-8 text-primary" />
            <div className="text-2xl font-bold">BomQI</div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-10 max-w-2xl">
        {/* Saudação */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground text-lg">Seu resultado completo está quase pronto!</p>
          <div className="inline-flex items-center gap-1 mt-3 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full">
            <Zap className="w-4 h-4" /> Acesso imediato
          </div>
        </div>

        {/* Card roxo — celebrity/QI */}
        <div className="bg-primary rounded-2xl p-8 mb-6 text-white text-center">
          <Star className="w-10 h-10 mx-auto mb-4 opacity-80" />
          <p className="text-xl font-semibold mb-2">Seu QI pode ser comparável ao de {celebrity}</p>
          <p className="text-primary-foreground/80 text-sm">
            Pessoas com desempenho similar ao seu costumam ter QI entre {result.iqScore - 5} e {result.iqScore + 5}
          </p>
        </div>

        {/* Card principal */}
        <Card className="p-8 mb-6 shadow-elegant">
          {/* Benefícios */}
          <p className="font-semibold text-lg mb-4">O que você vai receber:</p>
          <ul className="space-y-3 mb-8">
            {[
              { title: "Seu QI exato e detalhado", sub: "Análise completa do seu desempenho" },
              { title: "Seu percentil nacional", sub: "Descubra sua posição entre milhares" },
              { title: "Comparação com celebridades", sub: "Veja quem tem QI similar ao seu" },
              { title: "Sua força cognitiva dominante", sub: "Entenda suas habilidades principais" },
              { title: "Badge exclusivo para compartilhar", sub: "Mostre seu resultado no WhatsApp" },
            ].map(({ title, sub }) => (
              <li key={title} className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5 shrink-0" />
                <div>
                  <p className="font-medium text-sm">{title}</p>
                  <p className="text-xs text-muted-foreground">{sub}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Card de preço */}
          <div className="border rounded-xl p-5 mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold">Acesso Completo</span>
              <div className="text-right">
                <span className="text-2xl font-bold text-primary">{PRICE}</span>
                <p className="text-xs text-muted-foreground">Pagamento único</p>
              </div>
            </div>
            <div className="space-y-1.5 mb-4">
              {["Acesso imediato após pagamento", "URL única e exclusiva", "Pagamento seguro via PIX"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <div className="bg-muted rounded-lg py-2 text-center text-sm text-muted-foreground">
              💳 Pagamento seguro e rápido
            </div>
          </div>

          {/* CTA */}
          <Button
            onClick={() => navigate("/dados-usuario")}
            size="lg"
            className="w-full text-lg shadow-elegant"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Desbloquear por {PRICE}
          </Button>
          <div className="flex items-center justify-center gap-6 mt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Acesso imediato</span>
            <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> 100% seguro</span>
            <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Dados protegidos</span>
          </div>
        </Card>

        {/* Social proof */}
        <div className="text-center mb-12 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">💳 Pagamento seguro via PIX</p>
          <p>Mais de 50.000 pessoas já descobriram seu QI completo</p>
          <p>Após o pagamento, você receberá uma URL única com seu resultado</p>
        </div>

        {/* Depoimentos */}
        <h2 className="text-2xl font-bold text-center mb-8">O que as pessoas estão dizendo</h2>
        <div className="relative">
          <div className="grid grid-cols-3 gap-4">
            {visibleTestimonials.map((t, i) => (
              <Card key={i} className="p-4">
                <div className="flex gap-0.5 mb-3 text-primary">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm mb-3">"{t.text}"</p>
                <p className="text-xs text-muted-foreground font-medium">— {t.author}</p>
              </Card>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="p-2 rounded-full border hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setTestimonialIndex((i) => (i + 1) % testimonials.length)}
              className="p-2 rounded-full border hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BasicResult;
