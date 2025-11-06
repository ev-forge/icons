import posthog from 'posthog-js'

if (process.env.MODE === 'production') {
    console.log({ tt: import.meta.env })
    posthog.init(import.meta.env.PUBLIC_POSTHOG_KEY, {
        api_host: 'https://us.i.posthog.com',
        autocapture: false,
        capture_pageview: false
    })
}

export const posthogClient = posthog
