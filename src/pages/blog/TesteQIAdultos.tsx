import { User, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const TesteQIAdultos = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/teste-qi-adultos";
  const articleTitle = "Teste de QI para Adultos";
  const articleDescription = "Melhores testes de QI para adultos: WAIS, Raven, online e presencial.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "teste-qi-adultos",
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
          <span>Teste de QI para Adultos</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>15 de Janeiro de 2025</time>
          <span>•</span>
          <span>11 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <User className="w-24 h-24 text-primary" />
        </div>
        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            Um <strong>teste de QI para adultos</strong> válido usa instrumentos padronizados — principalmente o{" "}
            <strong>WAIS</strong> para 16–90 anos — ou matrizes não verbais como Raven. Online, você obtém triagem rápida;
            presencial, laudo com normas brasileiras e interpretação clínica.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ WAIS: referência clínica para adultos</li>
                  <li>✓ Raven: útil quando há barreira de idioma ou leitura</li>
                  <li>✓ Online BomQI: triagem grátis, não substitui WAIS</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Opções de teste</h2>
          <p className="text-muted-foreground mb-4">
            O guia{" "}
            <Link to="/blog/o-que-e-teste-qi" className="text-primary hover:underline">o que é teste de QI</Link>{" "}
            explica componentes. Adultos costumam começar pelo{" "}
            <Link to="/blog/escala-inteligencia-wechsler-wais" className="text-primary hover:underline">WAIS</Link> ou pelo{" "}
            <Link to="/blog/matrizes-raven-teste-qi" className="text-primary hover:underline">Raven</Link>.
          </p>
          <p className="text-muted-foreground mb-6">
            Para escolha segura de plataforma, leia{" "}
            <Link to="/blog/teste-qi-confiavel" className="text-primary hover:underline">teste de QI confiável</Link> e{" "}
            <Link to="/blog/teste-qi-online-guia-completo" className="text-primary hover:underline">guia de teste online</Link>.
          </p>

          <ArticleMidAdSense />

          <h2 className="text-3xl font-bold mt-12 mb-6">Comparativo rápido</h2>
          <Card className="p-6 my-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 pr-4">Tipo</th>
                  <th className="pb-3 pr-4">Duração típica</th>
                  <th className="pb-3">Melhor para</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">WAIS com psicólogo</td>
                  <td className="py-3 pr-4">1–2 h</td>
                  <td className="py-3">Diagnóstico, laudo</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Raven progressivo</td>
                  <td className="py-3 pr-4">40–60 min</td>
                  <td className="py-3">Raciocínio não verbal</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Online BomQI</td>
                  <td className="py-3 pr-4">15–40 min</td>
                  <td className="py-3">Curiosidade, baseline</td>
                </tr>
              </tbody>
            </table>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">Preparação e dia do teste</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Sono completo —{" "}
              <Link to="/blog/qi-e-sono" className="text-primary hover:underline">QI e sono</Link>
            </li>
            <li>Roteiro em{" "}
              <Link to="/blog/como-se-preparar-teste-qi" className="text-primary hover:underline">como se preparar</Link>
            </li>
            <li>Idade 16+ para maior estabilidade —{" "}
              <Link to="/blog/idade-certa-para-fazer-teste-qi" className="text-primary hover:underline">idade certa</Link>
            </li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Lição prática</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Mensa Brasil usa teste supervisionado — veja{" "}
                  <Link to="/blog/teste-mensa-brasil" className="text-primary hover:underline">como entrar na Mensa</Link> se
                  buscar comunidade de alto desempenho.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/onde-fazer-teste-qi-brasil" className="text-primary hover:underline">Onde fazer teste no Brasil</Link>,{" "}
            <Link to="/blog/quanto-custa-teste-de-qi" className="text-primary hover:underline">quanto custa</Link>,{" "}
            <Link to="/blog/como-interpretar-resultado-qi" className="text-primary hover:underline">interpretar resultado</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Qual o melhor teste de QI para adultos?",
              answer:
                "WAIS aplicado por psicólogo é o padrão clínico. Raven é alternativa forte para raciocínio não verbal. Online serve triagem.",
            },
            {
              question: "Teste online é aceito por empresas?",
              answer:
                "Raramente. Processos sérios usam instrumentos supervisionados — veja QI em processos seletivos.",
            },
            {
              question: "Adulto 40 anos pode fazer WAIS?",
              answer:
                "Sim. Normas por idade mantêm média 100; não compare com jovens sem ajuste.",
            },
            {
              question: "Quantas vezes repetir o teste?",
              answer:
                "Efeito de prática distorce se repetir o mesmo instrumento em semanas. Espaçe meses ou use versões paralelas.",
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
            {getRelatedArticles("teste-qi-adultos", 3).map((article) => (
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

export default TesteQIAdultos;
