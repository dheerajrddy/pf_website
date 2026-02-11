"use client"

import { Twitter, Linkedin, Link2, Check } from "lucide-react"
import { useState, useEffect } from "react"

interface SocialShareProps {
  title: string
  url?: string
  variant?: "horizontal" | "vertical"
}

export function SocialShare({ title, url, variant = "horizontal" }: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  const [shareUrl, setShareUrl] = useState(url || "")

  useEffect(() => {
    if (!url && typeof window !== "undefined") {
      setShareUrl(window.location.href)
    }
  }, [url])

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
  }

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const buttonClass =
    "flex items-center justify-center h-10 w-10 rounded-full bg-gray-50 border border-gray-200 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"

  return (
    <div className={`flex gap-2 ${variant === "vertical" ? "flex-col" : ""}`}>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        aria-label="Share on Twitter"
      >
        <Twitter className="h-4 w-4" />
      </a>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </a>
      <button onClick={copyLink} className={buttonClass} aria-label="Copy link">
        {copied ? <Check className="h-4 w-4 text-indigo-500" /> : <Link2 className="h-4 w-4" />}
      </button>
    </div>
  )
}
