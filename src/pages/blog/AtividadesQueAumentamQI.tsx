import { Brain, ArrowRight, Gamepad2, BookOpen, Clock, Target, Zap, Trophy, TrendingUp, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleFAQ from "@/components/ArticleFAQ";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const AtividadesQueAumentamQI = () => {
  const navigate = useNavigate();

  const articleUrl = "https://bomqi.com.br/blog/atividades-que-aumentam-qi";
  const articleTitle = "Atividades que Aumentam QI: Lista Completa de Exercícios Cognitivos";
  const articleDescription = "Descubra as melhores atividades que aumentam QI comprovadas pela ciência. Jogos, exercícios, hobbies e práticas que desenvolvem inteligência, memória e raciocínio.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "atividades aumentam QI, exercícios cognitivos, jogos inteligência, treinar cérebro, melhorar QI atividades, exercícios mentais, atividades cerebrais, desenvolver inteligência, práticas aumentar QI, hobbies inteligentes",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "atividades-que-aumentam-qi",
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
          <span>Atividades que Aumentam QI</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Atividades que Aumentam QI: Lista Completa de Exercícios Cognitivos
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
          <span>•</span>
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Gamepad2 className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Existem atividades específicas que, quando praticadas regularmente, podem aumentar
            significativamente seu QI. Neste guia completo, listamos as melhores atividades
            comprovadas pela ciência para desenvolver inteligência, memória, raciocínio e
            habilidades cognitivas.
          </p>

          <div className="bg-muted/50 p-6 rounded-xl border border-border mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Matriz de Eficiência: Esforço vs. Impacto no QI
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-background border-b border-border">
                    <th className="p-3 font-bold">Atividade</th>
                    <th className="p-3 font-bold">Esforço Necessário</th>
                    <th className="p-3 font-bold">Impacto no QI</th>
                    <th className="p-3 font-bold">Custo-Benefício</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-medium">Dual N-Back</td>
                    <td className="p-3 text-amber-600 font-medium">Alto (Exaustivo)</td>
                    <td className="p-3 text-green-600 font-bold">Muito Alto (+7 pts)</td>
                    <td className="p-3">⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Exercício Aeróbico</td>
                    <td className="p-3 text-blue-600 font-medium">Médio</td>
                    <td className="p-3 text-green-600 font-bold">Alto (+4 pts)</td>
                    <td className="p-3">⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Aprender Idioma</td>
                    <td className="p-3 text-amber-600 font-medium">Muito Alto (Longo Prazo)</td>
                    <td className="p-3 text-green-600 font-bold">Médio (+3 pts)</td>
                    <td className="p-3">⭐⭐⭐</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Meditação</td>
                    <td className="p-3 text-green-600 font-medium">Baixo</td>
                    <td className="p-3 text-blue-600 font-bold">Médio (+3 pts)</td>
                    <td className="p-3">⭐⭐⭐⭐</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              *Estimativas baseadas em meta-análises de treinamento cognitivo. Resultados variam individualmente.
            </p>
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 border border-amber-200 dark:border-amber-700 rounded-xl p-6 mb-12 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-white dark:bg-amber-950 p-3 rounded-full shadow-sm">
                <Trophy className="w-8 h-8 text-amber-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-2">
                  Desafio da Semana: O Protocolo "Mente Afiada"
                </h3>
                <p className="text-amber-800 dark:text-amber-200 mb-4 text-sm">
                  Quer começar agora? Aceite nosso desafio de 7 dias para reiniciar seu cérebro.
                </p>
                <div className="space-y-2 bg-white/50 dark:bg-black/20 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-amber-900 dark:text-amber-100">
                    <Zap className="w-4 h-4 text-amber-600" />
                    <strong>Manhã:</strong> 15 min de N-Back (App gratuito)
                  </div>
                  <div className="flex items-center gap-2 text-sm text-amber-900 dark:text-amber-100">
                    <Zap className="w-4 h-4 text-amber-600" />
                    <strong>Tarde:</strong> 20 min de sesta ou meditação NSDR
                  </div>
                  <div className="flex items-center gap-2 text-sm text-amber-900 dark:text-amber-100">
                    <Zap className="w-4 h-4 text-amber-600" />
                    <strong>Noite:</strong> 0 telas 1h antes de dormir
                  </div>
                </div>
                <div className="mt-4 text-xs text-amber-700 dark:text-amber-300 font-medium">
                  🎯 Meta: Completar 5 dias consecutivos.
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Atividades com Maior Evidência Científica</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Treino de Memória de Trabalho (N-back)</h3>
          <p className="mb-4">
            <strong>Evidência:</strong> Alta | <strong>Efeito no QI:</strong> +3-7 pontos
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>O que é:</strong> Exercícios que exigem lembrar informações de N passos atrás</li>
            <li><strong>Dual n-back:</strong> Versão mais desafiadora com múltiplas modalidades</li>
            <li><strong>Apps recomendados:</strong> Brain Workshop, N-back Trainer</li>
            <li><strong>Frequência:</strong> 20-30 minutos, 4-5x por semana</li>
            <li><strong>Por que funciona:</strong> Memória de trabalho é fortemente correlacionada com QI</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Xadrez</h3>
          <p className="mb-4">
            <strong>Evidência:</strong> Alta | <strong>Efeito no QI:</strong> +2-5 pontos
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Desenvolve:</strong> Planejamento, antecipação, raciocínio estratégico</li>
            <li><strong>Melhora:</strong> Funções executivas, memória de trabalho, atenção</li>
            <li><strong>Como praticar:</strong> Apps (Chess.com, Lichess), clubes locais, torneios</li>
            <li><strong>Frequência:</strong> 30-60 minutos diários</li>
            <li><strong>Dica:</strong> Analisar partidas de grandes mestres também ajuda</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Aprendizado de Idiomas</h3>
          <p className="mb-4">
            <strong>Evidência:</strong> Alta | <strong>Efeito no QI:</strong> +2-4 pontos
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Desenvolve:</strong> Múltiplas áreas cerebrais, função executiva</li>
            <li><strong>Melhora:</strong> Memória, atenção, flexibilidade cognitiva</li>
            <li><strong>Apps recomendados:</strong> Duolingo, Babbel, Memrise</li>
            <li><strong>Frequência:</strong> 20-30 minutos diários</li>
            <li><strong>Dica:</strong> Praticar conversação é especialmente benéfico</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Leitura Profunda e Variada</h3>
          <p className="mb-4">
            <strong>Evidência:</strong> Alta | <strong>Efeito no QI:</strong> +3-5 pontos
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Desenvolve:</strong> Vocabulário, conhecimento, raciocínio abstrato</li>
            <li><strong>Melhora:</strong> Compreensão, análise crítica, memória</li>
            <li><strong>O que ler:</strong> Literatura complexa, não-ficção científica, filosofia</li>
            <li><strong>Frequência:</strong> 30-60 minutos diários</li>
            <li><strong>Dica:</strong> Anotar e resumir aumenta benefícios</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">5. Programação</h3>
          <p className="mb-4">
            <strong>Evidência:</strong> Média-Alta | <strong>Efeito no QI:</strong> +2-4 pontos
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Desenvolve:</strong> Raciocínio lógico, resolução de problemas, pensamento algorítmico</li>
            <li><strong>Melhora:</strong> Funções executivas, atenção, memória de trabalho</li>
            <li><strong>Onde aprender:</strong> Codecademy, freeCodeCamp, Coursera</li>
            <li><strong>Frequência:</strong> 30-60 minutos diários</li>
            <li><strong>Dica:</strong> Começar com Python ou JavaScript</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">6. Instrumentos Musicais</h3>
          <p className="mb-4">
            <strong>Evidência:</strong> Alta | <strong>Efeito no QI:</strong> +2-4 pontos
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Desenvolve:</strong> Coordenação, memória, processamento temporal</li>
            <li><strong>Melhora:</strong> Funções executivas, atenção dividida, criatividade</li>
            <li><strong>Instrumentos recomendados:</strong> Piano, violino, guitarra</li>
            <li><strong>Frequência:</strong> 30-60 minutos diários</li>
            <li><strong>Dica:</strong> Ler partituras adiciona benefício extra</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">7. Exercício Físico Regular</h3>
          <p className="mb-4">
            <strong>Evidência:</strong> Alta | <strong>Efeito no QI:</strong> +2-4 pontos
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Desenvolve:</strong> Neurogênese, fluxo sanguíneo cerebral, BDNF</li>
            <li><strong>Melhora:</strong> Memória, atenção, função executiva</li>
            <li><strong>Tipos:</strong> Aeróbico (corrida, natação), força (musculação), coordenação (dança)</li>
            <li><strong>Frequência:</strong> 150 min/semana moderado ou 75 min intenso</li>
            <li><strong>Dica:</strong> Exercício antes de atividades cognitivas aumenta benefício</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">8. Meditação e Mindfulness</h3>
          <p className="mb-4">
            <strong>Evidência:</strong> Média-Alta | <strong>Efeito no QI:</strong> +1-3 pontos
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Desenvolve:</strong> Espessura cortical, atenção, controle emocional</li>
            <li><strong>Melhora:</strong> Foco, memória, redução de estresse</li>
            <li><strong>Apps recomendados:</strong> Headspace, Calm, Insight Timer</li>
            <li><strong>Frequência:</strong> 10-20 minutos diários</li>
            <li><strong>Dica:</strong> Meditação de atenção plena (mindfulness) é especialmente eficaz</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Atividades com Evidência Moderada</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">9. Sudoku e Puzzles Lógicos</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Efeito:</strong> +1-3 pontos | Desenvolve raciocínio lógico, atenção</li>
            <li><strong>Frequência:</strong> 15-30 minutos diários</li>
            <li><strong>Variações:</strong> Sudoku, Kakuro, KenKen, puzzles matemáticos</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">10. Jogos de Estratégia</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Efeito:</strong> +1-3 pontos | Desenvolve planejamento, antecipação</li>
            <li><strong>Exemplos:</strong> Go, Xadrez, Damas, Jogos de tabuleiro complexos</li>
            <li><strong>Frequência:</strong> 30-60 minutos, 3-4x por semana</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">11. Escrita Criativa e Jornalismo</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Efeito:</strong> +1-3 pontos | Desenvolve organização de pensamentos, vocabulário</li>
            <li><strong>Atividades:</strong> Diário, contos, artigos, poesia</li>
            <li><strong>Frequência:</strong> 20-30 minutos diários</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">12. Matemática e Problemas Lógicos</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Efeito:</strong> +1-3 pontos | Desenvolve raciocínio abstrato, resolução de problemas</li>
            <li><strong>Atividades:</strong> Problemas matemáticos, lógica, quebra-cabeças numéricos</li>
            <li><strong>Frequência:</strong> 20-30 minutos diários</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">13. Desenho e Artes Visuais</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Efeito:</strong> +1-2 pontos | Desenvolve percepção espacial, criatividade</li>
            <li><strong>Atividades:</strong> Desenho, pintura, escultura, design</li>
            <li><strong>Frequência:</strong> 30-60 minutos, 3-4x por semana</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">14. Dança</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Efeito:</strong> +1-2 pontos | Desenvolve coordenação, memória, processamento temporal</li>
            <li><strong>Tipos:</strong> Dança de salão, ballet, dança contemporânea</li>
            <li><strong>Frequência:</strong> 1-2 horas, 2-3x por semana</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">15. Jogos de Palavras</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Efeito:</strong> +1-2 pontos | Desenvolve vocabulário, raciocínio verbal</li>
            <li><strong>Exemplos:</strong> Scrabble, palavras cruzadas, anagramas</li>
            <li><strong>Frequência:</strong> 15-30 minutos diários</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Atividades Complementares</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">16. Ensinar Outros</h3>
          <p className="mb-4">
            Explicar conceitos desenvolve compreensão profunda:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Tutoria, mentoria</li>
            <li>Criar conteúdo educacional (vídeos, artigos)</li>
            <li>Participar de grupos de estudo</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">17. Debates e Discussões Intelectuais</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Clubes de debate</li>
            <li>Discussões sobre filosofia, ciência, política</li>
            <li>Grupos de leitura e discussão</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">18. Aprendizado de Habilidades Manuais</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Culinária complexa</li>
            <li>Artesanato, marcenaria</li>
            <li>Reparos e construção</li>
            <li>Desenvolvem coordenação, planejamento, resolução de problemas</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como Maximizar os Benefícios</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Progressão de Dificuldade</h3>
          <p className="mb-4">
            O cérebro se adapta. Para continuar melhorando:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Aumentar dificuldade gradualmente</li>
            <li>Desafiar-se no limite da sua capacidade</li>
            <li>Variar atividades para evitar platô</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Consistência é Chave</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Melhor fazer pouco diariamente que muito esporadicamente</li>
            <li>15-30 minutos diários &gt; 3 horas uma vez por semana</li>
            <li>Construir hábito é mais importante que intensidade inicial</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Combinação de Atividades</h3>
          <p className="mb-4">
            Combinar diferentes tipos de atividades:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Cognitivas:</strong> N-back, xadrez, leitura</li>
            <li><strong>Físicas:</strong> Exercício, dança</li>
            <li><strong>Criativas:</strong> Música, arte, escrita</li>
            <li><strong>Social:</strong> Debates, ensino, grupos</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Descanso e Recuperação</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Sono adequado consolida aprendizado</li>
            <li>Pausas entre sessões intensas</li>
            <li>Evitar sobrecarga cognitiva</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Plano de Ação Semanal</h2>
          <div className="bg-primary/10 p-6 rounded-lg my-6 border-l-4 border-primary">
            <h3 className="text-xl font-bold mb-4">Rotina Recomendada</h3>
            <div className="space-y-3">
              <div>
                <p className="font-bold mb-1">Segunda a Sexta (30-45 min/dia):</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>15 min: N-back ou treino cognitivo</li>
                  <li>15 min: Leitura profunda</li>
                  <li>15 min: Aprendizado (idioma, programação, música)</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-1">Fins de Semana (1-2 horas):</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Xadrez ou jogos estratégicos</li>
                  <li>Projetos criativos (arte, escrita, música)</li>
                  <li>Atividades sociais intelectuais</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-1">Diariamente:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>30 min exercício físico</li>
                  <li>10-15 min meditação</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Atividades a Evitar (Mitos)</h2>
          <p className="mb-4">
            Algumas atividades são populares mas têm pouca evidência:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Jogos "brain training" genéricos:</strong> Muitos não transferem para QI geral</li>
            <li><strong>Atividades muito fáceis:</strong> Não desafiam o cérebro</li>
            <li><strong>Multitarefa:</strong> Na verdade reduz eficiência cognitiva</li>
            <li><strong>Passividade:</strong> Assistir TV, scrollar redes sociais não desenvolve QI</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            Existem muitas atividades comprovadas que podem aumentar QI. As mais eficazes são:
            treino de memória de trabalho (n-back), xadrez, aprendizado de idiomas, leitura profunda,
            programação, música, exercício físico e meditação.
          </p>
          <p className="mb-4">
            A chave é combinar múltiplas atividades, manter consistência, e aumentar dificuldade
            gradualmente. Com dedicação e estratégia, você pode desenvolver significativamente
            suas capacidades cognitivas.
          </p>
          <p className="mb-4">
            Lembre-se: o objetivo não é apenas aumentar um número, mas desenvolver habilidades
            cognitivas que melhoram sua vida real - memória, raciocínio, criatividade e resolução
            de problemas.
          </p>
        </div>

        {/* CTA */}
        {/* FAQ Section */}
        <ArticleFAQ faqs={[
          {
                    "question": "Atividades que Aumentam QI?",
                    "answer": "Sim. Evidências científicas mostram que é possível através de métodos específicos abordados neste artigo."
          },
          {
                    "question": "Qual a base científica disso?",
                    "answer": "Estudos de neuroplasticidade e psicologia cognitiva demonstram que cérebro pode ser desenvolvido em qualquer idade com estímulos adequados."
          },
          {
                    "question": "Quanto tempo para ver resultados práticos?",
                    "answer": "Primeiros resultados em 4-8 semanas. Mudanças significativas em 6-12 meses de aplicação consistente dos métodos."
          },
          {
                    "question": "Isso funciona para minha idade?",
                    "answer": "Sim. Princípios se aplicam a todas as idades, com adaptações apropriadas. Potencial varia mas desenvolvimento é sempre possível."
          },
          {
                    "question": "Como começar a aplicar isso hoje?",
                    "answer": "Escolha 1-2 estratégias do artigo, pratique 20-30 min/dia, monitore progresso semanalmente e ajuste conforme necessário."
          }
]} />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Meça Seu Progresso</h3>
          <p className="text-muted-foreground mb-6">
            Comece medindo seu QI atual e acompanhe sua melhoria ao longo do tempo. Faça nosso
            teste científico completo e estabeleça sua linha de base.
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
            {getRelatedArticles("atividades-que-aumentam-qi", 3).map((article) => (
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

export default AtividadesQueAumentamQI;

