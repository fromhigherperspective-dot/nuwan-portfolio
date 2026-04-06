"use client"

import { Facebook, Globe, Instagram, Linkedin, Twitter } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
  </svg>
)

const brands = [
  { name: "WAVI", type: "AI Product", website: "https://wavi.chat", channels: [] },
  {
    name: "Select Training",
    type: "Training & Consultancy",
    website: "https://selecttraining.ae",
    channels: [
      { label: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/selecttrainingae/" },
      { label: "Instagram", icon: Instagram, url: "https://www.instagram.com/selecttrainingllc/" },
      { label: "Facebook", icon: Facebook, url: "https://www.facebook.com/SelectTrainingLLC" },
      { label: "X", icon: Twitter, url: "https://x.com/SelectTraining" },
    ],
  },
  {
    name: "Natalie Brown",
    type: "Personal Brand",
    website: null,
    channels: [
      { label: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/nataliebrownpro/" },
      { label: "Instagram", icon: Instagram, url: "https://www.instagram.com/nataliebrown.pro/" },
      { label: "Facebook", icon: Facebook, url: "https://www.facebook.com/natalie.brown.399488/" },
      { label: "TikTok", icon: TikTokIcon, url: "https://www.tiktok.com/@nataliebrown.pro" },
    ],
  },
  {
    name: "Tamakkun",
    type: "Human Capital Development",
    website: "https://tamakkun.sa",
    channels: [
      { label: "Instagram", icon: Instagram, url: "https://www.instagram.com/tamakkun_sa" },
      { label: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/tamakkun-for-administrative-consulting-co/about/" },
    ],
  },
  { name: "Neuro Monkey", type: "AI Solutions", website: "https://www.neuromonkey.ai", channels: [] },
]

export function ManagedChannels() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1)

  return (
    <section
      id="channels"
      className="py-16 sm:py-24 lg:py-32 border-t border-border"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 sm:px-6">

        <div className={`mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-[0.3em] mb-3 sm:mb-4">
            Digital Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight overflow-hidden">
            <span className={`block transition-transform duration-700 delay-200 ${isVisible ? "translate-y-0" : "translate-y-full"}`}>
              Managed Brands & Channels
            </span>
          </h2>
        </div>

        <div className="space-y-0">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={`group grid grid-cols-[1fr_auto] items-center border-t border-border last:border-b py-5 gap-4 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: `${300 + index * 80}ms` }}
            >
              {/* Left: name */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">{brand.type}</p>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight group-hover:text-muted-foreground transition-colors duration-300">{brand.name}</h3>
              </div>

              {/* Right: icons */}
              <div className="flex items-center gap-3">
                {brand.channels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={channel.label}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <channel.icon className="h-4 w-4" />
                  </a>
                ))}
                {brand.website && (
                  <a
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Website"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
