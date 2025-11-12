import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Share2, Trophy, TrendingUp, Award, Zap } from "lucide-react";
import { calculateIQ, getCelebrityComparison, getCognitiveStrength } from "@/types/quiz";
import { useToast } from "@/hooks/use-toast";

const CompleteResult = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [score, setScore] = useState(0);

  useEffect(() => {
    const savedScore = localStorage.getItem("quizScore");
    const isPaid = localStorage.getItem("isPaid");
    
    if (!savedScore || !isPaid) {
      navigate("/");
      return;
    }
    setScore(parseInt(savedScore));
  }, [navigate]);

  const result = calculateIQ(score, 30);
  const celebrity = getCelebrityComparison(result.iqScore);
  const strength = getCognitiveStrength(result.iqScore);

  const shareOnWhatsApp = () => {
    const message = encodeURIComponent(
      `🧠 Acabei de descobrir meu QI: ${result.iqScore}!\n\nEstou no TOP ${100 - result.percentile}% das pessoas mais inteligentes! 🚀\n\nAcha que consegue me superar? Faça o teste em 3 minutos: https://bomqi.com.br`
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
    
    toast({
      title: "Desafiando seus amigos! 🔥",
      description: "Vamos ver quem tem o QI mais alto...",
    });
  };

  const getIQDescription = (iq: number): string => {
    if (iq >= 130) return "Excepcional";
    if (iq >= 120) return "Superior";
    if (iq >= 110) return "Acima da Média";
    if (iq >= 90) return "Média";
    return "Abaixo da Média";
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div 
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate("/")}
          >
            <Brain className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold">BomQI</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
            <Trophy className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Seu Resultado Completo
          </h1>
          <p className="text-xl text-muted-foreground">
            Análise detalhada do seu desempenho
          </p>
        </div>

        <Card className="p-8 mb-6 shadow-elegant bg-gradient-primary text-primary-foreground">
          <div className="text-center">
            <p className="text-sm opacity-90 mb-2">Seu QI é</p>
            <div className="text-7xl font-bold mb-2">
              {result.iqScore}
            </div>
            <p className="text-xl opacity-90">{getIQDescription(result.iqScore)}</p>
          </div>
        </Card>

        <div className="grid gap-4 mb-6">
          <Card className="p-6 shadow-elegant">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Seu Percentil</h3>
                <p className="text-2xl font-bold text-primary mb-2">
                  Top {100 - result.percentile}%
                </p>
                <p className="text-muted-foreground">
                  Você está acima de {result.percentile}% da população
                </p>
              </div>
            </div>
          </Card>

          <div className="mb-6">
            <h3 className="font-bold text-2xl mb-6 text-center">🌟 Comparação com Celebridades</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: "Einstein", emoji: "🧪", iq: 160, desc: "Físico Genial", highlighted: result.iqScore >= 135 },
                { name: "Elon Musk", emoji: "🚀", iq: 155, desc: "Visionário Tech", highlighted: result.iqScore >= 130 && result.iqScore < 135 },
                { name: "Bill Gates", emoji: "💻", iq: 152, desc: "Criador Microsoft", highlighted: result.iqScore >= 125 && result.iqScore < 130 },
                { name: "Emma Watson", emoji: "📚", iq: 138, desc: "Atriz e Ativista", highlighted: result.iqScore >= 120 && result.iqScore < 125 },
                { name: "Will Smith", emoji: "🎬", iq: 115, desc: "Ator Premiado", highlighted: result.iqScore >= 115 && result.iqScore < 120 },
                { name: "Tom Cruise", emoji: "✈️", iq: 110, desc: "Ação e Talento", highlighted: result.iqScore >= 110 && result.iqScore < 115 },
                { name: "Brad Pitt", emoji: "🎭", iq: 108, desc: "Ícone Hollywood", highlighted: result.iqScore >= 105 && result.iqScore < 110 },
                { name: "Shakira", emoji: "🎵", iq: 140, desc: "Cantora Genial", highlighted: result.iqScore >= 100 && result.iqScore < 105 },
                { name: "Steve Jobs", emoji: "🍎", iq: 160, desc: "Criador Apple", highlighted: result.iqScore >= 90 && result.iqScore < 100 },
              ].map((celeb, index) => (
                <Card
                  key={index}
                  className={`p-4 hover-scale transition-all duration-300 animate-fade-in ${
                    celeb.highlighted
                      ? "bg-gradient-primary text-primary-foreground border-2 border-primary shadow-elegant scale-105"
                      : "bg-background/60 backdrop-blur-sm border border-border/50"
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="text-center space-y-2">
                    <div className={`text-4xl mb-2 ${celeb.highlighted ? "animate-scale-in" : ""}`}>
                      {celeb.emoji}
                    </div>
                    <h4 className={`font-bold text-sm ${celeb.highlighted ? "text-primary-foreground" : ""}`}>
                      {celeb.name}
                    </h4>
                    <p className={`text-xs ${celeb.highlighted ? "opacity-90" : "text-muted-foreground"}`}>
                      {celeb.desc}
                    </p>
                    <div className={`text-lg font-bold font-mono ${celeb.highlighted ? "text-primary-foreground" : "text-primary"}`}>
                      QI {celeb.iq}
                    </div>
                    {celeb.highlighted && (
                      <div className="pt-2 border-t border-primary-foreground/20">
                        <Award className="w-5 h-5 mx-auto mb-1" />
                        <p className="text-xs font-semibold">Seu nível!</p>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
            <Card className="mt-6 p-4 bg-primary/10 border-2 border-primary/20">
              <p className="text-center">
                <span className="text-2xl">🎯</span> <span className="font-bold">Seu QI de {result.iqScore}</span> está próximo de <span className="font-bold text-primary">{celebrity}</span>!
              </p>
            </Card>
          </div>

          <Card className="p-6 shadow-elegant border-2 border-primary/20 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Brain className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-2xl mb-2">✨ Sua Força Cognitiva Dominante</h3>
                <p className="text-lg text-primary font-semibold mb-3">{strength}</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                <p className="text-sm leading-relaxed">
                  {result.iqScore >= 130 && (
                    <>
                      <span className="font-bold text-primary">Raciocínio excepcional!</span> Você possui uma capacidade extraordinária de processar informações complexas e encontrar soluções criativas. Pessoas com seu perfil cognitivo frequentemente se destacam em áreas que exigem pensamento abstrato, inovação e análise profunda.
                    </>
                  )}
                  {result.iqScore >= 120 && result.iqScore < 130 && (
                    <>
                      <span className="font-bold text-primary">Inteligência superior!</span> Você demonstra excelente capacidade analítica e raciocínio lógico avançado. Seu perfil cognitivo indica grande potencial para resolver problemas complexos e absorver novos conhecimentos rapidamente.
                    </>
                  )}
                  {result.iqScore >= 110 && result.iqScore < 120 && (
                    <>
                      <span className="font-bold text-primary">Acima da média!</span> Você possui habilidades cognitivas notáveis, com destaque para pensamento crítico e capacidade de aprendizado. Seu perfil mostra excelente potencial para desenvolvimento em diversas áreas do conhecimento.
                    </>
                  )}
                  {result.iqScore >= 90 && result.iqScore < 110 && (
                    <>
                      <span className="font-bold text-primary">Perfil equilibrado!</span> Você demonstra boas habilidades cognitivas com equilíbrio entre diferentes tipos de inteligência. Seu perfil indica versatilidade e capacidade de adaptação a diversos desafios.
                    </>
                  )}
                  {result.iqScore < 90 && (
                    <>
                      <span className="font-bold text-primary">Potencial único!</span> Você possui características cognitivas que podem ser desenvolvidas com as estratégias corretas. Seu perfil mostra áreas específicas de força que podem ser potencializadas.
                    </>
                  )}
                </p>
                
                {/* Análise Detalhada por Domínio Cognitivo */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <h4 className="font-bold text-center">🧩 Análise dos Domínios Cognitivos</h4>
                  
                  <div className="space-y-2">
                    <div className="bg-background rounded-lg p-3 border border-border/50">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm">💭 Raciocínio Lógico</span>
                        <span className="text-xs text-primary font-bold">
                          {result.iqScore >= 120 ? "Excepcional" : result.iqScore >= 110 ? "Forte" : result.iqScore >= 90 ? "Bom" : "Em Desenvolvimento"}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {result.iqScore >= 120 ? "Você resolve problemas complexos com facilidade notável e identifica padrões sofisticados rapidamente." : 
                         result.iqScore >= 110 ? "Boa capacidade de análise e resolução de problemas estruturados." :
                         result.iqScore >= 90 ? "Consegue lidar bem com desafios lógicos do dia a dia." :
                         "Com prática consistente, esta habilidade pode ser significativamente melhorada."}
                      </p>
                    </div>

                    <div className="bg-background rounded-lg p-3 border border-border/50">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm">🎯 Memória e Concentração</span>
                        <span className="text-xs text-primary font-bold">
                          {result.iqScore >= 120 ? "Excelente" : result.iqScore >= 110 ? "Muito Boa" : result.iqScore >= 90 ? "Adequada" : "Treinável"}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {result.iqScore >= 120 ? "Capacidade superior de reter e processar múltiplas informações simultaneamente." :
                         result.iqScore >= 110 ? "Boa retenção de informações e foco em tarefas complexas." :
                         result.iqScore >= 90 ? "Concentração adequada para a maioria das atividades cotidianas." :
                         "Exercícios específicos podem fortalecer significativamente esta área."}
                      </p>
                    </div>

                    <div className="bg-background rounded-lg p-3 border border-border/50">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm">⚡ Velocidade de Processamento</span>
                        <span className="text-xs text-primary font-bold">
                          {result.iqScore >= 120 ? "Rápida" : result.iqScore >= 110 ? "Boa" : result.iqScore >= 90 ? "Moderada" : "Desenvolvendo"}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {result.iqScore >= 120 ? "Processa informações com velocidade notável, ideal para ambientes dinâmicos." :
                         result.iqScore >= 110 ? "Bom tempo de resposta para a maioria das situações cognitivas." :
                         result.iqScore >= 90 ? "Velocidade adequada, pode ser otimizada com treino." :
                         "Prática com exercícios cronometrados pode acelerar seu processamento."}
                      </p>
                    </div>

                    <div className="bg-background rounded-lg p-3 border border-border/50">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm">🎨 Pensamento Criativo</span>
                        <span className="text-xs text-primary font-bold">
                          {result.iqScore >= 120 ? "Inovador" : result.iqScore >= 110 ? "Criativo" : result.iqScore >= 90 ? "Funcional" : "Potencial"}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {result.iqScore >= 120 ? "Excelente capacidade de gerar soluções inovadoras e pensar fora da caixa." :
                         result.iqScore >= 110 ? "Boa capacidade de encontrar abordagens alternativas para problemas." :
                         result.iqScore >= 90 ? "Consegue pensar de forma criativa quando necessário." :
                         "Técnicas de brainstorming podem desbloquear seu potencial criativo."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{result.percentile}%</div>
                    <div className="text-xs text-muted-foreground">Acima desse percentil</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">TOP {100 - result.percentile}%</div>
                    <div className="text-xs text-muted-foreground">Das pessoas</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-elegant border-2 border-primary/20 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-xl">💡 Dicas Personalizadas para Você</h3>
              </div>
              
              <p className="text-sm text-muted-foreground italic">
                Baseado no seu perfil cognitivo, preparamos um plano de desenvolvimento personalizado:
              </p>
              
              <div className="space-y-4">
                {result.iqScore >= 120 && (
                  <>
                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-lg">🧩</span> Desafios Mentais Avançados
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Resolva puzzles complexos e jogos de estratégia como xadrez ou Go. Dedique 20 minutos diários a problemas de lógica avançada para manter sua mente afiada.
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1 ml-4 list-disc">
                        <li>Xadrez online (Chess.com, Lichess) - nível intermediário/avançado</li>
                        <li>Problemas de matemática da IMO (International Math Olympiad)</li>
                        <li>Quebra-cabeças de lógica tipo "Einstein's Riddle"</li>
                        <li>Programação competitiva (LeetCode, HackerRank)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-lg">📖</span> Leituras Recomendadas
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Expanda seus horizontes com literatura desafiadora que estimula o pensamento crítico e a criatividade.
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1 ml-4 list-disc">
                        <li>"Pensar Rápido e Devagar" - Daniel Kahneman (neurociência cognitiva)</li>
                        <li>"A Arte de Pensar Claramente" - Rolf Dobelli (vieses cognitivos)</li>
                        <li>"Gödel, Escher, Bach" - Douglas Hofstadter (lógica e criatividade)</li>
                        <li>"O Cisne Negro" - Nassim Taleb (pensamento probabilístico)</li>
                        <li>Artigos científicos em áreas de interesse (Nature, Science)</li>
                      </ul>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-lg">🎯</span> Desenvolvimento Contínuo
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Aprenda uma nova língua ou instrumento musical. Essas atividades criam novas conexões neurais e potencializam sua já excelente capacidade cognitiva.
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1 ml-4 list-disc">
                        <li>Aprenda um terceiro idioma (mandarim, alemão, russo)</li>
                        <li>Pratique um instrumento musical complexo (piano, violino)</li>
                        <li>Estude filosofia ou teoria política avançada</li>
                        <li>Participe de debates e círculos de discussão intelectual</li>
                      </ul>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-lg">🔬</span> Projetos Práticos
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Aplique seu intelecto em projetos reais que desafiem suas capacidades.
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1 ml-4 list-disc">
                        <li>Desenvolva um projeto de código aberto no GitHub</li>
                        <li>Escreva artigos técnicos ou acadêmicos</li>
                        <li>Mentore outras pessoas em áreas de expertise</li>
                        <li>Participe de hackatons ou competições intelectuais</li>
                      </ul>
                    </div>
                  </>
                )}
                
                {result.iqScore >= 90 && result.iqScore < 120 && (
                  <>
                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-lg">🎮</span> Jogos de Raciocínio
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Pratique jogos que estimulam diferentes áreas do cérebro de forma divertida e eficaz.
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1 ml-4 list-disc">
                        <li>Sudoku (comece no nível médio, progrida para difícil)</li>
                        <li>Palavras cruzadas temáticas</li>
                        <li>Jogo da memória e sequências (apps como Lumosity)</li>
                        <li>Xadrez básico e intermediário</li>
                        <li>Quebra-cabeças (500-1000 peças)</li>
                      </ul>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-lg">📚</span> Hábitos de Leitura
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Construa o hábito de leitura diária para expandir vocabulário e conhecimento geral.
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1 ml-4 list-disc">
                        <li>"O Poder do Hábito" - Charles Duhigg</li>
                        <li>"Mindset: A Nova Psicologia do Sucesso" - Carol Dweck</li>
                        <li>"Como Fazer Amigos e Influenciar Pessoas" - Dale Carnegie</li>
                        <li>Leia 20 páginas por dia de não-ficção</li>
                        <li>Diversifique: biografias, ciência, história</li>
                      </ul>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-lg">🧠</span> Exercícios Cognitivos
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Use ferramentas digitais e técnicas comprovadas para fortalecer suas habilidades.
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1 ml-4 list-disc">
                        <li>Apps: Lumosity, Peak, Elevate (15 min/dia)</li>
                        <li>Pratique cálculo mental no dia a dia</li>
                        <li>Técnica Pomodoro para melhorar foco (25 min trabalho + 5 min pausa)</li>
                        <li>Aprenda mnemônicos para memorização</li>
                        <li>Resolva problemas de lógica semanalmente</li>
                      </ul>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-lg">🎓</span> Aprendizado Estruturado
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Invista em cursos e habilidades que expandam seu repertório cognitivo.
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1 ml-4 list-disc">
                        <li>Curso online em área de interesse (Coursera, Udemy)</li>
                        <li>Aprenda um novo idioma (Duolingo, 10 min/dia)</li>
                        <li>Estude estatística básica e análise de dados</li>
                        <li>Pratique escrita criativa ou técnica</li>
                      </ul>
                    </div>
                  </>
                )}
                
                {result.iqScore < 90 && (
                  <>
                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-lg">🌱</span> Comece Devagar e Consistente
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Construa uma base sólida com exercícios simples e progressivos. Pequenos passos diários trazem grandes resultados.
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1 ml-4 list-disc">
                        <li>Comece com jogos simples de memória (5-10 min/dia)</li>
                        <li>Apps básicos: Peak (modo iniciante), Lumosity Light</li>
                        <li>Jogo da memória com cartas físicas</li>
                        <li>Sudoku nível fácil (2-3 por semana)</li>
                        <li>Palavras cruzadas simples</li>
                      </ul>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-lg">💪</span> Consistência é a Chave
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        A ciência mostra que prática regular e consistente pode melhorar significativamente suas capacidades cognitivas.
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1 ml-4 list-disc">
                        <li>Reserve 10 minutos TODOS os dias (sem exceções)</li>
                        <li>Use alarmes para criar o hábito</li>
                        <li>Anote seu progresso semanal</li>
                        <li>Celebre pequenas vitórias</li>
                        <li>Não se compare com outros, apenas com você de ontem</li>
                      </ul>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-lg">🎯</span> Foque em Uma Área por Vez
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Concentre-se em desenvolver uma habilidade específica antes de expandir para outras áreas.
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1 ml-4 list-disc">
                        <li>Mês 1: Foco em MEMÓRIA (jogos de memorização)</li>
                        <li>Mês 2: Foco em ATENÇÃO (exercícios de concentração)</li>
                        <li>Mês 3: Foco em LÓGICA (puzzles simples)</li>
                        <li>Evite tentar melhorar tudo de uma vez</li>
                        <li>Domine o básico antes de avançar</li>
                      </ul>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-lg">❤️</span> Cuide da Saúde do Cérebro
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Hábitos saudáveis potencializam muito o desenvolvimento cognitivo.
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1 ml-4 list-disc">
                        <li>Durma 7-8 horas por noite (essencial!)</li>
                        <li>Beba 2L de água por dia</li>
                        <li>Caminhe 20 minutos diariamente</li>
                        <li>Reduza redes sociais e telas antes de dormir</li>
                        <li>Alimente-se bem (frutas, vegetais, proteínas)</li>
                      </ul>
                    </div>
                  </>
                )}
              </div>

              <div className="bg-gradient-primary text-primary-foreground rounded-lg p-4 mt-4">
                <p className="text-sm text-center font-medium">
                  💪 <span className="font-bold">Lembre-se:</span> A inteligência não é fixa! Com dedicação e as estratégias certas, você pode evoluir continuamente.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-elegant border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-xl">📊 Seu Diagnóstico Completo</h3>
              </div>

              <div className="bg-background/60 backdrop-blur-sm rounded-lg p-5 border border-border space-y-4">
                <div>
                  <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <span className="text-2xl">⭐</span> Seus Pontos Fortes
                  </h4>
                  <div className="space-y-2">
                    {result.iqScore >= 130 && (
                      <>
                        <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border-l-4 border-green-500">
                          <span className="text-lg">✓</span>
                          <div>
                            <p className="font-semibold text-sm">Raciocínio Analítico Superior</p>
                            <p className="text-xs text-muted-foreground">Você resolve problemas complexos com facilidade e identifica padrões rapidamente.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border-l-4 border-green-500">
                          <span className="text-lg">✓</span>
                          <div>
                            <p className="font-semibold text-sm">Aprendizado Acelerado</p>
                            <p className="text-xs text-muted-foreground">Capacidade notável de absorver e aplicar novos conhecimentos de forma eficiente.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border-l-4 border-green-500">
                          <span className="text-lg">✓</span>
                          <div>
                            <p className="font-semibold text-sm">Pensamento Estratégico</p>
                            <p className="text-xs text-muted-foreground">Excelente em planejamento de longo prazo e tomada de decisões complexas.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border-l-4 border-green-500">
                          <span className="text-lg">✓</span>
                          <div>
                            <p className="font-semibold text-sm">Criatividade e Inovação</p>
                            <p className="text-xs text-muted-foreground">Habilidade excepcional para gerar ideias originais e soluções não convencionais.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border-l-4 border-green-500">
                          <span className="text-lg">✓</span>
                          <div>
                            <p className="font-semibold text-sm">Memória de Trabalho Expandida</p>
                            <p className="text-xs text-muted-foreground">Capacidade superior de manter e manipular múltiplas informações simultaneamente.</p>
                          </div>
                        </div>
                      </>
                    )}
                    {result.iqScore >= 120 && result.iqScore < 130 && (
                      <>
                        <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border-l-4 border-green-500">
                          <span className="text-lg">✓</span>
                          <div>
                            <p className="font-semibold text-sm">Raciocínio Lógico Forte</p>
                            <p className="text-xs text-muted-foreground">Excelente capacidade de análise e resolução de problemas complexos.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border-l-4 border-green-500">
                          <span className="text-lg">✓</span>
                          <div>
                            <p className="font-semibold text-sm">Compreensão Rápida</p>
                            <p className="text-xs text-muted-foreground">Aprende novos conceitos com facilidade acima da média.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border-l-4 border-green-500">
                          <span className="text-lg">✓</span>
                          <div>
                            <p className="font-semibold text-sm">Pensamento Crítico</p>
                            <p className="text-xs text-muted-foreground">Avalia informações de forma objetiva e toma decisões fundamentadas.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border-l-4 border-green-500">
                          <span className="text-lg">✓</span>
                          <div>
                            <p className="font-semibold text-sm">Adaptabilidade Mental</p>
                            <p className="text-xs text-muted-foreground">Facilidade em ajustar estratégias e aprender com experiências.</p>
                          </div>
                        </div>
                      </>
                    )}
                    {result.iqScore >= 90 && result.iqScore < 120 && (
                      <>
                        <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border-l-4 border-green-500">
                          <span className="text-lg">✓</span>
                          <div>
                            <p className="font-semibold text-sm">Raciocínio Lógico Sólido</p>
                            <p className="text-xs text-muted-foreground">Boa capacidade de resolver problemas cotidianos e pensar de forma estruturada.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border-l-4 border-green-500">
                          <span className="text-lg">✓</span>
                          <div>
                            <p className="font-semibold text-sm">Versatilidade Cognitiva</p>
                            <p className="text-xs text-muted-foreground">Capacidade de se adaptar a diferentes tipos de desafios e situações.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border-l-4 border-green-500">
                          <span className="text-lg">✓</span>
                          <div>
                            <p className="font-semibold text-sm">Aprendizado Consistente</p>
                            <p className="text-xs text-muted-foreground">Com dedicação, você consegue dominar novas habilidades efetivamente.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border-l-4 border-green-500">
                          <span className="text-lg">✓</span>
                          <div>
                            <p className="font-semibold text-sm">Senso Prático</p>
                            <p className="text-xs text-muted-foreground">Habilidade em aplicar conhecimentos de forma pragmática no dia a dia.</p>
                          </div>
                        </div>
                      </>
                    )}
                    {result.iqScore < 90 && (
                      <>
                        <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border-l-4 border-green-500">
                          <span className="text-lg">✓</span>
                          <div>
                            <p className="font-semibold text-sm">Potencial de Crescimento</p>
                            <p className="text-xs text-muted-foreground">Grande margem para desenvolvimento com as técnicas certas.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border-l-4 border-green-500">
                          <span className="text-lg">✓</span>
                          <div>
                            <p className="font-semibold text-sm">Persistência e Determinação</p>
                            <p className="text-xs text-muted-foreground">A determinação pode superar qualquer limitação inicial e levar longe.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border-l-4 border-green-500">
                          <span className="text-lg">✓</span>
                          <div>
                            <p className="font-semibold text-sm">Neuroplasticidade</p>
                            <p className="text-xs text-muted-foreground">Seu cérebro pode criar novas conexões com treino adequado e consistente.</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <span className="text-2xl">🎯</span> Áreas de Desenvolvimento
                  </h4>
                  <div className="space-y-2">
                    {result.iqScore >= 120 && (
                      <>
                        <div className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg border-l-4 border-blue-500">
                          <span className="text-lg">→</span>
                          <div>
                            <p className="font-semibold text-sm">Inteligência Emocional</p>
                            <p className="text-xs text-muted-foreground">Balanceie seu QI alto com desenvolvimento de empatia e habilidades sociais.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg border-l-4 border-blue-500">
                          <span className="text-lg">→</span>
                          <div>
                            <p className="font-semibold text-sm">Comunicação Simplificada</p>
                            <p className="text-xs text-muted-foreground">Pratique explicar conceitos complexos de forma acessível para diferentes públicos.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg border-l-4 border-blue-500">
                          <span className="text-lg">→</span>
                          <div>
                            <p className="font-semibold text-sm">Paciência e Tolerância</p>
                            <p className="text-xs text-muted-foreground">Nem todos processam informações na mesma velocidade - desenvolva paciência.</p>
                          </div>
                        </div>
                      </>
                    )}
                    {result.iqScore >= 90 && result.iqScore < 120 && (
                      <>
                        <div className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg border-l-4 border-blue-500">
                          <span className="text-lg">→</span>
                          <div>
                            <p className="font-semibold text-sm">Velocidade de Processamento</p>
                            <p className="text-xs text-muted-foreground">Pratique exercícios cronometrados para aumentar sua agilidade mental.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg border-l-4 border-blue-500">
                          <span className="text-lg">→</span>
                          <div>
                            <p className="font-semibold text-sm">Memória de Trabalho</p>
                            <p className="text-xs text-muted-foreground">Técnicas de memorização podem ampliar sua capacidade de retenção.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg border-l-4 border-blue-500">
                          <span className="text-lg">→</span>
                          <div>
                            <p className="font-semibold text-sm">Raciocínio Abstrato</p>
                            <p className="text-xs text-muted-foreground">Exercícios específicos podem fortalecer sua capacidade de pensar abstratamente.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg border-l-4 border-blue-500">
                          <span className="text-lg">→</span>
                          <div>
                            <p className="font-semibold text-sm">Concentração Prolongada</p>
                            <p className="text-xs text-muted-foreground">Técnica Pomodoro e meditação podem aumentar seu foco em tarefas longas.</p>
                          </div>
                        </div>
                      </>
                    )}
                    {result.iqScore < 90 && (
                      <>
                        <div className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg border-l-4 border-blue-500">
                          <span className="text-lg">→</span>
                          <div>
                            <p className="font-semibold text-sm">Atenção e Foco</p>
                            <p className="text-xs text-muted-foreground">Comece com exercícios curtos de 5 minutos e vá aumentando gradualmente.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg border-l-4 border-blue-500">
                          <span className="text-lg">→</span>
                          <div>
                            <p className="font-semibold text-sm">Memória Básica</p>
                            <p className="text-xs text-muted-foreground">Jogos simples de memorização podem fortalecer esta habilidade fundamental.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg border-l-4 border-blue-500">
                          <span className="text-lg">→</span>
                          <div>
                            <p className="font-semibold text-sm">Raciocínio Lógico Básico</p>
                            <p className="text-xs text-muted-foreground">Puzzles simples e quebra-cabeças iniciais são um ótimo ponto de partida.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg border-l-4 border-blue-500">
                          <span className="text-lg">→</span>
                          <div>
                            <p className="font-semibold text-sm">Hábitos Saudáveis</p>
                            <p className="text-xs text-muted-foreground">Sono adequado, hidratação e exercício físico são a base para o cérebro funcionar bem.</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Recomendações de Carreira */}
                <div>
                  <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <span className="text-2xl">💼</span> Áreas Profissionais Ideais
                  </h4>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm mb-3">Baseado no seu perfil cognitivo, estas áreas podem ser especialmente adequadas:</p>
                    <div className="flex flex-wrap gap-2">
                      {result.iqScore >= 130 && (
                        <>
                          <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium">Pesquisa Científica</span>
                          <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium">Engenharia Avançada</span>
                          <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium">Arquitetura de Software</span>
                          <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium">Matemática Aplicada</span>
                          <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium">Estratégia Corporativa</span>
                          <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium">Inovação e P&D</span>
                        </>
                      )}
                      {result.iqScore >= 120 && result.iqScore < 130 && (
                        <>
                          <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium">Tecnologia da Informação</span>
                          <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium">Análise de Dados</span>
                          <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium">Medicina</span>
                          <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium">Direito</span>
                          <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium">Consultoria</span>
                          <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium">Gestão de Projetos</span>
                        </>
                      )}
                      {result.iqScore >= 90 && result.iqScore < 120 && (
                        <>
                          <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium">Gestão e Administração</span>
                          <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium">Marketing</span>
                          <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium">Vendas</span>
                          <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium">Recursos Humanos</span>
                          <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium">Design</span>
                          <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium">Comunicação</span>
                        </>
                      )}
                      {result.iqScore < 90 && (
                        <>
                          <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium">Atendimento ao Cliente</span>
                          <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium">Trabalho Manual Especializado</span>
                          <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium">Artes e Artesanato</span>
                          <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium">Serviços Gerais</span>
                          <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium">Logística</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-primary text-primary-foreground rounded-lg p-4 mt-4">
                  <p className="text-sm text-center font-medium">
                    🚀 <span className="font-bold">Seu potencial é enorme!</span> Com dedicação consistente e as estratégias certas, você pode evoluir ainda mais suas capacidades cognitivas e alcançar grandes realizações.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Challenge Section - Destaque */}
        <Card className="p-8 mb-6 shadow-elegant border-2 border-primary bg-gradient-primary text-primary-foreground">
          <div className="text-center">
            <Zap className="w-16 h-16 mx-auto mb-4 animate-pulse" />
            <h2 className="text-3xl font-bold mb-4">
              🔥 Desafie Seus Amigos!
            </h2>
            <p className="text-lg opacity-90 mb-2">
              Você está no <span className="font-bold text-2xl">TOP {100 - result.percentile}%</span> das pessoas mais inteligentes!
            </p>
            <p className="text-base opacity-90 mb-2">
              Será que seus amigos conseguem te superar? 🏆
            </p>
            <p className="text-sm opacity-80 mb-6">
              {result.iqScore >= 120 ? "Com seu QI excepcional, a competição será acirrada!" :
               result.iqScore >= 110 ? "Mostre que você está acima da média!" :
               "Desafie seus amigos e vejam quem se sai melhor!"}
            </p>
            
            <div className="bg-primary-foreground/10 rounded-lg p-6 mb-4 backdrop-blur-sm border-2 border-primary-foreground/20">
              <div className="text-primary-foreground">
                <Trophy className="w-12 h-12 mx-auto mb-2" />
                <p className="text-sm mb-1 opacity-90">Meu QI</p>
                <p className="text-6xl font-bold mb-1">{result.iqScore}</p>
                <p className="text-lg font-semibold">Top {100 - result.percentile}%</p>
                <p className="text-sm opacity-75 mt-2">🧠 {getIQDescription(result.iqScore)}</p>
              </div>
            </div>

            {/* Estatísticas do Desafio */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-primary-foreground/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="text-2xl font-bold">{result.score}</div>
                <div className="text-xs opacity-80">Questões Certas</div>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="text-2xl font-bold">{Math.round(result.percentile)}%</div>
                <div className="text-xs opacity-80">Percentil</div>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="text-2xl font-bold">3min</div>
                <div className="text-xs opacity-80">Teste Rápido</div>
              </div>
            </div>

            <Button
              onClick={shareOnWhatsApp}
              size="lg"
              variant="secondary"
              className="w-full text-lg shadow-elegant font-bold mb-3 hover-scale"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Compartilhar no WhatsApp e Desafiar 🚀
            </Button>
            
            <div className="bg-primary-foreground/5 rounded-lg p-4 backdrop-blur-sm">
              <p className="text-sm opacity-90 font-semibold mb-2">
                💬 O que será enviado:
              </p>
              <p className="text-xs opacity-75 italic">
                "🧠 Acabei de descobrir meu QI: {result.iqScore}! Estou no TOP {100 - result.percentile}% das pessoas mais inteligentes! 🚀 Acha que consegue me superar? Faça o teste em 3 minutos..."
              </p>
            </div>

            <p className="text-sm opacity-75 mt-4">
              {result.iqScore >= 120 ? "Seu resultado é impressionante! Mostre para o mundo." :
               result.iqScore >= 110 ? "Compartilhe sua conquista e inspire seus amigos!" :
               "Todo mundo adora uma boa competição amigável!"}
            </p>
          </div>
        </Card>

        <div className="text-center space-y-4">
          <Button
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
            variant="outline"
          >
            Fazer o teste novamente
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompleteResult;
