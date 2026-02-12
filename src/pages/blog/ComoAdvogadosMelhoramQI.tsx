import { Brain, ArrowRight, BookOpen, Clock, Scale, Lightbulb, Target, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";

const ComoAdvogadosMelhoramQI = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/como-advogados-melhoram-qi";
  const articleTitle = "Como Advogados Podem Melhorar o QI: Estratégias Cognitivas";
  const articleDescription = "Descubra como advogados podem aprimorar suas capacidades cognitivas, raciocínio lógico e memória para melhor desempenho profissional.";
  const publishDate = "2024-01-15";
  const modifiedDate = "2024-01-15";
  
  useSEO({ title: "Como Advogados Melhoram QI", description: articleDescription, url: articleUrl, keywords: "advogados QI, profissão advogado inteligência, QI médio advogados, melhorar QI advocacia, inteligência jurídica, raciocínio lógico direito, advogados inteligentes, QI profissionais direito, carreira jurídica QI, desenvolver QI advogado" });

  useStructuredData([
    { "@context": "https://schema.org", "@type": "Article", "headline": articleTitle, "description": articleDescription, "image": "https://bomqi.com.br/favicon-brain-icon.png", "datePublished": publishDate, "dateModified": modifiedDate, "author": { "@type": "Organization", "name": "Equipe Bom QI" }, "publisher": { "@type": "Organization", "name": "Equipe Bom QI", "logo": { "@type": "ImageObject", "url": "https://bomqi.com.br/favicon-brain-icon.png" } } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bomqi.com.br" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://bomqi.com.br/blog" }, { "@type": "ListItem", "position": 3, "name": articleTitle, "item": articleUrl }] }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link><span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link><span className="mx-2">/</span>
          <span>Como Advogados Melhoram QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2024</time><span>•</span><span>9 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Scale className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            A advocacia exige habilidades cognitivas excepcionais: raciocínio lógico, memória, 
            argumentação e análise crítica. Descubra como advogados podem aprimorar essas 
            capacidades para se destacar na profissão.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Habilidades Cognitivas Essenciais</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Competências-Chave
            </h3>
            <ul className="space-y-2">
              <li>• <strong>Raciocínio lógico:</strong> Construir argumentos sólidos</li>
              <li>• <strong>Memória de trabalho:</strong> Reter múltiplas informações simultaneamente</li>
              <li>• <strong>Compreensão verbal:</strong> Interpretar textos complexos</li>
              <li>• <strong>Pensamento crítico:</strong> Avaliar evidências e argumentos</li>
              <li>• <strong>Velocidade de processamento:</strong> Responder rapidamente em audiências</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estratégias de Desenvolvimento</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <FileText className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Leitura Diversificada</h3>
              <p className="text-sm">Ler além do Direito: filosofia, lógica, história. Expande perspectivas e vocabulário.</p>
            </Card>
            <Card className="p-6">
              <Target className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Debates e Discussões</h3>
              <p className="text-sm">Participar de debates estruturados aguça argumentação e pensamento rápido.</p>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Técnicas de Memorização</h2>
          <ul className="mb-4">
            <li>• <strong>Palácio da memória:</strong> Associar informações a locais mentais</li>
            <li>• <strong>Mapas mentais:</strong> Visualizar conexões entre conceitos jurídicos</li>
            <li>• <strong>Repetição espaçada:</strong> Revisar legislação em intervalos</li>
            <li>• <strong>Ensinar outros:</strong> Explicar conceitos consolida conhecimento</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Exercícios Cognitivos</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <ul className="space-y-3">
              <li><strong>Xadrez:</strong> Desenvolve pensamento estratégico e antecipação</li>
              <li><strong>Sudoku e lógica:</strong> Melhora raciocínio dedutivo</li>
              <li><strong>Escrita argumentativa:</strong> Praticar redação de peças</li>
              <li><strong>Simulações de júri:</strong> Treinar argumentação oral</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estilo de Vida</h2>
          <p className="mb-4">Hábitos que potencializam a cognição:</p>
          <ul className="mb-4">
            <li>• Sono de qualidade (7-8 horas)</li>
            <li>• Exercício físico regular</li>
            <li>• Alimentação rica em ômega-3</li>
            <li>• Gerenciamento do estresse</li>
            <li>• Pausas durante trabalho intenso</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            Advogados podem significativamente aprimorar suas capacidades cognitivas através de 
            práticas deliberadas, exercícios mentais e hábitos saudáveis. O investimento no 
            desenvolvimento cognitivo se traduz em melhor desempenho profissional.
          </p>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">Avalie suas habilidades cognitivas em apenas 3 minutos.</p>
          <Link to="/teste"><Button size="lg" className="gap-2">Fazer o Teste de QI<ArrowRight className="w-5 h-5" /></Button></Link>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6"><BookOpen className="w-6 h-6 text-primary" /><h2 className="text-2xl md:text-3xl font-bold">Continue Lendo</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("como-advogados-melhoram-qi", 3).map((article) => (
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

export default ComoAdvogadosMelhoramQI;
