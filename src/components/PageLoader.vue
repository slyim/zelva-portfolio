<script setup lang="ts">
defineProps<{
  visible: boolean
}>()
</script>

<template>
  <Transition name="loader">
    <div v-if="visible" class="page-loader" aria-hidden="true">
      <div class="loader-content">
        <div class="loader-ring">
          <div class="loader-ring-segment"></div>
          <div class="loader-ring-segment"></div>
          <div class="loader-ring-segment"></div>
        </div>
        <span class="loader-text">Loading</span>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.page-loader {
  position: fixed;
  inset: 0;
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-page);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.loader-ring {
  position: relative;
  width: 64px;
  height: 64px;
  animation: loader-spin 1.2s linear infinite;
}

.loader-ring-segment {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: var(--accent-color);
  animation: loader-segment 1.8s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}

.loader-ring-segment:nth-child(1) {
  animation-delay: -0.45s;
}

.loader-ring-segment:nth-child(2) {
  animation-delay: -0.3s;
  border-top-color: rgba(var(--accent-rgb), 0.6);
}

.loader-ring-segment:nth-child(3) {
  animation-delay: -0.15s;
  border-top-color: rgba(var(--accent-rgb), 0.3);
}

.loader-text {
  font-family: 'Lexend', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-color);
  animation: loader-pulse 1.5s ease-in-out infinite;
}

@keyframes loader-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes loader-segment {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes loader-pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

/* Transition */
.loader-enter-active,
.loader-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.loader-enter-from,
.loader-leave-to {
  opacity: 0;
  transform: scale(1.02);
}
</style>
