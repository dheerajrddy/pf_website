"use client"

import { motion } from "framer-motion"
import { Package, MessageSquare, Code, Users } from "lucide-react"

const vectors = [
  {
    icon: Package,
    title: "Supply Chain",
    color: "text-violet-500 bg-violet-50",
    items: [
      "Compromised dependencies & packages",
      "Malicious IDE extensions",
      "Poisoned AI model repositories",
      "Backdoored agent framework components",
    ],
  },
  {
    icon: MessageSquare,
    title: "Prompt Injection",
    color: "text-rose-500 bg-rose-50",
    items: [
      "Code comments as injection vectors",
      "Context window manipulation",
      "Memory poisoning attacks",
      "MCP protocol exploitation",
    ],
  },
  {
    icon: Code,
    title: "Code Injection",
    color: "text-amber-500 bg-amber-50",
    items: [
      "Generated vulnerable code patterns",
      "Insecure API usage in outputs",
      "Unvalidated external inputs",
      "Payload distribution across files",
    ],
  },
  {
    icon: Users,
    title: "Social Engineering",
    color: "text-blue-500 bg-blue-50",
    items: [
      "Typosquatting attacks",
      "Malicious repository clones",
      "Fake documentation injection",
      "Trusted source impersonation",
    ],
  },
]

export function AttackVectorDiagram() {
  return (
    <div className="my-12 grid gap-4 sm:grid-cols-2">
      {vectors.map((vector, index) => (
        <motion.div
          key={vector.title}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          className="rounded-xl border border-gray-100 bg-white p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={`rounded-lg p-2 ${vector.color}`}>
              <vector.icon className="h-4 w-4" />
            </div>
            <h4 className="font-semibold text-gray-900 text-sm">{vector.title}</h4>
          </div>
          <ul className="space-y-2">
            {vector.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-gray-300 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}
