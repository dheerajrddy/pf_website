import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard"],
    },
    sitemap: "https://www.proof-layer.com/sitemap.xml",
    host: "https://www.proof-layer.com",
  }
}
