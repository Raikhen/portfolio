import { ReactNode } from 'react'
import List from 'app/components/list'
import { formatDate, getResearchPosts } from 'app/(main)/posts'

export const metadata = {
  title: 'Research',
  description: 'Published papers and other research.',
}

function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" className="inline-link">
      {children}
    </a>
  )
}

let publications = [
  {
    title: 'Untangling Planar Graphs and Curves by Staying Positive',
    coauthors: (
      <>
        with Santiago Aranguri and{' '}
        <InlineLink href="https://hcsoso.github.io/">
          Hsien-Chih Chang
        </InlineLink>
      </>
    ),
    venue:
      'Proceedings of the ACM-SIAM Symposium on Discrete Algorithms (SODA)',
    pages: 'pp. 211–225',
    year: '2022',
    pdf: '/papers/feo-provan.pdf',
    journal: 'https://epubs.siam.org/doi/10.1137/1.9781611977073.11',
  },
  {
    title: 'A Prime-Representing Constant',
    coauthors: (
      <>
        with Juli Garbulsky,{' '}
        <InlineLink href="https://brumath.dev/">Bruno Glecer</InlineLink>,{' '}
        <InlineLink href="https://www.singingbanana.com/">
          James Grime
        </InlineLink>
        , and Massi Tron Florentin
      </>
    ),
    venue: 'The American Mathematical Monthly',
    pages: '126(1):70–73',
    year: '2019',
    pdf: '/papers/lambda.pdf',
    journal:
      'https://www.tandfonline.com/doi/full/10.1080/00029890.2019.1530554',
  },
]

let notes = [
  {
    name: 'Self-Serving Bias in LLM Evaluations',
    url: '/papers/self-serving.pdf',
    publishedAt: '2025-12-01',
  },
  {
    name: 'Checkmate, Climbers',
    url: '/papers/grades-elo.pdf',
    publishedAt: '2023-11-01',
  },
  {
    name: 'The Addictive Facility Location Problem',
    url: '/papers/facility-location.pdf',
    publishedAt: '2022-03-01',
  },
  {
    name: 'Exploring Gauss codes on higher genus surfaces',
    url: '/papers/gauss-codes.pdf',
    publishedAt: '2020-11-01',
  },
]

export default function Page() {
  let researchPosts = getResearchPosts().map((post) => ({
    name: post.metadata.title,
    url: `/research/${post.slug}`,
    publishedAt: post.metadata.publishedAt,
    internal: true,
  }))

  let research = [...notes, ...researchPosts]
    .sort((a, b) => {
      if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
        return -1
      }

      return 1
    })
    .map(({ publishedAt, ...element }) => ({
      ...element,
      from: formatDate(publishedAt, false),
    }))

  return (
    <div className="flex flex-col space-y-10">
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Publications
        </h1>
        <div className="space-y-6">
          {publications.map((p) => (
            <div key={p.pdf}>
              <a
                href={p.pdf}
                target="_blank"
                className="highlight-link py-0.5 px-1.5 -mx-1.5 text-neutral-100 tracking-tight"
              >
                {p.title}
              </a>
              <p className="text-neutral-400 text-sm mt-1">{p.coauthors}</p>
              <p className="text-neutral-400 text-sm">
                <em>{p.venue}</em>, {p.pages}, {p.year}
              </p>
              <p className="text-sm mt-1 flex gap-x-2 -ml-1">
                <a
                  href={p.pdf}
                  target="_blank"
                  className="highlight-link py-0.5 px-1"
                >
                  paper
                </a>
                <a
                  href={p.journal}
                  target="_blank"
                  className="highlight-link py-0.5 px-1"
                >
                  journal
                </a>
              </p>
            </div>
          ))}
        </div>
      </section>
      <List name="Other" elements={research} />
    </div>
  )
}
