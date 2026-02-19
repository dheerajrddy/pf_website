import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Inter, JetBrains_Mono } from 'next/font/google'

// Initialize fonts - Clean, modern sans-serif
const inter = Inter({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800"],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ["400", "500"],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: "ProofLayer — The Immune System for AI Agents",
  description:
    "Deep static analysis, package hallucination detection, prompt injection defense, and auto-fix for every AI coding agent. One npm package. MCP Server, CLI, OpenClaw Plugin, and OpenClaw Skill. Free and open source.",
  keywords: [
    "AI agent security",
    "autonomous AI security",
    "prompt injection firewall",
    "agent-security-scanner-mcp",
    "AI agent guardrails",
    "package hallucination detection",
    "MCP security",
    "OpenClaw security",
    "Claude Code security",
    "Cursor security",
    "Windsurf security",
    "Cline security",
    "AST taint analysis",
    "SecureClaw alternative",
    "agentic AI security",
    "AI assistant security",
    "prompt injection detection",
    "AI agent behavior monitoring",
  ],
  authors: [{ name: "ProofLayer" }],
  openGraph: {
    title: "ProofLayer — The Immune System for AI Agents",
    description: "Deep code analysis, hallucination detection, prompt injection defense, and auto-fix for every AI coding agent. Free and open source.",
    type: "website",
    siteName: "ProofLayer",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProofLayer — The Immune System for AI Agents",
    description: "Deep code analysis, hallucination detection, prompt injection defense, and auto-fix for every AI coding agent. Free and open source.",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-light-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    google: "Jz2fsslsGoqDXMCaGZSWwv3lgWXir845IhkKayJCw64",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
