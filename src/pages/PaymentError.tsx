import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { XCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaymentError = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 text-center">
        <XCircle className="w-16 h-16 mx-auto mb-4 text-red-500" />
        <h1 className="text-2xl font-bold mb-2">Pagamento não processado</h1>
        <p className="text-muted-foreground mb-6">
          Ocorreu um erro ao processar seu pagamento. Por favor, tente novamente.
        </p>
        <Button onClick={() => navigate("/pagamento")} className="w-full">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tentar novamente
        </Button>
      </Card>
    </div>
  );
};

export default PaymentError;


