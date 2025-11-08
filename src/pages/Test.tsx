import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "@/types/quiz";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain } from "lucide-react";

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const navigate = useNavigate();

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = () => {
    if (selectedOption === null) return;

    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const score = newAnswers.reduce((acc, answer, index) => {
        return acc + (answer === questions[index].correctAnswer ? 1 : 0);
      }, 0);
      localStorage.setItem("quizScore", score.toString());
      navigate("/resultado-basico");
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
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
