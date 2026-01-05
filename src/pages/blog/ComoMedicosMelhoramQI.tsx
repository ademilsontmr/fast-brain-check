import { Brain, ArrowRight, BookOpen, Clock, Stethoscope, Lightbulb, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";

const ComoMedicosMelhoramQI = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/como-medicos-melhoram-qi";
  const articleTitle = "Como Médicos Podem Melhorar o QI: Cognição na Medicina";
  const articleDescription = "Estratégias para médicos aprimorarem capacidades cognitivas essenciais para diagnóstico, tomada de decisão e atualização profissional.";
  
  useSEO({ title: "Como Médicos Melhoram QI", description: articleDescription, url: articleUrl });
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
          <Link to="/blog" className="hover:text-primary">Blog</Link><span className="mx-2">/</span><span>Como Médicos Melhoram QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8"><time>Janeiro 2024</time><span>•</span><span>9 min de leitura</span></div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center"><Stethoscope className="w-24 h-24 text-primary" /></div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">A medicina exige capacidades cognitivas excepcionais: raciocínio diagnóstico, memória vasta, tomada de decisão sob pressão. Descubra como médicos podem aprimorar essas habilidades.</p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Habilidades Cognitivas na Medicina</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Brain className="w-5 h-5 text-primary" />Competências Essenciais</h3>
            <ul className="space-y-2">
              <li>• <strong>Raciocínio diagnóstico:</strong> Integrar sintomas e dados</li>
              <li>• <strong>Memória:</strong> Reter vasto conhecimento médico</li>
              <li>• <strong>Tomada de decisão:</strong> Escolher tratamentos sob pressão</li>
              <li>• <strong>Atualização:</strong> Absorver novos conhecimentos constantemente</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estratégias de Desenvolvimento</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6"><Lightbulb className="w-8 h-8 text-yellow-500 mb-4" /><h3 className="text-lg font-bold mb-2">Educação Continuada</h3><p className="text-sm">Cursos, congressos e leitura de artigos mantêm o cérebro ativo e atualizado.</p></Card>
            <Card className="p-6"><Target className="w-8 h-8 text-green-500 mb-4" /><h3 className="text-lg font-bold mb-2">Casos Clínicos</h3><p className="text-sm">Discussão de casos complexos desenvolve raciocínio diagnóstico.</p></Card>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Técnicas de Memorização</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <ul className="space-y-3">
              <li><strong>Mnemônicos:</strong> Criar associações para lembrar informações</li>
              <li><strong>Repetição espaçada:</strong> Revisar conhecimentos em intervalos</li>
              <li><strong>Ensinar:</strong> Explicar para colegas consolida aprendizado</li>
              <li><strong>Mapas mentais:</strong> Visualizar conexões entre conceitos</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Cuidando da Saúde Cognitiva</h2>
          <ul className="mb-4">
            <li>• Gerenciar estresse e burnout</li>
            <li>• Sono de qualidade (mesmo em plantões)</li>
            <li>• Exercício físico regular</li>
            <li>• Alimentação equilibrada</li>
            <li>• Pausas durante o trabalho</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">Médicos podem manter e aprimorar suas capacidades cognitivas através de educação continuada, técnicas de memorização e cuidados com a saúde. O investimento cognitivo se traduz em melhor cuidado aos pacientes.</p>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">Teste suas habilidades cognitivas em apenas 3 minutos.</p>
          <Link to="/teste"><Button size="lg" className="gap-2">Fazer o Teste de QI<ArrowRight className="w-5 h-5" /></Button></Link>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6"><BookOpen className="w-6 h-6 text-primary" /><h2 className="text-2xl md:text-3xl font-bold">Continue Lendo</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("como-medicos-melhoram-qi", 3).map((article) => (
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

export default ComoMedicosMelhoramQI;
