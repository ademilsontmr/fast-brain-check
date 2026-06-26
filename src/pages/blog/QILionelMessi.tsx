import { Trophy, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const QILionelMessi = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-lionel-messi";
  const articleTitle = "Qual é o QI do Lionel Messi? Estimativas e Inteligência em Campo";
  const articleDescription = "Descubra estimativas sobre o QI de Lionel Messi, visão de jogo e raciocínio tático que o tornaram referência mundial.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-lionel-messi",
      publishDate: "2026-05-30",
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
          <span>QI Lionel Messi</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>30 de Maio de 2026</time>
          <span>•</span>
          <span>12 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-sky-500/20 to-blue-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Trophy className="w-24 h-24 text-sky-600" />
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">Lionel Messi, oito vezes Bola de Ouro e campeão mundial, combina dribles curtos com leitura de espaço rara. Sobre o <strong>QI do Messi</strong>, o mais relevante é sua cognição espacial e tomada de decisão em frações de segundo — habilidades que testes escolares não capturam.</p>
          <h2 className="text-3xl font-bold mt-12 mb-6">Estimativa de QI: o que circula</h2>
          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Faixa citada (não oficial)</h3>
                <p className="text-blue-800 dark:text-blue-200 mb-2"><strong>QI estimado: 110–130</strong></p>
                <p className="text-blue-800 dark:text-blue-200 text-sm">Sem teste oficial público. Messi nunca divulgou laudo cognitivo.</p>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Por que não sabemos o QI real</h2>
          <p className="text-muted-foreground mb-4">Messi é reservado sobre vida pessoal. Números virais sobre seu QI não têm fonte verificável.</p>
          <h2 className="text-3xl font-bold mt-12 mb-6">O que revela sobre cognição</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Visão de jogo e passes</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Antecipa movimentos antes da defesa</li>
            <li>Passes em profundidade no timing certo</li>
            <li>Leitura de linhas defensivas</li>
            <li>Associação constante com companheiros</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Controle de bola e decisão</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Drible em espaços mínimos</li>
            <li>Mudança de ritmo sob pressão</li>
            <li>Finalização com poucos toques</li>
            <li>Adaptação a diferentes sistemas táticos</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Liderança e resiliência</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Carreira longa em alto nível</li>
            <li>Superação de críticas iniciais</li>
            <li>Transição para MLS e liderança na seleção</li>
            <li>Disciplina tática sob diferentes técnicos</li>
          </ul>
          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Perfil cognitivo observável (não laudo clínico)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">Pontos fortes prováveis</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Visão periférica</li>
                  <li>✓ Tomada de decisão</li>
                  <li>✓ Coordenação motora</li>
                  <li>✓ Memória de jogo</li>
                  <li>✓ Consistência</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Limites da comparação</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Estimativas sem laudo</li>
                  <li>• QI não mede dribles</li>
                  <li>• Comparação com CR7 é especulação</li>
                </ul>
              </div>
            </div>
          </Card>
          <h2 className="text-3xl font-bold mt-12 mb-6">QI vs inteligência prática</h2>
          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Lição importante</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">O sucesso de Messi combina talento motor, treino desde criança, contexto no Barcelona e oportunidade. Compare seu resultado real no teste, não estimativas de famosos.</p>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Como interpretar na escala de QI</h2>
          <p className="text-muted-foreground mb-4">
            Faixa 110–130 — se medida por teste válido — situaria acima da média. Veja a{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela de QI</Link>,{" "}
            <Link to="/blog/qi-faixas-pontuacao-significado" className="text-primary hover:underline">significado das faixas</Link> e{" "}
            <Link to="/blog/qi-medio-mundial" className="text-primary hover:underline">QI médio mundial</Link>.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4"><Link to="/blog/qi-cristiano-ronaldo" className="text-primary hover:underline">QI do Cristiano Ronaldo</Link>, <Link to="/blog/qi-ronaldinho" className="text-primary hover:underline">QI do Ronaldinho</Link>, <Link to="/blog/qi-de-famosos" className="text-primary hover:underline">Índice QI de Famosos</Link>.</p>
        </div>
        <ArticleFAQ faqs={[
          { question: "Messi fez teste de QI?", answer: "Não há registro público. Números na internet são especulação sem laudo." },
          { question: "Messi é inteligente em campo?", answer: "Sim, em visão de jogo, passes e decisões sob pressão — cognição específica do futebol." },
          { question: "Messi vs Cristiano Ronaldo em QI?", answer: "Comparação impossível sem laudos. Ambos exibem inteligência motora e tática de elite." },
          { question: "QI alto explica os dribles de Messi?", answer: "Parcialmente. Coordenação, treino e prática deliberada são igualmente decisivos." }
        ]} />
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra seu QI de verdade</h3>
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
            {getRelatedArticles("qi-lionel-messi", 3).map((article) => (
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

export default QILionelMessi;
