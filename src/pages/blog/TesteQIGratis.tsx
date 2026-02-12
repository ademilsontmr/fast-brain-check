import { Brain, ArrowRight, Lightbulb, BookOpen, Clock, CheckCircle, Star, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";

const TesteQIGratis = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/teste-qi-gratis";
  const articleTitle = "Teste de QI Grátis: Como Descobrir Sua Inteligência Sem Pagar";
  const articleDescription = "Descubra como fazer um teste de QI grátis e confiável. Guia completo com os melhores testes gratuitos disponíveis online.";
  const publishDate = "2024-01-15";
  const modifiedDate = "2024-01-15";
  
  useSEO({
    title: "Teste de QI Grátis",
    description: articleDescription,
    url: articleUrl,
    keywords: "teste QI grátis, teste inteligência gratuito, QI teste free, teste QI online grátis, avaliação QI grátis, teste QI sem pagar, teste inteligência free, QI teste gratuito, teste QI livre, avaliação inteligência grátis",
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
      <ArticleHeader />

      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Teste de QI Grátis</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Teste de QI Grátis: Como Descobrir Sua Inteligência Sem Pagar
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2024</time>
          <span>•</span>
          <span>8 min de leitura</span>
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Lightbulb className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Você quer descobrir seu QI mas não quer pagar por isso? Existem várias opções gratuitas 
            e confiáveis disponíveis online. Neste guia completo, você vai descobrir os melhores 
            testes de QI gratuitos e como interpretá-los corretamente.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por Que Fazer um Teste de QI Grátis?</h2>
          <p className="mb-4">
            Testes de QI gratuitos são uma excelente forma de ter uma primeira estimativa da sua 
            inteligência sem investimento financeiro. Embora não substituam avaliações profissionais, 
            eles oferecem insights valiosos sobre suas capacidades cognitivas.
          </p>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              Vantagens dos Testes Gratuitos
            </h3>
            <ul className="space-y-2">
              <li>• Acesso imediato sem custos</li>
              <li>• Privacidade total</li>
              <li>• Possibilidade de repetir</li>
              <li>• Boa estimativa inicial</li>
              <li>• Sem compromisso</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Melhores Testes de QI Gratuitos</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. BomQI - Teste Rápido e Preciso</h3>
          <p className="mb-4">
            O BomQI oferece um teste de QI gratuito em apenas 3 minutos. Com 30 questões 
            cuidadosamente elaboradas, você recebe uma estimativa confiável do seu QI baseada 
            em metodologias científicas validadas.
          </p>
          <p className="mb-4">
            <strong>Características:</strong>
          </p>
          <ul className="mb-4">
            <li>• 30 questões de múltipla escolha</li>
            <li>• Resultado imediato</li>
            <li>• Sem cadastro obrigatório</li>
            <li>• Interface em português</li>
            <li>• Baseado em padrões científicos</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Testes Internacionais Gratuitos</h3>
          <p className="mb-4">
            Existem várias plataformas internacionais que oferecem testes gratuitos, como o 
            IQTest.com e o Free-IQTest.net. Estes testes geralmente têm entre 20-40 questões 
            e fornecem resultados em poucos minutos.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Testes Acadêmicos</h3>
          <p className="mb-4">
            Algumas universidades e instituições de pesquisa disponibilizam versões simplificadas 
            de testes de QI para fins educacionais. Embora menos elaborados, podem ser úteis 
            para uma primeira avaliação.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Interpretar Seu Resultado</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Escala de QI</h3>
            <ul className="space-y-2">
              <li>• <strong>130+:</strong> Superdotado (2% da população)</li>
              <li>• <strong>115-129:</strong> Acima da média (14% da população)</li>
              <li>• <strong>85-114:</strong> Média (68% da população)</li>
              <li>• <strong>70-84:</strong> Abaixo da média (14% da população)</li>
              <li>• <strong>Abaixo de 70:</strong> Deficiência intelectual (2% da população)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Limitações dos Testes Gratuitos</h2>
          <p className="mb-4">
            É importante entender que testes gratuitos têm algumas limitações:
          </p>
          <ul className="mb-4">
            <li>• Menor precisão que testes profissionais</li>
            <li>• Podem não considerar fatores culturais</li>
            <li>• Resultados podem variar entre plataformas</li>
            <li>• Não substituem avaliação clínica</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Dicas Para Fazer o Teste</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <Target className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Preparação</h3>
              <ul className="text-sm space-y-1">
                <li>• Descanse bem antes do teste</li>
                <li>• Escolha um ambiente silencioso</li>
                <li>• Evite distrações</li>
                <li>• Tenha água por perto</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <Zap className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Durante o Teste</h3>
              <ul className="text-sm space-y-1">
                <li>• Leia as instruções com atenção</li>
                <li>• Não passe muito tempo em uma questão</li>
                <li>• Confie no primeiro instinto</li>
                <li>• Mantenha-se calmo</li>
              </ul>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Quando Considerar um Teste Pago</h2>
          <p className="mb-4">
            Embora testes gratuitos sejam úteis, considere um teste pago se:
          </p>
          <ul className="mb-4">
            <li>• Precisa de um resultado oficial</li>
            <li>• Quer análise mais detalhada</li>
            <li>• Busca orientação profissional</li>
            <li>• Tem dúvidas sobre o resultado gratuito</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            Testes de QI gratuitos são uma excelente porta de entrada para conhecer suas 
            capacidades cognitivas. O BomQI oferece uma das melhores opções gratuitas 
            disponíveis, com metodologia científica e resultados confiáveis.
          </p>
          <p className="mb-4">
            Lembre-se: o QI é apenas uma medida da inteligência. Existem múltiplas formas 
            de inteligência, e o mais importante é desenvolver continuamente suas habilidades 
            cognitivas através do aprendizado e prática.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Faça Seu Teste de QI Grátis Agora</h3>
          <p className="text-muted-foreground mb-6">
            Descubra seu QI em apenas 3 minutos com o teste mais preciso e rápido do Brasil.
          </p>
          <Link to="/teste">
            <Button size="lg" className="gap-2">
              Começar Teste Gratuito
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
            {getRelatedArticles("teste-qi-gratis", 3).map((article) => (
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

export default TesteQIGratis;