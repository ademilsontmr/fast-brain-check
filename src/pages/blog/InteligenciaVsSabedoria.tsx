import { Brain, ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const InteligenciaVsSabedoria = () => {
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
          <span>Inteligência vs Sabedoria</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          A Diferença Entre Inteligência e Sabedoria: O Que Realmente Importa?
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Janeiro 2024</time>
          <span>•</span>
          <span>7 min de leitura</span>
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <GraduationCap className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Você conhece alguém extremamente inteligente que sempre toma decisões ruins? Ou alguém com 
            educação modesta mas com uma capacidade incrível de dar conselhos certeiros? A diferença 
            está entre inteligência e sabedoria — e entender isso pode mudar sua vida.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que É Inteligência?</h2>
          <p className="mb-4">
            Inteligência é a capacidade de <strong>aprender, raciocinar e resolver problemas</strong>. 
            É medida pelo QI (Quociente de Inteligência) e envolve habilidades como:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Raciocínio lógico:</strong> Resolver quebra-cabeças e problemas matemáticos</li>
            <li><strong>Memória:</strong> Reter e recuperar informações rapidamente</li>
            <li><strong>Velocidade de processamento:</strong> Analisar informações com rapidez</li>
            <li><strong>Compreensão verbal:</strong> Entender e usar linguagem complexa</li>
          </ul>
          <p className="mb-4">
            Pessoas inteligentes geralmente se destacam academicamente, aprendem novas habilidades 
            com facilidade e conseguem identificar padrões complexos.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que É Sabedoria?</h2>
          <p className="mb-4">
            Sabedoria é a capacidade de <strong>aplicar conhecimento e experiência para tomar 
            decisões acertadas</strong>. Envolve:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Julgamento moral:</strong> Distinguir certo de errado em situações complexas</li>
            <li><strong>Perspectiva:</strong> Ver além do imediato e considerar consequências de longo prazo</li>
            <li><strong>Empatia:</strong> Compreender diferentes pontos de vista</li>
            <li><strong>Autoconhecimento:</strong> Reconhecer suas próprias limitações e vieses</li>
            <li><strong>Humildade intelectual:</strong> Saber quando você não sabe</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Principais Diferenças</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Conhecimento vs. Aplicação</h3>
          <p className="mb-4">
            <strong>Inteligência:</strong> Saber que tomates são frutas.<br />
            <strong>Sabedoria:</strong> Não colocar tomate em uma salada de frutas.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Velocidade vs. Reflexão</h3>
          <p className="mb-4">
            Pessoas inteligentes processam informações rapidamente. Pessoas sábias param para 
            refletir antes de agir.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Individual vs. Coletivo</h3>
          <p className="mb-4">
            A inteligência pode ser desenvolvida sozinho. A sabedoria frequentemente vem de 
            experiências compartilhadas e aprendizado com os erros (próprios e alheios).
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Potencial vs. Realização</h3>
          <p className="mb-4">
            Um QI alto indica potencial. A sabedoria indica como você usa (ou desperdiça) esse potencial.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Exemplos do Mundo Real</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Inteligente mas Não Sábio</h3>
          <p className="mb-4">
            Um engenheiro brilhante que consegue resolver problemas técnicos complexos, mas 
            nunca economiza dinheiro, arruína relacionamentos por falta de empatia e toma 
            decisões impulsivas de carreira.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Sábio mas Não Necessariamente Inteligente (no sentido de QI)</h3>
          <p className="mb-4">
            Seu avô, que nunca foi à universidade, mas sempre sabe o que dizer nos momentos 
            difíceis, toma decisões financeiras prudentes e construiu uma vida equilibrada.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">É Possível Ter Ambos?</h2>
          <p className="mb-4">
            Sim! E essa é a combinação ideal. Pessoas como Nelson Mandela, Maya Angelou e 
            Benjamin Franklin demonstraram tanto inteligência quanto sabedoria extraordinárias.
          </p>
          <p className="mb-4">
            A boa notícia: enquanto o QI é relativamente estável após a juventude, a sabedoria 
            pode ser cultivada durante toda a vida através de:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Aprender com os próprios erros</li>
            <li>Ouvir perspectivas diversas</li>
            <li>Praticar reflexão e meditação</li>
            <li>Ler filosofia, história e biografias</li>
            <li>Buscar mentores e conselheiros</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que Importa Mais?</h2>
          <p className="mb-4">
            Estudos de longo prazo mostram que a sabedoria é um preditor melhor de bem-estar 
            e satisfação com a vida do que o QI. Mas idealmente, você quer ambos:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Use sua <strong>inteligência</strong> para identificar problemas e encontrar soluções</li>
            <li>Use sua <strong>sabedoria</strong> para decidir quais problemas resolver e como aplicar as soluções</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            Inteligência é seu motor. Sabedoria é seu GPS. Você pode ter um motor potente, 
            mas sem um bom GPS, pode acabar no lugar errado. A chave é desenvolver ambos.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Teste Sua Inteligência</h3>
          <p className="text-muted-foreground mb-6">
            Descubra seu QI em apenas 3 minutos. Depois, trabalhe na sabedoria — 
            que só você pode desenvolver.
          </p>
          <Link to="/teste">
            <Button size="lg" className="gap-2">
              Fazer o Teste de QI
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default InteligenciaVsSabedoria;
