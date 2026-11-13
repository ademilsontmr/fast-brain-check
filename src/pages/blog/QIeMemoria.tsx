import { Brain, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const QIeMemoria = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-e-memoria";
  const articleTitle = "QI e Memória: Relação Científica Entre Inteligência e Memória";
  const articleDescription = "Descubra a relação entre QI e memória, como diferentes tipos de memória afetam a inteligência e estratégias para melhorar ambos.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-e-memoria",
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
          <span>QI e Memória</span>
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
            <strong>QI e memória</strong> caminham juntos em boa parte dos testes modernos: WAIS e similares incluem
            subtestes de <strong>memória de trabalho e aprendizado auditivo</strong>, de modo que quem falha em lembrar
            sequências pode puxar o quociente para baixo mesmo com raciocínio lógico forte.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Correlação alta entre memória de trabalho e QI em estudos meta-analíticos</li>
                  <li>✓ Memória de longo prazo e QI podem divergir (alguém “esquecido” mas brilhante)</li>
                  <li>✓ Treinar memória melhora desempenho em subtestes, não necessariamente “QI de nascença”</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Tipos de memória no teste de QI</h2>
          <p className="text-muted-foreground mb-4">
            <strong>Memória de trabalho</strong> segura informações por segundos enquanto você resolve algo — é o “RAM”
            mental. <strong>Memória de longo prazo</strong> armazena fatos e procedimentos. O WAIS pesa a primeira; a vida
            adulta pesa a segunda. Entenda o instrumento em{" "}
            <Link to="/blog/escala-inteligencia-wechsler-wais" className="text-primary hover:underline">escala Wechsler (WAIS)</Link>.
          </p>
          <p className="text-muted-foreground mb-6">
            Diferenças conceituais entre capacidade geral e facetas aparecem em{" "}
            <Link to="/blog/diferencas-qi-e-inteligencia" className="text-primary hover:underline">diferenças entre QI e inteligência</Link>.
          </p>


          <h2 className="text-3xl font-bold mt-12 mb-6">Por que alguém inteligente “esquece tudo”?</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>TDAH e ansiedade sabotam memória de trabalho — veja{" "}
              <Link to="/blog/qi-e-tdah" className="text-primary hover:underline">QI e TDAH</Link>
            </li>
            <li>Sono ruim apaga consolidação — tema em{" "}
              <Link to="/blog/qi-e-sono" className="text-primary hover:underline">QI e sono</Link>
            </li>
            <li>Depender de listas e apps não é fraqueza; é compensação cognitiva</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como melhorar memória e pontuação</h2>
          <Card className="p-6 my-8">
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
              <li>Repetição espaçada para nomes e termos técnicos</li>
              <li>Exercício aeróbico (hipocampo) —{" "}
                <Link to="/blog/qi-e-exercicio-fisico" className="text-primary hover:underline">QI e exercício</Link>
              </li>
              <li>Técnicas de chunking (agrupar dígitos em blocos)</li>
              <li>Minimizar multitarefa durante estudo</li>
            </ul>
          </Card>
          <p className="text-muted-foreground mb-6">
            O guia{" "}
            <Link to="/blog/como-melhorar-cerebro" className="text-primary hover:underline">como melhorar o cérebro</Link>{" "}
            reúne hábitos que afetam memória e raciocínio juntos.
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Lição prática</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Antes de um teste, treine 5 minutos repetição de dígitos para aquecer memória de trabalho — ganho
                  modesto, mas real em ambientes com pressão de tempo.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/neuroplasticidade-cerebro-evolui" className="text-primary hover:underline">Neuroplasticidade</Link>,{" "}
            <Link to="/blog/top-15-jogos-apps-treinar-cerebro" className="text-primary hover:underline">apps para treinar o cérebro</Link> e{" "}
            <Link to="/blog/como-aumentar-inteligencia" className="text-primary hover:underline">como aumentar a inteligência</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Memória ruim significa QI baixo?",
              answer:
                "Não necessariamente. QI agrega vários domínios; memória isolada pode estar prejudicada por sono, estresse ou saúde.",
            },
            {
              question: "Treinar memória aumenta o QI?",
              answer:
                "Pode elevar subtestes parecidos com o que você treinou (efeito de prática). Ganho generalizado é modesto.",
            },
            {
              question: "Idosos perdem memória e QI juntos?",
              answer:
                "Memória episódica costuma declinar antes; QI normativo por idade ainda se mantém em torno de 100.",
            },
            {
              question: "Alzheimer e QI: o que muda primeiro?",
              answer:
                "Memória recente e orientação geralmente falham antes. Diagnóstico é clínico, não por um teste online.",
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
            {getRelatedArticles("qi-e-memoria", 3).map((article) => (
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

export default QIeMemoria;
