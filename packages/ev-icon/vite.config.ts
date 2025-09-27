import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts", // Punto de entrada de tu librería
      name: "FxIcon", // Nombre para la variable global en builds UMD/IIFE
      formats: ["es", "cjs"], // Formatos a generar (ES Modules, CommonJS)
      fileName: (format) => `fx-icon.${format}.js`, // Nombre de los archivos de salida
    },
    sourcemap: true, // Genera sourcemaps para facilitar la depuración
    // Vacía la carpeta 'dist' antes de cada build
    emptyOutDir: true,
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
});
