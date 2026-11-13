import { Calculator, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const CalcularQI = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/calcular-qi";
  const articleTitle = "Calcular QI: Como Funciona a Escala e o Teste Online (2026)";
  const articleDescription =
    "Como calcular QI de verdade? Entenda média 100, desvio 15, percentil e por que não existe fórmula mágica — faça o teste online para estimar.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords:
      "calcular qi, calculadora de qi, como calcular qi, calcular meu qi, fórmula qi, escala qi",
  });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "calcular-qi",
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
          <span>Calcular QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time dateTime="2026-11-10">10 de Novembro de 2026</time>
          <span>•</span>
          <span>10 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-indigo-500/20 to-blue-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Calculator className="w-24 h-24 text-indigo-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            Quem busca <strong>calcular QI</strong> ou <strong>calculadora de QI</strong> espera uma
            fórmula mágica. A verdade: <strong>QI não se calcula por idade, salário ou nota escolar</strong>.
            Ele vem de um teste padronizado — online (estimativa) ou clínico (WAIS/WISC).
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Como “calcular” na prática</h2>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Faça um teste padronizado → acertos viram score na escala</li>
                  <li>✓ Escala clássica: média <strong>100</strong>, DP <strong>15</strong></li>
                  <li>✓ Percentil = onde você está na população</li>
                  <li>✗ Não existe calculadora séria só com “idade + escolaridade”</li>
                </ul>
                <Button size="sm" className="mt-4 gap-2" onClick={() => navigate("/teste")}>
                  Calcular meu QI no teste <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">A fórmula por trás do número</h2>
          <p className="text-muted-foreground mb-4">
            Em testes modernos, o QI é um <strong>escore padrão</strong>:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Desempenho bruto (acertos / itens) comparado à norma</li>
            <li>Transformado para média 100 e desvio 15</li>
            <li>~68% das pessoas entre 85 e 115; ~2% acima de 130</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Tabela completa:{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">escala de QI</Link> e{" "}
            <Link to="/blog/percentil-qi-o-que-significa" className="text-primary hover:underline">percentil</Link>.
          </p>

          <ArticleMidAdSense />
          <h2 className="text-3xl font-bold mt-12 mb-6">Calculadora de QI online: o que é válido</h2>
          <Card className="p-6 my-8">
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">Válido:</strong> questionário de raciocínio → algoritmo
                de score (como o BomQI).
              </li>
              <li>
                <strong className="text-foreground">Inválido:</strong> “digite sua idade e profissão” e
                receber QI 135.
              </li>
              <li>
                <strong className="text-foreground">Clínico:</strong> só psicólogo com WAIS/WISC.
              </li>
            </ul>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">Exemplos de leitura do score</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>
              <Link to="/blog/qi-100-significa" className="text-primary hover:underline">QI 100</Link> — média
            </li>
            <li>
              <Link to="/blog/qi-120-e-bom" className="text-primary hover:underline">QI 120</Link> — superior
            </li>
            <li>
              <Link to="/blog/qi-130-significa" className="text-primary hover:underline">QI 130</Link> — top ~2%
            </li>
            <li>
              <Link to="/blog/qi-140-significa" className="text-primary hover:underline">QI 140</Link> /{" "}
              <Link to="/blog/qi-150-significa" className="text-primary hover:underline">QI 150</Link> — faixas
              muito altas
            </li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">
                  Quer calcular agora?
                </h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
                  A forma honesta de “calcular meu QI” é fazer o teste. Sem atalho por dados demográficos.
                </p>
                <Button className="gap-2" onClick={() => navigate("/teste")}>
                  Ir para o teste <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/como-medir-qi" className="text-primary hover:underline">Como medir QI</Link>,{" "}
            <Link to="/blog/qual-meu-qi" className="text-primary hover:underline">qual meu QI</Link>,{" "}
            <Link to="/blog/como-interpretar-resultado-qi" className="text-primary hover:underline">interpretar resultado</Link> e{" "}
            <Link to="/blog/o-que-e-qi" className="text-primary hover:underline">o que é QI</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Existe fórmula para calcular QI em casa?",
              answer:
                "Não uma fórmula séria só com idade ou notas. É preciso um teste com itens calibrados.",
            },
            {
              question: "Calculadora de QI online funciona?",
              answer:
                "Se for um teste de raciocínio com score, sim como estimativa. Se pedir só dados pessoais, ignore.",
            },
            {
              question: "Como o BomQI calcula?",
              answer:
                "Com base no desempenho no questionário (acertos e tempo), mapeado para a escala 100±15 de forma otimista para o usuário.",
            },
            {
              question: "QI clínico usa a mesma escala?",
              answer:
                "Sim na ideia (média 100, DP 15), mas com normas oficiais e aplicação supervisionada.",
            },
          ]}
        />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Calcule seu QI com o teste BomQI</h3>
          <p className="text-muted-foreground mb-6">Minutos, em português, com interpretação do número.</p>
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
            {getRelatedArticles("calcular-qi", 3).map((article) => (
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

export default CalcularQI;
