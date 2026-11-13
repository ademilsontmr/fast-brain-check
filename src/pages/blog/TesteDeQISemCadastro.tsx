import { UserX, Shield, ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
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

const TesteDeQISemCadastro = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/teste-de-qi-sem-cadastro";
  const articleTitle = "Teste de QI Sem Cadastro: Privacidade, Dados e O Que Esperar (2026)";
  const articleDescription =
    "Teste de QI sem cadastro: o que sites pedem de verdade (e-mail, login, PIX), LGPD, riscos e como fazer o BomQI sem criar conta antes do questionário.";

  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords:
      "teste de qi sem cadastro, teste qi sem login, teste de qi sem email, teste qi sem registro, teste de quociente de inteligência sem cadastro",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "teste-de-qi-sem-cadastro",
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
          <span>Sem cadastro</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time dateTime={publishDate}>13 de Novembro de 2026</time>
          <span>•</span>
          <span>14 min de leitura</span>
        </div>

        <div className="w-full h-64 bg-gradient-to-br from-slate-500/20 to-zinc-500/10 rounded-lg mb-12 flex items-center justify-center gap-4">
          <UserX className="w-20 h-20 text-slate-600" />
          <Shield className="w-20 h-20 text-primary" />
        </div>

        <div className="prose prose-lg max-w-none">
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground mb-8">
            Pesquisar <strong>teste de QI sem cadastro</strong> costuma significar uma coisa simples:{" "}
            <strong>começar o questionário sem criar usuário e senha</strong>. Só que muitos sites usam essa promessa na
            capa e, minutos depois, bloqueiam o PDF atrás do e-mail, do cartão ou de login social. Este guia explica os{" "}
            <strong>níveis reais de “cadastro”</strong>, o que a LGPD diz sobre dados mínimos, sinais de alerta e como o
            BomQI se posiciona — sem repetir o artigo{" "}
            <Link to="/blog/teste-qi-gratuito-e-confiavel" className="text-primary hover:underline">
              teste gratuito e confiável
            </Link>{" "}
            (foco em qualidade do teste, não em privacidade).
          </p>

          <div className="not-prose bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Resumo</h2>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ “Sem cadastro” ≠ necessariamente sem dados pessoais</li>
                  <li>✓ E-mail no fim ainda é coleta — leia a política de privacidade</li>
                  <li>✓ BomQI: você inicia o teste direto; etapas extras vêm depois do questionário</li>
                  <li>✓ BomQI é <strong>pago</strong> — para opções grátis de outros sites, veja{" "}
                    <Link to="/blog/teste-de-qi-gratuito" className="underline font-medium">
                      teste de QI gratuito
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">O que “sem cadastro” deveria significar</h2>
          <p className="text-muted-foreground mb-4">
            Em um teste sério, cadastro é a criação de <strong>conta persistente</strong> (login, senha, histórico salvo na
            nuvem). Um fluxo honesto “sem cadastro” permite:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Abrir o site e clicar em “começar” sem tela de registro</li>
            <li>Responder questões com o mínimo de fricção</li>
            <li>Ver ao menos uma <strong>prévia</strong> do resultado antes de pedir dados extras</li>
            <li>Informar claramente se e por que pedirão e-mail, telefone ou pagamento depois</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Isso é diferente de <strong>anônimo total</strong> (sem cookies, sem IP logado) — quase nenhum site comercial
            oferece isso. Para entender confiabilidade do instrumento, não só privacidade, combine com{" "}
            <Link to="/blog/teste-qi-confiavel" className="text-primary hover:underline">como escolher teste confiável</Link>.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Níveis de cadastro nos testes de QI online</h2>
          <div className="overflow-x-auto my-6 not-prose">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted/50">
                <tr className="text-left">
                  <th className="p-3 font-semibold">Nível</th>
                  <th className="p-3 font-semibold">O que o usuário vê</th>
                  <th className="p-3 font-semibold">Risco comum</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-t">
                  <td className="p-3 font-medium text-foreground">0 — Entrada direta</td>
                  <td className="p-3">Teste abre sem login</td>
                  <td className="p-3">Paywall escondido no resultado</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium text-foreground">1 — E-mail no final</td>
                  <td className="p-3">“Digite e-mail para receber QI”</td>
                  <td className="p-3">Lista de marketing / assinatura forçada</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium text-foreground">2 — Login social</td>
                  <td className="p-3">Google/Facebook antes do score</td>
                  <td className="p-3">Permissões de perfil além do necessário</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium text-foreground">3 — Conta + assinatura</td>
                  <td className="p-3">App com plano mensal</td>
                  <td className="p-3">Cobrança recorrente difícil de cancelar</td>
                </tr>
              </tbody>
            </table>
          </div>


          <h2 className="text-3xl font-bold mt-12 mb-6">Dados que sites costumam pedir (e por quê)</h2>
          <h3 className="text-2xl font-bold mt-8 mb-4">E-mail e nome</h3>
          <p className="text-muted-foreground mb-4">
            Servem para enviar resultado, recuperar sessão ou vender upgrade. Na LGPD, precisam de <strong>base legal</strong>{" "}
            e finalidade clara na{" "}
            <Link to="/politica-privacidade" className="text-primary hover:underline">política de privacidade</Link>. Se o
            site pede e-mail antes de mostrar qualquer pergunta, desconfie.
          </p>
          <h3 className="text-2xl font-bold mt-8 mb-4">Idade e escolaridade</h3>
          <p className="text-muted-foreground mb-4">
            Alguns testes usam para comparar com normas por faixa etária. Útil se explicado; inútil se só alimenta funil de
            anúncios. Avaliação formal usa muito mais contexto — veja{" "}
            <Link to="/blog/teste-qi-oficial" className="text-primary hover:underline">teste de QI oficial</Link>.
          </p>
          <h3 className="text-2xl font-bold mt-8 mb-4">Pagamento antes do laudo</h3>
          <p className="text-muted-foreground mb-6">
            Não é “cadastro”, mas é barreira semelhante. O BomQI é transparente: você faz o teste, vê faixa de desempenho e
            pode desbloquear relatório completo via PIX — descrito no artigo{" "}
            <Link to="/blog/teste-qi-gratuito-e-confiavel" className="text-primary hover:underline">
              gratuito e confiável
            </Link>
            . Compare preços formais em{" "}
            <Link to="/blog/quanto-custa-teste-de-qi" className="text-primary hover:underline">quanto custa teste de QI</Link>.
          </p>

          <div className="not-prose bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8 flex gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
            <div className="text-sm text-amber-900 dark:text-amber-100">
              <p className="font-bold mb-2">Sinais de alerta</p>
              <ul className="list-disc pl-5 space-y-1 m-0">
                <li>Promessa “100% anônimo” mas formulário pede CPF</li>
                <li>Resultado só após instalar app com permissões amplas</li>
                <li>Sem política de privacidade ou termos em português</li>
                <li>Assinatura escondida em letras pequenas (modelo MyIQ) — leia{" "}
                  <Link to="/blog/myiq-e-confiavel" className="text-primary hover:underline">MyIQ é confiável?</Link>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Como fazer teste de QI sem cadastro no BomQI</h2>
          <ol className="list-decimal pl-6 text-muted-foreground space-y-3 mb-6">
            <li>Acesse a home ou{" "}
              <Link to="/blog/teste-de-qi-gratuito-rapido" className="text-primary hover:underline">
                guia gratuito rápido
              </Link>{" "}
              e clique em “Fazer o teste”.</li>
            <li>Responda às questões — sem tela de login prévia.</li>
            <li>Veja a prévia do nível; dados adicionais só quando fizer sentido para você (ex.: desbloquear relatório).</li>
            <li>No celular, siga{" "}
              <Link to="/blog/teste-de-qi-no-celular" className="text-primary hover:underline">
                teste de QI no celular
              </Link>{" "}
              para evitar notificações cortando o foco.</li>
          </ol>

          <h2 className="text-3xl font-bold mt-12 mb-6">Sem cadastro × sem pagar × confiável</h2>
          <p className="text-muted-foreground mb-8">
            São três eixos diferentes. Você pode ter teste sem login e ainda assim pagar pelo PDF; pode ser grátis e pedir
            e-mail agressivo; pode ser confiável e pedir cadastro para guardar histórico. Use o{" "}
            <Link to="/blog/teste-de-qi" className="text-primary hover:underline">hub teste de QI</Link> para navegar sem
            misturar tudo numa página só.
          </p>

          <div className="not-prose my-8">
            <Button size="lg" className="gap-2" onClick={() => navigate("/teste")}>
              Iniciar teste sem criar conta antes <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <ArticleFAQ
          faqs={[
            {
              question: "Teste de QI sem cadastro é o mesmo que sem e-mail?",
              answer:
                "Não. Muitos sites deixam você começar sem login, mas exigem e-mail para liberar o número. Isso ainda é coleta de dado pessoal.",
            },
            {
              question: "É ilegal pedir cadastro para teste de QI?",
              answer:
                "Não, desde que haja transparência, consentimento quando necessário e política de privacidade conforme a LGPD.",
            },
            {
              question: "O BomQI guarda meu resultado sem eu pedir?",
              answer:
                "Pode haver armazenamento temporário em sessão para você retomar o funil. Detalhes estão na política de privacidade do site.",
            },
            {
              question: "Posso fazer teste sem cadastro no celular?",
              answer: "Sim, o fluxo é o mesmo no navegador mobile. Veja o guia específico para mobile.",
            },
            {
              question: "URL antiga teste-qi-gratuito-sem-cadastro?",
              answer:
                "Redireciona para este artigo (cadastro e privacidade), não para o guia de confiabilidade.",
            },
            {
              question: "Preciso de cadastro para teste com psicólogo?",
              answer:
                "Haverá prontuário e identificação — é avaliação clínica, não quiz viral. Veja onde fazer no Brasil.",
            },
          ]}
        />

        <SocialProofCarousel />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {getRelatedArticles("teste-de-qi-sem-cadastro", 3).map((a) => (
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

export default TesteDeQISemCadastro;
