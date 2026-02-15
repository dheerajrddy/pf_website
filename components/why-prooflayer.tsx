"use client"

import { motion } from "framer-motion"
import {
  Clock,
  GitBranch,
  Eye,
  Layers,
  AlertTriangle,
  Zap,
  Workflow,
  ShieldCheck,
  Puzzle,
  Brain,
} from "lucide-react"
import { fadeUp } from "@/lib/animations"

const withoutItems = [
  {
    icon: Clock,
    label: "Post-hoc detection",
    description: "Threats found hours or days after code is written",
  },
  {
    icon: GitBranch,
    label: "CI/CD pipeline dependent",
    description: "Security only runs when code is committed and pushed",
  },
  {
    icon: Eye,
    label: "Manual review required",
    description: "Security alerts need human triage before action",
  },
  {
    icon: Layers,
    label: "Bolted-on integration",
    description: "Separate tool, separate workflow, separate context",
  },
  {
    icon: AlertTriangle,
    label: "Blind to agent behavior",
    description: "Can\u2019t see prompt injection, hallucination, or exfiltration",
  },
]

const withItems = [
  {
    icon: Zap,
    label: "Real-time interception",
    description: "Threats blocked as the agent writes code, before execution",
  },
  {
    icon: Workflow,
    label: "Inline with the agent",
    description: "Operates inside MCP, no separate pipeline needed",
  },
  {
    icon: ShieldCheck,
    label: "Automatic blocking",
    description: "Dangerous actions prevented without human intervention",
  },
  {
    icon: Puzzle,
    label: "Native integration",
    description: "Same workflow, same context, zero config overhead",
  },
  {
    icon: Brain,
    label: "Agent-aware security",
    description: "Purpose-built for prompt injection, hallucination, exfiltration",
  },
]

export function WhyProofLayer() {
  return (
    <section id="features" className="scroll-mt-24 px-4 py-32 sm:px-6 lg:px-8 lg:py-48">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600/80">
            Why ProofLayer
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
            Not a better scanner.
            <br />
            A different architecture.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-400 lg:text-2xl lg:leading-relaxed">
            ProofLayer doesn&apos;t compete with CI/CD tools. It operates inside the agent itself — intercepting threats at the source.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {/* Without ProofLayer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-gray-200 bg-gray-50/80 p-8"
          >
            <h3 className="text-lg font-bold text-gray-500">Without ProofLayer</h3>
            <div className="mt-6 space-y-5">
              {withoutItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-200/80">
                      <Icon className="h-4.5 w-4.5 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-600">{item.label}</p>
                      <p className="mt-0.5 text-sm text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* With ProofLayer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-8 ring-1 ring-indigo-100/50"
          >
            <h3 className="text-lg font-bold text-indigo-600">With ProofLayer</h3>
            <div className="mt-6 space-y-5">
              {withItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-100/80">
                      <Icon className="h-4.5 w-4.5 text-indigo-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{item.label}</p>
                      <p className="mt-0.5 text-sm text-gray-500">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
