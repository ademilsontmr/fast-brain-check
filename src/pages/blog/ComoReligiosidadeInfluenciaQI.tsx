import { Brain, ArrowRight, Lightbulb, BookOpen, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";

const ComoReligiosidadeInfluenciaQI = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/como-religiosidade-influencia-qi";
  const articleTitle = "Como a Religiosidade Influencia o QI: Análise Científica Completa";
  const articleDescription = "Descubra como religiosidade e QI se relacionam. Análise científica sobre correlação, fatores que influenciam, diferenças entre religiões, e impacto no desenvolvimento cognitivo.";
  const publishDate = "2025-01-15";
  const modifiedDate = "2025-01-15";
  
  useSEO({
    title: "Como a Religiosidade Influencia o QI: Análise Científica Completa",
    description: articleDescription,
    url: articleUrl,
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

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Como religiosidade influencia QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Como a Religiosidade Influencia o QI: Análise Científica Completa
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2025</time>
          <span>•</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Heart className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            A relação entre religiosidade e QI é um tópico complexo e frequentemente debatido. Estudos científicos 
            mostram correlações interessantes, mas a relação não é simples. Descubra como religiosidade influencia 
            o QI, fatores que explicam correlações, e nuances importantes dessa relação.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Correlação Entre Religiosidade e QI</h2>
          <p className="mb-4">
            Estudos científicos mostram uma correlação negativa entre religiosidade e QI - pessoas mais religiosas 
            tendem a ter QI ligeiramente menor, em média. No entanto, essa correlação é pequena e há muitas nuances 
            e fatores explicativos importantes.
          </p>
          <p className="mb-4">
            <strong>Dados dos estudos:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Correlação negativa pequena a moderada (r ≈ -0.20 a -0.30)</li>
            <li>Diferença média de aproximadamente 5-10 pontos de QI</li>
            <li>Variação significativa entre diferentes religiões e contextos</li>
            <li>Correlação mais forte em alguns países/regiões do que em outros</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Fatores que Explicam a Correlação</h2>
          <p className="mb-4">
            A correlação entre religiosidade e QI não significa que religiosidade causa QI menor, ou vice-versa. 
            Vários fatores podem explicar essa relação:
          </p>
          <p className="mb-4">
            <strong>1. Educação e Oportunidades:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Pessoas com mais educação tendem a ter QI mais alto</li>
            <li>Educação superior pode estar associada a menor religiosidade em alguns contextos</li>
            <li>Oportunidades educacionais podem influenciar tanto QI quanto religiosidade</li>
          </ul>
          <p className="mb-4">
            <strong>2. Contexto Cultural e Social:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Em sociedades mais seculares, pessoas com QI alto podem ser menos religiosas</li>
            <li>Em sociedades mais religiosas, a correlação pode ser diferente ou inexistente</li>
            <li>Pressão social e normas culturais influenciam expressão de religiosidade</li>
          </ul>
          <p className="mb-4">
            <strong>3. Pensamento Analítico vs. Intuitivo:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>QI alto está associado a pensamento mais analítico</li>
            <li>Pensamento analítico pode reduzir crenças religiosas em alguns contextos</li>
            <li>Mas isso não significa que pessoas inteligentes não podem ser religiosas</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Diferenças Entre Religiões</h2>
          <p className="mb-4">
            A relação entre religiosidade e QI varia entre diferentes religiões e denominações:
          </p>
          <p className="mb-4">
            <strong>Variações observadas:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Algumas religiões podem ter correlação mais forte que outras</li>
            <li>Denominações mais liberais podem ter correlação diferente de mais conservadoras</li>
            <li>Contexto cultural e histórico influencia essas diferenças</li>
            <li>Importante não generalizar para todos os grupos religiosos</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Religiosidade e Desenvolvimento Cognitivo</h2>
          <p className="mb-4">
            Embora haja correlação negativa entre religiosidade e QI, isso não significa que religiosidade 
            prejudica desenvolvimento cognitivo. Na verdade, aspectos da religiosidade podem ter benefícios:
          </p>
          <p className="mb-4">
            <strong>Benefícios potenciais:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Comunidade e suporte social</li>
            <li>Estrutura e disciplina</li>
            <li>Valores e propósito</li>
            <li>Bem-estar mental e emocional</li>
            <li>Atividades educacionais e culturais</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Pessoas Inteligentes e Religiosas</h2>
          <p className="mb-4">
            É importante enfatizar que muitas pessoas com QI alto são religiosas. A correlação é uma tendência 
            estatística, não uma regra absoluta. Há muitos exemplos de pessoas altamente inteligentes que são 
            profundamente religiosas.
          </p>
          <p className="mb-4">
            <strong>Exemplos históricos:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Muitos cientistas e filósofos proeminentes foram/são religiosos</li>
            <li>Religiosidade e inteligência não são mutuamente exclusivas</li>
            <li>Diferentes tipos de inteligência podem coexistir com religiosidade</li>
            <li>Contexto pessoal e cultural influencia essa relação</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI e Espiritualidade</h2>
          <p className="mb-4">
            É importante distinguir entre religiosidade organizada e espiritualidade. Alguns estudos sugerem 
            que espiritualidade (não necessariamente religião organizada) pode ter correlação diferente com QI.
          </p>
          <p className="mb-4">
            <strong>Diferenças:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Religiosidade organizada: participação em instituições religiosas</li>
            <li>Espiritualidade: crenças e práticas pessoais, não necessariamente institucionais</li>
            <li>Espiritualidade pode ter correlação diferente ou neutra com QI</li>
            <li>Pessoas podem ser espirituais sem serem religiosas organizadas</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Fatores Culturais e Regionais</h2>
          <p className="mb-4">
            A relação entre religiosidade e QI varia significativamente entre diferentes culturas e regiões:
          </p>
          <p className="mb-4">
            <strong>Variações regionais:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Em países mais seculares, correlação pode ser mais forte</li>
            <li>Em países mais religiosos, correlação pode ser menor ou diferente</li>
            <li>Contexto histórico e cultural influencia essa relação</li>
            <li>Não se pode generalizar de uma região para outra</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Limitações dos Estudos</h2>
          <p className="mb-4">
            É importante reconhecer limitações dos estudos sobre religiosidade e QI:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Correlação não implica causalidade</li>
            <li>Muitos fatores confundidores podem explicar a relação</li>
            <li>Medição de religiosidade pode variar entre estudos</li>
            <li>Contexto cultural e histórico influencia resultados</li>
            <li>Diferenças individuais são maiores que diferenças de grupo</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Implicações Práticas</h2>
          <p className="mb-4">
            O que isso significa na prática?
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Religiosidade não determina QI - há variação significativa</li>
            <li>Pessoas inteligentes podem ser religiosas ou não religiosas</li>
            <li>Fatores como educação e oportunidades são mais importantes</li>
            <li>Não se deve usar religiosidade para prever QI de indivíduos</li>
            <li>Respeito e compreensão são importantes, independentemente de crenças</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            A relação entre religiosidade e QI é complexa. Estudos mostram correlação negativa pequena a moderada, 
            mas isso não significa que religiosidade causa QI menor ou vice-versa. Fatores como educação, contexto 
            cultural, oportunidades, e pensamento analítico podem explicar essa relação.
          </p>
          <p className="mb-4">
            É importante lembrar que correlação é uma tendência estatística, não uma regra absoluta. Muitas pessoas 
            com QI alto são religiosas, e religiosidade pode ter benefícios para desenvolvimento e bem-estar. O mais 
            importante é reconhecer que inteligência e religiosidade não são mutuamente exclusivas, e que fatores 
            individuais e contextuais são mais importantes que tendências de grupo.
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
            {getRelatedArticles("como-religiosidade-influencia-qi", 3).map((article) => (
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

export default ComoReligiosidadeInfluenciaQI;

