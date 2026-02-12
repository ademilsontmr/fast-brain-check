import { ArrowRight, Sparkles, BookOpen, CheckCircle2, Briefcase } from "lucide-react";
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

const QIEmpresarialVsQIAcademico = () => {
  const articleUrl = "https://bomqi.com.br/blog/qi-empresarial-vs-qi-academico";
  const articleTitle = "QI Empresarial vs QI Acadêmico: Qual Gera Mais Riqueza?";
  const articleDescription = "Descubra a diferença entre inteligência acadêmica e empresarial. Por que pessoas com QI alto nem sempre ficam ricas e como desenvolver inteligência para negócios.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "QI empresarial acadêmico, inteligência negócios, QI para empreender, inteligência empresarial, QI alto não fica rico, inteligência prática empresarial, habilidades empresariais, QI acadêmico vs negócios, empreendedorismo inteligência, sucesso empresarial QI",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-empresarial-vs-qi-academico",
      publishDate: "2026-01-21",
    })
  );

  const relatedArticles = getRelatedArticles("qi-empresarial-vs-qi-academico");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>QI Empresarial vs Acadêmico</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {articleTitle}
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2026</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-amber-500/20 to-orange-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Briefcase className="w-24 h-24 text-amber-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Por que tantos <strong>PhDs ganham R$10k/mês</strong> enquanto empreendedores sem diploma faturam milhões? 
            A resposta está na diferença entre QI acadêmico e QI empresarial. Neste artigo, você descobrirá os dois tipos 
            de inteligência e como desenvolver a que realmente gera riqueza.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Acadêmico: O Que É</h2>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">
                  Características do QI Acadêmico
                </h3>
                <ul className="text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Raciocínio lógico-matemático abstrato</li>
                  <li>• Capacidade de memorização e análise</li>
                  <li>• Resolução de problemas teóricos</li>
                  <li>• Excelência em ambientes estruturados</li>
                  <li>• Medido por testes de QI tradicionais</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Profissões de QI Acadêmico Alto</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Pesquisadores:</strong> QI médio 130+ | Salário R$8k-20k/mês</li>
            <li><strong>Professores universitários:</strong> QI médio 125+ | Salário R$10k-30k/mês</li>
            <li><strong>Engenheiros:</strong> QI médio 120+ | Salário R$8k-25k/mês</li>
            <li><strong>Médicos:</strong> QI médio 120+ | Salário R$15k-50k/mês</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Empresarial: O Que É</h2>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">
                  Características do QI Empresarial
                </h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1">
                  <li>• Inteligência social e persuasão</li>
                  <li>• Identificação de oportunidades</li>
                  <li>• Tolerância ao risco calculado</li>
                  <li>• Execução rápida e adaptação</li>
                  <li>• Não medido por testes tradicionais</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Profissões de QI Empresarial Alto</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Empreendedores:</strong> QI variável | Renda R$0-ilimitado (média R$50k-500k/mês)</li>
            <li><strong>Vendedores top:</strong> QI médio 110+ | Renda R$20k-200k/mês</li>
            <li><strong>Investidores:</strong> QI médio 115+ | Renda R$30k-1M+/mês</li>
            <li><strong>CEOs:</strong> QI médio 120+ | Salário R$50k-500k/mês</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por Que QI Acadêmico Não Garante Riqueza</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Foco em Conhecimento, Não em Aplicação</h3>
          <p className="mb-4">
            Pessoas com QI acadêmico alto são excelentes em <strong>absorver e analisar informação</strong>, 
            mas frequentemente falham em transformar conhecimento em dinheiro. Elas sabem muito, mas não sabem vender.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Aversão ao Risco</h3>
          <p className="mb-4">
            QI acadêmico alto está correlacionado com <strong>maior aversão ao risco</strong>. Essas pessoas preferem 
            segurança (emprego CLT) a oportunidades de alto retorno (empreendedorismo).
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Paralisia por Análise</h3>
          <p className="mb-4">
            Pessoas muito inteligentes academicamente tendem a <strong>analisar demais e executar de menos</strong>. 
            Enquanto planejam o negócio perfeito, empreendedores com QI empresarial já estão faturando.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Desenvolver QI Empresarial</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Protocolo de 90 Dias</h3>

          <h4 className="text-xl font-bold mt-6 mb-3">Mês 1: Identificação de Oportunidades</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Identifique 10 problemas que pessoas pagariam para resolver</li>
            <li>Valide 3 ideias conversando com 20 potenciais clientes cada</li>
            <li>Escolha 1 ideia e crie MVP (produto mínimo viável) em 2 semanas</li>
            <li>Meta: Fazer primeira venda em 30 dias</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Mês 2: Execução e Vendas</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Faça 100 contatos de vendas (cold calls, emails, DMs)</li>
            <li>Aprenda a lidar com rejeição (95% dirão não)</li>
            <li>Itere produto baseado em feedback real</li>
            <li>Meta: R$5k-10k em vendas</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Mês 3: Escala e Sistemas</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Automatize processos repetitivos</li>
            <li>Contrate primeiro funcionário ou freelancer</li>
            <li>Crie funil de vendas escalável</li>
            <li>Meta: R$20k-30k em vendas</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Casos Reais: QI Acadêmico vs Empresarial</h2>

          <Card className="p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">Carlos, PhD em Física - QI 145</h3>
            <p className="mb-3">
              <strong>QI Acadêmico:</strong> Extremamente alto. Publicou 30 papers, professor titular.
            </p>
            <p className="mb-3">
              <strong>QI Empresarial:</strong> Baixo. Nunca tentou empreender, aversão ao risco.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="font-bold">Resultado:</p>
              <p className="text-sm">Salário R$18k/mês aos 50 anos. Patrimônio R$800k.</p>
            </div>
          </Card>

          <Card className="p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">João, Ensino Médio - QI 105</h3>
            <p className="mb-3">
              <strong>QI Acadêmico:</strong> Médio. Não gostava de estudar, abandonou faculdade.
            </p>
            <p className="mb-3">
              <strong>QI Empresarial:</strong> Alto. Identificou oportunidade em manutenção de ar-condicionado.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="font-bold">Resultado:</p>
              <p className="text-sm">Empresa com 15 funcionários, faturamento R$150k/mês. Patrimônio R$3.2M aos 40 anos.</p>
            </div>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estratégia Híbrida: Combine Ambos</h2>

          <p className="text-lg mb-4">
            A combinação ideal é <strong>QI acadêmico alto + QI empresarial desenvolvido</strong>. Isso permite:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Identificar oportunidades complexas que outros não veem</li>
            <li>Executar rapidamente sem paralisia por análise</li>
            <li>Criar produtos/serviços tecnicamente superiores</li>
            <li>Escalar negócios com sistemas inteligentes</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>

          <p className="text-lg mb-4">
            QI acadêmico alto é uma vantagem, mas não garante riqueza. QI empresarial - capacidade de identificar 
            oportunidades, executar rapidamente e lidar com incerteza - é o que realmente gera patrimônio.
          </p>

          <p className="text-lg mb-4">
            A boa notícia? QI empresarial pode ser desenvolvido através de prática deliberada. Comece pequeno, 
            execute rápido, aprenda com erros. Em 90 dias você terá mais QI empresarial que 90% das pessoas.
          </p>

          <p className="mb-4">
            Quer descobrir seu QI acadêmico atual? Faça nosso teste científico validado e descubra seu potencial.
          </p>
        </div>
        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "QI Empresarial vs QI Acadêmico?",
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

export default QIEmpresarialVsQIAcademico;
