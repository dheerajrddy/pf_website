"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ShieldAlert,
  PackageSearch,
  Lock,
  Mail,
  Send,
  Clock,
  AlertTriangle,
  Shield,
  ShieldCheck,
  Bell,
  Package,
  Download,
  Search,
  CheckCircle,
  FileText,
  Upload,
  UserCheck,
} from "lucide-react"
import { fadeUp } from "@/lib/animations"
import type { LucideIcon } from "lucide-react"

const tabs = [
  { id: "injection", label: "Prompt Injection", icon: ShieldAlert },
  { id: "hallucination", label: "Hallucinated Package", icon: PackageSearch },
  { id: "exfiltration", label: "Data Exfiltration", icon: Lock },
]

interface TimelineStep {
  icon: LucideIcon
  label: string
  description: string
  status: "neutral" | "danger" | "warning" | "success"
}

interface Scenario {
  traditional: TimelineStep[]
  prooflayer: TimelineStep[]
}

const scenarios: Scenario[] = [
  // Prompt Injection
  {
    traditional: [
      { icon: Mail, label: "Agent processes email", description: "Email contains hidden prompt injection in HTML comment", status: "neutral" },
      { icon: Send, label: "Malicious action executes", description: "Agent forwards sensitive emails to attacker-controlled address", status: "danger" },
      { icon: Clock, label: "Scanner runs post-commit", description: "CI/CD pipeline flags suspicious code hours later", status: "warning" },
      { icon: AlertTriangle, label: "Damage already done", description: "Sensitive data exfiltrated before detection", status: "danger" },
    ],
    prooflayer: [
      { icon: Mail, label: "Agent processes email", description: "Email contains hidden prompt injection in HTML comment", status: "neutral" },
      { icon: Shield, label: "ProofLayer intercepts", description: "Injection pattern detected inline before execution", status: "success" },
      { icon: ShieldCheck, label: "Action blocked", description: "Email forwarding to external domain prevented", status: "success" },
      { icon: Bell, label: "User notified", description: "Alert with threat details sent to operator", status: "success" },
    ],
  },
  // Hallucinated Package
  {
    traditional: [
      { icon: Package, label: "Agent suggests package", description: "AI recommends installing 'react-auth-provider-v2'", status: "neutral" },
      { icon: Download, label: "Package installed", description: "Nonexistent package name claimed by attacker on npm", status: "danger" },
      { icon: Search, label: "Vuln scan runs later", description: "Scheduled security audit flags malicious dependency", status: "warning" },
      { icon: AlertTriangle, label: "Supply chain compromised", description: "Malicious code already running in production", status: "danger" },
    ],
    prooflayer: [
      { icon: Package, label: "Agent suggests package", description: "AI recommends installing 'react-auth-provider-v2'", status: "neutral" },
      { icon: Search, label: "Registry check", description: "Package verified against npm registry in real-time", status: "success" },
      { icon: ShieldCheck, label: "Installation blocked", description: "Hallucinated package flagged and prevented", status: "success" },
      { icon: CheckCircle, label: "Safe alternative suggested", description: "Verified package 'react-oidc-context' recommended", status: "success" },
    ],
  },
  // Data Exfiltration
  {
    traditional: [
      { icon: FileText, label: "Agent receives task", description: "User asks agent to export contacts to CSV", status: "neutral" },
      { icon: Upload, label: "Data exported externally", description: "Agent emails full contact list to external address", status: "danger" },
      { icon: Clock, label: "Audit log reviewed", description: "Weekly security review discovers unauthorized export", status: "warning" },
      { icon: AlertTriangle, label: "Data breach confirmed", description: "Personal data exposed, compliance violation triggered", status: "danger" },
    ],
    prooflayer: [
      { icon: FileText, label: "Agent receives task", description: "User asks agent to export contacts to CSV", status: "neutral" },
      { icon: Shield, label: "Pattern detected", description: "Bulk data export to external domain flagged instantly", status: "success" },
      { icon: UserCheck, label: "Requires approval", description: "Action paused — user confirmation requested", status: "success" },
      { icon: ShieldCheck, label: "Data stays safe", description: "Export blocked until explicit user authorization", status: "success" },
    ],
  },
]

const statusColors = {
  neutral: "bg-gray-300",
  danger: "bg-red-500",
  warning: "bg-amber-500",
  success: "bg-indigo-500",
}

const statusBg = {
  neutral: "bg-gray-50",
  danger: "bg-red-50/60",
  warning: "bg-amber-50/60",
  success: "bg-indigo-50/60",
}

function TimelineColumn({
  steps,
  side,
  scenarioKey,
}: {
  steps: TimelineStep[]
  side: "traditional" | "prooflayer"
  scenarioKey: string
}) {
  const isTraditional = side === "traditional"

  return (
    <div
      className={`rounded-2xl border p-6 sm:p-8 ${
        isTraditional
          ? "border-gray-200 bg-gray-50/80"
          : "border-indigo-100 bg-indigo-50/40 ring-1 ring-indigo-100/50"
      }`}
    >
      <h3
        className={`text-lg font-bold ${
          isTraditional ? "text-gray-500" : "text-indigo-600"
        }`}
      >
        {isTraditional ? "Traditional Security" : "ProofLayer"}
      </h3>

      <div className="mt-6 space-y-0">
        <AnimatePresence mode="wait">
          <motion.div key={scenarioKey} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={`${scenarioKey}-${index}`}
                  initial={{ opacity: 0, x: isTraditional ? -12 : 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="relative flex gap-4"
                >
                  {/* Timeline line + dot */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${statusBg[step.status]}`}
                    >
                      <div className={`h-2.5 w-2.5 rounded-full ${statusColors[step.status]}`} />
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-0.5 grow ${isTraditional ? "bg-gray-200" : "bg-indigo-200/60"}`} />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`pb-6 ${index === steps.length - 1 ? "pb-0" : ""}`}>
                    <div className="flex items-center gap-2">
                      <Icon
                        className={`h-4 w-4 ${
                          step.status === "danger"
                            ? "text-red-500"
                            : step.status === "warning"
                            ? "text-amber-500"
                            : step.status === "success"
                            ? "text-indigo-500"
                            : "text-gray-400"
                        }`}
                      />
                      <span className="text-sm font-semibold text-gray-900">{step.label}</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export function DemoSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const nextTab = useCallback(() => {
    setActiveTab((prev) => (prev + 1) % tabs.length)
  }, [])

  useEffect(() => {
    if (isHovering) return
    const interval = setInterval(nextTab, 8000)
    return () => clearInterval(interval)
  }, [isHovering, nextTab])

  const scenario = scenarios[activeTab]

  return (
    <section id="demo" className="scroll-mt-24 px-4 py-32 sm:px-6 lg:px-8 lg:py-48">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600/80">
            How It Works
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
            Same threat.
            <br className="hidden sm:block" />
            Different&nbsp;timing.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-400 lg:text-2xl lg:leading-relaxed">
            See how ProofLayer intercepts threats that traditional tools miss until it&apos;s too late.
          </p>
        </motion.div>

        {/* Scenario tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 flex justify-center"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="inline-flex rounded-xl border border-gray-200 bg-white p-1.5 shadow-sm">
            {tabs.map((tab, index) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                    activeTab === index
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Split-screen timeline */}
        <div
          className="mt-10 grid gap-6 lg:grid-cols-2"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <TimelineColumn
            steps={scenario.traditional}
            side="traditional"
            scenarioKey={tabs[activeTab].id}
          />
          <TimelineColumn
            steps={scenario.prooflayer}
            side="prooflayer"
            scenarioKey={tabs[activeTab].id}
          />
        </div>

        {/* Progress dots */}
        <div className="mt-6 flex justify-center gap-2">
          {tabs.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className="relative h-1.5 overflow-hidden rounded-full bg-gray-200"
              style={{ width: activeTab === index ? 32 : 6 }}
            >
              {activeTab === index && !isHovering && (
                <motion.div
                  key={`progress-${activeTab}`}
                  className="absolute inset-0 rounded-full bg-indigo-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 8, ease: "linear" }}
                  style={{ transformOrigin: "left" }}
                />
              )}
              {activeTab === index && isHovering && (
                <div className="absolute inset-0 rounded-full bg-indigo-600" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
