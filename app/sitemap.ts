import { getBlogPosts, getResearchPosts } from 'app/(main)/posts'

export const baseUrl = 'https://dylanfridman.com'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let research = getResearchPosts().map((post) => ({
    url: `${baseUrl}/research/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/blog', '/projects', '/research', '/favorites'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs, ...research]
}
