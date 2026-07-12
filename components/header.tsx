"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type NavLink = {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: "AI Red Teaming", href: "/ai-red-teaming" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
]

const productLinks = [
  {
    label: "Agent audit",
    href: "https://github.com/sinewaveai/agent-security-scanner-mcp",
  },
  {
    label: "Scan your skills",
    href: "https://clawhub-dashboard-650992439798.us-central1.run.app",
  },
]

export function Header() {
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
            Proof<span className="text-blue-600">Layer</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {/* Products dropdown */}
          <div className="group relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors group-hover:text-gray-900"
            >
              Products
              <ChevronDown className="h-3.5 w-3.5 text-gray-400 transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="w-56 rounded-xl border border-gray-100 bg-white p-2 shadow-lg shadow-gray-900/5">
                {productLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5 text-gray-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}

          <div className="mx-1 h-5 border-l border-gray-200" />
          <a
            href="https://calendly.com/divyachitimalla/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md"
          >
            Talk to us
          </a>
        </nav>

        {/* Mobile: CTA always visible + hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="https://calendly.com/divyachitimalla/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white"
          >
            Talk to us
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
        <div className="bg-white/95 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-6">
            <div className="px-4 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
              Products
            </div>
            {productLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-xl px-4 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
                <ArrowUpRight className="h-4 w-4 text-gray-400" />
              </a>
            ))}

            <div className="my-2 border-t border-gray-100" aria-hidden />

            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-xl px-4 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
