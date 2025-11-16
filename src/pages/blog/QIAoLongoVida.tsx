import { Brain, ArrowRight, TrendingUp, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const QIAoLongoVida = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/qi-ao-longo-vida";
  const articleTitle = "QI ao Longo da Vida: Como a Inteligência Muda com a Idade";
  const articleDescription = "Descubra como o QI muda ao longo da vida. Desenvolvimento cognitivo na infância, pico na vida adulta e mudanças na terceira idade.";
  
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
      slug: "qi-ao-longo-vida",
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
          <span>QI ao Longo da Vida</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          QI ao Longo da Vida: Como a Inteligência Muda com a Idade
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
          
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <TrendingUp className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            O QI é fixo ou muda ao longo da vida? A resposta é complexa: algumas habilidades cognitivas 
            melhoram, outras declinam, e o timing varia. Entenda como a inteligência evolui da infância 
            à terceira idade e o que você pode fazer para otimizar seu desenvolvimento cognitivo em cada fase.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Infância e Adolescência: Desenvolvimento Rápido</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Primeiros Anos (0-5 anos)</h3>
          <p className="mb-4">
            Esta é a fase de <strong>maior crescimento cerebral</strong>:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>0-2 anos:</strong> Formação de sinapses explosiva (até 1 milhão por segundo)</li>
            <li><strong>2-5 anos:</strong> Desenvolvimento de linguagem, memória e raciocínio básico</li>
            <li><strong>Plasticidade máxima:</strong> Cérebro é extremamente moldável</li>
            <li><strong>Impacto ambiental:</strong> Nutrição, estimulação e interação são críticas</li>
          </ul>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <p className="font-semibold mb-3">Fatores Críticos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Nutrição adequada:</strong> Especialmente DHA, ferro, iodo</li>
              <li><strong>Interação verbal:</strong> Crianças que ouvem mais palavras desenvolvem QI maior</li>
              <li><strong>Brincadeiras estimulantes:</strong> Jogos que desafiam raciocínio</li>
              <li><strong>Ambiente seguro:</strong> Reduz estresse tóxico que afeta desenvolvimento</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Idade Escolar (6-12 anos)</h3>
          <p className="mb-4">
            Período de <strong>consolidação e especialização</strong>:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>QI estabiliza relativamente:</strong> Crianças mantêm posição relativa no grupo</li>
            <li><strong>Habilidades específicas:</strong> Leitura, matemática, raciocínio lógico se desenvolvem</li>
            <li><strong>Memória de trabalho:</strong> Capacidade aumenta significativamente</li>
            <li><strong>Velocidade de processamento:</strong> Melhora continuamente</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Adolescência (13-18 anos)</h3>
          <p className="mb-4">
            Fase de <strong>refinamento e especialização</strong>:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Raciocínio abstrato:</strong> Desenvolve-se rapidamente</li>
            <li><strong>Funções executivas:</strong> Planejamento, controle inibitório melhoram</li>
            <li><strong>QI relativo estabiliza:</strong> Posição no grupo tende a se manter</li>
            <li><strong>Plasticidade ainda alta:</strong> Aprendizado de novas habilidades é mais fácil</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Vida Adulta Jovem: O Pico Cognitivo</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">20-30 anos: Pico de Algumas Habilidades</h3>
          <p className="mb-4">
            Diferentes habilidades atingem pico em idades diferentes:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Velocidade de processamento:</strong> Pico aos ~18-20 anos</li>
            <li><strong>Memória de trabalho:</strong> Pico aos ~25 anos</li>
            <li><strong>Raciocínio fluido:</strong> Pico aos ~20-25 anos</li>
            <li><strong>Habilidades motoras:</strong> Pico aos ~20-30 anos</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">30-50 anos: Estabilidade e Sabedoria</h3>
          <p className="mb-4">
            Período de <strong>equilíbrio</strong>:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>QI cristalizado aumenta:</strong> Conhecimento e experiência acumulados</li>
            <li><strong>QI fluido começa a declinar:</strong> Mas lentamente</li>
            <li><strong>Sabedoria prática:</strong> Melhor tomada de decisão baseada em experiência</li>
            <li><strong>Especialização:</strong> Expertise em áreas específicas aumenta</li>
          </ul>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <p className="font-semibold mb-3">Paradoxo da Idade Média:</p>
            <p className="mb-4">
              Embora algumas habilidades cognitivas comecem a declinar, <strong>desempenho em tarefas 
              complexas reais pode melhorar</strong> devido a experiência, conhecimento e estratégias 
              mais eficientes.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Meia-Idade e Além: Declínio e Compensação</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">50-65 anos: Declínio Gradual</h3>
          <p className="mb-4">
            Mudanças começam a se tornar mais perceptíveis:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Velocidade de processamento:</strong> Declina ~10-15%</li>
            <li><strong>Memória episódica:</strong> Lembrar eventos específicos fica mais difícil</li>
            <li><strong>Memória de trabalho:</strong> Capacidade reduz ~15-20%</li>
            <li><strong>QI fluido:</strong> Declina gradualmente</li>
            <li><strong>QI cristalizado:</strong> Pode continuar aumentando ou se manter estável</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">65+ anos: Variação Individual Aumenta</h3>
          <p className="mb-4">
            A variação entre indivíduos <strong>aumenta dramaticamente</strong>:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Alguns mantêm QI alto:</strong> "Super-agers" mantêm função cognitiva excepcional</li>
            <li><strong>Outros declinam mais rápido:</strong> Devido a doenças, falta de atividade, isolamento</li>
            <li><strong>Fatores protetores:</strong> Educação, atividade física, engajamento social</li>
            <li><strong>Fatores de risco:</strong> Doenças crônicas, sedentarismo, isolamento social</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Fluido vs QI Cristalizado: Trajetórias Diferentes</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">QI Fluido (Gf)</h3>
          <p className="mb-4">
            Capacidade de <strong>raciocinar e resolver problemas novos</strong>:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Pico:</strong> ~20-25 anos</li>
            <li><strong>Declínio:</strong> Começa gradualmente após 30, acelera após 60</li>
            <li><strong>Taxa de declínio:</strong> ~0.5-1 ponto por década após 30</li>
            <li><strong>Fatores:</strong> Mais influenciado por genética e saúde física</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">QI Cristalizado (Gc)</h3>
          <p className="mb-4">
            <strong>Conhecimento acumulado</strong> e habilidades aprendidas:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Pico:</strong> ~50-60 anos (ou mais tarde)</li>
            <li><strong>Estabilidade:</strong> Pode se manter alto até 70-80 anos</li>
            <li><strong>Declínio:</strong> Mais lento e variável</li>
            <li><strong>Fatores:</strong> Mais influenciado por educação e engajamento intelectual</li>
          </ul>

          <div className="bg-primary/10 p-6 rounded-lg my-6 border-2 border-primary/20">
            <p className="font-semibold mb-3 text-lg">Implicação Prática:</p>
            <p className="mb-4">
              Embora QI fluido decline, <strong>QI cristalizado pode continuar crescendo</strong> através 
              de aprendizado contínuo, leitura e engajamento intelectual. Isso significa que você pode 
              manter e até melhorar inteligência prática mesmo com idade avançada.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Fatores que Influenciam Mudanças no QI</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Fatores que Aceleram Declínio</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Sedentarismo:</strong> Falta de exercício físico acelera declínio cognitivo</li>
            <li><strong>Isolamento social:</strong> Solidão está associada a declínio mais rápido</li>
            <li><strong>Doenças crônicas:</strong> Diabetes, hipertensão, doenças cardíacas</li>
            <li><strong>Falta de desafios mentais:</strong> "Use ou perca" — cérebro precisa de estímulo</li>
            <li><strong>Estresse crônico:</strong> Cortisol alto danifica neurônios</li>
            <li><strong>Má qualidade de sono:</strong> Sono é crucial para consolidação de memória</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Fatores que Protegem e Melhoram</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Exercício físico regular:</strong> Aumenta neurogênese e neuroplasticidade</li>
            <li><strong>Engajamento intelectual:</strong> Leitura, aprendizado, hobbies desafiadores</li>
            <li><strong>Vida social ativa:</strong> Interações sociais complexas estimulam o cérebro</li>
            <li><strong>Educação contínua:</strong> Aprender coisas novas mantém plasticidade</li>
            <li><strong>Dieta saudável:</strong> Mediterrânea rica em ômega-3 e antioxidantes</li>
            <li><strong>Sono adequado:</strong> 7-9 horas de qualidade</li>
            <li><strong>Gerenciamento de estresse:</strong> Meditação, mindfulness, relaxamento</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estratégias para Otimizar QI em Cada Fase</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Infância e Adolescência</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Nutrição ótima:</strong> Especialmente nos primeiros 2 anos</li>
            <li><strong>Estimulação rica:</strong> Livros, conversas, jogos educativos</li>
            <li><strong>Educação de qualidade:</strong> Escolas que desafiam e engajam</li>
            <li><strong>Atividades físicas:</strong> Exercício promove desenvolvimento cerebral</li>
            <li><strong>Limite de telas:</strong> Tempo excessivo em telas pode prejudicar desenvolvimento</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Vida Adulta (20-50 anos)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Manter desafios:</strong> Não se acomode, continue aprendendo</li>
            <li><strong>Exercício regular:</strong> 150 minutos/semana de atividade moderada</li>
            <li><strong>Leitura diversificada:</strong> Expanda conhecimento e vocabulário</li>
            <li><strong>Hobbies intelectuais:</strong> Xadrez, música, idiomas, programação</li>
            <li><strong>Rede social rica:</strong> Conversas profundas e estimulantes</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Meia-Idade e Terceira Idade (50+)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Foco em QI cristalizado:</strong> Continue aprendendo e acumulando conhecimento</li>
            <li><strong>Compensar declínio fluido:</strong> Use estratégias, listas, organização</li>
            <li><strong>Exercício é crucial:</strong> Ainda mais importante para manter função cognitiva</li>
            <li><strong>Novos aprendizados:</strong> Aprender coisas novas mantém plasticidade</li>
            <li><strong>Engajamento social:</strong> Combate isolamento e mantém função cognitiva</li>
            <li><strong>Gerenciamento de saúde:</strong> Controle doenças crônicas, pressão, diabetes</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Super-Agers: O Que Podemos Aprender</h2>
          
          <p className="mb-4">
            "Super-agers" são pessoas de 80+ anos com função cognitiva de pessoas de 50-60. Estudos 
            mostram que eles compartilham:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Atividade física regular:</strong> Todos se exercitam consistentemente</li>
            <li><strong>Engajamento intelectual:</strong> Leem, aprendem, se desafiam mentalmente</li>
            <li><strong>Vida social ativa:</strong> Mantêm relacionamentos profundos</li>
            <li><strong>Atitude positiva:</strong> Encaram desafios como oportunidades</li>
            <li><strong>Propósito:</strong> Têm razões para acordar de manhã</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão: QI é Dinâmico, Não Fixo</h2>
          
          <p className="mb-4">
            A ciência mostra claramente que <strong>QI não é fixo</strong>. Ele muda ao longo da vida, 
            e você tem controle significativo sobre essas mudanças:
          </p>
          
          <div className="bg-primary/10 p-6 rounded-lg my-6 border-2 border-primary/20">
            <p className="font-semibold mb-3 text-lg">Principais Insights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Infância:</strong> Ambiente e nutrição são críticos para desenvolvimento máximo</li>
              <li><strong>Vida adulta:</strong> Pico de algumas habilidades, mas outras continuam melhorando</li>
              <li><strong>Meia-idade:</strong> QI cristalizado pode continuar crescendo com aprendizado</li>
              <li><strong>Terceira idade:</strong> Declínio não é inevitável — estilo de vida faz diferença enorme</li>
              <li><strong>Em todas as idades:</strong> Exercício, aprendizado, engajamento social protegem e melhoram QI</li>
            </ul>
          </div>

          <p className="mb-4">
            <strong>A mensagem mais importante:</strong> Não importa sua idade, você pode melhorar ou 
            proteger seu QI através de escolhas de estilo de vida. Nunca é tarde para começar a investir 
            em sua saúde cognitiva.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Meça Seu QI e Acompanhe Seu Desenvolvimento</h3>
          <p className="text-muted-foreground mb-6">
            Conhecer seu QI atual é o primeiro passo para otimizar seu desenvolvimento cognitivo. Faça 
            nosso teste científico e use os resultados para guiar seu desenvolvimento ao longo da vida.
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
            {getRelatedArticles("qi-ao-longo-vida", 3).map((article) => (
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

export default QIAoLongoVida;

