"use client"

import { motion } from "framer-motion"
import { Copy, Check, ArrowRight, Calendar } from "lucide-react"
import { useCopyToClipboard } from "@/lib/use-copy"
import { fadeIn, fadeUp, staggerContainer } from "@/lib/animations"

export function FinalCta() {
  const { copied, copy } = useCopyToClipboard("npx agent-security-scanner-mcp init")

  return (
    <section className="bg-gray-50/50 px-4 py-28 sm:px-6 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold tracking-tighter text-gray-900 sm:text-6xl lg:text-[72px] lg:leading-[1.05]"
          >
            Start red-teaming
            <br />
            <span className="text-gradient">your AI.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mt-8 text-xl text-gray-500 sm:text-2xl"
          >
            See what attackers see — before they do.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-6"
          >
            <a
              href="https://calendly.com/divyachitimalla/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-gray-900 px-8 py-4 text-base font-medium text-white transition-all hover:bg-gray-800 hover:scale-[1.02]"
            >
              <Calendar className="h-4.5 w-4.5" />
              Book a Demo
            </a>
            <a
              href="https://www.npmjs.com/package/agent-security-scanner-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-medium text-indigo-600 transition-colors hover:text-indigo-700"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Code block */}
          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mt-10"
          >
            <button
              onClick={copy}
              className="inline-flex items-center gap-3 rounded-xl border border-gray-700 bg-gray-900 px-6 py-3 font-mono text-sm text-gray-300 transition-all hover:bg-gray-800"
            >
              <span className="text-gray-500">$ </span>
              npx agent-security-scanner-mcp init
              {copied ? (
                <Check className="h-4 w-4 text-emerald-400" />
              ) : (
                <Copy className="h-4 w-4 text-gray-500" />
              )}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
