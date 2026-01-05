import { Brain, ArrowRight, BookOpen, Clock, Bike, Heart, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";

const ComoPedalMelhoraQI = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/como-pedal-melhora-qi";
  const articleTitle = "Como o Pedal Melhora o QI: Benefícios Cognitivos do Ciclismo";
  const articleDescription = "Descubra como pedalar regularmente pode melhorar sua inteligência, memória e função cognitiva através de mecanismos neurológicos comprovados.";
  
  useSEO({ title: "Como Pedal Melhora QI", description: articleDescription, url: articleUrl });
  useStructuredData([
    { "@context": "https://schema.org", "@type": "Article", "headline": articleTitle, "description": articleDescription, "image": "https://bomqi.com.br/favicon-brain-icon.png", "datePublished": "2024-01-15", "dateModified": "2024-01-15", "author": { "@type": "Organization", "name": "BomQI" }, "publisher": { "@type": "Organization", "name": "BomQI", "logo": { "@type": "ImageObject", "url": "https://bomqi.com.br/favicon-brain-icon.png" } } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bomqi.com.br" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://bomqi.com.br/blog" }, { "@type": "ListItem", "position": 3, "name": articleTitle, "item": articleUrl }] }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity"><Brain className="w-8 h-8 text-primary" /><span className="text-2xl font-bold">BomQI</span></Link>
            <Button onClick={() => navigate("/teste")} size="lg">Fazer o Teste</Button>
          </div>
        </div>
      </header>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link><span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link><span className="mx-2">/</span><span>Como Pedal Melhora QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8"><time>Janeiro 2024</time><span>•</span><span>8 min de leitura</span></div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center"><Bike className="w-24 h-24 text-primary" /></div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">O ciclismo é uma das atividades físicas mais completas para o cérebro. Pedalar regularmente não apenas melhora a saúde cardiovascular, mas também potencializa significativamente as funções cognitivas.</p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Mecanismos Neurológicos</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Brain className="w-5 h-5 text-primary" />Como o Pedal Afeta o Cérebro</h3>
            <ul className="space-y-2">
              <li>• <strong>BDNF:</strong> Aumenta produção do "fertilizante" cerebral</li>
              <li>• <strong>Fluxo sanguíneo:</strong> Mais oxigênio e nutrientes para neurônios</li>
              <li>• <strong>Neurogênese:</strong> Estimula criação de novos neurônios</li>
              <li>• <strong>Endorfinas:</strong> Melhora humor e reduz estresse</li>
              <li>• <strong>Coordenação:</strong> Ativa múltiplas áreas cerebrais</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Benefícios Cognitivos</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6"><Zap className="w-8 h-8 text-yellow-500 mb-4" /><h3 className="text-lg font-bold mb-2">Memória</h3><p className="text-sm">Ciclismo regular aumenta o volume do hipocampo, região crucial para memória.</p></Card>
            <Card className="p-6"><Target className="w-8 h-8 text-green-500 mb-4" /><h3 className="text-lg font-bold mb-2">Concentração</h3><p className="text-sm">Melhora atenção sustentada e capacidade de foco por períodos prolongados.</p></Card>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Protocolo Ideal</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <ul className="space-y-3">
              <li><strong>Frequência:</strong> 3-5 vezes por semana</li>
              <li><strong>Duração:</strong> 30-60 minutos por sessão</li>
              <li><strong>Intensidade:</strong> Moderada (conseguir conversar)</li>
              <li><strong>Variação:</strong> Alternar entre pedal leve e intenso</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Pedal Indoor vs Outdoor</h2>
          <p className="mb-4">Ambos oferecem benefícios, mas o ciclismo outdoor adiciona:</p>
          <ul className="mb-4">
            <li>• Estímulo visual variado</li>
            <li>• Tomada de decisão constante</li>
            <li>• Exposição à natureza</li>
            <li>• Maior engajamento cognitivo</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">O pedal é uma forma acessível e prazerosa de melhorar a função cognitiva. Seja na bike ergométrica ou nas ruas, pedalar regularmente traz benefícios comprovados para o cérebro e a inteligência.</p>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">Teste suas habilidades cognitivas em apenas 3 minutos.</p>
          <Link to="/teste"><Button size="lg" className="gap-2">Fazer o Teste de QI<ArrowRight className="w-5 h-5" /></Button></Link>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6"><BookOpen className="w-6 h-6 text-primary" /><h2 className="text-2xl md:text-3xl font-bold">Continue Lendo</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("como-pedal-melhora-qi", 3).map((article) => (
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

export default ComoPedalMelhoraQI;
