"use client"

import { motion } from "framer-motion"
import { ArrowRight, ShieldCheck, Copy, Check, Calendar, ExternalLink } from "lucide-react"
import { useState } from "react"

export function Hero() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("npx agent-security-scanner-mcp init")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative px-4 pt-44 pb-20 sm:px-6 lg:px-8 lg:pt-56 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          {/* Open Source pill */}
          <motion.a
            href="https://www.npmjs.com/package/agent-security-scanner-mcp"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0 }}
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-5xl text-[52px] font-extrabold leading-[1.0] tracking-tighter text-gray-900 sm:text-[80px] lg:text-[96px]"
          >
            AI agents write the code.
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-500 bg-clip-text text-transparent">We make sure it&apos;s safe.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-400 sm:text-2xl lg:text-[28px] lg:leading-relaxed"
          >
            <span className="font-semibold text-gray-600">62%</span> of AI-generated code has vulnerabilities. We catch them before they ship — inside Cursor, Claude Code, and Copilot.
          </motion.p>

          {/* Capability badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              359 Security Rules
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              4.3M Packages Verified
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              12 Languages
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
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
            <a
              href="#demo"
              className="inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-8 py-4 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 hover:border-gray-300"
            >
              See Demo
            </a>
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

          {/* NPM install command */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6"
          >
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-indigo-50/80 px-5 py-2.5 text-sm backdrop-blur-sm transition-all hover:bg-indigo-100/80 hover:border-indigo-300"
            >
              <code className="font-mono text-sm text-indigo-700">npx agent-security-scanner-mcp init</code>
              {copied ? (
                <Check className="h-4 w-4 text-emerald-500" />
              ) : (
                <Copy className="h-4 w-4 text-indigo-400" />
              )}
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
