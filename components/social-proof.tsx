"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import type { NpmStats } from "@/lib/npm-stats"

function AnimatedNumber({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1500
    const steps = 40
    const increment = value / steps
    let current = 0
    let step = 0
    const timer = setInterval(() => {
      step++
      current = Math.min(Math.round(increment * step), value)
      setDisplay(current)
      if (step >= steps) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  )
}

interface SocialProofProps {
  stats?: NpmStats
}

const metrics = [
  { label: "npm Downloads", key: "downloads" as const },
  { label: "Models Red-Teamed", value: 50, suffix: "+" },
  { label: "Vulnerabilities Found", value: 200, suffix: "+" },
  { label: "Enterprise Pilots", value: 3, suffix: "" },
  { label: "Setup Time", static: "<30s" },
]

export function SocialProof({ stats }: SocialProofProps) {
  return (
    <section className="relative bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 bg-dot-pattern-light">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                {metric.static ? (
                  metric.static
                ) : metric.key === "downloads" ? (
                  <AnimatedNumber value={stats?.totalDownloads ?? 2962} />
                ) : (
                  <AnimatedNumber value={metric.value!} suffix={metric.suffix} />
                )}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-500">{metric.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
