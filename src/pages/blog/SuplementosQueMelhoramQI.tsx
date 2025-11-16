import { Brain, ArrowRight, Pill, AlertTriangle, BookOpen, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const SuplementosQueMelhoramQI = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/suplementos-que-melhoram-qi";
  const articleTitle = "Suplementos que Melhoram QI: Análise Científica Completa 2025";
  const articleDescription = "Descubra quais suplementos realmente melhoram QI baseado em evidências científicas. Análise completa de eficácia, dosagens, segurança e mitos sobre nootrópicos.";
  
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
      slug: "suplementos-que-melhoram-qi",
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
          <span>Suplementos que Melhoram QI</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Suplementos que Melhoram QI: Análise Científica Completa
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
          <span>•</span>
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Pill className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            O mercado de suplementos "nootrópicos" (que melhoram cognição) cresce rapidamente, 
            mas a maioria tem pouca evidência científica. Neste artigo, analisamos quais 
            suplementos realmente melhoram QI e função cognitiva baseado em pesquisas científicas 
            rigorosas, incluindo eficácia, dosagens, segurança e mitos comuns.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-6 border-l-4 border-yellow-500">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold mb-2">⚠️ Aviso Importante</p>
                <p className="text-sm">
                  Sempre consulte um médico antes de tomar suplementos, especialmente se você tem 
                  condições médicas ou toma medicamentos. Suplementos não substituem dieta 
                  equilibrada, exercício, sono e outras práticas comprovadas.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Suplementos com Evidência Forte</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Ômega-3 (DHA/EPA)</h3>
          <p className="mb-4">
            <strong>Evidência:</strong> Forte | <strong>Efeito no QI:</strong> +2-4 pontos (se houver deficiência)
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>O que é:</strong> Ácidos graxos essenciais, especialmente DHA</li>
            <li><strong>Como funciona:</strong> Componente estrutural de neurônios (60% do cérebro é gordura)</li>
            <li><strong>Evidência:</strong> Múltiplos estudos mostram melhoria em memória e função cognitiva</li>
            <li><strong>Dose recomendada:</strong> 1-2g de EPA+DHA diariamente</li>
            <li><strong>Fontes naturais:</strong> Peixes gordurosos (salmão, sardinha), nozes, sementes de linhaça</li>
            <li><strong>Quando ajuda:</strong> Especialmente se dieta é baixa em ômega-3</li>
            <li><strong>Segurança:</strong> Geralmente segura, pode afinar sangue em altas doses</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Creatina</h3>
          <p className="mb-4">
            <strong>Evidência:</strong> Forte | <strong>Efeito:</strong> Melhora memória de trabalho (+1-3 pontos)
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>O que é:</strong> Composto que fornece energia para células</li>
            <li><strong>Como funciona:</strong> Aumenta ATP (energia) no cérebro</li>
            <li><strong>Evidência:</strong> Estudos mostram melhoria em testes cognitivos, especialmente em vegetarianos</li>
            <li><strong>Dose recomendada:</strong> 3-5g diariamente</li>
            <li><strong>Fontes naturais:</strong> Carnes, peixes</li>
            <li><strong>Quando ajuda:</strong> Mais eficaz em vegetarianos (baixa ingestão natural)</li>
            <li><strong>Segurança:</strong> Muito segura, amplamente estudada</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Cafeína + L-Theanina</h3>
          <p className="mb-4">
            <strong>Evidência:</strong> Forte | <strong>Efeito:</strong> Melhora atenção e foco temporariamente
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>O que é:</strong> Combinação de cafeína (estimulante) e L-theanina (relaxante)</li>
            <li><strong>Como funciona:</strong> Cafeína aumenta alerta, L-theanina reduz ansiedade/efeitos colaterais</li>
            <li><strong>Evidência:</strong> Melhora atenção, tempo de reação, memória de trabalho</li>
            <li><strong>Dose recomendada:</strong> 100-200mg cafeína + 100-200mg L-theanina</li>
            <li><strong>Fontes naturais:</strong> Café, chá verde (contém ambos)</li>
            <li><strong>Limitação:</strong> Efeito temporário (horas), não aumenta QI permanente</li>
            <li><strong>Segurança:</strong> Segura em doses moderadas</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Vitamina B12 (se deficiente)</h3>
          <p className="mb-4">
            <strong>Evidência:</strong> Forte | <strong>Efeito:</strong> Previne declínio, pode melhorar se houver deficiência
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>O que é:</strong> Vitamina essencial para função neural</li>
            <li><strong>Como funciona:</strong> Essencial para síntese de mielina e neurotransmissores</li>
            <li><strong>Evidência:</strong> Deficiência causa declínio cognitivo, suplementação reverte</li>
            <li><strong>Dose recomendada:</strong> 2.4mcg diariamente (mais se deficiente)</li>
            <li><strong>Fontes naturais:</strong> Carnes, peixes, laticínios, ovos</li>
            <li><strong>Quando ajuda:</strong> Apenas se houver deficiência (comum em vegetarianos/veganos)</li>
            <li><strong>Segurança:</strong> Muito segura, excesso é excretado</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Suplementos com Evidência Moderada</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">5. Bacopa Monnieri</h3>
          <p className="mb-4">
            <strong>Evidência:</strong> Moderada | <strong>Efeito:</strong> Melhora memória (+1-2 pontos)
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>O que é:</strong> Erva usada na medicina ayurvédica</li>
            <li><strong>Como funciona:</strong> Pode aumentar neurotransmissores, reduzir ansiedade</li>
            <li><strong>Evidência:</strong> Alguns estudos mostram melhoria em memória, especialmente em idosos</li>
            <li><strong>Dose recomendada:</strong> 300-600mg diariamente (extrato padronizado)</li>
            <li><strong>Limitação:</strong> Efeitos levam semanas para aparecer</li>
            <li><strong>Segurança:</strong> Geralmente segura, pode causar náusea</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">6. Rhodiola Rosea</h3>
          <p className="mb-4">
            <strong>Evidência:</strong> Moderada | <strong>Efeito:</strong> Reduz fadiga mental, melhora atenção
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>O que é:</strong> Adaptógeno (ajuda corpo a lidar com estresse)</li>
            <li><strong>Como funciona:</strong> Modula resposta ao estresse, pode aumentar neurotransmissores</li>
            <li><strong>Evidência:</strong> Estudos mostram redução de fadiga mental, melhoria em atenção</li>
            <li><strong>Dose recomendada:</strong> 200-400mg diariamente</li>
            <li><strong>Limitação:</strong> Efeitos variam entre indivíduos</li>
            <li><strong>Segurança:</strong> Geralmente segura</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">7. Ginkgo Biloba</h3>
          <p className="mb-4">
            <strong>Evidência:</strong> Moderada-Baixa | <strong>Efeito:</strong> Melhoria leve em memória (especialmente idosos)
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>O que é:</strong> Extrato de árvore ginkgo</li>
            <li><strong>Como funciona:</strong> Pode melhorar fluxo sanguíneo cerebral</li>
            <li><strong>Evidência:</strong> Resultados mistos, alguns estudos mostram benefício leve</li>
            <li><strong>Dose recomendada:</strong> 120-240mg diariamente</li>
            <li><strong>Limitação:</strong> Efeitos são leves e inconsistentes</li>
            <li><strong>Segurança:</strong> Pode afinar sangue, interagir com medicamentos</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">8. Curcumina (Açafrão)</h3>
          <p className="mb-4">
            <strong>Evidência:</strong> Moderada | <strong>Efeito:</strong> Pode melhorar memória, reduzir declínio
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>O que é:</strong> Composto ativo do açafrão</li>
            <li><strong>Como funciona:</strong> Anti-inflamatório, pode aumentar BDNF</li>
            <li><strong>Evidência:</strong> Alguns estudos mostram melhoria em memória, especialmente em idosos</li>
            <li><strong>Dose recomendada:</strong> 500-1000mg diariamente (com piperina para absorção)</li>
            <li><strong>Limitação:</strong> Baixa absorção sem piperina</li>
            <li><strong>Segurança:</strong> Geralmente segura</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Suplementos com Evidência Fraca ou Inconsistente</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">9. Piracetam e Racetams</h3>
          <p className="mb-4">
            <strong>Evidência:</strong> Fraca | <strong>Efeito:</strong> Inconsistente
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>O que é:</strong> Primeira classe de "nootrópicos" sintéticos</li>
            <li><strong>Evidência:</strong> Estudos mostram resultados muito inconsistentes</li>
            <li><strong>Problema:</strong> Muitos estudos têm falhas metodológicas</li>
            <li><strong>Conclusão:</strong> Evidência insuficiente para recomendar</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">10. Modafinil</h3>
          <p className="mb-4">
            <strong>Evidência:</strong> Moderada para alerta, não QI | <strong>Status:</strong> Medicamento prescrito
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>O que é:</strong> Medicamento para narcolepsia, usado off-label como "smart drug"</li>
            <li><strong>Efeito:</strong> Aumenta alerta e atenção, mas não aumenta QI</li>
            <li><strong>Problema:</strong> Requer prescrição, pode ter efeitos colaterais</li>
            <li><strong>Conclusão:</strong> Não recomendado para uso recreativo</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Suplementos que NÃO Funcionam (Mitos)</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">11. "Smart Pills" Genéricas</h3>
          <p className="mb-4">
            Muitos produtos no mercado prometem aumentar QI mas têm pouca ou nenhuma evidência:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Produtos com múltiplos ingredientes em doses baixas</li>
            <li>Marketing agressivo mas evidência científica fraca</li>
            <li>Estudos patrocinados pela indústria (viés)</li>
            <li><strong>Conclusão:</strong> Evitar produtos com promessas exageradas</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">12. Suplementos de "Energia Mental"</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Muitos são apenas cafeína disfarçada</li>
            <li>Efeitos temporários, não aumentam QI permanente</li>
            <li>Podem causar dependência e crash</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Princípios Importantes</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Deficiências vs. Otimização</h3>
          <p className="mb-4">
            <strong>Regra de ouro:</strong> Suplementos ajudam mais se você tem deficiência. 
            Se sua dieta já é adequada, benefícios são menores:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Ômega-3: Ajuda muito se dieta é baixa, pouco se já come peixe regularmente</li>
            <li>B12: Essencial se vegetariano/vegano, desnecessário se come carnes</li>
            <li>Ferro: Ajuda se anêmico, pode ser tóxico se não houver deficiência</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Efeitos Temporários vs. Permanentes</h3>
          <p className="mb-4">
            A maioria dos suplementos melhora função cognitiva temporariamente, não aumenta QI permanente:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Temporário:</strong> Cafeína, modafinil (melhoram performance enquanto tomados)</li>
            <li><strong>Permanente (potencial):</strong> Ômega-3, nutrientes essenciais (se houver deficiência)</li>
            <li><strong>Importante:</strong> QI permanente aumenta com treino, educação, não suplementos</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Dosagem e Qualidade</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Dosagem adequada:</strong> Muitos produtos têm doses muito baixas</li>
            <li><strong>Qualidade:</strong> Escolher marcas confiáveis, verificar certificações</li>
            <li><strong>Forma:</strong> Alguns suplementos precisam de co-fatores para absorção</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Interações e Segurança</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Interações medicamentosas:</strong> Sempre verificar com médico</li>
            <li><strong>Efeitos colaterais:</strong> Mesmo suplementos "naturais" podem ter efeitos</li>
            <li><strong>Gravidez/amamentação:</strong> Muitos suplementos não são seguros</li>
            <li><strong>Condições médicas:</strong> Alguns podem piorar condições existentes</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Stack Recomendado (Baseado em Evidência)</h2>
          <div className="bg-primary/10 p-6 rounded-lg my-6 border-l-4 border-primary">
            <h3 className="text-xl font-bold mb-4">Para Maioria das Pessoas</h3>
            <ul className="space-y-2">
              <li><strong>Ômega-3:</strong> 1-2g EPA+DHA diariamente (se não come peixe regularmente)</li>
              <li><strong>Vitamina D:</strong> 1000-2000 UI diariamente (se baixa exposição solar)</li>
              <li><strong>Multivitamínico de qualidade:</strong> Para garantir nutrientes essenciais</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              <strong>Nota:</strong> Isso assume dieta já equilibrada. Se houver deficiências específicas 
              (B12, ferro, etc.), adicionar conforme necessário após exames médicos.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que Realmente Aumenta QI?</h2>
          <p className="mb-4">
            É importante entender que suplementos têm papel limitado. O que realmente aumenta QI:
          </p>
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4">Métodos Comprovados (em ordem de eficácia)</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Educação formal:</strong> Cada ano adicional = +1-3 pontos de QI</li>
              <li><strong>Treino cognitivo:</strong> N-back, xadrez, etc. = +3-7 pontos</li>
              <li><strong>Exercício físico:</strong> Regular = +2-4 pontos</li>
              <li><strong>Nutrição adequada:</strong> Dieta equilibrada = +2-5 pontos (se havia deficiências)</li>
              <li><strong>Suplementos:</strong> Apenas se houver deficiências = +1-3 pontos</li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            Alguns suplementos podem melhorar função cognitiva, especialmente se houver deficiências 
            nutricionais. Os com melhor evidência são: ômega-3, creatina, cafeína+L-theanina, e 
            vitaminas/minerais se deficientes.
          </p>
          <p className="mb-4">
            No entanto, suplementos têm papel limitado. Eles não são "pílulas mágicas" que aumentam 
            QI dramaticamente. O que realmente aumenta QI é: educação, treino cognitivo, exercício, 
            nutrição adequada (através de dieta), sono e redução de estresse.
          </p>
          <p className="mb-4">
            Use suplementos como complemento, não como substituto de métodos comprovados. E sempre 
            consulte um médico antes de começar qualquer regime de suplementos.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Meça Seu QI Real</h3>
          <p className="text-muted-foreground mb-6">
            Antes de considerar suplementos, descubra seu QI atual. Faça nosso teste científico 
            completo e estabeleça sua linha de base. Métodos comprovados (educação, treino, exercício) 
            são mais eficazes que suplementos.
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
            {getRelatedArticles("suplementos-que-melhoram-qi", 3).map((article) => (
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

export default SuplementosQueMelhoramQI;

