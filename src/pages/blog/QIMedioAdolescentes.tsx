import { Brain, ArrowRight, Lightbulb, BookOpen, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";

const QIMedioAdolescentes = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/qi-medio-adolescentes";
  const articleTitle = "QI Médio de Adolescentes: Dados Científicos e Desenvolvimento Cognitivo";
  const articleDescription = "Descubra o QI médio de adolescentes, como a inteligência se desenvolve na adolescência, fatores que influenciam e como otimizar o desenvolvimento cognitivo nessa fase.";
  const publishDate = "2025-01-15";
  const modifiedDate = "2025-01-15";
  
  useSEO({
    title: "QI Médio de Adolescentes: Dados Científicos e Desenvolvimento Cognitivo",
    description: articleDescription,
    url: articleUrl,
    keywords: "QI médio adolescentes, inteligência adolescência, QI teens, adolescentes QI, QI juventude, inteligência jovens, QI médio jovens, adolescentes inteligentes, QI faixa etária adolescente, cognição adolescência",
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
        "name": "Equipe Bom QI"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Equipe Bom QI",
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
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>QI médio de adolescentes</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          QI Médio de Adolescentes: Dados Científicos e Desenvolvimento Cognitivo
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
            A adolescência é um período crucial para o desenvolvimento cognitivo. O QI médio de adolescentes 
            é aproximadamente 100, mas essa fase da vida apresenta mudanças significativas na inteligência 
            e oportunidades únicas para desenvolvimento cognitivo. Descubra os dados científicos sobre QI 
            em adolescentes e como otimizar o desenvolvimento.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Médio de Adolescentes</h2>
          <p className="mb-4">
            O QI médio de adolescentes, assim como em outras faixas etárias, é padronizado em 100, com desvio 
            padrão de 15. Isso significa que aproximadamente 68% dos adolescentes têm QI entre 85 e 115, 
            enquanto 95% têm QI entre 70 e 130.
          </p>
          <p className="mb-4">
            <strong>Distribuição:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>QI abaixo de 70: aproximadamente 2,5% dos adolescentes</li>
            <li>QI entre 70-85: aproximadamente 13,5%</li>
            <li>QI entre 85-115: aproximadamente 68% (média)</li>
            <li>QI entre 115-130: aproximadamente 13,5%</li>
            <li>QI acima de 130: aproximadamente 2,5% (superdotação)</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Desenvolvimento Cognitivo na Adolescência</h2>
          <p className="mb-4">
            A adolescência é marcada por mudanças significativas no cérebro, especialmente no córtex pré-frontal, 
            área responsável pela função executiva, planejamento, e controle de impulsos. Essas mudanças afetam 
            o desenvolvimento do QI e habilidades cognitivas.
          </p>
          <p className="mb-4">
            <strong>Mudanças cerebrais:</strong> Durante a adolescência, o cérebro passa por um processo de 
            "poda neural", onde conexões não utilizadas são eliminadas e conexões importantes são fortalecidas. 
            Isso resulta em processamento mais eficiente e desenvolvimento de habilidades cognitivas mais sofisticadas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Mudanças no QI Durante a Adolescência</h2>
          <p className="mb-4">
            Estudos longitudinais mostram que o QI pode mudar significativamente durante a adolescência. 
            Alguns adolescentes podem ter aumentos de QI de até 20 pontos, enquanto outros podem ter mudanças 
            menores. Essas mudanças são influenciadas por fatores ambientais, educacionais, e comportamentais.
          </p>
          <p className="mb-4">
            <strong>Fatores que influenciam:</strong> Educação de qualidade, atividades estimulantes, exercícios 
            físicos, sono adequado, e ambiente enriquecedor podem promover aumentos no QI durante a adolescência. 
            Por outro lado, estresse crônico, privação de sono, e falta de estimulação podem limitar o desenvolvimento.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Diferenças de Gênero no QI de Adolescentes</h2>
          <p className="mb-4">
            Estudos mostram que, em média, não há diferenças significativas no QI geral entre meninos e meninas 
            adolescentes. No entanto, podem haver diferenças em habilidades específicas: meninos tendem a ter 
            ligeira vantagem em raciocínio espacial, enquanto meninas tendem a ter vantagem em habilidades verbais.
          </p>
          <p className="mb-4">
            <strong>Importante:</strong> Essas diferenças são pequenas e variam muito entre indivíduos. O QI 
            geral é essencialmente igual entre gêneros, e diferenças individuais são muito maiores do que 
            diferenças de gênero.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Fatores que Influenciam o QI de Adolescentes</h2>
          <p className="mb-4">
            Vários fatores influenciam o desenvolvimento do QI durante a adolescência:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Educação:</strong> Qualidade da educação escolar tem impacto significativo no desenvolvimento 
            cognitivo.</li>
            <li><strong>Ambiente familiar:</strong> Suporte familiar, recursos educacionais, e estimulação intelectual 
            em casa.</li>
            <li><strong>Nutrição:</strong> Nutrição adequada, especialmente durante períodos de crescimento rápido.</li>
            <li><strong>Exercícios físicos:</strong> Atividade física regular melhora função cognitiva e desenvolvimento 
            cerebral.</li>
            <li><strong>Sono:</strong> Sono adequado é crucial para consolidação da memória e desenvolvimento cognitivo.</li>
            <li><strong>Atividades estimulantes:</strong> Leitura, jogos mentais, hobbies intelectuais, e aprendizado 
            contínuo.</li>
            <li><strong>Estresse:</strong> Estresse crônico pode prejudicar o desenvolvimento cognitivo.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI e Desempenho Acadêmico em Adolescentes</h2>
          <p className="mb-4">
            Existe correlação significativa entre QI e desempenho acadêmico em adolescentes. QI mais alto geralmente 
            está associado a melhor desempenho escolar, mas é importante notar que outros fatores, como motivação, 
            esforço, e habilidades de estudo, também são importantes.
          </p>
          <p className="mb-4">
            <strong>Correlação:</strong> Estudos mostram que QI explica aproximadamente 25-50% da variância no 
            desempenho acadêmico. Isso significa que QI é importante, mas não é o único fator determinante do 
            sucesso acadêmico.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Melhorar o QI Durante a Adolescência</h2>
          <p className="mb-4">
            A adolescência oferece oportunidades únicas para melhorar o QI através de:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Leitura regular:</strong> Ler livros, artigos, e materiais diversos desenvolve vocabulário, 
            compreensão, e raciocínio.</li>
            <li><strong>Exercícios mentais:</strong> Jogos de estratégia, puzzles, quebra-cabeças, e atividades 
            que desafiam o cérebro.</li>
            <li><strong>Exercícios físicos:</strong> Atividade física regular melhora função cognitiva e desenvolvimento 
            cerebral.</li>
            <li><strong>Aprendizado de habilidades:</strong> Aprender música, idiomas, programação, ou outras habilidades 
            complexas.</li>
            <li><strong>Sono adequado:</strong> Priorizar 8-10 horas de sono por noite para desenvolvimento cognitivo 
            ótimo.</li>
            <li><strong>Nutrição:</strong> Dieta balanceada rica em nutrientes essenciais para o cérebro.</li>
            <li><strong>Redução de estresse:</strong> Técnicas de gerenciamento de estresse e bem-estar mental.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI e Superdotação em Adolescentes</h2>
          <p className="mb-4">
            Adolescentes com QI acima de 130 são considerados superdotados. Superdotação pode apresentar desafios 
            únicos, incluindo necessidade de estimulação intelectual adequada, possíveis dificuldades sociais, 
            e necessidade de suporte educacional especializado.
          </p>
          <p className="mb-4">
            <strong>Suporte:</strong> Adolescentes superdotados podem se beneficiar de programas educacionais 
            avançados, oportunidades de aprendizado acelerado, e suporte para desenvolvimento social e emocional 
            além do intelectual.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI e Desenvolvimento de Habilidades Específicas</h2>
          <p className="mb-4">
            Durante a adolescência, diferentes aspectos do QI podem se desenvolver em ritmos diferentes. Alguns 
            adolescentes podem ter habilidades verbais mais desenvolvidas, enquanto outros podem ter habilidades 
            espaciais ou matemáticas mais desenvolvidas.
          </p>
          <p className="mb-4">
            <strong>Desenvolvimento:</strong> É normal que diferentes habilidades cognitivas se desenvolvam em 
            ritmos diferentes durante a adolescência. Focar em desenvolver áreas de interesse e talento natural 
            pode ser mais eficaz do que tentar desenvolver todas as áreas igualmente.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI e Uso de Tecnologia</h2>
          <p className="mb-4">
            O uso de tecnologia pode ter impactos positivos e negativos no desenvolvimento cognitivo de adolescentes. 
            Uso educacional e criativo de tecnologia pode melhorar habilidades cognitivas, enquanto uso excessivo 
            de redes sociais e entretenimento passivo pode ter efeitos negativos.
          </p>
          <p className="mb-4">
            <strong>Recomendação:</strong> Equilibrar uso de tecnologia com atividades offline, priorizar 
            uso educacional e criativo, e limitar tempo de tela passivo pode otimizar o desenvolvimento cognitivo.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            O QI médio de adolescentes é 100, mas a adolescência é um período de desenvolvimento cognitivo significativo 
            onde o QI pode mudar substancialmente. Fatores como educação, ambiente, exercícios, sono, e atividades 
            estimulantes podem promover desenvolvimento cognitivo e melhorias no QI.
          </p>
          <p className="mb-4">
            Para adolescentes e pais, é importante entender que o QI não é fixo e pode ser desenvolvido através 
            de estratégias adequadas. Priorizar educação de qualidade, atividades estimulantes, exercícios físicos, 
            sono adequado, e bem-estar geral pode otimizar o desenvolvimento cognitivo durante essa fase crucial 
            da vida.
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
            {getRelatedArticles("qi-medio-adolescentes", 3).map((article) => (
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

export default QIMedioAdolescentes;

