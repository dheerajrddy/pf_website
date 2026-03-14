"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"

const columns = [
  { label: "ProofLayer", highlighted: true },
  { label: "Traditional Pentest", highlighted: false },
  { label: "Acquired / Vendor-Locked", highlighted: false },
  { label: "Static AI Scanners", highlighted: false },
]

const rows = [
  { capability: "Autonomous AI attack agents", values: [true, false, false, false] },
  { capability: "Continuous 24/7 red-teaming", values: [true, false, false, false] },
  { capability: "Self-evolving attack mutations", values: [true, false, false, false] },
  { capability: "AI-native threat coverage", values: [true, false, true, true] },
  { capability: "MCP / tool poisoning detection", values: [true, false, false, false] },
  { capability: "Open-source & vendor-independent", values: [true, false, false, false] },
  { capability: "Proof-of-exploit generation", values: [true, true, false, false] },
  { capability: "Sub-30s setup, no config", values: [true, false, false, true] },
]

export function WhyProofLayer() {
  return (
    <section id="why-prooflayer" className="scroll-mt-24 bg-[#0F172A] bg-dot-pattern px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
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
            05 — Why ProofLayer
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl font-extrabold tracking-tighter text-white sm:text-5xl lg:text-[56px] lg:leading-[1.1]"
          >
            The only independent, autonomous
            <br />
            AI red-teaming platform.
          </motion.h2>
        </motion.div>

        {/* Comparison grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 overflow-x-auto"
        >
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left text-sm font-medium text-slate-500" />
                {columns.map((col) => (
                  <th
                    key={col.label}
                    className={`p-4 text-center text-sm font-bold ${
                      col.highlighted
                        ? "bg-cyan-500/10 text-cyan-400 rounded-t-xl"
                        : "text-slate-500"
                    }`}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={row.capability} className="border-t border-slate-800">
                  <td className="p-4 text-sm font-medium text-slate-300">{row.capability}</td>
                  {row.values.map((val, ci) => (
                    <td
                      key={ci}
                      className={`p-4 text-center ${
                        columns[ci].highlighted
                          ? "bg-cyan-500/5"
                          : ""
                      } ${ri === rows.length - 1 && columns[ci].highlighted ? "rounded-b-xl" : ""}`}
                    >
                      {val ? (
                        <Check className="mx-auto h-5 w-5 text-emerald-400" />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-slate-600" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center text-sm text-slate-500 max-w-2xl mx-auto"
        >
          The leading open-source AI security tools have been acquired by major platform vendors — losing their independence. ProofLayer is the only vendor-neutral, autonomous red-teaming platform for AI.
        </motion.p>
      </div>
    </section>
  )
}
