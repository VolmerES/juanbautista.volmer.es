/**
 * Trayectoria: trabajo, formación y lo publicado, en orden cronológico.
 *
 * Fuente única y bilingüe, como cursus.ts. Las fechas salen del CV
 * (public/Juan_Bautista_CV.pdf), del historial de los repos y de las reseñas
 * de clientes; lo que no consta en ninguno de esos sitios va sin fecha exacta
 * («Antes de 42») en lugar de inventarla.
 */

type L = { es: string; en: string };

export type MilestoneKind = 'origin' | 'study' | 'work' | 'project' | 'award';

/**
 * Ramas de la trayectoria, como en un `git log --graph`: de `main` salen
 * ramas que avanzan a la vez (42, Volmer Studio, proyectos, PROETI). Una rama
 * con `closes` se fusiona de vuelta en su último hito; las demás siguen
 * abiertas hoy. Dos ramas pueden compartir columna si no coinciden en el
 * tiempo (42 termina antes de que empiece PROETI).
 */
export type LaneId = 'main' | '42' | 'studio' | 'projects' | 'proeti';

export interface Lane {
  id: LaneId;
  /** Nombre de rama, en minúsculas y con guiones. */
  name: L;
  column: number;
  /** Variable CSS del color (global.css). */
  color: string;
  closes?: boolean;
}

export const lanes: Lane[] = [
  { id: 'main', name: { es: 'main', en: 'main' }, column: 0, color: 'var(--color-pencil)' },
  { id: '42', name: { es: '42-madrid', en: '42-madrid' }, column: 1, color: 'var(--color-lane-42)', closes: true },
  { id: 'studio', name: { es: 'volmer-studio', en: 'volmer-studio' }, column: 2, color: 'var(--color-lane-studio)' },
  { id: 'projects', name: { es: 'proyectos', en: 'projects' }, column: 3, color: 'var(--color-lane-projects)' },
  { id: 'proeti', name: { es: 'proeti', en: 'proeti' }, column: 1, color: 'var(--color-lane-proeti)' },
];

export interface Milestone {
  /** Lo que se lee en la tarjeta: «Sept. 2023», «Antes de 42», «Hoy». */
  period: L;
  /** Número grande del fondo, el que se mueve en parallax. Opcional. */
  backdrop?: string | L;
  kind: MilestoneKind;
  /** Rama en la que va el hito. */
  lane: LaneId;
  title: L;
  place?: L;
  description: L;
  tags?: string[];
  /** Las rutas internas se escriben en español; el componente añade /en. */
  link?: { href: string; label: L };
  /** Sigue en marcha: lleva el sello de «ahora». */
  current?: boolean;
}

export const milestones: Milestone[] = [
  {
    period: { es: '2008', en: '2008' },
    backdrop: '2008',
    kind: 'origin',
    lane: 'main',
    title: { es: 'Un ASUS heredado', en: 'A hand-me-down ASUS' },
    description: {
      es: 'Con ocho años heredé el portátil de mi hermana y descubrí internet. Después llegaron los scripts y los juegos sencillos en Unity con C#, por pura curiosidad.',
      en: "At eight I inherited my sister's laptop and discovered the internet. Scripts and simple Unity games in C# followed, out of pure curiosity.",
    },
    link: {
      href: '/blog/de-un-asus-a-42-madrid/',
      label: { es: 'Leer la historia', en: 'Read the story' },
    },
  },
  {
    period: { es: '2019 – 2021', en: '2019 – 2021' },
    backdrop: '2019',
    kind: 'study',
    lane: 'main',
    title: { es: 'FP en Sistemas Microinformáticos y Redes', en: 'Vocational diploma in IT Systems and Networks' },
    place: { es: 'CIFP A Carballeira – Marcos Valcárcel', en: 'CIFP A Carballeira – Marcos Valcárcel' },
    description: {
      es: 'Montar, reparar y conectar equipos. La base de hardware y redes antes de escribir una sola línea de C.',
      en: 'Building, repairing and networking computers. The hardware and networking groundwork before writing a single line of C.',
    },
    tags: ['Hardware', 'Redes', 'Linux'],
  },
  {
    period: { es: 'Antes de 42', en: 'Before 42' },
    kind: 'work',
    lane: 'main',
    title: { es: 'Hostelería', en: 'Hospitality' },
    place: { es: 'Detrás de la barra', en: 'Behind the bar' },
    description: {
      es: 'Atender a gente de todo tipo, aguantar un servicio lleno y resolver sobre la marcha. Ahí decidí volver a estudiar, y ese trato con el cliente es el mismo que hoy pongo en cada proyecto.',
      en: 'Serving all kinds of people, holding up through a packed service and fixing things on the fly. That is where I decided to go back to studying, and I bring the same care for clients to every project today.',
    },
  },
  {
    period: { es: 'Sept. 2023', en: 'Sept 2023' },
    backdrop: '2023',
    kind: 'study',
    lane: '42',
    title: { es: 'Entro en 42 Madrid', en: 'I join 42 Madrid' },
    place: { es: 'Fundación Telefónica', en: 'Fundación Telefónica' },
    description: {
      es: 'Supero la piscina —un mes de C sin profesores— y empiezo el cursus: C, C++, Unix, redes y contenedores, aprendiendo entre compañeros en la 3.ª universidad más innovadora del mundo según el ranking WURI.',
      en: "I pass the pool —a month of C with no teachers— and start the cursus: C, C++, Unix, networking and containers, learning from peers at the world's 3rd most innovative university according to the WURI ranking.",
    },
    tags: ['C', 'C++', 'Unix', 'Docker'],
    link: { href: '/42/', label: { es: 'Ver el cursus', en: 'See the cursus' } },
  },
  {
    period: { es: '2025', en: '2025' },
    backdrop: '2025',
    kind: 'work',
    lane: 'studio',
    title: { es: 'Primeros clientes como freelance', en: 'First freelance clients' },
    place: { es: 'Volmer Tech', en: 'Volmer Tech' },
    description: {
      es: 'Webs y mantenimiento para negocios reales —psicología, hostelería, turismo, startups— mientras seguía en 42. Varios siguen trabajando conmigo desde entonces.',
      en: 'Websites and maintenance for real businesses —psychology, hospitality, tourism, startups— while still at 42. Several of them still work with me.',
    },
    tags: ['Astro', 'WordPress', 'Laravel', 'React'],
  },
  {
    period: { es: 'Mayo 2025', en: 'May 2025' },
    kind: 'project',
    lane: 'projects',
    title: { es: 'Swipe Gallery, en Google Play', en: 'Swipe Gallery, on Google Play' },
    description: {
      es: 'Mi primera app publicada, hecha en Flutter: limpiar la galería del móvil deslizando fotos. Más de 1.000 descargas y usuarios reales.',
      en: 'My first published app, built with Flutter: clean up your phone gallery by swiping photos. Over 1,000 downloads and real users.',
    },
    tags: ['Flutter', 'Dart', 'Android'],
    link: {
      href: 'https://volmer.es/swipe-gallery-app',
      label: { es: 'Ver la app', en: 'See the app' },
    },
  },
  {
    period: { es: 'Enero 2026', en: 'January 2026' },
    kind: 'award',
    lane: 'projects',
    title: { es: 'Ganador de la Madrid in Game HackJam 10', en: 'Winner of the Madrid in Game HackJam 10' },
    place: { es: 'Con la EMT · en 42 Madrid Fundación Telefónica', en: 'With the EMT · at 42 Madrid Fundación Telefónica' },
    description: {
      es: 'Next Stop: Madrid, un arcade para recorrer Madrid en autobús hecho en 48 horas, ganó la categoría «Exploring the City by bus». Éramos 112 participantes en 20 equipos.',
      en: 'Next Stop: Madrid, an arcade game about exploring Madrid by bus built in 48 hours, won the "Exploring the City by bus" category. There were 112 participants in 20 teams.',
    },
    tags: ['Game jam', '48 h', 'EMT'],
    link: {
      href: 'https://siryetitv.itch.io/next-stop-madrid',
      label: { es: 'Jugarlo en itch.io', en: 'Play it on itch.io' },
    },
  },
  {
    period: { es: 'Abril 2026', en: 'April 2026' },
    backdrop: '2026',
    kind: 'study',
    lane: '42',
    title: { es: 'Cierro la formación en 42', en: 'I complete my training at 42' },
    description: {
      es: 'Termino la etapa de formación intensiva con proyectos como Minishell, Cub3D, ft_irc o Inception, todos corregidos a mano por otros estudiantes.',
      en: 'I wrap up the intensive training with projects such as Minishell, Cub3D, ft_irc and Inception, all graded by hand by other students.',
    },
  },
  {
    // Fecha sacada del primer commit en los repos de PROETI (02-06-2026).
    period: { es: 'Desde junio 2026', en: 'Since June 2026' },
    kind: 'work',
    lane: 'proeti',
    title: { es: 'Desarrollador de software embebido', en: 'Embedded software developer' },
    place: { es: 'PROETI · máquinas de ensayo de materiales', en: 'PROETI · materials testing machines' },
    description: {
      es: 'El sistema de control de las máquinas de ensayo de materiales (compresión, tracción, CBR): el firmware del microcontrolador, el servicio en C que gobierna la máquina sobre Linux embebido en ARM y la interfaz del equipo. Lo de bajo nivel de 42, cada día.',
      en: 'The control system of materials testing machines (compression, tension, CBR): the microcontroller firmware, the C service that drives the machine on embedded ARM Linux, and the machine interface. 42-style low-level work, every day.',
    },
    tags: ['C', 'Linux embebido', 'ARM', 'Firmware'],
    current: true,
  },
  {
    period: { es: '2026', en: '2026' },
    backdrop: { es: 'Hoy', en: 'Now' },
    kind: 'work',
    lane: 'studio',
    title: { es: 'Volmer Studio', en: 'Volmer Studio' },
    place: { es: 'Webs y apps a medida', en: 'Custom websites and apps' },
    description: {
      es: 'Volmer Tech pasa a ser Volmer Studio: webs y apps a medida para negocios, 14 reseñas de 5 estrellas en Google y un panel propio para que cada cliente siga su proyecto, sus facturas y su soporte.',
      en: 'Volmer Tech becomes Volmer Studio: custom websites and apps for businesses, 14 five-star Google reviews and a dedicated portal where each client follows their project, invoices and support.',
    },
    link: { href: 'https://volmer.es', label: { es: 'volmer.es', en: 'volmer.es' } },
    current: true,
  },
];
