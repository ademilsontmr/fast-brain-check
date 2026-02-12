import { Brain, ArrowRight, BookOpen, TrendingDown, BarChart3, CheckCircle2, AlertCircle } from "lucide-react";
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

const OQueEQIBaixo = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/o-que-e-qi-baixo";
  const articleTitle = "O que é QI Baixo? Causas e Sinais";
  const articleDescription = "O que é QI baixo? Descubra as causas, sinais e o que significa ter QI abaixo da média. Teste seu QI rapidamente!";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "OQueEQIBaixo, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "o-que-e-qi-baixo",
      publishDate: "2024-01-01",
    })
  );

  const relatedArticles = getRelatedArticles("o-que-e-qi-baixo");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>O que é QI Baixo?</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          O que é QI Baixo? Causas e Sinais
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <TrendingDown className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            "O que é QI baixo?" é uma pergunta importante sobre inteligência. <strong>QI baixo é geralmente definido como 
            QI abaixo de 70-85</strong>, mas o significado e as implicações variam. Neste artigo, explicamos o que é QI 
            baixo, suas causas, sinais e o que isso realmente significa.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que é QI Baixo?</h2>
          
          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">
                  Definição de QI Baixo
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>QI abaixo da média: 70-85</strong> (14% da população)
                </p>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>QI muito abaixo da média: menor que 70</strong> (2% da população)
                </p>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>Deficiência intelectual:</strong> QI menor que 70 com limitações em funcionamento adaptativo
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Causas de QI Baixo</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Fatores Genéticos</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Genética:</strong> fatores genéticos que afetam desenvolvimento cognitivo</li>
            <li><strong>Condições:</strong> condições genéticas como síndrome de Down, síndrome de X frágil</li>
            <li><strong>Mutações:</strong> mutações genéticas que afetam função cerebral</li>
            <li><strong>Herança:</strong> herança genética de capacidades cognitivas</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Fatores Ambientais</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Nutrição:</strong> desnutrição e deficiências nutricionais na infância</li>
            <li><strong>Exposição:</strong> exposição a toxinas (chumbo, mercúrio) durante desenvolvimento</li>
            <li><strong>Privação:</strong> privação de estimulação cognitiva e educacional</li>
            <li><strong>Ambiente:</strong> ambiente pouco estimulante e falta de recursos</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Fatores Pré-natais e Perinatais</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Gravidez:</strong> complicações durante gravidez (infecções, uso de álcool/drogas)</li>
            <li><strong>Nascimento:</strong> complicações no nascimento (falta de oxigênio, prematuridade)</li>
            <li><strong>Saúde materna:</strong> saúde materna e cuidados pré-natais inadequados</li>
            <li><strong>Desenvolvimento:</strong> problemas no desenvolvimento fetal</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Fatores Pós-natais</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Trauma:</strong> trauma cerebral ou lesões na infância</li>
            <li><strong>Doenças:</strong> doenças e infecções que afetam desenvolvimento cerebral</li>
            <li><strong>Educação:</strong> falta de acesso à educação de qualidade</li>
            <li><strong>Estimulação:</strong> falta de estimulação cognitiva adequada</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Sinais de QI Baixo</h2>
          
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">
              Sinais Comuns
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• <strong>Dificuldades de aprendizado:</strong> dificuldades em aprender e reter informações</li>
              <li>• <strong>Resolução de problemas:</strong> dificuldades em resolver problemas complexos</li>
              <li>• <strong>Compreensão:</strong> dificuldades em compreender conceitos abstratos</li>
              <li>• <strong>Memória:</strong> dificuldades com memória e retenção de informações</li>
              <li>• <strong>Linguagem:</strong> atrasos no desenvolvimento de linguagem</li>
              <li>• <strong>Habilidades sociais:</strong> dificuldades em habilidades sociais e adaptativas</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Baixo vs. Deficiência Intelectual</h2>
          
          <p className="mb-4">
            <strong>QI baixo não é o mesmo que deficiência intelectual:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>QI baixo:</strong> QI abaixo da média, mas pode não afetar funcionamento diário</li>
            <li><strong>Deficiência intelectual:</strong> QI menor que 70 + limitações significativas em funcionamento adaptativo</li>
            <li><strong>Funcionamento adaptativo:</strong> habilidades práticas para vida diária</li>
            <li><strong>Diagnóstico:</strong> diagnóstico requer avaliação profissional completa</li>
          </ul>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">
                  Importante
                </h3>
                <p className="text-amber-800 dark:text-amber-200">
                  <strong>QI baixo não define uma pessoa</strong>. QI é uma medida de habilidades cognitivas específicas, 
                  mas não captura todas as capacidades, talentos e potencial de uma pessoa. Pessoas com QI baixo podem 
                  ter sucesso em muitas áreas da vida com apoio adequado.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Apoio e Intervenção</h2>
          
          <p className="mb-4">
            <strong>Pessoas com QI baixo podem se beneficiar de:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Educação:</strong> educação especializada e adaptada</li>
            <li><strong>Terapia:</strong> terapia e intervenção precoce</li>
            <li><strong>Apoio:</strong> apoio familiar e social</li>
            <li><strong>Recursos:</strong> recursos e acomodações adequadas</li>
            <li><strong>Oportunidades:</strong> oportunidades de desenvolvimento e crescimento</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          
          <p className="mb-4">
            <strong>QI baixo é geralmente definido como QI abaixo de 70-85</strong>, mas o significado e as implicações 
            variam. Causas incluem fatores genéticos, ambientais, pré-natais e pós-natais. Sinais comuns incluem 
            dificuldades de aprendizado, resolução de problemas e compreensão.
          </p>

          <p className="mb-4">
            É importante entender que <strong>QI baixo não define uma pessoa</strong>. QI é uma medida de habilidades 
            cognitivas específicas, mas não captura todas as capacidades, talentos e potencial. Pessoas com QI baixo 
            podem ter sucesso em muitas áreas da vida com apoio adequado.
          </p>

          <p className="mb-4">
            Quer descobrir seu QI? Faça nosso teste científico validado e receba uma análise completa de suas 
            capacidades cognitivas.
          </p>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">
            Faça nosso teste científico validado e descubra seu QI. 
            Receba uma análise completa de suas capacidades cognitivas.
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

export default OQueEQIBaixo;


