<script setup lang="ts">
import { ref, computed } from 'vue'
import { PhPlus } from '@phosphor-icons/vue'
import { publicUrl } from '../utils/publicUrl'

const props = defineProps<{
  title: string
  image?: string
  aspectRatio?: string
}>()

defineEmits<{
  click: []
}>()

const isVideo = computed(() => props.image?.match(/\.(mp4|webm|ogg)$/i))
const isLoaded = ref(false)
</script>

<template>
  <div class="gallery-card" :style="{ aspectRatio: aspectRatio || '4/3' }" @click="$emit('click')">
    <div class="card-border"></div>
    <div class="card-inner">
      <div class="click-indicator">
        <PhPlus :size="20" weight="bold" />
      </div>
      <div class="card-image">
        <Transition name="gallery-image">
          <video
            v-if="isVideo && image"
            v-show="isLoaded"
            :src="publicUrl(image)"
            autoplay
            loop
            muted
            playsinline
            @loadeddata="isLoaded = true"
          />
        </Transition>
        <Transition name="gallery-image">
          <img
            v-if="!isVideo && image"
            v-show="isLoaded"
            :src="publicUrl(image)"
            :alt="title"
            loading="lazy"
            @load="isLoaded = true"
          />
        </Transition>
        <div v-if="!isLoaded" class="card-placeholder skeleton" />
      </div>
      <div class="card-overlay">
        <span class="card-title">{{ title }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery-card {
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, border-color 0.3s ease;
  background: var(--bg-card);
}

.gallery-card:hover {
  transform: translateY(-4px);
  border-color: transparent;
}

.card-border {
  position: absolute;
  inset: 0;
  border-radius: 12px;
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

.gallery-card:hover .card-border::before {
  opacity: 1;
  animation-play-state: running;
}

.card-inner {
  position: relative;
  margin: 1.5px;
  width: calc(100% - 3px);
  height: calc(100% - 3px);
  border-radius: 10.5px;
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

.gallery-card:hover .click-indicator {
  transform: scale(1.1) rotate(90deg);
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 12px rgba(var(--accent-rgb), 0.6);
}

.card-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.card-image img,
.card-image video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease, opacity 0.4s ease;
}

.gallery-card:hover .card-image img,
.gallery-card:hover .card-image video {
  transform: scale(1.05);
}

.card-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 10.5px;
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 48px 16px 16px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
  z-index: 1;
}

.card-title {
  font-family: 'Lexend', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.02em;
}

/* Image fade transition */
.gallery-image-enter-active,
.gallery-image-leave-active {
  transition: opacity 0.4s ease;
}

.gallery-image-enter-from,
.gallery-image-leave-to {
  opacity: 0;
}
</style>
