import { Calendar, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const IdadeCertaTesteQI = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/idade-certa-para-fazer-teste-qi";
  const articleTitle = "Qual a Idade Certa para Fazer Teste de QI? Guia por Faixa Etária (2026)";
  const articleDescription =
    "Qual idade fazer teste de QI? Guia para crianças, adolescentes e adultos: WISC, WAIS, teste online e quando o resultado é confiável.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "idade-certa-para-fazer-teste-qi",
      publishDate: "2026-08-31",
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
          <span>Idade Certa para Teste de QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time dateTime="2026-08-31">31 de Agosto de 2026</time>
          <span>•</span>
          <span>11 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Calendar className="w-24 h-24 text-cyan-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            <strong>Qual a idade certa para fazer teste de QI?</strong> Não existe uma única resposta — depende do objetivo (curiosidade, escola, laudo clínico) e do instrumento usado. Este guia resume, por faixa etária, quando testar faz sentido e qual tipo de avaliação escolher em 2026.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo rápido</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Crianças: WISC a partir de ~6 anos (psicólogo)</li>
                  <li>✓ Adolescentes 16+: teste online ou WAIS com profissional</li>
                  <li>✓ Adultos: WAIS ou teste online estruturado</li>
                  <li>✓ Evite testar criança muito cedo só por curiosidade</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por que a idade importa no teste de QI</h2>
          <p className="text-muted-foreground mb-6">
            O QI é sempre comparado a pessoas da <strong>mesma faixa etária</strong>. Um score de 110 em criança de 8 anos não significa a mesma coisa que 110 aos 40 — os instrumentos e normas mudam. Por isso existem testes específicos: WISC para crianças e WAIS para adultos.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Guia por faixa etária</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">0 a 5 anos</h3>
          <p className="text-muted-foreground mb-4">
            Testes formais de QI completo <strong>não são recomendados</strong> rotineiramente. O desenvolvimento cognitivo muda muito rápido. Se há suspeita de atraso ou superdotação extrema, procure neuropediatra ou psicólogo infantil — não quizzes online.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">6 a 15 anos (escolar)</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li><strong>Instrumento:</strong> WISC (Wechsler Intelligence Scale for Children)</li>
            <li><strong>Quando:</strong> sinais de superdotação, dificuldade não explicada, pedido escolar</li>
            <li><strong>Quem aplica:</strong> psicólogo com CRP</li>
            <li>Leia{" "}
              <Link to="/blog/teste-qi-criancas" className="text-primary hover:underline">teste de QI para crianças</Link> e{" "}
              <Link to="/blog/qi-criancas-sinais-superdotacao" className="text-primary hover:underline">sinais de superdotação</Link>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">16 a 17 anos</h3>
          <p className="text-muted-foreground mb-4">
            Zona de transição: alguns profissionais usam WISC, outros WAIS. Para <strong>curiosidade e vestibular</strong>, teste online estruturado em português costuma bastar. Para laudo, siga orientação do psicólogo.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">18 anos ou mais (adultos)</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li><strong>Instrumento clínico:</strong> WAIS-IV</li>
            <li><strong>Curiosidade:</strong>{" "}
              <Link to="/blog/teste-qi-online-guia-completo" className="text-primary hover:underline">teste online</Link> em minutos
            </li>
            <li><strong>Mensa:</strong> a partir de 10 anos no Brasil (com autorização dos pais se menor)</li>
            <li>Veja{" "}
              <Link to="/blog/teste-qi-adultos" className="text-primary hover:underline">teste de QI para adultos</Link>
            </li>
          </ul>

          <Card className="p-6 my-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 pr-4">Idade</th>
                  <th className="pb-3 pr-4">Melhor opção</th>
                  <th className="pb-3">Objetivo típico</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">6–15</td>
                  <td className="py-3 pr-4">WISC + psicólogo</td>
                  <td className="py-3">Escola / AACC / laudo</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">16–17</td>
                  <td className="py-3 pr-4">Online ou WAIS</td>
                  <td className="py-3">Autoconhecimento / vestibular</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">18+</td>
                  <td className="py-3 pr-4">Online ou WAIS</td>
                  <td className="py-3">Curiosidade / carreira</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">60+</td>
                  <td className="py-3 pr-4">WAIS (versão adequada)</td>
                  <td className="py-3">Avaliação clínica se necessário</td>
                </tr>
              </tbody>
            </table>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">Com que frequência refazer o teste?</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li><strong>Adultos:</strong> espere 6–12 meses entre testes iguais (efeito de prática)</li>
            <li><strong>Crianças:</strong> só reavaliar se houver mudança clínica ou pedido escolar</li>
            <li><strong>Online:</strong> ok repetir após longo intervalo para acompanhar tendência — não obsessão diária</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Mais em{" "}
            <Link to="/blog/qi-medio-por-idade" className="text-primary hover:underline">QI médio por idade</Link> e{" "}
            <Link to="/blog/qi-criancas-vs-adultos" className="text-primary hover:underline">QI crianças vs adultos</Link>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Erros comuns por idade</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Testar criança de 4 anos com quiz viral na internet</li>
            <li>Usar resultado de adolescente para comparar com adulto</li>
            <li>Forçar teste por pressão dos pais (ansiedade distorce resultado)</li>
            <li>Achar que “passou da idade” — adultos podem e devem testar se quiserem autoconhecimento</li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Adulto com 5 minutos livres?</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Se você tem 16+ e quer uma estimativa rápida, o caminho mais direto é o{" "}
                  <Link to="/blog/como-fazer-teste-de-qi" className="text-primary hover:underline">teste online passo a passo</Link>.
                  Para filhos, priorize avaliação profissional.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/quanto-tempo-dura-teste-qi" className="text-primary hover:underline">Quanto tempo dura o teste</Link>,{" "}
            <Link to="/blog/onde-fazer-teste-qi-brasil" className="text-primary hover:underline">onde fazer no Brasil</Link>,{" "}
            <Link to="/blog/como-saber-meu-qi" className="text-primary hover:underline">como saber meu QI</Link> e{" "}
            <Link to="/blog/teste-qi-em-portugues" className="text-primary hover:underline">teste em português</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "A partir de que idade pode fazer teste de QI?",
              answer:
                "Testes formais como WISC costumam ser aplicados a partir dos 6 anos. Adolescentes e adultos podem usar WAIS ou testes online estruturados (geralmente a partir de 16 anos para comparação adulta).",
            },
            {
              question: "Criança de 7 anos pode fazer teste online?",
              answer:
                "Não é o ideal. Para crianças, prefira WISC com psicólogo. Testes online são calibrados para adolescentes e adultos.",
            },
            {
              question: "Qual idade é melhor para testar superdotação?",
              answer:
                "Quando há sinais consistentes na escola ou em casa, geralmente entre 6 e 12 anos, com avaliação profissional completa — não apenas um número isolado.",
            },
            {
              question: "Idoso pode fazer teste de QI?",
              answer:
                "Sim, com instrumentos adequados à idade. QI pode variar com saúde, sono e medicação — interprete com profissional se for clínico.",
            },
            {
              question: "Posso fazer teste de QI aos 15 anos?",
              answer:
                "Sim. Muitos testes online aceitam a partir de 16; aos 15, consulte psicólogo se precisar de laudo escolar ou use triagem online com cautela.",
            },
          ]}
        />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Pronto para testar?</h3>
          <p className="text-muted-foreground mb-6">Se você tem 16+, faça o teste de QI do BomQI — resultado em minutos.</p>
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
            {getRelatedArticles("idade-certa-para-fazer-teste-qi", 3).map((article) => (
              <Card key={article.slug} className="p-6 hover:shadow-lg border-2 border-primary/20">
                <Link to={`/blog/${article.slug}`}>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold mt-3 mb-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{article.description}</p>
                </Link>
              </Card>
            ))}
          </div>
        </div>
        <section className="mt-16">
          <SocialProofCarousel />
        </section>
      </article>
      <Footer />
    </div>
  );
};

export default IdadeCertaTesteQI;
