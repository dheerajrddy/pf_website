"use client"

import { motion } from "framer-motion"

const incidents = [
  {
    date: "Q1 2025",
    title: "Cursor Typosquatting Extension",
    severity: "Critical",
    severityColor: "bg-red-50 text-red-600",
    description: "Ethereum core developer's crypto wallet drained after downloading a malicious Cursor extension via typosquatting attack.",
    type: "Supply Chain",
  },
  {
    date: "Q2 2025",
    title: "Langflow AI Code Injection",
    severity: "Critical",
    severityColor: "bg-red-50 text-red-600",
    description: "CrowdStrike identified multiple threat actors exploiting unauthenticated code injection in Langflow, deploying malware and stealing credentials.",
    type: "Code Injection",
  },
  {
    date: "Q2 2025",
    title: "Malware in Hugging Face Models",
    severity: "High",
    severityColor: "bg-orange-50 text-orange-600",
    description: "ReversingLabs discovered malware hidden inside AI models hosted on Hugging Face, the largest open-source ML repository.",
    type: "Supply Chain",
  },
  {
    date: "Jul 2025",
    title: "Amazon Q Developer Extension Exploit",
    severity: "Critical",
    severityColor: "bg-red-50 text-red-600",
    description: "Prompt injection via compromised VS Code extension planted malicious code. Passed verification and remained live for two days.",
    type: "Prompt Injection",
  },
  {
    date: "Q3 2025",
    title: "GitHub Copilot MCP Vulnerability",
    severity: "High",
    severityColor: "bg-orange-50 text-orange-600",
    description: "System-level vulnerability in MCP protocol enabled prompt injection attacks across AI coding tool connections.",
    type: "Prompt Injection",
  },
  {
    date: "Sep 2025",
    title: "First Autonomous AI Cyberattack",
    severity: "Critical",
    severityColor: "bg-red-50 text-red-600",
    description: "Researchers documented the first fully autonomous AI-orchestrated attack — the AI handled 80-90% of the operation independently.",
    type: "Autonomous",
  },
  {
    date: "Nov 2025",
    title: "43 Compromised Agent Components",
    severity: "High",
    severityColor: "bg-orange-50 text-orange-600",
    description: "Barracuda Security identified 43 different agent framework components with embedded vulnerabilities introduced via supply chain compromise.",
    type: "Supply Chain",
  },
]

const typeColors: Record<string, string> = {
  "Supply Chain": "bg-violet-50 text-violet-600",
  "Code Injection": "bg-amber-50 text-amber-600",
  "Prompt Injection": "bg-rose-50 text-rose-600",
  "Autonomous": "bg-gray-100 text-gray-600",
}

export function IncidentTimeline() {
  return (
    <div className="my-12">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />

        <div className="space-y-8">
          {incidents.map((incident, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-white bg-indigo-500 shadow-sm" />

              <div className="rounded-xl border border-gray-100 bg-white p-5">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-gray-400">{incident.date}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${incident.severityColor}`}>
                    {incident.severity}
                  </span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${typeColors[incident.type]}`}>
                    {incident.type}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">{incident.title}</h4>
                <p className="mt-1 text-sm text-gray-500 leading-relaxed">{incident.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
