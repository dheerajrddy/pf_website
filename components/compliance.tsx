"use client"

import { motion } from "framer-motion"
import {
  BarChart3,
  BookOpen,
  ClipboardCheck,
  ClipboardList,
  Cloud,
  FileCheck,
  FileText,
  Presentation,
  ShieldCheck,
  Target,
} from "lucide-react"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"

const tracks = [
  {
    icon: Cloud,
    name: "SOC 2 Readiness",
    pitch: "Cloud and policy evidence for the audit path.",
    detail:
      "Automated evidence collection across AWS, Azure, and GCP, Trust Services Criteria gap analysis, policy review, remediation roadmap, and a CPA-ready readiness packet.",
  },
  {
    icon: ClipboardCheck,
    name: "AI Compliance Evidence Package",
    pitch: "Governance artifacts for production AI systems.",
    detail:
      "Model inventory, AI risk register, governance documentation, and customer-facing transparency artifacts mapped to NIST AI RMF, EU AI Act, and ISO/IEC 42001.",
  },
  {
    icon: ShieldCheck,
    name: "AI Red-Team Assessment",
    pitch: "Adversarial findings that become audit evidence.",
    detail:
      "Production agent workflows tested with established open-source tooling and ProofLayer's detection engine, with exploit scenarios mapped to OWASP LLM Top 10 and MITRE ATLAS.",
  },
]

const artifacts = [
  { icon: ClipboardList, label: "Model inventory" },
  { icon: BarChart3, label: "AI risk register" },
  { icon: BookOpen, label: "Governance policies" },
  { icon: FileText, label: "Transparency docs" },
  { icon: Target, label: "Red-team findings" },
  { icon: Presentation, label: "Executive briefing" },
]

const frameworks = [
  {
    icon: ShieldCheck,
    name: "SOC 2",
    pitch: "Readiness support.",
    detail: "Evidence organized for Security, Availability, Processing Integrity, Confidentiality, and Privacy scoping.",
  },
  {
    icon: FileCheck,
    name: "NIST AI RMF",
    pitch: "Risk-function alignment.",
    detail: "Govern, Map, Measure, and Manage outputs for risk registers, control narratives, and executive review.",
  },
  {
    icon: ClipboardCheck,
    name: "EU AI Act",
    pitch: "High-risk evidence mapping.",
    detail: "Artifacts aligned to classification, transparency, human oversight, accuracy, robustness, and cybersecurity obligations.",
  },
  {
    icon: BookOpen,
    name: "ISO/IEC 42001",
    pitch: "AI management system support.",
    detail: "Governance, policy, risk, and continual-improvement evidence for responsible AI management programs.",
  },
  {
    icon: Target,
    name: "OWASP LLM Top 10",
    pitch: "All 10 categories mapped.",
    detail: "LLM01 Prompt Injection through LLM10 Model Theft — every finding auto-tagged for the coverage matrix.",
  },
  {
    icon: FileCheck,
    name: "MITRE ATLAS",
    pitch: "Technique-level attribution.",
    detail: "AML.T0051 (LLM prompt injection), AML.T0054 (LLM jailbreak), AML.T0024 (exfiltration via LLM), plus CWE cross-references.",
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
            AI Compliance Evidence
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[56px] lg:leading-[1.1]"
          >
            Turn AI security testing{" "}
            <br />
            <span className="text-gradient">into audit-ready evidence.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-6 max-w-3xl text-lg text-gray-600"
          >
            ProofLayer now combines continuous AI red-team evidence with cloud and policy evidence collection for SOC 2 readiness, NIST AI RMF, EU AI Act, ISO/IEC 42001, OWASP, and MITRE reporting.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {tracks.map((track, i) => {
            const Icon = track.icon
            return (
              <motion.div
                key={track.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="w-fit rounded-xl bg-blue-50 p-2.5">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-900">{track.name}</h3>
                <p className="mt-2 text-sm font-semibold text-blue-600">{track.pitch}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{track.detail}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-blue-600/80">
                Evidence artifacts
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Package the material security, product, and governance teams already need to answer buyers, auditors, and boards.
              </p>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3">
              {artifacts.map((artifact) => {
                const Icon = artifact.icon
                return (
                  <div
                    key={artifact.label}
                    className="flex min-h-12 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-gray-500" />
                    <span className="text-sm font-medium leading-snug text-gray-700">{artifact.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>

        <div className="mt-16">
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
              Mapped Frameworks
            </motion.span>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-gray-900"
            >
              One evidence trail, mapped to the frameworks procurement and audit teams already request.
            </motion.p>
          </motion.div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {frameworks.map((fw, i) => {
              const Icon = fw.icon
              return (
                <motion.div
                  key={fw.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-emerald-50 p-2">
                      <Icon className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900">{fw.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-blue-600">{fw.pitch}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{fw.detail}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center font-mono text-sm text-gray-500"
        >
          Evidence mapping and readiness support for your audit team, CPA firm, and customer security reviews.
        </motion.p>
      </div>
    </section>
  )
}
