import { Sparkles, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const SuperdotacaoOQueE = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/superdotacao-o-que-e";
  const articleTitle = "Superdotação: O Que É e Critérios";
  const articleDescription = "O que é superdotação, QI necessário, sinais e como identificar alto potencial cognitivo.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "superdotacao-o-que-e",
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
          <span>Superdotação: O Que É</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>15 de Janeiro de 2025</time>
          <span>•</span>
          <span>10 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Sparkles className="w-24 h-24 text-primary" />
        </div>
        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            <strong>Superdotação</strong> (alto potencial / giftedness) descreve desempenho cognitivo muito acima da média —
            em QI, costuma-se citar <strong>130 ou mais</strong> (≈ percentil 98) em teste padronizado, mas a definição
            clínica e escolar também olha criatividade, liderança e velocidade de aprendizado, não só um número.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ QI ≥ 130 é critério comum, não único</li>
                  <li>✓ Crianças podem ser assíncronas: raciocínio alto, social imaturo</li>
                  <li>✓ Diagnóstico exige avaliação multidimensional, não teste viral</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Critérios técnicos</h2>
          <p className="text-muted-foreground mb-4">
            A escala Wechsler usa média 100 e DP 15. QI 130 ≈ 2 desvios acima — porta de entrada da Mensa em muitos países.
            Detalhes em{" "}
            <Link to="/blog/qi-130-significa" className="text-primary hover:underline">QI 130: o que significa</Link>,{" "}
            <Link to="/blog/qi-140-significa" className="text-primary hover:underline">QI 140</Link> e{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela de QI</Link>.
          </p>
          <p className="text-muted-foreground mb-6">
            Percentis ajudam a situar — veja{" "}
            <Link to="/blog/percentil-qi-o-que-significa" className="text-primary hover:underline">percentil de QI</Link> e{" "}
            <Link to="/blog/o-que-e-considerado-qi-alto" className="text-primary hover:underline">o que é QI alto</Link>.
          </p>

          <ArticleMidAdSense />

          <h2 className="text-3xl font-bold mt-12 mb-6">Sinais em crianças e adultos</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Aprendizado acelerado e tédio com repetição</li>
            <li>Perguntas abstratas precoces</li>
            <li>Intensidade em interesses (hiperfoco)</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Guia completo:{" "}
            <Link to="/blog/criancas-superdotadas-sinais-caracteristicas" className="text-primary hover:underline">crianças superdotadas</Link> e{" "}
            <Link to="/blog/qi-criancas-sinais-superdotacao" className="text-primary hover:underline">sinais de superdotação infantil</Link>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Superdotação ≠ sucesso automático</h2>
          <p className="text-muted-foreground mb-4">
            Altas capacidades podem vir com ansiedade, perfeccionismo e incompreensão social. Apoio pedagógico (enriquecimento,
            não só pular série) evita subdesempenho.
          </p>
          <Card className="p-6 my-8">
            <p className="text-sm text-muted-foreground">
              Mensa Brasil e associações oferecem comunidade — confira{" "}
              <Link to="/blog/teste-mensa-brasil" className="text-primary hover:underline">teste Mensa Brasil</Link>.
            </p>
          </Card>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Lição prática</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Teste online alto não confirma superdotação formal. Valide com WISC/WAIS e entrevista com psicólogo
                  especializado em altas habilidades.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/o-que-causa-qi-alto" className="text-primary hover:underline">O que causa QI alto</Link>,{" "}
            <Link to="/blog/qi-alto-caracteristicas" className="text-primary hover:underline">características de QI alto</Link> e{" "}
            <Link to="/blog/qi-150-significa" className="text-primary hover:underline">QI 150</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "A partir de qual QI é superdotação?",
              answer:
                "Muitos sistemas usam 130 como corte em teste padronizado. Escolas podem adotar critérios multidimensionais além do número.",
            },
            {
              question: "Superdotado sempre tira nota 10?",
              answer:
                "Não. Desmotivação, TDAH e ambiente pouco estimulante geram notas medianas apesar de QI alto.",
            },
            {
              question: "Teste BomQI diagnostica superdotação?",
              answer:
                "Não. É triagem recreativa/educativa. Diagnóstico formal usa bateria clínica.",
            },
            {
              question: "Adulto pode descobrir superdotação tarde?",
              answer:
                "Sim. Muitos descobrem na faculdade ou carreira. WAIS e Mensa aceitam adultos.",
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
            {getRelatedArticles("superdotacao-o-que-e", 3).map((article) => (
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

export default SuperdotacaoOQueE;
