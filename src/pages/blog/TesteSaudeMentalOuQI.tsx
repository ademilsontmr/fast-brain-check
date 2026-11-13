import { Brain, Heart, ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
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

const TesteSaudeMentalOuQI = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/teste-saude-mental-ou-qi";
  const articleTitle = "Teste de Saúde Mental ou Teste de QI? Diferenças e Quando Fazer Cada Um";
  const articleDescription =
    "Teste de saúde mental vs teste de QI: o que medem, riscos de confundir ansiedade com ‘QI baixo’ e quando procurar psicólogo.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords:
      "teste de saude mental, teste saúde mental online, teste de qi ou saúde mental, diferenca teste cognitivo saude mental",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "teste-saude-mental-ou-qi",
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
          <span>Saúde mental ou QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time dateTime={publishDate}>13 de Novembro de 2026</time>
          <span>•</span>
          <span>15 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-rose-500/20 to-purple-500/10 rounded-lg mb-12 flex items-center justify-center gap-6">
          <Brain className="w-20 h-20 text-primary" />
          <Heart className="w-20 h-20 text-rose-500" />
        </div>

        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            Buscas por <strong>teste de saúde mental</strong> cresceram junto com testes de QI virais. São ferramentas{" "}
            <strong>diferentes</strong>: uma mede humor, ansiedade ou estresse; a outra mede desempenho cognitivo
            padronizado. Este artigo não substitui{" "}
            <Link to="/blog/qi-e-ansiedade" className="text-primary hover:underline">QI e ansiedade</Link> (foco na
            correlação científica).
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Comparativo rápido</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-2 pr-4">Aspecto</th>
                  <th className="py-2 pr-4">Teste de QI</th>
                  <th className="py-2">Teste de saúde mental (triagem)</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-2 pr-4 font-medium text-foreground">Objetivo</td>
                  <td className="py-2 pr-4">Raciocínio, padrões, velocidade</td>
                  <td className="py-2">Sintomas emocionais / risco</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-medium text-foreground">Quem aplica</td>
                  <td className="py-2 pr-4">Psicólogo (formal) ou online</td>
                  <td className="py-2">CAPS, clínico, apps validados</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-medium text-foreground">Exemplos</td>
                  <td className="py-2 pr-4">WAIS, Raven, testes web</td>
                  <td className="py-2">PHQ-9, GAD-7, escalas de bem-estar</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium text-foreground">Substitui o outro?</td>
                  <td className="py-2 pr-4">Não</td>
                  <td className="py-2">Não</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="not-prose bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 rounded-lg p-6 my-8 flex gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
            <p className="text-sm text-amber-900 dark:text-amber-100 m-0">
              Este artigo <strong>não é diagnóstico</strong>. Se você tem pensamentos de autolesão ou incapacidade de
              funcionar no dia a dia, busque ajuda profissional ou emergência local — não um quiz de QI.
            </p>
          </div>


          <h2 className="text-3xl font-bold mt-12 mb-6">Por que buscas de “teste de saúde mental” explodiram</h2>
          <p className="text-muted-foreground mb-4">
            Redes sociais misturam “teste viral de personalidade”, depressão e QI no mesmo feed. Algoritmos empurram{" "}
            <strong>teste de saúde mental</strong> para quem assistiu vídeos sobre inteligência — daí a confusão. O
            Google Trends mostra crescimento paralelo a “teste de qi gratuito”; são públicos que se cruzam, mas as ferramentas
            não são intercambiáveis.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por que as pessoas confundem QI e saúde mental</h2>
          <p className="text-muted-foreground mb-4">
            Ansiedade na hora do teste pode <strong>baixar o score</strong> sem significar QI permanentemente baixo. Por
            isso laudos formais observam contexto emocional. Leia também{" "}
            <Link to="/blog/qi-e-tdah" className="text-primary hover:underline">QI e TDAH</Link> se a dúvida for
            atenção, não humor.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Quando priorizar cada teste</h2>
          <div className="not-prose bg-green-50 dark:bg-green-950/20 border border-green-200 rounded-lg p-6 my-8">
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
              <ul className="text-sm text-green-800 dark:text-green-200 space-y-2 m-0 list-disc pl-4">
                <li>Pergunta “minha inteligência é acima da média?” → teste de QI / hub</li>
                <li>Humor baixo há semanas, insônia, pânico → profissional de saúde mental</li>
                <li>Láudo escolar por superdotação → psicólogo + WISC</li>
                <li>Dúvida mista → avaliação integrada, não dois quizzes seguidos no celular</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que fazer na prática</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
            <li>Curiosidade sobre inteligência → hub{" "}
              <Link to="/blog/teste-de-qi" className="text-primary hover:underline">teste de QI</Link> ou BomQI abaixo</li>
            <li>Tristeza persistente, pânico, ideação → profissional de saúde mental, não quiz de QI</li>
            <li>Os dois temas relevantes → avaliação completa com psicólogo</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que “teste de saúde mental online” costuma medir</h2>
          <p className="text-muted-foreground mb-4">
            Triagens web frequentemente usam questionários curtos sobre humor, sono, energia e nervosismo. O PHQ-9, por
            exemplo, não diz seu QI — indica se vale conversar com um clínico sobre depressão. Já o GAD-7 foca ansiedade
            generalizada. Interpretar o resultado com base em um artigo ou print de tela é armadilha comum: escore alto em
            um dia ruim não é “diagnóstico de vida”.
          </p>
          <p className="text-muted-foreground mb-4">
            Testes de QI online, incluindo o{" "}
            <Link to="/blog/teste-qi-gratuito-e-confiavel" className="text-primary hover:underline">
              critério de confiabilidade
            </Link>
            , medem outro eixo: padrões visuais, memória de trabalho, velocidade de decisão. Uma pessoa com ansiedade
            forte pode errar por pressa, não por capacidade intelectual fixa — motivo para não usar o score como rótulo de
            identidade.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Sinais de que não é “QI baixo”, é saúde mental</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Prejuízo em várias áreas (trabalho, relações, autocuidado) há semanas ou meses</li>
            <li>Medo constante, ataques de pânico ou insônia que roubam foco antes mesmo do teste</li>
            <li>Tristeza profunda, falta de prazer ou culpa que não some com descanso</li>
            <li>Pensamentos de morte ou autolesão — prioridade absoluta é rede de apoio profissional</li>
          </ul>
          <p className="text-muted-foreground mb-8">
            Nesses casos, fazer dezenas de quizzes cognitivos pode reforçar autocrítica (“confirmei que sou burro”). A
            leitura útil é{" "}
            <Link to="/blog/qi-e-ansiedade" className="text-primary hover:underline">QI e ansiedade</Link>: entender
            por que estado emocional distorce performance momentânea.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Quem pode aplicar cada tipo de avaliação no Brasil</h2>
          <p className="text-muted-foreground mb-4">
            Láudo de QI com WAIS ou WISC é atribuição de psicólogo com testes psicológicos registrados no sistema
            profissional. Triagem de saúde mental em CAPS, UBS ou consultório segue roteiros clínicos. Sites como o BomQI
            oferecem <strong>estimativa educacional</strong> de desempenho cognitivo — não substituem CAPS, terapia ou
            psiquiatria.
          </p>

          <Button className="gap-2 not-prose" onClick={() => navigate("/teste")}>
            Teste de QI (não é saúde mental) <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Existe ‘teste de saúde mental gratuito’ confiável?",
              answer:
                "Algumas escalas (PHQ-9, GAD-7) existem como triagem; interpretação deve ser clínica. Não são teste de QI.",
            },
            {
              question: "BomQI mede saúde mental?",
              answer: "Não. Mede desempenho em tarefas cognitivas no momento do teste.",
            },
            {
              question: "Este artigo canibaliza QI e ansiedade?",
              answer: "Não: lá é ciência da correlação; aqui é escolha entre tipos de teste na busca Google.",
            },
            {
              question: "Ansiedade na hora do teste baixa meu QI para sempre?",
              answer:
                "Não. Afeta o desempenho naquele momento. Repetir em dia calmo e sem pressa tende a estabilizar o resultado online.",
            },
            {
              question: "Posso fazer teste de QI se estou em tratamento psiquiátrico?",
              answer:
                "Pode, por curiosidade, mas converse com seu médico se medicamentos alteram atenção. Láudo formal costuma esperar fase estável.",
            },
            {
              question: "Google mostra ‘teste de saúde mental’ e ‘teste de QI’ juntos — qual clico?",
              answer:
                "Leia o título: se fala de humor, ansiedade ou depressão, não é QI. Se fala de raciocínio lógico ou percentil, é cognitivo.",
            },
          ]}
        />

        <SocialProofCarousel />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {getRelatedArticles("teste-saude-mental-ou-qi", 3).map((a) => (
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

export default TesteSaudeMentalOuQI;
