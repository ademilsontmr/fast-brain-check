const PREMIUM_TTL = 24 * 60 * 60 * 1000; // 24 horas

export type SessionState =
  | { type: 'none' }
  | { type: 'premium'; iqScore: number; token: string };

export function getSessionState(): SessionState {
  const now = Date.now();

  const token = localStorage.getItem('resultAccessToken');
  const premiumAt = localStorage.getItem('premiumResultAt');
  if (token && premiumAt && now - parseInt(premiumAt) < PREMIUM_TTL) {
    const iq = parseInt(localStorage.getItem('quizScore') || '0');
    return { type: 'premium', iqScore: iq, token };
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

export function markPremiumResult() {
  localStorage.setItem('premiumResultAt', Date.now().toString());
}
