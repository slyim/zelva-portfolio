/**
 * ARTWORKS CONTENT
 * ============
 *
 * Add your artwork pieces here.
 * Each item needs:
 * - title: string
 * - description: string (shown in the project modal)
 * - coverImage: string (grid thumbnail, e.g. '/artworks/piece-01.jpg')
 * - images: string[] (all images shown in the modal)
 * - tags?: string[] (optional category tags)
 *
 * Place images in: public/artworks/
 * Recommended cover size: 960x720px (4:3 ratio)
 */

export interface Artwork {
  title: string
  description: string
  coverImage: string
  images: string[]
  tags?: string[]
}

export const artworks: Artwork[] = [
  {
    title: 'Toucan Artwork',
    description: 'A drawing of a toucan study in Krita.',
    coverImage: '/artworks/ToucanStudy.jpg',
    images: ['/artworks/ToucanStudy.jpg'],
    tags: ['Krita'],
  },
  {
    title: 'Elemental Stone',
    description: 'A drawing of an elemental stone with surging powers.',
    coverImage: '/artworks/NewStoneBG.png',
    images: ['/artworks/NewStoneBG.png'],
    tags: ['Photoshop'],
  },
  {
    title: 'Queen Slime',
    description: 'An astonishing view of a queen slime holding the staff of the slime heresy.',
    coverImage: '/artworks/SlimeQueenFinished.png',
    images: ['/artworks/SlimeQueenFinished.png'],
    tags: ['Aseprite'],
  },
]
