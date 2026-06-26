import { Cpu, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const QIBillGates = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-bill-gates";
  const articleTitle = "Qual é o QI de Bill Gates? Estimativas e Visão Estratégica";
  const articleDescription = "Estimativas sobre o QI de Bill Gates, fundação da Microsoft e raciocínio analítico na tecnologia e filantropia.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-bill-gates",
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
          <span>QI Bill Gates</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>30 de Maio de 2026</time>
          <span>•</span>
          <span>12 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-indigo-500/20 to-violet-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Cpu className="w-24 h-24 text-indigo-600" />
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">Bill Gates cofundou a Microsoft e liderou a revolução do software pessoal. Sobre o <strong>QI de Bill Gates</strong>, circulam estimativas altas ligadas ao SAT e ao perfil analítico — mas sem laudo público recente.</p>
          <h2 className="text-3xl font-bold mt-12 mb-6">Estimativa de QI: o que circula</h2>
          <div className="bg-indigo-50 dark:bg-indigo-950/20 border-2 border-indigo-200 dark:border-indigo-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-indigo-900 dark:text-indigo-100">Faixa citada (não oficial)</h3>
                <p className="text-indigo-800 dark:text-indigo-200 mb-2"><strong>QI estimado: 150–160</strong></p>
                <p className="text-indigo-800 dark:text-indigo-200 text-sm">Estimativa baseada em relatos antigos (SAT). Não há teste de QI oficial divulgado.</p>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Por que não sabemos o QI real</h2>
          <p className="text-muted-foreground mb-4">Gates mencionou desempenho em testes escolares, mas isso não equivale a WAIS ou WISC validados na idade adulta.</p>
          <h2 className="text-3xl font-bold mt-12 mb-6">O que revela sobre cognição</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Raciocínio analítico e programação</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Lógica e abstração em software</li>
            <li>Visão de plataforma (Windows)</li>
            <li>Competição estratégica nos anos 80–90</li>
            <li>Leitura intensa e síntese de temas complexos</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Negócios e filantropia</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Decisões de investimento em escala</li>
            <li>Fundação Gates e saúde global</li>
            <li>Parcerias institucionais</li>
            <li>Comunicação técnica para público amplo</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Aprendizado contínuo</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Hábito de leitura volumosa</li>
            <li>Atualização em energia e clima</li>
            <li>Debates públicos sobre políticas</li>
            <li>Mentoria a empreendedores</li>
          </ul>
          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Perfil cognitivo observável (não laudo clínico)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">Pontos fortes prováveis</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Raciocínio lógico</li>
                  <li>✓ Síntese de informação</li>
                  <li>✓ Visão de longo prazo</li>
                  <li>✓ Foco</li>
                  <li>✓ Aprendizado contínuo</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Limites da comparação</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• SAT ≠ QI adulto</li>
                  <li>• Estimativas infladas na web</li>
                  <li>• Sucesso envolve timing de mercado</li>
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
                <p className="text-blue-800 dark:text-blue-200 text-sm">Gates combina QI potencialmente alto com oportunidade histórica no PC. Números de celebridades não substituem seu próprio teste.</p>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Como interpretar na escala de QI</h2>
          <p className="text-muted-foreground mb-4">
            Estimativas 150+ colocariam em faixa de altíssimo desempenho — veja nossa tabela de QI para contexto. Veja a{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela de QI</Link>,{" "}
            <Link to="/blog/qi-faixas-pontuacao-significado" className="text-primary hover:underline">significado das faixas</Link> e{" "}
            <Link to="/blog/qi-medio-mundial" className="text-primary hover:underline">QI médio mundial</Link>.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4"><Link to="/blog/qi-steve-jobs" className="text-primary hover:underline">QI do Steve Jobs</Link>, <Link to="/blog/qi-elon-musk" className="text-primary hover:underline">QI do Elon Musk</Link>, <Link to="/blog/qi-de-einstein" className="text-primary hover:underline">QI de Einstein</Link>.</p>
        </div>
        <ArticleFAQ faqs={[
          { question: "Bill Gates tem QI 160?", answer: "É estimativa não confirmada. Relatos sobre SAT não equivalem a laudo clínico." },
          { question: "Gates é gênio?", answer: "É referência em tecnologia e filantropia; 'gênio' é rótulo popular, não diagnóstico." },
          { question: "QI explica o sucesso da Microsoft?", answer: "Contribui, mas mercado, equipe, capital e timing foram decisivos." },
          { question: "Como comparar Gates a Jobs?", answer: "Perfis cognitivos distintos; sem laudos, comparação numérica é especulação." }
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
            {getRelatedArticles("qi-bill-gates", 3).map((article) => (
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

export default QIBillGates;
