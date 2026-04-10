"use client"

import { Play } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

const vp = { once: true, margin: "-80px" }
const ease = [0.22, 1, 0.36, 1] as const

export function VideoSection() {
  const [isHovered, setIsHovered] = useState(false)

  const stats = [
    { value: "12+", label: "Years Experience" },
    { value: "47%", label: "Website Traffic Growth" },
    { value: "3+", label: "Industries Served" },
  ]

  return (
    <section id="video" className="py-16 sm:py-24 lg:py-32 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">
            Video Resume
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={vp}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              See My Work in Action
            </motion.span>
          </h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            All the videography was curated, captured, executed, and post-produced by me.
            A visual showcase of my creative journey, skills, and passion.
          </motion.p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          className="relative aspect-video max-w-4xl mx-auto overflow-hidden group cursor-pointer"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src="/images/video-thumbnail.jpg"
            alt="Video resume thumbnail"
            fill
            className={`object-cover grayscale transition-all duration-700 ${isHovered ? 'scale-110 grayscale-0' : 'scale-100'}`}
          />
          <div className={`absolute inset-0 bg-background/60 transition-opacity duration-500 ${isHovered ? 'opacity-40' : 'opacity-60'}`} />
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
          <div className="hidden sm:block absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 border-l-2 border-t-2 border-foreground/50" />
          <div className="hidden sm:block absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-r-2 border-t-2 border-foreground/50" />
          <div className="hidden sm:block absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 border-l-2 border-b-2 border-foreground/50" />
          <div className="hidden sm:block absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-r-2 border-b-2 border-foreground/50" />
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 max-w-3xl mx-auto mt-12 sm:mt-16 lg:mt-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center px-2 sm:px-6 border-r border-border last:border-r-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.12, ease: "easeOut" }}
            >
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-3">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
