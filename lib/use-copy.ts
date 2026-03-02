"use client"

import { useState, useCallback } from "react"

export function useCopyToClipboard(text: string, duration = 2000) {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), duration)
    } catch {
      // Clipboard API may fail in insecure contexts
    }
  }, [text, duration])

  return { copied, copy }
}
