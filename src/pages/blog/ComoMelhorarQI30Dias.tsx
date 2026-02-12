import { Brain, ArrowRight, Lightbulb, BookOpen, Clock, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";

const QIMedioBombeiros = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/qi-medio-bombeiros";
  const articleTitle = "QI Médio de Bombeiros: Inteligência e Coragem na Profissão";
  const articleDescription = "Descubra o QI médio de bombeiros, as habilidades cognitivas necessárias para a profissão e como a inteligência se relaciona com o trabalho de salvamento e combate a incêndios.";
  const publishDate = "2025-01-15";
  const modifiedDate = "2025-01-15";
  
  useSEO({
    title: "QI Médio de Bombeiros: Inteligência e Coragem na Profissão",
    description: articleDescription,
    url: articleUrl,
    keywords: "melhorar QI 30 dias, aumentar inteligência mês, QI em 30 dias, treino QI mensal, desenvolver QI rápido, programa 30 dias QI, desafio QI mês, melhorar inteligência 30 dias, treino intensivo QI, QI um mês",
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
          <span>QI médio de bombeiros</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          QI Médio de Bombeiros: Inteligência e Coragem na Profissão
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2025</time>
          <span>•</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Flame className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Bombeiros são profissionais que combinam coragem física com inteligência estratégica. 
            A profissão exige não apenas força e bravura, mas também raciocínio rápido, análise de 
            riscos e tomada de decisões sob pressão extrema. Descubra o QI médio de bombeiros e as 
            habilidades cognitivas essenciais para esta profissão heroica.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Médio de Bombeiros</h2>
          <p className="mb-4">
            Estudos sobre inteligência em profissões de emergência indicam que bombeiros tendem a ter 
            um QI médio entre <strong>100-110</strong>, ligeiramente acima da média populacional. Essa 
            faixa reflete as demandas cognitivas da profissão, que incluem análise de situações complexas, 
            planejamento estratégico e resolução rápida de problemas.
          </p>
          <p className="mb-4">
            É importante notar que o QI é apenas uma das muitas qualidades necessárias para ser um 
            bombeiro eficaz. Inteligência emocional, resistência física, trabalho em equipe e coragem 
            são igualmente cruciais para o sucesso na profissão.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Habilidades Cognitivas Essenciais</h2>
          <p className="mb-4">
            A profissão de bombeiro exige um conjunto específico de habilidades cognitivas:
          </p>
          <p className="mb-4">
            <strong>1. Raciocínio Espacial:</strong> Bombeiros precisam navegar em ambientes complexos, 
            muitas vezes com visibilidade limitada. A capacidade de visualizar estruturas tridimensionais 
            e planejar rotas de escape é fundamental.
          </p>
          <p className="mb-4">
            <strong>2. Tomada de Decisão Rápida:</strong> Em situações de emergência, cada segundo conta. 
            Bombeiros devem avaliar riscos, priorizar ações e tomar decisões críticas instantaneamente.
          </p>
          <p className="mb-4">
            <strong>3. Memória de Trabalho:</strong> Durante operações, bombeiros precisam lembrar de 
            múltiplas informações simultaneamente: localização de vítimas, estrutura do edifício, 
            posição da equipe e procedimentos de segurança.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Treinamento e Desenvolvimento Cognitivo</h2>
          <p className="mb-4">
            O treinamento de bombeiros é intensivo e desenvolve significativamente as capacidades 
            cognitivas. Simulações de emergência, estudos de caso e treinamento técnico constante 
            estimulam a neuroplasticidade e melhoram habilidades como:
          </p>
          <p className="mb-4">
            <strong>Análise de Riscos:</strong> Avaliar constantemente perigos potenciais desenvolve 
            o pensamento crítico e a capacidade de antecipar problemas.
          </p>
          <p className="mb-4">
            <strong>Resolução de Problemas Complexos:</strong> Cada incêndio ou emergência é único, 
            exigindo soluções criativas e adaptação rápida.
          </p>
          <p className="mb-4">
            <strong>Coordenação e Comunicação:</strong> Trabalhar em equipe sob pressão desenvolve 
            habilidades de comunicação eficaz e coordenação estratégica.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Inteligência Emocional na Profissão</h2>
          <p className="mb-4">
            Além do QI, a inteligência emocional é crucial para bombeiros. A capacidade de manter 
            a calma sob pressão, gerenciar estresse extremo e demonstrar empatia com vítimas são 
            habilidades que definem os melhores profissionais.
          </p>
          <p className="mb-4">
            Estudos mostram que bombeiros com alta inteligência emocional têm melhor desempenho em 
            situações de crise, menor taxa de burnout e maior satisfação profissional.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Seleção e Testes Cognitivos</h2>
          <p className="mb-4">
            Muitos corpos de bombeiros utilizam testes cognitivos como parte do processo seletivo. 
            Esses testes avaliam:
          </p>
          <p className="mb-4">
            <strong>Raciocínio Lógico:</strong> Capacidade de identificar padrões e resolver problemas 
            abstratos.
          </p>
          <p className="mb-4">
            <strong>Compreensão Verbal:</strong> Habilidade de entender instruções complexas e comunicar-se 
            efetivamente.
          </p>
          <p className="mb-4">
            <strong>Velocidade de Processamento:</strong> Rapidez em processar informações e reagir 
            adequadamente.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Bombeiros Desenvolvem Inteligência</h2>
          <p className="mb-4">
            A profissão de bombeiro naturalmente estimula o desenvolvimento cognitivo através de:
          </p>
          <p className="mb-4">
            <strong>Aprendizado Contínuo:</strong> Novas técnicas, equipamentos e procedimentos exigem 
            estudo constante e adaptação.
          </p>
          <p className="mb-4">
            <strong>Experiências Diversas:</strong> Cada emergência apresenta desafios únicos que 
            expandem o repertório cognitivo.
          </p>
          <p className="mb-4">
            <strong>Trabalho em Equipe:</strong> Colaboração constante desenvolve inteligência social 
            e habilidades de comunicação.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            Bombeiros são profissionais que combinam inteligência cognitiva com coragem física e 
            inteligência emocional. Com um QI médio ligeiramente acima da média populacional, eles 
            demonstram que o sucesso na profissão depende de um conjunto diversificado de habilidades.
          </p>
          <p className="mb-4">
            A profissão não apenas exige inteligência, mas também a desenvolve continuamente através 
            de treinamento, experiências práticas e desafios constantes. Bombeiros são exemplos de 
            como diferentes tipos de inteligência trabalham juntos para salvar vidas e proteger 
            comunidades.
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
            {getRelatedArticles("qi-medio-bombeiros", 3).map((article) => (
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

export default QIMedioBombeiros;
