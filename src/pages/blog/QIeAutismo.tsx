import { Brain, ArrowRight, BookOpen, Clock, Puzzle, Lightbulb, Target, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleFAQ from "@/components/ArticleFAQ";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";

const QIeAutismo = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/qi-e-autismo";
  const articleTitle = "QI e Autismo: Entendendo a Inteligência no Espectro Autista";
  const articleDescription = "Descubra a relação entre QI e autismo, como a inteligência se manifesta no espectro autista e os diferentes perfis cognitivos.";
  const publishDate = "2024-01-15";
  const modifiedDate = "2024-01-15";
  
  useSEO({
    title: "QI e Autismo",
    description: articleDescription,
    url: articleUrl,
    keywords: "QI autismo, inteligência autista, autismo cognição, QI TEA, autismo cérebro, QI espectro autista, autismo desenvolvimento cognitivo, inteligência autismo, QI transtorno autista, autismo mente",
  });

  useStructuredData([
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": articleTitle,
      "description": articleDescription,
      "image": "https://bomqi.com.br/favicon-brain-icon.png",
      "datePublished": publishDate,
      "dateModified": modifiedDate,
      "author": { "@type": "Organization", "name": "Equipe Bom QI" },
      "publisher": { "@type": "Organization", "name": "Equipe Bom QI", "logo": { "@type": "ImageObject", "url": "https://bomqi.com.br/favicon-brain-icon.png" } }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bomqi.com.br" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://bomqi.com.br/blog" },
        { "@type": "ListItem", "position": 3, "name": articleTitle, "item": articleUrl }
      ]
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>QI e Autismo</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2024</time>
          <span>•</span>
          <span>10 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Puzzle className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            A relação entre QI e autismo é complexa e frequentemente mal compreendida. O Transtorno 
            do Espectro Autista (TEA) apresenta uma grande variabilidade de perfis cognitivos, 
            desde deficiência intelectual até superdotação.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Variabilidade do QI no Autismo</h2>
          <p className="mb-4">
            Diferente do que muitos pensam, pessoas no espectro autista apresentam toda a gama 
            de níveis de QI. Estudos recentes mostram uma distribuição mais ampla do que na 
            população geral.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Distribuição de QI no TEA
            </h3>
            <ul className="space-y-2">
              <li>• <strong>~30%:</strong> Deficiência intelectual (QI menor que  70)</li>
              <li>• <strong>~25%:</strong> Limítrofe (QI 70-84)</li>
              <li>• <strong>~30%:</strong> Média (QI 85-115)</li>
              <li>• <strong>~15%:</strong> Acima da média ou superdotação (QI &gt; 115)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Perfil Cognitivo Único</h2>
          <p className="mb-4">
            Pessoas autistas frequentemente apresentam um perfil cognitivo "irregular", com 
            grandes diferenças entre habilidades. Isso pode fazer com que testes de QI 
            tradicionais não capturem adequadamente suas capacidades.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Pontos Fortes Comuns</h3>
          <ul className="mb-4">
            <li>• Atenção a detalhes</li>
            <li>• Memória para fatos e dados</li>
            <li>• Reconhecimento de padrões</li>
            <li>• Pensamento sistemático</li>
            <li>• Habilidades visuais-espaciais</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Desafios Comuns</h3>
          <ul className="mb-4">
            <li>• Comunicação social</li>
            <li>• Flexibilidade cognitiva</li>
            <li>• Processamento de linguagem abstrata</li>
            <li>• Função executiva</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Síndrome de Savant</h2>
          <p className="mb-4">
            Cerca de 10% das pessoas autistas apresentam habilidades savant - capacidades 
            extraordinárias em áreas específicas como música, arte, cálculo ou memória.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <Star className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Habilidades Savant</h3>
              <p className="text-sm">
                Podem incluir cálculo calendário, memória fotográfica, habilidades musicais 
                excepcionais ou capacidade artística extraordinária.
              </p>
            </Card>
            
            <Card className="p-6">
              <Lightbulb className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Hiperfoco</h3>
              <p className="text-sm">
                A capacidade de concentração intensa em áreas de interesse pode levar 
                a expertise profunda em campos específicos.
              </p>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Desafios na Avaliação de QI</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Limitações dos Testes Tradicionais</h3>
            <ul className="space-y-3">
              <li><strong>Comunicação:</strong> Dificuldades de comunicação podem afetar respostas</li>
              <li><strong>Ambiente:</strong> Sensibilidades sensoriais podem impactar desempenho</li>
              <li><strong>Motivação:</strong> Falta de interesse em tarefas pode subestimar capacidade</li>
              <li><strong>Tempo:</strong> Necessidade de mais tempo para processamento</li>
              <li><strong>Formato:</strong> Testes verbais podem não capturar inteligência não-verbal</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Autismo de Alto Funcionamento</h2>
          <p className="mb-4">
            Pessoas com autismo de alto funcionamento (anteriormente chamado de Síndrome de Asperger) 
            frequentemente têm QI na média ou acima. Muitos se destacam em áreas como:
          </p>
          <ul className="mb-4">
            <li>• Ciência e tecnologia</li>
            <li>• Matemática</li>
            <li>• Engenharia</li>
            <li>• Artes</li>
            <li>• Música</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Neurodiversidade e Inteligência</h2>
          <p className="mb-4">
            O movimento da neurodiversidade enfatiza que o autismo representa uma forma diferente 
            de processar informações, não necessariamente inferior. Muitas características 
            autistas podem ser vantajosas em contextos específicos.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Vantagens Cognitivas</h3>
            <ul className="space-y-3">
              <li><strong>Pensamento analítico:</strong> Capacidade de analisar sistemas complexos</li>
              <li><strong>Honestidade:</strong> Comunicação direta e sincera</li>
              <li><strong>Persistência:</strong> Dedicação intensa a tarefas de interesse</li>
              <li><strong>Originalidade:</strong> Perspectivas únicas e criativas</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Apoio e Desenvolvimento</h2>
          <p className="mb-4">
            Independente do nível de QI, pessoas autistas se beneficiam de:
          </p>
          <ul className="mb-4">
            <li>• Intervenção precoce</li>
            <li>• Ambiente adaptado às suas necessidades</li>
            <li>• Foco em pontos fortes</li>
            <li>• Suporte para desafios específicos</li>
            <li>• Aceitação e compreensão</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            A relação entre QI e autismo é muito mais nuançada do que estereótipos sugerem. 
            Pessoas no espectro autista apresentam toda a gama de níveis de inteligência, 
            frequentemente com perfis cognitivos únicos que incluem tanto pontos fortes 
            excepcionais quanto desafios específicos.
          </p>
        </div>
        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "Como este tema se relaciona com inteligência?",
                    "answer": "Este tema está diretamente relacionado ao desenvolvimento cognitivo e expressão da inteligência. Compreender esses conceitos ajuda a maximizar potencial."
          },
          {
                    "question": "Posso aplicar isso na prática?",
                    "answer": "Sim. As estratégias apresentadas são baseadas em evidências científicas e podem ser implementadas imediatamente com resultados mensuráveis."
          },
          {
                    "question": "Quanto tempo para ver resultados?",
                    "answer": "Resultados iniciais em 30-60 dias com prática consistente. Melhorias significativas em 6-12 meses de aplicação sustentada."
          },
          {
                    "question": "Funciona para todas as idades?",
                    "answer": "Sim. Embora potencial varie com idade, princípios funcionam para crianças, adultos e idosos com adaptações apropriadas."
          },
          {
                    "question": "Como medir meu progresso?",
                    "answer": "Faça teste de QI inicial, implemente estratégias por 6 meses, refaça teste. Também monitore desempenho em trabalho/estudos."
          }
]} />


        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">
            Curioso sobre suas habilidades cognitivas? Faça nosso teste de QI em apenas 3 minutos.
          </p>
          <Link to="/teste">
            <Button size="lg" className="gap-2">
              Fazer o Teste de QI
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Continue Lendo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("qi-e-autismo", 3).map((article) => (
              <Card key={article.slug} className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 group cursor-pointer">
                <Link to={`/blog/${article.slug}`} className="block">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">{article.category}</span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" /></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.description}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    Ler artigo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">O que as pessoas estão dizendo</h2>
          </div>
          <SocialProofCarousel />
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default QIeAutismo;
