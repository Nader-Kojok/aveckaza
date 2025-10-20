/**
 * Placeholder Image Utility using Lorem Picsum
 * 
 * Lorem Picsum provides high-quality placeholder images from Unsplash
 * Documentation: https://picsum.photos/
 */

export interface PlaceholderOptions {
  width: number
  height?: number
  imageId?: number
  seed?: string
  grayscale?: boolean
  blur?: number
  format?: 'jpg' | 'webp'
}

/**
 * Generate a Lorem Picsum placeholder image URL
 * 
 * @example
 * // Random image
 * getPlaceholderImage({ width: 800, height: 600 })
 * 
 * // Specific image (consistent)
 * getPlaceholderImage({ width: 800, height: 600, imageId: 237 })
 * 
 * // Seeded random (same image for same seed)
 * getPlaceholderImage({ width: 800, height: 600, seed: 'aveckaza' })
 * 
 * // With effects
 * getPlaceholderImage({ width: 800, height: 600, grayscale: true, blur: 2 })
 */
export function getPlaceholderImage(options: PlaceholderOptions): string {
  const { width, height, imageId, seed, grayscale, blur, format = 'webp' } = options
  
  let url = 'https://picsum.photos'
  
  // Add specific image ID
  if (imageId !== undefined) {
    url += `/id/${imageId}`
  }
  
  // Add seed for consistent random images
  if (seed && imageId === undefined) {
    url += `/seed/${seed}`
  }
  
  // Add dimensions
  url += `/${width}`
  if (height) {
    url += `/${height}`
  }
  
  // Add format
  url += `.${format}`
  
  // Add query parameters
  const params: string[] = []
  if (grayscale) params.push('grayscale')
  if (blur !== undefined) params.push(`blur=${blur}`)
  
  if (params.length > 0) {
    url += `?${params.join('&')}`
  }
  
  return url
}

/**
 * Predefined placeholder images for Aveckaza
 * These use specific Lorem Picsum IDs for consistency
 */
export const placeholders = {
  // Cleaning & Home Services
  cleaning: {
    hero: getPlaceholderImage({ width: 1200, height: 800, imageId: 1080 }), // Clean modern interior
    card: getPlaceholderImage({ width: 600, height: 600, imageId: 1080 }),
  },
  
  // Gardening
  gardening: {
    hero: getPlaceholderImage({ width: 1200, height: 800, imageId: 158 }), // Tropical plants
    card: getPlaceholderImage({ width: 600, height: 600, imageId: 158 }),
  },
  
  // Home Security
  security: {
    hero: getPlaceholderImage({ width: 1200, height: 800, imageId: 1 }), // Modern home
    card: getPlaceholderImage({ width: 600, height: 600, imageId: 1 }),
  },
  
  // Professional/Worker profiles
  profiles: {
    woman1: getPlaceholderImage({ width: 400, height: 400, imageId: 64 }), // Professional woman
    man1: getPlaceholderImage({ width: 400, height: 400, imageId: 91 }), // Professional man
    woman2: getPlaceholderImage({ width: 400, height: 400, imageId: 65 }), // Another woman
  },
  
  // Mobile app / Technology
  technology: {
    mobileApp: getPlaceholderImage({ width: 800, height: 800, imageId: 180 }), // Phone/tech
    dashboard: getPlaceholderImage({ width: 1200, height: 800, imageId: 326 }), // Modern workspace
  },
  
  // Blog articles
  blog: {
    rainySeasonCleaning: getPlaceholderImage({ width: 800, height: 600, imageId: 1073 }), // Rain/water
    tropicalGarden: getPlaceholderImage({ width: 800, height: 600, imageId: 158 }), // Tropical plants
    homeSecurity: getPlaceholderImage({ width: 800, height: 600, imageId: 164 }), // Home/security
  },
  
  // Full-time help services
  fullTimeHelp: {
    housekeeping: getPlaceholderImage({ width: 600, height: 600, imageId: 1080 }), // Clean home
    nanny: getPlaceholderImage({ width: 600, height: 600, imageId: 1074 }), // Childcare
    caregiver: getPlaceholderImage({ width: 600, height: 600, imageId: 1076 }), // Healthcare/elderly care
  },
  
  // Platform & Team
  platform: {
    webPlatform: getPlaceholderImage({ width: 800, height: 800, imageId: 326 }), // Dashboard/workspace
    teamWork: getPlaceholderImage({ width: 800, height: 800, imageId: 3 }), // Team collaboration
  },
}

/**
 * Get a random placeholder for development/testing
 */
export function getRandomPlaceholder(width: number, height?: number): string {
  return getPlaceholderImage({ width, height })
}
