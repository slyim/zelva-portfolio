/**
 * TOOLS CONTENT
 * ===========
 *
 * Add your tools/software here.
 * Each item needs:
 * - name: string (tool name)
 * - icon: string (path to icon in public/SoftwareIcons/)
 *
 * Place icons in: public/SoftwareIcons/
 */

export interface Tool {
  name: string
  icon: string
}

export const tools: Tool[] = [
  { name: 'Opencode', icon: '/SoftwareIcons/OpenCodeIcon.svg' },
  { name: 'Zed', icon: '/SoftwareIcons/ZedIcon.svg' },
  { name: 'Krita', icon: '/SoftwareIcons/KritaIcon.svg' },
  { name: 'Cavalry', icon: '/SoftwareIcons/CavalryIcon.png' },
  { name: 'Blender', icon: '/SoftwareIcons/BlenderIcon.png' },
  { name: 'Davinci', icon: '/SoftwareIcons/DavinciIcon.png' },
  { name: 'Ableton', icon: '/SoftwareIcons/AbletonIcon.png' },
  { name: 'Illustrator', icon: '/SoftwareIcons/IllustratorIcon.svg' },
  { name: 'Figma', icon: '/SoftwareIcons/FigmaIcon.png' },
  { name: 'Affinity', icon: '/SoftwareIcons/AffinityIcon.svg' },
  { name: 'Affine', icon: '/SoftwareIcons/AffineIcon.svg' },
  { name: 'Photoshop', icon: '/SoftwareIcons/PhotoshopIcon.svg' },
]
