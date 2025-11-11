import { Brain, Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });
    
    // Limpar formulário
    setFormData({
      nome: "",
      email: "",
      assunto: "",
      mensagem: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => navigate("/")}
            >
              <Brain className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold">BomQI</h1>
            </div>
            <Button onClick={() => navigate("/teste")}>
              Fazer o Teste
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h1>
            <p className="text-xl text-muted-foreground">
              Tem dúvidas ou sugestões? Estamos aqui para ajudar!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Formulário de Contato */}
            <Card className="p-8 shadow-elegant">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-primary" />
                Envie sua Mensagem
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium mb-2">
                    Nome completo
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium mb-2">
                    Assunto
                  </label>
                  <Input
                    id="assunto"
                    name="assunto"
                    type="text"
                    placeholder="Sobre o que você quer falar?"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Digite sua mensagem aqui..."
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </Card>

            {/* Informações Adicionais */}
            <div className="space-y-6">
              <Card className="p-8 shadow-elegant">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">E-mail</h3>
                    <p className="text-muted-foreground">
                      contato@bomqi.com.br
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Respondemos em até 24 horas úteis
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 shadow-elegant">
                <h3 className="font-bold text-lg mb-4">Perguntas Frequentes</h3>
                <p className="text-muted-foreground mb-4">
                  Antes de entrar em contato, confira se sua dúvida já está respondida 
                  em nossa seção de perguntas frequentes.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => navigate("/perguntas-frequentes")}
                  className="w-full"
                >
                  Ver FAQ
                </Button>
              </Card>

              <Card className="p-8 shadow-elegant bg-gradient-primary text-primary-foreground">
                <h3 className="font-bold text-lg mb-2">Suporte Rápido</h3>
                <p className="mb-4 opacity-90">
                  Para questões técnicas ou problemas com pagamento, nossa equipe está 
                  pronta para ajudar rapidamente.
                </p>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>✓ Resposta em até 24h</li>
                  <li>✓ Suporte em português</li>
                  <li>✓ Atendimento humanizado</li>
                </ul>
              </Card>

              <Card className="p-8 shadow-elegant">
                <h3 className="font-bold text-lg mb-4">Parcerias e Imprensa</h3>
                <p className="text-muted-foreground mb-4">
                  Interessado em uma parceria ou precisa de material para imprensa?
                </p>
                <p className="text-sm text-muted-foreground">
                  Entre em contato através do e-mail: <br />
                  <span className="text-primary font-medium">parcerias@bomqi.com.br</span>
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;
