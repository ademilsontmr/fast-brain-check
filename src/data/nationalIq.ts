/**
 * Ranking de QI médio por país — fonte principal: International IQ Test (IIT) 2025,
 * amostra online global (~1,35 milhão de participantes), compilada via World Population Review
 * (atualização out/2026): https://worldpopulationreview.com/country-rankings/average-iq-by-country
 *
 * Compilações acadêmicas clássicas (Lynn & Becker, The Intelligence of Nations, 2019)
 * estimavam o Brasil em torno de 83–87 — valores diferentes por metodologia e amostragem.
 *
 * Limitações: testes online sofrem viés de auto-seleção; QI nacional não define indivíduos.
 */

export type CountryIq = {
  rank: number;
  country: string;
  iq: number;
};

export const NATIONAL_IQ_SOURCE = {
  primary: "International IQ Test (IIT) 2025",
  primaryUrl: "https://worldpopulationreview.com/country-rankings/average-iq-by-country",
  secondary: "Lynn & Becker, The Intelligence of Nations (2019)",
  updatedLabel: "Dados IIT 2025 · atualizado out/2026",
  globalMean: 100,
  brazilIit: 95.4,
  brazilLynnApprox: "83–87",
  brazilRankIit: 91,
} as const;

/** PISA 2022 — OECD Country Note Brazil */
export const PISA_BRAZIL_2022 = {
  math: 379,
  reading: 410,
  science: 403,
  oecdMath: 472,
  oecdReading: 476,
  oecdScience: 485,
  source: "OECD PISA 2022",
  sourceUrl:
    "https://www.oecd.org/en/publications/pisa-2022-results-volume-i-and-ii-country-notes_ed6fbcc5-en/brazil_61690648-en.html",
} as const;

/**
 * Valores arredondados do IIT 2025 (World Population Review).
 * Ranks absolutos conforme a tabela IIT (não uma lista parcial renumerada).
 */
export const COUNTRY_IQ_RANKING: CountryIq[] = [
  { rank: 1, country: "Hong Kong", iq: 108 },
  { rank: 2, country: "Coreia do Sul", iq: 107 },
  { rank: 3, country: "China", iq: 106 },
  { rank: 4, country: "Macau", iq: 106 },
  { rank: 5, country: "Japão", iq: 106 },
  { rank: 6, country: "Taiwan", iq: 106 },
  { rank: 7, country: "Irã", iq: 105 },
  { rank: 8, country: "Austrália", iq: 104 },
  { rank: 9, country: "Rússia", iq: 104 },
  { rank: 10, country: "Singapura", iq: 104 },
  { rank: 11, country: "Mongólia", iq: 103 },
  { rank: 12, country: "Nova Zelândia", iq: 102 },
  { rank: 13, country: "Vietnã", iq: 102 },
  { rank: 14, country: "Espanha", iq: 102 },
  { rank: 15, country: "Chipre", iq: 102 },
  { rank: 16, country: "Canadá", iq: 102 },
  { rank: 17, country: "Reino Unido", iq: 102 },
  { rank: 18, country: "Sri Lanka", iq: 101 },
  { rank: 19, country: "Eslovênia", iq: 101 },
  { rank: 20, country: "Belarus", iq: 101 },
  { rank: 21, country: "Estados Unidos", iq: 101 },
  { rank: 22, country: "Albânia", iq: 101 },
  { rank: 23, country: "Suíça", iq: 101 },
  { rank: 24, country: "Geórgia", iq: 100 },
  { rank: 25, country: "Itália", iq: 100 },
  { rank: 26, country: "Holanda", iq: 100 },
  { rank: 27, country: "Peru", iq: 100 },
  { rank: 28, country: "Hungria", iq: 100 },
  { rank: 29, country: "Armênia", iq: 100 },
  { rank: 30, country: "França", iq: 100 },
  { rank: 31, country: "Finlândia", iq: 100 },
  { rank: 32, country: "Portugal", iq: 100 },
  { rank: 33, country: "Lituânia", iq: 100 },
  { rank: 34, country: "Tailândia", iq: 100 },
  { rank: 35, country: "Sérvia", iq: 100 },
  { rank: 36, country: "Áustria", iq: 100 },
  { rank: 37, country: "Bélgica", iq: 100 },
  { rank: 38, country: "Malta", iq: 100 },
  { rank: 39, country: "Grécia", iq: 100 },
  { rank: 40, country: "República Tcheca", iq: 99 },
  { rank: 41, country: "Alemanha", iq: 99 },
  { rank: 42, country: "Croácia", iq: 99 },
  { rank: 43, country: "Polônia", iq: 99 },
  { rank: 44, country: "Estônia", iq: 99 },
  { rank: 45, country: "Letônia", iq: 99 },
  { rank: 46, country: "Romênia", iq: 99 },
  { rank: 47, country: "Eslováquia", iq: 99 },
  { rank: 48, country: "Luxemburgo", iq: 99 },
  { rank: 49, country: "Israel", iq: 99 },
  { rank: 50, country: "Malásia", iq: 99 },
  { rank: 51, country: "Índia", iq: 98 },
  { rank: 52, country: "Noruega", iq: 98 },
  { rank: 53, country: "Suécia", iq: 98 },
  { rank: 54, country: "Irlanda", iq: 98 },
  { rank: 55, country: "Dinamarca", iq: 98 },
  { rank: 56, country: "Islândia", iq: 97 },
  { rank: 57, country: "Argentina", iq: 97 },
  { rank: 58, country: "Turquia", iq: 97 },
  { rank: 59, country: "Bulgária", iq: 97 },
  { rank: 60, country: "Chile", iq: 96 },
  { rank: 61, country: "Uruguai", iq: 96 },
  { rank: 62, country: "Filipinas", iq: 96 },
  { rank: 63, country: "Bolívia", iq: 96 },
  { rank: 64, country: "Equador", iq: 95 },
  { rank: 65, country: "Brasil", iq: 95 },
  { rank: 66, country: "Colômbia", iq: 95 },
  { rank: 67, country: "México", iq: 94 },
  { rank: 68, country: "África do Sul", iq: 94 },
  { rank: 69, country: "Costa Rica", iq: 94 },
  { rank: 70, country: "Nigéria", iq: 93 },
  { rank: 71, country: "Venezuela", iq: 93 },
  { rank: 72, country: "Paraguai", iq: 92 },
  { rank: 73, country: "Quênia", iq: 92 },
  { rank: 74, country: "Gana", iq: 91 },
  { rank: 75, country: "Guatemala", iq: 91 },
  { rank: 76, country: "Honduras", iq: 90 },
  { rank: 77, country: "El Salvador", iq: 90 },
  { rank: 78, country: "Indonésia", iq: 90 },
  { rank: 79, country: "Nicarágua", iq: 88 },
];

/** Top N para a home. */
export function getTopCountries(n: number): CountryIq[] {
  return COUNTRY_IQ_RANKING.filter((c) => c.rank <= n).slice(0, n);
}

export function getCountryByName(name: string): CountryIq | undefined {
  return COUNTRY_IQ_RANKING.find((c) => c.country.toLowerCase() === name.toLowerCase());
}

export const BRAZIL_IQ: CountryIq = getCountryByName("Brasil")!;
