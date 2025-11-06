import posthog from 'posthog-js'

console.log({ tt: import.meta.env, old: process?.env, node_env: process.env.NODE_ENV })
if (process.env.NODE_ENV === 'production') {
    posthog.init(import.meta.env.PUBLIC_POSTHOG_KEY, {
        api_host: 'https://us.i.posthog.com',
        autocapture: false,
        capture_pageview: false
    })
}

export const posthogClient = posthog
