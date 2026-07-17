"use client"

import { motion } from "framer-motion"
import { ArrowRight, Crosshair, FileCheck2, ScanSearch } from "lucide-react"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"

const loop = [
  {
    step: "01",
    label: "Attack",
    icon: Crosshair,
    title: "Run autonomous swarm campaigns.",
    body: "NEXUS campaigns move through recon, breach, escalation, exploitation, and persistence against LLMs, agents, and MCP servers.",
    detail: "Prompt injection · Tool abuse · RAG poisoning",
  },
  {
    step: "02",
    label: "Detect",
    icon: ScanSearch,
    title: "Verify the breach, not a hunch.",
    body: "Every finding includes the exact prompt, response, tool trace, detection signal, severity, and affected asset.",
    detail: "Replay traces · Findings triage · Posture score",
  },
  {
    step: "03",
    label: "Prove",
    icon: FileCheck2,
    title: "Package the evidence.",
    body: "Generate board and auditor packets mapped to SOC 2, NIST AI RMF, EU AI Act, and ISO/IEC 42001.",
    detail: "Control mappings · Executive summary · Remediation",
  },
]

export function HowTheSwarmWorks() {
  return (
    <section id="platform" className="scroll-mt-24 bg-gray-50/40 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.span variants={fadeIn} className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-blue-600/80">
            The ProofLayer loop
          </motion.span>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.6 }} className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Attack. Detect. Prove.
            <br />
            <span className="text-gradient">Then run it again.</span>
          </motion.h2>
          <motion.p variants={fadeIn} transition={{ duration: 0.6 }} className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Continuous attacks create current evidence. New models, tools, and agent workflows enter the same loop as you ship them.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
          {loop.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="contents">
                <motion.article
                  id={item.label === "Attack" ? "red-team" : item.label === "Prove" ? "evidence" : undefined}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-blue-50 p-3"><Icon className="h-6 w-6 text-blue-600" /></div>
                    <span className="font-mono text-xs font-semibold text-gray-400">{item.step}</span>
                  </div>
                  <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">{item.label}</p>
                  <h3 className="mt-3 text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.body}</p>
                  <p className="mt-6 border-t border-gray-100 pt-5 font-mono text-xs leading-relaxed text-gray-500">{item.detail}</p>
                </motion.article>
                {index < loop.length - 1 && (
                  <div className="flex items-center justify-center py-1 text-blue-300 lg:px-1 lg:py-0" aria-hidden="true">
                    <ArrowRight className="h-6 w-6 rotate-90 lg:rotate-0" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-10 text-center text-sm font-medium text-gray-600">
          The result is adversarial evidence that stays current after every release.
        </motion.p>
      </div>
    </section>
  )
}
