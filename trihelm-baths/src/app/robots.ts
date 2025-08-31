// Next.js will generate /robots.txt from this
export default function robots() {
  return {
    rules: [
      { userAgent: "*", disallow: ["/admin", "/admin/*"] },
    ],
    sitemap: [], // add later if you want
  };
}
