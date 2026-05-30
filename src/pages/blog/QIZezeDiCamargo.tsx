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

const QIZezeDiCamargo = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-zeze-di-camargo";
  const articleTitle = "Qual é o QI de Zezé Di Camargo? Sertanejo e Inteligência Artística";
  const articleDescription = "Descubra estimativas sobre o QI de Zezé Di Camargo, dupla com Luciano e carreira no sertanejo.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-zeze-di-camargo",
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
          <span>QI Zezé Di Camargo</span>
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
          <p className="text-xl text-muted-foreground mb-8">Zezé Di Camargo, ao lado de Luciano, domina o sertanejo há décadas com hits e shows lotados. Sobre o <strong>QI de Zezé Di Camargo</strong>, interessam sua memória musical, carisma de palco e empreendedorismo artístico.</p>
          <h2 className="text-3xl font-bold mt-12 mb-6">Estimativa de QI: o que circula</h2>
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Faixa citada (não oficial)</h3>
                <p className="text-green-800 dark:text-green-200 mb-2"><strong>QI estimado: 100–120</strong></p>
                <p className="text-green-800 dark:text-green-200 text-sm">Sem teste oficial. Zezé nunca divulgou laudo cognitivo.</p>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Por que não sabemos o QI real de Zezé Di Camargo</h2>
          <p className="text-muted-foreground mb-4">
            Testes padronizados exigem aplicação controlada. Celebridades raramente divulgam laudos.
            Números virais não têm validade científica. A carreira de Mirosmar José de Souza envolve inteligências
            práticas, sociais e criativas além do que um teste escolar captura.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-6">O que Zezé Di Camargo revela sobre cognição</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Memória musical e performance</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Repertório extenso de hits memorizados</li>
            <li>Harmonia vocal com Luciano</li>
            <li>Conexão emocional com plateias</li>
            <li>Adaptação de clássicos sertanejos</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Empreendedorismo artístico</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Gestão de carreira independente</li>
            <li>Expansão para TV e reality shows</li>
            <li>Parcerias com marcas e eventos</li>
            <li>Reinvenção após fases de crise</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Longevidade no sertanejo</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Transição de dupla para carreira solo</li>
            <li>Adaptação a novos gêneros e públicos</li>
            <li>Presença constante em rádios e streaming</li>
            <li>Legado familiar na música</li>
          </ul>
          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Perfil cognitivo observável (não laudo clínico)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">Pontos fortes prováveis</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Memória musical</li>
                  <li>✓ Carisma</li>
                  <li>✓ Harmonia vocal</li>
                  <li>✓ Empreendedorismo</li>
                  <li>✓ Resiliência</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Limites da comparação</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Estimativas numéricas sem fonte</li>
                  <li>• Carisma ≠ QI escolar</li>
                  <li>• Comparações subjetivas</li>
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
                  QI mede desempenho em tarefas padronizadas. O sucesso de Zezé Di Camargo combina talento, empreendedorismo e conexão com o público. Compare seu resultado real no teste.
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Como interpretar na escala de QI</h2>
          <p className="text-muted-foreground mb-4">
            Faixa 100–120 — se medida por teste válido — situaria acima da média. Veja a{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela de QI</Link>,{" "}
            <Link to="/blog/qi-faixas-pontuacao-significado" className="text-primary hover:underline">significado das faixas</Link> e{" "}
            <Link to="/blog/media-qi-brasil" className="text-primary hover:underline">média de QI no Brasil</Link>.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4"><Link to="/blog/qi-anitta" className="text-primary hover:underline">QI da Anitta</Link>,  <Link to="/blog/qi-ivete-sangalo" className="text-primary hover:underline">QI da Ivete Sangalo</Link>,  <Link to="/blog/qi-gal-costa" className="text-primary hover:underline">QI de Gal Costa</Link>.</p>
        </div>
        <ArticleFAQ faqs={[          { question: "Zezé Di Camargo fez teste de QI?", answer: "Não há registro público. Números na internet são especulação." },
          { question: "Zezé é inteligente artisticamente?", answer: "Sim, em memória, performance e empreendedorismo — cognição do entretenimento." },
          { question: "Zezé vs Luciano em QI?", answer: "Comparação impossível sem laudos. Ambos exibem habilidades complementares na dupla." },
          { question: "Sertanejo exige QI alto?", answer: "Envolve memória, carisma e negócios — dimensões distintas do QI escolar." }]} />
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
            {getRelatedArticles("qi-zeze-di-camargo", 3).map((article) => (
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

export default QIZezeDiCamargo;
