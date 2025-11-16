import { Brain, ArrowRight, BookOpen, Calculator, BarChart3, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const ComoQIECalculado = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/como-qi-e-calculado";
  const articleTitle = "Como o QI é Calculado? Métodos Usados Hoje";
  const articleDescription = "Como o QI é calculado? Descubra os métodos científicos usados hoje. Teste seu QI rapidamente e descubra sua inteligência!";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "como-qi-e-calculado",
      publishDate: "2024-01-01",
    })
  );

  const relatedArticles = getRelatedArticles("como-qi-e-calculado");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Brain className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">BomQI</span>
            </Link>
            <Button onClick={() => navigate("/teste")} size="lg">
              Fazer o Teste
            </Button>
          </div>
        </div>
      </header>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Como o QI é Calculado?</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Como o QI é Calculado? Métodos Usados Hoje
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Calculator className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            "Como o QI é calculado?" é uma pergunta fundamental sobre testes de inteligência. <strong>QI é calculado através de 
            métodos científicos padronizados</strong> que comparam o desempenho de uma pessoa com uma população de referência. 
            Neste artigo, explicamos os métodos usados hoje para calcular QI.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Métodos de Cálculo de QI</h2>
          
          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">
                  Processo de Cálculo
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>1. Aplicação do teste:</strong> pessoa responde questões padronizadas
                </p>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>2. Pontuação bruta:</strong> número de acertos é contabilizado
                </p>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>3. Normalização:</strong> pontuação é comparada com população de referência
                </p>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>4. QI final:</strong> resultado é ajustado para idade e grupo populacional
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Testes Padronizados</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. WAIS (Wechsler Adult Intelligence Scale)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Para adultos:</strong> 16 anos ou mais</li>
            <li><strong>Subtestes:</strong> 10 principais + 5 suplementares</li>
            <li><strong>Áreas:</strong> compreensão verbal, raciocínio perceptivo, memória de trabalho, velocidade de processamento</li>
            <li><strong>QI total:</strong> média ponderada dos índices</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. WISC (Wechsler Intelligence Scale for Children)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Para crianças:</strong> 6-16 anos</li>
            <li><strong>Subtestes:</strong> adaptados para idade</li>
            <li><strong>Normalização:</strong> ajustado para idade cronológica</li>
            <li><strong>QI total:</strong> média dos índices principais</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Stanford-Binet</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Histórico:</strong> um dos primeiros testes de QI</li>
            <li><strong>Versão atual:</strong> 5ª edição (SB5)</li>
            <li><strong>Áreas:</strong> raciocínio fluido, conhecimento, raciocínio quantitativo, processamento visual-espacial, memória de trabalho</li>
            <li><strong>QI total:</strong> média dos fatores</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Fórmula de Cálculo</h2>
          
          <p className="mb-4">
            <strong>QI é calculado usando a fórmula:</strong>
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 my-8">
            <p className="text-lg font-mono text-center">
              <strong>QI = (Pontuação Bruta / Idade Mental) × 100</strong>
            </p>
            <p className="text-sm text-muted-foreground text-center mt-2">
              (Método tradicional, hoje usa-se normalização estatística)
            </p>
          </div>

          <p className="mb-4">
            <strong>Método moderno:</strong> QI é calculado através de normalização estatística, comparando a pontuação bruta com 
            uma distribuição normal padronizada (média = 100, desvio padrão = 15).
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Normalização e Padronização</h2>
          
          <p className="mb-4">
            <strong>Normalização é essencial</strong> para calcular QI:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Amostra representativa:</strong> teste aplicado em milhares de pessoas</li>
            <li><strong>Distribuição normal:</strong> resultados seguem curva de Gauss</li>
            <li><strong>Ajuste por idade:</strong> QI ajustado para idade cronológica</li>
            <li><strong>Grupo populacional:</strong> comparação com grupo similar</li>
            <li><strong>Pontuação padronizada:</strong> conversão para escala QI (média 100, DP 15)</li>
          </ul>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">
                  Importante
                </h3>
                <p className="text-amber-800 dark:text-amber-200">
                  <strong>QI não é uma medida absoluta</strong>. QI é uma medida relativa que compara uma pessoa com uma população 
                  de referência. O mesmo desempenho pode resultar em QI diferente dependendo da população de comparação e da idade.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          
          <p className="mb-4">
            <strong>QI é calculado através de métodos científicos padronizados</strong> que comparam o desempenho de uma pessoa com 
            uma população de referência. Testes como WAIS, WISC e Stanford-Binet usam normalização estatística para calcular QI 
            (média 100, desvio padrão 15).
          </p>

          <p className="mb-4">
            O importante é entender que <strong>QI é uma medida relativa</strong>, não absoluta. QI compara uma pessoa com uma 
            população de referência e é ajustado para idade e grupo populacional.
          </p>

          <p className="mb-4">
            Quer descobrir seu QI calculado com métodos científicos? Faça nosso teste validado e receba uma análise completa de 
            suas capacidades cognitivas.
          </p>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">
            Faça nosso teste científico validado e descubra seu QI calculado. 
            Resultado completo e análise detalhada em minutos.
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

export default ComoQIECalculado;

