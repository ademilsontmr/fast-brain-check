import { ClipboardList, ArrowRight, BookOpen, CheckCircle2, Lightbulb, AlertCircle } from "lucide-react";
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

const ComoFazerTesteDeQI = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/como-fazer-teste-de-qi";
  const articleTitle = "Como Fazer Teste de QI: Passo a Passo Completo (Agosto 2026)";
  const articleDescription =
    "Como fazer teste de QI online ou com psicólogo em 2026: passos, tempo, o que esperar do resultado e erros que baixam sua pontuação.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "como-fazer-teste-de-qi",
      publishDate: "2026-08-08",
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
          <span>Como Fazer Teste de QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time dateTime="2026-08-08">8 de Agosto de 2026</time>
          <span>•</span>
          <span>12 min de leitura</span>
          <span>•</span>
          <span>Atualizado</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-cyan-500/5 rounded-lg mb-12 flex items-center justify-center">
          <ClipboardList className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            <strong>Como fazer teste de QI</strong> depende do seu objetivo: curiosidade rápida, autoconhecimento ou laudo formal.
            Em agosto de 2026, o caminho mais usado no Brasil é o{" "}
            <Link to="/blog/teste-qi-online-guia-completo" className="text-primary hover:underline">teste online estruturado</Link>
            {" "}— minutos, resultado interpretável e sem agendar clínica. Abaixo, o passo a passo completo.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo rápido (agosto 2026)</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Online: 5–20 min · ideal para a maioria</li>
                  <li>✓ Psicólogo (WAIS/WISC): 2–4 h · laudo clínico</li>
                  <li>✓ Ambiente quieto + sono adequado = resultado mais fiel</li>
                  <li>✓ Depois: compare com faixas e percentil</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Passo a passo: teste de QI online</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Escolha um teste com método claro</h3>
          <p className="text-muted-foreground mb-4">
            Evite quizzes virais de “QI 180 em 30 segundos”. Prefira testes que usem raciocínio lógico, matrizes ou padrões —
            o núcleo do que um{" "}
            <Link to="/blog/teste-raciocinio-logico-online" className="text-primary hover:underline">teste de raciocínio lógico</Link>{" "}
            e a maioria dos testes de QI medem.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Explica o que está sendo avaliado</li>
            <li>Entrega interpretação por faixas (não só um número solto)</li>
            <li>Está em português (evita viés de tradução ruim)</li>
            <li>Não promete “laudo oficial” sem psicólogo</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Prepare o ambiente (2 minutos)</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Celular no silencioso, abas desnecessárias fechadas</li>
            <li>Tela com brilho confortável; Wi‑Fi estável</li>
            <li>Evite fazer com sono ruim ou logo após uma discussão estressante</li>
            <li>Não use calculadora ou ajuda externa — o teste mede o seu processo</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Responda com ritmo constante</h3>
          <p className="text-muted-foreground mb-4">
            Em muitos testes, tempo médio por questão entra na estimativa. Nem “chute rápido em tudo” nem “pensar 5 minutos em cada item”.
            Se travar, escolha a melhor opção e siga — voltar demais costuma piorar o desempenho sob pressão.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Veja o resultado e interprete</h3>
          <p className="text-muted-foreground mb-4">
            O número sozinho diz pouco. Use:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>
              <Link to="/blog/qi-100-significa" className="text-primary hover:underline">QI 100</Link> = média
            </li>
            <li>
              <Link to="/blog/qi-110-e-bom" className="text-primary hover:underline">QI 110</Link> = acima da média
            </li>
            <li>
              <Link to="/blog/percentil-qi-o-que-significa" className="text-primary hover:underline">Percentil</Link> = “superei quantas pessoas?”
            </li>
            <li>
              <Link to="/blog/como-interpretar-resultado-qi" className="text-primary hover:underline">Guia de interpretação</Link> completo
            </li>
          </ul>

          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Checklist antes de clicar em “Iniciar”</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ 10–20 minutos livres</li>
                <li>✓ Ambiente silencioso</li>
                <li>✓ Dormiu razoavelmente bem</li>
              </ul>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Sem multitasking</li>
                <li>✓ Sem “treinar” o mesmo teste 10x seguidas</li>
                <li>✓ Objetivo claro (curiosidade vs laudo)</li>
              </ul>
            </div>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como fazer teste de QI com psicólogo</h2>
          <p className="text-muted-foreground mb-4">
            Se você precisa de laudo (escola, altas habilidades, processo), o caminho é avaliação presencial com psicólogo usando WAIS (adulto) ou WISC (criança).
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Busque profissional com CRP ativo</li>
            <li>Pergunte qual instrumento será usado e o que o laudo inclui</li>
            <li>Reserve 2–4 horas (às vezes mais de uma sessão)</li>
            <li>Compare preço — veja{" "}
              <Link to="/blog/quanto-custa-teste-de-qi" className="text-primary hover:underline">quanto custa um teste de QI</Link>
            </li>
          </ol>
          <p className="text-muted-foreground mb-6">
            Detalhes de locais em{" "}
            <Link to="/blog/onde-fazer-teste-qi-brasil" className="text-primary hover:underline">onde fazer teste de QI no Brasil</Link>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Online vs clínico: qual escolher?</h2>
          <Card className="p-6 my-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 pr-4">Situação</th>
                  <th className="pb-3">Melhor caminho</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Quero saber minha faixa</td>
                  <td className="py-3">Teste online estruturado</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Escola / AACC / laudo</td>
                  <td className="py-3">Psicólogo (WISC/WAIS)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Top 2% / Mensa</td>
                  <td className="py-3">
                    <Link to="/blog/teste-mensa-brasil" className="text-primary hover:underline">Processo Mensa</Link>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Orçamento apertado</td>
                  <td className="py-3">Online primeiro; clínico só se precisar de documento</td>
                </tr>
              </tbody>
            </table>
          </Card>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">Erros que baixam o score</h3>
                <ul className="text-amber-800 dark:text-amber-200 space-y-1 text-sm">
                  <li>• Fazer o teste no ônibus ou com TV ligada</li>
                  <li>• Refazer o mesmo quiz 15 vezes e achar que “subiu o QI”</li>
                  <li>• Comparar resultado online com WAIS como se fossem idênticos</li>
                  <li>• Confundir QI com inteligência emocional ou nota escolar</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Depois do teste: o que fazer com o resultado</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Coloque o número na{" "}
              <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela de escala</Link>
            </li>
            <li>Leia as{" "}
              <Link to="/blog/qi-faixas-pontuacao-significado" className="text-primary hover:underline">faixas de pontuação</Link>
            </li>
            <li>Se estiver na média, relaxe —{" "}
              <Link to="/blog/o-que-e-qi-medio" className="text-primary hover:underline">QI médio</Link>{" "}
              é o centro da curva, não “fracasso”
            </li>
            <li>Se quiser melhorar desempenho cognitivo, foque hábitos (sono, foco, prática) — não “hack” milagroso</li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Atalho BomQI (agosto 2026)</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  No BomQI você faz o teste em minutos, recebe uma prévia do nível e pode desbloquear a análise completa.
                  É o caminho mais direto se a pergunta for simplesmente: “como fazer meu teste de QI agora?”.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/como-saber-meu-qi" className="text-primary hover:underline">Como saber meu QI</Link>,{" "}
            <Link to="/blog/como-saber-meu-qi" className="text-primary hover:underline">como descobrir meu QI</Link>,{" "}
            <Link to="/blog/teste-qi-em-portugues" className="text-primary hover:underline">teste de QI em português</Link> e{" "}
            <Link to="/blog/melhor-teste-qi-2026" className="text-primary hover:underline">melhor teste de QI 2026</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Como fazer teste de QI online?",
              answer:
                "Escolha um teste estruturado em português, prepare um ambiente silencioso, responda com ritmo constante e interprete o resultado pelas faixas e percentil — não só pelo número isolado.",
            },
            {
              question: "Quanto tempo dura um teste de QI?",
              answer:
                "Online costuma levar de 5 a 20 minutos. Avaliação clínica com WAIS ou WISC leva em geral de 2 a 4 horas, às vezes em mais de uma sessão.",
            },
            {
              question: "Posso fazer teste de QI pelo celular?",
              answer:
                "Sim, se a tela for confortável e você estiver sem distrações. Em celular, o risco de interrupção (notificações) é maior — silencie tudo antes.",
            },
            {
              question: "Teste online substitui psicólogo?",
              answer:
                "Não para laudo oficial. Serve para estimativa e autoconhecimento. Escola, diagnóstico ou processos formais exigem avaliação profissional.",
            },
            {
              question: "Qual a melhor forma de fazer meu primeiro teste?",
              answer:
                "Comece por um teste online estruturado. Se o resultado for alto e houver demanda escolar ou clínica, aí sim invista em WAIS/WISC.",
            },
          ]}
        />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Faça seu teste de QI agora</h3>
          <p className="text-muted-foreground mb-6">
            Passo a passo na prática — resultado em minutos no BomQI.
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
            {getRelatedArticles("como-fazer-teste-de-qi", 3).map((article) => (
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

export default ComoFazerTesteDeQI;
