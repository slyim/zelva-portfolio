<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import FullscreenModal from '../components/FullscreenModal.vue'
import { creativeProjects, type CreativeProject } from '../content/creativeCoding'
import { loadSketch } from '../utils/sketchLoader'

const canvasRefs = ref<(HTMLCanvasElement | null)[]>([])
const animationIds = ref<number[]>([])
const sketchCleanups = ref<((() => void) | null)[]>([])
const modalOpen = ref(false)
const activeProject = ref<CreativeProject | null>(null)
const modalRef = ref<InstanceType<typeof FullscreenModal> | null>(null)
let modalAnimId = 0
let modalSketchCleanup: (() => void) | null = null

function getThemeColor(): string {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light'
  return isLight ? '90, 158, 0' : '208, 255, 0'
}

function getCanvasFillStyle(offset: number): string {
  const rgb = getThemeColor()
  return `rgba(${rgb}, ${offset * 0.6})`
}

function drawPlaceholder(canvas: HTMLCanvasElement, time: number) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  const w = canvas.width
  const h = canvas.height

  ctx.clearRect(0, 0, w, h)

  const cols = 8
  const rows = 6
  const cellW = w / cols
  const cellH = h / rows

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const offset = Math.sin(time * 0.003 + x * 0.5 + y * 0.3) * 0.5 + 0.5
      const size = Math.min(cellW, cellH) * 0.3 * offset
      const cx = x * cellW + cellW / 2
      const cy = y * cellH + cellH / 2

      ctx.beginPath()
      ctx.arc(cx, cy, size, 0, Math.PI * 2)
      ctx.fillStyle = getCanvasFillStyle(offset)
      ctx.fill()
    }
  }
}

function resizeCanvas(canvas: HTMLCanvasElement) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const rect = canvas.getBoundingClientRect()
  canvas.width = rect.width * dpr
  canvas.height = rect.height * dpr
  const ctx = canvas.getContext('2d')
  if (ctx) ctx.scale(dpr, dpr)
}

async function startAnimation(index: number) {
  const canvas = canvasRefs.value[index]
  if (!canvas) return
  resizeCanvas(canvas)

  const project = creativeProjects[index]
  if (!project) return

  // Try loading custom p5 sketch if available
  if (project.p5Script) {
    const cleanup = await loadSketch(project.p5Script, canvas)
    if (cleanup) {
      sketchCleanups.value[index] = cleanup
      return
    }
  }

  // Fallback placeholder animation
  let startTime = performance.now()
  function animate() {
    drawPlaceholder(canvas!, performance.now() - startTime)
    animationIds.value[index] = requestAnimationFrame(animate)
  }
  animate()
}

function stopAnimation(index: number) {
  if (sketchCleanups.value[index]) {
    sketchCleanups.value[index]!()
    sketchCleanups.value[index] = null
  }
  if (animationIds.value[index]) {
    cancelAnimationFrame(animationIds.value[index])
    animationIds.value[index] = 0
  }
  const canvas = canvasRefs.value[index]
  if (canvas) {
    const ctx = canvas.getContext('2d')
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
}

function handleMouseEnter(index: number) {
  startAnimation(index)
}

function handleMouseLeave(index: number) {
  stopAnimation(index)
}

async function openModal(project: CreativeProject, _index: number) {
  activeProject.value = project
  modalOpen.value = true

  // Start modal animation after DOM update
  setTimeout(async () => {
    const canvas = modalRef.value?.canvasRef ?? null
    if (!canvas) return
    resizeCanvas(canvas)

    // Try loading custom sketch
    if (project.p5Script) {
      const cleanup = await loadSketch(project.p5Script, canvas)
      if (cleanup) {
        modalSketchCleanup = cleanup
        return
      }
    }

    // Fallback placeholder
    let startTime = performance.now()
    function animate() {
      drawPlaceholder(canvas!, performance.now() - startTime)
      modalAnimId = requestAnimationFrame(animate)
    }
    animate()
  }, 50)
}

function closeModal() {
  modalOpen.value = false
  activeProject.value = null

  if (modalSketchCleanup) {
    modalSketchCleanup()
    modalSketchCleanup = null
  }
  if (modalAnimId) {
    cancelAnimationFrame(modalAnimId)
    modalAnimId = 0
  }
}

onMounted(() => {
  animationIds.value = Array.from({ length: creativeProjects.length }, () => 0)
  sketchCleanups.value = Array.from({ length: creativeProjects.length }, () => null)
})

onUnmounted(() => {
  animationIds.value.forEach((id) => {
    if (id) cancelAnimationFrame(id)
  })
  sketchCleanups.value.forEach((cleanup) => {
    if (cleanup) cleanup()
  })
  if (modalAnimId) cancelAnimationFrame(modalAnimId)
  if (modalSketchCleanup) modalSketchCleanup()
})
</script>

<template>
  <section class="page-section" aria-label="Creative coding projects">
    <div class="page-inner">
      <div class="code-grid">
        <div
          v-for="(project, i) in creativeProjects"
          :key="project.title"
          v-scroll-reveal="{ delay: i * 80 }"
          class="code-card"
          @mouseenter="handleMouseEnter(i)"
          @mouseleave="handleMouseLeave(i)"
          @click="openModal(project, i)"
        >
          <canvas
            :ref="(el) => { canvasRefs[i] = el as HTMLCanvasElement }"
            class="code-canvas"
          />
          <div class="code-info">
            <span class="code-title">{{ project.title }}</span>
            <span class="code-desc">{{ project.description }}</span>
          </div>
        </div>
      </div>
    </div>

    <FullscreenModal
      ref="modalRef"
      :is-open="modalOpen"
      :title="activeProject?.title ?? ''"
      :description="activeProject?.description ?? ''"
      @close="closeModal"
    />
  </section>
</template>

<style scoped>
.page-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: var(--bg-page);
  padding: 140px 48px 80px;
  display: flex;
  justify-content: center;
}

.page-inner {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.code-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.code-card {
  position: relative;
  aspect-ratio: 4/3;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.code-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(var(--shadow-rgb), 0.2);
  border-color: var(--border-color-hover);
}

.code-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.code-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 48px 16px 16px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 1;
}

.code-title {
  font-family: 'Lexend', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
}

.code-desc {
  font-family: 'Lexend', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
}

.modal-canvas {
  width: 100%;
  height: 100%;
  display: block;
}

@media (max-width: 968px) {
  .code-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .page-section {
    padding: 120px 24px 60px;
  }
}

@media (max-width: 480px) {
  .page-section {
    padding: 100px 16px 48px;
  }

  .code-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
