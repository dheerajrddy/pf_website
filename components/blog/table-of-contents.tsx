"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { List, X } from "lucide-react"

export interface TocItem {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  items: TocItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")
  const [progress, setProgress] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  // Intersection Observer for active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0% -80% 0%" }
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items])

  // Reading progress calculation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(Math.min((scrollTop / docHeight) * 100, 100))
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Desktop: Sticky Sidebar */}
      <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-auto">
        <div className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <List className="h-4 w-4" />
          On this page
        </div>
        {/* Progress bar */}
        <div className="h-1 w-full bg-gray-100 rounded-full mb-4">
          <div
            className="h-full bg-indigo-500 rounded-full transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`block py-1 text-sm text-left transition-colors w-full ${
                  item.level === 3 ? "pl-4" : ""
                } ${
                  activeId === item.id
                    ? "text-indigo-600 font-medium"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile: Floating button + drawer */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-gray-200"
        >
          {isOpen ? <X className="h-4 w-4" /> : <List className="h-4 w-4" />}
          <span className="text-sm font-medium">{Math.round(progress)}%</span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-14 right-0 w-72 bg-white rounded-xl shadow-xl border border-gray-200 p-4 max-h-80 overflow-auto"
            >
              <div className="text-sm font-semibold text-gray-900 mb-3">On this page</div>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`block py-1.5 text-sm text-left w-full ${
                        item.level === 3 ? "pl-4" : ""
                      } ${
                        activeId === item.id ? "text-indigo-600 font-medium" : "text-gray-600"
                      }`}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
