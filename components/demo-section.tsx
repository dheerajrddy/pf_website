"use client"

import { motion } from "framer-motion"
import { Search, Swords, BadgeCheck, Dna } from "lucide-react"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Recon Agent",
    description: "Maps your entire AI attack surface — models, MCP tools, RAG pipelines, agent chains, and data flows.",
    color: "text-blue-500",
    bg: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    icon: Swords,
    number: "02",
    title: "Attack Agent",
    description: "Chains multi-step exploits across your AI stack. Prompt injection, tool poisoning, agent hijacking — all automated.",
    color: "text-amber-500",
    bg: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    icon: BadgeCheck,
    number: "03",
    title: "Exploit Validation",
    description: "Proves exploitability with real proof-of-concept attacks. No false positives — every finding is verified.",
    color: "text-rose-500",
    bg: "bg-rose-50",
    borderColor: "border-rose-200",
  },
  {
    icon: Dna,
    number: "04",
    title: "Self-Evolve",
    description: "Learns from each engagement. Mutates successful attacks, generates new variants, and adapts to your defenses.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
]

export function DemoSection() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.span
            variants={fadeIn}
            className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-indigo-600/80"
          >
            04 — How It Works
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[56px] lg:leading-[1.1]"
          >
            Autonomous Attack Loop
          </motion.h2>
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-600"
          >
            A continuous cycle that discovers, exploits, validates, and evolves — then loops back to find what changed.
          </motion.p>
        </motion.div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="relative mt-16">
          {/* Desktop: horizontal grid with connecting lines */}
          <div className="hidden lg:grid lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative"
                >
                  {/* Connecting arrow (except last) */}
                  {i < steps.length - 1 && (
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M14 7l5 5-5 5" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                  <div className={`rounded-2xl border ${step.borderColor} bg-white p-6 shadow-sm h-full`}>
                    <div className="flex items-center gap-3">
                      <div className={`rounded-xl ${step.bg} p-2.5`}>
                        <Icon className={`h-5 w-5 ${step.color}`} />
                      </div>
                      <span className={`font-mono text-xs font-bold ${step.color}`}>{step.number}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Continuous loop note */}
          <p className="mt-8 hidden lg:block text-center font-mono text-sm text-indigo-500">
            Continuous loop — agents evolve and restart automatically
          </p>

          {/* Mobile: vertical stack */}
          <div className="flex flex-col gap-4 lg:hidden">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className={`rounded-2xl border ${step.borderColor} bg-white p-6 shadow-sm`}>
                    <div className="flex items-center gap-3">
                      <div className={`rounded-xl ${step.bg} p-2.5`}>
                        <Icon className={`h-5 w-5 ${step.color}`} />
                      </div>
                      <span className={`font-mono text-xs font-bold ${step.color}`}>{step.number}</span>
                      <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{step.description}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex justify-center py-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M7 14l5 5 5-5" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              )
            })}
            {/* Loop indicator on mobile */}
            <div className="flex justify-center py-2">
              <span className="font-mono text-xs text-indigo-600 font-semibold">↻ Loop back to Recon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
