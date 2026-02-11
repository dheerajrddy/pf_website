"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Code2, AlertTriangle, CheckCircle2, Shield, Package, Fingerprint } from "lucide-react"

const tabs = [
  {
    id: "write",
    label: "The Agent Writes",
    icon: Code2,
  },
  {
    id: "catch",
    label: "The Scanner Catches",
    icon: AlertTriangle,
  },
  {
    id: "fix",
    label: "Auto-Fix Applied",
    icon: CheckCircle2,
  },
]

const capabilities = [
  {
    icon: Shield,
    title: "Code Vulnerability Scanning",
    description: "359 rules",
    metric: "359 rules",
  },
  {
    icon: Package,
    title: "Package Hallucination Detection",
    description: "4.3M packages",
    metric: "4.3M packages",
  },
  {
    icon: Fingerprint,
    title: "Prompt Injection Firewall",
    description: "80%+ detection",
    metric: "80%+ detection",
  },
]

export function DemoSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const nextTab = useCallback(() => {
    setActiveTab((prev) => (prev + 1) % tabs.length)
  }, [])

  useEffect(() => {
    if (isHovering) return
    const interval = setInterval(nextTab, 4000)
    return () => clearInterval(interval)
  }, [isHovering, nextTab])

  return (
    <section id="demo" className="scroll-mt-24 px-4 py-32 sm:px-6 lg:px-8 lg:py-48">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600/80">
            See It In Action
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
            Detect. Fix. Ship&nbsp;secure.
          </h2>
        </motion.div>

        {/* Demo terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-2xl">
            {/* Window chrome + Tab bar */}
            <div className="border-b border-gray-100">
              {/* Window dots and path */}
              <div className="flex items-center gap-2 px-4 pt-3 pb-0">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-indigo-400" />
                </div>
                <span className="ml-2 font-mono text-xs text-gray-400">~/project/src</span>
              </div>
              {/* Tabs */}
              <div className="flex mt-2">
                {tabs.map((tab, index) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(index)}
                      className={`flex flex-1 items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium transition-all ${
                        activeTab === index
                          ? "border-b-2 border-indigo-600 bg-white text-gray-900"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{tab.label}</span>
                      <span className="sm:hidden">{tab.label.split(" ").pop()}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Terminal body */}
            <div className="bg-gray-950 p-6 sm:p-8 font-mono text-sm leading-relaxed min-h-[280px]">
              {activeTab === 0 && (
                <motion.div
                  key="write"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-gray-500">{"// Claude Code generates a database query"}</div>
                  <div className="mt-2">
                    <span className="text-violet-400">app</span>
                    <span className="text-gray-300">.</span>
                    <span className="text-blue-400">get</span>
                    <span className="text-gray-300">(</span>
                    <span className="text-emerald-400">&apos;/user/:id&apos;</span>
                    <span className="text-gray-300">, (</span>
                    <span className="text-orange-300">req</span>
                    <span className="text-gray-300">, </span>
                    <span className="text-orange-300">res</span>
                    <span className="text-gray-300">) =&gt; {"{"}</span>
                  </div>
                  <div>
                    <span className="text-gray-300">{"  "}</span>
                    <span className="text-violet-400">const</span>
                    <span className="text-gray-300"> query = </span>
                    <span className="text-emerald-400">&quot;SELECT * FROM users WHERE id = &quot;</span>
                    <span className="text-gray-300"> + </span>
                    <span className="text-orange-300">req</span>
                    <span className="text-gray-300">.</span>
                    <span className="text-blue-400">params</span>
                    <span className="text-gray-300">.</span>
                    <span className="text-blue-400">id</span>
                    <span className="text-gray-300">;</span>
                  </div>
                  <div>
                    <span className="text-gray-300">{"  "}</span>
                    <span className="text-violet-400">db</span>
                    <span className="text-gray-300">.</span>
                    <span className="text-blue-400">query</span>
                    <span className="text-gray-300">(query, (</span>
                    <span className="text-orange-300">err</span>
                    <span className="text-gray-300">, </span>
                    <span className="text-orange-300">result</span>
                    <span className="text-gray-300">) =&gt; </span>
                    <span className="text-orange-300">res</span>
                    <span className="text-gray-300">.</span>
                    <span className="text-blue-400">json</span>
                    <span className="text-gray-300">(result));</span>
                  </div>
                  <div>
                    <span className="text-gray-300">{"}"});</span>
                  </div>
                </motion.div>
              )}

              {activeTab === 1 && (
                <motion.div
                  key="catch"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-red-500/20 px-2 py-0.5 text-xs font-bold text-red-400">CRITICAL</span>
                    <span className="text-white font-semibold">SQL Injection (CWE-89)</span>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div>
                      <span className="text-gray-500">Line 3: </span>
                      <span className="text-amber-400">String concatenation in SQL query</span>
                    </div>
                    <div>
                      <span className="text-gray-500">OWASP: </span>
                      <span className="text-gray-300">A03:2021 - Injection</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Risk: </span>
                      <span className="text-gray-300">User input directly interpolated into query</span>
                    </div>
                  </div>
                  <div className="mt-6 border-t border-gray-800 pt-4">
                    <span className="text-indigo-400">Auto-fix available →</span>
                    <span className="text-gray-400"> Use parameterized query</span>
                  </div>
                </motion.div>
              )}

              {activeTab === 2 && (
                <motion.div
                  key="fix"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs font-bold text-emerald-400">FIXED</span>
                    <span className="text-gray-400">Parameterized query applied</span>
                  </div>
                  <div>
                    <span className="text-violet-400">app</span>
                    <span className="text-gray-300">.</span>
                    <span className="text-blue-400">get</span>
                    <span className="text-gray-300">(</span>
                    <span className="text-emerald-400">&apos;/user/:id&apos;</span>
                    <span className="text-gray-300">, (</span>
                    <span className="text-orange-300">req</span>
                    <span className="text-gray-300">, </span>
                    <span className="text-orange-300">res</span>
                    <span className="text-gray-300">) =&gt; {"{"}</span>
                  </div>
                  <div className="border-l-2 border-emerald-500/50 pl-3">
                    <span className="text-gray-300">{"  "}</span>
                    <span className="text-violet-400">const</span>
                    <span className="text-gray-300"> query = </span>
                    <span className="text-emerald-400">&quot;SELECT * FROM users WHERE id = ?&quot;</span>
                    <span className="text-gray-300">;</span>
                  </div>
                  <div className="border-l-2 border-emerald-500/50 pl-3">
                    <span className="text-gray-300">{"  "}</span>
                    <span className="text-violet-400">db</span>
                    <span className="text-gray-300">.</span>
                    <span className="text-blue-400">query</span>
                    <span className="text-gray-300">(query, [</span>
                    <span className="text-orange-300">req</span>
                    <span className="text-gray-300">.</span>
                    <span className="text-blue-400">params</span>
                    <span className="text-gray-300">.</span>
                    <span className="text-blue-400">id</span>
                    <span className="text-gray-300">], (</span>
                    <span className="text-orange-300">err</span>
                    <span className="text-gray-300">, </span>
                    <span className="text-orange-300">result</span>
                    <span className="text-gray-300">) =&gt; </span>
                    <span className="text-orange-300">res</span>
                    <span className="text-gray-300">.</span>
                    <span className="text-blue-400">json</span>
                    <span className="text-gray-300">(result));</span>
                  </div>
                  <div>
                    <span className="text-gray-300">{"}"});</span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 flex justify-center gap-2">
            {tabs.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className="relative h-1.5 overflow-hidden rounded-full bg-gray-200"
                style={{ width: activeTab === index ? 32 : 6 }}
              >
                {activeTab === index && !isHovering && (
                  <motion.div
                    key={`progress-${activeTab}`}
                    className="absolute inset-0 rounded-full bg-indigo-600"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 4, ease: "linear" }}
                    style={{ transformOrigin: "left" }}
                  />
                )}
                {activeTab === index && isHovering && (
                  <div className="absolute inset-0 rounded-full bg-indigo-600" />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Capability pills */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl border border-gray-100 bg-white p-6 text-center hover:border-indigo-100 hover:shadow-sm transition-all"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
                  <Icon className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-gray-900">{cap.title}</h3>
                <p className="mt-1 font-mono text-sm text-indigo-600">{cap.metric}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
