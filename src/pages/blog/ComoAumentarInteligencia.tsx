import { Brain, ArrowRight, TrendingUp, Lightbulb, BookOpen, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const ComoAumentarInteligencia = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/como-aumentar-inteligencia";
  const articleTitle = "Como Aumentar a Inteligência: Métodos Cientificamente Comprovados";
  const articleDescription = "Descubra como aumentar sua inteligência com métodos baseados em ciência. Estratégias comprovadas para desenvolver QI, memória, raciocínio e habilidades cognitivas.";
  
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
      slug: "como-aumentar-inteligencia",
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
          <span>Como Aumentar a Inteligência</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Como Aumentar a Inteligência: Métodos Cientificamente Comprovados
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
          <span>•</span>
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <TrendingUp className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            A inteligência não é fixa. Pesquisas científicas demonstram que é possível aumentar 
            significativamente sua inteligência através de métodos específicos. Neste guia completo, 
            exploramos estratégias baseadas em evidências para desenvolver QI, memória, raciocínio 
            e habilidades cognitivas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">A Ciência por Trás do Aumento de Inteligência</h2>
          <p className="mb-4">
            Durante décadas, acreditou-se que QI era fixo. Hoje, sabemos que isso não é verdade. 
            Estudos de neuroplasticidade mostram que o cérebro pode se reorganizar e formar novas 
            conexões ao longo da vida. A inteligência pode ser desenvolvida através de:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Neuroplasticidade:</strong> O cérebro cria novas conexões neurais com aprendizado</li>
            <li><strong>Mielinização:</strong> Prática repetida torna conexões mais eficientes</li>
            <li><strong>Neurogênese:</strong> Formação de novos neurônios, especialmente no hipocampo</li>
            <li><strong>Eficiência neural:</strong> Redes neurais se tornam mais eficientes com uso</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">1. Treino Cognitivo Estruturado</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Exercícios de Memória de Trabalho</h3>
          <p className="mb-4">
            A memória de trabalho é fortemente correlacionada com QI. Treiná-la pode aumentar 
            inteligência fluida:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>N-back training:</strong> Exercícios que exigem lembrar informações de N passos atrás</li>
            <li><strong>Dual n-back:</strong> Versão mais desafiadora que treina múltiplas modalidades</li>
            <li><strong>Span tasks:</strong> Lembrar sequências de números, letras ou cores</li>
            <li><strong>Efeito comprovado:</strong> Estudos mostram ganhos de 3-5 pontos de QI com treino consistente</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Raciocínio e Resolução de Problemas</h3>
          <p className="mb-4">
            Desafiar seu cérebro com problemas complexos desenvolve inteligência:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Quebra-cabeças lógicos:</strong> Sudoku, puzzles, problemas matemáticos</li>
            <li><strong>Jogos estratégicos:</strong> Xadrez, Go, jogos de estratégia complexos</li>
            <li><strong>Programação:</strong> Aprender a programar desenvolve raciocínio lógico</li>
            <li><strong>Matemática avançada:</strong> Resolver problemas matemáticos complexos</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">2. Educação e Aprendizado Contínuo</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Leitura Profunda e Variada</h3>
          <p className="mb-4">
            Leitura é uma das formas mais eficazes de aumentar inteligência:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Leitura diversificada:</strong> Expor-se a diferentes tópicos e estilos</li>
            <li><strong>Leitura crítica:</strong> Analisar, questionar e sintetizar informações</li>
            <li><strong>Literatura complexa:</strong> Desafiar-se com textos mais difíceis</li>
            <li><strong>Não-ficção científica:</strong> Aprender sobre ciência, história, filosofia</li>
            <li><strong>Meta-análise:</strong> Estudos mostram que leitores frequentes têm QI 5-10 pontos mais alto</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Aprendizado de Novas Habilidades</h3>
          <p className="mb-4">
            Aprender habilidades novas cria novas conexões neurais:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Idiomas:</strong> Aprender novos idiomas desenvolve múltiplas áreas cerebrais</li>
            <li><strong>Instrumentos musicais:</strong> Melhora memória, coordenação e raciocínio</li>
            <li><strong>Habilidades técnicas:</strong> Programação, design, engenharia</li>
            <li><strong>Artes:</strong> Desenho, pintura, escultura desenvolvem criatividade e percepção</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">3. Exercício Físico Regular</h2>
          <p className="mb-4">
            Exercício físico tem impacto direto na função cognitiva:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Exercício Aeróbico</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Aumenta BDNF:</strong> Fator neurotrófico que promove neurogênese</li>
            <li><strong>Melhora fluxo sanguíneo:</strong> Mais oxigênio e nutrientes para o cérebro</li>
            <li><strong>Reduz inflamação:</strong> Inflamação crônica prejudica cognição</li>
            <li><strong>Recomendação:</strong> 150 minutos/semana de exercício moderado</li>
            <li><strong>Efeito:</strong> Estudos mostram aumento de 2-4 pontos de QI com exercício regular</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Treino de Força</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Melhora função executiva:</strong> Planejamento, controle inibitório</li>
            <li><strong>Aumenta fatores de crescimento:</strong> IGF-1, importante para neurogênese</li>
            <li><strong>Recomendação:</strong> 2-3x/semana de treino de força</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">4. Nutrição e Dieta</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Dieta Mediterrânea</h3>
          <p className="mb-4">
            Estudos mostram que dieta mediterrânea está associada a melhor função cognitiva:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Ômega-3:</strong> Peixes gordurosos, nozes, sementes de linhaça</li>
            <li><strong>Antioxidantes:</strong> Frutas, vegetais, chá verde</li>
            <li><strong>Gorduras saudáveis:</strong> Azeite de oliva, abacate</li>
            <li><strong>Grãos integrais:</strong> Fornecem energia estável para o cérebro</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Nutrientes Específicos para o Cérebro</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Colina:</strong> Ovos, fígado, amendoim (importante para memória)</li>
            <li><strong>Vitamina B12:</strong> Carnes, peixes, laticínios (essencial para função neural)</li>
            <li><strong>Ferro:</strong> Carnes, leguminosas (deficiência reduz QI)</li>
            <li><strong>Zinco:</strong> Carnes, sementes (importante para neurotransmissores)</li>
            <li><strong>Magnésio:</strong> Vegetais verdes, nozes (regula função neural)</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">5. Sono de Qualidade</h2>
          <p className="mb-4">
            Sono é crucial para consolidação de memória e função cognitiva:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Consolidação de memória:</strong> Sono REM consolida aprendizado do dia</li>
            <li><strong>Limpeza cerebral:</strong> Sistema glinfático remove toxinas durante o sono</li>
            <li><strong>Reparação neural:</strong> Células se regeneram durante o sono profundo</li>
            <li><strong>Recomendação:</strong> 7-9 horas de sono por noite</li>
            <li><strong>Qualidade importa:</strong> Sono fragmentado prejudica cognição mesmo com duração adequada</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">6. Meditação e Mindfulness</h2>
          <p className="mb-4">
            Meditação tem efeitos mensuráveis na estrutura e função cerebral:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Aumenta espessura cortical:</strong> Especialmente em áreas relacionadas a atenção</li>
            <li><strong>Melhora atenção:</strong> Reduz distração e melhora foco</li>
            <li><strong>Reduz estresse:</strong> Cortisol crônico prejudica cognição</li>
            <li><strong>Recomendação:</strong> 10-20 minutos diários de meditação</li>
            <li><strong>Efeito:</strong> Estudos mostram melhoria em testes de QI após 8 semanas de prática</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">7. Socialização e Aprendizado Social</h2>
          <p className="mb-4">
            Interações sociais complexas desafiam o cérebro:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Conversas profundas:</strong> Debater ideias, discutir conceitos complexos</li>
            <li><strong>Ensinar outros:</strong> Explicar conceitos desenvolve compreensão profunda</li>
            <li><strong>Grupos de estudo:</strong> Aprendizado colaborativo</li>
            <li><strong>Networking intelectual:</strong> Conectar-se com pessoas inteligentes</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">8. Redução de Estresse e Ansiedade</h2>
          <p className="mb-4">
            Estresse crônico prejudica função cognitiva:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Cortisol:</strong> Em excesso, danifica neurônios e reduz neurogênese</li>
            <li><strong>Ansiedade:</strong> Consome recursos cognitivos (memória de trabalho)</li>
            <li><strong>Estratégias:</strong> Meditação, exercício, terapia, hobbies relaxantes</li>
            <li><strong>Gerenciamento de tempo:</strong> Reduz estresse relacionado a prazos</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">9. Desafios Cognitivos Progressivos</h2>
          <p className="mb-4">
            O cérebro se adapta. Para continuar melhorando, você precisa aumentar a dificuldade:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Princípio da sobrecarga progressiva:</strong> Aumentar dificuldade gradualmente</li>
            <li><strong>Zona de desenvolvimento proximal:</strong> Desafios no limite da sua capacidade</li>
            <li><strong>Variedade:</strong> Não fazer sempre a mesma atividade</li>
            <li><strong>Feedback:</strong> Aprender com erros e ajustar estratégias</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">10. Ambiente Enriquecido</h2>
          <p className="mb-4">
            Criar um ambiente que estimule cognição:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Livros acessíveis:</strong> Ter livros por perto aumenta probabilidade de leitura</li>
            <li><strong>Ferramentas de aprendizado:</strong> Apps, cursos online, materiais educacionais</li>
            <li><strong>Espaço dedicado:</strong> Ambiente tranquilo para estudo e reflexão</li>
            <li><strong>Redução de distrações:</strong> Minimizar interrupções durante atividades cognitivas</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Quanto Você Pode Aumentar?</h2>
          <p className="mb-4">
            Estudos mostram que é possível aumentar QI significativamente:
          </p>
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <ul className="space-y-3">
              <li><strong>Treino cognitivo intensivo:</strong> +3-7 pontos de QI em 3-6 meses</li>
              <li><strong>Educação formal:</strong> Cada ano adicional de educação = +1-3 pontos</li>
              <li><strong>Exercício regular:</strong> +2-4 pontos com exercício consistente</li>
              <li><strong>Melhoria nutricional:</strong> +2-5 pontos (especialmente se havia deficiências)</li>
              <li><strong>Combinação de métodos:</strong> +10-15 pontos com abordagem multifacetada</li>
            </ul>
          </div>
          <p className="mb-4">
            <strong>Importante:</strong> Ganhos são maiores em pessoas que começam com QI mais baixo 
            e em crianças/adolescentes, mas adultos também podem melhorar significativamente.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Plano de Ação Prático</h2>
          <p className="mb-4">
            Combine múltiplas estratégias para máximo efeito:
          </p>
          <div className="bg-primary/10 p-6 rounded-lg my-6 border-l-4 border-primary">
            <h3 className="text-xl font-bold mb-4">Rotina Diária Recomendada</h3>
            <ul className="space-y-2">
              <li><strong>Manhã:</strong> 20 min exercício + 15 min leitura</li>
              <li><strong>Meio-dia:</strong> 10 min meditação + almoço nutritivo</li>
              <li><strong>Tarde:</strong> 30 min treino cognitivo (n-back, puzzles)</li>
              <li><strong>Noite:</strong> Aprendizado de nova habilidade (idioma, programação, etc.)</li>
              <li><strong>Antes de dormir:</strong> 7-9 horas de sono de qualidade</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Mitos e Realidades</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Mito: QI é 100% genético</h3>
          <p className="mb-4">
            <strong>Realidade:</strong> Genética explica ~50-70% da variação. Ambiente e esforço 
            explicam 30-50%. Você tem controle significativo sobre sua inteligência.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Mito: Só funciona na infância</h3>
          <p className="mb-4">
            <strong>Realidade:</strong> Neuroplasticidade continua na vida adulta. Adultos podem 
            aumentar QI significativamente, embora ganhos sejam maiores em jovens.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Mito: Suplementos mágicos aumentam QI</h3>
          <p className="mb-4">
            <strong>Realidade:</strong> Suplementos podem ajudar se houver deficiências, mas não 
            há "pílula mágica". Métodos comprovados são treino, educação, exercício e nutrição adequada.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            Aumentar inteligência é possível e baseado em ciência sólida. A chave é combinar 
            múltiplas estratégias: treino cognitivo, educação, exercício, nutrição, sono, meditação 
            e redução de estresse.
          </p>
          <p className="mb-4">
            O mais importante é consistência. Pequenas melhorias diárias se acumulam em ganhos 
            significativos ao longo do tempo. Comece com uma ou duas estratégias e vá adicionando 
            mais conforme desenvolve o hábito.
          </p>
          <p className="mb-4">
            Lembre-se: inteligência não é destino. Com esforço, estratégia e consistência, você 
            pode desenvolver significativamente suas capacidades cognitivas.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI e Comece a Melhorar</h3>
          <p className="text-muted-foreground mb-6">
            O primeiro passo para aumentar sua inteligência é conhecer seu ponto de partida. 
            Faça nosso teste científico completo e descubra seu QI atual.
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
            {getRelatedArticles("como-aumentar-inteligencia", 3).map((article) => (
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

export default ComoAumentarInteligencia;

