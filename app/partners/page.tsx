import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowUpRight,
  Calendar,
  FileCheck2,
  Handshake,
  Landmark,
  ScanSearch,
  ShieldCheck,
  Workflow,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CALENDLY_URL } from "@/lib/links"

const title = "ProofLayer and SMMARUN Partner to Make Defensible AI Provable"
const description =
  "ProofLayer and SMMARUN combine continuous AI security testing with AI governance to help regulated enterprises maintain audit-ready evidence."
const pageUrl = "https://www.proof-layer.com/partners"

export const metadata: Metadata = {
  title: `${title} | ProofLayer`,
  description,
  keywords: [
    "defensible AI",
    "AI governance partnership",
    "regulated enterprise AI",
    "AI red teaming",
    "AI audit evidence",
    "DPDPA AI governance",
    "RBI FREE-AI",
    "ISO 42001",
  ],
  alternates: { canonical: "/partners" },
  openGraph: {
    title,
    description,
    url: "/partners",
    type: "article",
    publishedTime: "2026-08-07T00:00:00+05:30",
    images: [
      {
        url: "/prooflayer-og.png",
        width: 1200,
        height: 630,
        alt: "ProofLayer and SMMARUN partnership announcement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/prooflayer-og.png"],
  },
}

const announcementJsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: title,
  description,
  datePublished: "2026-08-07",
  dateModified: "2026-08-07",
  mainEntityOfPage: pageUrl,
  author: [
    { "@type": "Organization", name: "ProofLayer", url: "https://www.proof-layer.com" },
    { "@type": "Organization", name: "SMMARUN", url: "https://www.smmarun.ai" },
  ],
  publisher: { "@id": "https://www.proof-layer.com/#organization" },
  image: "https://www.proof-layer.com/prooflayer-og.png",
}

const indiaFrameworks = ["DPDPA", "RBI FREE-AI", "SEBI", "IRDAI", "ICMR"]
const globalFrameworks = ["ISO/IEC 42001", "NIST AI RMF", "EU AI Act"]

const jointCapabilities = [
  {
    icon: Landmark,
    number: "01",
    label: "Govern",
    title: "Set the defensible standard",
    body: "SMMARUN establishes Responsible AI Governance and Digital Risk Governance for the enterprise and its regulatory context.",
  },
  {
    icon: ScanSearch,
    number: "02",
    label: "Test",
    title: "Challenge the deployed system",
    body: "ProofLayer red-teams LLMs and agents, protects MCP traffic, and scans coding agents and generated code before deployment.",
  },
  {
    icon: FileCheck2,
    number: "03",
    label: "Prove",
    title: "Keep evidence audit-ready",
    body: "Verified findings become current security evidence mapped to the frameworks boards, security teams, and auditors request.",
  },
]

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(announcementJsonLd) }} />

      <section className="relative overflow-hidden border-b border-slate-200 bg-dot-pattern px-4 pb-20 pt-36 sm:px-6 lg:px-8 lg:pb-24 lg:pt-44">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(37,99,235,0.10),transparent_42%)]" />
        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
            <Handshake className="h-4 w-4 text-blue-600" />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Partnership announcement</span>
          </div>

          <div className="mx-auto mt-8 flex w-fit flex-col items-center gap-3 sm:flex-row sm:gap-7" aria-label="ProofLayer and SMMARUN">
            <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm sm:px-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
                <ShieldCheck className="h-5 w-5 text-blue-600" />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-slate-950 sm:text-xl">Proof<span className="text-blue-600">Layer</span></span>
            </div>
            <span className="font-mono text-sm font-semibold text-slate-400">×</span>
            <div className="flex items-center gap-2.5 rounded-2xl border border-orange-200 bg-white px-4 py-3 shadow-sm sm:px-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 font-mono text-sm font-bold text-orange-600">S</div>
              <span className="text-lg font-extrabold tracking-[0.08em] text-slate-950 sm:text-xl">SMMARUN</span>
            </div>
          </div>

          <h1 className="mx-auto mt-9 max-w-6xl text-5xl font-extrabold tracking-tighter text-slate-950 sm:text-6xl lg:text-7xl lg:leading-[1.03]">
            Defensible AI.
            <br />
            <span className="text-gradient">Proven together.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-4xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            The partnership combines ProofLayer&apos;s continuous AI red teaming, MCP runtime security, and coding-agent scanning with SMMARUN&apos;s AI governance and digital-risk practice, giving regulated enterprises AI that stays audit-ready.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[0.12em] text-slate-500">
            <span>San Francisco</span>
            <span className="text-blue-300">/</span>
            <time dateTime="2026-08-07">August 7, 2026</time>
          </div>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
              <Calendar className="h-4 w-4" /> Discuss a joint engagement
            </a>
            <a href="https://www.smmarun.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 hover:border-blue-300 hover:text-blue-700">
              Visit SMMARUN <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          <article className="space-y-7 text-[17px] leading-relaxed text-slate-700">
            <p className="text-xl font-medium leading-relaxed text-slate-950 sm:text-2xl">
              ProofLayer and SMMARUN have announced a strategic partnership to help regulated enterprises adopt AI that is both well governed and provable.
            </p>
            <p>
              SMMARUN will offer ProofLayer&apos;s AI security capabilities within its Defensible AI practice. Clients across banking, healthcare, and pharma gain a single route from AI governance to verifiable security evidence.
            </p>
            <p>
              Companies are investing in AI faster than ever, yet many remain uncertain about their governance. Regulators continue to raise the bar. In regulated industries, defensibility now means more than having the right policies on paper. Enterprises must show that AI systems have been tested against real attacks and can withstand examiner scrutiny.
            </p>
            <p>
              The two companies bring complementary strengths. SMMARUN contributes Responsible AI Governance, Digital Risk Governance, and a deep understanding of the Indian regulatory landscape. ProofLayer contributes continuous AI red teaming, MCP runtime security, and coding-agent scanning. Every verified finding becomes audit-ready evidence mapped to the frameworks boards, security teams, and auditors already request.
            </p>
            <p>
              Together, the companies help regulated enterprises move forward with AI while protecting customers and remaining ready for the audit window. SMMARUN sets the governance standard. ProofLayer supplies the ongoing proof that it holds.
            </p>
          </article>

          <aside className="h-fit rounded-3xl border border-blue-100 bg-blue-50/60 p-6 lg:sticky lg:top-28">
            <div className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Partnership at a glance</div>
            <div className="mt-6 space-y-6">
              <div>
                <div className="text-sm font-semibold text-slate-950">Regulated industries</div>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">Banking, healthcare, and pharma</p>
              </div>
              <div className="border-t border-blue-100 pt-5">
                <div className="text-sm font-semibold text-slate-950">Indian regulatory landscape</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {indiaFrameworks.map((item) => <span key={item} className="rounded-full border border-blue-100 bg-white px-2.5 py-1 text-xs font-medium text-slate-700">{item}</span>)}
                </div>
              </div>
              <div className="border-t border-blue-100 pt-5">
                <div className="text-sm font-semibold text-slate-950">Global standards</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {globalFrameworks.map((item) => <span key={item} className="rounded-full border border-blue-100 bg-white px-2.5 py-1 text-xs font-medium text-slate-700">{item}</span>)}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/70 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">The combined offering</p>
            <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">Govern the system. Test the system. Prove it holds.</h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {jointCapabilities.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_18px_45px_-36px_rgba(15,23,42,0.45)]">
                  <div className="flex items-center justify-between">
                    <div className="rounded-2xl bg-blue-50 p-3"><Icon className="h-6 w-6 text-blue-600" /></div>
                    <span className="font-mono text-xs font-semibold text-slate-400">{item.number}</span>
                  </div>
                  <div className="mt-7 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">{item.label}</div>
                  <h3 className="mt-2 text-xl font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-7 py-10 text-white sm:px-12 sm:py-14">
            <div className="absolute -right-16 -top-20 h-60 w-60 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="relative">
              <div className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">SMMARUN perspective</div>
              <blockquote className="mt-5 text-2xl font-medium leading-relaxed tracking-tight sm:text-3xl">
                “Defensible AI comes down to strong governance backed by real evidence. ProofLayer gives our clients continuous, verifiable proof that their AI systems withstand real-world attacks, mapped to the frameworks their examiners already use. We&apos;re proud to bring this to the enterprises shaping India&apos;s AI future.”
              </blockquote>
              <div className="mt-7 border-t border-white/15 pt-5">
                <div className="font-semibold">Preeti and Puneet Mohan</div>
                <div className="mt-1 text-sm text-slate-400">Co-Founders, SMMARUN</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-orange-50 p-2.5 font-mono font-bold text-orange-600">S</div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">About SMMARUN</h2>
            </div>
            <p className="mt-5 text-[16px] leading-relaxed text-slate-600">
              SMMARUN is a practice for Defensible AI in regulated enterprise. It delivers Responsible AI Governance, Digital Risk Governance, and the evidence that makes AI defensible for boards and operators. Calibrated to Indian regulatory reality and anchored to global standards, SMMARUN works with healthcare, pharma, and banking, as well as the institutions shaping AI policy.
            </p>
            <a href="https://www.smmarun.ai" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline">Visit smmarun.ai <ArrowUpRight className="h-4 w-4" /></a>
          </div>
          <div className="rounded-3xl border border-blue-100 bg-blue-50/40 p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-100 p-2.5"><ShieldCheck className="h-5 w-5 text-blue-600" /></div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">About ProofLayer</h2>
            </div>
            <p className="mt-5 text-[16px] leading-relaxed text-slate-600">
              ProofLayer provides continuous adversarial proof for enterprise AI. Its platform red-teams LLMs and agents, protects MCP traffic at runtime, scans coding agents before deployment, and turns verified findings into audit-ready evidence.
            </p>
            <Link href="/ai-red-teaming" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline">Explore ProofLayer AI red teaming <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-100 bg-blue-50/60 px-6 py-12 text-center sm:px-12">
          <Workflow className="mx-auto h-9 w-9 text-blue-600" />
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Bring governance and security evidence into one engagement.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Joint engagements will begin with a select group of regulated enterprises across banking, healthcare, and pharma.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-blue-700">
              <Calendar className="h-4 w-4" /> Talk to us
            </a>
            <a href="https://www.smmarun.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 hover:border-blue-400">
              Learn about SMMARUN <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
