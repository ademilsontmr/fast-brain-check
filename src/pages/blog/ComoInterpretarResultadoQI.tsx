import { Brain, ArrowRight, BookOpen, BarChart3, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const ComoInterpretarResultadoQI = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/como-interpretar-resultado-qi";
  const articleTitle = "Como Interpretar Seu Resultado de QI: Guia Completo";
  const articleDescription = "Como interpretar seu resultado de QI? Descubra o que significa sua pontuação. Guia completo e científico. Teste seu QI rapidamente!";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "interpretar resultado QI, entender pontuação QI, resultado teste QI, análise QI, compreender QI, significado pontuação QI, avaliar resultado QI, interpretação teste inteligência, entender score QI, análise resultado QI",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "como-interpretar-resultado-qi",
      publishDate: "2024-01-01",
    })
  );

  const relatedArticles = getRelatedArticles("como-interpretar-resultado-qi");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Como Interpretar Seu Resultado de QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Como Interpretar Seu Resultado de QI: Guia Completo
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <BarChart3 className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            "Como interpretar meu resultado de QI?" é uma pergunta comum após fazer um teste. <strong>Interpretar 
            resultado de QI requer entender a escala, percentis e o que a pontuação realmente significa</strong>. 
            Neste artigo, explicamos como interpretar seu resultado de QI de forma clara e científica.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Entendendo a Escala de QI</h2>
          
          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">
                  Escala Padrão de QI
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>QI médio: 100</strong> (ponto de referência)
                </p>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>Desvio padrão: 15</strong> (variação normal)
                </p>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>68% das pessoas</strong> têm QI entre 85-115 (faixa normal)
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Classificações de QI</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">QI Muito Superior (130+)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Percentil:</strong> 98º ou superior</li>
            <li><strong>Significado:</strong> QI muito acima da média</li>
            <li><strong>O que significa:</strong> Capacidades cognitivas excepcionais</li>
            <li><strong>Contexto:</strong> Apenas 2% da população</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">QI Superior (115-130)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Percentil:</strong> 84º-98º</li>
            <li><strong>Significado:</strong> QI acima da média</li>
            <li><strong>O que significa:</strong> Capacidades cognitivas superiores</li>
            <li><strong>Contexto:</strong> 14% da população</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">QI Normal (85-115)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Percentil:</strong> 16º-84º</li>
            <li><strong>Significado:</strong> QI dentro da faixa normal</li>
            <li><strong>O que significa:</strong> Capacidades cognitivas normais</li>
            <li><strong>Contexto:</strong> 68% da população (maioria)</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">QI Abaixo da Média (70-85)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Percentil:</strong> 2º-16º</li>
            <li><strong>Significado:</strong> QI abaixo da média</li>
            <li><strong>O que significa:</strong> Pode precisar de apoio adicional</li>
            <li><strong>Contexto:</strong> 14% da população</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Interpretar Percentis</h2>
          
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">
              Entendendo Percentis
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• <strong>Percentil 50:</strong> QI médio (100) - você está na média</li>
              <li>• <strong>Percentil 75:</strong> QI 115 - você está acima de 75% das pessoas</li>
              <li>• <strong>Percentil 90:</strong> QI 120 - você está acima de 90% das pessoas</li>
              <li>• <strong>Percentil 95:</strong> QI 125 - você está acima de 95% das pessoas</li>
              <li>• <strong>Percentil 98:</strong> QI 130 - você está acima de 98% das pessoas</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Fatores a Considerar</h2>
          
          <p className="mb-4">
            <strong>Ao interpretar seu resultado de QI, considere:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Idade:</strong> QI é ajustado para idade cronológica</li>
            <li><strong>Contexto:</strong> QI mede habilidades cognitivas específicas</li>
            <li><strong>Limitações:</strong> QI não mede tudo sobre inteligência</li>
            <li><strong>Variação:</strong> QI pode variar entre testes diferentes</li>
            <li><strong>Fatores externos:</strong> Fadiga, estresse e saúde afetam resultados</li>
          </ul>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">
                  Importante
                </h3>
                <p className="text-amber-800 dark:text-amber-200">
                  <strong>QI não define seu potencial</strong>. QI é uma medida de habilidades cognitivas específicas, 
                  mas não captura criatividade, inteligência emocional, sabedoria prática, motivação ou outros fatores 
                  importantes para o sucesso na vida.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          
          <p className="mb-4">
            <strong>Interpretar resultado de QI requer entender a escala (média 100, DP 15), percentis e classificações</strong>. 
            QI médio é 100, e a maioria das pessoas (68%) tem QI entre 85-115. Percentis mostram como você se compara com 
            a população geral.
          </p>

          <p className="mb-4">
            É importante lembrar que <strong>QI não define seu potencial completamente</strong>. QI mede habilidades 
            cognitivas específicas, mas não captura todas as formas de inteligência ou fatores importantes para o sucesso.
          </p>

          <p className="mb-4">
            Quer descobrir seu QI e receber uma interpretação completa? Faça nosso teste científico validado e receba 
            uma análise detalhada de suas capacidades cognitivas.
          </p>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">
            Faça nosso teste científico validado e descubra seu QI. 
            Receba uma interpretação completa e análise detalhada.
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

export default ComoInterpretarResultadoQI;


