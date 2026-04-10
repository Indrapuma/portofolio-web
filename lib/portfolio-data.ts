import portfolioData from "@/data/portfolio.json"

export type Project = {
  title: string
  type?: string
  category: string
  featured?: boolean
  description: string
  stack: string[]
  link: string
  demo?: string
  image: string
  gallery?: string[]
  placeholderType?: "confidential" | "research"
}

export type ExperienceRole = {
  role: string
  year: string
  isPromoted?: boolean
  contributions: string[]
}

export type Experience = {
  company: string
  year: string
  roles: ExperienceRole[]
}

export type Publication = {
  title: string
  venue: string
  year: string
  link: string
}

export type Certificate = {
  title: string
  issuer: string
  year: string
  link: string
}

export type Contact = {
  email: string
  linkedin: string
  github: string
  instagram: string
  location: string
}

export type Education = {
  degree: string
  institution: string
  year: string
  description?: string
}

export type Achievement = {
  title: string
  organization: string
  year: string
  description?: string
}

export type Stat = {
  value: string
  label: string
}

export type PortfolioData = {
  name: string
  tagline: string
  subtitle: string
  about: string
  stats: Stat[]
  skills: string[]
  projects: Project[]
  experience: Experience[]
  education: Education[]
  achievements: Achievement[]
  publications: Publication[]
  certificates: Certificate[]
  contact: Contact
}

export const getPortfolioData = (): PortfolioData => {
  return portfolioData as PortfolioData
}
