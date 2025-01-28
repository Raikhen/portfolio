import List from 'app/components/list'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export const metadata = {
  title: 'Thoughts',
  description: 'Just some thoughts.',
}

export default function Page() {
  let allBlogs = getBlogPosts()

  let sortedBlogs = allBlogs.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1
    }

    return 1
  }).map((post) => ({
    name: post.metadata.title,
    url: `/blog/${post.slug}`,
    from: formatDate(post.metadata.publishedAt, false),
  }))

  return (
    <List name="Thoughts" elements={sortedBlogs} />
  )
}
