import { Clock, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const TesteQIComResultadoImediato = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/teste-qi-com-resultado-imediato";
  const articleTitle = "Teste de QI com Resultado Imediato: Grátis e Rápido em 2026";
  const articleDescription = "Teste de QI com resultado imediato após o questionário. Quanto tempo leva, o que o score significa e como interpretar na hora.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "teste-qi-com-resultado-imediato",
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
          <span>Teste QI Resultado Imediato</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>26 de Junho de 2026</time>
          <span>•</span>
          <span>10 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-emerald-500/20 to-green-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Clock className="w-24 h-24 text-emerald-600" />
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">Quem busca <strong>teste de QI com resultado imediato</strong> quer feedback na hora — sem esperar e-mail, laudo ou dias de processamento. Entenda o que é possível entregar instantaneamente e o que exige tempo profissional.</p>
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resultado imediato: o que você recebe</h3>
                <p className="text-green-800 dark:text-green-200 mb-3 text-sm">Em testes online bem estruturados, o score estimado e a faixa percentil aparecem segundos após a última pergunta — às vezes com comparativo à média brasileira.</p>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Score estimado na hora</li>
                  <li>✓ Faixa de classificação (médio, superior, etc.)</li>
                  <li>✓ Tempo total: 3–5 minutos</li>
                  <li>✓ Relatório detalhado pode ser opcional</li>
                </ul>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Guia completo</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Por que alguns testes demoram dias</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Correção manual por psicólogo</li>
            <li>Laudo clínico com entrevista</li>
            <li>Processos de associações tipo Mensa</li>
            <li>Relatórios corporativos customizados</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Como funciona o resultado instantâneo</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Algoritmo corrige respostas ao finalizar</li>
            <li>Compara com banco de normas</li>
            <li>Calcula percentil aproximado</li>
            <li>Exibe pontos fortes por tipo de questão</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Como interpretar na hora</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>QI 100 = média populacional</li>
            <li>90–110 = faixa comum (68% da população)</li>
            <li>Acima de 115 = acima da média</li>
            <li>Veja tabela completa de faixas para contexto</li>
          </ul>
          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Resumo prático</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">Vantagens</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Feedback instantâneo</li>
                  <li>✓ Motivação imediata</li>
                  <li>✓ Sem espera por e-mail</li>
                  <li>✓ Ideal para mobile</li>
                  <li>✓ Bom para decisão rápida</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Limitações</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Sem análise clínica profunda</li>
                  <li>• Impulso de refazer várias vezes</li>
                  <li>• Pode gerar ansiedade se mal interpretado</li>
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
          <p className="text-muted-foreground mb-4"><Link to="/blog/qi-faixas-pontuacao-significado" className="text-primary hover:underline">Faixas de pontuação de QI</Link>,  <Link to="/blog/tabela-escala-qi" className="text-primary hover:underline">Tabela escala de QI</Link>,  <Link to="/blog/como-interpretar-resultado-qi" className="text-primary hover:underline">Como interpretar resultado de QI</Link>.</p>
        </div>
        <ArticleFAQ faqs={[
          { question: "Teste de QI pode dar resultado na hora?", answer: "Sim, testes online automatizados entregam o score segundos após concluir as perguntas." },
          { question: "Resultado imediato é confiável?", answer: "É uma estimativa válida para autoconhecimento, não um laudo clínico." },
          { question: "Quanto tempo dura o teste?", answer: "Entre 3 e 20 minutos conforme o número de questões." },
          { question: "Posso compartilhar o resultado?", answer: "Sim, mas lembre que é estimativa — não use como diagnóstico em contextos formais." }
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
            {getRelatedArticles("teste-qi-com-resultado-imediato", 3).map((article) => (
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

export default TesteQIComResultadoImediato;
