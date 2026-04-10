"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Mail } from "lucide-react"
import { getPortfolioData } from "@/lib/portfolio-data"
import Image from "next/image"

const HeroSection = () => {
  const data = getPortfolioData()

  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-gradient" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" />
        <div
          className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-3/4 w-1 h-1 bg-primary/40 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="relative mx-auto w-64 h-64 mb-8 animate-fade-in group hover-lift-modern">
            {/* Soft Glow Background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />

            {/* Decorative Ring */}
            <div className="absolute -inset-2 rounded-full border border-primary/20 animate-pulse-slow" />

            {/* Image Container */}
            <div className="relative w-full h-full rounded-full shadow-2xl overflow-hidden bg-gradient-to-b from-transparent to-background/20 border-4 border-background">
              <Image
                src="/profile.png"
                alt={data.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
                style={{
                  objectPosition: "center 10%",
                  maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
                }}
              />
            </div>
          </div>

          {/* Open to Work Badge */}
          <div className="animate-fade-in-up animate-delay-100">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Open to Work
            </span>
          </div>

          <div className="animate-fade-in-up animate-delay-200">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent mb-4">
              {data.name}
            </h1>
            <p className="text-xl sm:text-2xl text-foreground/90 font-medium max-w-3xl mx-auto mb-2">
              {data.tagline}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {data.subtitle}
            </p>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 animate-fade-in-up animate-delay-250">
            {data.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animate-delay-300">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="px-10 py-4 text-lg font-medium btn-modern bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-lg hover:shadow-xl"
            >
              <Mail className="mr-3 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-10 py-4 text-lg font-medium glass-effect hover-lift-modern border-primary/20 hover:border-primary/40 bg-transparent"
              onClick={() => {
                const a = document.createElement("a")
                a.href = "/api/resume"
                a.target = "_blank"
                a.rel = "noopener noreferrer"
                document.body.appendChild(a)
                a.click()
                a.remove()
              }}
            >
              <Download className="mr-3 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in-up animate-delay-400">
            <button
              onClick={scrollToAbout}
              className="inline-flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown className="h-5 w-5 animate-bounce group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-10 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl animate-float" />
      <div
        className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />
    </section>
  )
}

export default HeroSection
