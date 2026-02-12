import { Brain, ArrowRight, Cpu, TrendingUp, Sparkles, BookOpen, Clock } from "lucide-react";
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

const IATestesCognitivos = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/ia-testes-cognitivos";
  const articleTitle = "IA e Testes Cognitivos na Educação";
  const articleDescription = "Veja como a inteligência artificial está transformando testes cognitivos, educação e processos seletivos em 2025 e quais cuidados ter.";
  
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
      slug: "ia-testes-cognitivos",
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
          <span>IA e Testes Cognitivos</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          O Papel da IA e dos Testes Cognitivos na Educação e no Trabalho em 2025
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Fevereiro 2025</time>
          
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Cpu className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Inteligência Artificial está revolucionando como medimos e desenvolvemos inteligência humana. 
            De testes adaptativos a personalização de aprendizado, a IA está transformando educação e 
            processos seletivos. Entenda o que está mudando e o que isso significa para você.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">IA em Testes Cognitivos</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Testes Adaptativos Inteligentes</h3>
          <p className="mb-4">
            IA permite testes que se ajustam em tempo real à capacidade do testado:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Adaptação dinâmica:</strong> Dificuldade ajusta automaticamente baseado em respostas</li>
            <li><strong>Precisão maior:</strong> Menos questões, resultado mais preciso</li>
            <li><strong>Experiência personalizada:</strong> Cada teste é único</li>
            <li><strong>Identificação de padrões:</strong> IA detecta pontos fortes e fracos rapidamente</li>
          </ul>
          <p className="mb-4">
            Isso torna testes mais eficientes e precisos, especialmente para pessoas com QI muito alto 
            ou muito baixo.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Análise Preditiva de Desempenho</h3>
          <p className="mb-4">
            IA analisa padrões em testes para prever:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Potencial de sucesso em diferentes carreiras</li>
            <li>Risco de dificuldades de aprendizado</li>
            <li>Melhor estilo de aprendizado para cada pessoa</li>
            <li>Áreas que precisam de desenvolvimento prioritário</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">IA na Educação</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Personalização de Aprendizado</h3>
          <p className="mb-4">
            Sistemas educacionais com IA podem:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Adaptar conteúdo:</strong> Ajustar dificuldade e estilo para cada aluno</li>
            <li><strong>Identificar lacunas:</strong> Detectar exatamente onde aluno tem dificuldade</li>
            <li><strong>Otimizar ritmo:</strong> Acelerar ou desacelerar conforme necessidade</li>
            <li><strong>Fornecer feedback imediato:</strong> Explicações personalizadas em tempo real</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Tutoria Inteligente</h3>
          <p className="mb-4">
            Chatbots e tutores virtuais com IA oferecem:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Suporte 24/7 para dúvidas</li>
            <li>Explicações adaptadas ao nível do aluno</li>
            <li>Prática interativa e gamificada</li>
            <li>Rastreamento de progresso detalhado</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Identificação Precoce de Dificuldades</h3>
          <p className="mb-4">
            IA pode detectar sinais precoces de:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Dislexia e outras dificuldades de aprendizado</li>
            <li>Necessidades educacionais especiais</li>
            <li>Superdotação não identificada</li>
            <li>Problemas de atenção e foco</li>
          </ul>
          <p className="mb-4">
            Isso permite intervenção precoce e suporte adequado.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">IA em Processos Seletivos</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Análise de Candidatos</h3>
          <p className="mb-4">
            Empresas estão usando IA para:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Filtrar candidatos:</strong> Análise de CVs e perfis</li>
            <li><strong>Testes adaptativos:</strong> Avaliação cognitiva personalizada</li>
            <li><strong>Análise de fit:</strong> Compatibilidade com cultura da empresa</li>
            <li><strong>Previsão de desempenho:</strong> Modelos que preveem sucesso no cargo</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Entrevistas com IA</h3>
          <p className="mb-4">
            Algumas empresas usam:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Análise de expressões faciais e linguagem corporal</li>
            <li>Análise de tom de voz e padrões de fala</li>
            <li>Chatbots para triagem inicial</li>
            <li>Simulações de trabalho com IA</li>
          </ul>
          <p className="mb-4">
            <strong>Controvérsia:</strong> Essas tecnologias levantam questões sobre viés e privacidade.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Benefícios da IA em Testes Cognitivos</h2>
          
          <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4">Vantagens:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Precisão maior:</strong> Testes adaptativos são mais precisos</li>
              <li><strong>Eficiência:</strong> Menos tempo, melhores resultados</li>
              <li><strong>Personalização:</strong> Experiência adaptada a cada pessoa</li>
              <li><strong>Escalabilidade:</strong> Pode avaliar milhões simultaneamente</li>
              <li><strong>Feedback detalhado:</strong> Análise profunda de capacidades</li>
              <li><strong>Acessibilidade:</strong> Testes disponíveis 24/7, de qualquer lugar</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Desafios e Preocupações</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Viés Algorítmico</h3>
          <p className="mb-4">
            IA pode perpetuar ou amplificar vieses existentes:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Discriminação baseada em gênero, raça ou background</li>
            <li>Favorecimento de certos grupos demográficos</li>
            <li>Replicar desigualdades sociais existentes</li>
          </ul>
          <p className="mb-4">
            <strong>Solução:</strong> Desenvolvimento ético de IA, testes de viés e transparência.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Privacidade e Dados</h3>
          <p className="mb-4">
            Testes com IA coletam grandes quantidades de dados:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Padrões de resposta</li>
            <li>Tempo de reação</li>
            <li>Comportamento durante teste</li>
            <li>Dados demográficos</li>
          </ul>
          <p className="mb-4">
            É crucial garantir proteção de dados e consentimento informado.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Desumanização</h3>
          <p className="mb-4">
            Riscos de:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Reduzir pessoas a números e algoritmos</li>
            <li>Ignorar contexto e circunstâncias pessoais</li>
            <li>Falta de empatia e compreensão humana</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Tendências Futuras</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Testes Multimodais</h3>
          <p className="mb-4">
            Combinação de:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Respostas a questões</li>
            <li>Análise de padrões de digitação</li>
            <li>Análise de movimento do mouse</li>
            <li>Expressões faciais (com consentimento)</li>
            <li>Padrões de atenção e foco</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Aprendizado Contínuo</h3>
          <p className="mb-4">
            IA que aprende com cada teste para melhorar continuamente:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Refinamento de modelos</li>
            <li>Identificação de novos padrões</li>
            <li>Melhoria de precisão ao longo do tempo</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Integração com Realidade Virtual</h3>
          <p className="mb-4">
            Testes em ambientes virtuais imersivos que simulam situações reais de trabalho e aprendizado.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como se Preparar para o Futuro</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Entenda a Tecnologia</h3>
          <p className="mb-4">
            Familiarize-se com como IA funciona em testes. Não tema, entenda.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Desenvolva Habilidades Humanas</h3>
          <p className="mb-4">
            Foque em habilidades que IA não pode replicar facilmente:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Criatividade e inovação</li>
            <li>Empatia e inteligência emocional</li>
            <li>Pensamento crítico profundo</li>
            <li>Liderança e trabalho em equipe</li>
            <li>Adaptabilidade e resiliência</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Use IA a Seu Favor</h3>
          <p className="mb-4">
            Aproveite ferramentas de IA para:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Personalizar seu aprendizado</li>
            <li>Identificar áreas de desenvolvimento</li>
            <li>Praticar para testes adaptativos</li>
            <li>Receber feedback detalhado</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Mantenha Ética e Transparência</h3>
          <p className="mb-4">
            Quando usar testes com IA, certifique-se de:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Entender como seus dados são usados</li>
            <li>Saber se há viés no sistema</li>
            <li>Ter acesso a seus resultados</li>
            <li>Poder questionar decisões algorítmicas</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            IA está transformando testes cognitivos, educação e processos seletivos de formas profundas. 
            Os benefícios são enormes: maior precisão, personalização e eficiência. Mas precisamos 
            navegar cuidadosamente os desafios de viés, privacidade e desumanização.
          </p>
          <p className="mb-4">
            O futuro não é sobre IA substituindo humanos, mas sobre humanos e IA trabalhando juntos 
            para melhor entender e desenvolver inteligência humana. Prepare-se para esse futuro 
            desenvolvendo tanto habilidades técnicas quanto humanas.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Experimente Testes Modernos</h3>
          <p className="text-muted-foreground mb-6">
            Faça nosso teste de QI que utiliza metodologias modernas e adaptativas para fornecer 
            resultados precisos e feedback detalhado sobre suas capacidades cognitivas.
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
            {getRelatedArticles("ia-testes-cognitivos", 3).map((article) => (
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

export default IATestesCognitivos;

