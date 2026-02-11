"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(Math.min((scrollTop / docHeight) * 100, 100))
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-16 left-0 right-0 h-1 bg-gray-100 z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-indigo-600 to-violet-500"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
    </motion.div>
  )
}
