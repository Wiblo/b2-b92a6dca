import { Cake, Coffee, Croissant, Sandwich } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface MenuItem {
  id: string
  slug: string
  name: string
  description: string
  price: string
  category: MenuCategory
  image: string
  imageAlt: string
  icon: LucideIcon
  featured?: boolean
  dietary?: string[] // e.g., ['vegan', 'gluten-free', 'dairy-free']
  available?: string // e.g., 'Weekends only', 'Pre-order required'
}

export type MenuCategory = 'breads' | 'pastries' | 'cakes' | 'savory' | 'beverages'

export interface MenuCategoryInfo {
  id: MenuCategory
  name: string
  description: string
  icon: LucideIcon
}

/**
 * Menu categories with descriptions
 */
export const menuCategories: MenuCategoryInfo[] = [
  {
    id: 'breads',
    name: 'Artisan Breads',
    description: 'Freshly baked daily using traditional methods',
    icon: Croissant,
  },
  {
    id: 'pastries',
    name: 'Pastries & Sweets',
    description: 'Delicate French-inspired pastries and treats',
    icon: Croissant,
  },
  {
    id: 'cakes',
    name: 'Cakes & Desserts',
    description: 'Custom cakes and decadent desserts',
    icon: Cake,
  },
  {
    id: 'savory',
    name: 'Savory Items',
    description: 'Perfect for lunch or a quick snack',
    icon: Sandwich,
  },
  {
    id: 'beverages',
    name: 'Beverages',
    description: 'Premium coffee and specialty drinks',
    icon: Coffee,
  },
]

/**
 * All menu items offered by the bakery
 */
export const menuItems: MenuItem[] = [
  // BREADS
  {
    id: 'sourdough',
    slug: 'sourdough-bread',
    name: 'Traditional Sourdough',
    description:
      'Classic sourdough with a crispy crust and tangy flavor. Made with our 5-year-old starter and naturally fermented for 24 hours.',
    price: 'R65',
    category: 'breads',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80',
    imageAlt: 'Freshly baked traditional sourdough bread',
    icon: Croissant,
    featured: true,
  },
  {
    id: 'ciabatta',
    slug: 'ciabatta',
    name: 'Italian Ciabatta',
    description:
      'Light and airy Italian bread with a crispy golden crust. Perfect for sandwiches or dipping in olive oil.',
    price: 'R55',
    category: 'breads',
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&q=80',
    imageAlt: 'Italian ciabatta bread',
    icon: Croissant,
  },
  {
    id: 'rye-bread',
    slug: 'rye-bread',
    name: 'Rye Bread',
    description:
      'Hearty dark rye bread with a dense texture and earthy flavor. Made with stone-ground rye flour.',
    price: 'R60',
    category: 'breads',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
    imageAlt: 'Dark rye bread loaf',
    icon: Croissant,
  },
  {
    id: 'baguette',
    slug: 'french-baguette',
    name: 'French Baguette',
    description:
      'Classic French baguette with a crispy crust and soft, chewy interior. Baked fresh multiple times daily.',
    price: 'R40',
    category: 'breads',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80',
    imageAlt: 'French baguettes',
    icon: Croissant,
    featured: true,
  },

  // PASTRIES
  {
    id: 'croissant',
    slug: 'butter-croissant',
    name: 'Butter Croissant',
    description:
      'Flaky, buttery croissant made with French butter and laminated to perfection. Best enjoyed warm.',
    price: 'R35',
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80',
    imageAlt: 'Golden butter croissants',
    icon: Croissant,
    featured: true,
  },
  {
    id: 'pain-au-chocolat',
    slug: 'pain-au-chocolat',
    name: 'Pain au Chocolat',
    description:
      'Buttery croissant pastry filled with rich dark chocolate. A French classic that melts in your mouth.',
    price: 'R42',
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1623334044303-241021148842?w=800&q=80',
    imageAlt: 'Pain au chocolat pastries',
    icon: Croissant,
    featured: true,
  },
  {
    id: 'almond-croissant',
    slug: 'almond-croissant',
    name: 'Almond Croissant',
    description:
      'Twice-baked croissant filled with almond cream and topped with sliced almonds and icing sugar.',
    price: 'R48',
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1601001815894-4bb6c81416d7?w=800&q=80',
    imageAlt: 'Almond croissants with sliced almonds',
    icon: Croissant,
  },
  {
    id: 'danish-pastry',
    slug: 'fruit-danish',
    name: 'Fruit Danish',
    description:
      'Flaky Danish pastry with cream cheese filling and seasonal fruit. Available in apricot, cherry, or blueberry.',
    price: 'R38',
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1587241321921-91a834d82204?w=800&q=80',
    imageAlt: 'Fruit danish pastries',
    icon: Croissant,
  },
  {
    id: 'cinnamon-roll',
    slug: 'cinnamon-roll',
    name: 'Cinnamon Roll',
    description:
      'Soft and fluffy cinnamon roll with swirls of cinnamon sugar, topped with cream cheese frosting.',
    price: 'R45',
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?w=800&q=80',
    imageAlt: 'Cinnamon rolls with cream cheese frosting',
    icon: Croissant,
  },

  // CAKES & DESSERTS
  {
    id: 'chocolate-cake',
    slug: 'chocolate-cake',
    name: 'Chocolate Layer Cake',
    description:
      'Rich, moist chocolate cake with dark chocolate ganache frosting. Available as whole cake or by the slice.',
    price: 'R450 / R55 slice',
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
    imageAlt: 'Chocolate layer cake with ganache',
    icon: Cake,
    featured: true,
  },
  {
    id: 'carrot-cake',
    slug: 'carrot-cake',
    name: 'Carrot Cake',
    description:
      'Moist carrot cake with walnuts, pineapple, and cream cheese frosting. A customer favorite.',
    price: 'R420 / R50 slice',
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&q=80',
    imageAlt: 'Carrot cake with cream cheese frosting',
    icon: Cake,
  },
  {
    id: 'lemon-tart',
    slug: 'lemon-tart',
    name: 'Lemon Tart',
    description:
      'Tangy lemon curd in a buttery shortcrust pastry shell, topped with Italian meringue.',
    price: 'R48',
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&q=80',
    imageAlt: 'Lemon meringue tart',
    icon: Cake,
  },
  {
    id: 'custom-cake',
    slug: 'custom-cake',
    name: 'Custom Celebration Cake',
    description:
      'Personalized cakes for any occasion. Choose your flavor, filling, and design. Pre-order required.',
    price: 'From R650',
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80',
    imageAlt: 'Custom decorated celebration cake',
    icon: Cake,
    available: 'Pre-order 48 hours in advance',
  },

  // SAVORY
  {
    id: 'quiche',
    slug: 'quiche-lorraine',
    name: 'Quiche Lorraine',
    description:
      'Classic French quiche with bacon, cheese, and caramelized onions in a buttery crust.',
    price: 'R65',
    category: 'savory',
    image: 'https://images.unsplash.com/photo-1476124369491-b79d2d8a2f15?w=800&q=80',
    imageAlt: 'Quiche lorraine slice',
    icon: Sandwich,
    featured: true,
  },
  {
    id: 'sausage-roll',
    slug: 'gourmet-sausage-roll',
    name: 'Gourmet Sausage Roll',
    description:
      'Premium pork sausage wrapped in golden puff pastry. Made fresh daily.',
    price: 'R48',
    category: 'savory',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80',
    imageAlt: 'Gourmet sausage roll',
    icon: Sandwich,
  },
  {
    id: 'chicken-pie',
    slug: 'chicken-mushroom-pie',
    name: 'Chicken & Mushroom Pie',
    description:
      'Tender chicken and mushrooms in a creamy sauce, wrapped in flaky puff pastry.',
    price: 'R55',
    category: 'savory',
    image: 'https://images.unsplash.com/photo-1619895092538-128341789043?w=800&q=80',
    imageAlt: 'Chicken and mushroom pie',
    icon: Sandwich,
  },
  {
    id: 'sandwich',
    slug: 'artisan-sandwich',
    name: 'Artisan Sandwich',
    description:
      'Made to order on fresh-baked bread. Choose from chicken mayo, ham & cheese, or roasted veggie.',
    price: 'R65',
    category: 'savory',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&q=80',
    imageAlt: 'Artisan sandwich on fresh bread',
    icon: Sandwich,
  },

  // BEVERAGES
  {
    id: 'cappuccino',
    slug: 'cappuccino',
    name: 'Cappuccino',
    description:
      'Double shot of espresso with steamed milk and velvety microfoam. Made with premium South African beans.',
    price: 'R32',
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80',
    imageAlt: 'Cappuccino with latte art',
    icon: Coffee,
    featured: true,
  },
  {
    id: 'flat-white',
    slug: 'flat-white',
    name: 'Flat White',
    description:
      'Espresso with silky steamed milk and a thin layer of microfoam. Smooth and strong.',
    price: 'R30',
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80',
    imageAlt: 'Flat white coffee',
    icon: Coffee,
  },
  {
    id: 'iced-latte',
    slug: 'iced-latte',
    name: 'Iced Latte',
    description:
      'Chilled espresso with cold milk over ice. Perfect for hot Johannesburg days.',
    price: 'R35',
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80',
    imageAlt: 'Iced latte with straw',
    icon: Coffee,
  },
  {
    id: 'tea',
    slug: 'premium-tea',
    name: 'Premium Tea Selection',
    description:
      'Choose from our selection of premium loose leaf teas. Includes English Breakfast, Earl Grey, Rooibos, and more.',
    price: 'R25',
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80',
    imageAlt: 'Premium tea in cup',
    icon: Coffee,
  },
]

/**
 * Get all menu items
 */
export function getAllMenuItems(): MenuItem[] {
  return menuItems
}

/**
 * Get featured menu items
 */
export function getFeaturedMenuItems(): MenuItem[] {
  return menuItems.filter((item) => item.featured)
}

/**
 * Get menu items by category
 */
export function getMenuItemsByCategory(category: MenuCategory): MenuItem[] {
  return menuItems.filter((item) => item.category === category)
}

/**
 * Get a single menu item by slug
 */
export function getMenuItemBySlug(slug: string): MenuItem | undefined {
  return menuItems.find((item) => item.slug === slug)
}

/**
 * Get a single menu item by ID
 */
export function getMenuItemById(id: string): MenuItem | undefined {
  return menuItems.find((item) => item.id === id)
}
