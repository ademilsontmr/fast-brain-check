import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain, MessageCircle, User, Sparkles, Mail, FileText } from "lucide-react";
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
            Último Passo! 🚀
          </h1>
          <p className="text-xl text-muted-foreground">
            Preencha seus dados para o pagamento e para receber seu resultado.
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
              {isSubmitting ? "Processando..." : "Ir para o Pagamento"}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              🔒 Seus dados estão seguros e são necessários para o processamento do pagamento.
            </p>
          </form>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default UserData;


