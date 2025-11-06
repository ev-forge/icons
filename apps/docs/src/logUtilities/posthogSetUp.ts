import posthog from 'posthog-js'

if (process.env.NODE_ENV === 'production') {
    posthog.init(import.meta.env.PUBLIC_POSTHOG_KEY, {
        api_host: 'https://us.i.posthog.com',
        autocapture: false,
        capture_pageview: false
    })
}

export const posthogClient = posthog
