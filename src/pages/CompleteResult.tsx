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
              
              <div className="space-y-4">
                {result.iqScore >= 120 && (
                  <>
                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-lg">🧩</span> Desafios Mentais Avançados
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Resolva puzzles complexos e jogos de estratégia como xadrez ou Go. Dedique 20 minutos diários a problemas de lógica avançada para manter sua mente afiada.
                      </p>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-lg">📖</span> Leituras Recomendadas
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        "Pensar Rápido e Devagar" de Daniel Kahneman, "A Arte de Pensar Claramente" de Rolf Dobelli. Livros sobre neurociência e filosofia expandirão ainda mais suas capacidades.
                      </p>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-lg">🎯</span> Desenvolvimento Contínuo
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Aprenda uma nova língua ou instrumento musical. Essas atividades criam novas conexões neurais e potencializam sua já excelente capacidade cognitiva.
                      </p>
                    </div>
                  </>
                )}
                {result.iqScore >= 90 && result.iqScore < 120 && (
                  <>
                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-lg">🎮</span> Jogos de Raciocínio
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Pratique jogos como Sudoku, palavras cruzadas e quebra-cabeças. Dedique 15 minutos diários para estimular diferentes áreas do cérebro.
                      </p>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-lg">📚</span> Hábitos de Leitura
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Leia 20 páginas por dia de livros variados. "O Poder do Hábito" de Charles Duhigg e "Mindset" de Carol Dweck são ótimos para começar.
                      </p>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-lg">🧠</span> Exercícios Cognitivos
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Use apps como Lumosity ou Peak. Pratique memorização, cálculo mental e resolução rápida de problemas para fortalecer suas habilidades.
                      </p>
                    </div>
                  </>
                )}
                {result.iqScore < 90 && (
                  <>
                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-lg">🌱</span> Comece Devagar
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Inicie com jogos simples de memória e atenção. Apps como Peak oferecem exercícios adaptados ao seu nível, progredindo gradualmente.
                      </p>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-lg">💪</span> Consistência é a Chave
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Pratique 10 minutos diários de exercícios cognitivos. Pequenos passos consistentes geram grandes resultados ao longo do tempo.
                      </p>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-lg">🎯</span> Foque em Uma Área
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Escolha uma habilidade específica (memória, atenção ou lógica) e dedique-se a ela por 30 dias antes de expandir.
                      </p>
                    </div>
                  </>
                )}
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
                    {result.iqScore >= 120 && (
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
                            <p className="font-semibold text-sm">Persistência</p>
                            <p className="text-xs text-muted-foreground">A determinação pode superar qualquer limitação inicial.</p>
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
                        <p className="font-semibold text-sm">Raciocínio Espacial</p>
                        <p className="text-xs text-muted-foreground">Jogos e puzzles 3D fortalecem essa habilidade específica.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-primary text-primary-foreground rounded-lg p-4 mt-4">
                  <p className="text-sm text-center font-medium">
                    🚀 <span className="font-bold">Seu potencial é enorme!</span> Com dedicação consistente, você pode evoluir ainda mais suas capacidades cognitivas.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Challenge Section - Destaque */}
        <Card className="p-8 mb-6 shadow-elegant border-2 border-primary bg-gradient-primary text-primary-foreground">
          <div className="text-center">
            <Zap className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              🔥 Desafie Seus Amigos!
            </h2>
            <p className="text-lg opacity-90 mb-2">
              Você está no <span className="font-bold text-2xl">TOP {100 - result.percentile}%</span> das pessoas mais inteligentes!
            </p>
            <p className="text-base opacity-90 mb-6">
              Será que seus amigos conseguem te superar? 🏆
            </p>
            <div className="bg-primary-foreground/10 rounded-lg p-6 mb-6 backdrop-blur-sm border-2 border-primary-foreground/20">
              <div className="text-primary-foreground">
                <Trophy className="w-12 h-12 mx-auto mb-2" />
                <p className="text-sm mb-1 opacity-90">Meu QI</p>
                <p className="text-6xl font-bold mb-1">{result.iqScore}</p>
                <p className="text-lg font-semibold">Top {100 - result.percentile}%</p>
                <p className="text-sm opacity-75 mt-2">🧠 {getIQDescription(result.iqScore)}</p>
              </div>
            </div>
            <Button
              onClick={shareOnWhatsApp}
              size="lg"
              variant="secondary"
              className="w-full text-lg shadow-elegant font-bold"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Compartilhar no WhatsApp e Desafiar 🚀
            </Button>
            <p className="text-sm opacity-75 mt-4">
              Mostre seu resultado e desafie seus amigos a fazerem melhor!
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
