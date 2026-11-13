import { Rocket, ArrowRight, BookOpen, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleLeadAdSense from "@/components/ArticleLeadAdSense";
import ArticleMidAdSense from "@/components/ArticleMidAdSense";
import ArticleFAQ from "@/components/ArticleFAQ";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const QIElonMusk = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-elon-musk";
  const articleTitle = "Qual é o QI do Elon Musk?";
  const articleDescription = "Análise das estimativas de QI do Elon Musk e limitações de números não verificados.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-elon-musk",
      publishDate: "2025-01-15",
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
          <span>QI do Elon Musk</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>15 de Janeiro de 2025</time>
          <span>•</span>
          <span>8 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Rocket className="w-24 h-24 text-primary" />
        </div>
        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            Posts afirmam que o <strong>QI do Elon Musk</strong> é <strong>155</strong> ou mais. Musk não divulgou
            resultado de WAIS, Mensa ou Raven. O rapaz que leu a enciclopédia na infância e criou Zip2/PayPal/Tesla tem
            <strong> aprendizado autodidata e tolerância ao risco</strong> — traços que listas de QI confundem com
            pontuação em papel.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Estimativa popular ~155 sem fonte primária</li>
                  <li>✓ Raciocínio físico e engenharia são pontos fortes plausíveis</li>
                  <li>✓ Sucesso em múltiplas indústrias ≠ QI único máximo</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por que o número circula?</h2>
          <p className="text-muted-foreground mb-4">
            Rankings de celebridades precisam de números chamativos para cliques. Veja análise crítica em{" "}
            <Link to="/blog/pessoas-famosas-com-qi-alto" className="text-primary hover:underline">pessoas famosas com QI alto</Link> e{" "}
            <Link to="/blog/qi-de-famosos" className="text-primary hover:underline">índice de QI de famosos</Link>.
          </p>
          <p className="text-muted-foreground mb-6">
            Comparar empresários:{" "}
            <Link to="/blog/qi-bill-gates" className="text-primary hover:underline">Bill Gates</Link>,{" "}
            <Link to="/blog/qi-steve-jobs" className="text-primary hover:underline">Steve Jobs</Link>,{" "}
            <Link to="/blog/qi-pablo-marcal" className="text-primary hover:underline">Pablo Marçal</Link>.
          </p>

          <ArticleMidAdSense />

          <h2 className="text-3xl font-bold mt-12 mb-6">O que testes mediriam no perfil Musk</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Raciocínio fluido e absorção técnica rápida</li>
            <li>Memória de trabalho sob vários projetos paralelos</li>
            <li>Comunicação polarizadora — não entra na fórmula do QI</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI e empreendedorismo</h2>
          <p className="text-muted-foreground mb-4">
            Estudos correlacionam QI com renda até certo ponto; depois, rede, capital e execução dominam. Leia{" "}
            <Link to="/blog/como-ficar-rico-relacao-qi" className="text-primary hover:underline">riqueza e QI</Link> e{" "}
            <Link to="/blog/qi-sucesso-profissional" className="text-primary hover:underline">QI e sucesso profissional</Link>.
          </p>
          <Card className="p-6 my-8">
            <p className="text-sm text-muted-foreground">
              Faixa <strong>130+</strong> ≈ percentil 98 — critério Mensa. Sem teste, tratar Musk como “confirmado 155”
              é marketing de blog, não psicometria.
            </p>
          </Card>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">Limite epistêmico</h3>
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  Até Musk postar laudo ou Mensa confirmar, qualquer dígito é fan fiction estatística.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/qi-150-significa" className="text-primary hover:underline">QI 150: o que significa</Link>,{" "}
            <Link to="/blog/teste-mensa-brasil" className="text-primary hover:underline">teste Mensa Brasil</Link> e{" "}
            <Link to="/blog/superdotacao-o-que-e" className="text-primary hover:underline">superdotação</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Elon Musk tem QI 155?",
              answer:
                "Não há prova pública. O valor é estimativa viral sem teste citado.",
            },
            {
              question: "Musk entraria na Mensa?",
              answer:
                "Se o QI real estivesse ≥ 130 no teste oficial, sim. Isso não foi demonstrado.",
            },
            {
              question: "Física difícil significa QI 160?",
              answer:
                "Significa estudo e aptidão em domínio específico. Muitos físicos brilhantes estão na faixa 120–140.",
            },
            {
              question: "Como comparar meu QI com o dele?",
              answer:
                "Compare com você mesmo ao longo do tempo usando o mesmo instrumento — não com celebridades.",
            },
          ]}
        />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra seu QI</h3>
          <p className="text-muted-foreground mb-6">Teste gratuito — resultado em minutos.</p>
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
            {getRelatedArticles("qi-elon-musk", 3).map((article) => (
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

export default QIElonMusk;
