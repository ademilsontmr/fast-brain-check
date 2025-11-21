import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Test from "./pages/Test";
import BasicResult from "./pages/BasicResult";
import UserData from "./pages/UserData";
import Payment from "./pages/Payment";
import CompleteResult from "./pages/CompleteResult";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
// Lazy load dos artigos do blog
const ComoAumentarQI = lazy(() => import("./pages/blog/ComoAumentarQI"));
const InteligenciaVsSabedoria = lazy(() => import("./pages/blog/InteligenciaVsSabedoria"));
const HabitosQIAlto = lazy(() => import("./pages/blog/HabitosQIAlto"));
const GeniosEmComum = lazy(() => import("./pages/blog/GeniosEmComum"));
const TesteQIOnlineGuiaCompleto = lazy(() => import("./pages/blog/TesteQIOnlineGuiaCompleto"));
const ComoSePrepararTesteQI = lazy(() => import("./pages/blog/ComoSePrepararTesteQI"));
const MelhoresTestesQIOnline2025 = lazy(() => import("./pages/blog/MelhoresTestesQIOnline2025"));
const NeuroplasticidadeCerebroEvolui = lazy(() => import("./pages/blog/NeuroplasticidadeCerebroEvolui"));
const MediaQIBrasil = lazy(() => import("./pages/blog/MediaQIBrasil"));
const QIProcessosSeletivos = lazy(() => import("./pages/blog/QIProcessosSeletivos"));
const Top15JogosAppsTreinarCerebro = lazy(() => import("./pages/blog/Top15JogosAppsTreinarCerebro"));
const DiferencaQIQEQG = lazy(() => import("./pages/blog/DiferencaQIQEQG"));
const IATestesCognitivos = lazy(() => import("./pages/blog/IATestesCognitivos"));
const MelhorTesteQI2026 = lazy(() => import("./pages/blog/MelhorTesteQI2026"));
const QISucessoProfissional = lazy(() => import("./pages/blog/QISucessoProfissional"));
const GeneticaVsAmbienteQI = lazy(() => import("./pages/blog/GeneticaVsAmbienteQI"));
const QICriatividade = lazy(() => import("./pages/blog/QICriatividade"));
const QIAoLongoVida = lazy(() => import("./pages/blog/QIAoLongoVida"));
const QIMedioPorPais = lazy(() => import("./pages/blog/QIMedioPorPais"));
const QIMedioPorIdade = lazy(() => import("./pages/blog/QIMedioPorIdade"));
const QIMedioPorProfissao = lazy(() => import("./pages/blog/QIMedioPorProfissao"));
const QIBrasileiroVsOutrosPaises = lazy(() => import("./pages/blog/QIBrasileiroVsOutrosPaises"));
const ComoAumentarInteligencia = lazy(() => import("./pages/blog/ComoAumentarInteligencia"));
const ComoMelhorarCerebro = lazy(() => import("./pages/blog/ComoMelhorarCerebro"));
const AtividadesQueAumentamQI = lazy(() => import("./pages/blog/AtividadesQueAumentamQI"));
const SuplementosQueMelhoramQI = lazy(() => import("./pages/blog/SuplementosQueMelhoramQI"));
const OQueEConsideradoQIAlto = lazy(() => import("./pages/blog/OQueEConsideradoQIAlto"));
const DiferencaQIEInteligenciaEmocional = lazy(() => import("./pages/blog/DiferencaQIEInteligenciaEmocional"));
const PessoasFamosasComQIAlto = lazy(() => import("./pages/blog/PessoasFamosasComQIAlto"));
const ComoSaberMeuQISemPagar = lazy(() => import("./pages/blog/ComoSaberMeuQISemPagar"));
const CriancasSuperdotadasSinaisCaracteristicas = lazy(() => import("./pages/blog/CriancasSuperdotadasSinaisCaracteristicas"));
const ImpactoNutricaoDietaFuncaoCognitivaQI = lazy(() => import("./pages/blog/ImpactoNutricaoDietaFuncaoCognitivaQI"));
const ConexaoQIDesempenhoAcademico = lazy(() => import("./pages/blog/ConexaoQIDesempenhoAcademico"));
const NatureVsNurtureGeneticaAmbienteQI = lazy(() => import("./pages/blog/NatureVsNurtureGeneticaAmbienteQI"));
const QIeSucessoCarreira = lazy(() => import("./pages/blog/QIeSucessoCarreira"));
const QuantoInteligenciaEHerdada = lazy(() => import("./pages/blog/QuantoInteligenciaEHerdada"));
const DiferencasQIEInteligencia = lazy(() => import("./pages/blog/DiferencasQIEInteligencia"));
const DesenvolvimentoCognitivoConexaoQI = lazy(() => import("./pages/blog/DesenvolvimentoCognitivoConexaoQI"));
const OQueCausaQIAlto = lazy(() => import("./pages/blog/OQueCausaQIAlto"));
const OQueETesteQI = lazy(() => import("./pages/blog/OQueETesteQI"));
const OQueEQI = lazy(() => import("./pages/blog/OQueEQI"));
const ComoQIECalculado = lazy(() => import("./pages/blog/ComoQIECalculado"));
const QIMedioMundial = lazy(() => import("./pages/blog/QIMedioMundial"));
const QIMedioBrasil = lazy(() => import("./pages/blog/QIMedioBrasil"));
const QIAltoCaracteristicas = lazy(() => import("./pages/blog/QIAltoCaracteristicas"));
const OQueEQIBaixo = lazy(() => import("./pages/blog/OQueEQIBaixo"));
const ComoInterpretarResultadoQI = lazy(() => import("./pages/blog/ComoInterpretarResultadoQI"));
const QIPodeMudarAoLongoVida = lazy(() => import("./pages/blog/QIPodeMudarAoLongoVida"));
const QICriancasVsAdultos = lazy(() => import("./pages/blog/QICriancasVsAdultos"));
const ComoAumentarQIRapidamente = lazy(() => import("./pages/blog/ComoAumentarQIRapidamente"));
const ComoAumentarInteligenciaFormaNatural = lazy(() => import("./pages/blog/ComoAumentarInteligenciaFormaNatural"));
const OQueReduzQISemPerceber = lazy(() => import("./pages/blog/OQueReduzQISemPerceber"));
const ComoAtivarModoFocoProfundo = lazy(() => import("./pages/blog/ComoAtivarModoFocoProfundo"));
const QIPodeAumentarAoLongoVida = lazy(() => import("./pages/blog/QIPodeAumentarAoLongoVida"));
const QICriancasSinaisSuperdotacao = lazy(() => import("./pages/blog/QICriancasSinaisSuperdotacao"));
const ComoAprenderMaisRapidoNeurociencia = lazy(() => import("./pages/blog/ComoAprenderMaisRapidoNeurociencia"));
const QIEGeneticaQuantoNasceAprende = lazy(() => import("./pages/blog/QIEGeneticaQuantoNasceAprende"));
const ComoFicarMaisInteligente = lazy(() => import("./pages/blog/ComoFicarMaisInteligente"));
const ComoFicarRicoRelacaoQI = lazy(() => import("./pages/blog/ComoFicarRicoRelacaoQI"));
const ComoFicarRicoInternetQI = lazy(() => import("./pages/blog/ComoFicarRicoInternetQI"));
const EscalaInteligenciaWechslerWAIS = lazy(() => import("./pages/blog/EscalaInteligenciaWechslerWAIS"));
const ComoManterMenteAfiada = lazy(() => import("./pages/blog/ComoManterMenteAfiada"));
const ReduzindoDemenciaTreinamentoCerebral = lazy(() => import("./pages/blog/ReduzindoDemenciaTreinamentoCerebral"));
const SuaPontuacaoQIPodeMudar = lazy(() => import("./pages/blog/SuaPontuacaoQIPodeMudar"));
const PessoasMaisInteligentesQueVoceNuncaOuviuFalar = lazy(() => import("./pages/blog/PessoasMaisInteligentesQueVoceNuncaOuviuFalar"));
const ComoMaesMelhoramQI = lazy(() => import("./pages/blog/ComoMaesMelhoramQI"));
const ComoMercadoFinanceiroMelhoraQI = lazy(() => import("./pages/blog/ComoMercadoFinanceiroMelhoraQI"));
const ComoPaisMelhoramQI = lazy(() => import("./pages/blog/ComoPaisMelhoramQI"));
const ComoSegurancaTrabalhoMelhoraQI = lazy(() => import("./pages/blog/ComoSegurancaTrabalhoMelhoraQI"));
const ComoTrabalhadoresMelhoramQI = lazy(() => import("./pages/blog/ComoTrabalhadoresMelhoramQI"));
const QIEExercicioFisico = lazy(() => import("./pages/blog/QIEExercicioFisico"));
const QIMedioAdolescentes = lazy(() => import("./pages/blog/QIMedioAdolescentes"));
const QIMedioCorredores = lazy(() => import("./pages/blog/QIMedioCorredores"));

// Páginas estáticas (não precisam de lazy loading)
import ComoFunciona from "./pages/ComoFunciona";
import PerguntasFrequentes from "./pages/PerguntasFrequentes";
import SobreOTeste from "./pages/SobreOTeste";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import Contato from "./pages/Contato";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentError from "./pages/PaymentError";
import PaymentPending from "./pages/PaymentPending";
import QIPorPais from "./pages/QIPorPais";

const queryClient = new QueryClient();

// Componente de loading para artigos
const ArticleLoading = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-muted-foreground">Carregando artigo...</p>
    </div>
  </div>
);

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
          <Route path="/dados-usuario" element={<UserData />} />
          <Route path="/pagamento" element={<Payment />} />
          <Route path="/resultado-completo" element={<CompleteResult />} />
          <Route path="/blog" element={<Blog />} />
          <Route 
            path="/blog/melhor-teste-qi-2026" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <MelhorTesteQI2026 />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/qi-sucesso-profissional" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <QISucessoProfissional />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/teste-qi-online-guia-completo" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <TesteQIOnlineGuiaCompleto />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/como-se-preparar-teste-qi" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <ComoSePrepararTesteQI />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/melhores-testes-qi-online-2025" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <MelhoresTestesQIOnline2025 />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/neuroplasticidade-cerebro-evolui" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <NeuroplasticidadeCerebroEvolui />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/media-qi-brasil" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <MediaQIBrasil />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/qi-processos-seletivos" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <QIProcessosSeletivos />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/top-15-jogos-apps-treinar-cerebro" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <Top15JogosAppsTreinarCerebro />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/diferenca-qi-qe-qg" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <DiferencaQIQEQG />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/ia-testes-cognitivos" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <IATestesCognitivos />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/como-aumentar-qi" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <ComoAumentarQI />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/inteligencia-vs-sabedoria" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <InteligenciaVsSabedoria />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/habitos-qi-alto" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <HabitosQIAlto />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/genios-em-comum" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <GeniosEmComum />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/genetica-vs-ambiente-qi" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <GeneticaVsAmbienteQI />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/qi-criatividade" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <QICriatividade />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/qi-ao-longo-vida" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <QIAoLongoVida />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/qi-medio-por-pais" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <QIMedioPorPais />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/qi-medio-por-idade" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <QIMedioPorIdade />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/qi-medio-por-profissao" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <QIMedioPorProfissao />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/qi-brasileiro-vs-outros-paises" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <QIBrasileiroVsOutrosPaises />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/como-aumentar-inteligencia" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <ComoAumentarInteligencia />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/como-melhorar-cerebro" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <ComoMelhorarCerebro />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/atividades-que-aumentam-qi" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <AtividadesQueAumentamQI />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/suplementos-que-melhoram-qi" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <SuplementosQueMelhoramQI />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/o-que-e-considerado-qi-alto" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <OQueEConsideradoQIAlto />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/diferenca-qi-inteligencia-emocional" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <DiferencaQIEInteligenciaEmocional />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/pessoas-famosas-com-qi-alto" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <PessoasFamosasComQIAlto />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/como-saber-meu-qi-sem-pagar" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <ComoSaberMeuQISemPagar />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/criancas-superdotadas-sinais-caracteristicas" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <CriancasSuperdotadasSinaisCaracteristicas />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/impacto-nutricao-dieta-funcao-cognitiva-qi" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <ImpactoNutricaoDietaFuncaoCognitivaQI />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/conexao-qi-desempenho-academico" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <ConexaoQIDesempenhoAcademico />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/nature-vs-nurture-genetica-ambiente-qi" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <NatureVsNurtureGeneticaAmbienteQI />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/qi-e-sucesso-carreira" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <QIeSucessoCarreira />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/quanto-inteligencia-e-herdada" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <QuantoInteligenciaEHerdada />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/diferencas-qi-e-inteligencia" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <DiferencasQIEInteligencia />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/desenvolvimento-cognitivo-conexao-qi" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <DesenvolvimentoCognitivoConexaoQI />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/o-que-causa-qi-alto" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <OQueCausaQIAlto />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/o-que-e-teste-qi" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <OQueETesteQI />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/o-que-e-qi" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <OQueEQI />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/como-qi-e-calculado" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <ComoQIECalculado />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/qi-medio-mundial" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <QIMedioMundial />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/qi-medio-brasil" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <QIMedioBrasil />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/qi-alto-caracteristicas" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <QIAltoCaracteristicas />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/o-que-e-qi-baixo" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <OQueEQIBaixo />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/como-interpretar-resultado-qi" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <ComoInterpretarResultadoQI />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/qi-pode-mudar-ao-longo-vida" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <QIPodeMudarAoLongoVida />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/qi-criancas-vs-adultos" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <QICriancasVsAdultos />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/como-aumentar-qi-rapidamente" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <ComoAumentarQIRapidamente />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/como-aumentar-inteligencia-forma-natural" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <ComoAumentarInteligenciaFormaNatural />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/o-que-reduz-qi-sem-perceber" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <OQueReduzQISemPerceber />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/como-ativar-modo-foco-profundo" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <ComoAtivarModoFocoProfundo />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/qi-pode-aumentar-ao-longo-vida" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <QIPodeAumentarAoLongoVida />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/qi-criancas-sinais-superdotacao" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <QICriancasSinaisSuperdotacao />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/como-aprender-mais-rapido-neurociencia" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <ComoAprenderMaisRapidoNeurociencia />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/qi-e-genetica-quanto-nasce-aprende" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <QIEGeneticaQuantoNasceAprende />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/como-ficar-mais-inteligente" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <ComoFicarMaisInteligente />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/como-ficar-rico-relacao-qi" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <ComoFicarRicoRelacaoQI />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/como-ficar-rico-internet-qi" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <ComoFicarRicoInternetQI />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/escala-inteligencia-wechsler-wais" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <EscalaInteligenciaWechslerWAIS />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/como-manter-mente-afiada" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <ComoManterMenteAfiada />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/reduzindo-demencia-treinamento-cerebral" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <ReduzindoDemenciaTreinamentoCerebral />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/sua-pontuacao-qi-pode-mudar" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <SuaPontuacaoQIPodeMudar />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/pessoas-mais-inteligentes-que-voce-nunca-ouviu-falar" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <PessoasMaisInteligentesQueVoceNuncaOuviuFalar />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/como-maes-melhoram-qi" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <ComoMaesMelhoramQI />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/como-mercado-financeiro-melhora-qi" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <ComoMercadoFinanceiroMelhoraQI />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/como-pais-melhoram-qi" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <ComoPaisMelhoramQI />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/como-seguranca-trabalho-melhora-qi" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <ComoSegurancaTrabalhoMelhoraQI />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/como-trabalhadores-melhoram-qi" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <ComoTrabalhadoresMelhoramQI />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/qi-e-exercicio-fisico" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <QIEExercicioFisico />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/qi-medio-adolescentes" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <QIMedioAdolescentes />
              </Suspense>
            } 
          />
          <Route 
            path="/blog/qi-medio-corredores" 
            element={
              <Suspense fallback={<ArticleLoading />}>
                <QIMedioCorredores />
              </Suspense>
            } 
          />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/perguntas-frequentes" element={<PerguntasFrequentes />} />
          <Route path="/sobre-o-teste" element={<SobreOTeste />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/termos-uso" element={<TermosUso />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/pagamento/sucesso" element={<PaymentSuccess />} />
          <Route path="/pagamento/erro" element={<PaymentError />} />
          <Route path="/pagamento/pendente" element={<PaymentPending />} />
          <Route path="/qi-por-pais" element={<QIPorPais />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
