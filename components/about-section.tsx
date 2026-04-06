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
              Creative &amp; Marketing Manager based in Abu Dhabi with 12+ years of experience.
              I build brands, lead campaigns, produce video content, and now build AI products
              like{" "}
              <a href="https://wavi.chat" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                wavi.chat
              </a>.
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
                className={`border border-border px-3 py-1.5 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-300 cursor-default ${isVisible ? 'opacity-100' : 'opacity-0'}`}
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
