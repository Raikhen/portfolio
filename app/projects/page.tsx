import Link from  'next/link'
import Image from 'next/image'
import StyledLink from 'app/components/styled-link'
import Button from 'app/components/button'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Projects
      </h1>
      <div className="flex flex-col space-y-10">
        <section>
          <h2 className="mb-5 text-xl font-semibold tracking-tighter">Chesslet</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="hidden md:block">
              <Link href="https://chesslet.xyz" target="_blank">
                <Image
                  className="rounded cursor-pointer hover:scale-103 transform transition duration-300 ease-in-out"
                  src="/projects/chesslet.png"
                  width={600}
                  height={300}
                  quality={100}
                  alt="Screenshot of Chesslet"
                />
              </Link>
            </div>
            <div className="col-span-3 md:col-span-2 flex flex-col space-y-4">
              <p>
                {
                  `Chesslet is a chess-based puzzle game in which the player must capture their
                  own pieces until only one remains. You can play it online and I also made a physical
                  version of the game that uses LEDs to display the different puzzles:`
                }
              </p>
              <div className="aspect-[16/9] rounded-lg overflow-hidden shadow-xl">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CHV2Ymn3NjA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="flex justify-end">
                <Button link="http://chesslet.xyz" target="_blank">
                  Play the game
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="mb-5 text-xl font-semibold tracking-tighter">Smart Crack Trainer</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="hidden md:block">
              <Link href="https://mugz-crack-trainer.vercel.app/" target="_blank">
                <Image
                  className="rounded cursor-pointer hover:scale-103 transform transition duration-300 ease-in-out"
                  src="/projects/crack-trainer-website.png"
                  width={600}
                  height={300}
                  quality={100}
                  alt="Screenshot of the Smart Crack Trainer website"
                />
              </Link>
            </div>
            <div className="col-span-3 md:col-span-2 flex flex-col space-y-4">
              <p>
                {
                  `I built a crack trainer (a structure to practice a particular style of
                  rock climbing) with buttons at each end to automatically log how many
                  laps the climber has done for each given crack size. The logs are
                  uploaded to a website so that users can track their progress over time.
                  This project combined woodworking, electronics, and web development, which
                  proved to be quite the fun challenge.`
                }
              </p>
              <div className="aspect-[16/9] rounded-lg overflow-hidden shadow-xl">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/QUQfnm_Hhsk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
