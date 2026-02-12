import { Brain, ArrowRight, BookOpen, Clock, GraduationCap, Lightbulb, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";

const ComoMelhorarQIEstudantes = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/como-melhorar-qi-estudantes";
  const articleTitle = "Como Estudantes Podem Melhorar o QI: Guia Completo";
  const articleDescription = "Descubra estratégias comprovadas para estudantes melhorarem suas capacidades cognitivas, memória e desempenho acadêmico.";
  const publishDate = "2024-01-15";
  const modifiedDate = "2024-01-15";
  
  useSEO({ title: "Como Melhorar QI - Estudantes", description: articleDescription, url: articleUrl });

  useStructuredData([
    { "@context": "https://schema.org", "@type": "Article", "headline": articleTitle, "description": articleDescription, "image": "https://bomqi.com.br/favicon-brain-icon.png", "datePublished": publishDate, "dateModified": modifiedDate, "author": { "@type": "Organization", "name": "BomQI" }, "publisher": { "@type": "Organization", "name": "BomQI", "logo": { "@type": "ImageObject", "url": "https://bomqi.com.br/favicon-brain-icon.png" } } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bomqi.com.br" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://bomqi.com.br/blog" }, { "@type": "ListItem", "position": 3, "name": articleTitle, "item": articleUrl }] }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link><span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link><span className="mx-2">/</span>
          <span>Como Estudantes Melhoram QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2024</time><span>•</span><span>10 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <GraduationCap className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Estudantes têm uma oportunidade única de desenvolver suas capacidades cognitivas. 
            O cérebro jovem é altamente plástico, o que significa que as estratégias certas 
            podem ter impacto significativo no QI e desempenho acadêmico.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Técnicas de Estudo que Aumentam o QI</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              Métodos Comprovados
            </h3>
            <ul className="space-y-2">
              <li>• <strong>Repetição espaçada:</strong> Revisar material em intervalos crescentes</li>
              <li>• <strong>Prática de recuperação:</strong> Testar-se em vez de apenas reler</li>
              <li>• <strong>Elaboração:</strong> Explicar conceitos com suas próprias palavras</li>
              <li>• <strong>Intercalação:</strong> Alternar entre diferentes tópicos</li>
              <li>• <strong>Mapas mentais:</strong> Visualizar conexões entre conceitos</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Hábitos Diários</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <Zap className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Sono de Qualidade</h3>
              <p className="text-sm">8-10 horas para adolescentes. O sono consolida memórias e restaura funções cognitivas.</p>
            </Card>
            <Card className="p-6">
              <Target className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Exercício Regular</h3>
              <p className="text-sm">30-60 minutos diários aumentam BDNF e melhoram concentração e memória.</p>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Alimentação para o Cérebro</h2>
          <ul className="mb-4">
            <li>• Peixes ricos em ômega-3 (salmão, sardinha)</li>
            <li>• Frutas vermelhas (antioxidantes)</li>
            <li>• Nozes e sementes</li>
            <li>• Vegetais de folhas verdes</li>
            <li>• Água suficiente (desidratação afeta cognição)</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Atividades que Estimulam o Cérebro</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <ul className="space-y-3">
              <li><strong>Aprender um instrumento:</strong> Desenvolve múltiplas áreas cerebrais</li>
              <li><strong>Aprender idiomas:</strong> Aumenta flexibilidade cognitiva</li>
              <li><strong>Xadrez e jogos de estratégia:</strong> Melhora raciocínio lógico</li>
              <li><strong>Leitura diversificada:</strong> Expande vocabulário e compreensão</li>
              <li><strong>Programação:</strong> Desenvolve pensamento lógico e resolução de problemas</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Gerenciamento do Tempo</h2>
          <p className="mb-4">Estudantes eficientes usam técnicas como:</p>
          <ul className="mb-4">
            <li>• Técnica Pomodoro (25 min foco + 5 min pausa)</li>
            <li>• Blocos de tempo para diferentes matérias</li>
            <li>• Priorização de tarefas difíceis pela manhã</li>
            <li>• Eliminação de distrações digitais durante estudo</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            Estudantes podem significativamente melhorar suas capacidades cognitivas através de 
            técnicas de estudo eficazes, hábitos saudáveis e atividades estimulantes. A chave 
            é consistência e paciência - o cérebro se desenvolve gradualmente.
          </p>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">Teste suas habilidades cognitivas em apenas 3 minutos.</p>
          <Link to="/teste"><Button size="lg" className="gap-2">Fazer o Teste de QI<ArrowRight className="w-5 h-5" /></Button></Link>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6"><BookOpen className="w-6 h-6 text-primary" /><h2 className="text-2xl md:text-3xl font-bold">Continue Lendo</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("como-melhorar-qi-estudantes", 3).map((article) => (
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

export default ComoMelhorarQIEstudantes;
