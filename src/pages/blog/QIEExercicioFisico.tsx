import { Brain, ArrowRight, Lightbulb, BookOpen, Clock, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";

const QIEExercicioFisico = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/qi-e-exercicio-fisico";
  const articleTitle = "QI e Exercício Físico: Como Atividade Física Melhora a Inteligência";
  const articleDescription = "Descubra a relação científica entre QI e exercício físico. Como atividade física melhora função cognitiva, memória, raciocínio e desenvolvimento cerebral.";
  const publishDate = "2025-01-15";
  const modifiedDate = "2025-01-15";
  
  useSEO({
    title: "QI e Exercício Físico: Como Atividade Física Melhora a Inteligência",
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
          <span>QI e exercício físico</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          QI e Exercício Físico: Como Atividade Física Melhora a Inteligência
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
            A relação entre exercício físico e QI é uma das descobertas mais fascinantes da neurociência moderna. 
            Estudos científicos mostram consistentemente que atividade física regular não apenas melhora a saúde 
            física, mas também desenvolve significativamente a função cognitiva, memória, raciocínio e inteligência. 
            Descubra como exercícios físicos podem melhorar seu QI.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">1. Neurogênese: Criação de Novos Neurônios</h2>
          <p className="mb-4">
            Exercícios aeróbicos promovem a neurogênese, o processo de criação de novos neurônios no cérebro, 
            especialmente no hipocampo, área crucial para memória e aprendizado. Estudos mostram que exercícios 
            regulares podem aumentar o volume do hipocampo em até 2% por ano.
          </p>
          <p className="mb-4">
            <strong>Impacto no QI:</strong> Mais neurônios significam maior capacidade de processamento, melhor 
            memória, e função cognitiva aprimorada. A neurogênese promovida por exercícios melhora diretamente 
            habilidades relacionadas ao QI, como raciocínio e memória de trabalho.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">2. Aumento do Fluxo Sanguíneo Cerebral</h2>
          <p className="mb-4">
            Exercícios físicos aumentam significativamente o fluxo sanguíneo para o cérebro, fornecendo mais 
            oxigênio e nutrientes essenciais. Esse aumento pode ser de até 30% durante exercícios moderados, 
            melhorando a função cognitiva imediatamente e a longo prazo.
          </p>
          <p className="mb-4">
            <strong>Benefício:</strong> Maior fluxo sanguíneo cerebral melhora a eficiência neural, aumenta 
            a produção de energia nas células cerebrais, e promove a saúde geral do cérebro, resultando em 
            melhor desempenho cognitivo e QI.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">3. Produção de BDNF (Fator Neurotrófico Derivado do Cérebro)</h2>
          <p className="mb-4">
            Exercícios físicos aumentam a produção de BDNF, uma proteína crucial para a saúde e desenvolvimento 
            cerebral. O BDNF promove o crescimento de neurônios, fortalece conexões sinápticas, e melhora a 
            plasticidade neural.
          </p>
          <p className="mb-4">
            <strong>Impacto:</strong> Níveis mais altos de BDNF estão associados a melhor função cognitiva, 
            memória aprimorada, e maior capacidade de aprendizado. O BDNF é essencial para neuroplasticidade 
            e desenvolvimento de habilidades relacionadas ao QI.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">4. Melhoria da Memória e Aprendizado</h2>
          <p className="mb-4">
            Estudos mostram que exercícios regulares melhoram significativamente a memória episódica, memória 
            de trabalho, e capacidade de aprendizado. Pessoas que se exercitam regularmente têm melhor desempenho 
            em testes de memória e aprendizado.
          </p>
          <p className="mb-4">
            <strong>Evidência científica:</strong> Pesquisas com ressonância magnética mostram que exercícios 
            aumentam o volume do hipocampo e melhoram a conectividade entre diferentes áreas do cérebro relacionadas 
            à memória e aprendizado, componentes importantes do QI.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">5. Melhoria da Função Executiva</h2>
          <p className="mb-4">
            Exercícios físicos melhoram a função executiva, que inclui habilidades como planejamento, organização, 
            controle de impulsos, e tomada de decisão. Essas habilidades são componentes importantes do QI 
            e são essenciais para o sucesso em muitas áreas da vida.
          </p>
          <p className="mb-4">
            <strong>Desenvolvimento:</strong> Exercícios, especialmente atividades que exigem coordenação e 
            estratégia, desenvolvem o córtex pré-frontal, área do cérebro responsável pela função executiva, 
            melhorando habilidades relacionadas ao QI.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">6. Redução de Estresse e Ansiedade</h2>
          <p className="mb-4">
            Exercícios físicos reduzem significativamente estresse e ansiedade, que podem prejudicar a função 
            cognitiva. Estresse crônico pode danificar o hipocampo e prejudicar a memória e o raciocínio.
          </p>
          <p className="mb-4">
            <strong>Benefício cognitivo:</strong> Reduzir estresse através de exercícios melhora a função cognitiva, 
            permite melhor foco e concentração, e otimiza o desempenho mental, resultando em melhor desempenho 
            em testes de QI e tarefas cognitivas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">7. Melhoria do Sono</h2>
          <p className="mb-4">
            Exercícios regulares melhoram a qualidade do sono, que é essencial para consolidação da memória 
            e função cognitiva. Sono adequado é crucial para o desempenho mental e desenvolvimento cognitivo.
          </p>
          <p className="mb-4">
            <strong>Impacto:</strong> Melhor sono resulta em melhor consolidação da memória, função cognitiva 
            aprimorada, e melhor desempenho em tarefas que requerem raciocínio e análise, componentes importantes 
            do QI.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">8. Tipos de Exercícios Mais Eficazes para o QI</h2>
          <p className="mb-4">
            Embora qualquer exercício seja benéfico, alguns tipos são especialmente eficazes para melhorar 
            a função cognitiva:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Exercícios aeróbicos:</strong> Caminhada, corrida, ciclismo, natação aumentam fluxo 
            sanguíneo cerebral e promovem neurogênese.</li>
            <li><strong>Treinamento de força:</strong> Musculação e exercícios de resistência melhoram função 
            executiva e memória.</li>
            <li><strong>Exercícios de coordenação:</strong> Dança, artes marciais, esportes que exigem coordenação 
            desenvolvem múltiplas áreas do cérebro.</li>
            <li><strong>Yoga e meditação:</strong> Melhoram atenção, função executiva, e reduzem estresse.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">9. Frequência e Duração Ideal</h2>
          <p className="mb-4">
            Estudos mostram que exercícios moderados de 30-45 minutos, 3-4 vezes por semana, são suficientes 
            para melhorar significativamente a função cognitiva. Exercícios mais intensos podem ter benefícios 
            adicionais, mas exercícios moderados regulares são mais sustentáveis e eficazes a longo prazo.
          </p>
          <p className="mb-4">
            <strong>Recomendação:</strong> Para melhorar o QI, priorize consistência sobre intensidade. Exercícios 
            regulares e moderados são mais eficazes do que exercícios intensos esporádicos.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">10. Exercícios e Desenvolvimento Cognitivo em Crianças</h2>
          <p className="mb-4">
            Exercícios físicos são especialmente importantes para o desenvolvimento cognitivo em crianças e adolescentes. 
            Estudos mostram que crianças fisicamente ativas têm melhor desempenho acadêmico, melhor função executiva, 
            e QI mais alto.
          </p>
          <p className="mb-4">
            <strong>Impacto:</strong> Exercícios durante a infância e adolescência promovem desenvolvimento cerebral 
            saudável, melhoram habilidades cognitivas, e estabelecem bases para melhor função cognitiva ao longo 
            da vida.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Exercícios e Prevenção de Declínio Cognitivo</h2>
          <p className="mb-4">
            Exercícios regulares não apenas melhoram o QI, mas também previnem declínio cognitivo relacionado 
            à idade. Pessoas fisicamente ativas mantêm melhor função cognitiva na terceira idade e têm menor 
            risco de demência e Alzheimer.
          </p>
          <p className="mb-4">
            <strong>Proteção:</strong> Exercícios promovem saúde cerebral ao longo da vida, mantendo neuroplasticidade, 
            promovendo neurogênese, e protegendo contra declínio cognitivo, resultando em melhor função cognitiva 
            e QI mesmo na terceira idade.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            A relação entre exercício físico e QI é clara e bem estabelecida pela ciência. Exercícios regulares 
            melhoram significativamente a função cognitiva através de múltiplos mecanismos: neurogênese, aumento 
            do fluxo sanguíneo cerebral, produção de BDNF, melhoria da memória, função executiva, e redução 
            de estresse.
          </p>
          <p className="mb-4">
            Para melhorar seu QI, incorpore exercícios físicos regulares em sua rotina. Exercícios moderados 
            de 30-45 minutos, 3-4 vezes por semana, são suficientes para obter benefícios significativos. 
            Lembre-se: o corpo e a mente estão conectados, e cuidar do corpo é essencial para otimizar a função 
            cognitiva e o QI.
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
            {getRelatedArticles("qi-e-exercicio-fisico", 3).map((article) => (
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

export default QIEExercicioFisico;

