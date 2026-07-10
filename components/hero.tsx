"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"
import { CALENDLY_URL } from "@/lib/links"

const terminalLines = [
  { text: "$ prooflayer swarm --target acme-ai", type: "command" as const },
  { text: "", type: "blank" as const },
  { text: "ProofLayer v4.0 — Autonomous Red-Team Swarm", type: "info" as const },
  { text: "Deploying 5 attack agents...", type: "info" as const },
  { text: "", type: "blank" as const },
  { text: "[Agent-01:Recon]  Mapping attack surface...", type: "info" as const },
  { text: "[Agent-01:Recon]  Found: 4 MCP tools, 2 RAG endpoints, 1 agent chain", type: "info" as const },
  { text: "", type: "blank" as const },
  { text: "[Agent-02:Inject] Prompt injection via RAG context...", type: "warning" as const },
  { text: "[Agent-03:MCP]    Testing tool poisoning vectors...", type: "warning" as const },
  { text: "", type: "blank" as const },
  { text: "[Agent-02:Inject] CRITICAL — RAG context injection: API key exfiltrated", type: "danger" as const },
  { text: "[Agent-03:MCP]    HIGH — Shadow endpoint: agent control hijacked", type: "danger" as const },
  { text: "", type: "blank" as const },
  { text: "[Agent-04:Chain]  Multi-step agent chain exploit...", type: "warning" as const },
  { text: "[Agent-04:Chain]  CRITICAL — Chained 3 tools → RCE achieved", type: "danger" as const },
  { text: "", type: "blank" as const },
  { text: "[Agent-05:Evolve] Mutating successful patterns...", type: "evolve" as const },
  { text: "[Agent-05:Evolve] Generated 7 new attack variants", type: "evolve" as const },
  { text: "", type: "blank" as const },
  { text: "Swarm complete: 3 critical, 1 high in 47s", type: "result" as const },
]

function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (visibleLines >= terminalLines.length) return
    const delay = terminalLines[visibleLines]?.type === "blank" ? 100 : 120
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), delay)
    return () => clearTimeout(timer)
  }, [visibleLines])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [visibleLines])

  const colorMap = {
    command: "text-cyan-400",
    info: "text-slate-400",
    warning: "text-amber-400",
    danger: "text-red-400",
    evolve: "text-sky-400",
    success: "text-emerald-400",
    result: "text-cyan-300 font-semibold",
    blank: "",
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-[#1E1E2E] shadow-2xl overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-gray-700/50 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
        </div>
        <span className="ml-2 font-mono text-xs text-slate-500">prooflayer — red-team-swarm</span>
      </div>
      {/* Terminal content */}
      <div ref={containerRef} className="h-[340px] overflow-y-auto p-4 font-mono text-sm leading-relaxed">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={`${colorMap[line.type]} ${line.type === "blank" ? "h-4" : ""}`}>
            {line.text}
          </div>
        ))}
        {visibleLines < terminalLines.length && (
          <span className="inline-block h-4 w-2 bg-blue-400 animate-cursor" />
        )}
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative px-4 pt-24 pb-6 sm:px-6 lg:px-8 lg:pt-32 lg:pb-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left column — copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-[48px] font-extrabold leading-[1.02] tracking-tighter text-gray-900 sm:text-[72px] lg:text-[88px]"
            >
              The <span className="text-gradient">trust layer</span>
              <br />
              for enterprise
              <br />
              AI.
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-gray-500 sm:text-xl"
            >
              One platform for the three questions every CISO is being asked about AI: is it secure, will attackers get in, and can we prove it to auditors.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:scale-[1.02]"
              >
                <Calendar className="h-4 w-4" />
                Talk to us
              </a>
            </motion.div>
          </motion.div>

          {/* Right column — terminal animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <TerminalAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
