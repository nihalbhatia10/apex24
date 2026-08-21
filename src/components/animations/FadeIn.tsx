"use client"

import React, { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  duration?: number
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 50,
  duration = 0.8,
}: FadeInProps) {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    let x = 0
    let y = 0
    
    switch (direction) {
      case "up":
        y = distance
        break
      case "down":
        y = -distance
        break
      case "left":
        x = distance
        break
      case "right":
        x = -distance
        break
      case "none":
        break
    }

    gsap.fromTo(
      container.current,
      {
        opacity: 0,
        x,
        y,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    )
  }, { scope: container })

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  )
}
