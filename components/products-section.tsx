"use client"

import { motion } from "framer-motion"
import { GitBranch, ArrowRight, Terminal, MousePointerClick, Code2, Bot, Zap } from "lucide-react"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"

const timeline = [
  {
    year: "2023",
    title: "Open-Source Foundations",
    description: "Core contributors to Garak (AI red-teaming framework) and Promptfoo (LLM evaluation) — the tools that defined the AI security category.",
  },
  {
    year: "2024",
    title: "ProofLayer Born",
    description: "Built agent-security-scanner-mcp: the first open-source security scanner purpose-built for MCP infrastructure and AI coding agents.",
  },
  {
    year: "2025",
    title: "Autonomous Red-Teaming",
    description: "Evolved from reactive scanning to autonomous, self-evolving attack agents that continuously red-team AI systems — 24/7.",
  },
]

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

export function ProductsSection() {
  return (
    <section id="open-source" className="scroll-mt-24 bg-[#0F172A] bg-dot-pattern px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.span
            variants={fadeIn}
            className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-cyan-400"
          >
            07 — Our Foundation
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl font-extrabold tracking-tighter text-white sm:text-5xl lg:text-[56px] lg:leading-[1.1]"
          >
            Built on the tools that
            <br />
            defined AI security.
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="mx-auto mt-16 max-w-3xl">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex gap-6 pb-10 last:pb-0"
            >
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10">
                  <GitBranch className="h-4 w-4 text-cyan-400" />
                </div>
                {i < timeline.length - 1 && <div className="w-px grow bg-slate-700/50" />}
              </div>
              <div className="pb-4">
                <span className="font-mono text-sm font-bold text-cyan-400">{item.year}</span>
                <h3 className="mt-1 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badges row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://www.npmjs.com/package/agent-security-scanner-mcp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-5 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-500/50"
          >
            npm &middot; agent-security-scanner-mcp
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://github.com/sinewaveai/agent-security-scanner-mcp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-5 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-500/50"
          >
            GitHub &middot; Open Source
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
            MIT License
          </span>
        </motion.div>

        {/* Agent compatibility logos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <p className="mb-5 text-center text-sm font-medium uppercase tracking-[0.15em] text-slate-500">
            Compatible with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {agents.map((agent) => {
              const Icon = agent.icon
              return (
                <div
                  key={agent.name}
                  className="flex items-center gap-2 rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-2"
                >
                  <Icon className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm font-medium text-slate-400">{agent.name}</span>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
