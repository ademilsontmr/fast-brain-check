import { TrendingUp, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const QI110EBom = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-110-e-bom";
  const articleTitle = "QI 110 É Bom? O Que Significa Esse Resultado em 2026";
  const articleDescription =
    "QI 110 é bom? Entenda o percentil, a faixa acima da média, o que isso muda na escola e no trabalho e como interpretar sem mitos.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-110-e-bom",
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
          <span>QI 110 É Bom</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>20 de Julho de 2026</time>
          <span>•</span>
          <span>12 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-teal-500/20 to-emerald-500/5 rounded-lg mb-12 flex items-center justify-center">
          <TrendingUp className="w-24 h-24 text-teal-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            <strong>QI 110 é bom?</strong> Sim — está <strong>acima da média</strong>. Com média 100 e desvio padrão 15, um score de 110 fica cerca de dois terços de um desvio acima do centro, aproximadamente no <strong>percentil 75</strong>: você supera cerca de três em cada quatro pessoas na amostra de referência.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resposta direta</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ QI 110 = acima da média (não é “só médio”)</li>
                  <li>✓ Percentil aproximado: ~75</li>
                  <li>✓ Ainda dentro da faixa ampla 85–115, mas no topo dela</li>
                  <li>✓ Não chega a critério típico de superdotação (130+)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Onde o QI 110 se encaixa na escala</h2>
          <p className="text-muted-foreground mb-4">
            A classificação clássica coloca:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li><strong>90–109:</strong> média</li>
            <li><strong>110–119:</strong> média alta / acima da média</li>
            <li><strong>120–129:</strong> superior</li>
            <li><strong>130+:</strong> muito superior / altas habilidades</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Ou seja: 110 é o início da zona “acima da média”. Não é gênio — e não precisa ser. É um resultado sólido. Veja também{" "}
            <Link to="/blog/qi-100-significa" className="text-primary hover:underline">o que QI 100 significa</Link>{" "}
            e{" "}
            <Link to="/blog/o-que-e-considerado-qi-alto" className="text-primary hover:underline">o que é considerado QI alto</Link>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que QI 110 costuma indicar na prática</h2>
          <h3 className="text-2xl font-bold mt-8 mb-4">Escola e vestibulares</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Facilidade relativa para abstrair e seguir raciocínios longos</li>
            <li>Bom potencial para cursos competitivos — com estudo estruturado</li>
            <li>Não garante nota alta: disciplina e método pesam tanto quanto o QI</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Trabalho e carreira</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Capacidade confortável para funções que exigem análise e adaptação</li>
            <li>Bom ponto de partida para áreas técnicas, gestão e comunicação complexa</li>
            <li>Soft skills e experiência ainda diferenciam quem “só tem QI 110” de quem performa no top</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Comparação com 100 e 120</h3>
          <Card className="p-6 my-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 pr-4">Score</th>
                  <th className="pb-3 pr-4">Leitura</th>
                  <th className="pb-3">Percentil aprox.</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">100</td>
                  <td className="py-3 pr-4">Média exata</td>
                  <td className="py-3">~50</td>
                </tr>
                <tr className="border-b bg-primary/5">
                  <td className="py-3 pr-4 font-medium text-foreground">110</td>
                  <td className="py-3 pr-4">Acima da média</td>
                  <td className="py-3">~75</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">120</td>
                  <td className="py-3 pr-4">Superior</td>
                  <td className="py-3">~91</td>
                </tr>
              </tbody>
            </table>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI 110 é “alto o suficiente”?</h2>
          <p className="text-muted-foreground mb-4">
            Depende do objetivo:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li><strong>Autoconhecimento:</strong> sim — resultado positivo e claro</li>
            <li><strong>Mensa / top 2%:</strong> não — o corte típico fica perto de 130+</li>
            <li><strong>Laudo de superdotação escolar:</strong> geralmente exige avaliação formal e critérios além do número isolado</li>
            <li><strong>Carreira:</strong> 110 é vantagem; execução e rede importam mais a partir daqui</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Erros comuns ao interpretar QI 110</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Comparar com celebridades com QI “estimado” sem laudo</li>
            <li>Achar que 110 online = 110 no WAIS (podem diferir)</li>
            <li>Ignorar sono, ansiedade e distração no dia do teste</li>
            <li>Tratar 110 como teto — habilidades específicas (verbal, espacial) variam</li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Como aproveitar o resultado</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Use o 110 como baseline. Invista em prática deliberada na área que importa (código, idiomas, finanças, escrita). QI acima da média combina especialmente bem com rotina — não com complacência.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/qi-100-significa" className="text-primary hover:underline">QI 100 significa o quê?</Link>,{" "}
            <Link to="/blog/percentil-qi-o-que-significa" className="text-primary hover:underline">percentil de QI</Link>,{" "}
            <Link to="/blog/qi-faixas-pontuacao-significado" className="text-primary hover:underline">faixas de pontuação</Link> e{" "}
            <Link to="/blog/como-interpretar-resultado-qi" className="text-primary hover:underline">como interpretar resultado</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "QI 110 é bom?",
              answer:
                "Sim. Está acima da média populacional, perto do percentil 75. É um resultado sólido, embora não entre na faixa típica de superdotação (130+).",
            },
            {
              question: "QI 110 é acima da média?",
              answer:
                "Sim. Em escalas com média 100 e DP 15, 110 costuma ser classificado como média alta ou acima da média.",
            },
            {
              question: "Com QI 110 posso entrar na Mensa?",
              answer:
                "Em geral, não. A Mensa exige desempenho no top ~2%, tipicamente próximo de QI 130 ou equivalente no teste seletivo.",
            },
            {
              question: "QI 110 online vale?",
              answer:
                "Serve como estimativa. Para laudo oficial, use avaliação com psicólogo (WAIS/WISC). Diferenças de alguns pontos entre formatos são comuns.",
            },
            {
              question: "É melhor QI 110 ou QI 100?",
              answer:
                "Estatisticamente, 110 supera 100. Na vida real, a diferença é moderada: hábitos, saúde e oportunidade pesam mais do que esses 10 pontos isolados.",
            },
          ]}
        />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Confira seu resultado na escala</h3>
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
            {getRelatedArticles("qi-110-e-bom", 3).map((article) => (
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

export default QI110EBom;
