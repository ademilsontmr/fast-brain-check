import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Share2, Trophy, TrendingUp, Award, Zap, Sparkles, Clock, Users, Download, Medal, Crown, Loader2, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getRank, getResultByToken, ResultData } from "@/services/api";
import { useSEO } from "@/hooks/use-seo";

// Função para gerar um número fixo baseado em uma string (token)
const generateFixedShareCount = (seed: string): number => {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash % 200) + 50; // Gera número entre 50 e 250
};

const CompleteResult = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  useSEO({
    title: "Resultado Completo do Teste de QI",
    description: "Seu resultado completo do teste de QI com análise detalhada.",
    noIndex: true,
  });

  const [resultData, setResultData] = useState<ResultData | null>(null);
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const [shareCount, setShareCount] = useState(0);
  const [rankPosition, setRankPosition] = useState(0);
  const [totalUsers, setTotalUsers] = useState(52419);

  useEffect(() => {
    const fetchResult = async () => {
      const token = searchParams.get("token");

      if (!token) {
        setErrorMessage("Token de acesso não encontrado. O link pode ser inválido.");
        setStatus("error");
        toast({
          title: "Acesso Negado",
          description: "Nenhum token de resultado fornecido.",
          variant: "destructive",
        });
        setTimeout(() => navigate("/"), 3000);
        return;
      }

      try {
        const data = await getResultByToken(token);
        if (data.status !== 'approved') {
          setErrorMessage("Pagamento ainda não confirmado. Aguarde alguns instantes e tente novamente.");
          setStatus("error");
          return;
        }
        setResultData(data);
        setStatus("success");
        
        // Gerar contagem de compartilhamento e buscar ranking após sucesso
        setShareCount(generateFixedShareCount(token));
        
        if (data.id) {
          getRank(data.id)
            .then(rankData => {
              setRankPosition(rankData.position);
              setTotalUsers(rankData.total);
            })
            .catch(() => {
              // Fallback em caso de erro no ranking
              setRankPosition(generateFixedShareCount(token) * 10);
            });
        }

      } catch (error: any) {
        setErrorMessage(error.message || "Não foi possível carregar o resultado. O token pode ser inválido ou expirado.");
        setStatus("error");
      }
    };

    fetchResult();
  }, [navigate, searchParams, toast]);

  // Renderiza o conteúdo com base no status
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 text-center">
          <Loader2 className="w-16 h-16 mx-auto mb-4 animate-spin text-primary" />
          <h1 className="text-2xl font-bold mb-2">Carregando seu resultado...</h1>
          <p className="text-muted-foreground">
            Isso levará apenas um instante.
          </p>
        </Card>
      </div>
    );
  }

  if (status === "error" || !resultData) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 text-center">
          <AlertCircle className="w-16 h-16 mx-auto mb-4 text-red-500" />
          <h1 className="text-2xl font-bold mb-2">Erro ao Carregar</h1>
          <p className="text-muted-foreground mb-4">
            {errorMessage || "Não foi possível encontrar os dados do seu resultado."}
          </p>
          <Button onClick={() => navigate("/")}>Voltar para o Início</Button>
        </Card>
      </div>
    );
  }

  // A partir daqui, resultData não é nulo
  const { iqScore, percentile, celebrity, cognitiveStrength, name } = resultData;

  const getShareMessage = () => {
    const displayPercentile = 100 - percentile;
    const rank = rankPosition > 0 ? `#${rankPosition.toLocaleString()}` : 'TOP';
    
    if (iqScore >= 130) {
      return `🧠 RESULTADO EXCEPCIONAL!\n\nMeu QI é ${iqScore} - Estou entre os ${displayPercentile}% mais inteligentes do Brasil! 🏆\n\nPosição ${rank} no ranking nacional\n\n💪 Você tem coragem de me desafiar?\n\nFaça o teste agora e descubra seu QI em apenas 3 minutos:\nhttps://fastbraincheck.com\n\n#QI #Inteligência #Desafio`;
    } else if (iqScore >= 120) {
      return `🧠 Resultado Impressionante!\n\nDescobri que meu QI é ${iqScore}! Estou no TOP ${displayPercentile}% das pessoas mais inteligentes! 🚀\n\nPosição ${rank} no ranking\n\nAcha que consegue me superar? O desafio está lançado! 💪\n\nTeste seu QI em 3 minutos:\nhttps://fastbraincheck.com\n\n#QI #TesteDeInteligência`;
    } else if (iqScore >= 110) {
      return `🧠 Acabei de descobrir meu QI: ${iqScore}!\n\nEstou no TOP ${displayPercentile}% das pessoas mais inteligentes! 🎯\n\nPosição ${rank} no ranking nacional\n\nSerá que você consegue me superar? Vamos descobrir! 🏆\n\nFaça o teste agora:\nhttps://fastbraincheck.com\n\n#QI #Desafio`;
    } else if (iqScore >= 90) {
      return `🧠 Descobri meu QI: ${iqScore}!\n\nEstou no TOP ${displayPercentile}%! Posição ${rank} no ranking 🎯\n\nQuer descobrir o seu? O teste leva apenas 3 minutos!\n\nVamos competir? 💪\nhttps://fastbraincheck.com\n\n#QI #Teste`;
    } else {
      return `🧠 Acabei de fazer um teste de QI!\n\nMeu resultado: ${iqScore} (TOP ${displayPercentile}%)\n\nQuer descobrir o seu? É rápido e divertido! 🎯\n\nFaça o teste:\nhttps://fastbraincheck.com\n\n#QI #TesteDeInteligência`;
    }
  };

  const shareOnWhatsApp = () => {
    const message = encodeURIComponent(getShareMessage());
    window.open(`https://wa.me/?text=${message}`, "_blank");
    
    const toastMessages = {
      high: { title: "🔥 Desafio Lançado!", description: "Seus amigos vão querer te superar!" },
      medium: { title: "🚀 Compartilhando!", description: "Vamos ver quem tem o QI mais alto..." },
      low: { title: "💪 Divulgando!", description: "Seus amigos vão adorar descobrir o QI deles!" }
    };
    
    const toastType = iqScore >= 120 ? 'high' : iqScore >= 100 ? 'medium' : 'low';
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

  const badge = getBadge(iqScore);
  const BadgeIcon = badge.icon;

  // O componente principal de resultado é renderizado aqui
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-primary text-primary-foreground p-6 shadow-lg text-center">
        <h1 className="text-3xl font-bold animate-fade-in-down">Seu Resultado Completo</h1>
        <p className="text-lg mt-1 animate-fade-in-up">Parabéns, {name}!</p>
      </header>

      <main className="container mx-auto p-4 mt-6">
        <Card className="p-6 mb-6 shadow-xl animate-slide-in-up">
          <div className="text-center">
            <div className={`inline-block p-3 rounded-full bg-gradient-to-br ${badge.color} mb-4`}>
              <BadgeIcon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-gray-500">Seu QI é</h2>
            <p className="text-7xl font-bold text-gray-800 my-2">{iqScore}</p>
            <p className="text-2xl font-semibold text-primary">{getIQDescription(iqScore)}</p>
            <p className="text-gray-500 mt-2">
              Você está no TOP {100 - percentile}% da população.
            </p>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 shadow-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center"><Trophy className="w-5 h-5 mr-2 text-yellow-500" />Ranking Nacional</h3>
            <div className="flex justify-around items-center text-center">
              <div>
                <p className="text-3xl font-bold">{rankPosition > 0 ? `#${rankPosition.toLocaleString()}` : 'N/A'}</p>
                <p className="text-sm text-gray-500">Sua Posição</p>
              </div>
              <div>
                <p className="text-3xl font-bold">{(totalUsers + 1).toLocaleString()}</p>
                <p className="text-sm text-gray-500">Participantes</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center"><TrendingUp className="w-5 h-5 mr-2 text-green-500" />Comparativo</h3>
            <p className="text-gray-600">
              Seu QI é comparável ao de um <span className="font-bold text-primary">{celebrity}</span>.
            </p>
          </Card>

          <Card className="p-6 shadow-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center"><Zap className="w-5 h-5 mr-2 text-blue-500" />Força Cognitiva</h3>
            <p className="text-gray-600">
              Sua principal força cognitiva é a <span className="font-bold text-primary">{cognitiveStrength}</span>.
            </p>
          </Card>

          <Card className="p-6 shadow-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center"><Sparkles className="w-5 h-5 mr-2 text-purple-500" />Potencial</h3>
            <p className="text-gray-600">
              Pessoas com seu QI frequentemente se destacam em áreas que exigem {cognitiveStrength.toLowerCase()}.
            </p>
          </Card>
        </div>

        <Card className="mt-6 p-6 text-center shadow-xl bg-gradient-to-r from-primary to-blue-600 text-white">
          <h3 className="text-2xl font-bold">Desafie seus amigos!</h3>
          <p className="mt-2 mb-4">Acha que eles conseguem superar sua pontuação? Compartilhe e descubra!</p>
          <Button onClick={shareOnWhatsApp} size="lg" variant="secondary" className="shadow-lg animate-pulse">
            <Share2 className="w-5 h-5 mr-2" /> Compartilhar no WhatsApp
          </Button>
          <p className="text-sm mt-4 opacity-80">{shareCount} pessoas já compartilharam hoje!</p>
        </Card>
        
        <div className="text-center mt-8">
            <Button variant="outline" onClick={() => navigate("/")}>
                <Brain className="w-4 h-4 mr-2" /> Refazer o Teste
            </Button>
        </div>
      </main>
    </div>
  );
};

export default CompleteResult;
