"use client"

import { motion } from "framer-motion"
import { Phone, Shield, Bot, CheckCircle, ArrowRight } from "lucide-react"

export function ArchitectureDiagram() {
  return (
    <div className="my-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-2">ProofLayer Wedge Architecture</h3>
        <p className="text-sm text-gray-500">Drop-in protection between your app and AI model</p>
      </motion.div>

      {/* Architecture Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-gray-200 bg-white p-6 md:p-10 shadow-lg"
      >
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between gap-4">
            {/* Your App */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="h-20 w-20 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center">
                <Phone className="h-10 w-10 text-gray-500" />
              </div>
              <span className="mt-3 text-sm font-medium text-gray-900">Your App</span>
              <span className="text-xs text-gray-500">Twilio / LiveKit</span>
            </motion.div>

            {/* Arrow 1 */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex-1 flex items-center max-w-[100px]"
            >
              <div className="h-0.5 flex-1 bg-gradient-to-r from-gray-300 to-indigo-400" />
              <ArrowRight className="h-5 w-5 text-indigo-500 -ml-1" />
            </motion.div>

            {/* ProofLayer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center relative"
            >
              <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                <Shield className="h-12 w-12 text-white" />
              </div>
              <span className="mt-3 text-sm font-semibold text-indigo-600">ProofLayer</span>
              <span className="text-xs text-gray-500">Safety Proxy</span>

              {/* Pulsing ring */}
              <motion.div
                className="absolute inset-0 -m-2 rounded-2xl border-2 border-indigo-300"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            {/* Arrow 2 */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex-1 flex items-center max-w-[100px]"
            >
              <div className="h-0.5 flex-1 bg-gradient-to-r from-indigo-400 to-indigo-400" />
              <ArrowRight className="h-5 w-5 text-indigo-500 -ml-1" />
            </motion.div>

            {/* AI Model */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="h-20 w-20 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center">
                <Bot className="h-10 w-10 text-indigo-500" />
              </div>
              <span className="mt-3 text-sm font-medium text-gray-900">AI Model</span>
              <span className="text-xs text-gray-500">OpenAI / Google</span>
            </motion.div>
          </div>

          {/* Safety Engine Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex justify-center"
          >
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-6 max-w-md">
              <h4 className="text-sm font-semibold text-gray-900 mb-4 text-center">Safety Engine</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Voice Injection Detection",
                  "Deepfake Authentication",
                  "Policy Enforcement",
                  "Compliance Audit Logs",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <CheckCircle className="h-4 w-4 text-indigo-500 shrink-0" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          {/* Your App */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
            <div className="h-14 w-14 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
              <Phone className="h-7 w-7 text-gray-500" />
            </div>
            <div>
              <span className="text-sm font-medium text-gray-900">Your App</span>
              <span className="text-xs text-gray-500 block">Twilio / LiveKit</span>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="h-8 w-0.5 bg-gradient-to-b from-gray-300 to-indigo-400" />
          </div>

          {/* ProofLayer */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-indigo-50 border border-indigo-100">
            <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 shrink-0">
              <Shield className="h-7 w-7 text-white" />
            </div>
            <div>
              <span className="text-sm font-semibold text-indigo-600">ProofLayer</span>
              <span className="text-xs text-gray-500 block">Safety Proxy</span>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="h-8 w-0.5 bg-gradient-to-b from-indigo-400 to-indigo-400" />
          </div>

          {/* AI Model */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-indigo-50 border border-indigo-100">
            <div className="h-14 w-14 rounded-xl bg-indigo-100 border border-indigo-200 flex items-center justify-center shrink-0">
              <Bot className="h-7 w-7 text-indigo-500" />
            </div>
            <div>
              <span className="text-sm font-medium text-gray-900">AI Model</span>
              <span className="text-xs text-gray-500 block">OpenAI / Google</span>
            </div>
          </div>

          {/* Safety Engine */}
          <div className="mt-6 rounded-xl bg-gray-50 border border-gray-200 p-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Safety Engine</h4>
            <div className="space-y-2">
              {[
                "Voice Injection Detection",
                "Deepfake Authentication",
                "Policy Enforcement",
                "Compliance Audit Logs",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-indigo-500 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-3 gap-4 text-center"
        >
          <div>
            <div className="text-xl font-bold text-gray-900">&lt;50ms</div>
            <div className="text-xs text-gray-500">Added Latency</div>
          </div>
          <div>
            <div className="text-xl font-bold text-gray-900">Zero</div>
            <div className="text-xs text-gray-500">Code Changes</div>
          </div>
          <div>
            <div className="text-xl font-bold text-gray-900">100%</div>
            <div className="text-xs text-gray-500">Audit Coverage</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
