import { Brain, ArrowRight, BookOpen, Lightbulb, BarChart3, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const OQueEQI = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/o-que-e-qi";
  const articleTitle = "O que é QI? Explicação Simples e Científica";
  const articleDescription = "O que é QI? Descubra o que significa quociente de inteligência. Explicação simples e científica. Teste seu QI rapidamente!";
  
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
      slug: "o-que-e-qi",
      publishDate: "2024-01-01",
    })
  );

  const relatedArticles = getRelatedArticles("o-que-e-qi");

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
          <span>O que é QI?</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          O que é QI? Explicação Simples e Científica
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Lightbulb className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            "O que é QI?" é uma das perguntas mais comuns sobre inteligência. <strong>QI significa Quociente de Inteligência</strong> 
            e é uma medida padronizada da capacidade cognitiva de uma pessoa. Neste artigo, explicamos de forma simples e científica 
            o que é QI, como funciona e o que ele realmente mede.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que Significa QI?</h2>
          
          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">
                  Definição de QI
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>QI (Quociente de Inteligência)</strong> é uma medida padronizada que avalia a capacidade cognitiva de uma pessoa 
                  em relação à população geral.
                </p>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>QI médio: 100</strong> - ponto de referência na escala
                </p>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  QI é calculado através de testes padronizados que avaliam diferentes habilidades cognitivas.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que QI Mede?</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Raciocínio Lógico</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Resolução de problemas:</strong> capacidade de resolver problemas complexos</li>
            <li><strong>Pensamento abstrato:</strong> compreensão de conceitos abstratos</li>
            <li><strong>Padrões:</strong> identificação de padrões e relações</li>
            <li><strong>Lógica:</strong> raciocínio lógico e dedutivo</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Memória de Trabalho</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Retenção:</strong> capacidade de reter informações temporariamente</li>
            <li><strong>Processamento:</strong> processamento simultâneo de múltiplas informações</li>
            <li><strong>Manipulação:</strong> manipulação mental de informações</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Velocidade de Processamento</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Rapidez:</strong> velocidade de processamento de informações</li>
            <li><strong>Eficiência:</strong> eficiência na resolução de tarefas</li>
            <li><strong>Automação:</strong> automação de processos mentais</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Compreensão Verbal</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Vocabulário:</strong> conhecimento e uso de palavras</li>
            <li><strong>Compreensão:</strong> compreensão de textos e conceitos</li>
            <li><strong>Expressão:</strong> capacidade de expressar ideias claramente</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como QI é Medido?</h2>
          
          <p className="mb-4">
            <strong>QI é medido através de testes padronizados</strong> que avaliam diferentes habilidades cognitivas:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Testes padronizados:</strong> WAIS, WISC, Stanford-Binet</li>
            <li><strong>Questões variadas:</strong> raciocínio, memória, velocidade, compreensão</li>
            <li><strong>Pontuação:</strong> resultado comparado com população de referência</li>
            <li><strong>Normalização:</strong> ajuste para idade e grupo populacional</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Escala de QI</h2>
          
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">
              Classificações de QI
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• <strong>QI muito superior (130+):</strong> 2% da população</li>
              <li>• <strong>QI superior (115-130):</strong> 14% da população</li>
              <li>• <strong>QI normal alto (100-115):</strong> 34% da população</li>
              <li>• <strong>QI normal (85-115):</strong> 68% da população</li>
              <li>• <strong>QI normal baixo (85-100):</strong> 34% da população</li>
              <li>• <strong>QI abaixo da média (70-85):</strong> 14% da população</li>
              <li>• <strong>QI muito abaixo da média (&lt;70):</strong> 2% da população</li>
            </ul>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">
                  Importante
                </h3>
                <p className="text-amber-800 dark:text-amber-200">
                  <strong>QI não mede tudo sobre inteligência</strong>. QI mede principalmente habilidades cognitivas específicas, 
                  mas não captura criatividade, inteligência emocional, sabedoria prática ou outros tipos de inteligência. QI é uma 
                  ferramenta útil, mas não define completamente uma pessoa.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          
          <p className="mb-4">
            <strong>QI é uma medida padronizada da capacidade cognitiva</strong> que avalia raciocínio lógico, memória, velocidade de 
            processamento e compreensão verbal. QI médio é 100, e a maioria das pessoas (68%) tem QI entre 85-115.
          </p>

          <p className="mb-4">
            É importante lembrar que <strong>QI não mede tudo sobre inteligência</strong>. QI é uma ferramenta útil para entender 
            capacidades cognitivas, mas não define completamente uma pessoa ou seu potencial.
          </p>

          <p className="mb-4">
            Quer descobrir seu QI? Faça nosso teste científico validado e receba uma análise completa de suas capacidades cognitivas.
          </p>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">
            Faça nosso teste científico validado e descubra seu QI. 
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

export default OQueEQI;

