<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  isOpen: boolean
  title: string
  description: string
  images: string[]
  tags?: string[]
}>()

const emit = defineEmits<{
  close: []
}>()

const scrollContainer = ref<HTMLDivElement | null>(null)

function onBackdropClick(e: MouseEvent) {
  if (e.target === e.currentTarget) emit('close')
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}

watch(
  () => props.isOpen,
  (open) => {
    if (open) {
      document.body.style.overflow = 'hidden'
      if (scrollContainer.value) scrollContainer.value.scrollTop = 0
    } else {
      document.body.style.overflow = ''
    }
  }
)

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition name="project-modal">
      <div v-if="isOpen" class="project-overlay" @click="onBackdropClick">
        <div class="project-content">
          <button class="project-close" aria-label="Close" @click="emit('close')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div ref="scrollContainer" class="project-scroll">
            <div class="project-inner">
              <header class="project-header">
                <h2 class="project-title">{{ title }}</h2>
                <p class="project-desc">{{ description }}</p>
                <div v-if="tags && tags.length" class="project-tags">
                  <span v-for="tag in tags" :key="tag" class="project-tag">{{ tag }}</span>
                </div>
              </header>

              <div class="project-gallery">
                <div
                  v-for="(img, i) in images"
                  :key="i"
                  v-scroll-reveal="{ delay: i * 80 }"
                  class="project-image-wrap"
                >
                  <img :src="img" :alt="`${title} — image ${i + 1}`" loading="lazy" />
                </div>
                <div v-if="!images.length" class="project-image-wrap project-image-empty">
                  <span>No images yet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.project-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  justify-content: center;
  background: rgba(var(--bg-section-rgb), 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.project-content {
  position: relative;
  width: 100%;
  max-width: 1100px;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.project-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
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
  z-index: 10;
}

.project-close:hover {
  border-color: rgba(var(--accent-rgb), 0.6);
  box-shadow: 0 0 12px rgba(var(--accent-rgb), 0.2);
  color: var(--accent-color);
}

.project-scroll {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 80px 32px 60px;
  scrollbar-width: thin;
  scrollbar-color: rgba(var(--text-rgb), 0.2) transparent;
}

.project-scroll::-webkit-scrollbar {
  width: 6px;
}

.project-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.project-scroll::-webkit-scrollbar-thumb {
  background: rgba(var(--text-rgb), 0.2);
  border-radius: 3px;
}

.project-inner {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.project-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.project-title {
  font-family: 'Lexend', sans-serif;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  line-height: 1.2;
}

.project-desc {
  font-family: 'Lexend', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.6;
  max-width: 720px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.project-tag {
  font-family: 'Lexend', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--accent-color);
  background: rgba(var(--accent-rgb), 0.08);
  border: 1px solid rgba(var(--accent-rgb), 0.2);
  padding: 4px 10px;
  border-radius: 100px;
  letter-spacing: 0.02em;
}

.project-gallery {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.project-image-wrap {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
}

.project-image-wrap img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.6s ease;
}

.project-image-wrap:hover img {
  transform: scale(1.01);
}

.project-image-empty {
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  font-family: 'Lexend', sans-serif;
  font-size: 0.9rem;
}

/* Transitions */
.project-modal-enter-active,
.project-modal-leave-active {
  transition: opacity 0.35s ease;
}

.project-modal-enter-from,
.project-modal-leave-to {
  opacity: 0;
}

.project-modal-enter-active .project-content,
.project-modal-leave-active .project-content {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease;
}

.project-modal-enter-from .project-content,
.project-modal-leave-to .project-content {
  transform: translateY(30px) scale(0.98);
  opacity: 0;
}

@media (max-width: 768px) {
  .project-scroll {
    padding: 72px 20px 40px;
  }

  .project-close {
    top: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
  }

  .project-inner {
    gap: 32px;
  }
}
</style>
