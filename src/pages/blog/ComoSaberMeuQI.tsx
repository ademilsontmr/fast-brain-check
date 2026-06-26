import { Lightbulb, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const ComoSaberMeuQI = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/como-saber-meu-qi";
  const articleTitle = "Como Saber Meu QI: 6 Métodos Práticos em 2026";
  const articleDescription = "Aprenda como saber seu QI com métodos práticos: teste online, psicólogo, Mensa e mais. Compare custo, precisão e tempo de cada opção.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "como-saber-meu-qi",
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
          <span>Como Saber Meu QI</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>26 de Junho de 2026</time>
          <span>•</span>
          <span>10 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-indigo-500/20 to-purple-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Lightbulb className="w-24 h-24 text-indigo-500" />
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8"><strong>Como saber meu QI</strong> é uma das buscas mais comuns no Google Brasil — e a resposta depende do seu objetivo: curiosidade, autoconhecimento ou avaliação formal para clínica ou escola.</p>
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resposta rápida</h3>
                <p className="text-green-800 dark:text-green-200 mb-3 text-sm">Para a maioria das pessoas, um teste online estruturado é o caminho mais rápido. Para diagnóstico clínico, apenas avaliação com psicólogo usando WAIS ou WISC.</p>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Teste online: 3–5 min, resultado imediato</li>
                  <li>✓ Psicólogo: padrão ouro, R$800–2.500</li>
                  <li>✓ Mensa: para QI no top 2%</li>
                  <li>✓ Apps: triagem rápida, menor precisão</li>
                </ul>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Guia completo</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Método 1: Teste online científico</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Melhor custo-benefício para curiosidade</li>
            <li>Resultado em minutos após o questionário</li>
            <li>Precisão estimada em 85–90% vs teste formal</li>
            <li>Ideal para adultos e adolescentes</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Método 2: Avaliação com psicólogo</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>WAIS-IV para adultos, WISC-V para crianças</li>
            <li>Único método com validade clínica plena</li>
            <li>Indicado para superdotação e dificuldades de aprendizagem</li>
            <li>Laudo assinado para escolas e processos</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Método 3: Mensa e associações de alto QI</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Teste de admissão com corte no percentil 98</li>
            <li>Não mede QI numérico direto em todos os casos</li>
            <li>Comunidade e networking para superdotados</li>
            <li>Custo e disponibilidade variam no Brasil</li>
          </ul>
          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Resumo prático</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">Vantagens</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Várias opções por orçamento</li>
                  <li>✓ Teste online resolve em minutos</li>
                  <li>✓ WAIS para casos formais</li>
                  <li>✓ Repetição permite acompanhar evolução</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Limitações</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Testes virais sem metodologia</li>
                  <li>• Confundir QI com nota escolar</li>
                  <li>• Expectativa de laudo clínico em teste grátis</li>
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
          <p className="text-muted-foreground mb-4"><Link to="/blog/como-descobrir-meu-qi" className="text-primary hover:underline">Como descobrir meu QI</Link>,  <Link to="/blog/como-saber-meu-qi-sem-pagar" className="text-primary hover:underline">Como saber meu QI sem pagar</Link>,  <Link to="/blog/como-medir-qi" className="text-primary hover:underline">Como medir QI</Link>.</p>
        </div>
        <ArticleFAQ faqs={[
          { question: "Como saber meu QI de graça?", answer: "Faça um teste online estruturado. Para opções sem custo, veja também nosso guia de testes gratuitos." },
          { question: "Qual a forma mais precisa de saber meu QI?", answer: "Avaliação presencial com psicólogo usando WAIS-IV ou WISC-V." },
          { question: "Posso confiar em teste de QI no celular?", answer: "Depende da metodologia. Apps com poucas perguntas são apenas curiosidade." },
          { question: "De quanto em quanto tempo posso refazer o teste?", answer: "Espere pelo menos 6–12 meses para evitar efeito de prática nas mesmas questões." }
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
            {getRelatedArticles("como-saber-meu-qi", 3).map((article) => (
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

export default ComoSaberMeuQI;
