import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Inter, JetBrains_Mono } from 'next/font/google'

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
  metadataBase: new URL("https://www.proof-layer.com"),
  title: "AI Red Teaming & MCP Security | ProofLayer",
  description:
    "Continuously red-team LLMs and AI agents, scan MCP servers, and protect MCP traffic at runtime. Turn verified findings into audit-ready security evidence.",
  keywords: [
    "AI red teaming",
    "autonomous red team",
    "AI security",
    "prompt injection",
    "MCP security",
    "tool poisoning",
    "agent hijacking",
    "AI red-teaming platform",
    "agent-security-scanner-mcp",
    "AI agent security",
    "RAG injection",
    "MCP exploit",
    "AI penetration testing",
    "continuous red-teaming",
    "self-evolving attacks",
    "AI vulnerability scanner",
    "agentic AI security",
    "LLM security",
    "AI compliance",
    "SOC 2 readiness",
    "NIST AI RMF",
    "EU AI Act",
    "ISO 42001",
    "ISO/IEC 42001",
  ],
  authors: [{ name: "ProofLayer" }],
  creator: "ProofLayer",
  publisher: "SineWave AI, Inc.",
  applicationName: "ProofLayer",
  category: "AI security",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "AI Red Teaming & MCP Security | ProofLayer",
    description: "Continuous AI red teaming, MCP server scanning, and runtime protection. Turn verified attacks into audit-ready security evidence.",
    type: "website",
    url: "/",
    siteName: "ProofLayer",
    locale: "en_US",
    images: [
      {
        url: "/prooflayer-og.png",
        width: 1200,
        height: 630,
        alt: "ProofLayer continuous AI security evidence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Red Teaming & MCP Security | ProofLayer",
    description: "Continuous AI red teaming, MCP server scanning, and runtime protection with audit-ready evidence.",
    images: ["/prooflayer-og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-light-32x32.png", type: "image/png", sizes: "32x32", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", type: "image/png", sizes: "32x32", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    google: "Jz2fsslsGoqDXMCaGZSWwv3lgWXir845IhkKayJCw64",
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.proof-layer.com/#organization",
      name: "ProofLayer",
      legalName: "SineWave AI, Inc.",
      url: "https://www.proof-layer.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.proof-layer.com/prooflayer-logo-512.png",
        width: 512,
        height: 512,
      },
      description: "AI red teaming and MCP security platform that produces continuous adversarial evidence for enterprise AI.",
      sameAs: [
        "https://www.linkedin.com/company/proof-layer/",
        "https://github.com/sinewaveai",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.proof-layer.com/#website",
      url: "https://www.proof-layer.com/",
      name: "ProofLayer",
      description: "Continuous AI red teaming, MCP security, and audit-ready evidence.",
      publisher: { "@id": "https://www.proof-layer.com/#organization" },
      inLanguage: "en-US",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Analytics />
        <Script
          id="posthog-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              !function(t,e){var o,n,p,r;e.__SV||(window.posthog&&window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init ls vs Ce hs cs ns us capture calculateEventProperties gs register register_once register_for_session unregister unregister_for_session xs getFeatureFlag getFeatureFlagPayload getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty ys createPersonProfile setInternalOrTestUser ws rs $s opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing fs debug M bs getPageViewId captureTraceFeedback captureTraceMetric Zr".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
              posthog.init('phc_ugOxq6jGXCvLOZhejo5TpNmCznRAjrG2AuNoxFmazDV', {
                api_host: 'https://us.i.posthog.com',
                defaults: '2026-05-30',
                person_profiles: 'identified_only',
              })
            `,
          }}
        />
      </body>
    </html>
  )
}
