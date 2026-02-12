import { Brain, ArrowRight, BookOpen, Clock, Users, Lightbulb, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";

const QIMedioFilhos = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/qi-medio-filhos";
  const articleTitle = "QI Médio dos Filhos: Entenda a Inteligência das Crianças";
  const articleDescription = "Descubra qual é o QI médio das crianças, como ele se desenvolve e o que os pais podem fazer para estimular a inteligência dos filhos.";
  const publishDate = "2024-01-15";
  const modifiedDate = "2024-01-15";
  
  useSEO({
    title: "QI Médio dos Filhos",
    description: articleDescription,
    url: articleUrl,
    keywords: "QI médio filhos, inteligência crianças, QI filhos, crianças inteligentes, QI infantil, inteligência infância, QI médio criança, filhos QI alto, crianças inteligência, QI desenvolvimento infantil",
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
      "author": { "@type": "Organization", "name": "BomQI" },
      "publisher": { "@type": "Organization", "name": "BomQI", "logo": { "@type": "ImageObject", "url": "https://bomqi.com.br/favicon-brain-icon.png" } }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bomqi.com.br" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://bomqi.com.br/blog" },
        { "@type": "ListItem", "position": 3, "name": articleTitle, "item": articleUrl }
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
          <span>QI Médio dos Filhos</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2024</time>
          <span>•</span>
          <span>8 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Users className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Entender o QI médio das crianças é fundamental para pais que desejam apoiar o desenvolvimento 
            cognitivo de seus filhos. Neste artigo, exploramos o que é considerado normal e como estimular 
            a inteligência infantil.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que é QI Médio em Crianças?</h2>
          <p className="mb-4">
            O QI médio para crianças, assim como para adultos, é definido como 100 pontos. No entanto, 
            é importante entender que o QI infantil pode variar significativamente durante o desenvolvimento 
            e não é um indicador fixo de inteligência futura.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Faixas de QI em Crianças
            </h3>
            <ul className="space-y-2">
              <li>• <strong>130+:</strong> Superdotação</li>
              <li>• <strong>120-129:</strong> Inteligência superior</li>
              <li>• <strong>110-119:</strong> Acima da média</li>
              <li>• <strong>90-109:</strong> Média (maioria das crianças)</li>
              <li>• <strong>80-89:</strong> Abaixo da média</li>
              <li>• <strong>70-79:</strong> Limítrofe</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Desenvolvimento do QI por Idade</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Primeira Infância (0-5 anos)</h3>
          <p className="mb-4">
            Nesta fase, o cérebro está em rápido desenvolvimento. Testes de QI tradicionais não são 
            aplicáveis, mas avaliações de desenvolvimento podem indicar o potencial cognitivo.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Idade Escolar (6-12 anos)</h3>
          <p className="mb-4">
            O QI começa a se estabilizar nesta fase. Crianças nesta idade podem fazer testes padronizados 
            como o WISC (Wechsler Intelligence Scale for Children).
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Adolescência (13-17 anos)</h3>
          <p className="mb-4">
            O QI tende a se estabilizar mais, embora ainda possa haver variações. O ambiente e 
            estímulos continuam influenciando o desenvolvimento cognitivo.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Fatores que Influenciam o QI dos Filhos</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <Lightbulb className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Fatores Genéticos</h3>
              <p className="text-sm">
                Estudos mostram que 50-80% da variação no QI pode ser atribuída à genética. 
                Filhos de pais com QI alto tendem a ter QI acima da média.
              </p>
            </Card>
            
            <Card className="p-6">
              <Target className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Fatores Ambientais</h3>
              <p className="text-sm">
                Nutrição, educação, estímulos cognitivos e ambiente familiar têm impacto 
                significativo no desenvolvimento da inteligência.
              </p>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Estimular a Inteligência dos Filhos</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Estratégias Comprovadas</h3>
            <ul className="space-y-3">
              <li><strong>Leitura diária:</strong> Ler para e com os filhos desde cedo</li>
              <li><strong>Jogos educativos:</strong> Quebra-cabeças, jogos de memória e lógica</li>
              <li><strong>Música:</strong> Aprender um instrumento estimula múltiplas áreas cerebrais</li>
              <li><strong>Atividade física:</strong> Exercícios melhoram a função cognitiva</li>
              <li><strong>Sono adequado:</strong> Fundamental para consolidação da memória</li>
              <li><strong>Nutrição balanceada:</strong> Ômega-3, ferro e vitaminas são essenciais</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Quando se Preocupar?</h2>
          <p className="mb-4">
            É importante observar marcos de desenvolvimento. Consulte um especialista se notar:
          </p>
          <ul className="mb-4">
            <li>• Atrasos significativos na fala ou linguagem</li>
            <li>• Dificuldades persistentes de aprendizagem</li>
            <li>• Problemas de atenção e concentração</li>
            <li>• Dificuldades de socialização</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">O QI Não é Tudo</h2>
          <p className="mb-4">
            Lembre-se que o QI é apenas uma medida de certas habilidades cognitivas. Inteligência 
            emocional, criatividade, persistência e habilidades sociais são igualmente importantes 
            para o sucesso na vida.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            O QI médio dos filhos pode ser influenciado positivamente através de um ambiente 
            estimulante, nutrição adequada e apoio emocional. Mais importante que números é 
            criar um ambiente onde a criança possa desenvolver todo seu potencial.
          </p>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">
            Quer saber mais sobre inteligência? Faça nosso teste de QI em apenas 3 minutos.
          </p>
          <Link to="/teste">
            <Button size="lg" className="gap-2">
              Fazer o Teste de QI
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
            {getRelatedArticles("qi-medio-filhos", 3).map((article) => (
              <Card key={article.slug} className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 group cursor-pointer">
                <Link to={`/blog/${article.slug}`} className="block">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">{article.category}</span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" /></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.description}</p>
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

export default QIMedioFilhos;
