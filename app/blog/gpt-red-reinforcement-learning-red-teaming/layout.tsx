import type { Metadata } from "next"

const title = "GPT-Red and Reinforcement Learning Red Teaming | ProofLayer"
const description = "Why reinforcement learning is becoming necessary for AI red teaming, what OpenAI's GPT-Red changes, and how model testing differs from agentic system security."
const path = "/blog/gpt-red-reinforcement-learning-red-teaming"

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "GPT-Red",
    "reinforcement learning red teaming",
    "AI red teaming",
    "agentic AI security",
    "automated red teaming",
    "self-play reinforcement learning",
    "prompt injection",
    "AI agent security",
  ],
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    type: "article",
    url: path,
    publishedTime: "2026-07-20T00:00:00+05:30",
    authors: ["ProofLayer Research Team"],
    images: [
      {
        url: "/prooflayer-og.png",
        width: 1200,
        height: 630,
        alt: "ProofLayer research on GPT-Red and reinforcement learning red teaming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/prooflayer-og.png"],
  },
}

export default function GptRedBlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
