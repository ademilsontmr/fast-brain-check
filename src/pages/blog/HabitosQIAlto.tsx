import { Brain, ArrowRight, Target, BookOpen, Clock } from "lucide-react";
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

const HabitosQIAlto = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/habitos-qi-alto";
  const articleTitle = "7 Hábitos de Pessoas com QI Alto";
  const articleDescription = "Conheça os hábitos comprovados que pessoas com QI alto cultivam para manter a mente afiada e continuar evoluindo cognitivamente.";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "HabitosQIAlto, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "habitos-qi-alto",
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
          <span>Hábitos de QI Alto</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Pessoas com QI Alto Têm Estes 7 Hábitos em Comum
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2024</time>
          
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Target className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Estudos com pessoas de QI acima de 130 revelam padrões comportamentais consistentes. 
            Não se trata apenas de genética — muitos desses hábitos podem ser cultivados por qualquer pessoa 
            que queira maximizar seu potencial intelectual.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">1. Cultivam a Curiosidade Insaciável</h2>
          <p className="mb-4">
            Pessoas inteligentes fazem perguntas constantemente. Não apenas "o quê", mas "por quê", 
            "como" e "e se". Elas tratam o mundo como um grande laboratório de aprendizado.
          </p>
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <p className="font-semibold mb-2">Na prática:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Questionam suposições em vez de aceitar informações passivamente</li>
              <li>Exploram tópicos fora de sua área de expertise</li>
              <li>Mantêm uma lista de coisas que querem aprender</li>
            </ul>
          </div>
          <p className="mb-4">
            <strong>Exemplo:</strong> Richard Feynman, físico com QI estimado em 125-145, 
            era famoso por perguntar "por quê" repetidamente até entender conceitos profundamente.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">2. Abraçam a Incerteza e a Dúvida</h2>
          <p className="mb-4">
            Paradoxalmente, pessoas muito inteligentes estão mais confortáveis dizendo "não sei" 
            do que a média das pessoas. Elas reconhecem que a certeza absoluta é rara.
          </p>
          <p className="mb-4">
            Um estudo da Universidade de Waterloo mostrou que pessoas com maior capacidade cognitiva 
            são mais propensas a revisar suas opiniões quando apresentadas a novas evidências.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">3. Praticam o Pensamento Sistêmico</h2>
          <p className="mb-4">
            Em vez de ver eventos isolados, pessoas de QI alto naturalmente pensam em sistemas, 
            conexões e consequências de segunda e terceira ordem.
          </p>
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <p className="font-semibold mb-2">Exemplo prático:</p>
            <p>
              Ao avaliar uma decisão de negócios, não pensam apenas no lucro imediato, mas em como 
              isso afeta relacionamentos com clientes, moral da equipe, sustentabilidade de longo prazo, 
              e reputação da marca.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">4. Têm Rotinas de Solitude Produtiva</h2>
          <p className="mb-4">
            Muitas pessoas altamente inteligentes dedicam tempo regular para estar sozinhas — 
            não por solidão, mas para reflexão profunda.
          </p>
          <p className="mb-4">
            Einstein fazia longas caminhadas sozinho. Bill Gates tem sua "semana de reflexão" anual. 
            Susan Cain, autora de "O Poder dos Quietos", documentou como introversão e inteligência 
            frequentemente andam juntas.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Meditação matinal</li>
            <li>Caminhadas sem celular</li>
            <li>Journaling diário</li>
            <li>Tempo dedicado apenas para pensar</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">5. Leem Obsessivamente</h2>
          <p className="mb-4">
            A correlação entre leitura frequente e QI alto é bem documentada. Warren Buffett 
            lê 500 páginas por dia. Bill Gates lê 50 livros por ano.
          </p>
          <p className="mb-4">
            Mas não leem apenas por entretenimento — leem estrategicamente:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Diversidade:</strong> Ficção, não-ficção, ciência, filosofia, história</li>
            <li><strong>Profundidade:</strong> Fazem anotações, questionam, conectam ideias</li>
            <li><strong>Aplicação:</strong> Buscam implementar insights na vida real</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">6. Buscam Feedback e Críticas</h2>
          <p className="mb-4">
            Ao contrário do estereótipo do gênio arrogante, pessoas realmente inteligentes 
            <strong> ativamente buscam </strong> críticas e feedback.
          </p>
          <p className="mb-4">
            Ray Dalio, fundador da Bridgewater Associates, institucionalizou isso através 
            do conceito de "radical transparency" — onde todos são encorajados a desafiar 
            ideias, independentemente de hierarquia.
          </p>
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <p className="font-semibold mb-2">Por quê isso funciona:</p>
            <p>
              Feedback revela pontos cegos. Pessoas inteligentes sabem que seus próprios 
              vieses cognitivos são seu maior inimigo, e usam outros como espelhos.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">7. Mantêm Ciclos de Aprendizado-Ensino</h2>
          <p className="mb-4">
            A técnica Feynman: aprenda algo, ensine para outra pessoa (ou simule ensinar), 
            identifique lacunas, revise. Repita.
          </p>
          <p className="mb-4">
            Pesquisas mostram que ensinar é uma das formas mais eficazes de consolidar 
            conhecimento. Pessoas de QI alto intuitivamente sabem disso e:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Escrevem blogs ou fazem vídeos explicando conceitos</li>
            <li>Mentoram outras pessoas</li>
            <li>Participam de grupos de discussão</li>
            <li>Explicam conceitos complexos para leigos (teste de verdadeira compreensão)</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Bônus: Padrões Adicionais</h2>
          <p className="mb-4">
            Outros hábitos comuns em pessoas de QI alto incluem:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Exercício regular:</strong> Especialmente exercícios aeróbicos</li>
            <li><strong>Sono adequado:</strong> 7-9 horas, com rituais de higiene do sono</li>
            <li><strong>Gerenciamento de energia:</strong> Trabalham em seus picos cognitivos</li>
            <li><strong>Desafios cognitivos:</strong> Jogos estratégicos, puzzles, aprendizado de novas habilidades</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Implementar</h2>
          <p className="mb-4">
            Você não precisa adotar todos esses hábitos de uma vez. Comece com um:
          </p>
          <ol className="list-decimal pl-6 mb-4 space-y-3">
            <li><strong>Escolha um hábito</strong> que ressoa com você</li>
            <li><strong>Comece pequeno</strong> (ex: 10 minutos de leitura por dia)</li>
            <li><strong>Seja consistente</strong> por 30 dias</li>
            <li><strong>Avalie resultados</strong> e ajuste</li>
            <li><strong>Adicione outro hábito</strong> quando o primeiro estiver consolidado</li>
          </ol>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            QI alto não é apenas genética — é também um conjunto de hábitos mentais que podem 
            ser cultivados. A diferença entre uma pessoa de QI 100 e uma de QI 130 muitas vezes 
            se resume a como elas estruturam seu aprendizado e pensamento diário.
          </p>
          <p className="mb-4">
            Comece hoje. Seu cérebro vai agradecer.
          </p>
        </div>

        {/* CTA */}
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

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu Ponto de Partida</h3>
          <p className="text-muted-foreground mb-6">
            Quer saber onde você está agora? Faça nosso teste de QI e veja quais hábitos 
            podem levar você ao próximo nível.
          </p>
          <Link to="/teste">
            <Button size="lg" className="gap-2">
              Testar Meu QI Agora
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
            {getRelatedArticles("habitos-qi-alto", 3).map((article) => (
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

export default HabitosQIAlto;
