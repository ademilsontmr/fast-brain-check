import { Brain, ArrowRight, Lightbulb, BookOpen, Clock, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";

const QIMedioCorredores = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/qi-medio-corredores";
  const articleTitle = "QI Médio de Corredores: A Relação Entre Corrida e Inteligência";
  const articleDescription = "Descubra o QI médio de corredores, como a corrida melhora a função cognitiva, e a relação científica entre exercício aeróbico e desenvolvimento da inteligência.";
  const publishDate = "2025-01-15";
  const modifiedDate = "2025-01-15";
  
  useSEO({
    title: "QI Médio de Corredores: A Relação Entre Corrida e Inteligência",
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
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>QI médio de corredores</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          QI Médio de Corredores: A Relação Entre Corrida e Inteligência
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2025</time>
          <span>•</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Activity className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            A relação entre corrida e inteligência é uma área fascinante de pesquisa científica. Estudos mostram 
            que corredores regulares tendem a ter melhor função cognitiva, e a própria prática de corrida pode melhorar 
            o QI. Descubra os dados científicos sobre QI médio de corredores e como a corrida desenvolve a inteligência.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Médio de Corredores</h2>
          <p className="mb-4">
            Embora não existam estudos extensivos comparando especificamente o QI médio de corredores com não-corredores, 
            pesquisas mostram que pessoas fisicamente ativas, incluindo corredores, tendem a ter melhor função cognitiva 
            e desempenho em testes de inteligência. Corredores regulares frequentemente mostram melhorias em memória, 
            atenção, e função executiva.
          </p>
          <p className="mb-4">
            <strong>Evidência:</strong> Estudos mostram que exercícios aeróbicos regulares, como corrida, estão 
            associados a melhor desempenho em testes cognitivos, melhor função executiva, e menor declínio cognitivo 
            relacionado à idade.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como a Corrida Melhora o QI</h2>
          <p className="mb-4">
            A corrida melhora a função cognitiva através de múltiplos mecanismos científicos:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Neurogênese:</strong> Corrida promove criação de novos neurônios no hipocampo, área crucial 
            para memória e aprendizado.</li>
            <li><strong>Aumento do fluxo sanguíneo:</strong> Corrida aumenta fluxo sanguíneo cerebral em até 30%, 
            fornecendo mais oxigênio e nutrientes.</li>
            <li><strong>Produção de BDNF:</strong> Corrida aumenta produção de BDNF, proteína essencial para saúde 
            e desenvolvimento cerebral.</li>
            <li><strong>Melhoria do sono:</strong> Corrida regular melhora qualidade do sono, essencial para consolidação 
            da memória.</li>
            <li><strong>Redução de estresse:</strong> Corrida reduz estresse e ansiedade, que podem prejudicar função 
            cognitiva.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Corrida e Desenvolvimento Cerebral</h2>
          <p className="mb-4">
            Estudos de neuroimagem mostram que corredores regulares têm maior volume de massa cinzenta em áreas do cérebro 
            relacionadas à memória, atenção, e função executiva. Corrida também melhora a conectividade entre diferentes 
            áreas do cérebro, resultando em processamento mais eficiente.
          </p>
          <p className="mb-4">
            <strong>Mudanças estruturais:</strong> Pesquisas com ressonância magnética mostram que corredores têm 
            hipocampo maior, córtex pré-frontal mais desenvolvido, e melhor conectividade neural, resultando em melhor 
            função cognitiva e QI.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Corrida e Memória</h2>
          <p className="mb-4">
            Corrida regular melhora significativamente a memória, tanto memória episódica quanto memória de trabalho. 
            Estudos mostram que corredores têm melhor desempenho em testes de memória e aprendizado comparados a pessoas 
            sedentárias.
          </p>
          <p className="mb-4">
            <strong>Mecanismo:</strong> Corrida promove neurogênese no hipocampo, aumenta produção de BDNF, e melhora 
            qualidade do sono, todos fatores que melhoram a memória e são componentes importantes do QI.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Corrida e Função Executiva</h2>
          <p className="mb-4">
            Função executiva, que inclui habilidades como planejamento, organização, controle de impulsos, e tomada de 
            decisão, é significativamente melhorada pela corrida regular. Essas habilidades são componentes importantes 
            do QI.
          </p>
          <p className="mb-4">
            <strong>Desenvolvimento:</strong> Corrida desenvolve o córtex pré-frontal, área do cérebro responsável pela 
            função executiva, melhorando habilidades relacionadas ao QI como raciocínio, planejamento, e resolução 
            de problemas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Frequência e Intensidade Ideal</h2>
          <p className="mb-4">
            Estudos mostram que corrida moderada de 30-45 minutos, 3-4 vezes por semana, é suficiente para obter benefícios 
            significativos para a função cognitiva. Corrida mais intensa pode ter benefícios adicionais, mas corrida 
            moderada regular é mais sustentável e eficaz a longo prazo.
          </p>
          <p className="mb-4">
            <strong>Recomendação:</strong> Para melhorar o QI através da corrida, priorize consistência sobre intensidade. 
            Corrida regular e moderada é mais eficaz do que corrida intensa esporádica.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Corrida e Desempenho Acadêmico</h2>
          <p className="mb-4">
            Estudos mostram que estudantes que correm regularmente têm melhor desempenho acadêmico, melhor atenção 
            em aula, e melhor função cognitiva geral. Corrida antes de atividades intelectuais pode melhorar o desempenho 
            cognitivo.
          </p>
          <p className="mb-4">
            <strong>Benefício:</strong> Corrida melhora função cognitiva, memória, e atenção, resultando em melhor 
            desempenho acadêmico e profissional. Corredores frequentemente relatam melhor foco e clareza mental.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Corrida e Prevenção de Declínio Cognitivo</h2>
          <p className="mb-4">
            Corrida regular não apenas melhora o QI, mas também previne declínio cognitivo relacionado à idade. Corredores 
            mantêm melhor função cognitiva na terceira idade e têm menor risco de demência e Alzheimer.
          </p>
          <p className="mb-4">
            <strong>Proteção:</strong> Corrida promove saúde cerebral ao longo da vida, mantendo neuroplasticidade, 
            promovendo neurogênese, e protegendo contra declínio cognitivo, resultando em melhor função cognitiva 
            e QI mesmo na terceira idade.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Corrida e Bem-Estar Mental</h2>
          <p className="mb-4">
            Corrida melhora significativamente o bem-estar mental, reduzindo estresse, ansiedade, e depressão. 
            Bem-estar mental melhorado resulta em melhor função cognitiva e desempenho em testes de QI.
          </p>
          <p className="mb-4">
            <strong>Impacto:</strong> Reduzir estresse e ansiedade através da corrida melhora função cognitiva, permite 
            melhor foco e concentração, e otimiza desempenho mental, resultando em melhor desempenho em tarefas cognitivas 
            e testes de QI.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Corrida e Desenvolvimento Cognitivo em Crianças e Adolescentes</h2>
          <p className="mb-4">
            Corrida é especialmente importante para desenvolvimento cognitivo em crianças e adolescentes. Estudos mostram 
            que crianças e adolescentes fisicamente ativos, incluindo corredores, têm melhor desempenho acadêmico, melhor 
            função executiva, e QI mais alto.
          </p>
          <p className="mb-4">
            <strong>Desenvolvimento:</strong> Corrida durante infância e adolescência promove desenvolvimento cerebral 
            saudável, melhora habilidades cognitivas, e estabelece bases para melhor função cognitiva ao longo da vida.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Corrida vs Outros Exercícios para o QI</h2>
          <p className="mb-4">
            Embora todos os exercícios sejam benéficos, corrida tem vantagens específicas para função cognitiva devido 
            à sua natureza aeróbica sustentada. Corrida promove neurogênese, aumenta fluxo sanguíneo cerebral, e melhora 
            função cardiovascular, todos fatores que beneficiam o cérebro.
          </p>
          <p className="mb-4">
            <strong>Vantagem:</strong> Corrida é acessível, não requer equipamento especial, e pode ser praticada em 
            qualquer lugar, tornando-a uma forma eficaz e conveniente de melhorar função cognitiva e QI.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            Embora não existam dados específicos sobre QI médio de corredores, evidências científicas mostram consistentemente 
            que corrida regular melhora significativamente a função cognitiva através de múltiplos mecanismos: neurogênese, 
            aumento do fluxo sanguíneo cerebral, produção de BDNF, melhoria da memória, função executiva, e redução de estresse.
          </p>
          <p className="mb-4">
            Para melhorar seu QI através da corrida, incorpore corrida regular em sua rotina. Corrida moderada de 30-45 
            minutos, 3-4 vezes por semana, é suficiente para obter benefícios significativos. Lembre-se: o corpo e a mente 
            estão conectados, e cuidar do corpo através da corrida é essencial para otimizar a função cognitiva e o QI.
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
            {getRelatedArticles("qi-medio-corredores", 3).map((article) => (
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

export default QIMedioCorredores;

