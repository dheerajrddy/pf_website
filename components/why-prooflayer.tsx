"use client"

import { motion } from "framer-motion"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"

const columns = [
  { label: "Capability", highlighted: false, isLabel: true },
  { label: "ProofLayer", highlighted: true },
  { label: "Manual Pentests", highlighted: false },
  { label: "Static AI Scanners", highlighted: false },
  { label: "Legacy Automated Pentests", highlighted: false },
]

type CellValue = {
  text: string
  variant: "strong" | "good" | "weak" | "none"
}

const rows: { capability: string; detail?: string; values: CellValue[] }[] = [
  {
    capability: "Testing Frequency",
    detail: "How often vulnerabilities are discovered",
    values: [
      { text: "24/7 continuous", variant: "strong" },
      { text: "Quarterly", variant: "weak" },
      { text: "On each scan", variant: "good" },
      { text: "Scheduled runs", variant: "good" },
    ],
  },
  {
    capability: "AI Threat Coverage",
    detail: "Prompt injection, MCP poisoning, agent hijacking, RAG attacks",
    values: [
      { text: "25+ attack types", variant: "strong" },
      { text: "Depends on tester", variant: "weak" },
      { text: "Rule-based only", variant: "good" },
      { text: "Not supported", variant: "none" },
    ],
  },
  {
    capability: "MCP Server Testing",
    detail: "Security validation for Model Context Protocol integrations",
    values: [
      { text: "Full coverage", variant: "strong" },
      { text: "Not supported", variant: "none" },
      { text: "Partial", variant: "weak" },
      { text: "Not supported", variant: "none" },
    ],
  },
  {
    capability: "Attack Adaptation",
    detail: "Ability to evolve attacks based on target defenses",
    values: [
      { text: "Self-evolving AI", variant: "strong" },
      { text: "Human expertise", variant: "good" },
      { text: "Static rules", variant: "weak" },
      { text: "Fixed playbooks", variant: "weak" },
    ],
  },
  {
    capability: "Proof of Exploit",
    detail: "Verified, reproducible attack chains — not just CVE lists",
    values: [
      { text: "Full kill chain", variant: "strong" },
      { text: "Manual PoC", variant: "good" },
      { text: "Risk scores only", variant: "weak" },
      { text: "Partial validation", variant: "weak" },
    ],
  },
  {
    capability: "Time to First Finding",
    detail: "How quickly actionable results are delivered",
    values: [
      { text: "< 60 seconds", variant: "strong" },
      { text: "2-4 weeks", variant: "none" },
      { text: "Minutes", variant: "good" },
      { text: "Hours", variant: "good" },
    ],
  },
  {
    capability: "Deployment",
    detail: "How it integrates into your environment",
    values: [
      { text: "npm install, MIT", variant: "strong" },
      { text: "SOW + scheduling", variant: "none" },
      { text: "SaaS / API", variant: "good" },
      { text: "Agent install", variant: "good" },
    ],
  },
  {
    capability: "Cost at Scale",
    detail: "Economics of continuous security testing",
    values: [
      { text: "Open core + platform", variant: "strong" },
      { text: "$20K-100K/engagement", variant: "none" },
      { text: "$5K-15K/yr", variant: "good" },
      { text: "$40K-200K/yr", variant: "weak" },
    ],
  },
]

const variantStyles = {
  strong: "text-indigo-700 font-semibold bg-indigo-50/50",
  good: "text-emerald-700",
  weak: "text-amber-600",
  none: "text-gray-400",
}

export function WhyProofLayer() {
  return (
    <section id="why-prooflayer" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
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
            Why ProofLayer
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[56px] lg:leading-[1.1]"
          >
            Why security teams
            <br />
            choose ProofLayer.
          </motion.h2>
        </motion.div>

        {/* Comparison grid — card wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr>
                  <th className="px-5 py-4 text-left text-sm font-medium text-gray-500 w-[200px]" />
                  {columns.slice(1).map((col) => (
                    <th
                      key={col.label}
                      className={`px-5 py-4 text-center text-sm font-bold ${
                        col.highlighted
                          ? "bg-indigo-50 text-indigo-600 rounded-t-xl"
                          : "text-gray-500"
                      }`}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={row.capability} className="border-t border-gray-100">
                    <td className="px-5 py-4 align-top">
                      <div className="text-sm font-semibold text-gray-900">{row.capability}</div>
                      {row.detail && (
                        <div className="mt-0.5 text-xs text-gray-400 leading-snug">{row.detail}</div>
                      )}
                    </td>
                    {row.values.map((val, ci) => (
                      <td
                        key={ci}
                        className={`px-5 py-4 text-center text-sm ${
                          columns[ci + 1].highlighted
                            ? "bg-indigo-50/30"
                            : ""
                        } ${ri === rows.length - 1 && columns[ci + 1].highlighted ? "rounded-b-xl" : ""} ${variantStyles[val.variant]}`}
                      >
                        {val.text}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
