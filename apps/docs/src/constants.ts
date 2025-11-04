export const INSTALL_EXAMPLE = `npm i @ev-forge/icons`
export const ADD_TYPES_EXAMPLE = `{
    "include": ["node_modules/@ev-forge/icons/dist/global.d.ts"]
}`

export const CREATE_DTS_FILE = `// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="node_modules/@ev-forge/icons/dist/global.d.ts" />`

export const ICON_LIBRARY_REGISTER = `"use client";

import { useEffect } from "react";

export const IconLibraryRegistry = () => {
  useEffect(() => {
    import("@ev-forge/icons");
  }, []);
  return null;
};`

export const REGISTER_IN_ASTRO = `<script>
  import "@ev-forge/icons";
</script>`

export const EXAMPLE_REACT = `import { solidHouse } from "@ev-forge/icons";
const MyComponent = () => {
  return <div><ev-icon svg={solidHouse}/></div>
}`

export const LINKS = {
  "ev-forge": "https://github.com/ev-forge",
  "ev-forge-icons": "https://github.com/ev-forge/icons",
  "ev-forge-icons-license": "https://github.com/ev-forge/icons?tab=MIT-1-ov-file#readme",
  "ev": "https://github.com/elVengador",
  "fa": "https://fontawesome.com",
  "browser-icons": "/browser"
}
