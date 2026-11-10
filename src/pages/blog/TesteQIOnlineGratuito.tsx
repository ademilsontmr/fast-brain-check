import { Gift, ArrowRight, BookOpen, CheckCircle2, Lightbulb, AlertTriangle, Shield } from "lucide-react";
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

const TesteQIOnlineGratuito = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/teste-qi-online-gratuito";
  const articleTitle = "Teste de QI Online Gratuito: Quais São Confiáveis em 2026?";
  const articleDescription =
    "Teste de QI online gratuito ou grátis: compare MyIQ, Tua Saúde, Mensa, MyIQTested e outros. Veja o que é de graça de verdade e onde o resultado aparece na hora.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords:
      "teste de qi online gratuito, teste de qi online grátis, teste qi gratuito, teste de qi gratis, myiq é confiável, teste de qi com resultado gratuito, fazer teste de qi online",
  });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "teste-qi-online-gratuito",
      publishDate: "2026-11-10",
      modifiedDate: "2026-11-10",
    })
  );

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span>Teste de QI Online Gratuito</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time dateTime="2026-11-10">10 de Novembro de 2026</time>
          <span>•</span>
          <span>14 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-emerald-500/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Gift className="w-24 h-24 text-emerald-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Buscas por <strong>teste de QI online gratuito</strong> e <strong>teste de QI online grátis</strong>{" "}
            dispararam no Brasil. O problema: a maioria dos sites que aparecem no Google Ads e no Trends
            usa “grátis” no anúncio e esconde o score atrás de assinatura. Este guia compara os campeões
            do mercado em português — MyIQ, MyIQTested, Tua Saúde, Mensa, funis de Ads — e mostra o que
            realmente é gratuito.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">
                  Resumo em 30 segundos
                </h2>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ “Online gratuito” ≠ resultado completo de graça</li>
                  <li>✓ MyIQ: funil forte, score/certificado via assinatura</li>
                  <li>✓ MyIQTested / Tua Saúde: modelo mais transparente no “grátis”</li>
                  <li>✓ Mensa: desafio gratuito, não substitui admissão oficial</li>
                  <li>✓ BomQI: teste online em PT, prévia clara, resultado completo acessível</li>
                </ul>
                <Button size="sm" className="mt-4 gap-2" onClick={() => navigate("/teste")}>
                  Fazer teste no BomQI <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">
            O que o Google Trends mostra no Brasil (último mês)
          </h2>
          <p className="text-muted-foreground mb-4">
            As consultas que mais sobem no nicho combinam três palavras: <strong>teste</strong> +{" "}
            <strong>QI</strong> + (<strong>online</strong> / <strong>gratuito</strong> / <strong>grátis</strong>):
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>
              <strong>teste de qi online</strong> e <strong>teste qi gratis</strong> — alta demanda (+90% no
              período analisado)
            </li>
            <li>
              <strong>teste de qi online gratuito / grátis</strong> — em ascensão (breakout)
            </li>
            <li>
              <strong>teste de qi com resultado gratuito</strong> — intenção clara de ver o número sem
              paywall
            </li>
            <li>
              <strong>myiq é confiável</strong> — gente clicou no Ads e agora pesquisa a marca
            </li>
            <li>
              <strong>teste de qi infantil</strong> e <strong>qual a média de qi</strong> — satélites em
              alta
            </li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Quem quiser ranquear precisa responder exatamente: <em>onde fazer online, o que é grátis de
            verdade, e em quem confiar</em>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">
            Comparativo: sites campeões em português
          </h2>
          <p className="text-muted-foreground mb-4">
            Análise objetiva do que cada um promete vs. o que entrega (novembro 2026):
          </p>

          <Card className="p-6 my-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 pr-3">Site</th>
                  <th className="pb-3 pr-3">Modelo</th>
                  <th className="pb-3 pr-3">Resultado grátis?</th>
                  <th className="pb-3">Para quem serve</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b align-top">
                  <td className="py-3 pr-3 font-medium text-foreground">MyIQ</td>
                  <td className="py-3 pr-3">Assinatura + certificado + treino</td>
                  <td className="py-3 pr-3">Parcial — score completo atrás do plano</td>
                  <td className="py-3">Quem aceita membership e quer “perfil cognitivo”</td>
                </tr>
                <tr className="border-b align-top">
                  <td className="py-3 pr-3 font-medium text-foreground">MyIQTested</td>
                  <td className="py-3 pr-3">Score grátis; certificado opcional</td>
                  <td className="py-3 pr-3">Sim — resultado na hora, sem cadastro</td>
                  <td className="py-3">Quem busca “gratuito de verdade”</td>
                </tr>
                <tr className="border-b align-top">
                  <td className="py-3 pr-3 font-medium text-foreground">Tua Saúde</td>
                  <td className="py-3 pr-3">Conteúdo + teste Raven (60Q)</td>
                  <td className="py-3 pr-3">Sim — resultado automático no site</td>
                  <td className="py-3">Quem confia em marca de saúde / revisão médica</td>
                </tr>
                <tr className="border-b align-top">
                  <td className="py-3 pr-3 font-medium text-foreground">Mensa Brasil</td>
                  <td className="py-3 pr-3">Desafio gratuito (via Mensa Norway)</td>
                  <td className="py-3 pr-3">Sim o desafio; admissão é outro processo</td>
                  <td className="py-3">Curiosidade / alto QI; não é laudo</td>
                </tr>
                <tr className="border-b align-top">
                  <td className="py-3 pr-3 font-medium text-foreground">IQScore / IQCenter / MyMindUp</td>
                  <td className="py-3 pr-3">Funil Google Ads → trial / compra</td>
                  <td className="py-3 pr-3">Em geral não — monetizam o score</td>
                  <td className="py-3">Quem chega por anúncio pago</td>
                </tr>
                <tr className="align-top">
                  <td className="py-3 pr-3 font-medium text-foreground">BomQI</td>
                  <td className="py-3 pr-3">Teste online PT · prévia + resultado completo</td>
                  <td className="py-3 pr-3">Prévia gratuita; completo acessível (PIX)</td>
                  <td className="py-3">BR: clareza de preço e interpretação do score</td>
                </tr>
              </tbody>
            </table>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">MyIQ é confiável?</h2>
          <p className="text-muted-foreground mb-4">
            A busca <strong>myiq é confiável</strong> subiu junto com os anúncios da marca. Em resumo:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>
              <strong>O que é:</strong> teste online (~40 questões, estilo matrizes), perfil cognitivo,
              certificado e treino — modelo de <em>assinatura</em>.
            </li>
            <li>
              <strong>Confiável como entretenimento/triagem?</strong> Serve para curiosidade, como
              qualquer teste online estruturado.
            </li>
            <li>
              <strong>Confiável como “QI oficial”?</strong> Não. Nenhum site (incluindo MyIQ) substitui
              WAIS/WISC com psicólogo.
            </li>
            <li>
              <strong>Armadilha comum:</strong> anúncio sugere teste fácil/grátis; o valor está no
              relatório/plano. Leia o preço antes de colocar cartão.
            </li>
          </ul>
          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">
                  Regra de ouro para “teste grátis”
                </h3>
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  Se o site não mostra o <strong>QI numérico</strong> (ou pelo menos a faixa) sem
                  assinatura, e-mail spam ou cartão, não chame de gratuito — chame de trial. Critérios
                  completos em{" "}
                  <Link to="/blog/teste-qi-gratuito-e-confiavel" className="text-primary hover:underline">
                    teste gratuito e confiável
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Tua Saúde e Mensa: por que ranqueiam</h2>
          <h3 className="text-2xl font-bold mt-8 mb-4">Tua Saúde</h3>
          <p className="text-muted-foreground mb-6">
            Título direto (“Teste de QI grátis”), autoridade de saúde, revisão profissional e teste
            longo estilo Raven (60 questões / ~40 min). Ganha confiança editorial — diferente dos funis
            de Ads que só empurram checkout.
          </p>
          <h3 className="text-2xl font-bold mt-8 mb-4">Mensa Brasil</h3>
          <p className="text-muted-foreground mb-6">
            O “Desafio de QI” aponta para o teste da Mensa Norway. É gratuito para experimentar, mas{" "}
            <strong>não é o processo de admissão</strong> nem laudo clínico. Para o corte top 2%, veja{" "}
            <Link to="/blog/teste-mensa-brasil" className="text-primary hover:underline">
              teste Mensa Brasil
            </Link>{" "}
            e{" "}
            <Link to="/blog/qi-130-significa" className="text-primary hover:underline">
              o que significa QI 130
            </Link>
            .
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">
            Funis de Google Ads (IQScore, IQCenter, MyMindUp)
          </h2>
          <p className="text-muted-foreground mb-6">
            Esses sites dominam leilão de CPC em termos como “qi test online” e variantes em PT. O
            padrão: landing de início rápido → teste → oferta de resultado completo. Se você chegou por
            anúncio, confira preço, cancelamento e se o score aparece sem assinatura antes de pagar.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">
            Como escolher um teste de QI online gratuito de verdade
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Preço e o que é grátis escritos <strong>antes</strong> do fim do questionário</li>
            <li>Metodologia citada (matrizes, lógica) — sem “QI 180” milagroso</li>
            <li>Idioma em português claro (veja{" "}
              <Link to="/blog/teste-qi-em-portugues" className="text-primary hover:underline">
                teste em português
              </Link>
              )
            </li>
            <li>
              Resultado com interpretação de faixas — não só um número solto (
              <Link to="/blog/como-interpretar-resultado-qi" className="text-primary hover:underline">
                como interpretar
              </Link>
              )
            </li>
            <li>Honestidade: online ≠ laudo WAIS</li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">
                  Como o BomQI se posiciona
                </h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
                  Você faz o teste online em português, vê a dinâmica do resultado com transparência e
                  desbloqueia o relatório completo se quiser — sem fingir que somos “100% grátis com
                  score clínico”. Para curiosidade rápida no Brasil, é o caminho mais direto.
                </p>
                <Button className="gap-2" onClick={() => navigate("/teste")}>
                  Iniciar teste gratuito de prévia <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Teste infantil e média de QI</h2>
          <p className="text-muted-foreground mb-6">
            Se a busca for <strong>teste de QI infantil</strong>, o caminho certo muda: crianças
            precisam de cuidado com idade e, para laudo, WISC com psicólogo — não quiz de Ads. Guia:{" "}
            <Link to="/blog/teste-qi-criancas" className="text-primary hover:underline">
              teste de QI para crianças
            </Link>{" "}
            e{" "}
            <Link to="/blog/idade-certa-para-fazer-teste-qi" className="text-primary hover:underline">
              idade certa
            </Link>
            . Para <strong>qual a média de QI</strong>, veja{" "}
            <Link to="/blog/media-qi-brasil" className="text-primary hover:underline">
              média no Brasil
            </Link>
            .
          </p>

          <div className="bg-violet-50 dark:bg-violet-950/20 border-2 border-violet-200 dark:border-violet-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-violet-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-violet-900 dark:text-violet-100">
                  Próximo passo prático
                </h3>
                <p className="text-violet-800 dark:text-violet-200 text-sm">
                  Faça um teste online agora, anote o score e compare com a escala (média 100). Se
                  precisar de documento escolar ou clínico, agende psicólogo — online é triagem, não
                  laudo.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/teste-qi-gratuito-e-confiavel" className="text-primary hover:underline">
              Teste gratuito e confiável
            </Link>
            ,{" "}
            <Link to="/blog/teste-qi-online-guia-completo" className="text-primary hover:underline">
              guia do teste online
            </Link>
            ,{" "}
            <Link to="/blog/como-fazer-teste-de-qi" className="text-primary hover:underline">
              como fazer teste de QI
            </Link>
            ,{" "}
            <Link to="/blog/qual-meu-qi" className="text-primary hover:underline">
              qual meu QI
            </Link>{" "}
            e{" "}
            <Link to="/blog/melhores-testes-qi-online-2026" className="text-primary hover:underline">
              melhores testes 2026
            </Link>
            .
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Existe teste de QI online 100% gratuito com resultado?",
              answer:
                "Alguns sites mostram o score na hora sem cadastro. Muitos anúncios de 'grátis' só liberam o número após assinatura. Sempre confira o que aparece antes de pagar.",
            },
            {
              question: "MyIQ é confiável?",
              answer:
                "Serve como teste online de curiosidade, com modelo de assinatura. Não é avaliação clínica nem laudo oficial. Compare preço e o que está incluso antes de assinar.",
            },
            {
              question: "Qual a diferença entre BomQI e sites de Google Ads?",
              answer:
                "O BomQI deixa claro o que é prévia e o que é resultado completo, em português e com pagamento acessível. Funis de Ads costumam priorizar conversão de assinatura internacional.",
            },
            {
              question: "Teste online substitui psicólogo?",
              answer:
                "Não. Para superdotação, escola ou diagnóstico, use WAIS/WISC com profissional. Online é triagem e autoconhecimento.",
            },
            {
              question: "O que significa teste de QI com resultado gratuito?",
              answer:
                "Significa ver o número (ou faixa) sem pagar. Se o site só mostra 'você está acima da média' e pede cartão para o QI exato, não é resultado gratuito de verdade.",
            },
          ]}
        />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Faça seu teste de QI online agora</h3>
          <p className="text-muted-foreground mb-6">
            Em português, rápido e com interpretação clara do resultado.
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
            {getRelatedArticles("teste-qi-online-gratuito", 3).map((article) => (
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

export default TesteQIOnlineGratuito;
