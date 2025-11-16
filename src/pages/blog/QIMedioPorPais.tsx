import { Brain, ArrowRight, Globe, BarChart3, BookOpen, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const QIMedioPorPais = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/qi-medio-por-pais";
  const articleTitle = "QI Médio por País: Ranking Mundial e Análise Completa 2025";
  const articleDescription = "Descubra o QI médio por país em 2025. Ranking mundial completo, fatores que influenciam diferenças entre nações e análise científica das variações.";
  
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
      slug: "qi-medio-por-pais",
      publishDate: "2024-01-01",
    })
  );

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
          <span>QI Médio por País</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          QI Médio por País: Ranking Mundial e Análise Científica Completa
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
          
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Globe className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            O QI médio varia significativamente entre países. Mas o que explica essas diferenças? 
            Neste artigo, exploramos o ranking mundial de QI por país, os fatores científicos que 
            influenciam essas variações e o que os dados realmente significam.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Ranking Mundial: QI Médio por País</h2>
          <p className="mb-4">
            Estudos internacionais, como o <strong>Lynn-Vanhanen Dataset</strong> e pesquisas do 
            <strong> Richard Lynn</strong>, compilaram dados de QI médio de mais de 200 países. 
            Aqui está o ranking atualizado:
          </p>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4">Top 20 Países com Maior QI Médio</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>1. Singapura</strong></span>
                <span className="text-primary font-bold">108</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>2. Hong Kong</strong></span>
                <span className="text-primary font-bold">108</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>3. Coreia do Sul</strong></span>
                <span className="text-primary font-bold">106</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>4. Taiwan</strong></span>
                <span className="text-primary font-bold">106</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>5. Japão</strong></span>
                <span className="text-primary font-bold">105</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>6. China</strong></span>
                <span className="text-primary font-bold">105</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>7. Finlândia</strong></span>
                <span className="text-primary font-bold">101</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>8. Canadá</strong></span>
                <span className="text-primary font-bold">101</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>9. Holanda</strong></span>
                <span className="text-primary font-bold">101</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>10. Suíça</strong></span>
                <span className="text-primary font-bold">101</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>11. Alemanha</strong></span>
                <span className="text-primary font-bold">100</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>12. Áustria</strong></span>
                <span className="text-primary font-bold">100</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>13. Reino Unido</strong></span>
                <span className="text-primary font-bold">100</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>14. Estados Unidos</strong></span>
                <span className="text-primary font-bold">98</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>15. França</strong></span>
                <span className="text-primary font-bold">98</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>16. Bélgica</strong></span>
                <span className="text-primary font-bold">99</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>17. Nova Zelândia</strong></span>
                <span className="text-primary font-bold">100</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>18. Austrália</strong></span>
                <span className="text-primary font-bold">98</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>19. Itália</strong></span>
                <span className="text-primary font-bold">97</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>20. Espanha</strong></span>
                <span className="text-primary font-bold">97</span>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Brasil e América Latina</h3>
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>Brasil</strong></span>
                <span className="text-primary font-bold">87</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>Argentina</strong></span>
                <span className="text-primary font-bold">93</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>Chile</strong></span>
                <span className="text-primary font-bold">90</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>Uruguai</strong></span>
                <span className="text-primary font-bold">92</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>México</strong></span>
                <span className="text-primary font-bold">88</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>Colômbia</strong></span>
                <span className="text-primary font-bold">84</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Fatores que Explicam as Diferenças entre Países</h2>
          <p className="mb-4">
            Pesquisas científicas identificaram vários fatores que influenciam o QI médio de um país. 
            É crucial entender que essas diferenças são <strong>predominantemente ambientais</strong>, 
            não genéticas:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Qualidade da Educação</h3>
          <p className="mb-4">
            Países com sistemas educacionais mais robustos e investimento em educação pública tendem 
            a ter médias de QI mais altas. Estudos mostram correlação forte entre:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Anos médios de escolaridade da população</li>
            <li>Investimento per capita em educação</li>
            <li>Qualidade dos professores e currículo</li>
            <li>Acesso universal à educação básica e superior</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Nutrição e Saúde</h3>
          <p className="mb-4">
            A desnutrição, especialmente na primeira infância, impacta significativamente o 
            desenvolvimento cognitivo. Fatores importantes:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Desnutrição proteico-calórica na infância reduz QI em 5-15 pontos</li>
            <li>Deficiência de iodo pode reduzir QI em até 13 pontos</li>
            <li>Deficiência de ferro afeta atenção e memória de trabalho</li>
            <li>Acesso a água potável e saneamento básico</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Desenvolvimento Econômico</h3>
          <p className="mb-4">
            PIB per capita e IDH (Índice de Desenvolvimento Humano) mostram correlação moderada 
            com QI médio, pois refletem:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Acesso a recursos educacionais e culturais</li>
            <li>Qualidade de vida e redução de estresse crônico</li>
            <li>Investimento em pesquisa e desenvolvimento</li>
            <li>Infraestrutura que facilita aprendizado</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Efeito Flynn: Aumento Global de QI</h3>
          <p className="mb-4">
            O <strong>Efeito Flynn</strong> descreve o aumento gradual de QI médio observado globalmente 
            ao longo do século XX. Países em desenvolvimento que melhoraram educação e nutrição viram 
            aumentos significativos:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Coreia do Sul: aumento de ~20 pontos em 50 anos</li>
            <li>China: aumento de ~15 pontos em 30 anos</li>
            <li>Brasil: aumento de ~5-7 pontos nas últimas décadas</li>
          </ul>
          <p className="mb-4">
            Isso comprova que QI médio pode melhorar substancialmente com investimento em educação e saúde.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Limitações e Críticas aos Rankings</h2>
          <p className="mb-4">
            É importante entender as limitações dos rankings de QI por país:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Metodologia Variável</h3>
          <p className="mb-4">
            Diferentes estudos usam diferentes testes e metodologias, tornando comparações diretas 
            complexas. Alguns países têm dados mais confiáveis que outros.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Amostras Não Representativas</h3>
          <p className="mb-4">
            Em muitos países, especialmente em desenvolvimento, os dados podem vir de amostras 
            urbanas ou educadas, não representando toda a população.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Variação Individual vs. Média Nacional</h3>
          <p className="mb-4">
            A média nacional não define indivíduos. Em qualquer país, há pessoas com QI muito acima 
            ou abaixo da média nacional. A variação dentro de um país é maior que a diferença entre médias.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que Isso Significa na Prática?</h2>
          <p className="mb-4">
            Entender QI médio por país é útil para:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Políticas públicas:</strong> Identificar áreas que precisam de investimento em educação e saúde</li>
            <li><strong>Pesquisa científica:</strong> Estudar fatores ambientais que influenciam desenvolvimento cognitivo</li>
            <li><strong>Contexto educacional:</strong> Adaptar currículos e métodos de ensino</li>
          </ul>
          <p className="mb-4">
            Mas <strong>não deve ser usado para:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Estereotipar ou discriminar pessoas de qualquer nacionalidade</li>
            <li>Assumir que indivíduos de um país têm QI específico</li>
            <li>Justificar políticas discriminatórias ou racistas</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Tendências Futuras</h2>
          <p className="mb-4">
            Com melhorias globais em educação e nutrição, especialistas preveem:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Continuação do Efeito Flynn em países em desenvolvimento</li>
            <li>Redução gradual das diferenças entre países</li>
            <li>Possível estabilização ou reversão em países desenvolvidos (Efeito Flynn Reverso)</li>
            <li>Melhoria mais rápida em países que investem pesadamente em educação infantil</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            O QI médio varia significativamente entre países, mas essas diferenças são explicadas 
            principalmente por fatores ambientais: educação, nutrição, saúde e desenvolvimento econômico. 
            O Efeito Flynn demonstra que QI médio pode melhorar substancialmente com investimento adequado.
          </p>
          <p className="mb-4">
            Para você individualmente, o QI médio do seu país não define seu potencial. O importante 
            é descobrir seu próprio QI e trabalhar para desenvolvê-lo continuamente através de 
            educação, treino cognitivo e hábitos saudáveis.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI Real</h3>
          <p className="text-muted-foreground mb-6">
            Não se deixe limitar por médias nacionais. Descubra seu QI individual com nosso teste 
            científico completo e veja onde você realmente se posiciona.
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
            {getRelatedArticles("qi-medio-por-pais", 3).map((article) => (
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

export default QIMedioPorPais;

