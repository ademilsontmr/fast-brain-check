import { ShieldAlert, ArrowRight, BookOpen, CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react";
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

const MyIQEConfiavel = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/myiq-e-confiavel";
  const articleTitle = "MyIQ é Confiável? Análise Honesta do Teste de QI (2026)";
  const articleDescription =
    "MyIQ é confiável? Veja o que o teste mede, modelo de assinatura, se o QI é oficial e alternativas em português no Brasil.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords:
      "myiq é confiável, myiq confiavel, my iq teste, myiq review, myiq vale a pena, cancelar myiq",
  });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "myiq-e-confiavel",
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
          <span>MyIQ é Confiável</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time dateTime="2026-11-10">10 de Novembro de 2026</time>
          <span>•</span>
          <span>11 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-orange-500/20 to-amber-500/5 rounded-lg mb-12 flex items-center justify-center">
          <ShieldAlert className="w-24 h-24 text-orange-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            <strong>MyIQ é confiável?</strong> A pergunta explodiu no Google Brasil depois dos anúncios
            da marca. Resposta direta: o MyIQ é um <strong>teste online comercial</strong> (estilo
            matrizes, ~40 questões) com relatório e assinatura — útil para curiosidade,{" "}
            <strong>não é QI clínico nem laudo</strong>.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Veredito em 20 segundos</h2>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Confiável como entretenimento / triagem online</li>
                  <li>✗ Não substitui WAIS/WISC nem admissão Mensa</li>
                  <li>⚠ Modelo: assinatura + certificado + treino — leia o preço</li>
                  <li>✓ Compare com opções transparentes em PT-BR</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que o MyIQ oferece</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Teste com dezenas de questões (padrões, lógica, memória)</li>
            <li>Score estimado, percentil e “perfil cognitivo”</li>
            <li>Certificado e exercícios / cursos no plano pago</li>
            <li>Fortemente impulsionado por Google Ads</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">MyIQ é golpe?</h2>
          <p className="text-muted-foreground mb-4">
            Em geral <strong>não é um “golpe” no sentido de site falso</strong>: existe produto, reviews e
            fluxo de cancelamento. A frustração mais comum é outra:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Anúncio sugere facilidade / “descubra seu QI”; o valor está na assinatura</li>
            <li>Pessoas esperavam teste 100% grátis com score oficial</li>
            <li>Cobrança recorrente se não cancelar no prazo</li>
          </ul>
          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">Antes de assinar</h3>
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  Confira preço, período de trial, como cancelar e o que acontece sem pagar. Se o QI
                  completo só aparece depois do cartão, trate como compra — não como “teste grátis”.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">MyIQ vs BomQI vs Tua Saúde vs Mensa</h2>
          <Card className="p-6 my-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 pr-3">Opção</th>
                  <th className="pb-3 pr-3">Modelo</th>
                  <th className="pb-3">Melhor para</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-3 font-medium text-foreground">MyIQ</td>
                  <td className="py-3 pr-3">Assinatura internacional</td>
                  <td className="py-3">Quem quer app + treino + certificado</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-3 font-medium text-foreground">BomQI</td>
                  <td className="py-3 pr-3">Teste PT · prévia + completo (PIX)</td>
                  <td className="py-3">BR: clareza e resultado interpretável</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-3 font-medium text-foreground">Tua Saúde</td>
                  <td className="py-3 pr-3">Conteúdo + teste longo grátis</td>
                  <td className="py-3">Quem busca marca de saúde</td>
                </tr>
                <tr>
                  <td className="py-3 pr-3 font-medium text-foreground">Mensa</td>
                  <td className="py-3 pr-3">Desafio / admissão top 2%</td>
                  <td className="py-3">Alto QI formal (processo próprio)</td>
                </tr>
              </tbody>
            </table>
          </Card>
          <p className="text-muted-foreground mb-6">
            Comparativo amplo:{" "}
            <Link to="/blog/teste-qi-online-gratuito" className="text-primary hover:underline">
              teste de QI online gratuito
            </Link>
            .
          </p>

          <ArticleMidAdSense />
          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">
                  Alternativa em português
                </h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
                  Se você só quer saber seu número com transparência, faça o BomQI: teste online,
                  linguagem clara e sem fingir que somos avaliação clínica.
                </p>
                <Button className="gap-2" onClick={() => navigate("/teste")}>
                  Testar no BomQI <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/teste-qi-confiavel" className="text-primary hover:underline">Teste confiável</Link>,{" "}
            <Link to="/blog/teste-qi-gratuito-e-confiavel" className="text-primary hover:underline">gratuito e confiável</Link>,{" "}
            <Link to="/blog/qual-meu-qi" className="text-primary hover:underline">qual meu QI</Link> e{" "}
            <Link to="/blog/melhores-testes-qi-online-2026" className="text-primary hover:underline">melhores testes 2026</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "MyIQ é confiável para medir QI?",
              answer:
                "Como estimativa online, sim no sentido de entregar um score. Como medida clínica oficial, não.",
            },
            {
              question: "MyIQ é grátis?",
              answer:
                "O marketing destaca descobrir o QI; o relatório completo e extras costumam exigir plano pago. Confira na hora do checkout.",
            },
            {
              question: "Posso usar MyIQ para Mensa ou escola?",
              answer:
                "Não. Mensa e laudos escolares exigem processos/instrumentos próprios (teste Mensa ou WISC/WAIS).",
            },
            {
              question: "Vale a pena vs BomQI?",
              answer:
                "Depende: MyIQ aposta em assinatura e treino; BomQI foca teste em português com proposta de preço clara para o resultado.",
            },
          ]}
        />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Prefere transparência em português?</h3>
          <p className="text-muted-foreground mb-6">Faça o teste BomQI e veja o que está incluso antes de pagar.</p>
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
            {getRelatedArticles("myiq-e-confiavel", 3).map((article) => (
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

export default MyIQEConfiavel;
