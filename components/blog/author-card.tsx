"use client"

import { motion } from "framer-motion"
import { Twitter, Linkedin } from "lucide-react"
import Image from "next/image"
import type { Author } from "@/lib/blog-data"

interface AuthorCardProps {
  author: Author
  variant?: "inline" | "full"
}

export function AuthorCard({ author, variant = "full" }: AuthorCardProps) {
  const initials = author.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)

  if (variant === "inline") {
    return (
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm font-medium overflow-hidden">
          {author.avatar ? (
            <Image src={author.avatar} alt={author.name} width={40} height={40} />
          ) : (
            initials
          )}
        </div>
        <div>
          <span className="font-medium text-gray-900 text-sm">{author.name}</span>
          <span className="text-xs text-gray-500 block">{author.role}</span>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 rounded-2xl border border-gray-100/80 bg-white p-6 shadow-sm"
    >
      <div className="flex items-start gap-4">
        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xl font-medium overflow-hidden shrink-0">
          {author.avatar ? (
            <Image src={author.avatar} alt={author.name} width={64} height={64} />
          ) : (
            initials
          )}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{author.name}</h4>
          <p className="text-sm text-indigo-600 mb-2">{author.role}</p>
          {author.bio && <p className="text-sm text-gray-600 mb-3">{author.bio}</p>}
          <div className="flex gap-3">
            {author.twitter && (
              <a
                href={`https://twitter.com/${author.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            )}
            {author.linkedin && (
              <a
                href={`https://linkedin.com/company/${author.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
