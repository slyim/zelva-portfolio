<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { publicUrl } from '../utils/publicUrl'
import { artworks } from '../content/artworks'
import { designProjects } from '../content/designs'
import { photos } from '../content/photography'
import { soundscapeProjects } from '../content/soundscapes'

const router = useRouter()

interface FeaturedItem {
  title: string
  image: string
  route: string
  label: string
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = a[i]!
    a[i] = a[j]!
    a[j] = tmp
  }
  return a
}

const featuredItems = computed<FeaturedItem[]>(() => {
  const all: FeaturedItem[] = [
    ...artworks.map((a) => ({
      title: a.title,
      image: a.coverImage,
      route: '/artworks',
      label: 'Artwork',
    })),
    ...designProjects.map((d) => ({
      title: d.title,
      image: d.coverImage,
      route: '/designs',
      label: 'Design',
    })),
    ...photos.map((p) => ({
      title: p.title,
      image: p.coverImage,
      route: '/photography',
      label: 'Photo',
    })),
    ...soundscapeProjects.map((s) => ({
      title: s.title,
      image: s.thumbnail || s.coverImage,
      route: '/soundscapes',
      label: 'Sound',
    })),
  ]
  return shuffle(all).slice(0, 8)
})

function goTo(route: string) {
  router.push(route)
}
</script>

<template>
  <section id="featured" class="featured-section" aria-label="Featured work">
    <div class="featured-inner">
      <h2 v-scroll-reveal class="featured-heading">
        <span class="heading-gradient">FEATURED WORK</span>
      </h2>

      <div v-scroll-reveal="{ delay: 100 }" class="featured-scroll">
        <div
          v-for="(item, i) in featuredItems"
          :key="item.title + i"
          class="featured-card"
          role="link"
          tabindex="0"
          :aria-label="`View ${item.title} in ${item.label}`"
          @click="goTo(item.route)"
          @keydown.enter.space.prevent="goTo(item.route)"
        >
          <div class="card-border"></div>
          <div class="card-inner">
            <div class="featured-image">
              <img :src="publicUrl(item.image)" :alt="item.title" loading="lazy" />
            </div>
            <div class="featured-overlay">
              <span class="featured-label">{{ item.label }}</span>
              <span class="featured-title">{{ item.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured-section {
  position: relative;
  width: 100%;
  background: rgba(var(--bg-section-rgb), var(--bg-section-alpha));
  padding: 120px 48px;
  display: flex;
  justify-content: center;
}

.featured-inner {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
}

.featured-heading {
  font-family: 'Lexend', sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0;
  text-align: center;
}

.heading-gradient {
  color: var(--accent-color);
}

.featured-scroll {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  padding-bottom: 16px;
  scrollbar-width: thin;
  scrollbar-color: rgba(var(--accent-rgb), 0.3) transparent;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.featured-scroll::-webkit-scrollbar {
  height: 4px;
}

.featured-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.featured-scroll::-webkit-scrollbar-thumb {
  background: rgba(var(--accent-rgb), 0.3);
  border-radius: 2px;
}

.featured-card {
  position: relative;
  flex: 0 0 auto;
  width: 320px;
  aspect-ratio: 4/3;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  transition: transform 0.3s ease, border-color 0.3s ease;
  scroll-snap-align: start;
}

.featured-card:hover {
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

.featured-card:hover .card-border::before {
  opacity: 1;
  animation-play-state: running;
}

@keyframes spin {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
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

.featured-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.featured-card:hover .featured-image img {
  transform: scale(1.05);
}

.featured-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 48px 16px 16px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 1;
}

.featured-label {
  font-family: 'Lexend', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.featured-title {
  font-family: 'Lexend', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.02em;
}

/* Responsive */
@media (max-width: 768px) {
  .featured-section {
    padding: 80px 24px;
  }

  .featured-card {
    width: 280px;
  }
}

@media (max-width: 480px) {
  .featured-section {
    padding: 60px 16px;
  }

  .featured-card {
    width: 260px;
  }
}
</style>
