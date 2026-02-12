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

const QIMedioMaes = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/qi-medio-maes";
  const articleTitle = "QI Médio das Mães: Inteligência e Maternidade";
  const articleDescription = "Descubra como a maternidade afeta a cognição, qual o QI médio das mães e como a inteligência materna influencia o desenvolvimento dos filhos.";
  const publishDate = "2024-01-15";
  const modifiedDate = "2024-01-15";
  
  useSEO({
    title: "QI Médio das Mães",
    description: articleDescription,
    url: articleUrl,
    keywords: "QI médio mães, inteligência maternidade, QI mães, mães inteligentes, QI materna, inteligência maternal, QI médio maternidade, mães QI alto, maternidade inteligência, QI mulheres mães",
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
      "author": { "@type": "Organization", "name": "Equipe Bom QI" },
      "publisher": { "@type": "Organization", "name": "Equipe Bom QI", "logo": { "@type": "ImageObject", "url": "https://bomqi.com.br/favicon-brain-icon.png" } }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bomqi.com.br" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://bomqi.com.br/blog" },
        { "@type": "ListItem", "position": 3, "name": articleTitle, "item": articleUrl }
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
          <span>QI Médio das Mães</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2024</time>
          <span>•</span>
          <span>8 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Heart className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            A relação entre maternidade e inteligência é fascinante. Estudos mostram que o QI materno 
            tem forte correlação com o desenvolvimento cognitivo dos filhos, e a própria maternidade 
            pode transformar o cérebro de maneiras surpreendentes.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Médio e Maternidade</h2>
          <p className="mb-4">
            O QI médio das mães segue a distribuição normal da população, com média de 100 pontos. 
            No entanto, pesquisas indicam que mulheres com maior escolaridade tendem a ter filhos 
            mais tarde, o que pode influenciar estatísticas demográficas.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Influência do QI Materno
            </h3>
            <ul className="space-y-2">
              <li>• <strong>Hereditariedade:</strong> 50-80% do QI é influenciado geneticamente</li>
              <li>• <strong>Ambiente:</strong> Mães com QI mais alto tendem a criar ambientes mais estimulantes</li>
              <li>• <strong>Educação:</strong> Maior escolaridade materna correlaciona com melhor desempenho dos filhos</li>
              <li>• <strong>Nutrição:</strong> Mães mais informadas tendem a oferecer melhor alimentação</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Cérebro Materno</h2>
          <p className="mb-4">
            A gravidez e a maternidade causam mudanças significativas no cérebro feminino. Estudos 
            de neuroimagem mostram alterações na estrutura cerebral que podem durar anos.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Mudanças Cerebrais na Gravidez</h3>
          <ul className="mb-4">
            <li>• Redução de massa cinzenta em áreas específicas (reorganização, não perda)</li>
            <li>• Aumento da atividade em regiões ligadas à empatia</li>
            <li>• Maior sensibilidade a sinais do bebê</li>
            <li>• Melhora na capacidade de multitarefa</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Mommy Brain: Mito ou Realidade?</h2>
          <p className="mb-4">
            O "mommy brain" - a sensação de esquecimento e confusão mental durante a gravidez e 
            pós-parto - é real, mas temporário. Estudos mostram que:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <Lightbulb className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Curto Prazo</h3>
              <p className="text-sm">
                Pode haver declínio temporário em memória e atenção durante gravidez e primeiros 
                meses pós-parto devido a mudanças hormonais e privação de sono.
              </p>
            </Card>
            
            <Card className="p-6">
              <Target className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Longo Prazo</h3>
              <p className="text-sm">
                A longo prazo, a maternidade pode melhorar certas habilidades cognitivas, 
                especialmente relacionadas à empatia e processamento social.
              </p>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como o QI Materno Afeta os Filhos</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Mecanismos de Influência</h3>
            <ul className="space-y-3">
              <li><strong>Genética:</strong> Transmissão direta de genes relacionados à inteligência</li>
              <li><strong>Ambiente pré-natal:</strong> Nutrição e cuidados durante a gravidez</li>
              <li><strong>Estimulação precoce:</strong> Qualidade das interações mãe-filho</li>
              <li><strong>Linguagem:</strong> Vocabulário e complexidade da fala materna</li>
              <li><strong>Educação:</strong> Valorização e suporte ao aprendizado</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Dicas para Mães</h2>
          <p className="mb-4">
            Independente do QI, todas as mães podem otimizar o desenvolvimento cognitivo dos filhos:
          </p>
          <ul className="mb-4">
            <li>• Converse muito com seu filho desde o nascimento</li>
            <li>• Leia diariamente para a criança</li>
            <li>• Ofereça brinquedos e atividades estimulantes</li>
            <li>• Mantenha uma alimentação saudável</li>
            <li>• Cuide da sua própria saúde mental</li>
            <li>• Busque apoio quando necessário</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            O QI materno é um fator importante no desenvolvimento dos filhos, mas não é determinante. 
            O amor, dedicação e ambiente estimulante que uma mãe proporciona são igualmente cruciais 
            para o desenvolvimento cognitivo e emocional das crianças.
          </p>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">
            Curiosa sobre seu QI? Faça nosso teste rápido e descubra em apenas 3 minutos.
          </p>
          <Link to="/teste">
            <Button size="lg" className="gap-2">
              Fazer o Teste de QI
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
            {getRelatedArticles("qi-medio-maes", 3).map((article) => (
              <Card key={article.slug} className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 group cursor-pointer">
                <Link to={`/blog/${article.slug}`} className="block">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">{article.category}</span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" /></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.description}</p>
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

export default QIMedioMaes;
