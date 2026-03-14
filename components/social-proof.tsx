"use client"

import { motion } from "framer-motion"
import { Download, Star, Shield, Scale } from "lucide-react"
import type { NpmStats } from "@/lib/npm-stats"

interface SocialProofProps {
  stats?: NpmStats
}

export function SocialProof({ stats }: SocialProofProps) {
  const badges = [
    {
      icon: Download,
      label: `${(stats?.totalDownloads ?? 2962).toLocaleString()} npm downloads`,
    },
    {
      icon: Star,
      label: `${stats?.githubStars ?? 0} GitHub stars`,
    },
    {
      icon: Shield,
      label: "1,700+ Detection Rules",
    },
    {
      icon: Scale,
      label: "MIT Licensed",
    },
  ]

  return (
    <section className="relative bg-gray-50 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center"
        >
          {/* Founder credibility */}
          <p className="text-sm font-medium text-gray-700">
            Built by former Google engineers — contributors to Garak &amp; Promptfoo
          </p>

          {/* Open-source proof badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {badges.map((badge) => {
              const Icon = badge.icon
              return (
                <div
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600"
                >
                  <Icon className="h-4 w-4 text-indigo-500" />
                  {badge.label}
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
