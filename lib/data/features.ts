export interface FeatureBlock {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  imagePosition: 'left' | 'right'
}

/**
 * Features section content
 * Highlighting key features, benefits, or unique aspects of the practice
 */
export const featureBlocks: FeatureBlock[] = [
  {
    id: 'feature-1',
    title: 'Traditional Baking Methods',
    description:
      'We use time-honored techniques passed down through generations. Our sourdough is naturally fermented for 24 hours, our croissants are hand-laminated with French butter, and everything is made from scratch. No shortcuts, no preservatives—just pure craftsmanship.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
    imageAlt: 'Artisan bread baking process',
    imagePosition: 'right',
  },
  {
    id: 'feature-2',
    title: 'Local & Fresh Ingredients',
    description:
      'We source our flour from local mills in Gauteng, use free-range eggs from nearby farms, and select the finest ingredients available. Supporting local suppliers means fresher products and a stronger community.',
    image: 'https://images.unsplash.com/photo-1486887396153-fa416526c108?w=800&q=80',
    imageAlt: 'Fresh local ingredients',
    imagePosition: 'left',
  },
  {
    id: 'feature-3',
    title: 'Custom Celebration Cakes',
    description:
      "Make your special occasions unforgettable with our custom-designed celebration cakes. Whether it's a birthday, wedding, or anniversary, we work with you to create a cake that's as unique as your celebration. Pre-order 48 hours in advance.",
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80',
    imageAlt: 'Custom decorated celebration cake',
    imagePosition: 'right',
  },
]
