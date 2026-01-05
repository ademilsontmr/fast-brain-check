import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Share2, Trophy, TrendingUp, Award, Zap, Sparkles, Clock, Users, Download, Medal, Crown, Loader2 } from "lucide-react";
import { calculateIQ, getCelebrityComparison, getCognitiveStrength } from "@/types/quiz";
import { useToast } from "@/hooks/use-toast";
import { getRank, getResultByToken } from "@/services/api";
import { useSEO } from "@/hooks/use-seo";

// Função para gerar um número fixo baseado em uma string (token/userId)
const generateFixedShareCount = (seed: string): number => {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  // Gerar número entre 50 e 250 baseado no hash
  return Math.abs(hash % 200) + 50;
};

const CompleteResult = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  // SEO: noIndex para página de resultado completo (não deve ser indexada)
  useSEO({
    title: "Resultado Completo do Teste de QI",
    description: "Seu resultado completo do teste de QI com análise detalhada.",
    noIndex: true,
  });

  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState("");
  const [showCelebration, setShowCelebration] = useState(true);
  const [shareCount, setShareCount] = useState(0);
  const [rankPosition, setRankPosition] = useState(0);
  const [totalUsers, setTotalUsers] = useState(50000); // Fallback
  const [averageAnswerTime, setAverageAnswerTime] = useState<number | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyAccess = async () => {
      setIsLoading(true);
      
      // Obter token da URL (prioridade)
      const urlToken = searchParams.get("token");
      
      // Se tem token na URL, buscar resultado do backend
      if (urlToken) {
        try {
          const resultData = await getResultByToken(urlToken);
          
          // Usar dados do backend
          setScore(resultData.score);
          setUserName(resultData.name);
          setAverageAnswerTime(resultData.averageAnswerTime);
          
          // Salvar token no localStorage
          localStorage.setItem("resultToken", urlToken);
          localStorage.setItem("isPaid", "true");
          
          // Gerar shareCount fixo baseado no token
          setShareCount(generateFixedShareCount(urlToken));
          
          // Buscar ranking
          if (resultData.userId) {
            getRank(resultData.userId)
              .then((rankData) => {
                setRankPosition(rankData.position);
                setTotalUsers(rankData.total);
              })
              .catch(() => {
                setRankPosition(Math.floor(Math.random() * 5000) + 1000);
              });
          }
          
          setIsLoading(false);
          setTimeout(() => setShowCelebration(false), 3000);
          return;
        } catch (error) {
          console.error("Erro ao buscar resultado por token:", error);
          // Se falhar, tentar fallback com localStorage
        }
      }
      
      // Fallback: usar dados do localStorage
      const savedScore = localStorage.getItem("quizScore");
      const isPaid = localStorage.getItem("isPaid");
      const savedUserName = localStorage.getItem("userName");
      const userWhatsApp = localStorage.getItem("userWhatsApp");
      const savedToken = localStorage.getItem("resultToken");
      const userId = localStorage.getItem("userId");
      
      // Verificar se o usuário completou o teste e forneceu dados
      if (!savedScore || !savedUserName || !userWhatsApp) {
        navigate("/");
        return;
      }
      
      // Verificar acesso: verificar no localStorage
      let hasPaid = isPaid === "true";
      
      // Se não tem acesso, redirecionar
      if (!hasPaid) {
        toast({
          title: "Acesso restrito",
          description: "Você precisa pagar para acessar o resultado completo.",
          variant: "destructive",
        });
        setTimeout(() => {
          navigate("/pagamento");
        }, 2000);
        return;
      }
      
      // Validar token: deve existir na URL e corresponder ao salvo (ou gerar novo se não tiver)
      let token = urlToken || savedToken;
      if (!token) {
        // Gerar token se não existir
        token = btoa(`${userId}-${Date.now()}-${Math.random()}`)
          .replace(/[^a-zA-Z0-9]/g, '')
          .substring(0, 32);
        localStorage.setItem("resultToken", token);
      } else if (urlToken && urlToken !== savedToken) {
        // Se token da URL for diferente, atualizar
        localStorage.setItem("resultToken", urlToken);
        token = urlToken;
      }
    
      // Gerar shareCount fixo baseado no token (ou userId como fallback)
      const seedForShareCount = token || userId || "default";
      setShareCount(generateFixedShareCount(seedForShareCount));
    
      setScore(parseInt(savedScore));
      setUserName(savedUserName);
      
      // Obter tempo médio de resposta do localStorage
      const savedAverageTime = localStorage.getItem("quizAverageAnswerTime");
      if (savedAverageTime) {
        setAverageAnswerTime(parseFloat(savedAverageTime));
      }
      
      // Buscar ranking (fallback local)
      if (userId) {
        getRank(userId)
          .then((rankData) => {
            setRankPosition(rankData.position);
            setTotalUsers(rankData.total);
          })
          .catch((error) => {
            console.error("Erro ao buscar ranking:", error);
            // Usa valores padrão se falhar
            setRankPosition(Math.floor(Math.random() * 5000) + 1000);
          });
      } else {
        // Fallback se não tiver userId
        setRankPosition(Math.floor(Math.random() * 5000) + 1000);
      }
      
      setIsLoading(false);
      // Animação de celebração ao carregar
      setTimeout(() => setShowCelebration(false), 3000);
    };

    verifyAccess();
  }, [navigate, searchParams, toast]);

  const result = calculateIQ(score, 30, averageAnswerTime);
  const celebrity = getCelebrityComparison(result.iqScore);
  const strength = getCognitiveStrength(result.iqScore);

  // Mensagens de compartilhamento personalizadas por nível de QI
  const getShareMessage = () => {
    const percentile = 100 - result.percentile;
    const rank = rankPosition > 0 ? `#${rankPosition.toLocaleString()}` : 'TOP';
    
    if (result.iqScore >= 130) {
      return `🧠 RESULTADO EXCEPCIONAL!\n\nMeu QI é ${result.iqScore} - Estou entre os ${percentile}% mais inteligentes do Brasil! 🏆\n\nPosição ${rank} no ranking nacional\n\n💪 Você tem coragem de me desafiar?\n\nFaça o teste agora e descubra seu QI em apenas 3 minutos:\nhttps://bomqi.com.br\n\n#QI #Inteligência #Desafio`;
    } else if (result.iqScore >= 120) {
      return `🧠 Resultado Impressionante!\n\nDescobri que meu QI é ${result.iqScore}! Estou no TOP ${percentile}% das pessoas mais inteligentes! 🚀\n\nPosição ${rank} no ranking\n\nAcha que consegue me superar? O desafio está lançado! 💪\n\nTeste seu QI em 3 minutos:\nhttps://bomqi.com.br\n\n#QI #TesteDeInteligência`;
    } else if (result.iqScore >= 110) {
      return `🧠 Acabei de descobrir meu QI: ${result.iqScore}!\n\nEstou no TOP ${percentile}% das pessoas mais inteligentes! 🎯\n\nPosição ${rank} no ranking nacional\n\nSerá que você consegue me superar? Vamos descobrir! 🏆\n\nFaça o teste agora:\nhttps://bomqi.com.br\n\n#QI #Desafio`;
    } else if (result.iqScore >= 90) {
      return `🧠 Descobri meu QI: ${result.iqScore}!\n\nEstou no TOP ${percentile}%! Posição ${rank} no ranking 🎯\n\nQuer descobrir o seu? O teste leva apenas 3 minutos!\n\nVamos competir? 💪\nhttps://bomqi.com.br\n\n#QI #Teste`;
    } else {
      return `🧠 Acabei de fazer um teste de QI!\n\nMeu resultado: ${result.iqScore} (TOP ${percentile}%)\n\nQuer descobrir o seu? É rápido e divertido! 🎯\n\nFaça o teste:\nhttps://bomqi.com.br\n\n#QI #TesteDeInteligência`;
    }
  };

  const shareOnWhatsApp = () => {
    const message = encodeURIComponent(getShareMessage());
    window.open(`https://wa.me/?text=${message}`, "_blank");
    
    // Toast personalizado por nível
    const toastMessages = {
      high: { title: "🔥 Desafio Lançado!", description: "Seus amigos vão querer te superar!" },
      medium: { title: "🚀 Compartilhando!", description: "Vamos ver quem tem o QI mais alto..." },
      low: { title: "💪 Divulgando!", description: "Seus amigos vão adorar descobrir o QI deles!" }
    };
    
    const toastType = result.iqScore >= 120 ? 'high' : result.iqScore >= 100 ? 'medium' : 'low';
    toast(toastMessages[toastType]);
  };

  const getIQDescription = (iq: number): string => {
    if (iq >= 130) return "Excepcional";
    if (iq >= 120) return "Superior";
    if (iq >= 110) return "Acima da Média";
    if (iq >= 90) return "Média";
    return "Abaixo da Média";
  };

  const getBadge = (iq: number) => {
    if (iq >= 130) return { icon: Crown, text: "Gênio", color: "from-yellow-400 to-yellow-600" };
    if (iq >= 120) return { icon: Medal, text: "Excelente", color: "from-purple-400 to-purple-600" };
    if (iq >= 110) return { icon: Trophy, text: "Superior", color: "from-blue-400 to-blue-600" };
    if (iq >= 90) return { icon: Award, text: "Bom", color: "from-green-400 to-green-600" };
    return { icon: Sparkles, text: "Em Desenvolvimento", color: "from-gray-400 to-gray-600" };
  };

  const badge = getBadge(result.iqScore);
  const BadgeIcon = badge.icon;

  // Calcular tempo restante (24h a partir do pagamento)
  const getTimeRemaining = () => {
    const paidTime = localStorage.getItem("paidTime");
    if (!paidTime) return "24:00:00";
    const paid = parseInt(paidTime);
    const now = Date.now();
    const remaining = 24 * 60 * 60 * 1000 - (now - paid);
    if (remaining <= 0) return "00:00:00";
    const hours = Math.floor(remaining / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <Card className="p-8 text-center">
          <Loader2 className="w-16 h-16 mx-auto mb-4 animate-spin text-primary" />
          <h2 className="text-xl font-bold mb-2">Carregando seu resultado...</h2>
          <p className="text-muted-foreground">Aguarde um momento</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Confetes de celebração */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <span className="text-2xl">
                {['🎉', '✨', '🎊', '🌟', '⭐', '💫'][Math.floor(Math.random() * 6)]}
              </span>
            </div>
          ))}
        </div>
      )}

      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-40">
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

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Social Proof e Urgência - Topo */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Card className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Compartilharam hoje</p>
                <p className="text-lg font-bold text-primary">{shareCount}+</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 border-2 border-orange-500/20">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-xs text-muted-foreground">Acesso expira em</p>
                <p className="text-lg font-bold text-orange-500 font-mono">{timeRemaining}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Título Personalizado - Premium UX */}
        <div className="text-center mb-6 sm:mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-primary/30 via-primary/20 to-accent/30 rounded-full mb-4 sm:mb-5 shadow-lg ring-4 ring-primary/20 relative">
            <BadgeIcon className={`w-10 h-10 sm:w-14 sm:h-14 text-primary animate-pulse-subtle`} />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent animate-ping opacity-20" style={{ animationDuration: '3s' }} />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 sm:mb-3 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
            Parabéns, {userName}!
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium">
            Seu resultado completo está pronto
          </p>
          <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
        </div>

        {/* Card Principal Instagramável - Premium UX/UI */}
        <Card className="p-5 sm:p-7 md:p-9 mb-5 sm:mb-7 shadow-2xl bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground relative overflow-hidden border-4 border-primary/40 ring-4 ring-primary/10">
          {/* Elementos decorativos animados - Premium */}
          <div className="absolute top-0 right-0 w-40 h-40 sm:w-56 sm:h-56 bg-white/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          
          {/* Padrão de fundo sutil */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          
          <div className="text-center relative z-10">
            <p className="text-xs sm:text-sm md:text-base opacity-95 mb-2 sm:mb-3 font-semibold tracking-wide uppercase">Seu QI é</p>
            <div className="relative inline-block">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-2 sm:mb-3 drop-shadow-2xl animate-scale-in leading-none" style={{
                textShadow: '0 0 30px rgba(255,255,255,0.3), 0 0 60px rgba(255,255,255,0.2)'
              }}>
                {result.iqScore}
              </div>
              {/* Brilho animado no número */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{ animationDuration: '3s' }} />
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl opacity-100 font-bold mb-4 sm:mb-5 tracking-tight">{getIQDescription(result.iqScore)}</p>
            
            {/* Badge de Ranking - Premium UX */}
            <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-white/25 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-4 sm:mb-5 text-xs sm:text-sm md:text-base shadow-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-300 drop-shadow-md" />
              <span className="font-bold tracking-tight">Posição <span className="text-yellow-300">#{rankPosition > 0 ? rankPosition.toLocaleString() : '...'}</span> de {totalUsers > 0 ? totalUsers.toLocaleString() + '+' : '50.000+'}</span>
            </div>

            {/* Botão de Compartilhar - Topo - CTA Premium Otimizado */}
            <div className="space-y-2 sm:space-y-3">
              {result.iqScore >= 130 && (
                <div className="bg-yellow-500/30 border-2 border-yellow-500/70 rounded-lg p-2.5 sm:p-3 mb-2 animate-pulse shadow-lg">
                  <p className="text-[10px] sm:text-xs font-extrabold text-yellow-900 dark:text-yellow-100 text-center drop-shadow-sm">
                    👑 VOCÊ É UM GÊNIO! Mostre ao mundo sua conquista excepcional
                  </p>
                </div>
              )}
              {result.iqScore >= 120 && result.iqScore < 130 && (
                <div className="bg-purple-500/30 border-2 border-purple-500/70 rounded-lg p-2.5 sm:p-3 mb-2 shadow-lg">
                  <p className="text-[10px] sm:text-xs font-extrabold text-purple-900 dark:text-purple-100 text-center drop-shadow-sm">
                    ⭐ Resultado Superior! Compartilhe e inspire seus amigos
                  </p>
                </div>
              )}
              <Button
                onClick={shareOnWhatsApp}
                size="lg"
                variant="secondary"
                className="w-full text-sm sm:text-base md:text-lg shadow-elegant font-bold hover-scale bg-white text-primary hover:bg-white/90 py-3 sm:py-4 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <Share2 className="w-5 h-5 sm:w-6 sm:h-6 mr-2 relative z-10" />
                <span className="relative z-10">
                  {result.iqScore >= 130 ? "🔥 COMPARTILHAR MINHA CONQUISTA EXCEPCIONAL" :
                   result.iqScore >= 120 ? "🚀 COMPARTILHAR E DESAFIAR AMIGOS" :
                   result.iqScore >= 110 ? "💪 COMPARTILHAR E COMPETIR" :
                   "📱 COMPARTILHAR E DESCOBRIR"}
                </span>
                <span className="ml-2 relative z-10">
                  {result.iqScore >= 130 ? "👑" : result.iqScore >= 120 ? "🏆" : "🚀"}
                </span>
              </Button>
              <p className="text-[10px] sm:text-xs text-center opacity-80 font-medium">
                {result.iqScore >= 130 ? "Apenas 2% das pessoas alcançam este nível. Você merece reconhecimento!" :
                 result.iqScore >= 120 ? `${shareCount}+ pessoas já compartilharam hoje. Seja o próximo!` :
                 result.iqScore >= 110 ? "Junte-se aos milhares que já descobriram seu QI!" :
                 "Compartilhe e veja quem tem o QI mais alto entre seus amigos!"}
              </p>
            </div>
          </div>
        </Card>

        {/* Percentil Card - Otimizado para Mobile */}
        <Card className="p-4 sm:p-5 md:p-6 mb-4 sm:mb-6 shadow-elegant border-2 border-primary/20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-base sm:text-lg md:text-xl mb-1 sm:mb-2">Seu Percentil Nacional</h3>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">
                Top {100 - result.percentile}%
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Você está acima de <span className="font-bold text-primary">{result.percentile}%</span> da população brasileira
              </p>
            </div>
          </div>
        </Card>

        {/* Comparação com Personalidades - UX/UI Melhorado */}
        <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {/* Header Melhorado */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-xl sm:text-2xl">⭐</span>
              </div>
              <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">Comparação com Personalidades</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Descubra com quais personalidades famosas você compartilha o mesmo nível de inteligência
            </p>
          </div>

          {/* Grid de Personalidades - Melhorado */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 mb-6">
            {[
              { name: "Marie Curie", emoji: "🔬", iq: 180, desc: "Pioneira da Radioatividade", highlighted: result.iqScore >= 135 },
              { name: "Einstein", emoji: "🧪", iq: 160, desc: "Físico Genial", highlighted: result.iqScore >= 135 },
              { name: "Stephen Hawking", emoji: "🌌", iq: 160, desc: "Físico Teórico", highlighted: result.iqScore >= 135 },
              { name: "Ashton Kutcher", emoji: "💼", iq: 160, desc: "Ator e Empresário", highlighted: result.iqScore >= 130 && result.iqScore < 135 },
              { name: "Elon Musk", emoji: "🚀", iq: 155, desc: "Visionário Tech", highlighted: result.iqScore >= 130 && result.iqScore < 135 },
              { name: "Bill Gates", emoji: "💻", iq: 152, desc: "Criador Microsoft", highlighted: result.iqScore >= 125 && result.iqScore < 130 },
              { name: "Emma Watson", emoji: "📚", iq: 138, desc: "Atriz e Ativista", highlighted: result.iqScore >= 120 && result.iqScore < 125 },
              { name: "Shakira", emoji: "🎵", iq: 140, desc: "Cantora Genial", highlighted: result.iqScore >= 115 && result.iqScore < 120 },
              { name: "Will Smith", emoji: "🎬", iq: 115, desc: "Ator Premiado", highlighted: result.iqScore >= 110 && result.iqScore < 115 },
              { name: "Tom Cruise", emoji: "✈️", iq: 110, desc: "Ação e Talento", highlighted: result.iqScore >= 105 && result.iqScore < 110 },
              { name: "Brad Pitt", emoji: "🎭", iq: 108, desc: "Ícone Hollywood", highlighted: result.iqScore >= 100 && result.iqScore < 105 },
              { name: "Steve Jobs", emoji: "🍎", iq: 160, desc: "Criador Apple", highlighted: result.iqScore >= 90 && result.iqScore < 100 },
            ].map((personality, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 animate-fade-in ${
                  personality.highlighted
                    ? "bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground border-2 border-primary shadow-elegant transform scale-105 ring-2 ring-primary/50 ring-offset-2"
                    : "bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-md"
                }`}
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
              >
                {/* Efeito de brilho para destacado */}
                {personality.highlighted && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                )}
                
                <div className={`p-3 sm:p-4 text-center space-y-2 sm:space-y-3 relative z-10 ${personality.highlighted ? "animate-scale-in" : ""}`}>
                  {/* Emoji maior e mais destacado */}
                  <div className={`${personality.highlighted ? "text-5xl sm:text-6xl" : "text-4xl sm:text-5xl"} mb-2 transition-transform duration-300 ${personality.highlighted ? "animate-bounce-subtle" : "hover:scale-110"}`}>
                    {personality.emoji}
                  </div>
                  
                  {/* Nome */}
                  <h4 className={`font-bold text-sm sm:text-base ${personality.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                    {personality.name}
                  </h4>
                  
                  {/* Descrição */}
                  <p className={`text-xs sm:text-sm leading-tight ${personality.highlighted ? "opacity-95" : "text-muted-foreground"}`}>
                    {personality.desc}
                  </p>
                  
                  {/* QI com destaque */}
                  <div className={`text-base sm:text-lg md:text-xl font-bold font-mono ${personality.highlighted ? "text-primary-foreground bg-white/20 rounded-lg py-1 px-2" : "text-primary"}`}>
                    QI {personality.iq}
                  </div>
                  
                  {/* Badge de destaque */}
                  {personality.highlighted && (
                    <div className="pt-2 border-t border-primary-foreground/30 mt-2">
                      <div className="flex items-center justify-center gap-1.5">
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
                        <p className="text-xs sm:text-sm font-semibold">Seu Nível!</p>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Card de Destaque Final - Melhorado */}
          <Card className="p-4 sm:p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-2 border-primary/30 shadow-elegant relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-primary mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">🎯</span>
              </div>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                <span className="font-bold text-primary text-lg sm:text-xl">Seu QI de {result.iqScore}</span>
                <span className="mx-2">está próximo de</span>
                <span className="font-bold text-primary text-lg sm:text-xl">{celebrity}</span>
                <span className="ml-2">!</span>
              </p>
            </div>
          </Card>
        </div>

        {/* Força Cognitiva - Expandido com Valor Premium - Otimizado Mobile */}
        <Card className="p-4 sm:p-5 md:p-6 mb-4 sm:mb-6 shadow-elegant border-2 border-primary/20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* Header Premium - Otimizado Mobile */}
            <div className="text-center space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg">
                  <Brain className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2">✨ Sua Força Cognitiva Dominante</h3>
                <p className="text-lg sm:text-xl text-primary font-semibold mb-0.5 sm:mb-1">{strength}</p>
                <p className="text-xs sm:text-sm text-muted-foreground px-2">Análise Profissional Baseada em Neurociência Cognitiva</p>
              </div>
            </div>

            {/* Análise Detalhada Premium - Otimizado Mobile */}
            <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 space-y-3 sm:space-y-4 md:space-y-5 border border-primary/10">
              {/* Descrição Expandida por Nível - Otimizado Mobile */}
              <div className="space-y-3 sm:space-y-4">
                {result.iqScore >= 130 && (
                  <>
                    <div className="bg-primary/10 rounded-lg p-3 sm:p-4 border-l-4 border-primary">
                      <h4 className="font-bold text-primary text-base sm:text-lg mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                        <Crown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        <span className="break-words">Raciocínio Excepcional - Nível Genial</span>
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                        <span className="font-semibold">Seu perfil cognitivo está entre os 2% mais elevados da população.</span> Você possui uma capacidade extraordinária de processar informações complexas, identificar padrões sutis e encontrar soluções inovadoras que outros não conseguem perceber. Sua mente trabalha em múltiplas camadas simultaneamente, permitindo conexões entre conceitos aparentemente não relacionados.
                      </p>
                      <div className="bg-background/80 rounded-lg p-2 sm:p-3 space-y-1.5 sm:space-y-2">
                        <p className="text-[10px] sm:text-xs font-semibold text-primary mb-0.5 sm:mb-1">🧠 Características Neurocognitivas:</p>
                        <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                          <li>Processamento paralelo de informações em alta velocidade</li>
                          <li>Memória de trabalho excepcional (7-9 itens simultâneos)</li>
                          <li>Capacidade de abstração em níveis superiores</li>
                          <li>Flexibilidade cognitiva para mudar estratégias rapidamente</li>
                          <li>Metacognição avançada (pensar sobre o próprio pensamento)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-3 sm:p-4 border-l-4 border-accent">
                      <h4 className="font-bold text-accent text-sm sm:text-base mb-1.5 sm:mb-2">💼 Áreas de Destaque Profissional</h4>
                      <p className="text-[10px] sm:text-xs text-muted-foreground mb-1.5 sm:mb-2">Com seu perfil, você se destaca naturalmente em:</p>
                      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">🔬 Pesquisa Científica</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">💻 Engenharia de Software</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">📊 Análise de Dados</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">🎓 Academia/Ensino Superior</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">🏛️ Consultoria Estratégica</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">🧬 Medicina Especializada</div>
                      </div>
                    </div>
                  </>
                )}
                {result.iqScore >= 120 && result.iqScore < 130 && (
                  <>
                    <div className="bg-primary/10 rounded-lg p-3 sm:p-4 border-l-4 border-primary">
                      <h4 className="font-bold text-primary text-base sm:text-lg mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                        <Medal className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        <span className="break-words">Inteligência Superior - Nível de Excelência</span>
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                        <span className="font-semibold">Você está entre os 9% mais inteligentes da população.</span> Sua capacidade analítica e raciocínio lógico são avançados, permitindo que você resolva problemas complexos com eficiência notável. Você absorve novos conhecimentos rapidamente e consegue aplicá-los de forma prática e inovadora.
                      </p>
                      <div className="bg-background/80 rounded-lg p-2 sm:p-3 space-y-1.5 sm:space-y-2">
                        <p className="text-[10px] sm:text-xs font-semibold text-primary mb-0.5 sm:mb-1">🧠 Características Neurocognitivas:</p>
                        <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                          <li>Processamento sequencial eficiente de informações complexas</li>
                          <li>Memória de trabalho forte (5-7 itens simultâneos)</li>
                          <li>Boa capacidade de abstração e generalização</li>
                          <li>Raciocínio indutivo e dedutivo bem desenvolvidos</li>
                          <li>Capacidade de síntese e análise crítica</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-3 sm:p-4 border-l-4 border-accent">
                      <h4 className="font-bold text-accent text-sm sm:text-base mb-1.5 sm:mb-2">💼 Áreas de Destaque Profissional</h4>
                      <p className="text-[10px] sm:text-xs text-muted-foreground mb-1.5 sm:mb-2">Com seu perfil, você se destaca naturalmente em:</p>
                      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">💼 Gestão Executiva</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">⚖️ Direito</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">🏥 Medicina</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">📈 Análise Financeira</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">🎯 Marketing Estratégico</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">🔧 Engenharia</div>
                      </div>
                    </div>
                  </>
                )}
                {result.iqScore >= 110 && result.iqScore < 120 && (
                  <>
                    <div className="bg-primary/10 rounded-lg p-3 sm:p-4 border-l-4 border-primary">
                      <h4 className="font-bold text-primary text-base sm:text-lg mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        <span className="break-words">Acima da Média - Nível Competente</span>
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                        <span className="font-semibold">Você está acima de 75% da população em capacidade cognitiva.</span> Suas habilidades de pensamento crítico e capacidade de aprendizado são notáveis. Você consegue processar informações de forma eficiente e aplicar conhecimento de maneira prática, com excelente potencial para desenvolvimento contínuo.
                      </p>
                      <div className="bg-background/80 rounded-lg p-2 sm:p-3 space-y-1.5 sm:space-y-2">
                        <p className="text-[10px] sm:text-xs font-semibold text-primary mb-0.5 sm:mb-1">🧠 Características Neurocognitivas:</p>
                        <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                          <li>Processamento de informações de forma estruturada</li>
                          <li>Memória de trabalho adequada (4-6 itens simultâneos)</li>
                          <li>Boa capacidade de aprendizado e retenção</li>
                          <li>Pensamento crítico bem desenvolvido</li>
                          <li>Capacidade de adaptação a novos contextos</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-3 sm:p-4 border-l-4 border-accent">
                      <h4 className="font-bold text-accent text-sm sm:text-base mb-1.5 sm:mb-2">💼 Áreas de Destaque Profissional</h4>
                      <p className="text-[10px] sm:text-xs text-muted-foreground mb-1.5 sm:mb-2">Com seu perfil, você se destaca naturalmente em:</p>
                      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">👔 Administração</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">📚 Educação</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">🎨 Design</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">📝 Comunicação</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">🏪 Vendas</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">🔨 Técnicas Especializadas</div>
                      </div>
                    </div>
                  </>
                )}
                {result.iqScore >= 90 && result.iqScore < 110 && (
                  <>
                    <div className="bg-primary/10 rounded-lg p-3 sm:p-4 border-l-4 border-primary">
                      <h4 className="font-bold text-primary text-base sm:text-lg mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        <span className="break-words">Perfil Equilibrado - Nível Versátil</span>
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                        <span className="font-semibold">Você possui um perfil cognitivo equilibrado e versátil.</span> Suas habilidades cognitivas estão bem distribuídas entre diferentes tipos de inteligência, permitindo que você se adapte a diversos desafios. Esta versatilidade é uma grande vantagem em ambientes que exigem múltiplas competências.
                      </p>
                      <div className="bg-background/80 rounded-lg p-2 sm:p-3 space-y-1.5 sm:space-y-2">
                        <p className="text-[10px] sm:text-xs font-semibold text-primary mb-0.5 sm:mb-1">🧠 Características Neurocognitivas:</p>
                        <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                          <li>Processamento cognitivo equilibrado e estável</li>
                          <li>Memória de trabalho funcional (3-5 itens simultâneos)</li>
                          <li>Boa capacidade de aprendizado prático</li>
                          <li>Versatilidade em diferentes tipos de tarefas</li>
                          <li>Capacidade de trabalhar bem em equipe</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-3 sm:p-4 border-l-4 border-accent">
                      <h4 className="font-bold text-accent text-sm sm:text-base mb-1.5 sm:mb-2">💼 Áreas de Destaque Profissional</h4>
                      <p className="text-[10px] sm:text-xs text-muted-foreground mb-1.5 sm:mb-2">Com seu perfil, você se destaca naturalmente em:</p>
                      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">🤝 Relações Humanas</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">🎭 Artes e Entretenimento</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">🏋️ Esportes</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">🍳 Gastronomia</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">✂️ Artesanato</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">🌱 Empreendedorismo</div>
                      </div>
                    </div>
                  </>
                )}
                {result.iqScore < 90 && (
                  <>
                    <div className="bg-primary/10 rounded-lg p-3 sm:p-4 border-l-4 border-primary">
                      <h4 className="font-bold text-primary text-base sm:text-lg mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        <span className="break-words">Potencial Único - Nível em Desenvolvimento</span>
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                        <span className="font-semibold">Você possui características cognitivas únicas com grande potencial de desenvolvimento.</span> Com as estratégias certas e prática consistente, suas habilidades podem ser significativamente potencializadas. A neuroplasticidade do cérebro permite melhorias substanciais em qualquer idade.
                      </p>
                      <div className="bg-background/80 rounded-lg p-2 sm:p-3 space-y-1.5 sm:space-y-2">
                        <p className="text-[10px] sm:text-xs font-semibold text-primary mb-0.5 sm:mb-1">🧠 Características Neurocognitivas:</p>
                        <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                          <li>Processamento cognitivo com potencial de otimização</li>
                          <li>Memória de trabalho treinável (2-4 itens, pode aumentar)</li>
                          <li>Alta neuroplasticidade para aprendizado</li>
                          <li>Áreas específicas de força identificáveis</li>
                          <li>Grande potencial de crescimento com treino direcionado</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-3 sm:p-4 border-l-4 border-accent">
                      <h4 className="font-bold text-accent text-sm sm:text-base mb-1.5 sm:mb-2">💼 Áreas de Destaque Profissional</h4>
                      <p className="text-[10px] sm:text-xs text-muted-foreground mb-1.5 sm:mb-2">Com desenvolvimento direcionado, você pode se destacar em:</p>
                      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">🎨 Habilidades Manuais</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">🎵 Música</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">🏃 Atividades Físicas</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">🌿 Trabalhos Práticos</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">👥 Serviços</div>
                        <div className="bg-background/60 rounded p-1.5 sm:p-2 break-words">🔧 Técnicas Específicas</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              {/* Análise Detalhada por Domínio Cognitivo - Expandida - Otimizado Mobile */}
              <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 md:pt-5 border-t-2 border-primary/20">
                <div className="text-center mb-3 sm:mb-4">
                  <h4 className="font-bold text-base sm:text-lg mb-0.5 sm:mb-1">🧩 Análise Detalhada dos Domínios Cognitivos</h4>
                  <p className="text-[10px] sm:text-xs text-muted-foreground px-2">Avaliação baseada em neurociência cognitiva e psicometria</p>
                </div>
                
                <div className="grid gap-2 sm:gap-3">
                  {/* Raciocínio Lógico Expandido - Otimizado Mobile */}
                  <div className="bg-background rounded-lg p-3 sm:p-4 border-2 border-border/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <span className="font-bold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                        <span className="text-base sm:text-lg">💭</span> <span className="break-words">Raciocínio Lógico e Abstração</span>
                      </span>
                      <span className="text-[10px] sm:text-xs text-primary font-bold bg-primary/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
                        {result.iqScore >= 120 ? "Excepcional (95º+)" : result.iqScore >= 110 ? "Forte (75º-95º)" : result.iqScore >= 90 ? "Bom (50º-75º)" : "Em Desenvolvimento"}
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed mb-1.5 sm:mb-2">
                      {result.iqScore >= 120 ? "Sua capacidade de raciocínio lógico está no nível mais elevado. Você identifica padrões complexos, resolve problemas multi-etapas com facilidade e consegue trabalhar com conceitos abstratos de alta complexidade. Sua mente consegue processar relações causais, lógica condicional e estruturas hierárquicas simultaneamente." : 
                       result.iqScore >= 110 ? "Você possui raciocínio lógico bem desenvolvido, capaz de analisar problemas estruturados, identificar relações lógicas e aplicar princípios dedutivos e indutivos de forma eficiente. Consegue trabalhar com abstrações de nível intermediário." :
                       result.iqScore >= 90 ? "Seu raciocínio lógico é funcional para a maioria das situações do dia a dia. Você consegue identificar padrões básicos, seguir raciocínios sequenciais e resolver problemas lógicos de complexidade moderada." :
                       "Com prática direcionada em lógica, matemática e resolução de problemas, esta habilidade pode ser significativamente desenvolvida. A neuroplasticidade permite melhorias substanciais com treino consistente."}
                    </p>
                    <div className="text-[10px] sm:text-xs text-primary/80 font-semibold mt-1.5 sm:mt-2">
                      💡 Aplicação prática: {result.iqScore >= 120 ? "Excelente para programação, matemática avançada, engenharia e pesquisa científica." : result.iqScore >= 110 ? "Ideal para análise de dados, gestão estratégica e áreas técnicas." : "Útil para organização, planejamento e resolução de problemas cotidianos."}
                    </div>
                  </div>

                  {/* Memória Expandida - Otimizado Mobile */}
                  <div className="bg-background rounded-lg p-3 sm:p-4 border-2 border-border/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <span className="font-bold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                        <span className="text-base sm:text-lg">🎯</span> <span className="break-words">Memória de Trabalho e Concentração</span>
                      </span>
                      <span className="text-[10px] sm:text-xs text-primary font-bold bg-primary/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
                        {result.iqScore >= 120 ? "Excelente (90º+)" : result.iqScore >= 110 ? "Muito Boa (70º-90º)" : result.iqScore >= 90 ? "Adequada (50º-70º)" : "Treinável"}
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed mb-1.5 sm:mb-2">
                      {result.iqScore >= 120 ? "Sua memória de trabalho é excepcional, permitindo manter e manipular múltiplas informações simultaneamente (7-9 itens). Você consegue manter foco em tarefas complexas por longos períodos, filtrar distrações eficientemente e alternar entre diferentes tipos de informação sem perder contexto." :
                       result.iqScore >= 110 ? "Você possui memória de trabalho forte (5-7 itens), com boa capacidade de reter informações relevantes e manter concentração em tarefas complexas. Consegue gerenciar múltiplas informações simultaneamente com eficiência." :
                       result.iqScore >= 90 ? "Sua memória de trabalho é adequada para a maioria das atividades (3-5 itens). Você consegue manter foco em tarefas moderadas e reter informações necessárias para completar atividades do dia a dia." :
                       "Exercícios específicos de memória de trabalho (como n-back, dual n-back) podem fortalecer significativamente esta área. Técnicas de atenção plena (mindfulness) também melhoram a concentração."}
                    </p>
                    <div className="text-[10px] sm:text-xs text-primary/80 font-semibold mt-1.5 sm:mt-2">
                      💡 Aplicação prática: {result.iqScore >= 120 ? "Ideal para multitarefas complexas, aprendizado acelerado e ambientes com alta demanda cognitiva." : result.iqScore >= 110 ? "Excelente para gestão de projetos, aprendizado de novas habilidades e trabalhos que exigem atenção dividida." : "Adequada para tarefas sequenciais e aprendizado gradual."}
                    </div>
                  </div>

                  {/* Velocidade Expandida - Otimizado Mobile */}
                  <div className="bg-background rounded-lg p-3 sm:p-4 border-2 border-border/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <span className="font-bold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                        <span className="text-base sm:text-lg">⚡</span> <span className="break-words">Velocidade de Processamento Cognitivo</span>
                      </span>
                      <span className="text-[10px] sm:text-xs text-primary font-bold bg-primary/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
                        {result.iqScore >= 120 ? "Rápida (85º+)" : result.iqScore >= 110 ? "Boa (65º-85º)" : result.iqScore >= 90 ? "Moderada (45º-65º)" : "Desenvolvendo"}
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed mb-1.5 sm:mb-2">
                      {result.iqScore >= 120 ? "Você processa informações com velocidade notável, ideal para ambientes dinâmicos e de alta pressão. Sua capacidade de tomar decisões rápidas e precisas, processar estímulos visuais e auditivos rapidamente, e responder a mudanças de contexto é excepcional." :
                       result.iqScore >= 110 ? "Você possui bom tempo de resposta cognitivo, conseguindo processar informações e tomar decisões de forma eficiente na maioria das situações. Sua velocidade de processamento permite lidar bem com ambientes que exigem agilidade mental." :
                       result.iqScore >= 90 ? "Sua velocidade de processamento é adequada para a maioria das situações. Você consegue processar informações em tempo hábil, embora possa se beneficiar de otimizações com treino específico." :
                       "Prática com exercícios cronometrados, jogos de velocidade mental e treino de reação podem acelerar significativamente seu processamento cognitivo."}
                    </p>
                    <div className="text-[10px] sm:text-xs text-primary/80 font-semibold mt-1.5 sm:mt-2">
                      💡 Aplicação prática: {result.iqScore >= 120 ? "Excelente para trading, esportes de alta velocidade, emergências e ambientes competitivos." : result.iqScore >= 110 ? "Ideal para vendas, atendimento ao cliente e trabalhos que exigem respostas rápidas." : "Adequada para tarefas que permitem tempo de reflexão."}
                    </div>
                  </div>

                  {/* Criatividade Expandida - Otimizado Mobile */}
                  <div className="bg-background rounded-lg p-3 sm:p-4 border-2 border-border/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <span className="font-bold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                        <span className="text-base sm:text-lg">🎨</span> <span className="break-words">Pensamento Criativo e Inovação</span>
                      </span>
                      <span className="text-[10px] sm:text-xs text-primary font-bold bg-primary/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
                        {result.iqScore >= 120 ? "Inovador (80º+)" : result.iqScore >= 110 ? "Criativo (60º-80º)" : result.iqScore >= 90 ? "Funcional (40º-60º)" : "Potencial"}
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed mb-1.5 sm:mb-2">
                      {result.iqScore >= 120 ? "Você possui excelente capacidade de pensamento divergente, gerando múltiplas soluções inovadoras e conectando ideias aparentemente não relacionadas. Sua criatividade combina originalidade com aplicabilidade prática, permitindo inovação real em diversos contextos." :
                       result.iqScore >= 110 ? "Você demonstra boa capacidade criativa, conseguindo encontrar abordagens alternativas para problemas e pensar fora dos padrões convencionais. Consegue combinar conhecimentos de diferentes áreas para criar soluções únicas." :
                       result.iqScore >= 90 ? "Você consegue pensar de forma criativa quando necessário, adaptando soluções existentes e encontrando variações úteis. Com prática, pode desenvolver maior originalidade." :
                       "Técnicas de brainstorming, mind mapping, e exposição a diferentes perspectivas podem desbloquear significativamente seu potencial criativo. A criatividade é altamente treinável."}
                    </p>
                    <div className="text-[10px] sm:text-xs text-primary/80 font-semibold mt-1.5 sm:mt-2">
                      💡 Aplicação prática: {result.iqScore >= 120 ? "Ideal para design, inovação tecnológica, artes, marketing criativo e empreendedorismo disruptivo." : result.iqScore >= 110 ? "Excelente para marketing, design, desenvolvimento de produtos e soluções de negócios." : "Útil para melhorias incrementais e adaptações criativas."}
                    </div>
                  </div>

                  {/* Novos Domínios Adicionados - Otimizado Mobile */}
                  <div className="bg-background rounded-lg p-3 sm:p-4 border-2 border-border/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <span className="font-bold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                        <span className="text-base sm:text-lg">🧠</span> <span className="break-words">Inteligência Emocional e Social</span>
                      </span>
                      <span className="text-[10px] sm:text-xs text-primary font-bold bg-primary/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
                        {result.iqScore >= 120 ? "Desenvolvida" : result.iqScore >= 110 ? "Bem Desenvolvida" : result.iqScore >= 90 ? "Funcional" : "Em Desenvolvimento"}
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed mb-1.5 sm:mb-2">
                      {result.iqScore >= 120 ? "Sua alta capacidade cognitiva pode ser complementada com desenvolvimento de inteligência emocional. Pessoas com QI elevado frequentemente se beneficiam de treino em empatia, comunicação interpessoal e gestão emocional para maximizar seu potencial." :
                       result.iqScore >= 110 ? "Você possui boa base cognitiva para desenvolver inteligência emocional. Trabalhar em habilidades sociais, empatia e comunicação pode potencializar significativamente seus resultados profissionais e pessoais." :
                       result.iqScore >= 90 ? "Sua inteligência emocional pode ser uma grande força. Desenvolver habilidades de leitura emocional, comunicação eficaz e trabalho em equipe pode ser um diferencial importante." :
                       "A inteligência emocional é altamente treinável e pode ser um grande diferencial. Prática em comunicação, empatia e gestão de relacionamentos pode abrir muitas portas."}
                    </p>
                    <div className="text-[10px] sm:text-xs text-primary/80 font-semibold mt-1.5 sm:mt-2">
                      💡 Aplicação prática: Essencial para liderança, vendas, gestão de equipes, networking e relacionamentos pessoais.
                    </div>
                  </div>

                  <div className="bg-background rounded-lg p-3 sm:p-4 border-2 border-border/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <span className="font-bold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                        <span className="text-base sm:text-lg">📊</span> <span className="break-words">Capacidade de Aprendizado e Adaptação</span>
                      </span>
                      <span className="text-[10px] sm:text-xs text-primary font-bold bg-primary/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
                        {result.iqScore >= 120 ? "Excepcional" : result.iqScore >= 110 ? "Alta" : result.iqScore >= 90 ? "Boa" : "Desenvolvendo"}
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed mb-1.5 sm:mb-2">
                      {result.iqScore >= 120 ? "Você absorve novos conhecimentos com velocidade e profundidade excepcionais. Consegue aprender conceitos complexos rapidamente, identificar padrões de aprendizado e adaptar estratégias de forma eficiente. Sua metacognição permite otimizar seu próprio processo de aprendizado." :
                       result.iqScore >= 110 ? "Você possui alta capacidade de aprendizado, conseguindo assimilar novos conhecimentos rapidamente e aplicá-los de forma prática. Consegue adaptar-se a novos contextos e aprender com eficiência." :
                       result.iqScore >= 90 ? "Você possui boa capacidade de aprendizado. Com métodos adequados e prática consistente, pode desenvolver novas habilidades de forma eficaz. A neuroplasticidade permite melhorias contínuas." :
                       "O aprendizado é uma habilidade que pode ser desenvolvida. Técnicas de estudo eficazes, prática deliberada e exposição consistente a novos conhecimentos podem acelerar significativamente seu desenvolvimento."}
                    </p>
                    <div className="text-[10px] sm:text-xs text-primary/80 font-semibold mt-1.5 sm:mt-2">
                      💡 Aplicação prática: Fundamental para crescimento profissional contínuo, mudanças de carreira e desenvolvimento de novas competências.
                    </div>
                  </div>
                </div>
              </div>

              {/* Estatísticas Finais - Otimizado Mobile */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-2 sm:pt-3 border-t border-border">
                <div className="text-center p-2 sm:p-3 bg-primary/5 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-primary">{result.percentile}%</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">Acima desse percentil</div>
                </div>
                <div className="text-center p-2 sm:p-3 bg-primary/5 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-primary">TOP {100 - result.percentile}%</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">Das pessoas</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Dicas Personalizadas - Expandido com Valor Premium - Otimizado Mobile */}
        <Card className="p-4 sm:p-5 md:p-6 mb-4 sm:mb-6 shadow-elegant border-2 border-primary/20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="space-y-4 sm:space-y-5">
            {/* Header Premium - Otimizado Mobile */}
            <div className="text-center sm:text-left space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl md:text-2xl">💡 Dicas Personalizadas para Você</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Plano de Desenvolvimento Cognitivo Baseado em Neurociência</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-lg p-3 sm:p-4 border border-primary/20">
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-center sm:text-left">
                <span className="font-semibold text-primary">Baseado no seu perfil cognitivo único (QI {result.iqScore}),</span> desenvolvemos um plano de desenvolvimento personalizado fundamentado em pesquisas de neurociência cognitiva, psicologia do aprendizado e otimização de performance mental. Cada recomendação foi selecionada para maximizar seu potencial específico.
              </p>
            </div>
            
            {/* Dicas Expandidas com Valor Premium - Otimizado Mobile */}
            <div className="space-y-3 sm:space-y-4">
              {result.iqScore >= 120 && (
                <>
                  <div className="bg-primary/5 rounded-lg p-3 sm:p-4 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-sm sm:text-base mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <span className="text-base sm:text-lg">🧩</span> <span className="break-words">Desafios Mentais Avançados</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 leading-relaxed">
                      <span className="font-semibold text-primary">Para mentes excepcionais como a sua,</span> desafios complexos são essenciais para manter a neuroplasticidade e prevenir estagnação cognitiva. Estudos mostram que pessoas com QI elevado se beneficiam significativamente de atividades que exigem processamento multi-camadas e raciocínio abstrato.
                    </p>
                    <div className="bg-background/60 rounded-lg p-2 sm:p-3 mt-2 mb-2">
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">📊 Benefícios Científicos:</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li>Fortalece conexões neurais no córtex pré-frontal</li>
                        <li>Melhora memória de trabalho e capacidade de multitarefa</li>
                        <li>Previne declínio cognitivo relacionado à idade</li>
                        <li>Aumenta densidade de matéria cinzenta no cérebro</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">🎯 Recomendações Específicas:</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li><span className="font-semibold">Xadrez online:</span> Chess.com ou Lichess - nível intermediário/avançado (20-30 min/dia)</li>
                        <li><span className="font-semibold">Problemas IMO:</span> International Math Olympiad - desenvolve raciocínio matemático avançado</li>
                        <li><span className="font-semibold">Quebra-cabeças lógicos:</span> "Einstein's Riddle", puzzles de lógica complexos</li>
                        <li><span className="font-semibold">Programação competitiva:</span> LeetCode (hard), HackerRank, CodeForces - algoritmos avançados</li>
                        <li><span className="font-semibold">Go/Baduk:</span> Jogo estratégico mais complexo que xadrez (melhora pensamento abstrato)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 rounded-lg p-3 sm:p-4 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-sm sm:text-base mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <span className="text-base sm:text-lg">📖</span> <span className="break-words">Leituras Recomendadas e Expansão Intelectual</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 leading-relaxed">
                      <span className="font-semibold text-primary">Leitura profunda e desafiadora</span> é uma das formas mais eficazes de manter e expandir sua capacidade cognitiva. Pesquisas da neurociência mostram que leitura complexa ativa múltiplas redes neurais simultaneamente, fortalecendo conexões sinápticas.
                    </p>
                    <div className="bg-background/60 rounded-lg p-2 sm:p-3 mt-2 mb-2">
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">📊 Benefícios Científicos:</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li>Ativa córtex temporal e áreas de processamento linguístico</li>
                        <li>Melhora capacidade de abstração e pensamento crítico</li>
                        <li>Expande vocabulário e conhecimento contextual</li>
                        <li>Fortalece memória episódica e semântica</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">🎯 Livros Essenciais (Prioridade):</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li><span className="font-semibold">"Pensar Rápido e Devagar"</span> - Daniel Kahneman (Nobel) - Neurociência cognitiva e vieses</li>
                        <li><span className="font-semibold">"A Arte de Pensar Claramente"</span> - Rolf Dobelli - Vieses cognitivos e tomada de decisão</li>
                        <li><span className="font-semibold">"Gödel, Escher, Bach"</span> - Douglas Hofstadter - Lógica, matemática e criatividade</li>
                        <li><span className="font-semibold">"O Cisne Negro"</span> - Nassim Taleb - Pensamento probabilístico e incerteza</li>
                        <li><span className="font-semibold">"Sapiens"</span> - Yuval Harari - História e evolução humana</li>
                        <li><span className="font-semibold">Artigos científicos:</span> Nature, Science, PNAS - Mantenha-se atualizado</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-3 sm:p-4 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-sm sm:text-base mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <span className="text-base sm:text-lg">🎯</span> <span className="break-words">Desenvolvimento Contínuo e Neuroplasticidade</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 leading-relaxed">
                      <span className="font-semibold text-primary">Aprender novas habilidades complexas</span> cria novas conexões neurais e fortalece a neuroplasticidade. Estudos de neuroimagem mostram que aprender idiomas ou instrumentos musicais aumenta significativamente a densidade de matéria cinzenta em áreas relacionadas.
                    </p>
                    <div className="bg-background/60 rounded-lg p-2 sm:p-3 mt-2 mb-2">
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">📊 Benefícios Científicos:</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li>Aumenta neurogênese (criação de novos neurônios) no hipocampo</li>
                        <li>Fortalece corpo caloso (comunicação entre hemisférios cerebrais)</li>
                        <li>Melhora função executiva e controle inibitório</li>
                        <li>Retarda envelhecimento cognitivo em até 5-7 anos</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">🎯 Recomendações Específicas:</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li><span className="font-semibold">Terceiro idioma:</span> Mandarim, Alemão ou Russo (30 min/dia) - Duolingo, Babbel</li>
                        <li><span className="font-semibold">Instrumento musical:</span> Piano ou Violino (complexidade neural máxima)</li>
                        <li><span className="font-semibold">Filosofia avançada:</span> Kant, Nietzsche, Wittgenstein - pensamento abstrato profundo</li>
                        <li><span className="font-semibold">Debates intelectuais:</span> Participe de círculos de discussão, Toastmasters</li>
                        <li><span className="font-semibold">Meditação avançada:</span> Mindfulness e meditação transcendental - neuroplasticidade</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-3 sm:p-4 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-sm sm:text-base mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <span className="text-base sm:text-lg">🔬</span> <span className="break-words">Projetos Práticos e Aplicação Real</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 leading-relaxed">
                      <span className="font-semibold text-primary">Aplicar conhecimento em projetos reais</span> é fundamental para consolidar aprendizado e criar impacto. A prática deliberada em contextos complexos maximiza o desenvolvimento cognitivo e profissional.
                    </p>
                    <div className="bg-background/60 rounded-lg p-2 sm:p-3 mt-2 mb-2">
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">📊 Benefícios Científicos:</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li>Consolidação de memória através de prática deliberada</li>
                        <li>Desenvolvimento de expertise através de 10.000 horas de prática</li>
                        <li>Melhora metacognição (pensar sobre o próprio pensamento)</li>
                        <li>Fortalece senso de autoeficácia e confiança intelectual</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">🎯 Projetos Recomendados:</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li><span className="font-semibold">GitHub:</span> Projetos open-source complexos - contribua para projetos relevantes</li>
                        <li><span className="font-semibold">Escrita técnica:</span> Artigos acadêmicos, blogs técnicos, documentação</li>
                        <li><span className="font-semibold">Mentoria:</span> Ensine outros - "ensinar é aprender duas vezes"</li>
                        <li><span className="font-semibold">Hackatons:</span> Competições de programação e inovação</li>
                        <li><span className="font-semibold">Pesquisa:</span> Participe de estudos ou conduza pesquisas próprias</li>
                        <li><span className="font-semibold">Empreendedorismo:</span> Aplique conhecimento em startups ou projetos próprios</li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
              
              {result.iqScore >= 90 && result.iqScore < 120 && (
                <>
                  <div className="bg-primary/5 rounded-lg p-3 sm:p-4 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-sm sm:text-base mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <span className="text-base sm:text-lg">🎮</span> <span className="break-words">Jogos de Raciocínio e Treino Cognitivo</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 leading-relaxed">
                      <span className="font-semibold text-primary">Jogos estratégicos e puzzles</span> são uma forma eficaz e divertida de fortalecer múltiplas áreas cognitivas. Pesquisas mostram que jogos de raciocínio melhoram memória de trabalho, velocidade de processamento e flexibilidade cognitiva.
                    </p>
                    <div className="bg-background/60 rounded-lg p-2 sm:p-3 mt-2 mb-2">
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">📊 Benefícios Científicos:</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li>Melhora função executiva e planejamento estratégico</li>
                        <li>Fortalece memória de trabalho e atenção sustentada</li>
                        <li>Aumenta velocidade de processamento de informações</li>
                        <li>Desenvolve pensamento flexível e resolução de problemas</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">🎯 Recomendações Específicas:</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li><span className="font-semibold">Sudoku:</span> Comece médio, progrida para difícil/expert (15-20 min/dia)</li>
                        <li><span className="font-semibold">Palavras cruzadas:</span> Temáticas e avançadas - expande vocabulário</li>
                        <li><span className="font-semibold">Apps cognitivos:</span> Lumosity, Peak, Elevate (15 min/dia, consistência é chave)</li>
                        <li><span className="font-semibold">Xadrez:</span> Básico a intermediário - Chess.com, Lichess (20 min/dia)</li>
                        <li><span className="font-semibold">Quebra-cabeças:</span> 500-1000 peças - melhora atenção e paciência</li>
                        <li><span className="font-semibold">Jogos de memória:</span> Sequências, padrões, n-back training</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-3 sm:p-4 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-sm sm:text-base mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <span className="text-base sm:text-lg">📚</span> <span className="break-words">Hábitos de Leitura e Expansão de Conhecimento</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 leading-relaxed">
                      <span className="font-semibold text-primary">Leitura regular e diversificada</span> é uma das formas mais eficazes de expandir vocabulário, conhecimento geral e capacidade de pensamento crítico. Estudos mostram que leitores frequentes têm melhor função cognitiva ao longo da vida.
                    </p>
                    <div className="bg-background/60 rounded-lg p-2 sm:p-3 mt-2 mb-2">
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">📊 Benefícios Científicos:</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li>Expande vocabulário e conhecimento contextual</li>
                        <li>Melhora compreensão de leitura e análise crítica</li>
                        <li>Fortalece memória semântica e episódica</li>
                        <li>Reduz risco de declínio cognitivo em 32%</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">🎯 Recomendações Específicas:</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li><span className="font-semibold">Livros essenciais:</span> "O Poder do Hábito" (Duhigg), "Mindset" (Dweck), "Como Fazer Amigos" (Carnegie)</li>
                        <li><span className="font-semibold">Meta diária:</span> 20 páginas de não-ficção (cria hábito consistente)</li>
                        <li><span className="font-semibold">Diversificação:</span> Biografias, ciência popular, história, psicologia</li>
                        <li><span className="font-semibold">Audiobooks:</span> Durante exercícios ou deslocamento - maximiza tempo</li>
                        <li><span className="font-semibold">Artigos:</span> Medium, Harvard Business Review, The Atlantic</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-3 sm:p-4 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-sm sm:text-base mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <span className="text-base sm:text-lg">🧠</span> <span className="break-words">Exercícios Cognitivos e Técnicas Comprovadas</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 leading-relaxed">
                      <span className="font-semibold text-primary">Treino cognitivo direcionado</span> pode melhorar significativamente habilidades específicas. A neuroplasticidade permite que o cérebro se adapte e fortaleça áreas treinadas através de prática consistente.
                    </p>
                    <div className="bg-background/60 rounded-lg p-2 sm:p-3 mt-2 mb-2">
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">📊 Benefícios Científicos:</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li>Melhora atenção sustentada e controle inibitório</li>
                        <li>Fortalece memória de trabalho através de treino específico</li>
                        <li>Aumenta velocidade de processamento cognitivo</li>
                        <li>Desenvolve metacognição e auto-regulação</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">🎯 Técnicas e Ferramentas:</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li><span className="font-semibold">Apps cognitivos:</span> Lumosity, Peak, Elevate (15 min/dia, consistência)</li>
                        <li><span className="font-semibold">Cálculo mental:</span> Pratique no dia a dia - fortalece raciocínio numérico</li>
                        <li><span className="font-semibold">Técnica Pomodoro:</span> 25 min foco + 5 min pausa - melhora concentração</li>
                        <li><span className="font-semibold">Mnemônicos:</span> Técnicas de memorização (palácio da memória, método de loci)</li>
                        <li><span className="font-semibold">Problemas de lógica:</span> Semanalmente - desenvolve raciocínio estruturado</li>
                        <li><span className="font-semibold">Meditação:</span> 10 min/dia - melhora atenção e redução de estresse</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-3 sm:p-4 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-sm sm:text-base mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <span className="text-base sm:text-lg">🎓</span> <span className="break-words">Aprendizado Estruturado e Desenvolvimento de Habilidades</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 leading-relaxed">
                      <span className="font-semibold text-primary">Aprendizado estruturado e intencional</span> é fundamental para desenvolvimento cognitivo contínuo. Cursos e habilidades novas criam novas conexões neurais e expandem seu repertório intelectual.
                    </p>
                    <div className="bg-background/60 rounded-lg p-2 sm:p-3 mt-2 mb-2">
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">📊 Benefícios Científicos:</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li>Cria novas conexões sinápticas através de aprendizado</li>
                        <li>Fortalece neuroplasticidade e capacidade de adaptação</li>
                        <li>Melhora função executiva e planejamento</li>
                        <li>Aumenta senso de autoeficácia e confiança</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">🎯 Recomendações Específicas:</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li><span className="font-semibold">Cursos online:</span> Coursera, Udemy, edX - áreas de interesse (2-3h/semana)</li>
                        <li><span className="font-semibold">Novo idioma:</span> Duolingo, Babbel (10-15 min/dia) - neuroplasticidade máxima</li>
                        <li><span className="font-semibold">Estatística e dados:</span> Análise básica - aplicável em muitas áreas</li>
                        <li><span className="font-semibold">Escrita:</span> Criativa ou técnica - melhora comunicação e organização de ideias</li>
                        <li><span className="font-semibold">Habilidades práticas:</span> Programação básica, design, marketing digital</li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
              
              {result.iqScore < 90 && (
                <>
                  <div className="bg-primary/5 rounded-lg p-3 sm:p-4 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-sm sm:text-base mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <span className="text-base sm:text-lg">🌱</span> <span className="break-words">Comece Devagar e Consistente</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 leading-relaxed">
                      <span className="font-semibold text-primary">Construir uma base sólida</span> é fundamental. Pesquisas em neuroplasticidade mostram que mesmo pequenos exercícios diários podem criar mudanças significativas no cérebro ao longo do tempo. A chave é consistência, não intensidade.
                    </p>
                    <div className="bg-background/60 rounded-lg p-2 sm:p-3 mt-2 mb-2">
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">📊 Benefícios Científicos:</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li>Neuroplasticidade permite melhorias em qualquer idade</li>
                        <li>Pequenos passos criam hábitos duradouros</li>
                        <li>Progressão gradual previne frustração e abandono</li>
                        <li>Construção de base sólida facilita avanços futuros</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">🎯 Comece Aqui (Prioridade):</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li><span className="font-semibold">Jogos de memória simples:</span> 5-10 min/dia - comece fácil, aumente gradualmente</li>
                        <li><span className="font-semibold">Apps básicos:</span> Peak (modo iniciante), Lumosity Light - interface amigável</li>
                        <li><span className="font-semibold">Jogo da memória físico:</span> Cartas - tangível e divertido</li>
                        <li><span className="font-semibold">Sudoku fácil:</span> 2-3 por semana - progressão natural</li>
                        <li><span className="font-semibold">Palavras cruzadas simples:</span> Expande vocabulário gradualmente</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-3 sm:p-4 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-sm sm:text-base mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <span className="text-base sm:text-lg">💪</span> <span className="break-words">Consistência é a Chave do Sucesso</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 leading-relaxed">
                      <span className="font-semibold text-primary">A ciência é clara:</span> prática regular e consistente supera intensidade esporádica. Estudos mostram que 10 minutos diários de treino cognitivo são mais eficazes que 1 hora semanal. A neuroplasticidade responde melhor a estímulos frequentes e regulares.
                    </p>
                    <div className="bg-background/60 rounded-lg p-2 sm:p-3 mt-2 mb-2">
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">📊 Benefícios Científicos:</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li>Consistência cria mielinização (fortalece conexões neurais)</li>
                        <li>Hábitos diários se tornam automáticos após 21-66 dias</li>
                        <li>Progresso cumulativo é exponencial, não linear</li>
                        <li>Reduz ansiedade e aumenta senso de controle</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">🎯 Estratégias de Consistência:</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li><span className="font-semibold">Reserve 10 minutos TODOS os dias:</span> Sem exceções - crie rotina</li>
                        <li><span className="font-semibold">Use alarmes:</span> Mesmo horário diário - condicionamento clássico</li>
                        <li><span className="font-semibold">Anote progresso:</span> Diário ou semanal - motivação e accountability</li>
                        <li><span className="font-semibold">Celebre vitórias:</span> Pequenas conquistas liberam dopamina</li>
                        <li><span className="font-semibold">Compare apenas consigo:</span> Foque em seu próprio progresso</li>
                        <li><span className="font-semibold">Sistema de recompensas:</span> Premie-se após completar sequências</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-3 sm:p-4 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-sm sm:text-base mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <span className="text-base sm:text-lg">🎯</span> <span className="break-words">Foque em Uma Área por Vez</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 leading-relaxed">
                      <span className="font-semibold text-primary">Foco e especialização temporária</span> são mais eficazes que tentar melhorar tudo simultaneamente. Pesquisas em aprendizado mostram que concentração em uma habilidade por vez permite consolidação mais profunda e transferência de conhecimento.
                    </p>
                    <div className="bg-background/60 rounded-lg p-2 sm:p-3 mt-2 mb-2">
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">📊 Benefícios Científicos:</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li>Consolidação profunda de memória através de prática focada</li>
                        <li>Evita sobrecarga cognitiva e fadiga mental</li>
                        <li>Permite transferência de habilidades para outras áreas</li>
                        <li>Aumenta senso de competência e motivação</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">🎯 Plano de 3 Meses (Recomendado):</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li><span className="font-semibold">Mês 1 - MEMÓRIA:</span> Jogos de memorização, n-back básico, técnicas mnemônicas</li>
                        <li><span className="font-semibold">Mês 2 - ATENÇÃO:</span> Exercícios de concentração, meditação básica, foco sustentado</li>
                        <li><span className="font-semibold">Mês 3 - LÓGICA:</span> Puzzles simples, sudoku, raciocínio sequencial</li>
                        <li><span className="font-semibold">Regra de ouro:</span> Evite tentar melhorar tudo de uma vez</li>
                        <li><span className="font-semibold">Progressão:</span> Domine o básico antes de avançar para níveis intermediários</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-3 sm:p-4 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-sm sm:text-base mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <span className="text-base sm:text-lg">❤️</span> <span className="break-words">Cuide da Saúde do Cérebro</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 leading-relaxed">
                      <span className="font-semibold text-primary">Hábitos saudáveis são fundamentais</span> para otimizar desenvolvimento cognitivo. O cérebro é um órgão físico que requer nutrição adequada, sono reparador e atividade física. Estudos mostram que saúde física e cognitiva estão profundamente interligadas.
                    </p>
                    <div className="bg-background/60 rounded-lg p-2 sm:p-3 mt-2 mb-2">
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">📊 Benefícios Científicos:</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li>Sono adequado consolida memórias e remove toxinas cerebrais</li>
                        <li>Hidratação mantém função cognitiva ótima (desidratação reduz QI temporário)</li>
                        <li>Exercício físico aumenta BDNF (fator neurotrófico) - crescimento neural</li>
                        <li>Alimentação balanceada fornece nutrientes essenciais para função cerebral</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold text-primary mb-1">🎯 Hábitos Essenciais:</p>
                      <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 ml-3 sm:ml-4 list-disc">
                        <li><span className="font-semibold">Sono:</span> 7-8 horas por noite (essencial!) - consolidação de memória</li>
                        <li><span className="font-semibold">Hidratação:</span> 2L de água/dia - desidratação reduz função cognitiva em 10-15%</li>
                        <li><span className="font-semibold">Exercício:</span> 20 min caminhada/dia - aumenta BDNF e neurogênese</li>
                        <li><span className="font-semibold">Redução de telas:</span> 1h antes de dormir - melhora qualidade do sono</li>
                        <li><span className="font-semibold">Alimentação:</span> Frutas, vegetais, proteínas, ômega-3 - nutrição cerebral</li>
                        <li><span className="font-semibold">Gerenciamento de estresse:</span> Técnicas de relaxamento - cortisol prejudica cognição</li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Mensagem Final Premium - Otimizado Mobile */}
            <div className="bg-gradient-primary text-primary-foreground rounded-lg p-3 sm:p-4 mt-3 sm:mt-4 shadow-lg">
              <div className="text-center space-y-2">
                <p className="text-xs sm:text-sm font-medium leading-relaxed">
                  💪 <span className="font-bold">Lembre-se:</span> A inteligência não é fixa! Pesquisas em neuroplasticidade mostram que com dedicação consistente e as estratégias certas, você pode evoluir continuamente.
                </p>
                <p className="text-[10px] sm:text-xs opacity-90 italic">
                  Baseado em estudos de neurociência cognitiva, psicologia do aprendizado e otimização de performance mental
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Diagnóstico Completo - Expandido com Valor Premium - Otimizado Mobile */}
        <Card className="p-4 sm:p-5 md:p-6 mb-4 sm:mb-6 shadow-elegant border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="space-y-4 sm:space-y-5">
            {/* Header Premium - Otimizado Mobile */}
            <div className="text-center sm:text-left space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-lg">
                  <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl md:text-2xl">📊 Seu Diagnóstico Completo</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Análise Profissional Baseada em Psicometria e Neurociência</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-background/80 via-background/60 to-background/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-5 border border-border/50 space-y-4 sm:space-y-5">
              {/* Pontos Fortes - Expandido e Otimizado Mobile */}
              <div>
                <div className="text-center sm:text-left mb-3 sm:mb-4">
                  <h4 className="font-bold text-primary text-base sm:text-lg md:text-xl mb-1 flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-xl sm:text-2xl">⭐</span> <span>Seus Pontos Fortes Cognitivos</span>
                  </h4>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Análise detalhada das suas principais capacidades intelectuais</p>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {result.iqScore >= 130 && (
                    <>
                      <div className="bg-green-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">✓</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-green-700 dark:text-green-400 mb-1">Raciocínio Analítico Superior</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Você resolve problemas complexos com facilidade excepcional e identifica padrões sofisticados rapidamente. Sua capacidade de análise multi-variável e síntese de informações complexas está no nível mais elevado.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-green-700 dark:text-green-400 mb-1">🧠 Base Neurocientífica:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Córtex pré-frontal dorsolateral altamente desenvolvido, excelente conectividade entre áreas de processamento executivo. Capacidade de processamento paralelo de informações em múltiplas camadas simultaneamente.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">✓</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-green-700 dark:text-green-400 mb-1">Aprendizado Acelerado e Metacognição</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Capacidade notável de absorver e aplicar novos conhecimentos de forma extremamente eficiente. Você possui metacognição avançada, conseguindo otimizar seu próprio processo de aprendizado.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-green-700 dark:text-green-400 mb-1">🧠 Base Neurocientífica:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Hipocampo e córtex entorrinal altamente eficientes na consolidação de memórias. Sistema de recompensa dopaminérgico bem calibrado para aprendizado. Capacidade de transferência de conhecimento entre domínios.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">✓</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-green-700 dark:text-green-400 mb-1">Pensamento Estratégico e Visão Sistêmica</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Excelente em planejamento de longo prazo, análise de sistemas complexos e tomada de decisões estratégicas. Você consegue visualizar múltiplos cenários e suas consequências simultaneamente.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-green-700 dark:text-green-400 mb-1">🧠 Base Neurocientífica:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Córtex pré-frontal medial e córtex cingulado anterior bem desenvolvidos. Excelente integração entre memória episódica (experiências passadas) e memória semântica (conhecimento) para simulação de futuros.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">✓</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-green-700 dark:text-green-400 mb-1">Criatividade e Inovação Excepcionais</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Habilidade excepcional para gerar ideias originais, conectar conceitos aparentemente não relacionados e criar soluções não convencionais. Sua criatividade combina originalidade com aplicabilidade prática.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-green-700 dark:text-green-400 mb-1">🧠 Base Neurocientífica:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Rede de modo padrão (default mode network) e rede executiva central bem integradas. Alta conectividade entre córtex pré-frontal e áreas temporais/parietais, permitindo associações criativas.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">✓</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-green-700 dark:text-green-400 mb-1">Memória de Trabalho Expandida e Multitarefa</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Capacidade superior de manter e manipular múltiplas informações simultaneamente (7-9 itens). Você consegue alternar entre diferentes tipos de informação sem perder contexto ou precisão.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-green-700 dark:text-green-400 mb-1">🧠 Base Neurocientífica:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Córtex pré-frontal dorsolateral e córtex parietal posterior com alta capacidade de manutenção ativa de informações. Excelente controle executivo para gerenciar múltiplas representações mentais simultaneamente.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {result.iqScore >= 120 && result.iqScore < 130 && (
                    <>
                      <div className="bg-green-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">✓</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-green-700 dark:text-green-400 mb-1">Raciocínio Lógico Forte e Estruturado</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Excelente capacidade de análise sequencial e resolução de problemas complexos. Você aplica princípios lógicos dedutivos e indutivos de forma eficiente, identificando relações causais e estruturas hierárquicas.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-green-700 dark:text-green-400 mb-1">🧠 Base Neurocientífica:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Córtex pré-frontal lateral bem desenvolvido para processamento lógico. Boa integração entre áreas de linguagem e raciocínio espacial. Capacidade de manipulação simbólica e abstrata eficiente.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">✓</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-green-700 dark:text-green-400 mb-1">Compreensão Rápida e Aprendizado Eficiente</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Aprende novos conceitos com facilidade acima da média, conseguindo assimilar informações complexas rapidamente e aplicá-las de forma prática. Sua velocidade de processamento cognitivo é notável.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-green-700 dark:text-green-400 mb-1">🧠 Base Neurocientífica:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Sistema de memória de trabalho eficiente (5-7 itens). Boa conectividade entre córtex pré-frontal e áreas de processamento sensorial. Velocidade de transmissão sináptica otimizada.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">✓</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-green-700 dark:text-green-400 mb-1">Pensamento Crítico e Análise Objetiva</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Avalia informações de forma objetiva, identificando vieses, inconsistências e falácias lógicas. Toma decisões fundamentadas em evidências e análise racional, não apenas intuição.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-green-700 dark:text-green-400 mb-1">🧠 Base Neurocientífica:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Córtex pré-frontal ventromedial e córtex cingulado anterior ativos no monitoramento de conflitos e avaliação crítica. Sistema de detecção de erros bem calibrado.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">✓</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-green-700 dark:text-green-400 mb-1">Adaptabilidade Mental e Flexibilidade Cognitiva</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Facilidade em ajustar estratégias, mudar perspectivas e aprender com experiências. Você se adapta rapidamente a novos contextos e consegue aplicar conhecimento de um domínio em outro.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-green-700 dark:text-green-400 mb-1">🧠 Base Neurocientífica:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Córtex pré-frontal com alta flexibilidade neural. Boa capacidade de inibição de respostas prepotentes e mudança de set mental. Neuroplasticidade ativa permite adaptação rápida.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {result.iqScore >= 90 && result.iqScore < 120 && (
                    <>
                      <div className="bg-green-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">✓</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-green-700 dark:text-green-400 mb-1">Raciocínio Lógico Sólido e Estruturado</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Boa capacidade de resolver problemas cotidianos e pensar de forma estruturada. Você aplica lógica de forma consistente e consegue seguir raciocínios sequenciais com eficiência.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-green-700 dark:text-green-400 mb-1">🧠 Base Neurocientífica:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Córtex pré-frontal funcional para processamento lógico básico a intermediário. Boa capacidade de seguir regras e aplicar princípios de forma consistente.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">✓</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-green-700 dark:text-green-400 mb-1">Versatilidade Cognitiva e Adaptação</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Capacidade de se adaptar a diferentes tipos de desafios e situações. Sua versatilidade permite que você se destaque em ambientes que exigem múltiplas competências.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-green-700 dark:text-green-400 mb-1">🧠 Base Neurocientífica:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Perfil cognitivo equilibrado entre diferentes tipos de inteligência. Boa capacidade de transferência de habilidades entre contextos diferentes.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">✓</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-green-700 dark:text-green-400 mb-1">Aprendizado Consistente e Persistente</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Com dedicação e métodos adequados, você consegue dominar novas habilidades efetivamente. Sua capacidade de aprendizado é sólida e pode ser potencializada com prática consistente.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-green-700 dark:text-green-400 mb-1">🧠 Base Neurocientífica:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Neuroplasticidade ativa permite desenvolvimento contínuo. Com prática deliberada e consistente, novas conexões neurais são formadas e fortalecidas.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">✓</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-green-700 dark:text-green-400 mb-1">Senso Prático e Aplicação Real</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Habilidade em aplicar conhecimentos de forma pragmática no dia a dia. Você conecta teoria e prática de forma eficiente, criando soluções viáveis e funcionais.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-green-700 dark:text-green-400 mb-1">🧠 Base Neurocientífica:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Boa integração entre conhecimento declarativo (saber o quê) e conhecimento procedural (saber como). Capacidade de transferência de aprendizado para contextos práticos.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {result.iqScore < 90 && (
                    <>
                      <div className="bg-green-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">✓</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-green-700 dark:text-green-400 mb-1">Potencial de Crescimento e Neuroplasticidade</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Grande margem para desenvolvimento com as técnicas certas. Pesquisas em neuroplasticidade mostram que o cérebro pode criar novas conexões e fortalecer áreas existentes em qualquer idade.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-green-700 dark:text-green-400 mb-1">🧠 Base Neurocientífica:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Neuroplasticidade permite criação de novas sinapses e fortalecimento de conexões existentes. Com treino direcionado e consistente, melhorias significativas são possíveis.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">✓</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-green-700 dark:text-green-400 mb-1">Persistência e Determinação</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              A determinação pode superar qualquer limitação inicial e levar longe. Estudos mostram que persistência e esforço consistente são frequentemente mais importantes que talento inicial.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-green-700 dark:text-green-400 mb-1">🧠 Base Neurocientífica:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Sistema de recompensa dopaminérgico responde bem a conquistas graduais. Persistência cria hábitos neurais duradouros e fortalece circuitos de motivação.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">✓</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-green-700 dark:text-green-400 mb-1">Neuroplasticidade e Capacidade de Mudança</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Seu cérebro pode criar novas conexões com treino adequado e consistente. A neuroplasticidade permite melhorias substanciais em qualquer idade, desde que haja prática direcionada.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-green-700 dark:text-green-400 mb-1">🧠 Base Neurocientífica:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Cérebro mantém capacidade de neurogênese (criação de novos neurônios) e sinaptogênese (novas conexões) ao longo da vida. Prática deliberada ativa esses processos.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Áreas de Desenvolvimento - Expandido e Otimizado Mobile */}
              <div>
                <div className="text-center sm:text-left mb-3 sm:mb-4">
                  <h4 className="font-bold text-primary text-base sm:text-lg md:text-xl mb-1 flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-xl sm:text-2xl">🎯</span> <span>Áreas de Desenvolvimento e Potencialização</span>
                  </h4>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Oportunidades de crescimento e otimização cognitiva</p>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {result.iqScore >= 120 && (
                    <>
                      <div className="bg-blue-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">→</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-blue-700 dark:text-blue-400 mb-1">Inteligência Emocional e Habilidades Sociais</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Balanceie seu QI alto com desenvolvimento de empatia, habilidades sociais e gestão emocional. Pesquisas mostram que pessoas com QI elevado frequentemente se beneficiam significativamente de desenvolvimento de inteligência emocional para maximizar sucesso profissional e pessoal.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">💡 Por que desenvolver:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Inteligência emocional é um preditor de sucesso profissional tão importante quanto QI. Melhora liderança, trabalho em equipe, negociação e relacionamentos interpessoais. Pessoas com QI alto + alta IE têm performance excepcional.
                              </p>
                            </div>
                            <div className="mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">🎯 Como desenvolver:</p>
                              <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 ml-3 sm:ml-4 list-disc">
                                <li>Pratique leitura de expressões faciais e linguagem corporal</li>
                                <li>Desenvolva empatia através de conversas profundas e escuta ativa</li>
                                <li>Participe de grupos de discussão e debates</li>
                                <li>Leia sobre psicologia social e comunicação interpessoal</li>
                                <li>Pratique mindfulness e autoconhecimento emocional</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">→</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-blue-700 dark:text-blue-400 mb-1">Comunicação Simplificada e Acessível</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Pratique explicar conceitos complexos de forma acessível para diferentes públicos. A capacidade de traduzir conhecimento técnico para linguagem simples é uma habilidade valiosa que amplifica seu impacto.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">💡 Por que desenvolver:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Comunicação eficaz é essencial para liderança, ensino, vendas e influência. Pessoas que conseguem simplificar o complexo são altamente valorizadas em qualquer área profissional.
                              </p>
                            </div>
                            <div className="mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">🎯 Como desenvolver:</p>
                              <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 ml-3 sm:ml-4 list-disc">
                                <li>Pratique explicar conceitos técnicos para leigos</li>
                                <li>Use analogias e metáforas para simplificar ideias complexas</li>
                                <li>Participe de grupos de ensino ou mentoria</li>
                                <li>Escreva artigos ou posts explicando temas complexos</li>
                                <li>Pratique apresentações para públicos diversos</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">→</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-blue-700 dark:text-blue-400 mb-1">Paciência e Tolerância Cognitiva</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Nem todos processam informações na mesma velocidade - desenvolva paciência e tolerância. Entender que diferentes pessoas têm diferentes ritmos cognitivos melhora sua capacidade de liderança e trabalho em equipe.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">💡 Por que desenvolver:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Paciência reduz estresse, melhora relacionamentos e permite que você extraia o melhor de cada pessoa. Líderes pacientes são mais eficazes e respeitados.
                              </p>
                            </div>
                            <div className="mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">🎯 Como desenvolver:</p>
                              <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 ml-3 sm:ml-4 list-disc">
                                <li>Pratique meditação e mindfulness para aumentar paciência</li>
                                <li>Reconheça que diferentes pessoas têm diferentes pontos fortes</li>
                                <li>Desenvolva empatia para entender perspectivas diferentes</li>
                                <li>Pratique escuta ativa sem interromper</li>
                                <li>Celebre pequenos progressos de outros, não apenas grandes conquistas</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {result.iqScore >= 90 && result.iqScore < 120 && (
                    <>
                      <div className="bg-blue-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">→</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-blue-700 dark:text-blue-400 mb-1">Velocidade de Processamento Cognitivo</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Pratique exercícios cronometrados para aumentar sua agilidade mental. Velocidade de processamento pode ser significativamente melhorada com treino específico e consistente.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">💡 Por que desenvolver:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Velocidade de processamento é crucial em ambientes dinâmicos, tomada de decisões rápidas e eficiência geral. Melhora performance em vendas, atendimento e trabalhos que exigem respostas rápidas.
                              </p>
                            </div>
                            <div className="mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">🎯 Como desenvolver:</p>
                              <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 ml-3 sm:ml-4 list-disc">
                                <li>Exercícios cronometrados: problemas de lógica com tempo</li>
                                <li>Jogos de velocidade mental e reação</li>
                                <li>Treino de cálculo mental rápido</li>
                                <li>Leitura rápida com compreensão</li>
                                <li>Prática de tomada de decisões rápidas em contextos seguros</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">→</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-blue-700 dark:text-blue-400 mb-1">Memória de Trabalho e Retenção</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Técnicas de memorização e treino específico podem ampliar significativamente sua capacidade de retenção e manipulação de informações simultâneas.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">💡 Por que desenvolver:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Memória de trabalho forte melhora aprendizado, multitarefa, resolução de problemas complexos e performance geral em qualquer área profissional.
                              </p>
                            </div>
                            <div className="mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">🎯 Como desenvolver:</p>
                              <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 ml-3 sm:ml-4 list-disc">
                                <li>Treino n-back e dual n-back (apps especializados)</li>
                                <li>Técnicas mnemônicas: palácio da memória, método de loci</li>
                                <li>Jogos de memória progressivos</li>
                                <li>Prática de manter múltiplas informações ativas simultaneamente</li>
                                <li>Exercícios de span de memória (sequências crescentes)</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">→</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-blue-700 dark:text-blue-400 mb-1">Raciocínio Abstrato e Pensamento Conceitual</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Exercícios específicos podem fortalecer sua capacidade de pensar abstratamente, trabalhar com conceitos complexos e fazer generalizações sofisticadas.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">💡 Por que desenvolver:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Raciocínio abstrato é essencial para matemática avançada, programação, filosofia, ciência e áreas que exigem pensamento conceitual profundo.
                              </p>
                            </div>
                            <div className="mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">🎯 Como desenvolver:</p>
                              <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 ml-3 sm:ml-4 list-disc">
                                <li>Problemas de matemática abstrata e álgebra</li>
                                <li>Estudo de filosofia e lógica formal</li>
                                <li>Programação e algoritmos (pensamento abstrato aplicado)</li>
                                <li>Padrões e sequências complexas</li>
                                <li>Analogias e metáforas conceituais</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">→</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-blue-700 dark:text-blue-400 mb-1">Concentração Prolongada e Foco Sustentado</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Técnica Pomodoro, meditação e treino de atenção podem aumentar significativamente seu foco em tarefas longas e complexas, melhorando produtividade e qualidade do trabalho.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">💡 Por que desenvolver:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Foco sustentado é essencial para trabalhos profundos, aprendizado eficiente e alta performance. Permite entrar em "flow state" e produzir trabalho de qualidade superior.
                              </p>
                            </div>
                            <div className="mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">🎯 Como desenvolver:</p>
                              <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 ml-3 sm:ml-4 list-disc">
                                <li>Técnica Pomodoro: 25 min foco + 5 min pausa (aumente gradualmente)</li>
                                <li>Meditação mindfulness: 10-20 min/dia</li>
                                <li>Elimine distrações: ambiente dedicado, notificações desativadas</li>
                                <li>Treino de atenção: exercícios de foco sustentado</li>
                                <li>Prática de "deep work": sessões de trabalho profundo</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {result.iqScore < 90 && (
                    <>
                      <div className="bg-blue-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">→</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-blue-700 dark:text-blue-400 mb-1">Atenção e Foco Básico</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Comece com exercícios curtos de 5 minutos e vá aumentando gradualmente. Atenção é uma habilidade fundamental que pode ser significativamente desenvolvida com prática consistente.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">💡 Por que desenvolver:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Atenção é a base para todas as outras habilidades cognitivas. Sem atenção adequada, aprendizado e memória são comprometidos. É altamente treinável.
                              </p>
                            </div>
                            <div className="mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">🎯 Como desenvolver:</p>
                              <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 ml-3 sm:ml-4 list-disc">
                                <li>Comece com 5 min de foco, aumente 1 min por semana</li>
                                <li>Elimine distrações: ambiente silencioso, sem celular</li>
                                <li>Exercícios de atenção: seguir objeto, contar respirações</li>
                                <li>Apps de foco: Forest, Focus Keeper</li>
                                <li>Meditação básica: 5-10 min/dia</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">→</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-blue-700 dark:text-blue-400 mb-1">Memória Básica e Retenção</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Jogos simples de memorização podem fortalecer esta habilidade fundamental. Memória é altamente treinável e melhorias são possíveis em qualquer idade.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">💡 Por que desenvolver:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Memória forte melhora aprendizado, trabalho, relacionamentos e qualidade de vida geral. É uma das habilidades mais importantes e treináveis.
                              </p>
                            </div>
                            <div className="mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">🎯 Como desenvolver:</p>
                              <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 ml-3 sm:ml-4 list-disc">
                                <li>Jogo da memória com cartas (comece com poucas, aumente)</li>
                                <li>Memorize listas: compras, nomes, números</li>
                                <li>Repita informações importantes em voz alta</li>
                                <li>Use associações e visualizações</li>
                                <li>Apps básicos: Peak, Lumosity Light (modo iniciante)</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">→</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-blue-700 dark:text-blue-400 mb-1">Raciocínio Lógico Básico e Estruturado</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Puzzles simples e quebra-cabeças iniciais são um ótimo ponto de partida. Raciocínio lógico pode ser desenvolvido através de prática progressiva e consistente.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">💡 Por que desenvolver:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Raciocínio lógico melhora resolução de problemas, tomada de decisões e pensamento crítico. É aplicável em todas as áreas da vida.
                              </p>
                            </div>
                            <div className="mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">🎯 Como desenvolver:</p>
                              <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 ml-3 sm:ml-4 list-disc">
                                <li>Puzzles simples: comece fácil, progrida gradualmente</li>
                                <li>Sudoku nível fácil a médio</li>
                                <li>Quebra-cabeças de lógica básicos</li>
                                <li>Problemas de matemática simples</li>
                                <li>Jogos de estratégia básicos</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-500/10 rounded-lg p-3 sm:p-4 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">→</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm sm:text-base text-blue-700 dark:text-blue-400 mb-1">Hábitos Saudáveis e Otimização Cerebral</p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                              Sono adequado, hidratação e exercício físico são a base fundamental para o cérebro funcionar bem. Estes hábitos são pré-requisitos para qualquer desenvolvimento cognitivo.
                            </p>
                            <div className="bg-background/60 rounded p-2 mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">💡 Por que desenvolver:</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">
                                Saúde física e cognitiva estão profundamente interligadas. Sem hábitos saudáveis básicos, desenvolvimento cognitivo é limitado. Estes são fundamentos não negociáveis.
                              </p>
                            </div>
                            <div className="mt-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">🎯 Como desenvolver:</p>
                              <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 ml-3 sm:ml-4 list-disc">
                                <li>Sono: 7-8h por noite, horário consistente</li>
                                <li>Hidratação: 2L água/dia (desidratação reduz cognição)</li>
                                <li>Exercício: 20-30 min caminhada/dia (aumenta BDNF)</li>
                                <li>Alimentação: balanceada, rica em ômega-3</li>
                                <li>Reduza estresse: técnicas de relaxamento</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Recomendações de Carreira - Expandido e Otimizado Mobile */}
              <div>
                <div className="text-center sm:text-left mb-3 sm:mb-4">
                  <h4 className="font-bold text-primary text-base sm:text-lg md:text-xl mb-1 flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-xl sm:text-2xl">💼</span> <span>Áreas Profissionais Ideais e Oportunidades</span>
                  </h4>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Recomendações baseadas em seu perfil cognitivo único</p>
                </div>
                <div className="bg-gradient-to-br from-muted/50 via-muted/30 to-muted/50 rounded-lg p-3 sm:p-4 border border-primary/10">
                  <p className="text-xs sm:text-sm mb-3 leading-relaxed">
                    <span className="font-semibold text-primary">Baseado no seu perfil cognitivo (QI {result.iqScore}),</span> estas áreas profissionais podem ser especialmente adequadas para maximizar seu potencial e satisfação profissional. Cada área foi selecionada considerando suas principais capacidades cognitivas.
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {result.iqScore >= 130 && (
                      <>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">🔬 Pesquisa Científica</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">⚙️ Engenharia Avançada</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">💻 Arquitetura de Software</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">📐 Matemática Aplicada</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">🎯 Estratégia Corporativa</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">🚀 Inovação e P&D</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">🧬 Medicina Especializada</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">🎓 Academia</span>
                      </>
                    )}
                    {result.iqScore >= 120 && result.iqScore < 130 && (
                      <>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">💻 Tecnologia da Informação</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">📊 Análise de Dados</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">🏥 Medicina</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">⚖️ Direito</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">💼 Consultoria</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">📋 Gestão de Projetos</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">📈 Análise Financeira</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">🔧 Engenharia</span>
                      </>
                    )}
                    {result.iqScore >= 90 && result.iqScore < 120 && (
                      <>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">👔 Gestão e Administração</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">📢 Marketing</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">💰 Vendas</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">🤝 Recursos Humanos</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">🎨 Design</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">📝 Comunicação</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">📚 Educação</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">🏪 Empreendedorismo</span>
                      </>
                    )}
                    {result.iqScore < 90 && (
                      <>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">📞 Atendimento ao Cliente</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">🔨 Trabalho Manual Especializado</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">🎨 Artes e Artesanato</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">🛠️ Serviços Gerais</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">📦 Logística</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">🍳 Gastronomia</span>
                        <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-[10px] sm:text-xs font-medium break-words">🏋️ Esportes</span>
                      </>
                    )}
                  </div>
                  <div className="mt-3 sm:mt-4 pt-3 border-t border-primary/20">
                    <p className="text-[10px] sm:text-xs text-muted-foreground italic leading-relaxed">
                      💡 <span className="font-semibold">Nota:</span> Estas são recomendações baseadas em seu perfil cognitivo. Lembre-se que paixão, interesse pessoal e dedicação são igualmente importantes para o sucesso profissional. Considere estas áreas como pontos de partida para exploração.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mensagem Final Premium - Otimizado Mobile */}
              <div className="bg-gradient-primary text-primary-foreground rounded-lg p-3 sm:p-4 mt-3 sm:mt-4 shadow-lg">
                <div className="text-center space-y-2">
                  <p className="text-xs sm:text-sm font-medium leading-relaxed">
                    🚀 <span className="font-bold">Seu potencial é enorme!</span> Com dedicação consistente e as estratégias certas, você pode evoluir ainda mais suas capacidades cognitivas e alcançar grandes realizações.
                  </p>
                  <p className="text-[10px] sm:text-xs opacity-90 italic">
                    Este diagnóstico foi elaborado com base em psicometria moderna, neurociência cognitiva e análise de perfis de alta performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Seção de Compartilhamento Final - CTA Premium Otimizado */}
        <Card className="p-4 sm:p-6 md:p-8 mb-6 shadow-elegant border-2 border-primary bg-gradient-primary text-primary-foreground animate-fade-in relative overflow-hidden" style={{ animationDelay: '0.7s' }}>
          {/* Elementos decorativos animados */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="text-center relative z-10">
            {/* Badge de Status Premium */}
            {result.iqScore >= 130 && (
              <div className="inline-flex items-center gap-2 bg-yellow-500/30 border-2 border-yellow-400/50 rounded-full px-4 py-2 mb-4 animate-pulse">
                <Crown className="w-5 h-5 text-yellow-300" />
                <span className="text-xs sm:text-sm font-bold">GÊNIO - TOP 2%</span>
              </div>
            )}
            {result.iqScore >= 120 && result.iqScore < 130 && (
              <div className="inline-flex items-center gap-2 bg-purple-500/30 border-2 border-purple-400/50 rounded-full px-4 py-2 mb-4">
                <Medal className="w-5 h-5 text-purple-300" />
                <span className="text-xs sm:text-sm font-bold">EXCELENTE - TOP 9%</span>
              </div>
            )}
            
            <Zap className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 animate-pulse" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
              {result.iqScore >= 130 ? "🔥 VOCÊ É EXCEPCIONAL!" :
               result.iqScore >= 120 ? "🚀 MOSTRE SUA CONQUISTA!" :
               result.iqScore >= 110 ? "💪 DESAFIE SEUS AMIGOS!" :
               "🎯 COMPARTILHE E COMPETE!"}
            </h2>
            <p className="text-sm sm:text-base md:text-lg opacity-95 mb-2 font-semibold">
              Você está no <span className="font-bold text-lg sm:text-xl md:text-2xl bg-white/20 px-2 py-1 rounded">TOP {100 - result.percentile}%</span> das pessoas mais inteligentes!
            </p>
            <p className="text-xs sm:text-sm md:text-base opacity-90 mb-2">
              {result.iqScore >= 130 ? "Apenas 2 em cada 100 pessoas alcançam este nível. Você merece reconhecimento! 👑" :
               result.iqScore >= 120 ? "Você está entre os 9% mais inteligentes. Será que seus amigos conseguem te superar? 🏆" :
               result.iqScore >= 110 ? "Você está acima da média! Mostre sua conquista e desafie seus amigos! 💪" :
               "Desafie seus amigos e vejam quem tem o QI mais alto! 🎯"}
            </p>
            
            {/* Prova Social Premium */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 mb-4 border border-white/20">
              <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold">{shareCount}+</p>
                  <p className="text-[10px] sm:text-xs opacity-80">Compartilharam hoje</p>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold">{totalUsers > 0 ? totalUsers.toLocaleString() : '50'}+</p>
                  <p className="text-[10px] sm:text-xs opacity-80">Fizeram o teste</p>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold">#{rankPosition > 0 ? rankPosition.toLocaleString() : '...'}</p>
                  <p className="text-[10px] sm:text-xs opacity-80">Sua posição</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-foreground/10 rounded-lg p-4 sm:p-5 md:p-6 mb-3 sm:mb-4 backdrop-blur-sm border-2 border-primary-foreground/20">
              <div className="text-primary-foreground">
                <Trophy className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2" />
                <p className="text-xs sm:text-sm mb-1 opacity-90">Meu QI</p>
                <p className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1">{result.iqScore}</p>
                <p className="text-base sm:text-lg font-semibold">Top {100 - result.percentile}%</p>
                <p className="text-xs sm:text-sm opacity-75 mt-2">🧠 {getIQDescription(result.iqScore)}</p>
              </div>
            </div>

            {/* Estatísticas do Desafio - Otimizado para Mobile */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="bg-primary-foreground/10 rounded-lg p-2 sm:p-3 backdrop-blur-sm">
                <div className="text-lg sm:text-xl md:text-2xl font-bold">{result.score}</div>
                <div className="text-[10px] sm:text-xs opacity-80 leading-tight">Questões Certas</div>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-2 sm:p-3 backdrop-blur-sm">
                <div className="text-lg sm:text-xl md:text-2xl font-bold">{Math.round(result.percentile)}%</div>
                <div className="text-[10px] sm:text-xs opacity-80 leading-tight">Percentil</div>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-2 sm:p-3 backdrop-blur-sm">
                <div className="text-lg sm:text-xl md:text-2xl font-bold">#{rankPosition.toLocaleString()}</div>
                <div className="text-[10px] sm:text-xs opacity-80 leading-tight">No Ranking</div>
              </div>
            </div>

            {/* CTA Principal Premium */}
            <div className="space-y-3 sm:space-y-4">
              <Button
                onClick={shareOnWhatsApp}
                size="lg"
                variant="secondary"
                className="w-full text-sm sm:text-base md:text-lg shadow-2xl font-bold bg-white text-primary hover:bg-white/95 py-4 sm:py-5 relative overflow-hidden group transform transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <Share2 className="w-5 h-5 sm:w-6 sm:h-6 mr-2 relative z-10 animate-pulse" />
                <span className="relative z-10 font-extrabold">
                  {result.iqScore >= 130 ? "👑 COMPARTILHAR MINHA CONQUISTA EXCEPCIONAL" :
                   result.iqScore >= 120 ? "🏆 COMPARTILHAR E DESAFIAR AMIGOS" :
                   result.iqScore >= 110 ? "💪 COMPARTILHAR E COMPETIR" :
                   "📱 COMPARTILHAR E DESCOBRIR"}
                </span>
                <span className="ml-2 relative z-10 text-xl">
                  {result.iqScore >= 130 ? "👑" : result.iqScore >= 120 ? "🏆" : "🚀"}
                </span>
              </Button>
              
              {/* Preview da Mensagem - Premium */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border-2 border-white/30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm">💬</span>
                  </div>
                  <p className="text-xs sm:text-sm opacity-95 font-bold">
                    Preview da mensagem:
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <p className="text-[10px] sm:text-xs opacity-90 leading-relaxed break-words text-left">
                    {result.iqScore >= 130 ? 
                      `🧠 RESULTADO EXCEPCIONAL! 🧠\n\nMeu QI é ${result.iqScore} - Estou entre os ${100 - result.percentile}% mais inteligentes do Brasil! 🏆\n\nPosição #${rankPosition > 0 ? rankPosition.toLocaleString() : '...'} no ranking nacional\n\n💪 Você tem coragem de me desafiar?` :
                     result.iqScore >= 120 ?
                      `🧠 Resultado Impressionante! 🧠\n\nDescobri que meu QI é ${result.iqScore}! Estou no TOP ${100 - result.percentile}% das pessoas mais inteligentes! 🚀\n\nAcha que consegue me superar?` :
                     result.iqScore >= 110 ?
                      `🧠 Acabei de descobrir meu QI: ${result.iqScore}! 🧠\n\nEstou no TOP ${100 - result.percentile}%! 🎯\n\nSerá que você consegue me superar?` :
                      `🧠 Descobri meu QI: ${result.iqScore}! 🧠\n\nEstou no TOP ${100 - result.percentile}%! 🎯\n\nQuer descobrir o seu?`}
                  </p>
                </div>
              </div>

              {/* Benefícios de Compartilhar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center border border-white/20">
                  <p className="text-lg sm:text-xl mb-1">🏆</p>
                  <p className="text-[10px] sm:text-xs opacity-90 font-semibold">Desafie Amigos</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center border border-white/20">
                  <p className="text-lg sm:text-xl mb-1">📊</p>
                  <p className="text-[10px] sm:text-xs opacity-90 font-semibold">Veja o Ranking</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center border border-white/20">
                  <p className="text-lg sm:text-xl mb-1">🎯</p>
                  <p className="text-[10px] sm:text-xs opacity-90 font-semibold">Compare Resultados</p>
                </div>
              </div>

              {/* Mensagem Final Motivacional */}
              <div className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-lg p-3 sm:p-4 border border-white/20">
                <p className="text-xs sm:text-sm opacity-95 font-semibold text-center leading-relaxed">
                  {result.iqScore >= 130 ? 
                    "✨ Você alcançou um nível excepcional! Compartilhe e inspire outros a descobrirem seu potencial!" :
                   result.iqScore >= 120 ?
                    "🌟 Seu resultado é impressionante! Mostre ao mundo e desafie seus amigos a te superarem!" :
                   result.iqScore >= 110 ?
                    "💪 Você está acima da média! Compartilhe sua conquista e motive seus amigos!" :
                    "🎯 Todo mundo adora uma boa competição! Compartilhe e veja quem tem o QI mais alto!"}
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center space-y-4">
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
