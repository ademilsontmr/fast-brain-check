import { HelpCircle, ArrowRight, BookOpen, CheckCircle2, Lightbulb, Target } from "lucide-react";
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

const QualMeuQI = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qual-meu-qi";
  const articleTitle = "Qual Meu QI? Como Descobrir Agora em 2026";
  const articleDescription =
    "Qual meu QI? Descubra em minutos com teste online, veja o que cada faixa significa e quando vale avaliação com psicólogo. Guia prático 2026.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords:
      "qual meu qi, qual é o meu qi, descobrir meu qi, meu qi é quanto, saber meu qi agora, teste qi online",
  });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qual-meu-qi",
      publishDate: "2026-10-19",
      modifiedDate: "2026-10-19",
    })
  );

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span>Qual Meu QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time dateTime="2026-10-19">19 de Outubro de 2026</time>
          <span>•</span>
          <span>11 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-violet-500/5 rounded-lg mb-12 flex items-center justify-center">
          <HelpCircle className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            Se você digitou <strong>qual meu QI</strong> (ou “qual é o meu QI”), a resposta curta é:{" "}
            <strong>só um teste padronizado mostra o número</strong>. A forma mais rápida em 2026 é um{" "}
            <Link to="/blog/teste-qi-online-guia-completo" className="text-primary hover:underline">
              teste de QI online estruturado
            </Link>
            ; a mais formal é avaliação com psicólogo (WAIS/WISC). Abaixo, o caminho certo para cada objetivo.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">
                  Resposta rápida: como saber qual é o meu QI
                </h2>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Curiosidade / autoconhecimento → teste online (minutos)</li>
                  <li>✓ Laudo escolar ou clínico → psicólogo com WAIS/WISC</li>
                  <li>✓ Média da população = 100 · acima de 115 já é superior</li>
                  <li>✓ Resultado varia com sono, foco e qualidade do teste</li>
                </ul>
                <Button
                  size="sm"
                  className="mt-4 gap-2"
                  onClick={() => navigate("/teste")}
                >
                  Descobrir meu QI agora <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como descobrir “qual é o meu QI” na prática</h2>
          <p className="text-muted-foreground mb-6">
            Não dá para estimar QI só por nota na escola, cargo ou “feeling”. O número vem de um instrumento
            calibrado. Estes são os 3 caminhos que o Brasil mais usa:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Teste de QI online (mais rápido)</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Ideal se a busca é “qual meu QI agora”</li>
            <li>Dura em geral 5–20 minutos</li>
            <li>Bom para triagem e comparação com a média 100</li>
            <li>Escolha sites com metodologia clara — evite quizzes virais</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Veja critérios em{" "}
            <Link to="/blog/teste-qi-gratuito-e-confiavel" className="text-primary hover:underline">
              teste gratuito e confiável
            </Link>{" "}
            e o passo a passo em{" "}
            <Link to="/blog/como-fazer-teste-de-qi" className="text-primary hover:underline">
              como fazer teste de QI
            </Link>
            .
          </p>

          <ArticleMidAdSense />
          <h3 className="text-2xl font-bold mt-8 mb-4">2. Avaliação com psicólogo (padrão ouro)</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>WAIS-IV (adultos) ou WISC-V (crianças)</li>
            <li>Único caminho com validade clínica plena e laudo</li>
            <li>Indicado para superdotação, AEE, processos seletivos formais</li>
            <li>Custo e tempo maiores — compare em{" "}
              <Link to="/blog/quanto-custa-teste-de-qi" className="text-primary hover:underline">
                quanto custa
              </Link>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Mensa e associações de alto QI</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Não responde “qual meu QI” com número aberto em todos os casos</li>
            <li>Aprova quem está no top ~2% (cerca de QI 130+)</li>
            <li>Detalhes:{" "}
              <Link to="/blog/teste-mensa-brasil" className="text-primary hover:underline">
                teste Mensa Brasil
              </Link>
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que o número do seu QI significa</h2>
          <p className="text-muted-foreground mb-4">
            Escala clássica: média <strong>100</strong>, desvio padrão <strong>15</strong>. Use a tabela para
            interpretar depois do teste:
          </p>

          <Card className="p-6 my-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 pr-4">QI</th>
                  <th className="pb-3 pr-4">Faixa</th>
                  <th className="pb-3">Aproximadamente</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">70–84</td>
                  <td className="py-3 pr-4">Abaixo da média</td>
                  <td className="py-3">Percentil baixo</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">85–114</td>
                  <td className="py-3 pr-4">Média</td>
                  <td className="py-3">
                    <Link to="/blog/qi-100-significa" className="text-primary hover:underline">
                      QI 100
                    </Link>{" "}
                    = percentil 50
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">115–129</td>
                  <td className="py-3 pr-4">Superior</td>
                  <td className="py-3">
                    <Link to="/blog/qi-110-e-bom" className="text-primary hover:underline">
                      110
                    </Link>
                    /
                    <Link to="/blog/qi-120-e-bom" className="text-primary hover:underline">
                      120
                    </Link>{" "}
                    são comuns nessa faixa
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">130+</td>
                  <td className="py-3 pr-4">Muito superior</td>
                  <td className="py-3">
                    Top ~2% · ver{" "}
                    <Link to="/blog/qi-130-significa" className="text-primary hover:underline">
                      QI 130
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
          <p className="text-muted-foreground mb-6">
            Tabela completa:{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">
              escala de QI
            </Link>{" "}
            e{" "}
            <Link to="/blog/percentil-qi-o-que-significa" className="text-primary hover:underline">
              o que é percentil
            </Link>
            .
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">“Meu QI é quanto?” — erros que baixam o score</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Fazer o teste com sono ruim ou barulho</li>
            <li>Usar celular em tela pequena sem foco</li>
            <li>Chutar rápido demais em questões de matriz</li>
            <li>Confiar em teste de 5 perguntas com “QI 180”</li>
            <li>Comparar score de app viral com WAIS clínico</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Qual meu QI em relação ao Brasil?</h2>
          <p className="text-muted-foreground mb-6">
            A média internacional de referência dos testes é 100. No Brasil, amostras online (IIT 2025)
            apontam cerca de <strong>95</strong>; compilações clássicas citavam números mais baixos.
            Detalhes em{" "}
            <Link to="/blog/media-qi-brasil" className="text-primary hover:underline">
              média de QI no Brasil
            </Link>
            . Seu resultado individual importa mais do que a média nacional.
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">
                  Quer a resposta agora?
                </h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
                  O BomQI foi feito para quem busca “qual meu QI” com resultado interpretável — não um
                  quiz de redes sociais. Faça o teste, veja a prévia e desbloqueie o score completo se
                  quiser.
                </p>
                <Button className="gap-2" onClick={() => navigate("/teste")}>
                  Fazer o teste de QI <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">
                  Diferença para “como saber meu QI”
                </h3>
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  Este guia responde à busca <strong>qual meu QI</strong> com foco em obter o número e
                  interpretá-lo. O artigo{" "}
                  <Link to="/blog/como-saber-meu-qi" className="text-primary hover:underline">
                    como saber meu QI
                  </Link>{" "}
                  aprofunda os 6 métodos lado a lado (custo × precisão).
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/como-saber-meu-qi" className="text-primary hover:underline">
              Como saber meu QI
            </Link>
            ,{" "}
            <Link to="/blog/como-interpretar-resultado-qi" className="text-primary hover:underline">
              como interpretar o resultado
            </Link>
            ,{" "}
            <Link to="/blog/o-que-e-qi" className="text-primary hover:underline">
              o que é QI
            </Link>{" "}
            e{" "}
            <Link to="/blog/teste-qi-com-resultado-imediato" className="text-primary hover:underline">
              resultado imediato
            </Link>
            .
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Qual meu QI sem fazer teste?",
              answer:
                "Não há como saber com precisão sem um instrumento padronizado. Estimativas por profissão ou notas escolares são só aproximações ruins.",
            },
            {
              question: "Qual é o meu QI médio esperado?",
              answer:
                "A média de referência dos testes é 100. No Brasil, amostras online recentes ficam perto de 95. Seu resultado individual pode estar bem acima ou abaixo disso.",
            },
            {
              question: "Em quanto tempo descubro meu QI online?",
              answer:
                "A maioria dos testes estruturados leva de 5 a 20 minutos. O BomQI entrega resultado após o questionário.",
            },
            {
              question: "QI online vale como laudo?",
              answer:
                "Não. Laudo formal exige psicólogo com WAIS ou WISC. Online serve para autoconhecimento e triagem.",
            },
            {
              question: "Posso refazer o teste se não gostei do número?",
              answer:
                "Sim, mas espere semanas ou meses. Refazer no mesmo dia infla o score por memória das questões.",
            },
          ]}
        />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra qual é o seu QI agora</h3>
          <p className="text-muted-foreground mb-6">
            Teste online em português, resultado interpretável em minutos.
          </p>
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
            {getRelatedArticles("qual-meu-qi", 3).map((article) => (
              <Card key={article.slug} className="p-6 hover:shadow-lg border-2 border-primary/20">
                <Link to={`/blog/${article.slug}`}>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold mt-3 mb-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{article.description}</p>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        <section className="mt-16">
          <SocialProofCarousel />
        </section>
      </article>
      <Footer />
    </div>
  );
};

export default QualMeuQI;
