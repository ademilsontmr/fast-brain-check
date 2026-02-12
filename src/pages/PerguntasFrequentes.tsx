import { useNavigate } from "react-router-dom";
import { Brain, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import useStructuredData from "@/hooks/use-structured-data";
import { useSEO } from "@/hooks/use-seo";

const PerguntasFrequentes = () => {
  const navigate = useNavigate();

  useSEO({
    title: "Perguntas Frequentes sobre Teste de QI",
    description: "Tire suas dúvidas sobre o teste de QI online do BomQI. Saiba como funciona, quanto tempo leva e o que está incluído no resultado.",
    keywords: "FAQ teste QI, dúvidas teste inteligência, perguntas teste QI, como funciona teste QI, teste QI grátis, resultado teste QI, tempo teste inteligência, teste QI online dúvidas, perguntas frequentes QI, teste QI confiável",
    url: "https://bomqi.com.br/perguntas-frequentes",
  });

  const faqs = [
    {
      question: "O teste de QI é realmente preciso?",
      answer: "Sim! Nosso teste é baseado em metodologias psicométricas validadas e questões cuidadosamente elaboradas por especialistas. Comparamos suas respostas com um banco de dados de milhares de participantes para calcular seu QI com precisão. No entanto, como qualquer teste online, ele deve ser considerado uma estimativa educacional, não um diagnóstico clínico formal."
    },
    {
      question: "Quanto tempo demora para fazer o teste?",
      answer: "O teste completo leva em média de 3 a 5 minutos. São 30 questões no total, e você pode responder no seu próprio ritmo. Não há limite de tempo, mas recomendamos responder de forma natural sem passar muito tempo em cada questão para obter o resultado mais preciso."
    },
    {
      question: "O que está incluído no resultado completo?",
      answer: "Com o resultado completo, você recebe: seu QI exato com análise detalhada, seu percentil (posição comparada à população), comparação com QI de celebridades e gênios, análise da sua força cognitiva dominante, dicas personalizadas para desenvolver sua inteligência, diagnóstico completo com pontos fortes e áreas de melhoria, e um badge exclusivo para compartilhar no WhatsApp."
    },
    {
      question: "Posso fazer o teste mais de uma vez?",
      answer: "Sim, você pode refazer o teste quando quiser! No entanto, recomendamos esperar pelo menos 6 meses entre testes para obter resultados mais confiáveis, já que você pode se lembrar das questões. O QI é relativamente estável ao longo da vida adulta, mas pode melhorar com treino cognitivo."
    },
    {
      question: "O que significa um QI de 100?",
      answer: "Um QI de 100 representa a média da população. A escala de QI é normalizada para que 100 seja exatamente o ponto médio. Cerca de 68% das pessoas têm QI entre 85 e 115, e 95% entre 70 e 130. Um QI acima de 130 é considerado excepcionalmente alto, e abaixo de 70 indica desafios cognitivos."
    },
    {
      question: "O resultado é anônimo?",
      answer: "Completamente! Não solicitamos nenhuma informação pessoal identificável durante o teste. Suas respostas são processadas de forma anônima e usadas apenas para calcular seu resultado individual. Você tem total controle sobre compartilhar ou não seu resultado."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "O pagamento é único, seguro e processado de forma criptografada. Após completar o teste gratuito, você verá a opção de desbloquear o resultado completo. Aceitamos as principais formas de pagamento e você recebe acesso instantâneo ao seu resultado detalhado assim que o pagamento é confirmado."
    },
    {
      question: "Posso compartilhar meu resultado?",
      answer: "Sim! Com o resultado completo, você recebe um badge exclusivo otimizado para compartilhar no WhatsApp, Instagram e outras redes sociais. É uma forma divertida de desafiar seus amigos a fazerem o teste também e compararem os resultados."
    },
    {
      question: "O teste avalia apenas inteligência lógica?",
      answer: "Não! Nosso teste avalia múltiplos aspectos da inteligência, incluindo: raciocínio lógico-matemático, compreensão verbal, pensamento abstrato, resolução de problemas, reconhecimento de padrões e agilidade mental. Isso proporciona uma visão mais completa da sua inteligência cognitiva."
    },
    {
      question: "Crianças podem fazer o teste?",
      answer: "Nosso teste é calibrado para adultos e adolescentes a partir de 16 anos. Para crianças mais jovens, recomendamos testes de QI específicos para cada faixa etária, pois o desenvolvimento cognitivo varia significativamente na infância."
    },
    {
      question: "Como posso melhorar meu QI?",
      answer: "Sim, é possível melhorar! Com o resultado completo, você recebe dicas personalizadas baseadas no seu perfil. Algumas estratégias gerais incluem: praticar jogos de lógica e quebra-cabeças, ler regularmente conteúdo desafiador, aprender novas habilidades (idiomas, instrumentos musicais), praticar exercícios físicos regulares, dormir bem e manter uma alimentação saudável."
    },
    {
      question: "O que é o percentil?",
      answer: "O percentil indica sua posição em relação a outras pessoas. Por exemplo, se você está no percentil 85, significa que você pontuou melhor que 85% da população e está no TOP 15% das pessoas. É uma forma mais intuitiva de entender onde você se posiciona comparado a outras pessoas."
    }
  ];

  // Structured Data para FAQPage (Rich Results)
  useStructuredData([
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => navigate("/")}
            >
              <Brain className="w-8 h-8 text-primary" />
              <div className="text-2xl font-bold">BomQI</div>
            </div>
            <Button onClick={() => navigate("/teste")} size="lg">
              Fazer o Teste
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
            <HelpCircle className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl font-bold mb-4">Perguntas Frequentes</h1>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre o teste de QI do BomQI
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-background/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center bg-gradient-to-br from-primary/5 to-background rounded-lg p-8 shadow-elegant">
          <h2 className="text-3xl font-bold mb-4">
            Ainda tem dúvidas?
          </h2>
          <p className="text-muted-foreground mb-6">
            A melhor forma de entender é fazendo o teste! São apenas 3 minutos.
          </p>
          <Button onClick={() => navigate("/teste")} size="lg" className="shadow-elegant">
            Fazer o Teste Agora
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PerguntasFrequentes;
