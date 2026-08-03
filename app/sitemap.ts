import type { MetadataRoute } from "next"

const siteUrl = "https://www.proof-layer.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, lastModified: "2026-07-30", changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/code-scanner`, lastModified: "2026-07-30", changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/ai-red-teaming`, lastModified: "2026-07-25", changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/mcp-security`, lastModified: "2026-07-25", changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/pricing`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/blog`, lastModified: "2026-08-03", changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/blog/agentdojo-benchmark-results`, lastModified: "2026-08-03", changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/blog/gpt-red-reinforcement-learning-red-teaming`, lastModified: "2026-07-20", changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/blog/redteam-swarm-multi-expert-red-teaming`, lastModified: "2026-04-14", changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/blog/twelve-vulnerabilities-scanner-demo`, lastModified: "2026-02-18", changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/blog/autonomous-agent-security`, lastModified: "2026-02-12", changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/blog/coding-agent-security`, lastModified: "2026-01-26", changeFrequency: "monthly", priority: 0.6 },
  ]
}
