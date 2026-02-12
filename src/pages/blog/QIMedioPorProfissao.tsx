import { Brain, ArrowRight, Briefcase, TrendingUp, BookOpen, Clock, Award } from "lucide-react";
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

const QIMedioPorProfissao = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/qi-medio-por-profissao";
  const articleTitle = "QI Médio por Profissão: Quais Carreiras Exigem Maior Inteligência?";
  const articleDescription = "Descubra o QI médio por profissão. Ranking completo de carreiras, análise científica sobre correlação entre QI e sucesso profissional e fatores que influenciam.";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "QIMedioPorProfissao, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-medio-por-profissao",
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
          <span>QI Médio por Profissão</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          QI Médio por Profissão: Quais Carreiras Exigem Maior Inteligência?
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
          <span>•</span>
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Briefcase className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Diferentes profissões atraem e exigem diferentes níveis de inteligência. Mas qual é o 
            QI médio por profissão? Neste artigo, exploramos dados científicos sobre QI médio em 
            diversas carreiras, a relação entre inteligência e sucesso profissional, e o que isso 
            realmente significa para sua escolha de carreira.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Médio por Profissão: Ranking Científico</h2>
          <p className="mb-4">
            Estudos baseados em testes de QI aplicados a profissionais de diversas áreas revelam 
            padrões interessantes. Os dados abaixo são baseados em pesquisas como as de 
            <strong> Linda Gottfredson</strong> e <strong>Richard Herrnstein</strong>:
          </p>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4">Profissões com Maior QI Médio</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-background rounded border-2 border-primary/30">
                <span><strong>1. Físicos Teóricos</strong></span>
                <span className="text-primary font-bold">130+</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded border-2 border-primary/30">
                <span><strong>2. Matemáticos</strong></span>
                <span className="text-primary font-bold">130</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>3. Engenheiros de Software</strong></span>
                <span className="text-primary font-bold">128</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>4. Médicos (especialidades cirúrgicas)</strong></span>
                <span className="text-primary font-bold">125</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>5. Advogados</strong></span>
                <span className="text-primary font-bold">125</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>6. Engenheiros (geral)</strong></span>
                <span className="text-primary font-bold">123</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>7. Cientistas (pesquisa)</strong></span>
                <span className="text-primary font-bold">123</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>8. Professores Universitários</strong></span>
                <span className="text-primary font-bold">122</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>9. Arquitetos</strong></span>
                <span className="text-primary font-bold">120</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>10. Contadores</strong></span>
                <span className="text-primary font-bold">118</span>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4">Profissões com QI Médio Moderado-Alto</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>Professores (ensino médio)</strong></span>
                <span className="text-primary font-bold">115</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>Enfermeiros</strong></span>
                <span className="text-primary font-bold">113</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>Policiais</strong></span>
                <span className="text-primary font-bold">110</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>Bombeiros</strong></span>
                <span className="text-primary font-bold">110</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>Vendedores</strong></span>
                <span className="text-primary font-bold">108</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>Secretários</strong></span>
                <span className="text-primary font-bold">105</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>Operadores de máquinas</strong></span>
                <span className="text-primary font-bold">103</span>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4">Profissões com QI Médio na Média</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>Eletricistas</strong></span>
                <span className="text-primary font-bold">100</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>Carpinteiros</strong></span>
                <span className="text-primary font-bold">98</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>Motoristas</strong></span>
                <span className="text-primary font-bold">97</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>Garçons</strong></span>
                <span className="text-primary font-bold">95</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>Operários (geral)</strong></span>
                <span className="text-primary font-bold">95</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg my-6 border-l-4 border-yellow-500">
            <p className="text-sm">
              <strong>⚠️ Importante:</strong> Esses valores são médias e há enorme variação individual. 
              Muitas pessoas com QI alto escolhem profissões "menos intelectuais" por paixão, 
              e vice-versa. QI não determina sucesso ou felicidade profissional.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por Que Algumas Profissões Têm QI Médio Mais Alto?</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Exigências Cognitivas da Profissão</h3>
          <p className="mb-4">
            Algumas profissões exigem habilidades cognitivas específicas que pessoas com QI mais 
            alto desenvolvem melhor:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Raciocínio abstrato complexo:</strong> Matemáticos, físicos, engenheiros</li>
            <li><strong>Análise crítica profunda:</strong> Advogados, juízes, pesquisadores</li>
            <li><strong>Resolução de problemas multistep:</strong> Médicos, engenheiros de software</li>
            <li><strong>Memória de trabalho alta:</strong> Cirurgiões, pilotos, controladores de tráfego aéreo</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Filtros Educacionais</h3>
          <p className="mb-4">
            Muitas profissões de alto QI exigem educação superior avançada, que funciona como filtro:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Graduação:</strong> Filtra pessoas com QI mínimo ~110</li>
            <li><strong>Pós-graduação:</strong> Filtra para QI mínimo ~115</li>
            <li><strong>Doutorado:</strong> Filtra para QI mínimo ~120</li>
            <li><strong>Pesquisa acadêmica:</strong> Filtra para QI mínimo ~125</li>
          </ul>
          <p className="mb-4">
            Isso não significa que pessoas com QI mais baixo não possam ter sucesso acadêmico, 
            mas estatisticamente, há uma correlação.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Processos Seletivos</h3>
          <p className="mb-4">
            Muitas empresas e organizações usam testes cognitivos em processos seletivos:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Testes de aptidão:</strong> Filtram candidatos por QI</li>
            <li><strong>Entrevistas técnicas:</strong> Avaliam raciocínio e resolução de problemas</li>
            <li><strong>Casos práticos:</strong> Testam habilidades cognitivas específicas</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI e Sucesso Profissional: A Correlação Real</h2>
          <p className="mb-4">
            Pesquisas mostram que QI tem correlação moderada com sucesso profissional, mas não é 
            o único fator:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Correlação QI x Sucesso por Profissão</h3>
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">Alta Correlação (r = 0.5-0.7):</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Profissões acadêmicas e de pesquisa</li>
                  <li>Engenharia e ciências exatas</li>
                  <li>Medicina (especialidades complexas)</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Correlação Moderada (r = 0.3-0.5):</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Gestão e liderança</li>
                  <li>Vendas complexas</li>
                  <li>Profissões técnicas</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Baixa Correlação (r = 0.1-0.3):</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Vendas simples</li>
                  <li>Atendimento ao cliente</li>
                  <li>Profissões que dependem mais de habilidades sociais</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Outros Fatores Importantes para Sucesso</h3>
          <p className="mb-4">
            QI explica apenas parte do sucesso profissional. Outros fatores são igualmente ou mais importantes:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Inteligência Emocional (QE):</strong> Especialmente em liderança e vendas</li>
            <li><strong>Persistência e disciplina:</strong> Mais importante que QI em muitas áreas</li>
            <li><strong>Habilidades sociais:</strong> Networking, comunicação, empatia</li>
            <li><strong>Criatividade:</strong> Não correlaciona diretamente com QI</li>
            <li><strong>Experiência e expertise:</strong> Desenvolvida ao longo do tempo</li>
            <li><strong>Oportunidades e sorte:</strong> Fatores externos significativos</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Profissões que Valorizam QI Alto</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Ciências e Pesquisa</h3>
          <p className="mb-4">
            Profissões que exigem raciocínio abstrato complexo e análise profunda:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Físicos, matemáticos, químicos</li>
            <li>Pesquisadores em geral</li>
            <li>QI médio: 120-130+</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Tecnologia e Engenharia</h3>
          <p className="mb-4">
            Áreas que exigem resolução de problemas complexos e pensamento lógico:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Engenheiros de software, desenvolvedores</li>
            <li>Engenheiros (civil, elétrica, mecânica)</li>
            <li>Arquiteto de sistemas</li>
            <li>QI médio: 118-128</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Medicina e Saúde</h3>
          <p className="mb-4">
            Especialidades que exigem análise complexa e tomada de decisão rápida:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Cirurgiões, anestesistas</li>
            <li>Médicos especialistas</li>
            <li>QI médio: 120-125</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Direito</h3>
          <p className="mb-4">
            Profissão que exige raciocínio lógico, análise crítica e memória:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Advogados, juízes, promotores</li>
            <li>QI médio: 120-125</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Profissões Onde QI é Menos Crítico</h2>
          <p className="mb-4">
            Muitas profissões valorizam outras habilidades mais que QI:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Vendas:</strong> Habilidades sociais e persistência são mais importantes</li>
            <li><strong>Artes e criatividade:</strong> Criatividade não correlaciona diretamente com QI</li>
            <li><strong>Esportes:</strong> Habilidades físicas e disciplina</li>
            <li><strong>Atendimento ao cliente:</strong> Empatia e comunicação</li>
            <li><strong>Liderança:</strong> Inteligência emocional e visão estratégica</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que Isso Significa para Você?</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. QI Não Define Seu Potencial</h3>
          <p className="mb-4">
            Mesmo que sua profissão tenha QI médio alto, isso não significa que você precisa ter 
            exatamente esse QI para ter sucesso. Muitas pessoas com QI abaixo da média da profissão 
            têm sucesso através de:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Trabalho duro e persistência</li>
            <li>Especialização em áreas específicas</li>
            <li>Desenvolvimento de expertise ao longo do tempo</li>
            <li>Habilidades complementares (social, emocional)</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Escolha Profissional Baseada em Múltiplos Fatores</h3>
          <p className="mb-4">
            Ao escolher uma profissão, considere:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Interesse e paixão:</strong> Mais importante que QI</li>
            <li><strong>Valores pessoais:</strong> O que é importante para você?</li>
            <li><strong>Habilidades naturais:</strong> Não apenas QI, mas também criatividade, social, etc.</li>
            <li><strong>Mercado de trabalho:</strong> Oportunidades e demanda</li>
            <li><strong>Estilo de vida desejado:</strong> Trabalho remoto, horários, etc.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Desenvolvimento Contínuo</h3>
          <p className="mb-4">
            Independente da sua profissão atual, você pode:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Desenvolver seu QI através de treino cognitivo</li>
            <li>Adquirir conhecimento e expertise na sua área</li>
            <li>Desenvolver habilidades complementares</li>
            <li>Buscar educação continuada</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Limitações dos Dados</h2>
          <p className="mb-4">
            É importante entender as limitações dos dados de QI por profissão:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Variação individual enorme:</strong> A média não define indivíduos</li>
            <li><strong>Dados podem estar desatualizados:</strong> Profissões evoluem</li>
            <li><strong>Amostras podem não ser representativas:</strong> Dependem de quem foi testado</li>
            <li><strong>QI não mede todas as formas de inteligência:</strong> Criatividade, emocional, prática</li>
            <li><strong>Sucesso profissional depende de múltiplos fatores:</strong> QI é apenas um deles</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            Diferentes profissões têm QI médio diferente, refletindo as exigências cognitivas e 
            filtros educacionais de cada área. No entanto, QI é apenas um fator entre muitos que 
            influenciam sucesso profissional.
          </p>
          <p className="mb-4">
            O importante não é ter o QI "certo" para uma profissão, mas escolher uma carreira 
            alinhada com seus interesses, valores e habilidades, e então trabalhar continuamente 
            para desenvolver suas capacidades - cognitivas e outras.
          </p>
          <p className="mb-4">
            Descobrir seu QI pode ajudar a entender suas forças cognitivas e áreas de desenvolvimento, 
            mas não deve limitar suas escolhas profissionais. Sucesso vem de paixão, trabalho duro, 
            e desenvolvimento contínuo, não apenas de um número.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI e Potencial Profissional</h3>
          <p className="text-muted-foreground mb-6">
            Entenda suas forças cognitivas e como elas se relacionam com diferentes profissões. 
            Faça nosso teste científico completo e descubra seu QI real.
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
            {getRelatedArticles("qi-medio-por-profissao", 3).map((article) => (
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

export default QIMedioPorProfissao;

