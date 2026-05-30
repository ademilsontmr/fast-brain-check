import { Zap, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const QIAyrtonSenna = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-ayrton-senna";
  const articleTitle = "Qual era o QI de Ayrton Senna? Estimativas e Inteligência na Pista";
  const articleDescription = "Qual o QI de Ayrton Senna? Análise de estimativas, raciocínio em alta velocidade e o que a ciência diz sobre cognição no automobilismo.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-ayrton-senna",
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
          <span>QI Ayrton Senna</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>30 de Maio de 2026</time>
          <span>•</span>
          <span>12 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-green-500/20 to-yellow-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Zap className="w-24 h-24 text-green-600" />
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">Ayrton Senna da Silva é ícone nacional e tricampeão mundial de Fórmula 1. A busca pelo <strong>QI de Ayrton Senna</strong> reflete a fascinação por sua concentração extrema — mas pilotar a 300 km/h exige um perfil cognitivo próprio, nem sempre igual a QI acadêmico.</p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estimativa de QI: o que circula</h2>
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Faixa citada (não oficial)</h3>
                <p className="text-green-800 dark:text-green-200 mb-2"><strong>QI estimado: 120–145</strong></p>
                <p className="text-green-800 dark:text-green-200 text-sm">Faixa citada em biografias e fóruns, sem laudo. Senna não deixou registro de teste de QI.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por que não sabemos o QI real de Ayrton Senna</h2>
          <p className="text-muted-foreground mb-4">
            Testes como WAIS-IV, Raven ou admissionais da Mensa exigem aplicação padronizada por profissional.
            Celebridades raramente divulgam laudos. Números copiados de fóruns ou redes sociais não têm validade científica.
            Além disso, Ayrton Senna construiu carreira em contexto onde outras formas de inteligência — prática, social, criativa — pesaram mais que pontuação escolar.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que Ayrton Senna revela sobre cognição</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Processamento em alta velocidade</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Decisões com margem de erro de centímetros</li>
            <li>Memória detalhada de cada curva e condição de pista</li>
            <li>Ajuste de traçado em tempo real conforme aderência</li>
            <li>Integração de dados do volante, motor e pneus</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Concentração e regulação emocional</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Rituais pré-corrida para estado de foco</li>
            <li>Performance sob chuva — quando outros reduzem ritmo</li>
            <li>Canalização de ansiedade em performance (Mônaco 1984)</li>
            <li>Autoconhecimento documentado em entrevistas e diários</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Inteligência técnica e comunicação</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Feedback preciso a engenheiros sobre setup do carro</li>
            <li>Compreensão mecânica sem formação formal de engenheiro</li>
            <li>Articulação filosófica sobre competição e propósito</li>
            <li>Aprendizado rápido de idiomas (inglês, italiano)</li>
          </ul>

          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Perfil cognitivo observável (não laudo clínico)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">Pontos fortes prováveis</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Atenção sustentada</li>
                  <li>✓ Memória procedimental</li>
                  <li>✓ Coordenação visuo-motora</li>
                  <li>✓ Regulação emocional competitiva</li>
                  <li>✓ Comunicação técnica</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Limites da comparação</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Impulsividade em momentos de frustração (Prost, Suzuka 1990)</li>
                  <li>• Estimativas de QI não verificadas</li>
                  <li>• Pressão extrema sobre saúde mental</li>
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
                  QI mede desempenho em tarefas padronizadas (lógica, verbal, memória de trabalho). Sucesso de Ayrton Senna
                  envolve também oportunidade, treino, rede e persistência. Um QI médio com 10.000 horas de prática
                  supera QI alto sem dedicação — princípio validado em psicologia do expertise.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como interpretar na escala de QI</h2>
          <p className="text-muted-foreground mb-4">
            Na escala com média 100 e desvio padrão 15, faixa 120–145 — se fosse real e medida por teste válido —
            situaria Ayrton Senna acima da média populacional. Consulte a{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela de QI</Link> e{" "}
            <Link to="/blog/qi-faixas-pontuacao-significado" className="text-primary hover:underline">significado das faixas</Link>.
            Para o contexto brasileiro, veja também a{" "}
            <Link to="/blog/media-qi-brasil" className="text-primary hover:underline">média de QI no Brasil</Link>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4"><Link to="/blog/pessoas-famosas-com-qi-alto" className="text-primary hover:underline">pessoas famosas com QI alto</Link>,  <Link to="/blog/qi-steve-jobs" className="text-primary hover:underline">QI de Steve Jobs</Link>,  <Link to="/blog/qi-de-einstein" className="text-primary hover:underline">QI de Einstein</Link>.</p>
        </div>

        <ArticleFAQ faqs={[
          { question: "Senna tinha QI de gênio?", answer: "Biografias sugerem cognição superior em foco e memória, mas QI numérico nunca foi medido oficialmente." },
          { question: "Pilotos de F1 têm QI alto?", answer: "Estudos em esportes de precisão mostram excelência em processamento rápido e coordenação — habilidades parcialmente distintas de QI verbal." },
          { question: "O que Senna dizia sobre concentração?", answer: "Relatava estados de fluxo e conexão espiritual em corrida — fenômeno cognitivo estudado em psicologia do desempenho." },
          { question: "Senna vs Schumacher: diferença de QI?", answer: "Comparação especulativa. Ambos dominaram eras distintas com inteligência tática e física excepcionais." }
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
            {getRelatedArticles("qi-ayrton-senna", 3).map((article) => (
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

export default QIAyrtonSenna;
