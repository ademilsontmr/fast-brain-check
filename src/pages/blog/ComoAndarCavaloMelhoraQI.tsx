import { Brain, ArrowRight, BookOpen, Clock, Heart, Lightbulb, Target, Zap } from "lucide-react";
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

const ComoAndarCavaloMelhoraQI = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/como-andar-cavalo-melhora-qi";
  const articleTitle = "Como Andar a Cavalo Melhora o QI: Benefícios da Equitação";
  const articleDescription = "Descubra como a equitação pode melhorar capacidades cognitivas, coordenação e inteligência através de mecanismos neurológicos únicos.";
  
  useSEO({ title: "Como Andar a Cavalo Melhora QI", description: articleDescription, url: articleUrl, keywords: "andar cavalo QI, equitação inteligência, cavalo melhora cérebro, hipoterapia QI, benefícios equitação mente, andar cavalo cognição, equitação desenvolvimento cognitivo, cavalo inteligência, hipismo QI, equitação cérebro" });
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
          <Link to="/blog" className="hover:text-primary">Blog</Link><span className="mx-2">/</span><span>Como Andar a Cavalo Melhora QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8"><time>Janeiro 2024</time><span>•</span><span>8 min de leitura</span></div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center"><Heart className="w-24 h-24 text-primary" /></div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">A equitação é uma atividade única que combina exercício físico, conexão com animais e desafios cognitivos. Pesquisas mostram benefícios surpreendentes para o cérebro.</p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Mecanismos Neurológicos</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Brain className="w-5 h-5 text-primary" />Como a Equitação Afeta o Cérebro</h3>
            <ul className="space-y-2">
              <li>• <strong>Vibração rítmica:</strong> Movimentos do cavalo estimulam sistema nervoso</li>
              <li>• <strong>Equilíbrio:</strong> Ativa cerebelo e áreas de coordenação</li>
              <li>• <strong>Atenção dividida:</strong> Controlar cavalo e ambiente simultaneamente</li>
              <li>• <strong>Conexão emocional:</strong> Interação com animal reduz estresse</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Benefícios Cognitivos</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6"><Zap className="w-8 h-8 text-yellow-500 mb-4" /><h3 className="text-lg font-bold mb-2">Coordenação</h3><p className="text-sm">Melhora coordenação motora fina e grossa, integrando múltiplas áreas cerebrais.</p></Card>
            <Card className="p-6"><Target className="w-8 h-8 text-green-500 mb-4" /><h3 className="text-lg font-bold mb-2">Concentração</h3><p className="text-sm">Exige atenção constante, desenvolvendo foco e consciência situacional.</p></Card>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estudos Científicos</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <ul className="space-y-3">
              <li><strong>Universidade de Tóquio (2017):</strong> Crianças que praticam equitação mostraram melhora em memória e resolução de problemas</li>
              <li><strong>Equoterapia:</strong> Usada terapeuticamente para crianças com dificuldades de aprendizagem</li>
              <li><strong>Estudos de neuroimagem:</strong> Mostram ativação de múltiplas áreas cerebrais durante equitação</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Benefícios Adicionais</h2>
          <ul className="mb-4">
            <li>• Redução de ansiedade e estresse</li>
            <li>• Melhora da autoconfiança</li>
            <li>• Desenvolvimento de responsabilidade</li>
            <li>• Conexão com a natureza</li>
            <li>• Exercício físico completo</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">A equitação oferece benefícios cognitivos únicos através da combinação de exercício físico, desafios mentais e conexão emocional com o animal. É uma atividade que estimula o cérebro de formas que poucas outras conseguem.</p>
        </div>
        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "Como este tema se relaciona com inteligência?",
                    "answer": "Este tema está diretamente relacionado ao desenvolvimento cognitivo e expressão da inteligência. Compreender esses conceitos ajuda a maximizar potencial."
          },
          {
                    "question": "Posso aplicar isso na prática?",
                    "answer": "Sim. As estratégias apresentadas são baseadas em evidências científicas e podem ser implementadas imediatamente com resultados mensuráveis."
          },
          {
                    "question": "Quanto tempo para ver resultados?",
                    "answer": "Resultados iniciais em 30-60 dias com prática consistente. Melhorias significativas em 6-12 meses de aplicação sustentada."
          },
          {
                    "question": "Funciona para todas as idades?",
                    "answer": "Sim. Embora potencial varie com idade, princípios funcionam para crianças, adultos e idosos com adaptações apropriadas."
          },
          {
                    "question": "Como medir meu progresso?",
                    "answer": "Faça teste de QI inicial, implemente estratégias por 6 meses, refaça teste. Também monitore desempenho em trabalho/estudos."
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
            {getRelatedArticles("como-andar-cavalo-melhora-qi", 3).map((article) => (
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

export default ComoAndarCavaloMelhoraQI;
