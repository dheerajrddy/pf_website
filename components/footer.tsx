import { Linkedin, Github, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="ProofLayer Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-extrabold tracking-tighter text-white">
                Proof<span className="text-indigo-400">Layer</span>
              </span>
            </div>
            <p className="mt-4 text-base text-gray-400">Autonomous red-teaming for AI systems.</p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://linkedin.com/company/prooflayer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-gray-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/sinewaveai/agent-security-scanner-mcp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-gray-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/prooflayer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-gray-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            {/* Platform */}
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider text-gray-500">Platform</h4>
              <ul className="mt-4 space-y-3 text-base">
                <li>
                  <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#why-prooflayer" className="text-gray-400 hover:text-white transition-colors">
                    Why ProofLayer
                  </a>
                </li>
                <li>
                  <a href="#open-source" className="text-gray-400 hover:text-white transition-colors">
                    Open Source
                  </a>
                </li>
                <li>
                  <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider text-gray-500">Resources</h4>
              <ul className="mt-4 space-y-3 text-base">
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/sinewaveai/agent-security-scanner-mcp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/sinewaveai/agent-security-scanner-mcp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-gray-800 pt-10">
          <p className="text-sm text-gray-400">
            &copy; 2026 ProofLayer. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            ProofLayer is a product of SineWave AI, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
