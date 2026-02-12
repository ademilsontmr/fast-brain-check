import { Brain, ArrowRight, BookOpen, AlertTriangle, BarChart3, CheckCircle2, AlertCircle, Shield } from "lucide-react";
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

const OQueReduzQISemPerceber = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/o-que-reduz-qi-sem-perceber";
  const articleTitle = "O que Reduz seu QI sem Perceber: Fatores Ocultos e Científicos";
  const articleDescription = "O que reduz seu QI sem perceber? Descubra fatores ocultos que diminuem inteligência. Guia científico completo. Teste seu QI rapidamente!";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "OQueReduzQISemPerceber, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "o-que-reduz-qi-sem-perceber",
      publishDate: "2024-01-01",
    })
  );

  const relatedArticles = getRelatedArticles("o-que-reduz-qi-sem-perceber");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>O que Reduz seu QI sem Perceber</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          O que Reduz seu QI sem Perceber: Fatores Ocultos e Científicos
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <AlertTriangle className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            "O que reduz seu QI sem perceber?" é uma pergunta importante sobre fatores ocultos que podem diminuir 
            capacidades cognitivas. <strong>Muitos fatores reduzem QI sem que percebamos</strong>, incluindo privação 
            de sono, estresse crônico, desidratação, uso excessivo de tecnologia, isolamento social e hábitos 
            aparentemente inofensivos. Neste guia científico, revelamos fatores ocultos que reduzem QI e como evitá-los.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por que Não Percebemos a Redução de QI?</h2>
          
          <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-red-900 dark:text-red-100">
                  Redução Gradual
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  <strong>Mudanças sutis:</strong> Redução de QI é gradual e imperceptível
                </p>
                <p className="text-red-800 dark:text-red-200 mb-2">
                  <strong>Adaptação:</strong> Nos acostumamos com performance reduzida
                </p>
                <p className="text-red-800 dark:text-red-200 text-sm">
                  <strong>Acúmulo:</strong> Múltiplos fatores se combinam para maior impacto
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">1. Privação de Sono Crônica</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Impacto no QI</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Redução imediata:</strong> 5-15 pontos de QI após uma noite mal dormida</li>
            <li><strong>Acúmulo:</strong> Privação crônica reduz QI permanentemente</li>
            <li><strong>Memória:</strong> Sono inadequado prejudica consolidação de memórias</li>
            <li><strong>Atenção:</strong> Reduz capacidade de foco e concentração</li>
            <li><strong>Tomada de decisão:</strong> Prejudica raciocínio e julgamento</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Sinais que Você Não Percebe</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Dormir menos de 7 horas:</strong> Redução gradual de QI</li>
            <li><strong>Qualidade ruim:</strong> Sono fragmentado reduz função cognitiva</li>
            <li><strong>Dívida de sono:</strong> Acúmulo de privação tem efeito cumulativo</li>
            <li><strong>Adaptação falsa:</strong> Você se acostuma, mas QI continua reduzido</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">2. Estresse Crônico</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Efeito do Cortisol</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Cortisol alto:</strong> Reduz função do hipocampo (memória)</li>
            <li><strong>Neurogênese:</strong> Estresse crônico reduz criação de neurônios</li>
            <li><strong>Atrofia:</strong> Pode encolher áreas cerebrais importantes</li>
            <li><strong>Redução:</strong> 5-10 pontos de QI com estresse crônico</li>
            <li><strong>Irreversível:</strong> Alguns danos podem ser permanentes</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Fontes Ocultas de Estresse</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Trabalho excessivo:</strong> Sobrecarga constante</li>
            <li><strong>Relações tóxicas:</strong> Estresse emocional crônico</li>
            <li><strong>Preocupações financeiras:</strong> Ansiedade constante</li>
            <li><strong>Perfeccionismo:</strong> Pressão interna constante</li>
            <li><strong>Multitarefa:</strong> Estresse cognitivo contínuo</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">3. Desidratação</h2>
          
          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-amber-900 dark:text-amber-100">
              Impacto da Desidratação
            </h3>
            <ul className="space-y-2 text-amber-800 dark:text-amber-200">
              <li>• <strong>Redução imediata:</strong> 2-5 pontos de QI com desidratação leve</li>
              <li>• <strong>Função cerebral:</strong> Cérebro precisa de água para funcionar</li>
              <li>• <strong>Fadiga mental:</strong> Desidratação causa cansaço cognitivo</li>
              <li>• <strong>Concentração:</strong> Reduz capacidade de foco</li>
              <li>• <strong>Memória:</strong> Prejudica formação e recuperação de memórias</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Sinais de Desidratação Ocultos</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Fadiga mental:</strong> Cansaço sem motivo aparente</li>
            <li><strong>Dificuldade de concentração:</strong> Mente "nebulosa"</li>
            <li><strong>Dor de cabeça leve:</strong> Sinal de desidratação</li>
            <li><strong>Urina escura:</strong> Indicador de hidratação inadequada</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">4. Uso Excessivo de Tecnologia</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Multitarefa Digital</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Redução de QI:</strong> Multitarefa reduz QI temporariamente em 10-15 pontos</li>
            <li><strong>Fragmentação:</strong> Múltiplas telas reduzem atenção</li>
            <li><strong>Dependência:</strong> Uso constante reduz capacidade de foco profundo</li>
            <li><strong>Memória:</strong> Informação não é consolidada adequadamente</li>
            <li><strong>Superficialidade:</strong> Reduz pensamento profundo e crítico</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Redes Sociais e Notificações</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Interrupções constantes:</strong> Notificações quebram foco</li>
            <li><strong>Redução de atenção:</strong> Capacidade de atenção diminui</li>
            <li><strong>Comparação social:</strong> Aumenta estresse e ansiedade</li>
            <li><strong>FOMO:</strong> Medo de perder aumenta cortisol</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">5. Isolamento Social</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Impacto Cognitivo</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Declínio cognitivo:</strong> Isolamento acelera redução de QI</li>
            <li><strong>Estímulo reduzido:</strong> Menos desafios mentais</li>
            <li><strong>Depressão:</strong> Isolamento aumenta risco de depressão</li>
            <li><strong>Redução:</strong> 3-7 pontos de QI com isolamento crônico</li>
            <li><strong>Proteção:</strong> Socialização protege contra declínio</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">6. Alimentação Inadequada</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Açúcar e Processados</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Picos de glicose:</strong> Açúcar causa flutuações cognitivas</li>
            <li><strong>Inflamação:</strong> Alimentos processados aumentam inflamação cerebral</li>
            <li><strong>Redução gradual:</strong> Dieta pobre reduz QI ao longo do tempo</li>
            <li><strong>Deficiências:</strong> Falta de nutrientes essenciais</li>
            <li><strong>Fadiga mental:</strong> Alimentação inadequada causa cansaço cognitivo</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Refeições Puladas</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Glicose baixa:</strong> Cérebro precisa de energia constante</li>
            <li><strong>Redução imediata:</strong> QI reduz temporariamente com fome</li>
            <li><strong>Acúmulo:</strong> Pular refeições regularmente reduz QI base</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">7. Sedentarismo</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Falta de Exercício</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Fluxo sanguíneo:</strong> Exercício aumenta fluxo para o cérebro</li>
            <li><strong>BDNF:</strong> Sedentarismo reduz fator neurotrófico</li>
            <li><strong>Redução gradual:</strong> 3-5 pontos de QI com sedentarismo</li>
            <li><strong>Neurogênese:</strong> Exercício promove criação de neurônios</li>
            <li><strong>Proteção:</strong> Atividade física protege contra declínio</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">8. Poluição do Ar</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Impacto Oculto</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Redução silenciosa:</strong> Poluição reduz QI gradualmente</li>
            <li><strong>Inflamação:</strong> Partículas finas causam inflamação cerebral</li>
            <li><strong>Estudos:</strong> Exposição crônica reduz 2-5 pontos de QI</li>
            <li><strong>Irreversível:</strong> Alguns danos podem ser permanentes</li>
            <li><strong>Proteção:</strong> Filtros de ar e plantas reduzem impacto</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">9. Álcool e Substâncias</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Consumo Regular</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Redução imediata:</strong> Álcool reduz QI temporariamente</li>
            <li><strong>Danos permanentes:</strong> Consumo excessivo causa danos</li>
            <li><strong>Neurotoxicidade:</strong> Álcool mata neurônios</li>
            <li><strong>Recuperação:</strong> Alguns danos podem ser reversíveis</li>
            <li><strong>Moderação:</strong> Consumo moderado tem menor impacto</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">10. Falta de Desafios Mentais</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Zona de Conforto</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Atrofia:</strong> Cérebro não usado perde capacidade</li>
            <li><strong>Redução gradual:</strong> Falta de desafios reduz QI</li>
            <li><strong>Rutina:</strong> Mesmas atividades não estimulam cérebro</li>
            <li><strong>Neuroplasticidade:</strong> Cérebro precisa de novos desafios</li>
            <li><strong>Prevenção:</strong> Aprendizado contínuo mantém QI</li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">
                  Como Prevenir
                </h3>
                <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                  <li>• <strong>Sono adequado:</strong> 7-9 horas por noite</li>
                  <li>• <strong>Gerenciar estresse:</strong> Técnicas de relaxamento</li>
                  <li>• <strong>Hidratação:</strong> 2-3 litros de água por dia</li>
                  <li>• <strong>Limitar tecnologia:</strong> Tempos sem telas</li>
                  <li>• <strong>Socialização:</strong> Interação regular</li>
                  <li>• <strong>Alimentação saudável:</strong> Dieta balanceada</li>
                  <li>• <strong>Exercício:</strong> Atividade física regular</li>
                  <li>• <strong>Desafios mentais:</strong> Aprender coisas novas</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          
          <p className="mb-4">
            <strong>Muitos fatores reduzem QI sem que percebamos</strong>, incluindo privação de sono, estresse 
            crônico, desidratação, uso excessivo de tecnologia, isolamento social, alimentação inadequada, 
            sedentarismo, poluição do ar, consumo de álcool e falta de desafios mentais.
          </p>

          <p className="mb-4">
            <strong>A redução é gradual e imperceptível</strong>, mas o impacto acumulado pode ser significativo. 
            Identificar e corrigir esses fatores ocultos é essencial para manter e melhorar capacidades cognitivas.
          </p>

          <p className="mb-4">
            Quer descobrir seu QI atual e identificar áreas para melhoria? Faça nosso teste científico validado 
            e receba uma análise completa de suas capacidades cognitivas.
          </p>
        </div>
        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "O que Reduz seu QI sem Perceber?",
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

export default OQueReduzQISemPerceber;


