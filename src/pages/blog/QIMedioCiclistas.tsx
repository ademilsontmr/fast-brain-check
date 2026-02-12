import { Brain, ArrowRight, BookOpen, Clock, Bike, Heart, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";

const QIMedioCiclistas = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/qi-medio-ciclistas";
  const articleTitle = "QI Médio dos Ciclistas: Inteligência e Ciclismo";
  const articleDescription = "Descubra qual é o QI médio dos ciclistas, como o ciclismo afeta a cognição e os benefícios cerebrais desta atividade física.";
  const publishDate = "2024-01-15";
  const modifiedDate = "2024-01-15";
  
  useSEO({
    title: "QI Médio dos Ciclistas",
    description: articleDescription,
    url: articleUrl,
    keywords: "QI médio ciclistas, inteligência ciclismo, QI profissão bike, ciclistas inteligentes, QI área cycling, inteligência pedal, QI médio bicicleta, ciclistas QI alto, profissão ciclista inteligência, QI carreira ciclismo",
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
          <span>QI Médio dos Ciclistas</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2024</time>
          <span>•</span>
          <span>8 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Bike className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            O ciclismo é uma das atividades físicas mais completas, beneficiando não apenas o corpo, 
            mas também o cérebro. Descubra como pedalar pode impactar positivamente sua cognição 
            e qual é o perfil cognitivo dos ciclistas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI e Ciclismo: A Conexão</h2>
          <p className="mb-4">
            Não existe um "QI médio dos ciclistas" específico, pois o ciclismo é praticado por 
            pessoas de todos os níveis cognitivos. No entanto, estudos mostram que praticantes 
            regulares de exercícios aeróbicos, incluindo ciclismo, tendem a ter melhor função cognitiva.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Benefícios Cognitivos do Ciclismo
            </h3>
            <ul className="space-y-2">
              <li>• <strong>Memória:</strong> Melhora na memória de trabalho e longo prazo</li>
              <li>• <strong>Atenção:</strong> Maior capacidade de concentração</li>
              <li>• <strong>Velocidade de processamento:</strong> Respostas mais rápidas</li>
              <li>• <strong>Função executiva:</strong> Melhor planejamento e tomada de decisão</li>
              <li>• <strong>Neuroplasticidade:</strong> Maior capacidade de adaptação cerebral</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como o Ciclismo Melhora o Cérebro</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Aumento do Fluxo Sanguíneo</h3>
          <p className="mb-4">
            Durante o ciclismo, o fluxo sanguíneo para o cérebro aumenta significativamente, 
            levando mais oxigênio e nutrientes para as células cerebrais.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Produção de BDNF</h3>
          <p className="mb-4">
            O exercício aeróbico estimula a produção de BDNF (Fator Neurotrófico Derivado do Cérebro), 
            uma proteína que promove o crescimento e sobrevivência dos neurônios.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Redução do Estresse</h3>
          <p className="mb-4">
            Pedalar reduz os níveis de cortisol e aumenta endorfinas, melhorando o humor e 
            protegendo o cérebro dos efeitos negativos do estresse crônico.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Ciclismo e Diferentes Idades</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <Zap className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Jovens e Adultos</h3>
              <p className="text-sm">
                Melhora o desempenho acadêmico e profissional, aumenta a criatividade 
                e a capacidade de resolver problemas complexos.
              </p>
            </Card>
            
            <Card className="p-6">
              <Heart className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Idosos</h3>
              <p className="text-sm">
                Protege contra declínio cognitivo, reduz risco de demência e 
                mantém a independência mental por mais tempo.
              </p>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estudos Científicos</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Pesquisas Relevantes</h3>
            <ul className="space-y-3">
              <li><strong>Universidade de Illinois:</strong> Ciclistas regulares mostraram 15% melhor desempenho em testes cognitivos</li>
              <li><strong>British Journal of Sports Medicine:</strong> 30 minutos de ciclismo melhoram memória e atenção por horas</li>
              <li><strong>Estudo holandês:</strong> Crianças que vão de bicicleta para escola têm melhor concentração</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Quanto Pedalar para Benefícios Cognitivos?</h2>
          <p className="mb-4">
            Para obter benefícios cognitivos significativos:
          </p>
          <ul className="mb-4">
            <li>• <strong>Frequência:</strong> 3-5 vezes por semana</li>
            <li>• <strong>Duração:</strong> 30-60 minutos por sessão</li>
            <li>• <strong>Intensidade:</strong> Moderada (conseguir conversar, mas com esforço)</li>
            <li>• <strong>Consistência:</strong> Manter a prática por pelo menos 3 meses</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Ciclismo Indoor vs Outdoor</h2>
          <p className="mb-4">
            Ambos oferecem benefícios cognitivos, mas o ciclismo outdoor adiciona:
          </p>
          <ul className="mb-4">
            <li>• Estímulo visual variado</li>
            <li>• Necessidade de tomada de decisão constante</li>
            <li>• Exposição à natureza (benefícios adicionais para saúde mental)</li>
            <li>• Maior engajamento cognitivo</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            O ciclismo é uma excelente forma de manter e melhorar a função cognitiva em todas as idades. 
            Embora não exista um "QI médio dos ciclistas", a prática regular desta atividade está 
            associada a melhor desempenho cognitivo, memória mais aguçada e proteção contra declínio mental.
          </p>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">
            Quer saber como está sua cognição? Faça nosso teste de QI em apenas 3 minutos.
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
            {getRelatedArticles("qi-medio-ciclistas", 3).map((article) => (
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

export default QIMedioCiclistas;
