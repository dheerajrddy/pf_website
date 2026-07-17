"use client"

import { motion } from "framer-motion"

const options = [
  { name: "Pentest PDF", value: "Point-in-time attack evidence for the tested release." },
  { name: "Vanta", value: "Continuous policy and control evidence for your security program." },
  { name: "ProofLayer", value: "Continuous adversarial evidence for your AI systems." },
]

export function EvidenceComparison() {
  return (
    <section aria-labelledby="evidence-comparison-title" className="border-y border-gray-100 bg-gray-50/60 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h2 id="evidence-comparison-title" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          Three kinds of evidence. One gap to close.
        </motion.h2>
        <div className="mt-8 grid overflow-hidden rounded-2xl border border-gray-200 bg-white md:grid-cols-3">
          {options.map((option, index) => (
            <div key={option.name} className={`p-6 ${index > 0 ? "border-t border-gray-200 md:border-l md:border-t-0" : ""} ${option.name === "ProofLayer" ? "bg-blue-50/50" : ""}`}>
              <p className={`text-sm font-bold ${option.name === "ProofLayer" ? "text-blue-700" : "text-gray-900"}`}>{option.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{option.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
