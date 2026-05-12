<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animId = 0
let startTime = 0

/* ===== Simple 2D noise ===== */
function hash2(x: number, y: number) {
  let h = x * 374761393 + y * 668265263
  h = (h ^ (h >> 13)) * 1274126177
  return (h ^ (h >> 16)) & 255
}

function grad(hash: number, x: number, y: number) {
  const h = hash & 3
  const u = h < 2 ? x : -x
  const v = h < 1 ? y : h < 3 ? -y : 0
  return u + v
}

function noise2d(x: number, y: number) {
  const X = Math.floor(x) & 255
  const Y = Math.floor(y) & 255
  const xf = x - Math.floor(x)
  const yf = y - Math.floor(y)
  const u = xf * xf * xf * (xf * (xf * 6 - 15) + 10)
  const v = yf * yf * yf * (yf * (yf * 6 - 15) + 10)

  const aa = hash2(X, Y)
  const ab = hash2(X, Y + 1)
  const ba = hash2(X + 1, Y)
  const bb = hash2(X + 1, Y + 1)

  const x1 = grad(aa, xf, yf)
  const x2 = grad(ba, xf - 1, yf)
  const y1 = grad(ab, xf, yf - 1)
  const y2 = grad(bb, xf - 1, yf - 1)

  return (x1 + (x2 - x1) * u + (y1 - x1) * v) * 0.5 + 0.5
}

function fbm(x: number, y: number, t: number) {
  let value = 0
  let amplitude = 0.5
  let frequency = 1
  for (let i = 0; i < 4; i++) {
    value += amplitude * noise2d(x * frequency + t * 0.3, y * frequency + t * 0.2)
    amplitude *= 0.5
    frequency *= 2
  }
  return value
}

function getAccent(): string {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light'
  return isLight ? '90, 158, 0' : '208, 255, 0'
}

function draw(time: number) {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const w = canvas.width
  const h = canvas.height
  const accent = getAccent()

  ctx.clearRect(0, 0, w, h)

  const cols = 30
  const rows = 20
  const cellW = w / cols
  const cellH = h / rows
  const t = time * 0.0003

  for (let y = 0; y <= rows; y++) {
    for (let x = 0; x <= cols; x++) {
      const nx = x / cols
      const ny = y / rows
      const n = fbm(nx * 2, ny * 2, t)
      const r = Math.max(1, n * Math.min(cellW, cellH) * 0.8)
      const alpha = n * 0.5

      ctx.beginPath()
      ctx.arc(x * cellW, y * cellH, r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${accent}, ${alpha})`
      ctx.fill()
    }
  }
}

function resize() {
  const canvas = canvasRef.value
  if (!canvas) return
  const rect = canvas.getBoundingClientRect()
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  canvas.width = rect.width * dpr
  canvas.height = rect.height * dpr
  const ctx = canvas.getContext('2d')
  if (ctx) ctx.scale(dpr, dpr)
}

function animate() {
  draw(performance.now() - startTime)
  animId = requestAnimationFrame(animate)
}

onMounted(() => {
  resize()
  startTime = performance.now()
  animate()
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  cancelAnimationFrame(animId)
  window.removeEventListener('resize', resize)
})
</script>

<template>
  <canvas ref="canvasRef" class="perlin-canvas" />
</template>

<style scoped>
.perlin-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 0;
}
</style>
