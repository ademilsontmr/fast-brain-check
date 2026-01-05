import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSEO } from "@/hooks/use-seo";

const NotFound = () => {
  const location = useLocation();

  // Configurar noIndex para páginas 404 - evita indexação pelo Google
  useSEO({
    title: "Página não encontrada",
    description: "A página que você está procurando não existe.",
    noIndex: true,
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Página não encontrada</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
};

export default NotFound;
