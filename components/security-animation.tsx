"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

const scanLines = [
  { text: "$ npx agent-security-scanner-mcp scan ./src", type: "command" as const, delay: 0 },
  { text: "", type: "blank" as const, delay: 400 },
  { text: "Scanning AI-generated code...", type: "info" as const, delay: 600 },
  { text: "Analyzing 12 files across 3 languages...", type: "info" as const, delay: 1200 },
  { text: "", type: "blank" as const, delay: 1600 },
  { text: "RESULTS", type: "header" as const, delay: 2000 },
  { text: "────────────────────────────────────────", type: "divider" as const, delay: 2100 },
  { text: "SQL Injection (CWE-89)     CRITICAL", type: "critical" as const, delay: 2400 },
  { text: "  → db.query(\"SELECT * FROM users WHERE id = \" + userId)", type: "detail" as const, delay: 2600 },
  { text: "  → Auto-fix: Use parameterized query", type: "fix" as const, delay: 2800 },
  { text: "", type: "blank" as const, delay: 3000 },
  { text: "XSS (CWE-79)              HIGH", type: "warn" as const, delay: 3200 },
  { text: "  → innerHTML = userInput", type: "detail" as const, delay: 3400 },
  { text: "  → Auto-fix: Use textContent", type: "fix" as const, delay: 3600 },
  { text: "", type: "blank" as const, delay: 3800 },
  { text: "Package Hallucination      DETECTED", type: "warn" as const, delay: 4000 },
  { text: "  → \"react-auth-helper\" does not exist on npm", type: "detail" as const, delay: 4200 },
  { text: "", type: "blank" as const, delay: 4400 },
  { text: "3 issues found. 2 auto-fixes available.", type: "info" as const, delay: 4600 },
  { text: "Applying fixes... Done. ✓", type: "success" as const, delay: 5200 },
]

export function SecurityAnimation() {
  const [visibleLines, setVisibleLines] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    const timeouts: NodeJS.Timeout[] = []

    scanLines.forEach((line, index) => {
      const timeout = setTimeout(() => {
        setVisibleLines(index + 1)
      }, line.delay)
      timeouts.push(timeout)
    })

    return () => timeouts.forEach(clearTimeout)
  }, [isInView])

  const getLineColor = (type: string) => {
    switch (type) {
      case "command": return "text-indigo-400"
      case "header": return "text-white font-semibold"
      case "divider": return "text-gray-600"
      case "critical": return "text-red-400 font-medium"
      case "warn": return "text-amber-400 font-medium"
      case "detail": return "text-gray-400"
      case "fix": return "text-emerald-400"
      case "success": return "text-indigo-400 font-medium"
      case "info": return "text-gray-400"
      default: return "text-gray-500"
    }
  }

  const renderLine = (line: typeof scanLines[0]) => {
    if (line.type === "blank") return "\u00A0"

    if (line.type === "critical") {
      const parts = line.text.split("CRITICAL")
      return (
        <>
          <span className="text-gray-300">{parts[0]}</span>
          <span className="text-red-400 font-bold">CRITICAL</span>
        </>
      )
    }

    if (line.type === "warn") {
      if (line.text.includes("DETECTED")) {
        const parts = line.text.split("DETECTED")
        return (
          <>
            <span className="text-gray-300">{parts[0]}</span>
            <span className="text-amber-400 font-bold">DETECTED</span>
          </>
        )
      }
      const parts = line.text.split("HIGH")
      return (
        <>
          <span className="text-gray-300">{parts[0]}</span>
          <span className="text-amber-400 font-bold">HIGH</span>
        </>
      )
    }

    return line.text
  }

  return (
    <div ref={ref} className="mx-auto max-w-3xl">
      <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-gray-100 px-5 py-3.5">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-amber-400" />
            <div className="h-3 w-3 rounded-full bg-indigo-400" />
          </div>
          <span className="ml-2 text-sm text-gray-400 font-mono">Agent Security Scanner</span>
        </div>

        {/* Terminal body */}
        <div className="bg-gray-950 p-6 sm:p-8 font-mono text-sm leading-relaxed min-h-[420px]">
          {scanLines.slice(0, visibleLines).map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
              className={getLineColor(line.type)}
            >
              {renderLine(line)}
            </motion.div>
          ))}
          {visibleLines < scanLines.length && isInView && (
            <span className="inline-block h-4 w-2 animate-pulse bg-indigo-400" />
          )}
        </div>
      </div>
    </div>
  )
}
