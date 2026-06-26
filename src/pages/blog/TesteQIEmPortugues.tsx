import { Globe, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const TesteQIEmPortugues = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/teste-qi-em-portugues";
  const articleTitle = "Teste de QI em Português: Gratuito e Adaptado ao Brasil";
  const articleDescription = "Faça um teste de QI em português adaptado ao Brasil. Por que o idioma importa e como evitar testes traduzidos com erro.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "teste-qi-em-portugues",
      publishDate: "2026-06-26",
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
          <span>Teste QI em Português</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>26 de Junho de 2026</time>
          <span>•</span>
          <span>10 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Globe className="w-24 h-24 text-blue-600" />
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">Um <strong>teste de QI em português</strong> bem adaptado evita o principal problema dos testes traduzidos às pressas: perguntas ambíguas que penalizam quem fala português nativo. Também captura buscas por <strong>teste de IQ</strong> — grafia comum no Brasil.</p>
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Por que idioma importa no QI</h3>
                <p className="text-green-800 dark:text-green-200 mb-3 text-sm">Testes verbais dependem de vocabulário. Testes de raciocínio visual (matrizes) são mais universais — ideais para comparação entre países.</p>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Instruções claras em português brasileiro</li>
                  <li>✓ Matrizes visuais reduzem viés linguístico</li>
                  <li>✓ Normas comparadas à média brasileira quando possível</li>
                  <li>✓ Evita calques de inglês em enunciados</li>
                </ul>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Guia completo</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Problemas de testes só traduzidos</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Expressões idiomáticas incorretas</li>
            <li>Vocabulário europeu vs brasileiro</li>
            <li>Tempo de leitura maior por ambiguidade</li>
            <li>Scores artificialmente baixos</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">O que buscar em teste em português</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Enunciados revisados por falante nativo</li>
            <li>Mix de lógica visual e numérica</li>
            <li>Referência à escala padrão (média 100, DP 15)</li>
            <li>Suporte e FAQ em português</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Teste de IQ vs teste de QI</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Mesma coisa — IQ é a sigla em inglês</li>
            <li>Google trata ambas as grafias no Brasil</li>
            <li>Conteúdo deve responder às duas intenções</li>
            <li>Foco em raciocínio, não em inglês</li>
          </ul>
          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Resumo prático</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">Vantagens</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Compreensão total das perguntas</li>
                  <li>✓ Menos ansiedade linguística</li>
                  <li>✓ Melhor para crianças e adolescentes</li>
                  <li>✓ Comparável à população BR</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Limitações</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Testes importados sem adaptação</li>
                  <li>• Confundir fluência em inglês com QI</li>
                  <li>• Normas americanas aplicadas ao Brasil</li>
                </ul>
              </div>
            </div>
          </Card>
          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Próximo passo</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  O jeito mais rápido de colocar tudo isso em prática é fazer o teste agora e comparar seu resultado com as faixas de QI. Leva poucos minutos.
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4"><Link to="/blog/media-qi-brasil" className="text-primary hover:underline">Média de QI no Brasil</Link>,  <Link to="/blog/qi-brasileiro-vs-outros-paises" className="text-primary hover:underline">QI brasileiro vs outros países</Link>,  <Link to="/blog/teste-qi-online-guia-completo" className="text-primary hover:underline">Guia completo teste QI online</Link>.</p>
        </div>
        <ArticleFAQ faqs={[
          { question: "Teste de IQ e teste de QI são iguais?", answer: "Sim. IQ (Intelligence Quotient) é o termo em inglês para o mesmo conceito de QI." },
          { question: "Teste em português é menos válido?", answer: "Não. Desde que adaptado corretamente, pode ser tão válido quanto em outro idioma." },
          { question: "Crianças precisam de teste em português?", answer: "Sim, especialmente em partes verbais. Matrizes visuais funcionam bem em qualquer idade." },
          { question: "O BomQI está em português brasileiro?", answer: "Sim, pensado para o público brasileiro com instruções claras em PT-BR." }
        ]} />
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Faça seu teste de QI agora</h3>
          <p className="text-muted-foreground mb-6">Resultado em minutos — gratuito para começar.</p>
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
            {getRelatedArticles("teste-qi-em-portugues", 3).map((article) => (
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

export default TesteQIEmPortugues;
