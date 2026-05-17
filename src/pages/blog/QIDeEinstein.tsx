import { Brain, ArrowRight, Star, Lightbulb, TrendingUp, CheckCircle2, Users } from "lucide-react";
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

const QIDeEinstein = () => {
  const navigate = useNavigate();

  const articleUrl = "https://bomqi.com.br/blog/qi-de-einstein";
  const articleTitle = "Qual era o QI de Einstein? E o Seu Comparado ao Dele?";
  const articleDescription = "Descubra qual era o QI de Einstein, como ele se compara com outros gênios da história e como você pode medir sua própria inteligência.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-de-einstein",
      publishDate: "2026-01-20",
    })
  );

  const relatedArticles = getRelatedArticles("qi-de-einstein");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>QI de Einstein</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>8 de Maio de 2026</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-yellow-500/20 to-amber-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Star className="w-24 h-24 text-yellow-500" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Albert Einstein é sinônimo de gênio. Mas <strong>qual era o QI de Einstein exatamente?</strong> A resposta surpreende muita gente — e a comparação com outros gênios da história revela algo ainda mais fascinante sobre inteligência.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O QI de Einstein: O Que Sabemos</h2>

          <div className="bg-yellow-50 dark:bg-yellow-950/20 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-yellow-900 dark:text-yellow-100">Estimativa do QI de Einstein</h3>
                <p className="text-yellow-800 dark:text-yellow-200 mb-2">
                  <strong>QI estimado: 160–190</strong>
                </p>
                <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                  Einstein nunca fez um teste de QI formal. O valor é uma estimativa retroativa baseada em suas obras, cartas e realizações científicas.
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Einstein nasceu em 1879, muito antes dos testes de QI modernos existirem. O psicólogo Dean Keith Simonton estimou seu QI entre 160 e 190 com base em análise historiométrica — um método que avalia gênios históricos por suas realizações documentadas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI dos Maiores Gênios da História</h2>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-100">Ranking de QI Estimado</h3>
            <ul className="space-y-3 text-blue-800 dark:text-blue-200">
              <li className="flex justify-between"><span><strong>William James Sidis</strong> — Matemático prodígio</span><span className="font-bold">250–300</span></li>
              <li className="flex justify-between"><span><strong>Terence Tao</strong> — Matemático vivo</span><span className="font-bold">225–230</span></li>
              <li className="flex justify-between"><span><strong>Leonardo da Vinci</strong> — Polímata</span><span className="font-bold">180–220</span></li>
              <li className="flex justify-between"><span><strong>Isaac Newton</strong> — Físico</span><span className="font-bold">190–200</span></li>
              <li className="flex justify-between"><span><strong>Albert Einstein</strong> — Físico</span><span className="font-bold">160–190</span></li>
              <li className="flex justify-between"><span><strong>Stephen Hawking</strong> — Físico teórico</span><span className="font-bold">160</span></li>
              <li className="flex justify-between"><span><strong>Elon Musk</strong> — Empresário</span><span className="font-bold">155</span></li>
              <li className="flex justify-between"><span><strong>Bill Gates</strong> — Empresário</span><span className="font-bold">160</span></li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que Fazia Einstein Tão Especial?</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Pensamento Visual Extraordinário</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Experimentos mentais:</strong> Einstein pensava em imagens, não em palavras ou equações</li>
            <li><strong>Exemplo famoso:</strong> Imaginou-se viajando ao lado de um raio de luz — isso levou à Teoria da Relatividade</li>
            <li><strong>Habilidade rara:</strong> Capacidade de visualizar conceitos abstratos em 3D</li>
            <li><strong>Impacto:</strong> Permitiu insights que matemáticos puros não conseguiam ter</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Curiosidade Obsessiva</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Pergunta aos 5 anos:</strong> "O que é a luz?" — levou 20 anos para responder</li>
            <li><strong>Persistência:</strong> Trabalhou na Teoria da Relatividade Geral por 10 anos</li>
            <li><strong>Foco profundo:</strong> Capaz de se concentrar em um problema por horas sem interrupção</li>
            <li><strong>Lição:</strong> QI alto sem curiosidade não gera genialidade</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Desafio às Convenções</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Questionou Newton:</strong> Desafiou a física clássica que era "verdade absoluta"</li>
            <li><strong>Pensamento lateral:</strong> Via problemas de ângulos que outros ignoravam</li>
            <li><strong>Fracassos:</strong> Passou anos sem emprego acadêmico antes do sucesso</li>
            <li><strong>Lição:</strong> Genialidade requer coragem de questionar o estabelecido</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Einstein Era Bom em Tudo?</h2>

          <p className="text-lg leading-relaxed mb-6">
            Surpreendentemente, não. Einstein tinha dificuldades com memória de curto prazo e frequentemente esquecia nomes, datas e números de telefone. Ele próprio disse: "Nunca memorizo algo que posso consultar em um livro."
          </p>

          <Card className="p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Pontos Fortes e Fracos de Einstein</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">Pontos Fortes</p>
                <ul className="space-y-1 text-sm">
                  <li>✓ Raciocínio espacial e visual</li>
                  <li>✓ Pensamento abstrato</li>
                  <li>✓ Criatividade científica</li>
                  <li>✓ Concentração profunda</li>
                  <li>✓ Intuição matemática</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-red-600 mb-2">Pontos Fracos</p>
                <ul className="space-y-1 text-sm">
                  <li>✗ Memória de curto prazo</li>
                  <li>✗ Habilidades sociais</li>
                  <li>✗ Organização pessoal</li>
                  <li>✗ Aprendizado tardio da fala</li>
                  <li>✗ Relacionamentos interpessoais</li>
                </ul>
              </div>
            </div>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Seu QI se Compara ao de Einstein?</h2>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">Escala de QI para Referência</h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• <strong>Abaixo de 70:</strong> Deficiência intelectual</li>
              <li>• <strong>70–85:</strong> Abaixo da média</li>
              <li>• <strong>85–115:</strong> Média (68% da população)</li>
              <li>• <strong>115–130:</strong> Acima da média</li>
              <li>• <strong>130–145:</strong> Superdotado (2% da população)</li>
              <li>• <strong>145–160:</strong> Gênio (0.1% da população)</li>
              <li>• <strong>160+:</strong> Einstein, Newton, da Vinci</li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            A maioria das pessoas tem QI entre 85 e 115. Ter QI acima de 130 já coloca você entre os 2% mais inteligentes do mundo. Einstein estava no 0.001% superior — uma raridade estatística extraordinária.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Alto Garante Sucesso Como Einstein?</h2>

          <p className="text-lg leading-relaxed mb-6">
            Não necessariamente. Pesquisas mostram que QI explica apenas 20-25% da variação no sucesso profissional. Os outros 75-80% dependem de fatores como:
          </p>

          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Inteligência emocional:</strong> Capacidade de gerenciar emoções e relacionamentos</li>
            <li><strong>Persistência (Grit):</strong> Angela Duckworth mostrou que grit prediz sucesso melhor que QI</li>
            <li><strong>Curiosidade:</strong> Desejo genuíno de aprender e questionar</li>
            <li><strong>Rede de contatos:</strong> Com quem você se relaciona importa muito</li>
            <li><strong>Sorte e timing:</strong> Einstein publicou a Relatividade no momento certo da física</li>
          </ul>

          <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-8 my-12">
            <div className="text-center">
              <Brain className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Descubra Seu QI Agora</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Faça o teste científico e descubra como seu QI se compara ao de Einstein e outros gênios.
              </p>
              <Button onClick={() => navigate("/teste")} size="lg" className="shadow-lg">
                Fazer Teste de QI Grátis
              </Button>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="text-lg mb-4">
            O QI estimado de Einstein era entre 160 e 190 — colocando-o entre os maiores gênios da história. Mas o que realmente o tornou extraordinário foi a combinação de inteligência excepcional com curiosidade obsessiva, pensamento visual único e coragem de questionar o estabelecido.
          </p>
          <p className="text-lg mb-4">
            Você não precisa ter o QI de Einstein para ser bem-sucedido. Mas conhecer seu QI é o primeiro passo para entender seus pontos fortes e desenvolver seu potencial máximo.
          </p>
        </div>

        <SocialProofCarousel />

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Artigos Relacionados</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedArticles.map((article) => (
              <Card key={article.slug} className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate(`/blog/${article.slug}`)}>
                <h4 className="font-bold mb-2 hover:text-primary transition-colors">{article.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{article.description}</p>
                <div className="flex items-center text-primary text-sm font-semibold">
                  Ler artigo <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button onClick={() => navigate("/blog")} variant="outline" size="lg">← Voltar para o Blog</Button>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default QIDeEinstein;
