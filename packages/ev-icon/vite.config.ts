import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgRawPlugin from "./plugins/vite-plugin-svg-raw";
import fs from 'fs'
import { resolve } from 'path';


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
      include: ['src'],
      afterBuild: () => {
        // Paso 1: Copiar el archivo global.d.ts al directorio dist.
        fs.copyFileSync(
          resolve(__dirname, 'src/global.d.ts'),
          resolve(__dirname, 'dist/global.d.ts')
        );

      },
      //       beforeWriteFile(filePath, content) {
      //         if (filePath.endsWith('index.d.ts')) {
      //           const augment = `
      // /// <reference types="react" />
      // declare global {
      //   namespace JSX {
      //     interface IntrinsicElements {
      //       'ev-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      //         svg: string;
      //       };
      //     }
      //   }
      // }
      // `;
      //           return {
      //             filePath,
      //             content: content + augment,
      //           };
      //         }
      //         return { filePath, content };
      //       },
    }),
    svgRawPlugin()
  ],
});
