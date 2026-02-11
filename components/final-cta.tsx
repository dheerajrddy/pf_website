"use client"

import { motion } from "framer-motion"
import { Copy, Check } from "lucide-react"
import { useCopyToClipboard } from "@/lib/use-copy"
import { fadeIn } from "@/lib/animations"

export function FinalCta() {
  const { copied, copy } = useCopyToClipboard("npx agent-security-scanner-mcp init")

  return (
    <section className="scroll-mt-24 bg-gray-50/50 px-4 py-36 sm:px-6 lg:px-8 lg:py-52">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold tracking-tighter text-gray-900 sm:text-6xl lg:text-[72px] lg:leading-[1.05]">
            Start securing AI-generated&nbsp;code.
          </h2>
          <p className="mt-8 text-xl text-gray-400 sm:text-2xl lg:text-[28px] lg:leading-relaxed">
            One command. Every major AI coding tool. Free forever for developers.
          </p>

          <div className="mt-12 mx-auto max-w-lg">
            <button
              onClick={copy}
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

          <p className="mt-6 text-xs text-gray-400">
            Free and open source. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
