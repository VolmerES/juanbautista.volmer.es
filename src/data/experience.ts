/**
 * Trayectoria: trabajo, formación y lo publicado, en orden cronológico.
 *
 * Fuente única y bilingüe, como cursus.ts. Las fechas salen del CV
 * (public/Juan_Bautista_CV.pdf), del historial de los repos y de las reseñas
 * de clientes; lo que no consta en ninguno de esos sitios va sin fecha exacta
 * («Antes de 42») en lugar de inventarla.
 */

type L = { es: string; en: string };

export type MilestoneKind = 'origin' | 'study' | 'work' | 'project';

export interface Milestone {
  /** Lo que se lee en la tarjeta: «Sept. 2023», «Antes de 42», «Hoy». */
  period: L;
  /** Número grande del fondo, el que se mueve en parallax. Opcional. */
  backdrop?: string | L;
  kind: MilestoneKind;
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
    period: { es: 'Abril 2026', en: 'April 2026' },
    backdrop: '2026',
    kind: 'study',
    title: { es: 'Cierro la formación en 42', en: 'I complete my training at 42' },
    description: {
      es: 'Termino la etapa de formación intensiva con proyectos como Minishell, Cub3D, ft_irc o Inception, todos corregidos a mano por otros estudiantes.',
      en: 'I wrap up the intensive training with projects such as Minishell, Cub3D, ft_irc and Inception, all graded by hand by other students.',
    },
  },
  {
    period: { es: '2026', en: '2026' },
    kind: 'work',
    title: { es: 'Volmer Studio', en: 'Volmer Studio' },
    place: { es: 'Webs y apps a medida', en: 'Custom websites and apps' },
    description: {
      es: 'Volmer Tech pasa a ser Volmer Studio: webs y apps a medida para negocios, 14 reseñas de 5 estrellas en Google y un panel propio para que cada cliente siga su proyecto, sus facturas y su soporte.',
      en: 'Volmer Tech becomes Volmer Studio: custom websites and apps for businesses, 14 five-star Google reviews and a dedicated portal where each client follows their project, invoices and support.',
    },
    link: { href: 'https://volmer.es', label: { es: 'volmer.es', en: 'volmer.es' } },
    current: true,
  },
  {
    // TODO: falta el nombre de la empresa, el puesto exacto y la fecha de inicio.
    period: { es: 'Hoy', en: 'Today' },
    backdrop: { es: 'Hoy', en: 'Now' },
    kind: 'work',
    title: { es: 'Desarrollador de software embebido', en: 'Embedded software developer' },
    place: { es: 'Robótica', en: 'Robotics' },
    description: {
      es: 'Software que corre en el propio hardware de las máquinas. El salto natural desde los proyectos de bajo nivel de 42.',
      en: "Software that runs on the machines' own hardware. The natural next step from 42's low-level projects.",
    },
    current: true,
  },
];
