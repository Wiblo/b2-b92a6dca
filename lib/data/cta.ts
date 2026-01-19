export interface CTAContent {
  title: string
  description: string
  ctaText: string
  ctaUrl: string
  backgroundImage: string
  backgroundImageAlt: string
}

/**
 * CTA (Call-to-Action) section content
 * Update this to modify the CTA section shown on the homepage
 */
export const ctaContent: CTAContent = {
  title: 'Visit Us Today',
  description:
    'Experience the difference of fresh-baked goodness. Stop by our Maboneng location for your morning coffee and pastry, or call ahead to place a custom order.',
  ctaText: 'Call Us Now',
  ctaUrl: 'tel:+27115551234',
  backgroundImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=80',
  backgroundImageAlt: 'Fresh baked breads at Golden Crust Bakery',
}
