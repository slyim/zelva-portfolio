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
 * @param loader A function that dynamically imports the sketch module
 * @param canvas The canvas element to attach the sketch to
 * @returns Cleanup function, or null if loading failed / no loader provided
 */
export async function loadSketch(
  loader: (() => Promise<any>) | undefined,
  canvas: HTMLCanvasElement
): Promise<(() => void) | null> {
  if (!loader) return null
  try {
    const mod = (await loader()) as SketchModule
    if (typeof mod.default === 'function') {
      const cleanup = mod.default(canvas)
      return typeof cleanup === 'function' ? cleanup : null
    }
  } catch (err) {
    console.warn('[sketchLoader] Failed to load sketch:', err)
  }
  return null
}
