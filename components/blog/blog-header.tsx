"use client"

import { motion } from "framer-motion"
import { Clock, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { SocialShare } from "./social-share"

interface BlogHeaderProps {
  title: string
  subtitle?: string
  category: string
  categoryColor?: "violet" | "indigo" | "emerald" | "orange" | "rose"
  readTime: string
  date: string
  author?: string
}

const categoryColors = {
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
  },
  rose: {
    bg: "bg-rose-50",
    text: "text-rose-600",
  },
}

export function BlogHeader({
  title,
  subtitle,
  category,
  categoryColor = "violet",
  readTime,
  date,
  author = "ProofLayer Team",
}: BlogHeaderProps) {
  const colors = categoryColors[categoryColor]

  return (
    <header className="relative px-4 pt-44 pb-16 sm:px-6 lg:px-8 lg:pt-48 lg:pb-20 overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[600px] w-[800px] rounded-full bg-indigo-500/[0.04] blur-[100px]" />

      <div className="mx-auto max-w-4xl">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Category badge */}
          <span className={`inline-flex items-center rounded-full ${colors.bg} ${colors.text} px-4 py-1.5 text-sm font-medium mb-6`}>
            {category}
          </span>

          {/* Title */}
          <h1 className="text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-6 text-xl text-gray-500 lg:text-2xl">{subtitle}</p>
          )}

          {/* Meta info with social share */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-gray-100">
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xs font-medium">
                  PL
                </div>
                <span className="font-medium text-gray-700">{author}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {readTime}
              </span>
            </div>
            <SocialShare title={title} />
          </div>
        </motion.div>
      </div>
    </header>
  )
}
