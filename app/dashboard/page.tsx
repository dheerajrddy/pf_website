import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, LockKeyhole, Calendar } from "lucide-react"
import { CALENDLY_URL } from "@/lib/links"

export const metadata = {
  title: "Dashboard — ProofLayer",
  description: "The ProofLayer dashboard is in private preview.",
  robots: { index: false, follow: false },
}

export default function DashboardPlaceholder() {
  return (
    <main className="relative min-h-screen bg-white bg-dot-pattern text-gray-900">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/4 h-[600px] w-[900px] rounded-full bg-blue-400/[0.04] blur-[100px]" />
      </div>
      <div className="relative">
        <Header />
        <section className="px-4 pt-40 pb-24 sm:px-6 lg:px-8 lg:pt-48 lg:pb-32">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/80 px-4 py-1.5 text-sm font-medium text-blue-700">
              <LockKeyhole className="h-3.5 w-3.5" />
              Private preview
            </div>
            <h1 className="text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-6xl">
              The dashboard is in{" "}
              <span className="text-gradient">private preview.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500">
              Authenticated access goes live as we onboard early teams. If
              you&apos;re running AI in production, get in touch — we&apos;ll walk
              you through a live tour.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:scale-[1.02]"
              >
                <Calendar className="h-4 w-4" />
                Talk to us
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition-all hover:bg-blue-50"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to ProofLayer
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  )
}
