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
    title: 'Golden Hour Portrait',
    description: 'Natural light portrait session captured during the final moments of sunset.',
    coverImage: '',
    images: [],
    tags: ['Portrait', 'Natural Light'],
  },
  {
    title: 'Urban Geometry',
    description: 'Architectural photography exploring lines, shapes, and the rhythm of city structures.',
    coverImage: '',
    images: [],
    tags: ['Architecture', 'Urban'],
  },
  {
    title: 'Nature Macro',
    description: 'Close-up exploration of natural textures and organic patterns often overlooked.',
    coverImage: '',
    images: [],
    tags: ['Macro', 'Nature'],
  },
  {
    title: 'Street Stories',
    description: 'Candid street photography capturing fleeting human moments in public spaces.',
    coverImage: '',
    images: [],
    tags: ['Street', 'Documentary'],
  },
  {
    title: 'Night Lights',
    description: 'Long-exposure night photography exploring artificial light and urban darkness.',
    coverImage: '',
    images: [],
    tags: ['Night', 'Long Exposure'],
  },
  {
    title: 'Minimal Still Life',
    description: 'Minimalist still life compositions focusing on form, shadow, and negative space.',
    coverImage: '',
    images: [],
    tags: ['Still Life', 'Minimal'],
  },
  {
    title: 'Travel Diaries',
    description: 'A visual diary from travels, capturing culture, landscape, and local atmosphere.',
    coverImage: '',
    images: [],
    tags: ['Travel', 'Documentary'],
  },
  {
    title: 'Shadow Play',
    description: 'Experimental photography using harsh light sources to create dramatic shadow patterns.',
    coverImage: '',
    images: [],
    tags: ['Experimental', 'Light'],
  },
]
