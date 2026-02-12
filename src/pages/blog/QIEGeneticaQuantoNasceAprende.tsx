import { Brain, ArrowRight, BookOpen, Dna, BarChart3, CheckCircle2, AlertCircle, TrendingUp } from "lucide-react";
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

const QIEGeneticaQuantoNasceAprende = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/qi-e-genetica-quanto-nasce-aprende";
  const articleTitle = "QI e Genética: O Quanto Nasce e O Quanto Se Aprende - Evidências Científicas";
  const articleDescription = "QI e genética: o quanto nasce e o quanto se aprende? Descubra a relação entre genética e ambiente no QI. Evidências científicas. Teste seu QI rapidamente!";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "QIEGeneticaQuantoNasceAprende, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-e-genetica-quanto-nasce-aprende",
      publishDate: "2024-01-01",
    })
  );

  const relatedArticles = getRelatedArticles("qi-e-genetica-quanto-nasce-aprende");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>QI e Genética: O Quanto Nasce e O Quanto Se Aprende</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          QI e Genética: O Quanto Nasce e O Quanto Se Aprende - Evidências Científicas
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Dna className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            "QI e genética: o quanto nasce e o quanto se aprende?" é uma das questões mais importantes sobre 
            inteligência. <strong>QI é influenciado tanto por genética quanto por ambiente</strong>, com estudos 
            científicos indicando que aproximadamente 50-80% da variação de QI é genética, enquanto 20-50% é 
            ambiental. Neste artigo científico, exploramos a relação entre genética e ambiente no desenvolvimento 
            do QI.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">A Resposta Científica</h2>
          
          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">
                  Heritabilidade do QI
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>Genética:</strong> 50-80% da variação de QI (heritabilidade)
                </p>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>Ambiente:</strong> 20-50% da variação de QI</p>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>Interação:</strong> Genética e ambiente interagem complexamente
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Quanto Nasce: Influência Genética</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Estudos de Gêmeos</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Gêmeos idênticos:</strong> QI muito similar mesmo quando criados separadamente</li>
            <li><strong>Gêmeos fraternos:</strong> QI menos similar que idênticos</li>
            <li><strong>Evidência:</strong> Forte componente genético no QI</li>
            <li><strong>Correlação:</strong> Gêmeos idênticos: 0.75-0.85</li>
            <li><strong>Interpretação:</strong> Genética explica grande parte da variação</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Estudos de Adoção</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Filhos adotivos:</strong> QI mais similar a pais biológicos que adotivos</li>
            <li><strong>Evidência:</strong> Genética tem papel importante</li>
            <li><strong>Limitação:</strong> Ambiente também influencia</li>
            <li><strong>Correlação:</strong> Com pais biológicos: 0.20-0.30</li>
            <li><strong>Interpretação:</strong> Genética e ambiente ambos importantes</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Genes Específicos</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Múltiplos genes:</strong> QI é poligênico (muitos genes envolvidos)</li>
            <li><strong>Efeitos pequenos:</strong> Cada gene tem efeito pequeno</li>
            <li><strong>Complexidade:</strong> Interação entre genes e ambiente</li>
            <li><strong>Pesquisa:</strong> Identificando genes específicos</li>
            <li><strong>Desafio:</strong> QI é muito complexo para um único gene</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Quanto Se Aprende: Influência Ambiental</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Educação</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Anos de escolaridade:</strong> Correlaciona fortemente com QI</li>
            <li><strong>Qualidade da educação:</strong> Educação de qualidade aumenta QI</li>
            <li><strong>Impacto:</strong> Até 2-5 pontos de QI por ano adicional</li>
            <li><strong>Mecanismo:</strong> Educação treina habilidades cognitivas</li>
            <li><strong>Evidência:</strong> Programas educacionais aumentam QI</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Ambiente Familiar</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>SES (Socioeconomic Status):</strong> Renda e educação dos pais</li>
            <li><strong>Estimulação:</strong> Ambiente rico em estímulos cognitivos</li>
            <li><strong>Livros:</strong> Presença de livros em casa</li>
            <li><strong>Conversas:</strong> Conversas intelectuais com pais</li>
            <li><strong>Impacto:</strong> Ambiente familiar explica 20-30% da variação</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Nutrição</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Primeiros anos:</strong> Nutrição adequada é crucial</li>
            <li><strong>Deficiências:</strong> Deficiências nutricionais reduzem QI</li>
            <li><strong>Suplementação:</strong> Suplementação adequada aumenta QI</li>
            <li><strong>Impacto:</strong> Pode explicar 5-10 pontos de diferença</li>
            <li><strong>Timing:</strong> Mais importante na infância</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Interação Genética e Ambiente</h2>
          
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">
              Como Genética e Ambiente Interagem
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• <strong>Correlação gene-ambiente:</strong> Pessoas com genes para QI alto buscam ambientes estimulantes</li>
              <li>• <strong>Efeito multiplicador:</strong> Genética e ambiente se reforçam</li>
              <li>• <strong>Plasticidade:</strong> Ambiente pode maximizar potencial genético</li>
              <li>• <strong>Restrições:</strong> Genética estabelece limites, ambiente determina onde dentro desses limites</li>
              <li>• <strong>Complexidade:</strong> Interação é bidirecional e dinâmica</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Correlação Gene-Ambiente</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Ativa:</strong> Pessoas com genes para QI alto buscam ambientes estimulantes</li>
            <li><strong>Passiva:</strong> Pais com QI alto criam ambientes estimulantes</li>
            <li><strong>Evocativa:</strong> Crianças com QI alto recebem mais estímulo</li>
            <li><strong>Efeito:</strong> Genética e ambiente se reforçam mutuamente</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Heritabilidade por Idade</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Mudanças com a Idade</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Infância:</strong> Heritabilidade menor (30-40%)</li>
            <li><strong>Adolescência:</strong> Heritabilidade aumenta (50-60%)</li>
            <li><strong>Vida adulta:</strong> Heritabilidade maior (70-80%)</li>
            <li><strong>Interpretação:</strong> Genética se expressa mais com idade</li>
            <li><strong>Mecanismo:</strong> Pessoas escolhem ambientes que correspondem à genética</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Efeito Flynn e Ambiente</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Aumento Global de QI</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Descoberta:</strong> QI aumentou globalmente nas últimas décadas</li>
            <li><strong>Taxa:</strong> Aproximadamente 3 pontos por década</li>
            <li><strong>Causa:</strong> Melhor educação, nutrição, ambiente</li>
            <li><strong>Evidência:</strong> Ambiente pode aumentar QI significativamente</li>
            <li><strong>Implicação:</strong> Genética não é destino</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Limitações Genéticas vs. Potencial</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Genética Estabelece Limites</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Potencial máximo:</strong> Genética estabelece teto potencial</li>
            <li><strong>Realização:</strong> Ambiente determina quanto do potencial é realizado</li>
            <li><strong>Variabilidade:</strong> Grande variação dentro de limites genéticos</li>
            <li><strong>Otimização:</strong> Ambiente ideal pode maximizar potencial</li>
            <li><strong>Realismo:</strong> Nem todos podem alcançar QI 150+</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Ambiente Pode Maximizar</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Potencial genético:</strong> Ambiente pode ajudar a alcançar</li>
            <li><strong>Desenvolvimento:</strong> Ambiente adequado desenvolve capacidades</li>
            <li><strong>Restrições:</strong> Ambiente pobre limita realização</li>
            <li><strong>Oportunidade:</strong> Acesso a recursos é crucial</li>
            <li><strong>Impacto:</strong> Diferenças ambientais explicam grande parte da variação</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Implicações Práticas</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Para Pais</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Ambiente estimulante:</strong> Criar ambiente rico em estímulos</li>
            <li><strong>Educação:</strong> Investir em educação de qualidade</li>
            <li><strong>Nutrição:</strong> Garantir nutrição adequada</li>
            <li><strong>Suporte:</strong> Apoiar desenvolvimento cognitivo</li>
            <li><strong>Realismo:</strong> Reconhecer limites genéticos sem desencorajar</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Para Indivíduos</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Educação continuada:</strong> Continuar aprendendo</li>
            <li><strong>Desafios:</strong> Buscar desafios cognitivos</li>
            <li><strong>Hábitos saudáveis:</strong> Exercício, sono, nutrição</li>
            <li><strong>Potencial:</strong> Maximizar potencial através de ambiente</li>
            <li><strong>Realismo:</strong> Focar em desenvolvimento, não apenas genética</li>
          </ul>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">
                  Importante
                </h3>
                <p className="text-amber-800 dark:text-amber-200">
                  <strong>QI é influenciado tanto por genética quanto por ambiente</strong>. Embora genética 
                  estabeleça limites potenciais, ambiente determina quanto desse potencial é realizado. 
                  Investir em educação, nutrição e ambiente estimulante pode maximizar desenvolvimento cognitivo, 
                  independentemente da genética.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          
          <p className="mb-4">
            <strong>QI e genética: o quanto nasce e o quanto se aprende é uma questão complexa</strong>. 
            Estudos científicos indicam que aproximadamente 50-80% da variação de QI é genética (heritabilidade), 
            enquanto 20-50% é ambiental. No entanto, genética e ambiente interagem complexamente.
          </p>

          <p className="mb-4">
            <strong>Genética estabelece limites potenciais, mas ambiente determina quanto desse potencial é 
            realizado</strong>. Investir em educação, nutrição, ambiente estimulante e hábitos saudáveis pode 
            maximizar desenvolvimento cognitivo, independentemente da genética.
          </p>

          <p className="mb-4">
            Quer descobrir seu QI atual e entender melhor suas capacidades cognitivas? Faça nosso teste científico 
            validado e receba uma análise completa.
          </p>
        </div>
        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "Como este tema se relaciona com inteligência?",
                    "answer": "Este tema está diretamente relacionado ao desenvolvimento cognitivo e expressão da inteligência. Compreender esses conceitos ajuda a maximizar potencial."
          },
          {
                    "question": "Posso aplicar isso na prática?",
                    "answer": "Sim. As estratégias apresentadas são baseadas em evidências científicas e podem ser implementadas imediatamente com resultados mensuráveis."
          },
          {
                    "question": "Quanto tempo para ver resultados?",
                    "answer": "Resultados iniciais em 30-60 dias com prática consistente. Melhorias significativas em 6-12 meses de aplicação sustentada."
          },
          {
                    "question": "Funciona para todas as idades?",
                    "answer": "Sim. Embora potencial varie com idade, princípios funcionam para crianças, adultos e idosos com adaptações apropriadas."
          },
          {
                    "question": "Como medir meu progresso?",
                    "answer": "Faça teste de QI inicial, implemente estratégias por 6 meses, refaça teste. Também monitore desempenho em trabalho/estudos."
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

export default QIEGeneticaQuantoNasceAprende;


