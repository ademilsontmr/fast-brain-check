import { Shield, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const TesteQIGratuitoEConfiavel = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/teste-qi-gratuito-e-confiavel";
  const articleTitle = "Teste de QI Gratuito e Confiável: Guia Completo 2026";
  const articleDescription = "Encontre um teste de QI gratuito e confiável. Critérios científicos, comparação de opções e como fazer o teste online com resultado em minutos.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "teste-qi-gratuito-e-confiavel",
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
          <span>Teste QI Gratuito e Confiável</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>26 de Junho de 2026</time>
          <span>•</span>
          <span>10 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/5 rounded-lg mb-12 flex items-center justify-center">
          <Shield className="w-24 h-24 text-primary" />
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">Buscar um <strong>teste de QI gratuito e confiável</strong> é o que milhares de brasileiros fazem todo mês. O desafio não é achar qualquer teste — é escolher um que use lógica validada, explique limitações e entregue resultado útil sem promessas falsas.</p>
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">O que define um teste gratuito confiável</h3>
                <p className="text-green-800 dark:text-green-200 mb-3 text-sm">Confiável não significa laudo clínico. Significa metodologia clara, perguntas de raciocínio lógico, tempo adequado e transparência sobre o que o resultado representa.</p>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Perguntas de raciocínio fluido e lógica</li>
                  <li>✓ Tempo entre 3 e 20 minutos</li>
                  <li>✓ Explicação honesta das limitações</li>
                  <li>✓ Sem exigir dados desnecessários</li>
                </ul>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Guia completo</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Por que tantos testes grátis não são confiáveis</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Poucas perguntas (menos de 10) inflam o score</li>
            <li>Sem explicação metodológica na página</li>
            <li>Resultado bloqueado atrás de paywall enganoso</li>
            <li>Números absurdos (QI 180+) sem base</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Critérios para escolher um teste sério</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Base em matrizes de raciocínio ou lógica sequencial</li>
            <li>Média populacional explicada (QI 100)</li>
            <li>Política de privacidade visível</li>
            <li>Avaliações e tempo de mercado do site</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Teste grátis vs teste pago: quando cada um faz sentido</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Grátis/inicial: curiosidade, autoconhecimento, triagem</li>
            <li>Pago com relatório: análise mais detalhada por subáreas</li>
            <li>Clínico (WAIS): diagnóstico, superdotação, processos formais</li>
            <li>Online confiável cobre 85–90% da necessidade casual</li>
          </ul>
          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Resumo prático</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">Vantagens</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Acesso imediato</li>
                  <li>✓ Custo zero para começar</li>
                  <li>✓ Boa estimativa para autoconhecimento</li>
                  <li>✓ Comparável entre tentativas</li>
                  <li>✓ Ideal para triagem inicial</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Limitações</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Não substitui avaliação clínica</li>
                  <li>• Resultado varia com fadiga e ambiente</li>
                  <li>• Testes muito curtos perdem precisão</li>
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
          <p className="text-muted-foreground mb-4"><Link to="/blog/teste-qi-confiavel" className="text-primary hover:underline">Teste de QI confiável</Link>,  <Link to="/blog/melhor-teste-qi-2026" className="text-primary hover:underline">Melhor teste de QI 2026</Link>,  <Link to="/blog/como-descobrir-meu-qi" className="text-primary hover:underline">Como descobrir meu QI</Link>.</p>
        </div>
        <ArticleFAQ faqs={[
          { question: "Existe teste de QI gratuito e confiável de verdade?", answer: "Sim, para estimativa pessoal. Testes com raciocínio lógico estruturado são úteis, mas não têm validade clínica como o WAIS." },
          { question: "Teste grátis pode dar QI errado?", answer: "Pode variar ±10–15 pontos. Evite testes com poucas perguntas ou que prometem precisão de laboratório." },
          { question: "Preciso pagar para ter resultado confiável?", answer: "Não necessariamente. Pagar pode trazer relatório mais detalhado, mas um teste gratuito bem feito já orienta bem." },
          { question: "Como saber se o site é confiável?", answer: "Verifique metodologia, política de privacidade, ausência de promessas exageradas e se explica que não é diagnóstico." }
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
            {getRelatedArticles("teste-qi-gratuito-e-confiavel", 3).map((article) => (
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

export default TesteQIGratuitoEConfiavel;
