import { Zap, ArrowRight, BookOpen, CheckCircle2, Lightbulb } from "lucide-react";
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

const TesteQIGratuitoSemCadastro = () => {
  const navigate = useNavigate();
  const articleUrl = "https://bomqi.com.br/blog/teste-qi-gratuito-sem-cadastro";
  const articleTitle = "Teste de QI Gratuito Sem Cadastro: Faça Agora em 2026";
  const articleDescription = "Teste de QI gratuito sem cadastro complicado. Saiba como funciona, o que esperar do resultado e limitações de testes sem registro.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });
  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "teste-qi-gratuito-sem-cadastro",
      publishDate: "2026-06-26",
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
          <span>Teste QI Sem Cadastro</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>26 de Junho de 2026</time>
          <span>•</span>
          <span>10 min de leitura</span>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-yellow-500/20 to-orange-500/5 rounded-lg mb-12 flex items-center justify-center">
          <Zap className="w-24 h-24 text-yellow-500" />
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">Quer um <strong>teste de QI gratuito sem cadastro</strong> longo? A busca cresce porque ninguém quer criar conta em dez sites só para ver um número. Veja como equilibrar praticidade e confiabilidade.</p>
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-900 dark:text-green-100">Sem cadastro não significa sem dados</h3>
                <p className="text-green-800 dark:text-green-200 mb-3 text-sm">Muitos testes pedem nome e e-mail só no final para liberar o resultado completo. O ideal é coletar apenas o necessário e deixar claro a política de privacidade.</p>
                <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                  <li>✓ Início imediato do questionário</li>
                  <li>✓ Dados mínimos para resultado</li>
                  <li>✓ Sem senha ou conta obrigatória</li>
                  <li>✓ Resultado em poucos minutos</li>
                </ul>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Guia completo</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Vantagens do teste sem cadastro</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Menos fricção para começar</li>
            <li>Ideal para quem quer testar rápido</li>
            <li>Menor exposição de dados pessoais</li>
            <li>Funciona bem no celular</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Riscos de testes sem identificação</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Sites que vendem dados a terceiros</li>
            <li>Resultado genérico igual para todos</li>
            <li>Pop-ups e anúncios invasivos</li>
            <li>Impossibilidade de recuperar resultado depois</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-4">Como fazer com segurança</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Prefira sites com HTTPS e política de privacidade</li>
            <li>Evite CPF ou cartão em teste gratuito</li>
            <li>Salve ou anote seu resultado ao final</li>
            <li>Desconfie de promessas de QI 150+ automático</li>
          </ul>
          <Card className="p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Resumo prático</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">Vantagens</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Rapidez</li>
                  <li>✓ Privacidade relativa</li>
                  <li>✓ Baixa barreira de entrada</li>
                  <li>✓ Bom para primeiro contato</li>
                  <li>✓ Funciona em qualquer dispositivo</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-600 mb-2">Limitações</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Sem histórico se não salvar</li>
                  <li>• Alguns sites abusam de dados depois</li>
                  <li>• Qualidade variável</li>
                </ul>
              </div>
            </div>
          </Card>
          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">Próximo passo</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  O jeito mais rápido de colocar tudo isso em prática é fazer o teste agora e comparar seu resultado com as faixas de QI. Leva poucos minutos.
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-12 mb-6">Leia também</h2>
          <p className="text-muted-foreground mb-4"><Link to="/blog/teste-qi-gratis" className="text-primary hover:underline">Teste de QI grátis</Link>,  <Link to="/blog/teste-qi-gratuito-e-confiavel" className="text-primary hover:underline">teste-qi-gratuito-e-confiavel</Link>,  <Link to="/blog/como-saber-meu-qi" className="text-primary hover:underline">como-saber-meu-qi</Link>.</p>
        </div>
        <ArticleFAQ faqs={[
          { question: "Dá para fazer teste de QI sem criar conta?", answer: "Sim. Vários testes permitem começar direto; alguns pedem e-mail só para enviar o resultado." },
          { question: "Teste sem cadastro é menos confiável?", answer: "Não necessariamente. A confiabilidade vem da metodologia, não do cadastro." },
          { question: "Preciso dar CPF para teste grátis?", answer: "Não deveria ser necessário para um teste de triagem. Desconfie se pedirem." },
          { question: "Posso refazer se não salvei o resultado?", answer: "Em geral sim, mas espere alguns meses para não enviesar por memorização." }
        ]} />
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Faça seu teste de QI agora</h3>
          <p className="text-muted-foreground mb-6">Resultado em minutos — gratuito para começar.</p>
          <Button size="lg" className="gap-2" onClick={() => navigate("/teste")}>
            Iniciar Teste <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Continue Lendo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles("teste-qi-gratuito-sem-cadastro", 3).map((article) => (
              <Card key={article.slug} className="p-6 hover:shadow-lg border-2 border-primary/20">
                <Link to={`/blog/${article.slug}`}>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">{article.category}</span>
                  <h3 className="text-lg font-bold mt-3 mb-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{article.description}</p>
                </Link>
              </Card>
            ))}
          </div>
        </div>
        <section className="mt-16"><SocialProofCarousel /></section>
      </article>
      <Footer />
    </div>
  );
};

export default TesteQIGratuitoSemCadastro;
