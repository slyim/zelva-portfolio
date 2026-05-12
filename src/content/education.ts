/**
 * EDUCATION CONTENT
 * ================
 */

export interface EducationCategory {
  title: string
  icon: string
  items: string[]
}

export const educationCategories: EducationCategory[] = [
  {
    title: 'CERTIFICATES',
    icon: 'PhCertificate',
    items: ['Google UX', 'Meta Frontend'],
  },
  {
    title: 'UNIVERSITY',
    icon: 'PhStudent',
    items: [
      'Istanbul University',
      'Programming',
      'Yildiz Technical University',
      'Communication & Design',
    ],
  },
  {
    title: 'FREE THINKER',
    icon: 'PhBrain',
    items: ['Youtube', 'Internet', 'Books', 'AI'],
  },
  {
    title: 'LANGUAGES',
    icon: 'PhGlobeHemisphereWest',
    items: ['English', 'German', 'Turkish'],
  },
]
