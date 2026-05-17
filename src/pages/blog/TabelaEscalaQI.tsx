import { BarChart3, ArrowRight, BookOpen } from "lucide-react";
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

const TabelaEscalaQI = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/tabela-escala-qi";
  const articleTitle = "Tabela e Escala de QI: Classificação Completa por Pontuação";
  const articleDescription =
    "Tabela de QI completa: o que significa cada faixa de pontuação, percentis e classificação de inteligência. Guia para interpretar seu resultado.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "tabela-escala-qi",
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
          <span>Tabela de QI</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Maio de 2026</time>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <BarChart3 className="w-24 h-24 text-primary" />
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            A <strong>tabela de QI</strong> padroniza resultados com média 100 e desvio padrão 15. Use esta escala para entender
            onde sua pontuação se situa na população e o que cada faixa representa na prática.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-6">Tabela de classificação de QI</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">QI</th>
                  <th className="border p-3 text-left">Classificação</th>
                  <th className="border p-3 text-left">Percentil aproximado</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr><td className="border p-3">130+</td><td className="border p-3">Muito superior / superdotação</td><td className="border p-3">Top 2%</td></tr>
                <tr><td className="border p-3">120–129</td><td className="border p-3">Superior</td><td className="border p-3">Top 9%</td></tr>
                <tr><td className="border p-3">110–119</td><td className="border p-3">Acima da média</td><td className="border p-3">Top 25%</td></tr>
                <tr><td className="border p-3">90–109</td><td className="border p-3">Média</td><td className="border p-3">25%–75%</td></tr>
                <tr><td className="border p-3">80–89</td><td className="border p-3">Abaixo da média</td><td className="border p-3">Bottom 25%</td></tr>
                <tr><td className="border p-3">70–79</td><td className="border p-3">Limítrofe</td><td className="border p-3">Bottom 9%</td></tr>
                <tr><td className="border p-3">&lt;70</td><td className="border p-3">Muito abaixo da média</td><td className="border p-3">Bottom 2%</td></tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Como ler a escala</h2>
          <p className="mb-4 text-muted-foreground">
            QI mede desempenho relativo a uma amostra normativa, não valor pessoal. Pequenas diferenças (3–5 pontos) costumam
            estar dentro da margem de erro do teste. Para interpretação detalhada, veja também{" "}
            <Link to="/blog/como-interpretar-resultado-qi" className="text-primary hover:underline">
              como interpretar seu resultado de QI
            </Link>.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-6">QI médio e referências</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
            <li>QI médio mundial e brasileiro: aproximadamente 100 na escala padronizada</li>
            <li>QI 100 = desempenho médio da população de referência do teste</li>
            <li>Cada +15 pontos ≈ um desvio padrão acima da média</li>
          </ul>
        </div>
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra em qual faixa você está</h3>
          <p className="text-muted-foreground mb-6">Faça o teste de QI do BomQI em poucos minutos e compare com a tabela.</p>
          <Button size="lg" className="gap-2" onClick={() => navigate("/teste")}>
            Fazer o Teste Agora <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Continue Lendo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("tabela-escala-qi", 3).map((article) => (
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
        <section className="mt-16">
          <SocialProofCarousel />
        </section>
      </article>
      <Footer />
    </div>
  );
};

export default TabelaEscalaQI;
