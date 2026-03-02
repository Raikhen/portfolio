import Link from 'next/link'
import Image from 'next/image'
import StyledLink from 'app/components/styled-link'

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <circle cx="12" cy="12" r="10" />
      <ellipse cx="12" cy="12" rx="4.5" ry="10" />
      <path d="M2 12h20" />
      <path d="M3.3 7h17.4" />
      <path d="M3.3 17h17.4" />
    </svg>
  )
}

function ChromeWebStoreIcon() {
  return (
    <svg viewBox="0 0 192 192" fill="currentColor" className="w-[18px] h-[18px]">
      <defs>
        <path d="M8 20v140c0 6.6 5.4 12 12 12h152c6.6 0 12-5.4 12-12V20H8zm108 32H76c-4.42 0-8-3.58-8-8s3.58-8 8-8h40c4.42 0 8 3.58 8 8s-3.58 8-8 8z" id="cws-bag" />
        <clipPath id="cws-clip-bag"><use href="#cws-bag" /></clipPath>
        <circle cx="96" cy="160" r="76" id="cws-circle" />
        <clipPath id="cws-clip-circle"><use href="#cws-circle" /></clipPath>
      </defs>
      <use href="#cws-bag" opacity="0.35" />
      <path clipPath="url(#cws-clip-bag)" d="M116 36H76c-4.42 0-8 3.58-8 8s3.58 8 8 8h40c4.42 0 8-3.58 8-8s-3.58-8-8-8z" />
      <g clipPath="url(#cws-clip-bag)">
        <g clipPath="url(#cws-clip-circle)">
          <path d="M32.07 84v93.27h34.01L96 125.45h76V84z" opacity="0.5" />
          <path d="M20 236h72.34l33.58-33.58v-25.14l-59.84-.01L20 98.24z" opacity="0.65" />
          <path d="M96 125.45l29.92 51.82L92.35 236H172V125.45z" opacity="0.8" />
          <circle cx="96" cy="160" r="34.55" opacity="0.35" />
          <circle cx="96" cy="160" r="27.64" />
        </g>
      </g>
    </svg>
  )
}

function IconButton({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={label}
      className="text-white opacity-60 hover:opacity-100 transition-opacity duration-200"
    >
      {children}
    </Link>
  )
}

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
            className="shrink-0 transition-transform duration-200 hover:scale-110"
          >
            <Image
              src="/projects/dihedral-logo.svg"
              width={64}
              height={64}
              alt="Dihedral logo"
            />
          </Link>
          <div>
            <h2 className="text-xl font-semibold tracking-tighter mb-1 flex items-center gap-3">
              <StyledLink href="https://dihedral.app/">Dihedral</StyledLink>
              <span className="flex items-center gap-2.5">
                <IconButton href="https://dihedral.app/" label="Dihedral website">
                  <GlobeIcon />
                </IconButton>
              </span>
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
            className="shrink-0 transition-transform duration-200 hover:scale-110"
          >
            <Image
              src="/projects/chesslet-logo.png"
              width={64}
              height={64}
              alt="Chesslet logo"
              className="rounded"
            />
          </Link>
          <div>
            <h2 className="text-xl font-semibold tracking-tighter mb-1 flex items-center gap-3">
              <StyledLink href="https://chesslet.xyz">Chesslet</StyledLink>
              <span className="flex items-center gap-2.5">
                <IconButton href="https://chesslet.xyz" label="Chesslet website">
                  <GlobeIcon />
                </IconButton>
                <IconButton href="https://github.com/raikhen-llc/chesslet2" label="Chesslet on GitHub">
                  <GitHubIcon />
                </IconButton>
              </span>
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
            className="shrink-0 transition-transform duration-200 hover:scale-110"
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
            <h2 className="text-xl font-semibold tracking-tighter mb-1 flex items-center gap-3">
              <StyledLink href="https://boycottcarelessai.org/">
                Boycott Careless AI
              </StyledLink>
              <span className="flex items-center gap-2.5">
                <IconButton href="https://boycottcarelessai.org/" label="Boycott Careless AI website">
                  <GlobeIcon />
                </IconButton>
              </span>
            </h2>
            <p>
              A campaign encouraging LLM consumers to limit their model usage to
              the most responsible frontier labs, as established by the Future
              of Life Institute's{' '}
              <a href="https://aisafetyindex.org/" target="_blank" className="inline-link">
                AI Safety Index
              </a>.
            </p>
          </div>
        </section>
        <section className="flex items-start gap-5">
          <Link
            href="https://climbing-bench.vercel.app/"
            target="_blank"
            className="shrink-0 transition-transform duration-200 hover:scale-110"
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
            <h2 className="text-xl font-semibold tracking-tighter mb-1 flex items-center gap-3">
              <StyledLink href="https://climbing-bench.vercel.app/">
                ClimbingBench
              </StyledLink>
              <span className="flex items-center gap-2.5">
                <IconButton href="https://climbing-bench.vercel.app/" label="ClimbingBench website">
                  <GlobeIcon />
                </IconButton>
                <IconButton href="https://github.com/Raikhen/ClimbingBench" label="ClimbingBench on GitHub">
                  <GitHubIcon />
                </IconButton>
              </span>
            </h2>
            <p>
              A benchmark for evaluating how well LLMs understand climbing
              systems and how well they can problem-solve.
            </p>
          </div>
        </section>
        <section className="flex items-start gap-5">
          <Link
            href="https://convopool.vercel.app/"
            target="_blank"
            className="shrink-0 transition-transform duration-200 hover:scale-110"
          >
            <Image
              src="/projects/convopool-logo.svg"
              width={64}
              height={64}
              alt="ConvoPool logo"
              className="rounded"
            />
          </Link>
          <div>
            <h2 className="text-xl font-semibold tracking-tighter mb-1 flex items-center gap-3">
              <StyledLink href="https://convopool.vercel.app/">
                ConvoPool
              </StyledLink>
              <span className="flex items-center gap-2.5">
                <IconButton href="https://convopool.vercel.app/" label="ConvoPool website">
                  <GlobeIcon />
                </IconButton>
                <IconButton href="https://github.com/Raikhen/convopool" label="ConvoPool on GitHub">
                  <GitHubIcon />
                </IconButton>
                <IconButton href="https://chromewebstore.google.com/detail/convopool/fapoeadaejjihojnmojnfjnjonceakma" label="ConvoPool on Chrome Web Store">
                  <ChromeWebStoreIcon />
                </IconButton>
              </span>
            </h2>
            <p>
              A Chrome extension that lets you voluntarily share your AI chat
              conversations with a public dataset for AI safety research.
            </p>
          </div>
        </section>
        <section className="flex items-start gap-5">
          <Link
            href="https://psychogpt.space/"
            target="_blank"
            className="shrink-0 transition-transform duration-200 hover:scale-110"
          >
            <span className="flex items-center justify-center w-16 h-16 text-5xl" role="img" aria-label="PsychoGPT logo">🫠</span>
          </Link>
          <div>
            <h2 className="text-xl font-semibold tracking-tighter mb-1 flex items-center gap-3">
              <StyledLink href="https://psychogpt.space/">PsychoGPT</StyledLink>
              <span className="flex items-center gap-2.5">
                <IconButton href="https://psychogpt.space/" label="PsychoGPT website">
                  <GlobeIcon />
                </IconButton>
                <IconButton href="https://github.com/Raikhen/psychogpt" label="PsychoGPT on GitHub">
                  <GitHubIcon />
                </IconButton>
              </span>
            </h2>
            <p>
              An interactive demo of Tim Hua's{' '}
              <a href="https://www.alignmentforum.org/posts/iGF7YcnQkEbwvYLPA/ai-induced-psychosis-a-shallow-investigation" target="_blank" className="inline-link">
                AI-induced psychosis experiment
              </a>
              , showcasing how LLMs can reinforce psychosis.
            </p>
          </div>
        </section>
        <section className="flex items-start gap-5">
          <Link
            href="https://unverbalized-biases.vercel.app/"
            target="_blank"
            className="shrink-0 transition-transform duration-200 hover:scale-110"
          >
            <Image
              src="/projects/unverbalized-biases-logo.svg"
              width={64}
              height={64}
              alt="Unverbalized Biases logo"
              className="rounded"
            />
          </Link>
          <div>
            <h2 className="text-xl font-semibold tracking-tighter mb-1 flex items-center gap-3">
              <StyledLink href="https://unverbalized-biases.vercel.app/">
                Unverbalized Biases
              </StyledLink>
              <span className="flex items-center gap-2.5">
                <IconButton href="https://unverbalized-biases.vercel.app/" label="Unverbalized Biases website">
                  <GlobeIcon />
                </IconButton>
                <IconButton href="https://github.com/Raikhen/unverbalized-biases" label="Unverbalized Biases on GitHub">
                  <GitHubIcon />
                </IconButton>
              </span>
            </h2>
            <p>
              Interactive demo showing hidden biases that LLMs exhibit but never
              mention in their reasoning. Based on the paper{' '}
              <a href="https://arxiv.org/abs/2501.06467" target="_blank" className="inline-link">
                <em>
                  Biases in the Blind Spot: Detecting What LLMs Fail to Mention
                </em>
              </a>{' '}
              by Arcuschin, Chanin, Garriga-Alonso &amp; Camburu (2025).
            </p>
          </div>
        </section>
      </div>
    </section>
  )
}
