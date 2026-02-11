"use client"

import { motion } from "framer-motion"
import { Check, Minus, CircleDot } from "lucide-react"

const capabilities = [
  { feature: "Scans inside AI coding agents (MCP)", prooflayer: "yes", snyk: "no", semgrep: "no" },
  { feature: "Real-time scanning as code is written", prooflayer: "yes", snyk: "no", semgrep: "no" },
  { feature: "AI-generated code-specific rules", prooflayer: "yes", snyk: "no", semgrep: "partial" },
  { feature: "Package hallucination detection", prooflayer: "yes", snyk: "no", semgrep: "no" },
  { feature: "Prompt injection firewall", prooflayer: "yes", snyk: "no", semgrep: "no" },
  { feature: "Auto-fix with one command", prooflayer: "yes", snyk: "partial", semgrep: "partial" },
  { feature: "Works with Cursor, Claude Code, Copilot", prooflayer: "yes", snyk: "no", semgrep: "no" },
  { feature: "Free open-source core", prooflayer: "yes", snyk: "partial", semgrep: "yes" },
  { feature: "< 5 min setup", prooflayer: "yes", snyk: "no", semgrep: "no" },
  { feature: "CWE + OWASP mapped", prooflayer: "yes", snyk: "yes", semgrep: "yes" },
]

function FeatureStatus({ status }: { status: "yes" | "no" | "partial" }) {
  if (status === "yes") {
    return <Check className="h-4 w-4 text-indigo-500" />
  }
  if (status === "partial") {
    return <CircleDot className="h-4 w-4 text-amber-500" />
  }
  return <Minus className="h-4 w-4 text-gray-300" />
}

export function WhyProofLayer() {
  return (
    <section id="features" className="scroll-mt-24 px-4 py-32 sm:px-6 lg:px-8 lg:py-48">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600/80">
            Why ProofLayer
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
            Built for AI agents.
            <br />
            Not retrofitted.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-400 lg:text-2xl lg:leading-relaxed">
            How we compare to tools built for human-written code.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 overflow-x-auto"
        >
          <div className="min-w-[600px] overflow-hidden rounded-2xl border border-gray-100 bg-white">
            {/* Table header */}
            <div className="grid grid-cols-4 border-b border-gray-100 bg-gray-50/80 px-6 py-4 text-sm font-semibold text-gray-900">
              <div className="col-span-1">Capability</div>
              <div className="rounded-t-lg bg-indigo-50/40 text-center font-bold text-indigo-600">ProofLayer</div>
              <div className="text-center">Snyk</div>
              <div className="text-center">Semgrep</div>
            </div>

            {/* Table rows */}
            {capabilities.map((cap, index) => (
              <div
                key={cap.feature}
                className={`grid grid-cols-4 items-center px-6 py-3.5 text-sm transition-colors hover:bg-gray-50/80 ${
                  index < capabilities.length - 1 ? "border-b border-gray-50" : ""
                } ${index % 2 === 0 ? "" : "bg-gray-50/40"}`}
              >
                <div className="col-span-1 font-medium text-gray-700">{cap.feature}</div>
                <div className="flex justify-center bg-indigo-50/40">
                  <FeatureStatus status={cap.prooflayer} />
                </div>
                <div className="flex justify-center">
                  <FeatureStatus status={cap.snyk} />
                </div>
                <div className="flex justify-center">
                  <FeatureStatus status={cap.semgrep} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
