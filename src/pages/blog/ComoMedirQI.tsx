import { Ruler, ArrowRight, BookOpen } from "lucide-react";
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

const ComoMedirQI = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/como-medir-qi";
  const articleTitle = "Como Medir QI: Métodos, Testes e O Que Esperar";
  const articleDescription =
    "Aprenda como medir QI de forma confiável: testes padronizados, avaliação profissional, testes online e limitações de cada método.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "como-medir-qi",
      publishDate: "2026-05-08",
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
          <span>Como medir QI</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Maio de 2026</time>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Ruler className="w-24 h-24 text-primary" />
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Saber <strong>como medir QI</strong> começa por escolher o método certo: testes padronizados aplicados por
            psicólogo, baterias como WAIS ou Raven, ou triagens online rápidas para uma estimativa inicial.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-6">Principais formas de medir QI</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li><strong>Avaliação clínica:</strong> psicólogo aplica WAIS-IV ou WISC e entrega laudo com QI total e índices</li>
            <li><strong>Testes não verbais:</strong> Matrizes de Raven — úteis quando há barreira de idioma ou leitura</li>
            <li><strong>Testes online:</strong> estimativa rápida; ideal para curiosidade, não para diagnóstico</li>
            <li><strong>Mensa e associações:</strong> testes de admissão com corte alto (geralmente QI ≥ 130)</li>
          </ul>
          <h2 className="text-3xl font-bold mt-12 mb-6">Passo a passo prático</h2>
          <ol className="list-decimal pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Defina o objetivo: curiosidade, escola, processo seletivo ou investigação clínica</li>
            <li>Escolha um teste validado para sua idade e contexto</li>
            <li>Faça em ambiente calmo, descansado e sem interrupções</li>
            <li>Compare o resultado com a <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela de QI</Link></li>
          </ol>
          <p className="text-muted-foreground mb-4">
            Para critérios de confiabilidade, leia nosso guia sobre{" "}
            <Link to="/blog/teste-qi-confiavel" className="text-primary hover:underline">teste de QI confiável</Link>.
          </p>
        </div>
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Meça seu QI agora</h3>
          <p className="text-muted-foreground mb-6">Teste rápido e gratuito no BomQI — resultado em minutos.</p>
          <Button size="lg" className="gap-2" onClick={() => navigate("/teste")}>
            Iniciar Teste <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Continue Lendo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("como-medir-qi", 3).map((article) => (
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

export default ComoMedirQI;
