import { DollarSign, ArrowRight, BookOpen, CheckCircle2, Lightbulb, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleLeadAdSense from "@/components/ArticleLeadAdSense";
import ArticleMidAdSense from "@/components/ArticleMidAdSense";
import ArticleFAQ from "@/components/ArticleFAQ";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const QuantoCustaTesteDeQI = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/quanto-custa-teste-de-qi";
  const articleTitle = "Quanto Custa um Teste de QI no Brasil? Preços Completos 2026";
  const articleDescription =
    "Quanto custa um teste de QI no Brasil em 2026? Compare preços de psicólogo, WAIS, WISC, Mensa e teste online. Veja o que está incluso e o que vale a pena.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "quanto-custa-teste-de-qi",
      publishDate: "2026-07-20",
    })
  );

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>Quanto Custa Teste de QI</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>20 de Julho de 2026</time>
          <span>•</span>
          <span>14 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-emerald-500/20 to-teal-500/5 rounded-lg mb-12 flex items-center justify-center">
          <DollarSign className="w-24 h-24 text-emerald-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            <strong>Quanto custa um teste de QI</strong> no Brasil depende do tipo de avaliação: teste online estruturado, bateria com psicólogo (WAIS/WISC) ou processo Mensa. Em 2026, os valores vão de poucos reais (online) a mais de R$2.000 (clínica completa). Este guia compara preço, precisão e quando cada opção faz sentido.
          </p>

          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resposta rápida — preços médios 2026</h3>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ <strong>Teste online estruturado:</strong> acessível, resultado em minutos</li>
                  <li>✓ <strong>WAIS (adulto) com psicólogo:</strong> R$800 a R$2.500</li>
                  <li>✓ <strong>WISC (crianças):</strong> R$900 a R$3.000</li>
                  <li>✓ <strong>Mensa Brasil:</strong> taxa de inscrição + anuidade se aprovado</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Tabela de preços: teste de QI no Brasil</h2>
          <p className="text-muted-foreground mb-6">
            Valores variam por cidade, experiência do profissional e o que está incluso no laudo. Use a tabela abaixo como referência de mercado em 2026:
          </p>

          <Card className="p-6 my-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 pr-4">Tipo</th>
                  <th className="pb-3 pr-4">Faixa de preço</th>
                  <th className="pb-3 pr-4">Tempo</th>
                  <th className="pb-3">Validade clínica</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Online estruturado</td>
                  <td className="py-3 pr-4">Baixo custo</td>
                  <td className="py-3 pr-4">5–20 min</td>
                  <td className="py-3">Orientação / triagem</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">WAIS-IV (adulto)</td>
                  <td className="py-3 pr-4">R$800–2.500</td>
                  <td className="py-3 pr-4">2–4 h</td>
                  <td className="py-3">Alta (laudo)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">WISC-V (criança)</td>
                  <td className="py-3 pr-4">R$900–3.000</td>
                  <td className="py-3 pr-4">2–4 h</td>
                  <td className="py-3">Alta (escola/AACC)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Neuropsicológica completa</td>
                  <td className="py-3 pr-4">R$1.500–5.000+</td>
                  <td className="py-3 pr-4">várias sessões</td>
                  <td className="py-3">Máxima</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Mensa (seleção)</td>
                  <td className="py-3 pr-4">Taxa + anuidade</td>
                  <td className="py-3 pr-4">~2–3 h</td>
                  <td className="py-3">Só top 2%</td>
                </tr>
              </tbody>
            </table>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">1. Teste de QI online: o caminho mais acessível</h2>
          <p className="text-muted-foreground mb-4">
            Para curiosidade, autoconhecimento ou uma primeira referência, o{" "}
            <Link to="/blog/teste-qi-online-guia-completo" className="text-primary hover:underline">teste de QI online</Link>{" "}
            é o formato com melhor custo-benefício. Você responde questões de raciocínio em poucos minutos e recebe um score interpretável.
          </p>
          <ArticleMidAdSense />
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li><strong>Vantagem:</strong> preço baixo, imediato, sem agendamento</li>
            <li><strong>Limite:</strong> não substitui laudo clínico para escola, Justiça ou Mensa</li>
            <li><strong>Ideal para:</strong> adultos e adolescentes que querem saber a faixa aproximada</li>
            <li><strong>Dica:</strong> evite quizzes virais sem método — priorize testes com base em matrizes e lógica</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">2. Avaliação com psicólogo (WAIS / WISC)</h2>
          <p className="text-muted-foreground mb-4">
            O padrão ouro no Brasil é a escala Wechsler:{" "}
            <Link to="/blog/escala-inteligencia-wechsler-wais" className="text-primary hover:underline">WAIS</Link>{" "}
            para adultos e WISC para crianças. O preço inclui aplicação, correção e, em geral, um laudo escrito.
          </p>
          <h3 className="text-2xl font-bold mt-8 mb-4">O que normalmente está incluso</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Anamnese (entrevista inicial)</li>
            <li>Aplicação das subescalas (verbal, execução, memória, velocidade)</li>
            <li>QI total + índices parciais</li>
            <li>Laudo com interpretação e recomendações</li>
            <li>Às vezes: devolutiva oral com o paciente/família</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Por que varia tanto o preço</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Capital vs interior (SP/RJ/DF costumam ser mais caros)</li>
            <li>Tempo de experiência do psicólogo</li>
            <li>Laudo simples vs avaliação neuropsicológica ampla</li>
            <li>Urgência e demanda (lista de espera em clínicas conhecidas)</li>
          </ul>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">Atenção ao “preço baixo demais”</h3>
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  Avaliações clínicas muito baratas podem omitir laudo completo, usar versões desatualizadas ou encurtar demais a bateria. Para uso escolar ou diagnóstico de altas habilidades, exija profissional do CFP e instrumento padronizado.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">3. Mensa Brasil: quanto custa entrar</h2>
          <p className="text-muted-foreground mb-4">
            A{" "}
            <Link to="/blog/teste-mensa-brasil" className="text-primary hover:underline">Mensa</Link>{" "}
            não é um “teste de QI genérico”: é um processo seletivo para o top ~2% da população. Você paga a taxa de inscrição do teste; se aprovado, há anuidade de associado. Não faz sentido pagar Mensa se o objetivo é só “saber o número” — o foco é associação, não laudo clínico.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">4. Avaliação neuropsicológica completa</h2>
          <p className="text-muted-foreground mb-6">
            Quando há suspeita de TDAH, autismo, lesão ou dificuldade de aprendizagem, o psicólogo pode ampliar além do QI: atenção, funções executivas, memória, linguagem. O pacote sobe para R$1.500–5.000+ e costuma exigir várias sessões. É o caminho certo para laudo robusto — e o mais caro.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Online vs clínico: o que vale a pena?</h2>
          <Card className="p-6 my-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-green-600 mb-2">Escolha online se…</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Quer resultado rápido e acessível</li>
                  <li>✓ Busca autoconhecimento / curiosidade</li>
                  <li>✓ Quer comparar com a média populacional</li>
                  <li>✓ Não precisa de laudo para escola ou Justiça</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Escolha clínico se…</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Precisa de laudo formal</li>
                  <li>• Suspeita de altas habilidades / AACC</li>
                  <li>• Avaliação para escola ou processo</li>
                  <li>• Diagnóstico diferencial (TDAH, TEA etc.)</li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Estratégia inteligente</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Muita gente começa com um teste online estruturado. Se o resultado for alto (ex.: 125+) ou houver demanda escolar, aí sim investe no WAIS/WISC. Você evita gastar R$2.000 “só para saber o número”.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que o preço NÃO garante</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Teste caro não “aumenta” seu QI — mede desempenho naquele dia</li>
            <li>QI não é o único preditor de sucesso (veja{" "}
              <Link to="/blog/qi-sucesso-profissional" className="text-primary hover:underline">QI e sucesso profissional</Link>)</li>
            <li>Apps gratuitos virais raramente têm validação psicométrica</li>
            <li>Resultado online e clínico podem diferir 5–15 pontos sem serem “falsos”</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4">
            <Link to="/blog/onde-fazer-teste-qi-brasil" className="text-primary hover:underline">Onde fazer teste de QI no Brasil</Link>,{" "}
            <Link to="/blog/teste-qi-oficial" className="text-primary hover:underline">teste de QI oficial</Link>,{" "}
            <Link to="/blog/como-saber-meu-qi" className="text-primary hover:underline">como saber meu QI</Link> e{" "}
            <Link to="/blog/teste-qi-gratuito-e-confiavel" className="text-primary hover:underline">teste gratuito e confiável</Link>.
          </p>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Quanto custa um teste de QI com psicólogo no Brasil?",
              answer:
                "Em 2026, a faixa típica de WAIS para adultos é R$800 a R$2.500, dependendo da cidade e do laudo. WISC para crianças costuma ficar entre R$900 e R$3.000.",
            },
            {
              question: "Teste de QI online é barato e vale a pena?",
              answer:
                "Sim, para curiosidade e primeira referência. É o melhor custo-benefício, mas não substitui laudo clínico quando a escola ou um processo jurídico exige documento formal.",
            },
            {
              question: "O SUS cobre teste de QI?",
              answer:
                "Avaliações cognitivas no SUS existem em contextos específicos (saúde mental, desenvolvimento infantil), mas acesso a WAIS/WISC completo e rápido é limitado. Muitos pacientes buscam a rede particular.",
            },
            {
              question: "Preciso pagar para saber meu QI?",
              answer:
                "Existem opções online acessíveis e caminhos clínicos mais caros. O essencial é escolher o formato alinhado ao seu objetivo — curiosidade versus laudo.",
            },
            {
              question: "Mensa é mais barato que psicólogo?",
              answer:
                "A taxa de inscrição da Mensa costuma ser menor que um WAIS completo, mas o objetivo é diferente: associação no top 2%, não laudo clínico individual detalhado.",
            },
          ]}
        />

        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Comece pelo caminho mais acessível</h3>
          <p className="text-muted-foreground mb-6">
            Faça seu teste de QI no BomQI — resultado em minutos, sem agendar clínica.
          </p>
          <Button size="lg" className="gap-2" onClick={() => navigate("/teste")}>
            Fazer o Teste Agora <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Continue Lendo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("quanto-custa-teste-de-qi", 3).map((article) => (
              <Card key={article.slug} className="p-6 hover:shadow-lg border-2 border-primary/20">
                <Link to={`/blog/${article.slug}`}>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold mt-3 mb-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{article.description}</p>
                </Link>
              </Card>
            ))}
          </div>
        </div>
        <section className="mt-16">
          <SocialProofCarousel />
        </section>
      </article>
      <Footer />
    </div>
  );
};

export default QuantoCustaTesteDeQI;
