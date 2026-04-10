"use client"

import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Decorative Circles */}
      <div className="hidden md:block absolute top-32 right-10 w-64 h-64 border border-border rounded-full opacity-20" />
      <div className="hidden md:block absolute bottom-20 left-10 w-96 h-96 border border-border rounded-full opacity-10" />
      <div className="hidden md:block absolute top-1/2 right-1/4 w-32 h-32 border border-border rounded-full opacity-30" />

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-foreground/20 rounded-full animate-pulse" />
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-foreground/30 rounded-full animate-ping" />
      <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-foreground/20 rounded-full animate-pulse" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-[0.3em] mb-4 sm:mb-6">
              Creative &amp; Marketing Manager · Abu Dhabi
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter mb-6 sm:mb-8 overflow-hidden">
              Nuwan.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-foreground max-w-xl mb-8 sm:mb-12 leading-relaxed font-light">
              Twelve years of brand strategy, marketing, and creative production. The same instincts now behind a self-sustaining AI product.
            </p>

            <div className="flex flex-row gap-3 sm:gap-4">
              <Button asChild variant="outline" size="lg" className="px-6 sm:px-8 group overflow-hidden relative flex-1 sm:flex-none sm:w-auto">
                <Link href="#projects" onClick={(e) => scrollToSection(e, "#projects")}>
                  <span className="relative z-10 group-hover:text-background transition-colors">View Projects</span>
                  <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-6 sm:px-8 group overflow-hidden relative flex-1 sm:flex-none sm:w-auto">
                <Link href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
                  <span className="relative z-10 group-hover:text-background transition-colors">Get in Touch</span>
                  <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Offset decorative border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-border opacity-60" />
              <div className="absolute -bottom-8 -right-8 w-full h-full border border-border opacity-30" />
              {/* Portrait */}
              <div className="relative w-[339px] h-[424px] sm:w-[382px] sm:h-[476px] lg:w-[424px] lg:h-[529px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src="/images/hero-portrait.jpg"
                  alt="Nuwan Jayasekara, Creative & Marketing Manager"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
