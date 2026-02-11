"use client"

import { motion } from "framer-motion"
import { Phone, Bot, FileCheck, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

export function WedgeDiagram() {
  return (
    <section id="architecture" className="relative px-4 py-24 sm:px-6 lg:px-8 bg-[#FAFAFA]">
      {/* Decorative blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="blob blob-indigo absolute top-20 left-1/4 h-[300px] w-[300px]" />
        <div className="blob blob-purple absolute bottom-20 right-1/4 h-[250px] w-[250px]" />
      </div>

      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600 mb-4">
            How it Works
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your safety layer.{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Verifiable trust.
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Drop-in protection between your telephony provider and AI model. No rewrites needed.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-3xl border border-gray-200 bg-white p-8 md:p-12 shadow-xl shadow-gray-200/50">
            {/* Desktop Layout */}
            <div className="hidden md:flex items-center justify-between gap-6">
              {/* Your App */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="h-20 w-20 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center mb-3">
                  <Phone className="h-10 w-10 text-gray-500" />
                </div>
                <span className="text-sm font-medium text-gray-900">Your App</span>
                <span className="text-xs text-gray-500">Twilio / LiveKit</span>
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex-1 flex items-center"
              >
                <div className="h-0.5 flex-1 bg-gradient-to-r from-gray-300 to-indigo-400" />
                <ArrowRight className="h-5 w-5 text-indigo-500 -ml-1" />
              </motion.div>

              {/* ProofLayer (Center) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative flex flex-col items-center"
              >
                <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 p-2">
                  <Image
                    src="/logo.png"
                    alt="ProofLayer"
                    width={72}
                    height={72}
                    className="rounded-lg"
                  />
                </div>
                <span className="mt-3 text-sm font-semibold text-indigo-600">ProofLayer</span>

                {/* Safety checks */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-2 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] text-indigo-600">
                    <CheckCircle className="h-2.5 w-2.5" /> Injection
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] text-indigo-600">
                    <CheckCircle className="h-2.5 w-2.5" /> Deepfake
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] text-indigo-600">
                    <CheckCircle className="h-2.5 w-2.5" /> Policy
                  </span>
                </div>
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex-1 flex items-center"
              >
                <div className="h-0.5 flex-1 bg-gradient-to-r from-indigo-400 to-violet-400" />
                <ArrowRight className="h-5 w-5 text-indigo-500 -ml-1" />
              </motion.div>

              {/* AI Model */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="flex flex-col items-center"
              >
                <div className="h-20 w-20 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center mb-3">
                  <Bot className="h-10 w-10 text-indigo-500" />
                </div>
                <span className="text-sm font-medium text-gray-900">AI Model</span>
                <span className="text-xs text-gray-500">OpenAI / Google</span>
              </motion.div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden space-y-6">
              {/* Your App */}
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <Phone className="h-7 w-7 text-gray-500" />
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-900 block">Your App</span>
                  <span className="text-xs text-gray-500">Twilio / LiveKit</span>
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center">
                <div className="h-8 w-0.5 bg-gradient-to-b from-gray-300 to-indigo-400" />
              </div>

              {/* ProofLayer */}
              <div className="flex justify-center">
                <div className="flex flex-col items-center">
                  <div className="h-20 w-20 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 p-2">
                    <Image
                      src="/logo.png"
                      alt="ProofLayer"
                      width={56}
                      height={56}
                      className="rounded-lg"
                    />
                  </div>
                  <span className="mt-2 text-sm font-semibold text-indigo-600">ProofLayer</span>
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center">
                <div className="h-8 w-0.5 bg-gradient-to-b from-indigo-400 to-violet-400" />
              </div>

              {/* AI Model */}
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center">
                  <Bot className="h-7 w-7 text-indigo-500" />
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-900 block">AI Model</span>
                  <span className="text-xs text-gray-500">OpenAI / Google</span>
                </div>
              </div>
            </div>

            {/* Bottom stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-16 pt-8 border-t border-gray-100 grid grid-cols-3 gap-6 text-center"
            >
              <div>
                <div className="text-2xl font-bold text-gray-900">&lt;50ms</div>
                <div className="text-sm text-gray-500">Added Latency</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">Zero</div>
                <div className="text-sm text-gray-500">Code Changes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-500">Audit Coverage</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
