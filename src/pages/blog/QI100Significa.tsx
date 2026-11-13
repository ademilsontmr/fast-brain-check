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

const QI100Significa = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-100-significa";
  const articleTitle = "QI 100 Significa o Quê? Média Explicada em 2026";
  const articleDescription =
    "QI 100 significa o quê? Entenda a média da escala, o percentil 50, o que você pode esperar no dia a dia e como comparar com outras faixas.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-100-significa",
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
          <span>QI 100 Significa</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>20 de Julho de 2026</time>
          <span>•</span>
          <span>12 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Target className="w-24 h-24 text-blue-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            <strong>QI 100 significa</strong> exatamente a <strong>média</strong> da população na escala mais usada (média 100, desvio padrão 15). Não é “baixo”, não é “gênio”: é o centro da curva. Cerca de metade das pessoas fica abaixo de 100 e metade acima — o famoso <strong>percentil 50</strong>.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo em 15 segundos</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ QI 100 = média estatística da população</li>
                  <li>✓ Percentil ≈ 50 (melhor que ~50% das pessoas)</li>
                  <li>✓ Faixa “média ampla”: 85–115 (≈68% da população)</li>
                  <li>✓ Não define sucesso, carreira ou valor pessoal</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por que o número 100 existe?</h2>
          <p className="text-muted-foreground mb-4">
            Testes padronizados (WAIS, WISC, Raven e equivalentes online bem calibrados) são construídos para que a média da amostra de referência seja 100. Isso facilita comparar qualquer pessoa com a população geral, independentemente do ano ou do país — desde que o teste esteja bem normatizado.
          </p>
          <p className="text-muted-foreground mb-6">
            Quando alguém pergunta “QI 100 é bom?”, a resposta técnica é: <strong>é normal</strong>. A maioria das atividades escolares, profissionais e sociais do dia a dia foi desenhada para pessoas nessa região da curva.
          </p>

          <ArticleMidAdSense />
          <h2 className="text-3xl font-bold mt-12 mb-6">QI 100 no dia a dia: o que esperar</h2>
          <h3 className="text-2xl font-bold mt-8 mb-4">Aprendizado e trabalho</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Consegue acompanhar ensino médio e superior com esforço típico</li>
            <li>Desempenho profissional depende mais de hábitos, rede e prática do que do número isolado</li>
            <li>Pode se destacar em áreas específicas mesmo com QI médio (interesse + treino)</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Raciocínio e resolução de problemas</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Lida bem com problemas cotidianos e instruções complexas</li>
            <li>Pode precisar de mais tempo em tarefas abstratas muito densas — isso é esperado</li>
            <li>Memória de trabalho e atenção influenciam tanto quanto o QI total</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI 100 vs outras faixas</h2>
          <Card className="p-6 my-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 pr-4">QI</th>
                  <th className="pb-3 pr-4">Classificação</th>
                  <th className="pb-3">Aprox. % população</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">70–84</td>
                  <td className="py-3 pr-4">Abaixo da média</td>
                  <td className="py-3">~14%</td>
                </tr>
                <tr className="border-b bg-primary/5">
                  <td className="py-3 pr-4 font-medium text-foreground">85–115</td>
                  <td className="py-3 pr-4">Média (100 no centro)</td>
                  <td className="py-3">~68%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">116–129</td>
                  <td className="py-3 pr-4">Acima da média</td>
                  <td className="py-3">~14%</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">130+</td>
                  <td className="py-3 pr-4">Muito alto / superdotação</td>
                  <td className="py-3">~2%</td>
                </tr>
              </tbody>
            </table>
          </Card>
          <p className="text-muted-foreground mb-6">
            Detalhes das faixas em{" "}
            <Link to="/blog/qi-faixas-pontuacao-significado" className="text-primary hover:underline">QI faixas e pontuação</Link>{" "}
            e na{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela de escala de QI</Link>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Mitos sobre QI 100</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li><strong>“QI 100 é baixo”</strong> — falso. É a média por definição.</li>
            <li><strong>“Com QI 100 não dá para ser bem-sucedido”</strong> — falso. Carreira depende de múltiplos fatores.</li>
            <li><strong>“QI 100 = mediocridade”</strong> — confunde estatística com julgamento moral.</li>
            <li><strong>“Se tirei 100 online, sou exatamente médio em tudo”</strong> — o score é uma estimativa global, não um mapa de cada habilidade.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI 100 e a média no Brasil</h2>
          <p className="text-muted-foreground mb-6">
            Estudos internacionais às vezes citam a{" "}
            <Link to="/blog/media-qi-brasil" className="text-primary hover:underline">média de QI no Brasil</Link>{" "}
            abaixo de 100. Isso não muda o significado do seu 100 individual: se o teste for bem calibrado, 100 continua sendo “médio” na escala do instrumento. Diferenças entre países misturam educação, nutrição e método — não rotulam pessoas.
          </p>

          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Como usar um resultado QI 100</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">Faça</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Compare com a faixa 85–115</li>
                  <li>✓ Olhe índices parciais se disponíveis</li>
                  <li>✓ Foque em hábitos e prática deliberada</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Evite</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Se comparar com gênios da internet</li>
                  <li>• Tratar um único teste como destino</li>
                  <li>• Confundir QI com inteligência emocional</li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Próximo passo</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Se ainda não tem um número confiável, faça um teste estruturado e interprete o resultado com as faixas — não com mitos de redes sociais.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/o-que-e-qi-medio" className="text-primary hover:underline">O que é QI médio</Link>,{" "}
            <Link to="/blog/qi-110-e-bom" className="text-primary hover:underline">QI 110 é bom?</Link>,{" "}
            <Link to="/blog/percentil-qi-o-que-significa" className="text-primary hover:underline">o que é percentil de QI</Link> e{" "}
            <Link to="/blog/como-interpretar-resultado-qi" className="text-primary hover:underline">como interpretar resultado de QI</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "QI 100 significa o quê exatamente?",
              answer:
                "Significa desempenho cognitivo na média da população usada para calibrar o teste — tipicamente o percentil 50, com média 100 e desvio padrão 15.",
            },
            {
              question: "QI 100 é bom ou ruim?",
              answer:
                "É normal. Nem acima nem abaixo da média. A maior parte das demandas escolares e profissionais do dia a dia foi pensada para essa faixa.",
            },
            {
              question: "Quantas pessoas têm QI 100?",
              answer:
                "O valor exato 100 é um ponto na curva; a faixa 85–115 concentra cerca de 68% da população. Muitos resultados “ao redor de 100” caem nessa região.",
            },
            {
              question: "QI 100 online é igual a QI 100 no WAIS?",
              answer:
                "Não necessariamente. Escalas diferentes e condições de aplicação mudam o número. Use o resultado online como estimativa e o clínico quando precisar de laudo.",
            },
            {
              question: "Dá para subir de QI 100?",
              answer:
                "Hábitos, sono, prática em raciocínio e educação podem melhorar desempenho em testes. Mudanças grandes em adultos costumam ser modestas — veja artigos sobre neuroplasticidade.",
            },
          ]}
        />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra seu número real</h3>
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
            {getRelatedArticles("qi-100-significa", 3).map((article) => (
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

export default QI100Significa;
