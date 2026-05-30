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

const QILula = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-lula";
  const articleTitle = "Qual é o QI do Lula? Estimativas e Análise Imparcial";
  const articleDescription = "Qual o QI de Lula? Entenda estimativas circulantes, inteligência política e limites de atribuir QI a líderes públicos.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-lula",
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
          <span>QI Lula</span>
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
          <p className="text-xl text-muted-foreground mb-8">Luiz Inácio Lula da Silva, ex-metalúrgico e presidente do Brasil (2003–2010 e 2023–), é figura central da política nacional. Sobre o <strong>QI do Lula</strong>, é essencial separar retórica política de ciência cognitiva: não há teste público, apenas observação de habilidades políticas.</p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estimativa de QI: o que circula</h2>
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Faixa citada (não oficial)</h3>
                <p className="text-green-800 dark:text-green-200 mb-2"><strong>QI estimado: 105–120</strong></p>
                <p className="text-green-800 dark:text-green-200 text-sm">Sem laudo. Números em redes sociais não têm fonte verificável.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por que não sabemos o QI real de Lula</h2>
          <p className="text-muted-foreground mb-4">
            Testes como WAIS-IV, Raven ou admissionais da Mensa exigem aplicação padronizada por profissional.
            Celebridades raramente divulgam laudos. Números copiados de fóruns ou redes sociais não têm validade científica.
            Além disso, Lula construiu carreira em contexto onde outras formas de inteligência — prática, social, criativa — pesaram mais que pontuação escolar.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que Lula revela sobre cognição</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Inteligência retórica e negociação</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Discursos que conectam classe trabalhadora e elites</li>
            <li>Mediação sindical histórica (CUT, greves 1970s–80s)</li>
            <li>Coalizões parlamentares complexas</li>
            <li>Comunicação em entrevistas longas e improvisadas</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Leitura de contexto histórico</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Sobrevivência à ditadura e ascensão democrática</li>
            <li>Programas sociais (Bolsa Família, Fome Zero)</li>
            <li>Relação internacional (BRICS, África, OMC)</li>
            <li>Adaptação a crises (2008, mensalão, pós-2022)</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Limites da atribuição de QI a políticos</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>QI não mede ética ou competência administrativa</li>
            <li>Discurso popular ≠ baixo QI (estereótipo incorreto)</li>
            <li>Sucesso eleitoral envolve rede, timing e emoção</li>
            <li>Debates ideológicos distorcem discussão sobre cognição</li>
          </ul>

          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Perfil cognitivo observável (não laudo clínico)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">Pontos fortes prováveis</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Interpessoal</li>
                  <li>✓ Retórica</li>
                  <li>✓ Memória política</li>
                  <li>✓ Negociação</li>
                  <li>✓ Resiliência</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Limites da comparação</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Escolaridade formal limitada (4ª série originalmente)</li>
                  <li>• Estimativas politizadas</li>
                  <li>• QI não avalia governança</li>
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
                  QI mede desempenho em tarefas padronizadas (lógica, verbal, memória de trabalho). Sucesso de Lula
                  envolve também oportunidade, treino, rede e persistência. Um QI médio com 10.000 horas de prática
                  supera QI alto sem dedicação — princípio validado em psicologia do expertise.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como interpretar na escala de QI</h2>
          <p className="text-muted-foreground mb-4">
            Na escala com média 100 e desvio padrão 15, faixa 105–120 — se fosse real e medida por teste válido —
            situaria Lula acima da média populacional. Consulte a{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela de QI</Link> e{" "}
            <Link to="/blog/qi-faixas-pontuacao-significado" className="text-primary hover:underline">significado das faixas</Link>.
            Para o contexto brasileiro, veja também a{" "}
            <Link to="/blog/media-qi-brasil" className="text-primary hover:underline">média de QI no Brasil</Link>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4"><Link to="/blog/media-qi-brasil" className="text-primary hover:underline">média de QI no Brasil</Link>,  <Link to="/blog/qi-empresarial-vs-qi-academico" className="text-primary hover:underline">QI empresarial vs acadêmico</Link>,  <Link to="/blog/qi-vs-inteligencia-social" className="text-primary hover:underline">QI vs inteligência social</Link>.</p>
        </div>

        <ArticleFAQ faqs={[
          { question: "Lula fez teste de QI?", answer: "Não há registro público. Qualquer número é especulação, muitas vezes com viés político." },
          { question: "Baixa escolaridade significa QI baixo?", answer: "Não. QI e anos de estudo correlacionam, mas são distintos. Muitos líderes têm inteligência prática elevada." },
          { question: "Lula é inteligente politicamente?", answer: "Apoiantes e analistas destacam articulação e leitura de cenário; opositores questionam decisões — debate político, não laudo." },
          { question: "Devo comparar meu QI ao de políticos?", answer: "Compare seu teste padronizado com percentis populacionais, não com figuras públicas sem dado." }
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
            {getRelatedArticles("qi-lula", 3).map((article) => (
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

export default QILula;
