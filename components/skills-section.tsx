"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getPortfolioData } from "@/lib/portfolio-data"
import { Brain, Code, Cpu, Network } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

const SkillsSection = () => {
  const data = getPortfolioData()

  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: <Brain className="h-5 w-5" />,
      skills: [
        "TensorFlow", "PyTorch", "Reinforcement Learning", "NLP",
        "Gymnasium", "Ray-RLlib", "GluonTS", "Darts",
        "BERT", "LLM", "Text Classification", "MLflow", "MLOps"
      ],
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    {
      title: "Programming Languages & Web",
      icon: <Code className="h-5 w-5" />,
      skills: [
        "Python", "TypeScript", "C/C++", "C#", "Rust",
        "Next.js", "React", "Tailwind CSS", "shadcn/ui", "Flask", "FastAPI", "Laravel", "Supabase",
        "Vercel", "REST API", "Payment Integration", "Git"
      ],
      color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    },
    {
      title: "Computer Vision & Robotics",
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        "Computer Vision", "OpenCV", "ROS", "YOLO",
        "TensorRT", "Jetson", "Sensor Fusion"
      ],
      color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
    },
    {
      title: "Data, IoT & Infrastructure",
      icon: <Network className="h-5 w-5" />,
      skills: [
        "BigQuery", "Streamlit", "SQL", "Data Scraping",
        "Node-RED", "MQTT", "IoT Integration", "Real-time Monitoring",
        "Docker", "Kubernetes", "AWS"
      ],
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    },
  ]

  const displayCategories = skillCategories.map(cat => ({
    ...cat,
    skills: cat.skills.filter(s => data.skills.includes(s) || data.skills.some(ds => ds.toLowerCase() === s.toLowerCase()))
  }))

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Core technologies I use to build and deploy AI systems
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {displayCategories.map((category, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
              <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <div className={`p-2 rounded-lg ${category.color.split(' ')[0]} ${category.color.split(' ')[1]}`}>
                      {category.icon}
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className={`${category.color} hover:scale-105 transition-transform cursor-default`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
