import { Brain, ArrowRight, Lightbulb, BookOpen, Clock, AlertCircle, Heart, TrendingUp, Target } from "lucide-react";
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

const QIBaixoCompleto = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/qi-baixo";
  const articleTitle = "QI Baixo: Causas, Sinais e Como Melhorar a Inteligência";
  const articleDescription = "Entenda o que significa ter QI baixo, suas causas e como é possível melhorar a inteligência através de estratégias científicas comprovadas.";
  const publishDate = "2024-01-15";
  const modifiedDate = "2024-01-15";
  
  useSEO({
    title: "QI Baixo",
    description: articleDescription,
    url: articleUrl,
    keywords: "QI baixo, inteligência abaixo média, QI inferior, baixo QI características, QI reduzido, inteligência limitada, QI abaixo 90, déficit cognitivo, QI baixo causas, melhorar QI baixo",
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
          <span>QI Baixo</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          QI Baixo: Causas, Sinais e Como Melhorar a Inteligência
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2024</time>
          <span>•</span>
          <span>15 min de leitura</span>
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Brain className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Ter um QI considerado baixo não é uma sentença definitiva. A inteligência é 
            mais complexa do que um único número, e existem muitas formas de desenvolver 
            e melhorar as capacidades cognitivas ao longo da vida.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que Significa QI Baixo?</h2>
          <p className="mb-4">
            Tecnicamente, um QI abaixo de 85 é considerado abaixo da média, e abaixo de 70 
            pode indicar deficiência intelectual. No entanto, é crucial entender que:
          </p>
          <ul className="mb-4">
            <li>• O QI é apenas uma medida de certas habilidades cognitivas</li>
            <li>• Existem múltiplos tipos de inteligência</li>
            <li>• Fatores ambientais podem influenciar significativamente os resultados</li>
            <li>• A inteligência pode ser desenvolvida com treino adequado</li>
          </ul>

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

          <h2 className="text-3xl font-bold mt-12 mb-6">Possíveis Causas de QI Baixo</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Fatores Genéticos</h3>
          <p className="mb-4">
            Embora a genética influencie a inteligência, ela representa apenas 50-80% 
            do QI. Isso significa que há muito espaço para melhoria através de fatores 
            ambientais e esforço pessoal.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Fatores Ambientais</h3>
          <ul className="mb-4">
            <li>• <strong>Nutrição inadequada:</strong> Especialmente na infância</li>
            <li>• <strong>Falta de estímulo educacional:</strong> Ambiente pouco estimulante</li>
            <li>• <strong>Estresse crônico:</strong> Afeta o desenvolvimento cerebral</li>
            <li>• <strong>Problemas de saúde:</strong> Que afetam o cérebro</li>
            <li>• <strong>Exposição a toxinas:</strong> Como chumbo ou álcool</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Fatores Temporários</h3>
          <p className="mb-4">
            Muitas vezes, um resultado baixo em teste de QI pode ser devido a:
          </p>
          <ul className="mb-4">
            <li>• Ansiedade durante o teste</li>
            <li>• Falta de familiaridade com o formato</li>
            <li>• Problemas de saúde no momento do teste</li>
            <li>• Falta de motivação</li>
            <li>• Barreiras linguísticas ou culturais</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Sinais Que Podem Indicar QI Baixo</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-500" />
              Importante: Estes sinais não são definitivos
            </h3>
            <p className="text-sm text-yellow-700">
              A presença destes sinais não confirma QI baixo. Muitos fatores podem 
              influenciar o desempenho cognitivo temporariamente.
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Dificuldades Acadêmicas</h3>
          <ul className="mb-4">
            <li>• Dificuldade persistente com matemática</li>
            <li>• Problemas de compreensão de leitura</li>
            <li>• Dificuldade para seguir instruções complexas</li>
            <li>• Problemas com raciocínio abstrato</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Desafios Sociais</h3>
          <ul className="mb-4">
            <li>• Dificuldade para entender situações sociais</li>
            <li>• Problemas com comunicação</li>
            <li>• Dificuldade para fazer amigos</li>
            <li>• Comportamentos inadequados para a idade</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Melhorar o QI</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              A Boa Notícia: O QI Pode Ser Melhorado
            </h3>
            <p>
              Estudos mostram que é possível aumentar o QI através de treino cognitivo, 
              educação adequada e mudanças no estilo de vida. A neuroplasticidade permite 
              que o cérebro se adapte e melhore ao longo da vida.
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Estratégias Comprovadas</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <Brain className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-bold mb-2">Treino Cognitivo</h4>
              <ul className="text-sm space-y-1">
                <li>• Jogos de memória de trabalho</li>
                <li>• Exercícios de raciocínio lógico</li>
                <li>• Quebra-cabeças complexos</li>
                <li>• Aprendizado de novas habilidades</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <Heart className="w-8 h-8 text-red-500 mb-4" />
              <h4 className="text-lg font-bold mb-2">Saúde Física</h4>
              <ul className="text-sm space-y-1">
                <li>• Exercício aeróbico regular</li>
                <li>• Alimentação rica em ômega-3</li>
                <li>• Sono adequado (7-9 horas)</li>
                <li>• Redução do estresse</li>
              </ul>
            </Card>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Educação e Aprendizado</h3>
          <ul className="mb-4">
            <li>• <strong>Leitura regular:</strong> Expande vocabulário e compreensão</li>
            <li>• <strong>Aprender idiomas:</strong> Melhora flexibilidade cognitiva</li>
            <li>• <strong>Música:</strong> Tocar instrumentos desenvolve múltiplas áreas cerebrais</li>
            <li>• <strong>Matemática:</strong> Fortalece raciocínio lógico</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Inteligências Múltiplas</h2>
          <p className="mb-4">
            Howard Gardner propôs que existem múltiplos tipos de inteligência. 
            Mesmo com QI baixo em testes tradicionais, você pode ter alta inteligência em:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <ul className="space-y-2">
              <li>• <strong>Inteligência Musical:</strong> Habilidade com música</li>
              <li>• <strong>Inteligência Corporal:</strong> Coordenação e movimento</li>
              <li>• <strong>Inteligência Espacial:</strong> Visualização e orientação</li>
              <li>• <strong>Inteligência Interpessoal:</strong> Relacionamentos sociais</li>
            </ul>
            <ul className="space-y-2">
              <li>• <strong>Inteligência Intrapessoal:</strong> Autoconhecimento</li>
              <li>• <strong>Inteligência Naturalista:</strong> Conexão com a natureza</li>
              <li>• <strong>Inteligência Existencial:</strong> Questões filosóficas</li>
              <li>• <strong>Inteligência Criativa:</strong> Pensamento inovador</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estratégias Práticas Para o Dia a Dia</h2>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Rotina Diária Para Melhorar o QI
            </h3>
            <ul className="space-y-2">
              <li>• <strong>Manhã:</strong> 20 min de exercício + 15 min de leitura</li>
              <li>• <strong>Tarde:</strong> Aprender algo novo (idioma, habilidade)</li>
              <li>• <strong>Noite:</strong> Jogos cognitivos ou quebra-cabeças</li>
              <li>• <strong>Semanal:</strong> Socialização e atividades culturais</li>
              <li>• <strong>Mensal:</strong> Desafios novos e experiências diferentes</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Quando Buscar Ajuda Profissional</h2>
          <p className="mb-4">
            Considere buscar ajuda de um psicólogo ou neuropsicólogo se:
          </p>
          <ul className="mb-4">
            <li>• Há dificuldades significativas no trabalho ou escola</li>
            <li>• Problemas persistentes de aprendizado</li>
            <li>• Dificuldades sociais importantes</li>
            <li>• Suspeita de condições como TDAH ou dislexia</li>
            <li>• Necessidade de avaliação mais detalhada</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Mitos Sobre QI Baixo</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Mitos Comuns</h3>
            <ul className="space-y-3">
              <li>
                <strong>❌ "QI baixo significa que você não pode ter sucesso"</strong><br />
                <span className="text-sm">Muitas pessoas com QI baixo têm carreiras bem-sucedidas</span>
              </li>
              <li>
                <strong>❌ "O QI não pode ser mudado"</strong><br />
                <span className="text-sm">Estudos mostram que o QI pode aumentar com treino</span>
              </li>
              <li>
                <strong>❌ "QI baixo significa baixa inteligência em tudo"</strong><br />
                <span className="text-sm">Existem múltiplos tipos de inteligência</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Histórias de Sucesso</h2>
          <p className="mb-4">
            Muitas pessoas famosas tiveram dificuldades acadêmicas iniciais ou QI considerado baixo:
          </p>
          <ul className="mb-4">
            <li>• <strong>Richard Branson:</strong> Dislexia, hoje bilionário</li>
            <li>• <strong>Temple Grandin:</strong> Autismo, revolucionou a pecuária</li>
            <li>• <strong>Cher:</strong> Dificuldades de aprendizado, estrela mundial</li>
            <li>• <strong>Tim Tebow:</strong> Dislexia, atleta profissional</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            Ter QI baixo não define seu potencial ou valor como pessoa. A inteligência 
            é multifacetada, e existem muitas formas de desenvolver suas capacidades 
            cognitivas e ter uma vida plena e bem-sucedida.
          </p>
          <p className="mb-4">
            O mais importante é focar no crescimento contínuo, desenvolver seus pontos 
            fortes e buscar estratégias que funcionem para você. Com dedicação e as 
            abordagens certas, é possível melhorar significativamente suas habilidades 
            cognitivas.
          </p>
        </div>

        {/* CTA */}
        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "QI Baixo?",
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
          <h3 className="text-2xl font-bold mb-4">Descubra Seu Verdadeiro Potencial</h3>
          <p className="text-muted-foreground mb-6">
            Faça nosso teste de QI em um ambiente confortável e descubra suas 
            capacidades cognitivas reais. Lembre-se: um número não define você.
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
            {getRelatedArticles("qi-baixo", 3).map((article) => (
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

export default QIBaixoCompleto;