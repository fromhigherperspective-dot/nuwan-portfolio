"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    { icon: Mail, label: "Email", value: "nuwanj76@gmail.com", href: "mailto:nuwanj76@gmail.com" },
    { icon: Phone, label: "Phone", value: "+971 50 436 1492", href: "tel:+971504361492" },
    { icon: MapPin, label: "Location", value: "Abu Dhabi, UAE", href: null },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/nuwan-jayasekara", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/nuwanj76", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/nuwanj76", label: "Twitter" },
  ]

  return (
    <section 
      id="contact" 
      className="py-16 sm:py-24 lg:py-32 border-t border-border"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 sm:mb-8">
              <span className="block overflow-hidden">
                <span className={`block transition-transform duration-700 delay-200 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                  Let&apos;s Work
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className={`block transition-transform duration-700 delay-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                  Together
                </span>
              </span>
            </h2>
            <p className={`text-muted-foreground text-base sm:text-lg mb-8 sm:mb-12 max-w-md transition-all duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              Have a project in mind? I&apos;d love to hear from you. Based in Abu Dhabi,
              available for projects across the UAE and beyond.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.label}
                  className={`flex items-center gap-4 group transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <info.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-sm sm:text-base font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className={`mt-10 sm:mt-14 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-[0.2em] mb-4">
                Follow Me
              </p>
              <div className="flex gap-4 sm:gap-5">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-12 h-12 sm:w-14 sm:h-14 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300 hover:scale-110 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                  >
                    <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-card border border-border p-6 sm:p-8 md:p-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '400ms' }}>
                  <label className="text-xs sm:text-sm text-muted-foreground mb-2 block">
                    Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-background border-border focus:border-foreground transition-colors"
                  />
                </div>
                <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '500ms' }}>
                  <label className="text-xs sm:text-sm text-muted-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-background border-border focus:border-foreground transition-colors"
                  />
                </div>
              </div>

              <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '600ms' }}>
                <label className="text-xs sm:text-sm text-muted-foreground mb-2 block">
                  Subject
                </label>
                <Input
                  type="text"
                  placeholder="Project inquiry"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="bg-background border-border focus:border-foreground transition-colors"
                />
              </div>

              <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '700ms' }}>
                <label className="text-xs sm:text-sm text-muted-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-background border-border resize-none focus:border-foreground transition-colors"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className={`w-full group overflow-hidden relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: '800ms' }}
              >
                <span className="relative z-10">Send Message</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
