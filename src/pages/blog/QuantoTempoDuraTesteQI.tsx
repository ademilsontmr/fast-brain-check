import { Clock, ArrowRight, BookOpen } from "lucide-react";
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

const QuantoTempoDuraTesteQI = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/quanto-tempo-dura-teste-qi";
  const articleTitle = "Quanto Tempo Dura um Teste de QI? Duração por Tipo";
  const articleDescription = "Descubra quanto tempo dura um teste de QI: online, WAIS, Raven, Mensa e fatores que aumentam ou reduzem o tempo.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "quanto-tempo-dura-teste-qi",
      publishDate: "2026-05-17",
    })
  );

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Duração do teste</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>17 de Maio de 2026</time>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Clock className="w-24 h-24 text-primary" />
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            A <strong>duração do teste de QI</strong> varia muito: de 15 minutos em triagens online até 2 horas em baterias
            completas como a WAIS aplicada por psicólogo.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-6">Tempo médio por tipo</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li><strong>Teste online (BomQI):</strong> 10–20 minutos</li>
            <li><strong>Matrizes de Raven:</strong> 40–60 minutos</li>
            <li><strong>WAIS-IV completa:</strong> 60–120 minutos + entrevista</li>
            <li><strong>Mensa:</strong> cerca de 2 horas com instruções</li>
          </ul>
          <h2 className="text-3xl font-bold mt-12 mb-6">O que influencia o tempo</h2>
          <p className="text-muted-foreground mb-4">
            Idade, fadiga, ansiedade e pausas alteram o desempenho. Descanse bem e evite interrupções. Veja{" "}
            <Link to="/blog/como-se-preparar-teste-qi" className="text-primary hover:underline">como se preparar para o teste</Link>.
          </p>
        </div>
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra seu QI</h3>
          <p className="text-muted-foreground mb-6">Teste gratuito no BomQI — resultado em minutos.</p>
          <Button size="lg" className="gap-2" onClick={() => navigate("/teste")}>
            Fazer o Teste <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Continue Lendo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("quanto-tempo-dura-teste-qi", 3).map((article) => (
              <Card key={article.slug} className="p-6 hover:shadow-lg border-2 border-primary/20">
                <Link to={`/blog/${article.slug}`}>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">{article.category}</span>
                  <h3 className="text-lg font-bold mt-3 mb-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{article.description}</p>
                </Link>
              </Card>
            ))}
          </div>
        </div>
        <section className="mt-16"><SocialProofCarousel /></section>
      </article>
      <Footer />
    </div>
  );
};

export default QuantoTempoDuraTesteQI;
