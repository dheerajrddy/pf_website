"use client"

import { motion } from "framer-motion"
import { ArrowRight, Copy, Check, Calendar, ExternalLink } from "lucide-react"
import { useCopyToClipboard } from "@/lib/use-copy"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"

export function Hero() {
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
          {/* Open Source pill */}
          <motion.a
            href="https://www.npmjs.com/package/agent-security-scanner-mcp"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeIn}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50/80 px-4 py-1.5 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-100/80"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open Source
            <ExternalLink className="h-3.5 w-3.5 text-emerald-500" />
          </motion.a>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="max-w-5xl text-[52px] font-extrabold leading-[1.0] tracking-tighter text-gray-900 sm:text-[80px] lg:text-[96px]"
          >
            AI agents write the code.
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-500 bg-clip-text text-transparent">We make sure it&apos;s safe.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.7 }}
            className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-400 sm:text-2xl lg:text-[28px] lg:leading-relaxed"
          >
            <span className="font-semibold text-gray-600">62%</span> of AI-generated code has vulnerabilities. We catch them before they ship — inside Cursor, Claude Code, and Copilot.
          </motion.p>

          {/* Stats line */}
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.7 }}
            className="mt-8 font-mono text-sm text-gray-400"
          >
            359 rules · 4.3M packages · 12 languages
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

          {/* Compatibility line */}
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.7 }}
            className="mt-8 text-sm font-medium text-gray-400"
          >
            Works with Claude Code, Cursor, Windsurf, Copilot, and more
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
