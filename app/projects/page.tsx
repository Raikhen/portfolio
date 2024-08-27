import Link from  'next/link'
import Image from 'next/image'
import StyledLink from 'app/components/styled-link'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Projects
      </h1>
      <section>
        <h2 className="mb-5 text-xl font-semibold tracking-tighter">Chesslet</h2>
        <div className="flex flex-row space-x-8">
          <Link href="https://chesslet.xyz">
            <Image
              className="rounded cursor-pointer hover:scale-103 transform transition duration-y"
              src="/projects/chesslet.png"
              width={600}
              height={300}
              quality={100}
              alt="Screenshot of Chesslet"
            />
          </Link>
          <div>
            <p className="mb-4">
              {
                `Chesslet is a chess-based puzzle game in which the player must capture their
                own pieces until only one remains. You
                can play the game at `
              }
              <StyledLink inParagraph href="https://chesslet.xyz">
                  chesslet.xyz
              </StyledLink>.
              {
                ` The game was written entirely in JavaScript. I've also made a physical version
                of this game.`
              }
            </p>
          </div>
        </div>
      </section>
    </section>
  )
}
