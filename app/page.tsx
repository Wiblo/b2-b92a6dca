import { HeroWithImage } from "@/components/sections/hero/HeroWithImage"
import { FeaturedMenuItems } from "@/components/sections/menu/FeaturedMenuItems"
import { AboutSection } from "@/components/sections/about/AboutSection"
import { FeaturesSection } from "@/components/sections/features/FeaturesSection"
import { CTASection } from "@/components/sections/cta/CTASection"
import { LocationSection } from "@/components/sections/location/LocationSection"

export default function Home() {
  return (
    <>
      <HeroWithImage
        subtitle="Golden Crust Bakery"
        title="Freshly Baked Goodness Every Day"
        backgroundImage="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=80"
        backgroundImageAlt="Fresh artisan breads at Golden Crust Bakery"
        ctaText="View Our Menu"
        ctaUrl="/menu"
      />
      <FeaturedMenuItems />
      <AboutSection />
      <FeaturesSection />
      <CTASection />
      <LocationSection />
    </>
  )
}
