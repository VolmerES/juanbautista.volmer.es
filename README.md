# juanbautista.volmer.es

Portafolio personal de Juan Delorme, estudiante de 42 Madrid. Recoge el cursus,
los proyectos que hago por gusto y el cuaderno de notas.

Es la mitad personal de una separación: el trabajo profesional vive aparte en
[volmer.es](https://volmer.es) (Volmer Studio), y las dos webs no comparten ni
código ni identidad visual a propósito.

## Stack

Astro 5 estático, Tailwind 4 y colecciones de contenido para el blog. Sin
JavaScript de cliente salvo el que traiga alguna página suelta.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/
```

## Estructura

```
src/
  data/cursus.ts          Proyectos de 42 y proyectos propios (fuente única, bilingüe)
  i18n/ui.ts              Diccionario ES/EN, rutas y equivalencias entre idiomas
  components/pages/       El contenido de cada página, compartido entre ES y EN
  content/blog/{es,en}/   Entradas del cuaderno en Markdown
  pages/                  Español en la raíz, inglés bajo /en
```

Las páginas de `src/pages/` son envoltorios finos: importan un componente de
`components/pages/` y le ponen título y descripción. Así un cambio de contenido
se hace una vez y sale en los dos idiomas, en vez de duplicar la página entera.

## Diseño

La referencia es un cuaderno escolar corregido: fondo cuadriculado, tinta azul
de bolígrafo y las notas de los proyectos de 42 escritas en rojo al margen, que
es como se evalúan de verdad en la escuela. Los tokens están en
`src/styles/global.css`.

## Notas

- `/examrank06` es una herramienta autocontenida para practicar el examen Rank 06.
  No usa el layout del sitio y está excluida del sitemap y de `robots.txt`.
- Español sin prefijo, inglés bajo `/en`. Los slugs se traducen
  (`/proyectos` ↔ `/en/projects`) y el conmutador de idioma los resuelve en
  `getAlternateUrl`.
