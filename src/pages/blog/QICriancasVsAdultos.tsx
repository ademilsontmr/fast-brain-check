import { Brain, ArrowRight, BookOpen, Users, BarChart3, CheckCircle2, AlertCircle } from "lucide-react";
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
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const QICriancasVsAdultos = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/qi-criancas-vs-adultos";
  const articleTitle = "QI de Crianças vs. QI de Adultos: Diferenças e Comparações";
  const articleDescription = "QI de crianças vs. QI de adultos: quais as diferenças? Descubra como QI muda com a idade. Teste seu QI rapidamente!";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "QICriancasVsAdultos, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-criancas-vs-adultos",
      publishDate: "2024-01-01",
    })
  );

  const relatedArticles = getRelatedArticles("qi-criancas-vs-adultos");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>QI de Crianças vs. QI de Adultos</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          QI de Crianças vs. QI de Adultos: Diferenças e Comparações
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Users className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            "Qual a diferença entre QI de crianças e QI de adultos?" é uma pergunta importante sobre desenvolvimento 
            cognitivo. <strong>QI de crianças e adultos são medidos e interpretados de forma diferente</strong>, com 
            testes específicos para cada faixa etária. Neste artigo, explicamos as diferenças e como comparar QI 
            entre crianças e adultos.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Diferenças Fundamentais</h2>
          
          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">
                  Principais Diferenças
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>Testes diferentes:</strong> WISC para crianças, WAIS para adultos
                </p>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>Normalização:</strong> QI ajustado para idade em ambos os casos
                </p>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>Desenvolvimento:</strong> QI de crianças muda mais rapidamente
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI de Crianças</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Características</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Teste usado:</strong> WISC (Wechsler Intelligence Scale for Children)</li>
            <li><strong>Idade:</strong> 6-16 anos</li>
            <li><strong>Normalização:</strong> Comparado com crianças da mesma idade</li>
            <li><strong>Mudanças:</strong> QI pode mudar significativamente durante desenvolvimento</li>
            <li><strong>Plasticidade:</strong> Alta neuroplasticidade e capacidade de mudança</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Desenvolvimento</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Crescimento rápido:</strong> QI aumenta rapidamente na infância</li>
            <li><strong>Fatores:</strong> Educação, nutrição, estimulação cognitiva</li>
            <li><strong>Variação:</strong> Mudanças de até 20-30 pontos são possíveis</li>
            <li><strong>Estabilização:</strong> Começa a estabilizar na adolescência</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI de Adultos</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Características</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Teste usado:</strong> WAIS (Wechsler Adult Intelligence Scale)</li>
            <li><strong>Idade:</strong> 16+ anos</li>
            <li><strong>Normalização:</strong> Comparado com adultos da mesma idade</li>
            <li><strong>Estabilidade:</strong> QI tende a ser mais estável</li>
            <li><strong>Consistência:</strong> Menos variação ao longo do tempo</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Estabilidade</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Mudanças menores:</strong> Variações de 5-10 pontos são comuns</li>
            <li><strong>Fatores:</strong> Educação continuada, treinamento cognitivo</li>
            <li><strong>Consistência:</strong> QI geralmente permanece relativamente constante</li>
            <li><strong>Declínio:</strong> Possível declínio na terceira idade</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Comparação Direta</h2>
          
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">
              Diferenças Principais
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• <strong>Desenvolvimento:</strong> Crianças têm maior plasticidade cognitiva</li>
              <li>• <strong>Mudanças:</strong> QI de crianças muda mais rapidamente</li>
              <li>• <strong>Estabilidade:</strong> QI de adultos é mais estável</li>
              <li>• <strong>Testes:</strong> Instrumentos diferentes para cada faixa etária</li>
              <li>• <strong>Interpretação:</strong> Contexto e desenvolvimento são importantes</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Pode-se Comparar QI de Crianças e Adultos?</h2>
          
          <p className="mb-4">
            <strong>Comparar QI de crianças e adultos diretamente é complexo:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Testes diferentes:</strong> WISC vs. WAIS têm estruturas diferentes</li>
            <li><strong>Normalização:</strong> Cada um é comparado com seu próprio grupo etário</li>
            <li><strong>Desenvolvimento:</strong> Crianças estão em desenvolvimento contínuo</li>
            <li><strong>Contexto:</strong> Interpretação deve considerar idade e desenvolvimento</li>
            <li><strong>Previsão:</strong> QI de crianças pode prever QI de adultos, mas não é garantia</li>
          </ul>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">
                  Importante
                </h3>
                <p className="text-amber-800 dark:text-amber-200">
                  <strong>QI de crianças e adultos não devem ser comparados diretamente</strong>. Cada faixa etária 
                  tem seu próprio teste e normalização. O importante é entender o desenvolvimento cognitivo e como QI 
                  pode mudar ao longo da vida.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          
          <p className="mb-4">
            <strong>QI de crianças e adultos são medidos com testes diferentes (WISC vs. WAIS) e têm características 
            distintas</strong>. Crianças têm maior plasticidade cognitiva e QI pode mudar significativamente, enquanto 
            adultos têm QI mais estável.
          </p>

          <p className="mb-4">
            É importante entender que <strong>QI de crianças e adultos não devem ser comparados diretamente</strong>. 
            Cada faixa etária tem seu próprio contexto de desenvolvimento e interpretação.
          </p>

          <p className="mb-4">
            Quer descobrir seu QI? Faça nosso teste científico validado e receba uma análise completa de suas 
            capacidades cognitivas.
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
            Faça nosso teste científico validado e descubra seu QI. 
            Receba uma análise completa de suas capacidades cognitivas.
          </p>
          <Link to="/teste">
            <Button size="lg" className="gap-2">
              Fazer o Teste Agora
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">Continue Lendo</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                <Card
                  key={article.slug}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 group cursor-pointer"
                >
                  <Link to={`/blog/${article.slug}`} className="block">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Ler artigo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Social Proof Carousel */}
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

export default QICriancasVsAdultos;


