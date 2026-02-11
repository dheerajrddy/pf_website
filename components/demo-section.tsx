"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Code2, AlertTriangle, CheckCircle2 } from "lucide-react"
import { fadeUp, scaleIn } from "@/lib/animations"

const tabs = [
  { id: "write", label: "The Agent Writes", icon: Code2 },
  { id: "catch", label: "The Scanner Catches", icon: AlertTriangle },
  { id: "fix", label: "Auto-Fix Applied", icon: CheckCircle2 },
]

type TokenStyle = "comment" | "violet" | "blue" | "emerald" | "orange" | "gray" | "red-badge" | "emerald-badge" | "amber" | "indigo" | "white"

interface Token { text: string; style: TokenStyle }
type Line = Token[]

const tokenColors: Record<TokenStyle, string> = {
  comment: "text-gray-500",
  violet: "text-violet-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  orange: "text-orange-300",
  gray: "text-gray-300",
  "red-badge": "rounded bg-red-500/20 px-2 py-0.5 text-xs font-bold text-red-400",
  "emerald-badge": "rounded bg-emerald-500/20 px-2 py-0.5 text-xs font-bold text-emerald-400",
  amber: "text-amber-400",
  indigo: "text-indigo-400",
  white: "text-white font-semibold",
}

// Shared route handler opening
const routeOpen: Line[] = [
  [{ text: "app", style: "violet" }, { text: ".", style: "gray" }, { text: "get", style: "blue" }, { text: "(", style: "gray" }, { text: "'/user/:id'", style: "emerald" }, { text: ", (", style: "gray" }, { text: "req", style: "orange" }, { text: ", ", style: "gray" }, { text: "res", style: "orange" }, { text: ") => {", style: "gray" }],
]

// Shared callback close
const routeClose: Line[] = [
  [{ text: "});", style: "gray" }],
]

const writeLines: Line[] = [
  [{ text: "// Claude Code generates a database query", style: "comment" }],
  [], // blank line
  ...routeOpen,
  [{ text: "  ", style: "gray" }, { text: "const", style: "violet" }, { text: " query = ", style: "gray" }, { text: '"SELECT * FROM users WHERE id = "', style: "emerald" }, { text: " + ", style: "gray" }, { text: "req", style: "orange" }, { text: ".", style: "gray" }, { text: "params", style: "blue" }, { text: ".", style: "gray" }, { text: "id", style: "blue" }, { text: ";", style: "gray" }],
  [{ text: "  ", style: "gray" }, { text: "db", style: "violet" }, { text: ".", style: "gray" }, { text: "query", style: "blue" }, { text: "(query, (", style: "gray" }, { text: "err", style: "orange" }, { text: ", ", style: "gray" }, { text: "result", style: "orange" }, { text: ") => ", style: "gray" }, { text: "res", style: "orange" }, { text: ".", style: "gray" }, { text: "json", style: "blue" }, { text: "(result));", style: "gray" }],
  ...routeClose,
]

const catchLines: Line[] = [
  [{ text: "CRITICAL", style: "red-badge" }, { text: " ", style: "gray" }, { text: "SQL Injection (CWE-89)", style: "white" }],
  [], // blank line
  [{ text: "Line 3: ", style: "comment" }, { text: "String concatenation in SQL query", style: "amber" }],
  [{ text: "OWASP:  ", style: "comment" }, { text: "A03:2021 - Injection", style: "gray" }],
  [{ text: "Risk:   ", style: "comment" }, { text: "User input directly interpolated into query", style: "gray" }],
  [], // blank line
  [{ text: "Auto-fix available \u2192", style: "indigo" }, { text: " Use parameterized query", style: "comment" }],
]

const fixLines: Line[] = [
  [{ text: "FIXED", style: "emerald-badge" }, { text: " ", style: "gray" }, { text: "Parameterized query applied", style: "comment" }],
  [], // blank line
  ...routeOpen,
  [{ text: "  ", style: "gray" }, { text: "const", style: "violet" }, { text: " query = ", style: "gray" }, { text: '"SELECT * FROM users WHERE id = ?"', style: "emerald" }, { text: ";", style: "gray" }],
  [{ text: "  ", style: "gray" }, { text: "db", style: "violet" }, { text: ".", style: "gray" }, { text: "query", style: "blue" }, { text: "(query, [", style: "gray" }, { text: "req", style: "orange" }, { text: ".", style: "gray" }, { text: "params", style: "blue" }, { text: ".", style: "gray" }, { text: "id", style: "blue" }, { text: "], (", style: "gray" }, { text: "err", style: "orange" }, { text: ", ", style: "gray" }, { text: "result", style: "orange" }, { text: ") => ", style: "gray" }, { text: "res", style: "orange" }, { text: ".", style: "gray" }, { text: "json", style: "blue" }, { text: "(result));", style: "gray" }],
  ...routeClose,
]

const tabContent = [writeLines, catchLines, fixLines]

function CodeBlock({ lines, highlightLines }: { lines: Line[]; highlightLines?: number[] }) {
  return (
    <motion.div key={lines === writeLines ? "write" : lines === catchLines ? "catch" : "fix"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      {lines.map((line, i) => (
        <div key={i} className={highlightLines?.includes(i) ? "border-l-2 border-emerald-500/50 pl-3" : ""}>
          {line.length === 0 ? <br /> : line.map((token, j) => (
            <span key={j} className={tokenColors[token.style]}>{token.text}</span>
          ))}
        </div>
      ))}
    </motion.div>
  )
}

export function DemoSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const nextTab = useCallback(() => {
    setActiveTab((prev) => (prev + 1) % tabs.length)
  }, [])

  useEffect(() => {
    if (isHovering) return
    const interval = setInterval(nextTab, 4000)
    return () => clearInterval(interval)
  }, [isHovering, nextTab])

  // Lines 3-4 in fix tab get the green highlight border
  const highlightLines = activeTab === 2 ? [3, 4] : undefined

  return (
    <section id="demo" className="scroll-mt-24 px-4 py-32 sm:px-6 lg:px-8 lg:py-48">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600/80">
            See It In Action
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
            Detect. Fix. Ship&nbsp;secure.
          </h2>
        </motion.div>

        {/* Demo terminal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-2xl">
            {/* Window chrome + Tab bar */}
            <div className="border-b border-gray-100">
              <div className="flex items-center gap-2 px-4 pt-3 pb-0">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-indigo-400" />
                </div>
                <span className="ml-2 font-mono text-xs text-gray-400">~/project/src</span>
              </div>
              <div className="flex mt-2">
                {tabs.map((tab, index) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(index)}
                      className={`flex flex-1 items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium transition-all ${
                        activeTab === index
                          ? "border-b-2 border-indigo-600 bg-white text-gray-900"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{tab.label}</span>
                      <span className="sm:hidden">{tab.label.split(" ").pop()}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Terminal body */}
            <div className="bg-gray-950 p-6 sm:p-8 font-mono text-sm leading-relaxed min-h-[280px]">
              <CodeBlock lines={tabContent[activeTab]} highlightLines={highlightLines} />
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 flex justify-center gap-2">
            {tabs.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className="relative h-1.5 overflow-hidden rounded-full bg-gray-200"
                style={{ width: activeTab === index ? 32 : 6 }}
              >
                {activeTab === index && !isHovering && (
                  <motion.div
                    key={`progress-${activeTab}`}
                    className="absolute inset-0 rounded-full bg-indigo-600"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 4, ease: "linear" }}
                    style={{ transformOrigin: "left" }}
                  />
                )}
                {activeTab === index && isHovering && (
                  <div className="absolute inset-0 rounded-full bg-indigo-600" />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
