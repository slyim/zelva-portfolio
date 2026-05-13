<script setup lang="ts">
import { ref, computed } from 'vue'
import CarouselView from '../components/CarouselView.vue'
import ProjectModal from '../components/ProjectModal.vue'
import { soundscapeProjects, type SoundscapeProject } from '../content/soundscapes'

const modalOpen = ref(false)
const activeProject = ref<SoundscapeProject | null>(null)

const carouselSlides = computed(() => {
  return soundscapeProjects.map(p => ({
    title: p.title,
    image: p.thumbnail || p.coverImage
  }))
})

function openModal(index: number) {
  activeProject.value = soundscapeProjects[index] || null
  modalOpen.value = true
}

function closeModal() {
  modalOpen.value = false
  activeProject.value = null
}
</script>

<template>
  <section class="page-section animate-fade-in" aria-label="Soundscapes showcase">
    <div class="page-inner">
      <div v-scroll-reveal class="animate-fade-in-scale delay-100">
        <CarouselView 
          :slides="carouselSlides" 
          @click="openModal"
        />
      </div>
    </div>

    <ProjectModal
      :is-open="modalOpen"
      :title="activeProject?.title ?? ''"
      :description="activeProject?.description ?? ''"
      :images="activeProject?.images ?? []"
      :tags="activeProject?.tags"
      @close="closeModal"
    />
  </section>
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

.page-inner {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

@media (max-width: 768px) {
  .page-section {
    padding: 120px 24px 60px;
  }
}

@media (max-width: 480px) {
  .page-section {
    padding: 48px 16px 120px;
  }
}
</style>
