import { Brain, ArrowRight, BookOpen, Clock, Heart, Lightbulb, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";

const ComoIdososMelhoramQI = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/como-idosos-melhoram-qi";
  const articleTitle = "Como Idosos Podem Melhorar o QI: Mantendo a Mente Afiada";
  const articleDescription = "Estratégias comprovadas para idosos manterem e melhorarem suas capacidades cognitivas, prevenindo declínio mental e demência.";
  
  useSEO({ title: "Como Idosos Melhoram QI", description: articleDescription, url: articleUrl, keywords: "idosos QI, terceira idade inteligência, melhorar QI idoso, envelhecimento cognitivo, idosos cérebro, QI terceira idade, cognição idosos, envelhecimento saudável mente, idosos inteligentes, QI na velhice" });
  useStructuredData([
    { "@context": "https://schema.org", "@type": "Article", "headline": articleTitle, "description": articleDescription, "image": "https://bomqi.com.br/favicon-brain-icon.png", "datePublished": "2024-01-15", "dateModified": "2024-01-15", "author": { "@type": "Organization", "name": "BomQI" }, "publisher": { "@type": "Organization", "name": "BomQI", "logo": { "@type": "ImageObject", "url": "https://bomqi.com.br/favicon-brain-icon.png" } } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bomqi.com.br" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://bomqi.com.br/blog" }, { "@type": "ListItem", "position": 3, "name": articleTitle, "item": articleUrl }] }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link><span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link><span className="mx-2">/</span><span>Como Idosos Melhoram QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8"><time>Janeiro 2024</time><span>•</span><span>10 min de leitura</span></div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center"><Heart className="w-24 h-24 text-primary" /></div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">Nunca é tarde para melhorar a função cognitiva. Pesquisas mostram que idosos podem não apenas manter, mas também aprimorar suas capacidades mentais com as estratégias certas.</p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Neuroplasticidade na Terceira Idade</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Brain className="w-5 h-5 text-primary" />O Cérebro Continua Adaptável</h3>
            <ul className="space-y-2">
              <li>• O cérebro mantém capacidade de formar novas conexões</li>
              <li>• Experiência e sabedoria compensam velocidade</li>
              <li>• Estimulação adequada previne declínio</li>
              <li>• Reserva cognitiva protege contra demência</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Atividades Recomendadas</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6"><Lightbulb className="w-8 h-8 text-yellow-500 mb-4" /><h3 className="text-lg font-bold mb-2">Aprender Coisas Novas</h3><p className="text-sm">Idiomas, instrumentos, tecnologia - novos aprendizados criam conexões neurais.</p></Card>
            <Card className="p-6"><Users className="w-8 h-8 text-blue-500 mb-4" /><h3 className="text-lg font-bold mb-2">Socialização</h3><p className="text-sm">Interações sociais estimulam múltiplas áreas cerebrais e previnem isolamento.</p></Card>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Exercícios Cognitivos</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <ul className="space-y-3">
              <li><strong>Palavras cruzadas e Sudoku:</strong> Mantêm raciocínio ativo</li>
              <li><strong>Jogos de cartas:</strong> Estimulam memória e estratégia</li>
              <li><strong>Leitura:</strong> Expande vocabulário e compreensão</li>
              <li><strong>Quebra-cabeças:</strong> Desenvolvem habilidades visuais-espaciais</li>
              <li><strong>Jogos de memória:</strong> Fortalecem recordação</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estilo de Vida</h2>
          <ul className="mb-4">
            <li>• <strong>Exercício físico:</strong> Caminhada, natação, yoga</li>
            <li>• <strong>Alimentação:</strong> Dieta mediterrânea, ômega-3</li>
            <li>• <strong>Sono:</strong> 7-8 horas de qualidade</li>
            <li>• <strong>Hidratação:</strong> Água suficiente</li>
            <li>• <strong>Controle de doenças:</strong> Diabetes, pressão, colesterol</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Prevenção de Demência</h2>
          <p className="mb-4">Estudos mostram que estilo de vida ativo pode reduzir risco de demência em até 40%. Fatores protetores incluem:</p>
          <ul className="mb-4">
            <li>• Atividade física regular</li>
            <li>• Estimulação cognitiva contínua</li>
            <li>• Vida social ativa</li>
            <li>• Controle de fatores de risco cardiovascular</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">Idosos podem manter e até melhorar suas capacidades cognitivas com atividades estimulantes, exercício físico, alimentação saudável e vida social ativa. O segredo é manter o cérebro desafiado e engajado.</p>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">Teste suas habilidades cognitivas em apenas 3 minutos.</p>
          <Link to="/teste"><Button size="lg" className="gap-2">Fazer o Teste de QI<ArrowRight className="w-5 h-5" /></Button></Link>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6"><BookOpen className="w-6 h-6 text-primary" /><h2 className="text-2xl md:text-3xl font-bold">Continue Lendo</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("como-idosos-melhoram-qi", 3).map((article) => (
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

export default ComoIdososMelhoramQI;
