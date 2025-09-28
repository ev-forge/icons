import { defineMyIcon } from './defineIcon';


defineMyIcon()

export * from "./gen/brandIcons"
export * from "./gen/regularIcons"
export * from "./gen/solidIcons"

// <mi-icon svg={icons.home} class="w-6 h-6 text-red-500"></mi-icon>

// import { iconMetadata } from "./generated/metadata";
// import { IconName } from "./generated/types";

// console.log("ev")
// if (typeof window !== 'undefined') {
//   console.log("ev1")


//   /**
//    * @summary An optimized web component for displaying SVG icons.
//    * @description
//    * The `ev-icon` component lazy-loads icons on demand and is designed for high performance
//    * and accessibility. It automatically registers itself as a custom element when imported.
//    * 
//    * @tag ev-icon
//    * @element ev-icon
//    *
//    * @attr {string} name - The name of the icon to display (e.g., "home", "cog").
//    * @attr {string} [label] - An accessible label for the icon. If provided, the icon is treated as a meaningful image. If omitted, the icon is considered decorative.
//    *
//    * @cssprop [--icon-size=1em] - Controls the size (width and height) of the icon. It defaults to the current font size.
//    * @cssprop [--icon-color=inherit] - Controls the color of the icon. It defaults to the current text color.
//    *
//    * @example
//    * <!-- Basic decorative icon -->
//    * <span>Settings <ev-icon name="cog"></ev-icon></span>
//    *
//    * @example
//    * <!-- Interactive icon with an accessible label -->
//    * <button>
//    *   <ev-icon name="trash" label="Delete item"></ev-icon>
//    * </button>
//    *
//    * @example
//    * <!-- Styled icon using CSS Custom Properties -->
//    * <ev-icon name="heart" style="--icon-size: 2rem; --icon-color: red;"></ev-icon>
//    */
//   class EvIcon extends HTMLElement {
//     constructor() {
//       super();
//       this.attachShadow({ mode: "open" });
//       console.log("create ev")
//     }

//     static get observedAttributes() {
//       return ["name"];
//     }

//     attributeChangedCallback(name: string, _: IconName, newValue: IconName) {
//       console.log("11")
//       if (name === "name" && newValue) {
//         this.loadIcon(newValue);
//       }
//     }

//     async loadIcon(iconName: IconName) {
//       console.log("ev3")
//       if (!this.shadowRoot) return;
//       console.log("ev4")
//       this.shadowRoot.innerHTML = '<div class="loading">...</div>';

//       try {
//         // ℹ️ the bundler creates chunks for efficient, tree-shaken loading.
//         const path = iconMetadata[iconName]
//         const tt = path.replace("../assets/", "")
//         // console.log(path, tt)
//         // const iconModule = await import("icons/" + tt);
//         // this.shadowRoot.innerHTML = iconModule.default;

//         const url = new URL(`./assets/${tt}`, import.meta.url).href;
//         const res = await fetch(url);
//         const svgText = await res.text();
//         this.shadowRoot.innerHTML = svgText;
//       } catch (error) {
//         console.error(`Can't load: ${iconName}`, error);
//         this.shadowRoot.innerHTML = '<svg class="error">...</svg>';
//       }
//     }
//   }


//   // ℹ️ register the component automatically
//   // if (!customElements.get("ev-icon")) 


//   // customElements.define("mi-icon", MyIcon);
//   console.log("ev-5")
//   customElements.define("ev-icon", EvIcon);
// }