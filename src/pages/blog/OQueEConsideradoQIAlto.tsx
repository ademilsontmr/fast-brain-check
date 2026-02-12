import { Brain, ArrowRight, TrendingUp, Award, BookOpen, Clock, BarChart3 } from "lucide-react";
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
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const OQueEConsideradoQIAlto = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/o-que-e-considerado-qi-alto";
  const articleTitle = "O Que é Considerado um QI Alto? Classificação e Significado Completo";
  const articleDescription = "Descubra o que é considerado QI alto. Classificação completa (QI médio, alto, muito alto, gênio), percentis, significado prático e como interpretar seu resultado.";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "OQueEConsideradoQIAlto, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "o-que-e-considerado-qi-alto",
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
          <span>O Que é Considerado QI Alto</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          O Que é Considerado um QI Alto? Classificação e Significado Completo
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
          <span>•</span>
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Award className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            "O que é considerado um QI alto?" é uma das perguntas mais comuns sobre inteligência. 
            Neste artigo, explicamos a classificação completa de QI, o que cada faixa significa na 
            prática, percentis, e como interpretar seu resultado de forma precisa e útil.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Classificação Padrão de QI</h2>
          <p className="mb-4">
            A classificação de QI é baseada em uma distribuição normal (curva de sino), onde a 
            média é 100 e o desvio padrão é 15. Aqui está a classificação completa:
          </p>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4">Classificação de QI (Escala Wechsler)</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-background rounded border-2 border-red-300">
                <span><strong>130+</strong> - Muito Superior / Gênio</span>
                <span className="text-primary font-bold">Top 2.2%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded border-2 border-primary/30">
                <span><strong>120-129</strong> - Superior</span>
                <span className="text-primary font-bold">Top 6.7%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>110-119</strong> - Acima da Média</span>
                <span className="text-primary font-bold">Top 16.1%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded border-2 border-green-300">
                <span><strong>90-109</strong> - Média</span>
                <span className="text-primary font-bold">50% da população</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>80-89</strong> - Abaixo da Média</span>
                <span className="text-primary font-bold">16.1%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>70-79</strong> - Limítrofe</span>
                <span className="text-primary font-bold">6.7%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span><strong>70-</strong> - Deficiência Intelectual</span>
                <span className="text-primary font-bold">2.2%</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que é Considerado QI Alto?</h2>
          <p className="mb-4">
            <strong>QI alto geralmente se refere a QI de 120 ou mais</strong>, o que coloca você 
            no top 9% da população. No entanto, há nuances importantes:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">QI Acima da Média (110-119)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Percentil:</strong> 75-90 (top 10-25% da população)</li>
            <li><strong>Significado:</strong> Inteligência acima da média, mas não excepcional</li>
            <li><strong>Características:</strong> Boa capacidade de aprendizado, raciocínio sólido</li>
            <li><strong>Oportunidades:</strong> Pode ter sucesso em maioria das áreas com esforço</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">QI Superior (120-129) - "QI Alto"</h3>
          <p className="mb-4">
            <strong>Esta é a faixa mais comumente chamada de "QI alto":</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Percentil:</strong> 91-97.7 (top 2.3-9% da população)</li>
            <li><strong>Significado:</strong> Inteligência significativamente acima da média</li>
            <li><strong>Características:</strong> Aprendizado rápido, raciocínio complexo, boa memória</li>
            <li><strong>Oportunidades:</strong> Excelente desempenho acadêmico, muitas carreiras acessíveis</li>
            <li><strong>Exemplos:</strong> Muitos profissionais de sucesso, acadêmicos, engenheiros</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">QI Muito Superior (130+) - "Gênio"</h3>
          <p className="mb-4">
            <strong>QI de 130+ é considerado excepcional ou "gênio":</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Percentil:</strong> 97.7+ (top 2.2% da população)</li>
            <li><strong>Significado:</strong> Inteligência excepcional, rara</li>
            <li><strong>Características:</strong> Aprendizado muito rápido, raciocínio abstrato avançado</li>
            <li><strong>Oportunidades:</strong> Excelência em áreas intelectuais complexas</li>
            <li><strong>Exemplos:</strong> Cientistas, matemáticos, físicos teóricos</li>
          </ul>
          <div className="bg-primary/10 p-4 rounded-lg my-4 border-l-4 border-primary">
            <p className="mb-2">
              <strong>Nota importante:</strong> QI de 130+ é necessário para entrar em organizações 
              como Mensa (sociedade de alto QI), mas não garante sucesso ou felicidade.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Percentis e Distribuição</h2>
          <p className="mb-4">
            Entender percentis ajuda a contextualizar seu QI:
          </p>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4">QI e Percentil</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span><strong>145+</strong></span>
                <span>Top 0.1% (1 em 1000)</span>
              </div>
              <div className="flex justify-between">
                <span><strong>135-144</strong></span>
                <span>Top 1% (1 em 100)</span>
              </div>
              <div className="flex justify-between">
                <span><strong>130-134</strong></span>
                <span>Top 2.2% (1 em 45)</span>
              </div>
              <div className="flex justify-between">
                <span><strong>125-129</strong></span>
                <span>Top 5% (1 em 20)</span>
              </div>
              <div className="flex justify-between">
                <span><strong>120-124</strong></span>
                <span>Top 9% (1 em 11)</span>
              </div>
              <div className="flex justify-between">
                <span><strong>115-119</strong></span>
                <span>Top 16% (1 em 6)</span>
              </div>
              <div className="flex justify-between">
                <span><strong>110-114</strong></span>
                <span>Top 25% (1 em 4)</span>
              </div>
              <div className="flex justify-between">
                <span><strong>100-109</strong></span>
                <span>50% da população (média)</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Significado Prático de QI Alto</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">QI 120-129 (Superior)</h3>
          <p className="mb-4">
            Na prática, QI nesta faixa significa:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Acadêmico:</strong> Excelente desempenho em estudos, facilidade com matérias complexas</li>
            <li><strong>Profissional:</strong> Acesso a maioria das carreiras, bom desempenho em funções intelectuais</li>
            <li><strong>Aprendizado:</strong> Aprende mais rápido que a média, compreende conceitos complexos</li>
            <li><strong>Resolução de problemas:</strong> Encontra soluções mais rapidamente</li>
            <li><strong>Memória:</strong> Geralmente melhor memória de trabalho</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">QI 130+ (Muito Superior)</h3>
          <p className="mb-4">
            QI nesta faixa significa:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Acadêmico:</strong> Excelência acadêmica, facilidade com matérias muito complexas</li>
            <li><strong>Profissional:</strong> Excelência em áreas intelectuais complexas (pesquisa, engenharia avançada, etc.)</li>
            <li><strong>Aprendizado:</strong> Aprendizado muito rápido, compreensão profunda</li>
            <li><strong>Raciocínio:</strong> Raciocínio abstrato muito avançado</li>
            <li><strong>Criatividade:</strong> Pode ter alta criatividade (mas não é garantido)</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Alto vs. Sucesso na Vida</h2>
          <p className="mb-4">
            É importante entender que QI alto não garante sucesso:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>QI é apenas um fator:</strong> Sucesso depende de múltiplos fatores</li>
            <li><strong>Inteligência emocional:</strong> Pode ser mais importante que QI em muitas situações</li>
            <li><strong>Persistência:</strong> Trabalho duro muitas vezes supera QI alto sem esforço</li>
            <li><strong>Oportunidades:</strong> Acesso a recursos e oportunidades importa muito</li>
            <li><strong>Habilidades sociais:</strong> Networking e relacionamentos são cruciais</li>
            <li><strong>Felicidade:</strong> QI alto não correlaciona diretamente com felicidade</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI Alto em Diferentes Contextos</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">QI Alto na Escola</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Geralmente excelente desempenho acadêmico</li>
            <li>Pode se entediar se não for desafiado</li>
            <li>Pode precisar de programas para alunos superdotados</li>
            <li>Pode ter dificuldades sociais (não é regra)</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">QI Alto no Trabalho</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Bom desempenho em funções intelectuais</li>
            <li>Pode se destacar em áreas complexas</li>
            <li>Mas sucesso também depende de outras habilidades</li>
            <li>QI muito alto pode ser desnecessário para muitas funções</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">QI Alto e Relacionamentos</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>QI alto não garante bons relacionamentos</li>
            <li>Inteligência emocional pode ser mais importante</li>
            <li>Algumas pessoas com QI muito alto podem ter dificuldades sociais</li>
            <li>Mas muitos têm relacionamentos normais e saudáveis</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Saber Se Você Tem QI Alto?</h2>
          <p className="mb-4">
            A única forma confiável é fazer um teste de QI válido:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Testes profissionais:</strong> WAIS, WISC (mais confiáveis, mas caros)</li>
            <li><strong>Testes online validados:</strong> Podem dar uma estimativa razoável</li>
            <li><strong>Mensa:</strong> Teste de admissão (QI mínimo 130)</li>
            <li><strong>Importante:</strong> Testes devem ser padronizados e validados</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Mitos Sobre QI Alto</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Mito: QI Alto = Gênio em Tudo</h3>
          <p className="mb-4">
            <strong>Realidade:</strong> QI alto não significa excelência em todas as áreas. 
            Pessoas podem ter QI alto mas serem ruins em esportes, artes, ou habilidades sociais.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Mito: QI Alto = Sucesso Garantido</h3>
          <p className="mb-4">
            <strong>Realidade:</strong> QI alto ajuda, mas sucesso depende de trabalho duro, 
            oportunidades, inteligência emocional e outros fatores.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Mito: QI Alto = Infelicidade</h3>
          <p className="mb-4">
            <strong>Realidade:</strong> Não há correlação forte entre QI alto e infelicidade. 
            Muitas pessoas com QI alto são felizes e bem-sucedidas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            <strong>QI alto geralmente se refere a QI de 120 ou mais</strong>, colocando você 
            no top 9% da população. QI de 130+ é considerado excepcional (top 2.2%).
          </p>
          <p className="mb-4">
            No entanto, é importante lembrar que QI é apenas um aspecto da inteligência e não 
            determina seu valor ou potencial de sucesso. Inteligência emocional, trabalho duro, 
            persistência e oportunidades são igualmente ou mais importantes em muitas situações.
          </p>
          <p className="mb-4">
            Se você quer saber seu QI, faça um teste válido. Mas lembre-se: o número é menos 
            importante que usar suas capacidades para crescer, aprender e contribuir.
          </p>
        </div>

        {/* CTA */}
        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "Como este tema se relaciona com inteligência?",
                    "answer": "Este tema está diretamente relacionado ao desenvolvimento cognitivo e expressão da inteligência. Compreender esses conceitos ajuda a maximizar potencial."
          },
          {
                    "question": "Posso aplicar isso na prática?",
                    "answer": "Sim. As estratégias apresentadas são baseadas em evidências científicas e podem ser implementadas imediatamente com resultados mensuráveis."
          },
          {
                    "question": "Quanto tempo para ver resultados?",
                    "answer": "Resultados iniciais em 30-60 dias com prática consistente. Melhorias significativas em 6-12 meses de aplicação sustentada."
          },
          {
                    "question": "Funciona para todas as idades?",
                    "answer": "Sim. Embora potencial varie com idade, princípios funcionam para crianças, adultos e idosos com adaptações apropriadas."
          },
          {
                    "question": "Como medir meu progresso?",
                    "answer": "Faça teste de QI inicial, implemente estratégias por 6 meses, refaça teste. Também monitore desempenho em trabalho/estudos."
          }
]} />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">
            Quer saber se você tem QI alto? Faça nosso teste científico completo e descubra 
            seu QI real e onde você se posiciona na distribuição.
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
            {getRelatedArticles("o-que-e-considerado-qi-alto", 3).map((article) => (
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

export default OQueEConsideradoQIAlto;

