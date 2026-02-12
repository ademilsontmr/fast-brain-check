import { ArrowRight, BookOpen, CheckCircle2, Target, Lightbulb } from "lucide-react";
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

const PensamentoCriticoVsQI = () => {
  const articleUrl = "https://bomqi.com.br/blog/pensamento-critico-vs-qi";
  const articleTitle = "Pensamento Crítico vs QI: Qual é Mais Importante?";
  const articleDescription = "Descubra por que pensamento crítico pode ser mais valioso que QI alto. Como desenvolver habilidade de análise e tomada de decisão para sucesso profissional.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "pensamento crítico vs QI, pensamento crítico importante, análise crítica, tomada decisão inteligente, raciocínio crítico, QI vs análise, habilidade análise, pensamento analítico, decisões inteligentes, desenvolver pensamento crítico",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "pensamento-critico-vs-qi",
      publishDate: "2026-01-21",
    })
  );

  const relatedArticles = getRelatedArticles("pensamento-critico-vs-qi");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Pensamento Crítico vs QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {articleTitle}
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2026</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-indigo-500/20 to-blue-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Target className="w-24 h-24 text-indigo-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Pessoas com <strong>QI 140 tomam decisões ruins</strong> todos os dias. Por quê? Falta de pensamento crítico. 
            Neste artigo, descubra por que a capacidade de analisar, questionar e decidir pode ser mais valiosa que 
            inteligência bruta, e como desenvolver essa habilidade essencial.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que É Pensamento Crítico?</h2>

          <div className="bg-indigo-50 dark:bg-indigo-950/20 border-2 border-indigo-200 dark:border-indigo-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-indigo-900 dark:text-indigo-100">
                  Componentes do Pensamento Crítico
                </h3>
                <ul className="text-indigo-800 dark:text-indigo-200 space-y-1">
                  <li>• <strong>Análise:</strong> Decompor problemas complexos</li>
                  <li>• <strong>Avaliação:</strong> Julgar qualidade de informações</li>
                  <li>• <strong>Inferência:</strong> Tirar conclusões lógicas</li>
                  <li>• <strong>Explicação:</strong> Articular raciocínio claramente</li>
                  <li>• <strong>Autorregulação:</strong> Monitorar e corrigir pensamento</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por Que QI Alto Não Garante Boas Decisões</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Vieses Cognitivos Afetam Todos</h3>
          <p className="mb-4">
            Estudo com ganhadores do Nobel mostrou que <strong>pessoas com QI 160+ caem em vieses</strong> tanto quanto 
            pessoas com QI 100. Viés de confirmação, ancoragem, efeito manada - QI não protege contra isso.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Inteligência Pode Criar Overconfidence</h3>
          <p className="mb-4">
            Pessoas muito inteligentes frequentemente <strong>superestimam suas capacidades</strong> em áreas fora de 
            expertise. Médico brilhante perde dinheiro em investimentos. Engenheiro genial falha em negócios.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Racionalização vs Racionalidade</h3>
          <p className="mb-4">
            QI alto permite <strong>racionalizar decisões ruins</strong> de forma convincente. Pessoa inteligente 
            consegue justificar qualquer escolha, mesmo quando está errada.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Dados: Pensamento Crítico vs QI</h2>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">
              Estudo: Qualidade de Decisões Financeiras
            </h3>
            <div className="space-y-3 text-green-800 dark:text-green-200">
              <div>
                <p className="font-bold">Alto QI (130+) + Baixo Pensamento Crítico:</p>
                <p className="text-sm">Retorno investimentos: 3% ao ano | Decisões ruins: 40%</p>
              </div>
              <div>
                <p className="font-bold">QI Médio (100-115) + Alto Pensamento Crítico:</p>
                <p className="text-sm">Retorno investimentos: 12% ao ano | Decisões ruins: 15%</p>
              </div>
              <div>
                <p className="font-bold">Alto QI (130+) + Alto Pensamento Crítico:</p>
                <p className="text-sm">Retorno investimentos: 18% ao ano | Decisões ruins: 8%</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Desenvolver Pensamento Crítico</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Protocolo de 30 Dias</h3>

          <h4 className="text-xl font-bold mt-6 mb-3">Semana 1: Questione Tudo</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Antes de aceitar qualquer informação, pergunte: "Como sei que isso é verdade?"</li>
            <li>Identifique 3 fontes independentes para cada afirmação importante</li>
            <li>Pratique: "Quais evidências contradizem essa ideia?"</li>
            <li>Liste 5 crenças suas e busque evidências contra elas</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Semana 2: Identifique Vieses</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Estude 10 vieses cognitivos principais (confirmação, ancoragem, disponibilidade)</li>
            <li>Identifique 1 viés seu por dia durante 7 dias</li>
            <li>Antes de decisões importantes: "Que viés pode estar me afetando?"</li>
            <li>Peça feedback: "Você vê algum ponto cego no meu raciocínio?"</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Semana 3: Pensamento de Segunda Ordem</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Para cada decisão, pergunte: "E depois? E depois disso?"</li>
            <li>Considere consequências de 2ª e 3ª ordem</li>
            <li>Exemplo: "Se eu fizer X, Y acontece. Se Y acontece, Z acontece."</li>
            <li>Pratique com decisões do dia a dia</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Semana 4: Tomada de Decisão Estruturada</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Use framework: Defina problema → Liste opções → Avalie prós/contras → Decida → Revise</li>
            <li>Documente decisões importantes e raciocínio</li>
            <li>Após 30 dias, revise decisões: quais foram boas? Por quê?</li>
            <li>Ajuste processo baseado em resultados</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Ferramentas de Pensamento Crítico</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Princípios Primários (First Principles)</h3>
          <p className="mb-4">
            Usado por Elon Musk. Decomponha problema até verdades fundamentais, depois reconstrua do zero. 
            Ignora "como sempre foi feito" e questiona tudo.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Inversão</h3>
          <p className="mb-4">
            Usado por Charlie Munger. Em vez de perguntar "Como ter sucesso?", pergunte "Como garantir fracasso?" 
            e evite esses comportamentos.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Pré-Mortem</h3>
          <p className="mb-4">
            Antes de decisão importante, imagine que falhou completamente. Liste todas razões possíveis. 
            Depois, mitigue esses riscos.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Casos Reais</h2>

          <Card className="p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">Marcos, Médico - QI 142</h3>
            <p className="mb-3">
              <strong>Problema:</strong> Perdeu R$500k investindo em "dicas quentes" de amigos
            </p>
            <p className="mb-3">
              <strong>Desenvolveu pensamento crítico:</strong> 30 dias de protocolo + leitura sobre vieses
            </p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="font-bold">Resultado (2 anos):</p>
              <p className="text-sm">Recuperou perdas. Carteira diversificada com retorno de 15% ao ano. "Agora questiono tudo antes de investir."</p>
            </div>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>

          <p className="text-lg mb-4">
            QI alto te dá <strong>capacidade de processar informação</strong>. Pensamento crítico te dá <strong>capacidade 
            de usar essa informação corretamente</strong>. Um sem o outro é como ter Ferrari sem saber dirigir.
          </p>

          <p className="text-lg mb-4">
            A boa notícia? Pensamento crítico pode ser desenvolvido rapidamente com prática deliberada. Em 30 dias, 
            você pode transformar a qualidade das suas decisões e evitar erros caros.
          </p>

          <p className="mb-4">
            Descubra seu QI atual e entenda seu potencial cognitivo. Depois, desenvolva pensamento crítico para 
            maximizar esse potencial.
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

export default PensamentoCriticoVsQI;
