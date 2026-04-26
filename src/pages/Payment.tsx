import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Loader2, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { calculateIQ, getCelebrityComparison } from "@/types/quiz";
import { createPixPayment, getResultByToken, CustomerData } from "@/services/api";
import { markPremiumResult } from "@/lib/session";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/use-seo";
import { QRCodeSVG as QRCode } from "qrcode.react";

const PRODUCT_KEY = "fast_brain_check_test";

const Payment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useSEO({
    title: "Pagamento - Resultado Completo",
    description: "Desbloqueie seu resultado completo do teste de QI.",
    noIndex: true,
  });

  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState("");
  const [averageAnswerTime, setAverageAnswerTime] = useState<number | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [pixBrCode, setPixBrCode] = useState('');
  const [pixToken, setPixToken] = useState('');

  // Polling: verifica status do pagamento PIX a cada 3s enquanto QR estiver visível
  useEffect(() => {
    if (!pixToken) return;
    const interval = setInterval(async () => {
      try {
        const result = await getResultByToken(pixToken);
        if (result.status === 'approved') {
          clearInterval(interval);
          markPremiumResult();
          navigate(`/resultado-completo?token=${pixToken}`);
        }
      } catch {
        // ignora erros de polling
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [pixToken, navigate]);

  useEffect(() => {
    const savedScore = localStorage.getItem("quizScore");
    const savedUserName = localStorage.getItem("userName");
    if (!savedScore || !savedUserName) {
      navigate("/dados-usuario");
      return;
    }
    setScore(parseInt(savedScore, 10));
    setUserName(savedUserName);
    const savedAverageTime = localStorage.getItem("quizAverageAnswerTime");
    if (savedAverageTime) setAverageAnswerTime(parseFloat(savedAverageTime));
  }, [navigate]);

  const result = calculateIQ(score, 30, averageAnswerTime);
  const celebrity = getCelebrityComparison(result.iqScore);

  const getCustomerData = (): CustomerData | null => {
    const name = localStorage.getItem("userName");
    const email = localStorage.getItem("userEmail");
    const taxId = localStorage.getItem("userTaxId");
    const phone = localStorage.getItem("userWhatsApp");
    if (!name || !email || !taxId || !phone) {
      toast({ title: "Dados incompletos", description: "Por favor, preencha seus dados novamente.", variant: "destructive" });
      navigate("/dados-usuario");
      return null;
    }
    return { name, email, taxId, phone };
  };

  const handlePixPayment = async () => {
    // Reutilizar pagamento existente se ainda válido (< 25 min)
    const existingToken = localStorage.getItem("resultAccessToken");
    const existingBrCode = localStorage.getItem("pixBrCode");
    const pixCreatedAt = localStorage.getItem("pixCreatedAt");
    const isValid = pixCreatedAt && (Date.now() - parseInt(pixCreatedAt)) < 25 * 60 * 1000;

    if (existingToken && existingBrCode && isValid) {
      setPixToken(existingToken);
      setPixBrCode(existingBrCode);
      return;
    }

    localStorage.removeItem("resultAccessToken");
    localStorage.removeItem("pixBrCode");
    localStorage.removeItem("pixCreatedAt");

    const customer = getCustomerData();
    if (!customer) return;
    setIsLoading(true);
    try {
      const pixData = await createPixPayment(PRODUCT_KEY, customer);
      localStorage.setItem("resultAccessToken", pixData.accessToken);
      localStorage.setItem("pixBrCode", pixData.brCode);
      localStorage.setItem("pixCreatedAt", Date.now().toString());
      setPixToken(pixData.accessToken);
      setPixBrCode(pixData.brCode);
    } catch (error: any) {
      toast({ title: "Erro ao gerar PIX", description: error.message || "Tente novamente em alguns instantes.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixBrCode);
    toast({ title: "Copiado!", description: "Código PIX copiado para a área de transferência." });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate("/")}>
            <Brain className="w-8 h-8 text-primary" />
            <div className="text-2xl font-bold">BomQI</div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <Card className="p-8 mb-6 shadow-elegant">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 mb-6 border-2 border-primary/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium">Acesso Completo</span>
              <div className="text-right">
                <span className="text-3xl font-bold text-primary">R$ 14,90</span>
                <p className="text-xs text-muted-foreground opacity-60">Pagamento único</p>
              </div>
            </div>
          </div>

          {pixBrCode ? (
            <div className="space-y-4">
              <p className="text-center font-semibold text-lg">Pague com PIX</p>
              <p className="text-center text-sm text-muted-foreground">
                Escaneie o QR Code com o app do seu banco ou use o "Copia e Cola".
              </p>
              <div className="flex justify-center p-4">
                <QRCode value={pixBrCode} size={256} />
              </div>
              <div className="relative min-w-0 overflow-hidden">
                <p className="p-3 pr-12 border rounded-md bg-muted text-sm truncate">{pixBrCode}</p>
                <Button variant="ghost" size="icon" className="absolute top-1/2 right-2 -translate-y-1/2" onClick={copyToClipboard}>
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                Após o pagamento, você será redirecionado automaticamente.
              </p>
            </div>
          ) : (
            <Button
              onClick={handlePixPayment}
              size="lg"
              className="w-full shadow-elegant text-lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Gerando PIX...</>
              ) : (
                "Pagar com PIX"
              )}
            </Button>
          )}
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Payment;
