"use client"

import { useState, useCallback } from "react"

export function useCopyToClipboard(text: string, duration = 2000) {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(() => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), duration)
  }, [text, duration])

  return { copied, copy }
}
