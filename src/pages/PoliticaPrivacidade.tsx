import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const PoliticaPrivacidade = () => {
  const navigate = useNavigate();

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
              <div className="text-2xl font-bold">BomQI</div>
            </div>
            <Button onClick={() => navigate("/teste")}>
              Fazer o Teste
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Política de Privacidade</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Informações que Coletamos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ao utilizar o BomQI, podemos coletar as seguintes informações:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Respostas fornecidas durante o teste de QI</li>
              <li>Dados de navegação (páginas visitadas, tempo de permanência)</li>
              <li>Informações de pagamento processadas por terceiros seguros</li>
              <li>Endereço IP e dados do dispositivo para análise de tráfego</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Como Usamos Suas Informações</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As informações coletadas são utilizadas para:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Calcular e fornecer seu resultado de QI</li>
              <li>Melhorar a experiência do usuário e a precisão do teste</li>
              <li>Processar pagamentos de forma segura</li>
              <li>Enviar comunicações importantes sobre o serviço</li>
              <li>Analisar tendências e estatísticas de uso</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Compartilhamento de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing. 
              Podemos compartilhar informações apenas com:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
              <li>Processadores de pagamento para completar transações</li>
              <li>Provedores de serviços essenciais para operação da plataforma</li>
              <li>Autoridades legais quando exigido por lei</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Segurança dos Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações 
              contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia 
              SSL/TLS para proteger dados em trânsito e armazenamos informações em servidores seguros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Cookies e Tecnologias Similares</h2>
            <p className="text-muted-foreground leading-relaxed">
              Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso 
              do site e personalizar conteúdo. Você pode controlar o uso de cookies através das 
              configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Seus Direitos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem direito a:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Acessar seus dados pessoais que possuímos</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a exclusão de dados pessoais</li>
              <li>Revogar consentimento a qualquer momento</li>
              <li>Solicitar portabilidade de dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Retenção de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Mantemos seus dados pelo tempo necessário para fornecer nossos serviços e cumprir 
              obrigações legais. Resultados de testes podem ser mantidos para fins estatísticos 
              de forma anonimizada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Menores de Idade</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nossos serviços são destinados a maiores de 18 anos. Não coletamos intencionalmente 
              informações de menores de idade. Se você acredita que coletamos dados de um menor, 
              entre em contato conosco imediatamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Alterações nesta Política</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre 
              mudanças significativas através do site ou por e-mail. Recomendamos revisar esta 
              página regularmente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para dúvidas sobre esta Política de Privacidade ou para exercer seus direitos, 
              entre em contato conosco através da página de <a href="/contato" className="text-primary hover:underline">Contato</a>.
            </p>
          </section>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Última atualização:</strong> Novembro de 2024
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;
