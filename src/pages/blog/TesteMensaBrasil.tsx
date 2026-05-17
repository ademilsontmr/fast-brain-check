import { Award, ArrowRight, BookOpen } from "lucide-react";
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

const TesteMensaBrasil = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/teste-mensa-brasil";
  const articleTitle = "Teste Mensa Brasil: Como Entrar, Requisitos e O Que Esperar";
  const articleDescription =
    "Guia completo sobre o teste Mensa no Brasil: quem pode fazer, pontuação mínima, como se inscrever e diferença entre Mensa e testes de QI comuns.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "teste-mensa-brasil",
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
          <span>Mensa Brasil</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>17 de Maio de 2026</time>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-amber-500/20 to-amber-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Award className="w-24 h-24 text-amber-600" />
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            A <strong>Mensa</strong> é a maior sociedade de alto QI do mundo. No Brasil, a admissão exige pontuação no
            top 2% da população — em escala padronizada, geralmente QI 130 ou superior em teste supervisionado.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-6">Como funciona o teste Mensa Brasil</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Inscrição pelo site oficial da Mensa Brasil com taxa de candidatura</li>
            <li>Prova presencial ou sessão autorizada com teste padronizado</li>
            <li>Resultado indica se você atinge o percentil exigido (98º percentil ou mais)</li>
            <li>Aprovados tornam-se membros e acessam eventos e comunidade</li>
          </ul>
          <h2 className="text-3xl font-bold mt-12 mb-6">Mensa x teste online</h2>
          <p className="text-muted-foreground mb-4">
            Testes online como o BomQI servem para estimativa e autoconhecimento. A Mensa exige instrumentos
            validados e aplicação controlada. Antes de investir na taxa, faça um{" "}
            <Link to="/blog/teste-qi-confiavel" className="text-primary hover:underline">teste confiável</Link> para
            ter uma ideia da sua faixa.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-6">Alternativas no Brasil</h2>
          <p className="text-muted-foreground">
            Avaliação com psicólogo (WAIS), testes Raven em clínicas e triagens online complementam o caminho.
            Veja também{" "}
            <Link to="/blog/onde-fazer-teste-qi-brasil" className="text-primary hover:underline">
              onde fazer teste de QI no Brasil
            </Link>.
          </p>
        </div>
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Teste seu QI antes da Mensa</h3>
          <p className="text-muted-foreground mb-6">Estime sua pontuação com o teste gratuito do BomQI.</p>
          <Button size="lg" className="gap-2" onClick={() => navigate("/teste")}>
            Fazer Teste Grátis <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Continue Lendo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("teste-mensa-brasil", 3).map((article) => (
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

export default TesteMensaBrasil;
