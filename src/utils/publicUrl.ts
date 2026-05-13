/**
 * Prepend the Vite base URL to a public asset path.
 * In dev this is just '/', in production it's '/zelva-portfolio/'.
 *
 * Usage: publicUrl('/designs/ufocar/1.webp')
 *   → '/zelva-portfolio/designs/ufocar/1.webp'
 */
export function publicUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return base + cleanPath
}
