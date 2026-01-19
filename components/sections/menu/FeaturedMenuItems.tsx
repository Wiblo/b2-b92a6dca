"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"
import { SectionWrapper } from "@/components/layout/SectionWrapper"
import { getFeaturedMenuItems } from "@/lib/data/menu"
import type { MenuItem } from "@/lib/data/menu"

export interface FeaturedMenuItemsProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaUrl?: string
  className?: string
}

/**
 * Menu item card component
 */
function MenuItemCard({ item }: { item: MenuItem }) {
  const Icon = item.icon

  return (
    <div className="group h-full overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      {/* Image */}
      <div className="relative h-56 w-full flex-shrink-0 overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col p-5">
        {/* Icon & Title */}
        <div className="mb-3 flex items-start gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              {item.name}
            </h3>
            <div className="mt-1 flex items-center gap-3 text-xs">
              <span className="font-medium text-primary">{item.price}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
          {item.description}
        </p>

        {/* Available Notice */}
        {item.available && (
          <p className="mb-4 text-xs italic text-muted-foreground">
            {item.available}
          </p>
        )}

        {/* Dietary Info */}
        {item.dietary && item.dietary.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {item.dietary.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-full bg-muted px-2 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * Featured Menu Items section component
 * Displays featured items from the menu data file
 */
export function FeaturedMenuItems({
  title = "Our Specialties",
  subtitle = "Handcrafted daily using traditional methods and the finest ingredients",
  ctaText = "View Full Menu",
  ctaUrl = "/menu",
  className,
}: FeaturedMenuItemsProps) {
  const featuredItems = getFeaturedMenuItems()

  return (
    <SectionWrapper className={cn("bg-background", className)}>
      <Container>
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="font-heading mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>

        {/* Menu Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featuredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>

        {/* View Full Menu CTA */}
        {ctaText && ctaUrl && (
          <div className="mt-12 text-center">
            <Link
              href={ctaUrl}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-all hover:bg-primary-hover"
            >
              {ctaText}
              <span className="relative inline-block h-4 w-4">
                <ChevronRight className="absolute left-0 top-0 h-4 w-4 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-0" />
                <ArrowRight className="absolute left-0 top-0 h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
              </span>
            </Link>
          </div>
        )}
      </Container>
    </SectionWrapper>
  )
}
