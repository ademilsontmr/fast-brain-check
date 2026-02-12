import { Brain, ArrowRight, Lightbulb, BookOpen, Clock, AlertTriangle, Heart, Shield, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";

const QIeAnsiedade = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/qi-e-ansiedade";
  const articleTitle = "QI e Ansiedade: Como a Ansiedade Afeta a Performance Cognitiva";
  const articleDescription = "Descubra como a ansiedade impacta o QI e o desempenho cognitivo. Estratégias científicas para reduzir ansiedade e melhorar a inteligência.";
  const publishDate = "2024-01-15";
  const modifiedDate = "2024-01-15";
  
  useSEO({
    title: "QI e Ansiedade",
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
      <ArticleHeader />

      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>QI e Ansiedade</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          QI e Ansiedade: Como a Ansiedade Afeta a Performance Cognitiva
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2024</time>
          <span>•</span>
          <span>12 min de leitura</span>
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <AlertTriangle className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            A ansiedade é um dos maiores inimigos da performance cognitiva. Mesmo pessoas 
            com QI elevado podem ter seu desempenho drasticamente reduzido quando estão 
            ansiosas. Entenda como isso acontece e o que fazer para reverter essa situação.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como a Ansiedade Afeta o Cérebro</h2>
          <p className="mb-4">
            Quando estamos ansiosos, nosso cérebro entra em "modo de sobrevivência". 
            O sistema límbico, responsável pelas emoções, sequestra recursos do córtex 
            pré-frontal, a área responsável pelo raciocínio lógico, memória de trabalho 
            e tomada de decisões.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              Efeitos da Ansiedade no Cérebro
            </h3>
            <ul className="space-y-2">
              <li>• <strong>Redução da memória de trabalho:</strong> Dificuldade para manter informações em mente</li>
              <li>• <strong>Comprometimento da atenção:</strong> Foco disperso e distraibilidade</li>
              <li>• <strong>Bloqueio criativo:</strong> Dificuldade para pensar "fora da caixa"</li>
              <li>• <strong>Lentidão no processamento:</strong> Demora para processar informações</li>
              <li>• <strong>Erros de julgamento:</strong> Decisões precipitadas ou inadequadas</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Ansiedade de Performance vs. QI Real</h2>
          <p className="mb-4">
            É importante distinguir entre QI real e performance em situações de teste. 
            Muitas pessoas inteligentes obtêm resultados abaixo de seu potencial devido 
            à ansiedade de performance, especialmente em:
          </p>
          <ul className="mb-4">
            <li>• Testes de QI formais</li>
            <li>• Provas e exames</li>
            <li>• Entrevistas de emprego</li>
            <li>• Apresentações públicas</li>
            <li>• Situações de avaliação</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Tipos de Ansiedade que Afetam o QI</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-2">Ansiedade de Teste</h3>
              <p className="text-sm mb-4">
                Nervosismo específico relacionado a situações de avaliação, 
                que pode reduzir o desempenho em até 20-30%.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Branco na mente</li>
                <li>• Tremores e suor</li>
                <li>• Pensamentos negativos</li>
                <li>• Pressa excessiva</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-2">Ansiedade Generalizada</h3>
              <p className="text-sm mb-4">
                Estado crônico de preocupação que afeta constantemente 
                a capacidade cognitiva no dia a dia.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Preocupação constante</li>
                <li>• Dificuldade de concentração</li>
                <li>• Fadiga mental</li>
                <li>• Irritabilidade</li>
              </ul>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Mecanismos Neurobiológicos</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Cortisol e Função Cognitiva</h3>
          <p className="mb-4">
            O cortisol, hormônio do estresse, tem efeitos devastadores na cognição quando 
            em níveis elevados cronicamente. Ele pode:
          </p>
          <ul className="mb-4">
            <li>• Danificar neurônios do hipocampo (memória)</li>
            <li>• Reduzir conexões sinápticas</li>
            <li>• Interferir na neurogênese</li>
            <li>• Comprometer a neuroplasticidade</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Sistema de Ativação Reticular</h3>
          <p className="mb-4">
            A ansiedade altera o sistema de ativação reticular, fazendo com que o cérebro 
            foque excessivamente em ameaças percebidas, reduzindo a capacidade de 
            processamento de outras informações.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estratégias Para Reduzir Ansiedade</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-500" />
              Técnicas Imediatas (Para Situações de Teste)
            </h3>
            <ul className="space-y-2">
              <li>• <strong>Respiração 4-7-8:</strong> Inspire por 4, segure por 7, expire por 8</li>
              <li>• <strong>Relaxamento muscular:</strong> Tensione e relaxe grupos musculares</li>
              <li>• <strong>Visualização positiva:</strong> Imagine-se tendo sucesso</li>
              <li>• <strong>Autofala positiva:</strong> Substitua pensamentos negativos</li>
              <li>• <strong>Mindfulness:</strong> Foque no momento presente</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-500" />
              Estratégias de Longo Prazo
            </h3>
            <ul className="space-y-2">
              <li>• <strong>Exercício regular:</strong> Reduz cortisol e aumenta endorfinas</li>
              <li>• <strong>Meditação diária:</strong> 10-20 minutos por dia</li>
              <li>• <strong>Sono adequado:</strong> 7-9 horas por noite</li>
              <li>• <strong>Alimentação balanceada:</strong> Evite açúcar e cafeína em excesso</li>
              <li>• <strong>Terapia cognitivo-comportamental:</strong> Para casos mais severos</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Preparação Para Testes de QI</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Antes do Teste</h3>
          <ul className="mb-4">
            <li>• Durma bem na noite anterior</li>
            <li>• Faça uma refeição leve e nutritiva</li>
            <li>• Chegue com antecedência</li>
            <li>• Pratique técnicas de relaxamento</li>
            <li>• Evite cafeína em excesso</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Durante o Teste</h3>
          <ul className="mb-4">
            <li>• Leia as instruções calmamente</li>
            <li>• Respire profundamente se sentir ansiedade</li>
            <li>• Não se fixe em questões difíceis</li>
            <li>• Mantenha postura relaxada</li>
            <li>• Confie no seu conhecimento</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Ansiedade e Diferentes Tipos de Inteligência</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Inteligência Fluida</h3>
          <p className="mb-4">
            A capacidade de raciocínio lógico e resolução de problemas novos é 
            particularmente vulnerável à ansiedade, pois requer recursos cognitivos 
            que são "sequestrados" pelo sistema de estresse.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Inteligência Cristalizada</h3>
          <p className="mb-4">
            O conhecimento adquirido e vocabulário são menos afetados pela ansiedade, 
            pois dependem mais de memória de longo prazo do que de processamento ativo.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Quando Buscar Ajuda Profissional</h2>
          <p className="mb-4">
            Considere buscar ajuda de um psicólogo ou psiquiatra se:
          </p>
          <ul className="mb-4">
            <li>• A ansiedade interfere significativamente no desempenho</li>
            <li>• Sintomas físicos são intensos (palpitações, sudorese)</li>
            <li>• Há evitação de situações importantes</li>
            <li>• Técnicas de autoajuda não são eficazes</li>
            <li>• A ansiedade afeta outras áreas da vida</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Suplementos e Ansiedade</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Suplementos Que Podem Ajudar</h3>
            <ul className="space-y-2">
              <li>• <strong>Magnésio:</strong> Relaxa o sistema nervoso</li>
              <li>• <strong>L-teanina:</strong> Promove calma sem sonolência</li>
              <li>• <strong>Ashwagandha:</strong> Adaptógeno que reduz cortisol</li>
              <li>• <strong>GABA:</strong> Neurotransmissor calmante</li>
              <li>• <strong>Ômega-3:</strong> Anti-inflamatório cerebral</li>
            </ul>
            <p className="text-sm mt-4 text-yellow-700">
              <strong>Importante:</strong> Consulte um médico antes de usar qualquer suplemento.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Exercícios Práticos</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Exercício de Respiração</h3>
              <ol className="space-y-2">
                <li>1. Sente-se confortavelmente</li>
                <li>2. Inspire pelo nariz por 4 segundos</li>
                <li>3. Segure a respiração por 7 segundos</li>
                <li>4. Expire pela boca por 8 segundos</li>
                <li>5. Repita 4-8 vezes</li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Técnica de Grounding 5-4-3-2-1</h3>
              <ul className="space-y-2">
                <li>• 5 coisas que você pode ver</li>
                <li>• 4 coisas que você pode tocar</li>
                <li>• 3 coisas que você pode ouvir</li>
                <li>• 2 coisas que você pode cheirar</li>
                <li>• 1 coisa que você pode saborear</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            A ansiedade pode mascarar significativamente o verdadeiro potencial cognitivo 
            de uma pessoa. Compreender essa relação é o primeiro passo para desenvolver 
            estratégias eficazes de manejo da ansiedade.
          </p>
          <p className="mb-4">
            Lembre-se: ter ansiedade não significa que você é menos inteligente. Com as 
            técnicas adequadas, é possível reduzir significativamente o impacto da ansiedade 
            na performance cognitiva e expressar todo seu potencial intelectual.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Teste Seu QI em Ambiente Relaxado</h3>
          <p className="text-muted-foreground mb-6">
            Faça nosso teste de QI em um ambiente confortável e sem pressão. 
            Descubra seu verdadeiro potencial cognitivo.
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
            {getRelatedArticles("qi-e-ansiedade", 3).map((article) => (
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

export default QIeAnsiedade;