<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)

let ctx: CanvasRenderingContext2D | null = null
let particles: Particle[] = []
let animationId = 0
let w = 0
let h = 0

class Particle {
  x = 0
  y = 0
  size = 0
  speedX = 0
  speedY = 0
  opacity = 0
  opacitySpeed = 0
  maxOpacity = 0
  r = 255
  g = 255
  b = 255

  constructor() {
    this.reset()
  }

  reset() {
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.size = Math.random() * 1.2 + 0.4
    this.speedX = (Math.random() - 0.5) * 0.12
    this.speedY = (Math.random() - 0.5) * 0.12
    this.opacity = Math.random()
    this.opacitySpeed = Math.random() * 0.006 + 0.002
    this.maxOpacity = Math.random() * 0.5 + 0.15
    const isLight = document.documentElement.getAttribute('data-theme') === 'light'
    // Occasional accent-tinted sparkles
    if (Math.random() > 0.85) {
      if (isLight) {
        this.r = 90
        this.g = 158
        this.b = 0
      } else {
        this.r = 208
        this.g = 255
        this.b = 0
      }
    } else {
      if (isLight) {
        this.r = 40
        this.g = 40
        this.b = 40
      } else {
        this.r = 255
        this.g = 255
        this.b = 255
      }
    }
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
    this.opacity += this.opacitySpeed

    if (this.opacity > this.maxOpacity || this.opacity < 0) {
      this.opacitySpeed *= -1
    }

    if (this.x < -10 || this.x > w + 10 || this.y < -10 || this.y > h + 10) {
      this.reset()
    }
  }

  draw() {
    if (!ctx) return
    const alpha = Math.max(0, Math.min(this.opacity, this.maxOpacity))
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${alpha})`
    ctx.fill()

    // Soft glow for larger sparkles
    if (this.size > 0.9) {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size * 3.5, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${alpha * 0.06})`
      ctx.fill()
    }
  }
}

function init() {
  const canvas = canvasRef.value
  if (!canvas) return
  ctx = canvas.getContext('2d')
  if (!ctx) return
  resize()

  const particleCount = Math.min(120, Math.floor((w * h) / 12000))
  particles = []
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle())
  }

  animate()
}

function resize() {
  const canvas = canvasRef.value
  if (!canvas) return
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  w = window.innerWidth
  h = window.innerHeight
  canvas.width = w * dpr
  canvas.height = h * dpr
  canvas.style.width = w + 'px'
  canvas.style.height = h + 'px'
  if (ctx) ctx.scale(dpr, dpr)
}

function animate() {
  if (!ctx) return
  ctx.clearRect(0, 0, w, h)
  particles.forEach((p) => {
    p.update()
    p.draw()
  })
  animationId = requestAnimationFrame(animate)
}

function handleVisibilityChange() {
  if (document.hidden) {
    cancelAnimationFrame(animationId)
  } else {
    animate()
  }
}

onMounted(() => {
  init()
  window.addEventListener('resize', resize)
  document.addEventListener('visibilitychange', handleVisibilityChange)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resize)
  document.removeEventListener('visibilitychange', handleVisibilityChange)
})
</script>

<template>
  <canvas ref="canvasRef" class="sparkle-shader" aria-hidden="true" />
</template>

<style scoped>
.sparkle-shader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}
</style>
