<script setup lang="ts">
import { ref } from 'vue'

const cardRef = ref<HTMLDivElement | null>(null)
</script>

<template>
  <div ref="cardRef" class="glass-card">
    <div class="glass-border"></div>
    <div class="card-inner">
      <div class="glass-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.glass-card {
  --mouse-x: 50%;
  --mouse-y: 50%;

  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  transition: border-color 0.3s ease;
  overflow: hidden;
  box-shadow: 0 4px 36.5px 0 rgba(26, 8, 39, 0.25);
}

.glass-card:hover {
  border-color: transparent;
}

.glass-border {
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

.glass-border::before {
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

.glass-card:hover .glass-border::before {
  opacity: 1;
  animation-play-state: running;
}

.card-inner {
  position: relative;
  margin: 1.5px;
  width: calc(100% - 3px);
  flex-grow: 1;
  border-radius: 14.5px;
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 1;
  display: flex;
  flex-direction: column;
}

.glass-content {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
}

@keyframes spin {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

@media (max-width: 768px) {
  .glass-card {
    border-radius: 12px;
  }
  .card-inner {
    border-radius: 10.5px;
  }
}

@media (max-width: 480px) {
  .glass-card {
    border-radius: 10px;
  }
  .card-inner {
    border-radius: 8.5px;
  }
}
</style>
