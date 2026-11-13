import { Brain, ArrowRight, BookOpen, Globe, BarChart3, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleLeadAdSense from "@/components/ArticleLeadAdSense";
import ArticleFAQ from "@/components/ArticleFAQ";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const QIMedioMundial = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/qi-medio-mundial";
  const articleTitle = "Média de QI do Mundo: Ranking Global Atualizado 2026";
  const articleDescription = "Qual é a média de QI do mundo? Ranking global por país, o que significa QI 100 e como comparar seu resultado em 2026.";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "QIMedioMundial, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-medio-mundial",
      publishDate: "2026-06-26",
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
          <span>Média de QI do Mundo</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Média de QI do Mundo: Ranking Global Atualizado 2026
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>26 de Junho de 2026</time>
          <span>•</span>
          <span>10 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Globe className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            <strong>Qual é a média de QI do mundo?</strong> Por definição estatística, o <strong>QI médio global é 100</strong> — mas as médias <em>por país</em> variam bastante. Neste artigo, apresentamos o ranking atualizado, as regiões com QI mais alto e o que isso significa para você. Veja também{" "}
            <Link to="/blog/o-que-e-qi-medio" className="text-primary hover:underline">o que é QI médio</Link> e o{" "}
            <Link to="/blog/qi-medio-por-pais" className="text-primary hover:underline">ranking detalhado por país</Link>.
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

          <h3 className="text-2xl font-bold mt-8 mb-4">Países com QI Mais Alto (IIT 2025)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Hong Kong:</strong> ~108</li>
            <li><strong>Coreia do Sul:</strong> ~107</li>
            <li><strong>China / Macau / Japão / Taiwan:</strong> ~106</li>
            <li><strong>Austrália / Rússia / Singapura:</strong> ~104</li>
          </ul>
          <p className="mb-4 text-sm text-muted-foreground">
            Fonte: International IQ Test 2025 (World Population Review). Compilações Lynn &amp; Becker usam outra metodologia.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Referência e Brasil</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Estados Unidos / Canadá / Reino Unido:</strong> ~101–102 (IIT)</li>
            <li><strong>Alemanha / França:</strong> próximo de 99–100</li>
            <li><strong>Brasil:</strong> ~95 (IIT) · ~83–87 (Lynn &amp; Becker)</li>
            <li><strong>Argentina / Chile / Uruguai:</strong> ~96–97 (IIT)</li>
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
            <strong>QI médio no Brasil:</strong> ~95 no IIT 2025 (ou ~83–87 em Lynn &amp; Becker), abaixo da referência 100:
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
            Quer descobrir seu QI e comparar com a média mundial? Faça um{" "}
            <Link to="/blog/teste-de-inteligencia-online" className="text-primary hover:underline">teste de inteligência online</Link>{" "}
            ou vá direto ao{" "}
            <Link to="/teste" className="text-primary hover:underline">teste do BomQI</Link>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/o-que-e-qi-medio" className="text-primary hover:underline">O que é QI médio</Link>,{" "}
            <Link to="/blog/qi-medio-por-pais" className="text-primary hover:underline">QI médio por país</Link>,{" "}
            <Link to="/blog/media-qi-brasil" className="text-primary hover:underline">média de QI no Brasil</Link> e{" "}
            <Link to="/blog/como-saber-meu-qi" className="text-primary hover:underline">como saber meu QI</Link>.
          </p>
        </div>
        <ArticleFAQ faqs={[
          { question: "Qual é a média de QI do mundo?", answer: "100 pontos, por definição dos testes padronizados. As médias por país variam em estudos comparativos (aproximadamente 70–108)." },
          { question: "Qual país tem o QI médio mais alto?", answer: "Singapura e Hong Kong aparecem entre os mais altos (~108) em estudos internacionais, seguidos por Coreia do Sul e Japão (~105–106)." },
          { question: "O QI médio do Brasil é quanto?", answer: "Estudos colocam o Brasil em torno de 87, abaixo da média de referência global, influenciado por fatores educacionais e socioeconômicos." },
          { question: "QI médio mundial muda ao longo do tempo?", answer: "Sim. O efeito Flynn mostrou aumento de QI médio ao longo do século XX em vários países, ligado a educação e nutrição." },
          { question: "Como comparar meu QI com a média mundial?", answer: "Faça um teste estruturado. QI 100 = média; 85–115 = faixa normal onde está a maioria da população." },
        ]} />


        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">
            Faça nosso teste científico e descubra seu QI. Compare com a média mundial e veja onde você se posiciona.
          </p>
          <Button size="lg" className="gap-2" onClick={() => navigate("/teste")}>
            Fazer o Teste Agora
            <ArrowRight className="w-5 h-5" />
          </Button>
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

