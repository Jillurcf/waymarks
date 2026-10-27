/**
 * Sanity CMS client for build-time fetching (static export compatible).
 * Falls back gracefully if env vars are missing or requests fail.
 */

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const DATASET = process.env.SANITY_DATASET ?? "production";
const API_TOKEN = process.env.SANITY_API_TOKEN ?? "";
const API_VERSION = process.env.SANITY_API_VERSION ?? "2025-10-01";

export function isSanityConfigured(): boolean {
  return Boolean(PROJECT_ID);
}

function getApiUrl(): string {
  if (!PROJECT_ID) return "";
  return `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}`;
}

async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeoutMs = 10000,
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    return res;
  } finally {
    clearTimeout(timer);
  }
}

export async function fetchSanity<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!isSanityConfigured()) {
    return null;
  }

  try {
    const url = getApiUrl();
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (API_TOKEN) {
      headers.Authorization = `Bearer ${API_TOKEN}`;
    }

    const res = await fetchWithTimeout(url, {
      method: "POST",
      headers,
      body: JSON.stringify({ query, params }),
    });

    if (!res.ok) {
      console.warn(`[sanity] Failed to fetch: ${res.status}`);
      return null;
    }

    const json = (await res.json()) as { result?: T; error?: unknown };
    if (json.error) {
      console.warn(`[sanity] Query error:`, json.error);
      return null;
    }
    return json.result ?? null;
  } catch (err) {
    console.warn(`[sanity] Error fetching from Sanity:`, err);
    return null;
  }
}

export async function fetchSanitySingle<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  const result = await fetchSanity<T>(query, params);
  if (!result) return null;
  if (Array.isArray(result)) {
    return result[0] ?? null;
  }
  return result;
}

export async function fetchSanityAll<T>(query: string, params: Record<string, unknown> = {}): Promise<T[]> {
  const result = await fetchSanity<T[]>(query, params);
  if (!result) return [];
  return Array.isArray(result) ? result : [];
}
