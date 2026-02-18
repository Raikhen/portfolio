import List from 'app/components/list'

export const metadata = {
  title: 'Favorites',
  description: 'A collection of great stuff.',
}

export default function Page() {
  let favorites = [
    {
      name: 'Famine, Affluence, and Morality',
      author: 'Peter Singer',
      url: 'https://www.jstor.org/stable/2265052?seq=1',
      from: 'Essay'
    },
    {
      name: 'Aguas Claras de Olimpos',
      author: 'Pescado Rabioso',
      url: 'https://youtu.be/MUY5UkkxwJw?si=Lj6Fmr4aKHQU8xjj',
      from: 'Song'
    },
    {
      name: 'Barro Tal Vez',
      author: 'Cande Buasso',
      url: 'https://youtu.be/w-iBgr-4EfI?si=M4FUb8xNKMtLXS16',
      from: 'Song Cover'
    },
    {
      name: 'The Selfish Gene',
      author: 'Richard Dawkins',
      url: 'https://en.wikipedia.org/wiki/The_Selfish_Gene',
      from: 'Book'
    },
    {
      name: 'Doing Good Better',
      author: 'William MacAskill',
      url: 'https://www.effectivealtruism.org/doing-good-better',
      from: 'Book'
    },
    {
      name: 'The Moral Animal',
      author: 'Robert Wright',
      url: 'https://en.wikipedia.org/wiki/The_Moral_Animal',
      from: 'Book'
    },
    {
      name: 'The Name of the Wind',
      author: 'Patrick Rothfuss',
      url: 'https://en.wikipedia.org/wiki/The_Name_of_the_Wind',
      from: 'Book'
    },
    {
      name: 'Ritmo Latino en la Cara Oeste del Cerro Torre',
      url: 'https://youtu.be/LIU13_lASbs?si=HVQSEFZfDQQLSy5L',
      from: 'Movie'
    }
  ]

  return (
    <div className="flex flex-col space-y-10">
      <List name="Favorites" elements={favorites} />
    </div>
  )
}
