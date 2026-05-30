import { BookOpen, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const QIMachadoDeAssis = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-machado-de-assis";
  const articleTitle = "Qual era o QI de Machado de Assis? O Gênio da Literatura Brasileira";
  const articleDescription = "Descubra estimativas sobre o QI de Machado de Assis, ironia literária e por que gênios da escrita desafiam medição por testes.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-machado-de-assis",
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
          <span>QI Machado de Assis</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>30 de Maio de 2026</time>
          <span>•</span>
          <span>12 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-green-500/20 to-yellow-500/5 rounded-lg mb-12 flex items-center justify-center">
          <BookOpen className="w-24 h-24 text-green-600" />
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">Joaquim Maria Machado de Assis, fundador da ABL e autor de <em>Dom Casmurro</em> e <em>Memórias Póstumas de Brás Cubas</em>, é o maior nome da literatura brasileira. Discutir o <strong>QI de Machado de Assis</strong> implica reconhecer inteligência verbal, ironia e profundidade psicológica que testes padronizados não capturam por completo.</p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estimativa de QI: o que circula</h2>
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Faixa citada (não oficial)</h3>
                <p className="text-green-800 dark:text-green-200 mb-2"><strong>QI estimado: 150–180</strong></p>
                <p className="text-green-800 dark:text-green-200 text-sm">Estimativa literária/especulativa. Machado morreu em 1908, antes dos testes de QI modernos.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por que não sabemos o QI real de Machado de Assis</h2>
          <p className="text-muted-foreground mb-4">
            Testes como WAIS-IV, Raven ou admissionais da Mensa exigem aplicação padronizada por profissional.
            Celebridades raramente divulgam laudos. Números copiados de fóruns ou redes sociais não têm validade científica.
            Além disso, Machado de Assis construiu carreira em contexto onde outras formas de inteligência — prática, social, criativa — pesaram mais que pontuação escolar.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que Machado de Assis revela sobre cognição</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Inteligência verbal e autodidatismo</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Aprendeu grego, latim e francês sem curso formal longo</li>
            <li>Domínio de registros linguísticos do Brasil imperial</li>
            <li>Crônicas jornalísticas com humor e crítica social</li>
            <li>Poesia, teatro, romance e crítica no mesmo autor</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Ironia e psicologia narrativa</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Narrador não confiável antes da moda modernista</li>
            <li>Análise fina de ciúme, hipocrisia e classe social</li>
            <li>Estrutura inovadora (capítulos curtos, metalinguagem)</li>
            <li>Influência em autores brasileiros por mais de um século</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Superação de barreiras sociais</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Filho de mãe escravizada, pai mulato, origem humilde</li>
            <li>Epilepsia e estigma de saúde na época</li>
            <li>Ascensão intelectual no Rio imperial</li>
            <li>Primeiro presidente negro da ABL (contexto racial da época)</li>
          </ul>

          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Perfil cognitivo observável (não laudo clínico)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">Pontos fortes prováveis</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Verbal</li>
                  <li>✓ Introspectiva</li>
                  <li>✓ Memória literária</li>
                  <li>✓ Humor e ironia</li>
                  <li>✓ Autodidatismo</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Limites da comparação</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• QI numérico inexistente</li>
                  <li>• Testes atuais não medem genialidade estética</li>
                  <li>• Contexto do século XIX</li>
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
                  QI mede desempenho em tarefas padronizadas (lógica, verbal, memória de trabalho). Sucesso de Machado de Assis
                  envolve também oportunidade, treino, rede e persistência. Um QI médio com 10.000 horas de prática
                  supera QI alto sem dedicação — princípio validado em psicologia do expertise.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como interpretar na escala de QI</h2>
          <p className="text-muted-foreground mb-4">
            Na escala com média 100 e desvio padrão 15, faixa 150–180 — se fosse real e medida por teste válido —
            situaria Machado de Assis acima da média populacional. Consulte a{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela de QI</Link> e{" "}
            <Link to="/blog/qi-faixas-pontuacao-significado" className="text-primary hover:underline">significado das faixas</Link>.
            Para o contexto brasileiro, veja também a{" "}
            <Link to="/blog/media-qi-brasil" className="text-primary hover:underline">média de QI no Brasil</Link>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4"><Link to="/blog/qi-paulo-coelho" className="text-primary hover:underline">QI do Paulo Coelho</Link>,  <Link to="/blog/qi-de-einstein" className="text-primary hover:underline">QI de Einstein</Link>,  <Link to="/blog/pessoas-famosas-com-qi-alto" className="text-primary hover:underline">famosos com QI alto</Link>.</p>
        </div>

        <ArticleFAQ faqs={[
          { question: "Machado de Assis era autodidata?", answer: "Sim, em grande parte. Estudo voraz em bibliotecas e línguas clássicas sem diploma universitário tradicional." },
          { question: "Qual QI para escrever como Machado?", answer: "Escrita genial envolve verbal, emocional e cultural. QI alto ajuda, mas leitura, prática e contexto histórico são centrais." },
          { question: "Machado vs Paulo Coelho em QI?", answer: "Comparação especulativa. Machado: ironia e complexidade. Coelho: clareza e alcance global. Métricas distintas." },
          { question: "Literatura entra em teste de QI?", answer: "WAIS inclui compreensão verbal, mas não mede talento para romance ou poesia." }
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
            {getRelatedArticles("qi-machado-de-assis", 3).map((article) => (
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

export default QIMachadoDeAssis;
