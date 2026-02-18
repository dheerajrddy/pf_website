"use client"

import { motion } from "framer-motion"
import { Check, X, Minus } from "lucide-react"

type Status = "yes" | "no" | "partial"

const rows: { capability: string; clawproof: Status; secureclaw: Status }[] = [
  {
    capability: "Skill code analysis (AST + taint tracking)",
    clawproof: "yes",
    secureclaw: "no",
  },
  {
    capability: "Gateway / config security audit",
    clawproof: "yes",
    secureclaw: "yes",
  },
  {
    capability: "Prompt injection detection",
    clawproof: "yes",
    secureclaw: "yes",
  },
  {
    capability: "Package hallucination prevention",
    clawproof: "yes",
    secureclaw: "no",
  },
  {
    capability: "Auto-fix vulnerabilities",
    clawproof: "yes",
    secureclaw: "no",
  },
  {
    capability: "1,700+ security rules",
    clawproof: "yes",
    secureclaw: "no",
  },
  {
    capability: "CWE + OWASP ASI mapping",
    clawproof: "yes",
    secureclaw: "partial",
  },
  {
    capability: "False positive rate < 3%",
    clawproof: "yes",
    secureclaw: "partial",
  },
  {
    capability: "Open source core",
    clawproof: "yes",
    secureclaw: "yes",
  },
  {
    capability: "OpenClaw plugin",
    clawproof: "yes",
    secureclaw: "yes",
  },
  {
    capability: "Behavioral security skill",
    clawproof: "yes",
    secureclaw: "no",
  },
  {
    capability: "CLI + MCP server fallback",
    clawproof: "yes",
    secureclaw: "no",
  },
]

function StatusIcon({ status }: { status: Status }) {
  if (status === "yes")
    return <Check className="h-5 w-5 text-violet-500" />
  if (status === "no")
    return <X className="h-5 w-5 text-gray-300" />
  return <Minus className="h-5 w-5 text-amber-500" />
}

function StatusPill({ status, label }: { status: Status; label: string }) {
  const styles = {
    yes: "bg-violet-50 text-violet-700 border-violet-200",
    no: "bg-gray-50 text-gray-400 border-gray-200",
    partial: "bg-amber-50 text-amber-700 border-amber-200",
  }
  const text = { yes: "Yes", no: "No", partial: "Partial" }
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-500">{label}</span>
      <span
        className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${styles[status]}`}
      >
        <StatusIcon status={status} />
        {text[status]}
      </span>
    </div>
  )
}

export function ComparisonTable() {
  return (
    <section className="px-4 py-32 sm:px-6 lg:px-8 lg:py-48">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600/80">
            ClawProof vs SecureClaw
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
            Deep code analysis.
            <br />
            Not just config&nbsp;checks.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-400 lg:text-2xl lg:leading-relaxed">
            SecureClaw by Adversa AI checks your gateway configuration. ClawProof
            analyzes the actual code your skills execute.
          </p>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-20 hidden overflow-hidden rounded-2xl border border-gray-200 md:block lg:mt-24"
        >
          {/* Table header */}
          <div className="grid grid-cols-[1fr_140px_140px] border-b border-gray-200 bg-gray-50/80">
            <div className="px-6 py-4 text-sm font-semibold text-gray-900">
              Capability
            </div>
            <div className="px-4 py-4 text-center text-sm font-semibold text-violet-700">
              ClawProof
            </div>
            <div className="px-4 py-4 text-center text-sm font-semibold text-gray-500">
              SecureClaw
            </div>
          </div>

          {/* Table rows */}
          {rows.map((row, i) => (
            <div
              key={row.capability}
              className={`grid grid-cols-[1fr_140px_140px] border-b border-gray-100 last:border-b-0 ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50/40"
              }`}
            >
              <div className="px-6 py-3.5 text-sm text-gray-700">
                {row.capability}
              </div>
              <div className="flex items-center justify-center bg-violet-50/30 px-4 py-3.5">
                <StatusIcon status={row.clawproof} />
              </div>
              <div className="flex items-center justify-center px-4 py-3.5">
                <StatusIcon status={row.secureclaw} />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mobile cards */}
        <div className="mt-16 space-y-3 md:hidden">
          {rows.map((row, i) => (
            <motion.div
              key={row.capability}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="rounded-xl border border-gray-100 bg-white p-4"
            >
              <p className="mb-3 text-sm font-medium text-gray-900">
                {row.capability}
              </p>
              <div className="space-y-2">
                <StatusPill status={row.clawproof} label="ClawProof" />
                <StatusPill status={row.secureclaw} label="SecureClaw" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 rounded-2xl border border-violet-100 bg-violet-50/60 p-8 text-center lg:mt-16"
        >
          <p className="text-lg leading-relaxed text-gray-600 lg:text-xl">
            SecureClaw checks if your gateway is configured correctly.
            <br className="hidden sm:block" />
            ClawProof reads every line of code your skills execute — using the same{" "}
            <span className="font-semibold text-violet-600">
              AST + taint analysis engine
            </span>{" "}
            trusted by 3,000+ developers.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
