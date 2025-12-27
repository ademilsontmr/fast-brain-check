import { Brain, ArrowRight, Lightbulb, BookOpen, Clock, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";

const QIBaixo = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/qi-baixo";
  const articleTitle = "QI Baixo: O Que É, Causas e Como Melhorar";
  const articleDescription = "Descubra o que é QI baixo, suas causas, sinais, e estratégias para melhorar. Entenda o que significa ter QI abaixo da média e como desenvolver habilidades cognitivas.";
  const publishDate = "2025-01-15";
  const modifiedDate = "2025-01-15";
  
  useSEO({
    title: "QI Baixo: O Que É, Causas e Como Melhorar",
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
          <span>QI baixo</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          QI Baixo: O Que É, Causas e Como Melhorar
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2025</time>
          <span>•</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <TrendingDown className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            QI baixo é geralmente definido como QI abaixo de 85, mas o significado e as implicações variam. 
            Entender o que é QI baixo, suas causas, sinais, e como melhorar é importante para desenvolvimento 
            cognitivo e bem-estar. Descubra tudo sobre QI baixo neste guia completo.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que É QI Baixo?</h2>
          <p className="mb-4">
            QI baixo refere-se a pontuações de quociente de inteligência abaixo da média populacional. 
            A média de QI é padronizada em 100, com desvio padrão de 15 pontos.
          </p>
          <p className="mb-4">
            <strong>Classificação:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>QI abaixo da média: 70-85</strong> (aproximadamente 14% da população)</li>
            <li><strong>QI muito abaixo da média: &lt;70</strong> (aproximadamente 2% da população)</li>
            <li><strong>Deficiência intelectual:</strong> QI &lt;70 com limitações em funcionamento adaptativo</li>
          </ul>
          <p className="mb-4">
            É importante notar que QI baixo não define uma pessoa completamente. Muitas pessoas com QI 
            abaixo da média têm sucesso em várias áreas da vida através de trabalho duro, habilidades sociais, 
            e outras qualidades.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Causas de QI Baixo</h2>
          <p className="mb-4">
            QI baixo pode ter várias causas, que geralmente envolvem uma combinação de fatores genéticos 
            e ambientais:
          </p>
          <p className="mb-4">
            <strong>1. Fatores Genéticos:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Herança genética de QI</li>
            <li>Condições genéticas específicas</li>
            <li>Anomalias cromossômicas</li>
            <li>Mutações genéticas</li>
          </ul>
          <p className="mb-4">
            <strong>2. Fatores Ambientais:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Desnutrição durante desenvolvimento</li>
            <li>Exposição a toxinas (chumbo, mercúrio, etc.)</li>
            <li>Privação de estimulação intelectual</li>
            <li>Educação inadequada ou limitada</li>
            <li>Ambiente familiar desfavorável</li>
            <li>Trauma ou abuso</li>
          </ul>
          <p className="mb-4">
            <strong>3. Fatores Perinatais:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Complicações durante gravidez</li>
            <li>Nascimento prematuro</li>
            <li>Baixo peso ao nascer</li>
            <li>Falta de oxigênio durante nascimento</li>
          </ul>
          <p className="mb-4">
            <strong>4. Condições Médicas:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Doenças neurológicas</li>
            <li>Infecções que afetam o cérebro</li>
            <li>Lesões cerebrais</li>
            <li>Distúrbios metabólicos</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Sinais de QI Baixo</h2>
          <p className="mb-4">
            Alguns sinais podem indicar QI abaixo da média, mas é importante lembrar que apenas testes 
            de QI profissionais podem determinar isso com precisão:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Dificuldades em aprendizado e compreensão</li>
            <li>Problemas com raciocínio abstrato</li>
            <li>Dificuldades em resolver problemas complexos</li>
            <li>Memória de trabalho limitada</li>
            <li>Processamento de informações mais lento</li>
            <li>Dificuldades acadêmicas persistentes</li>
            <li>Problemas com planejamento e organização</li>
          </ul>
          <p className="mb-4">
            <strong>Importante:</strong> Esses sinais podem ter outras causas além de QI baixo, como 
            TDAH, dislexia, ou falta de oportunidades educacionais. Avaliação profissional é necessária 
            para diagnóstico adequado.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Baixo vs. Deficiência Intelectual</h2>
          <p className="mb-4">
            É importante distinguir entre QI baixo e deficiência intelectual:
          </p>
          <p className="mb-4">
            <strong>QI baixo (70-85):</strong> Pode funcionar independentemente, trabalhar, e ter 
            relacionamentos. Pode precisar de suporte adicional em algumas áreas.
          </p>
          <p className="mb-4">
            <strong>Deficiência intelectual (&lt;70 + limitações adaptativas):</strong> Requer suporte 
            significativo em vida diária, trabalho, e relacionamentos. Pode ter limitações em múltiplas 
            áreas de funcionamento.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Melhorar QI Baixo</h2>
          <p className="mb-4">
            Embora QI tenha componente genético, é possível melhorar habilidades cognitivas e funcionamento 
            através de várias estratégias:
          </p>
          <p className="mb-4">
            <strong>1. Educação e Aprendizado:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Educação de qualidade e contínua</li>
            <li>Aprendizado de novas habilidades</li>
            <li>Leitura regular</li>
            <li>Atividades educacionais e culturais</li>
          </ul>
          <p className="mb-4">
            <strong>2. Exercícios Cognitivos:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Jogos mentais e puzzles</li>
            <li>Treinamento de memória</li>
            <li>Exercícios de raciocínio</li>
            <li>Atividades que desafiam o cérebro</li>
          </ul>
          <p className="mb-4">
            <strong>3. Estilo de Vida Saudável:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Exercícios físicos regulares</li>
            <li>Sono adequado</li>
            <li>Nutrição balanceada</li>
            <li>Redução de estresse</li>
          </ul>
          <p className="mb-4">
            <strong>4. Suporte e Recursos:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Acesso a recursos educacionais</li>
            <li>Suporte profissional quando necessário</li>
            <li>Ambiente enriquecedor e estimulante</li>
            <li>Oportunidades de desenvolvimento</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Baixo e Sucesso na Vida</h2>
          <p className="mb-4">
            É importante entender que QI baixo não impede sucesso na vida. Muitas pessoas com QI abaixo 
            da média têm sucesso através de:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Trabalho duro e persistência</li>
            <li>Habilidades sociais e emocionais</li>
            <li>Talento em áreas específicas</li>
            <li>Dedicação e comprometimento</li>
            <li>Suporte adequado e oportunidades</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Quando Buscar Ajuda</h2>
          <p className="mb-4">
            Se você ou alguém que você conhece tem dificuldades cognitivas significativas, pode ser útil 
            buscar avaliação profissional:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Psicólogos especializados em avaliação cognitiva</li>
            <li>Neurologistas para avaliação médica</li>
            <li>Educadores especiais para suporte educacional</li>
            <li>Terapeutas para desenvolvimento de habilidades</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            QI baixo é definido como QI abaixo de 85, mas isso não define completamente uma pessoa ou seu 
            potencial. Com suporte adequado, educação, e oportunidades, pessoas com QI baixo podem ter 
            sucesso e bem-estar significativos.
          </p>
          <p className="mb-4">
            O mais importante é focar em desenvolvimento de habilidades, acesso a recursos, e criação de 
            ambiente enriquecedor que permita crescimento e realização pessoal, independentemente do QI.
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

export default QIBaixo;

