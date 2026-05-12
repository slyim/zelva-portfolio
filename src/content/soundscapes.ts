/**
 * SOUNDSCAPES CONTENT
 * =================
 *
 * Add your soundscape showcase projects here.
 * Each item needs:
 * - title: string
 * - description: string (shown in the project modal)
 * - coverImage: string (grid thumbnail, e.g. '/soundscapes/cover-01.jpg')
 * - images: string[] (all images shown in the modal — artwork, session photos, etc.)
 * - tags?: string[] (optional category tags)
 *
 * Place images in: public/soundscapes/
 * Recommended cover size: 1920x1080px (16:9 ratio)
 */

export interface SoundscapeProject {
  title: string
  description: string
  coverImage: string
  images: string[]
  tags?: string[]
}

export const soundscapeProjects: SoundscapeProject[] = [
  {
    title: 'Ambient Soundscape — Night Drive',
    description: 'An immersive ambient composition evoking the solitude and neon glow of late-night drives.',
    coverImage: '',
    images: [],
    tags: ['Ambient', 'Composition'],
  },
  {
    title: 'Electronic Composition — Pulse',
    description: 'Rhythm-driven electronic piece exploring syncopation and synthetic textures.',
    coverImage: '',
    images: [],
    tags: ['Electronic', 'Rhythm'],
  },
  {
    title: 'Foley Design — Urban Spaces',
    description: 'Custom foley and sound design capturing the tactile audio of urban environments.',
    coverImage: '',
    images: [],
    tags: ['Foley', 'Sound Design'],
  },
  {
    title: 'Generative Audio — Patterns',
    description: 'Algorithmically generated audio patterns creating ever-evolving sonic landscapes.',
    coverImage: '',
    images: [],
    tags: ['Generative', 'Experimental'],
  },
  {
    title: 'Cinematic Score — Solitude',
    description: 'Orchestral cinematic piece written for an imaginary film about isolation and hope.',
    coverImage: '',
    images: [],
    tags: ['Cinematic', 'Orchestral'],
  },
]
