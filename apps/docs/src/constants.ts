export const INSTALL_EXAMPLE = `npm i @ev-forge/icon-library`
export const ADD_TYPES_EXAMPLE = `{
    "include": ["node_modules/@ev-forge/icon-library/dist/global.d.ts"]
}`
export const IMPORT_AND_USE_IT_EXAMPLE = `// 1. import icons
import { svgHomeSolid, svgRadioSolid } from "@ev-forge/icon-library";

// 2. use them in ev-icon
function MyApp() {
  return (
    <div>
      <ev-icon svg={svgHomeSolid} class="w-6 h-6 text-blue-500" />
      <ev-icon svg={svgRadioSolid} />
    </div>
  );
}`

export const LINKS = {
    "ev-forge": "https://github.com/ev-forge",
    "ev-icon-library": "",
    "ev-icon-library-license": "",
    "ev": "https://github.com/elVengador",
    "fa": "https://fontawesome.com",
    "browser-icons": "/browser"
}