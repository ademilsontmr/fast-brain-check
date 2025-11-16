import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Brain, Globe, Search, TrendingUp, AlertCircle, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/use-seo";
import { getCountryFlag } from "@/utils/countryFlags";

// Dados completos de QI por país (baseado em estudos científicos internacionais)
const countriesData = [
  { rank: 1, country: "Singapura", iq: 108 },
  { rank: 2, country: "Hong Kong", iq: 108 },
  { rank: 3, country: "Taiwan", iq: 106 },
  { rank: 4, country: "Coreia do Sul", iq: 106 },
  { rank: 5, country: "Japão", iq: 105 },
  { rank: 6, country: "China", iq: 104 },
  { rank: 7, country: "Eslovênia", iq: 103 },
  { rank: 8, country: "Suíça", iq: 102 },
  { rank: 9, country: "Holanda", iq: 102 },
  { rank: 10, country: "Coreia do Norte", iq: 102 },
  { rank: 11, country: "Macau", iq: 101 },
  { rank: 12, country: "Islândia", iq: 101 },
  { rank: 13, country: "Finlândia", iq: 101 },
  { rank: 14, country: "Canadá", iq: 101 },
  { rank: 15, country: "Bélgica", iq: 100 },
  { rank: 16, country: "Alemanha", iq: 100 },
  { rank: 17, country: "Reino Unido", iq: 100 },
  { rank: 18, country: "Áustria", iq: 100 },
  { rank: 19, country: "Nova Zelândia", iq: 100 },
  { rank: 20, country: "Israel", iq: 100 },
  { rank: 21, country: "Malta", iq: 99 },
  { rank: 22, country: "Eslováquia", iq: 99 },
  { rank: 23, country: "Noruega", iq: 99 },
  { rank: 24, country: "Suécia", iq: 99 },
  { rank: 25, country: "Luxemburgo", iq: 99 },
  { rank: 26, country: "Dinamarca", iq: 99 },
  { rank: 27, country: "República Tcheca", iq: 99 },
  { rank: 28, country: "Estônia", iq: 99 },
  { rank: 29, country: "Austrália", iq: 99 },
  { rank: 30, country: "França", iq: 98 },
  { rank: 31, country: "Itália", iq: 98 },
  { rank: 32, country: "Hungria", iq: 98 },
  { rank: 33, country: "Polônia", iq: 98 },
  { rank: 34, country: "Espanha", iq: 97 },
  { rank: 35, country: "Rússia", iq: 97 },
  { rank: 36, country: "Portugal", iq: 95 },
  { rank: 37, country: "Grécia", iq: 95 },
  { rank: 38, country: "Croácia", iq: 95 },
  { rank: 39, country: "Lituânia", iq: 94 },
  { rank: 40, country: "Letônia", iq: 94 },
  { rank: 41, country: "Irlanda", iq: 93 },
  { rank: 42, country: "Argentina", iq: 93 },
  { rank: 43, country: "Chile", iq: 93 },
  { rank: 44, country: "Uruguai", iq: 92 },
  { rank: 45, country: "Costa Rica", iq: 91 },
  { rank: 46, country: "México", iq: 90 },
  { rank: 47, country: "Colômbia", iq: 90 },
  { rank: 48, country: "Venezuela", iq: 89 },
  { rank: 49, country: "Equador", iq: 88 },
  { rank: 50, country: "Peru", iq: 88 },
  { rank: 51, country: "Brasil", iq: 87 },
  { rank: 52, country: "Paraguai", iq: 87 },
  { rank: 53, country: "Bolívia", iq: 87 },
  { rank: 54, country: "Guatemala", iq: 86 },
  { rank: 55, country: "El Salvador", iq: 86 },
  { rank: 56, country: "Honduras", iq: 85 },
  { rank: 57, country: "Nicarágua", iq: 84 },
  { rank: 58, country: "Índia", iq: 82 },
  { rank: 59, country: "Indonésia", iq: 81 },
  { rank: 60, country: "Filipinas", iq: 81 },
  { rank: 61, country: "Tailândia", iq: 80 },
  { rank: 62, country: "Vietnã", iq: 80 },
  { rank: 63, country: "Malásia", iq: 79 },
  { rank: 64, country: "Mianmar", iq: 78 },
  { rank: 65, country: "Camboja", iq: 75 },
  { rank: 66, country: "Laos", iq: 75 },
  { rank: 67, country: "África do Sul", iq: 72 },
  { rank: 68, country: "Quênia", iq: 72 },
  { rank: 69, country: "Gana", iq: 71 },
  { rank: 70, country: "Nigéria", iq: 70 },
  { rank: 71, country: "Tanzânia", iq: 69 },
  { rank: 72, country: "Etiópia", iq: 68 },
  { rank: 73, country: "Uganda", iq: 67 },
  { rank: 74, country: "Zimbábue", iq: 66 },
  { rank: 75, country: "Malawi", iq: 65 },
];

const QIPorPais = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useSEO({
    title: "QI Médio por País 2025 | Ranking Mundial de Inteligência | BomQI",
    description: "Descubra o QI médio de cada país do mundo. Veja onde o Brasil está no ranking global de inteligência e compare com outros países. Dados baseados em estudos científicos internacionais.",
    keywords: "QI por país, ranking QI mundial, QI médio Brasil, países mais inteligentes, QI por nação, inteligência por país",
  });

  const filteredCountries = countriesData.filter((country) =>
    country.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const brazilData = countriesData.find((c) => c.country === "Brasil");

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => navigate("/")}
            >
              <Brain className="w-8 h-8 text-primary" />
              <div className="text-2xl font-bold">BomQI</div>
            </div>
            <Button onClick={() => navigate("/teste")}>
              Fazer o Teste
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <Globe className="w-5 h-5" />
            <span className="text-sm font-semibold">Dados Globais 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            QI Médio por País
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra o ranking mundial de inteligência. Compare o QI médio do Brasil com outros países e veja onde seu país está posicionado globalmente.
          </p>
        </div>

        {/* Brasil Destacado */}
        {brazilData && (
          <Card className="p-6 mb-8 bg-primary/10 border-primary/20 shadow-elegant">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-4xl">
                  {getCountryFlag("Brasil")}
                </div>
                <div>
                  <div className="text-2xl font-bold">Brasil</div>
                  <div className="text-muted-foreground">
                    Rank #{brazilData.rank} no mundo
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-4xl font-bold text-primary">
                  {brazilData.iq}
                </div>
                <div className="text-sm text-muted-foreground">QI médio</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {brazilData.iq < 100 ? "Abaixo da média global (100)" : "Acima da média global"}
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                O Brasil está no rank #{brazilData.rank} mundialmente. A média global de QI é 100. 
                Faça o teste e descubra se você está acima da média brasileira!
              </p>
            </div>
          </Card>
        )}

        {/* Busca */}
        <Card className="p-6 mb-8 shadow-elegant">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar país..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            {filteredCountries.length} {filteredCountries.length === 1 ? "país encontrado" : "países encontrados"}
          </p>
        </Card>

        {/* Tabela de Países */}
        <Card className="p-6 md:p-8 shadow-elegant">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Ranking Completo</h2>
            <div className="text-sm text-muted-foreground">
              {countriesData.length} países
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-bold text-muted-foreground">Rank</th>
                  <th className="text-left py-3 px-4 font-bold text-muted-foreground">País</th>
                  <th className="text-right py-3 px-4 font-bold text-muted-foreground">QI Médio</th>
                  <th className="text-center py-3 px-4 font-bold text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredCountries.map((country) => {
                  const isBrazil = country.country === "Brasil";
                  const isAboveAverage = country.iq >= 100;
                  
                  return (
                    <tr
                      key={country.rank}
                      className={`border-b border-border/50 hover:bg-muted/30 transition-colors ${
                        isBrazil ? "bg-primary/5 font-semibold" : ""
                      }`}
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          {country.rank <= 10 && (
                            <TrendingUp className="w-4 h-4 text-primary" />
                          )}
                          <span className={isBrazil ? "text-primary font-bold" : ""}>
                            #{country.rank}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{getCountryFlag(country.country)}</span>
                          {isBrazil && <Brain className="w-4 h-4 text-primary" />}
                          <span className={isBrazil ? "text-primary font-bold" : "font-medium"}>
                            {country.country}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className={`font-bold ${isBrazil ? "text-primary text-lg" : "text-foreground"}`}>
                          {country.iq}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        {isAboveAverage ? (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-medium">
                            <TrendingUp className="w-3 h-3" />
                            Acima
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/10 text-orange-600 text-xs font-medium">
                            <AlertCircle className="w-3 h-3" />
                            Abaixo
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Informações Importantes */}
        <Card className="p-6 md:p-8 mt-8 bg-muted/30 shadow-elegant">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-primary" />
            Informações Importantes
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              <strong>Média Global:</strong> O QI médio global é 100. Países acima de 100 estão acima da média mundial, 
              enquanto países abaixo de 100 estão abaixo da média.
            </p>
            <p>
              <strong>Variações nos Dados:</strong> As médias de QI podem variar entre diferentes estudos devido a 
              metodologias distintas, períodos de coleta de dados e fatores culturais.
            </p>
            <p>
              <strong>Fatores Influenciadores:</strong> Diversos fatores podem influenciar as médias de QI de uma população, 
              incluindo qualidade da educação, acesso a recursos, nutrição, ambiente socioeconômico e fatores genéticos.
            </p>
            <p>
              <strong>Efeito Flynn:</strong> Ao longo do tempo, as pontuações de QI têm aumentado em muitas populações, 
              fenômeno conhecido como Efeito Flynn. Isso significa que os dados podem mudar ao longo dos anos.
            </p>
            <p>
              <strong>Resultado Individual:</strong> É importante lembrar que seu QI individual pode variar significativamente 
              da média do seu país. Faça o teste para descobrir seu QI pessoal!
            </p>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Card className="p-8 bg-gradient-primary text-primary-foreground shadow-elegant">
            <Brain className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">
              Descubra Seu QI Agora
            </h3>
            <p className="mb-6 opacity-90">
              Veja como você se compara com a média do Brasil e do mundo
            </p>
            <Button
              onClick={() => navigate("/teste")}
              size="lg"
              variant="secondary"
              className="shadow-elegant"
            >
              Fazer o Teste de QI
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default QIPorPais;

