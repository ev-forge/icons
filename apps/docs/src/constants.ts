export const INSTALL_EXAMPLE = `npm i @ev-forge/icon-library`
export const ADD_TYPES_EXAMPLE = `{
    "include": ["node_modules/@ev-forge/icon-library/dist/global.d.ts"]
}`
export const IMPORT_AND_USE_IT_EXAMPLE = `import { svgHomeSolid, svgRadioSolid } from "@ev-forge/icon-library";

function MyApp() {
  return (
    <div>
      <ev-icon svg={svgHomeSolid} class="w-6 text-blue-500" />
    </div>
  );
}`

export const CREATE_DTS_FILE = `// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="node_modules/@ev-forge/icon-library/dist/global.d.ts" />`

export const ICON_LIBRARY_REGISTER = `"use client";

import { useEffect } from "react";

export const IconLibraryRegistry = () => {
  useEffect(() => {
    import("@ev-forge/icon-library");
  }, []);
  return null;
};`

export const REGISTER_IN_ASTRO = `<script>
  import "@ev-forge/icon-library";
</script>`

export const EXAMPLES_ASTRO = `// ℹ️ example in react:
import { svgHomeSolid } from "@ev-forge/icon-library";

function MyApp() {
  return (
    <div>
      <ev-icon svg={svgHomeSolid} class="w-6 text-blue-500" />
    </div>
  );
}


// ℹ️ example in astro Jsx:
---
import { svgRocketSolid } from "@ev-forge/icon-library";

import Layout from "../layouts/Layout.astro";
---

<Layout>
  <a href="/" class="p-2 flex items-center gap-2">
  Get Started <ev-icon svg={svgRocketSolid}></ev-icon>
  </a>
</Layout>`

export const LINKS = {
  "ev-forge": "https://github.com/ev-forge",
  "ev-icon-library": "https://github.com/ev-forge/ev-icon-library",
  "ev-icon-library-license": "https://github.com/ev-forge/ev-icon-library?tab=MIT-1-ov-file#readme",
  "ev": "https://github.com/elVengador",
  "fa": "https://fontawesome.com",
  "browser-icons": "/browser"
}
