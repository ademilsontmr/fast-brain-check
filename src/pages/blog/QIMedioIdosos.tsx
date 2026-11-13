import { Users, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const QIMedioIdosos = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-medio-idosos";
  const articleTitle = "QI Médio de Idosos: Inteligência na Terceira Idade";
  const articleDescription = "Descubra o QI médio de idosos, como a inteligência muda com a idade e estratégias para manter a mente afiada na terceira idade.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-medio-idosos",
      publishDate: "2025-01-15",
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
          <span>QI Médio de Idosos</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>15 de Janeiro de 2025</time>
          <span>•</span>
          <span>10 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Users className="w-24 h-24 text-primary" />
        </div>
        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            O <strong>QI médio de idosos</strong> não “cai” uniformemente com a idade: testes padronizados são calibrados
            para que a média siga perto de <strong>100 em cada faixa etária</strong>. O que muda são os componentes —
            velocidade e memória de trabalho tendem a declinar, enquanto vocabulário e conhecimento acumulado se mantêm
            ou até melhoram — fenômeno descrito em estudos de inteligência ao longo da vida.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Média normativa ~100 em todos os adultos; não compare 75 anos com escala de jovens</li>
                  <li>✓ Cristalizada (vocabulário, experiência) resiste; fluida (velocidade) declina mais</li>
                  <li>✓ Estilo de vida influencia mais que “destino biológico” na terceira idade</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que a ciência mede em idosos?</h2>
          <p className="text-muted-foreground mb-4">
            Escalas como o WAIS aplicam normas por idade. Isso evita classificar erroneamente toda uma geração como “QI
            baixo” só porque não resolve matrizes tão rápido quanto aos 20 anos. O panorama completo está em{" "}
            <Link to="/blog/qi-ao-longo-vida" className="text-primary hover:underline">QI ao longo da vida</Link> e em{" "}
            <Link to="/blog/qi-medio-por-idade" className="text-primary hover:underline">QI médio por idade</Link>.
          </p>
          <p className="text-muted-foreground mb-6">
            Quedas acentuadas em testes costumam sinalizar saúde — sono ruim, depressão, polifarmácia ou início de
            comprometimento cognitivo — e merecem avaliação médica, não autojulgamento.
          </p>

          <ArticleMidAdSense />

          <h2 className="text-3xl font-bold mt-12 mb-6">Habilidades que permanecem fortes</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Julgamento baseado em décadas de experiência profissional e social</li>
            <li>Leitura, raciocínio verbal e resolução de problemas familiares</li>
            <li>“Sabedoria procedural” — saber como fazer, não só saber fatos</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Fatores que preservam cognição</h2>
          <Card className="p-6 my-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 pr-4">Fator</th>
                  <th className="pb-3">Efeito típico</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Exercício aeróbico</td>
                  <td className="py-3">Circulação cerebral e humor</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Aprendizado novo</td>
                  <td className="py-3">Idioma, música, voluntariado intelectual</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Socialização</td>
                  <td className="py-3">Reduz isolamento ligado a declínio</td>
                </tr>
              </tbody>
            </table>
          </Card>
          <p className="text-muted-foreground mb-6">
            Estratégias detalhadas em{" "}
            <Link to="/blog/como-manter-mente-afiada" className="text-primary hover:underline">como manter a mente afiada</Link> e{" "}
            <Link to="/blog/reduzindo-demencia-treinamento-cerebral" className="text-primary hover:underline">treinamento cerebral e demência</Link>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Mitos comuns</h2>
          <p className="text-muted-foreground mb-4">
            “Idoso não aprende” é falso: plasticidade reduz, mas não zera. “QI caiu, é Alzheimer” também é perigoso —
            compare tendências ao longo de meses, não um único teste online.
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Lição prática</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Avós que brincam com netos em jogos de estratégia e leitura compartilhada exercitam cognição social e
                  verbal — veja{" "}
                  <Link to="/blog/como-netos-melhoram-qi" className="text-primary hover:underline">como netos melhoram o QI</Link>{" "}
                  dos dois lados da relação.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/qi-pode-mudar-ao-longo-vida" className="text-primary hover:underline">QI pode mudar ao longo da vida</Link>,{" "}
            <Link to="/blog/inteligencia-vs-sabedoria" className="text-primary hover:underline">inteligência vs sabedoria</Link> e{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela da escala de QI</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Qual o QI médio de uma pessoa de 70 anos?",
              answer:
                "Em testes com normas por idade, a média continua próxima de 100. Comparar pontuação bruta com jovens distorce o resultado.",
            },
            {
              question: "Idosos têm QI menor que jovens?",
              answer:
                "Em subtestes de velocidade, sim, em média. Em conhecimento e vocabulário, muitas vezes idosos superam jovens.",
            },
            {
              question: "Teste online serve para idosos?",
              answer:
                "Serve como triagem lúdica, não diagnóstico. Avaliação formal considera audição, visão, medicamentos e humor.",
            },
            {
              question: "Dá para recuperar pontos perdidos?",
              answer:
                "Foco, sono, exercício e tratamento de depressão podem melhorar desempenho em testes. Estrutural profundo muda pouco.",
            },
          ]}
        />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra seu QI</h3>
          <p className="text-muted-foreground mb-6">Teste gratuito — resultado em minutos.</p>
          <Button size="lg" className="gap-2" onClick={() => navigate("/teste")}>
            Fazer o Teste <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Continue Lendo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("qi-medio-idosos", 3).map((article) => (
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

export default QIMedioIdosos;
