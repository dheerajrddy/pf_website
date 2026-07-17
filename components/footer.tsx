import { Linkedin, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const columns: {
  heading: string
  links: { label: string; href: string }[]
}[] = [
  {
    heading: "Products",
    links: [
      { label: "Code Scanner", href: "/#code-scanner" },
      { label: "Automated Red Teaming", href: "/#red-team" },
      { label: "MCP Runtime Security", href: "/#runtime-security" },
      { label: "Compliance", href: "/#compliance" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    heading: "Open Source",
    links: [
      { label: "Code Scanner", href: "/#code-scanner" },
      { label: "Runtime Rules", href: "https://github.com/sinewaveai/prooflayer-rules" },
      { label: "Blog", href: "/blog" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr] md:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="ProofLayer Logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-lg font-extrabold tracking-tighter text-white">
                Proof<span className="text-blue-400">Layer</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              Continuous adversarial proof for enterprise AI. Attack, detect, and prove from one evidence trail.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/proof-layer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-gray-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/sinewaveai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-gray-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-1 border-t border-gray-800 pt-8 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 ProofLayer. All rights reserved.</p>
          <p>A product of SineWave AI, Inc.</p>
        </div>
      </div>
    </footer>
  )
}
