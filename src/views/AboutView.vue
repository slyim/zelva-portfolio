<script setup lang="ts">
import GlassCard from '../components/GlassCard.vue'
import { useI18n } from '../i18n'

const { t } = useI18n()

const skillNodes = [
  { id: 'uiux', label: 'UI/UX' },
  { id: 'code', label: 'Creative Coding' },
  { id: 'photo', label: 'Photography' },
  { id: 'sound', label: 'Sound Design' },
  { id: 'illust', label: 'Illustration' },
  { id: 'motion', label: 'Motion' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'brand', label: 'Branding' },
]

const skillProjects: Record<string, { title: string; items: string[] }> = {
  uiux: {
    title: 'UI/UX Projects',
    items: ['UFOCAR Dashboard', 'Seer Tarot App', 'Artstation Redefined', 'InterMuse'],
  },
  code: {
    title: 'Creative Coding',
    items: ['Generative Gradients', 'Magic Bouncing Ball', 'Jumping Rectangles', 'Conditionals Study'],
  },
  photo: {
    title: 'Photography',
    items: ['Urban Textures & Decay', 'Macro Street Details', 'Light & Shadow Study'],
  },
  sound: {
    title: 'Sound Design',
    items: ['Gris Soundscape', 'Horrorscape', 'Ambient Layers', 'Spatial Audio Experiments'],
  },
  illust: {
    title: 'Illustration',
    items: ['Toucan Study', 'Elemental Stone', 'Queen Slime', 'Pixel Art Characters'],
  },
  motion: {
    title: 'Motion Design',
    items: ['UI Micro-interactions', 'Loading Animations', 'Scroll Reveal System', 'Page Transitions'],
  },
  frontend: {
    title: 'Frontend Dev',
    items: ['Portfolio Site (Vue 3)', 'Custom Video Player', 'Modal Systems', 'Responsive Layouts'],
  },
  brand: {
    title: 'Branding',
    items: ['Zelva Identity System', 'Logo Design', 'Color Theory', 'Typography Systems'],
  },
}
</script>

<template>
  <div class="about page-section">
    <!-- Bio Section -->
    <div class="about-container">
      <div class="bio-grid">
        <!-- Left: Avatar & Identity -->
        <div v-scroll-reveal class="identity-card">
          <div class="avatar-wrap">
            <div class="avatar-glow"></div>
            <div class="avatar">
              <span class="avatar-text">Z</span>
            </div>
          </div>
          <div class="identity-info">
            <h1 class="identity-name">
              <span class="name-white">ZELVA</span>
              <span class="name-accent">.design</span>
            </h1>
            <p class="identity-role">S-Class Designer & Creative Developer</p>
            <div class="identity-tags">
              <span class="id-tag">UI/UX</span>
              <span class="id-tag">Creative Coding</span>
              <span class="id-tag">Sound Design</span>
              <span class="id-tag">Photography</span>
            </div>
          </div>
        </div>

        <!-- Right: Philosophy Card -->
        <GlassCard v-scroll-reveal="{ delay: 150 }" class="philosophy-card">
          <div class="philosophy-content">
            <p class="philosophy-text">{{ t('about.p1') }}</p>
            <p class="philosophy-text">{{ t('about.p2') }}</p>
            <p class="philosophy-text highlight">{{ t('about.p3') }}</p>
          </div>
        </GlassCard>
      </div>

      <!-- Skills Grid -->
      <div class="skills-section">
        <h2 v-scroll-reveal class="section-heading">
          <span class="heading-gradient">WHAT I DO</span>
        </h2>

        <div class="skills-grid">
          <div
            v-for="(skill, i) in skillNodes"
            :key="skill.id"
            v-scroll-reveal="{ delay: i * 60 }"
            class="skill-card"
          >
            <div class="skill-header">
              <div class="skill-dot"></div>
              <h3 class="skill-name">{{ skill.label }}</h3>
            </div>
            <ul class="skill-list">
              <li v-for="item in skillProjects[skill.id]?.items" :key="item" class="skill-item">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Fun Facts / Stats -->
      <div class="stats-grid">
        <div v-scroll-reveal="{ delay: 0 }" class="stat-card">
          <span class="stat-number">6+</span>
          <span class="stat-label">Design Disciplines</span>
        </div>
        <div v-scroll-reveal="{ delay: 100 }" class="stat-card">
          <span class="stat-number">3</span>
          <span class="stat-label">Languages</span>
        </div>
        <div v-scroll-reveal="{ delay: 200 }" class="stat-card">
          <span class="stat-number">∞</span>
          <span class="stat-label">Curiosity</span>
        </div>
        <div v-scroll-reveal="{ delay: 300 }" class="stat-card">
          <span class="stat-number">S</span>
          <span class="stat-label">Class Rank</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-section {
  position: relative;
  width: 100%;
  min-height: 100dvh;
  background: var(--bg-page);
  padding: 140px 48px 80px;
  display: flex;
  justify-content: center;
}

.about-container {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 80px;
}

/* ===== BIO GRID ===== */
.bio-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 48px;
  align-items: start;
}

/* Identity Card */
.identity-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 48px 36px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.avatar-wrap {
  position: relative;
  width: 120px;
  height: 120px;
}

.avatar-glow {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(var(--accent-rgb), 0.3) 0%, transparent 70%);
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.1); opacity: 1; }
}

.avatar {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-color) 0%, rgba(var(--accent-rgb), 0.6) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.avatar-text {
  font-family: 'Lexend', sans-serif;
  font-size: 3rem;
  font-weight: 900;
  color: var(--text-on-accent);
}

.identity-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
}

.identity-name {
  font-family: 'Lexend', sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0;
  line-height: 1;
}

.name-white {
  color: var(--text-primary);
}

.name-accent {
  color: var(--accent-color);
}

.identity-role {
  font-family: 'Lexend', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(var(--text-rgb), 0.6);
  margin: 0;
  letter-spacing: 0.05em;
}

.identity-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 8px;
}

.id-tag {
  font-family: 'Lexend', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--accent-color);
  background: rgba(var(--accent-rgb), 0.08);
  border: 1px solid rgba(var(--accent-rgb), 0.2);
  padding: 4px 12px;
  border-radius: 100px;
  letter-spacing: 0.05em;
}

/* Philosophy Card */
.philosophy-card {
  padding: 36px;
}

.philosophy-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.philosophy-text {
  font-family: 'Lexend', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  color: rgba(var(--text-rgb), 0.88);
  margin: 0;
}

.philosophy-text.highlight {
  color: var(--accent-color);
  font-weight: 500;
}

/* ===== SKILLS SECTION ===== */
.skills-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.section-heading {
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  width: 100%;
}

.skill-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 28px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: border-color 0.3s ease, transform 0.3s ease, background 0.3s ease;
}

.skill-card:hover {
  border-color: var(--border-color-hover);
  background: rgba(var(--accent-rgb), 0.04);
  transform: translateY(-4px);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.skill-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent-color);
  flex-shrink: 0;
  box-shadow: 0 0 8px rgba(var(--accent-rgb), 0.4);
}

.skill-name {
  font-family: 'Lexend', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.skill-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skill-item {
  font-family: 'Lexend', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  color: rgba(var(--text-rgb), 0.55);
  line-height: 1.5;
  position: relative;
  padding-left: 14px;
}

.skill-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(var(--accent-rgb), 0.5);
}

/* ===== STATS GRID ===== */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 32px 24px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: border-color 0.3s ease, transform 0.3s ease;
}

.stat-card:hover {
  border-color: var(--border-color-hover);
  transform: translateY(-4px);
}

.stat-number {
  font-family: 'Lexend', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--accent-color);
  line-height: 1;
}

.stat-label {
  font-family: 'Lexend', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(var(--text-rgb), 0.6);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;
}

/* Responsive */
@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 968px) {
  .bio-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .page-section {
    padding: 120px 24px 60px;
  }

  .about-container {
    gap: 60px;
  }

  .identity-card {
    padding: 36px 24px;
  }

  .philosophy-card {
    padding: 28px;
  }

  .philosophy-text {
    font-size: 0.95rem;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .skill-card {
    padding: 20px;
  }

  .skill-name {
    font-size: 0.9rem;
  }

  .skill-item {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .page-section {
    padding: 48px 16px 120px;
  }

  .about-container {
    gap: 48px;
  }

  .identity-card {
    padding: 28px 20px;
  }

  .avatar-wrap {
    width: 100px;
    height: 100px;
  }

  .avatar-text {
    font-size: 2.5rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .stat-card {
    padding: 24px 16px;
  }

  .stat-number {
    font-size: 1.8rem;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .skill-card {
    padding: 16px;
    gap: 12px;
  }

  .skill-dot {
    width: 8px;
    height: 8px;
  }

  .skill-name {
    font-size: 0.8rem;
  }

  .skill-item {
    font-size: 0.7rem;
    padding-left: 12px;
  }

  .skill-item::before {
    top: 6px;
    width: 4px;
    height: 4px;
  }
}
</style>
