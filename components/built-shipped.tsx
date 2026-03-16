"use client"

import { motion } from "framer-motion"
import { Shield, LayoutDashboard, Download, Code, Search, Clock, ExternalLink } from "lucide-react"
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations"
import type { NpmStats } from "@/lib/npm-stats"

interface BuiltShippedProps {
  stats?: NpmStats
}

export function BuiltShipped({ stats }: BuiltShippedProps) {
  const downloads = stats?.totalDownloads ?? 2962

  return (
    <section className="scroll-mt-24 bg-gray-50 bg-dot-pattern px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.span
            variants={fadeIn}
            className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-indigo-600/80"
          >
            Built &amp; Shipped
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[56px] lg:leading-[1.1]"
          >
            We ship. Here&apos;s what we
            <br />
            <span className="text-gradient">built in 60 days.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-600"
          >
            Our team contributed to the tools that defined AI security. Now we&apos;re making them autonomous.
          </motion.p>
        </motion.div>

        {/* Two cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Card 1: MCP Security Scanner */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-indigo-50 p-3">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-600">
                Open Source
              </span>
            </div>
            <h3 className="mt-5 font-mono text-lg font-bold text-gray-900">agent-security-scanner-mcp</h3>
            <p className="mt-2 text-sm text-gray-600">
              Open-source MCP security scanner. Detect prompt injection, tool poisoning, and agent exploits in any MCP server.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                <Download className="h-3 w-3" />
                {downloads.toLocaleString()}+ downloads
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                <Code className="h-3 w-3" />
                1,700+ rules
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                MIT licensed
              </span>
            </div>
            <div className="mt-5 flex items-center gap-4 text-sm">
              <a
                href="https://www.npmjs.com/package/agent-security-scanner-mcp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gray-500 transition-colors hover:text-gray-900"
              >
                npm <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://github.com/sinewaveai/agent-security-scanner-mcp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gray-500 transition-colors hover:text-gray-900"
              >
                GitHub <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: ClawHub Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-violet-50 p-3">
                <LayoutDashboard className="h-6 w-6 text-violet-600" />
              </div>
              <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-600">
                Live Dashboard
              </span>
            </div>
            <h3 className="mt-5 text-lg font-bold text-gray-900">ClawHub Security Dashboard</h3>
            <p className="mt-2 text-sm text-gray-600">
              MCP skill security intelligence platform. Real-time vulnerability scanning and threat grading for the MCP ecosystem.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                <Search className="h-3 w-3" />
                12,000+ skills scanned
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                <Clock className="h-3 w-3" />
                Real-time threat feed
              </span>
            </div>
            <div className="mt-5 flex items-center gap-4 text-sm">
              <a
                href="/dashboard"
                className="inline-flex items-center gap-1 text-gray-500 transition-colors hover:text-gray-900"
              >
                View Dashboard <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Narrative bridge */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-lg font-medium text-gray-600"
        >
          We built the tools. Now we&apos;re building the{" "}
          <span className="text-gradient font-bold">autonomous system</span>{" "}
          that replaces manual security workflows entirely.
        </motion.p>
      </div>
    </section>
  )
}
