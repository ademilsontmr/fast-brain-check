const API_URL = import.meta.env.VITE_API_URL || '/api';

// Interface para os dados do cliente enviados na criação do pagamento
export interface CustomerData {
  name: string;
  email: string;
  taxId: string; // CPF
  phone: string;
}

// =========================================================================
// Funções de Pagamento
// =========================================================================

export interface CardPaymentResponse {
  sessionId: string;
  url: string;
}

/**
 * Cria uma sessão de pagamento com Cartão de Crédito via Stripe.
 */
export const createCardPayment = async (productKey: string, customer: CustomerData): Promise<CardPaymentResponse> => {
  const url = `${API_URL}/create-payment/card`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productKey, customer }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Erro ao criar sessão de pagamento com cartão');
  }

  return response.json();
};


export interface PixPaymentResponse {
  paymentId: string;
  brCode: string; // O código "copia e cola" do PIX
  accessToken: string; // Token para buscar o resultado depois
}

/**
 * Cria uma cobrança PIX via Abacate Pay.
 */
export const createPixPayment = async (productKey: string, customer: CustomerData): Promise<PixPaymentResponse> => {
  const url = `${API_URL}/create-payment/pix`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productKey, customer }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Erro ao gerar cobrança PIX');
  }

  return response.json();
};


// =========================================================================
// Funções de Resultado
// =========================================================================

export interface ResultData {
  id: string; // ID do pagamento, usado para buscar o ranking
  status: 'approved' | 'pending' | 'rejected';
  name: string;
  score?: number;
  iqScore?: number;
  celebrity?: string;
  cognitiveStrength?: string;
  percentile?: number;
  averageAnswerTime?: number;
}

/**
 * Busca o resultado de um pagamento usando o token de acesso.
 */
export const getResultByToken = async (token: string): Promise<ResultData> => {
  const url = `${API_URL}/results?token=${encodeURIComponent(token)}`;
  
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Erro ao buscar resultado');
  }

  return response.json();
};


export interface RankData {
  position: number;
  total: number;
}

/**
 * Busca a posição do usuário no ranking.
 */
export const getRank = async (userId: string): Promise<RankData> => {
  const url = `${API_URL}/rank/${userId}`;
  
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Erro ao buscar ranking');
  }

  return response.json();
};


// Funções antigas que podem ser removidas ou adaptadas
// A lógica de saveUserData agora está embutida na criação do pagamento.
export const saveUserData = async (userData: any): Promise<boolean> => {
  console.warn("saveUserData está obsoleta e não faz mais chamadas de API.");
  // Salva no localStorage para ser pego na hora de criar o pagamento
  localStorage.setItem("userName", userData.name);
  localStorage.setItem("userWhatsApp", userData.whatsapp);
  localStorage.setItem("userEmail", userData.email || '');
  localStorage.setItem("userTaxId", userData.taxId || '');
  return true;
};

