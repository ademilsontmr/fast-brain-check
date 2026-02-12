import { ArrowRight, BookOpen, CheckCircle2, Zap, TrendingUp } from "lucide-react";
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

const InteligenciaAdaptativaSeculo21 = () => {
  const articleUrl = "https://bomqi.com.br/blog/inteligencia-adaptativa-seculo-21";
  const articleTitle = "Inteligência Adaptativa: A Habilidade Mais Valiosa do Século 21";
  const articleDescription = "Descubra por que capacidade de adaptação vale mais que QI alto. Como desenvolver inteligência adaptativa para prosperar em mundo em constante mudança.";

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
      slug: "inteligencia-adaptativa-seculo-21",
      publishDate: "2026-01-21",
    })
  );

  const relatedArticles = getRelatedArticles("inteligencia-adaptativa-seculo-21");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Inteligência Adaptativa</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {articleTitle}
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2026</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Zap className="w-24 h-24 text-cyan-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Em 2026, <strong>50% das profissões de 2010 não existem mais</strong>. IA está transformando tudo. Nesse cenário, 
            inteligência adaptativa - capacidade de aprender rápido e se reinventar - vale mais que QI alto. Neste artigo, 
            descubra como desenvolver essa habilidade essencial.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que É Inteligência Adaptativa?</h2>

          <div className="bg-cyan-50 dark:bg-cyan-950/20 border-2 border-cyan-200 dark:border-cyan-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-cyan-900 dark:text-cyan-100">
                  5 Componentes da Inteligência Adaptativa
                </h3>
                <ul className="text-cyan-800 dark:text-cyan-200 space-y-1">
                  <li>• <strong>Aprendizado rápido:</strong> Dominar novas habilidades em semanas</li>
                  <li>• <strong>Desaprendizado:</strong> Abandonar conhecimento obsoleto</li>
                  <li>• <strong>Resiliência:</strong> Recuperar-se rápido de mudanças</li>
                  <li>• <strong>Experimentação:</strong> Testar novas abordagens sem medo</li>
                  <li>• <strong>Antifragilidade:</strong> Ficar mais forte com volatilidade</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por Que Adaptação Vale Mais Que QI</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Mudança Acelerada</h3>
          <p className="mb-4">
            Conhecimento técnico tem <strong>meia-vida de 2-5 anos</strong>. O que você aprendeu na faculdade já está obsoleto. 
            Pessoas adaptáveis aprendem continuamente e se mantêm relevantes.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. IA Está Substituindo QI</h3>
          <p className="mb-4">
            ChatGPT tem QI estimado de 155. IA resolve problemas lógicos melhor que humanos. O diferencial? 
            <strong>Capacidade de se adaptar a contextos novos</strong> - algo que IA ainda não faz bem.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Carreiras Não-Lineares</h3>
          <p className="mb-4">
            Profissional médio terá <strong>7-10 carreiras diferentes</strong> na vida. Não dá para depender de uma especialização. 
            Adaptabilidade permite transições rápidas e lucrativas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Dados: Adaptabilidade vs QI</h2>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">
              Estudo: Sobrevivência Profissional 2010-2025
            </h3>
            <div className="space-y-4 text-green-800 dark:text-green-200">
              <div>
                <p className="font-bold">Alto QI + Baixa Adaptabilidade</p>
                <p className="text-sm">40% perderam emprego | 60% tiveram queda de renda</p>
              </div>
              <div>
                <p className="font-bold">QI Médio + Alta Adaptabilidade</p>
                <p className="text-sm">85% mantiveram/aumentaram renda | 3+ transições de carreira bem-sucedidas</p>
              </div>
              <div>
                <p className="font-bold">Alto QI + Alta Adaptabilidade</p>
                <p className="text-sm">95% prosperaram | Renda média aumentou 200%</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Desenvolver Inteligência Adaptativa</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Protocolo de 90 Dias</h3>

          <h4 className="text-xl font-bold mt-6 mb-3">Mês 1: Aprendizado Acelerado</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Aprenda 1 habilidade nova completamente diferente (ex: programação se você é designer)</li>
            <li>Use técnica Feynman: ensine o que aprendeu para alguém</li>
            <li>Meta: Nível básico funcional em 30 dias</li>
            <li>Documente processo de aprendizado</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Mês 2: Desaprendizado e Experimentação</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Identifique 3 crenças/métodos obsoletos que você usa</li>
            <li>Teste 3 abordagens completamente diferentes para tarefas rotineiras</li>
            <li>Falhe rápido: faça 10 experimentos pequenos</li>
            <li>Celebre falhas como aprendizado</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Mês 3: Antifragilidade</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Crie múltiplas fontes de renda (2-3 streams)</li>
            <li>Desenvolva habilidades transferíveis (comunicação, vendas, análise)</li>
            <li>Construa rede diversa (10+ indústrias diferentes)</li>
            <li>Pratique "stress testing": simule perda de emprego, como se adaptaria?</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Habilidades Adaptativas Mais Valiosas</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Meta-Aprendizado (Aprender a Aprender)</h3>
          <p className="mb-4">
            Capacidade de dominar qualquer habilidade rapidamente. Valor: <strong>Permite transições de carreira em 3-6 meses</strong>.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Pensamento de Primeira Ordem</h3>
          <p className="mb-4">
            Questionar tudo e reconstruir do zero. Valor: <strong>Identificar oportunidades que outros não veem</strong>.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Resiliência Emocional</h3>
          <p className="mb-4">
            Lidar com incerteza e mudança sem paralisia. Valor: <strong>Agir rápido enquanto outros hesitam</strong>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Casos Reais</h2>

          <Card className="p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">Lucas, Ex-Jornalista - QI 118</h3>
            <p className="mb-3">
              <strong>2015:</strong> Jornalista tradicional, salário R$5k/mês. Indústria em crise.
            </p>
            <p className="mb-3">
              <strong>Adaptação:</strong> Aprendeu marketing digital, depois programação, depois IA.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="font-bold">2026:</p>
              <p className="text-sm">Consultor de IA para empresas. Renda R$60k/mês. "Mudei de carreira 3 vezes em 10 anos. Cada transição me deixou mais forte."</p>
            </div>
          </Card>

          <Card className="p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">Fernanda, Ex-Contadora - QI 125</h3>
            <p className="mb-3">
              <strong>2018:</strong> Contadora tradicional. Viu automação chegando.
            </p>
            <p className="mb-3">
              <strong>Adaptação:</strong> Aprendeu análise de dados, depois consultoria estratégica.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="font-bold">2026:</p>
              <p className="text-sm">CFO de startup. Salário R$45k/mês + equity. "Não esperei ser substituída. Me reinventei antes."</p>
            </div>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>

          <p className="text-lg mb-4">
            No século 21, <strong>adaptabilidade é o novo QI</strong>. Pessoas que aprendem rápido, desaprendem o obsoleto 
            e se reinventam constantemente prosperam. Aquelas que dependem de conhecimento estático ficam para trás.
          </p>

          <p className="text-lg mb-4">
            A boa notícia? Inteligência adaptativa pode ser desenvolvida através de prática deliberada. Comece hoje com 
            o protocolo de 90 dias e prepare-se para prosperar em qualquer cenário futuro.
          </p>

          <p className="mb-4">
            Descubra seu QI atual e entenda seu ponto de partida. Depois, desenvolva inteligência adaptativa para 
            maximizar seu potencial em mundo em constante mudança.
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

export default InteligenciaAdaptativaSeculo21;
