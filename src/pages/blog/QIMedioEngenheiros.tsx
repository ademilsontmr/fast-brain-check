import { Briefcase, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const QIMedioEngenheiros = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-medio-engenheiros";
  const articleTitle = "QI Médio de Engenheiros: Inteligência Técnica e Criativa";
  const articleDescription = "Descubra o QI médio de engenheiros, as habilidades cognitivas necessárias e como a engenharia desenvolve inteligência técnica e criatividade.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-medio-engenheiros",
      publishDate: "2025-01-15",
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
          <span>QI Médio de Engenheiros</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>15 de Janeiro de 2025</time>
          <span>•</span>
          <span>11 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Briefcase className="w-24 h-24 text-primary" />
        </div>
        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            O <strong>QI médio de engenheiros</strong> costuma aparecer entre <strong>110 e 125</strong> em amostras de
            graduados — acima do 100 populacional, mas longe do mito de que todo engenheiro é gênio. Engenharia exige
            raciocínio quantitativo, modelagem e paciência com erro; o vestibular e o mercado selecionam quem já se
            destaca em lógica, não um número mágico.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Média típica entre 110–125 em estudos com engenheiros formados</li>
                  <li>✓ Seleção acadêmica eleva a média da amostra, não da profissão em si</li>
                  <li>✓ Sucesso vem de prática, comunicação e gestão de projeto além do QI</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">De onde vêm os números?</h2>
          <p className="text-muted-foreground mb-4">
            Pesquisas que cruzam formação profissional com testes (WAIS, Raven ou equivalentes) mostram que engenheiros
            tendem a pontuar acima da média nacional. Isso reflete, em grande parte, o filtro do ensino superior:
            quem atravessa vestibular competitivo em exatas já estava no topo em raciocínio matemático e verbal na escola.
          </p>
          <p className="text-muted-foreground mb-6">
            Consulte o panorama geral em{" "}
            <Link to="/blog/qi-medio-por-profissao" className="text-primary hover:underline">QI médio por profissão</Link>{" "}
            e compare com{" "}
            <Link to="/blog/qi-medio-medicos" className="text-primary hover:underline">médicos</Link> e{" "}
            <Link to="/blog/qi-medio-estudantes" className="text-primary hover:underline">estudantes universitários</Link>.
          </p>


          <h2 className="text-3xl font-bold mt-12 mb-6">Habilidades cognitivas centrais na engenharia</h2>
          <h3 className="text-2xl font-bold mt-8 mb-4">Raciocínio quantitativo e abstração</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Traduzir problema real em equações, modelos ou algoritmos</li>
            <li>Tolerar incerteza em dados e hipóteses simplificadas</li>
            <li>Verificar unidades, ordens de grandeza e coerência física</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Visualização espacial e sistemas</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Ler plantas, diagramas elétricos e fluxogramas de software</li>
            <li>Antecipar efeitos em cadeia (estrutural, térmico, lógico)</li>
            <li>Memória de trabalho para manter várias variáveis simultâneas</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI médio estimado por área (ordem de grandeza)</h2>
          <Card className="p-6 my-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 pr-4">Área</th>
                  <th className="pb-3 pr-4">Média típica citada</th>
                  <th className="pb-3">Nota</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Engenharia de software</td>
                  <td className="py-3 pr-4">115–125</td>
                  <td className="py-3">Alta demanda de lógica abstrata</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Civil / mecânica</td>
                  <td className="py-3 pr-4">110–120</td>
                  <td className="py-3">Geometria e materiais</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">População geral</td>
                  <td className="py-3 pr-4">100</td>
                  <td className="py-3">Referência Wechsler</td>
                </tr>
              </tbody>
            </table>
          </Card>
          <p className="text-muted-foreground mb-6">
            Números variam por país, amostra e teste. Use a{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela da escala de QI</Link>{" "}
            para interpretar qualquer resultado.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI alto é obrigatório?</h2>
          <p className="text-muted-foreground mb-4">
            Vestibulares difíceis correlacionam com desempenho cognitivo, mas a carreira recompensa persistência,
            colaboração e aprendizado contínuo. Muitos profissionais na faixa 105–115 prosperam com especialização e
            bons hábitos — veja{" "}
            <Link to="/blog/como-engenheiros-melhoram-qi" className="text-primary hover:underline">como engenheiros melhoram o QI</Link>{" "}
            e{" "}
            <Link to="/blog/o-que-e-considerado-qi-alto" className="text-primary hover:underline">o que é considerado QI alto</Link>.
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Lição prática</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Se você sonha com engenharia e seu teste online ficou perto de 100, ainda vale a pena: projetos,
                  monitorias e raciocínio deliberado constroem o perfil que a profissão exige. Meça de novo depois de
                  semanas de estudo focado — use o{" "}
                  <Link to="/teste" className="text-primary hover:underline">teste do BomQI</Link> como referência, não como veredito.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/qi-e-sucesso-carreira" className="text-primary hover:underline">QI e sucesso na carreira</Link>,{" "}
            <Link to="/blog/conexao-qi-desempenho-academico" className="text-primary hover:underline">QI e desempenho acadêmico</Link> e{" "}
            <Link to="/blog/como-aumentar-qi" className="text-primary hover:underline">como aumentar o QI</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Qual o QI médio de engenheiros?",
              answer:
                "Em amostras de graduados, médias entre 110 e 125 são comuns — acima da média populacional (100), em parte por seleção no vestibular e na formação.",
            },
            {
              question: "Preciso de QI alto para ser engenheiro?",
              answer:
                "É preciso raciocínio lógico-matemático sólido e persistência. Muitos engenheiros de sucesso estão na faixa 105–120; excelência vem de prática e projeto real.",
            },
            {
              question: "Engenheiro e médico têm o mesmo QI médio?",
              answer:
                "Ambas as carreiras exigem seleção rigorosa e costumam apresentar médias elevadas, mas a distribuição difere por país e tipo de teste — não há um único número oficial.",
            },
            {
              question: "O trabalho de engenheiro aumenta o QI?",
              answer:
                "O QI estrutural muda pouco na vida adulta, mas o exercício da profissão fortalece memória de trabalho e resolução de problemas, o que pode refletir em testes repetidos.",
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
            {getRelatedArticles("qi-medio-engenheiros", 3).map((article) => (
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

export default QIMedioEngenheiros;
