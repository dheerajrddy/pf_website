"use client"

import { motion } from "framer-motion"
import { ArrowRight, Copy, Check, Calendar, ExternalLink, Bot, Code2, MousePointerClick, Zap, Terminal } from "lucide-react"
import { useCopyToClipboard } from "@/lib/use-copy"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"
import type { NpmStats } from "@/lib/npm-stats"

const agents = [
  { name: "ClawdBot", icon: Bot },
  { name: "Claude Code", icon: Terminal },
  { name: "Cursor", icon: MousePointerClick },
  { name: "OpenClaw", icon: Zap, highlight: true },
  { name: "Windsurf", icon: Code2 },
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
          {/* Status pills */}
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
            <a
              href="https://clawproof.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-violet-200/60 bg-violet-50/80 px-4 py-1.5 text-sm font-medium text-violet-700 transition-colors hover:bg-violet-100/80"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
              </span>
              ClawProof for OpenClaw &mdash; launching Feb 20
              <ExternalLink className="h-3.5 w-3.5 text-violet-500" />
            </a>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="max-w-5xl text-[52px] font-extrabold leading-[1.0] tracking-tighter text-gray-900 sm:text-[80px] lg:text-[96px]"
          >
            The immune system
            <br />
            <span className="text-gradient">for AI agents.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.7 }}
            className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-400 sm:text-2xl lg:text-[28px] lg:leading-relaxed"
          >
            Traditional security tools scan code after it&apos;s written. ProofLayer intercepts threats as AI writes code — from MCP agents to OpenClaw skills — catching hallucinated packages, injected prompts, and exfiltration attempts in real-time.
          </motion.p>

          {/* Stats line */}
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.7 }}
            className="mt-8 font-mono text-sm text-gray-400"
          >
            {stats?.totalDownloads?.toLocaleString() ?? "2,962"} npm downloads &middot; &lt;30s setup &middot; 9 agent clients &middot; OpenClaw plugin &middot; MIT license
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
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.15em] text-gray-400">
              Works with any MCP agent
            </p>
            <div className="relative overflow-hidden">
              {/* Fade edges */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

              <motion.div
                className="flex gap-10"
                animate={{ x: [0, -600] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                  },
                }}
              >
                {/* Double the items for seamless loop */}
                {[...agents, ...agents, ...agents].map((agent, i) => {
                  const Icon = agent.icon
                  return (
                    <div
                      key={`${agent.name}-${i}`}
                      className={`flex shrink-0 items-center gap-2.5 rounded-xl border px-5 py-3 shadow-sm ${
                        agent.highlight
                          ? "border-violet-200 bg-violet-50/80"
                          : "border-gray-100 bg-white"
                      }`}
                    >
                      <Icon className="h-5 w-5 text-indigo-500" />
                      <span className="text-base font-semibold text-gray-700 whitespace-nowrap">
                        {agent.name}
                      </span>
                    </div>
                  )
                })}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
