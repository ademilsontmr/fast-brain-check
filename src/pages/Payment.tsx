import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Loader2, Copy, CheckCircle, Star, Shield, Lock, Zap, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { calculateIQ, getCelebrityComparison } from "@/types/quiz";
import { createPixPayment, getResultByToken, CustomerData } from "@/services/api";
import { markPremiumResult } from "@/lib/session";
import { useSEO } from "@/hooks/use-seo";
import { QRCodeSVG as QRCode } from "qrcode.react";

const PRODUCT_KEY = "fast_brain_check_test";

const reviews = [
  { name: "Lucas M.", city: "São Paulo", text: "Resultado surpreendente! Descobri que tenho QI acima da média. Vale muito!", stars: 5 },
  { name: "Ana P.", city: "Rio de Janeiro", text: "Muito detalhado. Me ajudou a entender meus pontos fortes de verdade.", stars: 5 },
  { name: "Rafael S.", city: "Belo Horizonte", text: "Rápido e preciso. O redirecionamento foi instantâneo após o PIX.", stars: 5 },
];

const Payment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useSEO({
    title: "Desbloqueie Seu Resultado Completo",
    description: "Acesse seu resultado completo do teste de QI.",
    noIndex: true,
  });

  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState("");
  const [averageAnswerTime, setAverageAnswerTime] = useState<number | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [pixBrCode, setPixBrCode] = useState('');
  const [pixToken, setPixToken] = useState('');
  const [copied, setCopied] = useState(false);

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
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({ title: "Copiado!", description: "Código PIX copiado para a área de transferência." });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header minimalista */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 max-w-2xl flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate("/")}>
            <Brain className="w-7 h-7 text-primary" />
            <span className="text-xl font-bold">BomQI</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Lock className="w-3.5 h-3.5" />
            <span>Pagamento seguro</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-lg">

        {/* Headline personalizada */}
        <div className="text-center mb-6">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">Quase lá, {userName}!</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Seu resultado está pronto 🧠</h1>
          <p className="text-muted-foreground text-sm">Desbloqueie agora e descubra seu QI completo, percentil e comparação com famosos.</p>
        </div>

        {/* O que você vai receber */}
        <Card className="p-4 mb-4 border-primary/20 bg-primary/5">
          <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">O que você vai receber</p>
          <div className="space-y-2">
            {[
              "Seu QI exato calculado cientificamente",
              "Percentil nacional — onde você está entre os brasileiros",
              "Comparação com personalidades famosas",
              "Análise detalhada das suas habilidades cognitivas",
              "Badge exclusivo para compartilhar",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Card de pagamento */}
        <Card className="p-6 mb-4 shadow-lg border-2 border-primary/20">
          {/* Preço */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="font-semibold text-base">Resultado Completo</p>
              <p className="text-xs text-muted-foreground">Acesso único e imediato</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-primary">R$ 14,90</p>
              <p className="text-xs text-muted-foreground line-through opacity-50">R$ 29,90</p>
            </div>
          </div>

          {pixBrCode ? (
            /* Estado: QR Code gerado */
            <div className="space-y-4">
              <div className="flex items-center gap-2 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg px-3 py-2">
                <Loader2 className="w-4 h-4 text-green-600 animate-spin flex-shrink-0" />
                <p className="text-xs text-green-800 dark:text-green-200 font-medium">
                  Aguardando pagamento... você será redirecionado automaticamente.
                </p>
              </div>

              <div className="flex justify-center bg-white rounded-xl p-4 border">
                <QRCode value={pixBrCode} size={200} />
              </div>

              <p className="text-center text-xs text-muted-foreground">
                Abra o app do seu banco → PIX → Ler QR Code
              </p>

              <div className="space-y-2">
                <p className="p-3 border rounded-lg bg-muted text-xs truncate font-mono">{pixBrCode}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full gap-2 font-semibold"
                  onClick={copyToClipboard}
                >
                  {copied
                    ? <><CheckCircle className="w-4 h-4 text-green-500" /> Copiado!</>
                    : <><Copy className="w-4 h-4" /> Copiar código PIX</>
                  }
                </Button>
              </div>
            </div>
          ) : (
            /* Estado: botão de gerar PIX */
            <div className="space-y-3">
              <Button
                onClick={handlePixPayment}
                size="lg"
                className="w-full text-base font-bold h-14 shadow-lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Gerando PIX...</>
                ) : (
                  <><Zap className="w-5 h-5 mr-2" /> Pagar R$ 14,90 com PIX <ChevronRight className="w-4 h-4 ml-1" /></>
                )}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                PIX aprovado na hora — acesso imediato ao resultado
              </p>
            </div>
          )}
        </Card>

        {/* Aviso de redirecionamento */}
        <div className="flex items-center gap-2 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg px-4 py-3 mb-6">
          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
          <p className="text-xs text-green-800 dark:text-green-200 font-medium">
            Após o pagamento você será redirecionado automaticamente para o seu resultado.
          </p>
        </div>

        {/* Garantias */}
        <div className="grid grid-cols-3 gap-2 mb-8">
          {[
            { icon: Shield, label: "Pagamento seguro" },
            { icon: Zap, label: "Acesso imediato" },
            { icon: Lock, label: "Dados protegidos" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-muted/40">
              <Icon className="w-5 h-5 text-primary" />
              <span className="text-xs text-muted-foreground text-center leading-tight">{label}</span>
            </div>
          ))}
        </div>

        {/* Prova Social */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-xs font-semibold text-muted-foreground">4.9 · +50.000 resultados entregues</span>
          </div>

          <div className="space-y-2">
            {reviews.map((review, i) => (
              <Card key={i} className="p-4 bg-background border-border/60">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-sm font-bold text-primary">
                    {review.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-xs font-semibold">{review.name} · <span className="text-muted-foreground font-normal">{review.city}</span></p>
                      <div className="flex gap-0.5">
                        {[...Array(review.stars)].map((_, j) => (
                          <Star key={j} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">"{review.text}"</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Payment;
