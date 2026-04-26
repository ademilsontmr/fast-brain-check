import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "@/types/quiz";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Sparkles, TrendingUp, Zap, User, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useSEO } from "@/hooks/use-seo";


type TestStep = 'gender' | 'age' | 'questions';

const TOTAL_TIME = 10 * 60; // 600 segundos

const Test = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useSEO({
    title: "Teste de QI Online",
    description: "Faça o teste de QI científico e descubra seu quociente de inteligência.",
    noIndex: true,
  });

  // Limpar dados da sessão anterior ao iniciar novo quiz
  useEffect(() => {
    localStorage.removeItem('resultAccessToken');
    localStorage.removeItem('pixBrCode');
    localStorage.removeItem('pixCreatedAt');
    localStorage.removeItem('quizScore');
    localStorage.removeItem('quizTimeUsed');
    localStorage.removeItem('quizAverageAnswerTime');
    localStorage.removeItem('quizTimeUp');
  }, []);

  const [testStep, setTestStep] = useState<TestStep>('gender');
  const [gender, setGender] = useState<'homem' | 'mulher' | null>(null);
  const [ageRange, setAgeRange] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showMotivation, setShowMotivation] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(TOTAL_TIME);

  // Todas as refs — nunca sofrem de closure stale
  const answersRef = useRef<number[]>([]);
  const answerTimesRef = useRef<number[]>([]);
  const questionStartRef = useRef<number>(Date.now());
  const startTimeRef = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const timeRemainingRef = useRef(TOTAL_TIME);
  const navigatedRef = useRef(false); // evita navegação dupla

  const progress = testStep === 'questions'
    ? ((currentQuestion + 1) / questions.length) * 100
    : 0;

  // Finaliza o quiz salvando no localStorage e navegando
  const finishQuiz = (timedOut: boolean) => {
    if (navigatedRef.current) return;
    navigatedRef.current = true;

    if (timerRef.current) clearInterval(timerRef.current);

    const score = answersRef.current.reduce((acc, answer, idx) =>
      acc + (answer === questions[idx].correctAnswer ? 1 : 0), 0);

    const avgTime = answerTimesRef.current.length > 0
      ? answerTimesRef.current.reduce((a, b) => a + b, 0) / answerTimesRef.current.length
      : 20;

    const timeUsed = startTimeRef.current ? Date.now() - startTimeRef.current : 0;

    localStorage.setItem("quizScore", score.toString());
    localStorage.setItem("quizTimeUsed", timeUsed.toString());
    localStorage.setItem("quizAverageAnswerTime", avgTime.toString());
    localStorage.setItem("quizTimeUp", timedOut.toString());

    if (timedOut) {
      toast({ title: "⏰ Tempo esgotado!", description: "O teste foi finalizado automaticamente.", variant: "destructive" });
      setTimeout(() => navigate("/dados-usuario"), 1500);
    } else {
      navigate("/dados-usuario");
    }
  };

  // Timer — usa refs, sem closure stale
  useEffect(() => {
    if (testStep !== 'questions') return;

    startTimeRef.current = Date.now();
    timeRemainingRef.current = TOTAL_TIME;

    timerRef.current = setInterval(() => {
      timeRemainingRef.current -= 1;
      setTimeRemaining(timeRemainingRef.current);

      if (timeRemainingRef.current === 120) {
        toast({ title: "⏱️ Tempo passando", description: "Resta apenas 2 minutos!" });
      } else if (timeRemainingRef.current === 30) {
        toast({ title: "⏰ Atenção!", description: "Resta apenas 30 segundos!", variant: "destructive" });
      } else if (timeRemainingRef.current <= 0) {
        finishQuiz(true);
      }
    }, 1000);

    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [testStep]); // eslint-disable-line react-hooks/exhaustive-deps

  // Reinicia contagem de tempo por questão
  useEffect(() => {
    if (testStep === 'questions' && !showMotivation) {
      questionStartRef.current = Date.now();
    }
  }, [currentQuestion, showMotivation, testStep]);

  const handleGenderNext = () => {
    if (!gender) return;
    localStorage.setItem("quizGender", gender);
    setTestStep('age');
  };

  const handleAgeNext = () => {
    if (!ageRange) return;
    localStorage.setItem("quizAgeRange", ageRange);
    setTestStep('questions');
  };

  const handleAnswer = () => {
    if (selectedOption === null) return;

    // Registrar tempo desta resposta
    const answerTime = (Date.now() - questionStartRef.current) / 1000;
    // Ignorar respostas < 2s (não leu a questão) para não inflar o bônus de tempo
    if (answerTime >= 2) answerTimesRef.current.push(answerTime);

    // Registrar resposta
    answersRef.current = [...answersRef.current, selectedOption];

    setSelectedOption(null);

    const next = currentQuestion + 1;

    if (next >= questions.length) {
      // Última questão — finalizar
      finishQuiz(false);
      return;
    }

    // Tela de motivação após questões 7, 15, 23
    if (next === 7 || next === 15 || next === 23) {
      setShowMotivation(true);
    } else {
      setCurrentQuestion(next);
    }
  };

  const handleContinue = () => {
    setShowMotivation(false);
    setCurrentQuestion(q => q + 1);
  };

  const ageRanges = ["10-13 anos", "14-17 anos", "18-24 anos", "25-34 anos", "35-44 anos", "45-54 anos", "55-64 anos", "65+ anos"];

  const motivationContent = (() => {
    const next = currentQuestion + 1;
    if (next === 7) return { icon: Sparkles, title: "Você está indo bem! ✨", message: "Seus primeiros acertos mostram que você tem um raciocínio rápido. Continue assim!", color: "text-primary" };
    if (next === 15) return { icon: TrendingUp, title: "Impressionante! 📈", message: "Você está acima da média. Seu QI pode surpreender!", color: "text-accent" };
    return { icon: Zap, title: "Quase lá! ⚡", message: "Faltam poucos minutos para descobrir se você é um gênio. Não desista agora!", color: "text-primary" };
  })();

  // ── Tela de gênero ──
  if (testStep === 'gender') {
    return (
      <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-8 shadow-elegant">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 text-primary">
              <User className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Selecione seu gênero</h2>
            <p className="text-lg text-muted-foreground">Esta informação nos ajuda a personalizar seu resultado</p>
          </div>
          <div className="space-y-4">
            {(['homem', 'mulher'] as const).map((g) => (
              <button key={g} onClick={() => setGender(g)}
                className={`w-full text-left p-6 rounded-lg border-2 transition-all ${gender === g ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${gender === g ? "border-primary bg-primary" : "border-border"}`}>
                    {gender === g && <div className="w-3 h-3 rounded-full bg-primary-foreground" />}
                  </div>
                  <span className="text-xl font-semibold capitalize">{g}</span>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <Button onClick={handleGenderNext} disabled={!gender} size="lg" className="shadow-elegant">Seguir</Button>
          </div>
        </Card>
      </div>
    );
  }

  // ── Tela de faixa etária ──
  if (testStep === 'age') {
    return (
      <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-8 shadow-elegant">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 text-primary">
              <Calendar className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Selecione sua faixa etária</h2>
            <p className="text-lg text-muted-foreground">Esta informação nos ajuda a comparar seu resultado com pessoas da mesma idade</p>
          </div>
          <div className="space-y-3">
            {ageRanges.map((range) => (
              <button key={range} onClick={() => setAgeRange(range)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${ageRange === range ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${ageRange === range ? "border-primary bg-primary" : "border-border"}`}>
                    {ageRange === range && <div className="w-3 h-3 rounded-full bg-primary-foreground" />}
                  </div>
                  <span className="text-lg">{range}</span>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <Button onClick={handleAgeNext} disabled={!ageRange} size="lg" className="shadow-elegant">Seguir</Button>
          </div>
        </Card>
      </div>
    );
  }

  // ── Tela de motivação ──
  if (showMotivation) {
    const MotivationIcon = motivationContent.icon;
    return (
      <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-8 shadow-elegant text-center">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 ${motivationContent.color}`}>
            <MotivationIcon className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold mb-4">{motivationContent.title}</h2>
          <p className="text-lg text-muted-foreground mb-8">{motivationContent.message}</p>
          <Button onClick={handleContinue} size="lg" className="shadow-elegant">Continuar o Teste</Button>
        </Card>
      </div>
    );
  }

  // ── Tela de questão ──
  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate("/")}>
              <Brain className="w-8 h-8 text-primary" />
              <div className="text-2xl font-bold">BomQI</div>
            </div>
            <div className="flex items-center gap-4">
              <div className={`text-sm font-mono font-semibold ${timeRemaining <= 30 ? 'text-destructive' : timeRemaining <= 120 ? 'text-yellow-500' : 'text-muted-foreground'}`}>
                {Math.floor(timeRemaining / 60)}:{String(timeRemaining % 60).padStart(2, '0')}
              </div>
              <div className="text-sm text-muted-foreground">
                Pergunta {currentQuestion + 1} de {questions.length}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="p-8 shadow-elegant">
          <h2 className="text-2xl font-bold mb-6">{question.question}</h2>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button key={index} onClick={() => setSelectedOption(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${selectedOption === index ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${selectedOption === index ? "border-primary bg-primary" : "border-border"}`}>
                    {selectedOption === index && <div className="w-3 h-3 rounded-full bg-primary-foreground" />}
                  </div>
                  <span className="text-lg">{option}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Button onClick={handleAnswer} disabled={selectedOption === null} size="lg" className="shadow-elegant">
              {currentQuestion === questions.length - 1 ? "Ver Resultado" : "Próxima Pergunta"}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Test;
