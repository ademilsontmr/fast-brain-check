import { BarChart3, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const PercentilQIOqueSignifica = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/percentil-qi-o-que-significa";
  const articleTitle = "Percentil de QI: O Que Significa e Como Interpretar em 2026";
  const articleDescription =
    "O que é percentil no teste de QI? Aprenda a converter QI em percentil, entender o ranking populacional e interpretar seu resultado sem confusão.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "percentil-qi-o-que-significa",
      publishDate: "2026-07-20",
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
          <span>Percentil de QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>20 de Julho de 2026</time>
          <span>•</span>
          <span>13 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-violet-500/20 to-indigo-500/5 rounded-lg mb-12 flex items-center justify-center">
          <BarChart3 className="w-24 h-24 text-violet-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            <strong>Percentil de QI</strong> responde a pergunta: <em>“superei quantas pessoas?”</em>. Se seu percentil é 84, você foi melhor que cerca de 84% da amostra de referência. É a forma mais intuitiva de ler o resultado — muitas vezes mais clara que o número bruto do QI.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Definição rápida</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Percentil = posição relativa na população</li>
                  <li>✓ QI 100 ≈ percentil 50</li>
                  <li>✓ QI 115 ≈ percentil 84</li>
                  <li>✓ QI 130 ≈ percentil 98 (top ~2%)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Percentil vs QI: qual a diferença?</h2>
          <p className="text-muted-foreground mb-4">
            O <strong>QI</strong> é um score padronizado (média 100, DP 15 na maioria dos testes). O <strong>percentil</strong> traduz esse score em ranking. Os dois descrevem a mesma performance — em linguagens diferentes.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li><strong>QI:</strong> útil para comparar com faixas clínicas e literatura científica</li>
            <li><strong>Percentil:</strong> útil para explicar “onde eu estou” para leigos</li>
            <li>Laudos bons costumam trazer os dois</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Tabela QI → percentil (aprox.)</h2>
          <p className="text-muted-foreground mb-4">
            Valores aproximados para distribuição normal com média 100 e DP 15:
          </p>
          <Card className="p-6 my-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 pr-4">QI</th>
                  <th className="pb-3 pr-4">Percentil aprox.</th>
                  <th className="pb-3">Leitura popular</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">70</td>
                  <td className="py-3 pr-4">~2</td>
                  <td className="py-3">Muito abaixo</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">85</td>
                  <td className="py-3 pr-4">~16</td>
                  <td className="py-3">Abaixo da média</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">100</td>
                  <td className="py-3 pr-4">~50</td>
                  <td className="py-3">Média</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">110</td>
                  <td className="py-3 pr-4">~75</td>
                  <td className="py-3">Acima da média</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">115</td>
                  <td className="py-3 pr-4">~84</td>
                  <td className="py-3">Bem acima</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">120</td>
                  <td className="py-3 pr-4">~91</td>
                  <td className="py-3">Superior</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">130</td>
                  <td className="py-3 pr-4">~98</td>
                  <td className="py-3">Top ~2%</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">145</td>
                  <td className="py-3 pr-4">~99,9</td>
                  <td className="py-3">Excepcional</td>
                </tr>
              </tbody>
            </table>
          </Card>
          <p className="text-muted-foreground mb-6">
            Para a escala completa, veja a{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela de escala de QI</Link>{" "}
            e as{" "}
            <Link to="/blog/qi-faixas-pontuacao-significado" className="text-primary hover:underline">faixas de pontuação</Link>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como ler o percentil sem se enganar</h2>
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Percentil não é “porcentagem de acerto”</h3>
          <p className="text-muted-foreground mb-4">
            Acertar 80% das questões <em>não</em> significa percentil 80. O percentil compara você com outras pessoas, não com o gabarito.
          </p>
          <h3 className="text-2xl font-bold mt-8 mb-4">2. A amostra de referência importa</h3>
          <p className="text-muted-foreground mb-4">
            Percentil 90 em um teste mal calibrado ou em amostra enviesada (só universitários, por exemplo) não equivale a percentil 90 no WAIS normativo.
          </p>
          <h3 className="text-2xl font-bold mt-8 mb-4">3. Intervalo de confiança</h3>
          <p className="text-muted-foreground mb-6">
            Laudos sérios às vezes mostram uma faixa (ex.: QI 108–116). O percentil também flutua. Um único número é uma estimativa, não um carimbo definitivo.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Percentil e Mensa / superdotação</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li><strong>Mensa:</strong> tipicamente top 2% → percentil ≥ 98 (QI ~130+)</li>
            <li><strong>Altas habilidades escolares:</strong> critérios variam; muitas vezes combinam QI, desempenho e avaliação multidisciplinar</li>
            <li>Percentil alto sozinho não gera laudo — é um indicador, não o processo completo</li>
          </ul>

          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Exemplos práticos</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">Percentil 50:</strong> exatamente no meio — veja{" "}
                <Link to="/blog/qi-100-significa" className="text-primary hover:underline">QI 100 significa</Link>
              </li>
              <li>
                <strong className="text-foreground">Percentil 75:</strong> acima da média — veja{" "}
                <Link to="/blog/qi-110-e-bom" className="text-primary hover:underline">QI 110 é bom?</Link>
              </li>
              <li>
                <strong className="text-foreground">Percentil 98:</strong> região de{" "}
                <Link to="/blog/superdotacao-o-que-e" className="text-primary hover:underline">superdotação / top 2%</Link>
              </li>
            </ul>
          </Card>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Dica de interpretação</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Se o relatório mostrar só QI, converta mentalmente com a tabela. Se mostrar só percentil, converta de volta para a faixa. Os dois lados da mesma moeda evitam leitura distorcida.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/qi-100-significa" className="text-primary hover:underline">QI 100 significa</Link>,{" "}
            <Link to="/blog/qi-110-e-bom" className="text-primary hover:underline">QI 110 é bom?</Link>,{" "}
            <Link to="/blog/como-interpretar-resultado-qi" className="text-primary hover:underline">como interpretar resultado</Link> e{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela de escala de QI</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "O que é percentil no teste de QI?",
              answer:
                "É a posição relativa do seu resultado na população de referência. Percentil 90 significa desempenho igual ou superior a cerca de 90% das pessoas da norma.",
            },
            {
              question: "Percentil 50 de QI é ruim?",
              answer:
                "Não. É a média. Metade da população fica abaixo, metade acima — exatamente o esperado para QI próximo de 100.",
            },
            {
              question: "Como converter QI em percentil?",
              answer:
                "Use a tabela da distribuição normal (média 100, DP 15). Exemplos: QI 100 ≈ P50, QI 115 ≈ P84, QI 130 ≈ P98.",
            },
            {
              question: "Percentil e ranking são a mesma coisa?",
              answer:
                "Quase: o percentil é um tipo de ranking estatístico. Não é a mesma coisa que nota percentual de acertos no teste.",
            },
            {
              question: "Preciso do percentil ou só do QI?",
              answer:
                "Os dois ajudam. QI facilita comparação clínica; percentil facilita comunicação. Relatórios bons trazem ambos.",
            },
          ]}
        />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Veja seu QI e o que ele representa</h3>
          <p className="text-muted-foreground mb-6">Faça seu teste de QI no BomQI — resultado em minutos.</p>
          <Button size="lg" className="gap-2" onClick={() => navigate("/teste")}>
            Fazer o Teste Agora <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Continue Lendo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("percentil-qi-o-que-significa", 3).map((article) => (
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

export default PercentilQIOqueSignifica;
