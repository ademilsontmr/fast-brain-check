import { Brain, ArrowRight, GraduationCap, TrendingUp, BookOpen, Clock, Award } from "lucide-react";
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

const ConexaoQIDesempenhoAcademico = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/conexao-qi-desempenho-academico";
  const articleTitle = "Conexão Entre QI e Desempenho Acadêmico: Análise Científica Completa";
  const articleDescription = "Descubra a relação entre QI e desempenho acadêmico. Correlação, poder preditivo, fatores que influenciam e como QI afeta sucesso escolar e universitário.";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "ConexaoQIDesempenhoAcademico, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "conexao-qi-desempenho-academico",
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
          <span>Conexão Entre QI e Desempenho Acadêmico</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Qual é a Conexão Entre QI e Desempenho Acadêmico?
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
          
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <GraduationCap className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            A relação entre QI (Quociente de Inteligência) e desempenho acadêmico tem interessado 
            educadores, psicólogos e pesquisadores há décadas. Entender essa conexão é crucial para 
            desenvolver estratégias e políticas educacionais eficazes. Neste artigo, exploramos como 
            o QI influencia o sucesso acadêmico, os fatores que mediam essa relação e os debates 
            em andamento sobre o tema.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Entendendo o QI</h2>
          <p className="mb-4">
            O <strong>QI (Quociente de Inteligência)</strong> é uma medida padronizada da inteligência 
            humana, avaliada através de testes que medem várias habilidades cognitivas, incluindo 
            raciocínio, resolução de problemas, memória e compreensão.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">História do QI</h3>
          <p className="mb-4">
            O conceito de QI surgiu no início do século XX com o desenvolvimento dos primeiros testes 
            de inteligência por <strong>Alfred Binet</strong> e <strong>Théodore Simon</strong>, 
            inicialmente criados para identificar alunos que precisavam de apoio educacional adicional.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Distribuição de QI</h3>
          <p className="mb-4">
            As pontuações de QI são distribuídas em uma curva de sino (distribuição normal):
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Média:</strong> 100 (definida como padrão)</li>
            <li><strong>Faixa média:</strong> 85-115 (maioria da população)</li>
            <li><strong>Superior:</strong> 130+ (top 2% da população)</li>
            <li><strong>Função:</strong> Permite comparações objetivas entre indivíduos e grupos</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI e Desempenho Acadêmico: A Conexão</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Correlação Positiva</h3>
          <p className="mb-4">
            A pesquisa mostra consistentemente uma <strong>correlação positiva entre QI e desempenho acadêmico</strong>:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Melhores notas:</strong> Estudantes com QI mais alto tendem a obter melhores notas</li>
            <li><strong>Testes padronizados:</strong> Desempenho superior em exames</li>
            <li><strong>Níveis educacionais:</strong> Buscam níveis mais altos de educação</li>
            <li><strong>Matemática e ciências:</strong> Correlação especialmente forte em áreas que exigem raciocínio analítico</li>
          </ul>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h4 className="text-lg font-bold mb-3">Evidência Científica</h4>
            <p className="mb-2">
              <strong>Estudo Deary et al. (2007):</strong> Pontuações de QI foram preditores significativos 
              de desempenho acadêmico no Reino Unido, representando parte substancial da variação nos 
              resultados dos exames.
            </p>
            <p>
              <strong>Áreas STEM:</strong> QI prevê fortemente sucesso em ciência, tecnologia, engenharia 
              e matemática, onde habilidades cognitivas desempenham papel crucial.
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Poder Preditivo do QI</h3>
          <p className="mb-4">
            O QI é frequentemente usado para prever sucesso acadêmico:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Identificação de talentos:</strong> Instituições usam QI para identificar alunos que podem se destacar</li>
            <li><strong>Apoio adicional:</strong> Identificar alunos que precisam de suporte educacional</li>
            <li><strong>Predição precoce:</strong> Habilidades cognitivas na primeira infância podem prever resultados acadêmicos futuros</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Estudos Longitudinais</h4>
          <p className="mb-4">
            Pesquisas de longo prazo mostram:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Pré-escola:</strong> Crianças com QI mais alto na pré-escola têm melhor desempenho no ensino fundamental e médio</li>
            <li><strong>Habilidades avançadas:</strong> Demonstram habilidades avançadas de leitura e matemática</li>
            <li><strong>Destaque acadêmico:</strong> Permite que se destaquem em ambientes acadêmicos</li>
            <li><strong>Ferramenta valiosa:</strong> QI é útil para educadores e formuladores de políticas</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Variabilidade na Relação</h3>
          <p className="mb-4">
            A força da relação entre QI e desempenho acadêmico varia:
          </p>

          <h4 className="text-xl font-bold mt-6 mb-3">Por Matéria</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Alta correlação:</strong> Matemática, ciências (raciocínio analítico e lógico)</li>
            <li><strong>Correlação moderada:</strong> Línguas, história (compreensão e análise)</li>
            <li><strong>Baixa correlação:</strong> Arte, educação física (habilidades mais práticas e criativas)</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Por Nível Educacional</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Ensino fundamental/médio:</strong> QI é preditor mais significativo</li>
            <li><strong>Ensino superior:</strong> Fatores como motivação, hábitos de estudo e conhecimento especializado se tornam mais importantes</li>
            <li><strong>Pós-graduação:</strong> QI continua importante, mas outros fatores ganham peso</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Fatores que Influenciam a Relação QI-Desempenho Acadêmico</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Situação Socioeconômica</h3>
          <p className="mb-4">
            Fatores socioeconômicos impactam significativamente tanto QI quanto desempenho acadêmico:
          </p>

          <h4 className="text-xl font-bold mt-6 mb-3">Vantagens de Status Socioeconômico Alto</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Escolas de alta qualidade:</strong> Acesso a melhores recursos educacionais</li>
            <li><strong>Atividades extracurriculares:</strong> Enriquecimento educacional</li>
            <li><strong>Materiais educacionais:</strong> Livros, tecnologia, recursos de aprendizado</li>
            <li><strong>Apoio dos pais:</strong> Envolvimento e suporte educacional</li>
            <li><strong>Ambientes enriquecidos:</strong> Experiências estimulantes que desenvolvem cognição</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Evidência Científica</h4>
          <p className="mb-4">
            Pesquisas mostram que:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Status socioeconômico está intimamente ligado a escores de QI</li>
            <li>Crianças de famílias mais ricas pontuam mais alto em testes de inteligência</li>
            <li>Ambientes enriquecidos melhoram desenvolvimento cognitivo</li>
            <li>Fatores socioeconômicos mediam a relação entre QI e desempenho acadêmico</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Traços de Personalidade</h3>
          <p className="mb-4">
            Traços de personalidade, especialmente <strong>consciência</strong>, influenciam significativamente 
            o desempenho acadêmico:
          </p>

          <h4 className="text-xl font-bold mt-6 mb-3">Consciência</h4>
          <p className="mb-4">
            Caracterizada por diligência, organização e responsabilidade:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Hábitos de estudo eficazes:</strong> Organização, planejamento, disciplina</li>
            <li><strong>Conclusão de tarefas:</strong> Responsabilidade e cumprimento de prazos</li>
            <li><strong>Perseverança:</strong> Persistência diante de desafios</li>
            <li><strong>Poder preditivo:</strong> Pode prever sucesso acadêmico independentemente do QI</li>
          </ul>

          <div className="bg-primary/10 p-6 rounded-lg my-6 border-l-4 border-primary">
            <p className="mb-2">
              <strong>Importante:</strong> QI mede habilidades cognitivas, enquanto traços de personalidade 
              capturam fatores não cognitivos que também contribuem para o desempenho acadêmico.
            </p>
            <p>
              A consciência pode compensar QI mais baixo, permitindo que alunos com QI médio tenham 
              excelente desempenho acadêmico através de trabalho duro e organização.
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Influências Ambientais</h3>
          <p className="mb-4">
            O ambiente em que uma criança é criada impacta profundamente QI e resultados acadêmicos:
          </p>

          <h4 className="text-xl font-bold mt-6 mb-3">Ambiente Estimulante</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Livros:</strong> Acesso a literatura e materiais de leitura</li>
            <li><strong>Brinquedos educativos:</strong> Jogos e atividades que desenvolvem cognição</li>
            <li><strong>Experiências enriquecedoras:</strong> Museus, viagens, atividades culturais</li>
            <li><strong>Resultado:</strong> Desenvolvem fortes habilidades cognitivas e melhor desempenho acadêmico</li>
          </ul>

          <h4 className="text-xl font-bold mt-6 mb-3">Envolvimento dos Pais</h4>
          <p className="mb-4">
            Pais que se envolvem ativamente na educação dos filhos:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Fornecem apoio e incentivo:</strong> Apoio emocional e motivacional</li>
            <li><strong>Estabelecem expectativas:</strong> Altas expectativas acadêmicas</li>
            <li><strong>Promovem amor pelo aprendizado:</strong> Cultivam curiosidade e interesse</li>
            <li><strong>Desenvolvem habilidades de estudo:</strong> Ensinam técnicas e hábitos eficazes</li>
            <li><strong>Resultado:</strong> Influenciam positivamente desempenho acadêmico</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Correlação QI x Desempenho Acadêmico: Números</h2>
          <p className="mb-4">
            Estudos quantificam a relação:
          </p>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4">Correlação por Área</h3>
            <div className="space-y-3">
              <div>
                <p className="font-bold mb-1">Matemática e Ciências:</p>
                <p className="text-sm">Correlação r = 0.5-0.7 (moderada-alta)</p>
              </div>
              <div>
                <p className="font-bold mb-1">Línguas e Humanidades:</p>
                <p className="text-sm">Correlação r = 0.4-0.6 (moderada)</p>
              </div>
              <div>
                <p className="font-bold mb-1">Artes e Educação Física:</p>
                <p className="text-sm">Correlação r = 0.2-0.4 (baixa-moderada)</p>
              </div>
              <div>
                <p className="font-bold mb-1">Desempenho Acadêmico Geral:</p>
                <p className="text-sm">Correlação r = 0.4-0.6 (moderada)</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              <strong>Nota:</strong> QI explica aproximadamente 20-40% da variação em desempenho acadêmico. 
              Outros fatores (motivação, esforço, ambiente) explicam o restante.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI e Diferentes Níveis Educacionais</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Ensino Fundamental</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Alta correlação:</strong> QI é preditor muito forte de sucesso</li>
            <li><strong>Razão:</strong> Habilidades básicas (leitura, matemática) dependem fortemente de capacidade cognitiva</li>
            <li><strong>QI alto:</strong> Aprende mais rápido, compreende conceitos mais facilmente</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Ensino Médio</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Correlação moderada-alta:</strong> QI continua importante</li>
            <li><strong>Outros fatores emergem:</strong> Motivação, hábitos de estudo, organização</li>
            <li><strong>QI médio + esforço alto:</strong> Pode superar QI alto + esforço baixo</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Ensino Superior</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Correlação moderada:</strong> QI ainda importa, mas menos que antes</li>
            <li><strong>Fatores mais importantes:</strong> Conhecimento especializado, hábitos de estudo, persistência</li>
            <li><strong>QI mínimo:</strong> Geralmente necessário (QI ~110+ para cursos mais exigentes)</li>
            <li><strong>Acima do mínimo:</strong> QI muito alto não garante sucesso sem esforço</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Pós-Graduação</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Correlação baixa-moderada:</strong> QI tem papel menor</li>
            <li><strong>Fatores críticos:</strong> Conhecimento profundo, criatividade, persistência, networking</li>
            <li><strong>QI alto ajuda:</strong> Mas não é suficiente sem outros fatores</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Debates e Controvérsias</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">QI Não é o Único Determinante</h3>
          <p className="mb-4">
            Embora QI seja um preditor valioso, não é o único fator:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Motivação:</strong> Alunos motivados podem superar QI mais alto sem motivação</li>
            <li><strong>Perseverança:</strong> Trabalho duro e persistência compensam QI mais baixo</li>
            <li><strong>Esforço:</strong> Estudos mostram que alto esforço pode levar ao sucesso acadêmico independente de QI</li>
            <li><strong>Abordagem holística:</strong> Necessária para entender desempenho acadêmico</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">O Papel do Esforço e Trabalho Duro</h3>
          <p className="mb-4">
            Alguns estudos mostram que:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Alto esforço:</strong> Alunos que demonstram alto esforço e persistência podem alcançar sucesso acadêmico</li>
            <li><strong>Compensação:</strong> Determinação e coragem podem compensar habilidades cognitivas mais baixas</li>
            <li><strong>Exemplos:</strong> Muitos casos de alunos com QI médio que se destacam através de trabalho duro</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Limitações dos Testes de QI</h3>
          <p className="mb-4">
            Críticos argumentam que testes de QI têm limitações:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Foco limitado:</strong> Capturam principalmente habilidades lógicas e de raciocínio</li>
            <li><strong>Outras inteligências:</strong> Não medem inteligência emocional, criatividade, inteligência prática</li>
            <li><strong>Abordagem abrangente:</strong> Necessária para compreender toda gama de inteligência humana</li>
            <li><strong>Contexto cultural:</strong> Testes podem ter viés cultural</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Maximizar Desempenho Acadêmico</h2>
          <p className="mb-4">
            Independente do QI, estratégias podem melhorar desempenho:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Desenvolver Hábitos de Estudo Eficazes</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Estudo regular e consistente</li>
            <li>Técnicas de aprendizado ativo (resumos, flashcards, prática ativa)</li>
            <li>Gerenciamento de tempo eficiente</li>
            <li>Ambiente de estudo adequado</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Manter Alta Motivação</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Estabelecer objetivos claros</li>
            <li>Encontrar propósito no aprendizado</li>
            <li>Celebrar pequenas conquistas</li>
            <li>Manter perspectiva de longo prazo</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Buscar Apoio Quando Necessário</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Tutoria para matérias difíceis</li>
            <li>Grupos de estudo</li>
            <li>Recursos educacionais adicionais</li>
            <li>Apoio emocional e psicológico</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Desenvolver Inteligência Emocional</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Gerenciar estresse e ansiedade</li>
            <li>Desenvolver resiliência</li>
            <li>Melhorar habilidades sociais</li>
            <li>Autoconsciência e autorregulação</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Implicações para Educadores</h2>
          <p className="mb-4">
            Entender a relação QI-desempenho acadêmico tem implicações importantes:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Abordagem Individualizada</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Reconhecer que alunos têm diferentes capacidades cognitivas</li>
            <li>Adaptar ensino para diferentes níveis</li>
            <li>Fornecer desafios apropriados para cada aluno</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Focar em Fatores Modificáveis</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Desenvolver hábitos de estudo</li>
            <li>Aumentar motivação</li>
            <li>Melhorar ambiente de aprendizado</li>
            <li>Envolver pais e comunidade</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Criar Ambientes Inclusivos</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Valorizar diferentes tipos de inteligência</li>
            <li>Reconhecer esforço além de apenas capacidade</li>
            <li>Fornecer múltiplas formas de avaliação</li>
            <li>Suportar alunos com diferentes necessidades</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            O QI é um <strong>fator essencial no desempenho acadêmico</strong>, mas não é o único. 
            Existe uma correlação positiva consistente entre QI e sucesso acadêmico, especialmente 
            em áreas que exigem raciocínio analítico e lógico.
          </p>
          <p className="mb-4">
            No entanto, fatores como status socioeconômico, traços de personalidade (especialmente 
            consciência), influências ambientais, motivação e esforço também moldam significativamente 
            os resultados educacionais.
          </p>
          <p className="mb-4">
            Entender a complexa interação entre esses fatores pode ajudar educadores e formuladores 
            de políticas a desenvolver estratégias mais eficazes para apoiar alunos a atingir todo 
            seu potencial. Uma abordagem holística que considera fatores cognitivos e não cognitivos 
            garante que todos os alunos tenham oportunidade de sucesso acadêmico, independentemente 
            de suas pontuações de QI.
          </p>
          <p className="mb-4">
            O importante é reconhecer que QI fornece uma base, mas trabalho duro, motivação, 
            persistência e apoio adequado podem permitir que alunos com QI médio alcancem excelência 
            acadêmica, enquanto alunos com QI alto precisam de esforço para realizar seu potencial.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI e Potencial Acadêmico</h3>
          <p className="text-muted-foreground mb-6">
            Conhecer seu QI pode ajudar a entender suas capacidades acadêmicas e áreas de desenvolvimento. 
            Faça nosso teste científico completo e descubra seu QI real.
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
            {getRelatedArticles("conexao-qi-desempenho-academico", 3).map((article) => (
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

export default ConexaoQIDesempenhoAcademico;

