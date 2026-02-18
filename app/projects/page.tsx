import Link from 'next/link'
import Image from 'next/image'
import StyledLink from 'app/components/styled-link'

export const metadata = {
  title: 'Projects',
  description: 'Some of my recent projects.',
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>
      <div className="flex flex-col space-y-10">
        <section className="flex items-start gap-5">
          <Link
            href="https://dihedral.app/"
            target="_blank"
            className="shrink-0"
          >
            <Image
              src="/projects/dihedral-logo.svg"
              width={64}
              height={64}
              alt="Dihedral logo"
            />
          </Link>
          <div>
            <h2 className="text-xl font-semibold tracking-tighter mb-1">
              <StyledLink href="https://dihedral.app/">Dihedral</StyledLink>
            </h2>
            <p>
              A learning platform for climbing systems that sharpens the user's
              problem-solving skills by presenting them with difficult,
              realistic scenarios.
            </p>
          </div>
        </section>
        <section className="flex items-start gap-5">
          <Link
            href="https://chesslet.xyz"
            target="_blank"
            className="shrink-0"
          >
            <Image
              src="/projects/chesslet-logo.svg"
              width={64}
              height={64}
              alt="Chesslet logo"
            />
          </Link>
          <div>
            <h2 className="text-xl font-semibold tracking-tighter mb-1">
              <StyledLink href="https://chesslet.xyz">Chesslet</StyledLink>
            </h2>
            <p>
              A chess puzzle game in which the player must capture their own
              pieces until only one remains.
            </p>
          </div>
        </section>
        <section className="flex items-start gap-5">
          <Link
            href="https://boycottcarelessai.org/"
            target="_blank"
            className="shrink-0"
          >
            <Image
              src="/projects/boycott-logo.svg"
              width={64}
              height={64}
              alt="Boycott Careless AI logo"
              className="rounded"
            />
          </Link>
          <div>
            <h2 className="text-xl font-semibold tracking-tighter mb-1">
              <StyledLink href="https://boycottcarelessai.org/">
                Boycott Careless AI
              </StyledLink>
            </h2>
            <p>
              A campaign encouraging LLM consumers to limit their model usage to
              the most responsible frontier labs, as established by the Future
              of Life Institute's AI Safety Index.
            </p>
          </div>
        </section>
        <section className="flex items-start gap-5">
          <Link
            href="https://climbing-bench.vercel.app/"
            target="_blank"
            className="shrink-0"
          >
            <Image
              src="/projects/climbingbench-logo.png"
              width={64}
              height={64}
              alt="ClimbingBench logo"
              className="invert scale-[1.2]"
            />
          </Link>
          <div>
            <h2 className="text-xl font-semibold tracking-tighter mb-1">
              <StyledLink href="https://climbing-bench.vercel.app/">
                ClimbingBench
              </StyledLink>
            </h2>
            <p>
              A benchmark for evaluating how well LLMs understand climbing
              systems and how well they can problem-solve.
            </p>
          </div>
        </section>
      </div>
    </section>
  )
}
