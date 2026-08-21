import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
}

export function SectionHeading({ title, subtitle, className, centered = false }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-3", centered && "items-center text-center", className)}>
      {subtitle && (
        <span className="text-accent uppercase tracking-widest text-xs font-semibold">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground font-bold tracking-tight">
        {title}
      </h2>
    </div>
  )
}
