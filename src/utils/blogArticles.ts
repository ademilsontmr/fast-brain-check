// Lista de artigos do blog com informações para artigos relacionados
export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
}

export const allBlogArticles: BlogArticle[] = [
  {
    slug: "melhor-teste-qi-2026",
    title: "Melhor Teste de QI de 2026: Análise Completa",
    description: "Descubra o melhor teste de QI de 2026. Análise detalhada comparando precisão, metodologia, feedback e custo-benefício.",
    category: "Comparativo",
  },
  {
    slug: "qi-sucesso-profissional",
    title: "QI e Sucesso Profissional: Como Impacta sua Carreira",
    description: "Descubra como o QI influencia o sucesso profissional, quais profissões valorizam mais a inteligência e como desenvolver suas capacidades.",
    category: "Carreira",
  },
  {
    slug: "teste-qi-online-guia-completo",
    title: "Teste de QI Online: Guia Completo 2025",
    description: "Metodologias, precisão e como interpretar resultados. Tudo que você precisa saber sobre testes de QI online.",
    category: "Guia",
  },
  {
    slug: "como-se-preparar-teste-qi",
    title: "Como se Preparar para um Teste de QI",
    description: "Plano semanal de treinos cognitivos para otimizar seu desempenho e chegar no seu pico cognitivo.",
    category: "Preparação",
  },
  {
    slug: "melhores-testes-qi-online-2025",
    title: "Melhores Testes de QI Online em 2025",
    description: "Análise completa comparando testes grátis vs pagos. Descubra qual é o melhor para você.",
    category: "Comparativo",
  },
  {
    slug: "neuroplasticidade-cerebro-evolui",
    title: "Neuroplasticidade: Como o Cérebro Evolui",
    description: "O que a neurociência diz sobre treinos cognitivos e como eles literalmente remodelam seu cérebro.",
    category: "Ciência",
  },
  {
    slug: "media-qi-brasil",
    title: "Qual é a Média de QI no Brasil?",
    description: "Perguntas mais buscadas sobre inteligência. Dados científicos e respostas sobre QI no contexto brasileiro.",
    category: "Dados",
  },
  {
    slug: "qi-processos-seletivos",
    title: "QI em Processos Seletivos e Avaliações",
    description: "Como empresas usam testes de QI em seleção. O que procuram e como se preparar adequadamente.",
    category: "Carreira",
  },
  {
    slug: "top-15-jogos-apps-treinar-cerebro",
    title: "Top 15 Jogos e Apps para Treinar o Cérebro",
    description: "Melhores jogos e aplicativos baseados em evidências científicas para melhorar memória, raciocínio e QI.",
    category: "Ferramentas",
  },
  {
    slug: "diferenca-qi-qe-qg",
    title: "Diferença entre QI, QE e QG",
    description: "Quando testar cada tipo de inteligência. Entenda as diferenças e como desenvolver cada uma.",
    category: "Conceitos",
  },
  {
    slug: "ia-testes-cognitivos",
    title: "IA e Testes Cognitivos na Educação",
    description: "O papel da Inteligência Artificial em testes, educação e trabalho. O que está mudando em 2025.",
    category: "Tendências",
  },
  {
    slug: "como-aumentar-qi",
    title: "Como Aumentar Seu QI: 10 Dicas Cientificamente Comprovadas",
    description: "Descubra estratégias baseadas em ciência para desenvolver sua inteligência e potencializar seu raciocínio.",
    category: "Desenvolvimento",
  },
  {
    slug: "inteligencia-vs-sabedoria",
    title: "Inteligência vs Sabedoria: Qual a Diferença?",
    description: "Entenda as diferenças fundamentais entre inteligência e sabedoria, e como desenvolver ambas.",
    category: "Conceitos",
  },
  {
    slug: "habitos-qi-alto",
    title: "7 Hábitos de Pessoas com QI Alto",
    description: "Conheça os hábitos e rotinas que pessoas inteligentes cultivam para manter a mente afiada.",
    category: "Hábitos",
  },
  {
    slug: "genios-em-comum",
    title: "O Que os Gênios Têm em Comum?",
    description: "Explore as características e padrões que os maiores gênios da história compartilham.",
    category: "Curiosidades",
  },
  {
    slug: "genetica-vs-ambiente-qi",
    title: "Genética vs Ambiente no QI: O Que a Ciência Realmente Diz",
    description: "Descubra o papel da genética e do ambiente no desenvolvimento do QI. Análise profunda de estudos científicos sobre natureza vs criação.",
    category: "Ciência",
  },
  {
    slug: "qi-criatividade",
    title: "QI e Criatividade: A Relação Entre Inteligência e Inovação",
    description: "Descubra a relação complexa entre QI e criatividade. Por que pessoas muito inteligentes podem não ser criativas e como desenvolver ambos.",
    category: "Conceitos",
  },
  {
    slug: "qi-ao-longo-vida",
    title: "QI ao Longo da Vida: Como a Inteligência Muda com a Idade",
    description: "Descubra como o QI muda ao longo da vida. Desenvolvimento cognitivo na infância, pico na vida adulta e mudanças na terceira idade.",
    category: "Ciência",
  },
  {
    slug: "qi-medio-por-pais",
    title: "QI Médio por País: Ranking Mundial e Análise Completa 2025",
    description: "Descubra o QI médio por país em 2025. Ranking mundial completo, fatores que influenciam diferenças entre nações e análise científica das variações.",
    category: "Dados",
  },
  {
    slug: "qi-medio-por-idade",
    title: "QI Médio por Idade: Como a Inteligência Muda ao Longo da Vida",
    description: "Descubra como o QI médio varia por idade. Desenvolvimento cognitivo na infância, pico na vida adulta, mudanças na terceira idade e fatores que influenciam.",
    category: "Ciência",
  },
  {
    slug: "qi-medio-por-profissao",
    title: "QI Médio por Profissão: Quais Carreiras Exigem Maior Inteligência?",
    description: "Descubra o QI médio por profissão. Ranking completo de carreiras, análise científica sobre correlação entre QI e sucesso profissional e fatores que influenciam.",
    category: "Carreira",
  },
  {
    slug: "qi-brasileiro-vs-outros-paises",
    title: "QI do Brasileiro vs Outros Países: Comparação Completa e Análise",
    description: "Compare o QI médio do brasileiro com outros países. Análise detalhada das diferenças, fatores que explicam o gap e perspectivas futuras.",
    category: "Dados",
  },
  {
    slug: "como-aumentar-inteligencia",
    title: "Como Aumentar a Inteligência: Métodos Cientificamente Comprovados",
    description: "Descubra como aumentar sua inteligência com métodos baseados em ciência. Estratégias comprovadas para desenvolver QI, memória, raciocínio e habilidades cognitivas.",
    category: "Desenvolvimento",
  },
  {
    slug: "como-melhorar-cerebro",
    title: "Como Melhorar o Cérebro: Guia Completo de Otimização Cognitiva",
    description: "Descubra como melhorar seu cérebro através de neuroplasticidade, exercícios, nutrição e hábitos. Métodos científicos para otimizar função cognitiva, memória e saúde cerebral.",
    category: "Desenvolvimento",
  },
  {
    slug: "atividades-que-aumentam-qi",
    title: "Atividades que Aumentam QI: Lista Completa de Exercícios Cognitivos",
    description: "Descubra as melhores atividades que aumentam QI comprovadas pela ciência. Jogos, exercícios, hobbies e práticas que desenvolvem inteligência, memória e raciocínio.",
    category: "Ferramentas",
  },
  {
    slug: "suplementos-que-melhoram-qi",
    title: "Suplementos que Melhoram QI: Análise Científica Completa 2025",
    description: "Descubra quais suplementos realmente melhoram QI baseado em evidências científicas. Análise completa de eficácia, dosagens, segurança e mitos sobre nootrópicos.",
    category: "Ciência",
  },
  {
    slug: "o-que-e-considerado-qi-alto",
    title: "O Que é Considerado um QI Alto? Classificação e Significado Completo",
    description: "Descubra o que é considerado QI alto. Classificação completa (QI médio, alto, muito alto, gênio), percentis, significado prático e como interpretar seu resultado.",
    category: "Conceitos",
  },
  {
    slug: "diferenca-qi-inteligencia-emocional",
    title: "Diferença entre QI e Inteligência Emocional: Guia Completo",
    description: "Entenda as diferenças fundamentais entre QI e inteligência emocional (QE). Como cada um funciona, qual é mais importante, e como desenvolver ambos.",
    category: "Conceitos",
  },
  {
    slug: "pessoas-famosas-com-qi-alto",
    title: "Pessoas Famosas com QI Alto: Lista Completa e Verificada",
    description: "Descubra pessoas famosas com QI alto. Lista completa de celebridades, cientistas, empresários e personalidades históricas com QI elevado, incluindo valores verificados.",
    category: "Curiosidades",
  },
  {
    slug: "como-saber-meu-qi-sem-pagar",
    title: "Como Saber Meu QI Sem Pagar? Opções Grátis e Confiáveis 2025",
    description: "Descubra como saber seu QI sem pagar. Lista completa de testes de QI grátis online, opções confiáveis, limitações e como interpretar resultados.",
    category: "Guia",
  },
  {
    slug: "criancas-superdotadas-sinais-caracteristicas",
    title: "Crianças Superdotadas: Sinais, Características e Como Identificar",
    description: "Descubra os sinais e características de crianças superdotadas. Como identificar superdotação, QI necessário, características comportamentais e como apoiar o desenvolvimento.",
    category: "Desenvolvimento",
  },
  {
    slug: "impacto-nutricao-dieta-funcao-cognitiva-qi",
    title: "Impacto da Nutrição e Dieta na Função Cognitiva e QI: Guia Científico Completo",
    description: "Descubra como nutrição e dieta afetam função cognitiva e QI. Análise científica completa de macronutrientes, micronutrientes, dieta mediterrânea e impacto no desenvolvimento cognitivo.",
    category: "Ciência",
  },
  {
    slug: "conexao-qi-desempenho-academico",
    title: "Conexão Entre QI e Desempenho Acadêmico: Análise Científica Completa",
    description: "Descubra a relação entre QI e desempenho acadêmico. Correlação, poder preditivo, fatores que influenciam e como QI afeta sucesso escolar e universitário.",
    category: "Educação",
  },
  {
    slug: "nature-vs-nurture-genetica-ambiente-qi",
    title: "Nature vs Nurture: Genética e Ambiente no QI - Análise Científica Completa",
    description: "Descubra como genética e ambiente influenciam QI. Análise completa do debate nature vs nurture, estudos com gêmeos, fatores ambientais e interação gene-ambiente.",
    category: "Ciência",
  },
  {
    slug: "qi-e-sucesso-carreira",
    title: "QI e Sucesso na Carreira: Existe Correlação? Análise Científica Completa",
    description: "Descubra a relação entre QI e sucesso na carreira. Correlação, fatores que influenciam, inteligência emocional, habilidades sociais e como QI afeta desempenho profissional.",
    category: "Carreira",
  },
  {
    slug: "quanto-inteligencia-e-herdada",
    title: "Quanto da Nossa Inteligência é Herdada? Genética vs Ambiente - Análise Científica",
    description: "Descubra quanto da inteligência é herdada. Heritabilidade do QI, fatores genéticos e ambientais, estudos com gêmeos, epigenética e interação gene-ambiente.",
    category: "Ciência",
  },
  {
    slug: "diferencas-qi-e-inteligencia",
    title: "Diferenças Entre QI e Inteligência: Entenda as Distinções - Análise Completa",
    description: "Descubra as diferenças entre QI e inteligência. Escopo, medição, estabilidade, teorias de inteligência múltipla e por que QI não é a única medida de capacidade mental.",
    category: "Ciência",
  },
  {
    slug: "desenvolvimento-cognitivo-conexao-qi",
    title: "Desenvolvimento Cognitivo e Sua Conexão com o QI: Guia Completo",
    description: "Descubra a relação entre desenvolvimento cognitivo e QI. Estágios de Piaget, fatores que influenciam, marcos do desenvolvimento e como estimular crescimento cognitivo.",
    category: "Desenvolvimento",
  },
  {
    slug: "o-que-causa-qi-alto",
    title: "O Que Causa o QI Alto? Fatores Genéticos, Ambientais e Neurobiológicos",
    description: "Descubra o que causa QI alto. Fatores genéticos, ambientais, neurobiologia, epigenética e estratégias para melhorar habilidades cognitivas.",
    category: "Ciência",
  },
  {
    slug: "o-que-e-teste-qi",
    title: "O Que é o Teste de QI? Guia Completo sobre Testes de Quociente de Inteligência",
    description: "Descubra o que é um teste de QI. Como funciona, componentes, tipos de inteligência medidos, usos, limitações e o Efeito Flynn. Guia completo sobre testes de QI.",
    category: "Ciência",
  },
  {
    slug: "escala-inteligencia-wechsler-wais",
    title: "Escala de Inteligência Wechsler (WAIS): Guia Completo sobre o Teste de QI",
    description: "Descubra tudo sobre a Escala de Inteligência para Adultos Wechsler (WAIS). Estrutura, domínios, componentes, aplicações, limitações e futuro dos testes cognitivos.",
    category: "Ciência",
  },
  {
    slug: "como-manter-mente-afiada",
    title: "Como Manter Sua Mente Afiada: 7 Estratégias Científicas para Saúde Cerebral",
    description: "Descubra como manter sua mente afiada. Exercícios físicos, dieta saudável, sono, aprendizado contínuo e outras estratégias científicas para saúde cerebral e cognição.",
    category: "Saúde",
  },
  {
    slug: "reduzindo-demencia-treinamento-cerebral",
    title: "Reduzindo a Demência Através do Treinamento Cerebral: Evidências Científicas",
    description: "Descubra como treinamento cerebral pode reduzir risco de demência. Estudos científicos, tipos de treinamento, velocidade de processamento e estratégias para prevenir Alzheimer.",
    category: "Saúde",
  },
  {
    slug: "sua-pontuacao-qi-pode-mudar",
    title: "Sua Pontuação de QI Pode Mudar ao Longo do Tempo? Evidências Científicas",
    description: "Descubra se o QI pode mudar ao longo da vida. Estudos sobre mudanças na adolescência, efeito Flynn, estabilização e fatores que influenciam pontuações de QI.",
    category: "Ciência",
  },
  {
    slug: "pessoas-mais-inteligentes-que-voce-nunca-ouviu-falar",
    title: "As Pessoas Mais Inteligentes que Você Nunca Ouviu Falar: Gênios Esquecidos",
    description: "Descubra pessoas com QI excepcional que você provavelmente nunca ouviu falar. William Sidis, Judit Polgár, Kim Ung-Yong e outros gênios com histórias fascinantes.",
    category: "Curiosidades",
  },
  {
    slug: "qi-medio-brasil",
    title: "QI Médio no Brasil: Qual é e Por Quê?",
    description: "Qual o QI médio no Brasil? Descubra o QI médio brasileiro e os fatores que influenciam. Teste seu QI rapidamente!",
    category: "Dados"
  },
  {
    slug: "qi-alto-caracteristicas",
    title: "QI Alto: Características Reais, Além dos Mitos",
    description: "QI alto: características reais além dos mitos. Descubra o que realmente significa ter QI alto. Teste seu QI rapidamente!",
    category: "Conceitos"
  },
  {
    slug: "o-que-e-qi-baixo",
    title: "O que é QI Baixo? Causas e Sinais",
    description: "O que é QI baixo? Descubra as causas, sinais e o que significa ter QI abaixo da média. Teste seu QI rapidamente!",
    category: "Conceitos"
  },
  {
    slug: "como-interpretar-resultado-qi",
    title: "Como Interpretar Seu Resultado de QI: Guia Completo",
    description: "Como interpretar seu resultado de QI? Descubra o que significa sua pontuação. Guia completo e científico. Teste seu QI rapidamente!",
    category: "Guia"
  },
  {
    slug: "qi-pode-mudar-ao-longo-vida",
    title: "QI Pode Mudar ao Longo da Vida? Evidências Científicas",
    description: "QI pode mudar ao longo da vida? Descubra se o QI muda com a idade. Evidências científicas e fatores. Teste seu QI rapidamente!",
    category: "Ciência"
  },
  {
    slug: "qi-criancas-vs-adultos",
    title: "QI de Crianças vs. QI de Adultos: Diferenças e Comparações",
    description: "QI de crianças vs. QI de adultos: quais as diferenças? Descubra como QI muda com a idade. Teste seu QI rapidamente!",
    category: "Ciência"
  },
  {
    slug: "como-aumentar-qi-rapidamente",
    title: "Como Aumentar o QI Rapidamente: Guia Científico Completo",
    description: "Como aumentar o QI rapidamente? Descubra métodos científicos comprovados para aumentar inteligência. Guia completo. Teste seu QI rapidamente!",
    category: "Guia"
  },
  {
    slug: "como-aumentar-inteligencia-forma-natural",
    title: "Como Aumentar a Inteligência de Forma Natural: Métodos Científicos",
    description: "Como aumentar a inteligência de forma natural? Descubra métodos naturais e científicos para aumentar QI. Guia completo. Teste seu QI rapidamente!",
    category: "Guia"
  },
  {
    slug: "o-que-reduz-qi-sem-perceber",
    title: "O que Reduz seu QI sem Perceber: Fatores Ocultos e Científicos",
    description: "O que reduz seu QI sem perceber? Descubra fatores ocultos que diminuem inteligência. Guia científico completo. Teste seu QI rapidamente!",
    category: "Ciência"
  },
  {
    slug: "como-ativar-modo-foco-profundo",
    title: "Como Ativar o Modo Foco Profundo: Técnicas Científicas Comprovadas",
    description: "Como ativar o modo foco profundo? Descubra técnicas científicas para alcançar estado de concentração máxima. Guia completo. Teste seu QI rapidamente!",
    category: "Produtividade"
  },
  {
    slug: "qi-pode-aumentar-ao-longo-vida",
    title: "O QI Pode Aumentar ao Longo da Vida? Evidências e Estratégias Científicas",
    description: "O QI pode aumentar ao longo da vida? Descubra se é possível aumentar QI com idade. Evidências científicas e estratégias. Teste seu QI rapidamente!",
    category: "Ciência"
  },
  {
    slug: "qi-criancas-sinais-superdotacao",
    title: "QI de Crianças e Sinais de Superdotação Infantil: Guia Completo",
    description: "QI de crianças e sinais de superdotação infantil. Descubra como identificar crianças superdotadas. Guia científico completo. Teste seu QI rapidamente!",
    category: "Crianças"
  },
  {
    slug: "como-aprender-mais-rapido-neurociencia",
    title: "Como Aprender Mais Rápido Usando Neurociência: Técnicas Científicas",
    description: "Como aprender mais rápido usando neurociência? Descubra técnicas baseadas em neurociência para acelerar aprendizado. Guia completo. Teste seu QI rapidamente!",
    category: "Aprendizado"
  },
  {
    slug: "qi-e-genetica-quanto-nasce-aprende",
    title: "QI e Genética: O Quanto Nasce e O Quanto Se Aprende - Evidências Científicas",
    description: "QI e genética: o quanto nasce e o quanto se aprende? Descubra a relação entre genética e QI. Evidências científicas completas. Teste seu QI rapidamente!",
    category: "Ciência"
  },
  {
    slug: "como-ficar-mais-inteligente",
    title: "Como Ficar Mais Inteligente: Estratégias Científicas Comprovadas",
    description: "Como ficar mais inteligente? Descubra estratégias científicas comprovadas para aumentar inteligência e QI. Guia completo. Teste seu QI rapidamente!",
    category: "Guia"
  },
  {
    slug: "como-ficar-rico-relacao-qi",
    title: "Como Ficar Rico e a Relação com QI: Evidências Científicas",
    description: "Como ficar rico e a relação com QI? Descubra a correlação entre inteligência e riqueza. Estratégias baseadas em ciência. Teste seu QI rapidamente!",
    category: "Riqueza"
  },
  {
    slug: "como-ficar-rico-internet-qi",
    title: "Como Ficar Rico Usando a Internet e o QI: Estratégias Digitais",
    description: "Como ficar rico usando a internet e o QI? Descubra estratégias digitais para ganhar dinheiro online usando inteligência. Guia completo. Teste seu QI rapidamente!",
    category: "Riqueza"
  },
  {
    slug: "como-maes-melhoram-qi",
    title: "Como Mães Melhoram o QI: Estratégias Cientificamente Comprovadas",
    description: "Descubra como mães podem melhorar o QI através de atividades, hábitos e práticas baseadas em ciência. Guia completo para desenvolvimento cognitivo materno.",
    category: "Desenvolvimento"
  },
  {
    slug: "como-mercado-financeiro-melhora-qi",
    title: "Como o Mercado Financeiro Melhora o QI: Desenvolvimento Cognitivo Profissional",
    description: "Descubra como trabalhar no mercado financeiro pode melhorar o QI através de desafios cognitivos, análise complexa e desenvolvimento de habilidades mentais avançadas.",
    category: "Carreira"
  },
  {
    slug: "como-pais-melhoram-qi",
    title: "Como Pais Melhoram o QI: Desenvolvimento Cognitivo na Paternidade",
    description: "Descubra como a paternidade pode melhorar o QI através de mudanças cerebrais, desafios cognitivos e desenvolvimento de habilidades mentais. Guia completo para pais.",
    category: "Desenvolvimento"
  },
  {
    slug: "como-seguranca-trabalho-melhora-qi",
    title: "Como a Segurança no Trabalho Melhora o QI: Desenvolvimento Cognitivo Profissional",
    description: "Descubra como trabalhar com segurança no trabalho pode melhorar o QI através de análise de riscos, planejamento estratégico e desenvolvimento de habilidades cognitivas avançadas.",
    category: "Carreira"
  },
  {
    slug: "como-trabalhadores-melhoram-qi",
    title: "Como Trabalhadores Melhoram o QI: Desenvolvimento Cognitivo no Ambiente de Trabalho",
    description: "Descubra como diferentes tipos de trabalho podem melhorar o QI através de desafios cognitivos, aprendizado contínuo e desenvolvimento de habilidades mentais. Guia completo.",
    category: "Carreira"
  },
  {
    slug: "qi-e-exercicio-fisico",
    title: "QI e Exercício Físico: Como Atividade Física Melhora a Inteligência",
    description: "Descubra a relação científica entre QI e exercício físico. Como atividade física melhora função cognitiva, memória, raciocínio e desenvolvimento cerebral.",
    category: "Ciência"
  },
  {
    slug: "qi-medio-adolescentes",
    title: "QI Médio de Adolescentes: Dados Científicos e Desenvolvimento Cognitivo",
    description: "Descubra o QI médio de adolescentes, como a inteligência se desenvolve na adolescência, fatores que influenciam e como otimizar o desenvolvimento cognitivo nessa fase.",
    category: "Dados"
  },
  {
    slug: "qi-medio-corredores",
    title: "QI Médio de Corredores: A Relação Entre Corrida e Inteligência",
    description: "Descubra o QI médio de corredores, como a corrida melhora a função cognitiva, e a relação científica entre exercício aeróbico e desenvolvimento da inteligência.",
    category: "Dados"
  },
  {
    slug: "qi-medio-bombeiros",
    title: "QI Médio de Bombeiros: Inteligência e Coragem na Profissão",
    description: "Descubra o QI médio de bombeiros, as habilidades cognitivas necessárias para a profissão e como a inteligência se relaciona com o trabalho de salvamento e combate a incêndios.",
    category: "Dados"
  },
  {
    slug: "qi-medio-professores",
    title: "QI Médio de Professores: Inteligência na Educação",
    description: "Descubra o QI médio de professores, as habilidades cognitivas necessárias para ensinar e como a inteligência se relaciona com o sucesso na educação.",
    category: "Dados"
  },
  {
    slug: "qi-medio-seguranca-trabalho",
    title: "QI Médio de Profissionais de Segurança do Trabalho",
    description: "Descubra o QI médio de profissionais de segurança do trabalho, as habilidades cognitivas necessárias e como a inteligência impacta a prevenção de acidentes.",
    category: "Dados"
  },
  {
    slug: "qi-medio-engenheiros",
    title: "QI Médio de Engenheiros: Inteligência Técnica e Criativa",
    description: "Descubra o QI médio de engenheiros, as habilidades cognitivas necessárias e como a engenharia desenvolve inteligência técnica e criatividade.",
    category: "Dados"
  },
  {
    slug: "qi-medio-medicos",
    title: "QI Médio de Médicos: Inteligência na Medicina",
    description: "Descubra o QI médio de médicos, as habilidades cognitivas necessárias para a medicina e como a profissão desenvolve inteligência clínica.",
    category: "Dados"
  },
  {
    slug: "qi-medio-profissionais-saude",
    title: "QI Médio de Profissionais de Saúde: Inteligência no Cuidado",
    description: "Descubra o QI médio de profissionais de saúde, as habilidades cognitivas necessárias e como o cuidado com pacientes desenvolve inteligência.",
    category: "Dados"
  },
  {
    slug: "qi-medio-estudantes",
    title: "QI Médio de Estudantes: Inteligência Acadêmica",
    description: "Descubra o QI médio de estudantes por nível educacional, fatores que influenciam e como otimizar o desenvolvimento cognitivo durante os estudos.",
    category: "Dados"
  },
  {
    slug: "qi-medio-jovens",
    title: "QI Médio de Jovens: Desenvolvimento Cognitivo na Juventude",
    description: "Descubra o QI médio de jovens, como a inteligência se desenvolve nessa fase e estratégias para otimizar o potencial cognitivo.",
    category: "Dados"
  },
  {
    slug: "qi-medio-idosos",
    title: "QI Médio de Idosos: Inteligência na Terceira Idade",
    description: "Descubra o QI médio de idosos, como a inteligência muda com a idade e estratégias para manter a mente afiada na terceira idade.",
    category: "Dados"
  },
  {
    slug: "qi-medio-netos",
    title: "QI Médio de Netos: Inteligência das Novas Gerações",
    description: "Descubra o QI médio das novas gerações, como crianças e adolescentes estão se desenvolvendo cognitivamente e o papel dos avós.",
    category: "Dados"
  },
  {
    slug: "qi-medio-cavaleiros",
    title: "QI Médio de Cavaleiros: Inteligência Equestre",
    description: "Descubra o QI médio de praticantes de equitação, as habilidades cognitivas desenvolvidas no esporte equestre e a relação entre cavalos e inteligência.",
    category: "Dados"
  },
  {
    slug: "como-correr-melhora-qi",
    title: "Como Correr Melhora o QI: Ciência do Exercício Aeróbico",
    description: "Descubra como a corrida melhora o QI através de neurogênese, fluxo sanguíneo cerebral e produção de BDNF. Guia científico completo.",
    category: "Desenvolvimento"
  },
  {
    slug: "como-melhorar-qi-30-dias",
    title: "Como Melhorar o QI em 30 Dias: Plano Científico Completo",
    description: "Descubra como melhorar seu QI em 30 dias com um plano baseado em ciência. Exercícios diários, nutrição e hábitos para desenvolvimento cognitivo.",
    category: "Guia"
  },
  {
    slug: "como-engenheiros-melhoram-qi",
    title: "Como Engenheiros Melhoram o QI: Desenvolvimento Cognitivo Técnico",
    description: "Descubra como a engenharia melhora o QI através de resolução de problemas, pensamento sistêmico e desafios técnicos complexos.",
    category: "Carreira"
  },
  {
    slug: "sinais-qi-alto",
    title: "Sinais de QI Alto: 15 Características de Pessoas Inteligentes",
    description: "Descubra os sinais mais comuns de QI alto. Características comportamentais, cognitivas e emocionais que indicam inteligência acima da média.",
    category: "Conceitos"
  },
  {
    slug: "qi-normal",
    title: "QI Normal: O Que É e O Que Significa",
    description: "Descubra o que é considerado QI normal, a faixa de pontuação, o que significa ter QI médio e como interpretar resultados.",
    category: "Conceitos"
  },
  {
    slug: "qi-e-tdah",
    title: "QI e TDAH: Relação Entre Inteligência e Déficit de Atenção",
    description: "Descubra a relação entre QI e TDAH, como o déficit de atenção afeta testes de inteligência e estratégias para otimizar o potencial cognitivo.",
    category: "Ciência"
  },
  {
    slug: "qi-e-memoria",
    title: "QI e Memória: Relação Científica Entre Inteligência e Memória",
    description: "Descubra a relação entre QI e memória, como diferentes tipos de memória afetam a inteligência e estratégias para melhorar ambos.",
    category: "Ciência"
  },
  {
    slug: "qi-e-sono",
    title: "QI e Sono: Como o Sono Afeta a Inteligência",
    description: "Descubra como o sono afeta o QI, a importância do sono para função cognitiva e estratégias para otimizar o descanso cerebral.",
    category: "Ciência"
  }
];

// Função para obter 3 artigos relacionados (excluindo o artigo atual)
export const getRelatedArticles = (currentSlug: string, count: number = 3): BlogArticle[] => {
  const filtered = allBlogArticles.filter(article => article.slug !== currentSlug);
  // Embaralhar e pegar os primeiros N
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

