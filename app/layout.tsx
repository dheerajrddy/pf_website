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
  title: "ProofLayer — AI Coding Agent Security Scanner",
  description:
    "Catch vulnerabilities, hallucinated packages, and prompt injection in AI-generated code. Works with Cursor, Claude Code, and Copilot. Free open-source scanner.",
  keywords: [
    "AI coding agent security",
    "AI code scanner",
    "AI-generated code vulnerabilities",
    "package hallucination detection",
    "prompt injection firewall",
    "Cursor security",
    "Claude Code security",
    "Copilot security scanner",
    "MCP security",
    "OWASP AI",
    "CWE",
    "code vulnerability scanner",
  ],
  authors: [{ name: "ProofLayer" }],
  openGraph: {
    title: "ProofLayer — AI Coding Agent Security Scanner",
    description: "62% of AI-generated code has vulnerabilities. Catch them before they ship.",
    type: "website",
    siteName: "ProofLayer",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProofLayer — AI Coding Agent Security Scanner",
    description: "62% of AI-generated code has vulnerabilities. Catch them before they ship.",
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
    generator: 'v0.app'
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
