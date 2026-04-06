"use client"

import Link from "next/link"
import { ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link href="/" className="text-lg font-bold tracking-tight">
              NUWAN JAYASEKARA
            </Link>
            <p className="text-sm text-muted-foreground">
              Creative & Marketing Manager · Abu Dhabi, UAE
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
