import { Brain, ArrowRight, Calendar, TrendingUp, BookOpen, Clock, LineChart } from "lucide-react";
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

const QIMedioPorIdade = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/qi-medio-por-idade";
  const articleTitle = "QI Médio por Idade: Como a Inteligência Muda ao Longo da Vida";
  const articleDescription = "Descubra como o QI médio varia por idade. Desenvolvimento cognitivo na infância, pico na vida adulta, mudanças na terceira idade e fatores que influenciam.";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "QIMedioPorIdade, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-medio-por-idade",
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
          <span>QI Médio por Idade</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          QI Médio por Idade: Como a Inteligência Evolui ao Longo da Vida
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
          
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <LineChart className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            O QI não é estático ao longo da vida. Ele evolui, atinge um pico e depois pode declinar. 
            Neste artigo, exploramos como o QI médio varia por idade, desde a primeira infância até 
            a terceira idade, e os fatores que influenciam essas mudanças.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI por Faixa Etária: Dados Científicos</h2>
          <p className="mb-4">
            Estudos longitudinais e transversais revelam padrões claros de desenvolvimento cognitivo 
            ao longo da vida. Aqui está o que a ciência mostra:
          </p>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4">QI Médio por Faixa Etária (Padronizado)</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>3-5 anos</strong> (Pré-escola)</span>
                <span className="text-primary font-bold">85-95</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>6-11 anos</strong> (Ensino Fundamental I)</span>
                <span className="text-primary font-bold">90-100</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>12-17 anos</strong> (Adolescência)</span>
                <span className="text-primary font-bold">95-105</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>18-25 anos</strong> (Jovem Adulto)</span>
                <span className="text-primary font-bold">100-110</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded border-2 border-primary/30">
                <span><strong>26-35 anos</strong> (Pico Cognitivo)</span>
                <span className="text-primary font-bold">105-115</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>36-50 anos</strong> (Meia-idade)</span>
                <span className="text-primary font-bold">100-110</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>51-65 anos</strong> (Pré-aposentadoria)</span>
                <span className="text-primary font-bold">95-105</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>66-80 anos</strong> (Terceira idade)</span>
                <span className="text-primary font-bold">90-100</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>80+ anos</strong> (Idosos)</span>
                <span className="text-primary font-bold">85-95</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              <strong>Nota:</strong> Valores são aproximados e variam significativamente entre indivíduos. 
              O pico ocorre tipicamente entre 25-35 anos.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Infância e Adolescência: Desenvolvimento Rápido</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Primeira Infância (0-5 anos)</h3>
          <p className="mb-4">
            Os primeiros anos são críticos para o desenvolvimento cognitivo. O cérebro está em 
            desenvolvimento acelerado:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Neuroplasticidade máxima:</strong> O cérebro forma novas conexões rapidamente</li>
            <li><strong>Desenvolvimento de linguagem:</strong> Base para raciocínio abstrato futuro</li>
            <li><strong>Memória de trabalho:</strong> Começa a se desenvolver, essencial para QI</li>
            <li><strong>Fatores críticos:</strong> Nutrição, estimulação cognitiva, vínculo afetivo</li>
          </ul>
          <p className="mb-4">
            <strong>QI médio:</strong> 85-95 pontos. Testes nesta idade são menos estáveis, mas 
            indicam trajetória de desenvolvimento.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Infância (6-11 anos)</h3>
          <p className="mb-4">
            Período de escolarização formal acelera desenvolvimento cognitivo:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Leitura e matemática:</strong> Desenvolvem raciocínio lógico</li>
            <li><strong>Memória de trabalho:</strong> Expande significativamente</li>
            <li><strong>Velocidade de processamento:</strong> Melhora com prática</li>
            <li><strong>QI médio:</strong> 90-100 pontos, aproximando-se da média adulta</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Adolescência (12-17 anos)</h3>
          <p className="mb-4">
            Período de consolidação e refinamento das habilidades cognitivas:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Pensamento abstrato:</strong> Desenvolve-se plenamente</li>
            <li><strong>Raciocínio complexo:</strong> Capacidade de resolver problemas multistep</li>
            <li><strong>Funções executivas:</strong> Planejamento e controle inibitório melhoram</li>
            <li><strong>QI médio:</strong> 95-105 pontos, próximo do pico</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Vida Adulta: O Pico Cognitivo</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Jovem Adulto (18-25 anos)</h3>
          <p className="mb-4">
            O cérebro completa seu desenvolvimento estrutural. Capacidades cognitivas atingem níveis altos:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Mielinização completa:</strong> Conexões neurais otimizadas</li>
            <li><strong>Velocidade de processamento:</strong> Máxima eficiência</li>
            <li><strong>Memória de trabalho:</strong> Capacidade plena</li>
            <li><strong>QI médio:</strong> 100-110 pontos</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Pico Cognitivo (26-35 anos)</h3>
          <p className="mb-4">
            <strong>Esta é a faixa etária com QI médio mais alto.</strong> Combinação ideal de:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Velocidade de processamento:</strong> Ainda no máximo</li>
            <li><strong>Experiência acumulada:</strong> Conhecimento e estratégias desenvolvidas</li>
            <li><strong>Funções executivas:</strong> Planejamento e tomada de decisão otimizados</li>
            <li><strong>Raciocínio fluido:</strong> Capacidade de resolver problemas novos</li>
            <li><strong>QI médio:</strong> 105-115 pontos (pico absoluto)</li>
          </ul>
          <div className="bg-primary/10 p-4 rounded-lg my-4 border-l-4 border-primary">
            <p className="mb-2">
              <strong>Por que o pico ocorre aqui?</strong>
            </p>
            <p>
              O cérebro ainda tem velocidade máxima, mas já acumulou experiência suficiente para 
              aplicar conhecimento de forma eficiente. É o "ponto doce" entre velocidade e sabedoria.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Meia-Idade: Estabilização e Declínio Gradual</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">36-50 anos</h3>
          <p className="mb-4">
            Início de declínio gradual em algumas áreas, mas compensação em outras:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Velocidade de processamento:</strong> Começa a diminuir (~5-10%)</li>
            <li><strong>Memória de trabalho:</strong> Ligeira redução</li>
            <li><strong>Conhecimento cristalizado:</strong> Continua aumentando (compensação)</li>
            <li><strong>Raciocínio baseado em experiência:</strong> Melhora</li>
            <li><strong>QI médio:</strong> 100-110 pontos (ligeira redução do pico)</li>
          </ul>
          <p className="mb-4">
            <strong>Nota importante:</strong> O declínio é gradual e pode ser minimizado com 
            atividade cognitiva constante.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Terceira Idade: Declínio Acelerado</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">51-65 anos</h3>
          <p className="mb-4">
            Declínio mais perceptível em funções cognitivas:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Velocidade de processamento:</strong> Redução de 10-15%</li>
            <li><strong>Memória episódica:</strong> Declínio mais acentuado</li>
            <li><strong>Funções executivas:</strong> Ligeira redução</li>
            <li><strong>Conhecimento cristalizado:</strong> Pode continuar aumentando</li>
            <li><strong>QI médio:</strong> 95-105 pontos</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">66-80 anos</h3>
          <p className="mb-4">
            Declínio mais acentuado, mas variação individual enorme:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Velocidade de processamento:</strong> Redução de 20-30%</li>
            <li><strong>Memória de trabalho:</strong> Redução significativa</li>
            <li><strong>Raciocínio fluido:</strong> Declínio mais acentuado</li>
            <li><strong>Conhecimento cristalizado:</strong> Pode se manter estável</li>
            <li><strong>QI médio:</strong> 90-100 pontos</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">80+ anos</h3>
          <p className="mb-4">
            Maior variabilidade individual. Alguns mantêm QI alto, outros declinam mais:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Declínio geral:</strong> 15-25% em relação ao pico</li>
            <li><strong>Fatores protetores:</strong> Educação, atividade cognitiva, saúde física</li>
            <li><strong>QI médio:</strong> 85-95 pontos</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Fatores que Influenciam QI por Idade</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Fatores que Aceleram Desenvolvimento</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Educação formal:</strong> Mais anos de estudo correlacionam com QI mais alto</li>
            <li><strong>Estimulação cognitiva:</strong> Leitura, jogos mentais, aprendizado contínuo</li>
            <li><strong>Nutrição adequada:</strong> Especialmente na infância</li>
            <li><strong>Exercício físico:</strong> Melhora função cognitiva em todas as idades</li>
            <li><strong>Saúde mental:</strong> Redução de estresse e ansiedade</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Fatores que Aceleram Declínio</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Sedentarismo cognitivo:</strong> Falta de desafios mentais</li>
            <li><strong>Doenças crônicas:</strong> Diabetes, hipertensão, doenças cardiovasculares</li>
            <li><strong>Estresse crônico:</strong> Impacta memória e funções executivas</li>
            <li><strong>Isolamento social:</strong> Reduz estimulação cognitiva</li>
            <li><strong>Má qualidade do sono:</strong> Especialmente na meia-idade e terceira idade</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Diferenças entre Tipos de Inteligência</h2>
          <p className="mb-4">
            É importante entender que diferentes tipos de inteligência declinam em ritmos diferentes:
          </p>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4">Inteligência Fluida vs. Cristalizada</h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">Inteligência Fluida (Raciocínio novo):</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Pico: 20-30 anos</li>
                  <li>Declínio: Começa aos 30, acelera após 60</li>
                  <li>Inclui: Velocidade de processamento, memória de trabalho, raciocínio abstrato</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Inteligência Cristalizada (Conhecimento):</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Pico: 40-60 anos</li>
                  <li>Declínio: Mínimo até 70+, depois gradual</li>
                  <li>Inclui: Vocabulário, conhecimento factual, experiência profissional</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Manter QI Alto em Qualquer Idade</h2>
          <p className="mb-4">
            Embora o declínio seja natural, pode ser significativamente reduzido:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Treino cognitivo regular:</strong> Jogos mentais, quebra-cabeças, aprendizado de novas habilidades</li>
            <li><strong>Exercício físico:</strong> 150 minutos/semana de atividade moderada</li>
            <li><strong>Leitura constante:</strong> Mantém vocabulário e conhecimento</li>
            <li><strong>Vida social ativa:</strong> Conversas e interações estimulam cognição</li>
            <li><strong>Alimentação saudável:</strong> Dieta mediterrânea associada a menor declínio</li>
            <li><strong>Sono de qualidade:</strong> 7-9 horas por noite</li>
            <li><strong>Gerenciamento de estresse:</strong> Meditação, mindfulness</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            O QI médio varia significativamente por idade, com pico entre 26-35 anos e declínio 
            gradual após isso. No entanto, a variação individual é enorme - muitas pessoas mantêm 
            QI alto até idades avançadas com hábitos adequados.
          </p>
          <p className="mb-4">
            O importante não é a idade, mas manter atividade cognitiva constante, exercício físico, 
            vida social e aprendizado contínuo. Esses fatores podem reduzir significativamente o 
            declínio cognitivo relacionado à idade.
          </p>
          <p className="mb-4">
            Independente da sua idade, descobrir seu QI atual e trabalhar para desenvolvê-lo é 
            sempre valioso. Nunca é tarde para investir em seu desenvolvimento cognitivo.
          </p>
        </div>

        {/* CTA */}
        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "Qual faixa de QI de por idade?",
                    "answer": "por idade geralmente têm QI entre 95-115, com média próxima de 100-105. Variação individual é significativa."
          },
          {
                    "question": "por idade com QI alto se destacam mais?",
                    "answer": "Sim. QI 120+ facilita aprendizado rápido e resolução de problemas. Mas dedicação e habilidades sociais também são cruciais."
          },
          {
                    "question": "Educação influencia QI de por idade?",
                    "answer": "Sim. Cada ano adicional de educação aumenta QI em 1-3 pontos. Educação superior pode adicionar 5-10 pontos."
          },
          {
                    "question": "por idade podem superar limitações de QI?",
                    "answer": "Sim. Especialização, trabalho duro e desenvolvimento de habilidades específicas compensam QI médio ou abaixo da média."
          },
          {
                    "question": "Ambiente familiar afeta QI de por idade?",
                    "answer": "Sim. Ambiente estimulante, acesso a livros e apoio educacional podem aumentar QI em 10-15 pontos comparado a ambiente carente."
          }
]} />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI em Qualquer Idade</h3>
          <p className="text-muted-foreground mb-6">
            Não importa sua idade - descobrir seu QI atual é o primeiro passo para otimizar seu 
            desenvolvimento cognitivo. Faça nosso teste científico completo.
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
            {getRelatedArticles("qi-medio-por-idade", 3).map((article) => (
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

export default QIMedioPorIdade;

