"use client"

import { motion } from "framer-motion"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"

const offenseStats = [
  { value: "27s", label: "Average breakout time for AI-powered attacks" },
  { value: "$1", label: "Cost to weaponize a CVE exploit in 10 minutes" },
  { value: "89%", label: "Surge in AI-driven cyber intrusions" },
  { value: "80-90%", label: "AI-generated phishing success rate" },
  { value: "5 docs", label: "Enough poisoned documents for 90% RAG injection success" },
]

const defenseStats = [
  { value: "Weeks", label: "Annual pentests take weeks to schedule and execute" },
  { value: "Manual", label: "Red teams still rely on manual test creation" },
  { value: "<30%", label: "Of AI-specific threats caught by traditional tools" },
  { value: "43%", label: "MCP servers have injection vulnerabilities" },
  { value: "75%", label: "Of security reviews are still manual processes" },
]

const breachCases = [
  {
    stat: "1M+",
    name: "EchoLeak",
    description: "Conversational AI leaked over 1 million user records via prompt injection in a customer support bot.",
    accent: "border-l-red-500",
  },
  {
    stat: "5 CVEs",
    name: "OpenClaw MCP Vulns",
    description: "Critical vulnerabilities found in official MCP servers — CVSS scores up to 9.6. Remote code execution possible.",
    accent: "border-l-amber-500",
  },
  {
    stat: "$10M+",
    name: "Devin AI Incident",
    description: "Autonomous coding agent executed malicious code from a poisoned dependency, exposing proprietary source code.",
    accent: "border-l-red-500",
  },
  {
    stat: "APT",
    name: "State-Sponsored AI Attacks",
    description: "Nation-state actors using AI to generate polymorphic exploits, evading traditional detection at scale.",
    accent: "border-l-amber-500",
  },
]

export function WhySection() {
  return (
    <section id="product" className="scroll-mt-24 bg-[#0F172A] bg-dot-pattern px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
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
            className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-cyan-400"
          >
            01 — The Gap
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl font-extrabold tracking-tighter text-white sm:text-5xl lg:text-[56px] lg:leading-[1.1]"
          >
            AI proliferates at light speed.
            <br />
            <span className="text-slate-500">Security is still crawling.</span>
          </motion.h2>
        </motion.div>

        {/* Offense vs Defense comparison */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-2">
          {/* Offense column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8"
          >
            <h3 className="text-lg font-bold text-red-400">Offense (Attackers)</h3>
            <div className="mt-6 space-y-5">
              {offenseStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <span className="shrink-0 rounded-lg bg-red-500/10 px-3 py-1.5 font-mono text-sm font-bold text-red-400">
                    {stat.value}
                  </span>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Defense column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-slate-700 bg-slate-800/50 p-8"
          >
            <h3 className="text-lg font-bold text-slate-500">Defense (Current State)</h3>
            <div className="mt-6 space-y-5">
              {defenseStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <span className="shrink-0 rounded-lg bg-slate-700/50 px-3 py-1.5 font-mono text-sm font-bold text-slate-400">
                    {stat.value}
                  </span>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Breach case studies */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2">
          {breachCases.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`rounded-xl border-l-4 ${c.accent} border border-slate-700/50 bg-slate-800/60 p-6`}
            >
              <p className="text-3xl font-extrabold tracking-tight text-white">{c.stat}</p>
              <p className="mt-2 text-base font-semibold text-slate-300">{c.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{c.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
