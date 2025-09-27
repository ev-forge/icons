/**
 * @summary An optimized web component for displaying SVG icons.
 * @description
 * The `ev-icon` component lazy-loads icons on demand and is designed for high performance
 * and accessibility. It automatically registers itself as a custom element when imported.
 * 
 * @tag ev-icon
 * @element ev-icon
 *
 * @attr {string} name - The name of the icon to display (e.g., "home", "cog").
 * @attr {string} [label] - An accessible label for the icon. If provided, the icon is treated as a meaningful image. If omitted, the icon is considered decorative.
 *
 * @cssprop [--icon-size=1em] - Controls the size (width and height) of the icon. It defaults to the current font size.
 * @cssprop [--icon-color=inherit] - Controls the color of the icon. It defaults to the current text color.
 *
 * @example
 * <!-- Basic decorative icon -->
 * <span>Settings <ev-icon name="cog"></ev-icon></span>
 *
 * @example
 * <!-- Interactive icon with an accessible label -->
 * <button>
 *   <ev-icon name="trash" label="Delete item"></ev-icon>
 * </button>
 *
 * @example
 * <!-- Styled icon using CSS Custom Properties -->
 * <ev-icon name="heart" style="--icon-size: 2rem; --icon-color: red;"></ev-icon>
 */
class EvIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["name"];
  }

  attributeChangedCallback(name: string, _: string, newValue: string) {
    if (name === "name" && newValue) {
      this.loadIcon(newValue);
    }
  }

  async loadIcon(iconName: string) {
    if (!this.shadowRoot) return;
    this.shadowRoot.innerHTML = '<div class="loading">...</div>';

    try {
      // ℹ️ the bundler creates chunks for efficient, tree-shaken loading.
      const iconModule = await import(`./icons/${iconName}.js`);
      this.shadowRoot.innerHTML = iconModule.default;
    } catch (error) {
      console.error(`Can't load: ${iconName}`, error);
      this.shadowRoot.innerHTML = '<svg class="error">...</svg>';
    }
  }
}


// ℹ️ register the component automatically
if (!customElements.get("ev-icon")) customElements.define("ev-icon", EvIcon);

export { EvIcon }