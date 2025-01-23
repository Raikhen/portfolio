import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Thoughts',
  description: 'Just some thoughts.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Thoughts</h1>
      <BlogPosts />
    </section>
  )
}
