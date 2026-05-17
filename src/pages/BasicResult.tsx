import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Star, Sparkles, CheckCircle, Lock, Eye, EyeOff, Trophy, Users, TrendingUp, ChevronRight } from "lucide-react";
import { calculateIQ, getCelebrityComparison } from "@/types/quiz";
import { useSEO } from "@/hooks/use-seo";
import Footer from "@/components/Footer";

const testimonials = [
  { text: "Fiquei chocada com a precisão. O resultado me descreveu perfeitamente.", author: "Mariana F.", city: "SP" },
  { text: "Muito mais detalhado do que esperava. Vale cada centavo.", author: "Ricardo T.", city: "RJ" },
  { text: "Fiz com minha filha e ela adorou descobrir o QI dela.", author: "Patrícia M.", city: "MG" },
  { text: "Resultado surpreendente! Compartilhei no WhatsApp na hora.", author: "Carlos S.", city: "RS" },
];

const BasicResult = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState("");
  const [averageAnswerTime, setAverageAnswerTime] = useState<number | undefined>(undefined);
  const [revealed, setRevealed] = useState(false);

  useSEO({
    title: "Seu Resultado Está Pronto",
    description: "Veja seu resultado do teste de QI.",
    noIndex: true,
  });

  useEffect(() => {
    const savedScore = localStorage.getItem("quizScore");
    const savedUserName = localStorage.getItem("userName");
    if (!savedScore) { navigate("/"); return; }
    setScore(parseInt(savedScore, 10));
    if (savedUserName) setUserName(savedUserName);
    const savedAverageTime = localStorage.getItem("quizAverageAnswerTime");
    if (savedAverageTime) setAverageAnswerTime(parseFloat(savedAverageTime));
  }, [navigate]);

  const result = calculateIQ(score, 30, averageAnswerTime);
  const celebrity = getCelebrityComparison(result.iqScore);

  // Mensagem de nível baseada no score
  const getLevel = () => {
    if (result.iqScore >= 130) return { label: "Excepcional", color: "text-purple-600", bg: "bg-purple-50 dark:bg-purple-950/30", border: "border-purple-200 dark:border-purple-800" };
    if (result.iqScore >= 120) return { label: "Superior", color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-950/30", border: "border-blue-200 dark:border-blue-800" };
    if (result.iqScore >= 110) return { label: "Acima da Média", color: "text-green-600", bg: "bg-green-50 dark:bg-green-950/30", border: "border-green-200 dark:border-green-800" };
    if (result.iqScore >= 90)  return { label: "Na Média", color: "text-yellow-600", bg: "bg-yellow-50 dark:bg-yellow-950/30", border: "border-yellow-200 dark:border-yellow-800" };
    return { label: "Com Potencial de Crescimento", color: "text-orange-600", bg: "bg-orange-50 dark:bg-orange-950/30", border: "border-orange-200 dark:border-orange-800" };
  };

  const level = getLevel();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 max-w-2xl flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate("/")}>
            <Brain className="w-7 h-7 text-primary" />
            <span className="text-xl font-bold">BomQI</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Lock className="w-3.5 h-3.5" />
            <span>Resultado protegido</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-lg">

        {/* Saudação */}
        <div className="text-center mb-6">
          {userName && (
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
              Parabéns, {userName}!
            </p>
          )}
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Seu resultado está pronto 🧠
          </h1>
          <p className="text-muted-foreground text-sm">
            Você completou o teste. Veja abaixo uma prévia do que descobrimos sobre você.
          </p>
        </div>

        {/* Card de nível — sem revelar o QI exato */}
        <Card className={`p-6 mb-4 border-2 ${level.border} ${level.bg}`}>
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Nível de Inteligência</p>
              <p className={`text-2xl font-bold ${level.color}`}>{level.label}</p>
            </div>
            <Trophy className={`w-12 h-12 ${level.color} opacity-80`} />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Seu desempenho está <span className={`font-semibold ${level.color}`}>acima da maioria</span> dos participantes.
            O valor exato do seu QI está disponível no resultado completo.
          </p>
        </Card>

        {/* Card de comparação com celebridade */}
        <Card className="p-5 mb-4 bg-primary text-primary-foreground">
          <div className="flex items-start gap-3">
            <Star className="w-8 h-8 opacity-80 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-1">Seu QI é comparável ao de {celebrity}</p>
              <p className="text-primary-foreground/75 text-sm">
                Pessoas com seu perfil cognitivo costumam se destacar em raciocínio lógico e resolução de problemas.
              </p>
            </div>
          </div>
        </Card>

        {/* Prévia bloqueada */}
        <Card className="p-5 mb-4 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <p className="font-semibold text-sm">Prévia do seu resultado</p>
            <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground flex items-center gap-1">
              <Lock className="w-3 h-3" /> Bloqueado
            </span>
          </div>
          <div className="space-y-3">
            {[
              { label: "QI Exato", value: `${result.iqScore}`, icon: Brain },
              { label: "Percentil Nacional", value: `Top ${100 - result.percentile}%`, icon: TrendingUp },
              { label: "Posição no Ranking", value: `#${(Math.floor(Math.random() * 40000) + 10000).toLocaleString()}`, icon: Trophy },
              { label: "Comparação com Famosos", value: celebrity, icon: Star },
            ].map(({ label, value, icon: Icon }, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{label}</span>
                </div>
                <div className="relative">
                  <span className={`text-sm font-bold ${i === 0 ? "blur-sm select-none" : i === 1 ? "" : "blur-sm select-none"}`}>
                    {value}
                  </span>
                  {(i === 0 || i === 2) && (
                    <EyeOff className="w-3.5 h-3.5 text-muted-foreground absolute -right-5 top-0.5" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Overlay de desbloqueio */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent flex items-end justify-center pb-4">
            <button
              onClick={() => navigate("/dados-usuario")}
              className="flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
            >
              <Eye className="w-4 h-4" /> Desbloquear resultado completo
            </button>
          </div>
        </Card>

        {/* O que você vai receber */}
        <Card className="p-5 mb-4 border-primary/20 bg-primary/5">
          <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">Resultado completo inclui</p>
          <div className="space-y-2.5">
            {[
              "QI exato calculado cientificamente",
              "Percentil — onde você está entre os brasileiros",
              "Comparação detalhada com personalidades famosas",
              "Análise das suas habilidades cognitivas",
              "Badge exclusivo para compartilhar no WhatsApp",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* CTA principal */}
        <Button
          onClick={() => navigate("/dados-usuario")}
          size="lg"
          className="w-full text-base font-bold h-14 shadow-lg mb-3"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Ver meu resultado completo
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>

        <p className="text-center text-xs text-muted-foreground mb-8">
          🔒 Pagamento seguro · Acesso imediato · +50.000 resultados entregues
        </p>

        {/* Prova social */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-xs font-semibold text-muted-foreground">4.9 · +50.000 pessoas</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {testimonials.map((t, i) => (
              <Card key={i} className="p-4 bg-background border-border/60">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mb-2 leading-relaxed">"{t.text}"</p>
                <p className="text-xs font-semibold">{t.author} · <span className="font-normal text-muted-foreground">{t.city}</span></p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA secundário */}
        <div className="mt-8 text-center">
          <Button
            onClick={() => navigate("/dados-usuario")}
            size="lg"
            className="w-full text-base font-bold h-14 shadow-lg"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Quero ver meu resultado agora
          </Button>
          <div className="flex items-center justify-center gap-4 mt-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Users className="w-3 h-3" /> +50k pessoas</span>
            <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Dados seguros</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Acesso imediato</span>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default BasicResult;
