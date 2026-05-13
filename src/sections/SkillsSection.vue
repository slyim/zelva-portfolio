<script setup lang="ts">
import {
  PhDeviceMobile,
  PhCode,
  PhCamera,
  PhSpeakerHigh,
  PhPenNib,
  PhVideoCamera,
  PhBracketsCurly,
  PhPalette,
} from '@phosphor-icons/vue'

const skills = [
  { label: 'UI/UX', icon: PhDeviceMobile },
  { label: 'Creative Coding', icon: PhCode },
  { label: 'Photography', icon: PhCamera },
  { label: 'Sound Design', icon: PhSpeakerHigh },
  { label: 'Illustration', icon: PhPenNib },
  { label: 'Motion', icon: PhVideoCamera },
  { label: 'Frontend', icon: PhBracketsCurly },
  { label: 'Branding', icon: PhPalette },
]
</script>

<template>
  <section id="skills" class="skills-section" aria-label="Skills and disciplines">
    <div class="skills-inner">
      <h2 v-scroll-reveal class="skills-heading">
        <span class="heading-gradient">WHAT I DO</span>
      </h2>

      <div class="skills-grid">
        <div
          v-for="(skill, i) in skills"
          :key="skill.label"
          v-scroll-reveal="{ delay: i * 60 }"
          class="skill-card"
        >
          <component :is="skill.icon" :size="32" weight="duotone" class="skill-icon" />
          <span class="skill-name">{{ skill.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  position: relative;
  width: 100%;
  background: rgba(var(--bg-section-rgb), var(--bg-section-alpha));
  padding: 120px 48px;
  display: flex;
  justify-content: center;
}

.skills-inner {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
}

.skills-heading {
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
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 36px 20px;
  border-radius: 16px;
  border: 1px solid rgba(var(--border-rgb), 0.1);
  background: rgba(var(--border-rgb), 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: border-color 0.3s ease, transform 0.3s ease, background 0.3s ease;
}

.skill-card:hover {
  border-color: var(--border-color-hover);
  background: rgba(var(--accent-rgb), 0.04);
  transform: translateY(-4px);
}

.skill-icon {
  color: var(--accent-color);
}

.skill-name {
  font-family: 'Lexend', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-align: center;
}

/* Responsive */
@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .skills-section {
    padding: 80px 24px;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .skill-card {
    padding: 28px 16px;
    gap: 12px;
  }

  .skill-name {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .skills-section {
    padding: 60px 16px;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .skill-card {
    padding: 24px 12px;
    gap: 10px;
  }

  .skill-icon {
    transform: scale(0.85);
  }

  .skill-name {
    font-size: 0.75rem;
    letter-spacing: 0.05em;
  }
}
</style>
