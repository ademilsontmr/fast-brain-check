import { Brain, ArrowRight, BarChart3, Users, MapPin, BookOpen, Clock } from "lucide-react";
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
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const MediaQIBrasil = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/media-qi-brasil";
  const articleTitle = "Qual é a Média de QI no Brasil?";
  const articleDescription = "Dados atualizados e perguntas frequentes sobre a média de QI no Brasil, fatores que influenciam resultados e diferenças regionais.";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "MediaQIBrasil, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "media-qi-brasil",
      publishDate: "2024-01-01",
    })
  );

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
          <span>Média de QI no Brasil</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Qual é a Média de QI no Brasil? Perguntas Mais Buscadas sobre Inteligência
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Fevereiro 2025</time>
          
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <BarChart3 className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Qual é a média de QI no Brasil? Como o Brasil se compara internacionalmente? Essas são 
            algumas das perguntas mais buscadas sobre inteligência. Reunimos dados científicos e 
            respondemos as principais questões sobre QI no contexto brasileiro.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Qual é a Média de QI no Brasil?</h2>
          <p className="mb-4">
            Estudos internacionais indicam que a média de QI no Brasil está entre <strong>87 e 90 pontos</strong>, 
            abaixo da média mundial padronizada de 100. É importante entender que:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Essa média é baseada em testes padronizados internacionalmente</li>
            <li>Pode variar significativamente entre regiões e grupos socioeconômicos</li>
            <li>QI médio não reflete potencial individual</li>
            <li>Fatores ambientais (educação, nutrição) influenciam resultados</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como o Brasil se Compara Internacionalmente?</h2>
          <p className="mb-4">
            Em rankings internacionais de QI médio por país, o Brasil geralmente aparece entre as posições 
            80-90 de aproximadamente 200 países. Países com médias mais altas incluem:
          </p>
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Singapura, Hong Kong, Coreia do Sul:</strong> Média acima de 105</li>
              <li><strong>Japão, China, Taiwan:</strong> Média entre 100-105</li>
              <li><strong>Estados Unidos, Reino Unido:</strong> Média próxima de 100</li>
              <li><strong>Brasil:</strong> Média entre 87-90</li>
              <li><strong>Países africanos (alguns):</strong> Média entre 60-80</li>
            </ul>
          </div>
          <p className="mb-4">
            <strong>Importante:</strong> Essas diferenças são amplamente atribuídas a fatores ambientais 
            (educação, nutrição, acesso a recursos) e não a diferenças genéticas inatas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por Que a Média Brasileira é Mais Baixa?</h2>
          <p className="mb-4">
            Vários fatores explicam a média mais baixa:
          </p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Desigualdade Educacional</h3>
          <p className="mb-4">
            Acesso desigual à educação de qualidade afeta desenvolvimento cognitivo. Estudos mostram 
            correlação forte entre anos de escolaridade e QI.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Nutrição e Saúde</h3>
          <p className="mb-4">
            Desnutrição na infância, especialmente deficiência de iodo e ferro, pode reduzir QI em 
            até 10-15 pontos. Acesso a saúde preventiva também importa.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Efeito Flynn Reverso</h3>
          <p className="mb-4">
            Enquanto países desenvolvidos experimentaram aumento de QI ao longo do século XX (Efeito Flynn), 
            alguns países em desenvolvimento não tiveram o mesmo progresso devido a fatores socioeconômicos.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Viés Cultural em Testes</h3>
          <p className="mb-4">
            Testes padronizados podem ter viés cultural, favorecendo pessoas de certos backgrounds. 
            Isso pode subestimar QI real em contextos culturais diferentes.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Distribuição de QI no Brasil</h2>
          <p className="mb-4">
            Como em qualquer país, a distribuição segue uma curva normal (bell curve):
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>QI 70-85:</strong> Abaixo da média (~20% da população)</li>
            <li><strong>QI 85-100:</strong> Média (~35% da população)</li>
            <li><strong>QI 100-115:</strong> Acima da média (~30% da população)</li>
            <li><strong>QI 115-130:</strong> Alto (~12% da população)</li>
            <li><strong>QI 130+:</strong> Superdotado (~3% da população)</li>
          </ul>
          <p className="mb-4">
            Mesmo com média mais baixa, milhões de brasileiros têm QI acima de 115 ou 130.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Perguntas Frequentes sobre QI</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">QI Aumenta com a Idade?</h3>
          <p className="mb-4">
            Depende do tipo de inteligência:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Inteligência fluida (Gf):</strong> Pode diminuir após os 20-30 anos</li>
            <li><strong>Inteligência cristalizada (Gc):</strong> Aumenta com experiência e aprendizado</li>
            <li><strong>QI geral:</strong> Relativamente estável na vida adulta, com leve declínio após 60-70 anos</li>
          </ul>
          <p className="mb-4">
            Mas treino cognitivo pode manter e até melhorar QI fluido em qualquer idade.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Qual QI é Considerado Alto?</h3>
          <p className="mb-4">
            Em escala padronizada:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>QI 115-130:</strong> Acima da média, considerado alto</li>
            <li><strong>QI 130-145:</strong> Superdotado (top 2% da população)</li>
            <li><strong>QI 145+:</strong> Gênio (top 0.1% da população)</li>
          </ul>
          <p className="mb-4">
            Organizações como Mensa aceitam membros com QI 130+ (percentil 98).
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">QI é Genético ou Ambiental?</h3>
          <p className="mb-4">
            Ambos. Estudos com gêmeos sugerem que:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>50-80%</strong> da variação de QI é genética</li>
            <li><strong>20-50%</strong> é ambiental (educação, nutrição, estimulação)</li>
            <li>Fatores ambientais são mais importantes na infância</li>
            <li>Genética estabelece potencial, ambiente determina realização</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">QI Pode Melhorar?</h3>
          <p className="mb-4">
            Sim, especialmente através de:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Educação formal e continuada</li>
            <li>Treino cognitivo (memória de trabalho, raciocínio)</li>
            <li>Exercício físico regular</li>
            <li>Boa nutrição e sono adequado</li>
            <li>Aprendizado de novas habilidades</li>
          </ul>
          <p className="mb-4">
            Estudos mostram melhorias de 3-7 pontos com treino adequado.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Diferença entre QI e Inteligência?</h3>
          <p className="mb-4">
            QI é uma medida específica de inteligência através de testes padronizados. Inteligência é 
            um conceito mais amplo que inclui:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Inteligência emocional (QE)</li>
            <li>Inteligência prática</li>
            <li>Sabedoria</li>
            <li>Criatividade</li>
            <li>Inteligência social</li>
          </ul>
          <p className="mb-4">
            QI mede principalmente inteligência analítica e lógica.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI por Região no Brasil</h2>
          <p className="mb-4">
            Dados sugerem variações regionais, geralmente correlacionadas com:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Qualidade da educação pública</li>
            <li>Acesso a recursos e oportunidades</li>
            <li>Níveis de desenvolvimento econômico</li>
            <li>Investimento em primeira infância</li>
          </ul>
          <p className="mb-4">
            Regiões com melhor IDH (Índice de Desenvolvimento Humano) tendem a ter médias de QI mais altas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que Isso Significa para Você?</h2>
          <p className="mb-4">
            A média nacional não define você. Independente de onde você está agora:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>QI pode ser melhorado com treino e educação</li>
            <li>Inteligência é multidimensional - QI não é tudo</li>
            <li>Potencial individual varia muito da média</li>
            <li>Foco em desenvolvimento contínuo é mais importante que número</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            A média de QI no Brasil está abaixo da média mundial, mas isso reflete principalmente fatores 
            ambientais e educacionais, não limitações inatas. Com investimento em educação, nutrição e 
            desenvolvimento cognitivo, essa média pode melhorar.
          </p>
          <p className="mb-4">
            Para você individualmente, o importante não é a média nacional, mas descobrir seu próprio 
            potencial e trabalhar para desenvolvê-lo continuamente.
          </p>
        </div>

        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "Como este tema se relaciona com inteligência?",
                    "answer": "Este tema está diretamente relacionado ao desenvolvimento cognitivo e expressão da inteligência. Compreender esses conceitos ajuda a maximizar potencial."
          },
          {
                    "question": "Posso aplicar isso na prática?",
                    "answer": "Sim. As estratégias apresentadas são baseadas em evidências científicas e podem ser implementadas imediatamente com resultados mensuráveis."
          },
          {
                    "question": "Quanto tempo para ver resultados?",
                    "answer": "Resultados iniciais em 30-60 dias com prática consistente. Melhorias significativas em 6-12 meses de aplicação sustentada."
          },
          {
                    "question": "Funciona para todas as idades?",
                    "answer": "Sim. Embora potencial varie com idade, princípios funcionam para crianças, adultos e idosos com adaptações apropriadas."
          },
          {
                    "question": "Como medir meu progresso?",
                    "answer": "Faça teste de QI inicial, implemente estratégias por 6 meses, refaça teste. Também monitore desempenho em trabalho/estudos."
          }
]} />

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">
            Não se preocupe com médias nacionais. Descubra seu próprio QI e veja onde você se posiciona 
            com nosso teste científico completo.
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
            {getRelatedArticles("media-qi-brasil", 3).map((article) => (
              <Card
                key={article.slug}
                className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 group cursor-pointer"
              >
                <Link to={`/blog/${article.slug}`} className="block">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    
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

export default MediaQIBrasil;

