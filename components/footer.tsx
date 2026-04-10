"use client"

import { getPortfolioData } from "@/lib/portfolio-data"
import { Linkedin, Github, Instagram, Heart } from "lucide-react"

const Footer = () => {
  const data = getPortfolioData()
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "LinkedIn", url: data.contact.linkedin, icon: <Linkedin className="h-5 w-5" /> },
    { name: "GitHub", url: data.contact.github, icon: <Github className="h-5 w-5" /> },
    { name: "Instagram", url: data.contact.instagram, icon: <Instagram className="h-5 w-5" /> },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Credentials", href: "#credentials" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
            >
              {data.name}
            </button>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI Engineer specializing in computer vision, deep reinforcement learning, and production ML systems.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href)
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="space-y-2">
              <a
                href={`mailto:${data.contact.email}`}
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {data.contact.email}
              </a>
              <p className="text-muted-foreground text-sm">{data.contact.location}</p>
            </div>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={() => window.open(social.url, "_blank")}
                  className="p-2 bg-muted hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-muted-foreground text-sm">
              {currentYear} {data.name}. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center">
              Built with <Heart className="h-4 w-4 mx-1 text-red-500" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
