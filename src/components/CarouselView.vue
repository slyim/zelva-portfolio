<script setup lang="ts">
import { ref } from 'vue'
import { PhCaretLeft, PhCaretRight, PhPlus } from '@phosphor-icons/vue'

interface Slide {
  title: string
  image?: string
}

const props = defineProps<{
  slides: Slide[]
}>()

const emit = defineEmits<{
  click: [index: number]
}>()

const currentIndex = ref(0)

function goPrev() {
  currentIndex.value = (currentIndex.value - 1 + props.slides.length) % props.slides.length
}

function goNext() {
  currentIndex.value = (currentIndex.value + 1) % props.slides.length
}
</script>

<template>
  <div class="carousel">
    <button class="carousel-arrow carousel-prev" aria-label="Previous" @click="goPrev">
      <PhCaretLeft :size="32" weight="bold" />
    </button>

    <div class="carousel-track">
      <div
        class="carousel-slides"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(slide, i) in slides"
          :key="i"
          class="carousel-slide"
          role="button"
          tabindex="0"
          :aria-label="`Open ${slide.title}`"
          @click="emit('click', i)"
          @keydown.enter.space.prevent="emit('click', i)"
        >
          <div class="card-border"></div>
          <div class="card-inner">
            <div class="click-indicator">
              <PhPlus :size="20" weight="bold" />
            </div>
            <div class="slide-image">
              <img v-if="slide.image" :src="slide.image" :alt="slide.title" />
              <div v-else class="slide-placeholder" />
            </div>
            <div class="slide-overlay">
              <span class="slide-title">{{ slide.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button class="carousel-arrow carousel-next" aria-label="Next" @click="goNext">
      <PhCaretRight :size="32" weight="bold" />
    </button>

    <div class="carousel-dots">
      <button
        v-for="(_, i) in slides"
        :key="i"
        class="dot"
        :class="{ active: i === currentIndex }"
        :aria-label="`Go to slide ${i + 1}`"
        @click="currentIndex = i"
      />
    </div>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}

.carousel-track {
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
}

.carousel-slides {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide {
  position: relative;
  flex: 0 0 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  cursor: pointer;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, border-color 0.3s ease;
  background: var(--bg-card);
}

.carousel-slide:hover {
  border-color: transparent;
}

.card-border {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 1.5px;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.card-border::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  width: max(300%, 1000px);
  aspect-ratio: 1;
  background: conic-gradient(from 0deg, transparent 60%, var(--accent-color) 80%, transparent 100%);
  transform: translate(-50%, -50%);
  animation: spin 3s linear infinite;
  animation-play-state: paused;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.carousel-slide:hover .card-border::before {
  opacity: 1;
  animation-play-state: running;
}

.card-inner {
  position: relative;
  margin: 1.5px;
  width: calc(100% - 3px);
  height: calc(100% - 3px);
  border-radius: 14.5px;
  overflow: hidden;
  z-index: 1;
  background: var(--bg-page);
}

@keyframes spin {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

.click-indicator {
  position: absolute;
  top: 14px;
  right: 14px;
  color: var(--accent-color);
  z-index: 2;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
}

.carousel-slide:hover .click-indicator {
  transform: scale(1.1) rotate(90deg);
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 12px rgba(var(--accent-rgb), 0.6);
}

.slide-image {
  position: absolute;
  inset: 0;
}

.slide-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
}

html[data-theme="light"] .slide-placeholder {
  background: linear-gradient(135deg, #e0e0e0 0%, #f0f0f0 100%);
}

.slide-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 80px 32px 24px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, transparent 100%);
  z-index: 1;
}

.slide-title {
  font-family: 'Lexend', sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.6rem);
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.02em;
}

.carousel-arrow {
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1.5px solid rgba(var(--border-rgb), 0.25);
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease, transform 0.2s ease;
  z-index: 10;
}

.carousel-prev {
  left: 24px;
}

.carousel-next {
  right: 24px;
}

.carousel-arrow:hover {
  border-color: rgba(var(--accent-rgb), 0.6);
  box-shadow: 0 0 12px rgba(var(--accent-rgb), 0.2);
  color: var(--accent-color);
  transform: scale(1.08);
}

.carousel-dots {
  position: absolute;
  bottom: -28px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(var(--text-rgb), 0.25);
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.dot.active {
  background: var(--accent-color);
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .carousel-arrow {
    width: 44px;
    height: 44px;
  }
  
  .carousel-prev {
    left: 16px;
  }
  
  .carousel-next {
    right: 16px;
  }

  .carousel-arrow :deep(svg) {
    width: 24px;
    height: 24px;
  }

  .slide-overlay {
    padding: 60px 20px 16px;
  }
}

@media (max-width: 480px) {
  .carousel-arrow {
    width: 44px;
    height: 44px;
  }

  .carousel-prev {
    left: 12px;
  }
  
  .carousel-next {
    right: 12px;
  }

  .carousel-arrow :deep(svg) {
    width: 20px;
    height: 20px;
  }

  .slide-overlay {
    padding: 48px 16px 14px;
  }
}
</style>
