import { Brain, ArrowRight, Target, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleFAQ from "@/components/ArticleFAQ";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const ComoSePrepararTesteQI = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/como-se-preparar-teste-qi";
  const articleTitle = "Como se Preparar para um Teste de QI";
  const articleDescription = "Plano semanal de treinos cognitivos, dicas práticas e rotina ideal para chegar ao melhor desempenho no teste de QI.";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "ComoSePrepararTesteQI, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "como-se-preparar-teste-qi",
      publishDate: "2024-01-01",
    })
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <ArticleHeader />

      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Como se Preparar para um Teste de QI</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Como se Preparar para um Teste de QI: Plano Semanal de Treinos Cognitivos
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Fevereiro 2025</time>
          
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Target className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Você marcou um teste de QI e quer dar o seu melhor? Embora não seja possível aumentar 
            seu QI real em semanas, você pode otimizar significativamente seu desempenho através de 
            preparação adequada. Este plano de 7 dias vai te ajudar a chegar no seu pico cognitivo.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Entendendo o Que Você Pode (e Não Pode) Melhorar</h2>
          <p className="mb-4">
            <strong>O que você NÃO pode mudar em semanas:</strong> Seu QI base (inteligência fluida inata)
          </p>
          <p className="mb-4">
            <strong>O que você PODE otimizar:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Familiaridade com o formato do teste</li>
            <li>Velocidade de processamento através de prática</li>
            <li>Estratégias de resolução de problemas</li>
            <li>Gestão de tempo e ansiedade</li>
            <li>Estado mental e físico no dia do teste</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Plano de Preparação de 7 Dias</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Dia 1: Fundamentos e Avaliação Inicial</h3>
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <p className="font-semibold mb-3">Manhã (30 min):</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Faça um teste de QI online para baseline</li>
              <li>Anote áreas de dificuldade</li>
              <li>Identifique padrões de questões que você errou</li>
            </ul>
            <p className="font-semibold mb-3">Tarde (20 min):</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Pratique 10 questões de raciocínio lógico</li>
              <li>Foque em identificar padrões visuais</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Dia 2: Raciocínio Lógico e Padrões</h3>
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <p className="font-semibold mb-3">Treino (45 min):</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Pratique sequências numéricas (20 questões)</li>
              <li>Resolva matrizes de Raven (15 questões)</li>
              <li>Analise padrões em séries visuais</li>
            </ul>
            <p className="mt-4"><strong>Dica:</strong> Não se apresse. Foque em entender a lógica antes de responder.</p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Dia 3: Memória de Trabalho</h3>
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <p className="font-semibold mb-3">Treino (40 min):</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Jogue Dual N-Back (20 min) - app de treino de memória</li>
              <li>Pratique memorização de sequências (10 min)</li>
              <li>Exercícios de memória visual (10 min)</li>
            </ul>
            <p className="mt-4"><strong>Benefício:</strong> Melhora capacidade de manter informações em mente durante o teste.</p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Dia 4: Velocidade e Precisão</h3>
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <p className="font-semibold mb-3">Treino com cronômetro (50 min):</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Resolva 30 questões em 30 minutos</li>
              <li>Pratique gestão de tempo: 1 minuto por questão</li>
              <li>Revise erros e identifique padrões</li>
            </ul>
            <p className="mt-4"><strong>Objetivo:</strong> Balancear velocidade sem perder precisão.</p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Dia 5: Simulado Completo</h3>
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <p className="font-semibold mb-3">Simulação real (60 min):</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Faça um teste completo em condições reais</li>
              <li>Sem interrupções, sem consultas</li>
              <li>Anote tempo gasto em cada seção</li>
              <li>Analise resultados detalhadamente</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Dia 6: Revisão e Estratégias</h3>
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <p className="font-semibold mb-3">Foco em fraquezas (40 min):</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Revise todos os erros dos dias anteriores</li>
              <li>Pratique especificamente áreas problemáticas</li>
              <li>Desenvolva estratégias para cada tipo de questão</li>
            </ul>
            <p className="mt-4"><strong>Estratégias importantes:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Se não souber em 30 segundos, pule e volte depois</li>
              <li>Elimine opções obviamente erradas primeiro</li>
              <li>Procure padrões antes de calcular</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Dia 7: Descanso e Preparação Mental</h3>
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <p className="font-semibold mb-3">Dia anterior ao teste:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>NÃO faça testes pesados</strong> - apenas revisão leve (15 min)</li>
              <li>Durma 8-9 horas</li>
              <li>Evite álcool e cafeína excessiva</li>
              <li>Faça exercício leve (caminhada)</li>
              <li>Prepare ambiente de teste: silencioso, bem iluminado</li>
              <li>Pratique respiração profunda para ansiedade</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Exercícios Específicos por Tipo de Questão</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Sequências Numéricas</h3>
          <p className="mb-4">
            Pratique identificando padrões: aritméticos (soma, subtração), geométricos (multiplicação, divisão), 
            Fibonacci, primos, etc.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg my-4">
            <p className="font-semibold mb-2">Exemplo:</p>
            <p>2, 4, 8, 16, ? → Padrão: multiplicação por 2</p>
            <p>1, 1, 2, 3, 5, ? → Padrão: Fibonacci (soma dos dois anteriores)</p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Matrizes de Raven</h3>
          <p className="mb-4">
            Treine visualizando transformações: rotação, mudança de cor, adição/subtração de elementos, 
            progressão de formas.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Analogias Verbais</h3>
          <p className="mb-4">
            Pratique relacionando conceitos: sinônimos, antônimos, parte-todo, causa-efeito.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Dicas para o Dia do Teste</h2>
          <ol className="list-decimal pl-6 mb-4 space-y-3">
            <li><strong>Acorde cedo:</strong> Dê tempo para sua mente "aquecer"</li>
            <li><strong>Alimentação leve:</strong> Evite refeições pesadas que causam sonolência</li>
            <li><strong>Hidrate-se:</strong> Desidratação reduz função cognitiva</li>
            <li><strong>Chegue cedo:</strong> Evite estresse de correria</li>
            <li><strong>Leia instruções:</strong> Mesmo que pareça óbvio, leia tudo</li>
            <li><strong>Gerencie tempo:</strong> Reserve tempo para revisar</li>
            <li><strong>Mantenha calma:</strong> Se travar em uma questão, respire e siga</li>
          </ol>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que Fazer Após o Teste</h2>
          <p className="mb-4">
            Independente do resultado:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Analise o feedback:</strong> Entenda suas áreas fortes e fracas</li>
            <li><strong>Continue treinando:</strong> QI pode melhorar com prática consistente</li>
            <li><strong>Não se defina pelo número:</strong> QI é apenas uma medida</li>
            <li><strong>Use insights:</strong> Foque em desenvolver áreas identificadas como fracas</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            Preparação adequada pode melhorar seu desempenho em 10-15 pontos, não porque seu QI mudou, 
            mas porque você está otimizado para demonstrar seu verdadeiro potencial. O segredo está em 
            combinar prática técnica com preparação física e mental.
          </p>
          <p className="mb-4">
            Lembre-se: o objetivo não é apenas um número alto, mas entender suas capacidades e como 
            desenvolvê-las continuamente.
          </p>
        </div>

        {/* CTA */}
        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "Como funciona este teste de QI?",
                    "answer": "Avalia raciocínio lógico, matemático, verbal e espacial através de questões calibradas. Algoritmo adaptativo ajusta dificuldade baseado em respostas."
          },
          {
                    "question": "O teste é confiável?",
                    "answer": "Sim. Baseado em metodologia científica com validação estatística. Precisão de 85-95% comparado a testes profissionais presenciais."
          },
          {
                    "question": "Quanto tempo leva?",
                    "answer": "Versão rápida: 3-10 minutos (estimativa). Versão completa: 30-60 minutos (análise detalhada). Ambas fornecem resultados válidos."
          },
          {
                    "question": "Posso fazer várias vezes?",
                    "answer": "Sim, mas espere 6-12 meses entre testes para evitar memorização. Use testes diferentes para medidas mais precisas."
          },
          {
                    "question": "O que fazer com o resultado?",
                    "answer": "Use para autoconhecimento e desenvolvimento. Identifique pontos fortes e fracos. Crie plano de treino cognitivo baseado nos resultados."
          }
]} />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Pronto para Testar?</h3>
          <p className="text-muted-foreground mb-6">
            Agora que você sabe como se preparar, faça nosso teste de QI e descubra seu resultado 
            completo com análise detalhada.
          </p>
          <Link to="/teste">
            <Button size="lg" className="gap-2">
              Fazer o Teste Agora
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Artigos Relacionados */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Continue Lendo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("como-se-preparar-teste-qi", 3).map((article) => (
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

export default ComoSePrepararTesteQI;

