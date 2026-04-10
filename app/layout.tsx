import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-icon.svg",
  },
  title: "Indra Putra Mahayuda — AI Engineer",
  description:
    "AI Engineer with 3+ years building production ML systems in computer vision, deep reinforcement learning, and time series forecasting. IEEE-published researcher. Open to opportunities.",
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Computer Vision",
    "Deep Reinforcement Learning",
    "MLOps",
    "Python",
    "TensorFlow",
    "PyTorch",
  ],
  authors: [{ name: "Indra Putra Mahayuda" }],
  creator: "Indra Putra Mahayuda",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bosindra.vercel.app",
    title: "Indra Putra Mahayuda — AI Engineer",
    description:
      "AI Engineer specializing in Computer Vision, Deep RL & Production ML Systems. IEEE-published. Open to opportunities.",
    siteName: "Indra Putra Mahayuda Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indra Putra Mahayuda — AI Engineer",
    description:
      "AI Engineer specializing in Computer Vision, Deep RL & Production ML Systems",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
