// @ts-ignore
declare namespace React.JSX {
    interface IntrinsicElements {
        "ev-icon": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement>,
            HTMLElement
        > & {
            svg: string;
        };
    }
}

declare namespace astroHTML.JSX {
    interface IntrinsicElements {
        'ev-icon': HTMLAttributes & {
            svg: string;
        };
    }
}
