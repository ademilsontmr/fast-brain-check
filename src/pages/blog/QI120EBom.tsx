import { Sparkles, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleFAQ from "@/components/ArticleFAQ";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const QI120EBom = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-120-e-bom";
  const articleTitle = "QI 120 É Bom? O Que Significa Esse Resultado em 2026";
  const articleDescription =
    "QI 120 é bom? Entenda o percentil ~91, faixa superior, diferença para Mensa (130+) e o que esse score muda na escola, carreira e autoconhecimento.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-120-e-bom",
      publishDate: "2026-08-31",
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
          <span>QI 120 É Bom</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time dateTime="2026-08-31">31 de Agosto de 2026</time>
          <span>•</span>
          <span>13 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-violet-500/20 to-indigo-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Sparkles className="w-24 h-24 text-violet-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            <strong>QI 120 é bom?</strong> Sim — e muito. Com média 100 e desvio padrão 15, um score de 120 cai na faixa <strong>superior</strong>, perto do <strong>percentil 91</strong>: você supera cerca de nove em cada dez pessoas na curva de referência. É um resultado que poucos atingem em testes bem aplicados.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resposta direta</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ QI 120 = faixa superior (bem acima da média)</li>
                  <li>✓ Percentil aproximado: ~91</li>
                  <li>✓ Forte em raciocínio abstrato e velocidade mental</li>
                  <li>✓ Ainda abaixo do corte típico da Mensa (~130)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Onde o QI 120 se encaixa na escala</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li><strong>85–89:</strong> abaixo da média</li>
            <li><strong>90–109:</strong> média</li>
            <li><strong>110–119:</strong> acima da média</li>
            <li><strong>120–129:</strong> superior</li>
            <li><strong>130+:</strong> muito superior / altas habilidades</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Compare com{" "}
            <Link to="/blog/qi-110-e-bom" className="text-primary hover:underline">QI 110</Link>,{" "}
            <Link to="/blog/qi-100-significa" className="text-primary hover:underline">QI 100</Link> e{" "}
            <Link to="/blog/qi-130-significa" className="text-primary hover:underline">QI 130</Link> para ver a progressão na escala.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que QI 120 costuma indicar na prática</h2>
          <h3 className="text-2xl font-bold mt-8 mb-4">Estudos e concursos</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Facilidade para absorver conceitos abstratos e conectar ideias distantes</li>
            <li>Bom desempenho em provas de lógica, matemática e interpretação complexa</li>
            <li>Ainda exige rotina de estudo — QI alto não substitui preparação</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Carreira</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Vantagem em funções analíticas, tecnologia, pesquisa e estratégia</li>
            <li>Capacidade de aprender ferramentas novas com rapidez</li>
            <li>Inteligência emocional e execução continuam decisivas para promoções</li>
          </ul>

          <Card className="p-6 my-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 pr-4">Score</th>
                  <th className="pb-3 pr-4">Classificação</th>
                  <th className="pb-3">Percentil aprox.</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">110</td>
                  <td className="py-3 pr-4">Acima da média</td>
                  <td className="py-3">~75</td>
                </tr>
                <tr className="border-b bg-primary/5">
                  <td className="py-3 pr-4 font-medium text-foreground">120</td>
                  <td className="py-3 pr-4">Superior</td>
                  <td className="py-3">~91</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">130</td>
                  <td className="py-3 pr-4">Muito superior</td>
                  <td className="py-3">~98</td>
                </tr>
              </tbody>
            </table>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI 120 é suficiente para a Mensa?</h2>
          <p className="text-muted-foreground mb-6">
            Em geral, <strong>não</strong>. A Mensa Brasil seleciona candidatos no top ~2% da população, o que equivale a cerca de QI 130 em escalas padronizadas. QI 120 já é excelente, mas costuma ficar abaixo do corte. Veja o guia{" "}
            <Link to="/blog/teste-mensa-brasil" className="text-primary hover:underline">teste Mensa Brasil</Link> e{" "}
            <Link to="/blog/superdotacao-o-que-e" className="text-primary hover:underline">superdotação</Link>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Erros ao interpretar QI 120</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Achar que “já é gênio” e parar de se desenvolver</li>
            <li>Comparar teste online com WAIS como se fossem idênticos</li>
            <li>Ignorar que QI mede desempenho cognitivo geral, não talento artístico ou social</li>
            <li>Esperar sucesso automático sem disciplina e prática</li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Próximo passo</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Se ainda não mediu seu QI com um teste estruturado, faça agora e compare com a{" "}
                  <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela de escala</Link>.
                  Se já tirou 120, use o resultado para escolher desafios à altura — cursos difíceis, projetos complexos, leitura exigente.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/percentil-qi-o-que-significa" className="text-primary hover:underline">Percentil de QI</Link>,{" "}
            <Link to="/blog/qi-faixas-pontuacao-significado" className="text-primary hover:underline">faixas de pontuação</Link>,{" "}
            <Link to="/blog/o-que-e-considerado-qi-alto" className="text-primary hover:underline">o que é QI alto</Link> e{" "}
            <Link to="/blog/como-interpretar-resultado-qi" className="text-primary hover:underline">como interpretar resultado</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "QI 120 é bom?",
              answer:
                "Sim. QI 120 está na faixa superior, com percentil próximo de 91. É um resultado muito acima da média populacional.",
            },
            {
              question: "QI 120 é considerado alto?",
              answer:
                "Sim. Na classificação clássica (média 100, DP 15), 120 entra na faixa superior, entre 120 e 129.",
            },
            {
              question: "Com QI 120 entro na Mensa?",
              answer:
                "Provavelmente não. A Mensa costuma exigir desempenho equivalente a QI 130 ou superior (top 2%). QI 120 já é excelente, mas fica abaixo desse corte.",
            },
            {
              question: "QI 120 online é confiável?",
              answer:
                "Serve como estimativa útil. Para laudo clínico ou escolar, avaliação com psicólogo (WAIS/WISC) é o padrão.",
            },
            {
              question: "QI 120 ou 110: qual a diferença real?",
              answer:
                "São cerca de 10 pontos na escala — estatisticamente significativos. Na prática, ambos são bons; 120 indica capacidade cognitiva ainda mais rara.",
            },
          ]}
        />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra em qual faixa você está</h3>
          <p className="text-muted-foreground mb-6">Teste de QI no BomQI — resultado em minutos com análise por faixas.</p>
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
            {getRelatedArticles("qi-120-e-bom", 3).map((article) => (
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

export default QI120EBom;
