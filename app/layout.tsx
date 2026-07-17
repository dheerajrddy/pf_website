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
  title: "ProofLayer — Continuous AI Security Evidence",
  description:
    "Continuously red-team LLMs, agents, and MCP servers. Turn verified findings into audit-ready evidence for SOC 2, NIST AI RMF, EU AI Act, and ISO 42001.",
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
  openGraph: {
    title: "ProofLayer — Continuous AI Security Evidence",
    description: "Continuous adversarial proof for enterprise AI. Red-team LLMs, agents, and MCP servers, then turn findings into audit-ready evidence.",
    type: "website",
    siteName: "ProofLayer",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProofLayer — Continuous AI Security Evidence",
    description: "Continuous adversarial proof for enterprise AI. Red-team LLMs, agents, and MCP servers, then turn findings into audit-ready evidence.",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <Script
          id="posthog-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(t,e){var o,n,p,r;e.__SV||(window.posthog&&window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init ls vs Ce hs cs ns us capture calculateEventProperties gs register register_once register_for_session unregister unregister_for_session xs getFeatureFlag getFeatureFlagPayload getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty ys createPersonProfile setInternalOrTestUser ws rs $s opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing fs debug M bs getPageViewId captureTraceFeedback captureTraceMetric Zr".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
              posthog.init('phc_ugOxq6jGXCvLOZhejo5TpNmCznRAjrG2AuNoxFmazDV', {
                api_host: 'https://us.i.posthog.com',
                person_profiles: 'identified_only',
              })
            `,
          }}
        />
      </body>
    </html>
  )
}
