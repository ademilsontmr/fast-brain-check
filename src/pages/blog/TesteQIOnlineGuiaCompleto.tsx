import { Brain, ArrowRight, BookOpen, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const TesteQIOnlineGuiaCompleto = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/teste-qi-online-guia-completo";
  const articleTitle = "Teste de QI Online: Guia Completo 2025";
  const articleDescription = "Entenda metodologias, precisão e como interpretar resultados dos testes de QI online para escolher a melhor avaliação para você.";
  
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
      slug: "teste-qi-online-guia-completo",
      publishDate: "2024-01-01",
    })
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Brain className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">BomQI</span>
            </Link>
            <Button onClick={() => navigate("/teste")} size="lg">
              Fazer o Teste
            </Button>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Teste de QI Online: Guia Completo</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Teste de QI Online: Guia Completo 2025 (Metodologias, Precisão e Como Interpretar)
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Fevereiro 2025</time>
          
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <BookOpen className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Testes de QI online se tornaram uma forma popular e acessível de avaliar inteligência. 
            Mas como saber se um teste é confiável? Quais metodologias são usadas? E como interpretar 
            seus resultados? Este guia completo responde todas essas questões.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que É um Teste de QI?</h2>
          <p className="mb-4">
            O QI (Quociente de Inteligência) é uma medida padronizada da capacidade cognitiva de uma pessoa. 
            Testes de QI avaliam diferentes aspectos da inteligência, incluindo:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Raciocínio lógico:</strong> Capacidade de identificar padrões e resolver problemas</li>
            <li><strong>Memória de trabalho:</strong> Capacidade de manter e manipular informações</li>
            <li><strong>Velocidade de processamento:</strong> Rapidez em processar informações</li>
            <li><strong>Compreensão verbal:</strong> Habilidade com linguagem e vocabulário</li>
            <li><strong>Raciocínio espacial:</strong> Capacidade de visualizar e manipular objetos mentalmente</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Metodologias de Testes de QI</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Testes Baseados em Padrões (Raven's Progressive Matrices)</h3>
          <p className="mb-4">
            Considerados os mais "puros" para medir inteligência fluida (Gf), esses testes apresentam 
            sequências de padrões visuais onde você deve identificar a lógica e completar a sequência.
          </p>
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <p className="font-semibold mb-2">Vantagens:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Menos influenciado por educação formal</li>
              <li>Funciona bem em diferentes culturas</li>
              <li>Foca em inteligência pura, não conhecimento adquirido</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Testes de Múltiplas Habilidades (WAIS, Stanford-Binet)</h3>
          <p className="mb-4">
            Testes completos que avaliam múltiplas dimensões da inteligência. São mais longos e 
            frequentemente aplicados por psicólogos profissionais.
          </p>
          <p className="mb-4">
            <strong>Componentes típicos:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Testes verbais (vocabulário, compreensão)</li>
            <li>Testes de memória (sequências, listas)</li>
            <li>Testes de raciocínio (analogias, categorias)</li>
            <li>Testes de processamento visual-espacial</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Testes Adaptativos Online</h3>
          <p className="mb-4">
            Testes modernos que ajustam a dificuldade das questões baseado nas respostas anteriores. 
            Isso permite uma avaliação mais precisa com menos questões.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Avaliar a Precisão de um Teste Online</h2>
          
          <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              Sinais de um Teste Confiável
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Baseado em metodologia científica:</strong> Usa testes validados (Raven, WAIS, etc.)</li>
              <li><strong>Normatização adequada:</strong> Compara resultados com uma amostra representativa</li>
              <li><strong>Transparência:</strong> Explica como o QI é calculado</li>
              <li><strong>Sem "truques":</strong> Não promete resultados inflados</li>
              <li><strong>Feedback detalhado:</strong> Explica o que cada resultado significa</li>
            </ul>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-red-500" />
              Sinais de um Teste Não Confiável
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Promete resultados em menos de 5 minutos</li>
              <li>Diz que "90% das pessoas têm QI acima de 120"</li>
              <li>Não explica a metodologia</li>
              <li>Foca apenas em entretenimento, não em precisão</li>
              <li>Resultados sempre muito altos (viés de confirmação)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Interpretar Seus Resultados</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Distribuição de QI na População</h3>
          <p className="mb-4">
            O QI é padronizado com média de 100 e desvio padrão de 15. Isso significa:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>QI 70-85:</strong> Abaixo da média (16% da população)</li>
            <li><strong>QI 85-100:</strong> Média baixa (34% da população)</li>
            <li><strong>QI 100-115:</strong> Média alta (34% da população)</li>
            <li><strong>QI 115-130:</strong> Acima da média (13.5% da população)</li>
            <li><strong>QI 130-145:</strong> Superdotado (2.1% da população)</li>
            <li><strong>QI 145+:</strong> Gênio (0.1% da população)</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Fatores que Influenciam Resultados</h3>
          <p className="mb-4">
            Seu resultado pode variar baseado em:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Condições do teste:</strong> Cansaço, distrações, ambiente</li>
            <li><strong>Familiaridade:</strong> Fazer múltiplos testes melhora pontuação (efeito de prática)</li>
            <li><strong>Tipo de teste:</strong> Diferentes testes medem aspectos diferentes</li>
            <li><strong>Idade:</strong> QI flutua ao longo da vida</li>
            <li><strong>Estado emocional:</strong> Ansiedade pode reduzir desempenho</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Preparação para um Teste de QI</h2>
          <p className="mb-4">
            Embora você não possa "estudar" para aumentar seu QI real, pode otimizar seu desempenho:
          </p>
          <ol className="list-decimal pl-6 mb-4 space-y-3">
            <li><strong>Descanse bem:</strong> Durma 7-9 horas na noite anterior</li>
            <li><strong>Escolha um ambiente calmo:</strong> Sem distrações, boa iluminação</li>
            <li><strong>Faça em horário de pico:</strong> Quando sua mente está mais alerta</li>
            <li><strong>Leia as instruções cuidadosamente:</strong> Entender o formato é crucial</li>
            <li><strong>Gerencie o tempo:</strong> Não gaste muito tempo em uma questão</li>
            <li><strong>Mantenha a calma:</strong> Ansiedade prejudica o desempenho</li>
          </ol>

          <h2 className="text-3xl font-bold mt-12 mb-6">Limitações dos Testes de QI</h2>
          <p className="mb-4">
            É importante entender que testes de QI não medem tudo:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Não medem criatividade:</strong> Uma pessoa criativa pode ter QI médio</li>
            <li><strong>Não medem inteligência emocional:</strong> QE é diferente de QI</li>
            <li><strong>Não medem sabedoria prática:</strong> Experiência de vida não é capturada</li>
            <li><strong>Podem ter viés cultural:</strong> Alguns testes favorecem certos backgrounds</li>
            <li><strong>Não predizem sucesso:</strong> QI alto não garante realização pessoal ou profissional</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Quando Fazer um Teste Profissional</h2>
          <p className="mb-4">
            Testes online são úteis para curiosidade e autoconhecimento. Mas considere um teste profissional se:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Precisa de diagnóstico oficial (superdotação, dificuldades de aprendizado)</li>
            <li>Está em processo seletivo que exige certificação</li>
            <li>Quer uma avaliação mais completa e detalhada</li>
            <li>Precisa de relatório oficial para instituições</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            Testes de QI online podem ser ferramentas valiosas para autoconhecimento quando escolhidos 
            criteriosamente. O importante é entender que o QI é apenas uma medida entre muitas da 
            capacidade humana, e não define seu valor ou potencial.
          </p>
          <p className="mb-4">
            Use os resultados como ponto de partida para desenvolvimento, não como rótulo definitivo. 
            A inteligência é treinável, e seu QI pode melhorar com prática cognitiva, aprendizado 
            contínuo e hábitos saudáveis.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Pronto para Descobrir Seu QI?</h3>
          <p className="text-muted-foreground mb-6">
            Faça nosso teste científico baseado em metodologias validadas. Resultado completo em apenas 3 minutos, 
            com análise detalhada de suas capacidades cognitivas.
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
            {getRelatedArticles("teste-qi-online-guia-completo", 3).map((article) => (
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

export default TesteQIOnlineGuiaCompleto;

