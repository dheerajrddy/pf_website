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
  { capability: "Finds vulnerabilities without manual scripting", values: [true, false, false, false] },
  { capability: "Catches new risks as your AI changes", values: [true, false, false, false] },
  { capability: "Adapts to your defenses automatically", values: [true, false, false, false] },
  { capability: "Covers AI-specific threats (injection, MCP, agents)", values: [true, false, true, true] },
  { capability: "Tests MCP servers and tool integrations", values: [true, false, false, false] },
  { capability: "Open-source, deploy anywhere", values: [true, false, false, false] },
  { capability: "Proves exploitability with real PoCs", values: [true, true, false, false] },
  { capability: "Deploys in under 30 seconds", values: [true, false, false, true] },
]

export function WhyProofLayer() {
  return (
    <section id="why-prooflayer" className="scroll-mt-24 bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
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
                <th className="p-4 text-left text-sm font-medium text-gray-500" />
                {columns.map((col) => (
                  <th
                    key={col.label}
                    className={`p-4 text-center text-sm font-bold ${
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
                  <td className="p-4 text-sm font-medium text-gray-700">{row.capability}</td>
                  {row.values.map((val, ci) => (
                    <td
                      key={ci}
                      className={`p-4 text-center ${
                        columns[ci].highlighted
                          ? "bg-indigo-50/30"
                          : ""
                      } ${ri === rows.length - 1 && columns[ci].highlighted ? "rounded-b-xl" : ""}`}
                    >
                      {val ? (
                        <Check className="mx-auto h-5 w-5 text-emerald-500" />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-gray-300" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
