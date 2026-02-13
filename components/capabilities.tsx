"use client"

import { motion } from "framer-motion"
import { ShieldAlert, PackageSearch, Bot, Code2 } from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/animations"

const capabilities = [
  {
    icon: ShieldAlert,
    title: "Prompt Injection Firewall",
    description:
      "56 rules block injection attacks before they reach your agent. Pattern matching in <1ms, semantic risk scoring in <10ms.",
    proof: "OWASP LLM Top 10 coverage",
    color: "rose" as const,
  },
  {
    icon: PackageSearch,
    title: "Hallucination Detection",
    description:
      "AI agents suggest packages that don\u2019t exist. Attackers register them. We verify every name against 4.3M real packages.",
    proof: "Catches typosquats + phantom packages",
    color: "amber" as const,
  },
  {
    icon: Bot,
    title: "Agent Behavior Guardrails",
    description:
      "31 rules for autonomous agent threats: data exfiltration, credential theft, unauthorized payments, messaging abuse.",
    proof: "OpenClaw integration \u2014 5 threat categories",
    color: "violet" as const,
  },
  {
    icon: Code2,
    title: "Code Security Scanning",
    description:
      "1,801 rules with AST + taint analysis across 12 languages. CWE and OWASP mapped. The safety net under everything else.",
    proof: "Semgrep-style patterns, plus AI-specific rules",
    color: "indigo" as const,
  },
]

const colorMap = {
  rose: {
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    proofColor: "text-rose-600/70",
    border: "border-rose-100",
  },
  amber: {
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    proofColor: "text-amber-600/70",
    border: "border-amber-100",
  },
  violet: {
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    proofColor: "text-violet-600/70",
    border: "border-violet-100",
  },
  indigo: {
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    proofColor: "text-indigo-600/70",
    border: "border-indigo-100",
  },
}

export function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-24 px-4 py-32 sm:px-6 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600/80">
            What It Does
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Four layers of defense that
            <br className="hidden sm:block" />
            no other tool provides.
          </h2>
        </motion.div>

        <motion.div
          className="mt-20 grid gap-6 sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {capabilities.map((cap) => {
            const colors = colorMap[cap.color]
            const Icon = cap.icon
            return (
              <motion.div
                key={cap.title}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className={`group rounded-2xl border ${colors.border} bg-white p-8 transition-shadow hover:shadow-lg lg:p-10`}
              >
                <div className={`inline-flex rounded-xl ${colors.iconBg} p-3`}>
                  <Icon className={`h-6 w-6 ${colors.iconColor}`} />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-gray-900">
                  {cap.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-gray-500">
                  {cap.description}
                </p>
                <p className={`mt-4 text-sm font-medium ${colors.proofColor}`}>
                  {cap.proof}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
