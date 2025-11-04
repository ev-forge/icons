import { logAdapter } from "./logs.adapter";



/**
 * document.addEventListener('DOMContentLoaded', () => observeAndTrackSections([ 'hero-section' ])
 */
export const observeAndTrackSections = (sections: string[]): void => {
    const options: IntersectionObserverInit = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = sections.find(s => s === entry.target.id);
                if (section) {
                    logAdapter('view_section', { section });
                    observer.unobserve(entry.target);
                }
            }
        });
    }, options);

    sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) observer.observe(element)
        else console.warn(`Element with "${section}" not found`);

    });
};

/**
 * usage: 
 * document.addEventListener('DOMContentLoaded', () => trackPageView({ page_type: 'landing_page', version: 2 })
 */
export const trackPageView = (customProperties: Record<string, any> = {}): void => {
    console.log("ddd")
    const defaultProperties: Record<string, string> = {
        url: window.location.pathname,
        path: window.location.pathname,
        title: document.title,
        referrer: document.referrer,
    };
    const allProperties = { ...defaultProperties, ...customProperties };
    logAdapter('pageview', allProperties);
}

export const log = (eventName: string, options?: Record<string, string>) => logAdapter(eventName, options)