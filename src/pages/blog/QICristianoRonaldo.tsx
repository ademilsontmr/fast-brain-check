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

const QICristianoRonaldo = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-cristiano-ronaldo";
  const articleTitle = "Qual é o QI do Cristiano Ronaldo? Estimativas e Disciplina";
  const articleDescription = "Estimativas sobre o QI de Cristiano Ronaldo, preparação física e raciocínio tático que sustentam sua longevidade.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-cristiano-ronaldo",
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
          <span>QI Cristiano Ronaldo</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>30 de Maio de 2026</time>
          <span>•</span>
          <span>12 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-red-500/20 to-orange-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Trophy className="w-24 h-24 text-red-600" />
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">Cristiano Ronaldo, artilheiro histórico e cinco vezes Bola de Ouro, combina explosão física com obsessão por preparação. Sobre o <strong>QI do Cristiano Ronaldo</strong>, destacam-se disciplina cognitiva, leitura de área e adaptação tática ao longo de décadas.</p>
          <h2 className="text-3xl font-bold mt-12 mb-6">Estimativa de QI: o que circula</h2>
          <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-red-900 dark:text-red-100">Faixa citada (não oficial)</h3>
                <p className="text-red-800 dark:text-red-200 mb-2"><strong>QI estimado: 105–125</strong></p>
                <p className="text-red-800 dark:text-red-200 text-sm">Sem teste oficial. Ronaldo nunca publicou resultado de avaliação cognitiva.</p>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Por que não sabemos o QI real</h2>
          <p className="text-muted-foreground mb-4">Atletas de elite raramente divulgam laudos. Estimativas online misturam fato e ficção.</p>
          <h2 className="text-3xl font-bold mt-12 mb-6">O que revela sobre cognição</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Inteligência física e posicionamento</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Salto e timing de cabeça</li>
            <li>Movimentação na área sem bola</li>
            <li>Finalização de ambas as pernas</li>
            <li>Velocidade de reação</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Disciplina e rotina</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Treino e recuperação rigorosos</li>
            <li>Adaptação alimentar e sono</li>
            <li>Longevidade em alto nível</li>
            <li>Foco em recordes e metas</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Liderança e comunicação</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Comando no vestiário</li>
            <li>Pressão midiática constante</li>
            <li>Marca pessoal global</li>
            <li>Transição entre ligas e culturas</li>
          </ul>
          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Perfil cognitivo observável (não laudo clínico)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">Pontos fortes prováveis</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Disciplina</li>
                  <li>✓ Posicionamento</li>
                  <li>✓ Resiliência</li>
                  <li>✓ Foco em metas</li>
                  <li>✓ Adaptação tática</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Limites da comparação</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Números de QI sem fonte</li>
                  <li>• QI não mede salto</li>
                  <li>• Estilo depende de sistema</li>
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
                <p className="text-blue-800 dark:text-blue-200 text-sm">Ronaldo exemplifica que disciplina e treino deliberado amplificam talento. QI medido em teste é outra dimensão — meça a sua no BomQI.</p>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Como interpretar na escala de QI</h2>
          <p className="text-muted-foreground mb-4">
            Faixa 105–125 — se confirmada por teste — indicaria desempenho acima da média populacional. Veja a{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela de QI</Link>,{" "}
            <Link to="/blog/qi-faixas-pontuacao-significado" className="text-primary hover:underline">significado das faixas</Link> e{" "}
            <Link to="/blog/qi-medio-mundial" className="text-primary hover:underline">QI médio mundial</Link>.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4"><Link to="/blog/qi-lionel-messi" className="text-primary hover:underline">QI do Lionel Messi</Link>, <Link to="/blog/qi-ronaldo-fenomeno" className="text-primary hover:underline">QI do Ronaldo Fenômeno</Link>, <Link to="/blog/qi-de-famosos" className="text-primary hover:underline">Índice QI de Famosos</Link>.</p>
        </div>
        <ArticleFAQ faqs={[
          { question: "Cristiano Ronaldo tem QI alto?", answer: "Não sabemos. Estimativas circulam sem laudo oficial." },
          { question: "Sua disciplina indica inteligência?", answer: "Indica autorregulação e foco — competências cognitivas distintas do QI escolar." },
          { question: "Ronaldo vs Messi: quem tem QI maior?", answer: "Impossível comparar sem testes válidos aplicados nas mesmas condições." },
          { question: "Idade avançada em elite indica QI?", answer: "Reflete mais preparação física, tática e experiência do que QI numérico." }
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
            {getRelatedArticles("qi-cristiano-ronaldo", 3).map((article) => (
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

export default QICristianoRonaldo;
