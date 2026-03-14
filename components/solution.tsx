"use client"

import { motion } from "framer-motion"
import { Brain, RefreshCw, Dna, Shield } from "lucide-react"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"

const pillars = [
  {
    icon: Brain,
    title: "Autonomous AI Attack Agents",
    description:
      "AI-powered red-team agents that think like attackers. They autonomously discover, chain, and exploit vulnerabilities in your AI systems — no human scripting required.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Red-Teaming",
    description:
      "Not a one-time pentest. ProofLayer runs 24/7, continuously probing your AI for new weaknesses as your models, tools, and data change.",
  },
  {
    icon: Dna,
    title: "Self-Evolving Attacks",
    description:
      "Attack agents learn from each engagement. They mutate successful exploits, generate new variants, and adapt to your defenses — staying ahead of emerging threats.",
  },
  {
    icon: Shield,
    title: "AI-Native Threat Coverage",
    description:
      "Purpose-built for AI attack vectors: prompt injection, MCP tool poisoning, RAG contamination, agent hijacking, and more. Not retrofitted from traditional AppSec.",
  },
]

export function Solution() {
  return (
    <section className="bg-[#0F172A] bg-dot-pattern px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
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
            className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-cyan-400"
          >
            03 — The Solution
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl font-extrabold tracking-tighter text-white sm:text-5xl lg:text-[56px] lg:leading-[1.1]"
          >
            Continuous, self-evolving
            <br />
            red-teaming for AI.
          </motion.h2>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-cyan-500/20 bg-slate-800/60 p-8 glow-border"
              >
                <div className="rounded-xl bg-cyan-500/10 p-3 w-fit">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{pillar.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
