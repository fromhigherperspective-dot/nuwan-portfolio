"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const skills = [
  "AI Product Development",
  "Social Media Strategy",
  "Digital Marketing",
  "Content Creation",
  "Video Production & Editing",
  "Graphic Design",
  "WordPress Management",
  "Email Marketing",
  "Brand Development",
  "Ad Campaign Management",
  "Photography",
  "LMS Administration",
]

export function AboutSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2)

  return (
    <section
      id="about"
      className="py-16 sm:py-24 lg:py-32 border-t border-border"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 sm:px-6">

        {/* Heading + bio in two columns */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-14">

          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-[0.3em] mb-4">
              About Me
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none">
              <span className="block overflow-hidden">
                <span className={`block transition-transform duration-700 delay-100 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                  Creative Mind,
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className={`block transition-transform duration-700 delay-200 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                  Strategic Vision
                </span>
              </span>
            </h2>
          </div>

          <div className={`lg:pt-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <p className="text-lg sm:text-xl text-foreground leading-relaxed">
              A creative and marketing strategist from Sri Lanka, based in Abu Dhabi. Over a decade building brands, leading campaigns, and producing content across the UAE, across training, technology, and corporate events. Also working on AI-driven products and helping businesses with marketing automation. Strategy drives everything, paired with a deep interest in consumer psychology and how it shapes the way people connect with brands.
            </p>
          </div>
        </div>

        {/* Expertise - compact pill tags */}
        <div className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-muted-foreground text-xs uppercase tracking-[0.3em] mb-4">
            Expertise
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className={`border border-border px-3 py-1.5 text-sm font-medium text-foreground cursor-default ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${650 + index * 60}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
