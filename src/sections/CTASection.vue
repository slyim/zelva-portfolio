<script setup lang="ts">
const emit = defineEmits<{
  click: []
}>()
</script>

<template>
  <section id="cta" class="cta-section" aria-label="Call to action">
    <div class="cta-inner">
      <div class="cta-content">
        <h2 v-scroll-reveal class="cta-heading">
          <span class="heading-white">LET'S BUILD</span>
          <span class="heading-green"> SOMETHING</span>
          <span class="heading-white"> GREAT</span>
        </h2>
        <p v-scroll-reveal="{ delay: 100 }" class="cta-desc">
          Have a project in mind? I'm open for collaborations, freelance work, and creative partnerships.
        </p>
        <div v-scroll-reveal="{ delay: 200 }" class="cta-actions">
          <button class="cta-btn cta-btn-gradient" @click="emit('click')">
            <span>CONTACT</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  position: relative;
  width: 100%;
  background: rgba(var(--bg-section-rgb), var(--bg-section-alpha));
  padding: 120px 48px;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    rgba(var(--accent-rgb), 0.06) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.cta-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.cta-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.cta-heading {
  font-family: 'Lexend', sans-serif;
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin: 0;
}

.heading-white {
  color: var(--text-primary);
}

.heading-green {
  color: var(--accent-color);
}

.cta-desc {
  font-family: 'Lexend', sans-serif;
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 400;
  color: rgba(var(--text-rgb), 0.7);
  max-width: 560px;
  line-height: 1.6;
  margin: 0;
}

.cta-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px 56px;
  border-radius: 20px;
  font-family: 'Lexend', sans-serif;
  font-size: clamp(1.1rem, 2.5vw, 1.6rem);
  font-weight: 800;
  letter-spacing: 0.04em;
  text-decoration: none;
  cursor: pointer;
  border: none;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
}

.cta-btn::before {
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

.cta-btn-gradient {
  background: var(--accent-color);
  color: #000000;
}

.cta-btn-gradient:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 16px 40px rgba(var(--accent-rgb), 0.4), 0 0 20px rgba(var(--accent-rgb), 0.2);
}

.cta-btn-gradient:hover::before {
  left: 200%;
}

.cta-btn-gradient:active {
  transform: translateY(0) scale(0.98);
}

/* Responsive */
@media (max-width: 768px) {
  .cta-section {
    padding: 80px 24px;
  }

  .cta-btn {
    padding: 18px 44px;
    border-radius: 16px;
  }
}

@media (max-width: 480px) {
  .cta-section {
    padding: 60px 16px;
  }

  .cta-actions {
    width: 100%;
  }

  .cta-btn {
    width: 100%;
    padding: 16px 32px;
    border-radius: 14px;
  }
}
</style>
