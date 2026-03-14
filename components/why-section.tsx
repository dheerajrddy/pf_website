"use client"

import { motion } from "framer-motion"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"
import { Syringe, Wrench, Bot, Crosshair, Clock, Dna, ShieldCheck } from "lucide-react"

const threats = [
  {
    icon: Syringe,
    title: "Prompt Injection",
    description: "Attackers manipulate LLM inputs to bypass instructions and exfiltrate data.",
    badge: "OWASP #1",
  },
  {
    icon: Wrench,
    title: "MCP / Tool Poisoning",
    description: "Malicious tool responses hijack agent behavior and execute unintended actions.",
  },
  {
    icon: Bot,
    title: "AI Agent Exploits",
    description: "Autonomous agents are tricked into running harmful code or leaking secrets.",
  },
]

const solutions = [
  {
    icon: Crosshair,
    title: "Autonomous AI Attack Agents",
    description: "Deploy AI agents that think like attackers — no manual scripting required.",
  },
  {
    icon: Clock,
    title: "Continuous 24/7 Red-Teaming",
    description: "Your AI changes daily. ProofLayer tests it around the clock.",
  },
  {
    icon: Dna,
    title: "Self-Evolving Attacks",
    description: "Attack agents learn from each run and generate new exploit variants.",
  },
  {
    icon: ShieldCheck,
    title: "AI-Native Threat Coverage",
    description: "Purpose-built for prompt injection, MCP exploits, RAG poisoning, and agent hijacking.",
  },
]

export function WhySection() {
  return (
    <section id="the-gap" className="scroll-mt-24 bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
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
            The Problem
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[56px] lg:leading-[1.1]"
          >
            AI created a massive new attack surface.
            <br />
            <span className="text-gray-400">Traditional security can&apos;t keep up.</span>
          </motion.h2>
        </motion.div>

        {/* Two columns */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* Left — The Threat */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">The Threat</h3>
            <div className="space-y-4">
              {threats.map((threat, i) => {
                const Icon = threat.icon
                return (
                  <motion.div
                    key={threat.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-red-50 p-2.5">
                        <Icon className="h-5 w-5 text-red-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-semibold text-gray-900">{threat.title}</h4>
                          {threat.badge && (
                            <span className="rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-600">
                              {threat.badge}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{threat.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right — The Solution */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">The Solution</h3>
            <div className="space-y-5">
              {solutions.map((solution, i) => {
                const Icon = solution.icon
                return (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="rounded-lg bg-indigo-50 p-2.5">
                      <Icon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">{solution.title}</h4>
                      <p className="mt-1 text-sm text-gray-500">{solution.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
