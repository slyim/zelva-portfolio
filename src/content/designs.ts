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
    title: 'UFOCAR Dashboard',
    description: 'A sleek, futuristic car dashboard interface featuring comprehensive navigation, climate control, media playback, and vehicle telemetry displayed with a vibrant neon green aesthetic and dark mode styling.',
    coverImage: '/designs/ufocar/1.jpg',
    images: [
      '/designs/ufocar/1.jpg',
      '/designs/ufocar/2.jpg',
      '/designs/ufocar/3.jpg'
    ],
    tags: ['UI/UX', 'Automotive', 'Dashboard', 'Dark Mode']
  },
  {
    title: 'Odyssey Infographic',
    description: 'A comprehensive educational infographic detailing the epic journey of Odysseus. Features custom illustrations, story timeline beats, character profiles, and a "Favor Meter" tracking the wrath of Poseidon and favor of Athena.',
    coverImage: '/designs/odyssey/1.png',
    images: [
      '/designs/odyssey/1.png'
    ],
    tags: ['Infographic', 'Illustration', 'Educational', 'Mythology']
  },
  {
    title: 'Rome Map Infographic',
    description: 'An engaging 3D isometric map infographic of Rome. It beautifully highlights major historical landmarks, provides a timeline from The Colosseum to Altarre Della Patria, and explores Italy\'s rich culture and history.',
    coverImage: '/designs/rome/1.png',
    images: [
      '/designs/rome/1.png'
    ],
    tags: ['Infographic', 'Isometric', 'Map Design', 'History']
  }
]
