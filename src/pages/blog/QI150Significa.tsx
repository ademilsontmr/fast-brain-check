import { Gem, ArrowRight, BookOpen, CheckCircle2, Lightbulb, AlertTriangle } from "lucide-react";
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

const QI150Significa = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-150-significa";
  const articleTitle = "QI 150: O Que Significa? Raridade e Mitos (2026)";
  const articleDescription =
    "QI 150 significa o quê? Percentil extremo (~99,9), diferença para 140/130, por que testes online exageram e quando buscar laudo.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "qi 150, qi 150 significa, qi 150 é raro, o que significa qi 150, gênio qi 150",
  });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-150-significa",
      publishDate: "2026-11-10",
      modifiedDate: "2026-11-10",
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
          <span>QI 150</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time dateTime="2026-11-10">10 de Novembro de 2026</time>
          <span>•</span>
          <span>9 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Gem className="w-24 h-24 text-violet-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            <strong>QI 150</strong> é extremamente raro na escala com média 100 e DP 15 — da ordem de{" "}
            <strong>1 em milhares</strong> de pessoas (percentil ~99,9). Muitos testes virais entregam
            150+ com facilidade: trate com ceticismo.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo</h2>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ QI 150 = cauda extrema da distribuição</li>
                  <li>✓ Acima de <Link to="/blog/qi-140-significa" className="underline">140</Link> e do corte Mensa (~130)</li>
                  <li>✓ Online costuma inflar nessa faixa</li>
                  <li>✓ Laudo formal exige psicólogo</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI 150 vs 140 vs 130</h2>
          <Card className="p-6 my-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 pr-4">Score</th>
                  <th className="pb-3 pr-4">Ordem de raridade</th>
                  <th className="pb-3">Nota</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">130</td>
                  <td className="py-3 pr-4">~ top 2%</td>
                  <td className="py-3">Corte típico Mensa / AH</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">140</td>
                  <td className="py-3 pr-4">~ top 0,5%</td>
                  <td className="py-3">Muito superior</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">150</td>
                  <td className="py-3 pr-4">~ top 0,1% ou menos</td>
                  <td className="py-3">Extremo — rare online “de verdade”</td>
                </tr>
              </tbody>
            </table>
          </Card>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">Alerta anti-hype</h3>
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  Se um quiz de 5 minutos deu QI 150–180, desconfie. Instrumentos sérios têm teto e
                  erro de medida; redes sociais adoram números absurdos.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Próximo passo</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
                  Faça um teste estruturado, compare com a{" "}
                  <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">escala</Link> e,
                  se o número for decisivo, busque avaliação clínica.
                </p>
                <Button className="gap-2" onClick={() => navigate("/teste")}>
                  Testar no BomQI <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/qi-140-significa" className="text-primary hover:underline">QI 140</Link>,{" "}
            <Link to="/blog/qi-130-significa" className="text-primary hover:underline">QI 130</Link>,{" "}
            <Link to="/blog/pessoas-famosas-com-qi-alto" className="text-primary hover:underline">famosos com QI alto</Link> e{" "}
            <Link to="/blog/superdotacao-o-que-e" className="text-primary hover:underline">superdotação</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "QI 150 é possível?",
              answer:
                "Sim, mas é raríssimo em normas sérias. Scores online nessa faixa merecem dúvida até prova em contrário.",
            },
            {
              question: "QI 150 é gênio?",
              answer:
                "Algumas classificações usam 145+ como extremo. 'Gênio' também envolve realização, não só o número.",
            },
            {
              question: "Como confirmar um QI 150?",
              answer:
                "Avaliação com psicólogo (WAIS) ou processos de sociedades de alto QI — não quiz viral.",
            },
          ]}
        />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Faça o teste e veja sua faixa</h3>
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
            {getRelatedArticles("qi-150-significa", 3).map((article) => (
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

export default QI150Significa;
