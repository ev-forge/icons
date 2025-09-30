# ev-icon

## Features

- [x] Tree-shaking
- [x] SSR-safe
- [x] Agnostic framework
- [x] Dynamic props
- [ ] Minimum initial load // in future
- [x] Simplicity
- [x] Minimum bundle
- [x] Automatic Dom Manage
  - react import, add types and use it
  - astro import, add types, define icon and use it

todo: Doc page page

- make landing page
- make browser page
- write post
- test it with RP
- can I remove the comments// to minify more
- check collaboarion o buy me a coffe
- prepare ci-cd
- ask for more plan regarding the repository start
- prepare the readme
- define philosoy and roadmap
- 💪 MVP is isntalling from github into RP and check it

## Get Started

### Working in React

- install `npm i ev-icon-library`
- add the types on your `tsconfig.ts` into `{ include: "node_modules/ev-icon/dist/global.d.ts" }`
- rendering an icon

```jsx
import { svgHome } from "ev-icon"; // this will use and setup automatically

const TestIcon = () => {
  return <ev-icon svg={svgHome} className="text-blue-500" />;
};
```

### Working in Astro

- install `npm i ev-icon-library`
- add the types on your `tsconfig.ts` into `{ include: "node_modules/ev-icon/dist/global.d.ts" }`
- rendering an icon

```html
---
import { svgHome } from "ev-icon";
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content="{Astro.generator}" />
    <title>Astro</title>
    <script>
      import "ev-icon"; // 👈 register the web component before to use it
    </script>
  </head>
  <body>
    <ev-icon svg="{svgHome}"></ev-icon>
  </body>
</html>
```

## Comparisons

A Empty react component loading icons

- with all the icons 2.6mb
- with 1 icon 2kb
- with 10 icons 15kb

An large application loading Icons from Font awesome vs loading from ev-icon-library

---

Claro. Aquí tienes el resumen súper conciso en Markdown.

---

```md
### 1. Homepage (`/`) - Marketing y Narrativa

- **Objetivo:** Convencer al visitante del valor del proyecto ("El Porqué").
- **Estructura:**
  1.  **Hero Section:**
      - Título, descripción y características clave.
      - **CTA Principal:** Botón `Get Started` (scroll al final de la página).
      - **CTA Secundario:** Enlace `Browse Icons` (lleva a `/browse`).
  2.  **Sección de Filosofía:**
      - Explica la visión: simplicidad, rendimiento, comunidad.
  3.  **Sección "Get Started":**
      - Guía de instalación en 3 pasos (Instalar, Importar, Usar).
      - **CTA Final:** Enlace a la página de búsqueda.
  4.  **Footer:**
      - Atribución a Font Awesome, enlaces a GitHub/Blog.

### 2. Página de Búsqueda (`/browse`) - La Herramienta

- **Objetivo:** Ser la forma más rápida para que los usuarios encuentren y copien iconos.
- **Estructura:**
  1.  **Buscador prominente.**
  2.  **Cuadrícula de iconos** filtrable en tiempo real.
  3.  **Funcionalidad al hacer clic:** Pop-up o panel lateral para copiar la etiqueta HTML y el nombre del icono.
```
