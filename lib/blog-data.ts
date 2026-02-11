export interface BlogPost {
  slug: string
  title: string
  subtitle: string
  excerpt: string
  category: string
  categoryColor: "violet" | "indigo" | "emerald" | "rose" | "amber"
  readTime: string
  date: string
  featured: boolean
}

export interface Author {
  name: string
  role: string
  avatar?: string
  twitter?: string
  linkedin?: string
  bio?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "deepfake-detection",
    title: "Real-Time Deepfake Detection Without STT: A Technical Deep Dive",
    subtitle: "How audio-first guardrails outperform text-based approaches for voice security",
    excerpt: "Direct audio analysis can achieve near-perfect deepfake detection while maintaining real-time performance. We explore the science of spectral forensics, our dual-task WavLM architecture, and honest benchmarking on ASVspoof 2019.",
    category: "Technical Research",
    categoryColor: "violet",
    readTime: "12 min read",
    date: "January 30, 2026",
    featured: true,
  },
  {
    slug: "coding-agent-security",
    title: "The Growing Attack Surface: AI Coding Agent Security in 2025",
    subtitle: "From Amazon Q exploits to Cursor crypto drains — real incidents, real lessons",
    excerpt: "AI coding agents are becoming a prime attack vector. A comprehensive look at real-world incidents including the Checkmarx 'Lies-in-the-Loop' bypass, Langflow code injection, and what they mean for your security posture.",
    category: "Security Analysis",
    categoryColor: "indigo",
    readTime: "10 min read",
    date: "January 26, 2026",
    featured: true,
  },
  {
    slug: "voice-ai-security",
    title: "The Anatomy of Voice AI Security",
    subtitle: "Why Text-Based Guardrails Aren't Enough for the Audio-Native Era",
    excerpt: "Voice AI is experiencing explosive growth, but security tools built for text don't work for voice. Learn about the threat landscape, audio-level attacks, and how to protect voice agents in production.",
    category: "Engineering",
    categoryColor: "rose",
    readTime: "5 min read",
    date: "January 18, 2026",
    featured: true,
  },
]

export const authors: Record<string, Author> = {
  research: {
    name: "ProofLayer Research Team",
    role: "Security Research",
    bio: "Our research team focuses on advancing the frontier of AI security, from audio forensics and deepfake detection to code generation safety.",
    twitter: "prooflayer",
    linkedin: "prooflayer",
  },
  engineering: {
    name: "ProofLayer Engineering",
    role: "Platform Engineering",
    bio: "Building the infrastructure that powers secure AI agents at scale.",
    twitter: "prooflayer",
    linkedin: "prooflayer",
  },
}
