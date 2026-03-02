"use client"

import { motion } from "framer-motion"
import { ShieldAlert, AlertTriangle, BookOpen, ScanSearch } from "lucide-react"

const stats = [
  {
    icon: ShieldAlert,
    value: "5",
    label: "CVEs in Anthropic's own MCP servers",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    icon: AlertTriangle,
    value: "9.6",
    label: "Highest CVSS score found",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: BookOpen,
    value: "3",
    label: "OWASP frameworks mapped",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: ScanSearch,
    value: "59",
    label: "Detection rules for MCP threats",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
]

export function WhySection() {
  return (
    <section className="px-4 py-32 sm:px-6 lg:px-8 lg:py-48">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600/80">
            The Blind Spot
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
            Security tools weren&apos;t
            <br />
            built for real-time.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-500 lg:text-2xl lg:leading-relaxed">
            Scanners run after code is committed. By the time they flag a threat, the agent has already executed it.
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm"
              >
                <div className={`mx-auto flex h-9 w-9 items-center justify-center rounded-lg ${stat.bg}`}>
                  <Icon className={`h-4.5 w-4.5 ${stat.color}`} />
                </div>
                <p className={`mt-3 text-2xl font-extrabold tracking-tight ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-gray-500">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
