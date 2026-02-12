import { Brain, ArrowRight, Lightbulb, BookOpen, Clock, TrendingUp, Target, Zap, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleFAQ from "@/components/ArticleFAQ";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import ArticleInterlinks from "@/components/ArticleInterlinks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ComoAumentarQI = () => {
  const navigate = useNavigate();

  const articleUrl = "https://bomqi.com.br/blog/como-aumentar-qi";
  const articleTitle = "Como Aumentar Seu QI: 10 Dicas Cientificamente Comprovadas";
  const articleDescription = "Aprenda 10 estratégias cientificamente comprovadas para desenvolver inteligência, memória de trabalho e raciocínio.";
  const publishDate = "2024-01-15";
  const modifiedDate = "2024-01-15";

  useSEO({
    title: "Como Aumentar Seu QI",
    description: articleDescription,
    url: articleUrl,
    keywords: "como aumentar QI, aumentar inteligência, melhorar QI, desenvolver QI, treinar inteligência, exercícios QI, técnicas aumentar QI, métodos melhorar inteligência, elevar QI, potencializar inteligência",
  });

  // Structured Data para Article e BreadcrumbList (Rich Results)
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

      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Como aumentar seu QI</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Como Aumentar Seu QI: 10 Dicas Cientificamente Comprovadas
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2024</time>
          <span>•</span>
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Lightbulb className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Muitas pessoas acreditam que o QI é algo fixo e imutável. A ciência moderna, no entanto,
            mostra que existem formas comprovadas de melhorar sua inteligência fluida e capacidade cognitiva.
            Descubra as 10 estratégias mais eficazes para aumentar seu QI.
          </p>

          <ArticleInterlinks
            title="📚 Artigos Relacionados"
            links={[
              {
                text: "O que é QI e como ele é medido?",
                url: "/blog/o-que-e-qi",
                description: "Entenda os fundamentos da inteligência e como ela é avaliada"
              },
              {
                text: "QI pode mudar ao longo da vida?",
                url: "/blog/qi-pode-mudar-ao-longo-vida",
                description: "Descubra se é possível aumentar seu QI com a idade"
              },
              {
                text: "Neuroplasticidade: como o cérebro evolui",
                url: "/blog/neuroplasticidade-cerebro-evolui",
                description: "A ciência por trás da capacidade do cérebro de se adaptar"
              }
            ]}
          />

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              O que a ciência diz
            </h3>
            <p className="text-slate-700 mb-3">
              Um estudo publicado na revista <em>Nature</em> em 2011 demonstrou que o QI não é fixo.
              Pesquisadores da University College London acompanharam 33 adolescentes por 4 anos e
              descobriram que o QI pode variar até 20 pontos para cima ou para baixo.
            </p>
            <p className="text-slate-700">
              <strong>Fonte:</strong> Ramsden et al. (2011). "Verbal and non-verbal intelligence changes
              in the teenage brain." Nature, 479(7371), 113-116.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">1. Pratique Exercícios de Memória de Trabalho</h2>
          <p className="mb-4">
            A memória de trabalho é fundamental para o raciocínio e a resolução de problemas. Estudos
            mostram que treinar a memória de trabalho através de jogos específicos pode aumentar o QI
            em até 4 pontos após apenas 8 semanas de prática regular.
          </p>
          <p className="mb-4">
            <strong>Como praticar:</strong> Use aplicativos como Dual N-Back, jogue xadrez, ou pratique
            malabarismo. Essas atividades exigem que você mantenha múltiplas informações em mente simultaneamente.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5 my-6">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <Target className="w-4 h-4 text-green-600" />
              Exemplo Prático: Protocolo de 30 Dias
            </h4>
            <ul className="text-sm space-y-2 text-slate-700">
              <li>• <strong>Semana 1-2:</strong> 15 minutos diários de Dual N-Back (nível iniciante)</li>
              <li>• <strong>Semana 3-4:</strong> 20 minutos diários + adicionar quebra-cabeças complexos</li>
              <li>• <strong>Resultado esperado:</strong> Melhora de 10-15% na capacidade de memória de trabalho</li>
            </ul>
          </div>

          <p className="mb-4 text-sm text-slate-600 italic">
            📊 Estudo de referência: Jaeggi et al. (2008) demonstraram que treino de memória de trabalho
            transfere para inteligência fluida. Publicado em PNAS, 105(19), 6829-6833.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">2. Aprenda um Novo Idioma</h2>
          <p className="mb-4">
            Estudos de neuroimagem mostram que pessoas bilíngues têm maior densidade de massa cinzenta
            em áreas do cérebro relacionadas ao controle executivo e à atenção. Aprender um segundo idioma
            pode melhorar significativamente suas habilidades cognitivas gerais.
          </p>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-5 my-6">
            <h4 className="font-bold mb-3 text-purple-900">💡 Caso Real: Maria, 34 anos</h4>
            <p className="text-sm text-slate-700 mb-2">
              "Comecei a aprender alemão aos 32 anos. Após 18 meses de estudo diário (30 min),
              refiz um teste de QI e minha pontuação aumentou de 108 para 116. Além disso, percebi
              melhora significativa na minha capacidade de concentração no trabalho."
            </p>
            <p className="text-xs text-slate-600 italic">
              *Relato anônimo coletado em pesquisa com usuários do BomQI, 2024
            </p>
          </div>

          <p className="mb-4">
            <strong>Benefícios cognitivos do bilinguismo:</strong>
          </p>
          <ul className="mb-4 space-y-2">
            <li>• Melhora na função executiva (planejamento e controle)</li>
            <li>• Aumento da flexibilidade cognitiva</li>
            <li>• Proteção contra declínio cognitivo na terceira idade</li>
            <li>• Melhora na capacidade de multitarefa</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">3. Exercite-se Regularmente</h2>
          <p className="mb-4">
            A atividade física aeróbica aumenta o fluxo sanguíneo para o cérebro e promove a neurogênese
            (formação de novos neurônios). Apenas 30 minutos de exercício moderado, 3-4 vezes por semana,
            pode melhorar a função cognitiva em até 20%.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <Card className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                Exercícios Aeróbicos
              </h4>
              <p className="text-sm text-slate-700 mb-2">
                Corrida, natação, ciclismo
              </p>
              <p className="text-xs text-slate-600">
                <strong>Benefício:</strong> Aumenta BDNF (fator neurotrófico), essencial para
                crescimento de novos neurônios
              </p>
            </Card>

            <Card className="p-5 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Target className="w-5 h-5 text-green-600" />
                Exercícios de Coordenação
              </h4>
              <p className="text-sm text-slate-700 mb-2">
                Dança, artes marciais, yoga
              </p>
              <p className="text-xs text-slate-600">
                <strong>Benefício:</strong> Estimula conexões entre hemisférios cerebrais
              </p>
            </Card>
          </div>

          <ArticleInterlinks
            links={[
              {
                text: "QI e Exercício Físico: A Conexão Científica",
                url: "/blog/qi-e-exercicio-fisico"
              }
            ]}
          />

          <h2 className="text-3xl font-bold mt-12 mb-6">4. Durma 7-9 Horas por Noite</h2>
          <p className="mb-4">
            O sono é essencial para a consolidação da memória e a limpeza de toxinas cerebrais.
            Pessoas que dormem menos de 6 horas por noite apresentam desempenho cognitivo equivalente
            a alguém com dois dias sem dormir.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-6">
            <h4 className="font-bold mb-2 text-amber-900">⚠️ Dados Alarmantes</h4>
            <p className="text-sm text-slate-700 mb-3">
              Estudo da Universidade da Califórnia (2017) com 1.000 participantes mostrou que:
            </p>
            <ul className="text-sm space-y-1 text-slate-700">
              <li>• Dormir 6h reduz QI funcional em 8-10 pontos</li>
              <li>• Dormir 5h reduz QI funcional em 12-15 pontos</li>
              <li>• Efeitos são cumulativos ao longo da semana</li>
            </ul>
          </div>

          <p className="mb-4">
            <strong>Dicas para melhorar o sono:</strong>
          </p>
          <ul className="mb-4 space-y-2">
            <li>• Mantenha horários regulares (mesmo nos fins de semana)</li>
            <li>• Evite telas 1h antes de dormir (luz azul inibe melatonina)</li>
            <li>• Temperatura ideal do quarto: 18-20°C</li>
            <li>• Evite cafeína após 14h</li>
          </ul>

          <ArticleInterlinks
            links={[
              {
                text: "QI e Sono: Como o descanso afeta sua inteligência",
                url: "/blog/qi-e-sono"
              }
            ]}
          />

          <h2 className="text-3xl font-bold mt-12 mb-6">5. Medite Regularmente</h2>
          <p className="mb-4">
            A meditação mindfulness aumenta a espessura cortical em áreas do cérebro associadas à
            atenção, introspecção e processamento sensorial. Apenas 20 minutos por dia podem fazer
            diferença significativa em 8 semanas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">6. Toque um Instrumento Musical</h2>
          <p className="mb-4">
            Tocar música ativa praticamente todas as áreas do cérebro simultaneamente. Estudos mostram
            que músicos têm melhor memória verbal, fluência verbal e raciocínio espacial comparados a não-músicos.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">7. Mantenha uma Dieta Rica em Ômega-3</h2>
          <p className="mb-4">
            O DHA, um tipo de ômega-3, é crucial para a saúde cerebral. Alimentos como salmão, nozes
            e sementes de chia podem melhorar a função cognitiva e proteger contra declínio mental.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">8. Desafie-se com Puzzles e Jogos de Lógica</h2>
          <p className="mb-4">
            Quebra-cabeças, sudoku, e jogos de estratégia estimulam o raciocínio lógico e a resolução
            de problemas. O importante é variar os tipos de desafios para trabalhar diferentes áreas cognitivas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">9. Leia Ativamente e Diversifique</h2>
          <p className="mb-4">
            Ler não só expande seu vocabulário, mas também melhora a empatia, o pensamento crítico e
            a compreensão. Leia ficção para melhorar a teoria da mente, e não-ficção para expandir conhecimento.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">10. Socialize e Tenha Conversas Profundas</h2>
          <p className="mb-4">
            Interações sociais complexas estimulam o cérebro de formas únicas. Debates, discussões
            filosóficas e conversas desafiadoras mantêm a mente afiada e promovem neuroplasticidade.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Bônus: Rotina Diária para Otimização Cognitiva</h2>
          <p className="mb-6">
            Para obter resultados reais, a consistência é chave. Aqui está um exemplo de como estruturar seu dia
            para máxima performance mental:
          </p>

          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="p-4 font-bold">Horário</th>
                  <th className="p-4 font-bold">Atividade</th>
                  <th className="p-4 font-bold">Benefício Cognitivo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4">07:00</td>
                  <td className="p-4">Hidratação + 20min Meditação</td>
                  <td className="p-4 text-muted-foreground">Prepara o córtex pré-frontal para foco</td>
                </tr>
                <tr>
                  <td className="p-4">08:00</td>
                  <td className="p-4">Trabalho Profundo (Deep Work)</td>
                  <td className="p-4 text-muted-foreground">Aproveita o pico de cortiol matinal para tarefas complexas</td>
                </tr>
                <tr>
                  <td className="p-4">12:00</td>
                  <td className="p-4">Almoço rico em Ômega-3 + Caminhada</td>
                  <td className="p-4 text-muted-foreground">Nutrição cerebral e oxigenação</td>
                </tr>
                <tr>
                  <td className="p-4">18:00</td>
                  <td className="p-4">Exercício Aeróbico</td>
                  <td className="p-4 text-muted-foreground">Neurogênese e liberação de BDNF</td>
                </tr>
                <tr>
                  <td className="p-4">20:00</td>
                  <td className="p-4">Leitura ou Aprendizado de Idioma</td>
                  <td className="p-4 text-muted-foreground">Neuroplasticidade e reserva cognitiva</td>
                </tr>
                <tr>
                  <td className="p-4">22:00</td>
                  <td className="p-4">Higiene do Sono (Sem telas)</td>
                  <td className="p-4 text-muted-foreground">Consolidação da memória</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full mb-12">
            <AccordionItem value="item-1">
              <AccordionTrigger>É realmente possível aumentar o QI depois de adulto?</AccordionTrigger>
              <AccordionContent>
                Sim. Embora a inteligência fluida tenda a estabilizar na idade adulta, estudos mostram que a neuroplasticidade permite melhorias na eficiência cognitiva através de treinamento consistente, especialmente em memória de trabalho e raciocínio lógico.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Quanto tempo demora para ver resultados?</AccordionTrigger>
              <AccordionContent>
                A maioria dos estudos indica que mudanças mensuráveis começam a aparecer entre 8 a 12 semanas de prática consistente (mínimo 20 minutos por dia). No entanto, benefícios subjetivos como maior foco e clareza mental podem ser percebidos já nas primeiras semanas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Apps de "Brain Training" funcionam?</AccordionTrigger>
              <AccordionContent>
                Depende. Muitos são apenas entretenimento, mas aqueles baseados no protocolo "Dual N-Back" têm respaldo científico para melhoria da memória operacional, que é um componente chave do QI.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>O QI é genético?</AccordionTrigger>
              <AccordionContent>
                A genética desempenha um papel significativo (estimado entre 50-80%), mas o ambiente e o estilo de vida determinam se você atingirá seu potencial genético máximo. Fatores como nutrição, educação, sono e estímulos cognitivos são cruciais.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            Aumentar seu QI é possível, mas requer consistência e variedade. Combine múltiplas estratégias
            desta lista para melhores resultados. Lembre-se: a inteligência não é apenas genética,
            ela também é treinável.
          </p>

          <div className="bg-gradient-to-r from-primary/10 to-purple-100 border border-primary/30 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-3">📈 Resultados Esperados</h3>
            <p className="text-slate-700 mb-4">
              Seguindo estas 10 estratégias de forma consistente por 6 meses, estudos sugerem
              que é possível aumentar o QI em:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>• <strong>3-5 pontos:</strong> Com prática moderada (2-3 estratégias)</li>
              <li>• <strong>5-8 pontos:</strong> Com prática regular (4-6 estratégias)</li>
              <li>• <strong>8-12 pontos:</strong> Com dedicação intensa (7+ estratégias)</li>
            </ul>
            <p className="text-sm text-slate-600 mt-4 italic">
              *Resultados variam individualmente. Baseado em meta-análise de estudos sobre
              neuroplasticidade e treinamento cognitivo.
            </p>
          </div>

          <ArticleInterlinks
            title="🎯 Próximos Passos"
            links={[
              {
                text: "Como se preparar para um teste de QI",
                url: "/blog/como-se-preparar-teste-qi",
                description: "Dicas práticas para maximizar seu desempenho"
              },
              {
                text: "Atividades que aumentam o QI",
                url: "/blog/atividades-que-aumentam-qi",
                description: "Lista completa de exercícios e práticas eficazes"
              },
              {
                text: "Como melhorar o cérebro naturalmente",
                url: "/blog/como-melhorar-cerebro",
                description: "Métodos naturais para otimizar a função cerebral"
              }
            ]}
          />
        </div>

        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "Como Aumentar Seu QI?",
                    "answer": "Sim. Evidências científicas mostram que é possível através de métodos específicos abordados neste artigo."
          },
          {
                    "question": "Qual a base científica disso?",
                    "answer": "Estudos de neuroplasticidade e psicologia cognitiva demonstram que cérebro pode ser desenvolvido em qualquer idade com estímulos adequados."
          },
          {
                    "question": "Quanto tempo para ver resultados práticos?",
                    "answer": "Primeiros resultados em 4-8 semanas. Mudanças significativas em 6-12 meses de aplicação consistente dos métodos."
          },
          {
                    "question": "Isso funciona para minha idade?",
                    "answer": "Sim. Princípios se aplicam a todas as idades, com adaptações apropriadas. Potencial varia mas desenvolvimento é sempre possível."
          },
          {
                    "question": "Como começar a aplicar isso hoje?",
                    "answer": "Escolha 1-2 estratégias do artigo, pratique 20-30 min/dia, monitore progresso semanalmente e ajuste conforme necessário."
          }
]} />

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI Atual</h3>
          <p className="text-muted-foreground mb-6">
            Antes de começar a melhorar, que tal descobrir seu ponto de partida?
            Faça nosso teste de QI em apenas 3 minutos.
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
            {getRelatedArticles("como-aumentar-qi", 3).map((article) => (
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

export default ComoAumentarQI;
