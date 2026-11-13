import { ClipboardList, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleLeadAdSense from "@/components/ArticleLeadAdSense";
import ArticleFAQ from "@/components/ArticleFAQ";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const publishDate = "2026-11-13";

const TesteDeQI = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/teste-de-qi";
  const articleTitle = "Teste de QI: Guia Hub — Tipos, Grátis, Oficial e Onde Fazer (2026)";
  const articleDescription =
    "Hub do teste de QI: mapa de guias por intenção (grátis, rápido, oficial, celular). Escolha o artigo certo sem repetir conteúdo.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords:
      "teste de qi, teste de quociente de inteligência, tipos de teste de qi, fazer teste de qi, teste qi brasil 2026",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "teste-de-qi",
      publishDate,
      modifiedDate: publishDate,
    })
  );

  const clusters = [
    {
      title: "Começar agora",
      links: [
        { to: "/blog/teste-de-qi-gratuito", label: "Teste de QI gratuito", note: "Opções sem pagar e limites" },
        { to: "/blog/teste-de-qi-gratuito-rapido", label: "Gratuito e rápido", note: "Resultado em poucos minutos" },
        { to: "/blog/teste-do-qi", label: "Teste do QI", note: "Mesma busca, outra grafia" },
      ],
    },
    {
      title: "Profundidade (não repita aqui)",
      links: [
        { to: "/blog/o-que-e-teste-qi", label: "O que é teste de QI?", note: "Conceito, história e limitações" },
        { to: "/blog/como-fazer-teste-de-qi", label: "Como fazer passo a passo", note: "Preparação e erros comuns" },
        { to: "/blog/teste-qi-gratuito-e-confiavel", label: "Gratuito e confiável", note: "Critérios científicos" },
        { to: "/blog/teste-qi-online-gratuito", label: "Online gratuito (comparativo)", note: "MyIQ, Mensa, etc." },
      ],
    },
    {
      title: "Formal e contexto",
      links: [
        { to: "/blog/teste-qi-oficial", label: "Teste oficial / laudo", note: "WAIS, WISC, psicólogo" },
        { to: "/blog/teste-qi-infantil", label: "Teste infantil", note: "WISC e idade" },
        { to: "/blog/teste-mensa-brasil", label: "Mensa Brasil", note: "Alto QI" },
        { to: "/blog/quanto-custa-teste-de-qi", label: "Quanto custa", note: "Preços no Brasil" },
      ],
    },
    {
      title: "Dispositivo e privacidade",
      links: [
        { to: "/blog/teste-de-qi-no-celular", label: "No celular", note: "Android, iPhone, UX" },
        { to: "/blog/teste-de-qi-sem-cadastro", label: "Sem cadastro", note: "Dados pedidos e riscos" },
        { to: "/blog/teste-saude-mental-ou-qi", label: "Saúde mental ou QI?", note: "Não confunda os testes" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Teste de QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time dateTime={publishDate}>13 de Novembro de 2026</time>
          <span>•</span>
          <span>12 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-cyan-500/10 rounded-lg mb-12 flex items-center justify-center">
          <ClipboardList className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            Esta página é um <strong>hub</strong>: ela organiza o tema <strong>teste de QI</strong> e aponta para
            guias específicos. Assim evitamos repetir o mesmo texto em dezenas de URLs e você encontra o conteúdo certo
            para a sua pergunta (grátis, rápido, oficial, celular ou confiabilidade).
          </p>

          <p className="text-muted-foreground mb-6">
            O BomQI mantém artigos separados por <strong>intenção de busca</strong> — o que o Google e o leitor
            reconhecem como valor: cada URL responde uma pergunta clara, com profundidade no guia certo, não um bloco
            genérico copiado em tudo. Este hub resume o mapa; a explicação longa sobre definição de quociente está em{" "}
            <Link to="/blog/o-que-e-teste-qi" className="text-primary hover:underline">o que é teste de QI</Link>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Qual caminho seguir (em 30 segundos)</h2>
          <ol className="list-decimal pl-6 text-muted-foreground space-y-2 mb-8">
            <li>Quer opções <strong>grátis no mercado</strong> →{" "}
              <Link to="/blog/teste-de-qi-gratuito" className="text-primary hover:underline">teste de QI gratuito</Link>{" "}
              (o BomQI <strong>não</strong> entra aqui — é pago)
            </li>
            <li>Quer BomQI rápido (~3 min) →{" "}
              <Link to="/teste" className="text-primary hover:underline">fazer teste</Link> ou{" "}
              <Link to="/blog/teste-de-qi-gratuito-rapido" className="text-primary hover:underline">guia rápido</Link>
            </li>
            <li>Precisa de documento para escola ou Mensa →{" "}
              <Link to="/blog/teste-qi-oficial" className="text-primary hover:underline">teste oficial</Link>
            </li>
            <li>Está no celular agora →{" "}
              <Link to="/blog/teste-de-qi-no-celular" className="text-primary hover:underline">guia mobile</Link>
            </li>
            <li>Não quer criar conta antes →{" "}
              <Link to="/blog/teste-de-qi-sem-cadastro" className="text-primary hover:underline">sem cadastro</Link>
            </li>
            <li>Confundiu com teste de humor/ansiedade →{" "}
              <Link to="/blog/teste-saude-mental-ou-qi" className="text-primary hover:underline">saúde mental ou QI</Link>
            </li>
          </ol>

          <div className="not-prose bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Quer só fazer o teste?</h2>
                <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                  O BomQI mede raciocínio em cerca de 3 minutos. Serviço <strong>pago</strong>: prévia do nível e resultado
                  completo após desbloqueio.
                </p>
                <Button size="sm" className="gap-2" onClick={() => navigate("/teste")}>
                  Fazer teste de QI <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Mapa por intenção de busca</h2>
          <p className="text-muted-foreground mb-6">
            Cada link abaixo é um artigo <strong>diferente</strong>. Se dois títulos parecem parecidos, um é entrada
            rápida e o outro é análise profunda — não são duplicatas.
          </p>


          <div className="not-prose space-y-8 my-10">
            {clusters.map((group) => (
              <div key={group.title}>
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  {group.title}
                </h3>
                <div className="grid gap-3">
                  {group.links.map((item) => (
                    <Card key={item.to} className="p-4 hover:border-primary/40 transition-colors">
                      <Link to={item.to} className="font-semibold text-primary hover:underline">
                        {item.label}
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">{item.note}</p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Tipos de teste de QI (visão geral)</h2>
          <p className="text-muted-foreground mb-4">
            Em linhas gerais, o ecossistema divide-se em três camadas: (1) <strong>triagem online</strong> — rápida,
            educacional; (2) <strong>baterias padronizadas</strong> com psicólogo — WAIS, WISC, Raven em contexto
            controlado; (3) <strong>programas de alto QI</strong> como Mensa, com regras próprias de admissão. Este site
            cobre sobretudo a camada 1 e orienta quando subir para 2.
          </p>
          <p className="text-muted-foreground mb-8">
            Para comparar marcas e “é confiável?”, use o pilar{" "}
            <Link to="/blog/teste-qi-gratuito-e-confiavel" className="text-primary hover:underline">
              gratuito e confiável
            </Link>{" "}
            — não duplicamos aqui tabelas de validade científica.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que não fazemos neste hub</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
            <li>Explicar WAIS/WISC em detalhe — veja <Link to="/blog/escala-inteligencia-wechsler-wais" className="text-primary hover:underline">WAIS</Link></li>
            <li>Comparar MyIQ linha a linha — veja <Link to="/blog/myiq-e-confiavel" className="text-primary hover:underline">análise MyIQ</Link></li>
            <li>Definir “qual meu QI” — veja <Link to="/blog/qual-meu-qi" className="text-primary hover:underline">qual meu QI</Link></li>
          </ul>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Qual página ler primeiro sobre teste de QI?",
              answer:
                "Se quer fazer já: teste de QI gratuito ou gratuito rápido. Se quer entender o conceito: o que é teste de QI. Se precisa de laudo: teste oficial.",
            },
            {
              question: "Teste de QI e teste do QI são a mesma coisa?",
              answer: "Sim no Brasil. Temos um artigo só para a grafia teste do QI, apontando para este hub.",
            },
            {
              question: "Este hub substitui o guia completo online?",
              answer:
                "Não. O guia completo de teste de QI online continua sendo a leitura longa; aqui só organizamos os atalhos.",
            },
            {
              question: "Por que tantas URLs sobre teste de QI no mesmo site?",
              answer:
                "Cada uma atende uma busca diferente (grátis, rápido, celular, oficial). O hub evita que você leia tudo — só o que combina com sua dúvida.",
            },
            {
              question: "Teste de QI online vale para processo seletivo?",
              answer:
                "Quase nunca. Empresas e escolas pedem avaliação presencial ou instrumentos específicos. Online serve para autoestima informada e curiosidade.",
            },
          ]}
        />

        <SocialProofCarousel />

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Continue lendo</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("teste-de-qi", 3).map((article) => (
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
      </article>
      <Footer />
    </div>
  );
};

export default TesteDeQI;
