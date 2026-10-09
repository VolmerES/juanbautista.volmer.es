export const defaultLang = "es";

export const me = {
  name: "Juan Bautista Delorme Pinedo",
  alias: "Volmer",
  school: "42 Madrid",
  intra: "https://profile.intra.42.fr/users/jdelorme",
  github: "https://github.com/VolmerES",
  linkedin: "https://linkedin.com/in/jdelorme",
  /**
   * Clasificación WURI, donde 42 es 3.ª en 2025 y 2026. La captura de
   * public/wuri-2026.webp sale de la página 2 del PDF de 2026.
   */
  wuriRanking: "https://wuri-world.circle.so/wuri-ranking",
  wuriPdf: "https://drive.google.com/file/d/18wRtS_m5B-3mL-xZ4jff2AFMz1XNYXz2/view",
  /** Web comercial: el otro lado de la separación. */
  studio: "https://volmer.es",
};

export const ui = {
  es: {
    "nav.home": "Portada",
    "nav.42": "42",
    "nav.projects": "Proyectos",
    "nav.blog": "Cuaderno",

    "label.name": "Nombre",
    "label.school": "Escuela",
    "label.role": "Oficio",
    "label.subject": "Asignatura",

    "home.role": "Desarrollador de software",
    "home.subject": "Arquitectura de software",
    "home.wuri": "3.ª universidad más innovadora del mundo",
    "home.wuriSource": "ranking WURI, 2025 y 2026",
    "home.lead":
      "Desarrollador de software formado en 42 Madrid. Hago webs y apps a medida en Volmer Studio y software embebido para robótica. Y, por gusto, todo lo que cabe en esta libreta: un shell de Unix, un servidor IRC, un motor 3D.",
    "home.note":
      "El trabajo para clientes está en Volmer Studio, que es otra web. Aquí está lo que hago por mi cuenta y lo que aprendí en 42.",
    "home.studioLink": "Ver mi trabajo profesional",

    "home.pathTitle": "Trayectoria",
    "home.pathLead": "Del ASUS heredado a hoy: trabajo, formación y lo que he ido publicando, en orden.",

    "home.projectsTitle": "Lo último que he hecho",
    "home.blogTitle": "Últimas anotaciones",
    "home.blogEmpty": "Todavía no hay entradas.",
    "cta.all": "Ver todo",
    "cta.read": "Leer",
    "cta.code": "Ver código",
    "cta.back": "Volver",

    "42.title": "El cursus",
    "42.lead":
      "42 no tiene profesores ni clases. Te dan un enunciado y te las apañas. Cada proyecto lo corrigen otros estudiantes a mano, y la nota sale de ahí. Y el método funciona: el ranking WURI la sitúa como la 3.ª universidad más innovadora del mundo en 2025 y en 2026, por delante de Stanford y el MIT.",
    "42.bonusNote": "Con bonus",
    "42.wuriCaption": "Recorte de la clasificación oficial WURI 2026. 42, tercera; el MIT, quinto; Stanford, séptima.",
    "42.wuriLink": "Ver la clasificación oficial",
    "42.noRepo": "Sin repositorio público",

    "projects.title": "Proyectos propios",
    "projects.lead":
      "Cosas que empecé porque me apetecía. Algunas están terminadas, otras no, y eso también cuenta.",
    "projects.status.live": "Publicada",
    "projects.status.wip": "En marcha",
    "projects.status.archived": "Aparcada",

    "blog.title": "Cuaderno",
    "blog.lead":
      "Notas sobre 42, sobre programar y sobre lo que voy aprendiendo por el camino. Sin pretensiones.",
    "blog.empty": "Todavía no hay entradas.",
    "blog.readingTime": "min de lectura",

    "footer.note": "Escrito y programado por mí, como todo lo demás de aquí.",
    "footer.studio": "Trabajo profesional",
  },

  en: {
    "nav.home": "Cover",
    "nav.42": "42",
    "nav.projects": "Projects",
    "nav.blog": "Notebook",

    "label.name": "Name",
    "label.school": "School",
    "label.role": "Trade",
    "label.subject": "Subject",

    "home.role": "Software developer",
    "home.subject": "Software architecture",
    "home.wuri": "World's 3rd most innovative university",
    "home.wuriSource": "WURI ranking, 2025 and 2026",
    "home.lead":
      "Software developer trained at 42 Madrid. I build custom websites and apps at Volmer Studio and embedded software for robotics. And, for fun, everything that fits in this notebook: a Unix shell, an IRC server, a 3D engine.",
    "home.note":
      "Client work lives at Volmer Studio, which is a different site. This one is what I build on my own and what I learned at 42.",
    "home.studioLink": "See my professional work",

    "home.pathTitle": "My path",
    "home.pathLead": "From a hand-me-down ASUS to today: work, training and what I have shipped, in order.",

    "home.projectsTitle": "Most recent work",
    "home.blogTitle": "Latest notes",
    "home.blogEmpty": "No entries yet.",
    "cta.all": "See all",
    "cta.read": "Read",
    "cta.code": "View code",
    "cta.back": "Back",

    "42.title": "The cursus",
    "42.lead":
      "42 has no teachers and no lectures. You get a brief and you work it out. Every project is graded by hand by other students, and that's where the mark comes from. And the method works: the WURI ranking places it as the world's 3rd most innovative university in 2025 and 2026, ahead of Stanford and MIT.",
    "42.bonusNote": "With bonus",
    "42.wuriCaption": "Clipping from the official WURI 2026 ranking. 42 third; MIT fifth; Stanford seventh.",
    "42.wuriLink": "See the official ranking",
    "42.noRepo": "No public repository",

    "projects.title": "Personal projects",
    "projects.lead":
      "Things I started because I felt like it. Some are finished, some aren't, and that counts too.",
    "projects.status.live": "Published",
    "projects.status.wip": "In progress",
    "projects.status.archived": "On hold",

    "blog.title": "Notebook",
    "blog.lead":
      "Notes on 42, on programming, and on whatever I pick up along the way. Nothing grand.",
    "blog.empty": "No entries yet.",
    "blog.readingTime": "min read",

    "footer.note": "Written and coded by me, like everything else here.",
    "footer.studio": "Professional work",
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export const routes = {
  es: { home: "/", cursus: "/42", projects: "/proyectos", blog: "/blog" },
  en: { home: "/en/", cursus: "/en/42", projects: "/en/projects", blog: "/en/blog" },
} as const;

export function useRoutes(lang: keyof typeof ui) {
  return routes[lang];
}

/** URL equivalente en el otro idioma, respetando los slugs traducidos. */
export function getAlternateUrl(pathname: string, lang: keyof typeof ui) {
  const target = lang === "es" ? "en" : "es";
  const from = routes[lang];
  const to = routes[target];

  for (const key of Object.keys(from) as Array<keyof typeof from>) {
    if (pathname === from[key] || pathname === `${from[key]}/`) return to[key];
  }

  const blog = pathname.match(/^\/(?:en\/)?blog\/(.+?)\/?$/);
  if (blog) return `${to.blog}/${blog[1]}`;

  return to.home;
}
