import { Brain, ArrowRight, BookOpen, CheckCircle2, AlertTriangle } from "lucide-react";
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

const QIeSono = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-e-sono";
  const articleTitle = "QI e Sono: Como o Sono Afeta a Inteligência";
  const articleDescription = "Descubra como o sono afeta o QI, a importância do sono para função cognitiva e estratégias para otimizar o descanso cerebral.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-e-sono",
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
          <span>QI e Sono</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>15 de Janeiro de 2025</time>
          <span>•</span>
          <span>10 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Brain className="w-24 h-24 text-primary" />
        </div>
        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            Uma noite mal dormida pode derrubar atenção e memória de trabalho como se você tivesse <strong>vários pontos
            a menos de QI</strong> no teste — sem mudar sua capacidade real, apenas o desempenho momentâneo. O sono
            consolida aprendizado e limpa metabolitos cerebrais; privação crônica é um dos maiores sabotadores
            cognitivos silenciosos.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ 7–9 h para adultos; menos que 6 h corrói atenção em dias</li>
                  <li>✓ REM e sono profundo ligados a memória e criatividade</li>
                  <li>✓ Nunca faça teste de QI após virada de noite</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que acontece no cérebro dormindo</h2>
          <p className="text-muted-foreground mb-4">
            Durante o sono profundo, o cérebro reorganiza memórias do dia; no REM, conecta ideias distantes. Estudos
            mostram queda de raciocínio após 24 h sem dormir comparável a intoxicação leve — tema em{" "}
            <Link to="/blog/o-que-reduz-qi-sem-perceber" className="text-primary hover:underline">o que reduz QI sem perceber</Link>.
          </p>
          <p className="text-muted-foreground mb-6">
            Memória de trabalho e QI testável caminham juntos — veja{" "}
            <Link to="/blog/qi-e-memoria" className="text-primary hover:underline">QI e memória</Link>.
          </p>

          <ArticleMidAdSense />

          <h2 className="text-3xl font-bold mt-12 mb-6">Higiene do sono para cognição</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Horário fixo de deitar, mesmo nos fins de semana</li>
            <li>Quarto escuro, fresco, sem notificações</li>
            <li>Cafeína só até 6–8 h antes de dormir</li>
            <li>Exercício pela manhã ou tarde, não intenso à noite</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Sono e preparação para teste</h2>
          <Card className="p-6 my-8">
            <p className="text-sm font-medium text-foreground mb-2">48 h antes do teste</p>
            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
              <li>Duas noites completas de sono</li>
              <li>Sem álcool — fragmenta REM</li>
              <li>Combine com guia{" "}
                <Link to="/blog/como-se-preparar-teste-qi" className="text-primary hover:underline">como se preparar para teste de QI</Link>
              </li>
            </ul>
          </Card>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">Atenção</h3>
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  Ronco, pausas na respiração e insônia crônica merecem avaliação médica. Tratar apneia pode recuperar
                  anos de “névoa mental”.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/como-manter-mente-afiada" className="text-primary hover:underline">Como manter a mente afiada</Link>,{" "}
            <Link to="/blog/qi-e-tdah" className="text-primary hover:underline">QI e TDAH</Link> e{" "}
            <Link to="/blog/habitos-qi-alto" className="text-primary hover:underline">hábitos de QI alto</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Quantas horas de sono para melhor QI no teste?",
              answer:
                "A maioria dos adultos rende melhor com 7–9 horas. Individualmente, note em qual faixa você acorda sem sonolência.",
            },
            {
              question: "Cochilos ajudam?",
              answer:
                "Cochilos de 20 min podem restaurar atenção; cochilos longos ou tardios atrapalham o sono noturno.",
            },
            {
              question: "Estudar a noite toda vale a pena?",
              answer:
                "Memória consolidada no sono; virar a noite prejudica prova e teste no dia seguinte mais do que horas extras de revisão.",
            },
            {
              question: "Melatonina melhora QI?",
              answer:
                "Pode ajudar a iniciar sono em alguns casos, mas não substitui hábitos. Consulte médico para uso contínuo.",
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
            {getRelatedArticles("qi-e-sono", 3).map((article) => (
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

export default QIeSono;
