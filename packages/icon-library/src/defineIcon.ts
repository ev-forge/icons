
export const defineMyIcon = () => {
    // ℹ️ to works on SSR
    if (typeof window === 'undefined') return

    const sharedStyle = document.createElement('style');
    sharedStyle.textContent = `
    :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1em;
        height: 1em;
        vertical-align: middle;
        color: inherit;
    }
    svg {
        width: 100%;
        height: 100%;
        display: block;
        fill: currentColor;
    }
`;

    class BaseIcon extends HTMLElement {
        private styleElement: HTMLStyleElement | null = null;
        private svgElement: SVGSVGElement | null = null;
        private isInitialized = false;


        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }

        static get observedAttributes() {
            return ['svg'];
        }


        connectedCallback() {
            // ℹ️ first render only one time if it was not rendered
            if (!this.isInitialized) {
                this.setupInitialDOM();
                this.isInitialized = true;
            }

            const svgRaw = this.getAttribute('svg');
            if (svgRaw) this.updateSvg(svgRaw);
        }

        attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
            if (!this.isInitialized) return;
            const svgChanged = name === 'svg' && oldValue !== newValue && newValue
            if (svgChanged) this.updateSvg(newValue);
        }


        private setupInitialDOM() {
            const shadow = this.shadowRoot;
            if (!shadow) return;

            // ℹ️ efficient in speed and memory (access to same memory position)
            this.styleElement = sharedStyle.cloneNode(true) as HTMLStyleElement;
            shadow.appendChild(this.styleElement);
        }

        private updateSvg(svgRaw: string) {
            const shadow = this.shadowRoot;
            if (!shadow) return;

            // ℹ️ DOMParser generally is more efficient than create template
            const parser = new DOMParser();
            const doc = parser.parseFromString(svgRaw, 'image/svg+xml');
            const newSvgElement = doc.documentElement as unknown as SVGSVGElement | null;

            // ℹ️ manage error
            if (!newSvgElement || newSvgElement.nodeName === 'parsererror') {
                if (this.svgElement) this.svgElement.remove();
                this.svgElement = null;
                return console.warn("ev-icon: invalid svg");
            }

            this.svgElement ? shadow.replaceChild(newSvgElement, this.svgElement) : shadow.appendChild(newSvgElement)
            this.svgElement = newSvgElement;
        }
    }

    if (!customElements.get('ev-icon')) {
        customElements.define('ev-icon', BaseIcon);
    }
}


