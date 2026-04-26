-- ============================================================
-- BomQI — Setup completo do banco de dados
-- Executar no SQL Editor do Supabase (projeto do cliente)
-- ============================================================

-- ─────────────────────────────────────────────
-- 1. TABELAS
-- ─────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC(10,2) NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS payments (
  id TEXT PRIMARY KEY,
  product_id TEXT NOT NULL REFERENCES products(id),
  user_name TEXT NOT NULL,
  user_email TEXT,
  user_cpf TEXT,
  user_whatsapp TEXT,
  amount NUMERIC(10,2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'failed', 'refunded')),
  gateway TEXT NOT NULL CHECK (gateway IN ('abacate-pay')),
  gateway_payment_id TEXT,
  result_access_token TEXT NOT NULL UNIQUE,
  score INTEGER NOT NULL,
  iq_score INTEGER NOT NULL,
  percentile NUMERIC(5,2) NOT NULL,
  celebrity TEXT,
  cognitive_strength TEXT,
  average_answer_time NUMERIC(6,2),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS webhook_processing_log (
  id SERIAL PRIMARY KEY,
  event_id TEXT NOT NULL,
  gateway TEXT NOT NULL,
  processed_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (event_id, gateway)
);

-- ─────────────────────────────────────────────
-- 2. ÍNDICES
-- ─────────────────────────────────────────────

CREATE INDEX IF NOT EXISTS idx_payments_status ON payments (status);
CREATE INDEX IF NOT EXISTS idx_payments_gateway ON payments (gateway);
CREATE INDEX IF NOT EXISTS idx_payments_result_access_token ON payments (result_access_token);
CREATE INDEX IF NOT EXISTS idx_payments_gateway_payment_id ON payments (gateway_payment_id);
CREATE INDEX IF NOT EXISTS idx_payments_user_cpf ON payments (user_cpf, status, created_at);

-- ─────────────────────────────────────────────
-- 3. TRIGGER updated_at
-- ─────────────────────────────────────────────

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = '';

DROP TRIGGER IF EXISTS payments_updated_at ON payments;
CREATE TRIGGER payments_updated_at
  BEFORE UPDATE ON payments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ─────────────────────────────────────────────
-- 4. FUNÇÃO DE RANKING
-- ─────────────────────────────────────────────

CREATE OR REPLACE FUNCTION get_user_rank(p_user_id TEXT)
RETURNS JSON AS $$
DECLARE
  v_position BIGINT;
  v_total BIGINT;
BEGIN
  SELECT position INTO v_position FROM (
    SELECT id, RANK() OVER (ORDER BY iq_score DESC, created_at ASC) AS position
    FROM public.payments
    WHERE status = 'approved'
  ) ranked
  WHERE id = p_user_id;

  IF v_position IS NULL THEN
    RETURN NULL;
  END IF;

  SELECT COUNT(*) INTO v_total FROM public.payments WHERE status = 'approved';

  RETURN json_build_object('position', v_position, 'total', v_total);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

-- ─────────────────────────────────────────────
-- 5. ROW LEVEL SECURITY
-- ─────────────────────────────────────────────

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE webhook_processing_log ENABLE ROW LEVEL SECURITY;

-- products: leitura pública apenas de produtos ativos
DROP POLICY IF EXISTS "products_public_read" ON products;
CREATE POLICY "products_public_read"
  ON products FOR SELECT
  USING (is_active = true);

-- payments e webhook_processing_log: sem acesso público
-- Toda leitura/escrita passa pelas Edge Functions com service_role key (bypassa RLS)

-- ─────────────────────────────────────────────
-- 6. DADOS INICIAIS
-- ─────────────────────────────────────────────

INSERT INTO products (id, name, description, price, is_active)
VALUES ('fast_brain_check_test', 'Teste de QI Completo', 'Acesso ao resultado detalhado do teste de QI.', 29.90, true)
ON CONFLICT (id) DO NOTHING;
