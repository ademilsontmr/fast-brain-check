import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Brain, Globe, Search, TrendingUp, AlertCircle, ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import BelowMenuAdSense from "@/components/BelowMenuAdSense";
import { ADSENSE_QI_POR_PAIS_SLOT } from "@/constants/adsense";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/use-seo";
import { getCountryFlag } from "@/utils/countryFlags";
import {
  BRAZIL_IQ,
  COUNTRY_IQ_RANKING,
  NATIONAL_IQ_SOURCE,
} from "@/data/nationalIq";

const countriesData = COUNTRY_IQ_RANKING;

const QIPorPais = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useSEO({
    title: "QI Médio por País 2026 | Ranking Mundial de Inteligência | BomQI",
    description: `Ranking de QI médio por país atualizado (${NATIONAL_IQ_SOURCE.primary}). Brasil ~${BRAZIL_IQ.iq}. Compare médias e veja limitações dos dados.`,
    keywords: "QI por país, ranking QI mundial, QI médio Brasil, países mais inteligentes, QI por nação, inteligência por país",
  });

  const filteredCountries = countriesData.filter((country) =>
    country.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const brazilData = BRAZIL_IQ;

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <SiteHeader />
      <BelowMenuAdSense slot={ADSENSE_QI_POR_PAIS_SLOT} />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <Globe className="w-5 h-5" />
            <span className="text-sm font-semibold">{NATIONAL_IQ_SOURCE.updatedLabel}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            QI Médio por País
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ranking baseado no {NATIONAL_IQ_SOURCE.primary} (amostra online global). Compare o Brasil com outros países — e lembre: média nacional não define o seu QI individual.
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
                    ≈ {NATIONAL_IQ_SOURCE.brazilRankIit}º no ranking IIT completo
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-4xl font-bold text-primary">
                  {NATIONAL_IQ_SOURCE.brazilIit}
                </div>
                <div className="text-sm text-muted-foreground">QI médio (IIT 2025)</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Abaixo da média de referência (100)
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                No IIT 2025 o Brasil aparece com cerca de <strong>{NATIONAL_IQ_SOURCE.brazilIit}</strong> pontos.
                Compilações clássicas (Lynn &amp; Becker, 2019) estimavam cerca de {NATIONAL_IQ_SOURCE.brazilLynnApprox}.
                A diferença vem da metodologia — faça o teste e veja o seu resultado individual.
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
              <strong>Fonte:</strong> {NATIONAL_IQ_SOURCE.primary}, amostra online de ~1,35 milhão de participantes
              (via World Population Review). Compilação acadêmica de referência: {NATIONAL_IQ_SOURCE.secondary}.
            </p>
            <p>
              <strong>Média de referência:</strong> Em testes padronizados, a média da população de calibração é 100
              (desvio padrão 15). Médias nacionais variam em torno desse ponto.
            </p>
            <p>
              <strong>Limitações:</strong> Testes online sofrem viés de quem decide fazer o teste; amostras por país
              não são censos. Comparações internacionais são úteis como contexto, não como veredicto sobre pessoas.
            </p>
            <p>
              <strong>Educação (contexto):</strong> No PISA 2022 (OCDE), o Brasil marcou 379 em matemática, 410 em leitura
              e 403 em ciências — abaixo da média OCDE (472 / 476 / 485). Isso ajuda a entender desempenho escolar,
              que é correlacionado — mas não idêntico — a estimativas de QI nacional.
            </p>
            <p>
              <strong>Seu resultado:</strong> A média do país não define o seu QI. Faça o teste BomQI para uma leitura individual.
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

