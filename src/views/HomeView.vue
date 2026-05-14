<script setup lang="ts">
import HeroSection from '../sections/HeroSection.vue'
import FeaturedWorkSection from '../sections/FeaturedWorkSection.vue'
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
    <FeaturedWorkSection class="animate-fade-in-up delay-100" />
    <WorkflowSection class="animate-fade-in-up delay-200" />
    <SkillsSection class="animate-fade-in-up delay-300" />
    <ToolsSection class="animate-fade-in-up delay-400" />
    <EducationSection class="animate-fade-in-up delay-500" />
    <ContactSection class="animate-fade-in-up delay-600" />
    <ScrollSpy />
  </div>
</template>
