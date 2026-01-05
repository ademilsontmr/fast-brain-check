import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain, MessageCircle, User, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { saveUserData } from "@/services/api";
import { calculateIQ } from "@/types/quiz";
import Footer from "@/components/Footer";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import { useSEO } from "@/hooks/use-seo";

const UserData = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // SEO: noIndex para página de dados do usuário (não deve ser indexada)
  useSEO({
    title: "Seus Dados",
    description: "Preencha seus dados para receber o resultado do teste de QI.",
    noIndex: true,
  });

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Verificar se o usuário completou o teste
    const savedScore = localStorage.getItem("quizScore");
    if (!savedScore) {
      navigate("/");
      return;
    }
  }, [navigate]);

  const formatWhatsApp = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, "");
    
    // Limita a 11 dígitos (DDD + 9 dígitos)
    const limited = numbers.slice(0, 11);
    
    // Formata: (XX) XXXXX-XXXX
    if (limited.length <= 2) {
      return limited;
    } else if (limited.length <= 7) {
      return `(${limited.slice(0, 2)}) ${limited.slice(2)}`;
    } else {
      return `(${limited.slice(0, 2)}) ${limited.slice(2, 7)}-${limited.slice(7)}`;
    }
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setWhatsapp(formatted);
  };

  const validateWhatsApp = (whatsapp: string): boolean => {
    const numbers = whatsapp.replace(/\D/g, "");
    return numbers.length === 11; // DDD + 9 dígitos
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast({
        title: "Nome obrigatório",
        description: "Por favor, informe seu nome completo.",
        variant: "destructive",
      });
      return;
    }

    if (!validateWhatsApp(whatsapp)) {
      toast({
        title: "WhatsApp inválido",
        description: "Por favor, informe um número de WhatsApp válido com DDD.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const whatsappNumber = whatsapp.replace(/\D/g, "");
    localStorage.setItem("userName", name.trim());
    localStorage.setItem("userWhatsApp", whatsappNumber);

    // Obter dados do localStorage
    const score = localStorage.getItem("quizScore");
    const averageAnswerTime = localStorage.getItem("quizAverageAnswerTime");
    
    // Calcular QI apenas uma vez
    let iqScore: number | undefined;
    if (score) {
      const result = calculateIQ(
        parseInt(score),
        30,
        averageAnswerTime ? parseFloat(averageAnswerTime) : undefined
      );
      iqScore = result.iqScore;
    }

    // Salvar dados do usuário (não bloqueia se falhar)
    try {
      await saveUserData({
        name: name.trim(),
        whatsapp: whatsappNumber,
        score: score ? parseInt(score) : undefined,
        iqScore,
        averageAnswerTime: averageAnswerTime ? parseFloat(averageAnswerTime) : undefined,
      });
    } catch (error) {
      // Não bloquear o fluxo se houver erro ao salvar
      console.error("Erro ao salvar dados:", error);
    }

    toast({
      title: "Dados salvos!",
      description: "Preparando seu resultado...",
    });

    // Redirecionar imediatamente (usar window.location como fallback)
    try {
      navigate("/pagamento");
    } catch (error) {
      // Fallback caso navigate não funcione
      window.location.href = "/pagamento";
    }
  };

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

      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Quase lá! 🎯
          </h1>
          <p className="text-xl text-muted-foreground">
            Precisamos de algumas informações para gerar seu resultado personalizado
          </p>
        </div>

        <Card className="p-8 shadow-elegant">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-semibold flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Seu Nome Completo
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 text-base"
                required
                autoFocus
              />
              <p className="text-sm text-muted-foreground">
                Como você gostaria de ser chamado no seu resultado?
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-base font-semibold flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                Seu WhatsApp
              </Label>
              <Input
                id="whatsapp"
                type="tel"
                placeholder="(00) 00000-0000"
                value={whatsapp}
                onChange={handleWhatsAppChange}
                className="h-12 text-base"
                required
                maxLength={15}
              />
              <p className="text-sm text-muted-foreground">
                Enviaremos seu resultado completo por WhatsApp
              </p>
            </div>

            <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                O que você vai receber:
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Seu QI exato e análise detalhada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Comparação com celebridades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Seu percentil nacional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Análise dos seus pontos fortes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Dicas personalizadas para desenvolvimento</span>
                </li>
              </ul>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full shadow-elegant text-lg"
              disabled={isSubmitting || !name.trim() || !validateWhatsApp(whatsapp)}
            >
              {isSubmitting ? "Processando..." : "Ver Meu Resultado Completo"}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Seus dados estão seguros e serão usados apenas para enviar seu resultado
            </p>
          </form>
        </Card>
      </div>

      {/* Social Proof Carousel */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">O que as pessoas estão dizendo</h2>
        </div>
        <SocialProofCarousel />
      </section>

      <Footer />
    </div>
  );
};

export default UserData;

