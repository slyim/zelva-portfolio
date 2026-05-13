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
import { useI18n } from '../i18n'

const navContainer = ref<HTMLDivElement | null>(null)
const route = useRoute()
const { t, locale, locales, setLocale } = useI18n()

const navLinks = [
  { to: '/artworks', labelKey: 'nav.artworks', icon: PhPaintBrush },
  { to: '/designs', labelKey: 'nav.designs', icon: PhPalette },
  { to: '/creative-coding', labelKey: 'nav.creativeCoding', icon: PhCode },
  { to: '/photography', labelKey: 'nav.photography', icon: PhCamera },
  { to: '/soundscapes', labelKey: 'nav.soundscapes', icon: PhHeadphones },
]

function normalizePath(p: string) {
  return p.replace(/\/$/, '') || '/'
}

function isActive(path: string) {
  return normalizePath(route.path) === normalizePath(path)
}

// Language dropdown
const showLangMenu = ref(false)
const desktopLangRef = ref<HTMLDivElement | null>(null)
const mobileLangRef = ref<HTMLDivElement | null>(null)

function toggleLangMenu() {
  showLangMenu.value = !showLangMenu.value
}

function selectLocale(code: 'en' | 'de' | 'tr') {
  setLocale(code)
  showLangMenu.value = false
}

function handleClickOutside(e: MouseEvent) {
  const clickedInsideDesktop = desktopLangRef.value?.contains(e.target as Node) ?? false
  const clickedInsideMobile = mobileLangRef.value?.contains(e.target as Node) ?? false
  if (!clickedInsideDesktop && !clickedInsideMobile) {
    showLangMenu.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <nav class="navbar">
    <div v-scroll-reveal="{ origin: 'top', distance: '20px' }" ref="navContainer" class="nav-container">
      <div class="nav-border"></div>
      <div class="nav-inner">
        <RouterLink to="/" class="nav-logo" :class="{ active: isActive('/') }" aria-label="Home">
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
            <span>{{ t(link.labelKey) }}</span>
          </RouterLink>
        </div>

        <div ref="desktopLangRef" class="lang-wrap desktop-globe">
          <button class="nav-globe" aria-label="Language" :aria-expanded="showLangMenu" @click.stop="toggleLangMenu">
            <PhGlobe :size="20" />
          </button>
          <Transition name="lang-fade">
            <div v-if="showLangMenu" class="lang-dropdown">
              <button
                v-for="l in locales"
                :key="l.code"
                class="lang-option"
                :class="{ active: locale === l.code }"
                @click="selectLocale(l.code)"
              >
                <span class="lang-flag">{{ l.flag }}</span>
                <span class="lang-label">{{ l.label }}</span>
              </button>
            </div>
          </Transition>
        </div>
      </div>
    </div>

    <!-- Mobile Top Navigation Elements -->
    <RouterLink to="/" class="mobile-home-top" aria-label="Home" :class="{ active: isActive('/') }">
      <PhHouse :size="20" :weight="isActive('/') ? 'fill' : 'regular'" />
    </RouterLink>

    <!-- Mobile Globe -->
    <div ref="mobileLangRef" class="lang-wrap mobile-globe">
      <button class="nav-globe" aria-label="Language" :aria-expanded="showLangMenu" @click.stop="toggleLangMenu">
        <PhGlobe :size="20" />
      </button>
      <Transition name="lang-fade">
        <div v-if="showLangMenu" class="lang-dropdown lang-dropdown-mobile">
          <button
            v-for="l in locales"
            :key="l.code"
            class="lang-option"
            :class="{ active: locale === l.code }"
            @click="selectLocale(l.code)"
          >
            <span class="lang-flag">{{ l.flag }}</span>
            <span class="lang-label">{{ l.label }}</span>
          </button>
        </div>
      </Transition>
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
  padding: 1rem 48px;
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
  width: 100%;
  max-width: 1200px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  box-shadow: 0 4px 36.5px 0 rgba(26, 8, 39, 0.25);
  transition: border-color 0.3s ease;
}

.nav-container:hover {
  border-color: transparent;
}

.nav-border {
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

.nav-border::before {
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

.nav-container:hover .nav-border::before {
  opacity: 1;
  animation-play-state: running;
}

@keyframes spin {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

.nav-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 3px);
  min-height: 62px;
  height: auto;
  margin: 1.5px;
  padding: 12px clamp(16px, 4vw, 48px);
  gap: 12px;
  border-radius: 14.5px;
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}



/* Ensure content sits above the glow layers */
.nav-logo,
.nav-links,
.nav-globe {
  position: relative;
  z-index: 2;
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem 24px;
  }

  .nav-container {
    border-radius: 12px;
  }

  .nav-inner {
    padding: 10px 20px;
    border-radius: 10.5px;
    min-height: 52px;
  }

  .nav-links {
    gap: 1.25rem;
  }

  .nav-link {
    font-size: 0;
  }

  .nav-link span {
    display: none;
  }

  .nav-logo,
  .nav-globe {
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 480px) {
  .navbar {
    top: auto;
    bottom: 0;
    padding: 0.5rem 12px 1.5rem;
    background: linear-gradient(to top, var(--bg-page) 70%, transparent);
  }

  .nav-container {
    border-radius: 20px;
    width: 100%;
  }

  .nav-inner {
    padding: 8px 24px;
    border-radius: 18.5px;
    width: calc(100% - 3px);
    justify-content: space-between;
    gap: 0;
  }

  .nav-links {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .nav-link {
    padding: 8px;
    border-radius: 10px;
    background: transparent !important;
    border-color: transparent !important;
  }

  /* Completely hide text labels on mobile */
  .nav-link span {
    display: none !important;
  }

  /* Uniform icon sizing */
  .nav-link :deep(svg) {
    width: 24px;
    height: 24px;
  }

  .nav-logo {
    display: none !important;
  }

  .mobile-home-top {
    display: flex !important;
    position: fixed;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    width: 44px;
    height: 44px;
    border-radius: 12px;
    border: 1px solid var(--border-color) !important;
    background: var(--bg-card) !important;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    align-items: center;
    justify-content: center;
    z-index: 101;
    color: var(--text-secondary);
    pointer-events: auto;
    transition: color 0.3s ease, border-color 0.3s ease;
  }

  .mobile-home-top.active {
    color: var(--accent-color);
  }

  .desktop-globe {
    display: none !important;
  }

  .mobile-globe {
    display: flex !important;
    position: fixed !important;
    top: 16px;
    right: 16px;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    border: 1px solid var(--border-color) !important;
    background: var(--bg-card) !important;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    align-items: center;
    justify-content: center;
    z-index: 101;
    padding: 0;
    pointer-events: auto;
  }

  .nav-logo :deep(svg) {
    width: 24px;
    height: 24px;
  }

  .nav-globe :deep(svg) {
    width: 20px;
    height: 20px;
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

.nav-links .mobile-home-link {
  display: none;
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
  pointer-events: auto;
}

.mobile-globe {
  display: none;
}

.mobile-home-top {
  display: none;
  text-decoration: none;
}


.nav-globe:hover {
  border-color: rgba(var(--accent-rgb), 0.6);
  box-shadow: 0 0 12px rgba(var(--accent-rgb), 0.2);
  color: var(--accent-color);
}

/* Language dropdown */
.lang-wrap {
  position: relative;
}

.lang-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  display: flex;
  flex-direction: column;
  min-width: 140px;
  padding: 6px;
  border-radius: 14px;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
  z-index: 200;
}

.lang-dropdown-mobile {
  right: 0;
  top: calc(100% + 8px);
}

.lang-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border: none;
  background: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: 'Lexend', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  color: rgba(var(--text-rgb), 0.7);
  transition: background 0.2s ease, color 0.2s ease;
}

.lang-option:hover {
  background: rgba(var(--accent-rgb), 0.08);
  color: var(--text-primary);
}

.lang-option.active {
  color: var(--accent-color);
  font-weight: 600;
}

.lang-flag {
  font-size: 1.1rem;
  line-height: 1;
}

.lang-label {
  white-space: nowrap;
}

/* Transition */
.lang-fade-enter-active,
.lang-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.lang-fade-enter-from,
.lang-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

</style>
