"use client"

import { motion } from "framer-motion"
import { Download, Shield, Package, Zap } from "lucide-react"

const trustSignals = [
  { icon: Download, metric: null, label: "Weekly downloads", key: "downloads" },
  { icon: Shield, metric: "359", label: "Security rules", key: "rules" },
  { icon: Package, metric: "4.3M", label: "Packages verified", key: "packages" },
  { icon: Zap, metric: "<30s", label: "Setup time", key: "setup" },
]

export function TrustBar({ downloads }: { downloads: string }) {
  return (
    <section className="bg-gray-50/30 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
            By the numbers
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {trustSignals.map((signal, index) => {
            const Icon = signal.icon
            const value = signal.key === "downloads" ? downloads : signal.metric
            return (
              <motion.div
                key={signal.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-gray-100 bg-white p-6 text-center"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
                  <Icon className="h-5 w-5 text-indigo-600" />
                </div>
                <span className="mt-4 block font-mono text-3xl font-extrabold tracking-tight text-gray-900">
                  {value}
                </span>
                <p className="mt-2 text-sm text-gray-500">{signal.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
