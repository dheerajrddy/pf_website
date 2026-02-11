"use client"

import { motion } from "framer-motion"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

const integrations = [
  { name: "Twilio", description: "Media Streams" },
  { name: "OpenAI", description: "Realtime API" },
  { name: "Google", description: "Gemini Audio" },
  { name: "LiveKit", description: "WebRTC" },
]

export function Integration() {
  const [copied, setCopied] = useState(false)

  const codeSnippet = `<Stream url="wss://prooflayer.com/v1" />`

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8 bg-white">
      {/* Decorative blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="blob blob-blue absolute bottom-0 left-1/3 h-[300px] w-[300px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-600 mb-4">
              Integration
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Integrated in{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                seconds.
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              One line of configuration. No SDK required. Just point your existing voice
              infrastructure to ProofLayer.
            </p>

            {/* Integration logos */}
            <div className="mt-8">
              <p className="text-sm text-gray-500 mb-4">Compatible with</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {integrations.map((integration, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-sm font-medium text-gray-900">{integration.name}</span>
                    <span className="text-xs text-gray-500">{integration.description}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Code block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden shadow-lg">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-gray-500 font-mono ml-2">config.xml</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-indigo-500" />
                      <span className="text-indigo-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code content */}
              <div className="p-6 bg-gray-900">
                <pre className="text-sm font-mono overflow-x-auto">
                  <code>
                    <span className="text-gray-500">&lt;</span>
                    <span className="text-indigo-400">Stream</span>
                    {" "}
                    <span className="text-indigo-400">url</span>
                    <span className="text-gray-500">=</span>
                    <span className="text-amber-300">&quot;wss://prooflayer.com/v1&quot;</span>
                    {" "}
                    <span className="text-gray-500">/&gt;</span>
                  </code>
                </pre>
              </div>

              {/* Bottom caption */}
              <div className="px-6 py-4 bg-white border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  That&apos;s it. One line to protect every voice interaction.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
