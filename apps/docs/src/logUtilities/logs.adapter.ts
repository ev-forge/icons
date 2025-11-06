import { METADATA } from "../constants";
import { posthogClient } from "./posthogSetUp";

export const logAdapter = (event: string, options?: Record<string, string | number>) =>
    posthogClient.capture(`${METADATA.prefix}_${event}`, options)