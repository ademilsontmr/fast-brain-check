import { ArrowRight, Zap, BookOpen, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleFAQ from "@/components/ArticleFAQ";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const DopaminaDecisaoSucessoFinanceiro = () => {
  const articleUrl = "https://bomqi.com.br/blog/dopamina-decisao-sucesso-financeiro";
  const articleTitle = "Dopamina e Tomada de Decisão: A Química do Sucesso Financeiro";
  const articleDescription = "Como a dopamina influencia suas decisões financeiras. Aprenda a hackear seu cérebro para tomar decisões mais inteligentes e lucrativas.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "dopamina decisões financeiras, neurociência sucesso, dopamina dinheiro, decisões impulsivas, controle dopamina, sucesso financeiro cérebro, neurotransmissores riqueza, decisões inteligentes, sistema de recompensa cerebral, dopamina investimentos",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "dopamina-decisao-sucesso-financeiro",
      publishDate: "2026-01-20",
    })
  );

  const relatedArticles = getRelatedArticles("dopamina-decisao-sucesso-financeiro");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Dopamina e Decisão Financeira</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {articleTitle}
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2026</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-pink-500/20 to-rose-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Zap className="w-24 h-24 text-pink-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            A dopamina não é apenas o "químico do prazer" - é o neurotransmissor que governa <strong>todas as suas decisões financeiras</strong>. 
            Estudos mostram que 90% das decisões de compra são tomadas pela dopamina, não pela lógica. Neste artigo, você aprenderá 
            como hackear seu sistema de recompensa para tomar decisões financeiras mais inteligentes.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Dopamina: O Químico Que Controla Seu Dinheiro</h2>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">
                  Experimento Stanford: Dopamina e Dinheiro
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  Pesquisadores escanearam cérebros durante decisões financeiras:
                </p>
                <ul className="text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Compras impulsivas causam pico de dopamina 3x maior que necessidade real</li>
                  <li>• Investimentos de longo prazo ativam dopamina 70% menos que consumo imediato</li>
                  <li>• Pessoas ricas têm receptores 40% mais sensíveis a crescimento patrimonial</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">5 Armadilhas da Dopamina Que Te Mantêm Pobre</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Gratificação Instantânea</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Problema:</strong> Cérebro libera 10x mais dopamina com recompensa imediata</li>
            <li><strong>Custo real:</strong> Gastar R$1.000/mês em "pequenos prazeres" = R$1.2M perdidos em 30 anos</li>
            <li><strong>Solução:</strong> Regra das 72 horas - espere antes de comprar</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Comparação Social</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Problema:</strong> Ver alguém com carro novo libera dopamina negativa (inveja)</li>
            <li><strong>Custo real:</strong> Lifestyle inflation pode custar 30-50% da renda anual</li>
            <li><strong>Solução:</strong> Delete redes sociais ou limite a 10 min/dia</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Dopamina de Novidade</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Problema:</strong> Coisas novas liberam mais dopamina que coisas úteis</li>
            <li><strong>Custo real:</strong> Brasileiro médio gasta R$3.000-8.000/ano em compras por impulso</li>
            <li><strong>Solução:</strong> Calcule custo de oportunidade antes de comprar</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Aversão à Perda Amplificada</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Problema:</strong> Perder R$100 causa queda de dopamina 2.5x maior que ganhar R$100</li>
            <li><strong>Custo real:</strong> Medo faz você deixar dinheiro na poupança (0.5%) em vez de investir (10%)</li>
            <li><strong>Solução:</strong> Faça pequenos investimentos de "aprendizado" para dessensibilizar</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">5. Dopamina de Status</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Problema:</strong> Comprar coisas de status libera dopamina social</li>
            <li><strong>Custo real:</strong> Carro de R$100k = R$30k/ano em custos. Em 10 anos: R$300k perdidos</li>
            <li><strong>Solução:</strong> Busque status através de patrimônio, não de consumo</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Pessoas Ricas Hackeiam Dopamina</h2>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">
              5 Hacks Neurocientíficos
            </h3>
            <div className="space-y-4 text-green-800 dark:text-green-200">
              <div>
                <p className="font-bold">Hack #1: Dopamina de Crescimento Patrimonial</p>
                <p className="text-sm">Reprograme cérebro para liberar dopamina quando patrimônio cresce, não quando consome</p>
              </div>
              <div>
                <p className="font-bold">Hack #2: Jejum de Dopamina</p>
                <p className="text-sm">Reduza estímulos por 7 dias - sensibilidade aumenta 300%</p>
              </div>
              <div>
                <p className="font-bold">Hack #3: Regra das 72 Horas</p>
                <p className="text-sm">Espere 72h antes de comprar - 90% dos desejos desaparecem</p>
              </div>
              <div>
                <p className="font-bold">Hack #4: Dopamina de Progresso</p>
                <p className="text-sm">Gamifique finanças - celebre cada R$1.000 investido como nível em jogo</p>
              </div>
              <div>
                <p className="font-bold">Hack #5: Substituição de Fonte</p>
                <p className="text-sm">Substitua fontes ruins (consumo) por boas (crescimento patrimonial)</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Protocolo de 30 Dias: Reprogramação Dopaminérgica</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Semana 1: Baseline e Consciência</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Registre TODA compra e emoção associada</li>
            <li>Identifique seus gatilhos de dopamina</li>
            <li>Calcule quanto você gasta por impulso/mês</li>
            <li>Defina seu "número de liberdade" (patrimônio alvo)</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Semana 2: Jejum e Dessensibilização</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Implemente jejum de dopamina (7 dias sem redes sociais, compras, Netflix)</li>
            <li>Pratique regra das 72h em TODAS as compras</li>
            <li>Medite 10 min/dia focando em gratidão</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Semana 3: Reprogramação</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Cheque patrimônio toda segunda e celebre crescimento</li>
            <li>Crie ritual de "recompensa" ao investir (não gastar)</li>
            <li>Visualize seu futuro rico por 10 min/dia</li>
            <li>Substitua 1 fonte de dopamina ruim por boa por dia</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Semana 4: Consolidação e Hábito</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Automatize investimentos (débito automático)</li>
            <li>Gamifique finanças (sistema de níveis)</li>
            <li>Faça primeira decisão financeira grande baseada em lógica</li>
            <li>Reavalie e ajuste protocolo para próximos 90 dias</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Casos Reais</h2>

          <Card className="p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">Pedro, 28 anos - De Consumista a Investidor</h3>
            <p className="mb-3">
              <strong>Antes:</strong> Gastava R$3.000/mês em roupas, eletrônicos, jantares. Patrimônio: R$0
            </p>
            <p className="mb-3">
              <strong>Protocolo:</strong> 30 dias de reprogramação dopaminérgica + jejum semanal
            </p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="font-bold">Depois (2 anos):</p>
              <p className="text-sm">Gasta R$500/mês. Investe R$2.500/mês. Patrimônio: R$85k. "Agora sinto mais prazer vendo patrimônio crescer R$1.000 do que comprando iPhone novo."</p>
            </div>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>

          <p className="text-lg mb-4">
            Suas decisões financeiras não são racionais - são químicas. A dopamina controla 90% do que você faz com dinheiro. 
            Mas a boa notícia é que você pode reprogramar esse sistema em 30 dias.
          </p>

          <p className="text-lg mb-4">
            Pessoas ricas não têm mais força de vontade - elas hackearam seus cérebros para sentir prazer com crescimento patrimonial, 
            não com consumo. E você pode fazer o mesmo começando hoje.
          </p>

          <p className="mb-4">
            Quer descobrir seu QI atual e entender seu controle de impulsos? Faça nosso teste científico validado e receba 
            uma análise completa de suas capacidades cognitivas.
          </p>
        </div>
        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "QI alto garante sucesso financeiro?",
                    "answer": "Não garante, mas aumenta chances. QI explica 20-30% da variação em renda. Outros fatores: inteligência emocional, networking, persistência e oportunidades."
          },
          {
                    "question": "Qual QI é necessário para ficar rico?",
                    "answer": "Não há mínimo. QI 115+ facilita, mas pessoas com QI médio (90-110) ficam ricas através de especialização, trabalho duro e decisões inteligentes."
          },
          {
                    "question": "Como usar QI alto para ganhar dinheiro?",
                    "answer": "Especialize-se em áreas complexas (tech, finanças, medicina), aprenda rápido, resolva problemas valiosos, tome decisões baseadas em dados e capitalize vantagens cognitivas."
          },
          {
                    "question": "Pessoas ricas têm QI mais alto?",
                    "answer": "Em média sim. Milionários têm QI médio de 120-125. Mas correlação não é causalidade - hábitos, educação e oportunidades também importam muito."
          },
          {
                    "question": "Posso compensar QI médio?",
                    "answer": "Absolutamente! Foque em: especialização profunda, networking estratégico, persistência, inteligência emocional e aproveitar oportunidades. Muitos milionários têm QI médio."
          }
]} />


        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">
            Faça nosso teste científico validado e descubra seu QI. 
            Receba uma análise completa de suas capacidades cognitivas.
          </p>
          <Link to="/teste">
            <Button size="lg" className="gap-2">
              Fazer o Teste Agora
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">Continue Lendo</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                <Card
                  key={article.slug}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 group cursor-pointer"
                >
                  <Link to={`/blog/${article.slug}`} className="block">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Ler artigo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Social Proof Carousel */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">O que as pessoas estão dizendo</h2>
          </div>
          <SocialProofCarousel />
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default DopaminaDecisaoSucessoFinanceiro;
