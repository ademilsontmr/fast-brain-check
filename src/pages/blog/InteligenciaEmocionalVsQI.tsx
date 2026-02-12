import { ArrowRight, BookOpen, CheckCircle2, Heart, Brain } from "lucide-react";
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

const InteligenciaEmocionalVsQI = () => {
  const articleUrl = "https://bomqi.com.br/blog/inteligencia-emocional-vs-qi";
  const articleTitle = "Inteligência Emocional vs QI: Qual Determina Mais Sucesso?";
  const articleDescription = "Descubra por que inteligência emocional pode ser mais importante que QI para sucesso. Dados, estudos e como desenvolver ambas habilidades.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "inteligência emocional vs QI, QE vs QI, inteligência emocional sucesso, controle emocional, autoconhecimento, empatia, habilidades emocionais, QI emocional importante, desenvolver inteligência emocional, emoções e sucesso",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "inteligencia-emocional-vs-qi",
      publishDate: "2026-01-21",
    })
  );

  const relatedArticles = getRelatedArticles("inteligencia-emocional-vs-qi");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Inteligência Emocional vs QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {articleTitle}
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2026</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-rose-500/20 to-pink-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Heart className="w-24 h-24 text-rose-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Estudos mostram que <strong>inteligência emocional prediz 58% do sucesso profissional</strong>, enquanto QI prediz apenas 20%. 
            Neste artigo, descubra por que controlar emoções e entender pessoas pode ser mais valioso que raciocínio lógico, 
            e como desenvolver ambas habilidades.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que É Inteligência Emocional?</h2>

          <div className="bg-rose-50 dark:bg-rose-950/20 border-2 border-rose-200 dark:border-rose-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-rose-900 dark:text-rose-100">
                  5 Componentes da Inteligência Emocional (Daniel Goleman)
                </h3>
                <ul className="text-rose-800 dark:text-rose-200 space-y-1">
                  <li>• <strong>Autoconsciência:</strong> Reconhecer próprias emoções</li>
                  <li>• <strong>Autorregulação:</strong> Controlar impulsos e emoções</li>
                  <li>• <strong>Motivação:</strong> Persistir apesar de obstáculos</li>
                  <li>• <strong>Empatia:</strong> Entender emoções dos outros</li>
                  <li>• <strong>Habilidades sociais:</strong> Gerenciar relacionamentos</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por Que IE Vale Mais Que QI</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Liderança Requer IE, Não QI</h3>
          <p className="mb-4">
            Estudo com 500 CEOs: <strong>90% têm IE alta, apenas 60% têm QI acima de 120</strong>. Liderar pessoas 
            exige empatia, não apenas lógica.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. IE Prediz Sucesso Melhor</h3>
          <p className="mb-4">
            Pesquisa TalentSmart: <strong>IE é responsável por 58% do desempenho profissional</strong> em todas áreas. 
            QI contribui apenas 20%.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Relacionamentos Geram Oportunidades</h3>
          <p className="mb-4">
            85% das oportunidades vêm de networking. <strong>IE alta = relacionamentos melhores = mais oportunidades</strong>. 
            QI alto sozinho não abre portas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Dados: IE vs QI</h2>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-100">
              Estudo: Renda e Satisfação Profissional
            </h3>
            <div className="space-y-4 text-blue-800 dark:text-blue-200">
              <div>
                <p className="font-bold">Alto QI (130+) + Baixa IE</p>
                <p className="text-sm">Renda: R$15k/mês | Satisfação: 4/10 | Promoções: Raras</p>
              </div>
              <div>
                <p className="font-bold">QI Médio (100-115) + Alta IE</p>
                <p className="text-sm">Renda: R$28k/mês | Satisfação: 8/10 | Promoções: Frequentes</p>
              </div>
              <div>
                <p className="font-bold">Alto QI (130+) + Alta IE</p>
                <p className="text-sm">Renda: R$70k/mês | Satisfação: 9/10 | Liderança: 85%</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Desenvolver Inteligência Emocional</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Protocolo de 60 Dias</h3>

          <h4 className="text-xl font-bold mt-6 mb-3">Semanas 1-2: Autoconsciência</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Diário emocional: registre 3 emoções por dia e gatilhos</li>
            <li>Meditação mindfulness: 10 min/dia</li>
            <li>Identifique padrões: quando você fica ansioso, irritado, feliz?</li>
            <li>Nomeie emoções com precisão (não apenas "mal", mas "frustrado", "ansioso")</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Semanas 3-4: Autorregulação</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Técnica 5-4-3-2-1: quando estressado, identifique 5 coisas que vê, 4 que toca, etc</li>
            <li>Pause antes de reagir: conte até 10 em situações tensas</li>
            <li>Exercício físico: 30 min/dia reduz cortisol</li>
            <li>Pratique gratidão: liste 3 coisas boas por dia</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Semanas 5-6: Empatia</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Escuta ativa: foque 100% na pessoa, sem pensar em resposta</li>
            <li>Pergunte "Como você se sente?" em conversas</li>
            <li>Pratique perspectiva: "Se eu fosse essa pessoa, como me sentiria?"</li>
            <li>Leia ficção: aumenta empatia segundo estudos</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Semanas 7-8: Habilidades Sociais</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Pratique comunicação não-violenta (CNV)</li>
            <li>Dê feedback construtivo: 2 positivos para 1 negativo</li>
            <li>Resolva 1 conflito por semana de forma construtiva</li>
            <li>Celebre sucessos dos outros genuinamente</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Casos Reais</h2>

          <Card className="p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">Roberto, Engenheiro - QI 142</h3>
            <p className="mb-3">
              <strong>Antes:</strong> Tecnicamente brilhante, mas difícil trabalhar com ele. Salário R$12k/mês.
            </p>
            <p className="mb-3">
              <strong>Desenvolvimento IE:</strong> 6 meses de coaching + meditação + feedback 360°
            </p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="font-bold">Depois:</p>
              <p className="text-sm">Promovido a líder técnico. Salário R$30k/mês. "Percebi que ser inteligente não basta se ninguém quer trabalhar comigo."</p>
            </div>
          </Card>

          <Card className="p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">Paula, Gerente - QI 108</h3>
            <p className="mb-3">
              <strong>Perfil:</strong> QI médio, mas IE extremamente alta. Equipe adora trabalhar com ela.
            </p>
            <p className="mb-3">
              <strong>Resultado:</strong> Promovida 3x em 5 anos.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="font-bold">Hoje:</p>
              <p className="text-sm">Diretora de operações. Salário R$55k/mês. "Meu segredo? Entendo pessoas. Isso vale mais que ser a mais inteligente."</p>
            </div>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>

          <p className="text-lg mb-4">
            QI alto te dá capacidade técnica. Inteligência emocional te dá capacidade de trabalhar com pessoas, 
            liderar equipes e construir relacionamentos. <strong>No mundo real, IE vale mais</strong>.
          </p>

          <p className="text-lg mb-4">
            A boa notícia? IE pode ser desenvolvida através de prática deliberada. Em 60 dias você pode transformar 
            suas habilidades emocionais e desbloquear oportunidades que QI sozinho nunca traria.
          </p>

          <p className="mb-4">
            Descubra seu QI atual e entenda seu potencial cognitivo. Depois, desenvolva inteligência emocional 
            para maximizar seu sucesso profissional e pessoal.
          </p>
        </div>
        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "Inteligência Emocional vs QI?",
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

export default InteligenciaEmocionalVsQI;
