import 'react';

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'ev-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                svg: string;
            };
        }
    }
}