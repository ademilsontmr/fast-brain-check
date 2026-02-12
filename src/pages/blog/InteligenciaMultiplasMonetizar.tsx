import { ArrowRight, BookOpen, CheckCircle2, Sparkles, DollarSign } from "lucide-react";
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

const InteligenciaMultiplasMonetizar = () => {
  const articleUrl = "https://bomqi.com.br/blog/inteligencias-multiplas-monetizar";
  const articleTitle = "Inteligências Múltiplas: Como Identificar e Monetizar Seus Talentos";
  const articleDescription = "Descubra suas inteligências dominantes segundo Howard Gardner e aprenda a transformá-las em renda. Guia prático para monetizar seus talentos naturais.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "InteligenciaMultiplasMonetizar, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior",
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

        <div className="w-full h-64 bg-gradient-to-br from-rainbow-500/20 to-violet-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Sparkles className="w-24 h-24 text-violet-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Você não precisa ter QI 140 para ficar rico. Segundo Howard Gardner, existem <strong>8 tipos de inteligência</strong> - 
            e cada uma pode gerar renda de R$10k a R$100k+/mês. Neste artigo, descubra suas inteligências dominantes e 
            como monetizá-las estrategicamente.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">As 8 Inteligências de Gardner</h2>

          <div className="space-y-6 mb-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">1. Inteligência Linguística</h3>
              <p className="mb-3">Facilidade com palavras, escrita, comunicação verbal</p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="font-bold mb-2">Como Monetizar:</p>
                <ul className="text-sm space-y-1">
                  <li>• Copywriting: R$5k-50k/mês</li>
                  <li>• Criação de conteúdo: R$8k-40k/mês</li>
                  <li>• Palestras: R$3k-20k por evento</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">2. Inteligência Lógico-Matemática</h3>
              <p className="mb-3">Raciocínio lógico, resolução de problemas, padrões</p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="font-bold mb-2">Como Monetizar:</p>
                <ul className="text-sm space-y-1">
                  <li>• Programação: R$10k-80k/mês</li>
                  <li>• Análise de dados: R$12k-60k/mês</li>
                  <li>• Consultoria financeira: R$15k-100k/mês</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">3. Inteligência Espacial</h3>
              <p className="mb-3">Visualização, design, senso estético</p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="font-bold mb-2">Como Monetizar:</p>
                <ul className="text-sm space-y-1">
                  <li>• Design gráfico: R$6k-40k/mês</li>
                  <li>• Arquitetura: R$10k-80k/mês</li>
                  <li>• UX/UI Design: R$12k-70k/mês</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">4. Inteligência Musical</h3>
              <p className="mb-3">Ritmo, melodia, composição</p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="font-bold mb-2">Como Monetizar:</p>
                <ul className="text-sm space-y-1">
                  <li>• Produção musical: R$5k-100k/mês</li>
                  <li>• Aulas de música: R$4k-20k/mês</li>
                  <li>• Trilhas sonoras: R$2k-30k por projeto</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">5. Inteligência Corporal-Cinestésica</h3>
              <p className="mb-3">Coordenação motora, habilidades físicas</p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="font-bold mb-2">Como Monetizar:</p>
                <ul className="text-sm space-y-1">
                  <li>• Personal trainer: R$6k-40k/mês</li>
                  <li>• Fisioterapia: R$10k-50k/mês</li>
                  <li>• Atleta profissional: R$10k-1M+/mês</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">6. Inteligência Interpessoal</h3>
              <p className="mb-3">Empatia, liderança, comunicação social</p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="font-bold mb-2">Como Monetizar:</p>
                <ul className="text-sm space-y-1">
                  <li>• Vendas: R$10k-200k/mês</li>
                  <li>• Coaching: R$8k-80k/mês</li>
                  <li>• RH/Recrutamento: R$8k-50k/mês</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">7. Inteligência Intrapessoal</h3>
              <p className="mb-3">Autoconhecimento, reflexão, autodisciplina</p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="font-bold mb-2">Como Monetizar:</p>
                <ul className="text-sm space-y-1">
                  <li>• Terapia/Psicologia: R$10k-60k/mês</li>
                  <li>• Mentoria: R$8k-100k/mês</li>
                  <li>• Escritor/Filósofo: R$5k-50k/mês</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">8. Inteligência Naturalista</h3>
              <p className="mb-3">Conexão com natureza, padrões naturais</p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="font-bold mb-2">Como Monetizar:</p>
                <ul className="text-sm space-y-1">
                  <li>• Biologia/Ecologia: R$8k-40k/mês</li>
                  <li>• Agricultura sustentável: R$10k-80k/mês</li>
                  <li>• Veterinária: R$10k-60k/mês</li>
                </ul>
              </div>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Identificar Suas Inteligências Dominantes</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Teste Rápido (5 minutos)</h3>
          <p className="mb-4">Para cada inteligência, dê nota de 1-10:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Você se destaca naturalmente nessa área?</li>
            <li>Você aprende rápido quando envolve essa habilidade?</li>
            <li>Você sente prazer ao usar essa inteligência?</li>
          </ul>
          <p className="mb-4">
            <strong>Suas 2-3 inteligências com maior pontuação são suas dominantes.</strong>
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estratégia de Monetização</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Passo 1: Identifique Combinações Valiosas</h3>
          <p className="mb-4">
            Combinar 2 inteligências cria vantagem competitiva única:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Linguística + Interpessoal:</strong> Vendedor top (R$50k-200k/mês)</li>
            <li><strong>Lógica + Espacial:</strong> Arquiteto de software (R$20k-100k/mês)</li>
            <li><strong>Intrapessoal + Interpessoal:</strong> Coach executivo (R$30k-150k/mês)</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Passo 2: Valide no Mercado</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Pesquise demanda: Quantas vagas existem? Quanto pagam?</li>
            <li>Converse com 10 profissionais da área</li>
            <li>Faça freelance teste por 30 dias</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Passo 3: Desenvolva e Escale</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Invista 20% da renda em aprendizado</li>
            <li>Construa portfólio/reputação</li>
            <li>Aumente preços a cada 6 meses</li>
            <li>Crie produtos escaláveis (cursos, infoprodutos)</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>

          <p className="text-lg mb-4">
            Você não precisa ser gênio em tudo. Identifique suas 2-3 inteligências dominantes, combine-as estrategicamente 
            e monetize. Essa é a fórmula para transformar talento natural em renda de R$20k-100k+/mês.
          </p>

          <p className="mb-4">
            Descubra seu QI e entenda seu potencial cognitivo. Depois, identifique suas inteligências múltiplas e 
            crie estratégia de monetização personalizada.
          </p>
        </div>
        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "Inteligências Múltiplas?",
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

export default InteligenciaMultiplasMonetizar;
