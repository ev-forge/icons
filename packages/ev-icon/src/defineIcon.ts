
export const defineMyIcon = () => {
    console.log("define")
    if (typeof window === 'undefined') return

    const sharedStyle = document.createElement('style');
    sharedStyle.textContent = `
    :host {
        display: inline-block;
        width: 1em;
        height: 1em;
    }
    svg {
        width: 100%;
        height: 100%;
        display: block;
    }
`;

    class EvIcon extends HTMLElement {
        constructor() {
            console.log("ok")
            super();


            const shadow = this.attachShadow({ mode: 'open' });


            const svgRaw = this.getAttribute('svg');
            if (!svgRaw) return;

            shadow.innerHTML = '';
            const styleClone = sharedStyle.cloneNode(true);
            shadow.appendChild(styleClone);
            const template = document.createElement('template');
            template.innerHTML = svgRaw;
            shadow.appendChild(template.content.cloneNode(true));
        }
    }

    if (!customElements.get('ev-icon')) {
        customElements.define('ev-icon', EvIcon);
    }
}
