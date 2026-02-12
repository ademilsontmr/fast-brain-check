import { Brain, ArrowRight, Sparkles, BookOpen, Clock, Target, Lightbulb } from "lucide-react";
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

const CriancasSuperdotadasSinaisCaracteristicas = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/criancas-superdotadas-sinais-caracteristicas";
  const articleTitle = "Crianças Superdotadas: Sinais, Características e Como Identificar";
  const articleDescription = "Descubra os sinais e características de crianças superdotadas. Como identificar superdotação, QI necessário, características comportamentais e como apoiar o desenvolvimento.";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "CriancasSuperdotadasSinaisCaracteristicas, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "criancas-superdotadas-sinais-caracteristicas",
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
          <span>Crianças Superdotadas</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Crianças Superdotadas: Sinais, Características e Como Identificar
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
          <span>•</span>
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Sparkles className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Crianças superdotadas têm capacidades intelectuais excepcionais que se manifestam desde 
            cedo. Identificar superdotação é importante para fornecer apoio adequado. Neste guia 
            completo, exploramos sinais, características, como identificar e como apoiar crianças 
            superdotadas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que é Superdotação?</h2>
          <p className="mb-4">
            <strong>Superdotação</strong> geralmente se refere a QI de 130 ou mais (top 2% da população), 
            mas também pode incluir talentos excepcionais em áreas específicas. Características incluem:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>QI alto:</strong> Geralmente 130+ (mas não é único critério)</li>
            <li><strong>Aprendizado rápido:</strong> Aprende mais rápido que a média</li>
            <li><strong>Curiosidade intensa:</strong> Fome de conhecimento</li>
            <li><strong>Pensamento avançado:</strong> Raciocínio complexo para a idade</li>
            <li><strong>Criatividade:</strong> Muitas vezes alta criatividade</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Sinais de Superdotação por Idade</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Bebês e Primeira Infância (0-3 anos)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Desenvolvimento precoce:</strong> Senta, engatinha, anda mais cedo</li>
            <li><strong>Fala precoce:</strong> Primeiras palavras e frases mais cedo</li>
            <li><strong>Memória excepcional:</strong> Lembra eventos e detalhes</li>
            <li><strong>Curiosidade intensa:</strong> Explora ativamente ambiente</li>
            <li><strong>Foco prolongado:</strong> Mantém atenção por períodos longos</li>
            <li><strong>Reconhece padrões:</strong> Identifica padrões e sequências</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Pré-escola (3-5 anos)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Vocabulário avançado:</strong> Usa palavras complexas para a idade</li>
            <li><strong>Leitura precoce:</strong> Aprende a ler antes dos 5 anos (muitas vezes sozinho)</li>
            <li><strong>Interesse em tópicos complexos:</strong> Dinossauros, espaço, ciência</li>
            <li><strong>Perguntas profundas:</strong> Faz perguntas que mostram pensamento complexo</li>
            <li><strong>Memória excepcional:</strong> Lembra detalhes de livros, eventos, conversas</li>
            <li><strong>Perfeccionismo:</strong> Quer fazer coisas "certas"</li>
            <li><strong>Pode se entediar:</strong> Com atividades muito simples</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Ensino Fundamental (6-10 anos)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Desempenho acadêmico excepcional:</strong> Notas altas, facilidade com matérias</li>
            <li><strong>Leitura avançada:</strong> Lê acima do nível da série</li>
            <li><strong>Raciocínio abstrato:</strong> Entende conceitos abstratos cedo</li>
            <li><strong>Curiosidade insaciável:</strong> Quer aprender constantemente</li>
            <li><strong>Pensamento crítico:</strong> Questiona, analisa, critica</li>
            <li><strong>Interesses intensos:</strong> Foca profundamente em tópicos de interesse</li>
            <li><strong>Pode ter dificuldades sociais:</strong> Pode preferir adultos ou crianças mais velhas</li>
            <li><strong>Perfeccionismo:</strong> Pode causar ansiedade se não gerenciado</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Pré-adolescência e Adolescência (11-17 anos)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Excelência acadêmica:</strong> Top da classe, facilidade com matérias complexas</li>
            <li><strong>Interesses profundos:</strong> Especialização em áreas específicas</li>
            <li><strong>Pensamento independente:</strong> Forma opiniões próprias, questiona autoridade</li>
            <li><strong>Liderança:</strong> Pode assumir papéis de liderança</li>
            <li><strong>Criatividade:</strong> Produz trabalhos criativos e originais</li>
            <li><strong>Pode se sentir diferente:</strong> Dificuldade de se conectar com pares</li>
            <li><strong>Ansiedade ou depressão:</strong> Pode ocorrer se não apoiado adequadamente</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Características Comportamentais</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Características Positivas</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Curiosidade intensa:</strong> Sempre fazendo perguntas</li>
            <li><strong>Memória excepcional:</strong> Lembra detalhes e informações</li>
            <li><strong>Pensamento rápido:</strong> Processa informações rapidamente</li>
            <li><strong>Vocabulário avançado:</strong> Usa palavras complexas</li>
            <li><strong>Humor sofisticado:</strong> Entende e cria humor complexo</li>
            <li><strong>Empatia:</strong> Muitas vezes alta empatia e sensibilidade</li>
            <li><strong>Liderança natural:</strong> Organiza e lidera atividades</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Desafios Comportamentais</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Perfeccionismo:</strong> Pode causar ansiedade e procrastinação</li>
            <li><strong>Intensidade emocional:</strong> Emoções muito intensas</li>
            <li><strong>Frustração:</strong> Com atividades muito fáceis ou lentas</li>
            <li><strong>Dificuldades sociais:</strong> Pode ter dificuldade de se conectar com pares</li>
            <li><strong>Asincronia:</strong> Avançado em algumas áreas, normal em outras</li>
            <li><strong>Ansiedade:</strong> Pode ter ansiedade elevada</li>
            <li><strong>Rebeldia:</strong> Questiona regras e autoridade</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Identificar Superdotação</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Teste de QI Profissional</h3>
          <p className="mb-4">
            A forma mais confiável é teste de QI profissional:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>WISC (Wechsler Intelligence Scale for Children):</strong> Para crianças 6-16 anos</li>
            <li><strong>WPPSI:</strong> Para crianças 2.5-7 anos</li>
            <li><strong>QI mínimo:</strong> Geralmente 130+ para superdotação</li>
            <li><strong>Quem faz:</strong> Psicólogo escolar ou clínico especializado</li>
            <li><strong>Custo:</strong> R$ 500-1500</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Observação de Comportamento</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Professores podem identificar sinais</li>
            <li>Pais podem observar características</li>
            <li>Mas observação sozinha não é suficiente</li>
            <li>Deve ser combinada com testes formais</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Desempenho Acadêmico</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Desempenho consistentemente acima da média</li>
            <li>Facilidade com matérias complexas</li>
            <li>Mas desempenho acadêmico não é suficiente (crianças superdotadas podem ter dificuldades escolares)</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Tipos de Superdotação</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Superdotação Intelectual Geral</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>QI alto em todas as áreas</li>
            <li>Desempenho excepcional em múltiplas áreas acadêmicas</li>
            <li>Mais comum</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Superdotação Específica</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Excelência em área específica (matemática, música, arte, etc.)</li>
            <li>QI pode ser alto mas não necessariamente 130+</li>
            <li>Talento excepcional em área específica</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Superdotação Criativa</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Alta criatividade e originalidade</li>
            <li>Pode não ter QI 130+, mas criatividade excepcional</li>
            <li>Produz trabalhos originais e inovadores</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Apoiar Crianças Superdotadas</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Educação Adequada</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Aceleração:</strong> Avançar de série ou matérias específicas</li>
            <li><strong>Enriquecimento:</strong> Atividades adicionais desafiadoras</li>
            <li><strong>Programas para superdotados:</strong> Se disponíveis</li>
            <li><strong>Desafios apropriados:</strong> Não deixar se entediar</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Apoio Emocional</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Reconhecer e validar emoções intensas</li>
            <li>Ajudar a gerenciar perfeccionismo</li>
            <li>Apoiar em dificuldades sociais</li>
            <li>Ensinar resiliência e lidar com falhas</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Oportunidades de Aprendizado</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Bibliotecas, museus, atividades educacionais</li>
            <li>Cursos e programas especializados</li>
            <li>Mentoria em áreas de interesse</li>
            <li>Recursos online e livros avançados</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Conexão Social</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Conectar com outras crianças superdotadas</li>
            <li>Programas e grupos para superdotados</li>
            <li>Ajudar a desenvolver habilidades sociais</li>
            <li>Valorizar diferenças e individualidade</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Mitos Sobre Crianças Superdotadas</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Mito: Todas Crianças Superdotadas Têm Sucesso Acadêmico</h3>
          <p className="mb-4">
            <strong>Realidade:</strong> Algumas crianças superdotadas têm dificuldades escolares 
            devido a tédio, perfeccionismo, ou dificuldades de aprendizado coexistentes.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Mito: Crianças Superdotadas São Bem Ajustadas Socialmente</h3>
          <p className="mb-4">
            <strong>Realidade:</strong> Muitas têm dificuldades sociais por se sentirem diferentes 
            ou por interesses incomuns para a idade.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Mito: Superdotação Garante Sucesso na Vida</h3>
          <p className="mb-4">
            <strong>Realidade:</strong> Superdotação ajuda, mas sucesso depende de apoio, oportunidades, 
            trabalho duro e outros fatores.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Quando Buscar Ajuda Profissional</h2>
          <p className="mb-4">
            Considere avaliação profissional se:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Criança mostra múltiplos sinais de superdotação</li>
            <li>Há dificuldades escolares ou comportamentais</li>
            <li>Precisa de diagnóstico para programas especiais</li>
            <li>Quer entender melhor necessidades educacionais</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            Crianças superdotadas têm capacidades intelectuais excepcionais que se manifestam através 
            de sinais como aprendizado rápido, curiosidade intensa, raciocínio avançado e memória 
            excepcional.
          </p>
          <p className="mb-4">
            Identificar superdotação é importante para fornecer educação e apoio adequados. Isso 
            inclui desafios educacionais apropriados, apoio emocional, oportunidades de aprendizado 
            e conexão social.
          </p>
          <p className="mb-4">
            Se suspeita que seu filho é superdotado, considere avaliação profissional. Mas lembre-se: 
            superdotação é um presente, mas também vem com desafios que precisam de apoio adequado.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Teste de QI para Crianças</h3>
          <p className="text-muted-foreground mb-6">
            Nosso teste de QI pode ajudar a identificar capacidades intelectuais. Embora não seja 
            substituto para avaliação profissional completa, pode dar uma estimativa útil.
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
            {getRelatedArticles("criancas-superdotadas-sinais-caracteristicas", 3).map((article) => (
              <Card
                key={article.slug}
                className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 group cursor-pointer"
              >
                <Link to={`/blog/${article.slug}`} className="block">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                    </div>
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

export default CriancasSuperdotadasSinaisCaracteristicas;

