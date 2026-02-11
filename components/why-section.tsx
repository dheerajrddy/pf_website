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
      const eased = 1 - Math.pow(1 - progress, 3) // easeOut cubic
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
    number: 41,
    suffix: "%",
    display: "41%",
    text: "of all new code is now AI-generated",
    source: "GitHub 2025",
    color: "text-gray-900",
  },
  {
    number: 62,
    suffix: "%",
    display: "62%",
    text: "of AI-generated code has security vulnerabilities",
    source: "Stanford Research",
    color: "text-rose-500",
  },
  {
    number: 10000,
    suffix: "+",
    display: "10,000+",
    text: "new security findings from AI-generated code every month",
    source: "Industry Data",
    color: "text-amber-500",
  },
]

function StatCard({ stat, index }: { stat: (typeof stats)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const count = useCountUp(stat.number, 1500, isInView)

  const formatted = stat.number >= 1000 ? count.toLocaleString() : count

  return (
    <motion.div
      ref={ref}
      key={stat.display}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-4 text-center lg:p-6 lg:text-left"
    >
      <span className={`font-mono text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl ${stat.color}`}>
        {formatted}{stat.suffix}
      </span>
      <p className="mt-5 text-lg leading-relaxed text-gray-500 lg:text-xl">{stat.text}</p>
      <p className="mt-6 text-sm font-medium uppercase tracking-wider text-gray-300">{stat.source}</p>
    </motion.div>
  )
}

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
            The Problem
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
            AI is writing code faster
            <br />
            than anyone can review it.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-400 lg:text-2xl lg:leading-relaxed">
            Without purpose-built security, vulnerable code ships to production.
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="mt-24 grid gap-10 sm:grid-cols-2 lg:mt-28 lg:grid-cols-3 lg:gap-16">
          {stats.map((stat, index) => (
            <StatCard key={stat.display} stat={stat} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
