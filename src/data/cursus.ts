/**
 * Proyectos del cursus de 42, en el orden real en que se desbloquean.
 *
 * La nota no es decorativa: en 42 la pone otro estudiante a mano durante la
 * evaluación, y por encima de 100 significa que se entregaron los bonus.
 */
export type Locale = "es" | "en";

export interface CursusProject {
  title: string;
  description: Record<Locale, string>;
  /** Nota tal cual aparece en la intra. `null` si aún no está evaluado. */
  grade: string | null;
  bonus: boolean;
  tech: string[];
  repo: string | null;
}

export const cursusProjects: CursusProject[] = [
  {
    title: "Libft",
    description: {
      es: "Mi primera librería en C. Una colección de funciones estándar y utilidades que he acabado usando en todo el cursus.",
      en: "My first C library. A collection of standard functions and helpers I ended up using throughout the whole cursus.",
    },
    grade: "125/100",
    bonus: true,
    tech: ["C", "Make"],
    repo: "https://github.com/VolmerES/libft",
  },
  {
    title: "ft_printf",
    description: {
      es: "Recreación de printf. Argumentos variables y formateo de cadenas desde cero.",
      en: "A reimplementation of printf. Variadic arguments and string formatting from scratch.",
    },
    grade: "100/100",
    bonus: false,
    tech: ["C", "Variadics"],
    repo: "https://github.com/VolmerES/ft_printf",
  },
  {
    title: "get_next_line",
    description: {
      es: "Leer una línea de un file descriptor. Suena simple hasta que llegas a la gestión de memoria estática.",
      en: "Read one line from a file descriptor. Sounds simple until you hit static memory management.",
    },
    grade: "125/100",
    bonus: true,
    tech: ["C", "File I/O"],
    repo: "https://github.com/VolmerES/get_next_line",
  },
  {
    title: "Born2BeRoot",
    description: {
      es: "Montar un servidor Debian seguro: particionado LVM, SSH, UFW y políticas de contraseñas estrictas.",
      en: "Setting up a hardened Debian server: LVM partitioning, SSH, UFW and strict password policies.",
    },
    grade: "125/100",
    bonus: true,
    tech: ["Debian", "Bash", "VirtualBox"],
    repo: null,
  },
  {
    title: "So Long",
    description: {
      es: "Un juego 2D pequeño con MiniLibX. Mi primer contacto con gráficos y bucles de eventos.",
      en: "A small 2D game with MiniLibX. My first contact with graphics and event loops.",
    },
    grade: "110/100",
    bonus: true,
    tech: ["C", "MiniLibX"],
    repo: "https://github.com/VolmerES/So_Long",
  },
  {
    title: "pipex",
    description: {
      es: "Reproducir los pipes de UNIX. Redirección de entrada/salida y ejecución encadenada de comandos.",
      en: "Reproducing UNIX pipes. I/O redirection and chained command execution.",
    },
    grade: "100/100",
    bonus: false,
    tech: ["C", "fork", "exec"],
    repo: "https://github.com/VolmerES/pipex",
  },
  {
    title: "Push Swap",
    description: {
      es: "Ordenar con dos pilas y un juego de instrucciones limitado. El proyecto que más veces reescribí.",
      en: "Sorting with two stacks and a limited instruction set. The project I rewrote the most times.",
    },
    grade: "84/100",
    bonus: false,
    tech: ["C", "Algorithms"],
    repo: "https://github.com/VolmerES/push_swap",
  },
  {
    title: "Philosophers",
    description: {
      es: "El problema de los filósofos comensales. Hilos, mutexes y evitar deadlocks sin trampas.",
      en: "The dining philosophers problem. Threads, mutexes and avoiding deadlocks without cheating.",
    },
    grade: "100/100",
    bonus: false,
    tech: ["C", "Threads", "Mutex"],
    repo: "https://github.com/VolmerES/Philosophers",
  },
  {
    title: "Minishell",
    description: {
      es: "Una shell funcional: pipes, redirecciones, variables de entorno y señales. Aquí entendí de verdad qué hace bash.",
      en: "A working shell: pipes, redirections, environment variables and signals. This is where I really understood what bash does.",
    },
    grade: "100/100",
    bonus: false,
    tech: ["C", "Processes", "Signals"],
    repo: "https://github.com/VolmerES/Minishell",
  },
  {
    title: "Cub3D",
    description: {
      es: "Motor 3D por raycasting, al estilo Wolfenstein. Texturas, colisiones y movimiento en tiempo real.",
      en: "A raycasting 3D engine, Wolfenstein style. Textures, collisions and real-time movement.",
    },
    grade: "115/100",
    bonus: true,
    tech: ["C", "MiniLibX", "Raycasting"],
    repo: "https://github.com/VolmerES/Cub3D",
  },
  {
    title: "NetPractice",
    description: {
      es: "Configuración de redes: máscaras de subred, direccionamiento IP y enrutado.",
      en: "Network configuration: subnet masks, IP addressing and routing.",
    },
    grade: "100/100",
    bonus: false,
    tech: ["Networking", "TCP/IP"],
    repo: "https://github.com/VolmerES/NetPractice",
  },
  {
    title: "C++ Piscine (00–09)",
    description: {
      es: "Diez módulos intensivos de C++. De lo básico de la orientación a objetos hasta plantillas y contenedores STL.",
      en: "Ten intensive C++ modules. From the basics of object orientation up to templates and STL containers.",
    },
    grade: "80–100/100",
    bonus: false,
    tech: ["C++", "OOP", "STL"],
    repo: "https://github.com/VolmerES/CPPModules00-04",
  },
  {
    title: "Inception",
    description: {
      es: "Un cluster de contenedores Docker configurado a mano: Nginx, WordPress y MariaDB, sin imágenes prefabricadas.",
      en: "A hand-configured Docker container cluster: Nginx, WordPress and MariaDB, no prebuilt images.",
    },
    grade: "100/100",
    bonus: false,
    tech: ["Docker", "Nginx", "MariaDB"],
    repo: "https://github.com/VolmerES/inception",
  },
  {
    title: "ft_irc",
    description: {
      es: "Un servidor IRC que funciona con clientes reales como HexChat. Sockets no bloqueantes y multiplexación de I/O.",
      en: "An IRC server that works with real clients like HexChat. Non-blocking sockets and I/O multiplexing.",
    },
    grade: "100/100",
    bonus: false,
    tech: ["C++", "Sockets", "IRC"],
    repo: "https://github.com/VolmerES/ft_irc",
  },
  {
    title: "Cybersecurity Piscine",
    description: {
      es: "Piscina de ciberseguridad: retos CTF, esteganografía, criptografía, explotación web y forense.",
      en: "Cybersecurity pool: CTF challenges, steganography, cryptography, web exploitation and forensics.",
    },
    grade: "100/100",
    bonus: false,
    tech: ["CTF", "Forensics", "Crypto"],
    repo: "https://github.com/VolmerES/Discovery_CyberSec_42_ES",
  },
  {
    title: "ft_transcendence",
    description: {
      es: "El proyecto final del Common Core: una plataforma de Pong online con chat en tiempo real, OAuth y multijugador.",
      en: "The Common Core's final project: an online Pong platform with real-time chat, OAuth and multiplayer.",
    },
    grade: null,
    bonus: false,
    tech: ["TypeScript", "WebSockets", "OAuth"],
    repo: null,
  },
];

export interface PersonalProject {
  title: string;
  description: Record<Locale, string>;
  status: "live" | "wip" | "archived";
  tech: string[];
  image: string | null;
  link: string | null;
}

export const personalProjects: PersonalProject[] = [
  {
    title: "Movie Swipe",
    description: {
      es: "Decidir qué peli ver en pareja deslizando, como en una app de citas. Cuando hay match, ya tenéis plan.",
      en: "Deciding what film to watch together by swiping, like a dating app. When you match, you have a plan.",
    },
    status: "wip",
    tech: ["Flutter", "Dart", "TMDB API"],
    image: "/movie-swipe-preview.png",
    link: null,
  },
  {
    title: "2048",
    description: {
      es: "El juego clásico en JavaScript sin librerías, hecho para entender bien la lógica de la cuadrícula.",
      en: "The classic game in plain JavaScript, built to properly understand the grid logic.",
    },
    status: "live",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "/2048-preview.png",
    link: "https://2048.volmer.es/",
  },
  {
    title: "Exam Rank 06",
    description: {
      es: "Un simulador del examen Rank 06 de 42 para practicar en condiciones parecidas a las reales. Lo uso yo y lo usan otros de mi promoción.",
      en: "A simulator for 42's Rank 06 exam, to practise under conditions close to the real thing. I use it, and so do others in my year.",
    },
    status: "live",
    tech: ["HTML", "CSS", "JavaScript"],
    image: null,
    link: "/examrank06",
  },
];
