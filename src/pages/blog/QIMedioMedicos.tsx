import { Briefcase, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const QIMedioMedicos = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-medio-medicos";
  const articleTitle = "QI Médio de Médicos: Inteligência na Medicina";
  const articleDescription = "Descubra o QI médio de médicos, as habilidades cognitivas necessárias para a medicina e como a profissão desenvolve inteligência clínica.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-medio-medicos",
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
          <span>QI Médio de Médicos</span>
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
            O <strong>QI médio de médicos</strong> em estudos ocidentais com WAIS costuma cair entre{" "}
            <strong>115 e 130</strong> na amostra de graduados — entre as profissões mais altas, junto de advogados e
            pesquisadores. Reflete anos de seleção escolar, residência e volume de memorização, não um “gene de médico”.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Médias altas por filtro de vestibular e persistência de década+</li>
                  <li>✓ Raciocínio clínico mistura QI, experiência e empatia</li>
                  <li>✓ Plantão e sono ruim distorcem testes pontuais</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Evidências e limitações</h2>
          <p className="text-muted-foreground mb-4">
            Meta-análises ligam escolaridade a QI; medicina fica no topo da curva. O ranking ampliado está em{" "}
            <Link to="/blog/qi-medio-por-profissao" className="text-primary hover:underline">QI médio por profissão</Link>.
          </p>
          <p className="text-muted-foreground mb-6">
            Compare com{" "}
            <Link to="/blog/qi-medio-engenheiros" className="text-primary hover:underline">engenheiros</Link> e{" "}
            <Link to="/blog/qi-medio-profissionais-saude" className="text-primary hover:underline">demais profissionais de saúde</Link> —
            médicos tendem a pontuar um pouco acima por duração e concorrência do curso.
          </p>

          <ArticleMidAdSense />

          <h2 className="text-3xl font-bold mt-12 mb-6">Habilidades além do número</h2>
          <Card className="p-6 my-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 pr-4">Domínio</th>
                  <th className="pb-3">Peso na medicina</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Memória semântica</td>
                  <td className="py-3">Farmacologia, protocolos</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Raciocínio bayesiano</td>
                  <td className="py-3">Probabilidade pré/pós-teste</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Comunicação</td>
                  <td className="py-3">QE e adesão do paciente</td>
                </tr>
              </tbody>
            </table>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">Preciso de QI 140 para medicina?</h2>
          <p className="text-muted-foreground mb-4">
            Não existe corte oficial. Muitos aprovados estão entre 110 e 125 com trabalho extremo. Leia{" "}
            <Link to="/blog/o-que-e-considerado-qi-alto" className="text-primary hover:underline">o que é QI alto</Link> e{" "}
            <Link to="/blog/conexao-qi-desempenho-academico" className="text-primary hover:underline">QI e desempenho acadêmico</Link>.
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Lição prática</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Erro médico grave costuma vir de falha de processo e comunicação, não de QI insuficiente — checklists
                  existem por isso.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/qi-drauzio-varella" className="text-primary hover:underline">QI de Drauzio Varella</Link>,{" "}
            <Link to="/blog/qi-medio-advogados" className="text-primary hover:underline">QI médio de advogados</Link> e{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela da escala de QI</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Qual o QI médio de médicos no Brasil?",
              answer:
                "Não há estudo nacional padronizado com WAIS. Estimativas internacionais colocam médias de graduados entre 115 e 130.",
            },
            {
              question: "Médico com QI 105 pode ser excelente?",
              answer:
                "Sim. Persistência, residência bem aproveitada e hábitos de estudo contam tanto quanto pontuação em teste.",
            },
            {
              question: "Residência aumenta QI?",
              answer:
                "Aumenta conhecimento cristalizado e padrões clínicos; teste de QI repetido pode subir levemente por familiaridade.",
            },
            {
              question: "Médicos são mais inteligentes que engenheiros?",
              answer:
                "Médias populacionais são parecidas e sobrepostas; diferenças individuais são maiores que entre profissões.",
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
            {getRelatedArticles("qi-medio-medicos", 3).map((article) => (
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

export default QIMedioMedicos;
