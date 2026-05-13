<script setup lang="ts">
import HeroSection from '../sections/HeroSection.vue'
import WorkflowSection from '../sections/WorkflowSection.vue'
import SkillsSection from '../sections/SkillsSection.vue'
import ToolsSection from '../sections/ToolsSection.vue'
import EducationSection from '../sections/EducationSection.vue'
import ContactSection from '../sections/ContactSection.vue'
import ScrollSpy from '../components/ScrollSpy.vue'
</script>

<template>
  <div class="home-enter">
    <HeroSection class="animate-fade-in" />
    <WorkflowSection class="animate-fade-in-up delay-100" />
    <SkillsSection class="animate-fade-in-up delay-200" />
    <ToolsSection class="animate-fade-in-up delay-300" />
    <EducationSection class="animate-fade-in-up delay-400" />
    <ContactSection class="animate-fade-in-up delay-500" />
    <ScrollSpy />
  </div>
</template>
