"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"

interface RelatedPostsProps {
  currentSlug: string
  maxPosts?: number
}

const categoryColors = {
  violet: { bg: "bg-violet-50", text: "text-violet-600" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600" },
  rose: { bg: "bg-rose-50", text: "text-rose-600" },
  amber: { bg: "bg-amber-50", text: "text-amber-600" },
}

export function RelatedPosts({ currentSlug, maxPosts = 2 }: RelatedPostsProps) {
  const filteredPosts = blogPosts.filter((p) => p.slug !== currentSlug).slice(0, maxPosts)

  if (filteredPosts.length === 0) return null

  return (
    <section className="border-t border-gray-100 pt-12 mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-6">Continue Reading</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {filteredPosts.map((post, index) => {
            const colors = categoryColors[post.categoryColor as keyof typeof categoryColors]
            return (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <motion.article
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-2xl bg-white border border-gray-100/80 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <span
                    className={`inline-flex items-center rounded-full ${colors.bg} ${colors.text} px-3 py-1 text-xs font-medium mb-3`}
                  >
                    {post.category}
                  </span>
                  <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                  </div>
                </motion.article>
              </Link>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
