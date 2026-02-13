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
    slug: "autonomous-agent-security",
    title: "Securing Autonomous AI Assistants: The New Attack Surface",
    subtitle: "Why AI agents with system access need a prompt firewall",
    excerpt: "Autonomous AI assistants like OpenClaw can manage your email, files, and payments. That power creates 31 distinct attack patterns across 5 categories. Here's the threat model — and how to defend against it.",
    category: "Security Analysis",
    categoryColor: "amber",
    readTime: "12 min read",
    date: "February 12, 2026",
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
]

export const authors: Record<string, Author> = {
  research: {
    name: "ProofLayer Research Team",
    role: "Security Research",
    bio: "Our research team focuses on securing autonomous AI agents — from prompt injection defense to supply-chain verification.",
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
