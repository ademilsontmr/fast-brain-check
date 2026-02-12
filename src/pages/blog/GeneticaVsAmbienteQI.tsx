import { Brain, ArrowRight, Dna, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const GeneticaVsAmbienteQI = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/genetica-vs-ambiente-qi";
  const articleTitle = "Genética vs Ambiente no QI: O Que a Ciência Realmente Diz";
  const articleDescription = "Descubra o papel da genética e do ambiente no desenvolvimento do QI. Análise profunda de estudos científicos sobre natureza vs criação na inteligência.";
  
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
      slug: "genetica-vs-ambiente-qi",
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
          <span>Genética vs Ambiente no QI</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Genética vs Ambiente no QI: O Que a Ciência Realmente Diz Sobre Natureza vs Criação
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
          
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Dna className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Uma das questões mais antigas da psicologia: o QI é determinado principalmente pela genética 
            ou pelo ambiente? A resposta científica é mais complexa e fascinante do que você imagina. 
            Estudos com gêmeos, adoções e neurociência revelam uma verdade surpreendente sobre como 
            desenvolvemos inteligência.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que Dizem os Estudos com Gêmeos?</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Gêmeos Idênticos (Monozigóticos)</h3>
          <p className="mb-4">
            Gêmeos idênticos compartilham 100% do DNA. Quando criados juntos, seus QIs têm correlação 
            de aproximadamente <strong>0.86</strong> — uma das correlações mais altas em psicologia. 
            Mas o mais revelador: quando criados separadamente, a correlação cai para cerca de <strong>0.72</strong>.
          </p>
          
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <p className="font-semibold mb-3">Implicação:</p>
            <p className="mb-4">
              Isso mostra que <strong>a genética tem papel substancial</strong>, mas o ambiente também 
              importa significativamente. A diferença entre 0.86 e 0.72 representa o impacto do ambiente 
              compartilhado (família, escola, bairro).
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Gêmeos Fraternos (Dizigóticos)</h3>
          <p className="mb-4">
            Gêmeos fraternos compartilham apenas 50% do DNA (como irmãos normais). Quando criados juntos, 
            a correlação de QI é cerca de <strong>0.60</strong>. Quando criados separadamente, cai para 
            aproximadamente <strong>0.24</strong>.
          </p>
          
          <p className="mb-4">
            A diferença maior entre gêmeos fraternos criados juntos vs separados (0.60 vs 0.24) mostra 
            que <strong>o ambiente compartilhado tem impacto maior quando a similaridade genética é menor</strong>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estudos de Adoção: Separando Genética e Ambiente</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">O Estudo de Colorado</h3>
          <p className="mb-4">
            Um dos estudos mais extensos acompanhou crianças adotadas desde o nascimento. Resultados:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>QI de crianças adotadas:</strong> Correlaciona mais com QI dos pais biológicos (0.32) 
            do que com pais adotivos (0.19)</li>
            <li><strong>Impacto do ambiente:</strong> Crianças adotadas em famílias de maior QI têm QI médio 
            12-15 pontos maior que crianças em famílias de menor QI</li>
            <li><strong>Efeito Flynn:</strong> O aumento de QI ao longo das décadas (efeito Flynn) mostra 
            que melhorias ambientais (educação, nutrição) podem elevar QI de populações inteiras</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">O Paradoxo da Heritabilidade</h3>
          <p className="mb-4">
            A heritabilidade do QI aumenta com a idade:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Infância (4-6 anos):</strong> ~40% genético, 60% ambiental</li>
            <li><strong>Adolescência (12-16 anos):</strong> ~50-60% genético, 40-50% ambiental</li>
            <li><strong>Vida adulta (25+ anos):</strong> ~70-80% genético, 20-30% ambiental</li>
          </ul>
          
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <p className="font-semibold mb-3">Por que isso acontece?</p>
            <p className="mb-4">
              Conforme envelhecemos, <strong>tendemos a criar nossos próprios ambientes</strong>. Pessoas 
              com maior QI buscam ambientes intelectualmente estimulantes (leitura, educação superior, 
              profissões desafiadoras), amplificando diferenças genéticas.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Fatores Ambientais que Impactam QI</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Nutrição Pré-natal e Primeira Infância</h3>
          <p className="mb-4">
            Estudos mostram que deficiências nutricionais na gestação e primeiros anos podem reduzir QI 
            em 10-15 pontos:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Ácido fólico:</strong> Reduz risco de defeitos do tubo neural e melhora desenvolvimento cognitivo</li>
            <li><strong>Ômega-3 (DHA):</strong> Crucial para desenvolvimento cerebral, especialmente nos primeiros 2 anos</li>
            <li><strong>Ferro:</strong> Deficiência de ferro na infância está associada a QI 5-7 pontos menor</li>
            <li><strong>Iodo:</strong> Deficiência severa pode causar retardo mental, leve pode reduzir QI em 10-15 pontos</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Educação e Estimulação Cognitiva</h3>
          <p className="mb-4">
            Cada ano adicional de escolaridade aumenta QI em aproximadamente 2-3 pontos:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Qualidade da educação:</strong> Escolas de alta qualidade têm impacto maior que quantidade de anos</li>
            <li><strong>Leitura precoce:</strong> Crianças que aprendem a ler antes dos 7 anos têm vantagem cognitiva</li>
            <li><strong>Ambiente rico em livros:</strong> Ter livros em casa na infância correlaciona com QI mais alto na vida adulta</li>
            <li><strong>Interação verbal:</strong> Crianças que ouvem mais palavras (30 milhões vs 10 milhões até 3 anos) 
            têm vocabulário e QI maiores</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Status Socioeconômico (SES)</h3>
          <p className="mb-4">
            Famílias de maior SES proporcionam:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Melhor nutrição:</strong> Acesso a alimentos de qualidade</li>
            <li><strong>Menos estresse tóxico:</strong> Estresse crônico na infância afeta desenvolvimento cerebral</li>
            <li><strong>Mais recursos educacionais:</strong> Livros, computadores, atividades extracurriculares</li>
            <li><strong>Expectativas mais altas:</strong> Pais com maior educação valorizam mais aprendizado</li>
          </ul>
          
          <p className="mb-4">
            <strong>Diferença média:</strong> Crianças de famílias de alta vs baixa SES têm diferença média 
            de 10-15 pontos de QI, mas isso é <strong>reversível</strong> com intervenções adequadas.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Exposição a Toxinas</h3>
          <p className="mb-4">
            Fatores ambientais negativos podem reduzir QI:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Chumbo:</strong> Exposição na infância reduz QI em 2-5 pontos por 10 μg/dL de chumbo no sangue</li>
            <li><strong>Mercúrio:</strong> Exposição pré-natal (através de peixes contaminados) pode reduzir QI</li>
            <li><strong>Poluição do ar:</strong> Estudos mostram correlação entre poluição e menor QI em crianças</li>
            <li><strong>Álcool na gestação:</strong> Síndrome alcoólica fetal pode reduzir QI em 15-20 pontos</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Fatores Genéticos: O Que Sabemos</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Genes Identificados</h3>
          <p className="mb-4">
            Estudos de associação genômica (GWAS) identificaram centenas de genes associados ao QI, mas cada 
            um tem efeito muito pequeno (0.01-0.1 pontos de QI). Isso mostra que QI é um <strong>trait poligênico</strong> 
            — influenciado por muitos genes, não um "gene da inteligência".
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Interação Gene-Ambiente</h3>
          <p className="mb-4">
            O efeito dos genes depende do ambiente:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Ambiente enriquecido:</strong> Permite que potencial genético se expresse plenamente</li>
            <li><strong>Ambiente empobrecido:</strong> Pode suprimir expressão de genes relacionados à inteligência</li>
            <li><strong>Plasticidade genética:</strong> Alguns genes tornam pessoas mais sensíveis a influências ambientais</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Efeito Flynn: Prova do Poder do Ambiente</h2>
          
          <p className="mb-4">
            O QI médio da população aumentou ~3 pontos por década desde 1930. Isso é <strong>muito rápido 
            para ser genético</strong> (mudanças genéticas levam milhares de anos). O efeito Flynn prova 
            que melhorias ambientais podem elevar QI de populações inteiras:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Melhor nutrição:</strong> Redução de deficiências nutricionais</li>
            <li><strong>Mais educação:</strong> Escolaridade obrigatória, acesso universal</li>
            <li><strong>Ambiente mais complexo:</strong> Tecnologia, informação, estímulos cognitivos</li>
            <li><strong>Redução de doenças:</strong> Menos infecções que afetam desenvolvimento cerebral</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Implicações Práticas</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Para Pais</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Nutrição adequada:</strong> Especialmente na gestação e primeiros 2 anos</li>
            <li><strong>Estimulação cognitiva:</strong> Leitura, conversas, jogos educativos</li>
            <li><strong>Ambiente seguro:</strong> Reduzir exposição a toxinas e estresse tóxico</li>
            <li><strong>Expectativas realistas:</strong> Genética estabelece limites, mas ambiente determina 
            onde dentro desses limites a criança chegará</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Para Adultos</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Você pode melhorar:</strong> QI não é fixo, treinos cognitivos podem aumentar</li>
            <li><strong>Ambiente importa:</strong> Busque ambientes intelectualmente estimulantes</li>
            <li><strong>Saúde física:</strong> Exercício, sono e nutrição afetam função cognitiva</li>
            <li><strong>Educação contínua:</strong> Aprendizado ao longo da vida mantém e melhora QI</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão: A Verdade Científica</h2>
          
          <p className="mb-4">
            A ciência mostra que <strong>QI é resultado de genética E ambiente</strong>, não um ou outro. 
            A proporção varia com a idade e contexto:
          </p>
          
          <div className="bg-primary/10 p-6 rounded-lg my-6 border-2 border-primary/20">
            <p className="font-semibold mb-3 text-lg">Resumo Científico:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Genética:</strong> Estabelece o potencial e os limites (50-80% da variância na vida adulta)</li>
              <li><strong>Ambiente:</strong> Determina onde dentro desse potencial você chegará (20-50% da variância)</li>
              <li><strong>Interação:</strong> Genes e ambiente interagem de forma complexa e dinâmica</li>
              <li><strong>Plasticidade:</strong> O cérebro pode mudar ao longo da vida com estímulos adequados</li>
            </ul>
          </div>

          <p className="mb-4">
            A mensagem mais importante: <strong>você não está preso à sua genética</strong>. Mesmo que 
            genética estabeleça limites, o ambiente determina onde dentro desses limites você chegará. 
            Investir em nutrição, educação, treinos cognitivos e ambientes estimulantes pode maximizar 
            seu potencial genético.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI Atual</h3>
          <p className="text-muted-foreground mb-6">
            Independente de genética ou ambiente, conhecer seu QI atual é o primeiro passo para 
            desenvolver seu potencial. Faça nosso teste científico e descubra onde você está agora.
          </p>
          <Link to="/teste">
            <Button size="lg" className="gap-2">
              Fazer o Teste de QI
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
            {getRelatedArticles("genetica-vs-ambiente-qi", 3).map((article) => (
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

export default GeneticaVsAmbienteQI;

