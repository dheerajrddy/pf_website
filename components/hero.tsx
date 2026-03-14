"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Copy, Check, Calendar, ExternalLink, Terminal, MousePointerClick, Code2, Bot, Zap } from "lucide-react"
import { useCopyToClipboard } from "@/lib/use-copy"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"
import type { NpmStats } from "@/lib/npm-stats"

const agents = [
  { name: "Claude Code", icon: Terminal },
  { name: "Cursor", icon: MousePointerClick },
  { name: "Windsurf", icon: Code2 },
  { name: "Cline", icon: Bot },
  { name: "OpenClaw", icon: Zap },
  { name: "OpenCode", icon: Code2 },
  { name: "Cody", icon: Bot },
  { name: "Kilo Code", icon: Code2 },
]

const terminalLines = [
  { text: "$ npx agent-security-scanner-mcp init", type: "command" as const },
  { text: "", type: "blank" as const },
  { text: "ProofLayer v3.3.0 — Autonomous Red-Teaming", type: "info" as const },
  { text: "Target: acme-ai-chatbot (GPT-4 + RAG pipeline)", type: "info" as const },
  { text: "", type: "blank" as const },
  { text: "[Recon]  Mapping attack surface...", type: "info" as const },
  { text: "[Recon]  Found: 3 MCP tools, 2 RAG endpoints, 1 agent chain", type: "info" as const },
  { text: "", type: "blank" as const },
  { text: "[Attack] Prompt injection via RAG document...", type: "warning" as const },
  { text: "[VULN]   Severity: CRITICAL", type: "danger" as const },
  { text: "[VULN]   RAG context injection — exfiltrated API key", type: "danger" as const },
  { text: "[VULN]   Proof-of-exploit generated ✓", type: "danger" as const },
  { text: "", type: "blank" as const },
  { text: "[Attack] MCP tool poisoning via shadow endpoint...", type: "warning" as const },
  { text: "[VULN]   Severity: HIGH", type: "danger" as const },
  { text: "[VULN]   Tool response manipulated — agent hijacked", type: "danger" as const },
  { text: "", type: "blank" as const },
  { text: "[Evolve] Learning from exploit patterns...", type: "success" as const },
  { text: "[Evolve] Generated 3 new attack variants", type: "success" as const },
  { text: "", type: "blank" as const },
  { text: "Found 2 critical, 1 high vulnerability in 27s", type: "result" as const },
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
    success: "text-emerald-400",
    result: "text-cyan-300 font-semibold",
    blank: "",
  }

  return (
    <div className="rounded-xl border border-slate-700/50 bg-[#0B1120] shadow-2xl overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
        </div>
        <span className="ml-2 font-mono text-xs text-slate-500">prooflayer — red-team</span>
      </div>
      {/* Terminal content */}
      <div ref={containerRef} className="h-[320px] overflow-y-auto p-4 font-mono text-sm leading-relaxed">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={`${colorMap[line.type]} ${line.type === "blank" ? "h-4" : ""}`}>
            {line.text}
          </div>
        ))}
        {visibleLines < terminalLines.length && (
          <span className="inline-block h-4 w-2 bg-cyan-400 animate-cursor" />
        )}
      </div>
    </div>
  )
}

export function Hero({ stats }: { stats?: NpmStats }) {
  const { copied, copy } = useCopyToClipboard("npx agent-security-scanner-mcp init")

  return (
    <section className="relative px-4 pt-32 pb-20 sm:px-6 lg:px-8 lg:pt-40 lg:pb-28 bg-[#0F172A] bg-dot-pattern overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column — copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeIn} transition={{ duration: 0.7 }}>
              <a
                href="https://www.npmjs.com/package/agent-security-scanner-mcp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-400 transition-colors hover:bg-cyan-500/20"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>
                Now live on npm &middot; MIT open source
                <ExternalLink className="h-3.5 w-3.5 text-cyan-500" />
              </a>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-8 text-[44px] font-extrabold leading-[1.05] tracking-tighter text-white sm:text-[64px] lg:text-[72px]"
            >
              The autonomous
              <br />
              <span className="text-gradient">red team</span> for
              <br />
              AI systems.
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400 sm:text-xl"
            >
              Self-evolving AI agents that continuously attack your AI — finding what humans and scanners miss. Prompt injection, MCP exploits, tool poisoning, agent hijacking. 24/7.
            </motion.p>

            {/* Stat bar */}
            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="mt-6 font-mono text-sm text-slate-500"
            >
              50+ AI models red-teamed &middot; 200+ vulnerabilities discovered &middot; &lt;30s setup &middot; 1,700+ rules
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5"
            >
              <a
                href="https://www.npmjs.com/package/agent-security-scanner-mcp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-cyan-500 px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-cyan-600 hover:scale-[1.02]"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://calendly.com/divyachitimalla/intro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-7 py-3.5 text-base font-medium text-slate-300 transition-all hover:border-cyan-500/50 hover:text-white hover:scale-[1.02]"
              >
                <Calendar className="h-4 w-4" />
                Book a Demo
              </a>
            </motion.div>

            {/* Copy command */}
            <motion.div variants={fadeIn} transition={{ duration: 0.7 }} className="mt-6">
              <button
                onClick={copy}
                className="inline-flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800/80 px-5 py-2.5 text-sm backdrop-blur-sm transition-all hover:bg-slate-800 hover:border-slate-600"
              >
                <code className="font-mono text-sm text-cyan-400">npx agent-security-scanner-mcp init</code>
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Copy className="h-4 w-4 text-slate-500" />
                )}
              </button>
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

        {/* Agent logos carousel */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 w-full"
        >
          <p className="mb-5 text-center text-sm font-medium uppercase tracking-[0.15em] text-slate-500">
            Works with every AI coding agent
          </p>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-[#0F172A] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-[#0F172A] to-transparent" />
            <div className="flex gap-10 animate-carousel">
              {[...agents, ...agents, ...agents].map((agent, i) => {
                const Icon = agent.icon
                return (
                  <div
                    key={`${agent.name}-${i}`}
                    className="flex shrink-0 items-center gap-2.5 rounded-xl border border-slate-700/50 bg-slate-800/50 px-5 py-3"
                  >
                    <Icon className="h-5 w-5 text-cyan-400" />
                    <span className="text-base font-semibold text-slate-300 whitespace-nowrap">
                      {agent.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
