import { Brain, ArrowRight, BookOpen, Clock, Heart, Lightbulb, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";

const ReligiosidadeEQI = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/religiosidade-e-qi";
  const articleTitle = "Religiosidade e QI: O Que a Ciência Diz Sobre Esta Relação";
  const articleDescription = "Explore a relação entre religiosidade e inteligência segundo estudos científicos. Uma análise equilibrada sobre fé, cognição e bem-estar.";
  const publishDate = "2024-01-15";
  const modifiedDate = "2024-01-15";
  
  useSEO({
    title: "Religiosidade e QI",
    description: articleDescription,
    url: articleUrl,
    keywords: "religiosidade QI, religião inteligência, fé cognição, espiritualidade QI, religião cérebro, religiosidade desenvolvimento cognitivo, fé inteligência, religião mente, espiritualidade cognição, QI religião",
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
      "author": { "@type": "Organization", "name": "Equipe Bom QI" },
      "publisher": { "@type": "Organization", "name": "Equipe Bom QI", "logo": { "@type": "ImageObject", "url": "https://bomqi.com.br/favicon-brain-icon.png" } }
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
          <span>Religiosidade e QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2024</time>
          <span>•</span>
          <span>9 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Heart className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            A relação entre religiosidade e inteligência é um tema que gera debates intensos. 
            Neste artigo, exploramos o que a ciência realmente diz sobre esta conexão, 
            apresentando uma visão equilibrada e baseada em evidências.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que Dizem os Estudos</h2>
          <p className="mb-4">
            Diversas pesquisas investigaram a correlação entre religiosidade e QI. Uma meta-análise 
            de 2013 analisou 63 estudos e encontrou uma correlação negativa pequena, mas significativa. 
            No entanto, é crucial entender o contexto e as limitações dessas pesquisas.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Pontos Importantes
            </h3>
            <ul className="space-y-2">
              <li>• Correlação não implica causalidade</li>
              <li>• Efeitos são pequenos e há muita sobreposição</li>
              <li>• Fatores socioeconômicos influenciam ambas as variáveis</li>
              <li>• Definições de "religiosidade" variam entre estudos</li>
              <li>• Pessoas religiosas e não-religiosas existem em todos os níveis de QI</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Diferentes Perspectivas</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Hipótese do Pensamento Analítico</h3>
          <p className="mb-4">
            Alguns pesquisadores sugerem que o pensamento analítico, associado a maior QI, 
            pode levar a questionar crenças tradicionais. No entanto, muitos cientistas 
            brilhantes são religiosos.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Hipótese Sociocultural</h3>
          <p className="mb-4">
            Fatores como educação, urbanização e acesso a informação podem influenciar 
            tanto o QI quanto a religiosidade, explicando parte da correlação observada.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Benefícios Cognitivos da Religiosidade</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <Users className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Comunidade</h3>
              <p className="text-sm">
                Participação em comunidades religiosas oferece estimulação social e 
                cognitiva, especialmente para idosos.
              </p>
            </Card>
            
            <Card className="p-6">
              <Target className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Propósito</h3>
              <p className="text-sm">
                Senso de propósito e significado está associado a melhor saúde mental 
                e função cognitiva.
              </p>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Práticas Religiosas e Cérebro</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Efeitos Positivos Documentados</h3>
            <ul className="space-y-3">
              <li><strong>Meditação/Oração:</strong> Reduz estresse e melhora atenção</li>
              <li><strong>Leitura religiosa:</strong> Estimula habilidades verbais</li>
              <li><strong>Música sacra:</strong> Benefícios cognitivos da música</li>
              <li><strong>Rituais:</strong> Estrutura e rotina beneficiam função executiva</li>
              <li><strong>Comunidade:</strong> Interação social protege contra declínio cognitivo</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Cientistas Religiosos</h2>
          <p className="mb-4">
            Muitos cientistas notáveis foram ou são religiosos, demonstrando que fé e 
            alta inteligência não são mutuamente exclusivas:
          </p>
          <ul className="mb-4">
            <li>• Isaac Newton - Físico e teólogo</li>
            <li>• Georges Lemaître - Padre e criador da teoria do Big Bang</li>
            <li>• Francis Collins - Geneticista, líder do Projeto Genoma Humano</li>
            <li>• Gregor Mendel - Monge e pai da genética</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Limitações das Pesquisas</h2>
          <p className="mb-4">
            É importante reconhecer as limitações dos estudos nesta área:
          </p>
          <ul className="mb-4">
            <li>• Maioria dos estudos são correlacionais</li>
            <li>• Amostras frequentemente limitadas a países ocidentais</li>
            <li>• Dificuldade em definir e medir "religiosidade"</li>
            <li>• Vieses de publicação podem existir</li>
            <li>• Fatores confundidores nem sempre são controlados</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Uma Visão Equilibrada</h2>
          <p className="mb-4">
            A relação entre religiosidade e QI é complexa e não deve ser simplificada. 
            Pessoas de todas as crenças (ou ausência delas) podem ter qualquer nível de 
            inteligência. O que importa é:
          </p>
          <ul className="mb-4">
            <li>• Respeito mútuo entre diferentes visões de mundo</li>
            <li>• Reconhecimento de que inteligência tem múltiplas dimensões</li>
            <li>• Valorização tanto do pensamento crítico quanto da sabedoria</li>
            <li>• Foco no bem-estar e desenvolvimento pessoal</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            Embora alguns estudos mostrem correlações entre religiosidade e QI, estas são 
            pequenas e não devem ser usadas para fazer julgamentos sobre indivíduos. 
            Tanto pessoas religiosas quanto não-religiosas podem ser altamente inteligentes, 
            e ambas as perspectivas têm contribuído significativamente para o conhecimento humano.
          </p>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">
            Curioso sobre suas habilidades cognitivas? Faça nosso teste de QI em apenas 3 minutos.
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
            {getRelatedArticles("religiosidade-e-qi", 3).map((article) => (
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

export default ReligiosidadeEQI;
