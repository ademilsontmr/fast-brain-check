import { MessageCircle, ArrowRight, CheckCircle2, BookOpen } from "lucide-react";
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

const TesteDoQI = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/teste-do-qi";
  const articleTitle = "Teste do QI: Significado da Busca, Uso no Brasil e Onde Fazer (2026)";
  const articleDescription =
    "Por que as pessoas buscam ‘teste do QI’ em vez de ‘teste de QI’? Mesma intenção, rotas certas no BomQI e links para guias profundos sem repetir conteúdo.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "teste do qi, teste do quociente de inteligência, fazer teste do qi, teste qi online, teste do qi gratuito",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "teste-do-qi",
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
          <span>Teste do QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time dateTime={publishDate}>13 de Novembro de 2026</time>
          <span>•</span>
          <span>11 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-violet-500/20 to-primary/10 rounded-lg mb-12 flex items-center justify-center">
          <MessageCircle className="w-24 h-24 text-violet-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            Se você digitou <strong>teste do QI</strong>, está no lugar certo para entender a busca e seguir adiante — sem
            um artigo genérico de 3.000 palavras que repete o que já existe em{" "}
            <Link to="/blog/o-que-e-teste-qi" className="text-primary hover:underline">o que é teste de QI</Link>. No
            português falado no Brasil, <em>“do”</em> e <em>“de”</em> aparecem quase indistintamente em frases como “fazer
            teste do quociente de inteligência”. O Google tende a tratar como{" "}
            <strong>mesma intenção</strong> na maioria dos casos.
          </p>

          <div className="not-prose bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              <div className="text-sm text-green-800 dark:text-green-200 m-0">
                <p className="font-bold text-green-900 dark:text-green-100 text-base mb-2">Atalho por objetivo</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Descobrir número agora → <Link to="/teste" className="underline">fazer teste</Link></li>
                  <li>Grátis → <Link to="/blog/teste-de-qi-gratuito" className="underline">teste de QI gratuito</Link></li>
                  <li>Rápido → <Link to="/blog/teste-de-qi-gratuito-rapido" className="underline">gratuito rápido</Link></li>
                  <li>Mapa completo → <Link to="/blog/teste-de-qi" className="underline">hub teste de QI</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">“Teste de QI” vs “teste do QI”</h2>
          <p className="text-muted-foreground mb-4">
            Gramaticalmente, <strong>teste de QI</strong> é a forma mais usada em textos formais (teste <em>de</em>{" "}
            quociente de inteligência). <strong>Teste do QI</strong> reflete fala coloquial: “vou fazer um teste do QI que
            vi no Instagram”. Para SEO, manter duas páginas com o mesmo texto seria canibalização — por isso esta URL é uma{" "}
            <strong>ponte</strong>: confirma a intenção e direciona.
          </p>
          <p className="text-muted-foreground mb-6">
            Não confunda com buscas sobre a financeira “QI” ou faculdades homônimas — irrelevantes para quociente de
            inteligência. Nosso foco é instrumento cognitivo.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que você provavelmente quer ao buscar teste do QI</h2>
          <h3 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" /> Curiosidade imediata
          </h3>
          <p className="text-muted-foreground mb-4">
            Você quer um número, uma faixa ou comparação com a média (100). Caminho: teste online estruturado, idealmente em
            português —{" "}
            <Link to="/blog/teste-qi-em-portugues" className="text-primary hover:underline">teste em português</Link>.
            Depois, interprete com{" "}
            <Link to="/blog/como-interpretar-resultado-qi" className="text-primary hover:underline">como interpretar</Link> e{" "}
            <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">tabela de QI</Link>.
          </p>
          <h3 className="text-2xl font-bold mt-8 mb-4">Laudo ou escola</h3>
          <p className="text-muted-foreground mb-4">
            Teste do QI aqui <strong>não</strong> significa documento com assinatura de psicólogo. Para isso:{" "}
            <Link to="/blog/teste-qi-oficial" className="text-primary hover:underline">teste oficial</Link>,{" "}
            <Link to="/blog/escala-inteligencia-wechsler-wais" className="text-primary hover:underline">WAIS</Link> e{" "}
            <Link to="/blog/idade-certa-para-fazer-teste-qi" className="text-primary hover:underline">idade certa</Link> em
            crianças.
          </p>
          <h3 className="text-2xl font-bold mt-8 mb-4">Comparar com famosos ou Mensa</h3>
          <p className="text-muted-foreground mb-6">
            Veja{" "}
            <Link to="/blog/qi-de-famosos" className="text-primary hover:underline">QI de famosos</Link> (estimativas) e{" "}
            <Link to="/blog/qi-130-significa" className="text-primary hover:underline">QI 130 / Mensa</Link> — contexto,
            não competição literal com celebridades.
          </p>


          <h2 className="text-3xl font-bold mt-12 mb-6">Passo a passo se for sua primeira vez</h2>
          <ol className="list-decimal pl-6 text-muted-foreground space-y-3 mb-8">
            <li>Reserve 5–10 minutos sem notificações (
              <Link to="/blog/teste-de-qi-no-celular" className="text-primary hover:underline">dicas no celular</Link>).</li>
            <li>Escolha teste com mais de 20 questões, não quiz de imagem única.</li>
            <li>Leia se é grátis de verdade —{" "}
              <Link to="/blog/teste-de-qi-gratuito" className="text-primary hover:underline">guia gratuito</Link>.</li>
            <li>Anote percentil, não só o número bruto.</li>
            <li>Se o score for decisivo (escola, clínica), confirme com profissional.</li>
          </ol>

          <p className="text-muted-foreground mb-6">
            Quer o tutorial longo?{" "}
            <Link to="/blog/como-fazer-teste-de-qi" className="text-primary hover:underline">como fazer teste de QI</Link>{" "}
            cobre erros comuns. Para “qual meu QI” em tom de busca direta:{" "}
            <Link to="/blog/qual-meu-qi" className="text-primary hover:underline">qual meu QI</Link>.
          </p>

          <Button size="lg" className="gap-2 not-prose" onClick={() => navigate("/teste")}>
            Fazer o teste do QI agora <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "‘Teste do QI’ é errado em português?",
              answer:
                "Em contexto informal, não. Em redação formal, prefira ‘teste de QI’.",
            },
            {
              question: "Por que não fundir com teste de QI na mesma URL?",
              answer:
                "Porque muita gente busca exatamente ‘teste do qi’; uma ponte curta ranqueia sem duplicar o guia longo.",
            },
            {
              question: "teste do qi gratuito existe?",
              answer:
                "Sim, como triagem online. Detalhes em teste de QI gratuito e gratuito rápido.",
            },
            {
              question: "Isso substitui a home do BomQI?",
              answer:
                "Não. A home é conversão; este artigo é editorial para quem chega via busca com ‘do’.",
            },
            {
              question: "Teste do qi e teste de inteligência são iguais?",
              answer:
                "Geralmente sim no marketing online; ‘inteligência’ pode incluir outros construtos. Veja teste de inteligência online.",
            },
          ]}
        />

        <SocialProofCarousel />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {getRelatedArticles("teste-do-qi", 3).map((a) => (
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

export default TesteDoQI;
