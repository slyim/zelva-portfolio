import type { DirectiveBinding } from 'vue'

interface ScrollRevealOptions {
  delay?: number
  duration?: number
  distance?: string
  threshold?: number
  rootMargin?: string
  origin?: 'bottom' | 'top' | 'left' | 'right'
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible')
        // Optional: unobserve after revealing if we only want it to animate once
        // observer.unobserve(entry.target)
      } else {
        // Optional: remove class to reveal again on scroll up
        entry.target.classList.remove('reveal-visible')
      }
    })
  },
  {
    threshold: 0.1, // Trigger when 10% of the element is visible
    rootMargin: '0px 0px -50px 0px' // Slightly before the bottom of the viewport
  }
)

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding<ScrollRevealOptions | undefined>) {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced) {
      // Skip animations entirely for reduced motion users
      el.classList.add('reveal-visible')
      return
    }

    el.classList.add('reveal-hidden')

    // Apply options if provided
    if (binding.value) {
      const { delay, duration, distance, origin } = binding.value

      if (delay) el.style.transitionDelay = `${delay}ms`
      if (duration) el.style.transitionDuration = `${duration}ms`
      if (distance || origin) {
        let x = '0', y = '0'
        const dist = distance || '50px'

        switch(origin) {
          case 'left': x = `-${dist}`; break
          case 'right': x = dist; break
          case 'top': y = `-${dist}`; break
          case 'bottom': default: y = dist; break
        }

        // Store custom transform in a CSS variable so the base CSS can use it
        el.style.setProperty('--reveal-transform', `translate(${x}, ${y})`)
      }
    }

    observer.observe(el)
  },
  unmounted(el: HTMLElement) {
    observer.unobserve(el)
  }
}
