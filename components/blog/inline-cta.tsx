"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface InlineCtaProps {
  variant?: "default" | "compact"
  headline?: string
  subtext?: string
}

export function InlineCta({
  variant = "default",
  headline = "Ready to secure your AI agents?",
  subtext = "Join the waitlist for early access to ProofLayer.",
}: InlineCtaProps) {
  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="my-10 overflow-hidden rounded-2xl border border-gray-100/80 bg-white shadow-sm"
      >
        <div className="h-1 w-full bg-gradient-to-r from-indigo-600 to-violet-500" />
        <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">{headline}</h4>
            <p className="text-sm text-gray-600">{subtext}</p>
          </div>
          <a
            href="https://calendly.com/divyachitimalla/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-6 py-2.5 whitespace-nowrap transition-colors"
          >
            Book a Call
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-10 overflow-hidden rounded-2xl border border-gray-100/80 bg-white shadow-sm"
    >
      <div className="h-1 w-full bg-gradient-to-r from-indigo-600 to-violet-500" />
      <div className="p-8 text-center">
        <h4 className="text-xl font-semibold text-gray-900 mb-2">{headline}</h4>
        <p className="text-gray-600 mb-6">{subtext}</p>
        <a
          href="https://calendly.com/divyachitimalla/intro"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-8 py-3 transition-colors"
        >
          Book a Call
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.div>
  )
}
