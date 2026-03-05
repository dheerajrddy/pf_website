import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ClawHub Security Dashboard | ProofLayer",
  description:
    "Explore security scan results for 16,532+ ClawHub skills. Find vulnerabilities, review safe skills, and search the full catalog.",
}

const DASHBOARD_URL =
  "https://clawhub-dashboard-650992439798.us-central1.run.app/"

export default function DashboardPage() {
  return (
    <div className="flex h-screen flex-col pt-20">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-white px-4 py-2 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <a
          href={DASHBOARD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700"
        >
          Open in new tab
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Iframe */}
      <iframe
        src={DASHBOARD_URL}
        title="ClawHub Security Dashboard"
        className="w-full flex-1 border-0"
        allowFullScreen
      />
    </div>
  )
}
