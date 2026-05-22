export interface BlogPost {
  slug: string
  title: string
  subtitle: string
  excerpt: string
  category: string
  categoryColor: "violet" | "indigo" | "emerald" | "rose" | "amber" | "slate"
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
    slug: "redteam-swarm-multi-expert-red-teaming",
    title: "redteam-swarm: Autonomous Multi-Expert Red-Teaming of Agentic LLM Systems",
    subtitle: "LoRA specialists, PAIR search, and GRPO self-play against a seven-agent Claude target",
    excerpt: "Six LoRA-fine-tuned attack experts over a shared Qwen3-8B base, coordinated by a UCB1 bandit and refined by PAIR + GRPO, reach 42.2% ASR at L2 on opus and 73.4% ASR on a held-out LangChain target — with one finding scoring maximum severity at zero search iterations.",
    category: "Research",
    categoryColor: "slate",
    readTime: "32 min read",
    date: "April 14, 2026",
    featured: true,
  },
  {
    slug: "twelve-vulnerabilities-scanner-demo",
    title: "Twelve Vulnerabilities, One File: How We Prove the Scanner Works",
    subtitle: "A Flask e-commerce backend with 12 planted vulnerabilities across three detection layers",
    excerpt: "We built a deliberately vulnerable Flask app with 12 security flaws — from SQL injection to hallucinated packages to three-hop taint chains. Here's a walkthrough of each one and how the scanner catches it.",
    category: "Product",
    categoryColor: "emerald",
    readTime: "14 min read",
    date: "February 18, 2026",
    featured: true,
  },
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
