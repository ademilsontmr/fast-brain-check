import { Brain, ArrowRight, Star, Users, CheckCircle2, AlertCircle, Lightbulb } from "lucide-react";
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

const TesteQICriancas = () => {
  const navigate = useNavigate();

  const articleUrl = "https://bomqi.com.br/blog/teste-qi-criancas";
  const articleTitle = "Teste de QI para Crianças: Guia Completo para Pais";
  const articleDescription = "Tudo sobre teste de QI para crianças: quando fazer, como funciona, o que mede e como interpretar os resultados. Guia completo para pais.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "teste-qi-criancas",
      publishDate: "2026-01-20",
    })
  );

  const relatedArticles = getRelatedArticles("teste-qi-criancas");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Teste de QI para Crianças</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>8 de Maio de 2026</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Users className="w-24 h-24 text-blue-500" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Muitos pais se perguntam: <strong>meu filho é superdotado? Quando devo fazer um teste de QI?</strong> Este guia completo responde todas as dúvidas sobre testes de QI infantis — quando são indicados, como funcionam e o que fazer com os resultados.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Quando Fazer Teste de QI em Crianças?</h2>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Indicações para Avaliação</h3>
                <ul className="text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Suspeita de superdotação ou altas habilidades</li>
                  <li>• Dificuldades de aprendizagem inexplicadas</li>
                  <li>• Avaliação para escola especial ou programa gifted</li>
                  <li>• Suspeita de TDAH, dislexia ou outras condições</li>
                  <li>• Curiosidade dos pais sobre o potencial do filho</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Idade Mínima para Teste de QI</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>2-3 anos:</strong> Escalas de desenvolvimento (Bayley), não QI formal</li>
            <li><strong>4-6 anos:</strong> WPPSI (Wechsler Preschool) — primeiro teste de QI formal</li>
            <li><strong>6-16 anos:</strong> WISC-V (Wechsler Intelligence Scale for Children) — padrão ouro</li>
            <li><strong>16+ anos:</strong> WAIS (Wechsler Adult Intelligence Scale)</li>
            <li><strong>Recomendação:</strong> Antes dos 4 anos, resultados são pouco confiáveis</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Funciona o Teste de QI Infantil?</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">O WISC-V: Padrão Ouro para Crianças</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Duração:</strong> 60-90 minutos com psicólogo</li>
            <li><strong>Formato:</strong> Jogos, puzzles, perguntas e tarefas práticas</li>
            <li><strong>Áreas avaliadas:</strong> 5 índices principais</li>
            <li><strong>Resultado:</strong> QI total + perfil detalhado por área</li>
            <li><strong>Custo:</strong> R$800-2.500 com psicólogo especializado</li>
          </ul>

          <Card className="p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Os 5 Índices do WISC-V</h3>
            <div className="space-y-3">
              {[
                { name: "Compreensão Verbal (ICV)", desc: "Vocabulário, raciocínio verbal, conhecimento geral" },
                { name: "Visoespacial (IVE)", desc: "Construção com blocos, raciocínio espacial" },
                { name: "Raciocínio Fluido (IRF)", desc: "Matrizes, pesos, padrões abstratos" },
                { name: "Memória de Trabalho (IMT)", desc: "Sequências de dígitos, sequências de letras" },
                { name: "Velocidade de Processamento (IVP)", desc: "Codificação de símbolos, busca de símbolos" },
              ].map((item) => (
                <div key={item.name} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que é Considerado QI Alto em Crianças?</h2>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">Classificação de QI Infantil</h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• <strong>Abaixo de 70:</strong> Necessita suporte especializado</li>
              <li>• <strong>70–85:</strong> Abaixo da média — pode precisar de apoio</li>
              <li>• <strong>85–115:</strong> Média — desenvolvimento típico</li>
              <li>• <strong>115–130:</strong> Acima da média — aprendizado facilitado</li>
              <li>• <strong>130–145:</strong> Superdotado — pode precisar de enriquecimento</li>
              <li>• <strong>145+:</strong> Altamente superdotado — necessita programa especializado</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Sinais de Superdotação em Crianças</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Sinais Cognitivos</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Aprende a ler antes dos 5 anos sem ensino formal</li>
            <li>Vocabulário muito avançado para a idade</li>
            <li>Faz perguntas complexas e filosóficas</li>
            <li>Excelente memória para fatos e detalhes</li>
            <li>Aprende conceitos novos muito rapidamente</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Sinais Comportamentais</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Prefere companhia de crianças mais velhas ou adultos</li>
            <li>Fica entediado facilmente na escola regular</li>
            <li>Perfeccionismo intenso</li>
            <li>Sensibilidade emocional elevada</li>
            <li>Interesse obsessivo em tópicos específicos</li>
          </ul>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">Atenção: Dupla Excepcionalidade</h3>
                <p className="text-amber-800 dark:text-amber-200">
                  Crianças superdotadas podem ter simultaneamente TDAH, dislexia ou autismo. Isso é chamado de "dupla excepcionalidade" e pode mascarar tanto o talento quanto a dificuldade. Avaliação completa é essencial.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que Fazer Após o Resultado?</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Se o QI for Alto (acima de 130)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Busque escola com programa de enriquecimento ou aceleração</li>
            <li>Ofereça atividades extracurriculares desafiadoras</li>
            <li>Considere avançamento de série se a criança estiver muito entediada</li>
            <li>Cuide da saúde emocional — superdotados têm necessidades socioemocionais específicas</li>
            <li>Contate a ABSD (Associação Brasileira para Superdotados)</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Se o QI for Abaixo da Média (abaixo de 85)</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Busque avaliação neuropsicológica completa</li>
            <li>Verifique se há condições associadas (TDAH, dislexia, etc.)</li>
            <li>Solicite apoio pedagógico especializado na escola</li>
            <li>Foque nos pontos fortes da criança</li>
            <li>QI pode melhorar com intervenção precoce adequada</li>
          </ul>

          <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-8 my-12">
            <div className="text-center">
              <Brain className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Teste de QI Online para Adolescentes</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Para adolescentes acima de 16 anos, nosso teste científico oferece uma estimativa rápida e confiável do QI.
              </p>
              <Button onClick={() => navigate("/teste")} size="lg" className="shadow-lg">
                Fazer Teste de QI Grátis
              </Button>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="text-lg mb-4">
            O teste de QI infantil é uma ferramenta valiosa quando usado corretamente. Ele não define o futuro da criança, mas oferece informações importantes para pais e educadores tomarem decisões mais acertadas sobre educação e desenvolvimento.
          </p>
          <p className="text-lg mb-4">
            Lembre-se: QI é apenas uma dimensão da inteligência. Criatividade, inteligência emocional, habilidades sociais e persistência são igualmente importantes para o sucesso na vida.
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

export default TesteQICriancas;
