<script setup lang="ts">
import videoWebM from '../assets/video-loop.webm'
import videoMP4 from '../assets/video-loop.mp4'
import videoPoster from '../assets/video-poster.jpg'
import BottomTextSection from '../sections/BottomTextSection.vue'
import { ref } from 'vue'

const videoRef = ref<HTMLVideoElement | null>(null)
const isPlaying = ref(true)

function toggleVideo() {
  if (!videoRef.value) return
  if (isPlaying.value) {
    videoRef.value.pause()
  } else {
    videoRef.value.play()
  }
  isPlaying.value = !isPlaying.value
}

function scrollToContact() {
  const el = document.getElementById('contact')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

import { onMounted, onUnmounted } from 'vue'
import { useI18n } from '../i18n'

const { t } = useI18n()

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (videoRef.value) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!videoRef.value) return
        if (entry.isIntersecting && isPlaying.value) {
          videoRef.value.play().catch(() => {})
        } else {
          videoRef.value.pause()
        }
      })
    }, { threshold: 0 })
    observer.observe(videoRef.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <section id="cta" class="hero" aria-label="Portfolio introduction">
    <!-- Video Background -->
    <video
      ref="videoRef"
      autoplay
      loop
      muted
      playsinline
      preload="auto"
      :poster="videoPoster"
      aria-hidden="true"
      class="hero-video"
    >
      <source :src="videoWebM" type="video/webm" />
      <source :src="videoMP4" type="video/mp4" />
    </video>

    <!-- Dark overlay for text readability -->
    <div class="hero-overlay"></div>

    <!-- Bottom fade so the video doesn't cut off abruptly -->
    <div class="hero-fade"></div>

    <!-- Video pause/play control -->
    <button
      class="video-control"
      :aria-label="isPlaying ? 'Pause background video' : 'Play background video'"
      @click="toggleVideo"
    >
      <svg v-if="isPlaying" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <rect x="6" y="4" width="4" height="16" rx="1" />
        <rect x="14" y="4" width="4" height="16" rx="1" />
      </svg>
      <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>

    <!-- Content Layer -->
    <div class="hero-content">
      <p v-scroll-reveal="{ delay: 200, origin: 'bottom' }" class="hero-tagline">
        {{ t('hero.tagline') }}
      </p>

      <h1 v-scroll-reveal="{ delay: 400, origin: 'bottom' }" class="hero-title">
        <span class="title-white">{{ t('hero.greeting') }}</span>
        <span class="title-green"> ZELVA</span>
      </h1>

      <button
        v-scroll-reveal="{ delay: 600, origin: 'bottom' }"
        class="hero-cta-btn"
        @click="scrollToContact"
      >
        {{ t('hero.contact') }}
      </button>
    </div>

    <BottomTextSection />
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  min-height: 100dvh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 120px 48px 48px;
  overflow: hidden;
  background: var(--bg-tagline);
}

/* Video Background */
.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

/* Dark overlay so text is readable */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--overlay-bg);
  z-index: 2;
  pointer-events: none;
}

/* Bottom fade — video blends seamlessly into the next section */
.hero-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 45vh;
  background: linear-gradient(
    to bottom,
    rgba(var(--bg-section-rgb), 0) 0%,
    rgba(var(--bg-section-rgb), 0) 40%,
    rgba(var(--bg-section-rgb), 0.5) 75%,
    var(--bg-tagline) 100%
  );
  z-index: 2;
  pointer-events: none;
}

/* Video pause/play button */
.video-control {
  position: absolute;
  bottom: 140px;
  right: 48px;
  z-index: 4;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1.5px solid rgba(var(--border-rgb), 0.25);
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
}

.video-control:hover {
  border-color: rgba(var(--accent-rgb), 0.6);
  box-shadow: 0 0 12px rgba(var(--accent-rgb), 0.2);
  color: var(--accent-color);
}

/* Content Layer */
.hero-content {
  position: relative;
  z-index: 3;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  pointer-events: none;
  width: 100%;
  padding-top: 14vh;
}

.hero-content > * {
  pointer-events: auto;
}

/* Tagline */
.hero-tagline {
  font-family: 'Lexend', sans-serif;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  font-weight: 300;
  color: rgba(var(--text-rgb), 0.6);
  letter-spacing: 0.08em;
  margin: 0;
  text-align: center;
}

.tagline-star {
  color: var(--accent-color);
}

/* Big Headline */
.hero-title {
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin: 0;
  text-align: center;
}

.title-white {
  color: var(--text-primary);
  font-weight: 800;
}

.title-green {
  color: var(--accent-color);
  font-weight: 800;
  display: inline-block;
  padding-bottom: 0.1em;
}

/* CTA Button */
.hero-cta-btn {
  margin-top: 32px;
  padding: 18px 56px;
  border-radius: 20px;
  border: none;
  background: var(--accent-color);
  color: #000000;
  font-family: 'Lexend', sans-serif;
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 800;
  letter-spacing: 0.06em;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
}

.hero-cta-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: skewX(-25deg);
  transition: left 0.6s ease;
}

.hero-cta-btn:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 16px 40px rgba(var(--accent-rgb), 0.4), 0 0 20px rgba(var(--accent-rgb), 0.2);
}

.hero-cta-btn:hover::before {
  left: 200%;
}

.hero-cta-btn:active {
  transform: translateY(0) scale(0.98);
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    padding: 100px 20px 40px;
    justify-content: center;
    align-items: center;
  }

  .hero-content {
    padding-top: 12vh;
    gap: 20px;
  }

  .hero-title {
    font-size: clamp(2.5rem, 10vw, 4rem);
  }

  .video-control {
    bottom: 120px;
    right: 24px;
    width: 36px;
    height: 36px;
  }

  .hero-cta-btn {
    padding: 16px 44px;
    border-radius: 16px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 48px 16px 100px;
    min-height: 100svh;
  }

  .hero-content {
    padding-top: 10vh;
    gap: 16px;
  }

  .hero-title {
    font-size: clamp(2rem, 14vw, 3rem);
    line-height: 1.05;
  }

  .hero-cta-btn {
    padding: 14px 36px;
    border-radius: 14px;
    font-size: 1rem;
  }

  .video-control {
    bottom: 110px;
    right: 16px;
  }

  .hero-overlay {
    background: var(--overlay-bg-mobile);
  }

  .hero-fade {
    height: 35vh;
  }
}
</style>

<style>
/* Invert video colors in light mode so it blends with the bright theme */
html[data-theme="light"] .hero-video {
  filter: invert(1);
}
</style>
