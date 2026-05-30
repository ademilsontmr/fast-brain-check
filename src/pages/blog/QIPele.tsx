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

const QIPele = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-pele";
  const articleTitle = "Qual era o QI de Pelé? Estimativas e Inteligência do Rei do Futebol";
  const articleDescription = "Descubra qual era o QI estimado de Pelé, como a inteligência em campo se relaciona com raciocínio rápido e o que isso significa na prática.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-pele",
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
          <span>QI Pelé</span>
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
          <p className="text-xl text-muted-foreground mb-8">Edson Arantes do Nascimento, o Pelé, é o maior ídolo do futebol brasileiro. A pergunta <strong>qual era o QI de Pelé</strong> aparece com frequência, mas a resposta honesta é: ninguém sabe com precisão. O que temos são traços cognitivos observáveis em décadas de carreira.</p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estimativa de QI: o que circula</h2>
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Faixa citada (não oficial)</h3>
                <p className="text-green-800 dark:text-green-200 mb-2"><strong>QI estimado: 110–130</strong></p>
                <p className="text-green-800 dark:text-green-200 text-sm">Sem teste oficial. Faixa especulativa baseada em relatos sobre raciocínio tático e liderança — não dado científico.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por que não sabemos o QI real de Pelé</h2>
          <p className="text-muted-foreground mb-4">
            Testes como WAIS-IV, Raven ou admissionais da Mensa exigem aplicação padronizada por profissional.
            Celebridades raramente divulgam laudos. Números copiados de fóruns ou redes sociais não têm validade científica.
            Além disso, Pelé construiu carreira em contexto onde outras formas de inteligência — prática, social, criativa — pesaram mais que pontuação escolar.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que Pelé revela sobre cognição</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Leitura de jogo e antecipação</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Antecipava passes e movimentos antes dos adversários</li>
            <li>Processamento visual acelerado em espaços congestionados</li>
            <li>Memória de padrões táticos acumulada desde a infância</li>
            <li>Capacidade de adaptar estilo conforme posição e fase da carreira</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Criatividade sob pressão</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Improviso em finalizações (bicycle kick, domínio de peito)</li>
            <li>Decisões em frações de segundo com marcação dupla</li>
            <li>Comunicação não verbal com companheiros em campo</li>
            <li>Resiliência cognitiva após derrotas e lesões</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Liderança e inteligência social</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Capitania da Seleção em três Copas do Mundo</li>
            <li>Representação diplomática do Brasil no exterior</li>
            <li>Articulação com técnicos, dirigentes e mídia</li>
            <li>Carisma que transcende barreiras linguísticas</li>
          </ul>

          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Perfil cognitivo observável (não laudo clínico)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">Pontos fortes prováveis</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Visão periférica e espacial</li>
                  <li>✓ Tomada de decisão rápida</li>
                  <li>✓ Memória de jogadas e adversários</li>
                  <li>✓ Comunicação e liderança</li>
                  <li>✓ Controle emocional em finais</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Limites da comparação</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Sem evidência de desempenho acadêmico público</li>
                  <li>• Estimativas de QI na mídia sem fonte</li>
                  <li>• QI não mede talento motor fino</li>
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
                  QI mede desempenho em tarefas padronizadas (lógica, verbal, memória de trabalho). Sucesso de Pelé
                  envolve também oportunidade, treino, rede e persistência. Um QI médio com 10.000 horas de prática
                  supera QI alto sem dedicação — princípio validado em psicologia do expertise.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como interpretar na escala de QI</h2>
          <p className="text-muted-foreground mb-4">
            Na escala com média 100 e desvio padrão 15, faixa 110–130 — se fosse real e medida por teste válido —
            situaria Pelé acima da média populacional. Consulte a{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela de QI</Link> e{" "}
            <Link to="/blog/qi-faixas-pontuacao-significado" className="text-primary hover:underline">significado das faixas</Link>.
            Para o contexto brasileiro, veja também a{" "}
            <Link to="/blog/media-qi-brasil" className="text-primary hover:underline">média de QI no Brasil</Link>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4"><Link to="/blog/qi-neymar" className="text-primary hover:underline">QI do Neymar</Link>,  <Link to="/blog/qi-ronaldo-fenomeno" className="text-primary hover:underline">QI do Ronaldo Fenômeno</Link>,  <Link to="/blog/jogadores-futebol-maior-qi" className="text-primary hover:underline">jogadores com maior QI</Link>.</p>
        </div>

        <ArticleFAQ faqs={[
          { question: "Pelé fez teste de QI?", answer: "Não há registro público de teste padronizado. Qualquer número citado é estimativa ou boato." },
          { question: "Jogador de futebol precisa de QI alto?", answer: "Elite exige cognição específica: leitura de jogo, coordenação e decisão rápida. Isso não exige QI 130+ em teste acadêmico." },
          { question: "Pelé era considerado inteligente fora do campo?", answer: "Relatos de liderança, articulação institucional e carreira pós-futebol sugerem inteligência prática e social elevadas." },
          { question: "Como comparar meu QI ao de Pelé?", answer: "Faça um teste padronizado no BomQI. Compare percentis, não números atribuídos a ídolos sem laudo." }
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
            {getRelatedArticles("qi-pele", 3).map((article) => (
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

export default QIPele;
