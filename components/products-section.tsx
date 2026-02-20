"use client"

import { motion } from "framer-motion"
import {
  Terminal,
  Shield,
  Check,
  Copy,
  Puzzle,
  Brain,
} from "lucide-react"
import { useCopyToClipboard } from "@/lib/use-copy"

const surfaces = [
  {
    name: "MCP Server",
    icon: Terminal,
    status: "live" as const,
    accent: "indigo" as const,
    tagline: "Real-time security inside any MCP agent",
    installCommand: "npx agent-security-scanner-mcp init",
    features: [
      "Real-time interception",
      "12 language support",
      "Zero config",
    ],
  },
  {
    name: "CLI",
    icon: Shield,
    status: "live" as const,
    accent: "indigo" as const,
    tagline: "Scan any codebase from the terminal",
    installCommand: "npx agent-security-scanner-mcp scan .",
    features: [
      "CI/CD integration",
      "SARIF output",
      "Batch scanning",
    ],
  },
  {
    name: "OpenClaw Plugin",
    icon: Puzzle,
    status: "live" as const,
    accent: "indigo" as const,
    tagline: "Native security plugin for OpenClaw",
    installCommand: "npx agent-security-scanner-mcp init openclaw",
    features: [
      "Gateway-level scanning",
      "Plugin health monitoring",
      "Kill switch",
    ],
  },
  {
    name: "OpenClaw Skill",
    icon: Brain,
    status: "live" as const,
    accent: "indigo" as const,
    tagline: "Deep skill security scanning for OpenClaw",
    installCommand: "npx agent-security-scanner-mcp init openclaw",
    features: [
      "6-layer deep analysis",
      "ClawHavoc malware detection",
      "Rug pull detection",
    ],
  },
]

const accentStyles = {
  indigo: {
    card: "border-indigo-100 bg-indigo-50/40 ring-1 ring-indigo-100/50",
    icon: "text-indigo-600 bg-indigo-100/80",
    check: "text-indigo-500",
    badge: "border-emerald-200/60 bg-emerald-50/80 text-emerald-700",
    badgeDot: "bg-emerald-400",
  },
}

function SurfaceCard({
  surface,
  index,
}: {
  surface: (typeof surfaces)[number]
  index: number
}) {
  const styles = accentStyles[surface.accent]
  const Icon = surface.icon
  const { copied, copy } = useCopyToClipboard(surface.installCommand ?? "")

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl border p-6 lg:p-7 ${styles.card}`}
    >
      {/* Status badge */}
      <div className="mb-5">
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${styles.badge}`}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${styles.badgeDot}`}
            />
            <span
              className={`relative inline-flex h-1.5 w-1.5 rounded-full ${styles.badgeDot}`}
            />
          </span>
          Live
        </span>
      </div>

      {/* Icon + Name */}
      <div className="flex items-center gap-3">
        <div className={`rounded-xl p-2.5 ${styles.icon}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold tracking-tight text-gray-900">
            {surface.name}
          </h3>
        </div>
      </div>

      {/* Tagline */}
      <p className="mt-3 text-sm leading-relaxed text-gray-500">
        {surface.tagline}
      </p>

      {/* Features */}
      <ul className="mt-4 space-y-2">
        {surface.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check
              className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${styles.check}`}
            />
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Install command (live only) */}
      {surface.status === "live" && surface.installCommand && (
        <button
          onClick={copy}
          className="mt-5 flex w-full items-center justify-between rounded-lg bg-gray-950 px-4 py-2.5 font-mono text-xs text-gray-300 transition-all hover:bg-gray-900"
        >
          <span className="truncate">
            <span className="text-gray-500">$ </span>
            {surface.installCommand}
          </span>
          {copied ? (
            <Check className="ml-2 h-3.5 w-3.5 shrink-0 text-emerald-400" />
          ) : (
            <Copy className="ml-2 h-3.5 w-3.5 shrink-0 text-gray-500" />
          )}
        </button>
      )}
    </motion.div>
  )
}

export function ProductsSection() {
  return (
    <section
      id="install"
      className="scroll-mt-24 px-4 py-32 sm:px-6 lg:px-8 lg:py-48"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600/80">
            Install
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
            One codebase.
            <br />
            <span className="text-gradient">Four surfaces.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-400 lg:text-2xl lg:leading-relaxed">
            Install once from npm. Deploy as an MCP server, a CLI tool, an OpenClaw plugin, or an OpenClaw skill. Same engine everywhere — 1,700+ rules, AST + taint analysis, 97.7% precision.
          </p>
        </motion.div>

        {/* npm package branching visual */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-16 max-w-3xl lg:mt-20"
        >
          <div className="flex flex-col items-center">
            {/* Package name */}
            <div className="inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-6 py-3 shadow-sm">
              <span className="font-mono text-sm font-semibold text-gray-400">npm:</span>
              <span className="font-mono text-sm font-bold text-gray-900">agent-security-scanner-mcp</span>
            </div>
            {/* Vertical connector */}
            <div className="h-8 w-px bg-gray-200" />
            {/* Horizontal branch */}
            <div className="relative flex w-full max-w-2xl items-start justify-between px-4">
              {/* Horizontal line */}
              <div className="absolute top-0 left-[12.5%] right-[12.5%] h-px bg-gray-200" />
              {/* Branch labels */}
              {["MCP Server", "CLI", "Plugin", "Skill"].map((label) => (
                <div key={label} className="relative flex flex-col items-center" style={{ width: "25%" }}>
                  <div className="h-5 w-px bg-gray-200" />
                  <span className="mt-1 text-xs font-medium text-indigo-600">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Surface cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {surfaces.map((surface, index) => (
            <SurfaceCard key={surface.name} surface={surface} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
