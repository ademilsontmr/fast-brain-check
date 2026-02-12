import { Brain, ArrowRight, Lightbulb, BookOpen, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";

const QIMedioPorGenero = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/qi-medio-por-genero";
  const articleTitle = "QI Médio por Gênero: Diferenças e Semelhanças";
  const articleDescription = "Descubra o QI médio por gênero, diferenças e semelhanças entre homens e mulheres, e análise científica sobre inteligência e gênero.";
  const publishDate = "2025-01-15";
  const modifiedDate = "2025-01-15";
  
  useSEO({
    title: "QI Médio por Gênero: Diferenças e Semelhanças",
    description: articleDescription,
    url: articleUrl,
    keywords: "QI médio gênero, inteligência homens mulheres, QI por sexo, diferença QI gênero, QI masculino feminino, inteligência gênero, QI médio homens, QI médio mulheres, gênero inteligência, QI sexo",
  });

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
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>QI médio por gênero</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          QI Médio por Gênero: Diferenças e Semelhanças
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2025</time>
          <span>•</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Users className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            A questão de diferenças de QI entre gêneros é um tópico complexo e frequentemente mal compreendido. 
            Estudos científicos mostram que, em média, não há diferença significativa no QI geral entre 
            homens e mulheres, mas podem haver diferenças em habilidades específicas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Médio por Gênero: Semelhanças</h2>
          <p className="mb-4">
            Estudos científicos extensivos mostram que, em média, <strong>não há diferença significativa no QI 
            geral entre homens e mulheres</strong>. O QI médio de ambos os gêneros é aproximadamente 100, seguindo 
            a distribuição normal padronizada.
          </p>
          <p className="mb-4">
            <strong>Evidências científicas:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Meta-análises de estudos mostram diferença média próxima de zero</li>
            <li>Distribuições de QI são essencialmente idênticas entre gêneros</li>
            <li>Diferenças individuais são muito maiores que diferenças de gênero</li>
            <li>QI geral não favorece consistentemente nenhum gênero</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Diferenças em Habilidades Específicas</h2>
          <p className="mb-4">
            Embora o QI geral seja similar, podem haver diferenças pequenas em habilidades específicas:
          </p>
          <p className="mb-4">
            <strong>Habilidades onde homens podem ter ligeira vantagem:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Raciocínio espacial:</strong> Rotação mental, navegação, visualização 3D</li>
            <li><strong>Habilidades matemáticas:</strong> Especialmente em extremos da distribuição</li>
            <li><strong>Velocidade de processamento:</strong> Em algumas tarefas específicas</li>
          </ul>
          <p className="mb-4">
            <strong>Habilidades onde mulheres podem ter ligeira vantagem:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Habilidades verbais:</strong> Vocabulário, fluência verbal, compreensão</li>
            <li><strong>Memória episódica:</strong> Lembrança de eventos e detalhes</li>
            <li><strong>Velocidade perceptual:</strong> Identificação rápida de padrões visuais</li>
            <li><strong>Habilidades de leitura:</strong> Compreensão e processamento de texto</li>
          </ul>
          <p className="mb-4">
            <strong>Importante:</strong> Essas diferenças são pequenas, variam muito entre indivíduos, e não 
            significam que todos os homens ou todas as mulheres têm essas características. Diferenças individuais 
            são muito maiores que diferenças de gênero.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Variabilidade e Extremos</h2>
          <p className="mb-4">
            Uma diferença observada é na variabilidade - homens tendem a ter maior variabilidade em QI, 
            significando mais homens tanto nos extremos altos quanto nos extremos baixos da distribuição.
          </p>
          <p className="mb-4">
            <strong>Implicações:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Mais homens com QI muito alto (acima de 130)</li>
            <li>Mais homens com QI muito baixo (abaixo de 70)</li>
            <li>Mulheres tendem a ter distribuição mais concentrada na média</li>
            <li>Isso pode explicar algumas diferenças observadas em extremos</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Fatores que Influenciam Diferenças</h2>
          <p className="mb-4">
            Quando diferenças são observadas, vários fatores podem explicá-las:
          </p>
          <p className="mb-4">
            <strong>1. Fatores Biológicos:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Diferenças hormonais podem influenciar desenvolvimento cerebral</li>
            <li>Estrutura cerebral pode ter diferenças sutis entre gêneros</li>
            <li>Genética pode influenciar desenvolvimento de habilidades específicas</li>
          </ul>
          <p className="mb-4">
            <strong>2. Fatores Sociais e Culturais:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Expectativas sociais e estereótipos</li>
            <li>Oportunidades educacionais e de desenvolvimento</li>
            <li>Encorajamento e suporte para diferentes habilidades</li>
            <li>Papéis de gênero e pressões sociais</li>
          </ul>
          <p className="mb-4">
            <strong>3. Fatores Ambientais:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Acesso a recursos e oportunidades</li>
            <li>Experiências de aprendizado e desenvolvimento</li>
            <li>Ambiente familiar e educacional</li>
            <li>Exposição a diferentes tipos de atividades</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Mudanças ao Longo do Tempo</h2>
          <p className="mb-4">
            Diferenças observadas em habilidades específicas têm diminuído ao longo do tempo, especialmente 
            em áreas onde oportunidades educacionais e sociais se tornaram mais igualitárias.
          </p>
          <p className="mb-4">
            <strong>Tendências:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Diferenças em habilidades matemáticas diminuíram significativamente</li>
            <li>Mulheres têm melhorado em áreas tradicionalmente dominadas por homens</li>
            <li>Oportunidades mais igualitárias reduziram diferenças observadas</li>
            <li>Isso sugere que fatores sociais são importantes</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Implicações Práticas</h2>
          <p className="mb-4">
            O que isso significa na prática?
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>QI geral não deve ser usado para discriminar entre gêneros</li>
            <li>Diferenças individuais são muito maiores que diferenças de gênero</li>
            <li>Oportunidades e suporte são mais importantes que gênero</li>
            <li>Habilidades podem ser desenvolvidas independentemente de gênero</li>
            <li>Estereótipos podem limitar potencial e devem ser evitados</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI e Sucesso Profissional</h2>
          <p className="mb-4">
            Embora possam haver diferenças pequenas em habilidades específicas, sucesso profissional depende 
            de muitos fatores além de QI, incluindo:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Inteligência emocional</li>
            <li>Habilidades sociais e comunicação</li>
            <li>Trabalho duro e persistência</li>
            <li>Oportunidades e acesso a recursos</li>
            <li>Suporte e mentoria</li>
            <li>Habilidades específicas relevantes para a área</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            O QI médio por gênero é essencialmente igual - aproximadamente 100 para ambos. Embora possam haver 
            diferenças pequenas em habilidades específicas, essas diferenças são pequenas, variam muito entre 
            indivíduos, e são influenciadas por fatores sociais, culturais, e ambientais, além de fatores biológicos.
          </p>
          <p className="mb-4">
            O mais importante é reconhecer que diferenças individuais são muito maiores que diferenças de gênero, 
            e que oportunidades, suporte, e desenvolvimento são mais importantes que gênero para desenvolvimento 
            cognitivo e sucesso.
          </p>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI Atual</h3>
          <p className="text-muted-foreground mb-6">
            Quer saber seu nível atual de inteligência? Faça nosso teste de QI em apenas 3 minutos 
            e descubra seu potencial cognitivo.
          </p>
          <Link to="/teste">
            <Button size="lg" className="gap-2">
              Fazer o Teste Agora
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Continue Lendo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("qi-medio-por-genero", 3).map((article) => (
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

export default QIMedioPorGenero;

