"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check, Loader2 } from "lucide-react"

interface WaitlistFormProps {
  variant?: "hero" | "cta"
  className?: string
}

export function WaitlistForm({ variant = "hero", className = "" }: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")

    // Simulate API call — replace with actual endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setStatus("success")
  }

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 rounded-full bg-indigo-50 px-6 py-3.5 text-indigo-700"
          >
            <Check className="h-4 w-4" />
            <span className="text-sm font-medium">You&apos;re on the list. We&apos;ll be in touch.</span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className={`flex gap-3 ${variant === "hero" ? "flex-col sm:flex-row" : "flex-col sm:flex-row justify-center"}`}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className="flex-1 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:max-w-xs"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:opacity-70"
            >
              {status === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  Get Early Access
                  <ArrowRight className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
      {status !== "success" && (
        <p className={`mt-3 text-xs text-gray-400 ${variant === "cta" ? "text-center" : ""}`}>
          Free during beta. No credit card required.
        </p>
      )}
    </div>
  )
}
