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

const QIRonaldoFenomeno = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-ronaldo-fenomeno";
  const articleTitle = "Qual era o QI de Ronaldo Fenômeno? Estimativas e Contexto";
  const articleDescription = "Descubra estimativas sobre o QI de Ronaldo Nazário, inteligência tática e o que explica sua genialidade dentro das áreas.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-ronaldo-fenomeno",
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
          <span>QI Ronaldo Fenômeno</span>
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
          <p className="text-xl text-muted-foreground mb-8">Ronaldo Nazário, o Fenômeno, revolucionou o papel de centroavante com velocidade, força e frieza na finalização. O <strong>QI de Ronaldo Fenômeno</strong> é tema de curiosidade, mas sua genialidade esportiva fica clara em outras dimensões cognitivas.</p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estimativa de QI: o que circula</h2>
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Faixa citada (não oficial)</h3>
                <p className="text-green-800 dark:text-green-200 mb-2"><strong>QI estimado: 105–125</strong></p>
                <p className="text-green-800 dark:text-green-200 text-sm">Especulação. Ronaldo Nazário não publicou teste cognitivo formal.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por que não sabemos o QI real de Ronaldo Fenômeno</h2>
          <p className="text-muted-foreground mb-4">
            Testes como WAIS-IV, Raven ou admissionais da Mensa exigem aplicação padronizada por profissional.
            Celebridades raramente divulgam laudos. Números copiados de fóruns ou redes sociais não têm validade científica.
            Além disso, Ronaldo Fenômeno construiu carreira em contexto onde outras formas de inteligência — prática, social, criativa — pesaram mais que pontuação escolar.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que Ronaldo Fenômeno revela sobre cognição</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Cálculo de espaço na área</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Posicionamento entre zagueiros no momento do passe</li>
            <li>Leitura de rebotes e segundas jogadas</li>
            <li>Escolha de pé forte ou fraco em milésimos de segundo</li>
            <li>Exploração de ângulos mínimos para chute</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Adaptação após lesões graves</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Reaprendizado motor após ruptura de ligamento (1999, 2000)</li>
            <li>Mudança de estilo: de velocidade pura a predador de área</li>
            <li>Inteligência emocional para retorno psicológico</li>
            <li>Manutenção de performance na Copa de 2002</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Carreira pós-futebol</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Atuação como empresário e comentarista</li>
            <li>Gestão de imagem e propriedade de clubes (Cruzeiro)</li>
            <li>Comunicação clara sobre saúde mental e corpo</li>
            <li>Mentoria a jovens atletas</li>
          </ul>

          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Perfil cognitivo observável (não laudo clínico)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">Pontos fortes prováveis</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Antecipação na área</li>
                  <li>✓ Adaptação tática</li>
                  <li>✓ Resiliência cognitiva</li>
                  <li>✓ Simplicidade decisória eficaz</li>
                  <li>✓ Inteligência espacial</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Limites da comparação</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Estimativas numéricas não confirmadas</li>
                  <li>• Fase inicial de disciplina fora de campo</li>
                  <li>• Testes escolares não documentados publicamente</li>
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
                  QI mede desempenho em tarefas padronizadas (lógica, verbal, memória de trabalho). Sucesso de Ronaldo Fenômeno
                  envolve também oportunidade, treino, rede e persistência. Um QI médio com 10.000 horas de prática
                  supera QI alto sem dedicação — princípio validado em psicologia do expertise.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como interpretar na escala de QI</h2>
          <p className="text-muted-foreground mb-4">
            Na escala com média 100 e desvio padrão 15, faixa 105–125 — se fosse real e medida por teste válido —
            situaria Ronaldo Fenômeno acima da média populacional. Consulte a{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela de QI</Link> e{" "}
            <Link to="/blog/qi-faixas-pontuacao-significado" className="text-primary hover:underline">significado das faixas</Link>.
            Para o contexto brasileiro, veja também a{" "}
            <Link to="/blog/media-qi-brasil" className="text-primary hover:underline">média de QI no Brasil</Link>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4"><Link to="/blog/qi-pele" className="text-primary hover:underline">QI do Pelé</Link>,  <Link to="/blog/qi-neymar" className="text-primary hover:underline">QI do Neymar</Link>,  <Link to="/blog/jogadores-futebol-maior-qi" className="text-primary hover:underline">jogadores com maior QI</Link>.</p>
        </div>

        <ArticleFAQ faqs={[
          { question: "Ronaldo Fenômeno tinha QI alto?", answer: "Não sabemos. Sua inteligência apareceu em finalização, adaptação e reinvenção de jogo após lesões." },
          { question: "Por que Ronaldo mudou o estilo após lesões?", answer: "Lesões limitaram explosão. Cognitivamente, adaptou-se ao predador de área — leitura e posicionamento compensaram velocidade." },
          { question: "Ronaldo vs Pelé: quem tinha mais QI?", answer: "Impossível comparar sem testes. Ambos exibiram inteligência tática de elite em contextos diferentes." },
          { question: "Como medir inteligência similar à de atacantes?", answer: "Testes medem raciocínio geral. Treinos de percepção, xadrez e vídeo-análise desenvolvem cognição esportiva específica." }
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
            {getRelatedArticles("qi-ronaldo-fenomeno", 3).map((article) => (
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

export default QIRonaldoFenomeno;
