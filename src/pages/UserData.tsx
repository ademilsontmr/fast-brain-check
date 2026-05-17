import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain, MessageCircle, User, Sparkles, Mail, FileText, Star, Shield, Zap, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { saveUserDataLocally } from "@/services/api";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/use-seo";
import InputMask from 'react-input-mask';


const UserData = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useSEO({
    title: "Seus Dados - Finalize seu Teste",
    description: "Preencha seus dados para receber o resultado do teste de QI.",
    noIndex: true,
  });

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [taxId, setTaxId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedScore = localStorage.getItem("quizScore");
    if (!savedScore) {
      navigate("/");
    }
  }, [navigate]);

  const validateForm = () => {
    if (!name.trim()) return false;
    if (!email.trim().includes('@')) return false;
    const whatsappNumbers = whatsapp.replace(/\D/g, "");
    if (whatsappNumbers.length < 10) return false; // Pelo menos DDD + 8 dígitos
    const taxIdNumbers = taxId.replace(/\D/g, "");
    if (taxIdNumbers.length !== 11) return false;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Dados incompletos",
        description: "Por favor, preencha todos os campos corretamente.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    saveUserDataLocally({
      name: name.trim(),
      whatsapp: whatsapp.replace(/\D/g, ""),
      email: email.trim(),
      taxId: taxId.replace(/\D/g, ""),
    });

    toast({
      title: "Dados salvos!",
      description: "Redirecionando para o pagamento...",
    });

    navigate("/pagamento");
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        {/* ... Header ... */}
      </header>

      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Seu resultado está pronto! 🧠
          </h1>
          <p className="text-xl text-muted-foreground">
            Preencha seus dados para receber seu resultado completo.
          </p>
        </div>

        <Card className="p-8 shadow-elegant">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome Completo */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-semibold flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Nome Completo
              </Label>
              <Input id="name" type="text" placeholder="Seu nome completo" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-semibold flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Seu Melhor E-mail
              </Label>
              <Input id="email" type="email" placeholder="exemplo@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            {/* CPF */}
            <div className="space-y-2">
              <Label htmlFor="taxId" className="text-base font-semibold flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                CPF
              </Label>
              <InputMask
                mask="999.999.999-99"
                value={taxId}
                onChange={(e) => setTaxId(e.target.value)}
              >
                {(inputProps: any) => <Input {...inputProps} id="taxId" type="tel" placeholder="000.000.000-00" required />}
              </InputMask>
              <p className="text-sm text-muted-foreground">
                Necessário para a emissão da nota fiscal e para o pagamento.
              </p>
            </div>

            {/* WhatsApp */}
            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-base font-semibold flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                WhatsApp
              </Label>
              <InputMask
                mask="(99) 99999-9999"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              >
                {(inputProps: any) => <Input {...inputProps} id="whatsapp" type="tel" placeholder="(00) 00000-0000" required />}
              </InputMask>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full shadow-elegant text-lg"
              disabled={isSubmitting || !validateForm()}
            >
              {isSubmitting ? "Processando..." : "Ir para o Resultado Completo →"}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              🔒 Seus dados estão seguros e são necessários para o processamento do pagamento.
            </p>
          </form>
        </Card>

        {/* Prova Social */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-sm font-semibold text-muted-foreground">4.9/5 — +50.000 resultados entregues</span>
          </div>

          <div className="grid gap-3">
            {[
              { name: "Fernanda R.", text: "Preenchi em menos de 1 minuto e já recebi meu resultado. Muito fácil e rápido!", stars: 5 },
              { name: "Carlos A.", text: "Processo simples e seguro. O resultado foi entregue na hora, super detalhado.", stars: 5 },
              { name: "Juliana M.", text: "Fiquei surpresa com a precisão do resultado. Valeu cada segundo!", stars: 5 },
            ].map((review, i) => (
              <Card key={i} className="p-4 bg-muted/30">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(review.stars)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-2">"{review.text}"</p>
                <p className="text-xs font-semibold">{review.name}</p>
              </Card>
            ))}
          </div>

          {/* Garantias */}
          <div className="grid grid-cols-3 gap-3 text-center mt-4">
            <div className="flex flex-col items-center gap-1">
              <Lock className="w-6 h-6 text-primary" />
              <span className="text-xs text-muted-foreground">Dados protegidos</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Zap className="w-6 h-6 text-primary" />
              <span className="text-xs text-muted-foreground">Acesso imediato</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-xs text-muted-foreground">Pagamento seguro</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserData;


