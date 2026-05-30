import { Users, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const QIFernandoHenriqueCardoso = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-fernando-henrique-cardoso";
  const articleTitle = "Qual é o QI de Fernando Henrique Cardoso? Economia, Política e Erudição";
  const articleDescription = "Descubra estimativas sobre o QI de FHC, formação acadêmica e inteligência política como ex-presidente.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-fernando-henrique-cardoso",
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
          <span>QI Fernando Henrique Cardoso</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>30 de Maio de 2026</time>
          <span>•</span>
          <span>12 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-green-500/20 to-yellow-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Users className="w-24 h-24 text-green-600" />
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">Fernando Henrique Cardoso, sociólogo, ex-ministro e presidente do Brasil (1995–2002), é referência acadêmica e política. Sobre o <strong>QI de Fernando Henrique Cardoso</strong>, destacam-se inteligência analítica, erudição e capacidade de articulação institucional.</p>
          <h2 className="text-3xl font-bold mt-12 mb-6">Estimativa de QI: o que circula</h2>
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Faixa citada (não oficial)</h3>
                <p className="text-green-800 dark:text-green-200 mb-2"><strong>QI estimado: 125–145</strong></p>
                <p className="text-green-800 dark:text-green-200 text-sm">Sem teste oficial. FHC nunca divulgou laudo cognitivo público.</p>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Por que não sabemos o QI real de Fernando Henrique Cardoso</h2>
          <p className="text-muted-foreground mb-4">
            Testes padronizados exigem aplicação controlada. Celebridades raramente divulgam laudos.
            Números virais não têm validade científica. A carreira de Fernando Henrique Cardoso envolve inteligências
            práticas, sociais e criativas além do que um teste escolar captura.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-6">O que Fernando Henrique Cardoso revela sobre cognição</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Formação académica e produção intelectual</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Doutorado em ciências políticas</li>
            <li>Obras sobre dependência e modernização</li>
            <li>Carreira universitária internacional</li>
            <li>Publicações em sociologia e economia</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Inteligência política e gestão</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Plano Real e estabilização econômica</li>
            <li>Articulação com Congresso e oposição</li>
            <li>Transição democrática pós-ditadura</li>
            <li>Comunicação em entrevistas e debates</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Longevidade intelectual</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Colunas e livros na aposentadoria política</li>
            <li>Participação em debates públicos</li>
            <li>Mentoria de quadros políticos</li>
            <li>Reconhecimento internacional acadêmico</li>
          </ul>
          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Perfil cognitivo observável (não laudo clínico)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">Pontos fortes prováveis</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Análise sociológica</li>
                  <li>✓ Articulação política</li>
                  <li>✓ Comunicação erudita</li>
                  <li>✓ Visão estratégica</li>
                  <li>✓ Memória histórica</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Limites da comparação</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Estimativas numéricas sem fonte</li>
                  <li>• Erudição ≠ QI medido</li>
                  <li>• Política envolve fatores além de cognição</li>
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
                  QI mede desempenho em tarefas padronizadas. O legado de FHC combina erudição, contexto histórico e articulação política. Compare seu resultado real no teste.
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Como interpretar na escala de QI</h2>
          <p className="text-muted-foreground mb-4">
            Faixa 125–145 — se medida por teste válido — situaria acima da média. Veja a{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela de QI</Link>,{" "}
            <Link to="/blog/qi-faixas-pontuacao-significado" className="text-primary hover:underline">significado das faixas</Link> e{" "}
            <Link to="/blog/media-qi-brasil" className="text-primary hover:underline">média de QI no Brasil</Link>.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4"><Link to="/blog/qi-lula" className="text-primary hover:underline">QI do Lula</Link>,  <Link to="/blog/qi-bolsonaro" className="text-primary hover:underline">QI de Bolsonaro</Link>,  <Link to="/blog/qi-machado-de-assis" className="text-primary hover:underline">QI de Machado de Assis</Link>.</p>
        </div>
        <ArticleFAQ faqs={[          { question: "FHC fez teste de QI?", answer: "Não há registro público. Doutorado não equivale a laudo de QI." },
          { question: "FHC é considerado intelectual?", answer: "Sim, por formação acadêmica e produção sociológica — dimensões além do QI escolar." },
          { question: "FHC vs Lula em QI?", answer: "Comparação impossível sem laudos. Ambos exibem inteligência política distinta." },
          { question: "Plano Real prova QI alto?", answer: "Envolve equipe técnica, contexto e timing — não atributo individual de QI." }]} />
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
            {getRelatedArticles("qi-fernando-henrique-cardoso", 3).map((article) => (
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

export default QIFernandoHenriqueCardoso;
