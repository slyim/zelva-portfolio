<script setup lang="ts">
import { tools } from '../content/tools'
import { publicUrl } from '../utils/publicUrl'
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>

<template>
  <section id="skills" class="tools-section" aria-label="Tools and software">
    <div class="tools-inner">
      <div class="tools-header">
        <h2 v-scroll-reveal class="tools-heading">
          <span class="heading-gradient">{{ t('tools.heading') }}</span>
        </h2>
        <p v-scroll-reveal="{ delay: 100 }" class="tools-subtitle">
          {{ t('tools.subtitle') }}
        </p>
      </div>

      <div class="tools-grid">
        <div
          v-for="(tool, i) in tools"
          :key="tool.name"
          v-scroll-reveal="{ delay: i * 50 }"
          class="tool-card"
        >
          <div class="tool-icon-wrap">
            <img :src="publicUrl(tool.icon)" :alt="tool.name" class="tool-icon" loading="lazy" />
          </div>
          <div class="tool-divider" />
          <span class="tool-name">{{ tool.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tools-section {
  position: relative;
  width: 100%;
  background: rgba(var(--bg-section-rgb), var(--bg-section-alpha));
  padding: 120px 48px;
  display: flex;
  justify-content: center;
}

.tools-inner {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.tools-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
}

.tools-heading {
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

.tools-subtitle {
  font-family: 'Lexend', sans-serif;
  font-size: clamp(0.85rem, 1.5vw, 1rem);
  font-weight: 400;
  color: rgba(var(--text-rgb), 0.6);
  max-width: 640px;
  line-height: 1.6;
  margin: 0;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.tool-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border-radius: 14px;
  border: 1px solid rgba(var(--border-rgb), 0.1);
  background: rgba(var(--border-rgb), 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
  cursor: default;
  will-change: transform;
  transform: translateZ(0);
}

.tool-card:hover {
  border-color: var(--border-color-hover);
  background: rgba(var(--accent-rgb), 0.04);
  transform: translateY(-2px);
}

.tool-icon-wrap {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.tool-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Affine & OpenCode are dark — invert to white in dark mode (default) */
.tool-icon[src*="/SoftwareIcons/AffineIcon.svg"],
.tool-icon[src*="/SoftwareIcons/OpenCodeIcon.svg"] {
  filter: brightness(0) invert(1);
}

[data-theme="light"] .tool-icon[src*="/SoftwareIcons/AffineIcon.svg"],
[data-theme="light"] .tool-icon[src*="/SoftwareIcons/OpenCodeIcon.svg"] {
  filter: none;
}

/* Zed is white — make it black in light mode */
[data-theme="light"] .tool-icon[src*="/SoftwareIcons/ZedIcon.svg"] {
  filter: brightness(0);
}

.tool-divider {
  width: 1px;
  height: 24px;
  background: rgba(var(--border-rgb), 0.15);
  flex-shrink: 0;
}

.tool-name {
  font-family: 'Lexend', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(var(--text-rgb), 0.9);
  white-space: nowrap;
}

/* Responsive */
@media (max-width: 1024px) {
  .tools-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .tools-section {
    padding: 80px 24px;
  }

  .tools-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .tool-card {
    padding: 12px 14px;
    border-radius: 12px;
  }

  .tool-icon-wrap {
    width: 28px;
    height: 28px;
  }

  .tool-name {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .tools-section {
    padding: 60px 16px;
  }

  .tools-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .tool-card {
    padding: 10px 12px;
    border-radius: 10px;
    gap: 8px;
  }

  .tool-icon-wrap {
    width: 24px;
    height: 24px;
  }

  .tool-divider {
    height: 20px;
  }

  .tool-name {
    font-size: 0.75rem;
  }
}
</style>
