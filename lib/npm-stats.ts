export interface NpmStats {
  totalDownloads: number
  version: string
  license: string
}

export async function getNpmStats(): Promise<NpmStats> {
  const fallback: NpmStats = { totalDownloads: 2962, version: "3.3.0", license: "MIT" }
  try {
    const [dlRes, pkgRes] = await Promise.all([
      fetch("https://api.npmjs.org/downloads/range/2000-01-01:2099-12-31/agent-security-scanner-mcp", { next: { revalidate: 3600 } }),
      fetch("https://registry.npmjs.org/agent-security-scanner-mcp/latest", { next: { revalidate: 3600 } }),
    ])
    const dl = await dlRes.json()
    const pkg = await pkgRes.json()
    const total = (dl?.downloads as { downloads: number }[])?.reduce(
      (sum: number, day: { downloads: number }) => sum + day.downloads,
      0
    ) ?? fallback.totalDownloads
    return {
      totalDownloads: total,
      version: pkg?.version ?? fallback.version,
      license: pkg?.license ?? fallback.license,
    }
  } catch {
    return fallback
  }
}
