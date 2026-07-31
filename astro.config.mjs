import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://noetheca.github.io",
  output: "static",
  build: {
    format: "directory",
  },
});
