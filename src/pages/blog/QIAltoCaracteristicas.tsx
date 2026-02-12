import { Brain, ArrowRight, BookOpen, Sparkles, BarChart3, CheckCircle2, AlertCircle } from "lucide-react";
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

const QIAltoCaracteristicas = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/qi-alto-caracteristicas";
  const articleTitle = "QI Alto: Características Reais, Além dos Mitos";
  const articleDescription = "QI alto: características reais além dos mitos. Descubra o que realmente significa ter QI alto. Teste seu QI rapidamente!";
  
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
      slug: "qi-alto-caracteristicas",
      publishDate: "2024-01-01",
    })
  );

  const relatedArticles = getRelatedArticles("qi-alto-caracteristicas");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>QI Alto: Características Reais</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          QI Alto: Características Reais, Além dos Mitos
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Sparkles className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            "O que significa ter QI alto?" é uma pergunta cercada de mitos e estereótipos. <strong>QI alto (130+) é 
            caracterizado por habilidades cognitivas superiores</strong>, mas vai além dos mitos comuns. Neste artigo, 
            exploramos as características reais de pessoas com QI alto, além dos mitos populares.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que é QI Alto?</h2>
          
          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">
                  Definição de QI Alto
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>QI alto: 130+</strong> (2% da população)
                </p>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>QI muito superior:</strong> 130-145
                </p>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>QI excepcional:</strong> 145+ (0.1% da população)
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Características Reais de QI Alto</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Raciocínio Lógico Avançado</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Resolução de problemas:</strong> capacidade superior de resolver problemas complexos</li>
            <li><strong>Pensamento abstrato:</strong> compreensão profunda de conceitos abstratos</li>
            <li><strong>Padrões:</strong> identificação rápida de padrões e relações</li>
            <li><strong>Lógica:</strong> raciocínio lógico e dedutivo avançado</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Memória de Trabalho Superior</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Retenção:</strong> capacidade superior de reter e processar informações</li>
            <li><strong>Multitarefa:</strong> processamento simultâneo de múltiplas informações</li>
            <li><strong>Manipulação:</strong> manipulação mental eficiente de informações complexas</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Velocidade de Processamento</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Rapidez:</strong> processamento rápido de informações</li>
            <li><strong>Eficiência:</strong> resolução eficiente de tarefas cognitivas</li>
            <li><strong>Automação:</strong> automação rápida de processos mentais</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Curiosidade e Aprendizado</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Curiosidade:</strong> interesse profundo em aprender e explorar</li>
            <li><strong>Aprendizado:</strong> aprendizado rápido e eficiente</li>
            <li><strong>Autodidatismo:</strong> capacidade de aprender independentemente</li>
            <li><strong>Interesses:</strong> interesses diversos e profundos</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Mitos Sobre QI Alto</h2>
          
          <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-red-900 dark:text-red-100">
              Mitos Comuns
            </h3>
            <ul className="space-y-2 text-red-800 dark:text-red-200">
              <li>❌ <strong>Mito:</strong> Pessoas com QI alto são sempre bem-sucedidas</li>
              <li>❌ <strong>Mito:</strong> QI alto significa ser bom em tudo</li>
              <li>❌ <strong>Mito:</strong> Pessoas com QI alto são socialmente isoladas</li>
              <li>❌ <strong>Mito:</strong> QI alto garante sucesso na vida</li>
              <li>❌ <strong>Mito:</strong> Pessoas com QI alto não precisam estudar</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Realidades Sobre QI Alto</h2>
          
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">
              Realidades
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>✅ <strong>Realidade:</strong> QI alto não garante sucesso; outros fatores são importantes</li>
              <li>✅ <strong>Realidade:</strong> Pessoas com QI alto podem ter áreas de dificuldade</li>
              <li>✅ <strong>Realidade:</strong> Habilidades sociais variam independentemente de QI</li>
              <li>✅ <strong>Realidade:</strong> Esforço e dedicação ainda são necessários</li>
              <li>✅ <strong>Realidade:</strong> QI alto é uma ferramenta, não uma garantia</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Desafios de Pessoas com QI Alto</h2>
          
          <p className="mb-4">
            <strong>Pessoas com QI alto enfrentam desafios únicos:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Expectativas:</strong> expectativas elevadas de si mesmas e de outros</li>
            <li><strong>Perfeccionismo:</strong> tendência ao perfeccionismo e autocrítica</li>
            <li><strong>Isolamento:</strong> dificuldade em encontrar pessoas com interesses similares</li>
            <li><strong>Tédio:</strong> tédio com tarefas que não desafiam</li>
            <li><strong>Ansiedade:</strong> ansiedade e sobrecarga mental</li>
          </ul>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">
                  Importante
                </h3>
                <p className="text-amber-800 dark:text-amber-200">
                  <strong>QI alto não define uma pessoa completamente</strong>. QI alto é uma ferramenta que pode ser 
                  usada de forma positiva ou negativa. Sucesso, felicidade e realização dependem de múltiplos fatores, 
                  incluindo inteligência emocional, habilidades sociais, esforço e oportunidades.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          
          <p className="mb-4">
            <strong>QI alto (130+) é caracterizado por habilidades cognitivas superiores</strong>, incluindo raciocínio 
            lógico avançado, memória de trabalho superior, velocidade de processamento e curiosidade. No entanto, QI alto 
            não garante sucesso e vem com desafios únicos.
          </p>

          <p className="mb-4">
            É importante entender que <strong>QI alto é uma ferramenta, não uma garantia</strong>. Sucesso, felicidade e 
            realização dependem de múltiplos fatores, incluindo inteligência emocional, habilidades sociais, esforço e 
            oportunidades.
          </p>

          <p className="mb-4">
            Quer descobrir se você tem QI alto? Faça nosso teste científico validado e receba uma análise completa de 
            suas capacidades cognitivas.
          </p>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">
            Faça nosso teste científico validado e descubra seu QI. 
            Veja se você tem QI alto e receba uma análise completa.
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

export default QIAltoCaracteristicas;


