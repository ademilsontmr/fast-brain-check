export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'easy' | 'medium' | 'hard'; // Para balanceamento futuro
  category: 'logic' | 'math' | 'pattern' | 'verbal' | 'spatial'; // Categorias
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  iqScore: number;
  percentile: number;
}

// Perguntas otimizadas e balanceadas para um teste de QI realista mas motivador
export const questions: Question[] = [
  // Fáceis (1-10) - Base sólida, todos podem acertar
  {
    id: 1,
    question: "Qual número completa a sequência? 2, 4, 6, 8, ___",
    options: ["9", "10", "11", "12"],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'pattern'
  },
  {
    id: 2,
    question: "Quadrado tem 4 lados. Triângulo tem 3 lados. Hexágono tem quantos lados?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'spatial'
  },
  {
    id: 3,
    question: "Se A=1, B=2, C=3, então D+E+F é igual a:",
    options: ["12", "15", "18", "21"],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'math'
  },
  {
    id: 4,
    question: "Qual é a média de 5, 10 e 15?",
    options: ["8", "10", "12", "15"],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'math'
  },
  {
    id: 5,
    question: "Se hoje é segunda-feira, que dia será daqui a 3 dias?",
    options: ["Terça", "Quarta", "Quinta", "Sexta"],
    correctAnswer: 2,
    difficulty: 'easy',
    category: 'logic'
  },
  {
    id: 6,
    question: "Qual é o oposto de 'profundo'?",
    options: ["Alto", "Raso", "Largo", "Estreito"],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'verbal'
  },
  {
    id: 7,
    question: "Se 3×4 = 12, então 4×3 = ?",
    options: ["12", "15", "16", "18"],
    correctAnswer: 0,
    difficulty: 'easy',
    category: 'math'
  },
  {
    id: 8,
    question: "Qual número completa? 5, 10, 15, 20, ___",
    options: ["22", "25", "30", "35"],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'pattern'
  },
  {
    id: 9,
    question: "Se todo gato é um animal, e Fluffy é um gato, então:",
    options: ["Fluffy não é animal", "Fluffy é um animal", "Alguns gatos não são animais", "Impossível determinar"],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'logic'
  },
  {
    id: 10,
    question: "Quantos lados tem um pentágono?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 1,
    difficulty: 'easy',
    category: 'spatial'
  },
  
  // Médias (11-20) - Desafio moderado
  {
    id: 11,
    question: "Qual número completa a sequência? 3, 6, 12, 24, 48, ___",
    options: ["72", "84", "96", "108"],
    correctAnswer: 2,
    difficulty: 'medium',
    category: 'pattern'
  },
  {
    id: 12,
    question: "Se João tem 5 anos a mais que Maria, e Maria tem 8 anos, quantos anos tem João?",
    options: ["10", "13", "15", "18"],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'math'
  },
  {
    id: 13,
    question: "Se 2x + 5 = 15, então x = ?",
    options: ["3", "5", "7", "10"],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'math'
  },
  {
    id: 14,
    question: "Sequência de Fibonacci: 1, 1, 2, 3, 5, 8, ___",
    options: ["11", "13", "15", "16"],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'pattern'
  },
  {
    id: 15,
    question: "Se todos os cachorros latem e Rex é um cachorro, então:",
    options: ["Rex não late", "Rex late", "Alguns cachorros não latem", "Impossível determinar"],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'logic'
  },
  {
    id: 16,
    question: "Qual número completa? 4, 9, 16, 25, ___",
    options: ["30", "36", "40", "49"],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'pattern'
  },
  {
    id: 17,
    question: "Se um produto custa R$ 100 e tem 20% de desconto, qual o preço final?",
    options: ["R$ 70", "R$ 80", "R$ 85", "R$ 90"],
    correctAnswer: 1,
    difficulty: 'medium',
    category: 'math'
  },
  {
    id: 18,
    question: "RELÓGIO : TEMPO :: TERMÔMETRO : ___",
    options: ["Calor", "Frio", "Temperatura", "Graus"],
    correctAnswer: 2,
    difficulty: 'medium',
    category: 'verbal'
  },
  {
    id: 19,
    question: "2, 5, 11, 23, 47, ___",
    options: ["94", "95", "96", "97"],
    correctAnswer: 0,
    difficulty: 'medium',
    category: 'pattern'
  },
  {
    id: 20,
    question: "Se hoje é quinta-feira, que dia será daqui a 100 dias? (Considere que 100 ÷ 7 = 14 semanas e 2 dias)",
    options: ["Quinta", "Sexta", "Sábado", "Domingo"],
    correctAnswer: 2,
    difficulty: 'medium',
    category: 'logic'
  },
  
  // Difíceis (21-30) - Desafio real
  {
    id: 21,
    question: "Se todos os A são B, e alguns B são C, então:",
    options: [
      "Todos A são C",
      "Alguns A podem ser C",
      "Nenhum A é C",
      "Todos C são A"
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'logic'
  },
  {
    id: 22,
    question: "Um carro viaja a 60 km/h. Quantos quilômetros percorre em 45 minutos?",
    options: ["40 km", "45 km", "50 km", "55 km"],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'math'
  },
  {
    id: 23,
    question: "Qual número completa? 1, 4, 9, 16, 25, 36, ___",
    options: ["42", "49", "56", "64"],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'pattern'
  },
  {
    id: 24,
    question: "Se 5 gatos caçam 5 ratos em 5 minutos, quantos gatos são necessários para caçar 20 ratos em 20 minutos?",
    options: ["5", "10", "15", "20"],
    correctAnswer: 0,
    difficulty: 'hard',
    category: 'logic'
  },
  {
    id: 25,
    question: "Qual é o próximo número? 1, 3, 7, 15, 31, ___",
    options: ["47", "55", "63", "71"],
    correctAnswer: 2,
    difficulty: 'hard',
    category: 'pattern'
  },
  {
    id: 26,
    question: "Se BOLA = 40 (B=2, O=15, L=12, A=1) e CASA = 23 (C=3, A=1, S=19, A=1), então MESA = ?",
    options: ["48", "50", "52", "54"],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'math'
  },
  {
    id: 27,
    question: "Qual é o oposto lógico de 'Todos estão presentes'?",
    options: [
      "Ninguém está presente",
      "Todos estão ausentes",
      "Alguns não estão presentes",
      "Nenhuma das anteriores"
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    category: 'logic'
  },
  {
    id: 28,
    question: "Se um número é multiplicado por 3 e depois somado 5, o resultado é 26. Qual é o número?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    difficulty: 'hard',
    category: 'math'
  },
  {
    id: 29,
    question: "Qual número completa? 2, 6, 12, 20, 30, ___",
    options: ["38", "42", "48", "56"],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'pattern'
  },
  {
    id: 30,
    question: "Maria tem o dobro da idade de João. Se João tem 15 anos, quantos anos Maria terá daqui a 5 anos?",
    options: ["30", "35", "40", "45"],
    correctAnswer: 1,
    difficulty: 'hard',
    category: 'logic'
  }
];

/**
 * Calcula o QI de forma otimista mas realista
 * Sistema baseado em distribuição normal ajustada para ser motivador
 * QI médio: 100, desvio padrão: 15
 * Ajustado para ser sempre positivo e encorajador
 * Incorpora tempo de resposta: respostas rápidas aumentam o QI, lentas diminuem
 */
export const calculateIQ = (score: number, totalQuestions: number, averageAnswerTime?: number): QuizResult => {
  const percentage = (score / totalQuestions) * 100;
  
  // Sistema otimista: QI mínimo de 85 (acima da média baixa)
  // QI máximo de 145 (genialidade)
  // Distribuição ajustada para ser sempre positiva
  
  let iqScore: number;
  let percentile: number;
  
  // Cálculo otimista baseado em percentual de acertos
  // Mesmo com 0 acertos, QI mínimo de 85 (sempre positivo)
  // Com 100% de acertos, QI de 145 (genialidade)
  
  if (percentage >= 90) {
    // 90-100%: QI Superior a Excepcional (130-145)
    iqScore = 130 + Math.floor(((percentage - 90) / 10) * 15);
    percentile = 95 + Math.floor(((percentage - 90) / 10) * 4);
  } else if (percentage >= 80) {
    // 80-89%: QI Superior (120-129)
    iqScore = 120 + Math.floor(((percentage - 80) / 10) * 10);
    percentile = 90 + Math.floor(((percentage - 80) / 10) * 5);
  } else if (percentage >= 70) {
    // 70-79%: QI Acima da Média (110-119)
    iqScore = 110 + Math.floor(((percentage - 70) / 10) * 10);
    percentile = 75 + Math.floor(((percentage - 70) / 10) * 15);
  } else if (percentage >= 60) {
    // 60-69%: QI Médio-Alto (100-109)
    iqScore = 100 + Math.floor(((percentage - 60) / 10) * 10);
    percentile = 50 + Math.floor(((percentage - 60) / 10) * 25);
  } else if (percentage >= 50) {
    // 50-59%: QI Médio (95-99)
    iqScore = 95 + Math.floor(((percentage - 50) / 10) * 5);
    percentile = 40 + Math.floor(((percentage - 50) / 10) * 10);
  } else if (percentage >= 40) {
    // 40-49%: QI Médio-Baixo (90-94)
    iqScore = 90 + Math.floor(((percentage - 40) / 10) * 5);
    percentile = 30 + Math.floor(((percentage - 40) / 10) * 10);
  } else {
    // 0-39%: QI Acima da Média Baixa (85-89) - Sempre otimista!
    iqScore = 85 + Math.floor((percentage / 40) * 5);
    percentile = 15 + Math.floor((percentage / 40) * 15);
  }
  
  // Ajuste baseado no tempo de resposta (se fornecido)
  // Tempo ideal: ~20 segundos por questão (600s / 30 questões)
  if (averageAnswerTime !== undefined && averageAnswerTime > 0) {
    let timeAdjustment = 0;
    
    if (averageAnswerTime < 10) {
      // Muito rápido (< 10s): indica conhecimento sólido ou raciocínio muito rápido
      // Bônus de até +5 pontos
      timeAdjustment = Math.min(5, (10 - averageAnswerTime) * 0.5);
    } else if (averageAnswerTime < 20) {
      // Rápido (10-20s): bom tempo de resposta
      // Bônus de até +3 pontos
      timeAdjustment = Math.min(3, (20 - averageAnswerTime) * 0.3);
    } else if (averageAnswerTime < 30) {
      // Normal (20-30s): tempo adequado, sem ajuste
      timeAdjustment = 0;
    } else if (averageAnswerTime < 40) {
      // Lento (30-40s): pode indicar dificuldade ou reflexão excessiva
      // Penalidade de até -2 pontos
      timeAdjustment = -Math.min(2, (averageAnswerTime - 30) * 0.2);
    } else {
      // Muito lento (> 40s): indica dificuldade significativa
      // Penalidade de até -5 pontos
      timeAdjustment = -Math.min(5, 2 + (averageAnswerTime - 40) * 0.3);
    }
    
    // Aplicar ajuste ao QI
    iqScore = Math.round(iqScore + timeAdjustment);
  }
  
  // Garantir limites razoáveis
  iqScore = Math.max(85, Math.min(145, iqScore));
  percentile = Math.max(15, Math.min(99, percentile));
  
  return {
    score,
    totalQuestions,
    iqScore,
    percentile
  };
};

/**
 * Comparação com celebridades - sempre positiva e motivadora
 */
export const getCelebrityComparison = (iqScore: number): string => {
  if (iqScore >= 140) return "Albert Einstein";
  if (iqScore >= 135) return "Stephen Hawking";
  if (iqScore >= 130) return "Elon Musk";
  if (iqScore >= 125) return "Bill Gates";
  if (iqScore >= 120) return "Emma Watson";
  if (iqScore >= 115) return "Will Smith";
  if (iqScore >= 110) return "Tom Cruise";
  if (iqScore >= 105) return "Brad Pitt";
  if (iqScore >= 100) return "Jennifer Aniston";
  if (iqScore >= 95) return "Shakira";
  if (iqScore >= 90) return "pessoas bem-sucedidas";
  return "pessoas determinadas"; // Sempre positivo!
};

/**
 * Força cognitiva dominante - sempre destacando pontos positivos
 */
export const getCognitiveStrength = (iqScore: number): string => {
  if (iqScore >= 130) return "Raciocínio Lógico Excepcional e Pensamento Estratégico";
  if (iqScore >= 120) return "Pensamento Analítico Avançado e Resolução Criativa de Problemas";
  if (iqScore >= 110) return "Resolução de Problemas Complexos e Pensamento Crítico";
  if (iqScore >= 100) return "Compreensão Verbal e Numérica com Boa Capacidade Analítica";
  if (iqScore >= 90) return "Raciocínio Prático e Versatilidade Cognitiva";
  return "Pensamento Estruturado com Grande Potencial de Desenvolvimento"; // Sempre positivo!
};

/**
 * Mensagem motivacional personalizada baseada no QI
 */
export const getMotivationalMessage = (iqScore: number): string => {
  if (iqScore >= 130) {
    return "Você possui uma inteligência excepcional! Sua capacidade de raciocínio está entre as mais altas da população. Continue desafiando sua mente!";
  }
  if (iqScore >= 120) {
    return "Parabéns! Você está acima da média com uma inteligência superior. Suas habilidades cognitivas são notáveis e podem levá-lo longe!";
  }
  if (iqScore >= 110) {
    return "Excelente resultado! Você demonstra inteligência acima da média com grande potencial. Continue desenvolvendo suas habilidades!";
  }
  if (iqScore >= 100) {
    return "Ótimo desempenho! Você está na média ou acima, o que é um excelente resultado. Com dedicação, pode alcançar ainda mais!";
  }
  if (iqScore >= 90) {
    return "Bom resultado! Você tem uma base sólida e muito potencial para crescimento. Com prática e dedicação, pode melhorar significativamente!";
  }
  return "Você tem um potencial único! A inteligência pode ser desenvolvida, e com as estratégias certas, você pode alcançar resultados incríveis. Continue praticando!";
};
