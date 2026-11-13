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

const QIDonaldTrump = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-donald-trump";
  const articleTitle = "Qual é o QI de Donald Trump? Estimativas e Retórica Política";
  const articleDescription = "O que se sabe sobre estimativas de QI de Donald Trump, limitações das fontes e diferença entre QI e habilidade retórica.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-donald-trump",
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
          <span>QI Donald Trump</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>30 de Maio de 2026</time>
          <span>•</span>
          <span>12 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-amber-500/20 to-red-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Users className="w-24 h-24 text-amber-700" />
        </div>
        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">Donald Trump, empresário e ex-presidente dos EUA, é alvo frequente de debates sobre inteligência. Sobre o <strong>QI de Donald Trump</strong>, o tema é politizado: ele já citou resultados de testes cognitivos de triagem, mas não um QI formal público.</p>
          <h2 className="text-3xl font-bold mt-12 mb-6">Estimativa de QI: o que circula</h2>
          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">Faixa citada (não oficial)</h3>
                <p className="text-amber-800 dark:text-amber-200 mb-2"><strong>QI estimado: 120–156</strong></p>
                <p className="text-amber-800 dark:text-amber-200 text-sm">Faixa muito ampla na internet. Trump citou desempenho em teste MoCA (triagem), não WAIS de QI.</p>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Por que não sabemos o QI real</h2>
          <p className="text-muted-foreground mb-4">Testes MoCA avaliam função cognitiva básica, não QI. Números altos atribuídos a ele carecem de documentação independente.</p>
          <h2 className="text-3xl font-bold mt-12 mb-6">O que revela sobre cognição</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Comunicação e mídia</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Mensagens curtas e repetitivas</li>
            <li>Domínio de narrativa em reality e TV</li>
            <li>Mobilização de base eleitoral</li>
            <li>Confronto direto com adversários</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Negócios e branding</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Marca pessoal global</li>
            <li>Negociações imobiliárias</li>
            <li>Franquias e licenciamento</li>
            <li>Reinvenção de imagem pública</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Política e estratégia</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Campanhas eleitorais disruptivas</li>
            <li>Uso de redes sociais</li>
            <li>Alianças e conflitos institucionais</li>
            <li>Adaptação a contexto midiático</li>
          </ul>
          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Perfil cognitivo observável (não laudo clínico)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">Pontos fortes prováveis</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Retórica</li>
                  <li>✓ Branding</li>
                  <li>✓ Persistência</li>
                  <li>✓ Leitura de audiência</li>
                  <li>✓ Negociação</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Limites da comparação</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• QI ≠ popularidade</li>
                  <li>• Fontes politizadas</li>
                  <li>• MoCA não mede QI</li>
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
                <p className="text-blue-800 dark:text-blue-200 text-sm">Sucesso político e midiático envolve habilidades sociais e retóricas que testes de QI não medem integralmente. Foque no seu perfil real com um teste válido.</p>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Como interpretar na escala de QI</h2>
          <p className="text-muted-foreground mb-4">
            Sem laudo público de QI, qualquer número é especulação. Veja como interpretar resultados reais. Veja a{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela de QI</Link>,{" "}
            <Link to="/blog/qi-faixas-pontuacao-significado" className="text-primary hover:underline">significado das faixas</Link> e{" "}
            <Link to="/blog/qi-medio-mundial" className="text-primary hover:underline">QI médio mundial</Link>.
          </p>
          <ArticleMidAdSense />
          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4"><Link to="/blog/qi-bolsonaro" className="text-primary hover:underline">QI do Bolsonaro</Link>, <Link to="/blog/qi-lula" className="text-primary hover:underline">QI do Lula</Link>, <Link to="/blog/qi-de-famosos" className="text-primary hover:underline">Índice QI de Famosos</Link>.</p>
        </div>
        <ArticleFAQ faqs={[
          { question: "Trump divulgou seu QI?", answer: "Não há laudo público de teste de QI padronizado. Citou testes de triagem cognitiva, não WAIS." },
          { question: "Trump tem QI acima de 150?", answer: "Alegações nesse sentido não têm verificação independente." },
          { question: "QI importa na política?", answer: "Retórica, rede de apoio e contexto eleitoral pesam tanto quanto desempenho em testes." },
          { question: "MoCA mede QI?", answer: "Não. É triagem breve de função cognitiva, especialmente em idosos." }
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
            {getRelatedArticles("qi-donald-trump", 3).map((article) => (
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

export default QIDonaldTrump;
