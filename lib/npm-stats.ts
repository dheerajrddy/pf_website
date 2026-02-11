export interface NpmStats {
  weeklyDownloads: number
  version: string
  license: string
}

export async function getNpmStats(): Promise<NpmStats> {
  const fallback: NpmStats = { weeklyDownloads: 1553, version: "3.0.0", license: "MIT" }
  try {
    const [dlRes, pkgRes] = await Promise.all([
      fetch("https://api.npmjs.org/downloads/point/last-week/agent-security-scanner-mcp", { next: { revalidate: 3600 } }),
      fetch("https://registry.npmjs.org/agent-security-scanner-mcp/latest", { next: { revalidate: 3600 } }),
    ])
    const dl = await dlRes.json()
    const pkg = await pkgRes.json()
    return {
      weeklyDownloads: dl?.downloads ?? fallback.weeklyDownloads,
      version: pkg?.version ?? fallback.version,
      license: pkg?.license ?? fallback.license,
    }
  } catch {
    return fallback
  }
}

export function formatDownloads(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}K+`
  return `${n}+`
}
