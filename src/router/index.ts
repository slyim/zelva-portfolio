import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/artworks',
      name: 'artworks',
      component: () => import('../views/ArtworksView.vue'),
    },
    {
      path: '/designs',
      name: 'designs',
      component: () => import('../views/DesignsView.vue'),
    },
    {
      path: '/creative-coding',
      name: 'creative-coding',
      component: () => import('../views/CreativeCodingView.vue'),
    },
    {
      path: '/photography',
      name: 'photography',
      component: () => import('../views/PhotographyView.vue'),
    },
    {
      path: '/soundscapes',
      name: 'soundscapes',
      component: () => import('../views/SoundscapesView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    // Catch-all: redirect unknown routes to home
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router

