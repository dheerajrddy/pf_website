"use client"

import { Download, Tag, Scale } from "lucide-react"
import type { NpmStats } from "@/lib/npm-stats"

export function NpmStatsBadge({ stats }: { stats: NpmStats }) {
  return (
    <a
      href="https://www.npmjs.com/package/agent-security-scanner-mcp"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:inline-flex items-center gap-3 rounded-full border border-slate-700 bg-slate-800/80 px-4 py-1.5 backdrop-blur-sm transition-colors hover:border-cyan-500/50 hover:bg-slate-800"
    >
      <span className="flex items-center gap-1.5">
        <Download className="h-3.5 w-3.5 text-slate-500" />
        <span className="font-mono text-xs font-semibold text-slate-300">
          {stats.totalDownloads.toLocaleString()} downloads
        </span>
      </span>
      <span className="h-3 border-l border-slate-700" />
      <span className="flex items-center gap-1.5">
        <Tag className="h-3.5 w-3.5 text-slate-500" />
        <span className="font-mono text-xs font-semibold text-slate-300">
          v{stats.version}
        </span>
      </span>
      <span className="h-3 border-l border-slate-700" />
      <span className="flex items-center gap-1.5">
        <Scale className="h-3.5 w-3.5 text-slate-500" />
        <span className="font-mono text-xs font-semibold text-slate-300">
          {stats.license}
        </span>
      </span>
    </a>
  )
}
