import { Brain, ArrowRight, BookOpen, Zap, BarChart3, CheckCircle2, AlertCircle, Lightbulb, Check, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const ComoAprenderMaisRapidoNeurociencia = () => {
  const navigate = useNavigate();

  const articleUrl = "https://bomqi.com.br/blog/como-aprender-mais-rapido-neurociencia";
  const articleTitle = "Como Aprender Mais Rápido Usando Neurociência: Técnicas Científicas";
  const articleDescription = "Como aprender mais rápido usando neurociência? Descubra técnicas baseadas em neurociência para acelerar aprendizado. Guia completo. Teste seu QI rapidamente!";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "aprender mais rápido, neurociência aprendizado, técnicas aprendizado rápido, aprender rápido neurociência, métodos aprendizado eficaz, acelerar aprendizado, neurociência educação, aprendizado eficiente, técnicas estudo rápido, otimizar aprendizado",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "como-aprender-mais-rapido-neurociencia",
      publishDate: "2024-01-01",
    })
  );

  const relatedArticles = getRelatedArticles("como-aprender-mais-rapido-neurociencia");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Como Aprender Mais Rápido Usando Neurociência</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Como Aprender Mais Rápido Usando Neurociência: Técnicas Científicas
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Lightbulb className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            "Como aprender mais rápido usando neurociência?" é uma pergunta importante para quem busca otimizar
            o aprendizado. <strong>Aprender mais rápido usando neurociência é possível através de técnicas baseadas
              em como o cérebro realmente funciona</strong>, incluindo espaçamento, recuperação ativa, intercalação,
            sono e neuroplasticidade. Neste guia científico, apresentamos técnicas comprovadas pela neurociência
            sono e neuroplasticidade. Neste guia científico, apresentamos técnicas comprovadas pela neurociência
            para acelerar o aprendizado.
          </p>

          <div className="bg-muted/50 p-6 rounded-xl border border-border mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Quiz Rápido: Qual seu estilo de aprendizado?
            </h3>
            <LearningQuiz />
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como o Cérebro Aprende: Fundamentos da Neurociência</h2>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">
                  Processo de Aprendizado
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>Neuroplasticidade:</strong> Cérebro cria novas conexões neurais
                </p>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>Consolidação:</strong> Memórias se fortalecem durante o sono</p>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>Recuperação ativa:</strong> Relembrar fortalece mais que reler
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">1. Espaçamento (Spaced Repetition)</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">O que é Espaçamento</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Definição:</strong> Revisar material em intervalos crescentes</li>
            <li><strong>Mecanismo:</strong> Força cérebro a recuperar informações</li>
            <li><strong>Efeito:</strong> Fortalece conexões neurais duradouras</li>
            <li><strong>Resultado:</strong> Aumenta retenção em até 200%</li>
            <li><strong>Curva de esquecimento:</strong> Revisar antes de esquecer</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Como Aplicar</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Intervalos:</strong> 1 dia, 3 dias, 1 semana, 2 semanas, 1 mês</li>
            <li><strong>Apps:</strong> Anki, Quizlet, SuperMemo</li>
            <li><strong>Manual:</strong> Criar sistema de revisão com calendário</li>
            <li><strong>Frequência:</strong> Revisar mais no início, menos depois</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">2. Recuperação Ativa (Active Recall)</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">O que é Recuperação Ativa</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Definição:</strong> Tentar lembrar informações sem olhar material</li>
            <li><strong>Mecanismo:</strong> Ativa caminhos neurais de memória</li>
            <li><strong>Efeito:</strong> Fortalece memória mais que reler</li>
            <li><strong>Resultado:</strong> Aumenta retenção em até 50%</li>
            <li><strong>Neurociência:</strong> Recuperação cria conexões mais fortes</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Técnicas de Recuperação Ativa</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Flashcards:</strong> Perguntas e respostas</li>
            <li><strong>Testes práticos:</strong> Simular exames</li>
            <li><strong>Explicação:</strong> Explicar conceitos sem consultar</li>
            <li><strong>Mapas mentais:</strong> Criar de memória</li>
            <li><strong>Perguntas:</strong> Fazer perguntas sobre o material</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">3. Intercalação (Interleaving)</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">O que é Intercalação</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Definição:</strong> Misturar diferentes tópicos durante estudo</li>
            <li><strong>Mecanismo:</strong> Força cérebro a distinguir conceitos</li>
            <li><strong>Efeito:</strong> Melhora transferência de conhecimento</li>
            <li><strong>Resultado:</strong> Aumenta compreensão e aplicação</li>
            <li><strong>Neurociência:</strong> Cria conexões mais flexíveis</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Como Aplicar</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Misturar tópicos:</strong> Não estudar um tópico por muito tempo</li>
            <li><strong>Variar exercícios:</strong> Diferentes tipos de problemas</li>
            <li><strong>Alternar matérias:</strong> Mudar entre disciplinas</li>
            <li><strong>Bloqueios curtos:</strong> 20-30 minutos por tópico</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">4. Sono e Consolidação de Memória</h2>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">
              Importância do Sono para Aprendizado
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• <strong>Consolidação:</strong> Sono consolida memórias do dia</li>
              <li>• <strong>Ondas lentas:</strong> Sono profundo fortalece memórias</li>
              <li>• <strong>REM:</strong> Sono REM integra novas informações</li>
              <li>• <strong>Limpeza:</strong> Sistema glinfático remove toxinas</li>
              <li>• <strong>Duração:</strong> 7-9 horas para consolidação adequada</li>
              <li>• <strong>Timing:</strong> Dormir logo após estudar ajuda</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Estratégias de Sono para Aprendizado</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Estudar antes de dormir:</strong> Última coisa do dia</li>
            <li><strong>Sonecas:</strong> Sonecas de 20-30 minutos após estudar</li>
            <li><strong>Rotina:</strong> Horário regular de sono</li>
            <li><strong>Qualidade:</strong> Ambiente escuro e silencioso</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">5. Atenção e Foco</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Neurociência da Atenção</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Foco único:</strong> Cérebro processa melhor uma coisa por vez</li>
            <li><strong>Multitarefa:</strong> Reduz eficiência em até 40%</li>
            <li><strong>Duração:</strong> Foco profundo: 25-90 minutos</li>
            <li><strong>Recuperação:</strong> Pausas são essenciais</li>
            <li><strong>Neurotransmissores:</strong> Dopamina e noradrenalina</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Técnicas para Melhorar Foco</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Pomodoro:</strong> 25 minutos de foco, 5 de pausa</li>
            <li><strong>Eliminar distrações:</strong> Telefone, notificações</li>
            <li><strong>Ambiente:</strong> Espaço dedicado ao estudo</li>
            <li><strong>Meditação:</strong> Treinar atenção plena</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">6. Elaboração e Conexões</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Elaboração Profunda</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Definição:</strong> Conectar novas informações com conhecimentos existentes</li>
            <li><strong>Mecanismo:</strong> Cria mais caminhos neurais</li>
            <li><strong>Efeito:</strong> Facilita recuperação futura</li>
            <li><strong>Técnicas:</strong> Analogias, exemplos, perguntas "por quê?"</li>
            <li><strong>Resultado:</strong> Aumenta compreensão profunda</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Como Aplicar</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Perguntas:</strong> "Como isso se relaciona com...?"</li>
            <li><strong>Analogias:</strong> Comparar com coisas conhecidas</li>
            <li><strong>Exemplos:</strong> Criar exemplos próprios</li>
            <li><strong>Visualização:</strong> Imaginar conceitos</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">7. Exercício Físico e Aprendizado</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Neurociência do Exercício</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>BDNF:</strong> Exercício aumenta fator neurotrófico</li>
            <li><strong>Neurogênese:</strong> Cria novos neurônios</li>
            <li><strong>Fluxo sanguíneo:</strong> Aumenta oxigênio no cérebro</li>
            <li><strong>Timing:</strong> Exercício antes ou após estudar</li>
            <li><strong>Resultado:</strong> Melhora memória e aprendizado</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Estratégias</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Antes de estudar:</strong> 20-30 minutos de exercício</li>
            <li><strong>Durante pausas:</strong> Caminhada ou movimento</li>
            <li><strong>Após estudar:</strong> Exercício consolida aprendizado</li>
            <li><strong>Intensidade:</strong> Moderada é ideal</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">8. Emoção e Aprendizado</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Conexão Emocional</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Amígdala:</strong> Emoções fortalecem memórias</li>
            <li><strong>Dopamina:</strong> Prazer facilita aprendizado</li>
            <li><strong>Efeito:</strong> Informações emocionais são mais lembradas</li>
            <li><strong>Aplicação:</strong> Tornar aprendizado interessante</li>
            <li><strong>Resultado:</strong> Aumenta engajamento e retenção</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Como Aplicar</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Interesse:</strong> Encontrar aspectos interessantes</li>
            <li><strong>Relevância:</strong> Conectar com objetivos pessoais</li>
            <li><strong>Gamificação:</strong> Tornar aprendizado divertido</li>
            <li><strong>Histórias:</strong> Usar narrativas para memorizar</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">9. Variabilidade e Contexto</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Aprendizado Variável</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Definição:</strong> Variar contexto e condições de estudo</li>
            <li><strong>Mecanismo:</strong> Cria memórias mais flexíveis</li>
            <li><strong>Efeito:</strong> Melhora transferência de conhecimento</li>
            <li><strong>Resultado:</strong> Aplicação em diferentes situações</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Como Aplicar</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Locais diferentes:</strong> Estudar em vários lugares</li>
            <li><strong>Horários variados:</strong> Diferentes momentos do dia</li>
            <li><strong>Formatos:</strong> Texto, áudio, visual, prática</li>
            <li><strong>Contextos:</strong> Aplicar em situações reais</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">10. Metacognição e Autoavaliação</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Pensar sobre o Pensamento</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Definição:</strong> Refletir sobre próprio aprendizado</li>
            <li><strong>Mecanismo:</strong> Ativa córtex pré-frontal</li>
            <li><strong>Efeito:</strong> Melhora estratégias de aprendizado</li>
            <li><strong>Resultado:</strong> Aprendizado mais eficiente</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Técnicas</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Autoavaliação:</strong> "O que aprendi hoje?"</li>
            <li><strong>Reflexão:</strong> "O que funcionou bem?"</li>
            <li><strong>Ajustes:</strong> Modificar estratégias conforme necessário</li>
            <li><strong>Diário:</strong> Registrar progresso e insights</li>
          </ul>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">
                  Importante
                </h3>
                <p className="text-amber-800 dark:text-amber-200">
                  <strong>Aprender mais rápido usando neurociência requer prática e paciência</strong>.
                  Combine múltiplas técnicas para melhores resultados. O importante é entender como seu cérebro
                  funciona e adaptar estratégias ao seu estilo de aprendizado individual.
                </p>
              </div>
            </div>
          </div>



          <div className="bg-indigo-50 dark:bg-indigo-950/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800 mb-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Template de Cronograma de Estudos (Neuro-Otimizado)
              </h3>
            </div>
            <div className="bg-white dark:bg-black/40 p-4 rounded border border-indigo-100 font-mono text-xs md:text-sm overflow-x-auto text-indigo-900 dark:text-indigo-200">
              <pre>{`07:00 - Acordar + Hidratação (Prepara o cérebro)
07:30 - Exercício Aeróbico Leve (20 min) -> Libera BDNF
08:00 - Bloco de Estudo 1 (45 min) -> Tópico Difícil (Cortisol alto)
08:45 - Pausa (10 min) -> Sem celular
08:55 - Bloco de Estudo 2 (45 min) -> Tópico Relacionado (Intercalação)
...
13:00 - Sesta (20 min) ou Meditação (Consolidação)
...
20:00 - Revisão Ativa (30 min) -> Flashcards do dia
22:00 - Sono (Sem telas)`}</pre>
            </div>
            <p className="text-sm text-indigo-800 dark:text-indigo-300 mt-4">
              Este cronograma aproveita os ritmos circadianos naturais para maximizar a retenção.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Plano de Ação: Aplicando Neurociência ao Aprendizado</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Semana 1-2: Fundamentos</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>• Implementar espaçamento (revisar em intervalos)</li>
            <li>• Usar recuperação ativa (flashcards, testes)</li>
            <li>• Dormir 7-9 horas por noite</li>
            <li>• Eliminar distrações durante estudo</li>
            <li>• Fazer exercício antes ou após estudar</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Semana 3-4: Avançado</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>• Adicionar intercalação (misturar tópicos)</li>
            <li>• Praticar elaboração (fazer conexões)</li>
            <li>• Variar contexto de estudo</li>
            <li>• Refletir sobre aprendizado (metacognição)</li>
            <li>• Ajustar estratégias conforme necessário</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>

          <p className="mb-4">
            <strong>Aprender mais rápido usando neurociência é possível através de técnicas baseadas em como o
              cérebro realmente funciona</strong>, incluindo espaçamento, recuperação ativa, intercalação, sono adequado,
            foco, elaboração, exercício físico, conexão emocional, variabilidade e metacognição.
          </p>

          <p className="mb-4">
            <strong>Combinar múltiplas técnicas produz os melhores resultados</strong>. O importante é entender os
            princípios da neurociência e adaptar estratégias ao seu estilo de aprendizado individual.
          </p>

          <p className="mb-4">
            Quer descobrir seu QI e melhorar suas capacidades de aprendizado? Faça nosso teste científico validado
            e receba uma análise completa de suas capacidades cognitivas.
          </p>
        </div >

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">
            Faça nosso teste científico validado e descubra seu QI.
            Receba uma análise completa de suas capacidades cognitivas.
          </p>
          <Link to="/teste">
            <Button size="lg" className="gap-2">
              Fazer o Teste Agora
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {
          relatedArticles.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold">Continue Lendo</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((article) => (
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
          )
        }

        {/* Social Proof Carousel */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">O que as pessoas estão dizendo</h2>
          </div>
          <SocialProofCarousel />
        </section>
      </article >

      <Footer />
    </div >
  );
};

const LearningQuiz = () => {
  const [answered, setAnswered] = useState(false);
  const [style, setStyle] = useState("");

  const handleAnswer = (answer: string) => {
    setStyle(answer);
    setAnswered(true);
  };

  if (answered) {
    return (
      <div className="animate-in fade-in zoom-in duration-300">
        <div className="bg-background p-4 rounded-lg border border-primary/20 text-center">
          <BookOpen className="w-12 h-12 text-primary mx-auto mb-2" />
          <h4 className="font-bold text-lg mb-2">Dica Personalizada para {style}</h4>
          <p className="text-sm text-muted-foreground mb-4">
            {style === "Visual" && "Use mapas mentais coloridos e diagramas. Seu cérebro codifica melhor informações espaciais."}
            {style === "Auditivo" && "Grave suas anotações e ouça-as. Tente explicar a matéria em voz alta para si mesmo."}
            {style === "Prático" && "Faça exercícios práticos e simulações. Você aprende fazendo, ativando o córtex motor."}
            {style === "Leitura/Escrita" && "Reescreva seus resumos com suas palavras. Fazer sínteses ativa a compreensão profunda."}
          </p>
          <Button onClick={() => setAnswered(false)} variant="outline" size="sm">Refazer Quiz</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <Button variant="outline" className="justify-start h-auto py-3 px-4 text-left" onClick={() => handleAnswer("Visual")}>
        <span className="font-bold mr-2">A.</span> Prefiro ver gráficos e imagens
      </Button>
      <Button variant="outline" className="justify-start h-auto py-3 px-4 text-left" onClick={() => handleAnswer("Auditivo")}>
        <span className="font-bold mr-2">B.</span> Prefiro ouvir explicações
      </Button>
      <Button variant="outline" className="justify-start h-auto py-3 px-4 text-left" onClick={() => handleAnswer("Prático")}>
        <span className="font-bold mr-2">C.</span> Prefiro colocar a mão na massa
      </Button>
      <Button variant="outline" className="justify-start h-auto py-3 px-4 text-left" onClick={() => handleAnswer("Leitura/Escrita")}>
        <span className="font-bold mr-2">D.</span> Prefiro ler livros e artigos
      </Button>
    </div>
  );
};

export default ComoAprenderMaisRapidoNeurociencia;


