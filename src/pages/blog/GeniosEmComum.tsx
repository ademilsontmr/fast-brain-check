import { Brain, ArrowRight, Users, BookOpen, Clock } from "lucide-react";
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

const GeniosEmComum = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/genios-em-comum";
  const articleTitle = "O Que os Gênios Têm em Comum?";
  const articleDescription = "Descubra os padrões de pensamento, hábitos e atitudes compartilhados por Einstein, Musk, Jobs e outros gênios.";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "GeniosEmComum, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "genios-em-comum",
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
          <span>Gênios em Comum</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Einstein, Musk e Jobs: O Que os Gênios Têm em Comum?
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2024</time>
          <span>•</span>
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Users className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Albert Einstein revolucionou a física. Steve Jobs transformou a tecnologia. 
            Elon Musk está mudando múltiplas indústrias simultaneamente. O que essas mentes 
            brilhantes têm em comum além de QIs extraordinários? A resposta pode surpreender você.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Pensamento de Primeiros Princípios</h2>
          <p className="mb-4">
            Todos esses gênios compartilham uma habilidade rara: <strong>questionar premissas fundamentais</strong>.
          </p>
          
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <p className="font-semibold mb-3">Einstein:</p>
            <p className="mb-4">
              Questionou premissas sobre tempo e espaço que a física considerava absolutas há séculos. 
              "E se o tempo não for constante?" Dessa pergunta nasceu a Teoria da Relatividade.
            </p>
            
            <p className="font-semibold mb-3">Steve Jobs:</p>
            <p className="mb-4">
              Enquanto todos aceitavam que computadores eram para especialistas, Jobs perguntou: 
              "E se computadores fossem tão intuitivos quanto um telefone?" Nasceu o Macintosh.
            </p>
            
            <p className="font-semibold mb-3">Elon Musk:</p>
            <p>
              Sobre viagens espaciais: "Por que um foguete precisa custar $65 milhões?" 
              Ao decompor o problema em materiais básicos (carbono, alumínio, oxigênio), 
              percebeu que o custo de matérias-primas era apenas 2% do preço total. 
              Resultado: SpaceX reduziu custos em 10x.
            </p>
          </div>

          <p className="mb-4">
            <strong>A lição:</strong> Não aceite "assim que sempre foi feito" como resposta final. 
            Pergunte por quê até chegar aos fundamentos.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Curiosidade Polimática</h2>
          <p className="mb-4">
            Nenhum deles se limitou a um único campo. Todos eram <strong>polímatas</strong> 
            — pessoas com conhecimento profundo em múltiplas áreas.
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-3">
            <li>
              <strong>Einstein:</strong> Físico, violinista, filósofo. Suas insights sobre 
              relatividade vieram parcialmente de pensamentos sobre música e harmonia.
            </li>
            <li>
              <strong>Jobs:</strong> Tecnologia, design, caligrafia, budismo Zen, música. 
              Ele mesmo disse que sua aula de caligrafia foi crucial para o design da fonte do Mac.
            </li>
            <li>
              <strong>Musk:</strong> Física, engenharia, economia, design, fabricação, software, 
              neurociência. Ele lê vorazmente em todos esses campos.
            </li>
          </ul>

          <p className="mb-4">
            Pesquisas mostram que inovações revolucionárias frequentemente vêm da 
            <strong> interseção de campos diferentes</strong>, não de especialização isolada.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Tolerância ao Fracasso</h2>
          <p className="mb-4">
            Contrário ao mito do gênio infalível, todos falharam repetidamente — e publicamente.
          </p>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <ul className="space-y-3">
              <li>
                <strong>Einstein:</strong> Foi rejeitado em diversos empregos acadêmicos. 
                Trabalhou em um escritório de patentes porque ninguém queria contratá-lo. 
                Suas teorias foram ridicularizadas por anos.
              </li>
              <li>
                <strong>Jobs:</strong> Foi demitido da Apple, a empresa que fundou. 
                O computador NeXT foi um fracasso comercial. O Lisa foi um desastre.
              </li>
              <li>
                <strong>Musk:</strong> Três dos primeiros quatro lançamentos da SpaceX falharam. 
                Tesla quase faliu várias vezes. Foi zombado publicamente por anos.
              </li>
            </ul>
          </div>

          <p className="mb-4">
            <strong>O diferencial:</strong> Eles viam fracasso como dados, não como definição. 
            Cada falha era uma oportunidade de aprender e iterar.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Pensamento Visual e por Analogias</h2>
          <p className="mb-4">
            Todos usavam <strong>visualização</strong> e <strong>analogias</strong> como 
            ferramentas principais de pensamento.
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-3">
            <li>
              <strong>Einstein:</strong> Famoso por seus "experimentos mentais" (Gedankenexperiment). 
              Imaginou-se viajando em um raio de luz antes de formalizar matematicamente suas teorias.
            </li>
            <li>
              <strong>Jobs:</strong> Pensava em produtos como experiências humanas. 
              Comparava o Mac a "uma pessoa amigável" e o iPhone a "ter a internet no bolso".
            </li>
            <li>
              <strong>Musk:</strong> Descreve problemas complexos através de analogias simples. 
              Explica Inteligência Artificial comparando com "convocar um demônio".
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Obsessão por Detalhes e Perfeição</h2>
          <p className="mb-4">
            Todos eram (ou são) conhecidos por atenção obsessiva aos detalhes.
          </p>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <p className="mb-3">
              <strong>Jobs</strong> refez a escada da Apple Store 5 vezes até ficar satisfeito. 
              Escolhia pessoalmente cada cor, cada curva, cada fonte.
            </p>
            <p className="mb-3">
              <strong>Musk</strong> vive nas fábricas durante crises de produção, envolvendo-se 
              em detalhes de solda e pintura.
            </p>
            <p>
              <strong>Einstein</strong> revisava suas equações dezenas de vezes, buscando a 
              elegância matemática máxima.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Impaciência com o Status Quo</h2>
          <p className="mb-4">
            Um traço marcante: <strong>intolerância com mediocridade e complacência</strong>.
          </p>

          <p className="mb-4">
            Jobs era famoso por dizer que algo estava "uma merda" até que fosse perfeito. 
            Musk respondeu a engenheiros dizendo que foguetes eram muito caros com 
            "Seus requisitos de design estão errados".
          </p>

          <p className="mb-4">
            Einstein desafiou Newton — que era considerado intocável há 200 anos.
          </p>

          <p className="mb-4">
            Isso os tornava difíceis de trabalhar? Sim. Mas também os impedia de aceitar 
            soluções "boas o suficiente".
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Visão de Longo Prazo</h2>
          <p className="mb-4">
            Todos pensavam em décadas, não em trimestres.
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Einstein trabalhou 10 anos na Relatividade Geral</li>
            <li>Jobs passou anos desenvolvendo o iPhone em segredo</li>
            <li>Musk publicamente declara objetivos de 50+ anos (colonizar Marte)</li>
          </ul>

          <p className="mb-4">
            Eles conseguiam ver o futuro com clareza incomum e trabalhar 
            incansavelmente em direção a ele, mesmo quando outros duvidavam.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Habilidade de Comunicar Ideias Complexas</h2>
          <p className="mb-4">
            Genialidade sem comunicação é invisível. Todos eram (ou são) comunicadores excepcionais.
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Einstein:</strong> Explicava relatividade usando trens e relógios. 
              Tornou física acessível.
            </li>
            <li>
              <strong>Jobs:</strong> Mestre das apresentações. Transformava lançamentos de 
              produtos em eventos culturais.
            </li>
            <li>
              <strong>Musk:</strong> Usa Twitter e entrevistas para tornar foguetes e carros 
              elétricos emocionantes para milhões.
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Fator Mais Importante: Coragem</h2>
          <p className="mb-4">
            Acima de tudo, eles tinham <strong>coragem</strong> de:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Desafiar consensos estabelecidos</li>
            <li>Ser ridicularizados publicamente</li>
            <li>Arriscar fortunas (Musk investiu toda sua fortuna do PayPal em SpaceX e Tesla)</li>
            <li>Defender ideias impopulares</li>
            <li>Falhar publicamente e continuar</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Lições Práticas</h2>
          <p className="mb-4">
            Você não precisa ter QI 160 para aplicar esses princípios:
          </p>

          <ol className="list-decimal pl-6 mb-4 space-y-3">
            <li><strong>Questione premissas:</strong> Por que fazemos assim?</li>
            <li><strong>Aprenda coisas novas:</strong> Estude fora da sua área</li>
            <li><strong>Falhe rápido:</strong> Teste, erre, aprenda, repita</li>
            <li><strong>Visualize:</strong> Use diagramas, metáforas, experimentos mentais</li>
            <li><strong>Seja meticuloso:</strong> Detalhes importam</li>
            <li><strong>Pense grande:</strong> Qual é a sua Missão a Marte?</li>
            <li><strong>Comunique claramente:</strong> Se não pode explicar simplesmente, não entendeu</li>
            <li><strong>Seja corajoso:</strong> Suas melhores ideias parecerão loucura para outros</li>
          </ol>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            O QI alto é apenas o ponto de partida. O que separa gênios de pessoas simplesmente 
            inteligentes é: curiosidade insaciável, coragem para desafiar status quo, 
            tolerância ao fracasso, e trabalho incansável.
          </p>
          <p className="mb-4">
            Como disse Edison (outro gênio): "Genialidade é 1% inspiração e 99% transpiração."
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">E o Seu QI?</h3>
          <p className="text-muted-foreground mb-6">
            Todo gênio começou descobrindo seu potencial. Descubra o seu em apenas 3 minutos 
            e veja onde você se posiciona.
          </p>
          <Link to="/teste">
            <Button size="lg" className="gap-2">
              Descobrir Meu QI
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
            {getRelatedArticles("genios-em-comum", 3).map((article) => (
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

export default GeniosEmComum;
