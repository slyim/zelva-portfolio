<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../i18n'

const { t } = useI18n()

interface SpySection {
  id: string
  labelKey: string
}

const sectionDefs: SpySection[] = [
  { id: 'cta', labelKey: 'spy.cta' },
  { id: 'about', labelKey: 'spy.about' },
  { id: 'skills', labelKey: 'spy.skills' },
  { id: 'education', labelKey: 'spy.education' },
  { id: 'contact', labelKey: 'spy.contact' },
]

const sections = computed(() =>
  sectionDefs.map(s => ({ id: s.id, label: t(s.labelKey) }))
)

const activeId = ref('')
const isScrolling = ref(false)
let scrollTimeout: ReturnType<typeof setTimeout> | null = null

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) {
    activeId.value = id
    isScrolling.value = true
    
    if (scrollTimeout) clearTimeout(scrollTimeout)
    
    scrollTimeout = setTimeout(() => {
      isScrolling.value = false
    }, 1000)

    el.scrollIntoView({ behavior: 'smooth' })
  }
}

let observers: IntersectionObserver[] = []

function handleScroll() {
  if (isScrolling.value) return
  
  const scrollBottom = window.scrollY + window.innerHeight
  const docHeight = document.documentElement.scrollHeight
  // If the user is within 80px of the bottom, force Contact active
  if (docHeight - scrollBottom < 80) {
    activeId.value = 'contact'
  }
}

onMounted(() => {
  const opts = { rootMargin: '-35% 0px -40% 0px', threshold: 0 }
  sectionDefs.forEach(({ id }) => {
    const el = document.getElementById(id)
    if (!el) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isScrolling.value) {
          activeId.value = id
        }
      })
    }, opts)
    obs.observe(el)
    observers.push(obs)
  })
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  observers.forEach((obs) => obs.disconnect())
  window.removeEventListener('scroll', handleScroll)
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
