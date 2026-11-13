import { Laptop, ArrowRight, BookOpen, CheckCircle2, AlertTriangle } from "lucide-react";
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

const QISteveJobs = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/qi-steve-jobs";
  const articleTitle = "Qual era o QI de Steve Jobs?";
  const articleDescription = "Estimativas do QI de Steve Jobs e o que isso revela sobre inteligência e sucesso.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-steve-jobs",
      publishDate: "2025-01-15",
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
          <span>QI de Steve Jobs</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>15 de Janeiro de 2025</time>
          <span>•</span>
          <span>8 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Laptop className="w-24 h-24 text-primary" />
        </div>
        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            <strong>Steve Jobs</strong> nunca fez teste de QI público. A internet circula estimativas entre{" "}
            <strong>160 e 180</strong>, quase sempre sem fonte primária — anedotas de escola ou biografias não equivalem
            a WAIS assinado. O que sabemos é um perfil de <strong>visão de produto, marketing e estética</strong> raro,
            que testes padronizados medem só em parte.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Números virais não são verificados</li>
                  <li>✓ Jobs exemplifica QI + criatividade + timing de mercado</li>
                  <li>✓ Wozniak trazia engenharia; Jobs, narrativa e integração</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">De onde vêm as estimativas?</h2>
          <p className="text-muted-foreground mb-4">
            Listas de “QI de famosos” copiam umas às outras. Para critérios sérios, leia{" "}
            <Link to="/blog/pessoas-famosas-com-qi-alto" className="text-primary hover:underline">pessoas famosas com QI alto</Link> e o
            índice em{" "}
            <Link to="/blog/qi-de-famosos" className="text-primary hover:underline">QI de famosos</Link>.
          </p>
          <p className="text-muted-foreground mb-6">
            Compare com{" "}
            <Link to="/blog/qi-bill-gates" className="text-primary hover:underline">Bill Gates</Link> e{" "}
            <Link to="/blog/qi-elon-musk" className="text-primary hover:underline">Elon Musk</Link> — mesmo padrão de
            estimativas não auditadas.
          </p>


          <h2 className="text-3xl font-bold mt-12 mb-6">O que Jobs tinha além de “QI alto”</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Obsessão por simplicidade e experiência do usuário</li>
            <li>Capacidade de convencer equipes e investidores</li>
            <li>Reality distortion field — carisma, não escore em teste</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            A relação entre talento criativo e teste aparece em{" "}
            <Link to="/blog/qi-criatividade" className="text-primary hover:underline">QI e criatividade</Link> e em{" "}
            <Link to="/blog/qi-e-sucesso-carreira" className="text-primary hover:underline">QI e sucesso na carreira</Link>.
          </p>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">Ceticismo saudável</h3>
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  QI 160 implicaria superdotação raríssima com documentação; ausência de teste publicado torna o número
                  folclore digital.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/genios-em-comum" className="text-primary hover:underline">O que os gênios têm em comum</Link>,{" "}
            <Link to="/blog/qi-130-significa" className="text-primary hover:underline">QI 130: o que significa</Link> e{" "}
            <Link to="/blog/o-que-e-considerado-qi-alto" className="text-primary hover:underline">o que é QI alto</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Steve Jobs tinha QI 160?",
              answer:
                "Não há registro confiável. O valor aparece em listas sem citação a teste aplicado por psicólogo.",
            },
            {
              question: "Jobs era mais inteligente que Wozniak?",
              answer:
                "Perfis diferentes: Wozniak, engenharia profunda; Jobs, produto e negócios. Comparar QI numérico entre eles é especulação.",
            },
            {
              question: "Dá para ser Jobs com QI 110?",
              answer:
                "Sucesso em tecnologia mistura persistência, rede, mercado e sorte — QI acima da média ajuda, mas não é suficiente.",
            },
            {
              question: "Como descobrir meu QI de verdade?",
              answer:
                "Teste padronizado com profissional ou triagem online como ponto de partida — veja teste para adultos.",
            },
          ]}
        />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra seu QI</h3>
          <p className="text-muted-foreground mb-6">Teste gratuito — resultado em minutos.</p>
          <Button size="lg" className="gap-2" onClick={() => navigate("/teste")}>
            Fazer o Teste <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Continue Lendo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("qi-steve-jobs", 3).map((article) => (
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

export default QISteveJobs;
