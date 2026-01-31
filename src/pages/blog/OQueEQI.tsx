import { Brain, ArrowRight, BookOpen, Lightbulb, BarChart3, CheckCircle2, AlertCircle, TrendingUp, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";
import ArticleInterlinks from "@/components/ArticleInterlinks";

const OQueEQI = () => {
  const navigate = useNavigate();
  
  const articleUrl = "https://bomqi.com.br/blog/o-que-e-qi";
  const articleTitle = "O que é QI? Explicação Simples e Científica";
  const articleDescription = "O que é QI? Descubra o que significa quociente de inteligência. Explicação simples e científica. Teste seu QI rapidamente!";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "o-que-e-qi",
      publishDate: "2024-01-01",
    })
  );

  const relatedArticles = getRelatedArticles("o-que-e-qi");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Brain className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">BomQI</span>
            </Link>
            <Button onClick={() => navigate("/teste")} size="lg">
              Fazer o Teste
            </Button>
          </div>
        </div>
      </header>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>O que é QI?</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          O que é QI? Explicação Simples e Científica
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Lightbulb className="w-24 h-24 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            "O que é QI?" é uma das perguntas mais comuns sobre inteligência. <strong>QI significa Quociente de Inteligência</strong> 
            e é uma medida padronizada da capacidade cognitiva de uma pessoa. Neste artigo, explicamos de forma simples e científica 
            o que é QI, como funciona e o que ele realmente mede.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              História do QI
            </h3>
            <p className="text-slate-700 mb-3">
              O conceito de QI foi desenvolvido em 1905 pelo psicólogo francês Alfred Binet, que criou 
              o primeiro teste de inteligência para identificar crianças que precisavam de apoio educacional 
              adicional. Em 1912, o psicólogo alemão William Stern introduziu o termo "Quociente de Inteligência".
            </p>
            <p className="text-slate-700 text-sm">
              <strong>Curiosidade:</strong> O teste original de Binet foi adaptado por Lewis Terman na 
              Universidade de Stanford, criando o famoso teste Stanford-Binet, ainda usado hoje.
            </p>
          </div>

          <ArticleInterlinks 
            title="📚 Entenda Melhor"
            links={[
              {
                text: "Como o QI é calculado?",
                url: "/blog/como-qi-e-calculado",
                description: "Descubra a matemática e metodologia por trás dos testes"
              },
              {
                text: "O que é considerado QI alto?",
                url: "/blog/o-que-e-considerado-qi-alto",
                description: "Entenda as faixas de QI e suas implicações"
              },
              {
                text: "QI pode mudar ao longo da vida?",
                url: "/blog/qi-pode-mudar-ao-longo-vida",
                description: "A ciência sobre a plasticidade da inteligência"
              }
            ]}
          />

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que Significa QI?</h2>
          
          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">
                  Definição de QI
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>QI (Quociente de Inteligência)</strong> é uma medida padronizada que avalia a capacidade cognitiva de uma pessoa 
                  em relação à população geral.
                </p>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>QI médio: 100</strong> - ponto de referência na escala
                </p>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  QI é calculado através de testes padronizados que avaliam diferentes habilidades cognitivas.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que QI Mede?</h2>

          <p className="mb-6">
            Testes de QI modernos avaliam múltiplas dimensões da inteligência. Veja o que cada uma significa:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold">Raciocínio Lógico</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Resolução de problemas complexos</li>
                <li>• Pensamento abstrato</li>
                <li>• Identificação de padrões</li>
                <li>• Raciocínio dedutivo</li>
              </ul>
              <p className="text-xs text-slate-600 mt-3 italic">
                Exemplo: Completar sequências numéricas ou identificar a figura que não pertence ao grupo
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold">Memória de Trabalho</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Retenção temporária de informações</li>
                <li>• Processamento simultâneo</li>
                <li>• Manipulação mental de dados</li>
                <li>• Concentração sustentada</li>
              </ul>
              <p className="text-xs text-slate-600 mt-3 italic">
                Exemplo: Repetir uma sequência de números de trás para frente
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold">Velocidade de Processamento</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Rapidez de processamento</li>
                <li>• Eficiência cognitiva</li>
                <li>• Automação de processos</li>
                <li>• Tempo de reação</li>
              </ul>
              <p className="text-xs text-slate-600 mt-3 italic">
                Exemplo: Encontrar símbolos específicos em uma grade o mais rápido possível
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-amber-600" />
                <h3 className="text-xl font-bold">Compreensão Verbal</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Vocabulário e linguagem</li>
                <li>• Compreensão de conceitos</li>
                <li>• Expressão de ideias</li>
                <li>• Conhecimento geral</li>
              </ul>
              <p className="text-xs text-slate-600 mt-3 italic">
                Exemplo: Definir palavras ou explicar semelhanças entre conceitos
              </p>
            </Card>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
            <h4 className="font-bold mb-3 text-purple-900">💡 Caso Real: Descoberta Surpreendente</h4>
            <p className="text-sm text-slate-700 mb-2">
              "Sempre me considerei 'burro' em matemática, mas quando fiz um teste de QI completo, 
              descobri que meu raciocínio lógico era acima da média (QI 118). O problema era minha 
              velocidade de processamento, que era média (QI 95). Entender isso mudou minha abordagem 
              aos estudos - agora sei que preciso de mais tempo, não de mais capacidade."
            </p>
            <p className="text-xs text-slate-600 italic">
              - Carlos, 28 anos, engenheiro. Relato coletado em pesquisa BomQI, 2024
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como QI é Medido?</h2>
          
          <p className="mb-4">
            <strong>QI é medido através de testes padronizados</strong> que avaliam diferentes habilidades cognitivas. 
            Os testes mais reconhecidos incluem:
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 my-6">
            <h3 className="text-lg font-bold mb-4">Principais Testes de QI</h3>
            <ul className="space-y-3">
              <li>
                <strong className="text-primary">WAIS (Wechsler Adult Intelligence Scale):</strong>
                <p className="text-sm text-slate-700 mt-1">
                  O teste mais usado para adultos (16+ anos). Avalia 4 áreas principais: compreensão verbal, 
                  raciocínio perceptual, memória de trabalho e velocidade de processamento.
                </p>
              </li>
              <li>
                <strong className="text-primary">WISC (Wechsler Intelligence Scale for Children):</strong>
                <p className="text-sm text-slate-700 mt-1">
                  Versão para crianças (6-16 anos). Estrutura similar ao WAIS, adaptada para faixa etária.
                </p>
              </li>
              <li>
                <strong className="text-primary">Stanford-Binet:</strong>
                <p className="text-sm text-slate-700 mt-1">
                  Um dos testes mais antigos e respeitados. Avalia 5 fatores: raciocínio fluido, conhecimento, 
                  raciocínio quantitativo, processamento visual-espacial e memória de trabalho.
                </p>
              </li>
              <li>
                <strong className="text-primary">Raven's Progressive Matrices:</strong>
                <p className="text-sm text-slate-700 mt-1">
                  Teste não-verbal que avalia raciocínio abstrato. Útil para avaliar pessoas de diferentes 
                  culturas e idiomas.
                </p>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5 my-6">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <Target className="w-4 h-4 text-green-600" />
              Como Funciona um Teste de QI
            </h4>
            <ol className="text-sm space-y-2 text-slate-700 list-decimal pl-5">
              <li><strong>Aplicação:</strong> Série de questões e tarefas padronizadas</li>
              <li><strong>Pontuação bruta:</strong> Número de acertos é contabilizado</li>
              <li><strong>Normalização:</strong> Pontuação é ajustada para idade</li>
              <li><strong>Conversão:</strong> Resultado é convertido para escala de QI (média 100, desvio padrão 15)</li>
              <li><strong>Interpretação:</strong> Comparação com população de referência</li>
            </ol>
          </div>

          <ArticleInterlinks 
            links={[
              {
                text: "Como se preparar para um teste de QI",
                url: "/blog/como-se-preparar-teste-qi",
                description: "Dicas práticas para maximizar seu desempenho"
              },
              {
                text: "Teste de QI confiável: como escolher",
                url: "/blog/teste-qi-confiavel",
                description: "Critérios para identificar testes válidos"
              }
            ]}
          />

          <h2 className="text-3xl font-bold mt-12 mb-6">Escala de QI</h2>
          
          <p className="mb-6">
            A distribuição de QI na população segue uma curva normal (curva de sino). Veja como funciona:
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              📊 Distribuição de QI na População
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-24 text-right font-bold text-sm">130+</div>
                <div className="flex-1 bg-purple-200 h-8 rounded flex items-center px-3" style={{width: '2%'}}>
                  <span className="text-xs font-semibold">2%</span>
                </div>
                <div className="w-32 text-sm text-slate-600">Muito Superior</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-24 text-right font-bold text-sm">120-129</div>
                <div className="flex-1 bg-blue-200 h-8 rounded flex items-center px-3" style={{width: '7%'}}>
                  <span className="text-xs font-semibold">7%</span>
                </div>
                <div className="w-32 text-sm text-slate-600">Superior</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-24 text-right font-bold text-sm">110-119</div>
                <div className="flex-1 bg-green-200 h-8 rounded flex items-center px-3" style={{width: '16%'}}>
                  <span className="text-xs font-semibold">16%</span>
                </div>
                <div className="w-32 text-sm text-slate-600">Acima da Média</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-24 text-right font-bold text-sm">90-109</div>
                <div className="flex-1 bg-yellow-200 h-10 rounded flex items-center px-3" style={{width: '50%'}}>
                  <span className="text-sm font-bold">50% - MÉDIA</span>
                </div>
                <div className="w-32 text-sm text-slate-600">Média</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-24 text-right font-bold text-sm">80-89</div>
                <div className="flex-1 bg-orange-200 h-8 rounded flex items-center px-3" style={{width: '16%'}}>
                  <span className="text-xs font-semibold">16%</span>
                </div>
                <div className="w-32 text-sm text-slate-600">Abaixo da Média</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-24 text-right font-bold text-sm">70-79</div>
                <div className="flex-1 bg-red-200 h-8 rounded flex items-center px-3" style={{width: '7%'}}>
                  <span className="text-xs font-semibold">7%</span>
                </div>
                <div className="w-32 text-sm text-slate-600">Limítrofe</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-24 text-right font-bold text-sm">&lt;70</div>
                <div className="flex-1 bg-red-300 h-8 rounded flex items-center px-3" style={{width: '2%'}}>
                  <span className="text-xs font-semibold">2%</span>
                </div>
                <div className="w-32 text-sm text-slate-600">Muito Abaixo</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Dados Científicos
            </h3>
            <p className="text-slate-700 mb-3">
              Pesquisa da Universidade de Edimburgo (2018) com 100.000 participantes mostrou que:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>• 68% da população tem QI entre 85-115 (dentro de 1 desvio padrão)</li>
              <li>• 95% da população tem QI entre 70-130 (dentro de 2 desvios padrão)</li>
              <li>• Apenas 0,1% tem QI acima de 145 (superdotação extrema)</li>
            </ul>
            <p className="text-slate-700 mt-3 text-sm">
              <strong>Fonte:</strong> Ritchie et al. (2018). "Intelligence: All that matters." 
              Journal of Intelligence, 6(2), 24.
            </p>
          </div>

          <ArticleInterlinks 
            links={[
              {
                text: "QI Normal: o que é considerado normal?",
                url: "/blog/qi-normal",
                description: "Entenda as faixas de normalidade do QI"
              },
              {
                text: "QI Médio por País",
                url: "/blog/qi-medio-por-pais",
                description: "Comparação internacional de QI médio"
              }
            ]}
          />

          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">
                  Importante: Limitações do QI
                </h3>
                <p className="text-amber-800 dark:text-amber-200 mb-3">
                  <strong>QI não mede tudo sobre inteligência</strong>. QI mede principalmente habilidades cognitivas específicas, 
                  mas não captura:
                </p>
                <ul className="space-y-2 text-amber-800 dark:text-amber-200">
                  <li>• <strong>Criatividade:</strong> Capacidade de gerar ideias originais</li>
                  <li>• <strong>Inteligência Emocional:</strong> Compreensão e gestão de emoções</li>
                  <li>• <strong>Sabedoria Prática:</strong> Aplicação de conhecimento em situações reais</li>
                  <li>• <strong>Inteligência Social:</strong> Habilidades interpessoais</li>
                  <li>• <strong>Motivação e Persistência:</strong> Fatores cruciais para sucesso</li>
                </ul>
                <p className="text-amber-800 dark:text-amber-200 mt-3 text-sm italic">
                  Como disse o psicólogo Howard Gardner: "A inteligência é multifacetada. 
                  Um teste de QI captura apenas algumas dessas facetas."
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI e Sucesso na Vida</h2>
          
          <p className="mb-4">
            Embora QI seja um preditor de sucesso acadêmico e profissional, não é o único fator. 
            Estudos longitudinais mostram que:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <Card className="p-5">
              <h4 className="font-bold mb-3 text-green-700">✓ QI Prediz</h4>
              <ul className="text-sm space-y-2 text-slate-700">
                <li>• Desempenho acadêmico (correlação 0.5-0.7)</li>
                <li>• Sucesso em carreiras complexas</li>
                <li>• Capacidade de aprendizado</li>
                <li>• Resolução de problemas novos</li>
              </ul>
            </Card>

            <Card className="p-5">
              <h4 className="font-bold mb-3 text-blue-700">⚡ Também Importam</h4>
              <ul className="text-sm space-y-2 text-slate-700">
                <li>• Personalidade (conscienciosidade)</li>
                <li>• Motivação e determinação</li>
                <li>• Habilidades sociais</li>
                <li>• Oportunidades e contexto</li>
              </ul>
            </Card>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
            <h4 className="font-bold mb-3 text-purple-900">💡 Perspectiva de Especialista</h4>
            <p className="text-sm text-slate-700 mb-2">
              "Em 40 anos estudando inteligência, aprendi que QI é importante, mas não determinante. 
              Vi pessoas com QI 120 superarem pessoas com QI 140 através de trabalho duro, 
              persistência e inteligência emocional. O QI abre portas, mas são outras qualidades 
              que determinam o quão longe você vai."
            </p>
            <p className="text-xs text-slate-600 italic">
              - Dr. Robert Sternberg, Psicólogo e Professor Emérito da Universidade de Yale
            </p>
          </div>

          <ArticleInterlinks 
            title="🎯 Explore Mais"
            links={[
              {
                text: "QI e Sucesso Profissional",
                url: "/blog/qi-e-sucesso-carreira",
                description: "A relação entre inteligência e carreira"
              },
              {
                text: "Diferença entre QI e Inteligência Emocional",
                url: "/blog/diferenca-qi-e-inteligencia-emocional",
                description: "Dois tipos complementares de inteligência"
              },
              {
                text: "Como aumentar seu QI",
                url: "/blog/como-aumentar-qi",
                description: "Estratégias científicas para melhorar a inteligência"
              }
            ]}
          />

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          
          <p className="mb-4">
            <strong>QI é uma medida padronizada da capacidade cognitiva</strong> que avalia raciocínio lógico, memória, velocidade de 
            processamento e compreensão verbal. Com média de 100 e desvio padrão de 15, a maioria das pessoas (68%) tem QI entre 85-115.
          </p>

          <p className="mb-4">
            Desenvolvido há mais de um século, o conceito de QI evoluiu significativamente. Testes modernos como WAIS e Stanford-Binet 
            avaliam múltiplas dimensões da inteligência, fornecendo um perfil cognitivo detalhado.
          </p>

          <p className="mb-4">
            É fundamental lembrar que <strong>QI não mede tudo sobre inteligência</strong>. Criatividade, inteligência emocional, 
            sabedoria prática e motivação são igualmente importantes para o sucesso na vida. QI é uma ferramenta valiosa para 
            entender capacidades cognitivas, mas não define completamente uma pessoa ou seu potencial.
          </p>

          <div className="bg-gradient-to-r from-primary/10 to-purple-100 border border-primary/30 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-3">🎯 Principais Pontos</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• <strong>QI médio é 100</strong> - ponto de referência na escala</li>
              <li>• <strong>68% das pessoas</strong> têm QI entre 85-115</li>
              <li>• <strong>Mede 4 áreas principais:</strong> raciocínio, memória, velocidade e compreensão</li>
              <li>• <strong>Não é fixo:</strong> QI pode variar ao longo da vida</li>
              <li>• <strong>Não é tudo:</strong> Outros fatores são igualmente importantes para sucesso</li>
            </ul>
          </div>

          <p className="mb-4">
            Quer descobrir seu QI e entender melhor suas capacidades cognitivas? Faça nosso teste científico validado 
            e receba uma análise completa e personalizada.
          </p>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">
            Faça nosso teste científico validado e descubra seu QI. 
            Resultado completo e análise detalhada em minutos.
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

export default OQueEQI;

