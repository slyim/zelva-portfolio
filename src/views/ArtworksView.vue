<script setup lang="ts">
import { ref } from 'vue'
import GalleryCard from '../components/GalleryCard.vue'
import ProjectModal from '../components/ProjectModal.vue'
import { artworks, type Artwork } from '../content/artworks'

const modalOpen = ref(false)
const activeProject = ref<Artwork | null>(null)

function openModal(project: Artwork) {
  activeProject.value = project
  modalOpen.value = true
}

function closeModal() {
  modalOpen.value = false
  activeProject.value = null
}
</script>

<template>
  <section class="page-section" aria-label="Artworks gallery">
    <div class="page-inner">
      <div class="gallery-grid">
        <GalleryCard
          v-for="(item, i) in artworks"
          :key="item.title"
          v-scroll-reveal="{ delay: i * 80 }"
          :title="item.title"
          :image="item.coverImage"
          aspect-ratio="4/3"
          @click="openModal(item)"
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
  min-height: 100vh;
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

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 968px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .page-section {
    padding: 120px 24px 60px;
  }
}

@media (max-width: 480px) {
  .page-section {
    padding: 100px 16px 48px;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
