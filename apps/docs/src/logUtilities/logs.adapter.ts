import { posthogClient } from "./posthogSetUp";

export const logAdapter = (event: string, options?: Record<string, string>) =>
    posthogClient.capture(`${"ev-forge-icons"}_${event}`, options)