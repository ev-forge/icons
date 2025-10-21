# Icons Monorepo

[![NPM Version](https://img.shields.io/npm/v/@ev-forge/icons)](https://www.npmjs.com/package/@ev-forge/icons)
[![CI Status](https://github.com/tu-usuario/@ev-forge/icons/actions/workflows/ci.yml/badge.svg)](https://github.com/tu-usuario/@ev-forge/icons/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

A lightweight icon library delivering Font Awesome's high-quality icons via a framework-agnostic Web Component, with perfect, icon-level tree-shaking.

## ✨ Features

- **📦 Minimal Bundle Size:** Your final bundle only includes the icons you actually import. Over 80% smaller than traditional component libraries in our benchmarks.
- **🌳 Perfect Tree-shaking:** The architecture ensures that unused icons are always eliminated from your production build.
- **🧩 Framework Agnostic:** Built with a native Web Component. Works in React, Svelte, Vue, Astro, or simple HTML without wrappers.
- **🎨 Intuitive Styling:** Style icons directly with your favorite utility classes. No new APIs to learn.
- **🚀 Simple API:** No complex configuration. Import your icon's SVG and pass it to the component.

---

## 🚀 Performance Snapshot

`@ev-forge/icons` is designed for performance. In a benchmark simulating a modern application (a Vite + React SPA loading 32 unique icons), `@ev-forge/icons` demonstrates a significantly smaller impact on the final bundle.

**Benchmark Results:**
| Library | Bundle Impact (gzip) |
| :--- | :--- |
| **`@fortawesome/react-fontawesome`** | `~144 KB` |
| **`@ev-forge/icons`** | `~26 KB` |

_For a detailed analysis and to reproduce these results, please see the [benchmark package's README](./apps/benchmark-vite-react/README.md)._

## 🏁 Get Started (vite/react)

- install: `npm i @ev-forge/icons`
- set up the types in your tsconfig: `include: ["node_modules/@ev-forge/icons/dist/global.d.ts"]`
- import and use it:

```tsx
// 1. import icons
import { svgHomeSolid, svgRadioSolid } from "@ev-forge/icons";

// 2. use them in ev-icon
function MyApp() {
  return (
    <div>
      <ev-icon svg={svgHomeSolid} class="w-6 text-blue-500" />
      <ev-icon svg={svgRadioSolid} />
    </div>
  );
}
```

For a deep dive into the API, advanced features, and step-by-step integration guides for popular frameworks like **Next.js** and **Astro**, please see the full package documentation.

➡️ **[Full `ev-icon` Documentation](./packages/icons/README.md)**

## monorepo-info-begin

This monorepo contains the following packages, managed with `pnpm` workspaces:

| Package                                                           | Description                                       |
| :---------------------------------------------------------------- | :------------------------------------------------ |
| 📦 **[`packages/icons`](./packages/icons)**                       | The core icon library, published to npm.          |
| 🌐 **[`apps/docs`](./apps/docs)**                                 | The official landing page and browser icons site. |
| 📊 **[`apps/benchmark-vite-react`](./apps/benchmark-vite-react)** | The performance benchmark app for Vite + React.   |

To get started with local development, clone the repository and run `pnpm install`.

## 🤝 Contributing

Contributions are welcome! Please read our [**Contributing Guide**](./CONTRIBUTING.md) to get started.

## 🗺️ Roadmap

We have a clear vision for `@ev-forge/icons`. Our future plans include:

- A streamlined process for community-submitted original icons.
- Continued performance optimizations for render-time.
- Enhanced Accessibility: Audit and improve ARIA roles and keyboard interactions.
- Research and implement full SSR support

## 📄 License

The source code for this project is released under the **[MIT License](./LICENSE.md)**.

The base icons are provided by **Font Awesome Free** and are licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
