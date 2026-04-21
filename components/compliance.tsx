"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Target, FileCheck } from "lucide-react"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"

const frameworks = [
  {
    icon: ShieldCheck,
    name: "OWASP LLM Top 10",
    pitch: "All 10 categories mapped.",
    detail: "LLM01 Prompt Injection through LLM10 Model Theft — every finding auto-tagged, every campaign fills the coverage matrix.",
  },
  {
    icon: Target,
    name: "MITRE ATLAS",
    pitch: "Technique-level attribution.",
    detail: "AML.T0051 (LLM prompt injection), AML.T0054 (LLM jailbreak), AML.T0024 (exfiltration via LLM), plus CWE cross-references.",
  },
  {
    icon: FileCheck,
    name: "NIST AI RMF",
    pitch: "Risk-function alignment.",
    detail: "Findings mapped to Govern, Map, Measure, and Manage functions — ready for your AI risk register.",
  },
]

export function Compliance() {
  return (
    <section id="compliance" className="scroll-mt-24 bg-gray-50/40 bg-dot-pattern px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
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
            Compliance & Frameworks
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[56px] lg:leading-[1.1]"
          >
            Board-ready reporting.
            <br />
            <span className="text-gradient">Every campaign.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-600"
          >
            Every finding is auto-tagged to the frameworks your auditors, procurement teams, and boards already speak. One click generates the compliance matrix.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {frameworks.map((fw, i) => {
            const Icon = fw.icon
            return (
              <motion.div
                key={fw.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="rounded-xl bg-emerald-50 p-2.5 w-fit">
                  <Icon className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-900">{fw.name}</h3>
                <p className="mt-2 text-sm font-semibold text-blue-600">{fw.pitch}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{fw.detail}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center font-mono text-sm text-gray-500"
        >
          Every finding auto-tagged. Every campaign generates a compliance matrix. Export as PDF.
        </motion.p>
      </div>
    </section>
  )
}
