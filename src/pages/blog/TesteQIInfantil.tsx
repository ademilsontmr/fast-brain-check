import { Baby, ArrowRight, BookOpen, CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react";
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

const TesteQIInfantil = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/teste-qi-infantil";
  const articleTitle = "Teste de QI Infantil: Quando Fazer, WISC e Online (2026)";
  const articleDescription =
    "Teste de QI infantil: idade certa, diferença entre WISC e quiz online, sinais de altas habilidades e o que pais devem evitar em 2026.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords:
      "teste de qi infantil, teste qi infantil, teste de qi para criança, wisc, qi infantil online",
  });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "teste-qi-infantil",
      publishDate: "2026-11-10",
      modifiedDate: "2026-11-10",
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
          <span>Teste de QI Infantil</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time dateTime="2026-11-10">10 de Novembro de 2026</time>
          <span>•</span>
          <span>12 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-sky-500/20 to-cyan-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Baby className="w-24 h-24 text-sky-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            A busca por <strong>teste de QI infantil</strong> cresceu no Brasil. Pais querem saber se o filho
            é superdotado, se precisa de adaptação escolar ou só “como ele se compara”. A resposta curta:
            <strong> laudo sério = WISC com psicólogo</strong>; online serve só como triagem leve — nunca
            como documento.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo rápido</h2>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Idade típica WISC: ~6 a 16 anos (normas por idade)</li>
                  <li>✓ QI infantil médio = 100 (comparado a crianças da mesma idade)</li>
                  <li>✓ Quiz online / Ads ≠ avaliação infantil válida</li>
                  <li>✓ Indicações: altas habilidades, atraso, adaptação escolar</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Quando fazer teste de QI infantil?</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Suspeita de <Link to="/blog/superdotacao-o-que-e" className="text-primary hover:underline">superdotação</Link> / altas habilidades</li>
            <li>Desempenho escolar muito acima ou abaixo do esperado</li>
            <li>Pedido da escola para laudo / PEI / enriquecimento</li>
            <li>Investigação de dificuldades de aprendizagem (junto com outros exames)</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Detalhe por faixa etária:{" "}
            <Link to="/blog/idade-certa-para-fazer-teste-qi" className="text-primary hover:underline">
              idade certa para teste de QI
            </Link>
            . Guia complementar:{" "}
            <Link to="/blog/teste-qi-criancas" className="text-primary hover:underline">
              teste de QI para crianças
            </Link>
            .
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">WISC vs teste infantil online</h2>
          <Card className="p-6 my-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 pr-4">Critério</th>
                  <th className="pb-3 pr-4">WISC (psicólogo)</th>
                  <th className="pb-3">Quiz online</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Validade</td>
                  <td className="py-3 pr-4">Laudo clínico / escolar</td>
                  <td className="py-3">Só curiosidade</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Norma</td>
                  <td className="py-3 pr-4">Por idade (QI 100 = média da faixa)</td>
                  <td className="py-3">Sem norma infantil séria na maioria</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Custo / tempo</td>
                  <td className="py-3 pr-4">Maior · sessão longa</td>
                  <td className="py-3">Barato · minutos</td>
                </tr>
              </tbody>
            </table>
          </Card>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">O que evitar</h3>
                <ul className="text-amber-800 dark:text-amber-200 space-y-1 text-sm">
                  <li>• Anúncios de “teste QI infantil gratuito” com score milagroso</li>
                  <li>• Usar resultado de app para matricular em programa gifted</li>
                  <li>• Testar bebês / crianças muito novas sem indicação profissional</li>
                  <li>• Comparar score online de adulto com criança</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Sinais que levam pais a buscar avaliação</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Vocabulário e curiosidade muito acima da idade</li>
            <li>Tédio extremo na escola ou “problema de comportamento” por falta de desafio</li>
            <li>Aprendizado rápido em leitura / matemática</li>
            <li>Discrepância forte entre áreas (ex.: verbal alto, atenção baixa)</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Mais em{" "}
            <Link to="/blog/criancas-superdotadas-sinais-caracteristicas" className="text-primary hover:underline">
              sinais de crianças superdotadas
            </Link>
            .
          </p>

          <ArticleMidAdSense />
          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">E o BomQI?</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
                  O BomQI é pensado para <strong>adolescentes e adultos</strong> em português. Para
                  avaliação infantil formal, busque psicólogo com WISC. Pais podem fazer o próprio teste
                  para entender a escala — não para “medir o filho”.
                </p>
                <Button className="gap-2" onClick={() => navigate("/teste")}>
                  Fazer teste (adultos) <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/teste-qi-criancas" className="text-primary hover:underline">Teste QI crianças</Link>,{" "}
            <Link to="/blog/quanto-custa-teste-de-qi" className="text-primary hover:underline">quanto custa</Link>,{" "}
            <Link to="/blog/qi-130-significa" className="text-primary hover:underline">QI 130</Link> e{" "}
            <Link to="/blog/onde-fazer-teste-qi-brasil" className="text-primary hover:underline">onde fazer no Brasil</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Existe teste de QI infantil online confiável?",
              answer:
                "Online pode dar uma ideia grosseira, mas não gera laudo. Para escola e clínicas, use WISC com psicólogo.",
            },
            {
              question: "Qual a idade mínima para teste de QI infantil?",
              answer:
                "O WISC costuma cobrir a partir dos 6 anos. Abaixo disso, a avaliação usa outros instrumentos e critérios.",
            },
            {
              question: "QI 100 em criança é bom?",
              answer:
                "Sim: 100 é a média da faixa etária. A criança está no meio da distribuição de crianças da mesma idade.",
            },
            {
              question: "Superdotação exige QI infantil alto?",
              answer:
                "QI elevado (ex.: 130+) é critério frequente, mas a identificação também olha desempenho, criatividade e adaptação — sempre com profissional.",
            },
          ]}
        />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Entenda a escala fazendo seu teste</h3>
          <p className="text-muted-foreground mb-6">Para adultos e adolescentes — resultado interpretável em minutos.</p>
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
            {getRelatedArticles("teste-qi-infantil", 3).map((article) => (
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

export default TesteQIInfantil;
