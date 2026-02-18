"use client"

import { motion } from "framer-motion"
import {
  Terminal,
  Shield,
  Check,
  Copy,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { useCopyToClipboard } from "@/lib/use-copy"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"

const products = [
  {
    name: "Agent Security Scanner",
    tagline: "MCP Server for AI coding agents",
    description:
      "Real-time security scanning that runs inside any MCP-compatible agent. Catches vulnerabilities, hallucinated packages, and prompt injection as code is written.",
    status: "live" as const,
    installCommand: "npx agent-security-scanner-mcp init",
    link: "https://www.npmjs.com/package/agent-security-scanner-mcp",
    icon: Terminal,
    accent: "indigo",
    features: [
      "1,700+ security rules",
      "AST + taint analysis",
      "12 language support",
      "Claude Code, Cursor, Windsurf & more",
      "97.7% precision",
      "432 passing tests",
    ],
  },
  {
    name: "ClawProof",
    tagline: "Making your OpenClaw bulletproof",
    description:
      "The first deep security plugin for OpenClaw. Scans skills for malicious code, audits gateway config, detects prompt injection, prevents package hallucinations, and auto-fixes vulnerabilities.",
    status: "coming_soon" as const,
    launchDate: "Feb 20",
    link: "",
    icon: Shield,
    accent: "violet",
    features: [
      "Skill code deep analysis (AST + taint)",
      "Gateway security audit (60+ checks)",
      "Prompt injection firewall",
      "Package hallucination prevention",
      "Auto-fix (120 templates)",
      "Same engine — 1,700+ rules, 97.7% precision",
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
    badgeDotPing: "bg-emerald-400",
    cta: "bg-gray-900 text-white hover:bg-gray-800",
    ctaText: "Get Started",
  },
  violet: {
    card: "border-violet-100 bg-violet-50/40 ring-1 ring-violet-100/50",
    icon: "text-violet-600 bg-violet-100/80",
    check: "text-violet-500",
    badge: "border-violet-200/60 bg-violet-50/80 text-violet-700",
    badgeDot: "bg-violet-500",
    badgeDotPing: "bg-violet-400",
    cta: "border border-violet-200 text-violet-700 hover:bg-violet-50",
    ctaText: "Learn More",
  },
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[number]
  index: number
}) {
  const styles = accentStyles[product.accent as keyof typeof accentStyles]
  const Icon = product.icon
  const { copied, copy } = useCopyToClipboard(
    product.status === "live" ? product.installCommand! : ""
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`relative rounded-2xl border p-8 lg:p-10 ${styles.card}`}
    >
      {/* Status pill */}
      <div className="mb-6">
        {product.status === "live" ? (
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${styles.badge}`}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span
                className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${styles.badgeDotPing}`}
              />
              <span
                className={`relative inline-flex h-1.5 w-1.5 rounded-full ${styles.badgeDot}`}
              />
            </span>
            Live on npm
          </span>
        ) : (
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${styles.badge}`}
          >
            <Sparkles className="h-3 w-3" />
            Launching {product.launchDate}
          </span>
        )}
      </div>

      {/* Icon + Name */}
      <div className="flex items-center gap-3">
        <div className={`rounded-xl p-2.5 ${styles.icon}`}>
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold tracking-tight text-gray-900">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500">{product.tagline}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-5 text-base leading-relaxed text-gray-500">
        {product.description}
      </p>

      {/* Features */}
      <ul className="mt-6 space-y-2.5">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <Check
              className={`mt-0.5 h-4 w-4 shrink-0 ${styles.check}`}
            />
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-8">
        {product.status === "live" ? (
          <div className="space-y-3">
            <button
              onClick={copy}
              className="flex w-full items-center justify-between rounded-xl bg-gray-950 px-5 py-3 font-mono text-sm text-gray-300 transition-all hover:bg-gray-900"
            >
              <span>
                <span className="text-gray-500">$ </span>
                {product.installCommand}
              </span>
              {copied ? (
                <Check className="h-4 w-4 text-emerald-400" />
              ) : (
                <Copy className="h-4 w-4 text-gray-500" />
              )}
            </button>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all hover:scale-[1.02] ${styles.cta}`}
            >
              {styles.ctaText}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ) : null}
      </div>
    </motion.div>
  )
}

export function ProductsSection() {
  return (
    <section
      id="products"
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
            Our Products
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
            One security engine.
            <br />
            <span className="text-gradient">Two powerful products.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-400 lg:text-2xl lg:leading-relaxed">
            The same battle-tested analysis engine that powers our MCP scanner is
            now coming to OpenClaw.
          </p>
        </motion.div>

        {/* Product cards */}
        <div className="mt-20 grid gap-8 lg:mt-24 lg:grid-cols-2">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
