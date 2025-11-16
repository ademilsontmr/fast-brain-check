import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
// saveResult removido - dados ficam apenas no localStorage
import { calculateIQ as calcIQ, getCelebrityComparison as getCelebrity, getCognitiveStrength as getStrength } from "@/types/quiz";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [isVerifying, setIsVerifying] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processPayment = async () => {
      const sessionId = searchParams.get("session_id");
      const userId = localStorage.getItem("userId");
      let savedToken = localStorage.getItem("resultToken");
      const savedScore = localStorage.getItem("quizScore");
      const savedUserName = localStorage.getItem("userName");
      const userWhatsApp = localStorage.getItem("userWhatsApp");
      const savedAverageTime = localStorage.getItem("quizAverageAnswerTime");

      // Garantir que temos um token (deve ter sido salvo antes de ir para o Stripe)
      if (!savedToken) {
        if (userId) {
          // Gerar token baseado no userId como fallback
          savedToken = btoa(`${userId}-${Date.now()}-${Math.random()}`)
            .replace(/[^a-zA-Z0-9]/g, '')
            .substring(0, 32);
          localStorage.setItem("resultToken", savedToken);
        } else {
          setError("Token não encontrado. Por favor, tente novamente.");
          setIsVerifying(false);
          return;
        }
      }

      if (!userId || !savedToken || !savedScore || !savedUserName || !userWhatsApp) {
        setError("Dados incompletos. Por favor, tente novamente.");
        setIsVerifying(false);
        return;
      }

      try {
        // Calcular resultado
        const score = parseInt(savedScore);
        const averageAnswerTime = savedAverageTime ? parseFloat(savedAverageTime) : undefined;
        const result = calcIQ(score, 30, averageAnswerTime);
        const celebrity = getCelebrity(result.iqScore);
        const cognitiveStrength = getStrength(result.iqScore);

        // Preparar dados do resultado
        const resultData = {
          userId,
          name: savedUserName,
          whatsapp: userWhatsApp,
          score,
          iqScore: result.iqScore,
          averageAnswerTime,
          celebrity,
          cognitiveStrength,
          percentile: result.percentile,
        };

        // Salvar resultado completo no localStorage (não salva no KV para otimizar consumo)
        localStorage.setItem("resultData", JSON.stringify(resultData));
        
        // Marcar como pago
        localStorage.setItem("isPaid", "true");
        localStorage.setItem("paidTime", Date.now().toString());

        setIsVerified(true);
        toast({
          title: "Pagamento confirmado! ✅",
          description: "Redirecionando para seu resultado único...",
        });

        // Redirecionar para a URL única do resultado
        setTimeout(() => {
          window.location.href = `/resultado-completo?token=${savedToken}`;
        }, 1000);
      } catch (error: any) {
        console.error("Erro ao processar pagamento:", error);
        setError(error.message || "Erro ao processar pagamento. Tente novamente.");
        setIsVerifying(false);
      }
    };

    processPayment();
  }, [navigate, toast, searchParams]);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 text-center">
        {isVerifying ? (
          <>
            <Loader2 className="w-16 h-16 mx-auto mb-4 animate-spin text-primary" />
            <h1 className="text-2xl font-bold mb-2">Processando...</h1>
            <p className="text-muted-foreground">
              Aguarde enquanto preparamos seu resultado
            </p>
          </>
        ) : isVerified ? (
          <>
            <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-green-500" />
            <h1 className="text-2xl font-bold mb-2">Acesso liberado! ✅</h1>
            <p className="text-muted-foreground">
              Redirecionando para seu resultado completo...
            </p>
          </>
        ) : error ? (
          <>
            <AlertCircle className="w-16 h-16 mx-auto mb-4 text-red-500" />
            <h1 className="text-2xl font-bold mb-2">Erro</h1>
            <p className="text-muted-foreground mb-4">
              {error}
            </p>
            <button
              onClick={() => navigate("/pagamento")}
              className="text-primary hover:underline"
            >
              Tentar novamente
            </button>
          </>
        ) : (
          <>
            <AlertCircle className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
            <h1 className="text-2xl font-bold mb-2">Aguardando</h1>
            <p className="text-muted-foreground mb-4">
              Preparando seu resultado completo...
            </p>
            <button
              onClick={() => navigate("/pagamento")}
              className="text-primary hover:underline"
            >
              Voltar
            </button>
          </>
        )}
      </Card>
    </div>
  );
};

export default PaymentSuccess;

