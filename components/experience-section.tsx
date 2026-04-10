"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPortfolioData } from "@/lib/portfolio-data"
import { Building, Calendar, CheckCircle } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

const ExperienceSection = () => {
  const data = getPortfolioData()

  return (
    <section id="experience" className="py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building AI systems across robotics, autonomous vehicles, and mining operations
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {data.experience.map((exp, index) => (
              <AnimatedSection key={`${exp.company}-${exp.year}`} animation="fade-up" delay={index * 150}>
                <div className="relative">
                  <div className="absolute left-6 top-7 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                  <Card className="md:ml-16 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="pb-1 pt-1">
                      <div className="flex items-center gap-5 text-lg sm:text-xl font-bold text-foreground">
                        <Building className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        <span>{exp.company}</span>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-2 pb-6">
                      <div className="space-y-8">
                        {exp.roles.map((role, i) => (
                          <div
                            key={`${exp.company}-${role.role}-${role.year}`}
                            className={`relative ${exp.roles.length > 1 && i > 0 ? "pt-5 border-t border-border/50 sm:pt-0 sm:border-t-0" : ""}`}
                          >
                            {exp.roles.length > 1 && i !== exp.roles.length - 1 && (
                              <div className="absolute left-[5px] top-6 bottom-[-36px] w-px bg-border/60 hidden sm:block" />
                            )}

                            <div className="flex gap-4">
                              <div className="mt-2 w-3 h-3 rounded-full border-2 border-background bg-muted-foreground/40 shrink-0 relative z-10 hidden sm:block" />

                              <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                                  <div className="flex items-center flex-wrap gap-2">
                                    <h3 className={`font-semibold text-foreground ${i === 0 ? 'text-xl' : 'text-lg'}`}>
                                      {role.role}
                                    </h3>
                                    {role.isPromoted && (
                                      <Badge variant="secondary" className="bg-primary/10 text-primary border-transparent px-2 py-0 h-5 text-xs font-medium">
                                        Promoted
                                      </Badge>
                                    )}
                                  </div>
                                  <div className="text-sm font-medium text-muted-foreground flex items-center shrink-0 sm:mt-1">
                                    <Calendar className="h-3 w-3 mr-1.5 hidden sm:block" />
                                    {role.year}
                                  </div>
                                </div>

                                <ul className="space-y-2">
                                  {role.contributions.map((contribution) => (
                                    <li key={`${role.role}-${contribution}`} className="flex items-start space-x-3 text-sm">
                                      <CheckCircle className="h-4 w-4 text-primary/70 mt-0.5 flex-shrink-0" />
                                      <span className="text-muted-foreground leading-relaxed">{contribution}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
