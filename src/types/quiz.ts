export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  iqScore: number;
  percentile: number;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Qual número completa a sequência? 3, 6, 12, 24, 48, ___",
    options: ["56", "72", "96", "108"],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Quadrado → 4 lados | Triângulo → 3 lados | Hexágono → ___ lados",
    options: ["5", "6", "8", "7"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Se CASA=40 e MESA=38, então PESO=?",
    options: ["40", "55", "31", "48"],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Se todos os Blex são Koras e alguns Koras são Vins:",
    options: [
      "Todos Vins são Blex",
      "Alguns Blex podem ser Vins",
      "Nenhum Blex é Vin",
      "Todos Koras são Vins"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "7→49, 5→25, 9→81, 8→___",
    options: ["16", "64", "72", "88"],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Se João é 2 anos mais novo que Ana, Ana tem 5 a mais que Paulo. Quem é o mais velho?",
    options: ["João", "Ana", "Paulo", "Impossível determinar"],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "15, 14, 12, 9, 5, ___",
    options: ["0", "1", "2", "3"],
    correctAnswer: 3
  },
  {
    id: 8,
    question: "⬜ ◼️ ⬜ ◼️ ⬜ ___",
    options: ["◼️", "⬜", "⬛", "◻️"],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "2 gatos caçam 2 ratos em 2 minutos. Quantos gatos são necessários para caçar 20 ratos em 20 minutos?",
    options: ["2", "10", "20", "4"],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "Se A=1, B=2, C=3... D+E+F = ?",
    options: ["12", "13", "15", "18"],
    correctAnswer: 2
  },
  {
    id: 11,
    question: "2, 5, 11, 23, 47, ___",
    options: ["94", "95", "96", "97"],
    correctAnswer: 0
  },
  {
    id: 12,
    question: "Se ontem fosse amanhã, hoje seria:",
    options: ["Ontem", "Amanhã", "Hoje", "Uma contradição lógica"],
    correctAnswer: 3
  },
  {
    id: 13,
    question: "RELÓGIO : TEMPO :: TERMÔMETRO : ___",
    options: ["Calor", "Frio", "Temperatura", "Graus"],
    correctAnswer: 2
  },
  {
    id: 14,
    question: "Qual é a média de 2, 7, 10?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "100 dividido por 0 é igual a:",
    options: ["0", "100", "Infinito", "Indefinido"],
    correctAnswer: 3
  },
  {
    id: 16,
    question: "Se todo peixe nada e o tubarão é um peixe, então:",
    options: [
      "Nem todo peixe nada",
      "Tubarão não nada",
      "Tubarão nada",
      "Impossível determinar"
    ],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "4, 9, 16, 25, ___",
    options: ["30", "36", "40", "49"],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Qual é o oposto lógico de 'Todos estão felizes'?",
    options: [
      "Ninguém está feliz",
      "Todos estão tristes",
      "Alguns não estão felizes",
      "Nenhuma das anteriores"
    ],
    correctAnswer: 2
  },
  {
    id: 19,
    question: "(3+5)×2 = ?",
    options: ["10", "13", "16", "20"],
    correctAnswer: 2
  },
  {
    id: 20,
    question: "Se hoje é sexta-feira, que dia será daqui a 100 dias?",
    options: ["Sexta", "Quinta", "Domingo", "Sábado"],
    correctAnswer: 3
  },
  {
    id: 21,
    question: "Sequência de Fibonacci: 1, 1, 2, 3, 5, 8, ___",
    options: ["13", "11", "10", "15"],
    correctAnswer: 0
  },
  {
    id: 22,
    question: "Um produto custa R$ 200. Com 10% de desconto, paga-se R$ 20 a menos. Quanto sobra?",
    options: ["R$ 190", "R$ 200", "R$ 170", "R$ 180"],
    correctAnswer: 3
  },
  {
    id: 23,
    question: "Qual é o intruso? Lápis, Caneta, Caderno, Giz",
    options: ["Lápis", "Caneta", "Caderno", "Giz"],
    correctAnswer: 2
  },
  {
    id: 24,
    question: "Um carro viaja a 60 km/h. Em 30 minutos, percorre:",
    options: ["60 km", "20 km", "30 km", "40 km"],
    correctAnswer: 2
  },
  {
    id: 25,
    question: "Verde, Azul, Vermelho, Maçã. Qual não pertence?",
    options: ["Verde", "Azul", "Vermelho", "Maçã"],
    correctAnswer: 3
  },
  {
    id: 26,
    question: "Se 5x = 45, então x = ?",
    options: ["5", "8", "10", "9"],
    correctAnswer: 3
  },
  {
    id: 27,
    question: "10, 7, 4, 1, ___",
    options: ["0", "-1", "-2", "-3"],
    correctAnswer: 2
  },
  {
    id: 28,
    question: "Quantos vértices tem um cubo?",
    options: ["6", "8", "10", "12"],
    correctAnswer: 1
  },
  {
    id: 29,
    question: "Qual é a metade de 0,5?",
    options: ["0,5", "0,25", "0,1", "1"],
    correctAnswer: 1
  },
  {
    id: 30,
    question: "Qual é o contrário de profundo?",
    options: ["Alto", "Baixo", "Raso", "Largo"],
    correctAnswer: 2
  }
];

export const calculateIQ = (score: number, totalQuestions: number): QuizResult => {
  let iqScore: number;
  let percentile: number;

  if (score <= 6) {
    iqScore = 70 + Math.floor((score / 6) * 15);
    percentile = 5 + Math.floor((score / 6) * 15);
  } else if (score <= 12) {
    iqScore = 86 + Math.floor(((score - 7) / 6) * 12);
    percentile = 20 + Math.floor(((score - 7) / 6) * 20);
  } else if (score <= 20) {
    iqScore = 99 + Math.floor(((score - 13) / 8) * 9);
    percentile = 40 + Math.floor(((score - 13) / 8) * 25);
  } else if (score <= 25) {
    iqScore = 109 + Math.floor(((score - 21) / 5) * 9);
    percentile = 65 + Math.floor(((score - 21) / 5) * 20);
  } else {
    iqScore = 119 + Math.floor(((score - 26) / 5) * 21);
    percentile = 85 + Math.floor(((score - 26) / 5) * 14);
  }

  return {
    score,
    totalQuestions,
    iqScore,
    percentile: Math.min(percentile, 99)
  };
};

export const getCelebrityComparison = (iqScore: number): string => {
  if (iqScore >= 135) return "Albert Einstein";
  if (iqScore >= 130) return "Elon Musk";
  if (iqScore >= 125) return "Mark Zuckerberg";
  if (iqScore >= 120) return "Emma Watson";
  if (iqScore >= 115) return "Will Smith";
  if (iqScore >= 110) return "Tom Cruise";
  if (iqScore >= 105) return "Brad Pitt";
  if (iqScore >= 100) return "Jennifer Aniston";
  if (iqScore >= 95) return "Shakira";
  return "pessoa média";
};

export const getCognitiveStrength = (iqScore: number): string => {
  if (iqScore >= 130) return "Raciocínio Lógico Excepcional";
  if (iqScore >= 120) return "Pensamento Analítico Avançado";
  if (iqScore >= 110) return "Resolução de Problemas Complexos";
  if (iqScore >= 100) return "Compreensão Verbal e Numérica";
  if (iqScore >= 90) return "Raciocínio Prático";
  return "Pensamento Cotidiano";
};
