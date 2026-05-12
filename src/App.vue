<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import SparkleShader from './components/SparkleShader.vue'
import BackgroundOrbs from './components/BackgroundOrbs.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import FooterSection from './sections/FooterSection.vue'
</script>

<template>
  <!-- Global SVG gradient definitions for icons -->
  <svg width="0" height="0" aria-hidden="true" style="position: absolute; pointer-events: none;">
    <defs>
      <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#D0FF00" />
        <stop offset="100%" stop-color="#D0FF00" />
      </linearGradient>
    </defs>
  </svg>

  <a href="#main-content" class="skip-link">Skip to main content</a>
  <BackgroundOrbs />
  <SparkleShader />
  <NavBar />
  <main id="main-content">
    <RouterView />
  </main>
  <FooterSection />
  <ThemeToggle />
</template>

<style scoped>
/* No padding - sections handle their own spacing */
</style>
