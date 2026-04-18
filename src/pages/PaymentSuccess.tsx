import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getResultByToken, ResultData } from "@/services/api";
import { useSEO } from "@/hooks/use-seo";

const POLLING_INTERVAL = 3000; // 3 segundos
const MAX_POLLING_ATTEMPTS = 20; // Total de 60 segundos

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  useSEO({
    title: "Verificando Pagamento...",
    description: "Estamos confirmando seu pagamento para liberar seu resultado.",
    noIndex: true,
  });

  const [status, setStatus] = useState<"polling" | "verified" | "error" | "timeout">("polling");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("resultAccessToken") || searchParams.get("token");

    if (!accessToken) {
      setErrorMessage("Token de acesso não encontrado. Por favor, retorne e tente o pagamento novamente.");
      setStatus("error");
      return;
    }

    let attempts = 0;

    const pollPaymentStatus = async () => {
      if (attempts >= MAX_POLLING_ATTEMPTS) {
        setStatus("timeout");
        setErrorMessage("A confirmação do pagamento está demorando mais que o esperado. Por favor, verifique seu e-mail ou aguarde alguns minutos antes de tentar novamente.");
        return;
      }

      attempts++;

      try {
        const result = await getResultByToken(accessToken);

        if (result.status === 'approved') {
          // Salvar dados para a página de resultado
          localStorage.setItem("resultData", JSON.stringify(result));
          localStorage.setItem("isPaid", "true");
          
          setStatus("verified");
          toast({
            title: "Pagamento confirmado! ✅",
            description: "Redirecionando para seu resultado...",
          });

          // Redirecionar para a URL única do resultado
          setTimeout(() => {
            window.location.href = `/resultado-completo?token=${accessToken}`;
          }, 1000);

        } else {
          // Continua no polling se o status ainda for 'pending'
          setTimeout(pollPaymentStatus, POLLING_INTERVAL);
        }
      } catch (error: any) {
        // Erro na API (ex: token inválido)
        setErrorMessage(error.message || "Ocorreu um erro ao verificar seu pagamento.");
        setStatus("error");
      }
    };

    pollPaymentStatus();

  }, [navigate, toast, searchParams]);

  const renderContent = () => {
    switch (status) {
      case "polling":
        return (
          <>
            <Loader2 className="w-16 h-16 mx-auto mb-4 animate-spin text-primary" />
            <h1 className="text-2xl font-bold mb-2">Aguardando confirmação...</h1>
            <p className="text-muted-foreground">
              Estamos aguardando a confirmação do seu pagamento. Isso pode levar alguns segundos.
            </p>
          </>
        );
      case "verified":
        return (
          <>
            <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-green-500" />
            <h1 className="text-2xl font-bold mb-2">Pagamento Aprovado!</h1>
            <p className="text-muted-foreground">
              Redirecionando para seu resultado completo...
            </p>
          </>
        );
      case "error":
      case "timeout":
        return (
          <>
            <AlertCircle className="w-16 h-16 mx-auto mb-4 text-red-500" />
            <h1 className="text-2xl font-bold mb-2">Ocorreu um Problema</h1>
            <p className="text-muted-foreground mb-4">
              {errorMessage || "Não foi possível confirmar seu pagamento."}
            </p>
            <button
              onClick={() => navigate("/pagamento")}
              className="text-primary hover:underline"
            >
              Tentar novamente
            </button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 text-center">
        {renderContent()}
      </Card>
    </div>
  );
};

export default PaymentSuccess;


