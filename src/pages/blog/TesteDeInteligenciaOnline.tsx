import { Laptop, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const TesteDeInteligenciaOnline = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/teste-de-inteligencia-online";
  const articleTitle = "Teste de Inteligência Online: Guia Completo 2026";
  const articleDescription = "Como fazer um teste de inteligência online confiável. Critérios para escolher, diferença entre QI e IQ test, tempo e como interpretar o resultado.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "teste-de-inteligencia-online",
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
          <span>Teste de Inteligência Online</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>26 de Junho de 2026</time>
          <span>•</span>
          <span>11 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Laptop className="w-24 h-24 text-cyan-600" />
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            O <strong>teste de inteligência online</strong> é a forma mais acessível de estimar seu QI hoje — seja buscando &quot;teste de iq&quot;, &quot;teste de QI&quot; ou &quot;teste de inteligência&quot;. Neste guia, explicamos como escolher um teste sério, o que esperar do resultado e quando vale ir além do online.
          </p>
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">O que define um bom teste online</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Perguntas de raciocínio lógico e matrizes</li>
                  <li>✓ Duração entre 3 e 20 minutos</li>
                  <li>✓ Explicação de limitações na página</li>
                  <li>✓ Resultado com faixa ou percentil, não só um número solto</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Teste de inteligência vs teste de QI</h2>
          <p className="text-muted-foreground mb-6">
            Na prática, <strong>teste de inteligência online</strong> e <strong>teste de QI</strong> costumam ser a mesma coisa: avaliam raciocínio fluido, lógica e às vezes verbal. A diferença está na metodologia — testes clínicos (WAIS) medem mais subáreas; testes online focam no que dá para aplicar em poucos minutos com boa correlação (~85–90%).
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Tipos de teste de inteligência online</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li><strong>Matrizes progressivas:</strong> padrão Raven — muito usado em testes rápidos</li>
            <li><strong>Sequências numéricas e lógicas:</strong> raciocínio abstrato</li>
            <li><strong>Verbal:</strong> analogias e vocabulário (menos comum em testes curtos)</li>
            <li><strong>Apps gamificados:</strong> divertidos, porém menor precisão para QI geral</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Como escolher um teste confiável</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Evite testes com menos de 10 perguntas</li>
            <li>Desconfie de QI 150+ sem esforço real</li>
            <li>Prefira sites com política de privacidade clara</li>
            <li>Veja se explicam que não substitui avaliação clínica</li>
            <li>Teste em português adaptado — traduções ruins distorcem o score</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Teste online vs avaliação com psicólogo</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li><strong>Online:</strong> curiosidade, autoconhecimento, triagem — minutos</li>
            <li><strong>Psicólogo (WAIS):</strong> diagnóstico, laudo, superdotação — horas</li>
            <li><strong>Mensa:</strong> admissão em sociedade de alto QI — processo formal</li>
          </ul>

          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Checklist antes de começar</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">Faça assim</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Ambiente silencioso</li>
                  <li>✓ Bem descansado</li>
                  <li>✓ Sem pressa nas questões difíceis</li>
                  <li>✓ Um teste por vez (evite repetir no mesmo dia)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Evite</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Celular com notificações</li>
                  <li>• Pesquisar respostas na internet</li>
                  <li>• Comparar com testes de redes sociais</li>
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
                  O BomQI oferece teste de inteligência online em português, com prévia do nível e resultado completo após o questionário.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/teste-raciocinio-logico-online" className="text-primary hover:underline">Teste de raciocínio lógico online</Link>,{" "}
            <Link to="/blog/teste-qi-online-guia-completo" className="text-primary hover:underline">teste de QI online</Link>,{" "}
            <Link to="/blog/melhor-teste-qi-2026" className="text-primary hover:underline">melhor teste de QI 2026</Link> e{" "}
            <Link to="/blog/como-saber-meu-qi" className="text-primary hover:underline">como descobrir meu QI</Link>.
          </p>
        </div>

        <ArticleFAQ faqs={[
          { question: "Teste de inteligência online é confiável?", answer: "Pode ser, para estimativa pessoal. Testes estruturados com raciocínio lógico têm boa correlação com testes formais, mas não substituem o WAIS." },
          { question: "Quanto tempo dura um teste de inteligência online?", answer: "Entre 3 e 20 minutos na maioria dos testes sérios. Testes muito curtos (menos de 5 min) tendem a ser imprecisos." },
          { question: "Qual a diferença entre teste de IQ e teste de QI?", answer: "IQ (inglês) e QI (português) referem-se ao mesmo conceito — quociente de inteligência." },
          { question: "Preciso de cadastro para fazer teste de inteligência online?", answer: "Depende do site. Muitos pedem dados mínimos só ao final para liberar o resultado completo." },
          { question: "O resultado online vale para escola ou trabalho?", answer: "Geralmente não. Para laudo oficial, é necessária avaliação com psicólogo credenciado." },
        ]} />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Faça seu teste de inteligência agora</h3>
          <p className="text-muted-foreground mb-6">Resultado em minutos — faça o teste agora.</p>
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
            {getRelatedArticles("teste-de-inteligencia-online", 3).map((article) => (
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

export default TesteDeInteligenciaOnline;
