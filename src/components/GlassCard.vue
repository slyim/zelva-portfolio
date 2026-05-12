<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const cardRef = ref<HTMLDivElement | null>(null)

let mouseX = 0
let mouseY = 0
let currentX = 0
let currentY = 0
let rafId: number

function lerp(start: number, end: number, factor: number) {
  return start + (end - start) * factor
}

function animate() {
  currentX = lerp(currentX, mouseX, 0.18)
  currentY = lerp(currentY, mouseY, 0.18)

  if (cardRef.value) {
    cardRef.value.style.setProperty('--mouse-x', `${currentX}px`)
    cardRef.value.style.setProperty('--mouse-y', `${currentY}px`)
  }

  rafId = requestAnimationFrame(animate)
}

function handleMouseMove(e: MouseEvent) {
  const rect = cardRef.value?.getBoundingClientRect()
  if (!rect) return
  mouseX = e.clientX - rect.left
  mouseY = e.clientY - rect.top
}

function handleMouseLeave() {
  const rect = cardRef.value?.getBoundingClientRect()
  if (rect) {
    mouseX = rect.width / 2
    mouseY = rect.height / 2
  }
}

onMounted(() => {
  const rect = cardRef.value?.getBoundingClientRect()
  if (rect) {
    mouseX = rect.width / 2
    mouseY = rect.height / 2
    currentX = mouseX
    currentY = mouseY
    cardRef.value?.style.setProperty('--mouse-x', `${currentX}px`)
    cardRef.value?.style.setProperty('--mouse-y', `${currentY}px`)
  }

  cardRef.value?.addEventListener('mousemove', handleMouseMove)
  cardRef.value?.addEventListener('mouseleave', handleMouseLeave)
  animate()
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  cardRef.value?.removeEventListener('mousemove', handleMouseMove)
  cardRef.value?.removeEventListener('mouseleave', handleMouseLeave)
})
</script>

<template>
  <div ref="cardRef" class="glass-card">
    <div class="glass-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.glass-card {
  --mouse-x: 50%;
  --mouse-y: 50%;

  position: relative;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 36.5px 0 rgba(26, 8, 39, 0.25);
  transition: border-color 0.3s ease;
}

/* Dynamic inner light that follows cursor */
.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    280px circle at var(--mouse-x) var(--mouse-y),
    rgba(var(--accent-rgb), 0.04) 0%,
    transparent 65%
  );
  pointer-events: none;
  z-index: 0;
  transition: opacity 0.3s ease;
}

/* Dynamic border glow that follows cursor */
.glass-card::after {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  background: radial-gradient(
    180px circle at var(--mouse-x) var(--mouse-y),
    rgba(var(--accent-rgb), 0.12) 0%,
    transparent 55%
  );
  border-radius: 16px;
  pointer-events: none;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.glass-card:hover::after {
  opacity: 1;
}

.glass-card:hover {
  border-color: var(--border-color-hover);
}

/* Light mode: stronger glow visibility */
html[data-theme="light"] .glass-card::before {
  background: radial-gradient(
    280px circle at var(--mouse-x) var(--mouse-y),
    rgba(var(--accent-rgb), 0.08) 0%,
    transparent 65%
  );
}

html[data-theme="light"] .glass-card::after {
  background: radial-gradient(
    180px circle at var(--mouse-x) var(--mouse-y),
    rgba(var(--accent-rgb), 0.2) 0%,
    transparent 55%
  );
}

/* Content sits above glow layers */
.glass-content {
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .glass-card {
    border-radius: 12px;
  }

  .glass-card::after {
    border-radius: 12px;
  }
}

@media (max-width: 480px) {
  .glass-card {
    border-radius: 10px;
  }

  .glass-card::after {
    border-radius: 10px;
  }
}
</style>
