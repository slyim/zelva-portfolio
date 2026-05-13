<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import GlassCard from '../components/GlassCard.vue'
import { useI18n } from '../i18n'

const { t } = useI18n()

// Skill nodes with positions (percentages)
const skillNodes = [
  { id: 'uiux', label: 'UI/UX', x: 50, y: 20, size: 1.2 },
  { id: 'code', label: 'Creative Coding', x: 20, y: 40, size: 1.0 },
  { id: 'photo', label: 'Photography', x: 80, y: 35, size: 1.0 },
  { id: 'sound', label: 'Sound Design', x: 35, y: 70, size: 1.1 },
  { id: 'illust', label: 'Illustration', x: 70, y: 65, size: 1.0 },
  { id: 'motion', label: 'Motion', x: 50, y: 50, size: 0.9 },
  { id: 'frontend', label: 'Frontend', x: 15, y: 65, size: 0.9 },
  { id: 'brand', label: 'Branding', x: 85, y: 55, size: 0.9 },
]

// Connections between skills
const connections = [
  ['uiux', 'code'],
  ['uiux', 'brand'],
  ['code', 'frontend'],
  ['code', 'motion'],
  ['photo', 'illust'],
  ['sound', 'motion'],
  ['illust', 'brand'],
  ['uiux', 'motion'],
  ['frontend', 'sound'],
]

const activeSkill = ref<string | null>(null)
const mousePos = ref({ x: 0, y: 0 })
const constellationRef = ref<HTMLDivElement | null>(null)

function handleMouseMove(e: MouseEvent) {
  if (!constellationRef.value) return
  const rect = constellationRef.value.getBoundingClientRect()
  mousePos.value = {
    x: ((e.clientX - rect.left) / rect.width) * 100,
    y: ((e.clientY - rect.top) / rect.height) * 100,
  }
}

// Animated floating particles
const particles = ref<Array<{ x: number; y: number; size: number; speed: number; opacity: number }>>([])

onMounted(() => {
  // Generate random particles
  particles.value = Array.from({ length: 30 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    speed: Math.random() * 0.3 + 0.1,
    opacity: Math.random() * 0.4 + 0.1,
  }))
})

onUnmounted(() => {
  // Cleanup if needed
})
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

      <!-- Interactive Skill Constellation -->
      <div class="constellation-section">
        <h2 v-scroll-reveal class="section-heading">
          <span class="heading-gradient">SKILL CONSTELLATION</span>
        </h2>
        <p v-scroll-reveal="{ delay: 100 }" class="section-subtitle">
          Hover to explore the connections
        </p>

        <div
          ref="constellationRef"
          v-scroll-reveal="{ delay: 200 }"
          class="constellation-map"
          @mousemove="handleMouseMove"
          @mouseleave="activeSkill = null"
        >
          <!-- Background particles -->
          <div
            v-for="(p, i) in particles"
            :key="i"
            class="particle"
            :style="{
              left: p.x + '%',
              top: p.y + '%',
              width: p.size + 'px',
              height: p.size + 'px',
              opacity: p.opacity,
              animationDuration: (20 / p.speed) + 's'
            }"
          />

          <!-- Connection lines -->
          <svg class="connections-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="rgba(var(--accent-rgb), 0)" />
                <stop offset="50%" stop-color="rgba(var(--accent-rgb), 0.3)" />
                <stop offset="100%" stop-color="rgba(var(--accent-rgb), 0)" />
              </linearGradient>
            </defs>
            <line
              v-for="(conn, i) in connections"
              :key="i"
              :x1="skillNodes.find(n => n.id === conn[0])?.x"
              :y1="skillNodes.find(n => n.id === conn[0])?.y"
              :x2="skillNodes.find(n => n.id === conn[1])?.x"
              :y2="skillNodes.find(n => n.id === conn[1])?.y"
              class="connection-line"
              :class="{ 
                active: activeSkill === conn[0] || activeSkill === conn[1]
              }"
            />
            <!-- Mouse proximity line -->
            <line
              v-if="activeSkill"
              :x1="skillNodes.find(n => n.id === activeSkill)?.x"
              :y1="skillNodes.find(n => n.id === activeSkill)?.y"
              :x2="mousePos.x"
              :y2="mousePos.y"
              class="cursor-line"
            />
          </svg>

          <!-- Skill nodes -->
          <div
            v-for="node in skillNodes"
            :key="node.id"
            class="skill-node"
            :class="{ active: activeSkill === node.id, connected: activeSkill && connections.some(c => (c[0] === activeSkill && c[1] === node.id) || (c[1] === activeSkill && c[0] === node.id)) }"
            :style="{
              left: node.x + '%',
              top: node.y + '%',
              transform: `translate(-50%, -50%) scale(${node.size})`
            }"
            @mouseenter="activeSkill = node.id"
            @mouseleave="activeSkill = null"
          >
            <div class="node-core"></div>
            <div class="node-ring"></div>
            <div class="node-label">{{ node.label }}</div>
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

/* ===== CONSTELLATION SECTION ===== */
.constellation-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
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

.section-subtitle {
  font-family: 'Lexend', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  color: rgba(var(--text-rgb), 0.5);
  letter-spacing: 0.15em;
  margin: 0;
  text-transform: uppercase;
}

/* Constellation Map */
.constellation-map {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  background: radial-gradient(ellipse at center, rgba(var(--accent-rgb), 0.03) 0%, transparent 70%);
  overflow: hidden;
  cursor: crosshair;
}

/* Particles */
.particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(var(--accent-rgb), 0.6);
  pointer-events: none;
  animation: float-particle linear infinite;
}

@keyframes float-particle {
  0% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-20px) translateX(10px); }
  50% { transform: translateY(-10px) translateX(-10px); }
  75% { transform: translateY(-30px) translateX(5px); }
  100% { transform: translateY(0) translateX(0); }
}

/* SVG Connections */
.connections-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.connection-line {
  stroke: rgba(var(--accent-rgb), 0.1);
  stroke-width: 0.3;
  transition: stroke 0.4s ease, stroke-width 0.4s ease;
}

.connection-line.active {
  stroke: rgba(var(--accent-rgb), 0.5);
  stroke-width: 0.6;
}

.cursor-line {
  stroke: rgba(var(--accent-rgb), 0.2);
  stroke-width: 0.2;
  stroke-dasharray: 2 2;
}

/* Skill Nodes */
.skill-node {
  position: absolute;
  z-index: 2;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.node-core {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(var(--text-rgb), 0.3);
  transition: all 0.3s ease;
}

.node-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid rgba(var(--accent-rgb), 0);
  transition: all 0.3s ease;
  pointer-events: none;
}

.node-label {
  font-family: 'Lexend', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(var(--text-rgb), 0.5);
  white-space: nowrap;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 4px;
}

.skill-node:hover .node-core,
.skill-node.active .node-core {
  background: var(--accent-color);
  box-shadow: 0 0 16px rgba(var(--accent-rgb), 0.6);
}

.skill-node:hover .node-ring,
.skill-node.active .node-ring {
  border-color: rgba(var(--accent-rgb), 0.4);
  width: 32px;
  height: 32px;
}

.skill-node:hover .node-label,
.skill-node.active .node-label {
  color: var(--accent-color);
  font-weight: 600;
}

.skill-node.connected .node-core {
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
@media (max-width: 968px) {
  .bio-grid {
    grid-template-columns: 1fr;
  }

  .constellation-map {
    aspect-ratio: 4/3;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .node-label {
    font-size: 0.65rem;
  }
}

@media (max-width: 768px) {
  .page-section {
    padding: 120px 24px 60px;
  }

  .about-container {
    gap: 60px;
  }

  .constellation-map {
    aspect-ratio: 1/1;
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

  .node-label {
    font-size: 0.55rem;
    letter-spacing: 0.05em;
  }

  .node-core {
    width: 8px;
    height: 8px;
  }

  .node-ring {
    width: 16px;
    height: 16px;
  }
}
</style>
