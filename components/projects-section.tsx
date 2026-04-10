"use client"

import { useState } from "react"
import { ArrowUpRight, Download } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Select Training Website Launch",
    category: "Digital Marketing",
    year: "2022",
    description: "Launched a fully redesigned website for Select Training & Management Consultancy, resulting in a 47% increase in website visits and a significantly improved online presence.",
    image: "/images/project-2.jpg",
    link: "https://selecttraining.ae",
  },
  {
    id: 2,
    title: "LMS Platform at selecttraining.ae",
    category: "Platform",
    year: "2023",
    description: "Built and managed a Learning Management System at selecttraining.ae, enabling seamless online course delivery and student management for a leading UAE training consultancy.",
    image: "/images/project-3.jpg",
    link: "https://selecttraining.ae",
  },
  {
    id: 3,
    title: "Brand Guidelines and Visual Identity",
    category: "Branding",
    year: "2021",
    description: "Developed comprehensive brand guidelines for Select Training, covering logo usage, colour palette, typography, and tone of voice, ensuring consistency across all marketing materials.",
    image: "/images/project-4.jpg",
    link: null,
    download: "/images/select-identity-guidelines.pdf",
    downloadLabel: "Brand Guidelines",
  },
  {
    id: 4,
    title: "Video Production and Content Series",
    category: "Video Production",
    year: "2022",
    description: "End-to-end video production including concept, filming, and post-production for corporate campaigns and social media. Everything from scripting and shooting to editing and delivery, done personally.",
    image: "/images/project-5.jpg",
    link: null,
  },
]

const vp = { once: true, margin: "-80px" }
const ease = [0.22, 1, 0.36, 1] as const

export function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedId, setSelectedId] = useState<number>(1)
  const [expandedMobileId, setExpandedMobileId] = useState<number | null>(null)
  const activeId = hoveredId ?? selectedId

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-8 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7, ease }}
        >
          <div>
            <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">
              Selected Work
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={vp}
                transition={{ duration: 0.7, delay: 0.15, ease }}
              >
                Projects
              </motion.span>
            </h2>
          </div>
        </motion.div>

        {/* Mobile: Card Layout */}
        <div className="lg:hidden space-y-3">
          {projects.map((project, index) => {
            const isExpanded = expandedMobileId === project.id
            return (
              <motion.div
                key={project.id}
                className="border border-border overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              >
                <button
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left"
                  onClick={() => setExpandedMobileId(isExpanded ? null : project.id)}
                >
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest block mb-1">{project.category} · {project.year}</span>
                    <h3 className="text-base sm:text-lg font-semibold">{project.title}</h3>
                  </div>
                  <ArrowUpRight className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                </button>

                <div className={`overflow-hidden transition-all duration-400 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-4 sm:px-5 pb-5 space-y-4 border-t border-border pt-4">
                    <p className="text-sm text-foreground leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-4 pt-2">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Year</p>
                        <p className="text-sm font-medium">{project.year}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Type</p>
                        <p className="text-sm font-medium">{project.category}</p>
                      </div>
                      {project.link && (
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Live</p>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium flex items-center gap-1 hover:text-muted-foreground transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {project.link.replace("https://", "")}
                            <ArrowUpRight className="h-3 w-3" />
                          </a>
                        </div>
                      )}
                      {project.download && (
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Download</p>
                          <a
                            href={project.download}
                            download
                            className="text-sm font-medium flex items-center gap-1 hover:text-muted-foreground transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {project.downloadLabel}
                            <Download className="h-3 w-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Desktop: List Layout with Preview */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">

          {/* Project List */}
          <div className="space-y-0">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group border-t border-border last:border-b"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedId(project.id)}
              >
                <div className="py-6 flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-6">
                    <span className="text-muted-foreground text-sm w-8 font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${activeId === project.id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-muted-foreground">{project.category}</span>
                        <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                        <span className="text-xs text-muted-foreground">{project.year}</span>
                        {project.link && (
                          <>
                            <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2" onClick={(e) => e.stopPropagation()}>
                              {project.link.replace("https://", "")}
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`h-5 w-5 transition-all duration-300 ${
                      activeId === project.id ? "translate-x-1 -translate-y-1 text-foreground" : "text-muted-foreground"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Info Panel */}
          <motion.div
            className="sticky top-32"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
          >
            <div className="border border-border p-8">
              {projects.filter(p => p.id === activeId).map(project => (
                <div key={project.id} className="panel-animate flex flex-col gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-sm text-muted-foreground uppercase tracking-widest">{project.category}</span>
                    </div>
                    <h3 className="text-3xl xl:text-4xl font-bold tracking-tight mb-5">{project.title}</h3>
                    <p className="text-foreground text-lg leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Year</p>
                      <p className="text-lg font-medium">{project.year}</p>
                    </div>
                    <div className="w-px h-8 bg-border" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Type</p>
                      <p className="text-lg font-medium">{project.category}</p>
                    </div>
                    {project.link && (
                      <>
                        <div className="w-px h-8 bg-border" />
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Live</p>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-medium flex items-center gap-1 hover:text-muted-foreground transition-colors"
                          >
                            {project.link.replace("https://", "")}
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </div>
                      </>
                    )}
                    {project.download && (
                      <>
                        <div className="w-px h-8 bg-border" />
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Download</p>
                          <a
                            href={project.download}
                            download
                            className="text-lg font-medium flex items-center gap-1 hover:text-muted-foreground transition-colors"
                          >
                            {project.downloadLabel}
                            <Download className="h-4 w-4" />
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
