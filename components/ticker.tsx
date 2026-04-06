export function Ticker() {
  const items = [
    "Creative Marketing",
    "AI Products",
    "Video Production",
    "Brand Identity",
    "Digital Strategy",
    "Content Creation",
    "Social Media",
    "Photography",
    "Web Development",
    "Growth Marketing",
  ]

  // Duplicate for seamless loop
  const doubled = [...items, ...items]

  return (
    <div className="border-t border-b border-border py-3 overflow-hidden bg-card">
      <div className="flex animate-ticker whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6 text-xs uppercase tracking-[0.2em] text-muted-foreground flex-shrink-0">
            {item}
            <span className="w-1 h-1 bg-muted-foreground rounded-full" />
          </span>
        ))}
      </div>
    </div>
  )
}
