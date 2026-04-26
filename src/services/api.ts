// URL base das Edge Functions do Supabase
// Formato: https://<project-ref>.supabase.co/functions/v1
const FUNCTIONS_URL = import.meta.env.VITE_SUPABASE_FUNCTIONS_URL
  ?? 'https://obmrtcwkdfeexhpvxizp.supabase.co/functions/v1';

export interface CustomerData {
  name: string;
  email: string;
  taxId: string; // CPF
  phone: string;
}

const getQuizData = () => {
  const score = parseInt(localStorage.getItem('quizScore') || '0', 10);
  const raw = parseFloat(localStorage.getItem('quizAverageAnswerTime') || '');
  const averageAnswerTime = Number.isFinite(raw) && raw > 0 ? raw : undefined;
  return { score, averageAnswerTime };
};

const toUserData = (customer: CustomerData) => {
  const { score, averageAnswerTime } = getQuizData();
  return {
    name: customer.name,
    email: customer.email,
    cpf: customer.taxId,
    whatsapp: customer.phone,
    score,
    averageAnswerTime,
  };
};

async function callFunction(path: string, body: unknown, retries = 2) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(`${FUNCTIONS_URL}${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erro na requisição');
      return data;
    } catch (err) {
      if (attempt === retries) throw err;
      // Aguarda antes de tentar novamente (cold start)
      await new Promise(r => setTimeout(r, 1500 * (attempt + 1)));
    }
  }
}

// =========================================================================
// Pagamento
// =========================================================================

export interface PixPaymentResponse {
  paymentId: string;
  brCode: string;
  accessToken: string;
}

export const createPixPayment = async (productId: string, customer: CustomerData): Promise<PixPaymentResponse> => {
  // Sem retry — operação não-idempotente (cria pagamento no gateway)
  const data = await callFunction('/create-payment', {
    productId,
    userData: toUserData(customer),
  }, 0);
  return { paymentId: '', brCode: data.qrCode, accessToken: data.resultAccessToken };
};

// =========================================================================
// Resultado e Ranking
// =========================================================================

export interface ResultData {
  id: string;
  status: 'approved' | 'pending' | 'rejected';
  name: string;
  score?: number;
  iqScore?: number;
  celebrity?: string;
  cognitiveStrength?: string;
  percentile?: number;
  averageAnswerTime?: number;
}

export const getResultByToken = async (token: string): Promise<ResultData> => {
  const res = await fetch(`${FUNCTIONS_URL}/get-results?token=${encodeURIComponent(token)}`);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Erro ao buscar resultado');
  return data;
};

export interface RankData {
  position: number;
  total: number;
}

export const getRank = async (userId: string): Promise<RankData> => {
  const res = await fetch(`${FUNCTIONS_URL}/get-rank/${userId}`);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Erro ao buscar ranking');
  return data;
};

// Salva dados do usuário apenas no localStorage (sem chamada ao backend)
export const saveUserDataLocally = (userData: { name: string; whatsapp: string; email?: string; taxId?: string }) => {
  localStorage.setItem('userName', userData.name);
  localStorage.setItem('userWhatsApp', userData.whatsapp);
  localStorage.setItem('userEmail', userData.email || '');
  localStorage.setItem('userTaxId', userData.taxId || '');
};
