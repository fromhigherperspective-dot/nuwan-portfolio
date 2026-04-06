"use client"

import { useState } from "react"
import { ArrowUpRight, ExternalLink } from "lucide-react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const experience = [
  {
    id: 1,
    period: "2026 to Present",
    role: "AI Product Creator",
    company: "WAVI",
    link: "https://wavi.chat",
    type: "Entrepreneurship",
    description:
      "A fully autonomous SaaS where AI agents handle customer conversations on WhatsApp, trained on each business's own knowledge, 24/7 with zero human involvement.",
    highlights: [
      "Conceived, planned, and built a full-stack SaaS product from initial concept through architecture, design, and deployment",
      "Each business gets a custom AI trained on their own content, handling real customer conversations on WhatsApp autonomously",
      "Fully automated and self-sustained, the entire business runs on AI agents with zero manual intervention",
    ],
  },
  {
    id: 2,
    period: "2021 to Present",
    role: "Creative & Marketing Manager",
    company: "Select Training & Management Consultancy",
    link: "https://selecttraining.ae",
    type: "Full-Time · Abu Dhabi",
    description:
      "Leading all marketing, digital, and creative operations for one of Abu Dhabi's established training and management consultancy firms.",
    highlights: [
      "Launched a fully redesigned website, achieving a 47% increase in visits",
      "Built and managed the LMS platform at selecttraining.ae",
      "Developed comprehensive brand guidelines and visual identity",
      "Managed social media strategy across LinkedIn, Instagram, and Facebook",
      "Produced end-to-end video content from concept through to post-production",
      "Designed all marketing collateral including brochures, banners, and presentations",
      "Ran email newsletter campaigns for existing and prospective clients",
      "Handled event photography and videography for corporate functions",
    ],
  },
  {
    id: 3,
    period: "2017 to 2021",
    role: "Marketing & Content",
    company: "Fractal Systems",
    link: "https://www.fractalsystems.ae/",
    type: "Full-Time · Dubai",
    description:
      "Managed digital marketing, content creation, and brand communications for one of the UAE's leading event technology providers.",
    highlights: [
      "Led a full website redesign, improving UX and brand presentation",
      "Planned and executed digital ad campaigns on Facebook, Instagram, and Google",
      "Created and managed social media content calendars and community engagement",
      "Produced graphic design assets for digital and print campaigns",
      "Handled corporate event photography and videography",
      "Coordinated with external agencies and vendors for campaign delivery",
    ],
  },
  {
    id: 4,
    period: "2013 to 2017",
    role: "Social Media Manager",
    company: "Ramani Fernando Salons",
    link: "https://ramanifernando.com/",
    type: "Part-Time · Sri Lanka",
    description:
      "Managed social media presence for one of Sri Lanka's leading premium salon chains across multiple locations.",
    highlights: [
      "Managed and grew brand accounts across Facebook and Instagram",
      "Created and scheduled content including posts, promotions, and event coverage",
      "Engaged with the online community to build brand loyalty",
      "Collaborated with the creative team on campaign visuals and seasonal promotions",
      "Supported in-salon photography and styling shoots for social content",
    ],
  },
]

export function ExperienceSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedId, setSelectedId] = useState<number>(1)
  const [expandedMobileId, setExpandedMobileId] = useState<number | null>(null)
  const activeId = hoveredId ?? selectedId
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05)

  return (
    <section
      id="experience"
      className="py-16 sm:py-24 lg:py-32 border-t border-border"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div>
            <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">
              Career
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight overflow-hidden">
              <span className={`block transition-transform duration-700 delay-200 ${isVisible ? "translate-y-0" : "translate-y-full"}`}>
                Experience
              </span>
            </h2>
          </div>
        </div>

        {/* Mobile: Stacked cards */}
        <div className="lg:hidden space-y-3">
          {experience.map((item, index) => {
            const isExpanded = expandedMobileId === item.id
            return (
              <div
                key={item.id}
                className={`border border-border overflow-hidden transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {/* Clickable header */}
                <button
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left"
                  onClick={() => setExpandedMobileId(isExpanded ? null : item.id)}
                >
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest block mb-1">{item.type} · {item.period}</span>
                    <h3 className="text-base sm:text-lg font-semibold">{item.role}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.company}</p>
                  </div>
                  <ArrowUpRight className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                </button>

                {/* Expandable content */}
                <div className={`overflow-hidden transition-all duration-400 ease-in-out ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-4 sm:px-5 pb-5 border-t border-border pt-4 space-y-4">
                    <p className="text-sm text-foreground leading-relaxed">{item.description}</p>
                    <ul className="space-y-2">
                      {item.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="mt-2 w-1.5 h-1.5 bg-foreground rounded-full flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {item.link.replace("https://", "").replace(/\/$/, "")}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Desktop: List + Info Panel */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">

          {/* Left: Role list */}
          <div className="space-y-0">
            {experience.map((item, index) => (
              <div
                key={item.id}
                className={`group border-t border-border last:border-b transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedId(item.id)}
              >
                <div className="py-6 flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-6">
                    <span className="text-muted-foreground text-sm w-8 font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${activeId === item.id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
                          {item.role}
                        </h3>
                        {item.type === "Entrepreneurship" && (
                          <span className="text-xs border border-foreground/30 px-2 py-0.5">AI</span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-muted-foreground">{item.company}</span>
                        <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                        <span className="text-xs text-muted-foreground">{item.period}</span>
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`h-5 w-5 transition-all duration-300 ${
                      activeId === item.id ? "translate-x-1 -translate-y-1 text-foreground" : "text-muted-foreground"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right: Info panel */}
          <div className={`sticky top-32 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="border border-border p-8">
              {experience.filter(e => e.id === activeId).map(item => (
                <div key={item.id} className="panel-animate flex flex-col gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-sm text-muted-foreground uppercase tracking-widest">{item.type}</span>
                    </div>

                    <h3 className="text-3xl xl:text-4xl font-bold tracking-tight mb-2">{item.role}</h3>

                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-lg text-muted-foreground hover:text-foreground transition-colors mb-5"
                      >
                        {item.company}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : (
                      <p className="text-lg text-muted-foreground mb-5">{item.company}</p>
                    )}

                    <p className="text-lg text-foreground leading-relaxed mb-5">{item.description}</p>

                    <ul className="space-y-2.5">
                      {item.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-base text-foreground">
                          <span className="mt-2.5 w-1.5 h-1.5 bg-foreground rounded-full flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Period</p>
                      <p className="text-lg font-medium">{item.period}</p>
                    </div>
                    {item.link && (
                      <>
                        <div className="w-px h-8 bg-border" />
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Website</p>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-medium flex items-center gap-1 hover:text-muted-foreground transition-colors"
                          >
                            {item.link.replace("https://", "").replace(/\/$/, "")}
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
