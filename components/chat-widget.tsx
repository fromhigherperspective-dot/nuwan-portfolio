"use client"

import { useState, useEffect, useRef } from "react"
import { X, Send, MessageCircle, Bot } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
  typing?: boolean
}

const GREETING = "Hi! I'm Nuwan's AI assistant. Ask me anything about his work, experience, or projects."

function renderWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g
  const parts = text.split(urlRegex)
  return parts.map((part, i) => {
    if (/^https?:\/\//.test(part)) {
      const isDownload = part.includes('.pdf')
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          download={isDownload ? true : undefined}
          className="underline underline-offset-2 opacity-80 hover:opacity-100 break-all"
        >
          {isDownload ? "Download here" : part.replace(/^https?:\/\//, '')}
        </a>
      )
    }
    return part
  })
}

function TypewriterMessage({ text, onDone }: { text: string; onDone?: () => void }) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed("")
    setDone(false)
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(interval)
        setDone(true)
        onDone?.()
      }
    }, 16)
    return () => clearInterval(interval)
  }, [text])

  return (
    <span>
      {displayed}
      {!done && <span className="inline-block w-0.5 h-3.5 bg-current ml-0.5 animate-pulse align-middle" />}
    </span>
  )
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [bubble, setBubble] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [typingIds, setTypingIds] = useState<Set<number>>(new Set())
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setBubble(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (open && messages.length === 0) {
      const idx = 0
      setMessages([{ role: "assistant", content: GREETING }])
      setTypingIds(new Set([idx]))
    }
    if (open) {
      setBubble(false)
      setTimeout(() => inputRef.current?.focus(), 400)
    }
  }, [open])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  const sendMessage = async () => {
    if (!input.trim() || loading) return
    const userMessage = input.trim()
    setInput("")

    const newMessages = [...messages, { role: "user" as const, content: userMessage }]
    setMessages(newMessages)
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
          origin: window.location.origin,
        }),
      })
      const data = await res.json()
      const reply = data.message ?? "Sorry, something went wrong."
      const replyIdx = newMessages.length
      setMessages(prev => [...prev, { role: "assistant", content: reply }])
      setTypingIds(prev => new Set([...prev, replyIdx]))
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Sorry, something went wrong. Try again." }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Mobile full-screen overlay */}
      <div className={`sm:hidden fixed inset-0 z-50 bg-background flex flex-col transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-border flex-shrink-0">
          <div className="w-8 h-8 bg-foreground text-background flex items-center justify-center flex-shrink-0">
            <Bot className="h-4 w-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold leading-none mb-0.5">Nuwan's Assistant</p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <p className="text-xs text-muted-foreground">Online</p>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors p-1">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className="flex gap-2 items-end animate-in fade-in slide-in-from-bottom-2 duration-300"
              style={{ justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}
            >
              {msg.role === "assistant" && (
                <div className="w-6 h-6 bg-foreground text-background flex items-center justify-center flex-shrink-0 mb-0.5">
                  <Bot className="h-3 w-3" />
                </div>
              )}
              <div className={`max-w-[80%] px-3.5 py-2.5 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-foreground text-background rounded-2xl rounded-br-sm"
                  : "border border-border text-foreground rounded-2xl rounded-bl-sm"
              }`}>
                {msg.role === "assistant" && typingIds.has(i) ? (
                  <TypewriterMessage
                    text={msg.content}
                    onDone={() => setTypingIds(prev => { const s = new Set(prev); s.delete(i); return s })}
                  />
                ) : (
                  renderWithLinks(msg.content)
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex gap-2 items-end animate-in fade-in duration-200">
              <div className="w-6 h-6 bg-foreground text-background flex items-center justify-center flex-shrink-0">
                <Bot className="h-3 w-3" />
              </div>
              <div className="border border-border px-4 py-3 rounded-2xl rounded-bl-sm">
                <div className="flex gap-1 items-center h-4">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex items-center gap-3 px-4 py-4 border-t border-border flex-shrink-0">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask about Nuwan..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground py-2"
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            className={`w-9 h-9 flex items-center justify-center transition-all duration-200 rounded-full ${
              input.trim() && !loading
                ? "bg-foreground text-background"
                : "text-muted-foreground opacity-30"
            }`}
          >
            <Send className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Desktop widget */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-3">

        {/* Speech bubble */}
        <div className={`absolute bottom-16 right-0 transition-all duration-500 ${bubble && !open ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95 pointer-events-none'}`}>
          <div className="relative bg-foreground text-background pl-4 pr-2 py-2 rounded-full text-xs font-medium shadow-xl whitespace-nowrap flex items-center gap-2">
            Hi, I'm Nuwan's AI 👋
            <button
              onClick={(e) => { e.stopPropagation(); setBubble(false) }}
              className="w-4 h-4 rounded-full bg-background/20 hover:bg-background/40 flex items-center justify-center transition-colors"
            >
              <X className="h-2.5 w-2.5" />
            </button>
            <div className="absolute -bottom-1 right-6 w-2.5 h-2.5 bg-foreground rotate-45 rounded-sm" />
          </div>
        </div>

        {/* Chat panel */}
        <div className={`w-[380px] border border-border bg-background shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right rounded-2xl overflow-hidden ${open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`} style={{ height: '500px' }}>

          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-border flex-shrink-0 bg-background">
            <div className="w-8 h-8 bg-foreground text-background flex items-center justify-center flex-shrink-0">
              <Bot className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold leading-none mb-0.5">Nuwan's Assistant</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-3 scroll-smooth">
            {messages.map((msg, i) => (
              <div
                key={i}
                className="flex gap-2 items-end animate-in fade-in slide-in-from-bottom-2 duration-300"
                style={{ justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}
              >
                {msg.role === "assistant" && (
                  <div className="w-6 h-6 bg-foreground text-background flex items-center justify-center flex-shrink-0 mb-0.5">
                    <Bot className="h-3 w-3" />
                  </div>
                )}
                <div className={`max-w-[78%] px-3.5 py-2.5 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-foreground text-background rounded-2xl rounded-br-sm"
                    : "border border-border text-foreground rounded-2xl rounded-bl-sm"
                }`}>
                  {msg.role === "assistant" && typingIds.has(i) ? (
                    <TypewriterMessage
                      text={msg.content}
                      onDone={() => setTypingIds(prev => { const s = new Set(prev); s.delete(i); return s })}
                    />
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-2 items-end animate-in fade-in duration-200">
                <div className="w-6 h-6 bg-foreground text-background flex items-center justify-center flex-shrink-0">
                  <Bot className="h-3 w-3" />
                </div>
                <div className="border border-border px-4 py-3 rounded-2xl rounded-bl-sm">
                  <div className="flex gap-1 items-center h-4">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-3 px-4 py-3 border-t border-border flex-shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about Nuwan..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className={`w-8 h-8 flex items-center justify-center transition-all duration-200 ${
                input.trim() && !loading
                  ? "bg-foreground text-background hover:opacity-80"
                  : "text-muted-foreground opacity-30"
              }`}
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setOpen(prev => !prev)}
          className={`w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 ${bubble && !open ? 'ring-2 ring-foreground ring-offset-2 ring-offset-background' : ''}`}
        >
          <div className={`transition-all duration-300 ${open ? 'rotate-90 scale-90' : 'rotate-0 scale-100'}`}>
            {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
          </div>
        </button>
      </div>

      {/* Mobile toggle button (only shown when chat is closed) */}
      <div className={`sm:hidden fixed bottom-6 right-6 z-50 transition-all duration-300 ${open ? 'opacity-0 pointer-events-none scale-90' : 'opacity-100 scale-100'}`}>
        <div className="relative">
          {/* Mobile speech bubble */}
          <div className={`absolute bottom-14 right-0 transition-all duration-500 ${bubble ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95 pointer-events-none'}`}>
            <div className="relative bg-foreground text-background pl-4 pr-2 py-2 rounded-full text-xs font-medium shadow-xl whitespace-nowrap flex items-center gap-2">
              Hi, I'm Nuwan's AI 👋
              <button
                onClick={(e) => { e.stopPropagation(); setBubble(false) }}
                className="w-4 h-4 rounded-full bg-background/20 hover:bg-background/40 flex items-center justify-center transition-colors"
              >
                <X className="h-2.5 w-2.5" />
              </button>
              <div className="absolute -bottom-1 right-6 w-2.5 h-2.5 bg-foreground rotate-45 rounded-sm" />
            </div>
          </div>
          <button
            onClick={() => setOpen(true)}
            className={`w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center shadow-lg transition-all duration-300 active:scale-95 ${bubble ? 'ring-2 ring-foreground ring-offset-2 ring-offset-background' : ''}`}
          >
            <MessageCircle className="h-5 w-5" />
          </button>
        </div>
      </div>
    </>
  )
}
