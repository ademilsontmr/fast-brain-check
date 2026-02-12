import { ArrowRight, BookOpen, CheckCircle2, Sparkles, Target } from "lucide-react";
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

const InteligenciasMultiplasMonetizar = () => {
  const articleUrl = "https://bomqi.com.br/blog/inteligencias-multiplas-monetizar";
  const articleTitle = "Inteligências Múltiplas: Como Identificar e Monetizar Seus Talentos";
  const articleDescription = "Descubra suas inteligências dominantes e aprenda estratégias práticas para transformá-las em renda. Guia completo com exemplos reais de monetização.";

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
      slug: "inteligencias-multiplas-monetizar",
      publishDate: "2026-01-21",
    })
  );

  const relatedArticles = getRelatedArticles("inteligencias-multiplas-monetizar");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Inteligências Múltiplas</span>
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
            Você não tem apenas um tipo de inteligência - você tem <strong>múltiplas inteligências</strong> que podem ser monetizadas. 
            Neste artigo, descubra as 8 inteligências de Howard Gardner, identifique suas dominantes e aprenda estratégias práticas 
            para transformá-las em renda de R$5k a R$100k+/mês.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">As 8 Inteligências Múltiplas</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">1. Lógico-Matemática</h3>
              <p className="text-sm mb-3">Raciocínio lógico, números, padrões</p>
              <p className="font-bold text-primary">Potencial: R$10k-80k/mês</p>
              <p className="text-sm">Programação, engenharia, análise de dados</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">2. Linguística</h3>
              <p className="text-sm mb-3">Palavras, escrita, comunicação</p>
              <p className="font-bold text-primary">Potencial: R$5k-50k/mês</p>
              <p className="text-sm">Copywriting, jornalismo, advocacia</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">3. Espacial</h3>
              <p className="text-sm mb-3">Visualização, design, imagens</p>
              <p className="font-bold text-primary">Potencial: R$8k-100k/mês</p>
              <p className="text-sm">Design, arquitetura, animação 3D</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">4. Corporal-Cinestésica</h3>
              <p className="text-sm mb-3">Movimento, coordenação física</p>
              <p className="font-bold text-primary">Potencial: R$5k-200k/mês</p>
              <p className="text-sm">Personal trainer, fisioterapia, atleta</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">5. Musical</h3>
              <p className="text-sm mb-3">Ritmo, melodia, som</p>
              <p className="font-bold text-primary">Potencial: R$3k-500k/mês</p>
              <p className="text-sm">Produtor musical, professor, artista</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">6. Interpessoal</h3>
              <p className="text-sm mb-3">Relacionamentos, empatia</p>
              <p className="font-bold text-primary">Potencial: R$10k-150k/mês</p>
              <p className="text-sm">Vendas, coaching, RH, liderança</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">7. Intrapessoal</h3>
              <p className="text-sm mb-3">Autoconhecimento, reflexão</p>
              <p className="font-bold text-primary">Potencial: R$8k-80k/mês</p>
              <p className="text-sm">Psicologia, filosofia, escrita</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">8. Naturalista</h3>
              <p className="text-sm mb-3">Natureza, padrões ambientais</p>
              <p className="font-bold text-primary">Potencial: R$6k-40k/mês</p>
              <p className="text-sm">Biologia, veterinária, agricultura</p>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Identificar Suas Inteligências Dominantes</h2>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-100">
              Teste Rápido (5 minutos)
            </h3>
            <p className="text-blue-800 dark:text-blue-200 mb-4">
              Para cada inteligência, dê nota de 1-10:
            </p>
            <ul className="text-blue-800 dark:text-blue-200 space-y-2">
              <li>• Você faz isso naturalmente sem esforço?</li>
              <li>• Pessoas te elogiam nessa área?</li>
              <li>• Você aprende rápido nesse domínio?</li>
              <li>• Você se sente energizado fazendo isso?</li>
            </ul>
            <p className="text-blue-800 dark:text-blue-200 mt-4">
              <strong>Suas top 2-3 inteligências com maior pontuação são suas dominantes.</strong>
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estratégias de Monetização Por Inteligência</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Lógico-Matemática: R$10k-80k/mês</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Programação:</strong> Freelance R$100-300/hora | Emprego R$15k-50k/mês</li>
            <li><strong>Análise de dados:</strong> Consultoria R$200-500/hora</li>
            <li><strong>Engenharia:</strong> CLT R$12k-40k/mês | Consultoria R$300-800/hora</li>
            <li><strong>Finanças:</strong> Trader, analista, CFO R$20k-80k/mês</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Linguística: R$5k-50k/mês</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Copywriting:</strong> Freelance R$2k-20k por projeto</li>
            <li><strong>Conteúdo:</strong> Blog, YouTube, podcast R$5k-50k/mês</li>
            <li><strong>Livros:</strong> Royalties R$2k-100k/mês (variável)</li>
            <li><strong>Tradução:</strong> R$0.20-0.50 por palavra</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Espacial: R$8k-100k/mês</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Design gráfico:</strong> Freelance R$100-400/hora</li>
            <li><strong>UI/UX:</strong> CLT R$10k-35k/mês | Freelance R$150-500/hora</li>
            <li><strong>Arquitetura:</strong> Projetos R$5k-50k cada</li>
            <li><strong>Animação 3D:</strong> Freelance R$200-800/hora</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Interpessoal: R$10k-150k/mês</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Vendas B2B:</strong> Comissões R$15k-150k/mês</li>
            <li><strong>Coaching:</strong> R$500-5k por sessão</li>
            <li><strong>Consultoria RH:</strong> R$300-1k/hora</li>
            <li><strong>Liderança:</strong> CEO, diretor R$30k-200k/mês</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Plano de Ação: 90 Dias Para Monetizar</h2>

          <h4 className="text-xl font-bold mt-6 mb-3">Mês 1: Identificação e Validação</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Identifique suas top 2 inteligências dominantes</li>
            <li>Pesquise 10 formas de monetização para cada</li>
            <li>Escolha 1 caminho com melhor fit (paixão + mercado)</li>
            <li>Valide com 10 conversas com profissionais da área</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Mês 2: Desenvolvimento e Portfolio</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Faça curso/certificação relevante</li>
            <li>Crie 3-5 projetos para portfolio</li>
            <li>Ofereça serviço grátis para 2-3 clientes (testemunhos)</li>
            <li>Monte presença online (LinkedIn, site, Instagram)</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Mês 3: Monetização e Escala</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Faça 50 contatos de prospecção</li>
            <li>Feche primeiros 3-5 clientes pagantes</li>
            <li>Meta: R$5k-10k no primeiro mês</li>
            <li>Sistematize processo para escalar</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Casos Reais</h2>

          <Card className="p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">Mariana - Inteligência Espacial</h3>
            <p className="mb-3">
              <strong>Descoberta:</strong> Sempre foi boa em visualizar e desenhar.
            </p>
            <p className="mb-3">
              <strong>Ação:</strong> Fez curso de UI/UX design, criou portfolio em 60 dias.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="font-bold">Resultado:</p>
              <p className="text-sm">Freelancer ganhando R$25k/mês após 6 meses. "Finalmente monetizei algo que sempre fiz naturalmente."</p>
            </div>
          </Card>

          <Card className="p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">Carlos - Inteligência Interpessoal</h3>
            <p className="mb-3">
              <strong>Descoberta:</strong> Sempre foi o "conector" do grupo.
            </p>
            <p className="mb-3">
              <strong>Ação:</strong> Virou corretor de imóveis de alto padrão.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="font-bold">Resultado:</p>
              <p className="text-sm">Comissões de R$80k-150k/mês. "Transformei minha habilidade social em renda de 6 dígitos."</p>
            </div>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>

          <p className="text-lg mb-4">
            Você não precisa ser bom em tudo - precisa identificar suas inteligências dominantes e monetizá-las estrategicamente. 
            Cada tipo de inteligência tem caminhos claros para gerar R$10k-100k+/mês.
          </p>

          <p className="text-lg mb-4">
            Comece hoje: identifique suas top 2 inteligências, escolha 1 caminho de monetização e execute o plano de 90 dias. 
            Em 6 meses você estará ganhando dinheiro fazendo o que faz naturalmente.
          </p>

          <p className="mb-4">
            Quer descobrir seu QI e entender melhor suas capacidades? Faça nosso teste científico validado.
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

export default InteligenciasMultiplasMonetizar;
