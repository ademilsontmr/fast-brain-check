import { Brain, ArrowRight, Lightbulb, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";

const ComoAumentarQI = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/como-aumentar-qi";
  const articleTitle = "Como Aumentar Seu QI: 10 Dicas Cientificamente Comprovadas";
  const articleDescription = "Aprenda 10 estratégias cientificamente comprovadas para desenvolver inteligência, memória de trabalho e raciocínio.";
  const publishDate = "2024-01-15";
  const modifiedDate = "2024-01-15";
  
  useSEO({
    title: "Como Aumentar Seu QI",
    description: articleDescription,
    url: articleUrl,
  });

  // Structured Data para Article e BreadcrumbList (Rich Results)
  useStructuredData([
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": articleTitle,
      "description": articleDescription,
      "image": "https://bomqi.com.br/favicon-brain-icon.png",
      "datePublished": publishDate,
      "dateModified": modifiedDate,
      "author": {
        "@type": "Organization",
        "name": "BomQI"
      },
      "publisher": {
        "@type": "Organization",
        "name": "BomQI",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bomqi.com.br/favicon-brain-icon.png"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://bomqi.com.br"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://bomqi.com.br/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": articleTitle,
          "item": articleUrl
        }
      ]
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Brain className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">BomQI</span>
            </Link>
            <Button onClick={() => navigate("/teste")} size="lg">
              Fazer o Teste
            </Button>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Como aumentar seu QI</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Como Aumentar Seu QI: 10 Dicas Cientificamente Comprovadas
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2024</time>
          <span>•</span>
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Lightbulb className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Muitas pessoas acreditam que o QI é algo fixo e imutável. A ciência moderna, no entanto, 
            mostra que existem formas comprovadas de melhorar sua inteligência fluida e capacidade cognitiva. 
            Descubra as 10 estratégias mais eficazes para aumentar seu QI.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">1. Pratique Exercícios de Memória de Trabalho</h2>
          <p className="mb-4">
            A memória de trabalho é fundamental para o raciocínio e a resolução de problemas. Estudos 
            mostram que treinar a memória de trabalho através de jogos específicos pode aumentar o QI 
            em até 4 pontos após apenas 8 semanas de prática regular.
          </p>
          <p className="mb-4">
            <strong>Como praticar:</strong> Use aplicativos como Dual N-Back, jogue xadrez, ou pratique 
            malabarismo. Essas atividades exigem que você mantenha múltiplas informações em mente simultaneamente.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">2. Aprenda um Novo Idioma</h2>
          <p className="mb-4">
            Estudos de neuroimagem mostram que pessoas bilíngues têm maior densidade de massa cinzenta 
            em áreas do cérebro relacionadas ao controle executivo e à atenção. Aprender um segundo idioma 
            pode melhorar significativamente suas habilidades cognitivas gerais.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">3. Exercite-se Regularmente</h2>
          <p className="mb-4">
            A atividade física aeróbica aumenta o fluxo sanguíneo para o cérebro e promove a neurogênese 
            (formação de novos neurônios). Apenas 30 minutos de exercício moderado, 3-4 vezes por semana, 
            pode melhorar a função cognitiva em até 20%.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">4. Durma 7-9 Horas por Noite</h2>
          <p className="mb-4">
            O sono é essencial para a consolidação da memória e a limpeza de toxinas cerebrais. 
            Pessoas que dormem menos de 6 horas por noite apresentam desempenho cognitivo equivalente 
            a alguém com dois dias sem dormir.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">5. Medite Regularmente</h2>
          <p className="mb-4">
            A meditação mindfulness aumenta a espessura cortical em áreas do cérebro associadas à 
            atenção, introspecção e processamento sensorial. Apenas 20 minutos por dia podem fazer 
            diferença significativa em 8 semanas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">6. Toque um Instrumento Musical</h2>
          <p className="mb-4">
            Tocar música ativa praticamente todas as áreas do cérebro simultaneamente. Estudos mostram 
            que músicos têm melhor memória verbal, fluência verbal e raciocínio espacial comparados a não-músicos.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">7. Mantenha uma Dieta Rica em Ômega-3</h2>
          <p className="mb-4">
            O DHA, um tipo de ômega-3, é crucial para a saúde cerebral. Alimentos como salmão, nozes 
            e sementes de chia podem melhorar a função cognitiva e proteger contra declínio mental.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">8. Desafie-se com Puzzles e Jogos de Lógica</h2>
          <p className="mb-4">
            Quebra-cabeças, sudoku, e jogos de estratégia estimulam o raciocínio lógico e a resolução 
            de problemas. O importante é variar os tipos de desafios para trabalhar diferentes áreas cognitivas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">9. Leia Ativamente e Diversifique</h2>
          <p className="mb-4">
            Ler não só expande seu vocabulário, mas também melhora a empatia, o pensamento crítico e 
            a compreensão. Leia ficção para melhorar a teoria da mente, e não-ficção para expandir conhecimento.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">10. Socialize e Tenha Conversas Profundas</h2>
          <p className="mb-4">
            Interações sociais complexas estimulam o cérebro de formas únicas. Debates, discussões 
            filosóficas e conversas desafiadoras mantêm a mente afiada e promovem neuroplasticidade.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            Aumentar seu QI é possível, mas requer consistência e variedade. Combine múltiplas estratégias 
            desta lista para melhores resultados. Lembre-se: a inteligência não é apenas genética, 
            ela também é treinável.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI Atual</h3>
          <p className="text-muted-foreground mb-6">
            Antes de começar a melhorar, que tal descobrir seu ponto de partida? 
            Faça nosso teste de QI em apenas 3 minutos.
          </p>
          <Link to="/teste">
            <Button size="lg" className="gap-2">
              Fazer o Teste Agora
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Artigos Relacionados */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Continue Lendo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("como-aumentar-qi", 3).map((article) => (
              <Card
                key={article.slug}
                className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 group cursor-pointer"
              >
                <Link to={`/blog/${article.slug}`} className="block">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    Ler artigo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
        {/* Social Proof Carousel */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">O que as pessoas estão dizendo</h2>
          </div>
          <SocialProofCarousel />
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default ComoAumentarQI;
