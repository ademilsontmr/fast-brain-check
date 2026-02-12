import { Brain, ArrowRight, BookOpen, Clock, Users, Lightbulb, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";

const ComoJovensMelhoramQI = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/como-jovens-melhoram-qi";
  const articleTitle = "Como Jovens Podem Melhorar o QI: Guia Completo";
  const articleDescription = "Estratégias comprovadas para jovens desenvolverem suas capacidades cognitivas, memória e inteligência durante a fase de maior plasticidade cerebral.";
  
  useSEO({ title: "Como Jovens Melhoram QI", description: articleDescription, url: articleUrl, keywords: "jovens QI, adolescentes inteligência, melhorar QI jovem, juventude desenvolvimento cognitivo, jovens cérebro, QI adolescência, cognição jovens, desenvolver QI juventude, jovens inteligentes, QI na juventude" });
  useStructuredData([
    { "@context": "https://schema.org", "@type": "Article", "headline": articleTitle, "description": articleDescription, "image": "https://bomqi.com.br/favicon-brain-icon.png", "datePublished": "2024-01-15", "dateModified": "2024-01-15", "author": { "@type": "Organization", "name": "Equipe Bom QI" }, "publisher": { "@type": "Organization", "name": "Equipe Bom QI", "logo": { "@type": "ImageObject", "url": "https://bomqi.com.br/favicon-brain-icon.png" } } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bomqi.com.br" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://bomqi.com.br/blog" }, { "@type": "ListItem", "position": 3, "name": articleTitle, "item": articleUrl }] }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link><span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link><span className="mx-2">/</span><span>Como Jovens Melhoram QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8"><time>Janeiro 2024</time><span>•</span><span>9 min de leitura</span></div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center"><Users className="w-24 h-24 text-primary" /></div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">A juventude é o período ideal para desenvolver capacidades cognitivas. O cérebro jovem possui alta plasticidade, permitindo ganhos significativos em inteligência com as estratégias certas.</p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por Que a Juventude é Crucial</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Brain className="w-5 h-5 text-primary" />Vantagens do Cérebro Jovem</h3>
            <ul className="space-y-2">
              <li>• <strong>Alta neuroplasticidade:</strong> Facilidade para formar novas conexões</li>
              <li>• <strong>Aprendizado rápido:</strong> Absorção mais eficiente de informações</li>
              <li>• <strong>Energia:</strong> Capacidade para atividades intensas</li>
              <li>• <strong>Tempo:</strong> Oportunidade para desenvolver hábitos duradouros</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estratégias Eficazes</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6"><Zap className="w-8 h-8 text-yellow-500 mb-4" /><h3 className="text-lg font-bold mb-2">Aprender Idiomas</h3><p className="text-sm">Bilinguismo aumenta flexibilidade cognitiva e memória. Quanto mais cedo, melhor.</p></Card>
            <Card className="p-6"><Target className="w-8 h-8 text-green-500 mb-4" /><h3 className="text-lg font-bold mb-2">Música</h3><p className="text-sm">Tocar instrumento desenvolve múltiplas áreas cerebrais simultaneamente.</p></Card>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Atividades Recomendadas</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <ul className="space-y-3">
              <li><strong>Esportes:</strong> Exercício físico aumenta BDNF e melhora cognição</li>
              <li><strong>Leitura:</strong> Expande vocabulário e compreensão</li>
              <li><strong>Jogos de estratégia:</strong> Xadrez, puzzles, jogos de lógica</li>
              <li><strong>Programação:</strong> Desenvolve pensamento lógico</li>
              <li><strong>Artes:</strong> Estimula criatividade e pensamento visual</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Hábitos Essenciais</h2>
          <ul className="mb-4">
            <li>• <strong>Sono:</strong> 8-10 horas para consolidação de memória</li>
            <li>• <strong>Alimentação:</strong> Rica em ômega-3, frutas e vegetais</li>
            <li>• <strong>Limitar telas:</strong> Uso consciente de redes sociais</li>
            <li>• <strong>Socialização:</strong> Interações sociais estimulam o cérebro</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">Jovens têm uma janela de oportunidade única para desenvolver suas capacidades cognitivas. Investir em atividades estimulantes, hábitos saudáveis e aprendizado contínuo pode ter impacto duradouro no QI e sucesso futuro.</p>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">Teste suas habilidades cognitivas em apenas 3 minutos.</p>
          <Link to="/teste"><Button size="lg" className="gap-2">Fazer o Teste de QI<ArrowRight className="w-5 h-5" /></Button></Link>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6"><BookOpen className="w-6 h-6 text-primary" /><h2 className="text-2xl md:text-3xl font-bold">Continue Lendo</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("como-jovens-melhoram-qi", 3).map((article) => (
              <Card key={article.slug} className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 group cursor-pointer">
                <Link to={`/blog/${article.slug}`} className="block">
                  <div className="flex items-center gap-2 mb-3"><span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">{article.category}</span><div className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" /></div></div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.description}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">Ler artigo<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
        <section className="mt-16"><div className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold mb-4">O que as pessoas estão dizendo</h2></div><SocialProofCarousel /></section>
      </article>
      <Footer />
    </div>
  );
};

export default ComoJovensMelhoramQI;
