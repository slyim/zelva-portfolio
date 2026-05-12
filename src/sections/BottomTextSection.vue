<script setup lang="ts">
</script>

<template>
  <section class="bottom-text-section" aria-label="Scroll prompt">
    <div v-scroll-reveal="{ delay: 800, origin: 'bottom', distance: '20px' }" class="text-stack">
      <span class="scroll-text text-top">CHECK OUT</span>
      <span class="scroll-text text-mid">DOWN</span>
      <span class="scroll-text text-btm">GO!</span>
    </div>
  </section>
</template>

<style scoped>
.bottom-text-section {
  position: absolute;
  bottom: 48px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  background: transparent;
  overflow: hidden;
  z-index: 3;
  pointer-events: none;
}

.text-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
}

.scroll-text {
  font-family: 'Lexend', sans-serif;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-align: center;
}

.text-top {
  font-size: clamp(1.2rem, 3vw, 2rem);
  opacity: 0.9;
}

.text-mid {
  font-size: clamp(1rem, 2.5vw, 1.6rem);
  opacity: 0.55;
}

.text-btm {
  font-size: clamp(0.85rem, 2vw, 1.3rem);
  opacity: 0.25;
}

@media (max-width: 768px) {
  .bottom-text-section {
    padding: 0 20px;
    bottom: 40px;
  }

  .text-top {
    font-size: clamp(1rem, 2.8vw, 1.6rem);
  }

  .text-mid {
    font-size: clamp(0.85rem, 2.2vw, 1.3rem);
  }

  .text-btm {
    font-size: clamp(0.75rem, 1.8vw, 1.1rem);
  }
}

@media (max-width: 480px) {
  .bottom-text-section {
    padding: 0 16px;
    bottom: 32px;
  }

  .text-top {
    font-size: clamp(0.85rem, 3vw, 1.3rem);
  }

  .text-mid {
    font-size: clamp(0.75rem, 2.4vw, 1.1rem);
  }

  .text-btm {
    font-size: clamp(0.65rem, 2vw, 0.95rem);
  }
}
</style>
