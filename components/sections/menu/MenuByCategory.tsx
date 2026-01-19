"use client"

import React, { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"
import { SectionWrapper } from "@/components/layout/SectionWrapper"
import { getAllMenuItems, menuCategories } from "@/lib/data/menu"
import type { MenuItem, MenuCategory } from "@/lib/data/menu"

export interface MenuByCategoryProps {
  className?: string
}

/**
 * Menu item card component - simpler version for category view
 */
function MenuItemCard({ item }: { item: MenuItem }) {
  const Icon = item.icon

  return (
    <div className="group overflow-hidden rounded-xl bg-card shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:gap-5">
        {/* Image */}
        <div className="relative h-32 w-full flex-shrink-0 overflow-hidden rounded-lg bg-muted sm:h-24 sm:w-24">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, 96px"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col">
          {/* Title & Price */}
          <div className="mb-2 flex items-start justify-between gap-3">
            <div className="flex items-start gap-2">
              <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {item.name}
                </h3>
                {item.available && (
                  <p className="mt-0.5 text-xs italic text-muted-foreground">
                    {item.available}
                  </p>
                )}
              </div>
            </div>
            <span className="whitespace-nowrap text-sm font-semibold text-primary">
              {item.price}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {item.description}
          </p>

          {/* Dietary Info */}
          {item.dietary && item.dietary.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {item.dietary.map((tag, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * Menu by Category section component
 * Displays all menu items organized by category with filter tabs
 */
export function MenuByCategory({ className }: MenuByCategoryProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | "all">(
    "all"
  )
  const allItems = getAllMenuItems()

  const filteredItems =
    activeCategory === "all"
      ? allItems
      : allItems.filter((item) => item.category === activeCategory)

  return (
    <SectionWrapper className={cn("bg-background", className)}>
      <Container>
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="font-heading mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Our Menu
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Explore our selection of freshly baked goods, made daily with love
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-all",
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
              type="button"
            >
              All Items
            </button>
            {menuCategories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all",
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                  type="button"
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </button>
              )
            })}
          </div>
        </div>

        {/* Category Description */}
        {activeCategory !== "all" && (
          <div className="mb-8 text-center">
            <p className="text-sm text-muted-foreground">
              {
                menuCategories.find((cat) => cat.id === activeCategory)
                  ?.description
              }
            </p>
          </div>
        )}

        {/* Menu Items Grid */}
        <div className="mx-auto max-w-5xl space-y-4">
          {filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>

        {/* No items message */}
        {filteredItems.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">
              No items found in this category.
            </p>
          </div>
        )}
      </Container>
    </SectionWrapper>
  )
}
