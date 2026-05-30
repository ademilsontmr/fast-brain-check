import { Star, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const QIXuxa = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-xuxa";
  const articleTitle = "Qual é o QI da Xuxa? Estimativas e Impacto Cultural";
  const articleDescription = "Descubra estimativas sobre o QI de Xuxa, inteligência comunicativa e empreendedorismo no entretenimento brasileiro.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-xuxa",
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
          <span>QI Xuxa</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>30 de Maio de 2026</time>
          <span>•</span>
          <span>12 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-green-500/20 to-yellow-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Star className="w-24 h-24 text-green-600" />
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">Maria da Graça Meneghel, a Xuxa, dominou infância brasileira e expandiu para música, cinema e negócios. Sobre o <strong>QI da Xuxa</strong>, o legado mostra inteligência comunicativa, gestão de marca e reinvenção de carreira.</p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estimativa de QI: o que circula</h2>
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Faixa citada (não oficial)</h3>
                <p className="text-green-800 dark:text-green-200 mb-2"><strong>QI estimado: 110–125</strong></p>
                <p className="text-green-800 dark:text-green-200 text-sm">Não confirmado. Xuxa não publicou laudo de QI.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por que não sabemos o QI real de Xuxa</h2>
          <p className="text-muted-foreground mb-4">
            Testes como WAIS-IV, Raven ou admissionais da Mensa exigem aplicação padronizada por profissional.
            Celebridades raramente divulgam laudos. Números copiados de fóruns ou redes sociais não têm validade científica.
            Além disso, Xuxa construiu carreira em contexto onde outras formas de inteligência — prática, social, criativa — pesaram mais que pontuação escolar.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que Xuxa revela sobre cognição</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Comunicação com crianças e famílias</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Linguagem simples e inclusiva por décadas</li>
            <li>Coreografias e roteiros memoráveis</li>
            <li>Construção de universo (Paquitas, Xou da Xuxa)</li>
            <li>Transição de children's TV a ícone pop adulto</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Empreendedorismo e marca</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Produtos licenciados em escala nacional</li>
            <li>Parcerias com Grupo Silvio Santos (SBT)</li>
            <li>Carreira solo na Record e projetos digitais</li>
            <li>Gestão de imagem em era pré-redes e pós-redes</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Reinvenção e longevidade</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>De modelo a rainha dos baixinhos</li>
            <li>Música pop de massa (1990s)</li>
            <li>Atuação e causas sociais</li>
            <li>Adaptação a críticas e mudanças culturais</li>
          </ul>

          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Perfil cognitivo observável (não laudo clínico)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">Pontos fortes prováveis</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Comunicação</li>
                  <li>✓ Marketing pessoal</li>
                  <li>✓ Disciplina de gravação</li>
                  <li>✓ Adaptação de público</li>
                  <li>✓ Memorização de roteiros</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Limites da comparação</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Polêmicas e críticas ao longo da carreira</li>
                  <li>• QI numérico desconhecido</li>
                  <li>• Estereótipos de apresentadora</li>
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
                  QI mede desempenho em tarefas padronizadas (lógica, verbal, memória de trabalho). Sucesso de Xuxa
                  envolve também oportunidade, treino, rede e persistência. Um QI médio com 10.000 horas de prática
                  supera QI alto sem dedicação — princípio validado em psicologia do expertise.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como interpretar na escala de QI</h2>
          <p className="text-muted-foreground mb-4">
            Na escala com média 100 e desvio padrão 15, faixa 110–125 — se fosse real e medida por teste válido —
            situaria Xuxa acima da média populacional. Consulte a{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela de QI</Link> e{" "}
            <Link to="/blog/qi-faixas-pontuacao-significado" className="text-primary hover:underline">significado das faixas</Link>.
            Para o contexto brasileiro, veja também a{" "}
            <Link to="/blog/media-qi-brasil" className="text-primary hover:underline">média de QI no Brasil</Link>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4"><Link to="/blog/qi-silvio-santos" className="text-primary hover:underline">QI do Silvio Santos</Link>,  <Link to="/blog/qi-anitta" className="text-primary hover:underline">QI da Anitta</Link>,  <Link to="/blog/qi-gisele-bundchen" className="text-primary hover:underline">QI da Gisele</Link>.</p>
        </div>

        <ArticleFAQ faqs={[
          { question: "Xuxa é inteligente?", answer: "Décadas de relevância exigem cognição social, comunicativa e estratégica — além de carisma." },
          { question: "Xuxa estudou?", answer: "Início precoce na carreira artística; formação escolar tradicional interrompida pelo trabalho." },
          { question: "Xuxa vs Silvio: quem tem QI maior?", answer: "Comparação impossível sem testes. Ambos dominaram mídia brasileira com perfis distintos." },
          { question: "Xuxa ainda influencia?", answer: "Sim, especialmente gerações que cresceram com seus programas; legado cultural permanece." }
        ]} />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra seu QI de verdade</h3>
          <p className="text-muted-foreground mb-6">
            Pare de comparar com estimativas de famosos. Faça o teste gratuito do BomQI e veja onde você está na escala real.
          </p>
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
            {getRelatedArticles("qi-xuxa", 3).map((article) => (
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

export default QIXuxa;
