import { useState, useEffect, useMemo } from "react";
import { Brain, ArrowRight, Lightbulb, GraduationCap, Target, Users, BookOpen, Award, Zap, BarChart3, Briefcase, Gamepad2, Sparkles, Cpu, Trophy, TrendingUp, Dna, Calculator, Globe, TrendingDown, FileText, Leaf, AlertTriangle, Star, DollarSign, ChevronLeft, ChevronRight, Ruler, Grid3x3, Clock, User, Laptop, Rocket, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/use-seo";
import useStructuredData from "@/hooks/use-structured-data";

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
      id: 189,
      title: "Onde Fazer Teste de QI no Brasil: Opções Online e Presencial",
      slug: "onde-fazer-teste-qi-brasil",
      description: "Onde fazer teste de QI no Brasil: psicólogos, Mensa, clínicas e testes online confiáveis.",
      icon: MapPin,
      category: "Guia",
      publishedAt: "2026-05-17",
      gradient: "from-primary/20 to-accent/20",
      borderColor: "border-primary/30"
    },
    {
      id: 188,
      title: "QI 120, 130, 140: O Que Significa Cada Faixa de Pontuação",
      slug: "qi-faixas-pontuacao-significado",
      description: "Significado do QI 120, 130, 140 e outras faixas. Percentis e classificação na prática.",
      icon: TrendingUp,
      category: "Guia",
      publishedAt: "2026-05-17",
      gradient: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-500/30"
    },
    {
      id: 187,
      title: "Superdotação: O Que É, QI Necessário e Sinais",
      slug: "superdotacao-o-que-e",
      description: "O que é superdotação, critérios de QI, sinais em crianças e adultos e como apoiar alto potencial.",
      icon: Sparkles,
      category: "Conceitos",
      publishedAt: "2026-05-17",
      gradient: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-500/30"
    },
    {
      id: 186,
      title: "Qual é o QI do Elon Musk? Estimativas e Análise",
      slug: "qi-elon-musk",
      description: "Qual o QI do Elon Musk? Estimativas, limitações e diferença entre QI medido e sucesso.",
      icon: Rocket,
      category: "Curiosidades",
      publishedAt: "2026-05-17",
      gradient: "from-slate-500/20 to-gray-500/20",
      borderColor: "border-slate-500/30"
    },
    {
      id: 185,
      title: "Qual era o QI de Steve Jobs? Estimativas e Contexto",
      slug: "qi-steve-jobs",
      description: "QI estimado de Steve Jobs e o que isso revela sobre inteligência e sucesso em tecnologia.",
      icon: Laptop,
      category: "Curiosidades",
      publishedAt: "2026-05-17",
      gradient: "from-gray-500/20 to-slate-500/20",
      borderColor: "border-gray-500/30"
    },
    {
      id: 184,
      title: "Teste de QI para Adultos: Qual Escolher e Como Fazer",
      slug: "teste-qi-adultos",
      description: "Guia de teste de QI para adultos: WAIS, Raven, online e presencial.",
      icon: User,
      category: "Guia",
      publishedAt: "2026-05-17",
      gradient: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 183,
      title: "Quanto Tempo Dura um Teste de QI? Duração por Tipo",
      slug: "quanto-tempo-dura-teste-qi",
      description: "Duração de testes de QI online, WAIS, Raven, Mensa e fatores que influenciam o tempo.",
      icon: Clock,
      category: "Guia",
      publishedAt: "2026-05-17",
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30"
    },
    {
      id: 182,
      title: "Matrizes de Raven: O Que É e Como Funciona no Teste de QI",
      slug: "matrizes-raven-teste-qi",
      description: "Entenda as Matrizes de Raven: teste não verbal, aplicação e preparação.",
      icon: Grid3x3,
      category: "Guia",
      publishedAt: "2026-05-17",
      gradient: "from-indigo-500/20 to-violet-500/20",
      borderColor: "border-indigo-500/30"
    },
    {
      id: 181,
      title: "Teste Mensa Brasil: Como Entrar, Requisitos e O Que Esperar",
      slug: "teste-mensa-brasil",
      description: "Guia sobre o teste Mensa no Brasil: requisitos, inscrição e diferença para testes comuns.",
      icon: Award,
      category: "Guia",
      publishedAt: "2026-05-17",
      gradient: "from-amber-500/20 to-yellow-500/20",
      borderColor: "border-amber-500/30"
    },
    {
      id: 180,
      title: "Como Medir QI: Métodos, Testes e O Que Esperar",
      slug: "como-medir-qi",
      description: "Aprenda como medir QI de forma confiável com testes padronizados e avaliação profissional.",
      icon: Ruler,
      category: "Guia",
      publishedAt: "2026-05-17",
      gradient: "from-teal-500/20 to-cyan-500/20",
      borderColor: "border-teal-500/30"
    },
    {
      id: 179,
      title: "Tabela e Escala de QI: Classificação Completa por Pontuação",
      slug: "tabela-escala-qi",
      description: "Tabela de QI com faixas, percentis e classificação. Guia para interpretar sua pontuação.",
      icon: BarChart3,
      category: "Guia",
      publishedAt: "2026-05-17",
      gradient: "from-primary/20 to-accent/20",
      borderColor: "border-primary/30"
    },
    {
      id: 190,
      title: "Inteligências Múltiplas: Como Monetizar Cada Tipo",
      slug: "inteligencia-multiplas-monetizar",
      description: "Como transformar cada tipo de inteligência de Gardner em oportunidades de renda e carreira.",
      icon: Sparkles,
      category: "Carreira",
      publishedAt: "2025-01-15",
      gradient: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-500/30"
    },
    {
      id: 191,
      title: "Como Correr Melhora o QI: Ciência do Exercício Aeróbico",
      slug: "como-correr-melhora-qi",
      description: "Descubra como a corrida melhora o QI através de neurogênese, fluxo sanguíneo cerebral e BDNF.",
      icon: Zap,
      category: "Desenvolvimento",
      publishedAt: "2025-01-15",
      gradient: "from-orange-500/20 to-amber-500/20",
      borderColor: "border-orange-500/30"
    },
    {
      id: 192,
      title: "Como Melhorar o QI em 30 Dias: Plano Científico Completo",
      slug: "como-melhorar-qi-30-dias",
      description: "Plano de 30 dias baseado em ciência para desenvolvimento cognitivo com exercícios e hábitos.",
      icon: Target,
      category: "Guia",
      publishedAt: "2025-01-15",
      gradient: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-500/30"
    },
    {
      id: 193,
      title: "Como Engenheiros Melhoram o QI: Desenvolvimento Cognitivo Técnico",
      slug: "como-engenheiros-melhoram-qi",
      description: "Como a engenharia melhora o QI através de resolução de problemas e pensamento sistêmico.",
      icon: Briefcase,
      category: "Carreira",
      publishedAt: "2025-01-15",
      gradient: "from-slate-500/20 to-gray-500/20",
      borderColor: "border-slate-500/30"
    },
    {
      id: 194,
      title: "QI Normal: O Que É e O Que Significa",
      slug: "qi-normal",
      description: "O que é QI normal, faixa de pontuação e como interpretar resultados na média populacional.",
      icon: BarChart3,
      category: "Conceitos",
      publishedAt: "2025-01-15",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 195,
      title: "QI e TDAH: Relação Entre Inteligência e Déficit de Atenção",
      slug: "qi-e-tdah",
      description: "Relação entre QI e TDAH, impacto em testes de inteligência e estratégias de potencialização.",
      icon: Brain,
      category: "Ciência",
      publishedAt: "2025-01-15",
      gradient: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      id: 196,
      title: "QI e Memória: Relação Científica Entre Inteligência e Memória",
      slug: "qi-e-memoria",
      description: "Como memória e QI se relacionam e estratégias para desenvolver ambos.",
      icon: Brain,
      category: "Ciência",
      publishedAt: "2025-01-15",
      gradient: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-500/30"
    },
    {
      id: 197,
      title: "QI e Sono: Como o Sono Afeta a Inteligência",
      slug: "qi-e-sono",
      description: "Como o sono afeta o QI e estratégias para otimizar descanso e cognição.",
      icon: Brain,
      category: "Ciência",
      publishedAt: "2025-01-15",
      gradient: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-500/30"
    },
    {
      id: 198,
      title: "QI Médio de Cavaleiros: Inteligência Equestre",
      slug: "qi-medio-cavaleiros",
      description: "QI médio em equitação e habilidades cognitivas desenvolvidas no esporte equestre.",
      icon: Users,
      category: "Dados",
      publishedAt: "2025-01-15",
      gradient: "from-amber-500/20 to-yellow-500/20",
      borderColor: "border-amber-500/30"
    },
    {
      id: 199,
      title: "QI Médio de Engenheiros: Inteligência Técnica e Criativa",
      slug: "qi-medio-engenheiros",
      description: "QI médio de engenheiros e como a profissão desenvolve inteligência técnica.",
      icon: Briefcase,
      category: "Dados",
      publishedAt: "2025-01-15",
      gradient: "from-slate-500/20 to-zinc-500/20",
      borderColor: "border-slate-500/30"
    },
    {
      id: 200,
      title: "QI Médio de Estudantes: Inteligência Acadêmica",
      slug: "qi-medio-estudantes",
      description: "QI médio de estudantes por nível educacional e fatores que influenciam desempenho.",
      icon: GraduationCap,
      category: "Dados",
      publishedAt: "2025-01-15",
      gradient: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 201,
      title: "QI Médio de Idosos: Inteligência na Terceira Idade",
      slug: "qi-medio-idosos",
      description: "QI médio na terceira idade e estratégias para manter a mente afiada.",
      icon: Users,
      category: "Dados",
      publishedAt: "2025-01-15",
      gradient: "from-gray-500/20 to-slate-500/20",
      borderColor: "border-gray-500/30"
    },
    {
      id: 202,
      title: "QI Médio de Jovens: Desenvolvimento Cognitivo na Juventude",
      slug: "qi-medio-jovens",
      description: "QI médio de jovens e como otimizar o potencial cognitivo nessa fase.",
      icon: Users,
      category: "Dados",
      publishedAt: "2025-01-15",
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30"
    },
    {
      id: 203,
      title: "QI Médio de Médicos: Inteligência na Medicina",
      slug: "qi-medio-medicos",
      description: "QI médio de médicos e habilidades cognitivas da profissão médica.",
      icon: Briefcase,
      category: "Dados",
      publishedAt: "2025-01-15",
      gradient: "from-teal-500/20 to-green-500/20",
      borderColor: "border-teal-500/30"
    },
    {
      id: 204,
      title: "QI Médio de Netos: Inteligência das Novas Gerações",
      slug: "qi-medio-netos",
      description: "QI das novas gerações e o papel dos avós no desenvolvimento cognitivo.",
      icon: Users,
      category: "Dados",
      publishedAt: "2025-01-15",
      gradient: "from-pink-500/20 to-rose-500/20",
      borderColor: "border-pink-500/30"
    },
    {
      id: 205,
      title: "QI Médio de Profissionais de Saúde: Inteligência no Cuidado",
      slug: "qi-medio-profissionais-saude",
      description: "QI médio em profissionais de saúde e cognição no cuidado com pacientes.",
      icon: Briefcase,
      category: "Dados",
      publishedAt: "2025-01-15",
      gradient: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30"
    },
    {
      id: 105,
      title: "Como Descobrir Meu QI: 5 Formas Confiáveis em 2026",
      slug: "como-descobrir-meu-qi",
      description: "Descubra como saber seu QI de forma confiável. Comparamos os 5 melhores métodos: testes online, psicólogos, apps e mais.",
      icon: Lightbulb,
      category: "Guia",
      publishedAt: "2026-01-20",
      gradient: "from-indigo-500/20 to-purple-500/20",
      borderColor: "border-indigo-500/30"
    },
    {
      id: 104,
      title: "Teste de QI para Crianças: Guia Completo para Pais",
      slug: "teste-qi-criancas",
      description: "Tudo sobre teste de QI para crianças: quando fazer, como funciona, o que mede e como interpretar os resultados.",
      icon: Users,
      category: "Crianças",
      publishedAt: "2026-01-20",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 103,
      title: "Qual era o QI de Einstein? E o Seu Comparado ao Dele?",
      slug: "qi-de-einstein",
      description: "Descubra qual era o QI de Einstein, como ele se compara com outros gênios da história e como você pode medir sua própria inteligência.",
      icon: Star,
      category: "Curiosidades",
      publishedAt: "2026-01-20",
      gradient: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-500/30"
    },
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
      id: 102,
      title: "Inteligência Emocional vs QI: Qual Determina Mais Sucesso?",
      slug: "inteligencia-emocional-vs-qi",
      description: "Descubra por que inteligência emocional pode ser mais importante que QI para sucesso. Dados, estudos e como desenvolver ambas habilidades.",
      icon: Sparkles,
      category: "Conceitos",
      gradient: "from-rose-500/20 to-pink-500/20",
      borderColor: "border-rose-500/30"
    },
    {
      id: 106,
      title: "Atividades que Aumentam QI: Lista Completa de Exercícios Cognitivos",
      slug: "atividades-que-aumentam-qi",
      description: "Descubra as melhores atividades cientificamente comprovadas para aumentar seu QI e desenvolver sua inteligência.",
      icon: Zap,
      category: "Desenvolvimento",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      id: 107,
      title: "Como Aumentar a Inteligência: Guia Científico Completo",
      slug: "como-aumentar-inteligencia",
      description: "Guia completo com estratégias científicas para aumentar inteligência, memória e capacidade cognitiva.",
      icon: TrendingUp,
      category: "Desenvolvimento",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 108,
      title: "Como Manter a Mente Afiada: Estratégias para Toda a Vida",
      slug: "como-manter-mente-afiada",
      description: "Descubra como manter a mente afiada em qualquer idade com hábitos e estratégias baseadas em neurociência.",
      icon: Brain,
      category: "Hábitos",
      gradient: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      id: 109,
      title: "Como Melhorar o Cérebro: Técnicas Científicas Comprovadas",
      slug: "como-melhorar-cerebro",
      description: "Aprenda como melhorar o funcionamento do cérebro com técnicas baseadas em neurociência e estudos científicos.",
      icon: Brain,
      category: "Ciência",
      gradient: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-500/30"
    },
    {
      id: 110,
      title: "Como Saber Meu QI Sem Pagar? Opções Grátis e Confiáveis",
      slug: "como-saber-meu-qi-sem-pagar",
      description: "Descubra como descobrir seu QI gratuitamente com opções confiáveis e científicas disponíveis online.",
      icon: Lightbulb,
      category: "Guia",
      gradient: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      id: 111,
      title: "Conexão entre QI e Desempenho Acadêmico",
      slug: "conexao-qi-desempenho-academico",
      description: "Entenda como o QI influencia o desempenho acadêmico e quais outros fatores são igualmente importantes.",
      icon: GraduationCap,
      category: "Ciência",
      gradient: "from-teal-500/20 to-cyan-500/20",
      borderColor: "border-teal-500/30"
    },
    {
      id: 112,
      title: "Crianças Superdotadas: Sinais e Características",
      slug: "criancas-superdotadas-sinais-caracteristicas",
      description: "Identifique os sinais de superdotação em crianças e saiba como apoiar o desenvolvimento de altas habilidades.",
      icon: Star,
      category: "Crianças",
      gradient: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      id: 113,
      title: "Desenvolvimento Cognitivo e Conexão com QI",
      slug: "desenvolvimento-cognitivo-conexao-qi",
      description: "Como o desenvolvimento cognitivo ao longo da vida se conecta com o QI e a inteligência geral.",
      icon: TrendingUp,
      category: "Ciência",
      gradient: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 114,
      title: "Diferença entre QI e Inteligência Emocional",
      slug: "diferenca-qi-inteligencia-emocional",
      description: "Entenda as diferenças fundamentais entre QI e inteligência emocional e como desenvolver ambas.",
      icon: Sparkles,
      category: "Conceitos",
      gradient: "from-pink-500/20 to-rose-500/20",
      borderColor: "border-pink-500/30"
    },
    {
      id: 115,
      title: "Diferenças entre QI e Inteligência: O Que a Ciência Diz",
      slug: "diferencas-qi-e-inteligencia",
      description: "Descubra as diferenças entre QI e inteligência segundo a ciência moderna e como cada um é medido.",
      icon: BookOpen,
      category: "Conceitos",
      gradient: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-500/30"
    },
    {
      id: 116,
      title: "Escala de Inteligência Wechsler (WAIS): Guia Completo",
      slug: "escala-inteligencia-wechsler-wais",
      description: "Tudo sobre a Escala Wechsler de Inteligência para Adultos: como funciona, o que mede e como interpretar.",
      icon: BarChart3,
      category: "Guia",
      gradient: "from-slate-500/20 to-gray-500/20",
      borderColor: "border-slate-500/30"
    },
    {
      id: 117,
      title: "Impacto da Nutrição e Dieta na Função Cognitiva e QI",
      slug: "impacto-nutricao-dieta-funcao-cognitiva-qi",
      description: "Como a alimentação influencia diretamente o QI e a função cognitiva. Alimentos que aumentam e reduzem a inteligência.",
      icon: Leaf,
      category: "Ciência",
      gradient: "from-green-500/20 to-lime-500/20",
      borderColor: "border-green-500/30"
    },
    {
      id: 118,
      title: "Inteligência Adaptativa no Século 21",
      slug: "inteligencia-adaptativa-seculo-21",
      description: "Como desenvolver inteligência adaptativa para prosperar no mundo em constante mudança do século 21.",
      icon: Cpu,
      category: "Tendências",
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30"
    },
    {
      id: 120,
      title: "QI dos Jogadores de Futebol com Maior Inteligência",
      slug: "jogadores-futebol-maior-qi",
      description: "Descubra quais jogadores de futebol têm os maiores QIs e como a inteligência influencia o desempenho no campo.",
      icon: Trophy,
      category: "Curiosidades",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      id: 121,
      title: "Nature vs Nurture: Genética e Ambiente no QI",
      slug: "nature-vs-nurture-genetica-ambiente-qi",
      description: "O debate nature vs nurture aplicado ao QI: quanto da inteligência é genética e quanto é moldada pelo ambiente?",
      icon: Dna,
      category: "Ciência",
      gradient: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30"
    },
    {
      id: 122,
      title: "O Que Causa QI Alto? Fatores Genéticos e Ambientais",
      slug: "o-que-causa-qi-alto",
      description: "Descubra os fatores científicos que causam QI alto: genética, ambiente, educação e hábitos de vida.",
      icon: Lightbulb,
      category: "Ciência",
      gradient: "from-amber-500/20 to-yellow-500/20",
      borderColor: "border-amber-500/30"
    },
    {
      id: 123,
      title: "O Que é Considerado QI Alto? Números e Classificações",
      slug: "o-que-e-considerado-qi-alto",
      description: "Descubra a partir de qual número o QI é considerado alto e como você se compara com a população mundial.",
      icon: TrendingUp,
      category: "Conceitos",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      id: 124,
      title: "O Que é Teste de QI? Como Funciona e Para Que Serve",
      slug: "o-que-e-teste-qi",
      description: "Entenda o que é um teste de QI, como funciona, o que mede e para que serve na prática.",
      icon: FileText,
      category: "Conceitos",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 125,
      title: "Pessoas Famosas com QI Alto: Os Maiores Gênios Vivos",
      slug: "pessoas-famosas-com-qi-alto",
      description: "Conheça as pessoas famosas com QI mais alto do mundo e o que as torna tão excepcionalmente inteligentes.",
      icon: Star,
      category: "Curiosidades",
      gradient: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      id: 126,
      title: "Pessoas Mais Inteligentes que Você Nunca Ouviu Falar",
      slug: "pessoas-mais-inteligentes-que-voce-nunca-ouviu-falar",
      description: "Conheça os gênios desconhecidos com QI extraordinário que mudaram o mundo sem fama ou reconhecimento.",
      icon: Users,
      category: "Curiosidades",
      gradient: "from-indigo-500/20 to-violet-500/20",
      borderColor: "border-indigo-500/30"
    },
    {
      id: 127,
      title: "QI Brasileiro vs Outros Países: Comparação Global",
      slug: "qi-brasileiro-vs-outros-paises",
      description: "Como o QI médio do brasileiro se compara com outros países? Dados, causas e o que isso significa.",
      icon: Globe,
      category: "Dados",
      gradient: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-500/30"
    },
    {
      id: 128,
      title: "QI e Genética: Quanto Nasce e Quanto se Aprende",
      slug: "qi-e-genetica-quanto-nasce-quanto-aprende",
      description: "A ciência responde: quanto do QI é determinado pela genética e quanto pode ser desenvolvido ao longo da vida?",
      icon: Dna,
      category: "Ciência",
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30"
    },
    {
      id: 129,
      title: "QI e Sucesso na Carreira: O Que os Dados Mostram",
      slug: "qi-e-sucesso-carreira",
      description: "Como o QI influencia o sucesso profissional? Dados científicos sobre a relação entre inteligência e carreira.",
      icon: Briefcase,
      category: "Carreira",
      gradient: "from-teal-500/20 to-green-500/20",
      borderColor: "border-teal-500/30"
    },
    {
      id: 130,
      title: "QI Médio por Idade: Como a Inteligência Evolui",
      slug: "qi-medio-por-idade",
      description: "Descubra como o QI médio varia por faixa etária e como a inteligência evolui ao longo da vida.",
      icon: TrendingUp,
      category: "Dados",
      gradient: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 131,
      title: "QI Médio por País: Ranking Mundial Atualizado",
      slug: "qi-medio-por-pais",
      description: "Ranking completo do QI médio por país. Descubra quais nações têm as populações mais inteligentes.",
      icon: Globe,
      category: "Dados",
      gradient: "from-indigo-500/20 to-purple-500/20",
      borderColor: "border-indigo-500/30"
    },
    {
      id: 132,
      title: "QI Médio por Profissão: Quais Carreiras Exigem Mais",
      slug: "qi-medio-por-profissao",
      description: "Descubra o QI médio das principais profissões e quais carreiras estão associadas a maior inteligência.",
      icon: Briefcase,
      category: "Dados",
      gradient: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30"
    },
    {
      id: 133,
      title: "QI vs Experiência de Mercado: O Que Vale Mais?",
      slug: "qi-vs-experiencia-mercado",
      description: "QI alto ou experiência acumulada: qual é mais valioso no mercado de trabalho atual? A ciência responde.",
      icon: BarChart3,
      category: "Carreira",
      gradient: "from-slate-500/20 to-gray-500/20",
      borderColor: "border-slate-500/30"
    },
    {
      id: 134,
      title: "QI vs Inteligência Social: Qual Importa Mais?",
      slug: "qi-vs-inteligencia-social",
      description: "Comparação entre QI e inteligência social: qual tem mais impacto no sucesso pessoal e profissional?",
      icon: Users,
      category: "Conceitos",
      gradient: "from-pink-500/20 to-rose-500/20",
      borderColor: "border-pink-500/30"
    },
    {
      id: 135,
      title: "Quanto da Inteligência é Herdada? Genética e QI",
      slug: "quanto-inteligencia-e-herdada",
      description: "Pesquisas com gêmeos e estudos de adoção revelam quanto da inteligência é determinada pela herança genética.",
      icon: Dna,
      category: "Ciência",
      gradient: "from-violet-500/20 to-indigo-500/20",
      borderColor: "border-violet-500/30"
    },
    {
      id: 136,
      title: "Reduzindo Demência com Treinamento Cerebral",
      slug: "reduzindo-demencia-treinamento-cerebral",
      description: "Como o treinamento cognitivo pode reduzir o risco de demência e manter o cérebro saudável na terceira idade.",
      icon: Brain,
      category: "Ciência",
      gradient: "from-teal-500/20 to-cyan-500/20",
      borderColor: "border-teal-500/30"
    },
    {
      id: 137,
      title: "Sua Pontuação de QI Pode Mudar? O Que a Ciência Diz",
      slug: "sua-pontuacao-qi-pode-mudar",
      description: "Descubra se sua pontuação de QI pode mudar ao longo do tempo e quais fatores influenciam essa variação.",
      icon: TrendingUp,
      category: "Ciência",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      id: 138,
      title: "Suplementos que Melhoram QI: O Que Funciona de Verdade",
      slug: "suplementos-que-melhoram-qi",
      description: "Análise científica dos suplementos que realmente melhoram QI e função cognitiva. O que funciona e o que é mito.",
      icon: Leaf,
      category: "Ciência",
      gradient: "from-lime-500/20 to-green-500/20",
      borderColor: "border-lime-500/30"
    },
    { id: 139, title: "Como Advogados Melhoram QI", slug: "como-advogados-melhoram-qi", description: "Estratégias usadas por advogados para desenvolver raciocínio lógico e aumentar QI.", icon: Briefcase, category: "Carreira", gradient: "from-blue-500/20 to-indigo-500/20", borderColor: "border-blue-500/30" },
    { id: 140, title: "Como Andar a Cavalo Melhora QI", slug: "como-andar-cavalo-melhora-qi", description: "Descubra como a equitação estimula o cérebro e contribui para o desenvolvimento cognitivo.", icon: Brain, category: "Ciência", gradient: "from-amber-500/20 to-orange-500/20", borderColor: "border-amber-500/30" },
    { id: 141, title: "Como Bombeiros Melhoram QI", slug: "como-bombeiros-melhoram-qi", description: "Como o treinamento e o trabalho de bombeiros desenvolve habilidades cognitivas e QI.", icon: Zap, category: "Carreira", gradient: "from-red-500/20 to-orange-500/20", borderColor: "border-red-500/30" },
    { id: 142, title: "Como Filhos Melhoram QI dos Pais", slug: "como-filhos-melhoram-qi", description: "Estudos mostram que ter filhos pode aumentar o QI dos pais. Entenda como isso acontece.", icon: Users, category: "Ciência", gradient: "from-pink-500/20 to-rose-500/20", borderColor: "border-pink-500/30" },
    { id: 143, title: "Como Idosos Melhoram QI", slug: "como-idosos-melhoram-qi", description: "Estratégias científicas para idosos manterem e melhorarem o QI na terceira idade.", icon: Brain, category: "Hábitos", gradient: "from-teal-500/20 to-cyan-500/20", borderColor: "border-teal-500/30" },
    { id: 144, title: "Como Jovens Melhoram QI", slug: "como-jovens-melhoram-qi", description: "As melhores estratégias para jovens desenvolverem inteligência e aumentarem o QI.", icon: TrendingUp, category: "Desenvolvimento", gradient: "from-green-500/20 to-emerald-500/20", borderColor: "border-green-500/30" },
    { id: 145, title: "Como Mães Melhoram QI", slug: "como-maes-melhoram-qi", description: "Como a maternidade e hábitos específicos ajudam mães a desenvolverem e manterem QI alto.", icon: Users, category: "Ciência", gradient: "from-purple-500/20 to-pink-500/20", borderColor: "border-purple-500/30" },
    { id: 146, title: "Como Médicos Melhoram QI", slug: "como-medicos-melhoram-qi", description: "Hábitos e práticas de médicos que contribuem para manter e aumentar o QI ao longo da carreira.", icon: Briefcase, category: "Carreira", gradient: "from-blue-500/20 to-cyan-500/20", borderColor: "border-blue-500/30" },
    { id: 147, title: "Como Melhorar QI em Adolescentes", slug: "como-melhorar-qi-adolescentes", description: "Guia completo para adolescentes desenvolverem inteligência e aumentarem QI na fase mais crítica.", icon: TrendingUp, category: "Desenvolvimento", gradient: "from-indigo-500/20 to-blue-500/20", borderColor: "border-indigo-500/30" },
    { id: 148, title: "Como Melhorar QI em Estudantes", slug: "como-melhorar-qi-estudantes", description: "Técnicas científicas para estudantes melhorarem QI, memória e desempenho acadêmico.", icon: GraduationCap, category: "Desenvolvimento", gradient: "from-violet-500/20 to-purple-500/20", borderColor: "border-violet-500/30" },
    { id: 149, title: "Como o Mercado Financeiro Melhora QI", slug: "como-mercado-financeiro-melhora-qi", description: "Como trabalhar no mercado financeiro desenvolve habilidades cognitivas e aumenta QI.", icon: BarChart3, category: "Carreira", gradient: "from-green-500/20 to-teal-500/20", borderColor: "border-green-500/30" },
    { id: 150, title: "Como Netos Melhoram QI dos Avós", slug: "como-netos-melhoram-qi", description: "A ciência mostra que conviver com netos estimula o cérebro dos avós e melhora cognição.", icon: Users, category: "Ciência", gradient: "from-amber-500/20 to-yellow-500/20", borderColor: "border-amber-500/30" },
    { id: 151, title: "Como Pais Melhoram QI", slug: "como-pais-melhoram-qi", description: "Como a paternidade ativa e hábitos específicos ajudam pais a desenvolverem QI mais alto.", icon: Users, category: "Ciência", gradient: "from-blue-500/20 to-indigo-500/20", borderColor: "border-blue-500/30" },
    { id: 152, title: "Como Pedalar Melhora QI", slug: "como-pedal-melhora-qi", description: "Descubra como o ciclismo estimula o cérebro, melhora cognição e contribui para QI mais alto.", icon: Zap, category: "Ciência", gradient: "from-cyan-500/20 to-blue-500/20", borderColor: "border-cyan-500/30" },
    { id: 153, title: "Como Professores Melhoram QI", slug: "como-professores-melhoram-qi", description: "Como ensinar e as práticas pedagógicas desenvolvem habilidades cognitivas e aumentam QI.", icon: GraduationCap, category: "Carreira", gradient: "from-orange-500/20 to-amber-500/20", borderColor: "border-orange-500/30" },
    { id: 154, title: "Como Profissionais de Saúde Melhoram QI", slug: "como-profissionais-saude-melhoram-qi", description: "Hábitos e práticas de profissionais de saúde que contribuem para manter QI elevado.", icon: Briefcase, category: "Carreira", gradient: "from-teal-500/20 to-green-500/20", borderColor: "border-teal-500/30" },
    { id: 155, title: "Como a Religiosidade Influencia o QI", slug: "como-religiosidade-influencia-qi", description: "O que a ciência diz sobre a relação entre religiosidade, espiritualidade e QI.", icon: BookOpen, category: "Ciência", gradient: "from-violet-500/20 to-indigo-500/20", borderColor: "border-violet-500/30" },
    { id: 156, title: "Como Segurança do Trabalho Melhora QI", slug: "como-seguranca-trabalho-melhora-qi", description: "Como profissionais de segurança do trabalho desenvolvem raciocínio analítico e QI.", icon: Briefcase, category: "Carreira", gradient: "from-slate-500/20 to-gray-500/20", borderColor: "border-slate-500/30" },
    { id: 157, title: "Como Trabalhadores Melhoram QI", slug: "como-trabalhadores-melhoram-qi", description: "Estratégias práticas para trabalhadores de qualquer área desenvolverem QI no dia a dia.", icon: Briefcase, category: "Desenvolvimento", gradient: "from-blue-500/20 to-teal-500/20", borderColor: "border-blue-500/30" },
    { id: 158, title: "QI Baixo: Causas, Sinais e Como Melhorar", slug: "qi-baixo", description: "Tudo sobre QI baixo: o que causa, como identificar e estratégias científicas para melhorar.", icon: TrendingDown, category: "Conceitos", gradient: "from-red-500/20 to-orange-500/20", borderColor: "border-red-500/30" },
    { id: 159, title: "QI e Ansiedade: Como a Ansiedade Afeta a Inteligência", slug: "qi-e-ansiedade", description: "Descubra como a ansiedade impacta o QI e estratégias para gerenciar emoções e melhorar cognição.", icon: Brain, category: "Ciência", gradient: "from-purple-500/20 to-violet-500/20", borderColor: "border-purple-500/30" },
    { id: 160, title: "QI e Autismo: Inteligência no Espectro Autista", slug: "qi-e-autismo", description: "Como o QI se manifesta no espectro autista e o que a ciência diz sobre inteligência e autismo.", icon: Brain, category: "Ciência", gradient: "from-blue-500/20 to-indigo-500/20", borderColor: "border-blue-500/30" },
    { id: 161, title: "QI e Exercício Físico: Como Mover o Corpo Aumenta QI", slug: "qi-e-exercicio-fisico", description: "A ciência comprova: exercício físico regular aumenta QI. Descubra como e quanto praticar.", icon: Zap, category: "Ciência", gradient: "from-green-500/20 to-lime-500/20", borderColor: "border-green-500/30" },
    { id: 162, title: "QI Médio de Adolescentes", slug: "qi-medio-adolescentes", description: "Qual é o QI médio de adolescentes? Dados científicos e como o QI se desenvolve na adolescência.", icon: Users, category: "Dados", gradient: "from-indigo-500/20 to-blue-500/20", borderColor: "border-indigo-500/30" },
    { id: 163, title: "QI Médio de Advogados", slug: "qi-medio-advogados", description: "Qual é o QI médio dos advogados? Dados sobre inteligência na profissão jurídica.", icon: Briefcase, category: "Dados", gradient: "from-blue-500/20 to-cyan-500/20", borderColor: "border-blue-500/30" },
    { id: 164, title: "QI Médio de Bombeiros", slug: "qi-medio-bombeiros", description: "Qual é o QI médio dos bombeiros? Dados sobre inteligência e habilidades cognitivas na profissão.", icon: Zap, category: "Dados", gradient: "from-red-500/20 to-orange-500/20", borderColor: "border-red-500/30" },
    { id: 165, title: "QI Médio de Ciclistas", slug: "qi-medio-ciclistas", description: "Qual é o QI médio de ciclistas? Como o ciclismo se relaciona com inteligência e cognição.", icon: Zap, category: "Dados", gradient: "from-cyan-500/20 to-teal-500/20", borderColor: "border-cyan-500/30" },
    { id: 166, title: "QI Médio de Corredores", slug: "qi-medio-corredores", description: "Qual é o QI médio de corredores? A relação entre corrida, saúde cerebral e inteligência.", icon: Zap, category: "Dados", gradient: "from-orange-500/20 to-amber-500/20", borderColor: "border-orange-500/30" },
    { id: 167, title: "QI Médio de Filhos", slug: "qi-medio-filhos", description: "Como o QI dos filhos se relaciona com o dos pais? Dados sobre hereditariedade e ambiente.", icon: Users, category: "Dados", gradient: "from-pink-500/20 to-rose-500/20", borderColor: "border-pink-500/30" },
    { id: 168, title: "QI Médio de Mães", slug: "qi-medio-maes", description: "Qual é o QI médio das mães? Dados sobre inteligência e maternidade.", icon: Users, category: "Dados", gradient: "from-purple-500/20 to-pink-500/20", borderColor: "border-purple-500/30" },
    { id: 169, title: "QI Médio no Mercado Financeiro", slug: "qi-medio-mercado-financeiro", description: "Qual é o QI médio de profissionais do mercado financeiro? Dados e análises.", icon: BarChart3, category: "Dados", gradient: "from-green-500/20 to-teal-500/20", borderColor: "border-green-500/30" },
    { id: 170, title: "QI Médio de Pais", slug: "qi-medio-pais", description: "Qual é o QI médio dos pais? Como a paternidade influencia o desenvolvimento cognitivo.", icon: Users, category: "Dados", gradient: "from-blue-500/20 to-indigo-500/20", borderColor: "border-blue-500/30" },
    { id: 171, title: "QI Médio por Gênero: Diferenças entre Homens e Mulheres", slug: "qi-medio-por-genero", description: "O que a ciência diz sobre diferenças de QI entre gêneros? Dados e análise imparcial.", icon: Users, category: "Dados", gradient: "from-violet-500/20 to-purple-500/20", borderColor: "border-violet-500/30" },
    { id: 172, title: "QI Médio de Professores", slug: "qi-medio-professores", description: "Qual é o QI médio dos professores? Dados sobre inteligência na carreira docente.", icon: GraduationCap, category: "Dados", gradient: "from-amber-500/20 to-orange-500/20", borderColor: "border-amber-500/30" },
    { id: 173, title: "QI Médio em Segurança do Trabalho", slug: "qi-medio-seguranca-trabalho", description: "Qual é o QI médio de profissionais de segurança do trabalho? Dados e análises.", icon: Briefcase, category: "Dados", gradient: "from-slate-500/20 to-gray-500/20", borderColor: "border-slate-500/30" },
    { id: 174, title: "QI Médio de Trabalhadores", slug: "qi-medio-trabalhadores", description: "Qual é o QI médio dos trabalhadores brasileiros? Dados por setor e profissão.", icon: Briefcase, category: "Dados", gradient: "from-teal-500/20 to-cyan-500/20", borderColor: "border-teal-500/30" },
    { id: 175, title: "Religiosidade e QI: O Que a Ciência Diz", slug: "religiosidade-e-qi", description: "A relação entre religiosidade e QI segundo estudos científicos. Dados e análise imparcial.", icon: BookOpen, category: "Ciência", gradient: "from-indigo-500/20 to-violet-500/20", borderColor: "border-indigo-500/30" },
    { id: 176, title: "Sinais de QI Alto: Como Identificar Alta Inteligência", slug: "sinais-qi-alto", description: "Quais são os sinais de QI alto? Descubra as características que indicam alta inteligência.", icon: Star, category: "Conceitos", gradient: "from-yellow-500/20 to-amber-500/20", borderColor: "border-yellow-500/30" },
    { id: 177, title: "Teste de QI Confiável: Como Escolher o Melhor", slug: "teste-qi-confiavel", description: "Como identificar um teste de QI confiável e evitar testes fraudulentos ou imprecisos.", icon: Award, category: "Guia", gradient: "from-green-500/20 to-emerald-500/20", borderColor: "border-green-500/30" },
    { id: 178, title: "Teste de QI Grátis: Os Melhores Disponíveis Online", slug: "teste-qi-gratis", description: "Os melhores testes de QI gratuitos disponíveis online. Quais são confiáveis e quais evitar.", icon: Trophy, category: "Guia", gradient: "from-primary/20 to-accent/20", borderColor: "border-primary/30" }
  ];

  // Extrair categorias únicas
  const categories = useMemo(() => {
    const cats = ["Todos", ...new Set(allArticles.map(a => a.category))];
    return cats.sort();
  }, []);

  // Ordenar do mais recente para o mais antigo
  const sortedArticles = useMemo(() => {
    return [...allArticles].sort((a, b) => {
      const dateA = a.publishedAt ?? "2024-01-01";
      const dateB = b.publishedAt ?? "2024-01-01";
      const byDate = dateB.localeCompare(dateA);
      return byDate !== 0 ? byDate : b.id - a.id;
    });
  }, []);

  // Filtrar artigos por categoria
  const filteredArticles = useMemo(() => {
    if (selectedCategory === "Todos") return sortedArticles;
    return sortedArticles.filter(a => a.category === selectedCategory);
  }, [selectedCategory, sortedArticles]);

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





