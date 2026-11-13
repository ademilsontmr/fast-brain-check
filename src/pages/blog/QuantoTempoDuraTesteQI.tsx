import { Clock, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const QuantoTempoDuraTesteQI = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/quanto-tempo-dura-teste-qi";
  const articleTitle = "Quanto Tempo Dura um Teste de QI";
  const articleDescription = "Duração de testes de QI online, WAIS, Raven e Mensa. O que esperar em cada formato.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "quanto-tempo-dura-teste-qi",
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
          <span>Quanto Tempo Dura um Teste de QI</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>15 de Janeiro de 2025</time>
          <span>•</span>
          <span>9 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Clock className="w-24 h-24 text-primary" />
        </div>
        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            A duração de um <strong>teste de QI</strong> varia de <strong>15 minutos online</strong> a{" "}
            <strong>2 horas presenciais</strong> no WAIS completo. Tempo reflete quantidade de subtestes, pausas clínicas e
            se o resultado sai na hora ou após correção profissional.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Online: 15–45 min, resultado imediato</li>
                  <li>✓ WAIS: 60–120 min + devolutiva</li>
                  <li>✓ Raven/Mensa: ~45–60 min supervisionados</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por tipo de instrumento</h2>
          <p className="text-muted-foreground mb-4">
            O{" "}
            <Link to="/blog/escala-inteligencia-wechsler-wais" className="text-primary hover:underline">WAIS</Link> aplica
            múltiplos subtestes verbais e de execução — por isso demora mais. Matrizes{" "}
            <Link to="/blog/matrizes-raven-teste-qi" className="text-primary hover:underline">Raven</Link> concentram-se em
            raciocínio não verbal contínuo.
          </p>
          <p className="text-muted-foreground mb-6">
            Visão geral em{" "}
            <Link to="/blog/o-que-e-teste-qi" className="text-primary hover:underline">o que é teste de QI</Link> e em{" "}
            <Link to="/blog/teste-qi-adultos" className="text-primary hover:underline">teste para adultos</Link>.
          </p>

          <ArticleMidAdSense />

          <h2 className="text-3xl font-bold mt-12 mb-6">Tabela de durações</h2>
          <Card className="p-6 my-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 pr-4">Formato</th>
                  <th className="pb-3 pr-4">Tempo</th>
                  <th className="pb-3">Resultado</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">BomQI online</td>
                  <td className="py-3 pr-4">15–40 min</td>
                  <td className="py-3">Imediato</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">WAIS presencial</td>
                  <td className="py-3 pr-4">1–2 h</td>
                  <td className="py-3">Dias (laudo)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Raven progressivo</td>
                  <td className="py-3 pr-4">40–60 min</td>
                  <td className="py-3">No dia</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Mensa Brasil</td>
                  <td className="py-3 pr-4">~60 min</td>
                  <td className="py-3">Após correção</td>
                </tr>
              </tbody>
            </table>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que prolonga o teste</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Pausas clínicas e entrevista prévia</li>
            <li>Adaptação para TDAH ou deficiência</li>
            <li>Versão completa vs abreviada do WAIS</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Testes com resultado na hora:{" "}
            <Link to="/blog/teste-qi-com-resultado-imediato" className="text-primary hover:underline">resultado imediato</Link>.
            Preparação:{" "}
            <Link to="/blog/como-se-preparar-teste-qi" className="text-primary hover:underline">como se preparar</Link>.
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Lição prática</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Reserve o dobro do tempo anunciado para presencial (chegada, instruções). Online, feche abas e use uma
                  janela sem interrupções.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/como-fazer-teste-de-qi" className="text-primary hover:underline">Como fazer teste de QI</Link>,{" "}
            <Link to="/blog/teste-qi-oficial" className="text-primary hover:underline">teste oficial</Link> e{" "}
            <Link to="/blog/melhores-testes-qi-online-2026" className="text-primary hover:underline">melhores testes online 2026</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Teste de QI online é mais curto que o presencial?",
              answer:
                "Geralmente sim. Menos subtestes e autoadministração reduzem tempo, com alguma perda de profundidade diagnóstica.",
            },
            {
              question: "WAIS pode levar um dia inteiro?",
              answer:
                "Sessão padrão cabe em manhã ou tarde. Avaliações neuropsicológicas completas podem ocupar dias, mas isso vai além do QI total.",
            },
            {
              question: "Criança aguenta teste longo?",
              answer:
                "WISC usa blocos menores com pausas. Veja teste infantil e idade certa para avaliar.",
            },
            {
              question: "Posso pausar o teste online?",
              answer:
                "Depende da plataforma. Pausar costuma invalidar comparação com normas cronometradas — prefira terminar de uma vez.",
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
            {getRelatedArticles("quanto-tempo-dura-teste-qi", 3).map((article) => (
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

export default QuantoTempoDuraTesteQI;
