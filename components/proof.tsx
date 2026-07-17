"use client"

import { motion } from "framer-motion"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"

const metrics = [
  {
    value: "976",
    unit: "verified exploits",
    detail:
      "Every one reproducible — validated against multi-agent orchestrators and LangChain agents.",
  },
  {
    value: "60%",
    unit: "attack success rate",
    detail:
      "On memory-poisoning attacks — the hardest class of agent exploits, and the one most scanners don't test at all.",
  },
  {
    value: "52.5%",
    unit: "break rate on hardened systems",
    detail:
      "Even against multi-agent stacks shipping with input filtering and content guardrails enabled.",
  },
  {
    value: "+250%",
    unit: "lift from self-improvement",
    detail:
      "Template attacks succeed 21% of the time. Our RL-trained experts succeed 74%.",
  },
]

export function Proof() {
  return (
    <section id="proof" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.span
            variants={fadeIn}
            className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-blue-600/80"
          >
            Detect
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[56px] lg:leading-[1.1]"
          >
            Every finding ships
            <br />
            <span className="text-gradient">with replayable proof.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-600"
          >
            ProofLayer counts observable breaches, not model guesses. Your team gets the prompt, response, tool trace, and detection signal.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.unit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
            >
              <p className="font-mono text-5xl font-extrabold tracking-tight text-gray-900">
                {m.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-blue-600">{m.unit}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{m.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-12 max-w-4xl rounded-2xl border border-blue-100 bg-blue-50/40 p-8"
        >
          <p className="text-sm leading-relaxed text-gray-700">
            <span className="font-semibold text-gray-900">How findings are verified:</span>{" "}
            We attack your system the way a real adversary would — sending inputs, observing outputs. A finding only counts as a breach when we watch it happen: sensitive content in a response, an unauthorized tool call, a backdoor instruction landing in memory, or data being exfiltrated. Every breach ships with the exact prompt, response, and detection signal, so your team can replay it end-to-end.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
