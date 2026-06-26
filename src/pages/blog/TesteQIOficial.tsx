import { Award, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const TesteQIOficial = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/teste-qi-oficial";
  const articleTitle = "Teste de QI Oficial: O Que É e Como Fazer em 2026";
  const articleDescription = "Entenda o que é um teste de QI oficial, diferença para testes online e onde fazer avaliação formal no Brasil.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "teste-qi-oficial",
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
          <span>Teste QI Oficial</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>26 de Junho de 2026</time>
          <span>•</span>
          <span>10 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-amber-500/20 to-yellow-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Award className="w-24 h-24 text-amber-600" />
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">Muita gente busca um <strong>teste de QI oficial</strong>, mas o termo gera confusão: existe o teste clínico com psicólogo e os testes online que seguem metodologia, mas não emitem laudo. Este guia esclarece as diferenças.</p>
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">O que é oficial de verdade</h3>
                <p className="text-green-800 dark:text-green-200 mb-3 text-sm">Oficial, no sentido clínico, é o teste aplicado por psicólogo credenciado com instrumento padronizado (WAIS, WISC, Raven progressivo em contexto clínico).</p>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Aplicado por profissional habilitado</li>
                  <li>✓ Instrumento com normas brasileiras</li>
                  <li>✓ Laudo com interpretação individual</li>
                  <li>✓ Validade para escola, clínica e perícia</li>
                </ul>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Guia completo</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Teste oficial vs teste online</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Oficial: psicólogo + sala controlada + laudo</li>
            <li>Online: autoadministrado + estimativa + relatório digital</li>
            <li>Oficial: R$800–2.500 e 1–2 horas</li>
            <li>Online: minutos e custo muito menor</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Quando você precisa de teste oficial</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Suspeita de superdotação infantil</li>
            <li>Avaliação para adaptação escolar</li>
            <li>Processos que exigem laudo assinado</li>
            <li>Investigação de déficit cognitivo</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Quando o teste online basta</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Curiosidade e autoconhecimento</li>
            <li>Comparação aproximada com médias</li>
            <li>Motivação para estudo e hábitos cognitivos</li>
            <li>Triagem antes de investir em avaliação clínica</li>
          </ul>
          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Resumo prático</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">Vantagens</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Clareza sobre expectativas</li>
                  <li>✓ Evita gasto desnecessário</li>
                  <li>✓ Orienta para o canal certo</li>
                  <li>✓ Transparência sobre limites legais</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Limitações</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Sites que vendem 'oficial' sem psicólogo</li>
                  <li>• Confusão com certificados falsos</li>
                  <li>• Mensa não é sinônimo de laudo clínico</li>
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
          <p className="text-muted-foreground mb-4"><Link to="/blog/teste-mensa-brasil" className="text-primary hover:underline">Teste Mensa Brasil</Link>,  <Link to="/blog/onde-fazer-teste-qi-brasil" className="text-primary hover:underline">Onde fazer teste de QI</Link>,  <Link to="/blog/o-que-e-teste-qi" className="text-primary hover:underline">O que é teste de QI</Link>.</p>
        </div>
        <ArticleFAQ faqs={[
          { question: "Teste de QI online pode ser oficial?", answer: "Não no sentido clínico. Pode ser metodologicamente sério, mas oficial implica aplicação profissional e laudo." },
          { question: "O BomQI é teste oficial?", answer: "É um teste online para estimativa de QI, não substitui avaliação neuropsicológica formal." },
          { question: "Quanto custa teste oficial no Brasil?", answer: "Em geral R$800 a R$2.500 conforme cidade, profissional e tipo de laudo." },
          { question: "Mensa é teste oficial?", answer: "É teste de admissão para associação de alto QI, com critérios próprios — distinto do WAIS clínico." }
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
            {getRelatedArticles("teste-qi-oficial", 3).map((article) => (
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

export default TesteQIOficial;
