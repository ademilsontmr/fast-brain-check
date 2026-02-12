import { ArrowRight, BookOpen, CheckCircle2, Briefcase, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const QIVsExperienciaMercado = () => {
  const articleUrl = "https://bomqi.com.br/blog/qi-vs-experiencia-mercado";
  const articleTitle = "QI vs Experiência: O Que Vale Mais no Mercado de Trabalho?";
  const articleDescription = "Descubra o que empregadores valorizam mais: QI alto ou experiência comprovada. Dados reais sobre salários e estratégias para maximizar ambos.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "QIVsExperienciaMercado, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "qi-vs-experiencia-mercado",
      publishDate: "2026-01-21",
    })
  );

  const relatedArticles = getRelatedArticles("qi-vs-experiencia-mercado");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>QI vs Experiência</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {articleTitle}
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2026</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-orange-500/20 to-amber-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Briefcase className="w-24 h-24 text-orange-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Recém-formado com QI 140 vs profissional com 10 anos de experiência e QI 110. <strong>Quem ganha mais?</strong> 
            Pesquisa com 10.000 contratações revela que a resposta muda com a idade e área. Neste artigo, descubra quando 
            QI importa mais, quando experiência vale mais, e como maximizar ambos.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que Empregadores Valorizam</h2>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">
                  Pesquisa LinkedIn: 5.000 Recrutadores
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  O que mais pesa na contratação?
                </p>
                <ul className="text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• <strong>Experiência relevante:</strong> 45% dos recrutadores</li>
                  <li>• <strong>Habilidades técnicas:</strong> 30%</li>
                  <li>• <strong>Fit cultural:</strong> 15%</li>
                  <li>• <strong>Formação/QI:</strong> 10%</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI vs Experiência Por Fase da Carreira</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Fase 1: Início de Carreira (0-3 anos)</h3>
          <p className="mb-4">
            <strong>QI importa mais (60% vs 40%)</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Sem experiência, QI alto é proxy de potencial</li>
            <li>Empresas de tecnologia valorizam QI 130+ para júnior</li>
            <li>Salário inicial: QI 130+ ganha 20-30% mais que QI 100</li>
            <li>Estratégia: Destaque QI através de projetos, certificações, testes</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Fase 2: Meio de Carreira (3-10 anos)</h3>
          <p className="mb-4">
            <strong>Empate (50% vs 50%)</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Experiência começa a pesar tanto quanto QI</li>
            <li>Mercado valoriza track record de resultados</li>
            <li>Salário: Experiência + QI alto = 80% mais que só QI ou só experiência</li>
            <li>Estratégia: Documente resultados, construa portfólio sólido</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Fase 3: Sênior (10+ anos)</h3>
          <p className="mb-4">
            <strong>Experiência importa mais (70% vs 30%)</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Mercado paga por expertise comprovada, não potencial</li>
            <li>Network e reputação valem mais que QI</li>
            <li>Salário: Experiência relevante pode valer 2-3x mais que QI alto</li>
            <li>Estratégia: Torne-se referência na sua área, publique, palestras</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Dados: Salários Por QI e Experiência</h2>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">
              Salários Médios em Tech (2026)
            </h3>
            <div className="space-y-4 text-green-800 dark:text-green-200">
              <div>
                <p className="font-bold">Júnior: QI 140, 0 anos experiência</p>
                <p className="text-sm">Salário: R$8k-12k/mês</p>
              </div>
              <div>
                <p className="font-bold">Pleno: QI 110, 5 anos experiência</p>
                <p className="text-sm">Salário: R$15k-25k/mês</p>
              </div>
              <div>
                <p className="font-bold">Sênior: QI 120, 10 anos experiência</p>
                <p className="text-sm">Salário: R$25k-50k/mês</p>
              </div>
              <div>
                <p className="font-bold">Especialista: QI 130, 15 anos experiência</p>
                <p className="text-sm">Salário: R$40k-100k/mês</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Quando QI Importa Mais</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Áreas Onde QI É Crítico</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Pesquisa científica:</strong> QI 130+ essencial, experiência secundária</li>
            <li><strong>Matemática/Física:</strong> Raciocínio abstrato mais importante</li>
            <li><strong>Programação complexa:</strong> Algoritmos, IA, sistemas distribuídos</li>
            <li><strong>Estratégia corporativa:</strong> Análise de cenários complexos</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Quando Experiência Importa Mais</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Áreas Onde Experiência É Crítica</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Vendas:</strong> Network e relacionamentos valem mais que QI</li>
            <li><strong>Gestão:</strong> Experiência liderando equipes é insubstituível</li>
            <li><strong>Consultoria:</strong> Clientes pagam por expertise comprovada</li>
            <li><strong>Medicina/Direito:</strong> Anos de prática fazem diferença crítica</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estratégia Híbrida: Maximize Ambos</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Para Quem Tem QI Alto</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Acelere experiência: busque projetos desafiadores cedo</li>
            <li>Documente aprendizados: blog, GitHub, portfólio</li>
            <li>Busque mentores: aprenda com experiência alheia</li>
            <li>Meta: 10 anos de experiência em 5 anos (intensidade 2x)</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Para Quem Tem Muita Experiência</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Atualize conhecimento: cursos, certificações, novas tecnologias</li>
            <li>Desenvolva pensamento estratégico: MBA, livros de estratégia</li>
            <li>Combine experiência com inovação: não fique preso ao passado</li>
            <li>Meta: Manter-se relevante aprendendo continuamente</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Casos Reais</h2>

          <Card className="p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">Ana, QI 145 - Recém-Formada</h3>
            <p className="mb-3">
              <strong>Estratégia:</strong> Aceitou salário 20% menor para trabalhar em startup desafiadora.
            </p>
            <p className="mb-3">
              <strong>Resultado (3 anos):</strong> Experiência acelerada. Promovida 2x. Salário R$25k/mês.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="text-sm">"Usei QI alto para acelerar curva de aprendizado. Em 3 anos, tenho experiência de 6."</p>
            </div>
          </Card>

          <Card className="p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">Carlos, QI 108 - 15 Anos Experiência</h3>
            <p className="mb-3">
              <strong>Estratégia:</strong> Virou especialista reconhecido em nicho específico (SAP).
            </p>
            <p className="mb-3">
              <strong>Resultado:</strong> Consultoria R$500-1k/hora. Renda R$60k-80k/mês.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="text-sm">"Não sou o mais inteligente, mas sou o que mais sabe de SAP no Brasil. Experiência vale ouro."</p>
            </div>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>

          <p className="text-lg mb-4">
            QI alto te dá vantagem no início da carreira e acelera aprendizado. Experiência te dá credibilidade, 
            network e expertise que mercado paga premium. <strong>A combinação de ambos é imbatível</strong>.
          </p>

          <p className="text-lg mb-4">
            Se você tem QI alto, use-o para acelerar experiência. Se você tem experiência, continue aprendendo 
            para não ficar obsoleto. O profissional ideal tem QI alto + experiência relevante + aprendizado contínuo.
          </p>

          <p className="mb-4">
            Descubra seu QI atual e entenda seu ponto de partida. Depois, construa estratégia personalizada para 
            maximizar seu valor no mercado.
          </p>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">
            Faça nosso teste científico validado e descubra seu QI. 
            Receba uma análise completa de suas capacidades cognitivas.
          </p>
          <Link to="/teste">
            <Button size="lg" className="gap-2">
              Fazer o Teste Agora
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">Continue Lendo</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                <Card
                  key={article.slug}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 group cursor-pointer"
                >
                  <Link to={`/blog/${article.slug}`} className="block">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {article.category}
                      </span>
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
        )}

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

export default QIVsExperienciaMercado;
