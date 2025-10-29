# @ev-forge/icons

[![NPM Version](https://img.shields.io/npm/v/@ev-forge/icons)](https://www.npmjs.com/package/@ev-forge/icons)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@ev-forge/icons)](https://bundlephobia.com/package/@ev-forge/icons)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

A lightweight icon library delivering Font Awesome's high-quality icons via a framework-agnostic Web Component, with perfect, icon-level tree-shaking.

<!-- ➡️ **Visit the main project repository:** [github.com/ev-forge/icons](https://github.com/ev-forge/icons) -->

---

## ✨ Philosophy

`@ev-forge/icons` is designed with three core principles:

1.  **Performance First:** The library uses an architecture that allows for perfect, icon-level tree-shaking. Your final bundle will only include the icons you explicitly import, resulting in the smallest possible footprint.
2.  **Framework Agnostic:** Built with native Web Components, `@ev-forge/icons` works seamlessly in any environment—React, Svelte, Vue, Astro, or simple HTML—without wrappers or overhead.
3.  **Simplicity:** The API is designed to be minimal and intuitive. Style icons with your favorite utility classes.

## 🏁 Get Started

### In Vite/React

1. Installation

```bash
npm i @ev-forge/icons
```

2. Add types for web component into tsconfig.json

```json
{
  "include": ["node_modules/@ev-forge/icons/dist/global.d.ts"]
}
```

3. Import and Use

```tsx
import { svgHomeSolid, svgRadioSolid } from "@ev-forge/icons";

function MyApp() {
  return (
    <div>
      <ev-icon svg={svgHomeSolid} class="w-6 text-blue-500" />
    </div>
  );
}
```

### In NextJs

```bash
npm i @ev-forge/icons
```

2. Add types for web component, create a file `ev-forge-icons.d.ts` and copy inside

```ts
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="node_modules/@ev-forge/icons/dist/global.d.ts" />
```

3. (Optional) For Next.js with Server-Side Rendering (SSR):
   To ensure icons render correctly, you must register the component library on the client-side. Create the file `IconLibraryRegistry.tsx` and paste the following code:

```jsx
"use client";

import { useEffect } from "react";

export const IconLibraryRegistry = () => {
  useEffect(() => {
    import("@ev-forge/icons");
  }, []);
  return null;
};
```

4. Import and Use

```tsx
// 1. import icons
import { svgHomeSolid, svgRadioSolid } from "@ev-forge/icons";

// 2. use them in ev-icon
function MyApp() {
  return (
    <div>
      <ev-icon svg={svgHomeSolid} class="w-6 text-blue-500" />
    </div>
  );
}
```

### In Astro/React

```bash
npm i @ev-forge/icons
```

2. Add types for web component into tsconfig.json

```json
{
  "include": ["node_modules/@ev-forge/icons/dist/global.d.ts"]
}
```

3. (Optional) For Astro with Server-Side Rendering (SSR):
   To ensure icons render correctly, you must register the component library on the client-side. Add the script into your Layout

```html
<script>
  import "@ev-forge/icons";
</script>
```

4. Import and Use

```tsx
// ℹ️ example in react:
import { svgHomeSolid } from "@ev-forge/icons";

function MyApp() {
  return (
    <div>
      <ev-icon svg={svgHomeSolid} class="w-6 text-blue-500" />
    </div>
  );
}
```

```tsx
// ℹ️ example in astro Jsx:
---
import { svgRocketSolid } from "@ev-forge/icons";

import Layout from "../layouts/Layout.astro";
---

<Layout>
  <a href="/" class="p-2 flex items-center gap-2">
  Get Started <ev-icon svg={svgRocketSolid}></ev-icon>
  </a>
</Layout>
```

## 🎨 Styling

Styling `ev-icon` is simple and uses the standard CSS properties you already know. There are no special variables to learn.

The component is a `display: inline-flex` element that defaults to `1em` width and height, scaling with the surrounding font size. The internal SVG will automatically inherit the text `color`.

### Using Utility Classes (like Tailwind CSS)

Apply size and color classes directly to the component.

```html
<!-- A 24px (w-6) red icon -->
<ev-icon svg="{svgRadioSolid}" class="w-6 text-red-500" />
```

### Using a Global Stylesheet

You can set default styles for all icons in your application.

```css
/* In your main index.css */
ev-icon {
  width: 1.5rem; /* Default size for all icons */
  height: 1.5rem;
  color: #333;
}

ev-icon.success {
  color: green;
}
```

<!--
## ♿️ Accessibility

For an icon to be accessible to screen readers, provide a `label` attribute. This is crucial for icons used as buttons or interactive elements.

```html
<button>
  <ev-icon svg="{trashIcon}" label="Delete item"></ev-icon>
</button>
```

If an icon is purely decorative (e.g., next to visible text), omit the `label` attribute. The component will automatically hide it from screen readers. -->

## 💡 Advanced Usage

### Using in Plain HTML

For projects without a JavaScript bundler, we recommend copying the raw SVG content directly into your HTML. This is often more performant than loading a JavaScript library for simple use cases. A full list of icons can be found on the [Font Awesome website](https://fontawesome.com/icons).

<!-- ### Finding Icons

The icon modules are split into three categories. You can import them from:

- `@ev-forge/icons/solid`
- `@ev-forge/icons/regular`
- `@ev-forge/icons/brands` -->

<!-- ## 🤝 Contributing

This is a community-driven project. We welcome contributions, especially new original icons! Please see the main repository's [Contributing Guide](https://github.com/ev-forge/icons/blob/main/CONTRIBUTING.md). -->

## 📄 License

The source code for `@ev-forge/icons` is released under the **MIT License**.

The base icons are provided by **Font Awesome Free** and are licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
