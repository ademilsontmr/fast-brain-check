import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <Brain className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-slate-900">BomQI</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              O teste de QI mais rápido e divertido do Brasil. Descubra sua inteligência em 3 minutos.
            </p>
          </div>

          {/* Teste */}
          <div>
            <h3 className="font-semibold mb-4 text-slate-700">Teste</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/teste" className="text-sm text-slate-500 hover:text-primary transition-colors">
                  Fazer o Teste
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="text-sm text-slate-500 hover:text-primary transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link to="/sobre-o-teste" className="text-sm text-slate-500 hover:text-primary transition-colors">
                  Sobre o Teste
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-semibold mb-4 text-slate-700">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-sm text-slate-500 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/perguntas-frequentes" className="text-sm text-slate-500 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm text-slate-500 hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-slate-700">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/politica-privacidade" className="text-sm text-slate-500 hover:text-primary transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-uso" className="text-sm text-slate-500 hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © 2026 BomQI. Todos os direitos reservados.
          </p>
          <Link 
            to="/teste" 
            className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Começar o Teste →
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
