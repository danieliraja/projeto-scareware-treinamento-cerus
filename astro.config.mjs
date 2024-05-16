import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://danieliraja.github.io",
  base: "/projeto-scareware-treinamento-cerus/",
  integrations: [tailwind()],
});
