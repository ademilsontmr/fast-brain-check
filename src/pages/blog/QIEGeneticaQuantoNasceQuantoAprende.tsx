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

const QIEGeneticaQuantoNasceQuantoAprende = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/qi-e-genetica-quanto-nasce-quanto-aprende";
  const articleTitle = "QI e Genética: O Quanto Nasce e O Quanto Se Aprende - Evidências Científicas";
  const articleDescription = "QI e genética: o quanto nasce e o quanto se aprende? Descubra a relação entre genética e QI. Evidências científicas completas. Teste seu QI rapidamente!";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "QIEGeneticaQuantoNasceQuantoAprende, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-e-genetica-quanto-nasce-quanto-aprende",
      publishDate: "2024-01-01",
    })
  );

  const relatedArticles = getRelatedArticles("qi-e-genetica-quanto-nasce-quanto-aprende");

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
            "QI e genética: o quanto nasce e o quanto se aprende?" é uma das questões mais fundamentais sobre 
            inteligência. <strong>QI é influenciado tanto por genética quanto por ambiente</strong>, com estudos 
            científicos mostrando que aproximadamente 50-80% da variação de QI é genética, enquanto 20-50% é 
            ambiental. Neste artigo científico, exploramos a relação entre QI e genética, e o quanto se aprende 
            ao longo da vida.
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
            <li><strong>Correlação:</strong> Gêmeos idênticos: 0.75-0.85; fraternos: 0.50-0.60</li>
            <li><strong>Evidência:</strong> Forte componente genético no QI</li>
            <li><strong>Estudos:</strong> Milhares de estudos confirmam influência genética</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Estudos de Adoção</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Filhos adotivos:</strong> QI mais similar a pais biológicos que adotivos</li>
            <li><strong>Correlação:</strong> QI de filhos adotivos com pais biológicos: 0.20-0.30</li>
            <li><strong>Evidência:</strong> Genética influencia mesmo sem contato</li>
            <li><strong>Ambiente:</strong> Também tem influência, mas menor que genética</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Genes Específicos</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Múltiplos genes:</strong> QI é influenciado por muitos genes (poligênico)</li>
            <li><strong>Efeito individual:</strong> Cada gene tem efeito pequeno</li>
            <li><strong>Genes identificados:</strong> Alguns genes relacionados a QI foram identificados</li>
            <li><strong>Complexidade:</strong> Interação entre centenas ou milhares de genes</li>
            <li><strong>Pesquisa:</strong> Estudos genômicos continuam identificando genes</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Quanto Se Aprende: Influência Ambiental</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Fatores Ambientais Importantes</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Educação:</strong> Anos de escolaridade aumentam QI</li>
            <li><strong>Nutrição:</strong> Dieta adequada na infância aumenta QI</li>
            <li><strong>Estimulação:</strong> Ambiente rico em estímulos aumenta QI</li>
            <li><strong>Socioeconômico:</strong> Status socioeconômico influencia QI</li>
            <li><strong>Saúde:</strong> Saúde física e mental afeta QI</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Efeito Flynn</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Descoberta:</strong> Aumento global de QI ao longo das décadas</li>
            <li><strong>Taxa:</strong> Aproximadamente 3 pontos por década</li>
            <li><strong>Causas:</strong> Melhor educação, nutrição, ambiente</li>
            <li><strong>Evidência:</strong> Ambiente pode aumentar QI em nível populacional</li>
            <li><strong>Implicação:</strong> Fatores ambientais são importantes</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Interação Genética e Ambiente</h2>
          
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">
              Como Genética e Ambiente Interagem
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• <strong>Correlação gene-ambiente:</strong> Pessoas com genes de QI alto buscam ambientes enriquecedores</li>
              <li>• <strong>Efeito multiplicador:</strong> Boa genética + bom ambiente = QI muito alto</li>
              <li>• <strong>Compensação:</strong> Ambiente pode compensar genética menos favorável</li>
              <li>• <strong>Plasticidade:</strong> Cérebro mantém capacidade de mudança (neuroplasticidade)</li>
              <li>• <strong>Idade:</strong> Influência genética aumenta com a idade</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Correlação Gene-Ambiente</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Ativa:</strong> Pessoas com genes de QI alto buscam ambientes enriquecedores</li>
            <li><strong>Passiva:</strong> Pais com QI alto criam ambientes enriquecedores</li>
            <li><strong>Evocativa:</strong> Pessoas com QI alto recebem mais oportunidades</li>
            <li><strong>Efeito:</strong> Genética e ambiente se reforçam mutuamente</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Heritabilidade por Idade</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Como Heritabilidade Muda com Idade</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Infância:</strong> Heritabilidade menor (30-50%)</li>
            <li><strong>Adolescência:</strong> Heritabilidade aumenta (50-60%)</li>
            <li><strong>Vida adulta:</strong> Heritabilidade maior (60-80%)</li>
            <li><strong>Razão:</strong> Pessoas escolhem ambientes que correspondem à genética</li>
            <li><strong>Implicação:</strong> Ambiente é mais importante na infância</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Base vs. QI Desenvolvido</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">QI Base (Genético)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Definição:</strong> Potencial genético de QI</li>
            <li><strong>Variação:</strong> Diferenças genéticas entre pessoas</li>
            <li><strong>Limitação:</strong> Não muda drasticamente</li>
            <li><strong>Importância:</strong> Define faixa de potencial</li>
            <li><strong>Realidade:</strong> Cada pessoa tem potencial diferente</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">QI Desenvolvido (Ambiental)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Definição:</strong> QI atual desenvolvido através de ambiente</li>
            <li><strong>Variação:</strong> Pode variar significativamente</li>
            <li><strong>Mudança:</strong> Pode aumentar com educação e treinamento</li>
            <li><strong>Importância:</strong> Determina QI atual</li>
            <li><strong>Potencial:</strong> Pode maximizar ou não atingir potencial genético</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Implicações Práticas</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Para Pais</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Ambiente enriquecedor:</strong> Importante especialmente na infância</li>
            <li><strong>Educação:</strong> Investir em educação de qualidade</li>
            <li><strong>Nutrição:</strong> Dieta adequada na infância</li>
            <li><strong>Estimulação:</strong> Ambiente rico em estímulos cognitivos</li>
            <li><strong>Realismo:</strong> Reconhecer que genética também importa</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Para Adultos</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Maximizar potencial:</strong> Ambiente pode aumentar QI desenvolvido</li>
            <li><strong>Educação continuada:</strong> Aprendizado ao longo da vida</li>
            <li><strong>Treinamento cognitivo:</strong> Exercícios mentais aumentam QI</li>
            <li><strong>Hábitos saudáveis:</strong> Exercício, sono, nutrição</li>
            <li><strong>Realismo:</strong> Aumentos são possíveis mas limitados</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Mitos e Realidades</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Mitos Comuns</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Mito:</strong> QI é 100% genético</li>
            <li><strong>Realidade:</strong> Ambiente influencia 20-50%</li>
            <li><strong>Mito:</strong> QI não pode mudar</li>
            <li><strong>Realidade:</strong> QI desenvolvido pode aumentar</li>
            <li><strong>Mito:</strong> Ambiente não importa</li>
            <li><strong>Realidade:</strong> Ambiente é crucial, especialmente na infância</li>
            <li><strong>Mito:</strong> Genética determina tudo</li>
            <li><strong>Realidade:</strong> Genética define potencial, ambiente realiza</li>
          </ul>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">
                  Importante
                </h3>
                <p className="text-amber-800 dark:text-amber-200">
                  <strong>QI é influenciado tanto por genética quanto por ambiente</strong>. Genética define 
                  potencial, mas ambiente determina quanto desse potencial é realizado. O importante é maximizar 
                  o potencial através de ambiente enriquecedor, educação e hábitos saudáveis, independentemente 
                  da genética.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          
          <p className="mb-4">
            <strong>QI e genética estão intimamente relacionados, mas ambiente também é crucial</strong>. Estudos 
            científicos mostram que aproximadamente 50-80% da variação de QI é genética (heritabilidade), enquanto 
            20-50% é ambiental. A heritabilidade aumenta com a idade, mas ambiente é especialmente importante na infância.
          </p>

          <p className="mb-4">
            <strong>Genética define potencial, mas ambiente determina quanto desse potencial é realizado</strong>. 
            QI base (genético) não muda drasticamente, mas QI desenvolvido (ambiental) pode aumentar significativamente 
            através de educação, treinamento cognitivo, hábitos saudáveis e ambiente enriquecedor.
          </p>

          <p className="mb-4">
            <strong>O importante é maximizar o potencial através de ambiente enriquecedor e hábitos saudáveis</strong>, 
            independentemente da genética. Quer descobrir seu QI atual? Faça nosso teste científico validado e receba 
            uma análise completa de suas capacidades cognitivas.
          </p>
        </div>
        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "QI e Genética?",
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

export default QIEGeneticaQuantoNasceQuantoAprende;

