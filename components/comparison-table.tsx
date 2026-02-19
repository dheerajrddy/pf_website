"use client"

import { motion } from "framer-motion"
import { Check, X, Minus } from "lucide-react"

type Status = "yes" | "no" | "partial"

const rows: {
  capability: string
  prooflayer: Status
  secureclaw: Status
  snyk: Status
  cisco: Status
  agentsec: Status
}[] = [
  {
    capability: "Deep code analysis (AST + taint)",
    prooflayer: "yes",
    secureclaw: "no",
    snyk: "partial",
    cisco: "partial",
    agentsec: "no",
  },
  {
    capability: "Cross-file taint tracking",
    prooflayer: "yes",
    secureclaw: "no",
    snyk: "no",
    cisco: "no",
    agentsec: "no",
  },
  {
    capability: "Package hallucination detection",
    prooflayer: "yes",
    secureclaw: "no",
    snyk: "no",
    cisco: "no",
    agentsec: "no",
  },
  {
    capability: "Prompt injection defense",
    prooflayer: "yes",
    secureclaw: "partial",
    snyk: "yes",
    cisco: "yes",
    agentsec: "partial",
  },
  {
    capability: "Auto-fix with one command",
    prooflayer: "yes",
    secureclaw: "no",
    snyk: "no",
    cisco: "no",
    agentsec: "no",
  },
  {
    capability: "Works across all AI coding agents (MCP)",
    prooflayer: "yes",
    secureclaw: "no",
    snyk: "partial",
    cisco: "no",
    agentsec: "no",
  },
  {
    capability: "OpenClaw native support",
    prooflayer: "yes",
    secureclaw: "yes",
    snyk: "no",
    cisco: "partial",
    agentsec: "no",
  },
  {
    capability: "Skill & plugin security scanning",
    prooflayer: "yes",
    secureclaw: "no",
    snyk: "no",
    cisco: "no",
    agentsec: "no",
  },
  {
    capability: "Real-time monitoring",
    prooflayer: "yes",
    secureclaw: "no",
    snyk: "no",
    cisco: "no",
    agentsec: "no",
  },
  {
    capability: "OWASP / MITRE mapping",
    prooflayer: "yes",
    secureclaw: "yes",
    snyk: "partial",
    cisco: "partial",
    agentsec: "yes",
  },
  {
    capability: "Free and open source",
    prooflayer: "yes",
    secureclaw: "yes",
    snyk: "no",
    cisco: "no",
    agentsec: "yes",
  },
]

function StatusIcon({ status }: { status: Status }) {
  if (status === "yes")
    return <Check className="h-5 w-5 text-indigo-500" />
  if (status === "no")
    return <X className="h-5 w-5 text-gray-300" />
  return <Minus className="h-5 w-5 text-amber-500" />
}

function StatusPill({ status, label }: { status: Status; label: string }) {
  const styles = {
    yes: "bg-indigo-50 text-indigo-700 border-indigo-200",
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
      <div className="mx-auto max-w-6xl">
        {/* Header */}
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
            <span className="text-gradient">Not&nbsp;retrofitted.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-400 lg:text-2xl lg:leading-relaxed">
            See how ProofLayer compares to the leading AI agent security tools.
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
          <div className="grid grid-cols-[1fr_100px_100px_100px_100px_100px] border-b border-gray-200 bg-gray-50/80">
            <div className="px-6 py-4 text-sm font-semibold text-gray-900">
              Capability
            </div>
            <div className="px-2 py-4 text-center text-sm font-bold text-indigo-600">
              ProofLayer
            </div>
            <div className="px-2 py-4 text-center text-xs font-semibold text-gray-500">
              SecureClaw
            </div>
            <div className="px-2 py-4 text-center text-xs font-semibold text-gray-500">
              Snyk
            </div>
            <div className="px-2 py-4 text-center text-xs font-semibold text-gray-500">
              Cisco
            </div>
            <div className="px-2 py-4 text-center text-xs font-semibold text-gray-500">
              AgentSec
            </div>
          </div>

          {/* Table rows */}
          {rows.map((row, i) => (
            <div
              key={row.capability}
              className={`grid grid-cols-[1fr_100px_100px_100px_100px_100px] border-b border-gray-100 last:border-b-0 ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50/40"
              }`}
            >
              <div className="px-6 py-3.5 text-sm text-gray-700">
                {row.capability}
              </div>
              <div className="flex items-center justify-center bg-indigo-50/30 px-2 py-3.5">
                <StatusIcon status={row.prooflayer} />
              </div>
              <div className="flex items-center justify-center px-2 py-3.5">
                <StatusIcon status={row.secureclaw} />
              </div>
              <div className="flex items-center justify-center px-2 py-3.5">
                <StatusIcon status={row.snyk} />
              </div>
              <div className="flex items-center justify-center px-2 py-3.5">
                <StatusIcon status={row.cisco} />
              </div>
              <div className="flex items-center justify-center px-2 py-3.5">
                <StatusIcon status={row.agentsec} />
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
                <StatusPill status={row.prooflayer} label="ProofLayer" />
                <StatusPill status={row.secureclaw} label="SecureClaw" />
                <StatusPill status={row.snyk} label="Snyk" />
                <StatusPill status={row.cisco} label="Cisco" />
                <StatusPill status={row.agentsec} label="AgentSec" />
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
          className="mt-12 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-8 text-center lg:mt-16"
        >
          <p className="text-lg leading-relaxed text-gray-600 lg:text-xl">
            The only tool that combines{" "}
            <span className="font-semibold text-gray-700">deep code analysis</span>,{" "}
            <span className="font-semibold text-gray-700">hallucination detection</span>,{" "}
            <span className="font-semibold text-gray-700">prompt injection defense</span>,{" "}
            <span className="font-semibold text-gray-700">auto-fix</span>, and works across every AI coding agent
            <br className="hidden sm:block" />
            — from{" "}
            <span className="font-semibold text-indigo-600">Claude Code</span>{" "}
            to{" "}
            <span className="font-semibold text-indigo-600">OpenClaw</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
