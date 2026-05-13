<script setup lang="ts">
import { educationCategories } from '../content/education'
import {
  PhCertificate,
  PhStudent,
  PhBrain,
  PhGlobeHemisphereWest,
} from '@phosphor-icons/vue'

const iconMap: Record<string, any> = {
  PhCertificate,
  PhStudent,
  PhBrain,
  PhGlobeHemisphereWest,
}

function getIcon(name: string) {
  return iconMap[name] || PhCertificate
}
</script>

<template>
  <section id="education" class="education-section" aria-label="Education">
    <div class="education-inner">
      <div v-scroll-reveal class="education-header">
        <h2 class="education-heading">
          <span class="heading-gradient">EDUCATION</span>
        </h2>
      </div>

      <div class="education-grid">
        <div
          v-for="(cat, i) in educationCategories"
          :key="cat.title"
          v-scroll-reveal="{ delay: i * 100 }"
          class="edu-card"
        >
          <div class="edu-card-header">
            <component :is="getIcon(cat.icon)" :size="32" weight="duotone" class="edu-icon" />
            <h3 class="edu-title">{{ cat.title }}</h3>
          </div>
          <ul class="edu-list">
            <li v-for="item in cat.items" :key="item" class="edu-item">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-section {
  position: relative;
  width: 100%;
  background: rgba(var(--bg-section-rgb), var(--bg-section-alpha));
  padding: 120px 48px;
  display: flex;
  justify-content: center;
}

.education-inner {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
}

.education-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
}

.education-heading {
  font-family: 'Lexend', sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0;
}

.heading-gradient {
  color: var(--accent-color);
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 100%;
}

.edu-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  will-change: transform;
  transform: translateZ(0);
}

.edu-card:hover {
  border-color: var(--border-color-hover);
  box-shadow: 0 12px 32px rgba(var(--shadow-rgb), 0.2);
  transform: translateY(-4px);
}

.edu-card-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
}

.edu-icon {
  color: var(--accent-color);
  filter: drop-shadow(0 0 6px rgba(var(--accent-rgb), 0.3));
}

.edu-title {
  font-family: 'Lexend', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: var(--accent-color);
  margin: 0;
  text-transform: uppercase;
}

.edu-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.edu-item {
  font-family: 'Lexend', sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  color: rgba(var(--text-rgb), 0.88);
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 1024px) {
  .education-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .education-section {
    padding: 80px 24px;
  }

  .edu-card {
    padding: 24px;
    border-radius: 14px;
  }
}

@media (max-width: 480px) {
  .education-section {
    padding: 60px 16px;
  }

  .education-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .edu-card {
    padding: 20px;
    border-radius: 12px;
  }
}
</style>
