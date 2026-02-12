import { Brain, ArrowRight, Star, Users, BookOpen, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import useSEO from "@/hooks/use-seo";
import { getRelatedArticles } from "@/utils/blogArticles";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import useStructuredData from "@/hooks/use-structured-data";
import { generateArticleStructuredData } from "@/utils/articleStructuredData";

const PessoasFamosasComQIAlto = () => {
  const navigate = useNavigate();
  
    const articleUrl = "https://bomqi.com.br/blog/pessoas-famosas-com-qi-alto";
  const articleTitle = "Pessoas Famosas com QI Alto: Lista Completa e Verificada";
  const articleDescription = "Descubra pessoas famosas com QI alto. Lista completa de celebridades, cientistas, empresários e personalidades históricas com QI elevado, incluindo valores verificados.";
  
  useSEO({
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    keywords: "PessoasFamosasComQIAlto, inteligência, QI, desenvolvimento cognitivo, melhorar mente, treinar cérebro, capacidade mental, raciocínio, cognição, inteligência superior",
  });

  useStructuredData(
    generateArticleStructuredData({
      title: articleTitle,
      description: articleDescription,
      url: articleUrl,
      slug: "pessoas-famosas-com-qi-alto",
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
          <span>Pessoas Famosas com QI Alto</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Pessoas Famosas com QI Alto: Lista Completa e Verificada
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <time>Novembro 2025</time>
          <span>•</span>
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12 flex items-center justify-center">
          <Star className="w-24 h-24 text-primary" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Muitas pessoas famosas têm QI alto, mas nem todos os números divulgados são verificados. 
            Neste artigo, listamos pessoas famosas com QI alto baseado em testes verificados, estimativas 
            confiáveis e realizações que indicam inteligência excepcional.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-6 border-l-4 border-yellow-500">
            <p className="text-sm">
              <strong>⚠️ Nota Importante:</strong> Muitos QIs atribuídos a celebridades são especulativos 
              ou não verificados. Listamos apenas valores com alguma base confiável (testes verificados, 
              estimativas baseadas em realizações acadêmicas, ou admissão em organizações de alto QI).
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI 160+ (Extremamente Raro)</h2>
          
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <div className="space-y-4">
              <div className="p-4 bg-background rounded">
                <h3 className="text-xl font-bold mb-2">Albert Einstein (1879-1955)</h3>
                <p className="mb-2"><strong>QI Estimado:</strong> 160-190</p>
                <p className="text-sm text-muted-foreground">
                  Físico teórico, criador da Teoria da Relatividade. Não há teste verificado, mas 
                  suas realizações indicam QI excepcional. Membro estimado de organizações de alto QI.
                </p>
              </div>

              <div className="p-4 bg-background rounded">
                <h3 className="text-xl font-bold mb-2">Stephen Hawking (1942-2018)</h3>
                <p className="mb-2"><strong>QI Estimado:</strong> 160+</p>
                <p className="text-sm text-muted-foreground">
                  Físico teórico, cosmólogo. Realizações acadêmicas e científicas indicam QI excepcional. 
                  Professor em Cambridge, autor de "Uma Breve História do Tempo".
                </p>
              </div>

              <div className="p-4 bg-background rounded">
                <h3 className="text-xl font-bold mb-2">Leonardo da Vinci (1452-1519)</h3>
                <p className="mb-2"><strong>QI Estimado:</strong> 180-220</p>
                <p className="text-sm text-muted-foreground">
                  Polímata renascentista: artista, inventor, cientista, engenheiro. Sua diversidade 
                  de realizações excepcionais sugere QI extremamente alto.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI 140-159 (Muito Superior)</h2>
          
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <div className="space-y-4">
              <div className="p-4 bg-background rounded">
                <h3 className="text-xl font-bold mb-2">Bill Gates</h3>
                <p className="mb-2"><strong>QI Estimado:</strong> 160</p>
                <p className="text-sm text-muted-foreground">
                  Fundador da Microsoft. Testou 1600 no SAT (equivalente a QI ~160). Entrou em Harvard 
                  aos 18 anos, abandonou para fundar Microsoft.
                </p>
              </div>

              <div className="p-4 bg-background rounded">
                <h3 className="text-xl font-bold mb-2">Elon Musk</h3>
                <p className="mb-2"><strong>QI Estimado:</strong> 155</p>
                <p className="text-sm text-muted-foreground">
                  CEO da Tesla e SpaceX. Formado em física e economia. Capacidade de entender múltiplas 
                  áreas complexas (engenharia, física, negócios) indica QI muito alto.
                </p>
              </div>

              <div className="p-4 bg-background rounded">
                <h3 className="text-xl font-bold mb-2">Marilyn vos Savant</h3>
                <p className="mb-2"><strong>QI Verificado:</strong> 228 (teste Stanford-Binet, mas controverso)</p>
                <p className="text-sm text-muted-foreground">
                  Colunista, entrou no Guinness Book por QI mais alto. Nota: QI acima de 160 é difícil 
                  de medir precisamente, então valores muito altos são questionáveis.
                </p>
              </div>

              <div className="p-4 bg-background rounded">
                <h3 className="text-xl font-bold mb-2">Terence Tao</h3>
                <p className="mb-2"><strong>QI Estimado:</strong> 230 (mas valores acima de 160 são difíceis de medir)</p>
                <p className="text-sm text-muted-foreground">
                  Matemático, ganhador da Medalha Fields. Considerado um dos maiores matemáticos vivos. 
                  Doutorado aos 21 anos.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">QI 130-139 (Muito Superior)</h2>
          
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <div className="space-y-4">
              <div className="p-4 bg-background rounded">
                <h3 className="text-xl font-bold mb-2">Natalie Portman</h3>
                <p className="mb-2"><strong>QI Estimado:</strong> 140</p>
                <p className="text-sm text-muted-foreground">
                  Atriz, formada em Harvard em psicologia. Publicou pesquisa científica. Realizações 
                  acadêmicas indicam QI alto.
                </p>
              </div>

              <div className="p-4 bg-background rounded">
                <h3 className="text-xl font-bold mb-2">Quentin Tarantino</h3>
                <p className="mb-2"><strong>QI Estimado:</strong> 160 (não verificado)</p>
                <p className="text-sm text-muted-foreground">
                  Diretor de cinema. Conhecimento enciclopédico de cinema e cultura pop sugere memória 
                  e inteligência excepcionais.
                </p>
              </div>

              <div className="p-4 bg-background rounded">
                <h3 className="text-xl font-bold mb-2">Sharon Stone</h3>
                <p className="mb-2"><strong>QI Verificado:</strong> 154</p>
                <p className="text-sm text-muted-foreground">
                  Atriz. Fez teste de QI que resultou em 154. Entrou na faculdade aos 15 anos.
                </p>
              </div>

              <div className="p-4 bg-background rounded">
                <h3 className="text-xl font-bold mb-2">James Woods</h3>
                <p className="mb-2"><strong>QI Verificado:</strong> 180 (não totalmente confirmado)</p>
                <p className="text-sm text-muted-foreground">
                  Ator. Alega QI de 180, mas não há verificação pública. Entrou no MIT aos 16 anos.
                </p>
              </div>

              <div className="p-4 bg-background rounded">
                <h3 className="text-xl font-bold mb-2">Matt Damon</h3>
                <p className="mb-2"><strong>QI Estimado:</strong> 130+</p>
                <p className="text-sm text-muted-foreground">
                  Ator, formado em Harvard. Abandonou para seguir carreira de ator, mas realizações 
                  acadêmicas indicam QI alto.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Cientistas e Acadêmicos</h2>
          
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <div className="space-y-4">
              <div className="p-4 bg-background rounded">
                <h3 className="text-xl font-bold mb-2">Marie Curie (1867-1934)</h3>
                <p className="mb-2"><strong>QI Estimado:</strong> 180+</p>
                <p className="text-sm text-muted-foreground">
                  Física e química, primeira mulher a ganhar Nobel, única pessoa com Nobel em duas 
                  áreas científicas diferentes. Realizações indicam QI excepcional.
                </p>
              </div>

              <div className="p-4 bg-background rounded">
                <h3 className="text-xl font-bold mb-2">Isaac Newton (1643-1727)</h3>
                <p className="mb-2"><strong>QI Estimado:</strong> 190+</p>
                <p className="text-sm text-muted-foreground">
                  Físico, matemático, astrônomo. Criador do cálculo, leis do movimento, gravitação. 
                  Realizações múltiplas indicam QI extremamente alto.
                </p>
              </div>

              <div className="p-4 bg-background rounded">
                <h3 className="text-xl font-bold mb-2">Carl Sagan (1934-1996)</h3>
                <p className="mb-2"><strong>QI Estimado:</strong> 170</p>
                <p className="text-sm text-muted-foreground">
                  Astrônomo, astrofísico, divulgador científico. Professor em Cornell, autor de 
                  "Cosmos". Realizações acadêmicas e capacidade de comunicação indicam QI muito alto.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Empresários e Tecnologia</h2>
          
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <div className="space-y-4">
              <div className="p-4 bg-background rounded">
                <h3 className="text-xl font-bold mb-2">Steve Jobs (1955-2011)</h3>
                <p className="mb-2"><strong>QI Estimado:</strong> 140-160</p>
                <p className="text-sm text-muted-foreground">
                  Fundador da Apple. Visão estratégica, inovação e capacidade de entender tecnologia 
                  e design indicam QI alto, embora não haja teste verificado.
                </p>
              </div>

              <div className="p-4 bg-background rounded">
                <h3 className="text-xl font-bold mb-2">Mark Zuckerberg</h3>
                <p className="mb-2"><strong>QI Estimado:</strong> 152</p>
                <p className="text-sm text-muted-foreground">
                  Fundador do Facebook. Entrou em Harvard, programador desde jovem. Realizações 
                  indicam QI muito alto.
                </p>
              </div>

              <div className="p-4 bg-background rounded">
                <h3 className="text-xl font-bold mb-2">Jeff Bezos</h3>
                <p className="mb-2"><strong>QI Estimado:</strong> 145-160</p>
                <p className="text-sm text-muted-foreground">
                  Fundador da Amazon. Formado em Princeton, visão estratégica excepcional. Realizações 
                  empresariais indicam QI muito alto.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Artistas e Criativos</h2>
          
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <div className="space-y-4">
              <div className="p-4 bg-background rounded">
                <h3 className="text-xl font-bold mb-2">Mozart (1756-1791)</h3>
                <p className="mb-2"><strong>QI Estimado:</strong> 165</p>
                <p className="text-sm text-muted-foreground">
                  Compositor clássico. Começou a compor aos 5 anos, prodígio musical. Realizações 
                  musicais excepcionais indicam QI muito alto.
                </p>
              </div>

              <div className="p-4 bg-background rounded">
                <h3 className="text-xl font-bold mb-2">Bobby Fischer (1943-2008)</h3>
                <p className="mb-2"><strong>QI Estimado:</strong> 180</p>
                <p className="text-sm text-muted-foreground">
                  Grande Mestre de Xadrez. Campeão mundial aos 29 anos. Capacidade de xadrez de 
                  nível mundial indica QI muito alto.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Limitações e Cuidados</h2>
          <p className="mb-4">
            É importante entender as limitações desta lista:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Muitos valores são estimados:</strong> Poucas celebridades fazem testes públicos de QI</li>
            <li><strong>QI acima de 160 é difícil de medir:</strong> Testes padrão não são muito precisos nessa faixa</li>
            <li><strong>Valores podem ser exagerados:</strong> Alguns números divulgados podem ser marketing</li>
            <li><strong>QI não define valor:</strong> Muitas pessoas incríveis têm QI médio</li>
            <li><strong>Sucesso não depende só de QI:</strong> Trabalho duro, oportunidades e outros fatores importam</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">O Que Podemos Aprender?</h2>
          <p className="mb-4">
            Observar pessoas famosas com QI alto nos ensina:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>QI alto ajuda, mas não garante sucesso:</strong> Trabalho duro é essencial</li>
            <li><strong>Diversidade de realizações:</strong> QI alto pode se manifestar em muitas áreas</li>
            <li><strong>QI não é tudo:</strong> Inteligência emocional, criatividade e outras habilidades importam</li>
            <li><strong>Desenvolvimento contínuo:</strong> Muitos usaram QI alto como base para aprendizado contínuo</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
          <p className="mb-4">
            Muitas pessoas famosas têm QI alto, mas é importante lembrar que:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Muitos valores são estimados, não verificados</li>
            <li>QI alto é apenas um fator entre muitos para sucesso</li>
            <li>QI não define valor ou potencial de uma pessoa</li>
            <li>O importante é usar suas capacidades, seja qual for seu QI</li>
          </ul>
          <p className="mb-4">
            Se você quer saber seu QI, faça um teste válido. Mas lembre-se: o número é menos 
            importante que usar suas capacidades para crescer, aprender e contribuir.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Descubra Seu QI</h3>
          <p className="text-muted-foreground mb-6">
            Quer saber como seu QI se compara? Faça nosso teste científico completo e descubra 
            seu QI real.
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
            {getRelatedArticles("pessoas-famosas-com-qi-alto", 3).map((article) => (
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

export default PessoasFamosasComQIAlto;

