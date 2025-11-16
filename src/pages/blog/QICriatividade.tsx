import { Brain, ArrowRight, Sparkles, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const QICriatividade = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/qi-criatividade";
  const articleTitle = "QI e Criatividade: A Relação Entre Inteligência e Inovação";
  const articleDescription = "Descubra a relação complexa entre QI e criatividade. Por que pessoas muito inteligentes podem não ser criativas e como desenvolver ambos.";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-criatividade",
      publishDate: "2024-01-01",
    })
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>QI e Criatividade</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          QI e Criatividade: A Relação Complexa Entre Inteligência e Inovação
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
          
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Sparkles className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Você conhece alguém extremamente inteligente mas pouco criativo? Ou alguém com QI médio 
            mas extremamente inovador? A relação entre QI e criatividade é mais complexa do que parece. 
            Entenda por que ter QI alto não garante criatividade e como desenvolver ambas as habilidades.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Limiar de QI para Criatividade</h2>
          
          <p className="mb-4">
            Estudos mostram que existe um <strong>limiar de QI</strong> necessário para criatividade 
            excepcional, mas acima desse limiar, QI e criatividade se tornam relativamente independentes.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">A Hipótese do Limiar</h3>
          <p className="mb-4">
            Pesquisas de E. Paul Torrance e outros mostram:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>QI abaixo de ~120:</strong> QI e criatividade estão fortemente correlacionados</li>
            <li><strong>QI acima de ~120:</strong> A correlação diminui significativamente</li>
            <li><strong>QI muito alto (140+):</strong> Pode até ter correlação negativa com alguns tipos de criatividade</li>
          </ul>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <p className="font-semibold mb-3">Por que isso acontece?</p>
            <p className="mb-4">
              Pessoas com QI muito alto podem <strong>sobre-analisar</strong> problemas, ficando presas 
              em padrões lógicos rígidos. Criatividade muitas vezes requer "pensar fora da caixa" e 
              questionar premissas que pessoas inteligentes aceitam como óbvias.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Tipos de Criatividade</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Criatividade Convergente</h3>
          <p className="mb-4">
            Encontrar a <strong>melhor solução</strong> para um problema bem definido. Correlaciona 
            fortemente com QI:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Resolver problemas matemáticos complexos</li>
            <li>Encontrar bugs em código</li>
            <li>Otimizar processos</li>
            <li>Análise lógica profunda</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Criatividade Divergente</h3>
          <p className="mb-4">
            Gerar <strong>múltiplas soluções</strong> originais para um problema. Correlaciona menos 
            com QI:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Brainstorming de ideias inovadoras</li>
            <li>Arte e design criativo</li>
            <li>Invenções disruptivas</li>
            <li>Pensamento lateral</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Criatividade Combinatória</h3>
          <p className="mb-4">
            Combinar ideias existentes de formas novas. Requer tanto QI quanto criatividade:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Steve Jobs combinando design e tecnologia</li>
            <li>Elon Musk combinando indústrias diferentes</li>
            <li>Inovações que conectam campos distintos</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por Que Pessoas Inteligentes Podem Não Ser Criativas?</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Pensamento Rígido e Padrões</h3>
          <p className="mb-4">
            Pessoas com QI muito alto podem:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Confiar demais na lógica:</strong> Rejeitar ideias que parecem "ilógicas"</li>
            <li><strong>Seguir padrões estabelecidos:</strong> Ter dificuldade em quebrar convenções</li>
            <li><strong>Análise paralisante:</strong> Analisar tanto que nunca agem</li>
            <li><strong>Medo de errar:</strong> Evitar tentativas que podem falhar</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Falta de Abertura à Experiência</h3>
          <p className="mb-4">
            Criatividade requer <strong>abertura à experiência</strong> (uma das "Big Five" personalidades), 
            que não correlaciona diretamente com QI:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Curiosidade sobre coisas novas</li>
            <li>Interesse em múltiplos campos</li>
            <li>Comfortável com ambiguidade</li>
            <li>Valorização de experiências estéticas</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Ambiente e Educação</h3>
          <p className="mb-4">
            Sistemas educacionais focados em QI podem suprimir criatividade:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Foco em respostas corretas:</strong> Desencoraja experimentação</li>
            <li><strong>Padronização:</strong> Todos devem pensar da mesma forma</li>
            <li><strong>Punição de erros:</strong> Medo de tentar coisas novas</li>
            <li><strong>Falta de tempo livre:</strong> Criatividade precisa de espaço para "brincar"</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Desenvolver Criatividade (Mesmo com QI Alto)</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Pratique Pensamento Divergente</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Brainstorming sem julgamento:</strong> Gere 50 ideias antes de avaliar</li>
            <li><strong>Perguntas "e se?":</strong> Questionar premissas fundamentais</li>
            <li><strong>Pensamento reverso:</strong> Começar pela solução e trabalhar ao contrário</li>
            <li><strong>Analogias distantes:</strong> Conectar ideias de campos diferentes</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Expanda Seus Interesses</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Leia sobre campos diversos:</strong> Arte, ciência, história, filosofia</li>
            <li><strong>Viaje e explore:</strong> Novas culturas expandem perspectivas</li>
            <li><strong>Pratique hobbies criativos:</strong> Música, arte, escrita, culinária</li>
            <li><strong>Converse com pessoas diferentes:</strong> Perspectivas diversas geram insights</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Aceite e Aprenda com Falhas</h3>
          <p className="mb-4">
            Criatividade requer experimentação, e experimentação inclui falhas:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Reframe falhas:</strong> Veja como aprendizado, não fracasso</li>
            <li><strong>Teste rápido e barato:</strong> Fale rápido para aprender rápido</li>
            <li><strong>Celebre tentativas:</strong> Valorize o processo, não só resultados</li>
            <li><strong>Documente insights:</strong> Mesmo falhas geram aprendizado valioso</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Crie Espaço para "Brincar"</h3>
          <p className="mb-4">
            Criatividade floresce quando há tempo livre para exploração:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Tempo não estruturado:</strong> Bloqueie tempo sem agenda</li>
            <li><strong>Ambiente relaxado:</strong> Estresse bloqueia criatividade</li>
            <li><strong>Atividades lúdicas:</strong> Jogos, hobbies, exploração livre</li>
            <li><strong>Meditação e reflexão:</strong> Espaço mental para ideias emergirem</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI e Criatividade em Diferentes Campos</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Ciência e Matemática</h3>
          <p className="mb-4">
            Requer QI alto E criatividade:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Descobertas científicas:</strong> Requerem tanto lógica quanto insights criativos</li>
            <li><strong>Problemas matemáticos complexos:</strong> Muitas vezes precisam de abordagens inovadoras</li>
            <li><strong>Invenções tecnológicas:</strong> Combinam conhecimento técnico com visão criativa</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Arte e Design</h3>
          <p className="mb-4">
            Criatividade é mais importante que QI:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>QI médio-alto suficiente:</strong> ~110-120 é suficiente</li>
            <li><strong>Criatividade é crucial:</strong> Originalidade e visão artística</li>
            <li><strong>Habilidades técnicas:</strong> Podem ser aprendidas independente de QI</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Empreendedorismo</h3>
          <p className="mb-4">
            Combinação ideal de QI e criatividade:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>QI para análise:</strong> Entender mercados, números, estratégia</li>
            <li><strong>Criatividade para inovação:</strong> Identificar oportunidades únicas</li>
            <li><strong>Resiliência:</strong> Persistir através de falhas</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Paradoxo da Criatividade</h2>
          
          <p className="mb-4">
            Estudos mostram que pessoas criativas frequentemente têm:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>QI acima da média:</strong> Mas não necessariamente muito alto</li>
            <li><strong>Alta abertura à experiência:</strong> Curiosidade e exploração</li>
            <li><strong>Tolerância à ambiguidade:</strong> Confortável com incerteza</li>
            <li><strong>Motivação intrínseca:</strong> Criar por prazer, não por recompensa externa</li>
            <li><strong>Persistência:</strong> Continuar apesar de críticas e falhas</li>
          </ul>

          <div className="bg-primary/10 p-6 rounded-lg my-6 border-2 border-primary/20">
            <p className="font-semibold mb-3 text-lg">Insight Científico:</p>
            <p className="mb-4">
              A criatividade excepcional não requer QI excepcional. O que realmente importa é 
              <strong> combinar QI suficiente (acima de ~120) com alta abertura à experiência, 
              motivação intrínseca e persistência</strong>.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão: Desenvolvendo QI e Criatividade</h2>
          
          <p className="mb-4">
            QI e criatividade são habilidades <strong>complementares, não opostas</strong>. O ideal 
            é desenvolver ambas:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>QI alto:</strong> Fornece ferramentas analíticas e capacidade de processar informações complexas</li>
            <li><strong>Criatividade:</strong> Permite usar essas ferramentas de formas inovadoras e originais</li>
            <li><strong>Combinação:</strong> Pessoas com QI alto E criatividade são as mais inovadoras e impactantes</li>
          </ul>

          <p className="mb-4">
            Se você tem QI alto, não se contente apenas com análise lógica. Desenvolva criatividade 
            através de exploração, experimentação e abertura a novas experiências. Se você é criativo 
            mas quer melhorar QI, pratique raciocínio lógico, leia sobre ciência e matemática, e 
            desafie-se com problemas complexos.
          </p>

          <p className="mb-4">
            <strong>A verdade:</strong> As pessoas mais bem-sucedidas e inovadoras não escolhem entre 
            QI e criatividade — elas desenvolvem ambos.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI e Desenvolva Criatividade</h3>
          <p className="text-muted-foreground mb-6">
            Conhecer seu QI é o primeiro passo. Depois, use esse conhecimento para desenvolver tanto 
            suas habilidades analíticas quanto sua criatividade. Faça nosso teste e descubra seu potencial.
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
            {getRelatedArticles("qi-criatividade", 3).map((article) => (
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

export default QICriatividade;

