import { useState, useEffect, useMemo } from "react";
import { Brain, ArrowRight, Lightbulb, GraduationCap, Target, Users, BookOpen, Award, Zap, BarChart3, Briefcase, Gamepad2, Sparkles, Cpu, Trophy, TrendingUp, Dna, Calculator, Globe, TrendingDown, FileText, Leaf, AlertTriangle, Star, DollarSign, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/use-seo";
import useStructuredData from "@/hooks/use-structured-data";

// Função para embaralhar array (Fisher-Yates shuffle)
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Blog = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const articlesPerPage = 12;

  useSEO({
    title: "Blog BomQI",
    description: "Artigos sobre inteligência, QI, desenvolvimento cognitivo e hábitos baseados em ciência para quem quer evoluir.",
    keywords: "blog QI, artigos inteligência, desenvolvimento cognitivo, aumentar QI, neurociência, inteligência emocional, teste QI, hábitos inteligentes, ciência inteligência, melhorar cérebro",
    url: "https://bomqi.com.br/blog",
    type: "website",
  });

  // Structured Data para CollectionPage e BreadcrumbList (Rich Results)
  useStructuredData([
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Blog BomQI",
      "description": "Artigos sobre inteligência, QI, desenvolvimento cognitivo e hábitos baseados em ciência para quem quer evoluir.",
      "url": "https://bomqi.com.br/blog"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://bomqi.com.br"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://bomqi.com.br/blog"
        }
      ]
    }
  ]);

  const allArticles = [
    {
      id: 1,
      title: "Melhor Teste de QI de 2026: Análise Completa",
      slug: "melhor-teste-qi-2026",
      description: "Descubra o melhor teste de QI de 2026. Análise detalhada comparando precisão, metodologia, feedback e custo-benefício.",
      icon: Trophy,
      category: "Comparativo",
      gradient: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      id: 2,
      title: "QI e Sucesso Profissional: Como Impacta sua Carreira",
      slug: "qi-sucesso-profissional",
      description: "Descubra como o QI influencia o sucesso profissional, quais profissões valorizam mais a inteligência e como desenvolver suas capacidades.",
      icon: TrendingUp,
      category: "Carreira",
      gradient: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-500/30"
    },
    {
      id: 3,
      title: "Teste de QI Online: Guia Completo 2025",
      slug: "teste-qi-online-guia-completo",
      description: "Metodologias, precisão e como interpretar resultados. Tudo que você precisa saber sobre testes de QI online.",
      icon: BookOpen,
      category: "Guia",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 4,
      title: "Como se Preparar para um Teste de QI",
      slug: "como-se-preparar-teste-qi",
      description: "Plano semanal de treinos cognitivos para otimizar seu desempenho e chegar no seu pico cognitivo.",
      icon: Target,
      category: "Preparação",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      id: 5,
      title: "Melhores Testes de QI Online em 2025",
      slug: "melhores-testes-qi-online-2025",
      description: "Análise completa comparando testes grátis vs pagos. Descubra qual é o melhor para você.",
      icon: Award,
      category: "Comparativo",
      gradient: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      id: 6,
      title: "Neuroplasticidade: Como o Cérebro Evolui",
      slug: "neuroplasticidade-cerebro-evolui",
      description: "O que a neurociência diz sobre treinos cognitivos e como eles literalmente remodelam seu cérebro.",
      icon: Zap,
      category: "Ciência",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      id: 7,
      title: "Qual é a Média de QI no Brasil?",
      slug: "media-qi-brasil",
      description: "Perguntas mais buscadas sobre inteligência. Dados científicos e respostas sobre QI no contexto brasileiro.",
      icon: BarChart3,
      category: "Dados",
      gradient: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-500/30"
    },
    {
      id: 8,
      title: "QI em Processos Seletivos e Avaliações",
      slug: "qi-processos-seletivos",
      description: "Como empresas usam testes de QI em seleção. O que procuram e como se preparar adequadamente.",
      icon: Briefcase,
      category: "Carreira",
      gradient: "from-teal-500/20 to-cyan-500/20",
      borderColor: "border-teal-500/30"
    },
    {
      id: 9,
      title: "Top 15 Jogos e Apps para Treinar o Cérebro",
      slug: "top-15-jogos-apps-treinar-cerebro",
      description: "Melhores jogos e aplicativos baseados em evidências científicas para melhorar memória, raciocínio e QI.",
      icon: Gamepad2,
      category: "Ferramentas",
      gradient: "from-red-500/20 to-pink-500/20",
      borderColor: "border-red-500/30"
    },
    {
      id: 10,
      title: "Diferença entre QI, QE e QG",
      slug: "diferenca-qi-qe-qg",
      description: "Quando testar cada tipo de inteligência. Entenda as diferenças e como desenvolver cada uma.",
      icon: Sparkles,
      category: "Conceitos",
      gradient: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-500/30"
    },
    {
      id: 11,
      title: "IA e Testes Cognitivos na Educação",
      slug: "ia-testes-cognitivos",
      description: "O papel da Inteligência Artificial em testes, educação e trabalho. O que está mudando em 2025.",
      icon: Cpu,
      category: "Tendências",
      gradient: "from-slate-500/20 to-gray-500/20",
      borderColor: "border-slate-500/30"
    },
    {
      id: 12,
      title: "Como Aumentar Seu QI: 10 Dicas Cientificamente Comprovadas",
      slug: "como-aumentar-qi",
      description: "Descubra estratégias baseadas em ciência para desenvolver sua inteligência e potencializar seu raciocínio.",
      icon: Lightbulb,
      category: "Desenvolvimento",
      gradient: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      id: 13,
      title: "Inteligência vs Sabedoria: Qual a Diferença?",
      slug: "inteligencia-vs-sabedoria",
      description: "Entenda as diferenças fundamentais entre inteligência e sabedoria, e como desenvolver ambas.",
      icon: GraduationCap,
      category: "Conceitos",
      gradient: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 14,
      title: "7 Hábitos de Pessoas com QI Alto",
      slug: "habitos-qi-alto",
      description: "Conheça os hábitos e rotinas que pessoas inteligentes cultivam para manter a mente afiada.",
      icon: Target,
      category: "Hábitos",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      id: 15,
      title: "O Que os Gênios Têm em Comum?",
      slug: "genios-em-comum",
      description: "Explore as características e padrões que os maiores gênios da história compartilham.",
      icon: Users,
      category: "Curiosidades",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      id: 16,
      title: "Genética vs Ambiente no QI: O Que a Ciência Realmente Diz",
      slug: "genetica-vs-ambiente-qi",
      description: "Descubra o papel da genética e do ambiente no desenvolvimento do QI. Análise profunda de estudos científicos sobre natureza vs criação.",
      icon: Dna,
      category: "Ciência",
      gradient: "from-indigo-500/20 to-purple-500/20",
      borderColor: "border-indigo-500/30"
    },
    {
      id: 17,
      title: "QI e Criatividade: A Relação Entre Inteligência e Inovação",
      slug: "qi-criatividade",
      description: "Descubra a relação complexa entre QI e criatividade. Por que pessoas muito inteligentes podem não ser criativas e como desenvolver ambos.",
      icon: Sparkles,
      category: "Conceitos",
      gradient: "from-pink-500/20 to-rose-500/20",
      borderColor: "border-pink-500/30"
    },
    {
      id: 18,
      title: "QI ao Longo da Vida: Como a Inteligência Muda com a Idade",
      slug: "qi-ao-longo-vida",
      description: "Descubra como o QI muda ao longo da vida. Desenvolvimento cognitivo na infância, pico na vida adulta e mudanças na terceira idade.",
      icon: TrendingUp,
      category: "Ciência",
      gradient: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 73,
      title: "O que é QI? Explicação Simples e Científica",
      slug: "o-que-e-qi",
      description: "O que é QI? Descubra o que significa quociente de inteligência. Explicação simples e científica. Teste seu QI rapidamente!",
      icon: Lightbulb,
      category: "Conceitos",
      gradient: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      id: 74,
      title: "Como o QI é Calculado? Métodos Usados Hoje",
      slug: "como-qi-e-calculado",
      description: "Como o QI é calculado? Descubra os métodos científicos usados hoje. Teste seu QI rapidamente e descubra sua inteligência!",
      icon: Calculator,
      category: "Ciência",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 75,
      title: "QI Médio Mundial: Ranking Atualizado 2025",
      slug: "qi-medio-mundial",
      description: "Qual o QI médio mundial? Descubra o ranking atualizado por país. Teste seu QI e compare. Rápido e científico!",
      icon: Globe,
      category: "Dados",
      gradient: "from-indigo-500/20 to-purple-500/20",
      borderColor: "border-indigo-500/30"
    },
    {
      id: 76,
      title: "QI Médio no Brasil: Qual é e Por Quê?",
      slug: "qi-medio-brasil",
      description: "Qual o QI médio no Brasil? Descubra o QI médio brasileiro e os fatores que influenciam. Teste seu QI rapidamente!",
      icon: Globe,
      category: "Dados",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      id: 77,
      title: "QI Alto: Características Reais, Além dos Mitos",
      slug: "qi-alto-caracteristicas",
      description: "QI alto: características reais além dos mitos. Descubra o que realmente significa ter QI alto. Teste seu QI rapidamente!",
      icon: Sparkles,
      category: "Conceitos",
      gradient: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      id: 78,
      title: "O que é QI Baixo? Causas e Sinais",
      slug: "o-que-e-qi-baixo",
      description: "O que é QI baixo? Descubra as causas, sinais e o que significa ter QI abaixo da média. Teste seu QI rapidamente!",
      icon: TrendingDown,
      category: "Conceitos",
      gradient: "from-red-500/20 to-rose-500/20",
      borderColor: "border-red-500/30"
    },
    {
      id: 79,
      title: "Como Interpretar Seu Resultado de QI: Guia Completo",
      slug: "como-interpretar-resultado-qi",
      description: "Como interpretar seu resultado de QI? Descubra o que significa sua pontuação. Guia completo e científico. Teste seu QI rapidamente!",
      icon: FileText,
      category: "Guia",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 80,
      title: "QI Pode Mudar ao Longo da Vida? Evidências Científicas",
      slug: "qi-pode-mudar-ao-longo-vida",
      description: "QI pode mudar ao longo da vida? Descubra se o QI muda com a idade. Evidências científicas e fatores. Teste seu QI rapidamente!",
      icon: TrendingUp,
      category: "Ciência",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      id: 81,
      title: "QI de Crianças vs. QI de Adultos: Diferenças e Comparações",
      slug: "qi-criancas-vs-adultos",
      description: "QI de crianças vs. QI de adultos: quais as diferenças? Descubra como QI muda com a idade. Teste seu QI rapidamente!",
      icon: Users,
      category: "Ciência",
      gradient: "from-teal-500/20 to-cyan-500/20",
      borderColor: "border-teal-500/30"
    },
    {
      id: 82,
      title: "Como Aumentar o QI Rapidamente: Guia Científico Completo",
      slug: "como-aumentar-qi-rapidamente",
      description: "Como aumentar o QI rapidamente? Descubra métodos científicos comprovados para aumentar inteligência. Guia completo. Teste seu QI rapidamente!",
      icon: Zap,
      category: "Guia",
      gradient: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      id: 83,
      title: "Como Aumentar a Inteligência de Forma Natural: Métodos Científicos",
      slug: "como-aumentar-inteligencia-forma-natural",
      description: "Como aumentar a inteligência de forma natural? Descubra métodos naturais e científicos para aumentar QI. Guia completo. Teste seu QI rapidamente!",
      icon: Leaf,
      category: "Guia",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      id: 84,
      title: "O que Reduz seu QI sem Perceber: Fatores Ocultos e Científicos",
      slug: "o-que-reduz-qi-sem-perceber",
      description: "O que reduz seu QI sem perceber? Descubra fatores ocultos que diminuem inteligência. Guia científico completo. Teste seu QI rapidamente!",
      icon: AlertTriangle,
      category: "Ciência",
      gradient: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/30"
    },
    {
      id: 85,
      title: "Como Ativar o Modo Foco Profundo: Técnicas Científicas Comprovadas",
      slug: "como-ativar-modo-foco-profundo",
      description: "Como ativar o modo foco profundo? Descubra técnicas científicas para alcançar estado de concentração máxima. Guia completo. Teste seu QI rapidamente!",
      icon: Target,
      category: "Produtividade",
      gradient: "from-indigo-500/20 to-purple-500/20",
      borderColor: "border-indigo-500/30"
    },
    {
      id: 86,
      title: "O QI Pode Aumentar ao Longo da Vida? Evidências e Estratégias Científicas",
      slug: "qi-pode-aumentar-ao-longo-vida",
      description: "O QI pode aumentar ao longo da vida? Descubra se é possível aumentar QI com idade. Evidências científicas e estratégias. Teste seu QI rapidamente!",
      icon: TrendingUp,
      category: "Ciência",
      gradient: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-500/30"
    },
    {
      id: 87,
      title: "QI de Crianças e Sinais de Superdotação Infantil: Guia Completo",
      slug: "qi-criancas-sinais-superdotacao",
      description: "QI de crianças e sinais de superdotação infantil. Descubra como identificar crianças superdotadas. Guia científico completo. Teste seu QI rapidamente!",
      icon: Star,
      category: "Crianças",
      gradient: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      id: 88,
      title: "Como Aprender Mais Rápido Usando Neurociência: Técnicas Científicas",
      slug: "como-aprender-mais-rapido-neurociencia",
      description: "Como aprender mais rápido usando neurociência? Descubra técnicas baseadas em neurociência para acelerar aprendizado. Guia completo. Teste seu QI rapidamente!",
      icon: Lightbulb,
      category: "Aprendizado",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      id: 89,
      title: "QI e Genética: O Quanto Nasce e O Quanto Se Aprende - Evidências Científicas",
      slug: "qi-e-genetica-quanto-nasce-aprende",
      description: "QI e genética: o quanto nasce e o quanto se aprende? Descubra a relação entre genética e QI. Evidências científicas completas. Teste seu QI rapidamente!",
      icon: Dna,
      category: "Ciência",
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30"
    },
    {
      id: 90,
      title: "Como Ficar Mais Inteligente: Estratégias Científicas Comprovadas",
      slug: "como-ficar-mais-inteligente",
      description: "Como ficar mais inteligente? Descubra estratégias científicas comprovadas para aumentar inteligência e QI. Guia completo. Teste seu QI rapidamente!",
      icon: TrendingUp,
      category: "Guia",
      gradient: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30"
    },
    {
      id: 91,
      title: "Como Ficar Rico e a Relação com QI: Evidências Científicas",
      slug: "como-ficar-rico-relacao-qi",
      description: "Como ficar rico e a relação com QI? Descubra a correlação entre inteligência e riqueza. Estratégias baseadas em ciência. Teste seu QI rapidamente!",
      icon: DollarSign,
      category: "Riqueza",
      gradient: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      id: 92,
      title: "Como Ficar Rico Usando a Internet e o QI: Estratégias Digitais",
      slug: "como-ficar-rico-internet-qi",
      description: "Como ficar rico usando a internet e o QI? Descubra estratégias digitais para ganhar dinheiro online usando inteligência. Guia completo. Teste seu QI rapidamente!",
      icon: Globe,
      category: "Riqueza",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 93,
      title: "Neurociência da Riqueza: Como Pessoas Inteligentes Constroem Patrimônio",
      slug: "neurociencia-riqueza-qi-patrimonio",
      description: "Descubra como o cérebro de pessoas ricas funciona diferente. Estratégias neurocientíficas para construir riqueza usando inteligência.",
      icon: Brain,
      category: "Ciência",
      gradient: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30"
    },
    {
      id: 94,
      title: "QI dos Principais Jogadores de Futebol: Inteligência no Campo",
      slug: "qi-jogadores-futebol",
      description: "Análise completa do QI dos maiores jogadores de futebol da história. Descubra como a inteligência impacta o desempenho e o sucesso no esporte.",
      icon: Trophy,
      category: "Curiosidades",
      gradient: "from-green-500/20 to-blue-500/20",
      borderColor: "border-green-500/30"
    },
    {
      id: 95,
      title: "Inteligência Fluida vs Cristalizada: Como Usar Ambas Para Ganhar Dinheiro",
      slug: "inteligencia-fluida-cristalizada-ganhar-dinheiro",
      description: "Entenda os dois tipos de inteligência e como aplicá-los estrategicamente para aumentar sua renda e construir riqueza.",
      icon: Sparkles,
      category: "Ciência",
      gradient: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-500/30"
    },
    {
      id: 96,
      title: "Dopamina e Tomada de Decisão: A Química do Sucesso Financeiro",
      slug: "dopamina-decisao-sucesso-financeiro",
      description: "Como a dopamina influencia suas decisões financeiras. Aprenda a hackear seu cérebro para tomar decisões mais inteligentes e lucrativas.",
      icon: Zap,
      category: "Ciência",
      gradient: "from-pink-500/20 to-rose-500/20",
      borderColor: "border-pink-500/30"
    },
    {
      id: 97,
      title: "Inteligência Prática vs Teórica: Qual Gera Mais Dinheiro?",
      slug: "inteligencia-pratica-teorica-dinheiro",
      description: "Descubra a diferença entre inteligência prática e teórica e qual tipo gera mais renda. Estratégias para desenvolver ambas e maximizar ganhos.",
      icon: Briefcase,
      category: "Conceitos",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 98,
      title: "QI Empresarial vs QI Acadêmico: Qual Gera Mais Riqueza?",
      slug: "qi-empresarial-vs-qi-academico",
      description: "Descubra a diferença entre inteligência acadêmica e empresarial. Por que pessoas com QI alto nem sempre ficam ricas e como desenvolver inteligência para negócios.",
      icon: Briefcase,
      category: "Conceitos",
      gradient: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30"
    },
    {
      id: 99,
      title: "Inteligência Social vs QI: O Que Importa Mais Para o Sucesso?",
      slug: "inteligencia-social-vs-qi",
      description: "Descubra por que inteligência social pode ser mais importante que QI para sucesso profissional e financeiro. Como desenvolver ambas para maximizar resultados.",
      icon: Users,
      category: "Conceitos",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      id: 100,
      title: "Pensamento Crítico vs QI: Qual é Mais Importante?",
      slug: "pensamento-critico-vs-qi",
      description: "Descubra por que pensamento crítico pode ser mais valioso que QI alto. Como desenvolver habilidade de análise e tomada de decisão para sucesso profissional.",
      icon: Target,
      category: "Conceitos",
      gradient: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-500/30"
    },
    {
      id: 101,
      title: "Inteligências Múltiplas: Como Identificar e Monetizar Seus Talentos",
      slug: "inteligencias-multiplas-monetizar",
      description: "Descubra suas inteligências dominantes e aprenda estratégias práticas para transformá-las em renda. Guia completo com exemplos reais de monetização.",
      icon: Sparkles,
      category: "Conceitos",
      gradient: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-500/30"
    },
    {
      id: 102,
      title: "Inteligência Emocional vs QI: Qual Determina Mais Sucesso?",
      slug: "inteligencia-emocional-vs-qi",
      description: "Descubra por que inteligência emocional pode ser mais importante que QI para sucesso. Dados, estudos e como desenvolver ambas habilidades.",
      icon: Sparkles,
      category: "Conceitos",
      gradient: "from-rose-500/20 to-pink-500/20",
      borderColor: "border-rose-500/30"
    }
  ];

  // Extrair categorias únicas
  const categories = useMemo(() => {
    const cats = ["Todos", ...new Set(allArticles.map(a => a.category))];
    return cats.sort();
  }, []);

  // Filtrar artigos por categoria
  const filteredArticles = useMemo(() => {
    if (selectedCategory === "Todos") return allArticles;
    return allArticles.filter(a => a.category === selectedCategory);
  }, [selectedCategory]);

  // Calcular paginação
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  // Reset para página 1 quando mudar categoria
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Scroll to top ao mudar página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Embaralhar artigos dinamicamente toda vez que o componente é montado
  const [articles, setArticles] = useState(() => shuffleArray(allArticles));

  // Re-embaralhar quando a página é acessada novamente
  useEffect(() => {
    setArticles(shuffleArray(allArticles));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Brain className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">BomQI</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
              <button
                onClick={() => navigate("/blog")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Blog
              </button>
              <button
                onClick={() => navigate("/como-funciona")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Como Funciona
              </button>
            </nav>
            
            <Button onClick={() => navigate("/teste")} size="lg">
              Fazer o Teste
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-semibold">Blog BomQI</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Conhecimento para Desenvolver sua Inteligência
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Artigos científicos, dicas práticas e insights sobre inteligência, QI e desenvolvimento cognitivo
          </p>
        </div>

        {/* Filtros por Categoria */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-5xl mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Contador de Artigos */}
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground">
            Mostrando {startIndex + 1}-{Math.min(endIndex, filteredArticles.length)} de {filteredArticles.length} artigos
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {currentArticles.map((article, index) => {
            const Icon = article.icon;
            return (
              <Card
                key={article.id}
                className={`p-6 shadow-elegant border-2 ${article.borderColor} bg-gradient-to-br ${article.gradient} hover-scale transition-all duration-300 animate-fade-in cursor-pointer group`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate(`/blog/${article.slug}`)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${article.gradient} border-2 ${article.borderColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {article.description}
                    </p>
                    <Link
                      to={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all group/link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Ler artigo completo
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Paginação */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Mostrar apenas páginas próximas
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="icon"
                      onClick={() => setCurrentPage(page)}
                      className={currentPage === page ? "shadow-lg" : ""}
                    >
                      {page}
                    </Button>
                  );
                } else if (
                  page === currentPage - 2 ||
                  page === currentPage + 2
                ) {
                  return <span key={page} className="px-2 text-muted-foreground">...</span>;
                }
                return null;
              })}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="disabled:opacity-50"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 max-w-3xl mx-auto">
            <Brain className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Descobrir Seu QI?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Faça nosso teste científico em apenas 3 minutos e descubra seu resultado completo
            </p>
            <Button onClick={() => navigate("/teste")} size="lg" className="shadow-elegant">
              Fazer o Teste Agora
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;





