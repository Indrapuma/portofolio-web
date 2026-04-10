"use client"

import { getPortfolioData } from "@/lib/portfolio-data"
import AnimatedSection from "@/components/animated-section"
import Image from "next/image"

const AboutSection = () => {
  const data = getPortfolioData()

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-left">
            <div className="space-y-6">
              <div className="relative">
                <div className="w-full max-w-md mx-auto lg:mx-0">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                    <div className="w-full h-full rounded-xl bg-muted overflow-hidden">
                      <Image
                        src="/foto_indra.JPG"
                        alt={data.name}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-right" delay={200}>
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-foreground leading-relaxed text-lg">{data.about}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {data.stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-card border border-border/50">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 text-sm font-medium">
                  IEEE Published Researcher
                </span>
                <span className="px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 text-sm font-medium">
                  National Robotics Champion
                </span>
                <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-sm font-medium">
                  Huawei HCIA-AI Certified
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
