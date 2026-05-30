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

const QISergioMoro = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-sergio-moro";
  const articleTitle = "Qual é o QI de Sérgio Moro? Jurídico, Política e Lava Jato";
  const articleDescription = "Estimativas sobre o QI de Sérgio Moro, carreira jurídica e trajetória política.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-sergio-moro",
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
          <span>QI Sérgio Moro</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>30 de Maio de 2026</time>
          <span>•</span>
          <span>12 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-slate-600/20 to-gray-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Users className="w-24 h-24 text-slate-700" />
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">Sérgio Fernando Moro, ex-juiz da Lava Jato e ex-ministro, tornou-se figura central da política brasileira. Sobre o <strong>QI de Sérgio Moro</strong>, o mais relevante é seu raciocínio jurídico e capacidade analítica — dimensões parcialmente relacionadas ao QI, mas distintas de testes escolares.</p>
          <h2 className="text-3xl font-bold mt-12 mb-6">Estimativa de QI: o que circula</h2>
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Faixa citada (não oficial)</h3>
                <p className="text-green-800 dark:text-green-200 mb-2"><strong>QI estimado: 120–140</strong></p>
                <p className="text-green-800 dark:text-green-200 text-sm">Sem teste oficial. Moro nunca divulgou laudo cognitivo público.</p>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Por que não sabemos o QI real de Sérgio Moro</h2>
          <p className="text-muted-foreground mb-4">
            Testes padronizados exigem aplicação controlada. Celebridades raramente divulgam laudos.
            Números virais não têm validade científica. A carreira de Sérgio Moro envolve inteligências
            práticas, sociais e criativas além do que um teste escolar captura.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-6">O que Sérgio revela sobre cognição</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Raciocínio jurídico</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Formação em Direito com distinção</li>
            <li>Condução de processos complexos</li>
            <li>Decisões com impacto nacional</li>
            <li>Publicações e palestras acadêmicas</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Estratégia política</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Transição do Judiciário para Executivo</li>
            <li>Alianças e rupturas partidárias</li>
            <li>Comunicação sobre anticorrupção</li>
            <li>Candidaturas presidenciais e senadoriais</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Controvérsias e limites</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Críticas de vazamentos e parcialidade</li>
            <li>Relação tensa com diferentes governos</li>
            <li>Decisões questionadas por pares</li>
            <li>Legado polarizado da Lava Jato</li>
          </ul>
          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Perfil cognitivo observável (não laudo clínico)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">Pontos fortes prováveis</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Análise jurídica</li>
                  <li>✓ Comunicação técnica</li>
                  <li>✓ Foco em procedimentos</li>
                  <li>✓ Persistência</li>
                  <li>✓ Visibilidade internacional</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Limites da comparação</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Estimativas especulativas</li>
                  <li>• Polarização distorce percepção</li>
                  <li>• QI não mede imparcialidade judicial</li>
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
                  QI mede desempenho em tarefas padronizadas. O sucesso de Sérgio Moro combina talento, contexto, treino e oportunidade. Compare seu resultado real no teste, não estimativas de famosos.
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Como interpretar na escala de QI</h2>
          <p className="text-muted-foreground mb-4">
            Faixa 120–140 — se medida por teste válido — situaria acima da média. Veja a{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela de QI</Link>,{" "}
            <Link to="/blog/qi-faixas-pontuacao-significado" className="text-primary hover:underline">significado das faixas</Link> e{" "}
            <Link to="/blog/media-qi-brasil" className="text-primary hover:underline">média de QI no Brasil</Link>.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4"><Link to="/blog/qi-lula" className="text-primary hover:underline">QI Lula</Link>,  <Link to="/blog/qi-bolsonaro" className="text-primary hover:underline">QI Bolsonaro</Link>,  <Link to="/blog/qi-fernando-henrique-cardoso" className="text-primary hover:underline">QI Fernando Henrique Cardoso</Link>.</p>
        </div>
        <ArticleFAQ faqs={[
          { question: "Sérgio Moro fez teste de QI?", answer: "Não há registro público de laudo." },
          { question: "Moro é considerado inteligente?", answer: "Sim, em raciocínio jurídico e análise de processos — dimensões específicas." },
          { question: "Moro vs Lula em QI?", answer: "Comparação impossível sem laudos; envolve viés político na percepção." },
          { question: "Ser juiz federal indica QI alto?", answer: "Indica preparo técnico e raciocínio analítico, correlacionados parcialmente com QI." }
        ]} />
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
            {getRelatedArticles("qi-sergio-moro", 3).map((article) => (
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

export default QISergioMoro;
