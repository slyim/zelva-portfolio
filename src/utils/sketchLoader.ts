export interface SketchModule {
  default: (canvas: HTMLCanvasElement) => (() => void) | void
}

/**
 * Dynamically load a sketch module and run it on the given canvas.
 * Sketches should be ES modules exporting a default function:
 *   export default function runSketch(canvas: HTMLCanvasElement): (() => void) | void
 *
 * The returned cleanup function is called when the sketch should stop.
 *
 * @param path Absolute URL path to the sketch (e.g. '/sketches/particle-flow.js')
 * @param canvas The canvas element to attach the sketch to
 * @returns Cleanup function, or null if loading failed / no path provided
 */
export async function loadSketch(
  path: string,
  canvas: HTMLCanvasElement
): Promise<(() => void) | null> {
  if (!path) return null
  try {
    // @vite-ignore
    const mod = (await import(path)) as SketchModule
    if (typeof mod.default === 'function') {
      const cleanup = mod.default(canvas)
      return typeof cleanup === 'function' ? cleanup : null
    }
  } catch (err) {
    console.warn('[sketchLoader] Failed to load sketch:', path, err)
  }
  return null
}
