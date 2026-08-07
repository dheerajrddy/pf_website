"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CALENDLY_URL } from "@/lib/links"

const navGroups = [
  {
    label: "Products",
    links: [
      { label: "Coding Agent Security", href: "/code-scanner", detail: "Open-source security for coding agents" },
      { label: "Automated Red Teaming", href: "/ai-red-teaming", detail: "Scheduled attacks across deployed AI systems" },
      { label: "MCP Runtime Security", href: "/mcp-security", detail: "Inline protection during serving and inference" },
    ],
  },
]

const directLinks = [
  { label: "Partners", href: "/partners" },
  { label: "Compliance", href: "/#compliance" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
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
    <header className={`fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-2xl transition-[border-color] ${scrolled ? "border-b border-gray-100/80" : "border-b border-transparent"}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/prooflayer-logo.png" alt="ProofLayer shield" width={40} height={40} className="rounded-lg" priority />
          <span className="text-xl font-extrabold tracking-tighter text-gray-900">Proof<span className="text-blue-600">Layer</span></span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navGroups.map((group) => (
            <div key={group.label} className="group relative">
              <button type="button" className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900" aria-haspopup="true">
                {group.label}<ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="invisible absolute left-1/2 top-full z-20 w-72 -translate-x-1/2 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="rounded-2xl border border-gray-200 bg-white p-2 shadow-xl shadow-gray-900/10">
                  {group.links.map((link) => (
                    <Link key={link.label} href={link.href} className="block rounded-xl px-4 py-3 hover:bg-gray-50">
                      <span className="block text-sm font-semibold text-gray-900">{link.label}</span>
                      <span className="mt-0.5 block text-xs text-gray-500">{link.detail}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {directLinks.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">{link.label}</Link>
          ))}
          <div className="h-5 border-l border-gray-200" />
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md">Talk to us</a>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white">Talk to us</a>
          <button className="text-gray-500" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu" aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-gray-100 bg-white/95 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col px-4 py-5" aria-label="Mobile navigation">
            {navGroups.map((group) => (
              <div key={group.label} className="border-b border-gray-100 py-3">
                <p className="px-4 pb-1 font-mono text-xs font-semibold uppercase tracking-wider text-gray-400">{group.label}</p>
                {group.links.map((link) => (
                  <Link key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between rounded-xl px-4 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50">
                    {link.label}<ArrowUpRight className="h-4 w-4 text-gray-300" />
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-3">
              {directLinks.map((link) => (
                <Link key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block rounded-xl px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50">{link.label}</Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
