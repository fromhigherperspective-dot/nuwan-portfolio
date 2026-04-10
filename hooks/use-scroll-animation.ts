"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Fallback: always show content after 1.2s even if observer doesn't fire
    const fallback = setTimeout(() => setIsVisible(true), 1200)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          clearTimeout(fallback)
        }
      },
      { threshold: 0, rootMargin: "0px 0px -50px 0px" }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      clearTimeout(fallback)
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return { ref, isVisible }
}
