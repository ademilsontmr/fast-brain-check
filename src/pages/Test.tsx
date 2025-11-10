import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "@/types/quiz";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Sparkles, TrendingUp, Zap } from "lucide-react";

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showMotivation, setShowMotivation] = useState(false);
  const navigate = useNavigate();

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = () => {
    if (selectedOption === null) return;

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
      const score = newAnswers.reduce((acc, answer, index) => {
        return acc + (answer === questions[index].correctAnswer ? 1 : 0);
      }, 0);
      localStorage.setItem("quizScore", score.toString());
      navigate("/resultado-basico");
    }
  };

  const handleContinue = () => {
    setShowMotivation(false);
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
              <h1 className="text-2xl font-bold">BomQI</h1>
            </div>
            <div className="text-sm text-muted-foreground">
              Pergunta {currentQuestion + 1} de {questions.length}
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

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Tempo médio: 6 segundos por pergunta
        </div>
      </div>
    </div>
  );
};

export default Test;
