<script setup lang="ts">
import HeroSection from '../sections/HeroSection.vue'
import WorkflowSection from '../sections/WorkflowSection.vue'
import ToolsSection from '../sections/ToolsSection.vue'
import EducationSection from '../sections/EducationSection.vue'
import ContactSection from '../sections/ContactSection.vue'
import ScrollSpy from '../components/ScrollSpy.vue'
</script>

<template>
  <div class="home-enter">
    <HeroSection class="animate-fade-in" />
    <WorkflowSection class="animate-fade-in-up delay-100" />
    <ToolsSection class="animate-fade-in-up delay-200" />
    <EducationSection class="animate-fade-in-up delay-300" />
    <ContactSection class="animate-fade-in-up delay-400" />
    <ScrollSpy />
  </div>
</template>
