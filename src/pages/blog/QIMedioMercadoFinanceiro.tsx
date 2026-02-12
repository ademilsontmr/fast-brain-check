import { Brain, ArrowRight, BookOpen, Clock, TrendingUp, DollarSign, Target, BarChart } from "lucide-react";
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

const QIMedioMercadoFinanceiro = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/qi-medio-mercado-financeiro";
  const articleTitle = "QI Médio no Mercado Financeiro: Inteligência e Finanças";
  const articleDescription = "Descubra qual é o QI médio dos profissionais do mercado financeiro, traders, analistas e como a inteligência impacta o sucesso nas finanças.";
  const publishDate = "2024-01-15";
  const modifiedDate = "2024-01-15";
  
  useSEO({
    title: "QI Médio no Mercado Financeiro",
    description: articleDescription,
    url: articleUrl,
    keywords: "QI médio mercado financeiro, inteligência finanças, QI profissão trader, traders inteligentes, QI área financeira, inteligência investimentos, QI médio finanças, traders QI alto, profissão trader inteligência, QI carreira financeira",
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
      "author": { "@type": "Organization", "name": "Equipe Bom QI" },
      "publisher": { "@type": "Organization", "name": "Equipe Bom QI", "logo": { "@type": "ImageObject", "url": "https://bomqi.com.br/favicon-brain-icon.png" } }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bomqi.com.br" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://bomqi.com.br/blog" },
        { "@type": "ListItem", "position": 3, "name": articleTitle, "item": articleUrl }
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
          <span>QI Médio no Mercado Financeiro</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2024</time>
          <span>•</span>
          <span>9 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <TrendingUp className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            O mercado financeiro atrai profissionais com alta capacidade analítica e raciocínio 
            quantitativo. Mas qual é realmente o QI médio neste setor e como a inteligência 
            impacta o sucesso nas finanças?
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Médio por Função</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BarChart className="w-5 h-5 text-primary" />
              Estimativas por Cargo
            </h3>
            <ul className="space-y-2">
              <li>• <strong>Quants/Cientistas de Dados:</strong> 125-140</li>
              <li>• <strong>Analistas de Investimentos:</strong> 115-130</li>
              <li>• <strong>Traders:</strong> 110-125</li>
              <li>• <strong>Gestores de Fundos:</strong> 115-130</li>
              <li>• <strong>Banqueiros de Investimento:</strong> 115-125</li>
              <li>• <strong>Consultores Financeiros:</strong> 105-120</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Por Que o QI é Alto no Setor?</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Seleção Natural</h3>
          <p className="mb-4">
            O mercado financeiro é extremamente competitivo. Processos seletivos rigorosos, 
            incluindo testes de raciocínio lógico e matemático, filtram candidatos com 
            alta capacidade cognitiva.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Demandas do Trabalho</h3>
          <p className="mb-4">
            Análise de dados complexos, tomada de decisão sob pressão e processamento rápido 
            de informações exigem habilidades cognitivas acima da média.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Habilidades Cognitivas Valorizadas</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <DollarSign className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Raciocínio Quantitativo</h3>
              <p className="text-sm">
                Capacidade de trabalhar com números, estatísticas e modelos matemáticos 
                complexos é fundamental para análise financeira.
              </p>
            </Card>
            
            <Card className="p-6">
              <Target className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Pensamento Analítico</h3>
              <p className="text-sm">
                Habilidade de decompor problemas complexos, identificar padrões e 
                tomar decisões baseadas em dados.
              </p>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI vs Sucesso Financeiro</h2>
          <p className="mb-4">
            Embora o QI seja importante, não é o único fator de sucesso no mercado financeiro:
          </p>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Outros Fatores Cruciais</h3>
            <ul className="space-y-3">
              <li><strong>Controle emocional:</strong> Gerenciar medo e ganância</li>
              <li><strong>Disciplina:</strong> Seguir estratégias consistentemente</li>
              <li><strong>Networking:</strong> Construir relacionamentos profissionais</li>
              <li><strong>Adaptabilidade:</strong> Ajustar-se a mudanças de mercado</li>
              <li><strong>Gestão de risco:</strong> Proteger capital em cenários adversos</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Estudos e Pesquisas</h2>
          <p className="mb-4">
            Pesquisas acadêmicas mostram correlações interessantes:
          </p>
          <ul className="mb-4">
            <li>• Traders com QI mais alto tendem a ter melhor gestão de risco</li>
            <li>• Analistas com maior capacidade verbal produzem relatórios mais precisos</li>
            <li>• Gestores com alto QI não necessariamente superam o mercado consistentemente</li>
            <li>• Inteligência emocional pode ser mais importante que QI para traders</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Desenvolver Habilidades</h2>
          <p className="mb-4">
            Para quem deseja entrar ou crescer no mercado financeiro:
          </p>
          <ul className="mb-4">
            <li>• Estude matemática e estatística avançada</li>
            <li>• Pratique análise de dados e modelagem</li>
            <li>• Desenvolva habilidades de programação (Python, R)</li>
            <li>• Leia sobre economia e mercados regularmente</li>
            <li>• Pratique tomada de decisão sob pressão</li>
            <li>• Trabalhe sua inteligência emocional</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            O mercado financeiro realmente atrai e seleciona profissionais com QI acima da média, 
            especialmente em funções quantitativas. No entanto, o sucesso no setor depende de uma 
            combinação de inteligência, habilidades emocionais, disciplina e experiência.
          </p>
        </div>
        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "Qual faixa de QI de mercado financeiro?",
                    "answer": "mercado financeiro geralmente têm QI entre 95-115, com média próxima de 100-105. Variação individual é significativa."
          },
          {
                    "question": "mercado financeiro com QI alto se destacam mais?",
                    "answer": "Sim. QI 120+ facilita aprendizado rápido e resolução de problemas. Mas dedicação e habilidades sociais também são cruciais."
          },
          {
                    "question": "Educação influencia QI de mercado financeiro?",
                    "answer": "Sim. Cada ano adicional de educação aumenta QI em 1-3 pontos. Educação superior pode adicionar 5-10 pontos."
          },
          {
                    "question": "mercado financeiro podem superar limitações de QI?",
                    "answer": "Sim. Especialização, trabalho duro e desenvolvimento de habilidades específicas compensam QI médio ou abaixo da média."
          },
          {
                    "question": "Ambiente familiar afeta QI de mercado financeiro?",
                    "answer": "Sim. Ambiente estimulante, acesso a livros e apoio educacional podem aumentar QI em 10-15 pontos comparado a ambiente carente."
          }
]} />


        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">
            Quer saber se você tem o perfil cognitivo para o mercado financeiro? Faça nosso teste.
          </p>
          <Link to="/teste">
            <Button size="lg" className="gap-2">
              Fazer o Teste de QI
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
            {getRelatedArticles("qi-medio-mercado-financeiro", 3).map((article) => (
              <Card key={article.slug} className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 group cursor-pointer">
                <Link to={`/blog/${article.slug}`} className="block">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">{article.category}</span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" /></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.description}</p>
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

export default QIMedioMercadoFinanceiro;
