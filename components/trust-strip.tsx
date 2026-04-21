"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"

export function TrustStrip() {
  return (
    <section className="relative border-y border-gray-100 bg-white/60 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-gray-600">
            Built by former Google engineers — contributors to{" "}
            <span className="font-semibold text-gray-900">Nvidia Garak</span>,
            the framework that defined the AI security category.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
