import { Target, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const ComoMelhorarQI30Dias = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/como-melhorar-qi-30-dias";
  const articleTitle = "Como Melhorar o QI em 30 Dias: Plano Científico Completo";
  const articleDescription = "Descubra como melhorar seu QI em 30 dias com um plano baseado em ciência. Exercícios diários, nutrição e hábitos para desenvolvimento cognitivo.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "como-melhorar-qi-30-dias",
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
          <span>Como Melhorar o QI em 30 Dias</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>15 de Janeiro de 2025</time>
          <span>•</span>
          <span>10 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Target className="w-24 h-24 text-primary" />
        </div>
        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            Melhorar o <strong>QI em 30 dias</strong> não significa “virar gênio” de um dia para o outro: significa otimizar
            sono, exercício, nutrição e treino cognitivo para que você <strong>apareça no melhor desempenho</strong> em
            testes e no dia a dia. A neurociência chama isso de plasticidade e reserve cognitiva — ganhos modestos, mas
            mensuráveis, são realistas em um mês.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Plano de 4 semanas: sono, aeróbico, dieta e treino mental diário</li>
                  <li>✓ Expectativa realista: ganhos em velocidade de raciocínio e foco, não “+20 QI”</li>
                  <li>✓ Meça antes e depois com o mesmo teste, nas mesmas condições</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que é possível em um mês?</h2>
          <p className="text-muted-foreground mb-4">
            O QI estrutural (herdado e consolidado na juventude) muda pouco na vida adulta, mas subtestes de velocidade,
            memória de trabalho e atenção respondem a estímulo — tema central em{" "}
            <Link to="/blog/neuroplasticidade-cerebro-evolui" className="text-primary hover:underline">neuroplasticidade</Link> e em{" "}
            <Link to="/blog/sua-pontuacao-qi-pode-mudar" className="text-primary hover:underline">mudanças de pontuação ao longo do tempo</Link>.
          </p>
          <p className="text-muted-foreground mb-6">
            Um plano de 30 dias funciona melhor como “preparação de pico” — como antes de um vestibular ou de um{" "}
            <Link to="/blog/como-se-preparar-teste-qi" className="text-primary hover:underline">teste de QI formal</Link> — do que como promessa milagrosa.
          </p>

          <ArticleMidAdSense />

          <h2 className="text-3xl font-bold mt-12 mb-6">Semana 1: fundação (sono e movimento)</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>7–8 h de sono, horário fixo (veja{" "}
              <Link to="/blog/qi-e-sono" className="text-primary hover:underline">QI e sono</Link>)
            </li>
            <li>150 min/semana de aeróbico moderado ou 20 min/dia de caminhada acelerada</li>
            <li>Eliminar telas 1 h antes de dormir e reduzir álcool na semana do teste</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Semanas 2–3: cérebro ativo</h2>
          <p className="text-muted-foreground mb-4">
            Reserve 20–30 min/dia para desafios cognitivos: matrizes, raciocínio verbal, aprendizado de idioma ou instrumento.
            A lista em{" "}
            <Link to="/blog/atividades-que-aumentam-qi" className="text-primary hover:underline">atividades que aumentam QI</Link>{" "}
            oferece opções com evidência.
          </p>
          <h3 className="text-2xl font-bold mt-8 mb-4">Nutrição que apoia cognição</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Ômega-3, vegetais folhosos, hidratação constante</li>
            <li>Evitar ultraprocessados e picos de açúcar antes de treinar raciocínio</li>
            <li>Detalhes em{" "}
              <Link to="/blog/impacto-nutricao-dieta-funcao-cognitiva-qi" className="text-primary hover:underline">nutrição e função cognitiva</Link>
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Semana 4: consolidação e medição</h2>
          <Card className="p-6 my-8">
            <p className="text-sm text-muted-foreground mb-4 font-medium text-foreground">Checklist dos últimos 7 dias</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
              <li>Manter rotina de sono e exercício sem “variações heróicas”</li>
              <li>2 dias antes do teste: descanso mental, nada de maratonas de estudo</li>
              <li>Refazer o mesmo{" "}
                <Link to="/teste" className="text-primary hover:underline">teste BomQI</Link> em ambiente silencioso, pela manhã
              </li>
            </ul>
          </Card>
          <p className="text-muted-foreground mb-6">
            Compare com a linha de base e leia{" "}
            <Link to="/blog/como-interpretar-resultado-qi" className="text-primary hover:underline">como interpretar o resultado</Link>.
            Para estratégias de longo prazo, continue em{" "}
            <Link to="/blog/como-aumentar-qi" className="text-primary hover:underline">como aumentar o QI</Link>.
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Lição prática</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Se faltar tempo, priorize sono e aeróbico: são os dois pilares com maior retorno em 30 dias. Treino de
                  app sem dormir bem raramente aparece no resultado.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/como-aumentar-qi-rapidamente" className="text-primary hover:underline">Como aumentar o QI rapidamente</Link>,{" "}
            <Link to="/blog/qi-e-exercicio-fisico" className="text-primary hover:underline">QI e exercício físico</Link> e{" "}
            <Link to="/blog/como-melhorar-cerebro" className="text-primary hover:underline">como melhorar o cérebro</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Dá para aumentar 10 pontos de QI em 30 dias?",
              answer:
                "Em testes repetidos, variações de poucos pontos são comuns por prática, sono e foco. Saltos grandes e permanentes em poucas semanas são improváveis na vida adulta.",
            },
            {
              question: "Quantas horas por dia devo treinar?",
              answer:
                "20–30 minutos de desafio cognitivo focado costumam bastar, somados a exercício e sono. Mais horas sem qualidade geram fadiga, não ganho.",
            },
            {
              question: "Suplementos aceleram o plano?",
              answer:
                "A base é sono, movimento e alimentação. Suplementos têm papel marginal e devem ser avaliados com profissional — veja análise em suplementos e QI.",
            },
            {
              question: "Adolescente pode seguir o mesmo roteiro?",
              answer:
                "Sim, com adaptação de carga e sono maior. Para faixa etária específica, consulte como melhorar o QI de adolescentes.",
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
            {getRelatedArticles("como-melhorar-qi-30-dias", 3).map((article) => (
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

export default ComoMelhorarQI30Dias;
