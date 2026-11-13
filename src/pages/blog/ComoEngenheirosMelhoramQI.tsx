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

const ComoEngenheirosMelhoramQI = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/como-engenheiros-melhoram-qi";
  const articleTitle = "Como Engenheiros Melhoram o QI: Desenvolvimento Cognitivo Técnico";
  const articleDescription = "Descubra como a engenharia melhora o QI através de resolução de problemas, pensamento sistêmico e desafios técnicos complexos.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "como-engenheiros-melhoram-qi",
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
          <span>Como Engenheiros Melhoram o QI</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>15 de Janeiro de 2025</time>
          <span>•</span>
          <span>10 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Briefcase className="w-24 h-24 text-primary" />
        </div>
        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            A engenharia não “injeta” pontos de QI, mas <strong>forja habilidades medidas pelos testes</strong>: abstração,
            visualização espacial, raciocínio quantitativo e tolerância à ambiguidade. Projetos reais somam aprendizado
            deliberado — o combo que aparece quando engenheiros refazem avaliações cognitivas anos após a formatura.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Prática deliberada em problemas abertos fortalece raciocínio fluido</li>
                  <li>✓ Trabalho em equipe desenvolve linguagem técnica e memória de trabalho</li>
                  <li>✓ Estudantes e juniores ganham mais que veteranos no automático</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que a carreira treina de fato</h2>
          <p className="text-muted-foreground mb-4">
            Simulações numéricas, leitura de normas e depuração de protótipos exigem hipóteses múltiplas — parecido com
            subtestes de raciocínio. O panorama de médias na profissão está em{" "}
            <Link to="/blog/qi-medio-engenheiros" className="text-primary hover:underline">QI médio de engenheiros</Link>.
          </p>
          <p className="text-muted-foreground mb-6">
            Comparar com outras áreas técnicas:{" "}
            <Link to="/blog/qi-medio-medicos" className="text-primary hover:underline">médicos</Link> e{" "}
            <Link to="/blog/qi-medio-por-profissao" className="text-primary hover:underline">QI por profissão</Link>.
          </p>


          <h2 className="text-3xl font-bold mt-12 mb-6">Rotina cognitiva do engenheiro</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Modelagem: reduzir mundo real a variáveis essenciais</li>
            <li>Revisão por pares: confrontar vieses e falácias</li>
            <li>Aprendizado contínuo de ferramentas (CAD, código, normas)</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Plano fora do trabalho</h2>
          <Card className="p-6 my-8">
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
              <li>1 desafio de lógica/matriz por dia —{" "}
                <Link to="/blog/matrizes-raven-teste-qi" className="text-primary hover:underline">matrizes Raven</Link>
              </li>
              <li>Leitura técnica em segunda língua para vocabulário</li>
              <li>Sono e exercício — ganhos cognitivos sem burnout</li>
            </ul>
          </Card>
          <p className="text-muted-foreground mb-6">
            Plano mensal em{" "}
            <Link to="/blog/como-melhorar-qi-30-dias" className="text-primary hover:underline">como melhorar QI em 30 dias</Link>.
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Lição prática</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Projetos de extensão e hackathons dão variedade de problemas; rotina só de planilha repetitiva
                  estagna ganhos cognitivos.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/qi-e-sucesso-carreira" className="text-primary hover:underline">QI e sucesso na carreira</Link>,{" "}
            <Link to="/blog/qi-criatividade" className="text-primary hover:underline">QI e criatividade</Link> e{" "}
            <Link to="/blog/como-aumentar-qi" className="text-primary hover:underline">como aumentar o QI</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Engenheiro experiente tem QI maior que recém-formado?",
              answer:
                "Cristalização aumenta, mas velocidade pode cair com idade. Experiência melhora julgamento que testes nem sempre captam.",
            },
            {
              question: "Software vs civil: quem ganha mais cognitivamente?",
              answer:
                "Ambos treinam domínios diferentes; variedade de desafios importa mais que o título do diploma.",
            },
            {
              question: "Estudante de engenharia deve treinar QI online?",
              answer:
                "Útil como aquecimento para vestibular e entrevistas, desde que não substitua base matemática sólida.",
            },
            {
              question: "Burnout reduz desempenho em QI?",
              answer:
                "Sim. Sono e recuperação são parte do desenvolvimento cognitivo, não luxo.",
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
            {getRelatedArticles("como-engenheiros-melhoram-qi", 3).map((article) => (
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

export default ComoEngenheirosMelhoramQI;
