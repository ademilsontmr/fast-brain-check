import { Brain, ArrowRight, TrendingUp, Briefcase, Target, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import { useSEO } from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const QISucessoProfissional = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/qi-sucesso-profissional";
  const articleTitle = "QI e Sucesso Profissional: Como a Inteligência Impacta sua Carreira";
  const articleDescription = "Descubra como o QI influencia o sucesso profissional, quais profissões valorizam mais a inteligência e como desenvolver suas capacidades cognitivas para avançar na carreira.";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "QISucessoProfissional, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-sucesso-profissional",
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
          <span>QI e Sucesso Profissional</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          QI e Sucesso Profissional: Como a Inteligência Impacta sua Carreira
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
          <span>•</span>
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <TrendingUp className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            O QI realmente importa para o sucesso profissional? Quais carreiras valorizam mais a inteligência? 
            E como você pode usar seu QI (ou desenvolvê-lo) para avançar na carreira? Este artigo explora 
            a relação entre inteligência e realização profissional com dados científicos e insights práticos.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI e Sucesso Profissional: O Que a Ciência Diz</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Correlação entre QI e Rendimento</h3>
          <p className="mb-4">
            Estudos longitudinais mostram correlação moderada a forte entre QI e sucesso profissional:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>QI e salário:</strong> Cada ponto de QI adicional correlaciona com 1-2% de aumento salarial</li>
            <li><strong>QI e nível de ocupação:</strong> Profissões mais complexas exigem QI mais alto</li>
            <li><strong>QI e progressão de carreira:</strong> Pessoas com QI alto tendem a subir mais rápido</li>
            <li><strong>QI e estabilidade:</strong> Menor risco de desemprego e maior satisfação no trabalho</li>
          </ul>
          <p className="mb-4">
            <strong>Importante:</strong> Correlação não é causalidade. QI alto não garante sucesso, mas aumenta 
            significativamente as probabilidades.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">QI Mínimo por Profissão</h3>
          <p className="mb-4">
            Pesquisas identificaram QI médio por categoria profissional:
          </p>
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <ul className="space-y-3">
              <li>
                <strong>Profissões intelectuais (médicos, engenheiros, cientistas):</strong> QI médio 115-130
              </li>
              <li>
                <strong>Profissionais técnicos (programadores, contadores):</strong> QI médio 105-115
              </li>
              <li>
                <strong>Gerentes e administradores:</strong> QI médio 100-115
              </li>
              <li>
                <strong>Vendas e serviços:</strong> QI médio 90-105
              </li>
              <li>
                <strong>Trabalhos manuais qualificados:</strong> QI médio 85-100
              </li>
              <li>
                <strong>Trabalhos não qualificados:</strong> QI médio 80-95
              </li>
            </ul>
          </div>
          <p className="mb-4">
            <strong>Nota:</strong> Esses são médias. Há exceções em todas as categorias. QI é apenas um fator.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Profissões que Mais Valorizam QI Alto</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Ciência e Pesquisa</h3>
          <p className="mb-4">
            Físicos, matemáticos, pesquisadores científicos geralmente têm QI médio de 125-140. 
            Essas profissões exigem:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Raciocínio abstrato complexo</li>
            <li>Capacidade de trabalhar com conceitos teóricos</li>
            <li>Pensamento crítico profundo</li>
            <li>Resolução de problemas não rotineiros</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Medicina e Cirurgia</h3>
          <p className="mb-4">
            Médicos, especialmente cirurgiões e especialistas, têm QI médio de 120-135. Exigem:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Memória de trabalho excepcional</li>
            <li>Raciocínio rápido sob pressão</li>
            <li>Integração de múltiplas informações simultaneamente</li>
            <li>Tomada de decisão crítica</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Engenharia e Tecnologia</h3>
          <p className="mb-4">
            Engenheiros e desenvolvedores de software têm QI médio de 115-130. Precisam de:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Raciocínio lógico e matemático</li>
            <li>Pensamento sistêmico</li>
            <li>Resolução de problemas técnicos complexos</li>
            <li>Aprendizado contínuo de novas tecnologias</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Direito</h3>
          <p className="mb-4">
            Advogados, especialmente em grandes escritórios, têm QI médio de 115-125. Exigem:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Raciocínio verbal sofisticado</li>
            <li>Memória de trabalho para casos complexos</li>
            <li>Pensamento analítico e argumentativo</li>
            <li>Capacidade de processar grandes volumes de informação</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">5. Consultoria Estratégica</h3>
          <p className="mb-4">
            Consultores de empresas como McKinsey, BCG têm QI médio de 125-135. Precisam de:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Raciocínio estratégico de alto nível</li>
            <li>Pensamento sistêmico e multidisciplinar</li>
            <li>Resolução rápida de problemas complexos</li>
            <li>Comunicação de ideias complexas</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Não É Tudo: Outros Fatores Importantes</h2>
          
          <div className="bg-yellow-500/10 border border-yellow-500/30 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4">Fatores que Também Determinam Sucesso:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Inteligência Emocional (QE):</strong> Pode ser mais importante que QI em liderança</li>
              <li><strong>Persistência e disciplina:</strong> "Grit" é preditor forte de sucesso</li>
              <li><strong>Rede de relacionamentos:</strong> Networking e conexões sociais</li>
              <li><strong>Oportunidades:</strong> Acesso a educação, recursos e mentores</li>
              <li><strong>Personalidade:</strong> Conscienciosidade, abertura a experiências</li>
              <li><strong>Habilidades específicas:</strong> Conhecimento técnico e experiência</li>
              <li><strong>Sorte e timing:</strong> Estar no lugar certo na hora certa</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Mínimo vs. QI Ideal</h2>
          <p className="mb-4">
            Há uma diferença crucial entre QI mínimo necessário e QI ideal:
          </p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">QI Mínimo (Threshold)</h3>
          <p className="mb-4">
            Para muitas profissões, há um QI mínimo necessário para desempenho adequado. Acima desse 
            threshold, QI adicional tem retornos decrescentes.
          </p>
          <p className="mb-4">
            <strong>Exemplo:</strong> Um programador precisa de QI mínimo de ~100 para ser competente. 
            QI de 130 vs 120 não necessariamente faz diferença significativa no desempenho.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">QI Ideal (Para Excelência)</h3>
          <p className="mb-4">
            Para alcançar excelência e inovação em qualquer campo, QI mais alto continua sendo vantajoso:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Permite trabalhar com problemas mais complexos</li>
            <li>Facilita aprendizado mais rápido</li>
            <li>Permite ver conexões que outros não veem</li>
            <li>Facilita inovação e pensamento criativo</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Usar Seu QI para Avançar na Carreira</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Escolha Profissões que Valorizam Inteligência</h3>
          <p className="mb-4">
            Se você tem QI alto, considere carreiras que:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Exigem raciocínio complexo e resolução de problemas</li>
            <li>Valorizam aprendizado contínuo</li>
            <li>Recompensam inovação e criatividade</li>
            <li>Têm barreiras de entrada baseadas em capacidade intelectual</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Desenvolva Habilidades Complementares</h3>
          <p className="mb-4">
            QI alto sozinho não basta. Desenvolva:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Inteligência emocional:</strong> Para liderança e relacionamentos</li>
            <li><strong>Comunicação:</strong> Para transmitir ideias complexas</li>
            <li><strong>Networking:</strong> Para criar oportunidades</li>
            <li><strong>Habilidades técnicas específicas:</strong> Para sua área</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Busque Desafios que Aproveitem seu QI</h3>
          <p className="mb-4">
            Evite trabalhos que não desafiam sua capacidade. Busque:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Problemas complexos e não rotineiros</li>
            <li>Projetos que exigem aprendizado contínuo</li>
            <li>Posições que valorizam inovação</li>
            <li>Ambientes que recompensam excelência intelectual</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Melhore seu QI (Se Estiver Abaixo do Ideal)</h3>
          <p className="mb-4">
            Se seu QI está abaixo do ideal para sua carreira desejada:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Treine cognitivamente (Dual N-Back, puzzles, aprendizado contínuo)</li>
            <li>Foque em experiência e expertise (compensa QI médio)</li>
            <li>Desenvolva habilidades específicas altamente valorizadas</li>
            <li>Use persistência e trabalho duro (supera QI em muitos casos)</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI em Diferentes Estágios da Carreira</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Início de Carreira</h3>
          <p className="mb-4">
            QI alto ajuda especialmente em:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Processos seletivos competitivos</li>
            <li>Aprendizado rápido de novas habilidades</li>
            <li>Destaque em testes e avaliações</li>
            <li>Rápida progressão inicial</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Meio de Carreira</h3>
          <p className="mb-4">
            Nesta fase, outros fatores ganham importância:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Experiência e expertise</li>
            <li>Rede de relacionamentos</li>
            <li>Liderança e gestão de pessoas</li>
            <li>Resultados e realizações</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Carreira Avançada</h3>
          <p className="mb-4">
            Para posições sênior e executivas:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>QI continua importante, mas experiência e sabedoria contam mais</li>
            <li>Inteligência emocional e social são cruciais</li>
            <li>Visão estratégica e pensamento sistêmico</li>
            <li>Capacidade de tomar decisões complexas</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Mitos sobre QI e Carreira</h2>
          
          <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4">Mitos Comuns:</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>"QI alto garante sucesso":</strong> Falso. QI é apenas um fator. Persistência, 
                oportunidades e outras habilidades são cruciais.
              </li>
              <li>
                <strong>"QI baixo impede sucesso":</strong> Falso. Muitas pessoas com QI médio alcançam 
                grande sucesso através de trabalho duro e expertise.
              </li>
              <li>
                <strong>"QI não pode melhorar":</strong> Falso. Com treino adequado, QI pode aumentar 
                em 5-10 pontos.
              </li>
              <li>
                <strong>"QI é tudo que importa":</strong> Falso. Inteligência emocional, personalidade 
                e habilidades específicas são igualmente importantes.
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estratégias Práticas</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Se Você Tem QI Alto (115+)</h3>
          <ol className="list-decimal pl-6 mb-4 space-y-3">
            <li>Escolha carreiras que valorizam inteligência</li>
            <li>Desenvolva habilidades complementares (QE, comunicação)</li>
            <li>Busque desafios que aproveitem sua capacidade</li>
            <li>Evite trabalhos que não desafiam</li>
            <li>Use sua capacidade para inovar e criar valor</li>
          </ol>

          <h3 className="text-2xl font-bold mt-8 mb-4">Se Você Tem QI Médio (85-115)</h3>
          <ol className="list-decimal pl-6 mb-4 space-y-3">
            <li>Foque em desenvolver expertise profunda em sua área</li>
            <li>Use persistência e trabalho duro para compensar</li>
            <li>Desenvolva habilidades específicas altamente valorizadas</li>
            <li>Construa rede de relacionamentos forte</li>
            <li>Considere treinar cognitivamente para melhorar QI</li>
          </ol>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            QI importa para sucesso profissional, especialmente em profissões que exigem raciocínio complexo. 
            Mas não é o único fator, nem o mais importante em todas as situações. O sucesso real vem de 
            combinar inteligência com trabalho duro, habilidades sociais, experiência e oportunidades.
          </p>
          <p className="mb-4">
            Conheça seu QI, entenda como ele se relaciona com suas aspirações profissionais, e desenvolva 
            um plano que aproveite seus pontos fortes enquanto trabalha em áreas de desenvolvimento.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI e Planeje sua Carreira</h3>
          <p className="text-muted-foreground mb-6">
            Entenda como seu QI se relaciona com suas aspirações profissionais. Faça nosso teste científico 
            e receba análise completa com insights sobre como usar suas capacidades cognitivas para avançar 
            na carreira.
          </p>
          <Link to="/teste">
            <Button size="lg" className="gap-2">
              Fazer o Teste de QI Agora
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
            {getRelatedArticles("qi-sucesso-profissional", 3).map((article) => (
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

export default QISucessoProfissional;

