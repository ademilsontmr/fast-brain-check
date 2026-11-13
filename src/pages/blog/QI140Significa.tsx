import { Crown, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleLeadAdSense from "@/components/ArticleLeadAdSense";
import ArticleFAQ from "@/components/ArticleFAQ";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const QI140Significa = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-140-significa";
  const articleTitle = "QI 140: O Que Significa Esse Resultado? (2026)";
  const articleDescription =
    "QI 140 significa o quê? Percentil ~99,5, faixa muito superior, Mensa, mitos de gênio e diferença entre teste online e laudo.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "qi 140, qi 140 significa, qi 140 é bom, o que significa qi 140, percentil qi 140",
  });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-140-significa",
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
          <span>QI 140</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time dateTime="2026-11-10">10 de Novembro de 2026</time>
          <span>•</span>
          <span>10 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-amber-500/20 to-yellow-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Crown className="w-24 h-24 text-amber-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            <strong>QI 140</strong> está bem acima da média 100 (DP 15): na curva normal, isso fica perto do{" "}
            <strong>percentil 99,5</strong> — cerca de 1 em 200 pessoas. É faixa{" "}
            <strong>muito superior</strong>, acima do corte clássico da Mensa (~130).
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo</h2>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ QI 140 ≈ top 0,5% da população (escala SD 15)</li>
                  <li>✓ Acima de <Link to="/blog/qi-130-significa" className="underline">QI 130</Link> (Mensa)</li>
                  <li>✓ Online pode inflar — confirme com teste sério se precisar</li>
                  <li>✓ Não garante sucesso sozinho</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Onde QI 140 fica na escala</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>130–144: muito superior (Wechsler)</li>
            <li>145+: extremo / “genialidade” em algumas classificações</li>
            <li>
              Compare:{" "}
              <Link to="/blog/qi-120-e-bom" className="text-primary hover:underline">120</Link>,{" "}
              <Link to="/blog/qi-130-significa" className="text-primary hover:underline">130</Link>,{" "}
              <Link to="/blog/qi-150-significa" className="text-primary hover:underline">150</Link>
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Mitos sobre QI 140</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li><strong>Mito:</strong> todo teste online que dá 140 é preciso. <strong>Realidade:</strong> quizzes curtos inflacionam.</li>
            <li><strong>Mito:</strong> QI 140 = gênio em tudo. <strong>Realidade:</strong> mede raciocínio específico, não criatividade total.</li>
            <li><strong>Mito:</strong> basta o número para Mensa. <strong>Realidade:</strong> Mensa tem processo próprio.</li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Tirou perto de 140 online?</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
                  Trate como sinal forte e, se precisar de documento, busque avaliação formal. Para
                  comparar de novo no BomQI:
                </p>
                <Button className="gap-2" onClick={() => navigate("/teste")}>
                  Refazer / fazer teste <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/o-que-e-considerado-qi-alto" className="text-primary hover:underline">QI alto</Link>,{" "}
            <Link to="/blog/teste-mensa-brasil" className="text-primary hover:underline">Mensa Brasil</Link>,{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela escala</Link> e{" "}
            <Link to="/blog/calcular-qi" className="text-primary hover:underline">calcular QI</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "QI 140 é raro?",
              answer: "Sim. Na escala com média 100 e DP 15, está em torno do percentil 99,5.",
            },
            {
              question: "QI 140 entra na Mensa?",
              answer:
                "Em teoria supera o corte top 2% (~130), mas a Mensa exige o próprio processo ou provas aceitas — não qualquer site.",
            },
            {
              question: "Online deu 140 — é real?",
              answer:
                "Pode ser superestimativa. Use como hipótese e confirme com instrumento sério se o número importar de verdade.",
            },
          ]}
        />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Veja seu score no BomQI</h3>
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
            {getRelatedArticles("qi-140-significa", 3).map((article) => (
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

export default QI140Significa;
