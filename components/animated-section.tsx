"use client"

import type React from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up"
  delay?: number
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-50px",
  })

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out"

    if (!isIntersecting) {
      switch (animation) {
        case "fade-up":
          return `${baseClasses} opacity-0 translate-y-8`
        case "fade-in":
          return `${baseClasses} opacity-0`
        case "slide-left":
          return `${baseClasses} opacity-0 -translate-x-8`
        case "slide-right":
          return `${baseClasses} opacity-0 translate-x-8`
        case "scale-up":
          return `${baseClasses} opacity-0 scale-95`
        default:
          return `${baseClasses} opacity-0 translate-y-8`
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default AnimatedSection
