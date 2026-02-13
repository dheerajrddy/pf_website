"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NpmStatsBadge } from "@/components/npm-stats"
import type { NpmStats } from "@/lib/npm-stats"

export function Header({ stats }: { stats?: NpmStats }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl transition-[border-color] ${
        scrolled ? "border-b border-gray-100/80" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="ProofLayer Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-xl font-extrabold tracking-tighter text-gray-900">
            Proof<span className="text-indigo-600">Layer</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#features" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
            Features
          </a>
          <a href="#demo" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
            How It Works
          </a>
          <Link href="/blog" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
            Blog
          </Link>
          {stats && <NpmStatsBadge stats={stats} />}
          <div className="mx-1 h-5 border-l border-gray-200" />
          <a
            href="https://www.npmjs.com/package/agent-security-scanner-mcp"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md"
          >
            Install Free
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-white/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-6">
            <a
              href="#features"
              className="rounded-xl px-4 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#demo"
              className="rounded-xl px-4 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <Link
              href="/blog"
              className="rounded-xl px-4 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="my-2 border-t border-gray-100" />
            <a
              href="https://www.npmjs.com/package/agent-security-scanner-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-indigo-600 px-4 py-3 text-base font-medium text-white hover:bg-indigo-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Install Free
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
