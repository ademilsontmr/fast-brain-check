import { Brain, ArrowRight, BookOpen, Clock, Flame, Lightbulb, Target, Shield } from "lucide-react";
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

const ComoBombeirosMelhoramQI = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/como-bombeiros-melhoram-qi";
  const articleTitle = "Como Bombeiros Podem Melhorar o QI: Cognição e Emergências";
  const articleDescription = "Estratégias para bombeiros aprimorarem capacidades cognitivas essenciais para tomada de decisão rápida em situações de emergência.";
  
  useSEO({ title: "Como Bombeiros Melhoram QI", description: articleDescription, url: articleUrl, keywords: "bombeiros QI, profissão bombeiro inteligência, QI médio bombeiros, melhorar QI bombeiro, inteligência bombeiros, raciocínio rápido emergências, bombeiros inteligentes, QI profissionais segurança, carreira bombeiro QI, desenvolver QI bombeiro" });
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
          <Link to="/blog" className="hover:text-primary">Blog</Link><span className="mx-2">/</span><span>Como Bombeiros Melhoram QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8"><time>Janeiro 2024</time><span>•</span><span>8 min de leitura</span></div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center"><Flame className="w-24 h-24 text-primary" /></div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">Bombeiros precisam de capacidades cognitivas excepcionais: tomada de decisão rápida, avaliação de riscos e coordenação sob pressão. Descubra como aprimorar essas habilidades essenciais.</p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Habilidades Cognitivas Críticas</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Brain className="w-5 h-5 text-primary" />Competências Essenciais</h3>
            <ul className="space-y-2">
              <li>• <strong>Tomada de decisão rápida:</strong> Avaliar situações em segundos</li>
              <li>• <strong>Consciência situacional:</strong> Perceber múltiplos fatores simultaneamente</li>
              <li>• <strong>Memória de trabalho:</strong> Reter informações críticas sob pressão</li>
              <li>• <strong>Controle emocional:</strong> Manter calma em emergências</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estratégias de Desenvolvimento</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6"><Shield className="w-8 h-8 text-red-500 mb-4" /><h3 className="text-lg font-bold mb-2">Simulações</h3><p className="text-sm">Treinamentos realistas desenvolvem respostas automáticas e tomada de decisão.</p></Card>
            <Card className="p-6"><Target className="w-8 h-8 text-green-500 mb-4" /><h3 className="text-lg font-bold mb-2">Exercício Físico</h3><p className="text-sm">Condicionamento físico melhora função cognitiva e resistência ao estresse.</p></Card>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Treinamento Cognitivo</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <ul className="space-y-3">
              <li><strong>Jogos de estratégia:</strong> Desenvolvem pensamento tático</li>
              <li><strong>Exercícios de memória:</strong> Fortalecem retenção de informações</li>
              <li><strong>Meditação:</strong> Melhora foco e controle emocional</li>
              <li><strong>Visualização:</strong> Preparação mental para cenários</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estilo de Vida</h2>
          <ul className="mb-4">
            <li>• Sono de qualidade (recuperação cognitiva)</li>
            <li>• Alimentação balanceada</li>
            <li>• Hidratação adequada</li>
            <li>• Gerenciamento do estresse pós-traumático</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">Bombeiros podem aprimorar suas capacidades cognitivas através de treinamento específico, exercício físico e hábitos saudáveis. Essas melhorias se traduzem em melhor desempenho em situações de emergência.</p>
        </div>
        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "Formação de bombeiros exige QI alto?",
                    "answer": "QI 110+ facilita graduação. Áreas mais complexas da profissão podem exigir QI 120+. Esforço compensa QI médio."
          },
          {
                    "question": "bombeiros têm QI verbal ou matemático mais alto?",
                    "answer": "Depende da especialização. Áreas técnicas favorecem QI matemático (120+). Áreas de atendimento valorizam QI verbal (115+)."
          },
          {
                    "question": "Trabalhar como bombeiro estimula cérebro?",
                    "answer": "Sim. Resolução constante de problemas, aprendizado de novas técnicas e tomada de decisões promovem neuroplasticidade."
          },
          {
                    "question": "bombeiros aposentados mantêm QI alto?",
                    "answer": "Sim, se mantiverem atividade mental. Leitura, cursos e hobbies cognitivos preservam QI. Inatividade pode reduzir 5-10 pontos."
          },
          {
                    "question": "Estresse da profissão afeta QI de bombeiros?",
                    "answer": "Sim. Estresse crônico pode reduzir QI em 5-10 pontos. Gerenciamento de estresse e equilíbrio vida-trabalho são essenciais."
          }
]} />


        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">Teste suas habilidades cognitivas em apenas 3 minutos.</p>
          <Link to="/teste"><Button size="lg" className="gap-2">Fazer o Teste de QI<ArrowRight className="w-5 h-5" /></Button></Link>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6"><BookOpen className="w-6 h-6 text-primary" /><h2 className="text-2xl md:text-3xl font-bold">Continue Lendo</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("como-bombeiros-melhoram-qi", 3).map((article) => (
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

export default ComoBombeirosMelhoramQI;
