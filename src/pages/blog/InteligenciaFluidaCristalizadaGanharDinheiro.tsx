import { ArrowRight, Sparkles, BookOpen } from "lucide-react";
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

const InteligenciaFluidaCristalizadaGanharDinheiro = () => {
  const articleUrl = "https://bomqi.com.br/blog/inteligencia-fluida-cristalizada-ganhar-dinheiro";
  const articleTitle = "Inteligência Fluida vs Cristalizada: Como Usar Ambas Para Ganhar Dinheiro";
  const articleDescription = "Entenda os dois tipos de inteligência e como aplicá-los estrategicamente para aumentar sua renda e construir riqueza.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "inteligência fluida cristalizada, tipos de inteligência, inteligência ganhar dinheiro, QI fluido, QI cristalizado, como desenvolver inteligência, inteligência para negócios, capacidade cognitiva, raciocínio lógico dinheiro, conhecimento acumulado renda",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "inteligencia-fluida-cristalizada-ganhar-dinheiro",
      publishDate: "2026-01-20",
    })
  );

  const relatedArticles = getRelatedArticles("inteligencia-fluida-cristalizada-ganhar-dinheiro");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Inteligência Fluida vs Cristalizada</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {articleTitle}
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2026</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-violet-500/20 to-purple-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Sparkles className="w-24 h-24 text-violet-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Existem <strong>dois tipos fundamentais de inteligência</strong>: fluida (raciocínio rápido) e cristalizada (conhecimento acumulado). 
            Cada uma gera dinheiro de formas diferentes. Neste artigo, você aprenderá como maximizar ambas ao longo da vida para 
            construir riqueza sustentável.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Os Dois Tipos de Inteligência</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <Sparkles className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Inteligência Fluida</h3>
              <p className="mb-4">
                Capacidade de resolver problemas novos e pensar abstratamente. É o "poder bruto" do cérebro.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Raciocínio lógico rápido</li>
                <li>• Resolução de problemas inéditos</li>
                <li>• Pico aos 20-30 anos</li>
                <li>• Declina com a idade</li>
              </ul>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6">
              <BookOpen className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Inteligência Cristalizada</h3>
              <p className="mb-4">
                Conhecimento acumulado e experiência. É a "sabedoria" que cresce com o tempo.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Conhecimento especializado</li>
                <li>• Expertise em domínios</li>
                <li>• Cresce continuamente</li>
                <li>• Mantém-se até idade avançada</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Cada Tipo Gera Dinheiro</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Inteligência Fluida = Inovação</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Tecnologia e Startups:</strong> Criar produtos inovadores - Potencial R$500k a R$50M+</li>
            <li><strong>Trading:</strong> Identificar padrões e tomar decisões rápidas - R$200k a R$10M+ anual</li>
            <li><strong>P&D:</strong> Desenvolver tecnologias patenteáveis - R$150k a R$5M+ em royalties</li>
            <li><strong>Melhor fase:</strong> 20-35 anos quando fluida está no pico</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Inteligência Cristalizada = Expertise</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Consultoria:</strong> Vender conhecimento profundo - R$300k a R$5M+ anual</li>
            <li><strong>Educação:</strong> Cursos, livros, mentorias - R$100k a R$10M+ (escalável)</li>
            <li><strong>Gestão:</strong> Liderar com experiência - R$200k a R$3M+ anual (C-level)</li>
            <li><strong>Melhor fase:</strong> 35+ anos quando experiência é valiosa</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estratégia Híbrida: Combine Ambas</h2>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">
              Modelo de Riqueza por Fase da Vida
            </h3>
            <div className="space-y-4 text-green-800 dark:text-green-200">
              <div>
                <p className="font-bold">Fase 1 (20-35): Maximize Fluida</p>
                <p className="text-sm">Crie startups, aprenda habilidades técnicas, invista agressivamente. Meta: R$1M-5M</p>
              </div>
              <div>
                <p className="font-bold">Fase 2 (35-50): Transição</p>
                <p className="text-sm">Transforme experiência em produtos, construa marca pessoal. Meta: R$500k-2M anual passivo</p>
              </div>
              <div>
                <p className="font-bold">Fase 3 (50+): Monetize Sabedoria</p>
                <p className="text-sm">Consultoria premium, board member, investidor anjo. Meta: R$10M+ patrimônio</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Plano de Ação Por Idade</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Se Você Tem 20-35 Anos</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Faça teste de QI para medir inteligência fluida (se maior que 115, você tem vantagem)</li>
            <li>Escolha carreira de alto impacto: Programação (R$10k-50k/mês), Trading (R$20k-200k/mês)</li>
            <li>Invista 20% da renda em aprendizado - ROI de 10-50x</li>
            <li>Viva com 30-50% da renda, invista o resto - Meta: R$1M em 10 anos</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Se Você Tem 35-50 Anos</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Documente sua expertise: Crie curso online, escreva livro, inicie consultoria</li>
            <li>Construa marca pessoal: LinkedIn, Twitter - Meta: 10k seguidores em 2 anos</li>
            <li>Diversifique renda: 50% salário, 30% produtos digitais, 20% investimentos</li>
            <li>Prepare aposentadoria: Meta R$3M gerando R$15k/mês passivo aos 50</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Se Você Tem 50+ Anos</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Monetize sabedoria: Consultoria premium R$5k-50k/dia</li>
            <li>Torne-se advisor/board member: R$10k-100k/mês</li>
            <li>Invista com vantagem: Use conhecimento profundo do seu setor</li>
            <li>Crie legado: Mentoria, educação, filantropia</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Casos Reais</h2>

          <Card className="p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">Elon Musk - Estratégia Híbrida Perfeita</h3>
            <p className="mb-3">
              <strong>Fase Fluida (20-35):</strong> Criou Zip2 e PayPal usando inovação tecnológica
            </p>
            <p className="mb-3">
              <strong>Fase Híbrida (35-50):</strong> Combinou expertise com inovação para Tesla e SpaceX
            </p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="font-bold">Resultado:</p>
              <p className="text-sm">Patrimônio de $200+ bilhões. Combinou ambos os tipos perfeitamente.</p>
            </div>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>

          <p className="text-lg mb-4">
            A chave para maximizar renda não é escolher entre inteligência fluida ou cristalizada - é usar ambas estrategicamente 
            ao longo da vida. Jovens devem explorar velocidade e inovação. Experientes devem monetizar sabedoria acumulada.
          </p>

          <p className="text-lg mb-4">
            Entenda onde você está, maximize esse tipo de inteligência, e prepare-se para a próxima fase. O sucesso financeiro 
            vem de saber qual inteligência usar em cada momento da vida.
          </p>

          <p className="mb-4">
            Quer descobrir seu QI atual e entender seu tipo de inteligência? Faça nosso teste científico validado e receba 
            uma análise completa de suas capacidades cognitivas.
          </p>
        </div>
        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "Inteligência Fluida vs Cristalizada?",
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

export default InteligenciaFluidaCristalizadaGanharDinheiro;
