
import 'server-only'

const cmsURL = process.env.PAYLOAD_CMS_URL
const apiKey = process.env.PAYLOAD_API_KEY

export async function getCMS<T>(
  path: string,
): Promise<T> {
  if (!cmsURL) {
    throw new Error('PAYLOAD_CMS_URL is not configured')
  }

  const response = await fetch(
    `${cmsURL.replace(/\/$/, '')}${path}`,
    {
      headers: apiKey
        ? {
            Authorization: `users API-Key ${apiKey}`,
          }
        : {},
      cache: 'no-store',
      signal: AbortSignal.timeout(8000),
    },
  )

  if (!response.ok) {
    throw new Error(
      `CMS request failed with status ${response.status}`,
    )
  }

  return response.json() as Promise<T>
}
