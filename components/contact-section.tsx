"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getPortfolioData } from "@/lib/portfolio-data"
import { Mail, MapPin, Linkedin, Github, ExternalLink, ArrowRight } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

const ContactSection = () => {
  const data = getPortfolioData()

  const socialLinks = [
    {
      name: "LinkedIn",
      url: data.contact.linkedin,
      icon: <Linkedin className="h-5 w-5" />,
      color: "hover:text-blue-500 hover:border-blue-500/30 hover:bg-blue-500/5",
      description: "Let's connect professionally",
    },
    {
      name: "GitHub",
      url: data.contact.github,
      icon: <Github className="h-5 w-5" />,
      color: "hover:text-foreground hover:border-foreground/30 hover:bg-foreground/5",
      description: "See my code & contributions",
    },
    {
      name: "Instagram",
      url: data.contact.instagram,
      icon: <ExternalLink className="h-5 w-5" />,
      color: "hover:text-pink-500 hover:border-pink-500/30 hover:bg-pink-500/5",
      description: "Personal updates",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm actively looking for AI Engineer and ML roles. Whether it's a job opportunity, a collaboration, or just a conversation about AI — I'd love to hear from you.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={100}>
          <Card className="border-border/50 bg-gradient-to-br from-primary/5 via-background to-accent/5 mb-8">
            <CardContent className="p-8 sm:p-12 text-center">
              <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Email Me Directly</h3>
              <p className="text-muted-foreground mb-6">The fastest way to reach me</p>
              <Button
                size="lg"
                className="px-10 py-4 text-lg font-medium btn-modern bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-lg hover:shadow-xl"
                onClick={() => window.open(`mailto:${data.contact.email}`, "_self")}
              >
                {data.contact.email}
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{data.contact.location}</span>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="grid sm:grid-cols-3 gap-4">
            {socialLinks.map((social, index) => (
              <Card
                key={index}
                className={`border-border/50 cursor-pointer transition-all duration-300 hover:shadow-lg ${social.color}`}
                onClick={() => window.open(social.url, "_blank")}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted mb-3">
                    {social.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{social.name}</h4>
                  <p className="text-sm text-muted-foreground">{social.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default ContactSection
