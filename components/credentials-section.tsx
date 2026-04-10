"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getPortfolioData } from "@/lib/portfolio-data"
import { ExternalLink, FileText, Award, Calendar, GraduationCap, Trophy } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

const CredentialsSection = () => {
  const data = getPortfolioData()
  const hasValidLink = (url?: string) => url && url !== "" && url !== "#"

  return (
    <section id="credentials" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Credentials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Education, research, awards, and certifications
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-12">
          {/* Education */}
          <AnimatedSection animation="fade-up">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </div>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-lg text-foreground mb-1">{edu.degree}</CardTitle>
                        <p className="text-sm text-muted-foreground font-medium">{edu.institution}</p>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 w-fit h-fit">
                        <Calendar className="h-3 w-3 mr-1" />
                        {edu.year}
                      </Badge>
                    </div>
                  </CardHeader>
                  {edu.description && (
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </AnimatedSection>

          {/* Research Publication */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-foreground">Research Publication</h3>
            </div>
            <div className="space-y-4">
              {data.publications.map((pub, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {pub.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <p className="text-muted-foreground text-sm">{pub.venue}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                          <Calendar className="h-3 w-3 mr-1" />
                          {pub.year}
                        </Badge>
                        {hasValidLink(pub.link) && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-transparent"
                            onClick={() => window.open(pub.link, "_blank")}
                          >
                            <FileText className="h-4 w-4 mr-1" />
                            Read Paper
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>

          {/* Achievements */}
          <AnimatedSection animation="fade-up" delay={150}>
            <div className="flex items-center mb-6">
              <Trophy className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-foreground">Achievements</h3>
            </div>
            <div className="space-y-4">
              {data.achievements.map((achievement, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                        {achievement.title}
                      </CardTitle>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 ml-2 shrink-0">
                        <Calendar className="h-3 w-3 mr-1" />
                        {achievement.year}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center mt-1">
                      <Award className="h-4 w-4 mr-1 text-primary/60" />
                      {achievement.organization}
                    </p>
                  </CardHeader>
                  {achievement.description && (
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-foreground">Certifications</h3>
            </div>
            <div className="space-y-4">
              {data.certificates.map((cert, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {cert.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-green-500/20">
                          <Calendar className="h-3 w-3 mr-1" />
                          {cert.year}
                        </Badge>
                        {hasValidLink(cert.link) && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-transparent"
                            onClick={() => window.open(cert.link, "_blank")}
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default CredentialsSection
