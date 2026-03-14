"use client"

import { motion } from "framer-motion"
import { Copy, Check, ArrowRight, Calendar } from "lucide-react"
import { useCopyToClipboard } from "@/lib/use-copy"
import { fadeIn, fadeUp, staggerContainer } from "@/lib/animations"

export function FinalCta() {
  const { copied, copy } = useCopyToClipboard("npx agent-security-scanner-mcp init")

  return (
    <section className="bg-[#0F172A] bg-dot-pattern px-4 py-28 sm:px-6 lg:px-8 lg:py-40">
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
            className="text-5xl font-extrabold tracking-tighter text-white sm:text-6xl lg:text-[72px] lg:leading-[1.05]"
          >
            Start red-teaming
            <br />
            <span className="text-gradient">your AI.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mt-8 text-xl text-slate-400 sm:text-2xl"
          >
            One npm package. Autonomous attack agents. Free and open source.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-6"
          >
            <a
              href="https://www.npmjs.com/package/agent-security-scanner-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-cyan-500 px-8 py-4 text-base font-medium text-white transition-all hover:bg-cyan-600 hover:scale-[1.02]"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="https://calendly.com/divyachitimalla/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-7 py-4 text-base font-medium text-slate-300 transition-all hover:border-cyan-500/50 hover:text-white hover:scale-[1.02]"
            >
              <Calendar className="h-4 w-4" />
              Book a Demo
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
              className="inline-flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3 font-mono text-sm text-cyan-400 transition-all hover:bg-slate-800 hover:border-slate-600"
            >
              <span className="text-slate-500">$ </span>
              npx agent-security-scanner-mcp init
              {copied ? (
                <Check className="h-4 w-4 text-emerald-400" />
              ) : (
                <Copy className="h-4 w-4 text-slate-500" />
              )}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
