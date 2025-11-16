import { Brain, ArrowRight, Heart, Users, Sparkles, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const DiferencaQIQEQG = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/diferenca-qi-qe-qg";
  const articleTitle = "Diferença entre QI, QE e QG";
  const articleDescription = "Entenda as diferenças entre QI, QE e QG, quando testar cada tipo de inteligência e como desenvolver essas habilidades.";
  
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
      slug: "diferenca-qi-qe-qg",
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
          <span>Diferença entre QI, QE e QG</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Diferença entre QI, QE e QG: Quando Testar Cada Tipo de Inteligência
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Fevereiro 2025</time>
          
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Sparkles className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            QI, QE, QG... você já ouviu esses termos, mas sabe realmente a diferença? Cada um mede 
            aspectos distintos da inteligência humana. Entender quando e por que testar cada um pode 
            ser crucial para seu desenvolvimento pessoal e profissional.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI (Quociente de Inteligência)</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">O Que É</h3>
          <p className="mb-4">
            QI mede <strong>inteligência analítica e lógica</strong> - capacidade de raciocinar, 
            resolver problemas, aprender e processar informações. É o tipo mais conhecido e testado.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">O Que Mede</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Raciocínio lógico e matemático</li>
            <li>Memória de trabalho</li>
            <li>Velocidade de processamento</li>
            <li>Compreensão verbal</li>
            <li>Raciocínio espacial</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Quando Testar</h3>
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>Processos seletivos que exigem raciocínio complexo</li>
              <li>Identificação de superdotação</li>
              <li>Avaliação de potencial de aprendizado</li>
              <li>Autoconhecimento sobre capacidades cognitivas</li>
              <li>Medição de progresso em treinos cognitivos</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Limitações</h3>
          <p className="mb-4">
            QI não mede criatividade, inteligência emocional, sabedoria prática ou habilidades sociais. 
            Pessoas com QI alto podem ter dificuldades em relacionamentos ou tomada de decisões práticas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QE (Quociente Emocional)</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">O Que É</h3>
          <p className="mb-4">
            QE mede <strong>inteligência emocional</strong> - capacidade de reconhecer, entender e 
            gerenciar emoções próprias e dos outros. Popularizado por Daniel Goleman nos anos 90.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Componentes Principais</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Autoconsciência:</strong> Reconhecer suas próprias emoções</li>
            <li><strong>Autogerenciamento:</strong> Controlar impulsos e emoções</li>
            <li><strong>Empatia:</strong> Entender emoções dos outros</li>
            <li><strong>Habilidades sociais:</strong> Construir relacionamentos</li>
            <li><strong>Motivação:</strong> Persistir apesar de frustrações</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Quando Testar</h3>
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>Posições de liderança e gestão</li>
              <li>Melhoria de relacionamentos pessoais</li>
              <li>Desenvolvimento de habilidades sociais</li>
              <li>Gerenciamento de equipes</li>
              <li>Carreiras em vendas, atendimento, coaching</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Importância</h3>
          <p className="mb-4">
            Estudos mostram que QE pode ser mais importante que QI para sucesso profissional, especialmente 
            em posições de liderança. Pessoas com alto QE tendem a ter:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Melhores relacionamentos profissionais</li>
            <li>Maior satisfação no trabalho</li>
            <li>Melhor desempenho em equipes</li>
            <li>Maior resiliência emocional</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QG (Quociente Geral / Inteligência Geral)</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">O Que É</h3>
          <p className="mb-4">
            QG (ou "g factor") é o <strong>fator geral de inteligência</strong> - a capacidade cognitiva 
            subjacente que influencia todas as habilidades mentais. É o que todos os testes de QI tentam 
            medir indiretamente.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Conceito Científico</h3>
          <p className="mb-4">
            Pesquisas mostram que pessoas boas em uma área cognitiva tendem a ser boas em outras também. 
            Isso sugere um fator geral (g) que influencia todas as habilidades. QG é esse fator.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Diferença de QI</h3>
          <p className="mb-4">
            QI é uma medida específica através de testes. QG é o conceito teórico subjacente. 
            Testes de QI são proxies para medir QG.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Comparação Prática</h2>
          
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Aspecto</th>
                  <th className="border border-border p-3 text-center">QI</th>
                  <th className="border border-border p-3 text-center">QE</th>
                  <th className="border border-border p-3 text-center">QG</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">Foco</td>
                  <td className="border border-border p-3 text-center">Lógica e raciocínio</td>
                  <td className="border border-border p-3 text-center">Emoções e relacionamentos</td>
                  <td className="border border-border p-3 text-center">Capacidade geral</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border border-border p-3">Pode melhorar?</td>
                  <td className="border border-border p-3 text-center">Sim (com treino)</td>
                  <td className="border border-border p-3 text-center">Sim (com prática)</td>
                  <td className="border border-border p-3 text-center">Relativamente estável</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Importante para</td>
                  <td className="border border-border p-3 text-center">Tarefas analíticas</td>
                  <td className="border border-border p-3 text-center">Liderança, relacionamentos</td>
                  <td className="border border-border p-3 text-center">Todas as tarefas cognitivas</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border border-border p-3">Fácil de medir?</td>
                  <td className="border border-border p-3 text-center">Sim (testes padronizados)</td>
                  <td className="border border-border p-3 text-center">Moderado (questionários)</td>
                  <td className="border border-border p-3 text-center">Teórico (não medido diretamente)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Outros Tipos de Inteligência</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Inteligências Múltiplas (Howard Gardner)</h3>
          <p className="mb-4">
            Gardner propôs 8 tipos de inteligência:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Lógico-matemática:</strong> Raciocínio e números</li>
            <li><strong>Linguística:</strong> Uso de palavras</li>
            <li><strong>Espacial:</strong> Visualização e orientação</li>
            <li><strong>Musical:</strong> Ritmo e som</li>
            <li><strong>Corporal-cinestésica:</strong> Coordenação física</li>
            <li><strong>Interpessoal:</strong> Entender outros</li>
            <li><strong>Intrapessoal:</strong> Autoconhecimento</li>
            <li><strong>Naturalista:</strong> Entender natureza</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Inteligência Prática</h3>
          <p className="mb-4">
            Capacidade de aplicar conhecimento na vida real. Diferente de QI alto, inteligência prática 
            envolve senso comum, adaptabilidade e sabedoria de experiência.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Qual Você Deve Testar?</h2>
          
          <div className="bg-primary/10 border border-primary/30 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4">Teste QI se você quer:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Entender suas capacidades analíticas</li>
              <li>Preparar-se para processos seletivos</li>
              <li>Medir progresso em treinos cognitivos</li>
              <li>Identificar áreas de desenvolvimento intelectual</li>
            </ul>
          </div>

          <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4">Teste QE se você quer:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Melhorar relacionamentos pessoais e profissionais</li>
              <li>Desenvolver liderança</li>
              <li>Entender e gerenciar emoções melhor</li>
              <li>Melhorar comunicação e empatia</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Desenvolvendo Cada Tipo</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Melhorar QI</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Treino cognitivo (Dual N-Back, puzzles)</li>
            <li>Aprendizado contínuo</li>
            <li>Exercício físico regular</li>
            <li>Boa nutrição e sono</li>
            <li>Desafios mentais variados</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Melhorar QE</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Prática de mindfulness e meditação</li>
            <li>Journaling sobre emoções</li>
            <li>Buscar feedback sobre seu comportamento</li>
            <li>Ler sobre psicologia e comportamento humano</li>
            <li>Praticar empatia ativamente</li>
            <li>Terapia ou coaching</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">A Combinação Ideal</h2>
          <p className="mb-4">
            O sucesso real vem de desenvolver múltiplos tipos de inteligência:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>QI alto + QE alto:</strong> Combinação poderosa para liderança</li>
            <li><strong>QI alto + Inteligência prática:</strong> Excelência em execução</li>
            <li><strong>QE alto + Inteligência social:</strong> Relacionamentos excepcionais</li>
          </ul>
          <p className="mb-4">
            Não se limite a um tipo. Desenvolva um perfil completo de inteligências.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            QI, QE e QG medem aspectos diferentes mas complementares da inteligência humana. 
            Entender cada um e quando testá-los pode guiar seu desenvolvimento pessoal e profissional.
          </p>
          <p className="mb-4">
            Lembre-se: nenhum tipo de inteligência define você completamente. O objetivo é desenvolver 
            um conjunto equilibrado de habilidades que te permitam prosperar em diferentes contextos.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Comece com QI</h3>
          <p className="text-muted-foreground mb-6">
            QI é o ponto de partida mais comum e bem estabelecido. Faça nosso teste científico para 
            descobrir suas capacidades cognitivas e identificar áreas de desenvolvimento.
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
            {getRelatedArticles("diferenca-qi-qe-qg", 3).map((article) => (
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

export default DiferencaQIQEQG;

