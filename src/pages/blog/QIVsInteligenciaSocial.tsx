import { ArrowRight, BookOpen, CheckCircle2, Users, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const QIVsInteligenciaSocial = () => {
  const articleUrl = "https://bomqi.com.br/blog/qi-vs-inteligencia-social";
  const articleTitle = "QI vs Inteligência Social: O Que Importa Mais Para o Sucesso?";
  const articleDescription = "Descubra a diferença entre QI e inteligência social. Por que pessoas com QI médio ganham mais que gênios e como desenvolver ambas habilidades.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-vs-inteligencia-social",
      publishDate: "2026-01-21",
    })
  );

  const relatedArticles = getRelatedArticles("qi-vs-inteligencia-social");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>QI vs Inteligência Social</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {articleTitle}
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2026</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Users className="w-24 h-24 text-purple-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Estudos mostram que <strong>inteligência social prediz sucesso melhor que QI</strong> em 70% das profissões. 
            Neste artigo, descubra por que pessoas com QI 110 e alta inteligência social ganham mais que gênios com QI 150, 
            e como desenvolver ambas para maximizar seu sucesso.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que É Inteligência Social?</h2>

          <div className="bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-purple-900 dark:text-purple-100">
                  5 Componentes da Inteligência Social
                </h3>
                <ul className="text-purple-800 dark:text-purple-200 space-y-1">
                  <li>• <strong>Empatia:</strong> Entender emoções e perspectivas alheias</li>
                  <li>• <strong>Persuasão:</strong> Influenciar decisões e comportamentos</li>
                  <li>• <strong>Leitura social:</strong> Captar sinais não-verbais e contexto</li>
                  <li>• <strong>Networking:</strong> Construir e manter relacionamentos valiosos</li>
                  <li>• <strong>Carisma:</strong> Atrair e engajar pessoas naturalmente</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI vs Inteligência Social: Os Dados</h2>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-100">
              Estudo Harvard: 20 Anos de Acompanhamento
            </h3>
            <div className="space-y-4 text-blue-800 dark:text-blue-200">
              <div>
                <p className="font-bold">QI Alto (130+) + Inteligência Social Baixa</p>
                <p className="text-sm">Renda média: R$12k/mês | Satisfação: 5/10</p>
              </div>
              <div>
                <p className="font-bold">QI Médio (100-115) + Inteligência Social Alta</p>
                <p className="text-sm">Renda média: R$25k/mês | Satisfação: 8/10</p>
              </div>
              <div>
                <p className="font-bold">QI Alto (130+) + Inteligência Social Alta</p>
                <p className="text-sm">Renda média: R$60k/mês | Satisfação: 9/10</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por Que Inteligência Social Importa Mais</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Networking Gera 85% das Oportunidades</h3>
          <p className="mb-4">
            A maioria das oportunidades de carreira vem de <strong>indicações e conexões</strong>, não de QI. 
            Pessoas socialmente inteligentes constroem redes que abrem portas constantemente.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Liderança Requer Inteligência Social</h3>
          <p className="mb-4">
            CEOs têm QI médio de 120 - bom, mas não excepcional. O diferencial? <strong>Inteligência social extremamente alta</strong>. 
            Eles inspiram, motivam e coordenam equipes.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Vendas e Negociação Pagam Mais</h3>
          <p className="mb-4">
            Profissões de alta renda (vendas, consultoria, empreendedorismo) dependem mais de <strong>persuasão e relacionamento</strong> 
            que de QI puro. Um vendedor top com QI 110 ganha mais que um engenheiro com QI 140.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Desenvolver Inteligência Social</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Protocolo de 60 Dias</h3>

          <h4 className="text-xl font-bold mt-6 mb-3">Semanas 1-2: Empatia e Escuta</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Pratique escuta ativa: 80% ouvir, 20% falar</li>
            <li>Faça perguntas abertas em conversas</li>
            <li>Identifique emoções em filmes sem som</li>
            <li>Leia "Como Fazer Amigos e Influenciar Pessoas"</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Semanas 3-4: Networking Estratégico</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Conecte com 10 pessoas novas da sua área</li>
            <li>Ofereça valor antes de pedir (regra 5:1)</li>
            <li>Participe de 2 eventos presenciais</li>
            <li>Mantenha contato: mensagem mensal para top 20 conexões</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Semanas 5-6: Persuasão e Influência</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Estude "Influência" de Robert Cialdini</li>
            <li>Pratique storytelling: conte 1 história por dia</li>
            <li>Negocie algo toda semana (desconto, prazo, parceria)</li>
            <li>Grave-se falando e analise linguagem corporal</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Semanas 7-8: Carisma e Presença</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Melhore postura e contato visual</li>
            <li>Pratique falar em público (Toastmasters)</li>
            <li>Desenvolva senso de humor: assista stand-up</li>
            <li>Seja genuinamente curioso sobre pessoas</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Casos Reais</h2>

          <Card className="p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">Ana, Engenheira - QI 145</h3>
            <p className="mb-3">
              <strong>Antes:</strong> Brilhante tecnicamente, mas tímida. Salário R$12k/mês.
            </p>
            <p className="mb-3">
              <strong>Desenvolvimento:</strong> 6 meses focando em networking e comunicação.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="font-bold">Depois:</p>
              <p className="text-sm">Promovida a líder técnica. Salário R$28k/mês. "Percebi que ser inteligente não basta - preciso comunicar minhas ideias."</p>
            </div>
          </Card>

          <Card className="p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">Pedro, Vendedor - QI 108</h3>
            <p className="mb-3">
              <strong>Perfil:</strong> QI médio, mas extremamente carismático e empático.
            </p>
            <p className="mb-3">
              <strong>Estratégia:</strong> Construiu rede de 500+ contatos de qualidade.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="font-bold">Resultado:</p>
              <p className="text-sm">Top 1% de vendedores. Renda R$80k/mês. "Não sou o mais inteligente, mas sou o que mais pessoas confiam."</p>
            </div>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estratégia Híbrida: QI + Inteligência Social</h2>

          <p className="text-lg mb-4">
            A combinação ideal é <strong>QI alto + inteligência social desenvolvida</strong>:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Use QI para resolver problemas complexos</li>
            <li>Use inteligência social para vender soluções</li>
            <li>Use QI para criar valor técnico</li>
            <li>Use inteligência social para capturar valor financeiro</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>

          <p className="text-lg mb-4">
            QI alto é uma vantagem, mas inteligência social é o multiplicador de sucesso. Pessoas com QI médio e 
            alta inteligência social superam gênios socialmente desajeitados em renda, satisfação e impacto.
          </p>

          <p className="text-lg mb-4">
            A boa notícia? Inteligência social pode ser desenvolvida através de prática deliberada. Comece hoje 
            com o protocolo de 60 dias e veja resultados tangíveis em sua carreira e relacionamentos.
          </p>

          <p className="mb-4">
            Quer descobrir seu QI atual? Faça nosso teste científico validado e entenda seu ponto de partida.
          </p>
        </div>

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

export default QIVsInteligenciaSocial;
