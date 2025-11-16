const API_URL = import.meta.env.VITE_API_URL || 'https://bomqi.com.br/api';

export interface UserData {
  name: string;
  whatsapp: string;
  score?: number;
  iqScore?: number;
  averageAnswerTime?: number;
}

export const saveUserData = async (userData: UserData): Promise<boolean> => {
  const url = `${API_URL}/users`;
  const payload = {
    name: userData.name,
    whatsapp: userData.whatsapp,
    score: userData.score || 0,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();

    if (!response.ok) {
      console.error('Erro ao salvar:', response.status, responseText);
      return false;
    }

    try {
      const responseData = JSON.parse(responseText);
      if (responseData.userId) {
        localStorage.setItem("userId", responseData.userId);
      }
    } catch (e) {
      // Resposta não é JSON válido
    }

    return true;
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
    return false;
  }
};

export const getRank = async (_userId: string) => {
  return { 
    position: Math.floor(Math.random() * 5000) + 1000, 
    total: 50000 
  };
};

export interface CheckoutResponse {
  sessionId: string;
  url: string;
  resultToken: string;
}

export const createCheckoutSession = async (userId: string, priceId: string, email?: string): Promise<CheckoutResponse> => {
  const url = `${API_URL}/checkout`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, priceId, email }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Erro ao criar sessão de checkout');
  }

  return response.json();
};

export interface ResultData {
  userId: string;
  name: string;
  whatsapp: string;
  score: number;
  iqScore: number;
  averageAnswerTime?: number;
  celebrity?: string;
  cognitiveStrength?: string;
  percentile?: number;
}

export const saveResult = async (token: string, resultData: ResultData): Promise<boolean> => {
  const url = `${API_URL}/results`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token, resultData }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Erro ao salvar resultado');
  }

  return true;
};

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
