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

const QIMedioEstudantes = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-medio-estudantes";
  const articleTitle = "QI Médio de Estudantes: Inteligência Acadêmica";
  const articleDescription = "Descubra o QI médio de estudantes por nível educacional, fatores que influenciam e como otimizar o desenvolvimento cognitivo durante os estudos.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-medio-estudantes",
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
          <span>QI Médio de Estudantes</span>
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
            O <strong>QI médio de estudantes</strong> depende do nível: ensino médio acompanha a população (~100),
            universidades seletivas mostram amostras entre <strong>105 e 120</strong>, e pós-graduação concentra ainda mais
            vocabulário e raciocínio abstrato — reflexo da escolaridade, não de “salas mais inteligentes” por magia.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ QI sobe com anos de estudo (cristalizado), mais que fluido</li>
                  <li>✓ Nota boa ≠ QI alto; esforço e método importam</li>
                  <li>✓ Privação de sono em vestibular distorce qualquer medição</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por nível educacional</h2>
          <p className="text-muted-foreground mb-4">
            Escolaridade correlaciona moderadamente com QI em estudos longitudinais. O vínculo com notas aparece em{" "}
            <Link to="/blog/conexao-qi-desempenho-academico" className="text-primary hover:underline">QI e desempenho acadêmico</Link>.
          </p>
          <p className="text-muted-foreground mb-6">
            Compare faixas etárias em{" "}
            <Link to="/blog/qi-medio-jovens" className="text-primary hover:underline">QI médio de jovens</Link> e{" "}
            <Link to="/blog/qi-medio-adolescentes" className="text-primary hover:underline">adolescentes</Link>.
          </p>

          <ArticleMidAdSense />

          <h2 className="text-3xl font-bold mt-12 mb-6">Tabela orientativa (amostras, não oficiais)</h2>
          <Card className="p-6 my-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 pr-4">Nível</th>
                  <th className="pb-3">Média típica em estudos</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Ensino médio geral</td>
                  <td className="py-3">~95–105 (variância alta)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Universidade pública seletiva</td>
                  <td className="py-3">~110–120</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Mestrado/doutorado</td>
                  <td className="py-3">~115–125+</td>
                </tr>
              </tbody>
            </table>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como estudantes podem otimizar cognição</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Sono antes de simulados —{" "}
              <Link to="/blog/qi-e-sono" className="text-primary hover:underline">QI e sono</Link>
            </li>
            <li>Plano de 30 dias —{" "}
              <Link to="/blog/como-melhorar-qi-30-dias" className="text-primary hover:underline">como melhorar QI em 30 dias</Link>
            </li>
            <li>Técnicas de aprendizado —{" "}
              <Link to="/blog/como-aprender-mais-rapido-neurociencia" className="text-primary hover:underline">aprender com neurociência</Link>
            </li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Lição prática</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Use o{" "}
                  <Link to="/teste" className="text-primary hover:underline">teste BomQI</Link> no início e fim do semestre
                  nas mesmas condições — compare tendência, não um número isolado.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/qi-medio-por-profissao" className="text-primary hover:underline">QI médio por profissão</Link>,{" "}
            <Link to="/blog/como-aumentar-qi" className="text-primary hover:underline">como aumentar o QI</Link> e{" "}
            <Link to="/blog/calcular-qi" className="text-primary hover:underline">como calcular QI</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Estudante com QI 90 não passa no vestibular?",
              answer:
                "Muitos fatores definem aprovação. QI 90 com método e constância alcança cursos; QI alto sem estudo, não.",
            },
            {
              question: "Curso difícil exige QI 130?",
              answer:
                "Exige preparo e resistência. Médias de aprovados variam, mas não há corte cognitivo público.",
            },
            {
              question: "Reprovar significa QI baixo?",
              answer:
                "Não. Saúde mental, método, linguagem e condição socioeconômica pesam na reprovação.",
            },
            {
              question: "Quando fazer teste infantil?",
              answer:
                "Consulte os artigos idade certa para teste de QI e teste de QI infantil antes de aplicar WISC.",
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
            {getRelatedArticles("qi-medio-estudantes", 3).map((article) => (
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

export default QIMedioEstudantes;
