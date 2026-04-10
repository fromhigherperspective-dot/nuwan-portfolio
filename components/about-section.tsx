"use client"

import { motion } from "framer-motion"

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

const vp = { once: true, margin: "-80px" }
const ease = [0.22, 1, 0.36, 1] as const

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-14">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-[0.3em] mb-4">
              About Me
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.7, delay: 0.1, ease }}
                >
                  Creative Mind,
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.7, delay: 0.2, ease }}
                >
                  Strategic Vision
                </motion.span>
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="lg:pt-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <p className="text-lg sm:text-xl text-foreground leading-relaxed">
              A creative and marketing strategist from Sri Lanka, based in Abu Dhabi. Over a decade building brands, leading campaigns, and producing content across the UAE, across training, technology, and corporate events. Also working on AI-driven products and helping businesses with marketing automation. Strategy drives everything, paired with a deep interest in consumer psychology and how it shapes the way people connect with brands.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-xs uppercase tracking-[0.3em] mb-4">
            Expertise
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="border border-border px-3 py-1.5 text-sm font-medium text-foreground cursor-default"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index, duration: 0.4 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
