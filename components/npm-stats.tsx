"use client"

import { Download, Tag, Scale } from "lucide-react"
import type { NpmStats } from "@/lib/npm-stats"

export function NpmStatsBadge({ stats }: { stats: NpmStats }) {
  return (
    <a
      href="https://www.npmjs.com/package/agent-security-scanner-mcp"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:inline-flex items-center gap-3 rounded-full border border-gray-200/80 bg-gray-50/80 px-4 py-1.5 backdrop-blur-sm transition-colors hover:border-indigo-200 hover:bg-indigo-50/50"
    >
      <span className="flex items-center gap-1.5">
        <Download className="h-3.5 w-3.5 text-gray-400" />
        <span className="font-mono text-xs font-semibold text-gray-700">
          {stats.weeklyDownloads.toLocaleString()}/wk
        </span>
      </span>
      <span className="h-3 border-l border-gray-200" />
      <span className="flex items-center gap-1.5">
        <Tag className="h-3.5 w-3.5 text-gray-400" />
        <span className="font-mono text-xs font-semibold text-gray-700">
          v{stats.version}
        </span>
      </span>
      <span className="h-3 border-l border-gray-200" />
      <span className="flex items-center gap-1.5">
        <Scale className="h-3.5 w-3.5 text-gray-400" />
        <span className="font-mono text-xs font-semibold text-gray-700">
          {stats.license}
        </span>
      </span>
    </a>
  )
}
