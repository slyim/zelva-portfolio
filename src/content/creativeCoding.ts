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
  p5Script?: string
}

export const creativeProjects: CreativeProject[] = [
  { title: 'Particle Flow', description: 'p5.js generative particles' },
  { title: 'Perlin Terrain', description: '3D noise landscape' },
  { title: 'Fractal Tree', description: 'Recursive branching system' },
  { title: 'Wave Interference', description: 'Sine wave collision' },
  { title: 'Game of Life', description: 'Cellular automaton' },
  { title: 'Boids Flocking', description: 'Emergent behavior swarm' },
]
