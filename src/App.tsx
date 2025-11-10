import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Test from "./pages/Test";
import BasicResult from "./pages/BasicResult";
import Payment from "./pages/Payment";
import CompleteResult from "./pages/CompleteResult";
import NotFound from "./pages/NotFound";
import ComoAumentarQI from "./pages/blog/ComoAumentarQI";
import InteligenciaVsSabedoria from "./pages/blog/InteligenciaVsSabedoria";
import HabitosQIAlto from "./pages/blog/HabitosQIAlto";
import GeniosEmComum from "./pages/blog/GeniosEmComum";
import ComoFunciona from "./pages/ComoFunciona";
import PerguntasFrequentes from "./pages/PerguntasFrequentes";
import SobreOTeste from "./pages/SobreOTeste";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/teste" element={<Test />} />
          <Route path="/resultado-basico" element={<BasicResult />} />
          <Route path="/pagamento" element={<Payment />} />
          <Route path="/resultado-completo" element={<CompleteResult />} />
          <Route path="/blog/como-aumentar-qi" element={<ComoAumentarQI />} />
          <Route path="/blog/inteligencia-vs-sabedoria" element={<InteligenciaVsSabedoria />} />
          <Route path="/blog/habitos-qi-alto" element={<HabitosQIAlto />} />
          <Route path="/blog/genios-em-comum" element={<GeniosEmComum />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/perguntas-frequentes" element={<PerguntasFrequentes />} />
          <Route path="/sobre-o-teste" element={<SobreOTeste />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
