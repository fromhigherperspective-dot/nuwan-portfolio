"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#content", label: "Content" },
    { href: "#contact", label: "Contact" },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border py-3">
      <nav className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link 
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="text-lg sm:text-xl font-bold tracking-tight hover:opacity-70 transition-opacity"
        >
          <span className="inline-block overflow-hidden">
            <span className="inline-block animate-[slideDown_0.5s_ease-out]">
              PORTFOLIO
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link, index) => (
            <li key={link.href} style={{ animationDelay: `${index * 100}ms` }}>
              <Link
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
          <li>
            <Button asChild variant="outline" size="sm" className="group overflow-hidden relative">
              <a href="/images/nuwan-cv.pdf" download="Nuwan_Jayasekara_CV.pdf">
                <Download className="h-4 w-4 mr-2 relative z-10 group-hover:text-background transition-colors" />
                <span className="relative z-10 group-hover:text-background transition-colors">Download CV</span>
                <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </Button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden relative overflow-hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
            <Menu className="h-5 w-5" />
          </span>
          <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
            <X className="h-5 w-5" />
          </span>
        </Button>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 top-0 bg-background z-40 transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ paddingTop: isScrolled ? '60px' : '72px' }}
      >
        <div className="h-full flex flex-col justify-center px-6">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <li 
                key={link.href}
                className={`transition-all duration-300 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
                style={{ transitionDelay: isOpen ? `${index * 75}ms` : '0ms' }}
              >
                <Link
                  href={link.href}
                  className="block text-3xl sm:text-4xl font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li 
              className={`transition-all duration-300 pt-6 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
              style={{ transitionDelay: isOpen ? `${navLinks.length * 75}ms` : '0ms' }}
            >
              <Button asChild size="lg" className="w-full group overflow-hidden relative">
                <a href="/images/nuwan-cv.pdf" download="Nuwan_Jayasekara_CV.pdf" onClick={() => setIsOpen(false)}>
                  <Download className="h-5 w-5 mr-2 relative z-10" />
                  <span className="relative z-10">Download CV</span>
                </a>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
