"use client"

import { motion } from "framer-motion"
import { ArrowRight, Copy, Check, Calendar } from "lucide-react"
import { useCopyToClipboard } from "@/lib/use-copy"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"

export function Hero() {
  const { copied, copy } = useCopyToClipboard("npx agent-security-scanner-mcp init")

  return (
    <section className="relative px-4 pt-44 pb-24 sm:px-6 lg:px-8 lg:pt-56 lg:pb-36">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* ClawdBot pill */}
          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
            </span>
            Now protecting ClawdBot &middot; 31 threat vectors covered
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="max-w-5xl font-display text-[48px] font-bold leading-[1.0] tracking-tight text-white sm:text-[72px] lg:text-[88px]"
          >
            AI agents act in
            <br />
            the real&nbsp;world.
            <br />
            <span className="text-gradient-light">
              We make sure they&rsquo;re&nbsp;safe.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.7 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl lg:text-[22px] lg:leading-relaxed"
          >
            Autonomous agents manage your email, files, payments, and code.
            One compromised prompt gives attackers the keys to everything.
          </motion.p>

          {/* Stats line */}
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.7 }}
            className="mt-8 font-mono text-sm text-gray-500"
          >
            56 firewall rules &middot; 4.3M packages verified &middot; 31 threat vectors blocked
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
              className="inline-flex items-center gap-2.5 rounded-full bg-indigo-600 px-10 py-4 text-base font-medium text-white transition-all hover:bg-indigo-500 hover:scale-[1.02]"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </a>
            <button
              onClick={copy}
              className="inline-flex items-center gap-3 rounded-full border border-gray-700 bg-gray-900/80 px-5 py-2.5 text-sm backdrop-blur-sm transition-all hover:border-gray-600"
            >
              <code className="font-mono text-sm text-gray-300">npx agent-security-scanner-mcp init</code>
              {copied ? (
                <Check className="h-4 w-4 text-emerald-400" />
              ) : (
                <Copy className="h-4 w-4 text-gray-500" />
              )}
            </button>
            <a
              href="https://calendly.com/divyachitimalla/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-medium text-indigo-400 transition-colors hover:text-indigo-300"
            >
              <Calendar className="h-4 w-4" />
              Book a Demo
            </a>
          </motion.div>

          {/* Compatibility line */}
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.7 }}
            className="mt-8 text-sm font-medium text-gray-500"
          >
            Works with ClawdBot, Claude Code, Cursor, OpenClaw, and any MCP agent
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
