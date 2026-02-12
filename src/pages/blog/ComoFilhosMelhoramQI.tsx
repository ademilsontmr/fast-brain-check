import { Brain, ArrowRight, BookOpen, Clock, Users, Lightbulb, Target, Zap } from "lucide-react";
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

const ComoFilhosMelhoramQI = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/como-filhos-melhoram-qi";
  const articleTitle = "Como Ajudar Seus Filhos a Melhorar o QI: Guia para Pais";
  const articleDescription = "Estratégias comprovadas para pais ajudarem seus filhos a desenvolver capacidades cognitivas, memória e inteligência desde cedo.";
  
  useSEO({ title: "Como Filhos Melhoram QI", description: articleDescription, url: articleUrl, keywords: "filhos melhoram QI, ter filhos inteligência, paternidade QI, maternidade inteligência, filhos desenvolvimento cognitivo, pais inteligentes, criar filhos QI, parentalidade inteligência, filhos cérebro, QI pais" });
  useStructuredData([
    { "@context": "https://schema.org", "@type": "Article", "headline": articleTitle, "description": articleDescription, "image": "https://bomqi.com.br/favicon-brain-icon.png", "datePublished": "2024-01-15", "dateModified": "2024-01-15", "author": { "@type": "Organization", "name": "Equipe Bom QI" }, "publisher": { "@type": "Organization", "name": "Equipe Bom QI", "logo": { "@type": "ImageObject", "url": "https://bomqi.com.br/favicon-brain-icon.png" } } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bomqi.com.br" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://bomqi.com.br/blog" }, { "@type": "ListItem", "position": 3, "name": articleTitle, "item": articleUrl }] }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link><span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link><span className="mx-2">/</span><span>Como Filhos Melhoram QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8"><time>Janeiro 2024</time><span>•</span><span>10 min de leitura</span></div>
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center"><Users className="w-24 h-24 text-primary" /></div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">Pais têm papel fundamental no desenvolvimento cognitivo dos filhos. Descubra estratégias baseadas em ciência para estimular a inteligência das crianças em cada fase.</p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Primeira Infância (0-5 anos)</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Brain className="w-5 h-5 text-primary" />Estimulação Precoce</h3>
            <ul className="space-y-2">
              <li>• <strong>Conversar muito:</strong> Exposição à linguagem é crucial</li>
              <li>• <strong>Ler diariamente:</strong> Desenvolve vocabulário e imaginação</li>
              <li>• <strong>Brincar:</strong> Jogos estimulam desenvolvimento cerebral</li>
              <li>• <strong>Música:</strong> Cantar e ouvir música beneficia cognição</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Idade Escolar (6-12 anos)</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6"><Lightbulb className="w-8 h-8 text-yellow-500 mb-4" /><h3 className="text-lg font-bold mb-2">Atividades Extracurriculares</h3><p className="text-sm">Música, esportes, artes - desenvolvem múltiplas inteligências.</p></Card>
            <Card className="p-6"><Target className="w-8 h-8 text-green-500 mb-4" /><h3 className="text-lg font-bold mb-2">Jogos Educativos</h3><p className="text-sm">Xadrez, quebra-cabeças, jogos de lógica estimulam raciocínio.</p></Card>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Hábitos Essenciais</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <ul className="space-y-3">
              <li><strong>Sono adequado:</strong> 9-12 horas para crianças</li>
              <li><strong>Alimentação:</strong> Rica em ômega-3, frutas, vegetais</li>
              <li><strong>Exercício físico:</strong> Atividade diária</li>
              <li><strong>Limitar telas:</strong> Máximo 1-2 horas/dia</li>
              <li><strong>Tempo em família:</strong> Conversas e atividades juntos</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que Evitar</h2>
          <ul className="mb-4">
            <li>• Pressão excessiva por desempenho</li>
            <li>• Comparações com outras crianças</li>
            <li>• Excesso de atividades estruturadas</li>
            <li>• Falta de tempo livre para brincar</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">O desenvolvimento cognitivo dos filhos depende de um ambiente estimulante, amoroso e equilibrado. Mais importante que números de QI é criar crianças curiosas, criativas e emocionalmente saudáveis.</p>
        </div>
        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "Filhos têm QI mais alto que a média?",
                    "answer": "Sim. QI médio de filhos é 110-125, acima da média populacional de 100. A profissão exige raciocínio analítico e resolução de problemas complexos."
          },
          {
                    "question": "Como filhos podem aumentar ainda mais o QI?",
                    "answer": "Educação continuada, resolver problemas complexos no trabalho, aprender novas técnicas, ler literatura técnica e praticar habilidades cognitivas fora do trabalho."
          },
          {
                    "question": "Qual QI é necessário para ser filho?",
                    "answer": "QI 105+ é recomendado. Abaixo disso, dificuldade com aspectos técnicos. QI 115+ facilita aprendizado rápido e resolução de problemas complexos."
          },
          {
                    "question": "A profissão desenvolve inteligência ao longo do tempo?",
                    "answer": "Sim. Desafios cognitivos diários, aprendizado contínuo e resolução de problemas aumentam QI em 5-10 pontos ao longo da carreira."
          },
          {
                    "question": "Filhos com QI alto ganham mais?",
                    "answer": "Sim. Profissionais com QI 120+ tendem a ocupar cargos de liderança e especialização, com salários 30-50% maiores que a média da profissão."
          }
]} />


        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">Teste suas habilidades cognitivas em apenas 3 minutos.</p>
          <Link to="/teste"><Button size="lg" className="gap-2">Fazer o Teste de QI<ArrowRight className="w-5 h-5" /></Button></Link>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6"><BookOpen className="w-6 h-6 text-primary" /><h2 className="text-2xl md:text-3xl font-bold">Continue Lendo</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("como-filhos-melhoram-qi", 3).map((article) => (
              <Card key={article.slug} className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 group cursor-pointer">
                <Link to={`/blog/${article.slug}`} className="block">
                  <div className="flex items-center gap-2 mb-3"><span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">{article.category}</span><div className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" /></div></div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.description}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">Ler artigo<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
        <section className="mt-16"><div className="text-center mb-12"><h2 className="text-2xl md:text-3xl font-bold mb-4">O que as pessoas estão dizendo</h2></div><SocialProofCarousel /></section>
      </article>
      <Footer />
    </div>
  );
};

export default ComoFilhosMelhoramQI;
