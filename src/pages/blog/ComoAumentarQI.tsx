import { Brain, ArrowRight, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const ComoAumentarQI = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold">BomQI</span>
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/#blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Como aumentar seu QI</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Como Aumentar Seu QI: 10 Dicas Cientificamente Comprovadas
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2024</time>
          <span>•</span>
          <span>8 min de leitura</span>
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Lightbulb className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Muitas pessoas acreditam que o QI é algo fixo e imutável. A ciência moderna, no entanto, 
            mostra que existem formas comprovadas de melhorar sua inteligência fluida e capacidade cognitiva. 
            Descubra as 10 estratégias mais eficazes para aumentar seu QI.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">1. Pratique Exercícios de Memória de Trabalho</h2>
          <p className="mb-4">
            A memória de trabalho é fundamental para o raciocínio e a resolução de problemas. Estudos 
            mostram que treinar a memória de trabalho através de jogos específicos pode aumentar o QI 
            em até 4 pontos após apenas 8 semanas de prática regular.
          </p>
          <p className="mb-4">
            <strong>Como praticar:</strong> Use aplicativos como Dual N-Back, jogue xadrez, ou pratique 
            malabarismo. Essas atividades exigem que você mantenha múltiplas informações em mente simultaneamente.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">2. Aprenda um Novo Idioma</h2>
          <p className="mb-4">
            Estudos de neuroimagem mostram que pessoas bilíngues têm maior densidade de massa cinzenta 
            em áreas do cérebro relacionadas ao controle executivo e à atenção. Aprender um segundo idioma 
            pode melhorar significativamente suas habilidades cognitivas gerais.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">3. Exercite-se Regularmente</h2>
          <p className="mb-4">
            A atividade física aeróbica aumenta o fluxo sanguíneo para o cérebro e promove a neurogênese 
            (formação de novos neurônios). Apenas 30 minutos de exercício moderado, 3-4 vezes por semana, 
            pode melhorar a função cognitiva em até 20%.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">4. Durma 7-9 Horas por Noite</h2>
          <p className="mb-4">
            O sono é essencial para a consolidação da memória e a limpeza de toxinas cerebrais. 
            Pessoas que dormem menos de 6 horas por noite apresentam desempenho cognitivo equivalente 
            a alguém com dois dias sem dormir.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">5. Medite Regularmente</h2>
          <p className="mb-4">
            A meditação mindfulness aumenta a espessura cortical em áreas do cérebro associadas à 
            atenção, introspecção e processamento sensorial. Apenas 20 minutos por dia podem fazer 
            diferença significativa em 8 semanas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">6. Toque um Instrumento Musical</h2>
          <p className="mb-4">
            Tocar música ativa praticamente todas as áreas do cérebro simultaneamente. Estudos mostram 
            que músicos têm melhor memória verbal, fluência verbal e raciocínio espacial comparados a não-músicos.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">7. Mantenha uma Dieta Rica em Ômega-3</h2>
          <p className="mb-4">
            O DHA, um tipo de ômega-3, é crucial para a saúde cerebral. Alimentos como salmão, nozes 
            e sementes de chia podem melhorar a função cognitiva e proteger contra declínio mental.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">8. Desafie-se com Puzzles e Jogos de Lógica</h2>
          <p className="mb-4">
            Quebra-cabeças, sudoku, e jogos de estratégia estimulam o raciocínio lógico e a resolução 
            de problemas. O importante é variar os tipos de desafios para trabalhar diferentes áreas cognitivas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">9. Leia Ativamente e Diversifique</h2>
          <p className="mb-4">
            Ler não só expande seu vocabulário, mas também melhora a empatia, o pensamento crítico e 
            a compreensão. Leia ficção para melhorar a teoria da mente, e não-ficção para expandir conhecimento.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">10. Socialize e Tenha Conversas Profundas</h2>
          <p className="mb-4">
            Interações sociais complexas estimulam o cérebro de formas únicas. Debates, discussões 
            filosóficas e conversas desafiadoras mantêm a mente afiada e promovem neuroplasticidade.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            Aumentar seu QI é possível, mas requer consistência e variedade. Combine múltiplas estratégias 
            desta lista para melhores resultados. Lembre-se: a inteligência não é apenas genética, 
            ela também é treinável.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI Atual</h3>
          <p className="text-muted-foreground mb-6">
            Antes de começar a melhorar, que tal descobrir seu ponto de partida? 
            Faça nosso teste de QI em apenas 3 minutos.
          </p>
          <Link to="/teste">
            <Button size="lg" className="gap-2">
              Fazer o Teste Agora
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ComoAumentarQI;
