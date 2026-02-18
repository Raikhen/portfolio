import List from 'app/components/list'

export const metadata = {
  title: 'Publications',
  description: 'Published papers and other notes.',
}

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
    <div className="flex flex-col space-y-10">
      <List name="Publications" elements={publications} />
      <List name="Notes and other papers" elements={notes} />
    </div>
  )
}
