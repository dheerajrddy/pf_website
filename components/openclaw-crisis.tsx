"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect, useCallback } from "react"

function useCountUp(end: number, duration: number = 1500, inView: boolean) {
  const [count, setCount] = useState(0)
  const hasRun = useRef(false)

  const animate = useCallback(() => {
    if (hasRun.current) return
    hasRun.current = true
    const start = performance.now()
    const step = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration])

  useEffect(() => {
    if (inView) animate()
  }, [inView, animate])

  return count
}

const stats = [
  {
    number: 200,
    suffix: "K+",
    text: "GitHub stars — the fastest-growing AI agent framework",
    source: "GitHub",
    color: "text-gray-900",
  },
  {
    number: 720,
    suffix: "K",
    text: "weekly npm downloads — massive adoption, minimal security tooling",
    source: "npm Registry",
    color: "text-gray-900",
  },
  {
    number: 135,
    suffix: "K+",
    text: "OpenClaw instances exposed on the public internet across 82 countries",
    source: "Security Research",
    color: "text-gray-900",
  },
  {
    number: 36.8,
    suffix: "%",
    text: "of OpenClaw skills have at least one security vulnerability",
    source: "Snyk ToxicSkills Study",
    color: "text-rose-500",
    isDecimal: true,
  },
]

function StatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const wholeNumber = stat.isDecimal ? Math.floor(stat.number) : stat.number
  const count = useCountUp(wholeNumber, 1500, isInView)

  const formatted = stat.isDecimal
    ? isInView
      ? stat.number.toFixed(1)
      : "0.0"
    : count >= 1000
      ? count.toLocaleString()
      : count

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-4 text-center lg:p-6"
    >
      <span
        className={`font-mono text-5xl font-extrabold tracking-tight sm:text-6xl ${stat.color}`}
      >
        {formatted}
        {stat.suffix}
      </span>
      <p className="mt-4 text-base leading-relaxed text-gray-500 lg:text-lg">
        {stat.text}
      </p>
      <p className="mt-4 text-xs font-medium uppercase tracking-wider text-gray-300">
        {stat.source}
      </p>
    </motion.div>
  )
}

export function SecurityGap() {
  return (
    <section className="bg-violet-50/20 px-4 py-32 sm:px-6 lg:px-8 lg:py-48">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600/80">
            The Security Gap
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
            AI agents are everywhere.
            <br />
            Security isn&apos;t.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-400 lg:text-2xl lg:leading-relaxed">
            OpenClaw alone has 200K+ GitHub stars and 720K weekly npm downloads. Across all AI coding agents, adoption is exploding — but 36.8% of skills ship with security flaws.
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="mt-24 grid gap-10 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.suffix + stat.number}
              stat={stat}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
