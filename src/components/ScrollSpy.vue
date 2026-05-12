<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface SpySection {
  id: string
  label: string
}

const sections: SpySection[] = [
  { id: 'cta', label: 'CTA' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact me' },
]

const activeId = ref('')

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

let observers: IntersectionObserver[] = []

onMounted(() => {
  const opts = { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  sections.forEach(({ id }) => {
    const el = document.getElementById(id)
    if (!el) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeId.value = id
      })
    }, opts)
    obs.observe(el)
    observers.push(obs)
  })
})

onUnmounted(() => {
  observers.forEach((obs) => obs.disconnect())
})
</script>

<template>
  <nav class="scroll-spy" aria-label="Page sections">
    <ul class="spy-list">
      <li
        v-for="section in sections"
        :key="section.id"
        class="spy-item"
        :class="{ active: activeId === section.id }"
      >
        <button class="spy-btn" @click="scrollTo(section.id)">
          <span class="spy-bar" aria-hidden="true" />
          <span class="spy-label">{{ section.label }}</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.scroll-spy {
  position: fixed;
  right: 28px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 90;
  pointer-events: none;
}

.scroll-spy > * {
  pointer-events: auto;
}

.spy-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.spy-item {
  display: flex;
  align-items: center;
}

.spy-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 0;
  font-family: 'Lexend', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  color: rgba(var(--text-rgb), 0.35);
  transition: color 0.3s ease;
  text-align: right;
}

.spy-bar {
  display: block;
  width: 3px;
  height: 18px;
  border-radius: 2px;
  background: rgba(var(--text-rgb), 0.15);
  transition: background 0.3s ease, height 0.3s ease;
  flex-shrink: 0;
}

.spy-label {
  transition: color 0.3s ease;
}

/* Active state */
.spy-item.active .spy-btn {
  color: var(--accent-color);
  font-weight: 600;
}

.spy-item.active .spy-bar {
  background: var(--accent-color);
  height: 24px;
}

/* Hover */
.spy-btn:hover {
  color: rgba(var(--text-rgb), 0.7);
}

.spy-item.active .spy-btn:hover {
  color: var(--accent-color);
}

/* Hide on tablet and below */
@media (max-width: 1024px) {
  .scroll-spy {
    display: none;
  }
}
</style>
