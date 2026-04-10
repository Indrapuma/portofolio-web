"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getPortfolioData } from "@/lib/portfolio-data"
import { ExternalLink, FileText, Award, Calendar } from "lucide-react"

const PublicationsSection = () => {
  const data = getPortfolioData()

  return (
    <section id="publications" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Publications & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Research contributions and professional certifications in AI and machine learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Publications */}
          <div>
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-foreground">Research Publications</h3>
            </div>

            <div className="space-y-4">
              {data.publications.map((pub, index) => (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                        {pub.title}
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => window.open(pub.link, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <p className="text-muted-foreground text-sm">{pub.venue}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                          <Calendar className="h-3 w-3 mr-1" />
                          {pub.year}
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-transparent"
                          onClick={() => window.open(pub.link, "_blank")}
                        >
                          <FileText className="h-4 w-4 mr-1" />
                          Read Paper
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-foreground">Professional Certifications</h3>
            </div>

            <div className="space-y-4">
              {data.certificates.map((cert, index) => (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                        {cert.title}
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => window.open(cert.link, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-green-500/20">
                          <Calendar className="h-3 w-3 mr-1" />
                          {cert.year}
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-transparent"
                          onClick={() => window.open(cert.link, "_blank")}
                        >
                          <Award className="h-4 w-4 mr-1" />
                          View Certificate
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Summary */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto border-border/50">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">Continuous Learning & Growth</h3>
              <p className="text-muted-foreground leading-relaxed">
                Committed to staying at the forefront of AI research and industry best practices. My publications and
                certifications reflect a dedication to both theoretical understanding and practical application of
                cutting-edge technologies in real-world scenarios.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default PublicationsSection
