"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const fallback = setTimeout(() => setIsVisible(true), 1200)
    let observer: IntersectionObserver | null = null

    // Delay by 100ms so the browser paints the initial hidden state
    // before the observer can fire and trigger the transition
    const setupTimer = setTimeout(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            clearTimeout(fallback)
          }
        },
        { threshold: 0, rootMargin: "0px 0px -80px 0px" }
      )

      const currentRef = ref.current
      if (currentRef) {
        observer.observe(currentRef)
      }
    }, 100)

    return () => {
      clearTimeout(fallback)
      clearTimeout(setupTimer)
      if (observer && ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return { ref, isVisible }
}
