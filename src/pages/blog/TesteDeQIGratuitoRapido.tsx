import { Zap, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleLeadAdSense from "@/components/ArticleLeadAdSense";
import ArticleFAQ from "@/components/ArticleFAQ";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import { Card } from "@/components/ui/card";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const publishDate = "2026-11-13";

const TesteDeQIGratuitoRapido = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/teste-de-qi-gratuito-rapido";
  const articleTitle = "Teste de QI Gratuito Rápido: Tempo Real, Limites e Resultado (2026)";
  const articleDescription =
    "Teste de QI gratuito rápido: quanto tempo leva, o que dá para medir em 3–15 min, armadilhas de quiz de 1 minuto e como ver resultado sem paywall.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords:
      "teste de qi gratuito rápido, teste qi gratuito rápido, teste de qi rápido, teste qi rapido gratis, teste qi 3 minutos",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "teste-de-qi-gratuito-rapido",
      publishDate,
      modifiedDate: publishDate,
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
          <Link to="/blog/teste-de-qi" className="hover:text-primary">Teste de QI</Link>
          <span className="mx-2">/</span>
          <span>Gratuito rápido</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time dateTime={publishDate}>13 de Novembro de 2026</time>
          <span>•</span>
          <span>12 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-yellow-500/20 to-orange-500/10 rounded-lg mb-12 flex items-center justify-center">
          <Zap className="w-24 h-24 text-yellow-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            A busca <strong>teste de QI gratuito rápido</strong> junta duas expectativas: <strong>não pagar</strong> e{" "}
            <strong>terminar em minutos</strong>. Isso é possível para <em>triagem</em>, não para laudo clínico. Este
            artigo detalha faixas de tempo, o que cada duração mede bem e onde isso diverge do guia{" "}
            <Link to="/blog/teste-qi-com-resultado-imediato" className="text-primary hover:underline">
              resultado imediato
            </Link>{" "}
            (foco na experiência de ver o score, não em “grátis + rápido”).
          </p>

          <div className="not-prose bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              <div className="text-sm text-green-800 dark:text-green-200">
                <p className="font-bold text-green-900 dark:text-green-100 text-base mb-2">Resumo prático</p>
                <ul className="list-disc pl-5 space-y-1 m-0">
                  <li>3–8 min: padrão em sites modernos (ex.: ~30 questões)</li>
                  <li>10–20 min: ainda “rápido” versus WAIS (1–2 h)</li>
                  <li>Menos de 2 min: marketing, não ciência</li>
                  <li>Grátis + rápido: confira se o número aparece antes do cartão</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Quanto tempo cada tipo de teste leva</h2>
          <div className="overflow-x-auto not-prose my-6">
            <table className="w-full text-sm border border-border rounded-lg">
              <thead className="bg-muted/50">
                <tr>
                  <th className="p-3 text-left">Tipo</th>
                  <th className="p-3 text-left">Duração típica</th>
                  <th className="p-3 text-left">Uso ideal</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-t">
                  <td className="p-3">Quiz viral</td>
                  <td className="p-3">30 s – 2 min</td>
                  <td className="p-3">Entretenimento</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Teste online estruturado</td>
                  <td className="p-3">3–15 min</td>
                  <td className="p-3">Triagem, comparação com média</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Matrizes Raven (parcial)</td>
                  <td className="p-3">15–40 min</td>
                  <td className="p-3">Raciocínio não verbal</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">WAIS/WISC</td>
                  <td className="p-3">1–2 h</td>
                  <td className="p-3">Laudo formal</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que um teste curto consegue (e não consegue) medir</h2>
          <p className="text-muted-foreground mb-4">
            Em poucos minutos, instrumentos online costumam pesar <strong>raciocínio fluido</strong> (padrões, sequências) e
            velocidade de processamento. Fatores como memória de trabalho prolongada, vocabulário amplo ou subtestes
            verbais longos ficam subamostrados. Isso não invalida o resultado como <strong>estimativa</strong>, desde que o
            site seja honesto sobre limites — tema do artigo{" "}
            <Link to="/blog/teste-qi-confiavel" className="text-primary hover:underline">teste confiável</Link>.
          </p>
          <p className="text-muted-foreground mb-6">
            Preparação conta: sono, café, distração no celular. Antes de comparar com Einstein, leia{" "}
            <Link to="/blog/como-se-preparar-teste-qi" className="text-primary hover:underline">como se preparar</Link>.
          </p>


          <h2 className="text-3xl font-bold mt-12 mb-6">Checklist: gratuito rápido que presta</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
            <li>Português brasileiro adaptado — <Link to="/blog/teste-qi-em-portugues" className="text-primary hover:underline">por quê importa</Link></li>
            <li>Pelo menos 20–30 itens de dificuldade crescente</li>
            <li>Prévia de resultado ou faixa antes de cobrança</li>
            <li>Explicação de que média populacional = 100</li>
            <li>Sem prometer QI 180 em teste de 60 segundos</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como encaixa o BomQI</h2>
          <p className="text-muted-foreground mb-6">
            O funil foi desenhado para ~3 minutos com dezenas de questões — alinhado à expectativa “rápido”. Não é WAIS. O{" "}
            <strong>BomQI não é gratuito</strong>: há prévia do nível e desbloqueio pago do resultado completo. Para opções
            realmente grátis no mercado, veja{" "}
            <Link to="/blog/teste-de-qi-gratuito" className="text-primary hover:underline">teste de QI gratuito</Link>. No
            mobile, use{" "}
            <Link to="/blog/teste-de-qi-no-celular" className="text-primary hover:underline">guia celular</Link>.
          </p>

          <div className="not-prose flex flex-wrap items-center gap-3 p-4 rounded-lg border bg-muted/40 my-8">
            <Clock className="w-8 h-8 text-primary shrink-0" />
            <Button onClick={() => navigate("/teste")} className="gap-2">
              Fazer em ~3 minutos <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Teste de QI gratuito rápido é confiável?",
              answer:
                "Pode ser útil para triagem se a metodologia for clara. Confiança detalhada está no guia gratuito e confiável.",
            },
            {
              question: "Qual a diferença para ‘resultado imediato’?",
              answer:
                "Rápido = duração do questionário; imediato = ver score logo após terminar (pode ser teste longo).",
            },
            {
              question: "1 minuto é suficiente?",
              answer:
                "Para entretenimento talvez; para QI sério, quase nunca. Desconfie de scores extremos.",
            },
            {
              question: "Posso refazer várias vezes?",
              answer:
                "Prática com itens parecidos pode inflar. Espere dias entre tentativas para comparar evolução.",
            },
            {
              question: "O BomQI é teste gratuito rápido?",
              answer:
                "É rápido (~3 min), mas não é grátis. O resultado completo é pago; confira o artigo gratuito e confiável para o modelo BomQI.",
            },
            {
              question: "Trend ‘gratuito rápido 2023/2022’ ainda vale?",
              answer:
                "Sim na intenção de busca; prefira conteúdo atualizado em 2026 com critérios transparentes.",
            },
          ]}
        />

        <SocialProofCarousel />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {getRelatedArticles("teste-de-qi-gratuito-rapido", 3).map((a) => (
            <Card key={a.slug} className="p-6 border-2 border-primary/20">
              <Link to={`/blog/${a.slug}`}>
                <h3 className="font-bold">{a.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{a.description}</p>
              </Link>
            </Card>
          ))}
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default TesteDeQIGratuitoRapido;
