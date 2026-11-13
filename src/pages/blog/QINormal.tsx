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

const QINormal = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-normal";
  const articleTitle = "QI Normal: O Que É e O Que Significa";
  const articleDescription =
    "O que é QI normal? Faixa 85–115, percentil, diferença entre média e 'normal', mitos e como interpretar seu resultado.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-normal",
      publishDate: "2025-01-15",
      modifiedDate: "2026-11-13",
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
          <span>QI Normal</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time dateTime="2026-11-13">13 de Novembro de 2026</time>
          <span>•</span>
          <span>11 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <BarChart3 className="w-24 h-24 text-primary" />
        </div>
        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            <strong>QI normal</strong> não é um único número na cabeça de todo mundo — na escala mais usada (média 100,
            DP 15), costuma designar a faixa em torno da média, principalmente <strong>85 a 115</strong>, onde caem cerca
            de <strong>68%</strong> das pessoas avaliadas. Estar “na média” é estatisticamente esperado, não “mediocre”.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ QI normal ≈ faixa 85–115 (média 100 no centro)</li>
                  <li>✓ Percentil típico entre ~16 e ~84</li>
                  <li>✓ Não prevê sozinho sucesso, felicidade ou carreira</li>
                  <li>✓ Laudo clínico vs teste online têm propósitos diferentes</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">“QI normal” vs “QI médio”</h2>
          <p className="text-muted-foreground mb-4">
            <strong>QI médio</strong> costuma significar o valor central da população (100 na escala padrão).{" "}
            <strong>QI normal</strong>, no uso clínico e pedagógico, descreve desempenho compatível com a maior parte da
            população — sem atraso significativo nem superdotação no escore total.
          </p>
          <p className="text-muted-foreground mb-6">
            Na prática, a maioria dos resultados “normais” fica espalhada entre 85 e 115. Veja também{" "}
            <Link to="/blog/o-que-e-qi-medio" className="text-primary hover:underline">
              o que é QI médio
            </Link>{" "}
            e{" "}
            <Link to="/blog/qi-100-significa" className="text-primary hover:underline">
              o que significa QI 100
            </Link>
            .
          </p>


          <h2 className="text-3xl font-bold mt-12 mb-6">Como as faixas são classificadas</h2>
          <Card className="p-6 my-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 pr-4">QI aprox.</th>
                  <th className="pb-3 pr-4">Rótulo comum</th>
                  <th className="pb-3">% da população</th>
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
                  <td className="py-3 pr-4">Normal / média ampla</td>
                  <td className="py-3">~68%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">116–129</td>
                  <td className="py-3 pr-4">Acima da média</td>
                  <td className="py-3">~14%</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">130+</td>
                  <td className="py-3 pr-4">Muito alto</td>
                  <td className="py-3">~2%</td>
                </tr>
              </tbody>
            </table>
          </Card>
          <p className="text-muted-foreground mb-6">
            Tabela detalhada em{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">
              escala de QI
            </Link>{" "}
            e{" "}
            <Link to="/blog/qi-faixas-pontuacao-significado" className="text-primary hover:underline">
              faixas de pontuação
            </Link>
            .
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que QI normal permite na vida real</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Instrução formal e profissional típica, com esforço comum</li>
            <li>Aprendizado de idiomas, cursos e habilidades técnicas ao longo dos anos</li>
            <li>Resolução de problemas cotidianos e raciocínio verbal adequado</li>
            <li>Destaque em nichos por interesse, treino e motivação — não só por QI</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Inteligência emocional, experiência de mercado e rede profissional complementam o escore. Compare em{" "}
            <Link to="/blog/diferenca-qi-e-inteligencia-emocional" className="text-primary hover:underline">
              QI e inteligência emocional
            </Link>
            .
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Mitos sobre ter QI “normal”</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>
              <strong>“Normal é quase burro”</strong> — falso; é onde está a maior parte da humanidade por definição estatística.
            </li>
            <li>
              <strong>“Só vale a pena testar se for alto”</strong> — conhecer sua faixa ajuda a interpretar estudos e metas de
              aprendizado.
            </li>
            <li>
              <strong>“Todo teste online dá normal”</strong> — bons testes distribuem resultados; viés de confirmação faz
              gente achar que “sempre deu 100”.
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como saber se seu QI está na faixa normal</h2>
          <p className="text-muted-foreground mb-4">
            Faça um{" "}
            <Link to="/teste" className="text-primary hover:underline">
              teste estruturado
            </Link>{" "}
            com tempo cronometrado e questões variadas (lógica, sequências, atenção). Para decisões escolares ou clínicas,
            busque{" "}
            <Link to="/blog/teste-qi-oficial" className="text-primary hover:underline">
              avaliação oficial
            </Link>{" "}
            com psicólogo.
          </p>
          <p className="text-muted-foreground mb-6">
            Depois, cruze o número com{" "}
            <Link to="/blog/percentil-qi-o-que-significa" className="text-primary hover:underline">
              percentil
            </Link>{" "}
            e com{" "}
            <Link to="/blog/como-interpretar-resultado-qi" className="text-primary hover:underline">
              como interpretar o resultado
            </Link>
            .
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Próximo passo</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Se o resultado cair entre 85 e 115, você está na faixa estatisticamente normal — use isso como linha de
                  base para treinar memória, foco e leitura, não como teto.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/qi-110-e-bom" className="text-primary hover:underline">
              QI 110 é bom?
            </Link>
            ,{" "}
            <Link to="/blog/qi-120-e-bom" className="text-primary hover:underline">
              QI 120 é bom?
            </Link>
            ,{" "}
            <Link to="/blog/o-que-e-considerado-qi-alto" className="text-primary hover:underline">
              o que é QI alto
            </Link>{" "}
            e{" "}
            <Link to="/blog/media-qi-brasil" className="text-primary hover:underline">
              média de QI no Brasil
            </Link>
            .
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Qual é o QI considerado normal?",
              answer:
                "Na escala média 100 e DP 15, a faixa normal ampla costuma ser 85 a 115, onde concentra cerca de 68% da população em testes bem normatizados.",
            },
            {
              question: "QI normal é a mesma coisa que QI 100?",
              answer:
                "Não exatamente. QI 100 é o ponto médio; 'normal' descreve a faixa em torno dessa média. Muitas pessoas 'normais' têm 90, 105 ou 112.",
            },
            {
              question: "Ter QI normal é ruim?",
              answer:
                "Não. É o desempenho esperado para a maior parte das pessoas. Sucesso depende de hábitos, escolhas, saúde mental e oportunidades.",
            },
            {
              question: "Teste online classifica corretamente como normal?",
              answer:
                "Testes estruturados online dão uma estimativa útil; para laudo escolar ou clínico, use WAIS ou equivalente aplicado por profissional.",
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
            {getRelatedArticles("qi-normal", 3).map((article) => (
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

export default QINormal;
