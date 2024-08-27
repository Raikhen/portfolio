import Link from 'next/link'
import StyledLink from 'app/components/styled-link'

export default function Page() {
  let publications = [
    {
      name: 'Untangling Planar Graphs and Curves by Staying Positive',
      url: '/papers/feo-provan.pdf',
      from: 'October 2021',
    },
    {
      name: 'A Prime-Representing Constant',
      url: '/papers/lambda.pdf',
      from: 'November 2020',
    },
  ]

  let notes = [
    {
      name: 'Checkmate, Climbers',
      url: '/papers/grades-elo.pdf',
      from: 'November 2023',
    },
    {
      name: 'Steinitz’s Theorem',
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

  return (
    <div>
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Publications
        </h1>
        <div>
          {publications.map((e) => (
            <div
              key={e.url}
              className="flex flex-col space-y-1 mb-4"
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-400 w-[160px]">
                  {e.from}
                </p>
                <p className="text-neutral-100 tracking-tight">
                  <StyledLink href={e.url}>
                      {e.name}
                  </StyledLink>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-12">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Notes and other papers
        </h1>
        <div>
          {notes.map((e) => (
            <div
              key={e.url}
              className="flex flex-col space-y-1 mb-4"
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-400 w-[160px] tabular-nums">
                  {e.from}
                </p>
                <p className="text-neutral-100 tracking-tight">
                  <StyledLink href={e.url}>
                      {e.name}
                  </StyledLink>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
