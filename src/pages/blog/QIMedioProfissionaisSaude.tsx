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

const QIMedioProfissionaisSaude = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-medio-profissionais-saude";
  const articleTitle = "QI Médio de Profissionais de Saúde: Inteligência no Cuidado";
  const articleDescription = "Descubra o QI médio de profissionais de saúde, as habilidades cognitivas necessárias e como o cuidado com pacientes desenvolve inteligência.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-medio-profissionais-saude",
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
          <span>QI Médio de Profissionais de Saúde</span>
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
            O <strong>QI médio de profissionais de saúde</strong> varia por função: médicos e fonoaudiólogos passam por
            seleções diferentes, mas toda a área exige <strong>memória de trabalho, julgamento sob pressão e aprendizado
            contínuo</strong>. Médias empíricas em amostras de graduados costumam ficar entre <strong>105 e 120</strong>,
            acima da população geral, com pico nos cursos mais concorridos.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Seleção universitária eleva média da amostra formada</li>
                  <li>✓ Enfermagem e medicina exigem empatia + raciocínio clínico, não só QI numérico</li>
                  <li>✓ Plantões e burnout podem mascarar capacidade real em testes</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Números por categoria (ordem de grandeza)</h2>
          <p className="text-muted-foreground mb-4">
            Pesquisas ocidentais que cruzam profissão e WAIS mostram profissionais de saúde acima de 100. Não há registro
            oficial único no Brasil; use o ranking geral em{" "}
            <Link to="/blog/qi-medio-por-profissao" className="text-primary hover:underline">QI médio por profissão</Link>.
          </p>
          <p className="text-muted-foreground mb-6">
            Para médicos especificamente, leia{" "}
            <Link to="/blog/qi-medio-medicos" className="text-primary hover:underline">QI médio de médicos</Link> — a cauda
            da distribuição tende a ser mais alta pela duração e concorrência do curso.
          </p>


          <h2 className="text-3xl font-bold mt-12 mb-6">Habilidades cognitivas no cuidado</h2>
          <Card className="p-6 my-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 pr-4">Habilidade</th>
                  <th className="pb-3">Uso no dia a dia</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Diagnóstico diferencial</td>
                  <td className="py-3">Hipóteses paralelas sob incerteza</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Comunicação</td>
                  <td className="py-3">Traduzir jargão para pacientes</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Atenção vigilante</td>
                  <td className="py-3">UTI, triagem, segurança do paciente</td>
                </tr>
              </tbody>
            </table>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">O trabalho “aumenta” o QI?</h2>
          <p className="text-muted-foreground mb-4">
            A prática clínica fortalece padrões de raciocínio e memória sem alterar necessariamente o QI estrutural. Veja{" "}
            <Link to="/blog/como-profissionais-saude-melhoram-qi" className="text-primary hover:underline">como profissionais de saúde melhoram o QI</Link>{" "}
            no sentido de desempenho cognitivo.
          </p>
          <p className="text-muted-foreground mb-6">
            Inteligência emocional pesa tanto quanto lógica em rankings de excelência — compare com{" "}
            <Link to="/blog/diferenca-qi-inteligencia-emocional" className="text-primary hover:underline">QI e inteligência emocional</Link>.
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Lição prática</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Estudante de saúde com QI “médio” ainda pode brilhar: rotina de casos, simulações e repetição espaçada
                  superam número isolado de um teste online.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/qi-e-sucesso-carreira" className="text-primary hover:underline">QI e sucesso na carreira</Link>,{" "}
            <Link to="/blog/conexao-qi-desempenho-academico" className="text-primary hover:underline">QI e desempenho acadêmico</Link> e{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela da escala de QI</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Qual o QI médio de enfermeiros e médicos?",
              answer:
                "Estudos com graduados mostram médias elevadas, frequentemente 110+ em médicos e um pouco abaixo em outras graduações de saúde, variando por país e teste.",
            },
            {
              question: "Preciso de QI 130 para medicina?",
              answer:
                "Vestibular exige preparo e desempenho, não um corte fixo de QI. Muitos médicos estão entre 105 e 125.",
            },
            {
              question: "Plantão piora desempenho cognitivo?",
              answer:
                "Privação de sono reduz atenção e memória de trabalho — pode fazer alguém inteligente parecer abaixo do habitual em testes.",
            },
            {
              question: "Técnico de enfermagem tem QI menor?",
              answer:
                "Cursos técnicos não medem QI na entrada da mesma forma; comparações entre categorias são enviesadas por escolaridade e oportunidade.",
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
            {getRelatedArticles("qi-medio-profissionais-saude", 3).map((article) => (
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

export default QIMedioProfissionaisSaude;
