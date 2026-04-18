-- Inserir produtos na tabela abacate-pay-products
-- Substitua 'price_...' pelos IDs de preço reais do seu painel do Stripe.

-- Relatório Básico
INSERT INTO "abacate-pay-products" (id, name, price, stripe_price_id, is_active)
VALUES ('prod_basic_01', 'Relatório Básico de QI', 29.90, 'price_BASIC_STRIPE_ID', 1);

-- Relatório Completo
INSERT INTO "abacate-pay-products" (id, name, price, stripe_price_id, is_active)
VALUES ('prod_complete_01', 'Relatório Completo de QI', 49.90, 'price_COMPLETE_STRIPE_ID', 1);
