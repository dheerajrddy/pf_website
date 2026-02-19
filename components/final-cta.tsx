"use client"

import { motion } from "framer-motion"
import { Copy, Check } from "lucide-react"
import { useCopyToClipboard } from "@/lib/use-copy"
import { fadeIn } from "@/lib/animations"

function CopyRow({ command, label }: { command: string; label: string }) {
  const { copied, copy } = useCopyToClipboard(command)
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 min-w-0">
        <span className="shrink-0 text-sm font-medium text-gray-400">{label}</span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
          <span className="h-1 w-1 rounded-full bg-emerald-400" />
          Live
        </span>
      </div>
      <button
        onClick={copy}
        className="group flex items-center gap-2 rounded-lg bg-gray-950/50 px-4 py-2 font-mono text-sm text-gray-300 transition-all hover:bg-gray-950/70"
      >
        <span className="truncate">
          <span className="text-gray-500">$ </span>
          {command}
        </span>
        {copied ? (
          <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
        ) : (
          <Copy className="h-3.5 w-3.5 shrink-0 text-gray-500 transition-colors group-hover:text-gray-300" />
        )}
      </button>
    </div>
  )
}

function ComingSoonRow({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="shrink-0 text-sm font-medium text-gray-500">{label}</span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-2 py-0.5 text-[10px] font-semibold text-violet-400">
          Coming Soon
        </span>
      </div>
      <span className="text-sm text-gray-600">Coming Q1 2026</span>
    </div>
  )
}

export function FinalCta() {
  return (
    <section className="scroll-mt-24 bg-gray-50/50 px-4 py-36 sm:px-6 lg:px-8 lg:py-52">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold tracking-tighter text-gray-900 sm:text-6xl lg:text-[72px] lg:leading-[1.05]">
            Give your agents
            <br className="hidden sm:block" />
            an immune&nbsp;system.
          </h2>
          <p className="mt-8 text-xl text-gray-400 sm:text-2xl lg:text-[28px] lg:leading-relaxed">
            One package. Four surfaces. Every AI coding agent. Free and open source.
          </p>

          <div className="mt-12 mx-auto max-w-2xl rounded-2xl bg-gray-900 p-6 shadow-[0_0_60px_-15px_rgba(79,70,229,0.15)]">
            <div className="space-y-4">
              <CopyRow label="MCP Server" command="npx agent-security-scanner-mcp init" />
              <div className="border-t border-gray-800" />
              <CopyRow label="CLI" command="npx agent-security-scanner-mcp scan ." />
              <div className="border-t border-gray-800" />
              <ComingSoonRow label="OpenClaw Plugin" />
              <div className="border-t border-gray-800" />
              <ComingSoonRow label="OpenClaw Skill" />
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-400">
            Free and open source. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
