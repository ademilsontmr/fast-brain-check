import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "@/types/quiz";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Sparkles, TrendingUp, Zap, User, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type TestStep = 'gender' | 'age' | 'questions';

const Test = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [testStep, setTestStep] = useState<TestStep>('gender');
  const [gender, setGender] = useState<'homem' | 'mulher' | null>(null);
  const [ageRange, setAgeRange] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showMotivation, setShowMotivation] = useState(false);
  
  // Timer: 10 minutos (600 segundos) para 30 questões
  const TOTAL_TIME = 10 * 60; // 10 minutos em segundos
  const [timeRemaining, setTimeRemaining] = useState(TOTAL_TIME);
  const [timeStarted, setTimeStarted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);
  
  // Rastreamento de tempo de resposta por questão
  const questionStartTimeRef = useRef<number | null>(null);
  const answerTimesRef = useRef<number[]>([]); // Tempo em segundos para cada resposta

  const progress = testStep === 'questions'
    ? ((currentQuestion + 1) / questions.length) * 100
    : 0;
  
  // Função para lidar com tempo esgotado
  const handleTimeUp = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    // Calcular score apenas das questões respondidas
    const score = answers.reduce((acc, answer, index) => {
      return acc + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
    
    // Calcular tempo médio de resposta (em segundos)
    const averageAnswerTime = answerTimesRef.current.length > 0
      ? answerTimesRef.current.reduce((acc, time) => acc + time, 0) / answerTimesRef.current.length
      : 20; // Fallback: 20 segundos se não houver dados
    
    // Salvar dados
    const timeUsed = startTimeRef.current ? Date.now() - startTimeRef.current : 0;
    localStorage.setItem("quizScore", score.toString());
    localStorage.setItem("quizTimeUsed", timeUsed.toString());
    localStorage.setItem("quizAverageAnswerTime", averageAnswerTime.toString());
    localStorage.setItem("quizTimeUp", "true");
    
    toast({
      title: "⏰ Tempo esgotado!",
      description: "O teste foi finalizado automaticamente.",
      variant: "destructive",
    });
    
    setTimeout(() => {
      navigate("/dados-usuario");
    }, 1500);
  }, [answers, navigate, toast]);
  
  // Função para avançar da seleção de gênero para faixa etária
  const handleGenderNext = () => {
    if (gender) {
      localStorage.setItem("quizGender", gender);
      setTestStep('age');
    }
  };

  // Função para avançar da seleção de faixa etária para as perguntas
  const handleAgeNext = () => {
    if (ageRange) {
      localStorage.setItem("quizAgeRange", ageRange);
      setTestStep('questions');
    }
  };

  // Faixas etárias começando com 10 anos
  const ageRanges = [
    "10-13 anos",
    "14-17 anos",
    "18-24 anos",
    "25-34 anos",
    "35-44 anos",
    "45-54 anos",
    "55-64 anos",
    "65+ anos"
  ];

  // Iniciar timer apenas quando o teste começar (testStep === 'questions')
  useEffect(() => {
    if (testStep !== 'questions') return;
    
    if (!timeStarted) {
      startTimeRef.current = Date.now();
      setTimeStarted(true);
    }
    
    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          // Tempo acabou - submeter automaticamente
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [testStep, timeStarted, handleTimeUp]);

  // Avisos de tempo
  useEffect(() => {
    if (timeRemaining === 0) return;
    
    if (timeRemaining === 30) {
      toast({
        title: "⏰ Atenção!",
        description: "Resta apenas 30 segundos!",
        variant: "destructive",
      });
    } else if (timeRemaining === 120) {
      toast({
        title: "⏱️ Tempo passando",
        description: "Resta apenas 2 minutos!",
      });
    }
  }, [timeRemaining, toast]);

  // Iniciar contagem de tempo quando uma nova questão é exibida
  useEffect(() => {
    if (!showMotivation) {
      questionStartTimeRef.current = Date.now();
    }
  }, [currentQuestion, showMotivation]);

  const handleAnswer = () => {
    if (selectedOption === null) return;

    // Calcular tempo de resposta para esta questão (em segundos)
    if (questionStartTimeRef.current) {
      const answerTime = (Date.now() - questionStartTimeRef.current) / 1000; // em segundos
      answerTimesRef.current.push(answerTime);
    }

    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQuestion < questions.length - 1) {
      const nextQuestion = currentQuestion + 1;
      // Show motivation card after questions 7, 15, 23
      if (nextQuestion === 7 || nextQuestion === 15 || nextQuestion === 23) {
        setShowMotivation(true);
      } else {
        setCurrentQuestion(nextQuestion);
      }
    } else {
      // Finalizar teste
      const score = newAnswers.reduce((acc, answer, index) => {
        return acc + (answer === questions[index].correctAnswer ? 1 : 0);
      }, 0);
      
      // Calcular tempo médio de resposta (em segundos)
      const averageAnswerTime = answerTimesRef.current.length > 0
        ? answerTimesRef.current.reduce((acc, time) => acc + time, 0) / answerTimesRef.current.length
        : 20; // Fallback: 20 segundos se não houver dados
      
      // Salvar dados
      const timeUsed = startTimeRef.current ? Date.now() - startTimeRef.current : 0;
      localStorage.setItem("quizScore", score.toString());
      localStorage.setItem("quizTimeUsed", timeUsed.toString());
      localStorage.setItem("quizAverageAnswerTime", averageAnswerTime.toString());
      localStorage.setItem("quizTimeUp", "false");
      
      // Parar timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      
      navigate("/dados-usuario");
    }
  };

  const handleContinue = () => {
    setShowMotivation(false);
    // Reiniciar contagem de tempo para a próxima questão
    questionStartTimeRef.current = Date.now();
    setCurrentQuestion(currentQuestion + 1);
  };

  const getMotivationContent = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion === 7) {
      return {
        icon: Sparkles,
        title: "Você está indo bem! ✨",
        message: "Seus primeiros acertos mostram que você tem um raciocínio rápido. Continue assim!",
        color: "text-primary"
      };
    } else if (nextQuestion === 15) {
      return {
        icon: TrendingUp,
        title: "Impressionante! 📈",
        message: "Você está acima da média. Seu QI pode surpreender!",
        color: "text-accent"
      };
    } else {
      return {
        icon: Zap,
        title: "Quase lá! ⚡",
        message: "Faltam poucos minutos para descobrir se você é um gênio. Não desista agora!",
        color: "text-primary"
      };
    }
  };

  // Renderização condicional baseada na etapa do teste
  if (testStep === 'gender') {
    return (
      <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-8 shadow-elegant">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 text-primary">
              <User className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Selecione seu gênero</h2>
            <p className="text-lg text-muted-foreground">
              Esta informação nos ajuda a personalizar seu resultado
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => setGender('homem')}
              className={`w-full text-left p-6 rounded-lg border-2 transition-all ${
                gender === 'homem'
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    gender === 'homem'
                      ? "border-primary bg-primary"
                      : "border-border"
                  }`}
                >
                  {gender === 'homem' && (
                    <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                  )}
                </div>
                <span className="text-xl font-semibold">Homem</span>
              </div>
            </button>

            <button
              onClick={() => setGender('mulher')}
              className={`w-full text-left p-6 rounded-lg border-2 transition-all ${
                gender === 'mulher'
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    gender === 'mulher'
                      ? "border-primary bg-primary"
                      : "border-border"
                  }`}
                >
                  {gender === 'mulher' && (
                    <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                  )}
                </div>
                <span className="text-xl font-semibold">Mulher</span>
              </div>
            </button>
          </div>

          <div className="mt-8 flex justify-end">
            <Button
              onClick={handleGenderNext}
              disabled={gender === null}
              size="lg"
              className="shadow-elegant"
            >
              Seguir
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (testStep === 'age') {
    return (
      <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-8 shadow-elegant">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 text-primary">
              <Calendar className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Selecione sua faixa etária</h2>
            <p className="text-lg text-muted-foreground">
              Esta informação nos ajuda a comparar seu resultado com pessoas da mesma idade
            </p>
          </div>

          <div className="space-y-3">
            {ageRanges.map((range, index) => (
              <button
                key={index}
                onClick={() => setAgeRange(range)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  ageRange === range
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      ageRange === range
                        ? "border-primary bg-primary"
                        : "border-border"
                    }`}
                  >
                    {ageRange === range && (
                      <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                    )}
                  </div>
                  <span className="text-lg">{range}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Button
              onClick={handleAgeNext}
              disabled={ageRange === null}
              size="lg"
              className="shadow-elegant"
            >
              Seguir
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const motivationContent = getMotivationContent();

  if (showMotivation) {
    const MotivationIcon = motivationContent.icon;
    return (
      <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-8 shadow-elegant text-center">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 ${motivationContent.color}`}>
            <MotivationIcon className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold mb-4">{motivationContent.title}</h2>
          <p className="text-lg text-muted-foreground mb-8">
            {motivationContent.message}
          </p>
          <Button onClick={handleContinue} size="lg" className="shadow-elegant">
            Continuar o Teste
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => navigate("/")}
            >
              <Brain className="w-8 h-8 text-primary" />
              <div className="text-2xl font-bold">BomQI</div>
            </div>
            <div className="flex items-center gap-6">
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
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">
              {question.question}
            </h2>
          </div>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedOption(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  selectedOption === index
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedOption === index
                        ? "border-primary bg-primary"
                        : "border-border"
                    }`}
                  >
                    {selectedOption === index && (
                      <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                    )}
                  </div>
                  <span className="text-lg">{option}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Button
              onClick={handleAnswer}
              disabled={selectedOption === null}
              size="lg"
              className="shadow-elegant"
            >
              {currentQuestion === questions.length - 1
                ? "Ver Resultado"
                : "Próxima Pergunta"}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Test;
