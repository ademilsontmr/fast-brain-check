import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PaymentPending = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      navigate("/");
      return;
    }

    // Liberar acesso e redirecionar
    localStorage.setItem("isPaid", "true");
    localStorage.setItem("paidTime", Date.now().toString());
    
    const token = btoa(`${userId}-${Date.now()}-${Math.random()}`)
      .replace(/[^a-zA-Z0-9]/g, '')
      .substring(0, 32);
    localStorage.setItem("resultToken", token);
    
    toast({
      title: "Acesso liberado! ✅",
      description: "Redirecionando para seu resultado...",
    });
    
    setTimeout(() => {
      navigate(`/resultado-completo?token=${token}`);
    }, 1500);
  }, [navigate, toast]);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 text-center">
        <Clock className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
        <h1 className="text-2xl font-bold mb-2">Processando...</h1>
        <p className="text-muted-foreground mb-6">
          Preparando seu resultado completo...
        </p>
        <Loader2 className="w-8 h-8 mx-auto animate-spin text-primary" />
      </Card>
    </div>
  );
};

export default PaymentPending;

