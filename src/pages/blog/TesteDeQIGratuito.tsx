import { Gift, ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleLeadAdSense from "@/components/ArticleLeadAdSense";
import ArticleFAQ from "@/components/ArticleFAQ";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import { Card } from "@/components/ui/card";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const publishDate = "2026-11-13";

const TesteDeQIGratuito = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/teste-de-qi-gratuito";
  const articleTitle = "Teste de QI Gratuito: Onde Fazer em 2026 (Sem Confundir com “Confiável”)";
  const articleDescription =
    "Teste de QI gratuito em 2026: opções reais (online, Mensa, rede pública), armadilhas de paywall e onde ler sobre confiabilidade sem misturar tudo num só texto.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "teste de qi gratuito, teste qi gratuito, teste de qi grátis, teste de quociente de inteligência gratuito",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "teste-de-qi-gratuito",
      publishDate,
      modifiedDate: publishDate,
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
          <Link to="/blog/teste-de-qi" className="hover:text-primary">Teste de QI</Link>
          <span className="mx-2">/</span>
          <span>Gratuito</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time dateTime={publishDate}>13 de Novembro de 2026</time>
          <span>•</span>
          <span>13 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-emerald-500/20 to-teal-500/10 rounded-lg mb-12 flex items-center justify-center">
          <Gift className="w-24 h-24 text-emerald-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            No Google, <strong>teste de QI gratuito</strong> é uma das buscas mais fortes do nicho — mas “grátis” pode
            significar desde <strong>triagem online honesta</strong> até funil que esconde o score atrás de assinatura.
            Este artigo mapeia <strong>onde não há cobrança inicial</strong> e quando o gratuito não vale a pena. Critérios
            de qualidade ficam no guia{" "}
            <Link to="/blog/teste-qi-gratuito-e-confiavel" className="text-primary hover:underline">
              gratuito e confiável
            </Link>{" "}
            (página irmã, não duplicata).
          </p>

          <div className="not-prose bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              <div className="text-sm text-green-800 dark:text-green-200 space-y-1 m-0">
                <p className="font-bold text-green-900 dark:text-green-100 text-base mb-2">O que é grátis de verdade (mercado)</p>
                <p>✓ Alguns quizzes virais e desafios Mensa sem taxa inicial</p>
                <p>✓ Mensa: taxa só após etapas que você escolhe</p>
                <p>✗ Laudo WAIS/WISC grátis para adulto — raríssimo</p>
                <p>✗ <strong>BomQI não é gratuito</strong> — prévia do nível após o teste; resultado completo pago (PIX)</p>
              </div>
            </div>
          </div>

          <div className="not-prose bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 rounded-lg p-6 my-8 flex gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
            <p className="text-sm text-amber-900 dark:text-amber-100 m-0">
              Pegadinhas comuns: “teste grátis” que só mostra QI após trial de 7 dias; comparativo em{" "}
              <Link to="/blog/teste-qi-online-gratuito" className="text-primary hover:underline font-medium">
                teste de QI online gratuito
              </Link>{" "}
              e análise{" "}
              <Link to="/blog/myiq-e-confiavel" className="text-primary hover:underline">MyIQ</Link>.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">4 caminhos reais (2026)</h2>
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Teste online estruturado</h3>
          <p className="text-muted-foreground mb-4">
            Ideal para curiosidade e autoconhecimento. O <strong>BomQI não é grátis</strong>: você faz o questionário,
            vê prévia do nível e <strong>desbloqueia</strong> QI, percentil e relatório com pagamento (veja{" "}
            <Link to="/blog/quanto-custa-teste-de-qi" className="text-primary hover:underline">preços</Link>). Se a
            prioridade é <strong>velocidade</strong>, leia{" "}
            <Link to="/blog/teste-de-qi-gratuito-rapido" className="text-primary hover:underline">
              gratuito rápido
            </Link>
            . Para privacidade (login), veja{" "}
            <Link to="/blog/teste-de-qi-sem-cadastro" className="text-primary hover:underline">sem cadastro</Link>.
          </p>
          <h3 className="text-2xl font-bold mt-8 mb-4">2. Mensa Brasil e sociedades de alto QI</h3>
          <p className="text-muted-foreground mb-4">
            A pré-seleção pode não cobrar na inscrição, mas exige preparação e aprovação. Não substitui laudo escolar.{" "}
            <Link to="/blog/teste-mensa-brasil" className="text-primary hover:underline">Guia Mensa</Link> e{" "}
            <Link to="/blog/qi-130-significa" className="text-primary hover:underline">QI 130</Link> para contexto de corte.
          </p>
          <h3 className="text-2xl font-bold mt-8 mb-4">3. Rede pública e escola</h3>
          <p className="text-muted-foreground mb-4">
            Avaliação de superdotação em crianças pode ser encaminhada pela escola ou SUS em casos específicos — fila e
            critérios variam. Adultos raramente têm esse canal grátis. Veja{" "}
            <Link to="/blog/onde-fazer-teste-qi-brasil" className="text-primary hover:underline">onde fazer no Brasil</Link>.
          </p>
          <h3 className="text-2xl font-bold mt-8 mb-4">4. Pesquisa universitária</h3>
          <p className="text-muted-foreground mb-6">
            Estudos às vezes aplicam baterias cognitivas sem custo ao participante; não é autoatendimento como um site.
            Resultados podem ser agregados e anônimos.
          </p>


          <h2 className="text-3xl font-bold mt-12 mb-6">Tabela: grátis × o que você recebe</h2>
          <p className="text-muted-foreground mb-4">
            Compare expectativa. Laudo escrito com carimbo de psicólogo quase sempre é pago — veja{" "}
            <Link to="/blog/quanto-custa-teste-de-qi" className="text-primary hover:underline">preços</Link>.
          </p>
          <div className="overflow-x-auto not-prose my-6">
            <table className="w-full text-sm border border-border rounded-lg">
              <thead className="bg-muted/50">
                <tr>
                  <th className="p-3 text-left">Opção</th>
                  <th className="p-3 text-left">Custo inicial</th>
                  <th className="p-3 text-left">Entrega típica</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-t">
                  <td className="p-3">Quiz viral (5 perguntas)</td>
                  <td className="p-3">R$ 0</td>
                  <td className="p-3">Score inflado, pouca validade</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">BomQI</td>
                  <td className="p-3">Pago (PIX) — não é teste grátis</td>
                  <td className="p-3">Prévia do nível; QI e relatório completo após pagamento</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Outros testes estruturados online</td>
                  <td className="p-3">Variável (muitos escondem score)</td>
                  <td className="p-3">Triagem; confira paywall antes</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Mensa (pré-teste)</td>
                  <td className="p-3">Variável</td>
                  <td className="p-3">Aprovação para próxima fase</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">WAIS com psicólogo</td>
                  <td className="p-3">Centenas de reais</td>
                  <td className="p-3">Laudo clínico</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Próximo passo inteligente</h2>
          <p className="text-muted-foreground mb-6">
            Depois de escolher o caminho grátis, avalie se precisa de <strong>confiabilidade</strong> (
            <Link to="/blog/teste-qi-gratuito-e-confiavel" className="text-primary hover:underline">guia</Link>) ou de{" "}
            <strong>melhor custo-benefício</strong> (
            <Link to="/blog/melhor-teste-qi-2026" className="text-primary hover:underline">melhor teste 2026</Link>). O{" "}
            <Link to="/blog/teste-de-qi" className="text-primary hover:underline">hub teste de QI</Link> organiza tudo.
          </p>

          <div className="not-prose my-8">
            <Button size="lg" className="gap-2" onClick={() => navigate("/teste")}>
              Fazer teste no BomQI <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Existe teste de QI 100% gratuito com laudo?",
              answer:
                "Laudo formal (WAIS/WISC) quase sempre é pago. Online gratuito costuma ser triagem, não documento clínico.",
            },
            {
              question: "Qual a diferença desta página e de ‘gratuito e confiável’?",
              answer:
                "Esta lista onde não pagar; o outro artigo ensina a filtrar golpes e testes ruins.",
            },
            {
              question: "teste qi grátis redireciona para onde?",
              answer: "Para esta URL canônica (teste-de-qi-gratuito), não mais para o guia de confiável.",
            },
            {
              question: "O BomQI é gratuito?",
              answer:
                "Não. O BomQI é um serviço pago: após o questionário você vê uma prévia do nível e desbloqueia o resultado completo (QI, percentil e análise) com pagamento, em geral via PIX.",
            },
            {
              question: "Gratuito e oficial ao mesmo tempo?",
              answer:
                "Oficial no sentido clínico raramente é grátis. Veja teste oficial e quanto custa.",
            },
          ]}
        />

        <SocialProofCarousel />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {getRelatedArticles("teste-de-qi-gratuito", 3).map((a) => (
            <Card key={a.slug} className="p-6 border-2 border-primary/20">
              <Link to={`/blog/${a.slug}`}>
                <h3 className="font-bold">{a.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{a.description}</p>
              </Link>
            </Card>
          ))}
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default TesteDeQIGratuito;
