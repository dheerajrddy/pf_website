"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check, Calendar } from "lucide-react"

export function FinalCta() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("npx agent-security-scanner-mcp init")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="scroll-mt-24 bg-gray-50/50 px-4 py-36 sm:px-6 lg:px-8 lg:py-52">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Stats strip */}
          <p className="font-mono text-sm text-gray-400">
            359 Rules · 4.3M Packages · 12 Languages
          </p>

          <h2 className="mt-6 text-5xl font-extrabold tracking-tighter text-gray-900 sm:text-6xl lg:text-[72px] lg:leading-[1.05]">
            AI is writing the code.
            <br />
            Make sure it&apos;s safe.
          </h2>
          <p className="mt-8 text-xl text-gray-400 sm:text-2xl lg:text-[28px] lg:leading-relaxed">
            One command. Every major AI coding tool. Free forever for developers.
          </p>

          {/* Code block */}
          <div className="mt-12 mx-auto max-w-lg">
            <button
              onClick={handleCopy}
              className="group flex w-full items-center justify-between rounded-xl bg-gray-950 px-6 py-4 font-mono text-sm text-gray-300 shadow-[0_0_60px_-15px_rgba(79,70,229,0.15)] transition-all hover:bg-gray-900"
            >
              <span>
                <span className="text-gray-500">$ </span>
                npx agent-security-scanner-mcp init
              </span>
              {copied ? (
                <Check className="h-4 w-4 text-emerald-400" />
              ) : (
                <Copy className="h-4 w-4 text-gray-500 transition-colors group-hover:text-gray-300" />
              )}
            </button>
          </div>

          <div className="mt-8">
            <a
              href="https://calendly.com/divyachitimalla/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-medium text-indigo-600 transition-colors hover:text-indigo-700"
            >
              <Calendar className="h-4 w-4" />
              Book a Demo
            </a>
            <p className="mt-3 text-xs text-gray-400">
              Free and open source. No credit card required.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
