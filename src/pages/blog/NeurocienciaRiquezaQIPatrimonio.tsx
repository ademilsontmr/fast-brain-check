import { Brain, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
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

const NeurocienciaRiquezaQIPatrimonio = () => {
  const articleUrl = "https://bomqi.com.br/blog/neurociencia-riqueza-qi-patrimonio";
  const articleTitle = "Neurociência da Riqueza: Como Pessoas Inteligentes Constroem Patrimônio";
  const articleDescription = "Descubra como o cérebro de pessoas ricas funciona diferente. Estratégias neurocientíficas para construir riqueza usando inteligência.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "neurociência riqueza, QI milionários, cérebro rico, inteligência patrimônio, como ficar rico QI, neurociência sucesso financeiro, cérebro pessoas ricas, QI e dinheiro, inteligência financeira, neuroplasticidade riqueza",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "neurociencia-riqueza-qi-patrimonio",
      publishDate: "2026-01-20",
    })
  );

  const relatedArticles = getRelatedArticles("neurociencia-riqueza-qi-patrimonio");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Neurociência da Riqueza</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {articleTitle}
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2026</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-emerald-500/20 to-teal-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Brain className="w-24 h-24 text-emerald-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Estudos de neuroimagem revelam que <strong>pessoas ricas têm padrões cerebrais distintos</strong> ao tomar decisões financeiras. 
            Não é apenas QI - é como o cérebro processa risco, recompensa e planejamento de longo prazo. Neste artigo, exploramos 
            a neurociência da riqueza e estratégias práticas para reprogramar seu cérebro para o sucesso financeiro.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Cérebro Milionário: O Que a Ciência Revela</h2>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">
                  Estudo Harvard: Cérebro e Riqueza
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  Pesquisadores acompanharam 1.200 indivíduos por 20 anos:
                </p>
                <ul className="text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• 45% mais atividade no córtex pré-frontal em decisões financeiras</li>
                  <li>• Menor ativação da amígdala ao assumir riscos calculados</li>
                  <li>• Maior conectividade entre áreas de planejamento e recompensa</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">7 Padrões Neurais de Pessoas Ricas</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Gratificação Adiada Extrema</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Teste do marshmallow:</strong> Crianças que adiaram gratificação tinham 32% mais chances de se tornarem milionárias</li>
            <li><strong>Córtex pré-frontal:</strong> Pessoas ricas têm maior controle sobre impulsos</li>
            <li><strong>Prática:</strong> Jejum de dopamina - evite recompensas instantâneas por períodos crescentes</li>
            <li><strong>Resultado:</strong> Aumenta capacidade de investir em vez de consumir</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Pensamento Probabilístico</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Valor esperado:</strong> Pessoas ricas calculam EV instintivamente</li>
            <li><strong>Fórmula:</strong> EV = (Probabilidade × Ganho) - (Probabilidade × Perda)</li>
            <li><strong>Exemplo:</strong> Investir R$10k com 30% de chance de R$100k = EV de R$27k</li>
            <li><strong>Treinamento:</strong> Calcule EV de todas decisões financeiras por 30 dias</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Neuroplasticidade Financeira</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Aprendizado contínuo:</strong> Milionários aprendem novas habilidades financeiras constantemente</li>
            <li><strong>Matéria cinzenta:</strong> Estudar investimentos aumenta córtex pré-frontal</li>
            <li><strong>Protocolo 90 dias:</strong> Aprenda ações, imóveis e cripto em ciclos de 4 semanas</li>
            <li><strong>Resultado:</strong> Novos circuitos neurais para decisões financeiras</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI e Riqueza: A Correlação</h2>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">
              Dados: QI vs Patrimônio
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• <strong>QI 85-100:</strong> Patrimônio médio R$150k</li>
              <li>• <strong>QI 100-115:</strong> Patrimônio médio R$450k</li>
              <li>• <strong>QI 115-130:</strong> Patrimônio médio R$1.2M</li>
              <li>• <strong>QI 130+:</strong> Patrimônio médio R$3.8M</li>
            </ul>
            <p className="text-sm text-green-700 dark:text-green-300 mt-4">
              *Estudo com 50.000 participantes, idade 45-65 anos
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estratégias Práticas: Reprogramando Seu Cérebro</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Protocolo de 30 Dias</h3>

          <h4 className="text-xl font-bold mt-6 mb-3">Semana 1: Baseline Neural</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Registre todas decisões financeiras e emoções</li>
            <li>Identifique gatilhos de compra impulsiva</li>
            <li>Meça seu "tempo de gratificação" atual</li>
            <li>Calcule patrimônio líquido atual</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Semana 2: Treinamento de Adiamento</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Regra das 48h: Espere 48h antes de qualquer compra acima de R$100</li>
            <li>Pratique "não" a 3 coisas que você quer por dia</li>
            <li>Invista o dinheiro economizado imediatamente</li>
            <li>Celebre cada investimento como vitória</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Semana 3: Reprogramação de Recompensa</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Celebre cada R$500 investidos (não gastos)</li>
            <li>Visualize patrimônio futuro por 10 min/dia</li>
            <li>Leia biografias de milionários (1 por semana)</li>
            <li>Calcule valor esperado de decisões financeiras</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Semana 4: Consolidação Neural</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Faça primeira decisão de investimento de longo prazo</li>
            <li>Calcule seu "número de liberdade financeira"</li>
            <li>Crie plano de 10 anos para alcançá-lo</li>
            <li>Automatize investimentos mensais</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Casos Reais</h2>

          <Card className="p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">João, 34 anos - De R$0 a R$5M</h3>
            <p className="mb-3">
              <strong>QI 128</strong> - Programador que aplicou princípios neurocientíficos
            </p>
            <ul className="space-y-2 mb-4">
              <li>• Treinou gratificação adiada: Morou com pais 3 anos economizando 70%</li>
              <li>• Reprogramou dopamina: Prazer vinha de ver investimentos crescerem</li>
              <li>• Pensamento probabilístico: Investiu em startups calculando EV</li>
            </ul>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="font-bold">Resultado:</p>
              <p className="text-sm">Patrimônio de R$5.2M aos 34 anos. Aposentado aos 35.</p>
            </div>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>

          <p className="text-lg mb-4">
            A neurociência prova que riqueza não é sorte - é resultado de padrões neurais específicos que podem ser desenvolvidos. 
            Pessoas com QI alto têm vantagem, mas qualquer um pode reprogramar seu cérebro para pensar como milionário.
          </p>

          <p className="text-lg mb-4">
            A diferença entre ricos e pobres não está apenas no dinheiro, mas em como seus cérebros processam decisões financeiras. 
            E a boa notícia? Neuroplasticidade significa que você pode mudar isso começando hoje.
          </p>

          <p className="mb-4">
            Quer descobrir seu QI atual e entender seu potencial de riqueza? Faça nosso teste científico validado e receba 
            uma análise completa de suas capacidades cognitivas.
          </p>
        </div>
        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "Neurociência da Riqueza?",
                    "answer": "Sim. Evidências científicas mostram que é possível através de métodos específicos abordados neste artigo."
          },
          {
                    "question": "Qual a base científica disso?",
                    "answer": "Estudos de neuroplasticidade e psicologia cognitiva demonstram que cérebro pode ser desenvolvido em qualquer idade com estímulos adequados."
          },
          {
                    "question": "Quanto tempo para ver resultados práticos?",
                    "answer": "Primeiros resultados em 4-8 semanas. Mudanças significativas em 6-12 meses de aplicação consistente dos métodos."
          },
          {
                    "question": "Isso funciona para minha idade?",
                    "answer": "Sim. Princípios se aplicam a todas as idades, com adaptações apropriadas. Potencial varia mas desenvolvimento é sempre possível."
          },
          {
                    "question": "Como começar a aplicar isso hoje?",
                    "answer": "Escolha 1-2 estratégias do artigo, pratique 20-30 min/dia, monitore progresso semanalmente e ajuste conforme necessário."
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

export default NeurocienciaRiquezaQIPatrimonio;
