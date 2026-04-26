const FREE_TTL = 30 * 60 * 1000;   // 30 minutos
const PREMIUM_TTL = 24 * 60 * 60 * 1000; // 24 horas

export type SessionState =
  | { type: 'none' }
  | { type: 'free'; iqScore: number }
  | { type: 'premium'; iqScore: number; token: string };

export function getSessionState(): SessionState {
  const now = Date.now();

  // Verificar resultado premium (token aprovado)
  const token = localStorage.getItem('resultAccessToken');
  const premiumAt = localStorage.getItem('premiumResultAt');
  if (token && premiumAt && now - parseInt(premiumAt) < PREMIUM_TTL) {
    const iq = parseInt(localStorage.getItem('quizScore') || '0');
    return { type: 'premium', iqScore: iq, token };
  }

  // Verificar resultado free (quiz concluído, sem pagamento)
  const score = localStorage.getItem('quizScore');
  const freeAt = localStorage.getItem('freeResultAt');
  if (score && freeAt && now - parseInt(freeAt) < FREE_TTL) {
    return { type: 'free', iqScore: parseInt(score) };
  }

  return { type: 'none' };
}

export function clearSession() {
  [
    'quizScore', 'quizTimeUsed', 'quizAverageAnswerTime', 'quizTimeUp',
    'quizGender', 'quizAgeRange',
    'resultAccessToken', 'pixBrCode', 'pixCreatedAt',
    'freeResultAt', 'premiumResultAt',
    'userName', 'userEmail', 'userTaxId', 'userWhatsApp',
  ].forEach(k => localStorage.removeItem(k));
}

export function markFreeResult() {
  localStorage.setItem('freeResultAt', Date.now().toString());
}

export function markPremiumResult() {
  localStorage.setItem('premiumResultAt', Date.now().toString());
}
