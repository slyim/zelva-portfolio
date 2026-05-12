<script setup lang="ts">
defineProps<{
  title: string
  image?: string
  aspectRatio?: string
}>()

defineEmits<{
  click: []
}>()
</script>

<template>
  <div class="gallery-card" :style="{ aspectRatio: aspectRatio || '4/3' }" @click="$emit('click')">
    <div class="card-image">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        loading="lazy"
      />
      <div v-else class="card-placeholder" />
    </div>
    <div class="card-overlay">
      <span class="card-title">{{ title }}</span>
    </div>
  </div>
</template>

<style scoped>
.gallery-card {
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.gallery-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(var(--shadow-rgb), 0.25);
  border-color: var(--border-color-hover);
}

.card-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-card:hover .card-image img {
  transform: scale(1.05);
}

.card-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
}

html[data-theme="light"] .card-placeholder {
  background: linear-gradient(135deg, #e0e0e0 0%, #f0f0f0 100%);
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 48px 16px 16px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
  z-index: 1;
}

.card-title {
  font-family: 'Lexend', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.02em;
}
</style>
