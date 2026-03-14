"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Search, Swords, BadgeCheck, Dna } from "lucide-react"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Recon Agent",
    description: "Maps your entire AI attack surface — models, MCP tools, RAG pipelines, agent chains, and data flows.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
  },
  {
    icon: Swords,
    number: "02",
    title: "Attack Agent",
    description: "Chains multi-step exploits across your AI stack. Prompt injection, tool poisoning, agent hijacking — all automated.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
  },
  {
    icon: BadgeCheck,
    number: "03",
    title: "Exploit Validation",
    description: "Proves exploitability with real proof-of-concept attacks. No false positives — every finding is verified.",
    color: "text-red-400",
    bg: "bg-red-500/10",
    borderColor: "border-red-500/30",
  },
  {
    icon: Dna,
    number: "04",
    title: "Self-Evolve",
    description: "Learns from each engagement. Mutates successful attacks, generates new variants, and adapts to your defenses.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
  },
]

function LoopArrow() {
  const ref = useRef<SVGSVGElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <svg
      ref={ref}
      className="hidden lg:block absolute -bottom-16 left-1/2 -translate-x-1/2 w-[90%] h-16"
      viewBox="0 0 800 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M 700 5 C 750 5, 780 30, 750 50 L 50 50 C 20 50, 20 30, 50 20 L 100 10"
        stroke="url(#loopGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="8 4"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
      />
      <motion.polygon
        points="95,4 105,10 95,16"
        fill="#0EA5E9"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 2.2 }}
      />
      <defs>
        <linearGradient id="loopGradient" x1="0" y1="0" x2="800" y2="0">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function DemoSection() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-slate-50 px-4 py-24 sm:px-6 lg:px-8 lg:py-32 bg-dot-pattern-light">
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
            className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-cyan-600"
          >
            04 — How It Works
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl font-extrabold tracking-tighter text-slate-900 sm:text-5xl lg:text-[56px] lg:leading-[1.1]"
          >
            Autonomous Attack Loop
          </motion.h2>
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-600"
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
                        <path d="M5 12h14M14 7l5 5-5 5" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                    <h3 className="mt-4 text-lg font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Loop-back arrow (desktop only) */}
          <LoopArrow />

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
                      <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex justify-center py-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M7 14l5 5 5-5" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              )
            })}
            {/* Loop indicator on mobile */}
            <div className="flex justify-center py-2">
              <span className="font-mono text-xs text-cyan-600 font-semibold">↻ Loop back to Recon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
