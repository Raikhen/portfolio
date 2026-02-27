import { ReactNode } from 'react'
import List from 'app/components/list'

export const metadata = {
  title: 'Publications',
  description: 'Published papers and other notes.',
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
        <InlineLink href="https://hcsoso.github.io/">Hsien-Chih Chang</InlineLink>
      </>
    ),
    venue: 'Proceedings of the ACM-SIAM Symposium on Discrete Algorithms (SODA)',
    pages: 'pp. 211\u2013225',
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
        <InlineLink href="https://www.singingbanana.com/">James Grime</InlineLink>,
        and Massi Tron Florentin
      </>
    ),
    venue: 'The American Mathematical Monthly',
    pages: '126(1):70\u201373',
    year: '2019',
    pdf: '/papers/lambda.pdf',
    journal: 'https://www.tandfonline.com/doi/full/10.1080/00029890.2019.1530554',
  },
]

let notes = [
  {
    name: 'Self-Serving Bias in LLM Evaluations',
    url: '/papers/self-serving.pdf',
    from: 'December 2025',
  },
  {
    name: 'On Finding a Small Set of Atomic Interventions to Identify a Causal Model',
    url: '/papers/atomic-interventions.pdf',
    from: 'June 2025',
  },
  {
    name: 'Checkmate, Climbers',
    url: '/papers/grades-elo.pdf',
    from: 'November 2023',
  },
  {
    name: 'Steinitz\u2019s Theorem',
    url: '/papers/steinitz.pdf',
    from: 'March 2023',
  },
  {
    name: 'On the Theory of Abelian Groups',
    url: '/papers/abelian-groups.pdf',
    from: 'March 2023',
  },
  {
    name: 'The Addictive Facility Location Problem',
    url: '/papers/facility-location.pdf',
    from: 'March 2022',
  },
  {
    name: 'Exploring Gauss codes on higher genus surfaces',
    url: '/papers/gauss-codes.pdf',
    from: 'November 2020',
  },
]

export default function Page() {
  return (
    <div className="flex flex-col space-y-10">
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Publications
        </h1>
        <div className="space-y-6">
          {publications.map((p) => (
            <div key={p.pdf}>
              <a href={p.pdf} target="_blank" className="highlight-link py-0.5 px-1.5 -mx-1.5 text-neutral-100 tracking-tight">
                {p.title}
              </a>
              <p className="text-neutral-400 text-sm mt-1">
                {p.coauthors}
              </p>
              <p className="text-neutral-400 text-sm">
                <em>{p.venue}</em>, {p.pages}, {p.year}
              </p>
              <p className="text-sm mt-1 flex gap-x-2 -ml-1">
                <a href={p.pdf} target="_blank" className="highlight-link py-0.5 px-1">paper</a>
                <a href={p.journal} target="_blank" className="highlight-link py-0.5 px-1">journal</a>
              </p>
            </div>
          ))}
        </div>
      </section>
      <List name="Notes and other papers" elements={notes} />
    </div>
  )
}
