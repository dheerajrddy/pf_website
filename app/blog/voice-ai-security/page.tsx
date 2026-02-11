"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHeader } from "@/components/blog/blog-header"
import { ThreatFlowDiagram } from "@/components/blog/threat-flow-diagram"
import { ArchitectureDiagram } from "@/components/blog/architecture-diagram"
import { SafetyPipelineDiagram } from "@/components/blog/safety-pipeline-diagram"
import { ReadingProgressBar } from "@/components/blog/reading-progress-bar"
import { TableOfContents, type TocItem } from "@/components/blog/table-of-contents"

const tocItems: TocItem[] = [
  { id: "threat-landscape", title: "The Voice AI Threat Landscape", level: 2 },
  { id: "text-guardrails-fail", title: "Why Text-Based Guardrails Fail", level: 2 },
  { id: "prooflayer-architecture", title: "The ProofLayer Architecture", level: 2 },
  { id: "safety-pipeline", title: "Inside the Safety Pipeline", level: 2 },
  { id: "integration", title: "Integration: One Line", level: 2 },
  { id: "future", title: "The Future of Voice AI Security", level: 2 },
]

export default function VoiceAISecurityPost() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <ReadingProgressBar />

      <BlogHeader
        title="The Anatomy of Voice AI Security"
        subtitle="Why Text-Based Guardrails Aren't Enough"
        category="Engineering"
        categoryColor="rose"
        readTime="5 min read"
        date="January 18, 2026"
      />

      {/* Article Content with TOC Sidebar */}
      <article className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12">
            {/* Main Content */}
            <div className="max-w-3xl">
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="prose-section mb-16"
              >
                <p className="text-xl text-gray-600 leading-relaxed mb-8 border-l-4 border-indigo-500 pl-6 italic">
                  Voice AI is experiencing explosive growth. From customer service bots to healthcare agents,
                  voice-first interfaces are becoming the default way humans interact with AI. But there&apos;s
                  a problem: the security tools built for text-based AI don&apos;t work for voice.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The rise of conversational AI has been nothing short of remarkable. OpenAI&apos;s Realtime API,
                  Google&apos;s Gemini Audio, and platforms like Twilio and LiveKit have made it trivially easy
                  to deploy voice agents that can handle everything from appointment scheduling to complex
                  customer support scenarios.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  But as these systems proliferate, a critical gap has emerged: <strong>the security infrastructure
                    hasn&apos;t kept pace</strong>. Most AI safety tools were designed for text. They analyze prompts,
                  filter outputs, and enforce policies&mdash;all at the text level. Voice is different.
                </p>
              </motion.div>

              {/* Section: The Threat Landscape */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 id="threat-landscape" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-16 mb-6 scroll-mt-24">
                  The Voice AI Threat Landscape
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Voice AI systems face a unique set of threats that text-based guardrails simply cannot detect.
                  These attacks operate at the audio level, exploiting the gap between what&apos;s spoken and
                  what traditional systems can analyze.
                </p>

                <ThreatFlowDiagram />

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Let&apos;s examine each of these threats in detail:
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Voice Injection Attacks</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Similar to SQL injection in web applications, voice injection attacks embed malicious
                  commands within seemingly normal audio. An attacker might speak a phrase that sounds
                  innocuous to human listeners but contains hidden instructions that manipulate the AI agent&apos;s
                  behavior. For example, an attacker could embed ultrasonic commands inaudible to human operators but picked up by the agent&apos;s microphone, or craft adversarial audio that transcribes to benign text while carrying malicious intent at the acoustic level. These attacks can bypass transcription-based filters because the malicious
                  content is encoded in audio characteristics, not just words.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Deepfake Voice Cloning</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  With just a few seconds of audio, modern AI can generate synthetic voices that are
                  virtually indistinguishable from the real person. Voice fraud increased by 350% in 2024,
                  with attackers using cloned voices to impersonate executives, customers, and authorized
                  users. A voice agent that can&apos;t detect synthetic audio is a liability waiting to happen.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Prompt Hijacking</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Attackers craft phrases designed to manipulate the underlying language model, causing
                  it to ignore its instructions or reveal sensitive information. In voice contexts, these
                  attacks can be hidden within natural-sounding speech, making them nearly impossible to
                  detect through simple keyword filtering.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Policy Bypass</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Even well-designed voice agents can be manipulated into taking unauthorized actions.
                  Social engineering combined with voice manipulation can trick agents into transferring
                  funds, disclosing personal information, or executing actions outside their intended scope.
                </p>
              </motion.div>

              {/* Section: Why Text Guardrails Fail */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 id="text-guardrails-fail" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-16 mb-6 scroll-mt-24">
                  Why Text-Based Guardrails Fail
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Audio carries information that text cannot capture: prosodic features, spectral artifacts,
                  temporal patterns, and voice biometrics. When you transcribe audio to text and then analyze
                  the text, those critical signals are gone. For a deeper look at how spectral forensics
                  detects these signals, see our{" "}
                  <a href="/blog/deepfake-detection" className="text-indigo-600 hover:text-indigo-700 underline">
                    deepfake detection deep dive
                  </a>.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  This is why voice AI security requires a fundamentally different approach&mdash;one that
                  operates at the audio level, analyzing the actual waveform rather than its textual
                  representation.
                </p>
              </motion.div>

              {/* Section: The ProofLayer Architecture */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 id="prooflayer-architecture" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-16 mb-6 scroll-mt-24">
                  The ProofLayer Architecture
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ProofLayer takes a &ldquo;wedge&rdquo; approach to voice AI security. Rather than requiring you
                  to rewrite your application or integrate complex SDKs, ProofLayer sits transparently
                  between your voice infrastructure and your AI model.
                </p>

                <ArchitectureDiagram />

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Key advantages: zero code changes (just point your WebSocket at ProofLayer), provider-agnostic
                  compatibility (Twilio, LiveKit, OpenAI, Google), real-time processing under 50ms added latency,
                  and a complete audit trail for SOC2/HIPAA compliance.
                </p>

              </motion.div>

              {/* Section: Inside the Safety Pipeline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 id="safety-pipeline" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-16 mb-6 scroll-mt-24">
                  Inside the Safety Pipeline
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  When audio flows through ProofLayer, it passes through a multi-stage safety pipeline
                  designed for both speed and accuracy. Here&apos;s how it works:
                </p>

                <SafetyPipelineDiagram />

                <ol className="space-y-4 mb-6 list-none">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-600 shrink-0">1</span>
                    <span className="text-lg text-gray-700"><strong>Feature Extraction:</strong> Spectral characteristics, prosodic features, semantic embeddings, and temporal patterns are extracted simultaneously from the raw audio stream.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-600 shrink-0">2</span>
                    <span className="text-lg text-gray-700"><strong>Parallel Detection:</strong> Three specialized models run concurrently&mdash;injection detection, deepfake detection, and policy validation&mdash;each producing a confidence score.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-600 shrink-0">3</span>
                    <span className="text-lg text-gray-700"><strong>Decision &amp; Enforcement:</strong> Based on combined model outputs, requests are allowed, flagged, or blocked in real-time with configurable thresholds.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-600 shrink-0">4</span>
                    <span className="text-lg text-gray-700"><strong>Audit Logging:</strong> Every decision is logged with timestamp, session ID, confidence scores, and reasoning for compliance purposes.</span>
                  </li>
                </ol>
              </motion.div>

              {/* Section: Integration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 id="integration" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-16 mb-6 scroll-mt-24">
                  Integration: One Line
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We&apos;ve obsessed over making integration as simple as possible. If you&apos;re already
                  using WebSocket-based voice streaming, you can add ProofLayer in literally one line:
                </p>

                <pre className="bg-gray-950 text-gray-100 p-6 rounded-xl text-sm mb-8 shadow-lg font-mono overflow-x-auto">
{`<Stream url="wss://prooflayer.com/v1" />`}
                </pre>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ProofLayer works with Twilio Media Streams, OpenAI Realtime API, Google Gemini Audio, and LiveKit WebRTC.
                </p>
              </motion.div>

              {/* Conclusion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 id="future" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-16 mb-6 scroll-mt-24">
                  The Future of Voice AI Security
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Voice AI is no longer a novelty&mdash;it&apos;s becoming critical infrastructure. Healthcare
                  providers use voice agents for patient intake. Financial institutions use them for
                  customer service. Enterprises use them for internal support systems. The stakes are
                  real, and the attack surface is expanding.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  ProofLayer was built from the ground up for the audio-native era. We believe security
                  should be invisible to users but comprehensive in its protection. We believe compliance
                  shouldn&apos;t require an army of engineers. And we believe that protecting voice AI
                  shouldn&apos;t require sacrificing performance.
                </p>

                <p className="text-xl font-medium text-gray-900 mb-8">
                  Diligence, automated. That&apos;s the future of voice AI security.
                </p>

              </motion.div>
            </div>

            {/* Sidebar with TOC */}
            <aside className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
