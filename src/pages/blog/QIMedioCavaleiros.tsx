import { Users, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const QIMedioCavaleiros = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-medio-cavaleiros";
  const articleTitle = "QI Médio de Cavaleiros: Inteligência Equestre";
  const articleDescription = "Descubra o QI médio de praticantes de equitação, as habilidades cognitivas desenvolvidas no esporte equestre e a relação entre cavalos e inteligência.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-medio-cavaleiros",
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
          <span>QI Médio de Cavaleiros</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>15 de Janeiro de 2025</time>
          <span>•</span>
          <span>9 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Users className="w-24 h-24 text-primary" />
        </div>
        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            Falar em <strong>QI médio de cavaleiros</strong> é curioso: não existe censo cognitivo da comunidade equestre.
            Equitação, porém, combina <strong>atenção dividida, memória procedural e leitura não verbal</strong> — o cavalo
            devolve sinais sutis que treinam percepção e autocontrole emocional, capacidades correlacionadas a desempenho
            em vários subtestes de inteligência.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Sem média oficial de QI; esporte atrai perfis diversos</li>
                  <li>✓ Hipismo desenvolve coordenação, planejamento tático e regulação emocional</li>
                  <li>✓ Benefício cognitivo vem do movimento + desafio, não da “nobreza” do hobby</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por que equitação chama atenção da ciência?</h2>
          <p className="text-muted-foreground mb-4">
            Esportes de precisão e pausa demandam processar vários estímulos: terreno, animal, regras e segurança. Estudos
            em atletas mostram ligas entre treino motor complexo e conectividade cerebral — paralelo ao que descrevemos em{" "}
            <Link to="/blog/qi-e-exercicio-fisico" className="text-primary hover:underline">QI e exercício físico</Link>.
          </p>
          <p className="text-muted-foreground mb-6">
            No ranking de profissões, cavaleiros não entram isoladamente; se houver viés de QI na amostra, costuma refletir
            escolaridade e lazer de elite, não “gene de cavaleiro”. Veja o panorama em{" "}
            <Link to="/blog/qi-medio-por-profissao" className="text-primary hover:underline">QI médio por profissão</Link>.
          </p>

          <ArticleMidAdSense />

          <h2 className="text-3xl font-bold mt-12 mb-6">Habilidades cognitivas no haras e na arena</h2>
          <h3 className="text-2xl font-bold mt-8 mb-4">Atenção e memória de trabalho</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Sequências de auxiliar, ritmo e postura exigem manter vários comandos ativos</li>
            <li>Memorizar percursos de salto ou dressage é treino de memória visual-espacial</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Inteligência corpórea e emocional</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Regular medo e impulsividade para não transmitir tensão ao animal</li>
            <li>Leitura fina de linguagem corporal equina e humana na equipe</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Equitação aumenta QI?</h2>
          <p className="text-muted-foreground mb-4">
            O hobby não altera QI estrutural sozinho, mas soma aeróbico leve, ar livre e aprendizado motor — pilares da lista
            de{" "}
            <Link to="/blog/atividades-que-aumentam-qi" className="text-primary hover:underline">atividades que aumentam QI</Link>.
            Para corrida pura, compare com{" "}
            <Link to="/blog/qi-medio-corredores" className="text-primary hover:underline">QI médio de corredores</Link>.
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Lição prática</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Iniciantes ganham cognição pelo aprendizado; cavaleiros veteranos mantêm benefício se continuam
                  desafiando rotina — novos percursos, novas disciplinas — em vez de pilotar no automático.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/como-correr-melhora-qi" className="text-primary hover:underline">Como correr melhora o QI</Link>,{" "}
            <Link to="/blog/diferenca-qi-qe-qg" className="text-primary hover:underline">diferença entre QI, QE e QG</Link> e{" "}
            <Link to="/blog/como-aumentar-qi" className="text-primary hover:underline">como aumentar o QI</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Existe QI médio oficial de cavaleiros?",
              answer:
                "Não. Amostras são pequenas e enviesadas por renda e acesso ao esporte. Trate números virais com ceticismo.",
            },
            {
              question: "Crianças na equitação ficam mais inteligentes?",
              answer:
                "Podem desenvolver disciplina, coordenação e confiança — fatores que ajudam na escola, mas não garantem QI alto.",
            },
            {
              question: "Hipismo ou corrida: qual beneficia mais o cérebro?",
              answer:
                "Aeróbico intenso da corrida tem mais evidência em estudos populacionais; hipismo soma complexidade motora e emocional.",
            },
            {
              question: "Idosos podem montar sem risco cognitivo?",
              answer:
                "Equilibrio e saúde física importam mais que QI. Médico e instrutor avaliam caso a caso.",
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
            {getRelatedArticles("qi-medio-cavaleiros", 3).map((article) => (
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

export default QIMedioCavaleiros;
