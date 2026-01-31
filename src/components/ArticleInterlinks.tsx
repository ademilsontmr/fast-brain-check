import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Interlink {
  text: string;
  url: string;
  description?: string;
}

interface ArticleInterlinksProps {
  links: Interlink[];
  title?: string;
}

const ArticleInterlinks = ({ links, title = "Leia também" }: ArticleInterlinksProps) => {
  return (
    <div className="my-8 p-6 bg-slate-50 border border-slate-200 rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-slate-900">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link 
              to={link.url} 
              className="flex items-start gap-2 text-primary hover:text-primary/80 transition-colors group"
            >
              <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              <div>
                <span className="font-medium">{link.text}</span>
                {link.description && (
                  <p className="text-sm text-slate-600 mt-1">{link.description}</p>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleInterlinks;
