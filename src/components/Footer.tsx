import { Brain } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  const blogPosts = [{
    title: "Como aumentar seu QI: 10 dicas cientificamente comprovadas",
    slug: "/blog/como-aumentar-qi"
  }, {
    title: "A diferença entre inteligência e sabedoria",
    slug: "/blog/inteligencia-vs-sabedoria"
  }, {
    title: "Pessoas com QI alto têm estes 7 hábitos em comum",
    slug: "/blog/habitos-qi-alto"
  }, {
    title: "Einstein, Musk e Jobs: o que os gênios têm em comum?",
    slug: "/blog/genios-em-comum"
  }];
  return <footer className="border-t border-border bg-background/80 backdrop-blur-sm mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold">BomQI</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              O teste de QI mais rápido e divertido do Brasil. Descubra sua inteligência em 3 minutos.
            </p>
          </div>

          {/* Blog */}
          <div>
            <h4 className="font-bold mb-4">Blog</h4>
            <ul className="space-y-2">
              {blogPosts.map((post, index) => <li key={index}>
                  <Link to={post.slug} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/teste" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Fazer o Teste
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link to="/perguntas-frequentes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link to="/sobre-o-teste" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre o Teste
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/politica-privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-uso" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2026 BomQI. Todos os direitos reservados.</p>
          <p className="text-sm text-muted-foreground mt-2">bomqi.com.br
Este teste é lúdico e não substitui avaliações clínicas ou profissionais.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;