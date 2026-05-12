/**
 * DESIGNS CONTENT
 * =============
 *
 * Add your design showcase projects here.
 * Each item needs:
 * - title: string
 * - description: string (shown in the project modal)
 * - coverImage: string (grid thumbnail, e.g. '/designs/slide-01.jpg')
 * - images: string[] (all images shown in the modal)
 * - tags?: string[] (optional category tags)
 *
 * Place images in: public/designs/
 * Recommended cover size: 1920x1080px (16:9 ratio)
 */

export interface DesignProject {
  title: string
  description: string
  coverImage: string
  images: string[]
  tags?: string[]
}

export const designProjects: DesignProject[] = [
  {
    title: 'Gris Trailer / Student Work',
    description: 'A motion design trailer inspired by the game Gris, exploring emotion through color and movement.',
    coverImage: '',
    images: [],
    tags: ['Motion', 'Student Work'],
  },
  {
    title: 'Brand Identity System',
    description: 'Complete brand identity including logo, typography, color system, and application guidelines.',
    coverImage: '',
    images: [],
    tags: ['Branding', 'Identity'],
  },
  {
    title: 'Mobile App UI Kit',
    description: 'A comprehensive UI kit designed for a productivity-focused mobile application.',
    coverImage: '',
    images: [],
    tags: ['UI/UX', 'Mobile'],
  },
  {
    title: 'Editorial Layout Design',
    description: 'Magazine and editorial layout explorations focusing on grid systems and typographic hierarchy.',
    coverImage: '',
    images: [],
    tags: ['Editorial', 'Print'],
  },
  {
    title: 'Motion Graphics Reel',
    description: 'Collection of motion graphics pieces showcasing animation principles and visual storytelling.',
    coverImage: '',
    images: [],
    tags: ['Motion', 'Animation'],
  },
]
