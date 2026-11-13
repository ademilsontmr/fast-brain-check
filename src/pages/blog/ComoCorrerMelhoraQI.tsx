import { Zap, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleLeadAdSense from "@/components/ArticleLeadAdSense";
import ArticleFAQ from "@/components/ArticleFAQ";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const ComoCorrerMelhoraQI = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/como-correr-melhora-qi";
  const articleTitle = "Como Correr Melhora o QI: Ciência do Exercício Aeróbico";
  const articleDescription = "Descubra como a corrida melhora o QI através de neurogênese, fluxo sanguíneo cerebral e produção de BDNF. Guia científico completo.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "como-correr-melhora-qi",
      publishDate: "2025-01-15",
    })
  );

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Como Correr Melhora o QI</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>15 de Janeiro de 2025</time>
          <span>•</span>
          <span>11 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Zap className="w-24 h-24 text-primary" />
        </div>
        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            <strong>Correr melhora o QI</strong> indiretamente: exercício aeróbico aumenta fluxo sanguíneo, estimula
            neurotrofinas como o <strong>BDNF</strong> e melhora sono e humor — três alavancas que refletem em testes de
            atenção, velocidade de processamento e memória, não em “genialidade instantânea”.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Aeróbico moderado: 3–5 sessões/semana de 30+ minutos</li>
                  <li>✓ BDNF liga exercício a plasticidade hipocampal e memória</li>
                  <li>✓ Efeito aparece em função cognitiva; QI estrutural muda pouco na idade adulta</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Mecanismos no cérebro</h2>
          <p className="text-muted-foreground mb-4">
            Durante a corrida, o cérebro recebe mais oxigênio e nutrientes. Isso favorece o hipocampo, região central para
            aprendizado. Meta-análises resumidas em{" "}
            <Link to="/blog/qi-e-exercicio-fisico" className="text-primary hover:underline">QI e exercício físico</Link>{" "}
            mostram ganhos modestos em tarefas executivas após meses de treino.
          </p>
          <p className="text-muted-foreground mb-6">
            Corredores costumam pontuar bem em estudos de estilo de vida — compare curiosidades em{" "}
            <Link to="/blog/qi-medio-corredores" className="text-primary hover:underline">QI médio de corredores</Link> — mas
            correlação não é causa: pessoas ativas também dormem e comem melhor, em média.
          </p>


          <h2 className="text-3xl font-bold mt-12 mb-6">Protocolo prático</h2>
          <Card className="p-6 my-8">
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
              <li><strong>Iniciante:</strong> caminhada alternada com trote 20–30 min, 3x/semana</li>
              <li><strong>Intermediário:</strong> 30–45 min em zona moderada (consegue falar frases curtas)</li>
              <li><strong>Avançado:</strong> volume estável + 1 treino intervalado leve por semana</li>
            </ul>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">Sono e nutrição potencializam o efeito</h2>
          <p className="text-muted-foreground mb-4">
            Treino intenso com sono ruim anula benefícios cognitivos. Leia{" "}
            <Link to="/blog/qi-e-sono" className="text-primary hover:underline">QI e sono</Link> e hidrate antes e depois
            das sessões.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Refeição leve 1–2 h antes; evitar excesso de açúcar</li>
            <li>Hidratação e eletrólitos em calor</li>
            <li>Alongamento e descanso para prevenir lesão — lesão corta a rotina</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Quando sentir o efeito em testes?</h2>
          <p className="text-muted-foreground mb-4">
            Estudos apontam janelas de 8–12 semanas para mudanças mensuráveis em memória e atenção. Um plano curto de um
            mês ainda vale — veja{" "}
            <Link to="/blog/como-melhorar-qi-30-dias" className="text-primary hover:underline">como melhorar o QI em 30 dias</Link>.
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Lição prática</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Corra pela manhã antes de estudar ou fazer{" "}
                  <Link to="/teste" className="text-primary hover:underline">teste de QI</Link>: evite fadiga extrema no
                  mesmo dia da avaliação.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/como-manter-mente-afiada" className="text-primary hover:underline">Como manter a mente afiada</Link>,{" "}
            <Link to="/blog/o-que-reduz-qi-sem-perceber" className="text-primary hover:underline">o que reduz QI sem perceber</Link> e{" "}
            <Link to="/blog/como-aumentar-qi" className="text-primary hover:underline">como aumentar o QI</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Correr todo dia aumenta QI?",
              answer:
                "Todo dia sem descanso pode gerar fadiga e lesão. 3–5 dias por semana costuma ser ideal para cognição e recuperação.",
            },
            {
              question: "Musculação ou corrida para o cérebro?",
              answer:
                "Aeróbico tem mais evidência direta em memória e plasticidade; musculação complementa saúde metabólica.",
            },
            {
              question: "Idosos também se beneficiam?",
              answer:
                "Sim, caminhada acelerada já conta. Segurança e liberação médica vêm primeiro.",
            },
            {
              question: "Posso testar meu QI logo após a corrida?",
              answer:
                "Melhor esperar hidratação e batimentos normais; teste cansado subestima atenção e velocidade.",
            },
          ]}
        />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra seu QI</h3>
          <p className="text-muted-foreground mb-6">Teste gratuito — resultado em minutos.</p>
          <Button size="lg" className="gap-2" onClick={() => navigate("/teste")}>
            Fazer o Teste <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Continue Lendo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("como-correr-melhora-qi", 3).map((article) => (
              <Card key={article.slug} className="p-6 hover:shadow-lg border-2 border-primary/20">
                <Link to={`/blog/${article.slug}`}>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">{article.category}</span>
                  <h3 className="text-lg font-bold mt-3 mb-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{article.description}</p>
                </Link>
              </Card>
            ))}
          </div>
        </div>
        <section className="mt-16"><SocialProofCarousel /></section>
      </article>
      <Footer />
    </div>
  );
};

export default ComoCorrerMelhoraQI;
