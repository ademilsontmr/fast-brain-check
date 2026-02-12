import { Brain, ArrowRight, Heart, Users, BookOpen, Clock, TrendingUp } from "lucide-react";
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

const DiferencaQIEInteligenciaEmocional = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/diferenca-qi-inteligencia-emocional";
  const articleTitle = "Diferença entre QI e Inteligência Emocional: Guia Completo";
  const articleDescription = "Entenda as diferenças fundamentais entre QI e inteligência emocional (QE). Como cada um funciona, qual é mais importante, e como desenvolver ambos.";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "DiferencaQIEInteligenciaEmocional, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "diferenca-qi-inteligencia-emocional",
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
          <span>Diferença entre QI e Inteligência Emocional</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Diferença entre QI e Inteligência Emocional: Guia Completo
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
          
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Heart className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            QI e Inteligência Emocional (QE) são dois tipos diferentes de inteligência, cada um 
            importante em contextos distintos. Neste guia completo, exploramos as diferenças 
            fundamentais, como cada um funciona, qual é mais importante em diferentes situações, 
            e como desenvolver ambos.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que é QI?</h2>
          <p className="mb-4">
            <strong>QI (Quociente de Inteligência)</strong> mede inteligência analítica e lógica:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Foco:</strong> Raciocínio lógico, resolução de problemas, memória de trabalho</li>
            <li><strong>Medido por:</strong> Testes padronizados (WAIS, WISC, etc.)</li>
            <li><strong>Habilidades:</strong> Matemática, lógica, análise, compreensão verbal</li>
            <li><strong>Estabilidade:</strong> Relativamente estável ao longo da vida</li>
            <li><strong>Correlação:</strong> Com desempenho acadêmico e sucesso em áreas técnicas</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que é Inteligência Emocional (QE)?</h2>
          <p className="mb-4">
            <strong>Inteligência Emocional (QE ou EQ)</strong> mede capacidade de entender e gerenciar emoções:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Foco:</strong> Emoções próprias e dos outros, relacionamentos, empatia</li>
            <li><strong>Componentes principais:</strong> Autoconsciência, autorregulação, empatia, habilidades sociais</li>
            <li><strong>Habilidades:</strong> Comunicação, liderança, resolução de conflitos, trabalho em equipe</li>
            <li><strong>Estabilidade:</strong> Pode ser desenvolvida significativamente</li>
            <li><strong>Correlação:</strong> Com sucesso em liderança, vendas, relacionamentos</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Diferenças Fundamentais</h2>
          
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4">Comparação Direta</h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">QI (Inteligência Cognitiva)</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Raciocínio lógico e analítico</li>
                  <li>Resolução de problemas abstratos</li>
                  <li>Memória de trabalho</li>
                  <li>Compreensão verbal e matemática</li>
                  <li>Relativamente fixo</li>
                  <li>Medido por testes padronizados</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">QE (Inteligência Emocional)</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Reconhecimento e gestão de emoções</li>
                  <li>Empatia e compreensão social</li>
                  <li>Habilidades interpessoais</li>
                  <li>Autoconsciência e autorregulação</li>
                  <li>Altamente desenvolvível</li>
                  <li>Medido por questionários e observação</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Componentes da Inteligência Emocional</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Autoconsciência</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Reconhecer suas próprias emoções</li>
            <li>Entender como emoções afetam pensamentos e comportamento</li>
            <li>Conhecer seus pontos fortes e fracos</li>
            <li>Ter autoconfiança realista</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Autorregulação</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Controlar impulsos e emoções</li>
            <li>Adaptar-se a mudanças</li>
            <li>Manter integridade e confiabilidade</li>
            <li>Ser inovador e aberto a novas ideias</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Motivação</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Motivação intrínseca (não apenas externa)</li>
            <li>Persistência diante de obstáculos</li>
            <li>Comprometimento com objetivos</li>
            <li>Otimismo e iniciativa</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Empatia</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Entender emoções dos outros</li>
            <li>Reconhecer necessidades e preocupações alheias</li>
            <li>Ser sensível a dinâmicas de grupo</li>
            <li>Servir outros (liderança servidora)</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">5. Habilidades Sociais</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Comunicação eficaz</li>
            <li>Influência e persuasão</li>
            <li>Liderança</li>
            <li>Resolução de conflitos</li>
            <li>Trabalho em equipe</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Qual é Mais Importante?</h2>
          <p className="mb-4">
            A resposta depende do contexto:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">QI é Mais Importante Para:</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Áreas acadêmicas:</strong> Matemática, física, engenharia, pesquisa</li>
            <li><strong>Profissões técnicas:</strong> Programação, análise de dados, ciências</li>
            <li><strong>Resolução de problemas complexos:</strong> Que exigem raciocínio abstrato</li>
            <li><strong>Testes e exames:</strong> Que avaliam conhecimento e raciocínio</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">QE é Mais Importante Para:</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Liderança:</strong> Gerenciar pessoas, motivar equipes</li>
            <li><strong>Vendas:</strong> Entender clientes, construir relacionamentos</li>
            <li><strong>Relacionamentos:</strong> Pessoais e profissionais</li>
            <li><strong>Trabalho em equipe:</strong> Colaboração eficaz</li>
            <li><strong>Resolução de conflitos:</strong> Negociação, mediação</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Ideal: Ter Ambos</h3>
          <p className="mb-4">
            <strong>A combinação de QI alto e QE alto é o mais poderoso:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>QI alto fornece capacidade intelectual</li>
            <li>QE alto permite aplicar essa capacidade efetivamente</li>
            <li>Líderes mais eficazes têm ambos</li>
            <li>Profissionais de maior sucesso combinam ambos</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Correlação entre QI e QE</h2>
          <p className="mb-4">
            Pesquisas mostram que QI e QE são <strong>relativamente independentes</strong>:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Correlação baixa:</strong> r = 0.1-0.3 (muito baixa correlação)</li>
            <li><strong>Significado:</strong> Ter QI alto não garante QE alto, e vice-versa</li>
            <li><strong>Exemplos:</strong> Pessoas podem ter QI muito alto mas QE baixo, ou QI médio mas QE muito alto</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI vs QE no Sucesso Profissional</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">QI e Sucesso</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Correlação moderada:</strong> QI explica ~20-30% da variação em sucesso profissional</li>
            <li><strong>Mais importante em:</strong> Profissões técnicas, acadêmicas, de pesquisa</li>
            <li><strong>Limitação:</strong> QI muito alto pode ser desnecessário para muitas funções</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">QE e Sucesso</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Correlação moderada-alta:</strong> QE explica ~25-35% da variação em sucesso de liderança</li>
            <li><strong>Mais importante em:</strong> Liderança, vendas, gestão, relacionamentos</li>
            <li><strong>Vantagem:</strong> QE pode ser desenvolvida ao longo da vida</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Desenvolver Inteligência Emocional</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Autoconsciência</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Praticar mindfulness e meditação</li>
            <li>Manter diário de emoções</li>
            <li>Pedir feedback sobre como você é percebido</li>
            <li>Refletir sobre reações emocionais</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Autorregulação</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Pausar antes de reagir</li>
            <li>Praticar técnicas de respiração</li>
            <li>Desenvolver estratégias de coping</li>
            <li>Gerenciar estresse efetivamente</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Empatia</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Praticar escuta ativa</li>
            <li>Tentar ver situações da perspectiva dos outros</li>
            <li>Ler literatura e assistir filmes que explorem emoções humanas</li>
            <li>Voluntariar-se e ajudar outros</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Habilidades Sociais</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Praticar comunicação clara e assertiva</li>
            <li>Desenvolver habilidades de negociação</li>
            <li>Participar de grupos e atividades sociais</li>
            <li>Buscar oportunidades de liderança</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Exemplos Práticos</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Situação: Conflito no Trabalho</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>QI alto:</strong> Analisa o problema logicamente, encontra soluções técnicas</li>
            <li><strong>QE alto:</strong> Entende emoções envolvidas, comunica efetivamente, resolve conflito</li>
            <li><strong>Ideal:</strong> Combina análise lógica (QI) com gestão emocional (QE)</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Situação: Liderar uma Equipe</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>QI alto:</strong> Entende estratégia, planeja eficientemente</li>
            <li><strong>QE alto:</strong> Motiva equipe, resolve conflitos, constrói relacionamentos</li>
            <li><strong>Ideal:</strong> Estratégia inteligente (QI) + liderança efetiva (QE)</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            QI e Inteligência Emocional são tipos diferentes de inteligência, cada um importante 
            em contextos distintos. QI mede capacidade analítica e lógica, enquanto QE mede 
            capacidade de entender e gerenciar emoções.
          </p>
          <p className="mb-4">
            Para máximo sucesso e bem-estar, é ideal desenvolver ambos. QI alto fornece capacidade 
            intelectual, enquanto QE alto permite aplicar essa capacidade efetivamente em relacionamentos 
            e situações sociais.
          </p>
          <p className="mb-4">
            A boa notícia é que QE pode ser desenvolvida significativamente ao longo da vida, enquanto 
            QI é mais estável mas também pode ser melhorado com treino e educação.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">
            Conhecer seu QI é o primeiro passo para entender suas capacidades cognitivas. Faça nosso 
            teste científico completo e descubra seu QI real.
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
            {getRelatedArticles("diferenca-qi-inteligencia-emocional", 3).map((article) => (
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

export default DiferencaQIEInteligenciaEmocional;

