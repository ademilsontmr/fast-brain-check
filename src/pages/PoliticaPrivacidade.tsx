import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/use-seo";

const PoliticaPrivacidade = () => {
  const navigate = useNavigate();

  useSEO({
    title: "Política de Privacidade",
    description: "Política de privacidade do BomQI. Não armazenamos seus dados pessoais nem resultados do teste após o envio.",
    url: "https://bomqi.com.br/politica-privacidade",
  });

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

        <div className="mb-8 p-6 bg-primary/10 border border-primary/20 rounded-lg">
          <p className="text-lg font-semibold text-foreground mb-2">
            Resumo: sua privacidade em primeiro lugar
          </p>
          <p className="text-muted-foreground leading-relaxed">
            O BomQI <strong>não armazena</strong> suas respostas do teste, dados pessoais ou resultados de QI em nossos servidores.
            Após o envio do resultado, todas as informações relacionadas ao teste são <strong>destruídas imediatamente</strong> e não ficam salvas em nosso sistema.
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Não Armazenamos Suas Informações</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O BomQI foi projetado com foco em privacidade. Isso significa que:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Não guardamos suas respostas durante ou após o teste de QI</li>
              <li>Não criamos cadastro nem perfil com seus dados pessoais</li>
              <li>Não mantemos histórico de testes realizados</li>
              <li>Não vendemos, alugamos ou compartilhamos dados pessoais com terceiros para marketing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Destruição dos Resultados Após o Envio</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O processamento do seu teste ocorre de forma temporária, apenas para calcular e exibir o resultado.
              Quando o resultado é enviado ou exibido a você:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>As respostas do teste são eliminadas</li>
              <li>O resultado calculado não permanece armazenado em nossos servidores</li>
              <li>Não há retenção de dados para fins estatísticos, de marketing ou qualquer outro uso posterior</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Recomendamos que você salve ou imprima o resultado na hora, se desejar mantê-lo, pois não poderemos recuperá-lo depois.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Dados de Pagamento</h2>
            <p className="text-muted-foreground leading-relaxed">
              Se você optar por um plano pago, o pagamento é processado por provedores terceiros especializados e seguros.
              O BomQI não armazena dados completos de cartão de crédito ou informações bancárias em seus próprios servidores.
              Apenas o necessário para confirmar a transação pode ser tratado pelo processador de pagamento, conforme a política de privacidade dele.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Cookies e Navegação</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos utilizar cookies essenciais ou tecnologias similares apenas para o funcionamento básico do site
              (por exemplo, manter sua sessão durante o teste). Não usamos esses dados para criar perfil identificável nem
              para associar suas respostas do teste a você após a conclusão. Você pode gerenciar cookies nas configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Seus Direitos (LGPD)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direitos sobre dados pessoais.
              Como não armazenamos informações do teste nem resultados após o envio, na prática não mantemos dados
              seus para acesso, correção ou exclusão. Ainda assim, você pode entrar em contato conosco para esclarecer dúvidas
              ou exercer direitos relacionados a qualquer comunicação que você nos envie voluntariamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Menores de Idade</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nossos serviços são destinados a maiores de 18 anos. Não coletamos nem armazenamos intencionalmente
              informações de menores de idade.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Alterações nesta Política</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. Mudanças significativas serão publicadas nesta página.
              Recomendamos revisá-la de tempos em tempos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para dúvidas sobre esta Política de Privacidade, entre em contato conosco através da página de{" "}
              <a href="/contato" className="text-primary hover:underline">Contato</a>.
            </p>
          </section>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Última atualização:</strong> Maio de 2026
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;
