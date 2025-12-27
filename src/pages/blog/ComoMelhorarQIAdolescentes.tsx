import { Brain, ArrowRight, Lightbulb, BookOpen, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";

const ComoMelhorarQIAdolescentes = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/como-melhorar-qi-adolescentes";
  const articleTitle = "Como Melhorar o QI de Adolescentes: Guia Completo e Científico";
  const articleDescription = "Descubra estratégias científicas para melhorar o QI de adolescentes. Métodos comprovados para desenvolvimento cognitivo, memória, raciocínio e inteligência na adolescência.";
  const publishDate = "2025-01-15";
  const modifiedDate = "2025-01-15";
  
  useSEO({
    title: "Como Melhorar o QI de Adolescentes: Guia Completo e Científico",
    description: articleDescription,
    url: articleUrl,
  });

  useStructuredData([
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": articleTitle,
      "description": articleDescription,
      "image": "https://bomqi.com.br/favicon-brain-icon.png",
      "datePublished": publishDate,
      "dateModified": modifiedDate,
      "author": {
        "@type": "Organization",
        "name": "BomQI"
      },
      "publisher": {
        "@type": "Organization",
        "name": "BomQI",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bomqi.com.br/favicon-brain-icon.png"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://bomqi.com.br"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://bomqi.com.br/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": articleTitle,
          "item": articleUrl
        }
      ]
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
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

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Como melhorar o QI de adolescentes</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Como Melhorar o QI de Adolescentes: Guia Completo e Científico
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2025</time>
          <span>•</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Users className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            A adolescência é um período crucial para o desenvolvimento cognitivo. Com estratégias adequadas, 
            é possível melhorar significativamente o QI de adolescentes. Descubra métodos científicos comprovados 
            para desenvolver inteligência, memória, raciocínio e habilidades cognitivas durante a adolescência.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por Que Melhorar o QI na Adolescência?</h2>
          <p className="mb-4">
            A adolescência é um período de neuroplasticidade significativa, onde o cérebro está especialmente 
            receptivo a mudanças e desenvolvimento. Durante essa fase, o córtex pré-frontal ainda está se 
            desenvolvendo, oferecendo oportunidades únicas para melhorar habilidades cognitivas e aumentar o QI.
          </p>
          <p className="mb-4">
            <strong>Neuroplasticidade:</strong> O cérebro adolescente tem maior capacidade de formar novas 
            conexões neurais e reorganizar circuitos existentes. Isso significa que intervenções adequadas 
            durante a adolescência podem ter impactos duradouros no desenvolvimento cognitivo.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">1. Leitura Regular e Variada</h2>
          <p className="mb-4">
            A leitura é uma das atividades mais eficazes para melhorar o QI de adolescentes. Ler regularmente 
            desenvolve vocabulário, compreensão, raciocínio crítico, e conhecimento geral.
          </p>
          <p className="mb-4">
            <strong>Benefícios:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Expande vocabulário e conhecimento geral</li>
            <li>Melhora compreensão e raciocínio crítico</li>
            <li>Desenvolve habilidades de análise e síntese</li>
            <li>Aumenta capacidade de concentração e foco</li>
            <li>Estimula criatividade e imaginação</li>
          </ul>
          <p className="mb-4">
            <strong>Recomendação:</strong> Incentive adolescentes a ler pelo menos 30 minutos por dia, 
            variando entre ficção, não-ficção, artigos científicos, e literatura clássica.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">2. Exercícios Mentais e Jogos Cognitivos</h2>
          <p className="mb-4">
            Jogos que desafiam o cérebro, como xadrez, sudoku, puzzles, e jogos de estratégia, são excelentes 
            para melhorar habilidades cognitivas e aumentar o QI.
          </p>
          <p className="mb-4">
            <strong>Jogos recomendados:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Xadrez:</strong> Desenvolve raciocínio estratégico, planejamento, e memória</li>
            <li><strong>Sudoku:</strong> Melhora raciocínio lógico e resolução de problemas</li>
            <li><strong>Puzzles:</strong> Desenvolvem habilidades visuoespaciais e paciência</li>
            <li><strong>Jogos de estratégia:</strong> Melhoram planejamento e pensamento crítico</li>
            <li><strong>Apps de treinamento cerebral:</strong> Exercícios específicos para diferentes habilidades cognitivas</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">3. Exercícios Físicos Regulares</h2>
          <p className="mb-4">
            Atividade física regular tem impactos significativos no desenvolvimento cognitivo e QI de adolescentes. 
            Exercícios aumentam fluxo sanguíneo cerebral, promovem neurogênese, e melhoram função cognitiva.
          </p>
          <p className="mb-4">
            <strong>Benefícios cognitivos:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Aumenta produção de BDNF (fator neurotrófico derivado do cérebro)</li>
            <li>Melhora memória e aprendizado</li>
            <li>Reduz estresse e ansiedade</li>
            <li>Aumenta energia e foco</li>
            <li>Promove neuroplasticidade</li>
          </ul>
          <p className="mb-4">
            <strong>Recomendação:</strong> Pelo menos 60 minutos de atividade física moderada a vigorosa 
            por dia, incluindo exercícios aeróbicos, treinamento de força, e atividades esportivas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">4. Sono Adequado e Qualidade</h2>
          <p className="mb-4">
            Sono adequado é crucial para desenvolvimento cognitivo e melhoria do QI. Durante o sono, o cérebro 
            consolida memórias, processa informações, e se recupera para o próximo dia.
          </p>
          <p className="mb-4">
            <strong>Importância do sono:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Consolidação de memórias e aprendizado</li>
            <li>Processamento de informações complexas</li>
            <li>Recuperação e reparo cerebral</li>
            <li>Regulação emocional e bem-estar</li>
            <li>Otimização de função cognitiva diária</li>
          </ul>
          <p className="mb-4">
            <strong>Recomendação:</strong> Adolescentes precisam de 8-10 horas de sono por noite. Estabeleça 
            rotina regular de sono, evite telas antes de dormir, e crie ambiente adequado para descanso.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">5. Nutrição Adequada para o Cérebro</h2>
          <p className="mb-4">
            Nutrição adequada é fundamental para desenvolvimento cognitivo. Certos nutrientes são especialmente 
            importantes para função cerebral e desenvolvimento do QI.
          </p>
          <p className="mb-4">
            <strong>Nutrientes essenciais:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Ômega-3:</strong> Peixes gordurosos, nozes, sementes - essencial para desenvolvimento cerebral</li>
            <li><strong>Antioxidantes:</strong> Frutas, vegetais - protegem células cerebrais</li>
            <li><strong>Ferro:</strong> Carnes, leguminosas - importante para função cognitiva</li>
            <li><strong>Vitaminas B:</strong> Grãos integrais, vegetais - suportam função neurológica</li>
            <li><strong>Proteínas:</strong> Carnes, ovos, leguminosas - necessárias para neurotransmissores</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">6. Aprendizado de Habilidades Complexas</h2>
          <p className="mb-4">
            Aprender habilidades complexas, como música, idiomas, programação, ou artes, desenvolve múltiplas 
            áreas do cérebro e melhora o QI.
          </p>
          <p className="mb-4">
            <strong>Habilidades recomendadas:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Música:</strong> Tocar instrumentos desenvolve coordenação, memória, e processamento auditivo</li>
            <li><strong>Idiomas:</strong> Aprender novos idiomas melhora função executiva e flexibilidade cognitiva</li>
            <li><strong>Programação:</strong> Desenvolve raciocínio lógico, resolução de problemas, e pensamento abstrato</li>
            <li><strong>Artes:</strong> Desenvolvem criatividade, habilidades visuoespaciais, e expressão</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">7. Redução de Estresse e Bem-estar Mental</h2>
          <p className="mb-4">
            Estresse crônico pode prejudicar desenvolvimento cognitivo e limitar melhorias no QI. Gerenciar 
            estresse e promover bem-estar mental é essencial.
          </p>
          <p className="mb-4">
            <strong>Estratégias:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Técnicas de relaxamento e mindfulness</li>
            <li>Atividades recreativas e hobbies</li>
            <li>Suporte social e relacionamentos saudáveis</li>
            <li>Gerenciamento de tempo e organização</li>
            <li>Busca de ajuda profissional quando necessário</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">8. Educação de Qualidade e Estimulação Intelectual</h2>
          <p className="mb-4">
            Educação de qualidade e estimulação intelectual contínua são fundamentais para desenvolvimento 
            cognitivo e melhoria do QI.
          </p>
          <p className="mb-4">
            <strong>Elementos importantes:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Acesso a educação de qualidade</li>
            <li>Desafios intelectuais apropriados</li>
            <li>Oportunidades de aprendizado além da escola</li>
            <li>Suporte educacional quando necessário</li>
            <li>Ambiente que valoriza aprendizado e curiosidade</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">9. Limitação de Tempo de Tela e Uso Consciente de Tecnologia</h2>
          <p className="mb-4">
            Embora tecnologia possa ser útil, uso excessivo de telas, especialmente redes sociais e entretenimento 
            passivo, pode prejudicar desenvolvimento cognitivo.
          </p>
          <p className="mb-4">
            <strong>Recomendações:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Limitar tempo de tela a 2-3 horas por dia (além de uso educacional)</li>
            <li>Priorizar uso educacional e criativo de tecnologia</li>
            <li>Evitar uso de telas antes de dormir</li>
            <li>Equilibrar tempo online com atividades offline</li>
            <li>Usar tecnologia para aprendizado e desenvolvimento de habilidades</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">10. Ambiente Enriquecedor e Suporte</h2>
          <p className="mb-4">
            Um ambiente enriquecedor, com recursos educacionais, livros, oportunidades de aprendizado, e suporte 
            adequado, é essencial para desenvolvimento cognitivo.
          </p>
          <p className="mb-4">
            <strong>Elementos de ambiente enriquecedor:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Acesso a livros e materiais educacionais</li>
            <li>Oportunidades de exploração e descoberta</li>
            <li>Suporte familiar e educacional</li>
            <li>Recursos para hobbies e interesses</li>
            <li>Ambiente seguro e estimulante</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            Melhorar o QI de adolescentes é possível através de estratégias científicas comprovadas. Leitura regular, 
            exercícios mentais, atividade física, sono adequado, nutrição, aprendizado de habilidades complexas, 
            redução de estresse, educação de qualidade, uso consciente de tecnologia, e ambiente enriquecedor são 
            todos fatores importantes.
          </p>
          <p className="mb-4">
            É importante lembrar que desenvolvimento cognitivo é um processo contínuo e que resultados podem variar. 
            O mais importante é criar um ambiente que promova aprendizado, curiosidade, e desenvolvimento saudável, 
            permitindo que adolescentes alcancem seu potencial cognitivo máximo.
          </p>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI Atual</h3>
          <p className="text-muted-foreground mb-6">
            Quer saber seu nível atual de inteligência? Faça nosso teste de QI em apenas 3 minutos 
            e descubra seu potencial cognitivo.
          </p>
          <Link to="/teste">
            <Button size="lg" className="gap-2">
              Fazer o Teste Agora
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Continue Lendo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("como-melhorar-qi-adolescentes", 3).map((article) => (
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

export default ComoMelhorarQIAdolescentes;

