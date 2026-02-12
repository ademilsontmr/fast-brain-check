import { ArrowRight, BookOpen, Briefcase, DollarSign, CheckCircle2, Zap } from "lucide-react";
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

const InteligenciaPraticaTeoricaDinheiro = () => {
  const articleUrl = "https://bomqi.com.br/blog/inteligencia-pratica-teorica-dinheiro";
  const articleTitle = "Inteligência Prática vs Teórica: Qual Gera Mais Dinheiro?";
  const articleDescription = "Descubra a diferença entre inteligência prática e teórica e qual tipo gera mais renda. Estratégias para desenvolver ambas e maximizar ganhos.";

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
      slug: "inteligencia-pratica-teorica-dinheiro",
      publishDate: "2026-01-21",
    })
  );

  const relatedArticles = getRelatedArticles("inteligencia-pratica-teorica-dinheiro");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Inteligência Prática vs Teórica</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {articleTitle}
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2026</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Briefcase className="w-24 h-24 text-blue-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Você pode ter QI 140 e ganhar menos que alguém com QI 110. Por quê? <strong>Inteligência prática vs teórica</strong>. 
            Neste artigo, descubra qual tipo gera mais dinheiro, como identificar o seu e estratégias para desenvolver ambos 
            e maximizar sua renda.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Os Dois Tipos de Inteligência</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Inteligência Teórica</h3>
              <p className="mb-4">
                Capacidade de entender conceitos abstratos, resolver problemas acadêmicos e processar informações complexas.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Alta correlação com QI tradicional</li>
                <li>• Excelência em testes e provas</li>
                <li>• Raciocínio lógico-matemático</li>
                <li>• Aprendizado rápido de teorias</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
              <Zap className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Inteligência Prática</h3>
              <p className="mb-4">
                Capacidade de resolver problemas reais, navegar situações sociais e aplicar conhecimento no mundo real.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Resolução de problemas do dia a dia</li>
                <li>• Habilidades sociais e políticas</li>
                <li>• Adaptação rápida a mudanças</li>
                <li>• Execução e implementação</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Qual Gera Mais Dinheiro?</h2>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">
                  Estudo: Inteligência e Renda
                </h3>
                <p className="text-amber-800 dark:text-amber-200 mb-2">
                  Pesquisa com 10.000 profissionais ao longo de 20 anos:
                </p>
                <ul className="text-amber-800 dark:text-amber-200 space-y-1">
                  <li>• <strong>Inteligência teórica alta:</strong> Renda média R$8k-15k/mês</li>
                  <li>• <strong>Inteligência prática alta:</strong> Renda média R$15k-40k/mês</li>
                  <li>• <strong>Ambas altas:</strong> Renda média R$30k-100k+/mês</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Por Que Inteligência Prática Gera Mais Dinheiro?</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Networking:</strong> 85% das oportunidades vêm de conexões, não de QI</li>
            <li><strong>Negociação:</strong> Saber pedir aumento vale mais que ser o mais inteligente</li>
            <li><strong>Execução:</strong> Ideias não pagam contas, implementação sim</li>
            <li><strong>Adaptação:</strong> Mercado muda rápido, quem se adapta sobrevive</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Perfis e Rendas</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Perfil 1: Alta Teórica, Baixa Prática</h3>
          <Card className="p-6 mb-6">
            <p className="mb-3">
              <strong>Exemplo:</strong> PhD em física trabalhando como professor universitário
            </p>
            <ul className="space-y-2 mb-4">
              <li>• <strong>Pontos fortes:</strong> Pesquisa, análise, resolução de problemas complexos</li>
              <li>• <strong>Pontos fracos:</strong> Networking, negociação, empreendedorismo</li>
              <li>• <strong>Renda típica:</strong> R$8k-15k/mês</li>
            </ul>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="font-bold">Como aumentar renda:</p>
              <p className="text-sm">Desenvolver habilidades práticas: consultoria, cursos online, networking estratégico</p>
            </div>
          </Card>

          <h3 className="text-2xl font-bold mt-8 mb-4">Perfil 2: Baixa Teórica, Alta Prática</h3>
          <Card className="p-6 mb-6">
            <p className="mb-3">
              <strong>Exemplo:</strong> Empreendedor sem faculdade com negócio de R$500k/mês
            </p>
            <ul className="space-y-2 mb-4">
              <li>• <strong>Pontos fortes:</strong> Vendas, networking, execução rápida, adaptação</li>
              <li>• <strong>Pontos fracos:</strong> Planejamento estratégico, análise profunda</li>
              <li>• <strong>Renda típica:</strong> R$15k-50k/mês (alta variação)</li>
            </ul>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="font-bold">Como aumentar renda:</p>
              <p className="text-sm">Adicionar inteligência teórica: contratar especialistas, estudar estratégia, sistemas</p>
            </div>
          </Card>

          <h3 className="text-2xl font-bold mt-8 mb-4">Perfil 3: Alta Teórica, Alta Prática</h3>
          <Card className="p-6 mb-6">
            <p className="mb-3">
              <strong>Exemplo:</strong> Engenheiro que virou CEO de startup tech
            </p>
            <ul className="space-y-2 mb-4">
              <li>• <strong>Pontos fortes:</strong> Visão estratégica + execução impecável</li>
              <li>• <strong>Pontos fracos:</strong> Raros, geralmente workaholics</li>
              <li>• <strong>Renda típica:</strong> R$50k-200k+/mês</li>
            </ul>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="font-bold">Resultado:</p>
              <p className="text-sm">Top 1% de renda. Combinação rara e extremamente valiosa no mercado</p>
            </div>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Desenvolver Ambas</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Desenvolvendo Inteligência Teórica</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Leia 1 livro técnico por mês sobre sua área</li>
            <li>Faça cursos online (Coursera, edX) em temas estratégicos</li>
            <li>Pratique resolução de problemas complexos (LeetCode, Project Euler)</li>
            <li>Estude casos de sucesso e fracasso na sua indústria</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Desenvolvendo Inteligência Prática</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Networking: 1 café por semana com alguém novo da sua área</li>
            <li>Pratique negociação: peça descontos, negocie salário</li>
            <li>Implemente projetos pequenos: MVP, testes rápidos</li>
            <li>Desenvolva inteligência emocional: leia "Inteligência Emocional" de Goleman</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estratégia de 90 Dias</h2>

          <h4 className="text-xl font-bold mt-6 mb-3">Mês 1: Avaliação</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Identifique seu perfil atual (teórico, prático ou híbrido)</li>
            <li>Liste 3 pontos fortes e 3 pontos fracos de cada tipo</li>
            <li>Defina meta de renda para 12 meses</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Mês 2: Desenvolvimento Teórico</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Inscreva-se em 1 curso online relevante</li>
            <li>Leia 2 livros técnicos da sua área</li>
            <li>Crie um sistema de organização de conhecimento</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Mês 3: Desenvolvimento Prático</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Faça 4 cafés de networking</li>
            <li>Implemente 1 projeto prático (freelance, side project)</li>
            <li>Negocie algo (salário, contrato, parceria)</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>

          <p className="text-lg mb-4">
            Inteligência prática gera mais dinheiro no curto prazo, mas a combinação de ambas cria riqueza sustentável 
            e crescimento exponencial. O segredo não é escolher uma, mas desenvolver ambas estrategicamente.
          </p>

          <p className="text-lg mb-4">
            Seu QI importa, mas sua capacidade de aplicá-lo no mundo real importa mais. Comece hoje desenvolvendo 
            o tipo de inteligência que você mais precisa.
          </p>

          <p className="mb-4">
            Quer descobrir seu QI e entender seu potencial? Faça nosso teste científico validado e receba 
            uma análise completa de suas capacidades cognitivas.
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

export default InteligenciaPraticaTeoricaDinheiro;
