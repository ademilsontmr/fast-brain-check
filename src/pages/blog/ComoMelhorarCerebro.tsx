import { Brain, ArrowRight, Zap, Activity, BookOpen, Clock, Heart } from "lucide-react";
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

const ComoMelhorarCerebro = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/como-melhorar-cerebro";
  const articleTitle = "Como Melhorar o Cérebro: Guia Completo de Otimização Cognitiva";
  const articleDescription = "Descubra como melhorar seu cérebro através de neuroplasticidade, exercícios, nutrição e hábitos. Métodos científicos para otimizar função cognitiva, memória e saúde cerebral.";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "ComoMelhorarCerebro, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "como-melhorar-cerebro",
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
          <span>Como Melhorar o Cérebro</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Como Melhorar o Cérebro: Guia Completo de Otimização Cognitiva
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
          <span>•</span>
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Activity className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Seu cérebro é o órgão mais complexo do corpo e, como qualquer músculo, pode ser 
            fortalecido e otimizado. Neste guia completo, exploramos métodos científicos para 
            melhorar saúde cerebral, função cognitiva, memória e neuroplasticidade.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Entendendo a Neuroplasticidade</h2>
          <p className="mb-4">
            A neuroplasticidade é a capacidade do cérebro de se reorganizar e formar novas 
            conexões neurais. É a base científica de como melhorar o cérebro:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Plasticidade estrutural:</strong> Cérebro pode criar novos neurônios (neurogênese)</li>
            <li><strong>Plasticidade funcional:</strong> Áreas cerebrais podem assumir novas funções</li>
            <li><strong>Mielinização:</strong> Prática repetida torna conexões mais eficientes</li>
            <li><strong>Podagem sináptica:</strong> Cérebro elimina conexões não usadas e fortalece as usadas</li>
          </ul>
          <p className="mb-4">
            <strong>Boa notícia:</strong> Neuroplasticidade continua ao longo da vida, não apenas na infância.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">1. Exercício Físico: O Melhor Amigo do Cérebro</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Exercício Aeróbico</h3>
          <p className="mb-4">
            Exercício aeróbico é uma das formas mais eficazes de melhorar o cérebro:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Aumenta BDNF:</strong> Fator neurotrófico derivado do cérebro, promove neurogênese</li>
            <li><strong>Melhora fluxo sanguíneo:</strong> 15-20% mais sangue no cérebro durante exercício</li>
            <li><strong>Reduz inflamação:</strong> Exercício crônico reduz marcadores inflamatórios</li>
            <li><strong>Aumenta volume hipocampal:</strong> Área crítica para memória</li>
            <li><strong>Recomendação:</strong> 150 minutos/semana de exercício moderado ou 75 minutos intenso</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Treino de Força</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Melhora função executiva:</strong> Planejamento, controle inibitório, flexibilidade cognitiva</li>
            <li><strong>Aumenta IGF-1:</strong> Fator de crescimento importante para neurônios</li>
            <li><strong>Recomendação:</strong> 2-3x/semana, exercícios compostos (agachamento, levantamento)</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Exercícios de Coordenação</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Dança:</strong> Combina exercício, coordenação e aprendizado de padrões</li>
            <li><strong>Esportes com raquete:</strong> Tênis, badminton exigem coordenação olho-mão</li>
            <li><strong>Artes marciais:</strong> Desenvolvem coordenação, disciplina e foco</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">2. Nutrição para o Cérebro</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Ácidos Graxos Ômega-3</h3>
          <p className="mb-4">
            Essenciais para saúde cerebral:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>DHA:</strong> Componente estrutural de neurônios (60% do cérebro é gordura)</li>
            <li><strong>Fontes:</strong> Peixes gordurosos (salmão, sardinha), nozes, sementes de linhaça</li>
            <li><strong>Dose:</strong> 1-2g de EPA+DHA diariamente</li>
            <li><strong>Efeito:</strong> Melhora memória, reduz declínio cognitivo</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Antioxidantes</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Flavonoides:</strong> Frutas vermelhas, chá verde, chocolate amargo (70%+ cacau)</li>
            <li><strong>Vitamina E:</strong> Nozes, sementes, vegetais verdes</li>
            <li><strong>Vitamina C:</strong> Frutas cítricas, pimentões</li>
            <li><strong>Efeito:</strong> Protegem neurônios de dano oxidativo</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Curcumina (Açafrão)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Anti-inflamatório:</strong> Reduz inflamação cerebral</li>
            <li><strong>Pode aumentar BDNF:</strong> Promove neurogênese</li>
            <li><strong>Dose:</strong> 500-1000mg/dia com pimenta preta (aumenta absorção)</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Evitar: Açúcar e Alimentos Processados</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Açúcar:</strong> Picos de glicose prejudicam função cognitiva</li>
            <li><strong>Gorduras trans:</strong> Danificam membranas neuronais</li>
            <li><strong>Alimentos ultraprocessados:</strong> Baixos em nutrientes, altos em inflamação</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">3. Sono: O Reset Cerebral</h2>
          <p className="mb-4">
            Sono é quando o cérebro se repara e consolida memórias:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Fases do Sono e Função Cerebral</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Sono profundo (NREM):</strong> Consolidação de memórias declarativas</li>
            <li><strong>Sono REM:</strong> Consolidação de memórias procedurais e emocionais</li>
            <li><strong>Sistema glinfático:</strong> Remove toxinas (incluindo beta-amiloide) durante sono</li>
            <li><strong>Recomendação:</strong> 7-9 horas de sono por noite</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Dicas para Melhor Sono</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Ritmo circadiano:</strong> Dormir e acordar no mesmo horário</li>
            <li><strong>Escuridão total:</strong> Cortinas blackout, sem luzes</li>
            <li><strong>Temperatura:</strong> Quarto entre 18-20°C</li>
            <li><strong>Sem telas:</strong> Evitar telas 1-2h antes de dormir</li>
            <li><strong>Rotina relaxante:</strong> Leitura, meditação, banho quente</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">4. Treino Cognitivo Específico</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Memória de Trabalho</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>N-back training:</strong> Exercícios que melhoram memória de trabalho</li>
            <li><strong>Dual n-back:</strong> Versão mais desafiadora</li>
            <li><strong>Efeito:</strong> Transferência para outras habilidades cognitivas</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Velocidade de Processamento</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Jogos de velocidade:</strong> Reação rápida, tomada de decisão</li>
            <li><strong>Leitura rápida:</strong> Compreensão, não apenas velocidade</li>
            <li><strong>Exercícios de atenção dividida:</strong> Fazer múltiplas tarefas simultaneamente</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Funções Executivas</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Xadrez:</strong> Planejamento, antecipação, flexibilidade cognitiva</li>
            <li><strong>Go:</strong> Estratégia complexa, padrões espaciais</li>
            <li><strong>Puzzles complexos:</strong> Resolução de problemas multistep</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">5. Aprendizado Contínuo</h2>
          <p className="mb-4">
            Aprender coisas novas é um dos melhores exercícios para o cérebro:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Idiomas:</strong> Cria novas redes neurais, melhora função executiva</li>
            <li><strong>Instrumentos musicais:</strong> Coordenação, memória, processamento temporal</li>
            <li><strong>Programação:</strong> Raciocínio lógico, resolução de problemas</li>
            <li><strong>Habilidades manuais:</strong> Artesanato, culinária, jardinagem</li>
            <li><strong>Leitura profunda:</strong> Literatura complexa, não-ficção científica</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">6. Meditação e Mindfulness</h2>
          <p className="mb-4">
            Meditação tem efeitos mensuráveis na estrutura cerebral:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Aumenta espessura cortical:</strong> Especialmente córtex pré-frontal e insula</li>
            <li><strong>Melhora atenção:</strong> Reduz distração, aumenta foco sustentado</li>
            <li><strong>Reduz amígdala:</strong> Menos reatividade ao estresse</li>
            <li><strong>Aumenta matéria cinzenta:</strong> Em áreas relacionadas a memória e aprendizado</li>
            <li><strong>Recomendação:</strong> 10-20 minutos diários</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">7. Redução de Estresse</h2>
          <p className="mb-4">
            Estresse crônico é tóxico para o cérebro:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Cortisol:</strong> Em excesso, danifica neurônios e reduz neurogênese</li>
            <li><strong>Encolhe hipocampo:</strong> Área crítica para memória</li>
            <li><strong>Estratégias:</strong> Meditação, exercício, terapia, hobbies, socialização</li>
            <li><strong>Gerenciamento de tempo:</strong> Reduz estresse relacionado a prazos</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">8. Socialização e Conexões</h2>
          <p className="mb-4">
            Interações sociais complexas desafiam o cérebro:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Conversas profundas:</strong> Debater ideias, discutir conceitos</li>
            <li><strong>Ensinar outros:</strong> Explicar desenvolve compreensão profunda</li>
            <li><strong>Networking intelectual:</strong> Conectar-se com pessoas inteligentes</li>
            <li><strong>Atividades em grupo:</strong> Clubes de leitura, grupos de estudo</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">9. Evitar Toxinas</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Álcool</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Moderação:</strong> 1-2 doses/dia pode ser neutro ou benéfico</li>
            <li><strong>Excesso:</strong> Danifica neurônios, reduz neurogênese</li>
            <li><strong>Recomendação:</strong> Evitar consumo excessivo</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Tabaco</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Reduz fluxo sanguíneo:</strong> Menos oxigênio para o cérebro</li>
            <li><strong>Aumenta risco:</strong> Demência, derrame</li>
            <li><strong>Recomendação:</strong> Evitar completamente</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Poluição</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Ar limpo:</strong> Usar purificadores, plantas em casa</li>
            <li><strong>Evitar tráfego:</strong> Poluição do ar prejudica cognição</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">10. Exposição à Natureza</h2>
          <p className="mb-4">
            Tempo na natureza tem efeitos mensuráveis no cérebro:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Reduz cortisol:</strong> Menos estresse</li>
            <li><strong>Melhora atenção:</strong> Restaura recursos de atenção</li>
            <li><strong>Aumenta criatividade:</strong> Estudos mostram +50% em testes de criatividade</li>
            <li><strong>Recomendação:</strong> 20-30 minutos diários em espaços verdes</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">11. Hidratação Adequada</h2>
          <p className="mb-4">
            O cérebro é 75% água. Desidratação prejudica função cognitiva:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Desidratação leve (2%):</strong> Reduz função cognitiva</li>
            <li><strong>Recomendação:</strong> 2-3 litros de água por dia</li>
            <li><strong>Sinais:</strong> Urina clara = hidratação adequada</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">12. Jejum Intermitente (Opcional)</h2>
          <p className="mb-4">
            Alguns estudos sugerem benefícios:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Aumenta BDNF:</strong> Fator de crescimento neural</li>
            <li><strong>Autofagia:</strong> Limpeza celular, remove células danificadas</li>
            <li><strong>Recomendação:</strong> 16:8 (16h jejum, 8h janela alimentar)</li>
            <li><strong>Nota:</strong> Consulte médico antes, não adequado para todos</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Plano de Ação: Rotina Diária</h2>
          <div className="bg-primary/10 p-6 rounded-lg my-6 border-l-4 border-primary">
            <h3 className="text-xl font-bold mb-4">Checklist Diário</h3>
            <ul className="space-y-2">
              <li>☐ 30 min exercício físico (aeróbico ou força)</li>
              <li>☐ 20 min aprendizado (leitura, curso, nova habilidade)</li>
              <li>☐ 15 min meditação/mindfulness</li>
              <li>☐ 10 min treino cognitivo (n-back, puzzles)</li>
              <li>☐ 7-9 horas de sono de qualidade</li>
              <li>☐ Alimentação rica em ômega-3, antioxidantes</li>
              <li>☐ 2-3 litros de água</li>
              <li>☐ Interação social significativa</li>
              <li>☐ Tempo na natureza (se possível)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Sinais de Melhoria</h2>
          <p className="mb-4">
            Com consistência, você notará:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Melhor memória:</strong> Lembrar informações mais facilmente</li>
            <li><strong>Maior clareza mental:</strong> Pensamentos mais claros e organizados</li>
            <li><strong>Melhor foco:</strong> Menos distração, atenção sustentada</li>
            <li><strong>Mais energia mental:</strong> Menos fadiga cognitiva</li>
            <li><strong>Resolução de problemas:</strong> Encontrar soluções mais rapidamente</li>
            <li><strong>Melhor humor:</strong> Redução de ansiedade e estresse</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            Melhorar o cérebro é um processo contínuo que combina múltiplas estratégias: exercício, 
            nutrição, sono, treino cognitivo, aprendizado, meditação e redução de estresse.
          </p>
          <p className="mb-4">
            O mais importante é consistência. Pequenas ações diárias se acumulam em melhorias 
            significativas ao longo do tempo. Comece com uma ou duas estratégias e vá adicionando 
            mais conforme desenvolve os hábitos.
          </p>
          <p className="mb-4">
            Seu cérebro é incrivelmente plástico e adaptável. Com os métodos certos e consistência, 
            você pode otimizar significativamente sua função cognitiva e saúde cerebral.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Meça Seu Progresso</h3>
          <p className="text-muted-foreground mb-6">
            Descubra seu QI atual e acompanhe sua melhoria ao longo do tempo. Faça nosso teste 
            científico completo e estabeleça sua linha de base.
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
            {getRelatedArticles("como-melhorar-cerebro", 3).map((article) => (
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

export default ComoMelhorarCerebro;

