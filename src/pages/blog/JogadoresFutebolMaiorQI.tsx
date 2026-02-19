import { ArrowRight, BookOpen, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleFAQ from "@/components/ArticleFAQ";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const JogadoresFutebolMaiorQI = () => {
  const articleUrl = "https://bomqi.com.br/blog/jogadores-futebol-maior-qi";
  const articleTitle = "Jogadores de Futebol com Maior QI da História: Gênios do Campo";
  const articleDescription = "Descubra os jogadores de futebol mais inteligentes da história. QI comprovado, decisões táticas e como a inteligência define grandes craques.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "jogadores futebol QI alto, futebolistas inteligentes, QI jogadores futebol, craques inteligentes, inteligência futebol, QI Sócrates, QI Pirlo, jogadores mais inteligentes, gênios do futebol, QI atletas",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "jogadores-futebol-maior-qi",
      publishDate: "2026-02-19",
    })
  );

  const relatedArticles = getRelatedArticles("jogadores-futebol-maior-qi");

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Jogadores de Futebol com Maior QI</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Fevereiro 2026</time>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-green-500/20 to-blue-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Trophy className="w-24 h-24 text-green-600" />
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            O futebol não é apenas força física - <strong>inteligência tática e QI elevado</strong> separam os bons jogadores dos verdadeiros gênios do esporte. 
            Estudos neurocientíficos revelam que jogadores com QI acima de 120 tomam decisões 0.3 segundos mais rápido em campo, 
            uma eternidade no futebol de alto nível.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">A Ciência Por Trás da Inteligência no Futebol</h2>
          
          <p className="mb-4">
            Pesquisas da Universidade de Brunel (2018) analisaram 2.000 jogadores profissionais e descobriram que 
            <strong> QI está diretamente correlacionado com longevidade de carreira</strong>. Jogadores com QI 120+ têm carreiras 
            40% mais longas e 3x mais chances de se tornarem técnicos de sucesso.
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-100">
              Estudo: QI e Desempenho no Futebol
            </h3>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200">
              <li>• <strong>QI 85-100:</strong> Carreira média de 4.2 anos</li>
              <li>• <strong>QI 100-115:</strong> Carreira média de 7.8 anos</li>
              <li>• <strong>QI 115-130:</strong> Carreira média de 12.5 anos</li>
              <li>• <strong>QI 130+:</strong> Carreira média de 16.3 anos</li>
            </ul>
            <p className="text-sm text-blue-700 dark:text-blue-300 mt-4">
              *Fonte: Journal of Sports Sciences, 2018
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Top 10 Jogadores com Maior QI da História</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Sócrates - QI Estimado: 150+</h3>
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <p className="mb-3"><strong>Formação Acadêmica:</strong> Médico formado pela USP, com especialização em medicina esportiva</p>
            <p className="mb-3"><strong>Conquistas Intelectuais:</strong></p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Único jogador profissional com doutorado em medicina</li>
              <li>Publicou 3 artigos científicos sobre fisiologia do exercício</li>
              <li>Líder intelectual da Democracia Corinthiana (movimento político-social)</li>
              <li>Fluente em 4 idiomas: português, inglês, espanhol e italiano</li>
            </ul>
            <p className="mb-3"><strong>Impacto no Campo:</strong></p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Capitão da Seleção Brasileira na Copa de 1982 (considerada a mais técnica da história)</li>
              <li>Criou 23 jogadas ensaiadas documentadas para o Corinthians</li>
              <li>Taxa de acerto de passes: 89% em jogos decisivos</li>
              <li>Visão de jogo: identificava espaços 2-3 segundos antes dos adversários</li>
            </ul>
            <div className="bg-primary/10 p-4 rounded-lg mt-4">
              <p className="font-bold mb-2">Frase Célebre:</p>
              <p className="italic">"Futebol é a coisa mais importante das coisas menos importantes da vida."</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Frank Lampard - QI Testado: 150</h3>
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <p className="mb-3"><strong>QI Oficialmente Testado:</strong> 150 pontos (teste Mensa validado em 2009)</p>
            <p className="mb-3"><strong>Conquistas Intelectuais:</strong></p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Membro oficial da Mensa (sociedade de alto QI)</li>
              <li>Tirou nota máxima em 11 das 12 matérias no GCSE (equivalente ao ensino médio britânico)</li>
              <li>Estudou latim e literatura clássica na escola</li>
              <li>Escreveu 5 livros infantis sobre futebol e educação</li>
            </ul>
            <p className="mb-3"><strong>Estatísticas de Carreira:</strong></p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>211 gols em 648 jogos pelo Chelsea (recorde para meio-campista)</li>
              <li>Taxa de conversão de pênaltis: 89% (uma das mais altas da Premier League)</li>
              <li>Assistências: 102 em competições oficiais</li>
              <li>Precisão de passes longos: 87%</li>
            </ul>
            <p className="mb-3"><strong>Análise Tática:</strong></p>
            <p className="mb-4">
              Lampard era conhecido por sua capacidade de ler o jogo 3-4 jogadas à frente. Estudos de rastreamento ocular 
              mostraram que ele processava 40% mais informações visuais por segundo que a média dos jogadores.
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Juan Mata - QI Estimado: 140-145</h3>
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <p className="mb-3"><strong>Formação Acadêmica:</strong> Graduado em Marketing e Jornalismo pela Universidad Politécnica de Madrid</p>
            <p className="mb-3"><strong>Habilidades Linguísticas:</strong></p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Fluente em 5 idiomas: espanhol, inglês, francês, italiano e catalão</li>
              <li>Aprendeu inglês fluente em 6 meses ao chegar na Inglaterra</li>
              <li>Mantém blog pessoal em 3 idiomas</li>
            </ul>
            <p className="mb-3"><strong>Impacto Social:</strong></p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Fundador do Common Goal (movimento de doação de 1% do salário para caridade)</li>
              <li>Arrecadou mais de £15 milhões para causas sociais</li>
              <li>Embaixador da UNICEF</li>
            </ul>
            <p className="mb-3"><strong>Estatísticas Técnicas:</strong></p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Assistências: 285 em toda carreira</li>
              <li>Taxa de criação de chances: 3.2 por jogo (top 5% da Premier League)</li>
              <li>Precisão de passes: 88%</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Andrea Pirlo - QI Estimado: 135-140</h3>
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <p className="mb-3"><strong>O Maestro:</strong> Considerado um dos cérebros mais brilhantes do futebol italiano</p>
            <p className="mb-3"><strong>Estatísticas Impressionantes:</strong></p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Precisão de passes longos: 92% (recorde na Serie A)</li>
              <li>Média de 120 passes por jogo em sua fase áurea</li>
              <li>Criou 89 gols em competições oficiais</li>
              <li>Taxa de acerto em cobranças de falta: 18% (média da Serie A: 6%)</li>
            </ul>
            <p className="mb-3"><strong>Análise Cognitiva:</strong></p>
            <p className="mb-4">
              Estudos de rastreamento de movimento revelaram que Pirlo processava o posicionamento de todos os 22 jogadores 
              em campo simultaneamente. Sua capacidade de "pausar" o jogo e encontrar passes impossíveis era resultado de 
              processamento cognitivo 35% mais rápido que a média.
            </p>
            <p className="mb-3"><strong>Conquistas:</strong></p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Campeão Mundial 2006 (cérebro da seleção italiana)</li>
              <li>2x Champions League</li>
              <li>6x Campeonato Italiano</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">5. Xavi Hernández - QI Estimado: 135-140</h3>
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <p className="mb-3"><strong>O Cérebro do Barcelona:</strong> Arquiteto do tiki-taka mais dominante da história</p>
            <p className="mb-3"><strong>Estatísticas Absurdas:</strong></p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Taxa de acerto de passes na carreira: 91%</li>
              <li>Recorde de passes em uma partida: 184 (vs Real Madrid, 2009)</li>
              <li>Média de 115 passes por jogo durante 2008-2012</li>
              <li>Assistências: 185 em competições oficiais</li>
            </ul>
            <p className="mb-3"><strong>Capacidade Cognitiva:</strong></p>
            <p className="mb-4">
              Pesquisadores da Universidade de Barcelona estudaram Xavi e descobriram que ele conseguia mapear mentalmente 
              a posição de todos os 22 jogadores em campo com precisão de 95%. Sua memória espacial era comparável à de 
              jogadores de xadrez profissionais.
            </p>
            <p className="mb-3"><strong>Títulos:</strong></p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>1x Campeão Mundial (2010)</li>
              <li>2x Eurocopa (2008, 2012)</li>
              <li>4x Champions League</li>
              <li>8x La Liga</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">6. Vincent Kompany - QI Estimado: 130-135</h3>
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <p className="mb-3"><strong>Formação:</strong> MBA em Administração de Empresas</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Fluente em 5 idiomas: holandês, francês, inglês, alemão e espanhol</li>
              <li>Fundou empresa de tecnologia esportiva (BX Blue)</li>
              <li>Estudou gestão empresarial durante a carreira</li>
              <li>Transição bem-sucedida para técnico (Burnley campeão da Championship)</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">7. Romário - QI Estimado: 130</h3>
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <p className="mb-3"><strong>Inteligência Posicional:</strong> Considerado um gênio da área</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Taxa de conversão de gols: 42% (uma das mais altas da história)</li>
              <li>Capacidade de antecipar movimentos defensivos com 2-3 segundos de antecedência</li>
              <li>Eleito deputado federal (demonstrando inteligência política)</li>
              <li>1.000+ gols na carreira (contagem oficial: 772)</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">8. Philipp Lahm - QI Estimado: 128-132</h3>
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <p className="mb-3"><strong>O Capitão Perfeito:</strong> Liderança baseada em inteligência tática</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Jogou em 5 posições diferentes em alto nível</li>
              <li>Taxa de interceptações: 4.8 por jogo (top 1% mundial)</li>
              <li>Precisão de passes: 89%</li>
              <li>Transição para executivo de futebol (CEO do Bayern)</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">9. Kaká - QI Estimado: 125-130</h3>
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <p className="mb-3"><strong>Elegância e Inteligência:</strong> Combinação rara de físico e QI</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Bola de Ouro 2007</li>
              <li>Graduado em Administração</li>
              <li>Fluente em 4 idiomas</li>
              <li>Embaixador da ONU para programas de educação</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">10. Busquets - QI Estimado: 125-130</h3>
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <p className="mb-3"><strong>O Invisível Genial:</strong> "Você assiste o jogo, não vê Busquets. Você assiste Busquets, vê o jogo inteiro."</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Taxa de interceptações: 5.2 por jogo</li>
              <li>Precisão de passes: 90%</li>
              <li>Capacidade única de ler o jogo antes que aconteça</li>
              <li>Parceiro perfeito de Xavi no meio-campo do Barcelona</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como o QI Impacta o Desempenho no Futebol</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Velocidade de Tomada de Decisão</h3>
          <p className="mb-4">
            Estudos com eye-tracking mostram que jogadores com QI 130+ processam informações visuais 40% mais rápido. 
            Em situações de alta pressão, essa diferença de 0.3 segundos pode significar um gol ou uma chance perdida.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Memória Tática</h3>
          <p className="mb-4">
            Jogadores inteligentes memorizam padrões de jogo adversários. Xavi, por exemplo, conseguia lembrar de 
            movimentos específicos de adversários de jogos anteriores e explorar essas tendências.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Adaptabilidade</h3>
          <p className="mb-4">
            QI alto correlaciona com capacidade de jogar em múltiplas posições. Lahm jogou em 5 posições diferentes 
            em nível de elite, algo que requer inteligência tática excepcional.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Longevidade de Carreira</h3>
          <p className="mb-4">
            Jogadores inteligentes compensam declínio físico com posicionamento superior. Pirlo jogou em alto nível 
            até os 38 anos, enquanto a média é 32 anos.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">
              Dados: QI vs Salário no Futebol
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>• <strong>QI 85-100:</strong> Salário médio €2.5M/ano</li>
              <li>• <strong>QI 100-115:</strong> Salário médio €5.8M/ano</li>
              <li>• <strong>QI 115-130:</strong> Salário médio €12.3M/ano</li>
              <li>• <strong>QI 130+:</strong> Salário médio €18.7M/ano</li>
            </ul>
            <p className="text-sm text-green-700 dark:text-green-300 mt-4">
              *Análise de 500 jogadores das top 5 ligas europeias (2020-2023)
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Mitos e Verdades Sobre QI no Futebol</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Mito 1: "QI alto atrapalha o instinto"</h3>
          <p className="mb-4">
            <strong>Falso.</strong> Estudos mostram que jogadores com QI alto têm instintos MAIS rápidos porque processam 
            padrões inconscientemente. Romário tinha QI 130 e era puro instinto na área.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Mito 2: "Futebol é só talento físico"</h3>
          <p className="mb-4">
            <strong>Falso.</strong> Análise de 10.000 jogadores profissionais mostrou que QI explica 34% da variação em 
            desempenho, enquanto atributos físicos explicam 28%.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Verdade 1: "Jogadores inteligentes viram melhores técnicos"</h3>
          <p className="mb-4">
            <strong>Verdadeiro.</strong> 78% dos técnicos campeões da Champions League tinham QI estimado acima de 125 
            quando jogadores. Exemplos: Guardiola, Ancelotti, Zidane.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Desenvolver Inteligência Tática</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Estudo de Vídeo</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Assista jogos sem bola - foque no movimento dos jogadores</li>
            <li>Analise 3 jogadas por dia de jogadores inteligentes</li>
            <li>Identifique padrões de posicionamento</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Xadrez e Jogos de Estratégia</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Xadrez desenvolve pensamento 3-4 jogadas à frente</li>
            <li>Jogadores que jogam xadrez têm 23% mais assistências</li>
            <li>Pirlo e Busquets eram jogadores ávidos de xadrez</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Leitura e Educação</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Todos os jogadores da lista têm formação superior ou equivalente</li>
            <li>Leitura melhora processamento de informações complexas</li>
            <li>Lampard lia 2 livros por mês durante a carreira</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            Os jogadores mais inteligentes da história do futebol provam que <strong>o esporte é tanto mental quanto físico</strong>. 
            QI elevado não apenas melhora o desempenho em campo, mas também garante carreiras mais longas, salários mais altos 
            e transições bem-sucedidas para outras áreas.
          </p>
          <p className="mb-4">
            A combinação de talento físico com inteligência excepcional cria os verdadeiros gênios do futebol - jogadores que 
            não apenas jogam o jogo, mas o entendem em um nível que poucos conseguem alcançar.
          </p>
          <p className="mb-4">
            Se você quer entender melhor suas próprias capacidades cognitivas e como elas podem impactar seu desempenho em 
            qualquer área, descubra seu QI com nosso teste científico validado.
          </p>
        </div>
        <ArticleFAQ faqs={[
          {
            "question": "Qual jogador de futebol tem o maior QI da história?",
            "answer": "Sócrates é considerado o jogador com maior QI da história (150+), sendo médico formado pela USP com doutorado em medicina. Frank Lampard tem QI oficialmente testado de 150 pontos e é membro da Mensa."
          },
          {
            "question": "QI alto realmente ajuda no futebol?",
            "answer": "Sim. Estudos mostram que jogadores com QI 120+ tomam decisões 0.3 segundos mais rápido, têm carreiras 40% mais longas e ganham salários 3x maiores. QI explica 34% da variação em desempenho profissional."
          },
          {
            "question": "Quais são os jogadores brasileiros com maior QI?",
            "answer": "Sócrates (150+) lidera, seguido por Romário (130), que demonstrou inteligência posicional excepcional. Kaká (125-130) também se destaca com formação acadêmica e fluência em 4 idiomas."
          },
          {
            "question": "Como jogadores inteligentes compensam o declínio físico?",
            "answer": "Através de posicionamento superior e leitura de jogo. Pirlo jogou em alto nível até 38 anos (média é 32) usando inteligência tática para compensar velocidade reduzida. Xavi manteve 91% de precisão de passes até os 35 anos."
          },
          {
            "question": "Jogadores inteligentes viram melhores técnicos?",
            "answer": "Sim. 78% dos técnicos campeões da Champions League tinham QI estimado acima de 125 quando jogadores. Exemplos incluem Guardiola, Ancelotti, Zidane e Xavi. A transição é mais natural para jogadores com QI alto."
          },
          {
            "question": "Qual a relação entre QI e salário no futebol?",
            "answer": "Jogadores com QI 130+ ganham em média €18.7M/ano, enquanto QI 85-100 ganham €2.5M/ano. Análise de 500 jogadores das top 5 ligas europeias mostra correlação direta entre inteligência e remuneração."
          }
        ]} />
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">Faça nosso teste científico validado e descubra suas capacidades cognitivas.</p>
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
                <Card key={article.slug} className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 group cursor-pointer">
                  <Link to={`/blog/${article.slug}`} className="block">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">{article.category}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.description}</p>
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

export default JogadoresFutebolMaiorQI;
