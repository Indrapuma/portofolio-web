"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPortfolioData } from "@/lib/portfolio-data"
import { Trophy, Award, Calendar } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

const AchievementsSection = () => {
    const data = getPortfolioData()

    if (!data.achievements || data.achievements.length === 0) return null

    return (
        <section id="achievements" className="py-20 bg-muted/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Achievements</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Recognition and awards for excellence in robotics and AI
                    </p>
                </AnimatedSection>

                <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
                    {data.achievements.map((achievement, index) => (
                        <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                            <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                                <CardHeader className="pb-2">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                                            <Trophy className="h-6 w-6" />
                                        </div>
                                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                                            <Calendar className="h-3 w-3 mr-1" />
                                            {achievement.year}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                                        {achievement.title}
                                    </CardTitle>
                                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                                        <Award className="h-4 w-4 mr-1 text-primary/60" />
                                        <span>{achievement.organization}</span>
                                    </div>
                                </CardHeader>
                                {achievement.description && (
                                    <CardContent>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {achievement.description}
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

export default AchievementsSection
