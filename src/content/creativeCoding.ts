/**
 * CREATIVE CODING CONTENT
 * =====================
 *
 * Add your creative coding projects here.
 * Each item needs:
 * - title: string (displayed on the card)
 * - description: string (short subtitle)
 * - p5Script?: string (optional path to p5.js sketch, e.g. '/sketches/particle-flow.js')
 *
 * The card will run the p5 sketch on hover and open fullscreen on click.
 * If no script is provided, a placeholder animation is shown.
 *
 * Place sketch files in: public/sketches/
 */

export interface CreativeProject {
  title: string
  description: string
  loadSketch?: () => Promise<any>
}

export const creativeProjects: CreativeProject[] = [
  { 
    title: 'Conditionals CD', 
    description: 'Interactive shape splitting and particle flow based on mouse position.',
    loadSketch: () => import('../sketches/conditionals-cd.js')
  },
  { 
    title: 'Gradient Square', 
    description: 'Overlapping translucent geometry creating a deep, textured gradient.',
    loadSketch: () => import('../sketches/gradient-square.js')
  },
  { 
    title: 'Magic Bouncing Ball', 
    description: 'A ball that bounces off walls and flees from the cursor, leaving a colorful trail.',
    loadSketch: () => import('../sketches/magic-bouncing-ball.js')
  },
  { 
    title: 'Jumping Rect', 
    description: 'An elusive, color-shifting square that randomly jumps away when approached.',
    loadSketch: () => import('../sketches/jumping-rect.js')
  },
  { 
    title: 'Gradient Colors', 
    description: 'A smooth transition from vibrant green to deep red mapping across the canvas.',
    loadSketch: () => import('../sketches/gradient-colors.js')
  }
]
