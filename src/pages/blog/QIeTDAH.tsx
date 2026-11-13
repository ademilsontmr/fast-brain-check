import { Brain, ArrowRight, BookOpen, CheckCircle2, AlertTriangle } from "lucide-react";
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

const QIeTDAH = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-e-tdah";
  const articleTitle = "QI e TDAH: Relação Entre Inteligência e Déficit de Atenção";
  const articleDescription = "Descubra a relação entre QI e TDAH, como o déficit de atenção afeta testes de inteligência e estratégias para otimizar o potencial cognitivo.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-e-tdah",
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
          <span>QI e TDAH</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>15 de Janeiro de 2025</time>
          <span>•</span>
          <span>11 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Brain className="w-24 h-24 text-primary" />
        </div>
        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            <strong>TDAH não é QI baixo</strong>: é um perfil de regulação atencional que pode fazer alguém brilhante
            tropeçar em subtestes cronometrados. Muitas pessoas com TDAH têm <strong>QI médio ou alto</strong>, mas
            subpontuam em memória de trabalho e velocidade — exatamente o que testes como WAIS usam.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ TDAH afeta performance em testes, não necessariamente capacidade geral</li>
                  <li>✓ Hiperfoco em temas de interesse contrasta com tédio em tarefas rotineiras</li>
                  <li>✓ Tratamento e adaptações melhoram medição fiel do potencial</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como o TDAH distorce o QI medido</h2>
          <p className="text-muted-foreground mb-4">
            Impulsividade leva a erros por precipitação; desatenção reduz sequências de dígitos. Avaliadores clínicos
            às vezes aplicam subtestes de QI com pausas ou em dias separados. Entenda o instrumento em{" "}
            <Link to="/blog/o-que-e-teste-qi" className="text-primary hover:underline">o que é teste de QI</Link>.
          </p>
          <p className="text-muted-foreground mb-6">
            Memória e atenção compartilham circuitos — leia{" "}
            <Link to="/blog/qi-e-memoria" className="text-primary hover:underline">QI e memória</Link> e{" "}
            <Link to="/blog/qi-e-sono" className="text-primary hover:underline">QI e sono</Link> (privação piora TDAH).
          </p>


          <h2 className="text-3xl font-bold mt-12 mb-6">QI alto com TDAH: perfil comum</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Raciocínio verbal forte, dificuldade em burocracia repetitiva</li>
            <li>Criatividade elevada — tema em{" "}
              <Link to="/blog/qi-criatividade" className="text-primary hover:underline">QI e criatividade</Link>
            </li>
            <li>Ansiedade mascarando desatenção em adultos diagnosticados tardiamente</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estratégias para testes e estudo</h2>
          <Card className="p-6 my-8">
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
              <li>Ambiente silencioso, teste pela manhã, medicamento no horário habitual se prescrito</li>
              <li>Pausas curtas entre blocos de questões online</li>
              <li>Timers visuais e quebra de tarefas —{" "}
                <Link to="/blog/como-ativar-modo-foco-profundo" className="text-primary hover:underline">foco profundo</Link> em blocos de 25 min
              </li>
            </ul>
          </Card>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">Atenção</h3>
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  Autodiagnóstico por teste online não substitui avaliação médica. TDAH compartilha sintomas com
                  ansiedade, sono e trauma.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/o-que-e-considerado-qi-alto" className="text-primary hover:underline">O que é QI alto</Link>,{" "}
            <Link to="/blog/como-se-preparar-teste-qi" className="text-primary hover:underline">como se preparar para teste de QI</Link> e{" "}
            <Link to="/blog/sinais-qi-alto" className="text-primary hover:underline">sinais de QI alto</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Pessoas com TDAH têm QI mais baixo?",
              answer:
                "A distribuição de QI em pessoas com TDAH é semelhante à população geral. O déficit aparece em execução atencional, não em potencial bruto.",
            },
            {
              question: "Medicamento para TDAH melhora QI no teste?",
              answer:
                "Pode melhorar atenção e memória de trabalho na hora, refletindo pontuação mais próxima do potencial real. Não 'aumenta QI' estrutural.",
            },
            {
              question: "Hiperfoco significa QI alto?",
              answer:
                "Hiperfoco é comum no TDAH com interesse intenso; não é sinônimo de superdotação.",
            },
            {
              question: "Criança com TDAH deve fazer teste de QI?",
              answer:
                "Só se houver necessidade educacional ou clínica, com psicólogo infantil que interprete TDAH junto.",
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
            {getRelatedArticles("qi-e-tdah", 3).map((article) => (
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

export default QIeTDAH;
