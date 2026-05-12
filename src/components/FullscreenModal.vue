<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  isOpen: boolean
  title: string
  description: string
}>()

const emit = defineEmits<{
  close: []
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null)

defineExpose({
  canvasRef,
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-overlay" @click.self="emit('close')">
        <div class="modal-content">
          <button class="modal-close" aria-label="Close" @click="emit('close')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div class="modal-canvas-wrap">
            <canvas ref="canvasRef" class="modal-canvas" />
          </div>

          <div class="modal-info">
            <h2 class="modal-title">{{ title }}</h2>
            <p class="modal-desc">{{ description }}</p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(var(--bg-section-rgb), 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.modal-content {
  position: relative;
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.modal-close {
  position: absolute;
  top: -48px;
  right: 0;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1.5px solid rgba(var(--border-rgb), 0.25);
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
}

.modal-close:hover {
  border-color: rgba(var(--accent-rgb), 0.6);
  box-shadow: 0 0 12px rgba(var(--accent-rgb), 0.2);
  color: var(--accent-color);
}

.modal-canvas-wrap {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
}

.modal-canvas {
  width: 100%;
  height: 100%;
  display: block;
}

.modal-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 4px;
}

.modal-title {
  font-family: 'Lexend', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.modal-desc {
  font-family: 'Lexend', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--text-muted);
  margin: 0;
}

/* Transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.96);
  opacity: 0;
}

@media (max-width: 768px) {
  .modal-overlay {
    padding: 16px;
  }

  .modal-canvas-wrap {
    aspect-ratio: 4/3;
  }

  .modal-close {
    top: -44px;
    width: 36px;
    height: 36px;
  }
}
</style>
