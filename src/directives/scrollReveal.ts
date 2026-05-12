import type { DirectiveBinding } from 'vue'

interface ScrollRevealOptions {
  delay?: number
  duration?: number
  distance?: number
  threshold?: number
  rootMargin?: string
}

export default {
  mounted(_el: HTMLElement, _binding: DirectiveBinding<ScrollRevealOptions | undefined>) {
    // No-op: elements render immediately without animation
  },
}
