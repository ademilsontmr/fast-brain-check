import { Brain, ArrowRight, BookOpen } from "lucide-react";
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

const NeurocienciaRiquezaQIPatrimonio = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/neurociencia-riqueza-qi-patrimonio";
  const articleTitle = "Neurociência, Riqueza e QI: Como o Cérebro Influencia o Patrimônio";
  const articleDescription =
    "Descubra como o cérebro de pessoas bem-sucedidas funciona e a relação entre QI, hábitos cognitivos e construção de patrimônio.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "neurociencia-riqueza-qi-patrimonio",
      publishDate: "2026-01-15",
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
          <span>Neurociência e Riqueza</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>15 de Janeiro de 2026</time>
          <span>•</span>
          <span>8 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-emerald-500/20 to-teal-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Brain className="w-24 h-24 text-emerald-600" />
        </div>
        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            A relação entre <strong>QI, neurociência e riqueza</strong> é mais complexa do que parece. QI alto pode facilitar aprendizado e resolução de problemas, mas patrimônio depende também de disciplina, risco calculado e hábitos cognitivos ao longo do tempo.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-6">O que a neurociência diz</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Função executiva (planejamento, foco) correlaciona com decisões financeiras</li>
            <li>Controle de impulsos reduz gastos e melhora investimentos</li>
            <li>QI isolado não explica renda — educação e contexto importam muito</li>
            <li>Neuroplasticidade permite treinar hábitos que sustentam riqueza</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Veja também{" "}
            <Link to="/blog/como-ficar-rico-relacao-qi" className="text-primary hover:underline">como ficar rico e relação com QI</Link> e{" "}
            <Link to="/blog/dopamina-decisao-sucesso-financeiro" className="text-primary hover:underline">dopamina e decisão financeira</Link>.
          </p>
        </div>
        <ArticleFAQ faqs={[
          { question: "QI alto garante riqueza?", answer: "Não. QI pode ajudar em aprendizado e análise, mas patrimônio depende de hábitos, oportunidades e comportamento financeiro." },
          { question: "O cérebro de ricos é diferente?", answer: "Estudos mostram diferenças em áreas ligadas a controle de impulso e planejamento, mas isso também pode ser treinado." },
          { question: "Como medir meu QI?", answer: "Faça um teste online estruturado ou avaliação com psicólogo para estimativa mais precisa." },
        ]} />
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra seu QI</h3>
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
            {getRelatedArticles("neurociencia-riqueza-qi-patrimonio", 3).map((article) => (
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

export default NeurocienciaRiquezaQIPatrimonio;
