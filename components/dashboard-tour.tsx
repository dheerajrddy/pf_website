"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"

const hero = {
  src: "/dashboard/overview.png",
  title: "Security Posture Overview",
  pitch: "The view a CISO hands to the board.",
  detail:
    "Posture score, open findings by severity, active campaigns, breach-rate trends, and a ranked list of your most-breached assets — in one pane.",
}

const secondary = [
  {
    src: "/dashboard/campaign-detail.png",
    title: "Campaign Detail",
    pitch: "Watch autonomous attacks unfold in real time.",
    detail:
      "The 5-phase NEXUS timeline, attack-methodology breakdown, and per-expert performance for every campaign.",
  },
  {
    src: "/dashboard/analysis.png",
    title: "OWASP & MITRE Coverage",
    pitch: "Provable coverage, not just a scan report.",
    detail:
      "Framework-coverage gauges for OWASP LLM Top 10 and MITRE ATLAS. Every category tagged with finding counts as campaigns run.",
  },
  {
    src: "/dashboard/findings.png",
    title: "Findings Triage",
    pitch: "Triage, track, and remediate.",
    detail:
      "Filterable by severity, category, target agent, and status. Every row ships with a replay trace — no false-positive grinding.",
  },
  {
    src: "/dashboard/report.png",
    title: "Board-Ready Reports",
    pitch: "Compliance-ready reporting in one click.",
    detail:
      "Executive summary, OWASP compliance matrix, top findings, asset risk, remediation roadmap — printable PDF for audit or the board.",
  },
]

function ScreenshotFrame({
  src,
  alt,
  priority = false,
}: {
  src: string
  alt: string
  priority?: boolean
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_8px_40px_rgba(17,24,39,0.08)]">
      <Image
        src={src}
        alt={alt}
        width={1440}
        height={900}
        priority={priority}
        className="block h-auto w-full"
      />
    </div>
  )
}

export function DashboardTour() {
  return (
    <section
      id="dashboard"
      className="scroll-mt-24 bg-gray-50/40 bg-dot-pattern px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
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
            The Dashboard
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[64px] lg:leading-[1.05]"
          >
            A single pane of glass
            <br />
            <span className="text-gradient">for every AI campaign.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-600"
          >
            Launch campaigns, watch attacks execute, triage findings, and generate compliance reports — all from one interface designed for security teams, not researchers.
          </motion.p>
        </motion.div>

        {/* Hero screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <ScreenshotFrame src={hero.src} alt={hero.title} priority />
          <div className="mt-6 max-w-2xl">
            <h3 className="text-xl font-bold text-gray-900">{hero.title}</h3>
            <p className="mt-1 text-sm font-semibold text-blue-600">{hero.pitch}</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{hero.detail}</p>
          </div>
        </motion.div>

        {/* Secondary grid */}
        <div className="mt-20 grid gap-10 md:grid-cols-2 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          {secondary.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            >
              <ScreenshotFrame src={item.src} alt={item.title} />
              <div className="mt-5">
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-blue-600">{item.pitch}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
