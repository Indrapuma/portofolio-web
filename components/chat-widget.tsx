"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, X } from "lucide-react"
import { getPortfolioData } from "@/lib/portfolio-data"

type Msg = { from: "user" | "bot"; text: string; time: number }

const STORAGE_KEY = "portfolio_chat_messages_v1"

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const listRef = useRef<HTMLDivElement | null>(null)

  const data = getPortfolioData()

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setMessages(JSON.parse(raw))
    } catch (e) {
      // ignore
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
    } catch (e) {
      // ignore
    }
    // scroll to bottom
    requestAnimationFrame(() => {
      if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight
    })
  }, [messages, open])

  const sendMessage = (text: string) => {
    if (!text.trim()) return
    const msg: Msg = { from: "user", text: text.trim(), time: Date.now() }
    setMessages((s) => [...s, msg])
    setInput("")
    respond(text.trim())
  }

  const respond = (text: string) => {
    setIsTyping(true)
    setTimeout(() => {
      const lower = text.toLowerCase()
      let reply = "Maaf, saya chatbot sederhana. Coba tanya tentang 'projects', 'skills', atau 'contact'."

      if (/hi|halo|hello/.test(lower)) {
        reply = `Hai! Saya asisten sederhana. Saya bisa memberitahu tentang projects, skills, atau contact.`
      } else if (lower.includes("project") || lower.includes("projects")) {
        const titles = data.projects.slice(0, 5).map((p) => `- ${p.title}`).join("\n")
        reply = `Beberapa project saya:\n${titles}`
      } else if (lower.includes("skill") || lower.includes("skills")) {
        reply = `Keahlian saya: ${data.skills.join(", ")}`
      } else if (lower.includes("contact") || lower.includes("email") || lower.includes("github")) {
        reply = `Kontak: email ${data.contact.email}, github ${data.contact.github}, linkedin ${data.contact.linkedin}`
      } else if (lower.includes("resume") || lower.includes("cv")) {
        reply = `Anda bisa mengunduh CV melalui tombol Download CV di halaman utama.`
      } else if (lower.includes("video") || lower.includes("demo")) {
        reply = `Beberapa project memiliki demo/preview. Cek bagian Projects dan klik 'Demo' untuk menonton.`
      }

      const botMsg: Msg = { from: "bot", text: reply, time: Date.now() }
      setMessages((s) => [...s, botMsg])
      setIsTyping(false)
    }, 800)
  }

  return (
    <div>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex items-end flex-col gap-2">
          {open && (
            <div className="w-80 h-[420px] bg-panel border border-border/50 rounded-xl shadow-xl overflow-hidden flex flex-col">
              <div className="flex items-center justify-between px-4 py-2 border-b border-border/50 bg-background/80">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <div className="font-medium">Chat Assistant</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="text-sm text-muted-foreground hover:text-foreground p-1"
                    onClick={() => setOpen(false)}
                    aria-label="Close chat"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div ref={listRef} className="flex-1 p-3 space-y-3 overflow-y-auto bg-gradient-to-b from-background to-transparent">
                {messages.length === 0 && (
                  <div className="text-sm text-muted-foreground">Hi — tanyakan sesuatu, misal "projects" atau "skills".</div>
                )}
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] px-3 py-2 rounded-lg text-sm whitespace-pre-wrap ${
                        m.from === "user" ? "bg-primary text-white" : "bg-card text-foreground"
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="text-sm text-muted-foreground">Bot is typing...</div>
                )}
              </div>

              <div className="px-3 py-2 border-t border-border/50 bg-background/80">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e: any) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") sendMessage(input)
                    }}
                    placeholder="Tanyakan sesuatu..."
                    className="flex-1"
                  />
                  <Button onClick={() => sendMessage(input)}>Send</Button>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={() => setOpen((s) => !s)}
            className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
            aria-label="Open chat"
          >
            <MessageSquare className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
