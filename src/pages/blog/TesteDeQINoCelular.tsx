import { Smartphone, Wifi, ArrowRight, CheckCircle2, AlertTriangle, Battery } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleLeadAdSense from "@/components/ArticleLeadAdSense";
import ArticleFAQ from "@/components/ArticleFAQ";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import { Card } from "@/components/ui/card";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const publishDate = "2026-11-13";

const TesteDeQINoCelular = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/teste-de-qi-no-celular";
  const articleTitle = "Teste de QI no Celular: Android e iPhone Sem Perder Precisão";
  const articleDescription =
    "Maioria do tráfego é mobile. Veja como fazer teste de QI no celular com foco, Wi‑Fi estável e sem confundir app com site.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords:
      "teste de qi no celular, teste qi celular, teste de qi android, teste de qi iphone, teste qi mobile",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "teste-de-qi-no-celular",
      publishDate,
      modifiedDate: publishDate,
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
          <Link to="/blog/teste-de-qi" className="hover:text-primary">Teste de QI</Link>
          <span className="mx-2">/</span>
          <span>No celular</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time dateTime={publishDate}>13 de Novembro de 2026</time>
          <span>•</span>
          <span>14 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-sky-500/20 to-blue-500/10 rounded-lg mb-12 flex items-center justify-center">
          <Smartphone className="w-24 h-24 text-sky-600" />
        </div>

        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            Mais de <strong>60% das visitas</strong> a sites de teste cognitivo vêm do celular. Fazer{" "}
            <strong>teste de QI no celular</strong> é válido se o layout for responsivo e você evitar interrupções. Este
            guia não repete{" "}
            <Link to="/blog/teste-qi-online-guia-completo" className="text-primary hover:underline">
              o guia online completo
            </Link>{" "}
            — só fala de <strong>dispositivo</strong>.
          </p>

          <div className="not-prose bg-muted/50 border rounded-lg p-5 my-6 text-sm text-muted-foreground">
            <strong>Resumo:</strong> celular funciona para teste de QI web se você controlar distrações, tamanho da
            figura e conexão. App de loja ≠ teste normatizado; navegador (como BomQI) evita instalar mais um programa.
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Android vs iPhone: o que muda de verdade</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-2 pr-4">Fator</th>
                  <th className="py-2 pr-4">Android</th>
                  <th className="py-2">iPhone (Safari)</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-2 pr-4 font-medium text-foreground">Tela pequena</td>
                  <td className="py-2 pr-4">Varia muito por fabricante</td>
                  <td className="py-2">Zoom do Safari ajuda figuras</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-medium text-foreground">Notificações</td>
                  <td className="py-2 pr-4">Modo foco / não perturbar</td>
                  <td className="py-2">Foco ou silencioso</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-medium text-foreground">Aba em segundo plano</td>
                  <td className="py-2 pr-4">Pode recarregar se RAM cheia</td>
                  <td className="py-2">Evite trocar de app no meio</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium text-foreground">Teclado virtual</td>
                  <td className="py-2 pr-4">Raro em QI visual</td>
                  <td className="py-2">Mesmo — priorize testes visuais</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Checklist antes de começar</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Modo “não perturbe” 5–10 min</li>
            <li>Tela na horizontal se as figuras forem pequenas</li>
            <li>Wi‑Fi ou 4G estável — <Wifi className="inline w-4 h-4" /> evita perder progresso</li>
            <li>Brilho confortável; sol na tela distrai</li>
            <li>Bateria acima de 20% — <Battery className="inline w-4 h-4" /> evita desligar no meio</li>
          </ul>

          <div className="not-prose bg-amber-50 dark:bg-amber-950/20 border border-amber-200 rounded-lg p-5 my-8 flex gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
            <p className="text-sm text-amber-900 dark:text-amber-100 m-0">
              Pop-up de “permitir notificações” ou cookie no meio do teste quebra foco. Aceite ou recuse antes da
              primeira questão — não no item 15 de 30.
            </p>
          </div>


          <h2 className="text-3xl font-bold mt-12 mb-6">Acessibilidade e leitura na tela</h2>
          <p className="text-muted-foreground mb-4">
            Se o enunciado for longo, aumentar fonte no sistema (Android: tamanho da fonte; iOS: Texto maior) costuma
            ser melhor que zoom que corta botões. Teste de QI visual depende de contraste: modo escuro com brilho baixo
            pode esconder detalhes em matrizes — ajuste antes de cronometrar mentalmente.
          </p>
          <p className="text-muted-foreground mb-6">
            Quem busca <strong>teste de QI gratuito rápido</strong> no celular deve ver{" "}
            <Link to="/blog/teste-de-qi-gratuito-rapido" className="text-primary hover:underline">
              duração e número de itens
            </Link>
            : no mobile, 3–8 minutos é mais realista que 30 itens no desktop com duas abas abertas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">App vs navegador</h2>
          <p className="text-muted-foreground mb-4">
            Apps de “treino cerebral” não são necessariamente teste de QI normatizado. O BomQI funciona no{" "}
            <strong>navegador</strong>, sem instalar — útil para quem não quer mais um app na memória. Comparativo de apps
            está em{" "}
            <Link to="/blog/top-15-jogos-apps-treinar-cerebro" className="text-primary hover:underline">
              jogos e apps para o cérebro
            </Link>{" "}
            (outro objetivo: treino, não score).
          </p>

          <div className="not-prose bg-green-50 dark:bg-green-950/20 border border-green-200 rounded-lg p-6 my-8">
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
              <div className="text-sm text-green-800 dark:text-green-200">
                <p className="font-bold text-green-900 dark:text-green-100 mb-2">Por que BomQI no celular</p>
                <ul className="list-disc pl-4 space-y-1 m-0">
                  <li>Layout responsivo sem instalar app</li>
                  <li>Pode começar sem cadastro prévio — veja{" "}
                    <Link to="/blog/teste-de-qi-sem-cadastro" className="underline">sem cadastro</Link>
                  </li>
                  <li>Resultado completo após pagamento (PIX); prévia do nível na sessão — não é laudo clínico</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Erros que derrubam o score no mobile</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
            <li>Responder com o polegar enquanto caminha — erro por pressa, não por lógica</li>
            <li>Notificação de WhatsApp no meio da série de padrões</li>
            <li>Modo economia de bateria limitando refresh da página</li>
            <li>Testar no metrô com conexão instável e recarregar no meio</li>
          </ul>

          <Button size="lg" className="gap-2 not-prose my-6" onClick={() => navigate("/teste")}>
            Abrir teste no celular <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "O score muda entre celular e computador?",
              answer:
                "Pode variar levemente por distração ou tamanho da tela. O importante é condições semelhantes.",
            },
            {
              question: "Ad block no mobile afeta o site?",
              answer: "Pode bloquear scripts. Desative só se o teste não carregar; não é obrigatório para o BomQI.",
            },
            {
              question: "Este artigo compete com ‘teste rápido’?",
              answer: "Não: rápido fala de duração; celular fala de hardware e hábito.",
            },
            {
              question: "Chrome no Android ou Safari no iPhone — qual usar?",
              answer:
                "O navegador padrão atualizado costuma bastar. Evite navegadores muito antigos ou que bloqueiam JavaScript.",
            },
            {
              question: "Tablet conta como celular?",
              answer:
                "Sim para hábitos (distração, tela). Tablets grandes aproximam do desktop e podem melhorar leitura de figuras.",
            },
            {
              question: "Preciso girar a tela?",
              answer:
                "Só se os itens visuais ficarem pequenos. Muitos testes web já adaptam colunas no modo retrato.",
            },
          ]}
        />

        <SocialProofCarousel />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {getRelatedArticles("teste-de-qi-no-celular", 3).map((a) => (
            <Card key={a.slug} className="p-6 border-2 border-primary/20">
              <Link to={`/blog/${a.slug}`}>
                <h3 className="font-bold">{a.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{a.description}</p>
              </Link>
            </Card>
          ))}
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default TesteDeQINoCelular;
