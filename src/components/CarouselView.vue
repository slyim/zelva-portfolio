<script setup lang="ts">
import { ref } from 'vue'
import { PhCaretLeft, PhCaretRight } from '@phosphor-icons/vue'

interface Slide {
  title: string
  image?: string
}

const props = defineProps<{
  slides: Slide[]
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
        <div v-for="(slide, i) in slides" :key="i" class="carousel-slide">
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
  gap: 16px;
}

.carousel-track {
  flex: 1;
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
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1.5px solid rgba(var(--border-rgb), 0.25);
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease, transform 0.2s ease;
  z-index: 2;
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
  .carousel {
    gap: 8px;
  }

  .carousel-arrow {
    width: 40px;
    height: 40px;
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
    width: 36px;
    height: 36px;
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
