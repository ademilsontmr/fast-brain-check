import { Brain, ArrowRight, BookOpen, Globe, BarChart3, CheckCircle2, AlertCircle } from "lucide-react";
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
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const QIMedioBrasil = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/qi-medio-brasil";
  const articleTitle = "QI Médio no Brasil: Qual é e Por Quê?";
  const articleDescription = "Qual o QI médio no Brasil? Descubra o QI médio brasileiro e os fatores que influenciam. Teste seu QI rapidamente!";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "QIMedioBrasil, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-medio-brasil",
      publishDate: "2024-01-01",
    })
  );

  const relatedArticles = getRelatedArticles("qi-medio-brasil");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>QI Médio no Brasil</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          QI Médio no Brasil: Qual é e Por Quê?
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Globe className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            "Qual o QI médio no Brasil?" é uma pergunta importante sobre inteligência no país. <strong>QI médio no Brasil 
            é aproximadamente 87</strong>, abaixo da média mundial (~100). Neste artigo, explicamos o QI médio brasileiro, 
            os fatores que influenciam e por que está abaixo da média mundial.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Médio no Brasil</h2>
          
          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">
                  QI Médio Brasileiro
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>QI médio no Brasil: ~87</strong> (abaixo da média mundial de 100)
                </p>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>Posição:</strong> similar a outros países latino-americanos
                </p>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>Tendência:</strong> QI médio tem aumentado nas últimas décadas com melhorias em educação e desenvolvimento
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Fatores que Influenciam QI no Brasil</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Educação</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Qualidade:</strong> variação significativa na qualidade educacional entre regiões</li>
            <li><strong>Acesso:</strong> desigualdades no acesso à educação de qualidade</li>
            <li><strong>Investimento:</strong> investimento em educação abaixo do ideal</li>
            <li><strong>Formação:</strong> formação de professores e infraestrutura escolar</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Nutrição</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Desnutrição:</strong> desnutrição infantil afeta desenvolvimento cognitivo</li>
            <li><strong>Deficiências:</strong> deficiências nutricionais em micronutrientes importantes</li>
            <li><strong>Iodina:</strong> deficiência de iodo pode afetar desenvolvimento cognitivo</li>
            <li><strong>Primeiros anos:</strong> nutrição adequada nos primeiros anos de vida é crucial</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Saúde Pública</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Acesso:</strong> acesso desigual a cuidados de saúde</li>
            <li><strong>Prevenção:</strong> prevenção e tratamento de doenças que afetam cognição</li>
            <li><strong>Saúde materna:</strong> saúde materna e pré-natal adequado</li>
            <li><strong>Vacinação:</strong> cobertura vacinal e prevenção de doenças</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Desenvolvimento Econômico</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Renda:</strong> desigualdade de renda e pobreza</li>
            <li><strong>Infraestrutura:</strong> infraestrutura e recursos disponíveis</li>
            <li><strong>Oportunidades:</strong> oportunidades de desenvolvimento e estimulação cognitiva</li>
            <li><strong>Ambiente:</strong> ambiente estimulante e acesso a recursos educacionais</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Comparação com Outros Países</h2>
          
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">
              QI Médio por Região
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• <strong>Ásia Oriental:</strong> ~105-108 (mais alto)</li>
              <li>• <strong>Europa:</strong> ~98-101</li>
              <li>• <strong>América do Norte:</strong> ~98-99</li>
              <li>• <strong>América Latina:</strong> ~85-93 (Brasil: ~87)</li>
              <li>• <strong>África:</strong> ~70-85 (mais baixo)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por Que QI no Brasil Está Abaixo da Média?</h2>
          
          <p className="mb-4">
            <strong>QI no Brasil está abaixo da média mundial</strong> devido a múltiplos fatores inter-relacionados:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Histórico:</strong> histórico de desigualdades sociais e econômicas</li>
            <li><strong>Educação:</strong> investimento e qualidade educacional abaixo do ideal</li>
            <li><strong>Nutrição:</strong> desnutrição e deficiências nutricionais</li>
            <li><strong>Saúde:</strong> acesso desigual a cuidados de saúde</li>
            <li><strong>Desenvolvimento:</strong> desenvolvimento econômico e social</li>
          </ul>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">
                  Importante
                </h3>
                <p className="text-amber-800 dark:text-amber-200">
                  <strong>QI médio não define indivíduos</strong>. QI médio é uma medida populacional que reflete fatores 
                  ambientais, educacionais e socioeconômicos. Indivíduos podem ter QI muito acima ou abaixo da média, 
                  independentemente da média do país.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Tendências e Melhorias</h2>
          
          <p className="mb-4">
            <strong>QI médio no Brasil tem aumentado</strong> nas últimas décadas com melhorias em:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Educação:</strong> expansão do acesso à educação</li>
            <li><strong>Nutrição:</strong> programas de combate à desnutrição</li>
            <li><strong>Saúde:</strong> melhorias em saúde pública e prevenção</li>
            <li><strong>Desenvolvimento:</strong> crescimento econômico e redução da pobreza</li>
            <li><strong>Efeito Flynn:</strong> aumento global de QI ao longo do tempo</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          
          <p className="mb-4">
            <strong>QI médio no Brasil é aproximadamente 87</strong>, abaixo da média mundial (~100), mas similar a outros 
            países latino-americanos. Fatores como educação, nutrição, saúde pública e desenvolvimento econômico influenciam 
            o QI médio.
          </p>

          <p className="mb-4">
            É importante entender que <strong>QI médio não define indivíduos</strong>. QI médio é uma medida populacional, 
            e indivíduos podem ter QI muito acima ou abaixo da média, independentemente da média do país.
          </p>

          <p className="mb-4">
            Quer descobrir seu QI e comparar com a média brasileira? Faça nosso teste científico validado e receba uma 
            análise completa de suas capacidades cognitivas.
          </p>
        </div>
        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "brasil têm potencial de aumentar QI?",
                    "answer": "Sim. Independente do QI atual, treino cognitivo, exercícios e educação podem aumentar 5-15 pontos."
          },
          {
                    "question": "Diferença de QI dentro de brasil?",
                    "answer": "Grande. Mesmo dentro do grupo, QI varia de 70 a 140+. Média não define indivíduos."
          },
          {
                    "question": "brasil com QI baixo podem ter sucesso?",
                    "answer": "Sim. Persistência, especialização e inteligência emocional compensam QI baixo. Muitos casos de sucesso com QI 85-95."
          },
          {
                    "question": "Testes de QI são justos para brasil?",
                    "answer": "Parcialmente. Testes podem ter viés cultural. Importante usar testes validados e considerar contexto socioeconômico."
          },
          {
                    "question": "brasil devem focar em aumentar QI?",
                    "answer": "Sim, mas não exclusivamente. Desenvolver habilidades práticas, networking e inteligência emocional é igualmente importante."
          }
]} />


        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">
            Faça nosso teste científico validado e descubra seu QI. 
            Compare com a média brasileira e veja onde você se posiciona.
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

export default QIMedioBrasil;


