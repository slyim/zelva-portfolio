<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { PhSun, PhMoon } from '@phosphor-icons/vue'

const isDark = ref(true)

function toggleTheme() {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved) {
    isDark.value = saved === 'dark'
  } else {
    isDark.value = !window.matchMedia('(prefers-color-scheme: light)').matches
  }
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
})
</script>

<template>
  <button
    class="theme-toggle"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggleTheme"
  >
    <PhSun v-if="isDark" :size="20" weight="duotone" />
    <PhMoon v-else :size="20" weight="duotone" />
  </button>
</template>

<style scoped>
.theme-toggle {
  position: fixed;
  bottom: 24px;
  left: 24px;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 101;
  transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
}

.theme-toggle:hover {
  border-color: rgba(var(--accent-rgb), 0.5);
  transform: scale(1.05);
}

@media (max-width: 480px) {
  .theme-toggle {
    bottom: 16px;
    left: 16px;
    width: 44px;
    height: 44px;
    border-radius: 12px;
  }
}
</style>
