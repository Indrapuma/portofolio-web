"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPortfolioData } from "@/lib/portfolio-data"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

const EducationSection = () => {
    const data = getPortfolioData()

    if (!data.education || data.education.length === 0) return null

    return (
        <section id="education" className="py-20 bg-muted/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Education</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        My academic foundation and continuous learning journey
                    </p>
                </AnimatedSection>

                <div className="grid gap-8 max-w-4xl mx-auto">
                    {data.education.map((edu, index) => (
                        <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden">

                                <CardHeader className="pb-4">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                        <div className="flex items-start space-x-4">
                                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                                <GraduationCap className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-xl text-foreground mb-1">{edu.degree}</CardTitle>
                                                <div className="flex items-center text-muted-foreground">
                                                    <span className="font-medium">{edu.institution}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 w-fit h-fit">
                                            <Calendar className="h-3 w-3 mr-1" />
                                            {edu.year}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                {edu.description && (
                                    <CardContent>
                                        <p className="text-muted-foreground text-sm leading-relaxed ml-14">
                                            {edu.description}
                                        </p>
                                    </CardContent>
                                )}
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EducationSection
