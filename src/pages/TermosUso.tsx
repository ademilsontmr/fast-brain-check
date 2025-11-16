import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const TermosUso = () => {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Termos de Uso</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ao acessar e utilizar o BomQI, você concorda em cumprir e estar vinculado a estes 
              Termos de Uso. Se você não concordar com qualquer parte destes termos, não utilize 
              nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Descrição do Serviço</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O BomQI é uma plataforma online que oferece:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Teste de QI baseado em questões de raciocínio lógico, matemático e verbal</li>
              <li>Resultado básico gratuito com estimativa de QI</li>
              <li>Resultado completo pago com análise detalhada e comparações</li>
              <li>Conteúdo educacional sobre inteligência e desenvolvimento cognitivo</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Uso Permitido</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Você concorda em usar o BomQI apenas para fins lícitos e de acordo com estes Termos. 
              Você não deve:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Usar o serviço de forma fraudulenta ou enganosa</li>
              <li>Tentar burlar o sistema de pontuação ou manipular resultados</li>
              <li>Copiar, modificar ou distribuir nosso conteúdo sem autorização</li>
              <li>Realizar engenharia reversa ou tentar acessar áreas restritas</li>
              <li>Usar bots, scripts ou ferramentas automatizadas</li>
              <li>Compartilhar ou revender acesso ao resultado completo</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Propriedade Intelectual</h2>
            <p className="text-muted-foreground leading-relaxed">
              Todo o conteúdo do BomQI, incluindo mas não limitado a textos, gráficos, logos, 
              questões do teste, algoritmos de cálculo e design, é propriedade exclusiva do BomQI 
              e está protegido por leis de direitos autorais e propriedade intelectual. É proibida 
              a reprodução sem autorização expressa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Pagamentos e Reembolsos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O resultado completo é um produto digital oferecido mediante pagamento. Ao efetuar 
              o pagamento, você concorda que:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Os preços estão sujeitos a alterações sem aviso prévio</li>
              <li>O pagamento é processado por plataformas de terceiros seguras</li>
              <li>Produtos digitais não são reembolsáveis após o acesso ao conteúdo</li>
              <li>Em caso de problemas técnicos que impeçam o acesso, entre em contato conosco</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Precisão dos Resultados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Embora nos esforcemos para fornecer resultados precisos baseados em métodos 
              científicos reconhecidos, o teste do BomQI é uma ferramenta de entretenimento 
              e desenvolvimento pessoal. Os resultados não devem ser considerados como diagnóstico 
              profissional ou avaliação psicológica oficial. Para uma avaliação formal de QI, 
              consulte um psicólogo credenciado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground leading-relaxed">
              O BomQI não se responsabiliza por:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
              <li>Decisões tomadas com base nos resultados do teste</li>
              <li>Danos indiretos, incidentais ou consequenciais</li>
              <li>Interrupções temporárias do serviço</li>
              <li>Perda de dados devido a problemas técnicos</li>
              <li>Conteúdo de terceiros ou links externos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Privacidade e Dados Pessoais</h2>
            <p className="text-muted-foreground leading-relaxed">
              O uso de suas informações pessoais é regido por nossa <a href="/politica-privacidade" className="text-primary hover:underline">Política de Privacidade</a>. 
              Ao usar o BomQI, você concorda com a coleta e uso de informações conforme descrito 
              na política.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Modificações dos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Reservamos o direito de modificar estes Termos de Uso a qualquer momento. 
              Alterações significativas serão comunicadas através do site. O uso contínuo 
              do serviço após mudanças constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Rescisão</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos suspender ou encerrar seu acesso ao BomQI imediatamente, sem aviso prévio, 
              se você violar estes Termos de Uso ou se envolver em atividades fraudulentas ou 
              prejudiciais ao serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Lei Aplicável</h2>
            <p className="text-muted-foreground leading-relaxed">
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. 
              Qualquer disputa será resolvida nos tribunais brasileiros competentes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para dúvidas sobre estes Termos de Uso, entre em contato através da nossa 
              página de <a href="/contato" className="text-primary hover:underline">Contato</a>.
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

export default TermosUso;
