import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgRawPlugin from "./plugins/vite-plugin-svg-raw";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts", // Punto de entrada de tu librería
      name: "EvIcon", // Nombre para la variable global en builds UMD/IIFE
      formats: ["es", "cjs"], // Formatos a generar (ES Modules, CommonJS)
      fileName: (format) => `ev-icon.${format}.js`, // Nombre de los archivos de salida
    },
    sourcemap: true, // Genera sourcemaps para facilitar la depuración
    emptyOutDir: true, // Vacía la carpeta 'dist' antes de cada build
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    svgRawPlugin()
  ],
});
