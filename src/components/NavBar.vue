<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import {
  PhHouse,
  PhPaintBrush,
  PhPalette,
  PhCode,
  PhCamera,
  PhHeadphones,
  PhGlobe
} from '@phosphor-icons/vue'

const navContainer = ref<HTMLDivElement | null>(null)
const route = useRoute()

const navLinks = [
  { to: '/artworks', label: 'Artworks', icon: PhPaintBrush },
  { to: '/designs', label: 'Designs', icon: PhPalette },
  { to: '/creative-coding', label: 'Creative Coding', icon: PhCode },
  { to: '/photography', label: 'Photography', icon: PhCamera },
  { to: '/soundscapes', label: 'Soundscapes', icon: PhHeadphones },
]

function isActive(path: string) {
  return route.path === path
}

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

  if (navContainer.value) {
    navContainer.value.style.setProperty('--mouse-x', `${currentX}px`)
    navContainer.value.style.setProperty('--mouse-y', `${currentY}px`)
  }

  rafId = requestAnimationFrame(animate)
}

function handleMouseMove(e: MouseEvent) {
  const rect = navContainer.value?.getBoundingClientRect()
  if (!rect) return
  mouseX = e.clientX - rect.left
  mouseY = e.clientY - rect.top
}

function handleMouseLeave() {
  const rect = navContainer.value?.getBoundingClientRect()
  if (rect) {
    mouseX = rect.width / 2
    mouseY = rect.height / 2
  }
}

onMounted(() => {
  const rect = navContainer.value?.getBoundingClientRect()
  if (rect) {
    mouseX = rect.width / 2
    mouseY = rect.height / 2
    currentX = mouseX
    currentY = mouseY
    navContainer.value?.style.setProperty('--mouse-x', `${currentX}px`)
    navContainer.value?.style.setProperty('--mouse-y', `${currentY}px`)
  }

  navContainer.value?.addEventListener('mousemove', handleMouseMove)
  navContainer.value?.addEventListener('mouseleave', handleMouseLeave)
  animate()
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  navContainer.value?.removeEventListener('mousemove', handleMouseMove)
  navContainer.value?.removeEventListener('mouseleave', handleMouseLeave)
})
</script>

<template>
  <nav class="navbar">
    <div ref="navContainer" class="nav-container">
      <RouterLink to="/" class="nav-logo" :class="{ active: isActive('/') }">
        <PhHouse :size="24" :weight="isActive('/') ? 'fill' : 'regular'" />
      </RouterLink>

      <div class="nav-links">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          :class="{ active: isActive(link.to) }"
        >
          <component
            :is="link.icon"
            :size="18"
            :weight="isActive(link.to) ? 'fill' : 'regular'"
          />
          <span>{{ link.label }}</span>
        </RouterLink>
      </div>

      <button class="nav-globe" aria-label="Language or region">
        <PhGlobe :size="20" />
      </button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 1rem;
  z-index: 100;
  pointer-events: none;
}

.navbar > * {
  pointer-events: auto;
}

.nav-container {
  --mouse-x: 50%;
  --mouse-y: 50%;

  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1240px;
  min-height: 62px;
  height: auto;
  padding: 12px clamp(16px, 4vw, 48px);
  gap: 12px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 36.5px 0 rgba(26, 8, 39, 0.25);
  transition: border-color 0.3s ease;
}

/* Dynamic light that follows cursor */
.nav-container::before {
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
.nav-container::after {
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

.nav-container:hover::after {
  opacity: 1;
}

.nav-container:hover {
  border-color: var(--border-color-hover);
}

/* Ensure content sits above the glow layers */
.nav-logo,
.nav-links,
.nav-globe {
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .nav-container {
    padding: 8px 16px;
    border-radius: 12px;
    min-height: 52px;
  }

  .nav-container::after {
    border-radius: 12px;
  }

  .nav-links {
    gap: 0.75rem;
  }

  .nav-link {
    font-size: 0.8rem;
  }

  .nav-link span {
    display: none; /* Hide text labels on tablet */
  }

  .nav-logo,
  .nav-globe {
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 480px) {
  .navbar {
    top: 0;
    bottom: auto;
    padding: 0.5rem;
    gap: 6px;
  }

  .nav-container {
    padding: 6px 12px;
    border-radius: 10px;
    gap: 8px;
    max-width: 1240px;
  }

  .nav-container::after {
    border-radius: 10px;
  }

  .nav-links {
    gap: 0.5rem;
  }

  .nav-link {
    font-size: 0;
    padding: 4px;
  }

  .nav-link :deep(svg) {
    width: 20px;
    height: 20px;
  }

  .nav-logo,
  .nav-globe {
    width: 32px;
    height: 32px;
    border-radius: 10px;
  }

  .nav-logo :deep(svg) {
    width: 20px;
    height: 20px;
  }

  .nav-globe :deep(svg) {
    width: 18px;
    height: 18px;
  }
}

.nav-logo {
  color: var(--text-secondary);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1.5px solid rgba(var(--border-rgb), 0.25);
  border-radius: 12px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
}

.nav-logo:hover,
.nav-logo.active {
  border-color: rgba(var(--accent-rgb), 0.6);
  box-shadow: 0 0 12px rgba(var(--accent-rgb), 0.2);
  color: var(--accent-color);
}

.nav-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--accent-color);
  font-weight: 600;
}

.nav-globe {
  background: none;
  border: 1.5px solid rgba(var(--border-rgb), 0.25);
  border-radius: 12px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
}

.nav-globe:hover {
  border-color: rgba(var(--accent-rgb), 0.6);
  box-shadow: 0 0 12px rgba(var(--accent-rgb), 0.2);
  color: var(--accent-color);
}

/* Light mode: stronger glow visibility */
html[data-theme="light"] .nav-container::before {
  background: radial-gradient(
    280px circle at var(--mouse-x) var(--mouse-y),
    rgba(var(--accent-rgb), 0.08) 0%,
    transparent 65%
  );
}

html[data-theme="light"] .nav-container::after {
  background: radial-gradient(
    180px circle at var(--mouse-x) var(--mouse-y),
    rgba(var(--accent-rgb), 0.2) 0%,
    transparent 55%
  );
}
</style>
