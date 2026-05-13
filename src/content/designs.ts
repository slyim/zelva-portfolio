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
    coverImage: '/designs/ufocar/1.webp',
    images: [
      '/designs/ufocar/1.webp',
      '/designs/ufocar/2.webp',
      '/designs/ufocar/3.webp'
    ],
    tags: ['UI/UX', 'Figma', 'Automotive', 'Dashboard', 'Dark Mode']
  },
  {
    title: 'Odyssey Infographic',
    description: 'A comprehensive educational infographic detailing the epic journey of Odysseus. Features custom illustrations, story timeline beats, character profiles, and a "Favor Meter" tracking the wrath of Poseidon and favor of Athena.',
    coverImage: '/designs/odyssey/1.webp',
    images: [
      '/designs/odyssey/1.webp'
    ],
    tags: ['Infographic', 'Illustration', 'Educational', 'Mythology']
  },
  {
    title: 'Rome Map Infographic',
    description: 'An engaging 3D isometric map infographic of Rome. It beautifully highlights major historical landmarks, provides a timeline from The Colosseum to Altarre Della Patria, and explores Italy\'s rich culture and history.',
    coverImage: '/designs/rome/1.webp',
    images: [
      '/designs/rome/1.webp'
    ],
    tags: ['Infographic', 'Isometric', 'Map Design', 'History']
  },
  {
    title: 'Artstation Redefined',
    description: 'A bold UI/UX redesign concept for ArtStation, reimagining the creative portfolio platform with a modern dark interface, improved navigation hierarchy, and enhanced visual focus on artwork showcases.',
    coverImage: '/designs/Artstation Redefined.webp',
    images: [
      '/designs/Artstation Redefined.webp'
    ],
    tags: ['UI/UX', 'Figma', 'Redesign', 'Dark Mode', 'Portfolio']
  },
  {
    title: 'Seer',
    description: 'A UI/UX design for a modern tarot card reading app. Features an elegant dark interface with mystical iconography, intuitive card spread interactions, and atmospheric visual storytelling to guide users through their readings.',
    coverImage: '/designs/Seer.webp',
    images: [
      '/designs/Seer.webp'
    ],
    tags: ['UI/UX', 'Figma', 'Mobile App', 'Dark Mode', 'Tarot']
  },
  {
    title: 'InterMuse',
    description: 'An interactive music and creative exploration interface design. InterMuse bridges digital artistry with auditory experience through an immersive, visually striking layout.',
    coverImage: '/designs/InterMuse.webp',
    images: [
      '/designs/InterMuse.webp'
    ],
    tags: ['UI/UX', 'Figma', 'Music', 'Interactive', 'Digital Art']
  }
]
