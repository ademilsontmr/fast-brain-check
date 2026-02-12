import { Brain, ArrowRight, Lightbulb, BookOpen, Clock, Shield, AlertTriangle, CheckCircle, FileText, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const QIMedioSegurancaTrabalho = () => {
    const navigate = useNavigate();

    const articleUrl = "https://bomqi.com.br/blog/qi-medio-seguranca-trabalho";
    const articleTitle = "QI Médio de Profissionais de Segurança do Trabalho";
    const articleDescription = "Descubra o QI médio de profissionais de segurança do trabalho, as habilidades cognitivas necessárias e como a inteligência impacta a prevenção de acidentes.";
    const publishDate = "2025-01-15";
    const modifiedDate = "2025-01-15";

    useSEO({
        title: "QI Médio de Profissionais de Segurança do Trabalho",
        description: articleDescription,
        url: articleUrl,
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
                "name": "BomQI"
            },
            "publisher": {
                "@type": "Organization",
                "name": "BomQI",
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

    return (
        <div className="min-h-screen bg-background">
            <ArticleHeader />

            <article className="container mx-auto px-4 py-12 max-w-4xl">
                <nav className="text-sm text-muted-foreground mb-6">
                    <Link to="/" className="hover:text-primary">Home</Link>
                    <span className="mx-2">/</span>
                    <Link to="/blog" className="hover:text-primary">Blog</Link>
                    <span className="mx-2">/</span>
                    <span>QI médio de segurança do trabalho</span>
                </nav>

                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    QI Médio de Profissionais de Segurança do Trabalho
                </h1>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                    <time>Janeiro 2025</time>
                    <span>•</span>
                </div>

                <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
                    <Shield className="w-24 h-24 text-primary" />
                </div>

                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-muted-foreground mb-8">
                        Profissionais de segurança do trabalho são guardiões da saúde e bem-estar nas organizações.
                        A profissão exige análise de riscos, conhecimento técnico multidisciplinar e capacidade de
                        implementar sistemas complexos de prevenção. Descubra o QI médio desses profissionais e as
                        habilidades cognitivas essenciais para proteger vidas no ambiente de trabalho.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">QI Médio de Profissionais de Segurança do Trabalho</h2>
                    <p className="mb-4">
                        Estudos sobre inteligência em profissões técnicas indicam que profissionais de segurança
                        do trabalho tendem a ter um QI médio entre <strong>105-115</strong>, acima da média populacional.
                        Essa faixa reflete as demandas cognitivas da profissão, que incluem análise de riscos complexos,
                        compreensão de normas técnicas e desenvolvimento de estratégias preventivas.
                    </p>
                    <p className="mb-4">
                        Engenheiros de segurança do trabalho, que possuem formação superior específica, frequentemente
                        apresentam QI na faixa de 110-120, devido à complexidade técnica e científica de suas atribuições.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">Habilidades Cognitivas Essenciais</h2>
                    <p className="mb-4">
                        <strong>1. Análise de Riscos:</strong> Identificar perigos potenciais, avaliar probabilidades
                        e consequências, e priorizar ações preventivas exige raciocínio analítico sofisticado.
                    </p>
                    <p className="mb-4">
                        <strong>2. Pensamento Sistêmico:</strong> Compreender como diferentes elementos do ambiente
                        de trabalho interagem e podem criar riscos complexos.
                    </p>
                    <p className="mb-4">
                        <strong>3. Resolução de Problemas:</strong> Desenvolver soluções criativas para eliminar ou
                        mitigar riscos sem comprometer a produtividade.
                    </p>
                    <p className="mb-4">
                        <strong>4. Comunicação Eficaz:</strong> Traduzir conceitos técnicos complexos para diferentes
                        públicos, desde operadores até executivos.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">Desenvolvimento Cognitivo na Profissão</h2>
                    <p className="mb-4">
                        A profissão de segurança do trabalho estimula constantemente o desenvolvimento cognitivo:
                    </p>
                    <p className="mb-4">
                        <strong>Aprendizado Multidisciplinar:</strong> Profissionais precisam dominar conhecimentos
                        de engenharia, medicina, psicologia, direito e gestão.
                    </p>
                    <p className="mb-4">
                        <strong>Atualização Constante:</strong> Novas normas, tecnologias e metodologias exigem
                        estudo contínuo e adaptação.
                    </p>
                    <p className="mb-4">
                        <strong>Investigação de Acidentes:</strong> Analisar causas raízes de acidentes desenvolve
                        pensamento crítico e habilidades investigativas.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">Inteligência Prática e Prevenção</h2>
                    <p className="mb-4">
                        Além do QI tradicional, profissionais de segurança do trabalho demonstram alta inteligência
                        prática:
                    </p>
                    <p className="mb-4">
                        <strong>Antecipação de Problemas:</strong> Capacidade de visualizar cenários futuros e
                        identificar riscos antes que se materializem.
                    </p>
                    <p className="mb-4">
                        <strong>Tomada de Decisão:</strong> Equilibrar segurança, custos e operacionalidade em
                        decisões complexas.
                    </p>
                    <p className="mb-4">
                        <strong>Influência e Persuasão:</strong> Convencer gestores e trabalhadores sobre a
                        importância de medidas preventivas.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">Desafios Cognitivos da Área</h2>
                    <p className="mb-4">
                        <strong>Gestão de Múltiplas Variáveis:</strong> Considerar simultaneamente fatores humanos,
                        técnicos, ambientais e organizacionais.
                    </p>
                    <p className="mb-4">
                        <strong>Interpretação de Normas:</strong> Compreender e aplicar legislação complexa e
                        normas técnicas detalhadas.
                    </p>
                    <p className="mb-4">
                        <strong>Análise de Dados:</strong> Interpretar estatísticas de acidentes, indicadores de
                        desempenho e tendências para tomar decisões baseadas em evidências.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">Como a Profissão Desenvolve Inteligência</h2>
                    <p className="mb-4">
                        <strong>Resolução de Problemas Reais:</strong> Cada ambiente de trabalho apresenta desafios
                        únicos que exigem soluções customizadas.
                    </p>
                    <p className="mb-4">
                        <strong>Pensamento Preventivo:</strong> Desenvolver a capacidade de antecipar problemas
                        fortalece o raciocínio prospectivo.
                    </p>
                    <p className="mb-4">
                        <strong>Integração de Conhecimentos:</strong> Aplicar conhecimentos de múltiplas disciplinas
                        desenvolve pensamento interdisciplinar.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">Mapeamento de Habilidades Cognitivas na Segurança</h2>
                    <div className="overflow-x-auto mb-12">
                        <table className="w-full border-collapse text-left text-sm">
                            <thead>
                                <tr className="bg-muted/50 border-b border-border">
                                    <th className="p-4 font-bold">Habilidade Cognitiva</th>
                                    <th className="p-4 font-bold">Aplicação Prática na Segurança</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr>
                                    <td className="p-4 font-medium">Raciocínio Lógico-Dedutivo</td>
                                    <td className="p-4">Investigação de acidentes (Árvore de Causas), identificação de falhas em processos.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">Memória de Trabalho</td>
                                    <td className="p-4">Monitoramento simultâneo de múltiplos indicadores de risco em tempo real.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">Inteligência Espacial</td>
                                    <td className="p-4">Visualização de layouts seguros, rotas de fuga e ergonomia.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">Inteligência Verbal</td>
                                    <td className="p-4">Elaboração de laudos técnicos precisos e treinamentos persuasivos (DDS).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 mb-12">
                        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-amber-600" />
                            Estudo de Caso: O viés da normalidade
                        </h3>
                        <p className="text-sm text-slate-700 dark:text-gray-300">
                            Profissionais com alto QI de segurança conseguem superar o "viés da normalidade" — a tendência humana de subestimar a possibilidade de um desastre. Sua capacidade analítica permite ver anomalias estatísticas sutis que precedem grandes acidentes, atuando antes que a falha ocorra.
                        </p>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6">Perguntas Frequentes</h2>
                    <Accordion type="single" collapsible className="w-full mb-12">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>É necessário ter QI alto para ser Técnico de Segurança?</AccordionTrigger>
                            <AccordionContent>
                                Não é um requisito formal, mas a profissão exige média ou acima da média para lidar com a complexidade das normas e cálculos de risco. O mais importante é a dedicação ao estudo contínuo.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Qual a parte mais difícil cognitivamente da profissão?</AccordionTrigger>
                            <AccordionContent>
                                A gestão de conflitos e a tomada de decisão sob pressão. Decidir parar uma produção por risco iminente exige análise rápida de consequências e firmeza intelectual.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>A profissão melhora o raciocínio?</AccordionTrigger>
                            <AccordionContent>
                                Sim. A necessidade constante de identificar perigos e resolver problemas torna o cérebro mais analítico e observador com o tempo.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
                    <p className="mb-4">
                        Profissionais de segurança do trabalho são especialistas cognitivamente sofisticados que
                        combinam conhecimento técnico com habilidades analíticas e interpessoais. Com um QI médio
                        acima da população geral, eles demonstram que proteger vidas exige inteligência, dedicação
                        e pensamento estratégico.
                    </p>
                    <p className="mb-4">
                        A profissão não apenas requer inteligência, mas também a desenvolve através do aprendizado
                        contínuo, resolução de problemas complexos e aplicação prática de conhecimentos multidisciplinares.
                        Profissionais de segurança do trabalho são exemplos de como a inteligência se manifesta na
                        capacidade de prevenir, proteger e salvar vidas.
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
                        {getRelatedArticles("qi-medio-seguranca-trabalho", 3).map((article) => (
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

export default QIMedioSegurancaTrabalho;
