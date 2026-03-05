"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Copy, Check, Calendar, ExternalLink, Bot, Code2, MousePointerClick, Zap, Terminal, BarChart3 } from "lucide-react"
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

export function Hero({ stats }: { stats?: NpmStats }) {
  const { copied, copy } = useCopyToClipboard("npx agent-security-scanner-mcp init")

  return (
    <section className="relative px-4 pt-44 pb-20 sm:px-6 lg:px-8 lg:pt-56 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Status pill */}
          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.7 }}
            className="mb-6 flex flex-col items-center gap-3 sm:flex-row"
          >
            <a
              href="https://www.npmjs.com/package/agent-security-scanner-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50/80 px-4 py-1.5 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-100/80"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Now live on npm &middot; MIT open source
              <ExternalLink className="h-3.5 w-3.5 text-emerald-500" />
            </a>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="max-w-5xl text-[52px] font-extrabold leading-[1.0] tracking-tighter text-gray-900 sm:text-[80px] lg:text-[96px]"
          >
            Secure what AI
            <br />
            <span className="text-gradient">agents execute.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.7 }}
            className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-500 sm:text-2xl lg:text-[28px] lg:leading-relaxed"
          >
            Runtime security for AI coding agents. Intercepts vulnerabilities, hallucinated packages, and prompt injection inline — before agents execute.
          </motion.p>

          {/* Stats line */}
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.7 }}
            className="mt-8 font-mono text-sm text-gray-500"
          >
            {stats?.totalDownloads?.toLocaleString() ?? "2,962"} npm downloads &middot; &lt;30s setup &middot; 8 AI coding agents &middot; 4 surfaces &middot; 1,700+ rules
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:gap-6"
          >
            <a
              href="https://www.npmjs.com/package/agent-security-scanner-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-gray-900 px-10 py-4 text-base font-medium text-white transition-all hover:bg-gray-800 hover:scale-[1.02]"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </a>
            <button
              onClick={copy}
              className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-indigo-50/80 px-5 py-2.5 text-sm backdrop-blur-sm transition-all hover:bg-indigo-100/80 hover:border-indigo-300"
            >
              <code className="font-mono text-sm text-indigo-700">npx agent-security-scanner-mcp init</code>
              {copied ? (
                <Check className="h-4 w-4 text-emerald-500" />
              ) : (
                <Copy className="h-4 w-4 text-indigo-400" />
              )}
            </button>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-base font-medium text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 hover:scale-[1.02]"
            >
              <BarChart3 className="h-4 w-4 text-indigo-500" />
              Explore ClawHub Dashboard
            </Link>
            <a
              href="https://calendly.com/divyachitimalla/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-medium text-indigo-600 transition-colors hover:text-indigo-700"
            >
              <Calendar className="h-4 w-4" />
              Book a Demo
            </a>
          </motion.div>

          {/* Animated compatibility carousel */}
          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.7 }}
            className="mt-14 w-full max-w-2xl"
          >
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.15em] text-gray-500">
              Works with every AI coding agent
            </p>
            <div className="relative overflow-hidden">
              {/* Fade edges */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

              <div className="flex gap-10 animate-carousel">
                {/* Double the items for seamless loop */}
                {[...agents, ...agents, ...agents].map((agent, i) => {
                  const Icon = agent.icon
                  return (
                    <div
                      key={`${agent.name}-${i}`}
                      className="flex shrink-0 items-center gap-2.5 rounded-xl border border-gray-100 bg-white px-5 py-3 shadow-sm"
                    >
                      <Icon className="h-5 w-5 text-indigo-500" />
                      <span className="text-base font-semibold text-gray-700 whitespace-nowrap">
                        {agent.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
