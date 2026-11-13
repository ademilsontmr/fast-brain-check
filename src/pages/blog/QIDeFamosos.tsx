import { useMemo, useState } from "react";
import { Star, ArrowRight, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleLeadAdSense from "@/components/ArticleLeadAdSense";
import ArticleFAQ from "@/components/ArticleFAQ";
import useSEO from "@/hooks/use-seo";
import useStructuredData from "@/hooks/use-structured-data";
import { allBlogArticles } from "@/utils/blogArticles";
import {
  famosoGroups,
  famososArticles,
  FamosoGroupId,
} from "@/utils/famososArticles";

const QIDeFamosos = () => {
  const navigate = useNavigate();
  const [selectedGroup, setSelectedGroup] = useState<FamosoGroupId>("todos");
  const [search, setSearch] = useState("");

  const articleUrl = "https://bomqi.com.br/blog/qi-de-famosos";
  const articleTitle = "QI de Famosos: Índice Completo com 55+ Personalidades em 2026";
  const articleDescription =
    "Descubra estimativas de QI de famosos brasileiros e internacionais: futebol, música, TV, política e ciência. Índice completo atualizado.";

  useSEO({ title: articleTitle, description: articleDescription, url: articleUrl });

  useStructuredData([
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: articleTitle,
      description: articleDescription,
      url: articleUrl,
      isPartOf: { "@type": "WebSite", name: "BomQI", url: "https://bomqi.com.br" },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: famososArticles.length,
        itemListElement: famososArticles.map((article, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `https://bomqi.com.br/blog/${article.slug}`,
          name: `QI de ${article.name}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bomqi.com.br/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://bomqi.com.br/blog" },
        { "@type": "ListItem", position: 3, name: "QI de Famosos", item: articleUrl },
      ],
    },
  ]);

  const articlesWithMeta = useMemo(() => {
    return famososArticles.map((article) => {
      const meta = allBlogArticles.find((a) => a.slug === article.slug);
      return {
        ...article,
        title: meta?.title ?? `Qual é o QI de ${article.name}?`,
        description: meta?.description ?? `Estimativas sobre o QI de ${article.name}.`,
      };
    });
  }, []);

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLowerCase();
    return articlesWithMeta.filter((article) => {
      const matchesGroup = selectedGroup === "todos" || article.group === selectedGroup;
      const matchesSearch =
        !query ||
        article.name.toLowerCase().includes(query) ||
        article.title.toLowerCase().includes(query) ||
        article.slug.includes(query);
      return matchesGroup && matchesSearch;
    });
  }, [articlesWithMeta, selectedGroup, search]);

  const groupCounts = useMemo(() => {
    const counts: Record<FamosoGroupId, number> = {
      todos: famososArticles.length,
      futebol: 0,
      musica: 0,
      tv: 0,
      politica: 0,
      cultura: 0,
      internacional: 0,
    };
    for (const article of famososArticles) {
      counts[article.group]++;
    }
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />
      <article className="container mx-auto px-4 py-12 max-w-6xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>QI de Famosos</span>
        </nav>

        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-semibold">{famososArticles.length} personalidades</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{articleTitle}</h1>
          <ArticleLeadAdSense />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Índice completo de artigos sobre o QI de celebridades brasileiras e internacionais — futebol, música, TV, política e ciência.
          </p>
        </div>

        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="search"
            placeholder="Buscar famoso..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {famosoGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setSelectedGroup(group.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedGroup === group.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {group.label}
              <span className="ml-1 opacity-70">({groupCounts[group.id]})</span>
            </button>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center mb-6">
          {filteredArticles.length} artigo{filteredArticles.length !== 1 ? "s" : ""} encontrado{filteredArticles.length !== 1 ? "s" : ""}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {filteredArticles.map((article) => (
            <Card
              key={article.slug}
              className="p-5 hover:shadow-lg transition-all border-2 border-border hover:border-primary/40 group"
            >
              <Link to={`/blog/${article.slug}`} className="block">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-bold group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {article.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-3 group-hover:gap-2 transition-all">
                      Ler artigo <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            Nenhum famoso encontrado. Tente outro nome ou categoria.
          </p>
        )}

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold mb-4">Sobre este índice</h2>
          <p className="text-muted-foreground">
            Cada artigo reúne estimativas públicas, contexto de carreira e limites de atribuir QI a celebridades.
            Para entender as faixas, veja também{" "}
            <Link to="/blog/o-que-e-considerado-qi-alto" className="text-primary hover:underline">
              o que é considerado QI alto
            </Link>,{" "}
            <Link to="/blog/pessoas-famosas-com-qi-alto" className="text-primary hover:underline">
              pessoas famosas com QI alto
            </Link> e{" "}
            <Link to="/blog/o-que-e-qi-medio" className="text-primary hover:underline">
              o que é QI médio
            </Link>.
          </p>
        </div>

        <ArticleFAQ faqs={[
          { question: "Qual famoso tem o QI mais alto?", answer: "Não há medição oficial para a maioria das celebridades. Einstein é frequentemente citado com QI estimado entre 160 e 180, mas são estimativas históricas, não testes formais." },
          { question: "Os QI de famosos são oficiais?", answer: "Na grande maioria dos casos, não. Os artigos explicam estimativas, contexto e limites de comparar sucesso com QI numérico." },
          { question: "Por que comparar meu QI com famosos?", answer: "É curiosidade e autoconhecimento. O útil é entender faixas de QI e descobrir o seu com um teste estruturado." },
          { question: "Quantos famosos brasileiros estão no índice?", answer: `Mais de ${famososArticles.length - 3} personalidades brasileiras, além de perfis internacionais como Einstein, Steve Jobs e Elon Musk.` },
        ]} />

        <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 text-center">
          <h3 className="text-2xl font-bold mb-4">E o seu QI?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Compare seu resultado com as estimativas dos famosos. Teste online em poucos minutos.
          </p>
          <Button size="lg" className="gap-2" onClick={() => navigate("/teste")}>
            Fazer Meu Teste de QI <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default QIDeFamosos;
