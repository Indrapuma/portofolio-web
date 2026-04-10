"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getPortfolioData } from "@/lib/portfolio-data"
import { ExternalLink, Github, Play, X, ChevronLeft, FileText } from "lucide-react"
import Image from "next/image"
import { ProjectPlaceholder } from "@/components/project-placeholder"
import AnimatedSection from "@/components/animated-section"
import { useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const ProjectsSection = () => {
  const data = getPortfolioData()
  const [filter, setFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof data.projects)[number] | null>(null)

  const categories = ["All", ...Array.from(new Set(data.projects.flatMap((p) => p.category)))]
  const filteredProjects = filter === "All" ? data.projects : data.projects.filter((p) => p.category.includes(filter))

  const isYouTube = (url?: string) => {
    if (!url) return false
    return url.includes("youtube.com") || url.includes("youtu.be")
  }

  const getYouTubeId = (url: string) => {
    try {
      const u = new URL(url)
      if (u.hostname === "youtu.be") return u.pathname.slice(1)
      if (u.hostname.includes("youtube.com")) return u.searchParams.get("v") || ""
    } catch {
      const m = url.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{6,})/)
      return m ? m[1] : ""
    }
    return ""
  }

  const getYouTubeThumbnail = (url: string) => {
    const id = getYouTubeId(url)
    if (!id) return ""
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
  }

  const isDocumentLink = (url?: string) => url?.endsWith(".pdf") || url?.endsWith(".doc") || url?.endsWith(".docx")

  const hasValidLink = (url?: string) => url && url !== "" && url !== "#"

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From robotics competitions to production ML systems — here's what I've built
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
            {filter !== "All" && ` in ${filter}`}
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200} className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category)}
                className={`rounded-full px-6 transition-all duration-300 ${filter === category
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md border-0"
                  : "bg-background/50 backdrop-blur-sm border-border/50 hover:bg-secondary/80"
                  }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <Card
                onClick={() => setSelectedProject(project)}
                className="group h-full flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer"
              >
                {project.featured && (
                  <div className="absolute top-3 left-3 z-10">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white shadow-lg text-xs py-0.5 px-2">
                      Featured
                    </Badge>
                  </div>
                )}
                <div className="absolute top-3 right-3 z-10">
                  <Badge variant="outline" className="bg-black/60 text-white backdrop-blur-md border-white/10 text-xs py-0.5 px-2">
                    {project.type || "Project"}
                  </Badge>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden bg-black shrink-0 pointer-events-none">
                  {project.placeholderType ? (
                    <ProjectPlaceholder
                      type={project.placeholderType}
                      title={project.title}
                      stack={project.stack}
                    />
                  ) : project.gallery && project.gallery.length > 0 ? (
                    <Image
                      src={project.gallery[0]}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <Image
                      src={isYouTube(project.demo) ? getYouTubeThumbnail(project.demo || "") : project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                <CardHeader className="p-5 pb-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {project.title}
                  </h3>
                </CardHeader>

                <CardContent className="p-5 pt-2 flex-grow flex flex-col">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.slice(0, 4).map((tech: string, techIndex: number) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-primary/5 text-primary hover:bg-primary/10 border-primary/10 transition-colors text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.stack.length > 4 && (
                      <Badge variant="secondary" className="bg-primary/5 text-primary text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5">
                        +{project.stack.length - 4}
                      </Badge>
                    )}
                  </div>

                  <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Click to view details</span>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 top-[64px] z-40 bg-background/95 backdrop-blur-sm overflow-y-auto animate-in slide-in-from-bottom-4 fade-in duration-300">
            <div className="min-h-full">
              <div className="container max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedProject(null)}
                  className="hover:bg-primary/10 gap-2 text-muted-foreground hover:text-foreground"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back to Projects
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full hover:bg-destructive/10 hover:text-destructive"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="container max-w-7xl mx-auto px-4 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="rounded-xl overflow-hidden border border-border/50 bg-black shadow-2xl aspect-video relative">
                      {selectedProject.placeholderType ? (
                        <ProjectPlaceholder
                          type={selectedProject.placeholderType}
                          title={selectedProject.title}
                          stack={selectedProject.stack}
                        />
                      ) : (
                      <Carousel className="w-full h-full" opts={{ loop: true }}>
                        <CarouselContent className="ml-0 h-full">
                          {Array.from(new Set([
                            isYouTube(selectedProject.demo) ? getYouTubeThumbnail(selectedProject.demo || "") : selectedProject.image,
                            ...(selectedProject.gallery || [])
                          ])).filter(Boolean).map((img, i) => (
                            <CarouselItem key={i} className="pl-0 h-full relative w-full flex items-center justify-center bg-zinc-900/50">
                              <div className="relative w-full h-full">
                                <Image
                                  src={img as string}
                                  alt={`${selectedProject.title} slide ${i + 1}`}
                                  fill
                                  className="object-contain transition-opacity duration-300"
                                  priority={i === 0}
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <div className="absolute inset-0 pointer-events-none flex items-center justify-between z-20">
                          <CarouselPrevious
                            className="pointer-events-auto h-12 w-12 bg-black/50 hover:bg-black/80 border-white/20 text-white rounded-full backdrop-blur-sm opacity-70 hover:opacity-100 transition-all"
                            style={{ position: "absolute", left: "1rem" }}
                          />
                          <CarouselNext
                            className="pointer-events-auto h-12 w-12 bg-black/50 hover:bg-black/80 border-white/20 text-white rounded-full backdrop-blur-sm opacity-70 hover:opacity-100 transition-all"
                            style={{ position: "absolute", right: "1rem" }}
                          />
                        </div>
                      </Carousel>
                      )}
                    </div>

                    {!selectedProject.placeholderType && selectedProject.gallery && selectedProject.gallery.length > 0 && (
                      <p className="text-center text-xs text-muted-foreground">Swipe or use arrows to view gallery</p>
                    )}
                  </div>

                  <div className="lg:col-span-5 flex flex-col h-full">
                    <div className="sticky top-24 space-y-8">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <Badge variant="outline" className="text-sm py-1 px-3 border-primary/20 text-primary bg-primary/5">
                            {selectedProject.type || "Project"}
                          </Badge>
                          {selectedProject.featured && (
                            <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-sm text-sm py-1 px-3">
                              Featured
                            </Badge>
                          )}
                          <Badge variant="secondary" className="text-sm py-1 px-3">
                            {selectedProject.category}
                          </Badge>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
                          {selectedProject.title}
                        </h2>

                        <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed text-lg">
                          <p>{selectedProject.description}</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 border-l-2 border-primary pl-3">
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.stack.map((tech: string, i: number) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="px-3 py-1.5 bg-secondary/50 hover:bg-secondary text-sm transition-colors cursor-default"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {(hasValidLink(selectedProject.link) || hasValidLink(selectedProject.demo)) && (
                        <div className="pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                          {hasValidLink(selectedProject.link) && (
                            <Button
                              size="lg"
                              className="flex-1 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
                              onClick={() => window.open(selectedProject.link, "_blank")}
                            >
                              {isDocumentLink(selectedProject.link) ? (
                                <><FileText className="mr-2 h-5 w-5" />View Paper</>
                              ) : (
                                <><Github className="mr-2 h-5 w-5" />View Source Code</>
                              )}
                            </Button>
                          )}
                          {hasValidLink(selectedProject.demo) && (
                            <Button
                              size="lg"
                              variant="outline"
                              className="flex-1 border-primary/20 hover:bg-primary/5 hover:text-primary transition-all duration-300 hover:scale-[1.02]"
                              onClick={() => window.open(selectedProject.demo, "_blank")}
                            >
                              <Play className="mr-2 h-5 w-5" />
                              View Live Demo
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <AnimatedSection animation="fade-up" delay={800} className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto border-border/50">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Interested in Collaboration?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing challenging AI projects. Let's explore how we can work together.
              </p>
              <Button
                size="lg"
                onClick={() => {
                  const element = document.querySelector("#contact")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Start a Conversation
              </Button>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default ProjectsSection
