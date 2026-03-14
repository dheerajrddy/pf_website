"use client"

import { useState, useEffect } from "react"
import { Menu, X, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NpmStatsBadge } from "@/components/npm-stats"
import type { NpmStats } from "@/lib/npm-stats"

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Blog", href: "/blog", isPage: true },
  { label: "Dashboard", href: "/dashboard", isPage: true },
]

export function Header({ stats }: { stats?: NpmStats }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const closeMenu = () => setMobileMenuOpen(false)
    window.addEventListener("scroll", closeMenu, { passive: true })
    return () => window.removeEventListener("scroll", closeMenu)
  }, [mobileMenuOpen])

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
          {navLinks.map((link) =>
            link.isPage ? (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                {link.label}
              </a>
            )
          )}
          {stats && <NpmStatsBadge stats={stats} />}
          <div className="mx-1 h-5 border-l border-gray-200" />
          <a
            href="https://github.com/sinewaveai/agent-security-scanner-mcp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors hover:text-gray-900"
            aria-label="GitHub repository"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://calendly.com/divyachitimalla/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md"
          >
            Book a Demo
          </a>
          <a
            href="#install"
            className="rounded-full border border-gray-200 px-5 py-2 text-sm font-medium text-gray-700 transition-all hover:border-indigo-300 hover:text-gray-900"
          >
            Install Free
          </a>
        </nav>

        {/* Mobile: CTA always visible + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="https://calendly.com/divyachitimalla/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white"
          >
            Book a Demo
          </a>
          <button
            className="text-gray-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-white/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-6">
            {navLinks.map((link) =>
              link.isPage ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <div className="my-2 border-t border-gray-100" />
            <a
              href="https://github.com/sinewaveai/agent-security-scanner-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl px-4 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
            <a
              href="#install"
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
