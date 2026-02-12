import { Brain, ArrowRight, Lightbulb, BookOpen, Clock, Scale } from "lucide-react";
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

const QIMedioAdvogados = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/qi-medio-advogados";
  const articleTitle = "QI Médio de Advogados: Inteligência na Advocacia";
  const articleDescription = "Descubra o QI médio de advogados, as habilidades cognitivas necessárias para a advocacia, e como a inteligência se relaciona com sucesso na profissão jurídica.";
  const publishDate = "2025-01-15";
  const modifiedDate = "2025-01-15";
  
  useSEO({
    title: "QI Médio de Advogados: Inteligência na Advocacia",
    description: articleDescription,
    url: articleUrl,
    keywords: "QI médio advogados, inteligência advogados, QI profissão direito, advogados inteligentes, QI área jurídica, inteligência jurídica, QI médio direito, advogados QI alto, profissão advogado inteligência, QI carreira jurídica",
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
        "name": "Equipe Bom QI"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Equipe Bom QI",
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
          <span>QI médio de advogados</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          QI Médio de Advogados: Inteligência na Advocacia
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2025</time>
          <span>•</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Scale className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            A advocacia é uma profissão que exige habilidades cognitivas avançadas, incluindo raciocínio lógico, 
            análise crítica, memória, e comunicação. O QI médio de advogados é geralmente acima da média populacional, 
            refletindo as demandas intelectuais da profissão jurídica.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Médio de Advogados</h2>
          <p className="mb-4">
            Estudos sobre inteligência em profissões indicam que advogados tendem a ter um QI médio entre 
            <strong> 110-120</strong>, significativamente acima da média populacional de 100. Essa faixa reflete 
            as demandas cognitivas da advocacia, que incluem análise complexa, raciocínio lógico, e comunicação 
            sofisticada.
          </p>
          <p className="mb-4">
            <strong>Distribuição:</strong> A maioria dos advogados tem QI entre 105-125, com uma proporção maior 
            na faixa superior da distribuição normal comparada à população geral. Isso é esperado, dado que a 
            advocacia requer educação superior e habilidades cognitivas avançadas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Habilidades Cognitivas Essenciais para Advogados</h2>
          <p className="mb-4">
            A advocacia exige um conjunto específico de habilidades cognitivas:
          </p>
          <p className="mb-4">
            <strong>1. Raciocínio Lógico e Analítico:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Análise de argumentos e evidências</li>
            <li>Identificação de falácias e inconsistências</li>
            <li>Construção de argumentos lógicos sólidos</li>
            <li>Resolução de problemas complexos</li>
          </ul>
          <p className="mb-4">
            <strong>2. Memória e Retenção de Informações:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Memorização de leis, precedentes e casos</li>
            <li>Retenção de detalhes importantes</li>
            <li>Memória de trabalho para análise complexa</li>
            <li>Recuperação rápida de informações relevantes</li>
          </ul>
          <p className="mb-4">
            <strong>3. Habilidades Verbais e de Comunicação:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Compreensão e uso preciso da linguagem</li>
            <li>Comunicação clara e persuasiva</li>
            <li>Leitura e interpretação de textos complexos</li>
            <li>Redação de documentos legais precisos</li>
          </ul>
          <p className="mb-4">
            <strong>4. Pensamento Crítico:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Avaliação crítica de evidências</li>
            <li>Análise de múltiplas perspectivas</li>
            <li>Identificação de pontos fracos e fortes</li>
            <li>Tomada de decisões baseada em análise cuidadosa</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI e Sucesso na Advocacia</h2>
          <p className="mb-4">
            Embora QI seja importante para sucesso na advocacia, não é o único fator. Habilidades adicionais 
            incluem:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Inteligência emocional:</strong> Relacionamento com clientes, colegas, e juízes</li>
            <li><strong>Persistência e trabalho duro:</strong> Advocacia requer dedicação e esforço contínuo</li>
            <li><strong>Habilidades sociais:</strong> Networking e construção de relacionamentos</li>
            <li><strong>Ética e integridade:</strong> Fundamentais para sucesso duradouro</li>
            <li><strong>Especialização:</strong> Conhecimento profundo em áreas específicas</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Diferenças por Área de Atuação</h2>
          <p className="mb-4">
            Diferentes áreas da advocacia podem ter diferentes demandas cognitivas:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Direito corporativo:</strong> Pode exigir habilidades analíticas e estratégicas avançadas</li>
            <li><strong>Direito criminal:</strong> Requer raciocínio rápido e habilidades de argumentação</li>
            <li><strong>Direito de família:</strong> Enfatiza habilidades interpessoais e empatia</li>
            <li><strong>Direito tributário:</strong> Exige atenção a detalhes e análise numérica</li>
            <li><strong>Direito internacional:</strong> Requer pensamento complexo e conhecimento cultural</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Educação e Desenvolvimento Cognitivo</h2>
          <p className="mb-4">
            A educação jurídica desenvolve habilidades cognitivas específicas através de:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Análise de casos e precedentes</li>
            <li>Desenvolvimento de raciocínio legal</li>
            <li>Prática de argumentação e debate</li>
            <li>Resolução de problemas jurídicos complexos</li>
            <li>Desenvolvimento de habilidades de pesquisa e análise</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            O QI médio de advogados é geralmente entre 110-120, refletindo as demandas cognitivas da profissão. 
            Habilidades como raciocínio lógico, memória, comunicação, e pensamento crítico são essenciais, mas 
            sucesso na advocacia também requer inteligência emocional, trabalho duro, ética, e habilidades sociais.
          </p>
          <p className="mb-4">
            A advocacia é uma profissão que valoriza e desenvolve inteligência, mas o sucesso depende de uma 
            combinação de habilidades cognitivas, emocionais, e profissionais que permitem excelência na prática 
            jurídica.
          </p>
        </div>
        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "Qual é o QI médio de advogados?",
                    "answer": "O QI médio de advogados varia entre 95-115, dependendo de fatores como educação, ambiente e genética. A média populacional geral é 100."
          },
          {
                    "question": "Como advogados se comparam à média geral?",
                    "answer": "Advogados geralmente estão próximos ou ligeiramente acima da média de 100, com variação individual significativa. Educação e ambiente influenciam mais que o grupo em si."
          },
          {
                    "question": "Advogados podem aumentar seu QI?",
                    "answer": "Sim. Treino cognitivo, exercícios físicos, educação continuada e hábitos saudáveis podem aumentar QI em 5-15 pontos independente do grupo."
          },
          {
                    "question": "O que mais influencia o QI de advogados?",
                    "answer": "Educação (40%), ambiente familiar (30%), genética (20-30%), nutrição e estímulos cognitivos. Intervenções precoces maximizam potencial."
          },
          {
                    "question": "Diferença entre QI médio e individual?",
                    "answer": "QI médio é estatística de grupo. Indivíduos variam amplamente: 68% estão entre 85-115, mas há muitos outliers em ambos extremos."
          }
]} />


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
            {getRelatedArticles("qi-medio-advogados", 3).map((article) => (
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

export default QIMedioAdvogados;

