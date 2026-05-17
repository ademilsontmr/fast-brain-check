import { Brain, ArrowRight, CheckCircle2, Lightbulb, Target, Zap, BookOpen } from "lucide-react";
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

const ComoDescubrirMeuQI = () => {
  const navigate = useNavigate();

  const articleUrl = "https://bomqi.com.br/blog/como-descobrir-meu-qi";
  const articleTitle = "Como Descobrir Meu QI: 5 Formas Confiáveis em 2026";
  const articleDescription = "Descubra como saber seu QI de forma confiável. Comparamos os 5 melhores métodos: testes online, psicólogos, apps e mais. Qual é o mais preciso?";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "como-descobrir-meu-qi",
      publishDate: "2026-01-20",
    })
  );

  const relatedArticles = getRelatedArticles("como-descobrir-meu-qi");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Como Descobrir Meu QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>8 de Maio de 2026</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-indigo-500/20 to-purple-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Lightbulb className="w-24 h-24 text-indigo-500" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            <strong>"Como descobrir meu QI?"</strong> é uma das perguntas mais buscadas sobre inteligência no Brasil. Neste guia, comparamos os 5 métodos mais confiáveis — do teste com psicólogo ao teste online gratuito — para você escolher o melhor para sua situação.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Resposta Rápida: O Método Mais Fácil</h2>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Teste Online Científico (Recomendado)</h3>
                <p className="text-green-800 dark:text-green-200 mb-2">
                  Para a maioria das pessoas, um teste online bem estruturado é suficiente para ter uma boa estimativa do QI.
                </p>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Resultado em 3-5 minutos</li>
                  <li>✓ Sem necessidade de agendamento</li>
                  <li>✓ Custo acessível ou gratuito</li>
                  <li>✓ Precisão de 85-90% comparado ao teste formal</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Os 5 Métodos para Descobrir Seu QI</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Teste com Psicólogo (Mais Preciso)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Teste usado:</strong> WAIS-IV (adultos) ou WISC-V (crianças)</li>
            <li><strong>Precisão:</strong> 95-99% — padrão ouro científico</li>
            <li><strong>Duração:</strong> 60-120 minutos</li>
            <li><strong>Custo:</strong> R$800-2.500</li>
            <li><strong>Quando usar:</strong> Avaliação clínica, superdotação, processos seletivos formais</li>
            <li><strong>Desvantagem:</strong> Caro, demorado, requer agendamento</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Teste Online Científico (Melhor Custo-Benefício)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Exemplos:</strong> BomQI, Mensa Norway, IQ Test Labs</li>
            <li><strong>Precisão:</strong> 85-90% para estimativa geral</li>
            <li><strong>Duração:</strong> 3-20 minutos</li>
            <li><strong>Custo:</strong> Gratuito a R$30</li>
            <li><strong>Quando usar:</strong> Curiosidade pessoal, autoconhecimento, comparação</li>
            <li><strong>Desvantagem:</strong> Não tem validade clínica formal</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Teste Mensa (Para Superdotados)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>O que é:</strong> Organização que aceita apenas QI acima de 130 (top 2%)</li>
            <li><strong>Precisão:</strong> Alta — supervisionado por psicólogos</li>
            <li><strong>Duração:</strong> 2-3 horas</li>
            <li><strong>Custo:</strong> R$150-300 (taxa de aplicação)</li>
            <li><strong>Quando usar:</strong> Se você suspeita ter QI muito alto e quer confirmação oficial</li>
            <li><strong>Desvantagem:</strong> Só aceita quem já tem evidências de QI alto</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Testes Universitários e de Pesquisa</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>O que é:</strong> Universidades frequentemente buscam voluntários para pesquisas cognitivas</li>
            <li><strong>Precisão:</strong> Alta — aplicados por pesquisadores treinados</li>
            <li><strong>Custo:</strong> Gratuito (você ajuda a ciência)</li>
            <li><strong>Como encontrar:</strong> Contate departamentos de psicologia de universidades federais</li>
            <li><strong>Desvantagem:</strong> Disponibilidade limitada e irregular</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">5. Apps de Treinamento Cognitivo</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Exemplos:</strong> Lumosity, CogniFit, Peak, Elevate</li>
            <li><strong>Precisão:</strong> Baixa para QI — medem habilidades específicas, não QI geral</li>
            <li><strong>Custo:</strong> Gratuito a R$50/mês</li>
            <li><strong>Quando usar:</strong> Treinar habilidades cognitivas, não medir QI</li>
            <li><strong>Desvantagem:</strong> Não fornecem QI confiável — apenas scores internos</li>
          </ul>

          <Card className="p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Comparativo: Qual Método Escolher?</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Método</th>
                    <th className="text-center py-2">Precisão</th>
                    <th className="text-center py-2">Custo</th>
                    <th className="text-center py-2">Tempo</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  {[
                    { method: "Psicólogo (WAIS)", precision: "★★★★★", cost: "R$800+", time: "2h" },
                    { method: "Teste Online", precision: "★★★★☆", cost: "Grátis-R$30", time: "5min" },
                    { method: "Mensa", precision: "★★★★★", cost: "R$150+", time: "3h" },
                    { method: "Universidade", precision: "★★★★★", cost: "Grátis", time: "2h" },
                    { method: "Apps", precision: "★★☆☆☆", cost: "Grátis+", time: "Diário" },
                  ].map((row) => (
                    <tr key={row.method} className="border-b last:border-0">
                      <td className="py-2 font-medium">{row.method}</td>
                      <td className="py-2 text-center">{row.precision}</td>
                      <td className="py-2 text-center">{row.cost}</td>
                      <td className="py-2 text-center">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que Afeta a Precisão do Teste?</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Fatores que Aumentam a Precisão</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Descanso adequado:</strong> Dormir bem na noite anterior aumenta performance em 10-15%</li>
            <li><strong>Ambiente silencioso:</strong> Distrações reduzem o score</li>
            <li><strong>Sem pressa:</strong> Fazer o teste com calma, sem pressão de tempo</li>
            <li><strong>Alimentação:</strong> Não fazer o teste com fome — glicose é combustível cerebral</li>
            <li><strong>Prática prévia:</strong> Familiaridade com o formato melhora o resultado</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Fatores que Reduzem a Precisão</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Ansiedade:</strong> Nervosismo reduz performance cognitiva significativamente</li>
            <li><strong>Doença:</strong> Qualquer condição de saúde afeta o resultado</li>
            <li><strong>Álcool/drogas:</strong> Mesmo pequenas quantidades afetam cognição</li>
            <li><strong>Estresse:</strong> Cortisol alto prejudica memória de trabalho</li>
            <li><strong>Tela por muito tempo:</strong> Fadiga visual reduz velocidade de processamento</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Interpretar Seu Resultado</h2>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-100">Escala de QI</h3>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200">
              <li>• <strong>Abaixo de 70:</strong> Muito abaixo da média (2.2% da população)</li>
              <li>• <strong>70–85:</strong> Abaixo da média (13.6%)</li>
              <li>• <strong>85–115:</strong> Média (68.2%) — a maioria das pessoas</li>
              <li>• <strong>115–130:</strong> Acima da média (13.6%)</li>
              <li>• <strong>130–145:</strong> Superdotado (2.2%)</li>
              <li>• <strong>145+:</strong> Gênio excepcional (0.1%)</li>
            </ul>
          </div>

          <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-8 my-12">
            <div className="text-center">
              <Brain className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Descubra Seu QI Agora — 3 Minutos</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Nosso teste científico oferece uma estimativa precisa do seu QI com resultado imediato.
              </p>
              <Button onClick={() => navigate("/teste")} size="lg" className="shadow-lg">
                Fazer Teste de QI Grátis
              </Button>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="text-lg mb-4">
            Para a maioria das pessoas, um teste online científico é a melhor forma de descobrir o QI — rápido, acessível e suficientemente preciso para autoconhecimento. Se você precisa de avaliação clínica formal (para diagnóstico, escola especial ou processo seletivo), o teste com psicólogo é indispensável.
          </p>
          <p className="text-lg mb-4">
            O mais importante é usar o resultado como ponto de partida para o desenvolvimento, não como um rótulo definitivo. QI pode mudar com aprendizado, hábitos saudáveis e estimulação cognitiva.
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

export default ComoDescubrirMeuQI;
