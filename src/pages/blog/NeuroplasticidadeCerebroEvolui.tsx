import { Brain, ArrowRight, Zap, TrendingUp, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const NeuroplasticidadeCerebroEvolui = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/neuroplasticidade-cerebro-evolui";
  const articleTitle = "Neuroplasticidade: Como o Cérebro Evolui";
  const articleDescription = "Descubra como a neuroplasticidade remodela o cérebro com treinos cognitivos, hábitos saudáveis e evidências da neurociência moderna.";
  
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
      slug: "neuroplasticidade-cerebro-evolui",
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
          <span>Neuroplasticidade e Treinos Cognitivos</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Neuroplasticidade: Como o Cérebro Evolui com Treinos Cognitivos (O Que a Neurociência Diz)
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Fevereiro 2025</time>
          <span>•</span>
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Zap className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Durante décadas, acreditou-se que o cérebro adulto era fixo e imutável. A neurociência moderna 
            desmentiu isso completamente. O cérebro é plástico — capaz de se reorganizar, formar novas 
            conexões e até gerar novos neurônios ao longo da vida. Entenda como treinos cognitivos podem 
            literalmente remodelar seu cérebro.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que É Neuroplasticidade?</h2>
          <p className="mb-4">
            Neuroplasticidade é a capacidade do sistema nervoso de modificar sua estrutura e função em 
            resposta à experiência, aprendizado e estímulos ambientais. Isso acontece em dois níveis:
          </p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Plasticidade Sináptica</h3>
          <p className="mb-4">
            Mudanças na força das conexões entre neurônios (sinapses). Quando você aprende algo novo, 
            as sinapses envolvidas se fortalecem. O princípio é: "neurônios que disparam juntos, 
            se conectam juntos" (Hebb's Law).
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Neurogênese</h3>
          <p className="mb-4">
            Formação de novos neurônios. Até recentemente, acreditava-se que isso só acontecia na infância. 
            Estudos mostram que o hipocampo (área crucial para memória) continua gerando novos neurônios 
            na vida adulta.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Evidências Científicas</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Estudo de Taxistas de Londres</h3>
          <p className="mb-4">
            Um estudo clássico de 2000 mostrou que taxistas de Londres, que precisam memorizar milhares 
            de ruas, têm hipocampos significativamente maiores que a média. Quanto mais tempo no trabalho, 
            maior o hipocampo. Isso prova que treino específico altera estrutura cerebral.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Músicos e Estrutura Cerebral</h3>
          <p className="mb-4">
            Estudos de neuroimagem mostram que músicos têm:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Maior volume de massa cinzenta em áreas motoras e auditivas</li>
            <li>Córtex motor mais desenvolvido (especialmente na mão que toca mais)</li>
            <li>Corpo caloso (conexão entre hemisférios) mais espesso</li>
            <li>Melhor conectividade entre regiões cerebrais</li>
          </ul>
          <p className="mb-4">
            E essas diferenças são proporcionais à quantidade de prática, não apenas genética.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Meditação e Espessura Cortical</h3>
          <p className="mb-4">
            Estudos com meditadores experientes mostram:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Maior espessura cortical em áreas de atenção e introspecção</li>
            <li>Redução de atividade na amígdala (menos reatividade emocional)</li>
            <li>Melhor conectividade entre redes cerebrais</li>
          </ul>
          <p className="mb-4">
            Apenas 8 semanas de meditação mindfulness já produzem mudanças mensuráveis.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Treinos Cognitivos Alteram o Cérebro</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Treino de Memória de Trabalho</h3>
          <p className="mb-4">
            Estudos com Dual N-Back (jogo de treino de memória) mostram:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Aumento de densidade de dopamina D1 no córtex pré-frontal</li>
            <li>Melhora em testes de QI fluido (até 4 pontos após 8 semanas)</li>
            <li>Transferência para outras habilidades cognitivas</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Aprendizado de Idiomas</h3>
          <p className="mb-4">
            Aprender um novo idioma:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Aumenta densidade de massa cinzenta em áreas de linguagem</li>
            <li>Melhora controle executivo e atenção</li>
            <li>Protege contra declínio cognitivo na velhice</li>
            <li>Pode aumentar QI em até 5 pontos</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Exercício Físico</h3>
          <p className="mb-4">
            Exercício aeróbico regular:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Aumenta BDNF (fator neurotrófico derivado do cérebro) - "fertilizante" para neurônios</li>
            <li>Promove neurogênese no hipocampo</li>
            <li>Melhora fluxo sanguíneo cerebral</li>
            <li>Aumenta volume do hipocampo em até 2% em 1 ano</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Princípios da Neuroplasticidade Eficaz</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Especificidade</h3>
          <p className="mb-4">
            O cérebro se adapta especificamente ao que você treina. Treinar xadrez melhora raciocínio 
            estratégico, mas não necessariamente memória verbal. Para melhorar QI geral, você precisa 
            de treino variado.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Intensidade e Desafio</h3>
          <p className="mb-4">
            Mudanças significativas requerem desafio constante. Se está fácil, não está funcionando. 
            O cérebro precisa estar no limite de sua capacidade para se adaptar.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Repetição e Consistência</h3>
          <p className="mb-4">
            Mudanças estruturais levam tempo. Estudos mostram que mudanças mensuráveis aparecem após 
            4-8 semanas de prática consistente. Manutenção requer prática contínua.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Sono e Consolidação</h3>
          <p className="mb-4">
            O sono é quando o cérebro consolida aprendizado. Durante o sono profundo, conexões sinápticas 
            são fortalecidas. Privar-se de sono anula benefícios do treino.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Treinos Cognitivos que Funcionam</h2>
          
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4">Baseado em Evidências Científicas:</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Dual N-Back:</strong> Melhora memória de trabalho e QI fluido. 
                20 minutos/dia, 4-5x por semana.
              </li>
              <li>
                <strong>Aprendizado de habilidades novas:</strong> Tocar instrumento, aprender idioma, 
                programar. Força múltiplas áreas cerebrais.
              </li>
              <li>
                <strong>Exercício aeróbico:</strong> 30-45 min, 3-4x por semana. Aumenta BDNF e neurogênese.
              </li>
              <li>
                <strong>Meditação mindfulness:</strong> 20 min/dia. Melhora atenção e regulação emocional.
              </li>
              <li>
                <strong>Leitura ativa:</strong> Não apenas consumir, mas questionar, conectar, aplicar.
              </li>
              <li>
                <strong>Jogos estratégicos:</strong> Xadrez, Go, puzzles complexos. Melhoram raciocínio.
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Limitações e Realidade</h2>
          <p className="mb-4">
            É importante ser realista:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Mudanças são graduais:</strong> Não espere transformação em semanas</li>
            <li><strong>Há limites genéticos:</strong> Neuroplasticidade não torna todos gênios</li>
            <li><strong>Transferência é limitada:</strong> Treinar uma habilidade não melhora tudo</li>
            <li><strong>Idade importa:</strong> Cérebro jovem é mais plástico, mas adultos ainda podem mudar</li>
            <li><strong>Consistência é crucial:</strong> Benefícios desaparecem sem manutenção</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Plano Prático de 8 Semanas</h2>
          <p className="mb-4">
            Para ver mudanças mensuráveis:
          </p>
          <ol className="list-decimal pl-6 mb-4 space-y-3">
            <li>
              <strong>Semanas 1-2:</strong> Estabeleça rotina. 20 min Dual N-Back + 30 min exercício, 
              4x por semana.
            </li>
            <li>
              <strong>Semanas 3-4:</strong> Adicione meditação (10 min/dia) e leitura ativa (30 min/dia).
            </li>
            <li>
              <strong>Semanas 5-6:</strong> Aumente intensidade. Adicione novo desafio (idioma, instrumento).
            </li>
            <li>
              <strong>Semanas 7-8:</strong> Consolidação. Mantenha rotina e avalie progresso.
            </li>
          </ol>

          <h2 className="text-3xl font-bold mt-12 mb-6">Medindo Progresso</h2>
          <p className="mb-4">
            Como saber se está funcionando:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Testes de QI:</strong> Faça antes e depois (com 8 semanas de intervalo)</li>
            <li><strong>Desempenho em tarefas:</strong> Note melhorias em memória, atenção, raciocínio</li>
            <li><strong>Autoavaliação:</strong> Você se sente mais "afiado" mentalmente?</li>
            <li><strong>Feedback externo:</strong> Outros notam diferença?</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            A neurociência prova definitivamente: seu cérebro não é fixo. Com treino adequado, você pode 
            literalmente remodelar sua estrutura neural e melhorar capacidades cognitivas. A chave está 
            em consistência, desafio progressivo e variedade de estímulos.
          </p>
          <p className="mb-4">
            Comece hoje. Seu cérebro está esperando para ser treinado.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Meça Seu Progresso</h3>
          <p className="text-muted-foreground mb-6">
            Faça nosso teste de QI antes de começar seu treino cognitivo e depois de 8 semanas para 
            medir suas melhorias. Acompanhe sua evolução com dados científicos.
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
            {getRelatedArticles("neuroplasticidade-cerebro-evolui", 3).map((article) => (
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

export default NeuroplasticidadeCerebroEvolui;

