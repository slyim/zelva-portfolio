<script setup lang="ts">
import { ref } from 'vue'
import GlassCard from '../components/GlassCard.vue'
import CardShader from '../components/CardShader.vue'
import { PhEnvelopeSimple, PhUser } from '@phosphor-icons/vue'

const email = ref('')
const name = ref('')
const message = ref('')

function handleSubmit() {
  // Placeholder for form submission
  alert('Shoutout sent! I will get back to you soon.')
  email.value = ''
  name.value = ''
  message.value = ''
}
</script>

<template>
  <section id="contact" class="contact-section" aria-label="Contact">
    <div class="contact-inner">
      <!-- Heading -->
      <div v-scroll-reveal class="contact-heading">
        <img :src="'/signature.png'" alt="Zelva signature" class="signature-img" loading="lazy" />
        <h2 class="contact-title">
          <span class="heading-gradient">CONTACT ME!</span>
        </h2>
      </div>

      <div class="contact-grid">
        <!-- Left: Form -->
        <form v-scroll-reveal="{ delay: 150 }" class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-field">
            <label for="email" class="visually-hidden">Email address</label>
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="email"
              required
              class="form-input"
              autocomplete="email"
            />
            <PhEnvelopeSimple :size="20" weight="light" class="field-icon" aria-hidden="true" />
          </div>

          <div class="form-field">
            <label for="name" class="visually-hidden">Name or nickname</label>
            <input
              id="name"
              v-model="name"
              type="text"
              placeholder="Nickname/Name"
              required
              class="form-input"
              autocomplete="name"
            />
            <PhUser :size="20" weight="light" class="field-icon" aria-hidden="true" />
          </div>

          <div class="form-field textarea-field">
            <label for="message" class="visually-hidden">Message</label>
            <textarea
              id="message"
              v-model="message"
              placeholder="__ let's work together! >///<"
              required
              rows="6"
              class="form-input form-textarea"
            />
          </div>

          <button type="submit" class="shoutout-btn">Shoutout!</button>
        </form>

        <!-- Right: Visual Card -->
        <div v-scroll-reveal="{ delay: 300 }" class="contact-visual">
          <GlassCard class="visual-card">
            <CardShader class="visual-shader" />
            <p class="visual-text">
              <span class="text-line">Let's create something</span>
              <span class="text-line">amazing together.</span>
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  position: relative;
  width: 100%;
  background: rgba(var(--bg-section-rgb), var(--bg-section-alpha));
  padding: 120px 48px;
  display: flex;
  justify-content: center;
}

.contact-inner {
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
}

/* Heading */
.contact-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.signature-img {
  max-width: 200px;
  height: auto;
  object-fit: contain;
  margin-bottom: 4px;
}

.contact-title {
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

/* Grid */
.contact-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

/* Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.form-field {
  position: relative;
  width: 100%;
}

.form-input {
  width: 100%;
  padding: 16px 48px 16px 18px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background: var(--bg-input);
  color: var(--text-primary);
  font-family: 'Lexend', sans-serif;
  font-size: 0.95rem;
  font-weight: 300;
  outline: none;
  transition:
    border-color 0.3s ease,
    background 0.3s ease;
}

.form-input::placeholder {
  color: rgba(var(--text-rgb), 0.45);
  font-weight: 300;
}

.form-input:focus {
  border-color: var(--border-color-hover);
  background: rgba(var(--accent-rgb), 0.02);
}

.field-icon {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(var(--text-rgb), 0.4);
  pointer-events: none;
}

.textarea-field .field-icon {
  display: none;
}

.form-textarea {
  resize: vertical;
  min-height: 160px;
  padding: 18px;
  line-height: 1.6;
  background-clip: padding-box;
}

/* Hide the ugly default resize grip on dark backgrounds */
.form-textarea::-webkit-resizer {
  background: transparent;
  border: none;
  appearance: none;
}

/* Visually hidden labels for screen readers */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Button */
.shoutout-btn {
  width: 100%;
  padding: 18px 24px;
  border-radius: 14px;
  border: none;
  background: var(--accent-color);
  color: #000000;
  font-family: 'Lexend', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.3s ease;
}

.shoutout-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(var(--accent-rgb), 0.35);
}

.shoutout-btn:active {
  transform: translateY(0);
}

/* Visual Card */
.contact-visual {
  width: 100%;
  height: 100%;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-card {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: 40px;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.visual-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 12px 32px rgba(var(--shadow-rgb), 0.2),
    0 0 60px rgba(var(--accent-rgb), 0.15);
}

html[data-theme='light'] .visual-card:hover {
  box-shadow:
    0 12px 32px rgba(var(--shadow-rgb), 0.08),
    0 0 60px rgba(var(--accent-rgb), 0.12);
}

.visual-shader {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.visual-text {
  position: relative;
  z-index: 1;
  font-family: 'Lexend', sans-serif;
  font-size: clamp(1.1rem, 2.2vw, 1.5rem);
  font-weight: 500;
  color: rgba(var(--text-rgb), 0.9);
  text-align: center;
  line-height: 1.5;
  margin: 0;
  perspective: 600px;
  animation: textFloat 5s ease-in-out infinite;
}

.text-line {
  display: block;
  animation: textRotate 6s ease-in-out infinite;
  transform-style: preserve-3d;
}

@keyframes textFloat {
  0%, 100% {
    transform: translateY(0);
    text-shadow: 0 0 20px rgba(var(--accent-rgb), 0.15), 0 0 40px rgba(var(--accent-rgb), 0.05);
  }
  50% {
    transform: translateY(-8px);
    text-shadow: 0 0 30px rgba(var(--accent-rgb), 0.35), 0 0 60px rgba(var(--accent-rgb), 0.12);
  }
}

@keyframes textFloatLight {
  0%, 100% {
    transform: translateY(0);
    text-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 0 32px rgba(0, 0, 0, 0.04);
  }
  50% {
    transform: translateY(-8px);
    text-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 0 48px rgba(0, 0, 0, 0.06);
  }
}

html[data-theme='light'] .visual-text {
  color: var(--text-primary);
  animation-name: textFloatLight;
}

@keyframes textRotate {
  0%, 100% { transform: rotateX(0deg) rotateY(0deg); }
  25% { transform: rotateX(2deg) rotateY(3deg); }
  50% { transform: rotateX(0deg) rotateY(0deg); }
  75% { transform: rotateX(-2deg) rotateY(-3deg); }
}

/* Responsive */
@media (max-width: 768px) {
  .contact-section {
    padding: 80px 24px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .contact-visual {
    min-height: auto;
  }

  .visual-card {
    min-height: 200px;
  }

  .form-input {
    padding: 14px 44px 14px 16px;
    font-size: 0.9rem;
  }

  .shoutout-btn {
    padding: 16px 20px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 60px 16px;
  }

  .form-input {
    border-radius: 10px;
    padding: 12px 40px 12px 14px;
  }

  .form-textarea {
    min-height: 140px;
  }

  .shoutout-btn {
    border-radius: 10px;
    padding: 14px 18px;
  }

  .visual-card {
    min-height: 160px;
    padding: 28px;
  }
}
</style>
