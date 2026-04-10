"use client"

import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
)

const SoundCloudIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor">
    <path d="M1.175 12.225c-.016 0-.023.006-.03.016l-.408 2.884.408 2.752c.007.01.014.016.03.016s.023-.006.03-.016l.467-2.752-.467-2.884c-.007-.01-.014-.016-.03-.016zm1.557-.28c-.02 0-.03.008-.036.02l-.35 3.164.35 2.994c.006.012.016.02.036.02s.03-.008.036-.02l.398-2.994-.398-3.164c-.006-.012-.016-.02-.036-.02zm1.56-.204c-.023 0-.037.012-.042.028l-.293 3.368.293 3.022c.005.016.019.028.042.028s.037-.012.042-.028l.334-3.022-.334-3.368c-.005-.016-.019-.028-.042-.028zm1.561-.132c-.027 0-.043.015-.048.036l-.234 3.5.234 3.05c.005.021.021.036.048.036s.043-.015.048-.036l.267-3.05-.267-3.5c-.005-.021-.021-.036-.048-.036zm1.558-.054c-.03 0-.049.018-.054.044l-.175 3.554.175 3.078c.005.026.024.044.054.044s.049-.018.054-.044l.2-3.078-.2-3.554c-.005-.026-.024-.044-.054-.044zm1.562-.018c-.034 0-.054.02-.059.052l-.116 3.572.116 3.106c.005.032.025.052.059.052s.054-.02.059-.052l.133-3.106-.133-3.572c-.005-.032-.025-.052-.059-.052zm1.56.01c-.037 0-.059.024-.064.06l-.057 3.562.057 3.134c.005.036.027.06.064.06s.059-.024.064-.06l.066-3.134-.066-3.562c-.005-.036-.027-.06-.064-.06zm4.668-4.205c-.267 0-.524.05-.763.14C13.86 4.01 12.1 2.5 9.99 2.5c-.574 0-1.12.118-1.614.328-.196.082-.248.166-.25.24v14.966c.002.077.058.144.138.158h10.082c.635 0 1.149-.515 1.149-1.149 0-.002-.001-.004-.001-.006 0-3.145-2.551-5.697-5.697-5.697z"/>
  </svg>
)

const contactInfo = [
  { icon: Mail, label: "Email", value: "nuwanj76@gmail.com", href: "mailto:nuwanj76@gmail.com" },
  { icon: Phone, label: "Phone", value: "+971 50 436 1492", href: "tel:+971504361492" },
  { icon: MapPin, label: "Location", value: "Abu Dhabi, UAE", href: null },
]

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/nuwan-jayasekara-994527108/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/nuuone_/", label: "Instagram" },
  { icon: WhatsAppIcon, href: "https://wa.me/qr/7UVL2DOFZJE6O1", label: "WhatsApp" },
  { icon: Youtube, href: "https://www.youtube.com/@fromhigherperspective8531", label: "YouTube" },
  { icon: SoundCloudIcon, href: "https://soundcloud.com/nuuone", label: "SoundCloud" },
]

export function ContactSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1)

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 lg:py-32 border-t border-border"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 sm:px-6">

        <div className={`mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-[0.3em] mb-3 sm:mb-4">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight overflow-hidden">
            <span className={`block transition-transform duration-700 delay-200 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
              Contact
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Contact Info */}
          <div className={`space-y-5 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-center gap-5 group">
                <div className="w-11 h-11 border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <info.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-0.5">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-base font-medium hover:text-muted-foreground transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-base font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xs text-muted-foreground uppercase tracking-[0.3em] mb-6">
              Find Me Online
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 border border-border px-4 py-3 text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                >
                  <social.icon />
                  <span className="text-sm font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
