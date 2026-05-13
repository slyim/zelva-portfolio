/**
 * Lazy-load p5.js library only when needed.
 * Returns a promise that resolves when p5 is available on window.
 */
let p5LoadPromise: Promise<void> | null = null

export function loadP5(): Promise<void> {
  if (window.p5) return Promise.resolve()
  if (p5LoadPromise) return p5LoadPromise

  p5LoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js'
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load p5.js'))
    document.head.appendChild(script)
  })

  return p5LoadPromise
}

declare global {
  interface Window {
    p5?: any
  }
}
