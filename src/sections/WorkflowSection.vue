<script setup lang="ts">
import GlassCard from '../components/GlassCard.vue'
import {
  PhHeart,
  PhTarget,
  PhLightbulb,
  PhFlask,
  PhRocketLaunch,
  PhPackage,
  PhCaretRight
} from '@phosphor-icons/vue'


</script>

<template>
  <section id="about" class="workflow-section" aria-label="About and workflow">
    <div class="workflow-inner">
      <!-- Left: About Card (matches navbar glass style) -->
      <GlassCard v-scroll-reveal class="about-card">
        <p class="about-text">
          Hi, I'm Zelva, a creative designer who believes in the value of human work &amp; intelligence.
          Capable of implementing human design solutions made for humans by me in the era of AI slop.
        </p>
        <p class="about-text">
          I'm passionate about crafting experiences that feel natural, intuitive, and visually striking.
          Creativity is universal, and good design should work for everyone.
        </p>
        <p class="about-text">
          You can't afford to replace a real professional with a tool that you have to babysit that
          doesn't know your brand &amp; doesn't know human psychology. This is where real product designers shine.
        </p>
      </GlassCard>

      <!-- Right: Workflow Statement -->
      <div class="workflow-content">
        <h2 v-scroll-reveal="{ delay: 150 }" class="workflow-heading">
          <span class="heading-gradient">NO LIMITS</span>
        </h2>
        <p v-scroll-reveal="{ delay: 250 }" class="workflow-subtitle">PROFESSIONAL DESIGN WORKFLOW</p>

        <div v-scroll-reveal="{ delay: 350 }" class="workflow-rows">
          <!-- Row 1 -->
          <div class="workflow-row">
            <div v-scroll-reveal="{ delay: 400, distance: 12 }" class="step-item">
              <PhHeart :size="28" weight="duotone" class="step-icon" />
              <span class="step-label">EMPATHIZE</span>
            </div>
            <PhCaretRight :size="16" weight="bold" class="step-arrow" />
            <div v-scroll-reveal="{ delay: 480, distance: 12 }" class="step-item">
              <PhTarget :size="28" weight="duotone" class="step-icon" />
              <span class="step-label">DEFINE</span>
            </div>
            <PhCaretRight :size="16" weight="bold" class="step-arrow" />
            <div v-scroll-reveal="{ delay: 560, distance: 12 }" class="step-item">
              <PhLightbulb :size="28" weight="duotone" class="step-icon" />
              <span class="step-label">IDEATE</span>
            </div>
          </div>

          <!-- Row 2 -->
          <div class="workflow-row">
            <div v-scroll-reveal="{ delay: 640, distance: 12 }" class="step-item">
              <PhFlask :size="28" weight="duotone" class="step-icon" />
              <span class="step-label">TEST</span>
            </div>
            <PhCaretRight :size="16" weight="bold" class="step-arrow" />
            <div v-scroll-reveal="{ delay: 720, distance: 12 }" class="step-item">
              <PhRocketLaunch :size="28" weight="duotone" class="step-icon" />
              <span class="step-label">PROTOTYPE</span>
            </div>
            <PhCaretRight :size="16" weight="bold" class="step-arrow" />
            <div v-scroll-reveal="{ delay: 800, distance: 12 }" class="step-item">
              <PhPackage :size="28" weight="duotone" class="step-icon" />
              <span class="step-label">SHIP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.workflow-section {
  position: relative;
  width: 100%;
  background: rgba(var(--bg-section-rgb), var(--bg-section-alpha));
  padding: 120px 48px;
  display: flex;
  justify-content: center;
}

.workflow-inner {
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

/* Left: About Card — uses GlassCard component for glass + hover glow */
.about-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 36px;
}

.about-text {
  font-family: 'Lexend', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  color: rgba(var(--text-rgb), 0.88);
  margin: 0;
}

/* Right: Workflow Content */
.workflow-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.workflow-heading {
  font-family: 'Lexend', sans-serif;
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0;
}

.heading-gradient {
  color: var(--accent-color);
}

.workflow-subtitle {
  font-family: 'Lexend', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  color: rgba(var(--text-rgb), 0.6);
  margin: 0;
  padding-bottom: 24px;
}

/* Workflow rows */
.workflow-rows {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.workflow-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 18px;
  border-radius: 12px;
  border: 1px solid rgba(var(--border-rgb), 0.08);
  background: rgba(var(--border-rgb), 0.03);
  transition: border-color 0.3s ease, background 0.3s ease;
  flex: 1 1 0;
  max-width: 130px;
  min-width: 90px;
  min-height: 90px;
}

.step-item:hover {
  border-color: var(--border-color-hover);
  background: rgba(var(--accent-rgb), 0.04);
}

.step-icon {
  color: var(--accent-color);
  transition: color 0.3s ease, filter 0.3s ease;
}

.step-item:hover .step-icon {
  filter: drop-shadow(0 0 8px rgba(var(--accent-rgb), 0.5));
}

.step-label {
  font-family: 'Lexend', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: rgba(var(--text-rgb), 0.8);
  text-align: center;
  transition: color 0.3s ease;
}

.step-item:hover .step-label {
  color: var(--accent-color);
}

.step-arrow {
  color: var(--accent-color);
  opacity: 0.7;
  flex-shrink: 0;
}

/* Responsive */
@media (max-width: 968px) {
  .workflow-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .workflow-content {
    align-items: center;
  }

  .workflow-heading {
    text-align: center;
  }

  .workflow-subtitle {
    text-align: center;
  }

  .workflow-rows {
    align-items: center;
  }
}

@media (max-width: 768px) {
  .workflow-section {
    padding: 80px 24px;
  }

  .about-card {
    padding: 28px;
  }

  .about-text {
    font-size: 0.95rem;
  }

  .workflow-row {
    gap: 8px;
  }

  .step-item {
    padding: 12px 8px;
    min-width: 80px;
    min-height: 80px;
    max-width: 110px;
  }

  .step-icon :deep(svg) {
    width: 24px;
    height: 24px;
  }
}

@media (max-width: 480px) {
  .workflow-section {
    padding: 60px 16px;
  }

  .about-card {
    padding: 22px;
  }

  .about-text {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .workflow-row {
    gap: 6px;
  }

  .step-item {
    padding: 10px 6px;
    min-width: 72px;
    min-height: 72px;
    max-width: 100px;
    border-radius: 10px;
  }

  .step-label {
    font-size: 0.6rem;
  }

  .step-arrow :deep(svg) {
    width: 12px;
    height: 12px;
  }
}
</style>
