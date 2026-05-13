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
  thumbnail?: string
  coverImage: string
  images: string[]
  tags?: string[]
}

export const soundscapeProjects: SoundscapeProject[] = [
  {
    title: 'Gris Soundscape',
    description: 'A deeply emotional and atmospheric soundscape created for Gris. Featuring immersive ambient layers and melodic progressions designed to carry the listener through an evocative sonic journey.',
    thumbnail: '/soundscapes/thumbnails/gris-thumb.webp',
    coverImage: '/soundscapes/grissoundscape.webm',
    images: ['/soundscapes/grissoundscape.webm'],
    tags: ['Soundscape', 'Video', 'Ambient'],
  },
  {
    title: 'Horrorscape',
    description: 'A chilling, tension-driven sound design piece built from dark ambient textures, unsettling foley, and carefully crafted spatial audio to evoke dread and unease.',
    thumbnail: '/soundscapes/thumbnails/horror-thumb.webp',
    coverImage: '/soundscapes/horrorscape.webm',
    images: ['/soundscapes/horrorscape.webm'],
    tags: ['Sound Design', 'Video', 'Horror', 'Dark Ambient'],
  },
]
