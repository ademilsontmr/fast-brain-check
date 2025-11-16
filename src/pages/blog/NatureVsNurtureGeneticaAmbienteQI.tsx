import { Brain, ArrowRight, Dna, Leaf, BookOpen, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const NatureVsNurtureGeneticaAmbienteQI = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/nature-vs-nurture-genetica-ambiente-qi";
  const articleTitle = "Nature vs Nurture: Genética e Ambiente no QI - Análise Científica Completa";
  const articleDescription = "Descubra como genética e ambiente influenciam QI. Análise completa do debate nature vs nurture, estudos com gêmeos, fatores ambientais e interação gene-ambiente.";
  
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
      slug: "nature-vs-nurture-genetica-ambiente-qi",
      publishDate: "2024-01-01",
    })
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Nature vs Nurture: Genética e Ambiente no QI</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nature vs Nurture: Genética e Ambiente no QI - Análise Científica Completa
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
          <span>•</span>
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Dna className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            O QI (Quociente de Inteligência) tem sido objeto de fascínio e controvérsia em psicologia, 
            neurociência e educação. Como medida de habilidades cognitivas e potencial, escores de QI 
            predizem desempenho acadêmico, sucesso profissional e resultados na vida. Os fatores que 
            moldam o QI giram em torno da questão "nature vs nurture": Quanto os genes versus o 
            ambiente determinam a inteligência?
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Background sobre QI</h2>
          <p className="mb-4">
            O <strong>QI (Quociente de Inteligência)</strong> é uma pontuação de testes padronizados 
            que medem habilidades cognitivas e potencial. Esses testes avaliam compreensão verbal, 
            raciocínio perceptual, memória de trabalho e velocidade de processamento.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">História do QI</h3>
          <p className="mb-4">
            <strong>Alfred Binet</strong> e <strong>Théodore Simon</strong> introduziram o QI no início 
            do século XX, desenvolvendo testes para identificar crianças que precisavam de apoio educacional. 
            O cálculo original dividia a "idade mental" pela idade cronológica, multiplicado por 100. 
            Testes modernos de QI evoluíram significativamente.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Testes Modernos de QI</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>WAIS (Wechsler Adult Intelligence Scale):</strong> Para adultos</li>
            <li><strong>Stanford-Binet Intelligence Scales:</strong> Para todas as idades</li>
            <li><strong>Raven's Progressive Matrices:</strong> Teste não-verbal</li>
            <li><strong>Padronização:</strong> Média de 100, desvio padrão de 15</li>
            <li><strong>Distribuição:</strong> ~68% da população entre 85-115</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Limitações dos Testes de QI</h3>
          <p className="mb-4">
            É importante reconhecer as limitações:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Viés cultural:</strong> Podem favorecer backgrounds específicos</li>
            <li><strong>Escopo limitado:</strong> Não capturam todos os aspectos da inteligência (criatividade, QE)</li>
            <li><strong>Ansiedade de teste:</strong> Pode influenciar pontuações</li>
            <li><strong>Familiaridade:</strong> Conhecimento do formato pode afetar resultados</li>
            <li><strong>Predição:</strong> Podem não prever precisamente desempenho no mundo real</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Fatores Genéticos que Influenciam QI</h2>
          <p className="mb-4">
            O papel da genética na determinação da inteligência tem sido estudado por décadas. A pesquisa 
            se baseia em estudos com gêmeos, estudos de adoção e genética molecular.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Estudos com Gêmeos</h3>
          <p className="mb-4">
            Estudos com gêmeos comparam similaridades de QI entre:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Gêmeos idênticos (monozigóticos):</strong> Compartilham 100% dos genes</li>
            <li><strong>Gêmeos fraternos (dizigóticos):</strong> Compartilham ~50% dos genes</li>
            <li><strong>Descoberta:</strong> Gêmeos idênticos mostram QI mais similar que fraternos</li>
            <li><strong>Conclusão:</strong> Sugere componente genético importante na inteligência</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Estudos de Adoção</h3>
          <p className="mb-4">
            Estudos de adoção examinam QI de crianças adotadas em relação a:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Pais biológicos:</strong> Compartilham genes, mas não ambiente</li>
            <li><strong>Pais adotivos:</strong> Compartilham ambiente, mas não genes</li>
            <li><strong>Descoberta:</strong> QI de crianças adotadas correlaciona mais com pais biológicos</li>
            <li><strong>Conclusão:</strong> Apoia papel da genética na inteligência</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Heritabilidade do QI</h3>
          <p className="mb-4">
            Estimas de heritabilidade do QI variam:
          </p>
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <ul className="space-y-3">
              <li><strong>Faixa geral:</strong> 50-80% de variação em QI atribuída a fatores genéticos</li>
              <li><strong>Idade:</strong> Influência genética aumenta com a idade</li>
              <li><strong>Infância:</strong> ~40-50% genético, ~50-60% ambiental</li>
              <li><strong>Idade adulta:</strong> ~70-80% genético, ~20-30% ambiental</li>
              <li><strong>Significado:</strong> Genética determina significativamente QI, mas ambiente permanece substancial</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Genética Molecular</h3>
          <p className="mb-4">
            Avanços em genética molecular identificaram genes relacionados a habilidades cognitivas:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Não há "gene da inteligência":</strong> Múltiplos genes com pequenos efeitos</li>
            <li><strong>Genes envolvidos:</strong> Desenvolvimento cerebral, sistemas de neurotransmissores, plasticidade sináptica</li>
            <li><strong>Natureza poligênica:</strong> Traços cognitivos são influenciados por muitos genes interagindo</li>
            <li><strong>Interação complexa:</strong> Genes interagem entre si e com ambiente</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Fatores Ambientais que Influenciam QI</h2>
          <p className="mb-4">
            Influências ambientais são cruciais para QI, especialmente durante períodos críticos de desenvolvimento:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Status Socioeconômico (SES)</h3>
          <p className="mb-4">
            Status socioeconômico afeta significativamente QI:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Correlação:</strong> Crianças de SES mais alto tendem a ter QI mais alto</li>
            <li><strong>Fatores:</strong> Melhor nutrição, saúde, recursos educacionais, estimulação cognitiva em casa</li>
            <li><strong>Pais educados:</strong> Podem fornecer ambientes intelectualmente mais estimulantes</li>
            <li><strong>Impacto:</strong> Pode explicar 10-20 pontos de diferença em QI</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Educação</h3>
          <p className="mb-4">
            Educação desempenha papel crucial no desenvolvimento cognitivo:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Escolarização formal:</strong> Fornece experiências de aprendizado estruturadas</li>
            <li><strong>Efeito por ano:</strong> Cada ano de educação pode aumentar QI em 1-5 pontos</li>
            <li><strong>Educação infantil:</strong> Tem efeitos duradouros no desenvolvimento cognitivo</li>
            <li><strong>Impacto cumulativo:</strong> Mais anos de educação = maior QI</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Nutrição</h3>
          <p className="mb-4">
            Nutrição influencia criticamente o desenvolvimento cognitivo:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Período crítico:</strong> Especialmente importante na primeira infância e adolescência</li>
            <li><strong>Deficiências:</strong> Ferro, iodo, ômega-3 ligados a função cognitiva prejudicada</li>
            <li><strong>Impacto:</strong> Nutrição adequada pode melhorar habilidades cognitivas e aumentar QI</li>
            <li><strong>Desnutrição:</strong> Pode reduzir QI em 5-15 pontos permanentemente</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Ambiente Doméstico</h3>
          <p className="mb-4">
            A qualidade do ambiente doméstico molda desenvolvimento cognitivo:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Recursos cognitivos:</strong> Livros, brinquedos educativos, atividades envolventes</li>
            <li><strong>Envolvimento parental:</strong> Responsividade e qualidade de interação pai-filho</li>
            <li><strong>Estimulação:</strong> Ambientes com alta estimulação cognitiva associados a QI mais alto</li>
            <li><strong>Impacto:</strong> Pode explicar 5-10 pontos de diferença em QI</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">5. Fatores Culturais</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Valores culturais:</strong> Diferentes culturas valorizam diferentes habilidades cognitivas</li>
            <li><strong>Familiaridade:</strong> Conhecimento de procedimentos de teste pode variar entre culturas</li>
            <li><strong>Viés potencial:</strong> Testes podem ter viés cultural</li>
            <li><strong>Importante:</strong> Considerar contexto cultural ao interpretar QI</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">6. Estresse e Trauma</h3>
          <p className="mb-4">
            Estresse e trauma, especialmente na primeira infância, podem impactar negativamente:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Estresse crônico:</strong> Afeta estrutura e função cerebral</li>
            <li><strong>Experiências adversas:</strong> Associadas a QI adulto mais baixo</li>
            <li><strong>Mecanismo:</strong> Estresse pode prejudicar desenvolvimento cognitivo</li>
            <li><strong>Impacto:</strong> Pode reduzir QI em 5-10 pontos</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Efeitos Cumulativos</h3>
          <p className="mb-4">
            Fatores ambientais frequentemente se inter-relacionam:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>SES baixo:</strong> Frequentemente correlaciona com nutrição pobre, educação limitada, estresse aumentado</li>
            <li><strong>Efeito cumulativo:</strong> Múltiplos fatores negativos têm impacto maior que soma individual</li>
            <li><strong>Importância:</strong> Intervenções devem abordar múltiplos fatores simultaneamente</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">A Interação de Nature e Nurture</h2>
          <p className="mb-4">
            O debate nature-nurture na determinação de QI é complexo. Pesquisa moderna enfatiza 
            <strong> interações complexas</strong> entre predisposições genéticas e influências ambientais.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Interação Gene-Ambiente</h3>
          <p className="mb-4">
            A interação gene-ambiente é crucial para entender como nature e nurture moldam inteligência:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Definição:</strong> Efeito de variante genética depende do ambiente, ou impacto ambiental depende de genética</li>
            <li><strong>Exemplo:</strong> Heritabilidade de QI pode ser menor em ambientes de baixo SES</li>
            <li><strong>Significado:</strong> Fatores ambientais podem ter papel mais significativo quando recursos são escassos</li>
            <li><strong>Implicação:</strong> Ambiente importa mais para pessoas em desvantagem</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Epigenética</h3>
          <p className="mb-4">
            Epigenética estuda mudanças na expressão gênica que não envolvem mudanças na sequência de DNA:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Mecanismo:</strong> Fatores ambientais podem influenciar expressão gênica</li>
            <li><strong>Estresse precoce:</strong> Pode afetar expressão gênica no desenvolvimento cerebral</li>
            <li><strong>Impacto:</strong> Pode levar a mudanças de longo prazo na função cognitiva</li>
            <li><strong>Significado:</strong> Ambiente pode alterar como genes se expressam</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Correlação Gene-Ambiente</h3>
          <p className="mb-4">
            Correlação gene-ambiente ocorre quando predisposições genéticas influenciam ambientes:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Exemplo:</strong> Crianças com predisposição genética para alta capacidade cognitiva podem buscar atividades intelectualmente estimulantes</li>
            <li><strong>Resultado:</strong> Genes influenciam ambiente, que então influencia desenvolvimento</li>
            <li><strong>Complexidade:</strong> Torna difícil separar efeitos genéticos e ambientais</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Mudanças ao Longo do Tempo</h3>
          <p className="mb-4">
            A influência relativa de fatores genéticos e ambientais pode mudar:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Heritabilidade aumenta com idade:</strong> De ~40% na infância para ~70-80% na idade adulta</li>
            <li><strong>Ambiente compartilhado diminui:</strong> Impacto de fatores ambientais compartilhados diminui</li>
            <li><strong>Razão:</strong> Indivíduos têm mais controle sobre ambientes conforme envelhecem</li>
            <li><strong>Seleção de ambiente:</strong> Pessoas selecionam ambientes alinhados com predisposições genéticas</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Quanto Cada Fator Contribui?</h2>
          <p className="mb-4">
            Baseado em décadas de pesquisa:
          </p>

          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4">Contribuição para Variação em QI</h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">Fatores Genéticos:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Infância: ~40-50%</li>
                  <li>Adolescência: ~50-60%</li>
                  <li>Idade adulta: ~70-80%</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Fatores Ambientais:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Infância: ~50-60%</li>
                  <li>Adolescência: ~40-50%</li>
                  <li>Idade adulta: ~20-30%</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Interação Gene-Ambiente:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Complexa e variável</li>
                  <li>Depende de contexto e idade</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Implicações e Direções Futuras</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Para Educação</h3>
          <p className="mb-4">
            Entender a interação nature-nurture tem implicações importantes:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Aprendizado personalizado:</strong> Reconhecer diferentes predisposições genéticas</li>
            <li><strong>Adaptação:</strong> Adaptar métodos de ensino a diversos estilos de aprendizado</li>
            <li><strong>Enriquecimento:</strong> Importância de experiências educacionais enriquecedoras</li>
            <li><strong>Primeira infância:</strong> Crítico para desenvolvimento cognitivo</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Para Políticas Públicas</h3>
          <p className="mb-4">
            Pesquisa sobre determinantes de QI destaca importância de:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Reduzir pobreza:</strong> Status socioeconômico afeta QI</li>
            <li><strong>Melhorar nutrição:</strong> Especialmente na primeira infância</li>
            <li><strong>Garantir educação de qualidade:</strong> Acesso universal a educação</li>
            <li><strong>Apoiar envolvimento parental:</strong> Recursos para estimulação cognitiva em casa</li>
            <li><strong>Reduzir estresse:</strong> Políticas que reduzem estresse e trauma infantil</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Implicações Éticas</h3>
          <p className="mb-4">
            Conforme nosso entendimento da base genética da inteligência cresce:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Engenharia genética:</strong> Questões sobre modificação genética para traços cognitivos</li>
            <li><strong>Seleção:</strong> Questões sobre seleção genética</li>
            <li><strong>Equidade:</strong> Garantir que avanços beneficiem todos, não apenas alguns</li>
            <li><strong>Privacidade:</strong> Proteção de informações genéticas</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Direções Futuras de Pesquisa</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Genes específicos:</strong> Identificar genes específicos e mecanismos de interação</li>
            <li><strong>Neuroimagem:</strong> Avanços podem fornecer novos insights sobre base biológica</li>
            <li><strong>Plasticidade cognitiva:</strong> Capacidade do cérebro de mudar e se adaptar</li>
            <li><strong>Intervenções:</strong> Novas intervenções para melhorar habilidades cognitivas ao longo da vida</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que Isso Significa na Prática?</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">QI Não é Determinado Apenas por Genes</h3>
          <p className="mb-4">
            Embora genética seja importante:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Ambiente importa:</strong> Especialmente na primeira infância</li>
            <li><strong>Intervenções funcionam:</strong> Melhorias ambientais podem aumentar QI</li>
            <li><strong>Potencial pode ser realizado:</strong> Com ambiente adequado</li>
            <li><strong>Nunca é tarde:</strong> Mas intervenção precoce é mais eficaz</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">QI Não é Totalmente Moldável</h3>
          <p className="mb-4">
            Embora ambiente seja importante:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Genética estabelece limites:</strong> Mas limites são amplos</li>
            <li><strong>Variação individual:</strong> Pessoas respondem diferentemente a intervenções</li>
            <li><strong>Realismo:</strong> Nem todos podem alcançar QI de 150, mas muitos podem melhorar significativamente</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Abordagem Equilibrada</h3>
          <p className="mb-4">
            A melhor abordagem reconhece ambos:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Reconhecer diferenças genéticas:</strong> Mas não usar como desculpa</li>
            <li><strong>Otimizar ambiente:</strong> Fornecer melhores oportunidades para todos</li>
            <li><strong>Intervenção precoce:</strong> Especialmente importante</li>
            <li><strong>Suporte contínuo:</strong> Desenvolvimento cognitivo é processo ao longo da vida</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            O debate nature-nurture sobre QI permanece complexo, mas pesquisa atual indica uma 
            <strong> interação complexa</strong> entre fatores genéticos e ambientais. Genética 
            determina significativamente potencial cognitivo, mas influências ambientais são 
            cruciais para realizar esse potencial.
          </p>
          <p className="mb-4">
            QI não é nem um traço fixo determinado apenas por genes, nem totalmente moldável baseado 
            em experiências. É resultado de interações intrincadas entre nature e nurture, cada um 
            desempenhando papéis vitais em diferentes estágios de desenvolvimento.
          </p>
          <p className="mb-4">
            Conforme nosso entendimento dos fatores que influenciam QI cresce, podemos criar 
            estratégias educacionais e políticas mais eficazes que apoiem desenvolvimento cognitivo 
            para todos os indivíduos. Ao reconhecer a importância de fatores genéticos e ambientais, 
            podemos trabalhar para um futuro onde todos possam alcançar seu potencial mental completo.
          </p>
          <p className="mb-4">
            A busca para desvendar os mistérios da inteligência humana continua. Ao explorar as 
            complexas interações gene-ambiente que moldam nossas habilidades cognitivas, nos movemos 
            em direção a um entendimento mais nuançado e abrangente do que nos torna quem somos.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">
            Independente de fatores genéticos e ambientais, descobrir seu QI atual é o primeiro passo 
            para entender suas capacidades e potencial. Faça nosso teste científico completo.
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
            {getRelatedArticles("nature-vs-nurture-genetica-ambiente-qi", 3).map((article) => (
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

export default NatureVsNurtureGeneticaAmbienteQI;

