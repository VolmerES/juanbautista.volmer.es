export const defaultLang = "es";

export const me = {
  name: "Juan Delorme Pinedo",
  alias: "Volmer",
  school: "42 Madrid",
  intra: "https://profile.intra.42.fr/users/jdelorme",
  github: "https://github.com/VolmerES",
  linkedin: "https://linkedin.com/in/jdelorme",
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
    "label.course": "Curso",
    "label.subject": "Asignatura",

    "home.course": "2024 — presente",
    "home.subject": "Arquitectura de software",
    "home.lead":
      "Estudiante de 42 Madrid. Aprendo escribiendo cosas desde cero: un shell de Unix, un servidor IRC, un motor 3D. Esta es la libreta donde lo voy apuntando.",
    "home.note":
      "Trabajo por cuenta propia en Volmer Studio, pero eso es otra web. Aquí solo hay lo que hago por gusto.",
    "home.studioLink": "Ver mi trabajo profesional",

    "home.pathTitle": "Cómo llegué aquí",
    "home.p1.year": "Adolescencia",
    "home.p1.title": "Un ASUS y mucho tiempo libre",
    "home.p1.desc":
      "Scripts y juegos sencillos en Unity con C#. Nadie me lo mandó; simplemente quería ver qué pasaba si tocaba esto.",
    "home.p2.year": "La piscina",
    "home.p2.title": "Cuatro semanas de 42",
    "home.p2.desc":
      "El proceso de selección de 42: un mes programando en C sin profesores, corrigiéndonos entre nosotros. Salí dentro.",
    "home.p3.year": "El cursus",
    "home.p3.title": "Construir desde cero",
    "home.p3.desc":
      "Sin librerías, sin frameworks, sin atajos. Cada proyecto obliga a entender la capa de abajo antes de poder seguir.",

    "home.projectsTitle": "Lo último que he hecho",
    "home.blogTitle": "Últimas anotaciones",
    "home.blogEmpty": "Todavía no hay entradas.",
    "cta.all": "Ver todo",
    "cta.read": "Leer",
    "cta.code": "Ver código",
    "cta.back": "Volver",

    "42.title": "El cursus",
    "42.lead":
      "42 no tiene profesores ni clases. Te dan un enunciado y te las apañas. Cada proyecto lo corrigen otros estudiantes a mano, y la nota sale de ahí.",
    "42.bonusNote": "Con bonus",
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
    "label.course": "Year",
    "label.subject": "Subject",

    "home.course": "2024 — present",
    "home.subject": "Software architecture",
    "home.lead":
      "Student at 42 Madrid. I learn by writing things from scratch: a Unix shell, an IRC server, a 3D engine. This is the notebook where I keep track of it.",
    "home.note":
      "I also freelance as Volmer Studio, but that's a different site. This one is only the things I do for fun.",
    "home.studioLink": "See my professional work",

    "home.pathTitle": "How I got here",
    "home.p1.year": "Teens",
    "home.p1.title": "An ASUS and a lot of free time",
    "home.p1.desc":
      "Scripts and simple games in Unity with C#. Nobody assigned it; I just wanted to see what happened if I poked at it.",
    "home.p2.year": "The pool",
    "home.p2.title": "Four weeks of 42",
    "home.p2.desc":
      "42's selection process: a month writing C with no teachers, grading each other. I made it through.",
    "home.p3.year": "The cursus",
    "home.p3.title": "Building from scratch",
    "home.p3.desc":
      "No libraries, no frameworks, no shortcuts. Every project makes you understand the layer underneath before you can move on.",

    "home.projectsTitle": "Most recent work",
    "home.blogTitle": "Latest notes",
    "home.blogEmpty": "No entries yet.",
    "cta.all": "See all",
    "cta.read": "Read",
    "cta.code": "View code",
    "cta.back": "Back",

    "42.title": "The cursus",
    "42.lead":
      "42 has no teachers and no lectures. You get a brief and you work it out. Every project is graded by hand by other students, and that's where the mark comes from.",
    "42.bonusNote": "With bonus",
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
