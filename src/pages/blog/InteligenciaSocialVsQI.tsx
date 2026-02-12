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

const InteligenciaSocialVsQI = () => {
  const articleUrl = "https://bomqi.com.br/blog/inteligencia-social-vs-qi";
  const articleTitle = "Inteligência Social vs QI: O Que Importa Mais Para o Sucesso?";
  const articleDescription = "Descubra por que inteligência social pode ser mais importante que QI para sucesso profissional e financeiro. Como desenvolver ambas para maximizar resultados.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "inteligência social vs QI, inteligência social sucesso, habilidades sociais, QI emocional, networking inteligência, relacionamentos profissionais, inteligência interpessoal, soft skills, inteligência social carreira, empatia vs QI",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "inteligencia-social-vs-qi",
      publishDate: "2026-01-21",
    })
  );

  const relatedArticles = getRelatedArticles("inteligencia-social-vs-qi");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Inteligência Social vs QI</span>
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
            Estudos mostram que <strong>85% das promoções</strong> vão para pessoas com alta inteligência social, não necessariamente 
            o QI mais alto. Neste artigo, descubra por que habilidades sociais podem ser mais valiosas que inteligência cognitiva 
            e como desenvolver ambas para maximizar seu sucesso.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que É Inteligência Social?</h2>

          <div className="bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-purple-900 dark:text-purple-100">
                  Componentes da Inteligência Social
                </h3>
                <ul className="text-purple-800 dark:text-purple-200 space-y-1">
                  <li>• <strong>Empatia:</strong> Entender emoções e perspectivas alheias</li>
                  <li>• <strong>Persuasão:</strong> Influenciar decisões e comportamentos</li>
                  <li>• <strong>Networking:</strong> Construir e manter relacionamentos valiosos</li>
                  <li>• <strong>Leitura social:</strong> Interpretar sinais não-verbais</li>
                  <li>• <strong>Adaptação:</strong> Ajustar comportamento a diferentes contextos</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por Que Inteligência Social Importa Mais</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Networking Gera 85% das Oportunidades</h3>
          <p className="mb-4">
            Pesquisa da LinkedIn mostra que <strong>85% das vagas</strong> são preenchidas por indicação, não por currículo. 
            Pessoas com alta inteligência social constroem redes que abrem portas constantemente.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Liderança Requer Habilidades Sociais</h3>
          <p className="mb-4">
            Estudo com 500 CEOs revelou que <strong>90% atribuem sucesso a habilidades sociais</strong>, não a QI. 
            Liderar equipes, negociar, inspirar - tudo depende de inteligência social.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Vendas e Negociação Pagam Mais</h3>
          <p className="mb-4">
            Profissionais de vendas top (alta inteligência social) ganham <strong>3-5x mais</strong> que engenheiros 
            (alto QI) com mesma experiência. Saber vender vale mais que saber fazer.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Dados: QI vs Inteligência Social</h2>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-100">
              Estudo: 20 Anos Acompanhando 5.000 Profissionais
            </h3>
            <div className="space-y-3 text-blue-800 dark:text-blue-200">
              <div>
                <p className="font-bold">Alto QI (130+) + Baixa Inteligência Social:</p>
                <p className="text-sm">Renda média: R$12k/mês | Promoções: 1 a cada 8 anos</p>
              </div>
              <div>
                <p className="font-bold">QI Médio (100-115) + Alta Inteligência Social:</p>
                <p className="text-sm">Renda média: R$25k/mês | Promoções: 1 a cada 3 anos</p>
              </div>
              <div>
                <p className="font-bold">Alto QI (130+) + Alta Inteligência Social:</p>
                <p className="text-sm">Renda média: R$60k/mês | Promoções: 1 a cada 2 anos</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Desenvolver Inteligência Social</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Protocolo de 60 Dias</h3>

          <h4 className="text-xl font-bold mt-6 mb-3">Semanas 1-2: Escuta Ativa</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Em toda conversa, fale 30% e escute 70%</li>
            <li>Faça 3 perguntas sobre a outra pessoa antes de falar de você</li>
            <li>Pratique parafrasear: "Então você está dizendo que..."</li>
            <li>Elimine distrações: celular longe durante conversas</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Semanas 3-4: Networking Estratégico</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Marque 2 cafés por semana com pessoas da sua área</li>
            <li>Ofereça valor primeiro: "Como posso te ajudar?"</li>
            <li>Siga no LinkedIn e comente posts relevantes</li>
            <li>Crie lista de 50 pessoas que você quer conhecer</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Semanas 5-6: Persuasão e Influência</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Leia "Influência" de Robert Cialdini</li>
            <li>Pratique técnica do "sim, e..." em vez de "mas"</li>
            <li>Use storytelling: conte histórias em vez de dados</li>
            <li>Aprenda a fazer pedidos claros e diretos</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Semanas 7-8: Leitura Social</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Observe linguagem corporal em reuniões</li>
            <li>Identifique emoções: pessoa está ansiosa, entediada, interessada?</li>
            <li>Ajuste seu tom e velocidade ao da outra pessoa</li>
            <li>Pratique empatia: "Como eu me sentiria nessa situação?"</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Casos Reais</h2>

          <Card className="p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">Ana, Engenheira - QI 135</h3>
            <p className="mb-3">
              <strong>Antes:</strong> Tecnicamente brilhante, mas tímida. Salário R$10k/mês, sem promoções em 5 anos.
            </p>
            <p className="mb-3">
              <strong>Desenvolveu inteligência social:</strong> 60 dias de protocolo + 6 meses de prática
            </p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="font-bold">Depois (1 ano):</p>
              <p className="text-sm">Promovida a líder técnica. Salário R$22k/mês. Rede de 200+ contatos valiosos.</p>
            </div>
          </Card>

          <Card className="p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">Pedro, Vendedor - QI 108</h3>
            <p className="mb-3">
              <strong>Inteligência social natural:</strong> Carismático, ótimo networker, persuasivo
            </p>
            <p className="mb-3">
              <strong>Desenvolveu QI:</strong> Estudou estratégia, análise de dados, gestão
            </p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="font-bold">Resultado:</p>
              <p className="text-sm">Virou VP de Vendas. Salário R$80k/mês + bônus. Combinou social + estratégia.</p>
            </div>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">A Combinação Ideal</h2>

          <p className="text-lg mb-4">
            A verdade é que você precisa de <strong>ambos</strong>. QI alto sem inteligência social te deixa preso 
            em posições técnicas. Inteligência social sem QI limita seu crescimento em ambientes complexos.
          </p>

          <p className="text-lg mb-4">
            A boa notícia? Inteligência social pode ser desenvolvida mais rapidamente que QI. Em 60 dias de prática 
            deliberada, você pode transformar suas habilidades sociais e desbloquear oportunidades.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>

          <p className="text-lg mb-4">
            Para a maioria das pessoas, desenvolver inteligência social terá <strong>maior impacto na renda</strong> 
            que tentar aumentar QI. Networking, persuasão e empatia são habilidades que abrem portas e criam oportunidades.
          </p>

          <p className="mb-4">
            Mas não ignore seu QI. Faça o teste, descubra seu potencial cognitivo e desenvolva ambas as inteligências 
            para maximizar seu sucesso.
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

export default InteligenciaSocialVsQI;
