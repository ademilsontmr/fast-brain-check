import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Lock, Shield, Star, Zap, CheckCircle2, Loader2, QrCode, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { calculateIQ, getCelebrityComparison } from "@/types/quiz";
import { createCardPayment, createPixPayment, CustomerData } from "@/services/api";
import Footer from "@/components/Footer";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import { useSEO } from "@/hooks/use-seo";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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
  
  const [isLoading, setIsLoading] = useState<'pix' | 'card' | false>(false);
  const [pixModalOpen, setPixModalOpen] = useState(false);
  const [pixBrCode, setPixBrCode] = useState('');
  
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
    if (savedAverageTime) {
      setAverageAnswerTime(parseFloat(savedAverageTime));
    }
  }, [navigate]);

  const result = calculateIQ(score, 30, averageAnswerTime);
  const celebrity = getCelebrityComparison(result.iqScore);

  const getCustomerData = (): CustomerData | null => {
    const name = localStorage.getItem("userName");
    const email = localStorage.getItem("userEmail");
    const taxId = localStorage.getItem("userTaxId");
    const phone = localStorage.getItem("userWhatsApp");

    if (!name || !email || !taxId || !phone) {
      toast({
        title: "Dados incompletos",
        description: "Por favor, preencha seus dados novamente.",
        variant: "destructive",
      });
      navigate("/dados-usuario");
      return null;
    }
    return { name, email, taxId, phone };
  };

  const handleCardPayment = async () => {
    const customer = getCustomerData();
    if (!customer) return;

    setIsLoading('card');
    try {
      const checkout = await createCardPayment(PRODUCT_KEY, customer);
      window.location.href = checkout.url;
    } catch (error: any) {
      setIsLoading(false);
      toast({
        title: "Erro ao processar pagamento",
        description: error.message || "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    }
  };

  const handlePixPayment = async () => {
    const customer = getCustomerData();
    if (!customer) return;

    setIsLoading('pix');
    try {
      const pixData = await createPixPayment(PRODUCT_KEY, customer);
      localStorage.setItem("resultAccessToken", pixData.accessToken);
      setPixBrCode(pixData.brCode);
      setPixModalOpen(true);
    } catch (error: any) {
      toast({
        title: "Erro ao gerar PIX",
        description: error.message || "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixBrCode);
    toast({
      title: "Copiado!",
      description: "Código PIX copiado para a área de transferência.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate("/")}>
            <Brain className="w-8 h-8 text-primary" />
            <div className="text-2xl font-bold">BomQI</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        {/* ... (Conteúdo do teaser e benefícios) ... */}
        <Card className="p-8 mb-6 shadow-elegant">
          {/* ... (Lista de benefícios) ... */}

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 mb-6 border-2 border-primary/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium">Acesso Completo</span>
              <div className="text-right">
                <span className="text-3xl font-bold text-primary">R$ 29,90</span>
                <p className="text-xs text-muted-foreground opacity-60">Pagamento único</p>
              </div>
            </div>
            {/* ... (Detalhes do pagamento) ... */}
          </div>

          <div className="space-y-4">
            <Button 
              onClick={handleCardPayment} 
              size="lg" 
              className="w-full shadow-elegant text-lg"
              disabled={!!isLoading}
            >
              {isLoading === 'card' ? (
                <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Processando...</>
              ) : (
                "Pagar com Cartão de Crédito"
              )}
            </Button>

            <Button 
              onClick={handlePixPayment} 
              size="lg" 
              variant="outline"
              className="w-full shadow-elegant text-lg"
              disabled={!!isLoading}
            >
              {isLoading === 'pix' ? (
                <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Gerando PIX...</>
              ) : (
                "Pagar com PIX"
              )}
            </Button>
          </div>

          {/* ... (Garantias de segurança) ... */}
        </Card>
        {/* ... (Restante da página) ... */}
      </div>

      {/* PIX Modal */}
      <Dialog open={pixModalOpen} onOpenChange={setPixModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Pague com PIX</DialogTitle>
            <DialogDescription className="text-center">
              Escaneie o QR Code com o app do seu banco ou use o "Copia e Cola".
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center p-4">
            <QRCode value={pixBrCode} size={256} />
          </div>
          <div className="relative">
            <p className="p-3 pr-12 border rounded-md bg-muted text-sm break-all">{pixBrCode}</p>
            <Button variant="ghost" size="icon" className="absolute top-1/2 right-2 -translate-y-1/2" onClick={copyToClipboard}>
              <Copy className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Após o pagamento, você será redirecionado para a página de resultado.
          </p>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};
  
export default Payment;
