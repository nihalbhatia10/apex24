import * as React from "react"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  number: string
  title: string
  description: string
  className?: string
}

export function ServiceCard({ number, title, description, className }: ServiceCardProps) {
  return (
    <div className={cn(
      "group relative flex flex-col p-8 border border-border bg-white hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 rounded-sm overflow-hidden",
      className
    )}>
      {/* Number */}
      <span className="text-sm font-bold text-muted-foreground/50 mb-6 font-heading">
        {number}
      </span>
      
      {/* Content */}
      <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      
      {/* Footer / CTA */}
      <div className="flex items-center text-xs uppercase tracking-wider font-semibold text-foreground group-hover:text-accent transition-colors duration-300 mt-auto">
        <span>Explore</span>
        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
      </div>
      
      {/* Decorative gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  )
}
