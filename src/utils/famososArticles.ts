export type FamosoGroupId =
  | "todos"
  | "futebol"
  | "musica"
  | "tv"
  | "politica"
  | "cultura"
  | "internacional";

export interface FamosoArticle {
  slug: string;
  name: string;
  group: Exclude<FamosoGroupId, "todos">;
}

export const famosoGroups: { id: FamosoGroupId; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "futebol", label: "Futebol e Esporte" },
  { id: "musica", label: "Música e Artes" },
  { id: "tv", label: "TV e Internet" },
  { id: "politica", label: "Política" },
  { id: "cultura", label: "Cultura e Ciência" },
  { id: "internacional", label: "Internacionais" },
];

export const famososArticles: FamosoArticle[] = [
  // Futebol e Esporte
  { slug: "qi-pele", name: "Pelé", group: "futebol" },
  { slug: "qi-neymar", name: "Neymar", group: "futebol" },
  { slug: "qi-ronaldo-fenomeno", name: "Ronaldo Fenômeno", group: "futebol" },
  { slug: "qi-ronaldinho", name: "Ronaldinho", group: "futebol" },
  { slug: "qi-kaka", name: "Kaká", group: "futebol" },
  { slug: "qi-marta", name: "Marta", group: "futebol" },
  { slug: "qi-rivaldo", name: "Rivaldo", group: "futebol" },
  { slug: "qi-romario", name: "Romário", group: "futebol" },
  { slug: "qi-tite", name: "Tite", group: "futebol" },
  { slug: "qi-rai", name: "Raí", group: "futebol" },
  { slug: "qi-ayrton-senna", name: "Ayrton Senna", group: "futebol" },

  // Música e Artes
  { slug: "qi-gal-costa", name: "Gal Costa", group: "musica" },
  { slug: "qi-caetano-veloso", name: "Caetano Veloso", group: "musica" },
  { slug: "qi-gilberto-gil", name: "Gilberto Gil", group: "musica" },
  { slug: "qi-tom-jobim", name: "Tom Jobim", group: "musica" },
  { slug: "qi-chico-buarque", name: "Chico Buarque", group: "musica" },
  { slug: "qi-elis-regina", name: "Elis Regina", group: "musica" },
  { slug: "qi-jorge-ben-jor", name: "Jorge Ben Jor", group: "musica" },
  { slug: "qi-raul-seixas", name: "Raul Seixas", group: "musica" },
  { slug: "qi-rita-lee", name: "Rita Lee", group: "musica" },
  { slug: "qi-roberto-carlos", name: "Roberto Carlos", group: "musica" },
  { slug: "qi-ivete-sangalo", name: "Ivete Sangalo", group: "musica" },
  { slug: "qi-anitta", name: "Anitta", group: "musica" },
  { slug: "qi-alok", name: "Alok", group: "musica" },
  { slug: "qi-ludmilla", name: "Ludmilla", group: "musica" },
  { slug: "qi-gusttavo-lima", name: "Gusttavo Lima", group: "musica" },
  { slug: "qi-zeze-di-camargo", name: "Zezé Di Camargo", group: "musica" },

  // TV e Internet
  { slug: "qi-silvio-santos", name: "Silvio Santos", group: "tv" },
  { slug: "qi-xuxa", name: "Xuxa", group: "tv" },
  { slug: "qi-faustao", name: "Faustão", group: "tv" },
  { slug: "qi-luciano-huck", name: "Luciano Huck", group: "tv" },
  { slug: "qi-gugu-liberato", name: "Gugu Liberato", group: "tv" },
  { slug: "qi-casimiro", name: "Casimiro", group: "tv" },
  { slug: "qi-whindersson-nunes", name: "Whindersson Nunes", group: "tv" },
  { slug: "qi-ratinho", name: "Ratinho", group: "tv" },
  { slug: "qi-pablo-marcal", name: "Pablo Marçal", group: "tv" },

  // Política
  { slug: "qi-lula", name: "Lula", group: "politica" },
  { slug: "qi-bolsonaro", name: "Bolsonaro", group: "politica" },
  { slug: "qi-fernando-henrique-cardoso", name: "Fernando Henrique Cardoso", group: "politica" },
  { slug: "qi-marina-silva", name: "Marina Silva", group: "politica" },
  { slug: "qi-sergio-moro", name: "Sérgio Moro", group: "politica" },

  // Cultura e Ciência
  { slug: "qi-machado-de-assis", name: "Machado de Assis", group: "cultura" },
  { slug: "qi-paulo-coelho", name: "Paulo Coelho", group: "cultura" },
  { slug: "qi-santos-dumont", name: "Santos Dumont", group: "cultura" },
  { slug: "qi-oscar-niemeyer", name: "Oscar Niemeyer", group: "cultura" },
  { slug: "qi-drauzio-varella", name: "Drauzio Varella", group: "cultura" },
  { slug: "qi-gisele-bundchen", name: "Gisele Bündchen", group: "cultura" },
  { slug: "qi-adriana-lima", name: "Adriana Lima", group: "cultura" },

  // Internacionais
  { slug: "qi-de-einstein", name: "Albert Einstein", group: "internacional" },
  { slug: "qi-steve-jobs", name: "Steve Jobs", group: "internacional" },
  { slug: "qi-elon-musk", name: "Elon Musk", group: "internacional" },
  { slug: "qi-lionel-messi", name: "Lionel Messi", group: "internacional" },
  { slug: "qi-cristiano-ronaldo", name: "Cristiano Ronaldo", group: "internacional" },
  { slug: "qi-bill-gates", name: "Bill Gates", group: "internacional" },
  { slug: "qi-donald-trump", name: "Donald Trump", group: "internacional" },
];

export const FAMOSOS_HUB_SLUG = "qi-de-famosos";
