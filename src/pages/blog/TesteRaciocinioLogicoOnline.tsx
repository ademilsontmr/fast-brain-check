import { Brain, ArrowRight, BookOpen, CheckCircle2, Lightbulb, Grid3x3 } from "lucide-react";
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

const TesteRaciocinioLogicoOnline = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/teste-raciocinio-logico-online";
  const articleTitle = "Teste de Raciocínio Lógico Online: Guia Completo 2026";
  const articleDescription =
    "Faça ou entenda o teste de raciocínio lógico online: tipos de questões, diferença para QI, como se preparar e como interpretar o resultado em 2026.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "teste-raciocinio-logico-online",
      publishDate: "2026-07-20",
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
          <span>Teste de Raciocínio Lógico Online</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>20 de Julho de 2026</time>
          <span>•</span>
          <span>14 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Grid3x3 className="w-24 h-24 text-cyan-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Um <strong>teste de raciocínio lógico online</strong> avalia sua capacidade de identificar padrões, regras e relações — o núcleo do pensamento analítico. É um dos formatos mais buscados no Brasil e está no centro da maioria dos{" "}
            <Link to="/blog/teste-de-inteligencia-online" className="text-primary hover:underline">testes de inteligência online</Link>{" "}
            e de QI modernos.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">O que você encontra neste guia</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Tipos de questões (matrizes, sequências, silogismos)</li>
                  <li>✓ Diferença entre raciocínio lógico e QI total</li>
                  <li>✓ Como escolher um teste online confiável</li>
                  <li>✓ Como interpretar o resultado e o próximo passo</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que o teste de raciocínio lógico mede</h2>
          <p className="text-muted-foreground mb-4">
            Raciocínio lógico (ou fluido) é a habilidade de resolver problemas novos sem depender de conhecimento escolar memorizado. Inclui:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li><strong>Indução:</strong> descobrir a regra a partir de exemplos</li>
            <li><strong>Dedução:</strong> aplicar regras a casos novos</li>
            <li><strong>Padrões visuais:</strong> matrizes e figuras (estilo Raven)</li>
            <li><strong>Sequências numéricas e verbais:</strong> o que vem a seguir?</li>
            <li><strong>Analogias:</strong> A está para B como C está para…</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            As{" "}
            <Link to="/blog/matrizes-raven-teste-qi" className="text-primary hover:underline">matrizes de Raven</Link>{" "}
            são o exemplo clássico: quase sem palavras, foco puro em padrão.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Raciocínio lógico vs teste de QI</h2>
          <Card className="p-6 my-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-cyan-600 mb-2 flex items-center gap-2">
                  <Brain className="w-4 h-4" /> Só raciocínio lógico
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Foco em padrões e regras</li>
                  <li>• Menos dependente de vocabulário</li>
                  <li>• Excelente triagem rápida</li>
                  <li>• Não cobre memória/velocidade completa</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-violet-600 mb-2">QI completo (ex.: WAIS)</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Vários índices (verbal, execução, etc.)</li>
                  <li>• Mais tempo e custo</li>
                  <li>• Laudo clínico possível</li>
                  <li>• Raciocínio lógico é uma parte</li>
                </ul>
              </div>
            </div>
          </Card>
          <p className="text-muted-foreground mb-6">
            Na prática: um bom teste online de QI usa muito raciocínio lógico — e isso explica por que as buscas se sobrepõem. Se você quer um número de QI interpretável, prefira um{" "}
            <Link to="/blog/teste-qi-online-guia-completo" className="text-primary hover:underline">teste de QI online estruturado</Link>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Tipos de questões que você vai ver</h2>
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Matrizes e figuras</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Grade 3×3 com uma peça faltando</li>
            <li>Regras de rotação, contagem, sombra, combinação</li>
            <li>Pouca leitura — ideal para comparar culturas/idiomas</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">2. Sequências numéricas</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Progressões, potências, alternância de regras</li>
            <li>Exige atenção a detalhes (dois padrões ao mesmo tempo)</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">3. Silogismos e proposições</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>“Todos A são B; alguns B são C…”</li>
            <li>Mais verbal; treina raciocínio formal</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">4. Analogias e classificação</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Relação entre pares de palavras ou imagens</li>
            <li>Comum em concursos e processos seletivos</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como escolher um teste online confiável</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Explica o método (não só “descubra se é gênio”)</li>
            <li>Tem tempo estimado realista (não 10 questões mágicas)</li>
            <li>Oferece interpretação por faixas / percentil</li>
            <li>Não promete “QI oficial” sem psicólogo</li>
            <li>Evita clickbait de QI 180 automático</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Critérios parecidos com os de um{" "}
            <Link to="/blog/teste-qi-confiavel" className="text-primary hover:underline">teste de QI confiável</Link>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como se preparar (sem “decorar”)</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Durma bem na noite anterior — raciocínio fluido cai com fadiga</li>
            <li>Ambiente silencioso, celular longe</li>
            <li>Pratique 10–15 min de matrizes se quiser aquecer (não horas)</li>
            <li>Não use calculadora em sequências: o teste mede processo, não atalho</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Mais dicas em{" "}
            <Link to="/blog/como-se-preparar-teste-qi" className="text-primary hover:underline">como se preparar para teste de QI</Link>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como interpretar o resultado</h2>
          <p className="text-muted-foreground mb-4">
            Se o teste devolver um QI ou percentil:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Compare com a{" "}
              <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela de escala</Link>
            </li>
            <li>Entenda o{" "}
              <Link to="/blog/percentil-qi-o-que-significa" className="text-primary hover:underline">percentil</Link>
            </li>
            <li>Lembre: um único teste online é estimativa, não laudo</li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Atalho prático</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Se você buscou “teste de raciocínio lógico online”, o caminho mais direto é um teste de QI estruturado: as questões de lógica são o coração do score, e você sai com interpretação na escala padrão.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/melhor-teste-qi-2026" className="text-primary hover:underline">Melhor teste de QI 2026</Link>,{" "}
            <Link to="/blog/teste-qi-com-resultado-imediato" className="text-primary hover:underline">resultado imediato</Link>,{" "}
            <Link to="/blog/como-saber-meu-qi" className="text-primary hover:underline">como descobrir meu QI</Link> e{" "}
            <Link to="/blog/pensamento-critico-vs-qi" className="text-primary hover:underline">pensamento crítico vs QI</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "O que é um teste de raciocínio lógico online?",
              answer:
                "É uma avaliação digital com questões de padrões, sequências, analogias ou matrizes para medir pensamento analítico sem depender só de memória escolar.",
            },
            {
              question: "Teste de raciocínio lógico é a mesma coisa que teste de QI?",
              answer:
                "Não exatamente. O QI completo costuma incluir mais dimensões. Mas o raciocínio lógico é o componente central da maioria dos testes de QI online.",
            },
            {
              question: "Quanto tempo dura um teste de raciocínio lógico?",
              answer:
                "Online, tipicamente de 5 a 30 minutos. Baterias clínicas com múltiplos índices levam horas.",
            },
            {
              question: "Dá para treinar raciocínio lógico?",
              answer:
                "Sim, com prática em matrizes, puzzles e problemas novos. O ganho em testes costuma ser moderado; o maior benefício é familiaridade com o formato.",
            },
            {
              question: "Onde fazer um teste confiável agora?",
              answer:
                "Escolha plataformas que expliquem o método e entreguem interpretação por faixas. O BomQI oferece teste estruturado com resultado em minutos.",
            },
          ]}
        />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Teste seu raciocínio agora</h3>
          <p className="text-muted-foreground mb-6">
            Faça o teste de QI no BomQI — questões de lógica e resultado em minutos.
          </p>
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
            {getRelatedArticles("teste-raciocinio-logico-online", 3).map((article) => (
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

export default TesteRaciocinioLogicoOnline;
