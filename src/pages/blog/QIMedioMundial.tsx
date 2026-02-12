import { Brain, ArrowRight, BookOpen, Globe, BarChart3, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const QIMedioMundial = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/qi-medio-mundial";
  const articleTitle = "QI Médio Mundial: Ranking Atualizado 2025";
  const articleDescription = "Qual o QI médio mundial? Descubra o ranking atualizado por país. Teste seu QI e compare. Rápido e científico!";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-medio-mundial",
      publishDate: "2024-01-01",
    })
  );

  const relatedArticles = getRelatedArticles("qi-medio-mundial");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>QI Médio Mundial</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          QI Médio Mundial: Ranking Atualizado 2025
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Globe className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            "Qual o QI médio mundial?" é uma pergunta importante sobre inteligência global. <strong>QI médio mundial é 
            aproximadamente 100</strong>, mas varia significativamente entre países e regiões. Neste artigo, apresentamos o 
            ranking atualizado de QI médio por país e as principais descobertas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Médio Mundial</h2>
          
          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">
                  QI Médio Global
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>QI médio mundial: ~100</strong> (ponto de referência)
                </p>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>Variação:</strong> 60-110 entre países
                </p>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>Diferenças regionais</strong> são significativas e influenciadas por múltiplos fatores.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Ranking de QI Médio por País</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Países com QI Mais Alto (105-110)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Singapura:</strong> ~108</li>
            <li><strong>Hong Kong:</strong> ~108</li>
            <li><strong>Coreia do Sul:</strong> ~106</li>
            <li><strong>Japão:</strong> ~105</li>
            <li><strong>China:</strong> ~105</li>
            <li><strong>Taiwan:</strong> ~105</li>
            <li><strong>Finlândia:</strong> ~101</li>
            <li><strong>Suíça:</strong> ~101</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Países com QI Médio (95-105)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Estados Unidos:</strong> ~98</li>
            <li><strong>Reino Unido:</strong> ~100</li>
            <li><strong>Alemanha:</strong> ~99</li>
            <li><strong>França:</strong> ~98</li>
            <li><strong>Canadá:</strong> ~99</li>
            <li><strong>Austrália:</strong> ~99</li>
            <li><strong>Brasil:</strong> ~87</li>
            <li><strong>Argentina:</strong> ~93</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Fatores que Influenciam QI por País</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Educação:</strong> qualidade e acesso à educação</li>
            <li><strong>Nutrição:</strong> qualidade nutricional na infância</li>
            <li><strong>Saúde:</strong> saúde pública e cuidados médicos</li>
            <li><strong>Renda:</strong> desenvolvimento econômico</li>
            <li><strong>Ambiente:</strong> estimulação cognitiva e cultural</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Médio por Região</h2>
          
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">
              QI Médio por Região
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• <strong>Ásia Oriental:</strong> ~105-108 (mais alto)</li>
              <li>• <strong>Europa:</strong> ~98-101</li>
              <li>• <strong>América do Norte:</strong> ~98-99</li>
              <li>• <strong>América Latina:</strong> ~85-93</li>
              <li>• <strong>África:</strong> ~70-85 (mais baixo)</li>
              <li>• <strong>Oriente Médio:</strong> ~85-95</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Médio no Brasil</h2>
          
          <p className="mb-4">
            <strong>QI médio no Brasil é aproximadamente 87</strong>, abaixo da média mundial:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Posição:</strong> abaixo da média mundial (~100)</li>
            <li><strong>Comparação:</strong> similar a outros países latino-americanos</li>
            <li><strong>Fatores:</strong> educação, nutrição, desenvolvimento econômico</li>
            <li><strong>Tendência:</strong> QI médio tem aumentado nas últimas décadas</li>
          </ul>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">
                  Importante
                </h3>
                <p className="text-amber-800 dark:text-amber-200">
                  <strong>Diferenças de QI entre países</strong> são influenciadas por fatores ambientais, educacionais e 
                  socioeconômicos, não apenas genéticos. QI médio pode mudar ao longo do tempo com melhorias em educação, 
                  nutrição e desenvolvimento.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          
          <p className="mb-4">
            <strong>QI médio mundial é aproximadamente 100</strong>, mas varia significativamente entre países (60-110). Países 
            do Leste Asiático tendem a ter QI mais alto (~105-108), enquanto países em desenvolvimento tendem a ter QI mais baixo.
          </p>

          <p className="mb-4">
            É importante entender que <strong>diferenças de QI entre países são influenciadas por múltiplos fatores</strong>, incluindo 
            educação, nutrição, saúde e desenvolvimento econômico. QI médio pode melhorar com investimentos em educação e 
            desenvolvimento.
          </p>

          <p className="mb-4">
            Quer descobrir seu QI e comparar com a média mundial? Faça nosso teste científico validado e receba uma análise 
            completa de suas capacidades cognitivas.
          </p>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">
            Faça nosso teste científico validado e descubra seu QI. 
            Compare com a média mundial e veja onde você se posiciona.
          </p>
          <Link to="/teste">
            <Button size="lg" className="gap-2">
              Fazer o Teste Agora
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">Continue Lendo</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                <Card
                  key={article.slug}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 group cursor-pointer"
                >
                  <Link to={`/blog/${article.slug}`} className="block">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {article.category}
                      </span>
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
        )}

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

export default QIMedioMundial;

