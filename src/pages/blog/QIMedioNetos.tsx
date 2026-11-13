import { Users, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const QIMedioNetos = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-medio-netos";
  const articleTitle = "QI Médio de Netos: Inteligência das Novas Gerações";
  const articleDescription = "Descubra o QI médio das novas gerações, como crianças e adolescentes estão se desenvolvendo cognitivamente e o papel dos avós.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-medio-netos",
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
          <span>QI Médio de Netos</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>15 de Janeiro de 2025</time>
          <span>•</span>
          <span>9 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Users className="w-24 h-24 text-primary" />
        </div>
        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            Quando avós perguntam pelo <strong>QI médio dos netos</strong>, costumam comparar gerações: “hoje as crianças
            são mais espertas com celular”. Em normas populacionais, <strong>cada geração é recalibrada para média 100</strong>,
            mas o efeito Flynn histórico mostrou melhorias em raciocínio abstrato — hoje o debate é se telas e escolas
            sustentam ou freiam esse avanço.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ “QI dos netos” = crianças e adolescentes atuais, não número herdado dos avós</li>
                  <li>✓ Interação avô–neto beneficia linguagem e funções executivas</li>
                  <li>✓ Superdotação é rara; compare com faixas, não com mitos de 160+</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Gerações em números</h2>
          <p className="text-muted-foreground mb-4">
            Adolescentes de hoje mostram forças em tecnologia e multitarefa superficial, mas atenção profunda e leitura
            longa podem sofrer — tema em{" "}
            <Link to="/blog/qi-medio-adolescentes" className="text-primary hover:underline">QI médio de adolescentes</Link> e{" "}
            <Link to="/blog/qi-medio-jovens" className="text-primary hover:underline">QI médio de jovens</Link>.
          </p>
          <p className="text-muted-foreground mb-6">
            O artigo{" "}
            <Link to="/blog/qi-ao-longo-vida" className="text-primary hover:underline">QI ao longo da vida</Link> explica
            por que comparar avô aos 70 com neto aos 12 exige normas etárias, não uma régua única.
          </p>


          <h2 className="text-3xl font-bold mt-12 mb-6">Papel dos avós na cognição</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Contação de histórias e leitura compartilhada estimulam vocabulário</li>
            <li>Jogos de tabuleiro treinam planejamento e tolerância à frustração</li>
            <li>Modelagem de curiosidade (“vamos pesquisar juntos?”)</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Benefício bidirecional: veja{" "}
            <Link to="/blog/como-netos-melhoram-qi" className="text-primary hover:underline">como netos melhoram o QI</Link>{" "}
            de idosos também.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Sinais de alto potencial</h2>
          <p className="text-muted-foreground mb-4">
            Não rotule cedo demais. Indícios persistentes — aprendizado acelerado, perguntas profundas, tédio com
            repetição — aparecem em{" "}
            <Link to="/blog/criancas-superdotadas-sinais-caracteristicas" className="text-primary hover:underline">crianças superdotadas</Link> e em{" "}
            <Link to="/blog/superdotacao-o-que-e" className="text-primary hover:underline">superdotação: o que é</Link>.
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Lição prática</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Limite tempo de tela passiva e incentive projetos com começo, meio e fim — maquete, receita, horta —
                  mais do que vídeos infinitos.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/qi-medio-idosos" className="text-primary hover:underline">QI médio de idosos</Link>,{" "}
            <Link to="/blog/qi-criancas-sinais-superdotacao" className="text-primary hover:underline">QI de crianças e superdotação</Link> e{" "}
            <Link to="/blog/desenvolvimento-cognitivo-conexao-qi" className="text-primary hover:underline">desenvolvimento cognitivo e QI</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Netos têm QI maior que os avós tiveram na mesma idade?",
              answer:
                "Efeito Flynn já elevou médias no passado; hoje os ganhos parecem estabilizar em alguns países. Compare sempre com normas da mesma época.",
            },
            {
              question: "Devo fazer teste de QI no neto?",
              answer:
                "Só com necessidade clara e avaliador infantil. Testes online são brincadeira educativa, não diagnóstico.",
            },
            {
              question: "Herança: neto terá QI dos avós?",
              answer:
                "Heritabilidade é parcial. Ambiente familiar, escola e nutrição contam tanto quanto genes.",
            },
            {
              question: "Avô com demência afeta QI do neto?",
              answer:
                "Não diretamente. Algumas causas cognitivas têm componente genético; acompanhamento médico orienta.",
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
            {getRelatedArticles("qi-medio-netos", 3).map((article) => (
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

export default QIMedioNetos;
