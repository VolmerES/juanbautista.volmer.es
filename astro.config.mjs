// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://juandelorme-portfolio.volmer.es",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      // Herramienta privada para estudiantes de 42, fuera del índice.
      filter: (page) => !page.includes("/examrank06"),
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-ES",
          en: "en-US",
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      // Español sin prefijo, inglés bajo /en.
      prefixDefaultLocale: false,
    },
  },
});
