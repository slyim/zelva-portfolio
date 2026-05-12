/**
 * PHOTOGRAPHY CONTENT
 * =================
 *
 * Add your photography pieces here.
 * Each item needs:
 * - title: string
 * - description: string (shown in the project modal)
 * - coverImage: string (grid thumbnail, e.g. '/photography/photo-01.jpg')
 * - images: string[] (all images shown in the modal)
 * - tags?: string[] (optional category tags)
 *
 * Place images in: public/photography/
 * Recommended cover size: 960x640px (3:2 ratio)
 */

export interface Photo {
  title: string
  description: string
  coverImage: string
  images: string[]
  tags?: string[]
}

export const photos: Photo[] = [
  {
    title: 'Urban Textures & Decay',
    description: 'A photographic exploration of urban decay, found art, and the subtle textures of city life. This collection captures the often-overlooked details of the streets, from faded paint and rust to water stains and animal footprints cast in concrete.',
    coverImage: '/photography/urban-textures/20231011_080122.jpg',
    images: [
      '/photography/urban-textures/20231004_180118.jpg',
      '/photography/urban-textures/20231004_180153.jpg',
      '/photography/urban-textures/20231005_170639.jpg',
      '/photography/urban-textures/20231005_184115.jpg',
      '/photography/urban-textures/20231008_181833.jpg',
      '/photography/urban-textures/20231009_201554.jpg',
      '/photography/urban-textures/20231011_080122.jpg'
    ],
    tags: ['Urban', 'Macro', 'Textures', 'Found Art']
  }
]
