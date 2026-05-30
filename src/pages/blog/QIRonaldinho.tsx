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

const QIRonaldinho = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-ronaldinho";
  const articleTitle = "Qual é o QI do Ronaldinho? Estimativas e Genialidade no Futebol";
  const articleDescription = "Descubra estimativas sobre o QI de Ronaldinho Gaúcho, criatividade em campo e o que explica sua magia com a bola.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-ronaldinho",
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
          <span>QI Ronaldinho</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>30 de Maio de 2026</time>
          <span>•</span>
          <span>12 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-green-500/20 to-yellow-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Trophy className="w-24 h-24 text-green-600" />
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">Ronaldo de Assis Moreira, o Ronaldinho Gaúcho, encantou o mundo com alegria e criatividade no futebol. Sobre o <strong>QI do Ronaldinho</strong>, o mais relevante é sua inteligência motora e improviso — dimensões que testes escolares não medem.</p>
          <h2 className="text-3xl font-bold mt-12 mb-6">Estimativa de QI: o que circula</h2>
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Faixa citada (não oficial)</h3>
                <p className="text-green-800 dark:text-green-200 mb-2"><strong>QI estimado: 105–125</strong></p>
                <p className="text-green-800 dark:text-green-200 text-sm">Sem teste oficial. Ronaldinho nunca divulgou laudo cognitivo.</p>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Por que não sabemos o QI real de Ronaldinho Gaúcho</h2>
          <p className="text-muted-foreground mb-4">
            Testes padronizados exigem aplicação controlada. Celebridades raramente divulgam laudos.
            Números virais não têm validade científica. A carreira de Ronaldinho Gaúcho envolve inteligências
            práticas, sociais e criativas além do que um teste escolar captura.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-6">O que Ronaldinho Gaúcho revela sobre cognição</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Improviso e visão periférica</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Elástico, pedrinha e finta em velocidade</li>
            <li>Leitura de espaços antes do passe</li>
            <li>Assistências com efeito e ângulo improvável</li>
            <li>Copa de 2002 e Champions com Barcelona como auge</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Inteligência emocional e carisma</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Comunicação positiva em vestiário e mídia</li>
            <li>Resiliência após fases de crítica</li>
            <li>Conexão com torcida brasileira e mundial</li>
            <li>Transição para música e eventos pós-carreira</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Disciplina vs liberdade criativa</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Críticas por falta de rotina em alguns clubes</li>
            <li>Pico de performance quando equilibrado</li>
            <li>Aprendizado tático com Scolari e Guardiola</li>
            <li>Legado técnico para gerações</li>
          </ul>
          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Perfil cognitivo observável (não laudo clínico)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">Pontos fortes prováveis</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Criatividade motora</li>
                  <li>✓ Improviso</li>
                  <li>✓ Alegria competitiva</li>
                  <li>✓ Visão ofensiva</li>
                  <li>✓ Comunicação</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Limites da comparação</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Estimativas numéricas sem fonte</li>
                  <li>• Disciplina variável na carreira</li>
                  <li>• QI não mede drible</li>
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
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  QI mede desempenho em tarefas padronizadas. O sucesso de Ronaldinho Gaúcho combina talento,
                  contexto, treino e oportunidade. Compare seu resultado real no teste, não estimativas de famosos.
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Como interpretar na escala de QI</h2>
          <p className="text-muted-foreground mb-4">
            Faixa 105–125 — se medida por teste válido — situaria acima da média. Veja a{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela de QI</Link>,{" "}
            <Link to="/blog/qi-faixas-pontuacao-significado" className="text-primary hover:underline">significado das faixas</Link> e{" "}
            <Link to="/blog/media-qi-brasil" className="text-primary hover:underline">média de QI no Brasil</Link>.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4"><Link to="/blog/qi-pele" className="text-primary hover:underline">QI do Pelé</Link>,  <Link to="/blog/qi-neymar" className="text-primary hover:underline">QI do Neymar</Link>,  <Link to="/blog/qi-kaka" className="text-primary hover:underline">QI do Kaká</Link>.</p>
        </div>
        <ArticleFAQ faqs={[          { question: "Ronaldinho fez teste de QI?", answer: "Não há registro público. Números na internet são especulação." },
          { question: "Ronaldinho era inteligente em campo?", answer: "Sim, em criatividade, coordenação e leitura ofensiva — cognição específica do futebol." },
          { question: "Ronaldinho vs Neymar em QI?", answer: "Comparação impossível sem laudos. Ambos exibem talento cognitivo-motor de elite." },
          { question: "Por que Ronaldinho decaiu cedo?", answer: "Mistura de estilo de vida, lesões e contexto — não necessariamente QI baixo." }]} />
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra seu QI de verdade</h3>
          <p className="text-muted-foreground mb-6">Teste gratuito no BomQI — resultado em minutos.</p>
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
            {getRelatedArticles("qi-ronaldinho", 3).map((article) => (
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

export default QIRonaldinho;
