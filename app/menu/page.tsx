import { MenuByCategory } from "@/components/sections/menu/MenuByCategory"
import { CTASection } from "@/components/sections/cta/CTASection"
import { generatePageMetadata } from "@/lib/seo/metadata"

export const metadata = generatePageMetadata(
  "Our Menu",
  "Browse our full selection of fresh breads, pastries, cakes, savory items, and beverages. All baked daily with love and the finest ingredients."
)

export default function MenuPage() {
  return (
    <>
      <MenuByCategory />
      <CTASection />
    </>
  )
}
