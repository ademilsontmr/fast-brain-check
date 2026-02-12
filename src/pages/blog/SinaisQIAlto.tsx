import { Brain, ArrowRight, Lightbulb, BookOpen, Clock, Zap, Activity, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { useState } from "react";

const SinaisQIAlto = () => {
    const navigate = useNavigate();

    const articleUrl = "https://bomqi.com.br/blog/sinais-qi-alto";
    const articleTitle = "Sinais de QI Alto: 15 Características de Pessoas Inteligentes";
    const articleDescription = "Descubra os sinais mais comuns de QI alto. Características comportamentais, cognitivas e emocionais que indicam inteligência acima da média.";
    const publishDate = "2025-01-15";
    const modifiedDate = "2025-01-15";

    useSEO({
        title: "Sinais de QI Alto: 15 Características de Pessoas Inteligentes",
        description: articleDescription,
        url: articleUrl,
    keywords: "sinais QI alto, características QI alto, sintomas inteligência alta, indicadores QI alto, traços QI alto, sinais inteligência superior, características pessoas inteligentes, como saber QI alto, identificar QI alto, sinais inteligência",
  });

    useStructuredData([
        {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": articleTitle,
            "description": articleDescription,
            "image": "https://bomqi.com.br/favicon-brain-icon.png",
            "datePublished": publishDate,
            "dateModified": modifiedDate,
            "author": {
                "@type": "Organization",
                "name": "Equipe Bom QI"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Equipe Bom QI",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://bomqi.com.br/favicon-brain-icon.png"
                }
            }
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
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": articleTitle,
                    "item": articleUrl
                }
            ]
        }
    ]);

    const [checkedItems, setCheckedItems] = useState<number[]>([]);

    const handleCheck = (index: number) => {
        if (checkedItems.includes(index)) {
            setCheckedItems(checkedItems.filter(i => i !== index));
        } else {
            setCheckedItems([...checkedItems, index]);
        }
    };

    const signs = [
        "Curiosidade Insaciável",
        "Adaptabilidade Rápida",
        "Pensamento Abstrato",
        "Autoconsciência Elevada",
        "Preferência por Solidão",
        "Senso de Humor Sofisticado",
        "Aprendizado Rápido",
        "Questionamento de Autoridade",
        "Vocabulário Rico",
        "Pensamento de Longo Prazo",
        "Empatia Cognitiva",
        "Perfeccionismo Seletivo",
        "Padrões de Pensamento",
        "Abertura a Novas Experiências",
        "Procrastinação Criativa"
    ];

    return (
        <div className="min-h-screen bg-background">
            <ArticleHeader />

            <article className="container mx-auto px-4 py-12 max-w-4xl">
                <nav className="text-sm text-muted-foreground mb-6">
                    <Link to="/" className="hover:text-primary">Home</Link>
                    <span className="mx-2">/</span>
                    <Link to="/blog" className="hover:text-primary">Blog</Link>
                    <span className="mx-2">/</span>
                    <span>Sinais de QI alto</span>
                </nav>

                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Sinais de QI Alto: 15 Características de Pessoas Inteligentes
                </h1>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                    <time>Janeiro 2025</time>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                        <Activity className="w-4 h-4" />
                        Leitura de 8 min
                    </span>
                </div>

                <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
                    <Zap className="w-24 h-24 text-primary" />
                </div>

                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-muted-foreground mb-8">
                        Pessoas com QI alto frequentemente apresentam características comportamentais e cognitivas
                        distintas. Embora cada indivíduo seja único, a ciência (psicometria e neurociência) identificou padrões comuns que indicam
                        inteligência fluida e cristalizada acima da média.
                    </p>

                    <div className="bg-muted/50 p-6 rounded-xl border border-border mb-12">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-primary" />
                            Checklist Interativo: Quantos sinais você tem?
                        </h3>
                        <p className="text-sm text-muted-foreground mb-6">
                            Marque as características que você identifica em si mesmo enquanto lê o artigo.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                            {signs.map((sign, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleCheck(index)}
                                    className={`
                                        p-3 rounded-lg border cursor-pointer transition-all flex items-center gap-3
                                        ${checkedItems.includes(index)
                                            ? 'bg-primary/10 border-primary text-primary font-medium'
                                            : 'bg-background border-border hover:border-primary/50'
                                        }
                                    `}
                                >
                                    <div className={`
                                        w-5 h-5 rounded border flex items-center justify-center transition-colors
                                        ${checkedItems.includes(index) ? 'bg-primary border-primary' : 'border-muted-foreground'}
                                    `}>
                                        {checkedItems.includes(index) && <Check className="w-3.5 h-3.5 text-white" />}
                                    </div>
                                    {sign}
                                </div>
                            ))}
                        </div>
                        <div className="bg-background p-4 rounded-lg border border-border text-center">
                            <span className="text-lg font-bold text-primary">
                                Você identificou {checkedItems.length} de {signs.length} sinais
                            </span>
                            <p className="text-sm text-muted-foreground mt-1">
                                {checkedItems.length > 10 ? "Impressionante! Você apresenta muitas características de alta aptidão cognitiva." :
                                    checkedItems.length > 5 ? "Você tem vários traços comuns em pessoas inteligentes." :
                                        "Continue lendo para entender melhor cada sinal."}
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6">1. Curiosidade Insaciável</h2>
                    <p className="mb-4">
                        Pessoas com QI alto demonstram curiosidade constante sobre o mundo. Fazem perguntas profundas,
                        buscam entender o "porquê" das coisas e têm sede de conhecimento em múltiplas áreas. Essa
                        curiosidade não é superficial - elas querem compreender mecanismos, causas e conexões.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
                        <p className="text-sm m-0">
                            <strong>O que diz a ciência:</strong> O traço de personalidade "Abertura à Experiência" é o que mais se correlaciona com o QI (r=0.30). Pessoas abertas busquem novelties cognitivas, o que alimenta o desenvolvimento intelectual contínuo.
                        </p>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6">2. Adaptabilidade Rápida</h2>
                    <p className="mb-4">
                        A capacidade de se adaptar rapidamente a novas situações é um sinal forte de inteligência.
                        Pessoas com QI alto aprendem novos sistemas, ajustam-se a mudanças e encontram soluções
                        criativas para problemas inesperados com facilidade.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">3. Pensamento Abstrato</h2>
                    <p className="mb-4">
                        Facilidade com conceitos abstratos, metáforas complexas e pensamento simbólico indica QI
                        elevado. Essas pessoas conseguem trabalhar com ideias que não têm representação física
                        concreta e fazer conexões entre conceitos aparentemente não relacionados.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">4. Autoconsciência Elevada (Metacognição)</h2>
                    <p className="mb-4">
                        Pessoas inteligentes tendem a ter alta metacognição - consciência sobre seus próprios
                        processos de pensamento. Reconhecem suas limitações, identificam lacunas no conhecimento
                        e são capazes de avaliar criticamente suas próprias ideias.
                    </p>
                    <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500 mb-6">
                        <p className="text-sm m-0">
                            <strong>Nota Interessante:</strong> Oposição ao <em>Efeito Dunning-Kruger</em>. Enquanto pessoas menos competentes tendem a superestimar suas habilidades, pessoas com alto QI frequentemente subestimam sua competência relativa, pois assumem que tarefas fáceis para elas também são fáceis para os outros.
                        </p>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6">5. Preferência por Solidão</h2>
                    <p className="mb-4">
                        Estudos mostram que pessoas com QI alto frequentemente preferem passar tempo sozinhas.
                        Não por serem antissociais, mas porque valorizam tempo para reflexão profunda, leitura
                        e desenvolvimento de ideias complexas. A "Teoria da Savana" da psicologia evolutiva sugere que pessoas mais inteligentes dependem menos da interação social para o bem-estar.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">6. Senso de Humor Sofisticado</h2>
                    <p className="mb-4">
                        Humor inteligente, que envolve ironia, sarcasmo sutil e referências culturais complexas,
                        está correlacionado com QI alto. A capacidade de criar e apreciar piadas que exigem
                        múltiplas camadas de compreensão indica inteligência verbal e velocidade de processamento elevadas.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">7. Aprendizado Rápido</h2>
                    <p className="mb-4">
                        A velocidade com que alguém domina novas habilidades é um indicador forte de inteligência (fator *g*).
                        Pessoas com QI alto frequentemente aprendem conceitos complexos rapidamente, fazem conexões
                        entre informações novas e conhecimento prévio, e aplicam aprendizados em contextos diferentes.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">8. Questionamento de Autoridade</h2>
                    <p className="mb-4">
                        Pessoas inteligentes tendem a questionar informações, mesmo quando vêm de fontes autoritativas.
                        Não aceitam ideias cegamente, buscam evidências e formam opiniões baseadas em análise crítica
                        ao invés de conformidade social.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">9. Vocabulário Rico</h2>
                    <p className="mb-4">
                        Um vocabulário extenso e preciso é um dos sinais mais confiáveis de QI alto cristalizado. Pessoas
                        inteligentes usam palavras específicas para expressar nuances de significado e apreciam
                        a precisão na comunicação.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">10. Pensamento de Longo Prazo</h2>
                    <p className="mb-4">
                        A capacidade de pensar em consequências futuras, planejar com antecedência e adiar
                        gratificação imediata está correlacionada com inteligência. Pessoas com QI alto frequentemente
                        tomam decisões baseadas em objetivos de longo prazo.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">11. Empatia Cognitiva</h2>
                    <p className="mb-4">
                        Embora inteligência emocional e QI sejam diferentes, pessoas com QI alto frequentemente
                        demonstram forte empatia cognitiva - a capacidade de entender perspectivas diferentes e
                        antecipar como outros pensam ("Teoria da Mente").
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">12. Perfeccionismo Seletivo</h2>
                    <p className="mb-4">
                        Pessoas inteligentes tendem a ser perfeccionistas em áreas que valorizam, mas pragmáticas
                        em outras. Reconhecem onde a excelência importa e onde "bom o suficiente" é adequado, otimizando seus recursos mentais.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">13. Padrões de Pensamento</h2>
                    <p className="mb-4">
                        Facilidade em identificar padrões - sejam matemáticos, linguísticos ou sociais - é um
                        sinal forte de inteligência fluida. Pessoas com QI alto veem conexões lógicas e causalidades que outros não percebem.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">14. Abertura a Novas Experiências</h2>
                    <p className="mb-4">
                        Pessoas inteligentes tendem a ser abertas a novas ideias, experiências e perspectivas.
                        Buscam ativamente situações que desafiam suas crenças e expandem sua compreensão do mundo.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">15. Procrastinação Criativa</h2>
                    <p className="mb-4">
                        Curiosamente, pessoas com QI alto às vezes procrastinam - não por preguiça, mas porque
                        estão processando informações em segundo plano ou esperando o momento ideal para máxima
                        criatividade e produtividade.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
                    <p className="mb-4">
                        É importante lembrar que esses sinais são indicadores, não provas definitivas. Pessoas
                        podem ter QI alto sem demonstrar todas essas características, e vice-versa. A inteligência
                        é multifacetada e se manifesta de formas diferentes em cada indivíduo.
                    </p>
                    <p className="mb-4">
                        Se você se identificou com vários desses sinais, pode ter QI acima da média. A única
                        forma de confirmar é através de um teste de QI validado com normas estatísticas robustas.
                    </p>
                </div>

                <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                    <h3 className="text-2xl font-bold mb-4">Descubra Seu QI Atual</h3>
                    <p className="text-muted-foreground mb-6">
                        Quer saber seu nível atual de inteligência? Faça nosso teste de QI em apenas 3 minutos
                        e descubra seu potencial cognitivo.
                    </p>
                    <Link to="/teste">
                        <Button size="lg" className="gap-2">
                            Fazer o Teste Agora
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </Link>
                </div>

                <div className="mt-16">
                    <div className="flex items-center gap-3 mb-6">
                        <BookOpen className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl md:text-3xl font-bold">Continue Lendo</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {getRelatedArticles("sinais-qi-alto", 3).map((article) => (
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

export default SinaisQIAlto;
