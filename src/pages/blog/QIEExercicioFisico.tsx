import { Brain, ArrowRight, Lightbulb, BookOpen, Clock, Activity, Heart, Zap, Target } from "lucide-react";
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

const QIeExercicioFisico = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/qi-e-exercicio-fisico";
  const articleTitle = "QI e Exercício Físico: Como a Atividade Física Melhora a Inteligência";
  const articleDescription = "Descubra como o exercício físico impacta diretamente o QI e a função cognitiva. Evidências científicas sobre neuroplasticidade e performance mental.";
  const publishDate = "2024-01-15";
  const modifiedDate = "2024-01-15";
  
  useSEO({
    title: "QI e Exercício Físico",
    description: articleDescription,
    url: articleUrl,
    keywords: "QI exercício físico, inteligência atividade física, exercício cognição, QI treino, exercício cérebro, QI fitness, exercício desenvolvimento cognitivo, inteligência exercício, QI atividade física, exercício mente",
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
          <span>QI e Exercício Físico</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          QI e Exercício Físico: Como a Atividade Física Melhora a Inteligência
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2024</time>
          <span>•</span>
          <span>10 min de leitura</span>
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Activity className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            A conexão entre exercício físico e inteligência é mais forte do que você imagina. 
            Pesquisas científicas mostram que a atividade física regular não apenas fortalece 
            o corpo, mas também potencializa significativamente as funções cognitivas e o QI.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">A Ciência Por Trás da Conexão</h2>
          <p className="mb-4">
            Quando você se exercita, seu cérebro passa por mudanças profundas. O exercício 
            aumenta a produção de BDNF (Fator Neurotrófico Derivado do Cérebro), uma proteína 
            que atua como "fertilizante" para os neurônios, promovendo seu crescimento e conexão.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Benefícios Neurológicos do Exercício
            </h3>
            <ul className="space-y-2">
              <li>• <strong>Neurogênese:</strong> Criação de novos neurônios</li>
              <li>• <strong>Neuroplasticidade:</strong> Maior capacidade de adaptação cerebral</li>
              <li>• <strong>Vascularização:</strong> Melhor fluxo sanguíneo para o cérebro</li>
              <li>• <strong>Neurotransmissores:</strong> Aumento de dopamina e serotonina</li>
              <li>• <strong>Redução do estresse:</strong> Diminuição do cortisol</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Impacto no QI e Funções Cognitivas</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Memória de Trabalho</h3>
          <p className="mb-4">
            Estudos mostram que pessoas fisicamente ativas têm melhor memória de trabalho - 
            a capacidade de manter e manipular informações mentalmente. Esta é uma das 
            habilidades mais correlacionadas com o QI.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Velocidade de Processamento</h3>
          <p className="mb-4">
            O exercício regular melhora a velocidade com que processamos informações. 
            Atletas frequentemente demonstram tempos de reação mais rápidos e melhor 
            coordenação entre diferentes áreas cerebrais.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Função Executiva</h3>
          <p className="mb-4">
            As funções executivas - planejamento, tomada de decisão, controle inibitório - 
            são significativamente aprimoradas com atividade física regular. Estas habilidades 
            são fundamentais para um QI elevado.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Tipos de Exercício Mais Eficazes</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <Heart className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Exercício Aeróbico</h3>
              <p className="text-sm mb-4">
                Corrida, natação, ciclismo e caminhada rápida são excelentes para 
                aumentar o BDNF e melhorar a função cognitiva.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Melhora o fluxo sanguíneo cerebral</li>
                <li>• Aumenta o volume do hipocampo</li>
                <li>• Reduz inflamação cerebral</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <Zap className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Exercício de Alta Intensidade</h3>
              <p className="text-sm mb-4">
                HIIT (Treino Intervalado de Alta Intensidade) tem efeitos potentes 
                na neuroplasticidade e função cognitiva.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Maximiza produção de BDNF</li>
                <li>• Melhora atenção e foco</li>
                <li>• Aumenta resistência mental</li>
              </ul>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Evidências Científicas</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Estudos Importantes</h3>
            <ul className="space-y-3">
              <li>
                <strong>Universidade de Illinois (2009):</strong> Crianças com melhor 
                condicionamento físico tiveram desempenho 20% superior em testes cognitivos.
              </li>
              <li>
                <strong>Harvard Medical School (2018):</strong> Adultos que se exercitaram 
                por 6 meses mostraram aumento de 15% na memória de trabalho.
              </li>
              <li>
                <strong>University of British Columbia (2014):</strong> Exercício aeróbico 
                regular aumentou o tamanho do hipocampo em 2%.
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Protocolo Ideal Para Maximizar QI</h2>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Programa Semanal Recomendado
            </h3>
            <ul className="space-y-2">
              <li>• <strong>3-4x por semana:</strong> Exercício aeróbico (30-45 min)</li>
              <li>• <strong>2x por semana:</strong> Treino de força (45-60 min)</li>
              <li>• <strong>1-2x por semana:</strong> HIIT (20-30 min)</li>
              <li>• <strong>Diariamente:</strong> Caminhada leve (20-30 min)</li>
              <li>• <strong>2-3x por semana:</strong> Atividades coordenativas (yoga, dança)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Timing e Intensidade</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Melhor Horário</h3>
          <p className="mb-4">
            Exercitar-se pela manhã tem benefícios únicos para a cognição. O exercício 
            matinal aumenta a produção de neurotransmissores que melhoram o foco e a 
            concentração durante todo o dia.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Intensidade Ideal</h3>
          <p className="mb-4">
            Para maximizar benefícios cognitivos, mantenha intensidade moderada a vigorosa 
            (65-85% da frequência cardíaca máxima). Exercícios muito leves têm benefícios 
            limitados, enquanto exercícios excessivamente intensos podem ser contraproducentes.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Exercício e Diferentes Idades</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Crianças e Adolescentes</h3>
          <p className="mb-4">
            Em jovens, o exercício é crucial para o desenvolvimento cognitivo. Crianças 
            ativas têm melhor desempenho acadêmico, maior capacidade de atenção e 
            habilidades de resolução de problemas mais desenvolvidas.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Adultos</h3>
          <p className="mb-4">
            Para adultos, o exercício regular pode prevenir o declínio cognitivo e 
            até mesmo reverter alguns efeitos do envelhecimento cerebral. Estudos 
            mostram que nunca é tarde para começar.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Idosos</h3>
          <p className="mb-4">
            Em idosos, o exercício é uma das intervenções mais eficazes para manter 
            a função cognitiva. Pode reduzir o risco de demência em até 40%.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Mecanismos Moleculares</h2>
          <p className="mb-4">
            O exercício ativa cascatas moleculares complexas que beneficiam o cérebro:
          </p>
          <ul className="mb-4">
            <li>• <strong>BDNF:</strong> Promove crescimento e sobrevivência neuronal</li>
            <li>• <strong>IGF-1:</strong> Facilita neuroplasticidade</li>
            <li>• <strong>VEGF:</strong> Estimula formação de novos vasos sanguíneos</li>
            <li>• <strong>Endorfinas:</strong> Melhoram humor e reduzem estresse</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Dicas Práticas</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Para Iniciantes</h3>
              <ul className="space-y-2">
                <li>• Comece com 15-20 minutos de caminhada</li>
                <li>• Aumente gradualmente a intensidade</li>
                <li>• Escolha atividades prazerosas</li>
                <li>• Seja consistente, não perfeito</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Para Avançados</h3>
              <ul className="space-y-2">
                <li>• Varie os tipos de exercício</li>
                <li>• Inclua desafios coordenativos</li>
                <li>• Monitore a recuperação</li>
                <li>• Combine com outras práticas cognitivas</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            A relação entre exercício físico e QI é inegável. A atividade física regular 
            não apenas melhora a saúde do corpo, mas também potencializa significativamente 
            as capacidades cognitivas, memória, atenção e inteligência geral.
          </p>
          <p className="mb-4">
            Para maximizar os benefícios cognitivos, mantenha uma rotina consistente de 
            exercícios variados, incluindo atividades aeróbicas, de força e coordenativas. 
            Lembre-se: um corpo ativo é a base para uma mente afiada.
          </p>
        </div>

        {/* CTA */}
        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "QI e Exercício Físico?",
                    "answer": "Sim. Evidências científicas mostram que é possível através de métodos específicos abordados neste artigo."
          },
          {
                    "question": "Qual a base científica disso?",
                    "answer": "Estudos de neuroplasticidade e psicologia cognitiva demonstram que cérebro pode ser desenvolvido em qualquer idade com estímulos adequados."
          },
          {
                    "question": "Quanto tempo para ver resultados práticos?",
                    "answer": "Primeiros resultados em 4-8 semanas. Mudanças significativas em 6-12 meses de aplicação consistente dos métodos."
          },
          {
                    "question": "Isso funciona para minha idade?",
                    "answer": "Sim. Princípios se aplicam a todas as idades, com adaptações apropriadas. Potencial varia mas desenvolvimento é sempre possível."
          },
          {
                    "question": "Como começar a aplicar isso hoje?",
                    "answer": "Escolha 1-2 estratégias do artigo, pratique 20-30 min/dia, monitore progresso semanalmente e ajuste conforme necessário."
          }
]} />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI Atual</h3>
          <p className="text-muted-foreground mb-6">
            Que tal descobrir seu QI atual antes de começar sua jornada de melhoria 
            através do exercício? Faça nosso teste em apenas 3 minutos.
          </p>
          <Link to="/teste">
            <Button size="lg" className="gap-2">
              Fazer o Teste de QI
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
            {getRelatedArticles("qi-e-exercicio-fisico", 3).map((article) => (
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

export default QIeExercicioFisico;