-- Migration: Create initial tables for Abacate Pay integration
-- Created at: 2024-05-22 15:00:00

-- Tabela de Produtos
-- Armazena os produtos ou serviços que podem ser comprados.
CREATE TABLE IF NOT EXISTS "abacate-pay-products" (
  "id" TEXT PRIMARY KEY NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT,
  "price" REAL NOT NULL,
  "stripe_price_id" TEXT, -- ID do preço no Stripe, se aplicável
  "is_active" INTEGER NOT NULL DEFAULT 1, -- 1 para ativo, 0 para inativo
  "created_at" TEXT DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Pagamentos
-- Unifica os registros de pagamento do Stripe e da Abacate Pay.
CREATE TABLE IF NOT EXISTS "abacate-pay-payments" (
  "id" TEXT PRIMARY KEY NOT NULL,
  "product_id" TEXT NOT NULL,
  "user_name" TEXT NOT NULL,
  "user_email" TEXT,
  "user_cpf" TEXT,
  "user_whatsapp" TEXT,
  "amount" REAL NOT NULL,
  "status" TEXT NOT NULL CHECK("status" IN ('pending', 'approved', 'failed', 'refunded')) DEFAULT 'pending',
  "gateway" TEXT NOT NULL CHECK("gateway" IN ('stripe', 'abacate-pay')),
  "gateway_payment_id" TEXT, -- ID da transação no gateway (ex: Stripe charge ID)
  "result_access_token" TEXT NOT NULL UNIQUE, -- Token para o usuário acessar o resultado
  
  -- Dados do resultado do teste
  "score" INTEGER NOT NULL,
  "iq_score" INTEGER NOT NULL,
  "percentile" REAL NOT NULL,
  "celebrity" TEXT,
  "cognitive_strength" TEXT,
  "average_answer_time" REAL,

  "created_at" TEXT DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TEXT DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY ("product_id") REFERENCES "abacate-pay-products" ("id")
);

-- Tabela de Logs de Webhook
-- Garante a idempotência no processamento de webhooks.
CREATE TABLE IF NOT EXISTS "abacate-pay-webhook_processing_log" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "event_id" TEXT NOT NULL,
    "gateway" TEXT NOT NULL,
    "processed_at" TEXT DEFAULT CURRENT_TIMESTAMP,
    UNIQUE("event_id", "gateway")
);

-- Índices para otimizar consultas comuns
CREATE INDEX IF NOT EXISTS "idx_payments_status" ON "abacate-pay-payments" ("status");
CREATE INDEX IF NOT EXISTS "idx_payments_gateway" ON "abacate-pay-payments" ("gateway");
CREATE INDEX IF NOT EXISTS "idx_payments_result_access_token" ON "abacate-pay-payments" ("result_access_token");

-- Inserir um produto de exemplo (opcional, mas útil para testes)
INSERT OR IGNORE INTO "abacate-pay-products" (id, name, description, price, stripe_price_id, is_active)
VALUES ('prod_1', 'Teste de QI Completo', 'Acesso ao resultado detalhado do teste de QI.', 29.90, 'price_1PGW6mRpJz9zJqf7gL2g5A1L', 1);
