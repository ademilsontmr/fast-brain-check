import { Award, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const QI130Significa = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-130-significa";
  const articleTitle = "QI 130: O Que Significa e Como Entrar na Mensa (2026)";
  const articleDescription =
    "QI 130 significa o quê? Entenda superdotação, percentil 98, critérios da Mensa Brasil, laudo escolar e diferença entre teste online e WAIS.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-130-significa",
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
          <span>QI 130 Significa</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time dateTime="2026-08-31">31 de Agosto de 2026</time>
          <span>•</span>
          <span>14 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-amber-500/20 to-orange-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Award className="w-24 h-24 text-amber-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            <strong>QI 130</strong> é um dos números mais buscados no Google Brasil — e com razão. Com média 100 e desvio padrão 15, um score de 130 cai na faixa <strong>muito superior</strong>, perto do <strong>percentil 98</strong>: você supera cerca de 98 em cada 100 pessoas. É o território da <strong>superdotação</strong> e do corte típico da <strong>Mensa</strong>.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo em 30 segundos</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ QI 130 = top ~2% da população</li>
                  <li>✓ Percentil aproximado: 98</li>
                  <li>✓ Critério clássico de altas habilidades / superdotação</li>
                  <li>✓ Porta de entrada para processo Mensa (com teste próprio)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que QI 130 significa na escala</h2>
          <p className="text-muted-foreground mb-4">
            Na classificação Wechsler (média 100, DP 15):
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li><strong>130–144:</strong> muito superior</li>
            <li><strong>145+:</strong> altíssimo / gênio em algumas classificações</li>
            <li><strong>120–129:</strong> superior (abaixo de 130)</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Veja a{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela completa de escala</Link> e{" "}
            <Link to="/blog/qi-faixas-pontuacao-significado" className="text-primary hover:underline">faixas de pontuação</Link>.
          </p>

          <ArticleMidAdSense />
          <h2 className="text-3xl font-bold mt-12 mb-6">QI 130 e Mensa Brasil</h2>
          <p className="text-muted-foreground mb-4">
            A Mensa não usa necessariamente o número “130” no laudo — ela aplica <strong>teste seletivo próprio</strong> e aprova quem fica no top 2%. Na prática, isso corresponde a QI 130+ em escalas padronizadas.
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Inscreva-se no processo da Mensa Brasil</li>
            <li>Faça o teste de admissão supervisionado</li>
            <li>Se aprovado, associe-se à comunidade de alto QI</li>
          </ol>
          <p className="text-muted-foreground mb-6">
            Detalhes em{" "}
            <Link to="/blog/teste-mensa-brasil" className="text-primary hover:underline">teste Mensa Brasil</Link> e custos em{" "}
            <Link to="/blog/quanto-custa-teste-de-qi" className="text-primary hover:underline">quanto custa teste de QI</Link>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI 130 na escola e na clínica</h2>
          <h3 className="text-2xl font-bold mt-8 mb-4">Altas habilidades / superdotação</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>QI 130+ é critério frequente para identificar superdotação</li>
            <li>Escolas podem exigir laudo com WISC (crianças) ou WAIS (adultos)</li>
            <li>Teste online ajuda na triagem; laudo formal exige psicólogo</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Leia{" "}
            <Link to="/blog/superdotacao-o-que-e" className="text-primary hover:underline">o que é superdotação</Link> e{" "}
            <Link to="/blog/criancas-superdotadas-sinais-caracteristicas" className="text-primary hover:underline">sinais em crianças</Link>.
          </p>

          <Card className="p-6 my-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 pr-4">Objetivo</th>
                  <th className="pb-3">Caminho recomendado</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Curiosidade / triagem</td>
                  <td className="py-3">Teste online estruturado</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Mensa</td>
                  <td className="py-3">Processo seletivo Mensa Brasil</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Laudo escolar</td>
                  <td className="py-3">Psicólogo + WISC/WAIS</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">AACC / enriquecimento</td>
                  <td className="py-3">Laudo + equipe pedagógica</td>
                </tr>
              </tbody>
            </table>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">Mitos sobre QI 130</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li><strong>Mito:</strong> QI 130 garante sucesso. <strong>Realidade:</strong> aumenta potencial; execução e contexto definem resultados.</li>
            <li><strong>Mito:</strong> Todo teste online que dá 130 é válido. <strong>Realidade:</strong> qualidade do instrumento importa.</li>
            <li><strong>Mito:</strong> QI 130 = gênio absoluto. <strong>Realidade:</strong> é muito raro e forte, mas ainda há variação por habilidade.</li>
            <li><strong>Mito:</strong> Criança com 130 não precisa de apoio. <strong>Realidade:</strong> superdotados podem precisar de enriquecimento e acolhimento.</li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Tirou perto de 130 no teste online?</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Confirme com{" "}
                  <Link to="/blog/onde-fazer-teste-qi-brasil" className="text-primary hover:underline">avaliação formal</Link>{" "}
                  se precisar de documento. Para autoconhecimento, compare com{" "}
                  <Link to="/blog/qi-120-e-bom" className="text-primary hover:underline">QI 120</Link> e{" "}
                  <Link to="/blog/o-que-e-considerado-qi-alto" className="text-primary hover:underline">QI alto</Link> na escala.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/qi-120-e-bom" className="text-primary hover:underline">QI 120 é bom?</Link>,{" "}
            <Link to="/blog/percentil-qi-o-que-significa" className="text-primary hover:underline">percentil de QI</Link>,{" "}
            <Link to="/blog/teste-qi-oficial" className="text-primary hover:underline">teste de QI oficial</Link> e{" "}
            <Link to="/blog/como-interpretar-resultado-qi" className="text-primary hover:underline">como interpretar resultado</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "QI 130 significa o quê?",
              answer:
                "QI 130 indica desempenho muito superior à média, próximo ao percentil 98. É critério clássico de superdotação e equivalente ao top 2% da população.",
            },
            {
              question: "QI 130 é considerado gênio?",
              answer:
                "Algumas classificações usam 130+ como muito superior ou altas habilidades. 'Gênio' é termo popular; clinicamente fala-se em superdotação ou QI muito elevado.",
            },
            {
              question: "Como entrar na Mensa com QI 130?",
              answer:
                "Faça o teste de admissão da Mensa Brasil. Aprovação exige top 2%, não basta mostrar print de teste online — o processo é supervisionado.",
            },
            {
              question: "Criança com QI 130 precisa de laudo?",
              answer:
                "Para escola, AACC ou diagnóstico formal, sim — geralmente WISC aplicado por psicólogo. Teste online orienta, mas não substitui laudo.",
            },
            {
              question: "QI 130 online é confiável?",
              answer:
                "Pode indicar faixa provável. Diferenças de 5–15 pontos entre online e WAIS são comuns. Use como triagem, não como documento oficial.",
            },
          ]}
        />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Você está no top 2%?</h3>
          <p className="text-muted-foreground mb-6">Faça o teste de QI do BomQI e veja sua faixa com percentil e análise.</p>
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
            {getRelatedArticles("qi-130-significa", 3).map((article) => (
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

export default QI130Significa;
