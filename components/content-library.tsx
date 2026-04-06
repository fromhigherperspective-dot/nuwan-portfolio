"use client"

import { Play } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const videos = [
  {
    id: 1,
    title: "Team Building With SELECT",
    client: "Select Training & Management Consultancy",
    date: "June 2023",
    duration: "1:37",
    description:
      "Curated team building activities designed to boost morale, improve communication, and promote trust within organizations.",
    thumbnail: "https://img.youtube.com/vi/2fohSzMdbDw/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=2fohSzMdbDw",
  },
  {
    id: 2,
    title: "Cloud Space Team Building",
    client: "C2i & Select Training",
    date: "January 2024",
    duration: "1:14",
    description:
      "Dynamic video capturing a team building event organized by C2i and Select Training for the Cloud Space UAE team.",
    thumbnail: "https://static.wixstatic.com/media/9d1803_99c519bc04404b118a9dbe90212d484df001.jpg/v1/fill/w_800,h_450,enc_auto/file.jpeg",
    link: null,
  },
  {
    id: 3,
    title: "VR Painting with Cathy Deniset",
    client: "Shiseido · Dubai",
    date: "June 2023",
    duration: "1:12",
    description:
      "Virtual Reality system supporting a live 360 VR painting performance at a Shiseido product launch in Dubai.",
    thumbnail: "https://img.youtube.com/vi/wJJdVT70dAs/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=wJJdVT70dAs",
  },
]

export function ContentLibrary() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05)

  return (
    <section
      id="content"
      className="py-16 sm:py-24 lg:py-32 border-t border-border"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div>
            <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-[0.3em] mb-3 sm:mb-4">
              Video Work
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight overflow-hidden">
              <span className={`block transition-transform duration-700 delay-200 ${isVisible ? "translate-y-0" : "translate-y-full"}`}>
                Content Library
              </span>
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`group border border-border overflow-hidden transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${300 + index * 120}ms` }}
            >
              {/* Thumbnail */}
              {video.link ? (
                <a href={video.link} target="_blank" rel="noopener noreferrer" className="block relative aspect-video bg-card overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-background/50 group-hover:bg-background/30 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center group-hover:bg-foreground transition-all duration-300">
                      <Play className="h-4 w-4 ml-0.5 text-foreground group-hover:text-background transition-colors duration-300" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 text-xs font-mono bg-background/80 px-2 py-0.5">
                    {video.duration}
                  </span>
                </a>
              ) : (
                <div className="relative aspect-video bg-card overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-background/50 group-hover:bg-background/30 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center opacity-50">
                      <Play className="h-4 w-4 ml-0.5 text-foreground" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 text-xs font-mono bg-background/80 px-2 py-0.5">
                    {video.duration}
                  </span>
                </div>
              )}

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">{video.date}</span>
                </div>
                <h3 className="text-base font-semibold mb-1 leading-snug">{video.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{video.client}</p>
                <p className="text-sm text-foreground leading-relaxed">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
