import fs from 'fs';
import path from 'path';

export default function svgRawPlugin() {
    return {
        name: 'vite-plugin-svg-raw',
        transform(src: string, id: string) {
            // Asegurarse de que solo procesamos archivos .svg
            if (id.endsWith('.svg')) {
                // Leer el archivo SVG como texto crudo
                const content = fs.readFileSync(id, 'utf-8');
                // Devolver el contenido del SVG como texto
                return {
                    code: `export default ${JSON.stringify(content)};`,
                    map: null, // Opcional, si no necesitas soporte de source maps
                };
            }
            return null; // No hacer nada con otros tipos de archivos
        },
    };
}
