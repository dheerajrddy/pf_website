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
  title: "ProofLayer — Security for Autonomous AI Agents",
  description:
    "Prompt injection firewall, hallucination detection, and behavior guardrails for AI agents. Agent Security Scanner for MCP agents. ClawProof plugin for OpenClaw. Free and open source.",
  keywords: [
    "AI agent security",
    "autonomous AI security",
    "prompt injection firewall",
    "ClawdBot security",
    "AI agent guardrails",
    "package hallucination detection",
    "MCP security",
    "OpenClaw security",
    "ClawProof",
    "OpenClaw security plugin",
    "OpenClaw vulnerability scanner",
    "SecureClaw alternative",
    "agentic AI security",
    "AI assistant security",
    "prompt injection detection",
    "AI agent behavior monitoring",
  ],
  authors: [{ name: "ProofLayer" }],
  openGraph: {
    title: "ProofLayer — Security for Autonomous AI Agents",
    description: "AI agents are taking real-world actions. We make sure they're safe. Agent Security Scanner + ClawProof for OpenClaw.",
    type: "website",
    siteName: "ProofLayer",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProofLayer — Security for Autonomous AI Agents",
    description: "AI agents are taking real-world actions. We make sure they're safe. Agent Security Scanner + ClawProof for OpenClaw.",
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
