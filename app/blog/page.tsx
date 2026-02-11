"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"

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
    bg: "bg-indigo-50",
    text: "text-indigo-600",
  },
  rose: {
    bg: "bg-rose-50",
    text: "text-rose-600",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
  },
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="px-4 pt-44 pb-16 sm:px-6 lg:px-8 lg:pt-48 lg:pb-20">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-6xl">
              Insights on AI{" "}
              <span className="text-gradient">Security</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto lg:text-xl">
              Deep dives into the technology, research, and best practices for securing AI agents across every modality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts — Uniform 3-column grid */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => {
              const colors = categoryColors[post.categoryColor as keyof typeof categoryColors]

              return (
                <Link href={`/blog/${post.slug}`} key={post.slug}>
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="group relative rounded-2xl border border-gray-100/80 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-flex items-center rounded-full ${colors.bg} ${colors.text} px-3 py-1 text-xs font-medium`}>
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-base text-gray-500 mt-1">{post.subtitle}</p>

                    <p className="mt-4 text-gray-600 text-sm line-clamp-2 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-50 group-hover:bg-indigo-50 transition-colors shrink-0">
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                      </div>
                    </div>
                  </motion.article>
                </Link>
              )
            })}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
