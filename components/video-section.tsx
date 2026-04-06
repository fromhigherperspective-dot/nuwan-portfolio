"use client"

import { Play } from "lucide-react"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState } from "react"

export function VideoSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2)
  const [isHovered, setIsHovered] = useState(false)

  const stats = [
    { value: "12+", label: "Years Experience" },
    { value: "47%", label: "Website Traffic Growth" },
    { value: "3+", label: "Industries Served" },
  ]

  return (
    <section 
      id="video" 
      className="py-16 sm:py-24 lg:py-32 border-t border-border bg-secondary/30"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">
            Video Resume
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 overflow-hidden">
            <span className={`block transition-transform duration-700 delay-200 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
              See My Work in Action
            </span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            All the videography was curated, captured, executed, and post-produced by me.
            A visual showcase of my creative journey, skills, and passion.
          </p>
        </div>

        {/* Video Player */}
        <div 
          className={`relative aspect-video max-w-4xl mx-auto overflow-hidden group cursor-pointer transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Video Thumbnail */}
          <Image
            src="/images/video-thumbnail.jpg"
            alt="Video resume thumbnail"
            fill
            className={`object-cover grayscale transition-all duration-700 ${isHovered ? 'scale-110 grayscale-0' : 'scale-100'}`}
          />
          
          {/* Overlay */}
          <div className={`absolute inset-0 bg-background/60 transition-opacity duration-500 ${isHovered ? 'opacity-40' : 'opacity-60'}`} />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`text-center transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
              <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-foreground flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-all duration-500 ${isHovered ? 'bg-foreground' : 'bg-transparent'}`}>
                <Play className={`h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 ml-1 transition-colors duration-500 ${isHovered ? 'text-background' : 'text-foreground'}`} />
              </div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-foreground">
                Watch Video Resume
              </p>
            </div>
          </div>
          
          {/* Corner Accents - Hidden on small screens */}
          <div className="hidden sm:block absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 border-l-2 border-t-2 border-foreground/50" />
          <div className="hidden sm:block absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-r-2 border-t-2 border-foreground/50" />
          <div className="hidden sm:block absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 border-l-2 border-b-2 border-foreground/50" />
          <div className="hidden sm:block absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-r-2 border-b-2 border-foreground/50" />
        </div>

        {/* Video Stats */}
        <div className={`grid grid-cols-3 max-w-3xl mx-auto mt-12 sm:mt-16 lg:mt-20 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center px-2 sm:px-6 border-r border-border last:border-r-0 transition-all duration-500`}
              style={{ transitionDelay: `${700 + index * 150}ms` }}
            >
              <p className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                 style={{ transitionDelay: `${800 + index * 150}ms` }}>
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
