export interface AboutPreview {
  title: string
  description: string
  image: string
  imageAlt: string
}

export interface AboutFull {
  title: string
  paragraphs: string[]
  image: string
  imageAlt: string
}

/**
 * About section preview for homepage
 * Brief introduction with link to full about page
 */
export const aboutPreview: AboutPreview = {
  title: 'Our Story',
  description:
    "Golden Crust Bakery has been serving Johannesburg's vibrant Maboneng community since 2018. We're passionate about traditional baking methods, using time-honored techniques and the finest local ingredients to create breads, pastries, and treats that bring joy to every bite. Every morning, our bakers arrive before dawn to ensure you enjoy the freshest, most delicious baked goods in the city.",
  image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
  imageAlt: 'Fresh artisan bread on display at Golden Crust Bakery',
}

/**
 * Full about content for dedicated about page
 * Comprehensive information about the practice
 */
export const aboutFull: AboutFull = {
  title: 'About Golden Crust Bakery',
  paragraphs: [
    "Golden Crust Bakery opened its doors in 2018 in the heart of Johannesburg's creative Maboneng Precinct. What started as a small passion project has grown into a beloved neighborhood gathering place where the aroma of fresh-baked bread welcomes everyone who walks through our doors.",
    'We believe in doing things the right way, even if it takes longer. Our sourdough starter is over 5 years old. Our croissants are hand-laminated with real French butter. Our cakes are made from scratch, never from a mix. We source our flour from local mills and our eggs from free-range farms in Gauteng.',
    "Whether you're grabbing a morning coffee and croissant, picking up fresh bread for dinner, or ordering a custom cake for a celebration, we're committed to making your experience special. Visit us in Maboneng and taste the difference that passion and craftsmanship make.",
  ],
  image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
  imageAlt: 'Artisan breads at Golden Crust Bakery',
}
