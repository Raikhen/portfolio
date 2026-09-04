/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    let movedToResearch = [
      'agentic-vs-chat',
      'competitive-pressure',
      'eliciting-frustration',
      'gemma-4-frustration',
    ]

    return [
      {
        source: '/publications',
        destination: '/research',
        permanent: true,
      },
      ...movedToResearch.map((slug) => ({
        source: `/blog/${slug}`,
        destination: `/research/${slug}`,
        permanent: true,
      })),
    ]
  },
  async rewrites() {
    return [
      {
        source: '/neel-mats-animals',
        destination: '/papers/neel-mats-animals.pdf',
      },
    ]
  },
}
 
module.exports = nextConfig