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

const QIMedioJovens = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-medio-jovens";
  const articleTitle = "QI Médio de Jovens: Desenvolvimento Cognitivo na Juventude";
  const articleDescription = "Descubra o QI médio de jovens, como a inteligência se desenvolve nessa fase e estratégias para otimizar o potencial cognitivo.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-medio-jovens",
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
          <span>QI Médio de Jovens</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>15 de Janeiro de 2025</time>
          <span>•</span>
          <span>10 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Users className="w-24 h-24 text-primary" />
        </div>
        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            Na faixa dos 18–30 anos, o <strong>QI médio de jovens</strong> é, por definição estatística, próximo de{" "}
            <strong>100</strong> em qualquer país com normas atualizadas. O que importa nessa fase é o{" "}
            <strong>pico de raciocínio fluido</strong> e a consolidação de escolaridade — janela em que hábitos definem
            carreira e saúde cerebral por décadas.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Entre 18–25 anos costuma ocorrer estabilização do QI em testes padronizados</li>
                  <li>✓ Universitários selecionados mostram médias amostrais de 105–115</li>
                  <li>✓ Sono, álcool e ansiedade alteram resultados mais que “potencial bruto”</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Jovens vs adolescentes</h2>
          <p className="text-muted-foreground mb-4">
            Adolescentes ainda maturam córtex pré-frontal; jovens adultos performam melhor em planejamento e abstração.
            Compare dados em{" "}
            <Link to="/blog/qi-medio-adolescentes" className="text-primary hover:underline">QI médio de adolescentes</Link> e{" "}
            <Link to="/blog/qi-medio-estudantes" className="text-primary hover:underline">QI médio de estudantes</Link>.
          </p>
          <p className="text-muted-foreground mb-6">
            A curva completa está em{" "}
            <Link to="/blog/qi-medio-por-idade" className="text-primary hover:underline">QI médio por idade</Link>.
          </p>


          <h2 className="text-3xl font-bold mt-12 mb-6">O que eleva a média entre universitários</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Seleção por vestibular e ENEM filtra raciocínio matemático e verbal</li>
            <li>Exposição a leitura acadêmica amplia vocabulário (inteligência cristalizada)</li>
            <li>Estágios exigem aprendizado rápido de sistemas novos</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Otimizar potencial na juventude</h2>
          <p className="text-muted-foreground mb-4">
            Rotina de sono, exercício e limite de álcool pesam mais que maratonas de app de “QI”. Guias em{" "}
            <Link to="/blog/como-melhorar-qi-adolescentes" className="text-primary hover:underline">como melhorar QI de adolescentes</Link>{" "}
            também valem para universitários.
          </p>
          <Card className="p-6 my-8">
            <p className="text-sm font-medium text-foreground mb-2">Checklist rápido</p>
            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
              <li>7–9 h de sono antes de prova ou teste cognitivo</li>
              <li>150 min/semana de movimento —{" "}
                <Link to="/blog/qi-e-exercicio-fisico" className="text-primary hover:underline">QI e exercício</Link>
              </li>
              <li>Foco profundo sem notificação — veja{" "}
                <Link to="/blog/como-ativar-modo-foco-profundo" className="text-primary hover:underline">modo foco profundo</Link>
              </li>
            </ul>
          </Card>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Lição prática</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Processos seletivos usam raciocínio, não apenas QI — prepare-se com{" "}
                  <Link to="/blog/qi-processos-seletivos" className="text-primary hover:underline">QI em processos seletivos</Link>.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/conexao-qi-desempenho-academico" className="text-primary hover:underline">QI e desempenho acadêmico</Link>,{" "}
            <Link to="/blog/como-aumentar-qi" className="text-primary hover:underline">como aumentar o QI</Link> e{" "}
            <Link to="/blog/qi-110-e-bom" className="text-primary hover:underline">QI 110 é bom?</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Qual o QI médio de um jovem brasileiro?",
              answer:
                "Populacionalmente ~100. Amostras universitárias urbanas costumam ficar acima dessa média por seleção escolar.",
            },
            {
              question: "QI muda entre 18 e 25 anos?",
              answer:
                "Mudanças são pequenas; ganhos vêm de educação e prática em testes, não de salto biológico tardio.",
            },
            {
              question: "Jovem com TDAH tem QI menor?",
              answer:
                "TDAH afeta atenção em testes, não necessariamente capacidade. Avaliação especializada separa os fatores.",
            },
            {
              question: "Quando fazer o primeiro teste formal?",
              answer:
                "Se não houver necessidade clínica ou escolar, após os 16–18 anos a leitura do resultado é mais estável.",
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
            {getRelatedArticles("qi-medio-jovens", 3).map((article) => (
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

export default QIMedioJovens;
