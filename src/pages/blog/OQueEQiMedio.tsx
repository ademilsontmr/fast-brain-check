import { BarChart3, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleLeadAdSense from "@/components/ArticleLeadAdSense";
import ArticleMidAdSense from "@/components/ArticleMidAdSense";
import ArticleFAQ from "@/components/ArticleFAQ";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const OQueEQiMedio = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/o-que-e-qi-medio";
  const articleTitle = "O Que É QI Médio? Média da População Explicada em 2026";
  const articleDescription = "O que é QI médio e qual a média de QI da população? Entenda a escala, o número 100 e como comparar seu resultado com a maioria das pessoas.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "o-que-e-qi-medio",
      publishDate: "2026-06-26",
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
          <span>O Que É QI Médio</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>26 de Junho de 2026</time>
          <span>•</span>
          <span>9 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-violet-500/20 to-purple-500/5 rounded-lg mb-12 flex items-center justify-center">
          <BarChart3 className="w-24 h-24 text-violet-500" />
        </div>
        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            <strong>O que é QI médio?</strong> É o valor central da distribuição de inteligência em uma população — definido como <strong>100 pontos</strong> na escala mais usada. Cerca de <strong>68% das pessoas</strong> ficam entre 85 e 115. Neste guia, explicamos a média de QI da população, as faixas e como interpretar seu resultado.
          </p>
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resposta rápida</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ <strong>QI médio = 100</strong> (referência estatística)</li>
                  <li>✓ <strong>85–115:</strong> faixa normal — maioria da população</li>
                  <li>✓ <strong>115–130:</strong> acima da média</li>
                  <li>✓ <strong>130+:</strong> superdotação (top ~2%)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por que o QI médio é 100?</h2>
          <p className="text-muted-foreground mb-6">
            Os testes de QI são calibrados para que a média da população geral seja <strong>100</strong>, com desvio padrão de <strong>15 pontos</strong>. Isso cria a famosa curva em sino: poucas pessoas nos extremos, a maioria no centro. Quando alguém pergunta &quot;qual a média de QI da população&quot;, a resposta técnica é sempre em torno de 100 — em qualquer país, desde que o teste seja bem aplicado.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Faixas de QI e percentil</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li><strong>70–85:</strong> abaixo da média (~14% da população)</li>
            <li><strong>85–115:</strong> média (~68% da população)</li>
            <li><strong>115–130:</strong> acima da média (~14%)</li>
            <li><strong>130–145:</strong> muito acima da média (~2%)</li>
            <li><strong>145+:</strong> excepcional (~0,1%)</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">QI médio por país vs QI médio global</h3>
          <p className="text-muted-foreground mb-4">
            O QI médio <em>global</em> é 100 por definição. Já as <strong>médias por país</strong> variam em estudos comparativos — Singapura e Hong Kong aparecem entre os mais altos (~108), enquanto o Brasil fica em torno de <strong>87</strong> em algumas pesquisas. Essas diferenças refletem educação, nutrição e desenvolvimento, não &quot;inteligência inata&quot; de uma nação.
          </p>
          <ArticleMidAdSense />
          <p className="text-muted-foreground mb-6">
            Veja o ranking completo em{" "}
            <Link to="/blog/qi-medio-por-pais" className="text-primary hover:underline">média de QI do mundo por país</Link> e{" "}
            <Link to="/blog/qi-medio-mundial" className="text-primary hover:underline">QI médio mundial</Link>.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">QI médio muda com a idade?</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Na infância e adolescência, o QI pode subir com estimulação e educação</li>
            <li>Na vida adulta, tende a se estabilizar</li>
            <li>Após os 65 anos, algumas funções cognitivas podem declinar — mas hábitos saudáveis ajudam</li>
            <li>O &quot;QI médio por idade&quot; não é fixo; varia conforme a amostra estudada</li>
          </ul>

          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Resumo prático</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">O que significa</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ QI 100 = exatamente na média</li>
                  <li>✓ Cada 15 pontos = um desvio padrão</li>
                  <li>✓ Comparar com a população, não com gênios isolados</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Erros comuns</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Achar que QI médio = &quot;inteligente o suficiente&quot;</li>
                  <li>• Confundir QI com nota escolar</li>
                  <li>• Comparar testes diferentes como se fossem iguais</li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Próximo passo</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  A melhor forma de saber onde você está em relação ao QI médio é fazer um teste estruturado e comparar com as faixas acima.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/qi-100-significa" className="text-primary hover:underline">QI 100 significa o quê?</Link>,{" "}
            <Link to="/blog/qi-110-e-bom" className="text-primary hover:underline">QI 110 é bom?</Link>,{" "}
            <Link to="/blog/percentil-qi-o-que-significa" className="text-primary hover:underline">percentil de QI</Link>,{" "}
            <Link to="/blog/como-interpretar-resultado-qi" className="text-primary hover:underline">como interpretar resultado</Link> e{" "}
            <Link to="/blog/como-saber-meu-qi" className="text-primary hover:underline">como saber meu QI</Link>.
          </p>
        </div>

        <ArticleFAQ faqs={[
          { question: "Qual é a média de QI da população?", answer: "100 pontos, por definição estatística dos testes padronizados. Cerca de 68% das pessoas ficam entre 85 e 115." },
          { question: "QI 100 é bom?", answer: "QI 100 é exatamente a média — nem acima nem abaixo. Estar na média é normal e saudável estatisticamente." },
          { question: "Qual o QI médio no Brasil?", answer: "Estudos colocam o Brasil em torno de 87, abaixo da média global de referência, mas isso não define o QI individual de ninguém." },
          { question: "QI médio e QI médio mundial são a mesma coisa?", answer: "O conceito é o mesmo (referência 100). 'Média mundial' enfatiza comparação entre países; 'QI médio' enfatiza a escala estatística." },
          { question: "Como descobrir meu QI em relação à média?", answer: "Faça um teste online estruturado ou avaliação com psicólogo. Compare o resultado com as faixas 85–115 (média)." },
        ]} />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra onde você está na escala</h3>
          <p className="text-muted-foreground mb-6">Resultado em minutos — faça o teste agora.</p>
          <Button size="lg" className="gap-2" onClick={() => navigate("/teste")}>
            Iniciar Teste <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Continue Lendo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("o-que-e-qi-medio", 3).map((article) => (
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

export default OQueEQiMedio;
