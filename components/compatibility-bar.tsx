"use client"

import { motion } from "framer-motion"

const tools = [
  { name: "Claude Code" },
  { name: "Cursor" },
  { name: "Windsurf" },
  { name: "Copilot" },
  { name: "Cline" },
  { name: "VS Code" },
  { name: "Zed" },
]

export function CompatibilityBar() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
            Works with every major AI coding tool
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group rounded-xl border border-gray-100 bg-gray-50 px-6 py-3 transition-all hover:border-indigo-200 hover:bg-indigo-50/50"
            >
              <span className="text-sm font-medium text-gray-400 transition-colors group-hover:text-gray-900">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
