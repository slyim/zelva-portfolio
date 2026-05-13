<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)

let ctx: CanvasRenderingContext2D | null = null
let animationId = 0
let w = 0
let h = 0

interface Particle {
  x: number
  y: number
  size: number
  speedY: number
  opacity: number
  opacitySpeed: number
  maxOpacity: number
}

let particles: Particle[] = []

function createParticle(): Particle {
  return {
    x: Math.random() * w,
    y: h + Math.random() * 20,
    size: Math.random() * 1.5 + 0.5,
    speedY: -(Math.random() * 0.4 + 0.15),
    opacity: 0,
    opacitySpeed: Math.random() * 0.008 + 0.003,
    maxOpacity: Math.random() * 0.6 + 0.2,
  }
}

function init() {
  const canvas = canvasRef.value
  if (!canvas) return
  ctx = canvas.getContext('2d')
  if (!ctx) return
  resize()

  particles = []
  const count = Math.min(80, Math.floor((w * h) / 8000))
  for (let i = 0; i < count; i++) {
    const p = createParticle()
    p.y = Math.random() * h
    p.opacity = Math.random() * p.maxOpacity
    particles.push(p)
  }

  animate()
}

function resize() {
  const canvas = canvasRef.value
  if (!canvas) return
  const parent = canvas.parentElement
  if (!parent) return
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  w = parent.clientWidth
  h = parent.clientHeight
  canvas.width = w * dpr
  canvas.height = h * dpr
  canvas.style.width = w + 'px'
  canvas.style.height = h + 'px'
  if (ctx) ctx.scale(dpr, dpr)
}

function getThemeColors() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light'
  return isLight
    ? { r: 90, g: 158, b: 0 }
    : { r: 208, g: 255, b: 0 }
}

function animate() {
  if (!ctx || document.hidden || !isVisible) return
  ctx.clearRect(0, 0, w, h)
  const colors = getThemeColors()

  particles.forEach((p) => {
    p.y += p.speedY
    p.opacity += p.opacitySpeed

    if (p.opacity > p.maxOpacity || p.opacity < 0) {
      p.opacitySpeed *= -1
    }

    if (p.y < -10) {
      Object.assign(p, createParticle())
    }

    const alpha = Math.max(0, Math.min(p.opacity, p.maxOpacity))

    // Core dot
    ctx!.beginPath()
    ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2)
    ctx!.fillStyle = `rgba(${colors.r}, ${colors.g}, ${colors.b}, ${alpha})`
    ctx!.fill()

    // Glow
    ctx!.beginPath()
    ctx!.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2)
    ctx!.fillStyle = `rgba(${colors.r}, ${colors.g}, ${colors.b}, ${alpha * 0.08})`
    ctx!.fill()
  })

  animationId = requestAnimationFrame(animate)
}

let isVisible = false
let observer: IntersectionObserver | null = null

function handleVisibilityChange() {
  if (document.hidden || !isVisible) {
    cancelAnimationFrame(animationId)
  } else {
    // Only restart if not already running
    cancelAnimationFrame(animationId)
    animate()
  }
}

onMounted(() => {
  init()
  window.addEventListener('resize', resize)
  document.addEventListener('visibilitychange', handleVisibilityChange)

  if (canvasRef.value) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting
        handleVisibilityChange()
      })
    })
    observer.observe(canvasRef.value)
  }
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resize)
  document.removeEventListener('visibilitychange', handleVisibilityChange)
  if (observer) observer.disconnect()
})
</script>

<template>
  <canvas ref="canvasRef" class="card-shader" aria-hidden="true" />
</template>

<style scoped>
.card-shader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  border-radius: inherit;
}
</style>
