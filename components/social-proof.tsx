"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Download, Shield, Search, Crosshair } from "lucide-react"
import type { NpmStats } from "@/lib/npm-stats"

function useCountUp(target: number, duration = 2000, inView = false) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = performance.now()
    function animate(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setCount(Math.round(target * eased))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, target, duration])

  return count
}

interface SocialProofProps {
  stats?: NpmStats
}

export function SocialProof({ stats }: SocialProofProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  const downloads = useCountUp(stats?.totalDownloads ?? 2962, 2000, inView)
  const rules = useCountUp(1700, 2000, inView)
  const skills = useCountUp(12000, 2000, inView)
  const attackTypes = useCountUp(25, 2000, inView)

  const statItems = [
    {
      icon: Download,
      value: downloads.toLocaleString() + "+",
      label: "npm Downloads",
    },
    {
      icon: Shield,
      value: rules.toLocaleString() + "+",
      label: "Detection Rules",
    },
    {
      icon: Search,
      value: skills.toLocaleString() + "+",
      label: "Skills Scanned",
    },
    {
      icon: Crosshair,
      value: attackTypes.toLocaleString() + "+",
      label: "Attack Types",
    },
  ]

  return (
    <section ref={ref} className="relative bg-gray-50 bg-dot-pattern px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Stats row */}
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            {statItems.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Icon className="h-5 w-5 text-indigo-500" />
                    <span className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      {stat.value}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                    {stat.label}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Trust line */}
          <p className="text-center text-sm font-medium text-gray-600">
            Built by former Google engineers — contributors to Garak &amp; Promptfoo
          </p>
        </motion.div>
      </div>
    </section>
  )
}
