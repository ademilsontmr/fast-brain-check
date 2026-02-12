import { Brain, ArrowRight, Briefcase, TrendingUp, Users, BookOpen, Clock } from "lucide-react";
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

const QIProcessosSeletivos = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/qi-processos-seletivos";
  const articleTitle = "QI em Processos Seletivos e Avaliações";
  const articleDescription = "Saiba como empresas utilizam testes de QI em processos seletivos, o que realmente avaliam e como se preparar para essas avaliações.";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "QIProcessosSeletivos, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-processos-seletivos",
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
          <span>QI em Processos Seletivos</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Como Empresas Usam o QI em Processos Seletivos e Avaliações Profissionais
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Fevereiro 2025</time>
          
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Briefcase className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Testes de QI e avaliações cognitivas se tornaram ferramentas comuns em processos seletivos, 
            especialmente para posições que exigem raciocínio complexo. Entenda como empresas usam essas 
            avaliações, o que elas realmente medem e como se preparar.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por Que Empresas Usam Testes de QI?</h2>
          <p className="mb-4">
            Empresas utilizam testes cognitivos porque:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Predição de desempenho:</strong> QI correlaciona com sucesso em tarefas complexas</li>
            <li><strong>Eficiência:</strong> Filtro rápido de candidatos em processos com muitos aplicantes</li>
            <li><strong>Objetividade:</strong> Reduz viés subjetivo em entrevistas</li>
            <li><strong>Padronização:</strong> Compara candidatos de forma justa</li>
            <li><strong>Identificação de potencial:</strong> Encontra talentos que podem não ter experiência mas têm capacidade</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Tipos de Testes Usados em Seleção</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Testes de Raciocínio Lógico</h3>
          <p className="mb-4">
            Avaliam capacidade de identificar padrões, resolver problemas e pensar logicamente. 
            Comuns em seleções para:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Engenharia e tecnologia</li>
            <li>Consultoria estratégica</li>
            <li>Análise de dados</li>
            <li>Posições de liderança</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Testes de Memória de Trabalho</h3>
          <p className="mb-4">
            Medem capacidade de manter e manipular informações simultaneamente. Importantes para:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Operações complexas</li>
            <li>Gerenciamento de múltiplas tarefas</li>
            <li>Tomada de decisão sob pressão</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Testes de Velocidade de Processamento</h3>
          <p className="mb-4">
            Avaliam rapidez em processar informações. Relevantes para:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Operações de alta velocidade</li>
            <li>Trading e finanças</li>
            <li>Atendimento ao cliente</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Testes de Raciocínio Verbal</h3>
          <p className="mb-4">
            Medem compreensão de linguagem e raciocínio com palavras. Essenciais para:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Comunicação e marketing</li>
            <li>Direito</li>
            <li>Jornalismo e escrita</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Setores que Mais Usam Testes de QI</h2>
          
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4">Alto Uso (80%+ das empresas):</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consultoria (McKinsey, BCG, Bain):</strong> Testes rigorosos de QI e casos</li>
              <li><strong>Bancos de investimento:</strong> Testes quantitativos e lógicos</li>
              <li><strong>Big Tech (Google, Microsoft, Amazon):</strong> Testes de raciocínio e programação</li>
              <li><strong>Forças armadas e policiais:</strong> Testes padronizados obrigatórios</li>
            </ul>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4">Uso Moderado (40-60%):</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Empresas de engenharia</li>
              <li>Setor financeiro geral</li>
              <li>Grandes corporações multinacionais</li>
              <li>Empresas de pesquisa e desenvolvimento</li>
            </ul>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4">Uso Baixo (menos de 30%):</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pequenas e médias empresas</li>
              <li>Setor de serviços e varejo</li>
              <li>Organizações sem fins lucrativos</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que as Empresas Realmente Procuram?</h2>
          <p className="mb-4">
            Diferente de testes acadêmicos, empresas geralmente procuram:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>QI mínimo, não máximo:</strong> Garantir que candidato tem capacidade suficiente</li>
            <li><strong>Fit para a função:</strong> Habilidades específicas para o cargo</li>
            <li><strong>Potencial de crescimento:</strong> Capacidade de aprender e evoluir</li>
            <li><strong>Resiliência cognitiva:</strong> Manter desempenho sob pressão</li>
          </ul>
          <p className="mb-4">
            <strong>Importante:</strong> QI alto sozinho não garante contratação. Soft skills, experiência 
            e fit cultural também são cruciais.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como se Preparar para Testes em Processos Seletivos</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Pratique Testes Similares</h3>
          <p className="mb-4">
            Familiarize-se com o formato. Pratique:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Matrizes de Raven</li>
            <li>Sequências numéricas e lógicas</li>
            <li>Analogias verbais</li>
            <li>Testes de memória de trabalho</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Gerencie Tempo</h3>
          <p className="mb-4">
            Testes corporativos geralmente têm tempo limitado. Pratique:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Resolver questões rapidamente</li>
            <li>Identificar quando pular uma questão difícil</li>
            <li>Revisar respostas se sobrar tempo</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Prepare-se Mentalmente</h3>
          <p className="mb-4">
            No dia do teste:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Durma bem na noite anterior</li>
            <li>Alimente-se adequadamente</li>
            <li>Chegue cedo e relaxe</li>
            <li>Mantenha calma - ansiedade prejudica desempenho</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Entenda o Contexto</h3>
          <p className="mb-4">
            Pesquise sobre a empresa e o tipo de teste que ela usa. Algumas empresas publicam exemplos 
            ou dicas em seus sites de carreira.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Limitações e Críticas</h2>
          <p className="mb-4">
            Testes de QI em seleção têm limitações:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Viés cultural:</strong> Podem favorecer certos backgrounds</li>
            <li><strong>Não medem tudo:</strong> Criatividade, liderança, trabalho em equipe</li>
            <li><strong>Ansiedade de teste:</strong> Algumas pessoas performam pior sob pressão</li>
            <li><strong>Efeito de prática:</strong> Quem pratica tem vantagem</li>
            <li><strong>QI não é tudo:</strong> Experiência e soft skills também importam</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Tendências Futuras</h2>
          <p className="mb-4">
            O uso de testes cognitivos está evoluindo:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Gamificação:</strong> Testes mais interativos e envolventes</li>
            <li><strong>IA e adaptatividade:</strong> Testes que se ajustam ao candidato</li>
            <li><strong>Múltiplas inteligências:</strong> Avaliação além de QI tradicional</li>
            <li><strong>Redução de viés:</strong> Esforços para tornar testes mais justos</li>
            <li><strong>Combinação com outras métricas:</strong> QI + personalidade + experiência</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Se Você Não Passar no Teste</h2>
          <p className="mb-4">
            Não desanime. Considere:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>QI pode ser melhorado com treino</li>
            <li>Muitas empresas valorizam experiência e soft skills</li>
            <li>Outras oportunidades podem não exigir testes de QI</li>
            <li>Use feedback para identificar áreas de desenvolvimento</li>
            <li>Continue praticando e tente novamente no futuro</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            Testes de QI são ferramentas importantes em processos seletivos modernos, especialmente 
            para posições que exigem raciocínio complexo. Entender como funcionam e se preparar adequadamente 
            pode aumentar suas chances de sucesso.
          </p>
          <p className="mb-4">
            Mas lembre-se: QI é apenas uma peça do quebra-cabeça. Desenvolvimento contínuo, experiência 
            relevante e habilidades interpessoais também são cruciais para o sucesso profissional.
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
          <h3 className="text-2xl font-bold mb-4">Prepare-se para Processos Seletivos</h3>
          <p className="text-muted-foreground mb-6">
            Faça nosso teste de QI para conhecer suas capacidades cognitivas e identificar áreas 
            para desenvolvimento antes de processos seletivos importantes.
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
            {getRelatedArticles("qi-processos-seletivos", 3).map((article) => (
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

export default QIProcessosSeletivos;

