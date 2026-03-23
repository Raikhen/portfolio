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

function AppStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
      <path d="M8.8086 14.9194l6.1107-11.0368c.0837-.1513.1682-.302.2437-.4584.0685-.142.1267-.2854.1646-.4403.0803-.3259.0588-.6656-.066-.9767-.1238-.3095-.3417-.5678-.6201-.7355a1.4175 1.4175 0 0 0-.921-.1924c-.3207.043-.6135.1935-.8443.4288-.1094.1118-.1996.2361-.2832.369-.092.1463-.175.2979-.259.4492l-.3864.6979-.3865-.6979c-.0837-.1515-.1667-.303-.2587-.4492-.0837-.1329-.1739-.2572-.2835-.369-.2305-.2353-.5233-.3857-.844-.429a1.4181 1.4181 0 0 0-.921.1926c-.2784.1677-.4964.426-.6203.7355-.1246.311-.1461.6508-.066.9767.038.155.0962.2984.1648.4403.0753.1564.1598.307.2437.4584l1.248 2.2543-4.8625 8.7825H2.0295c-.1676 0-.3351-.0007-.5026.0092-.1522.009-.3004.0284-.448.0714-.3108.0906-.5822.2798-.7783.548-.195.2665-.3006.5929-.3006.9279 0 .3352.1057.6612.3006.9277.196.2683.4675.4575.7782.548.1477.043.296.0623.4481.0715.1675.01.335.009.5026.009h13.0974c.0171-.0357.059-.1294.1-.2697.415-1.4151-.6156-2.843-2.0347-2.843zM3.113 18.5418l-.7922 1.5008c-.0818.1553-.1644.31-.2384.4705-.067.1458-.124.293-.1611.452-.0785.3346-.0576.6834.0645 1.0029.1212.3175.3346.583.607.7549.2727.172.5891.2416.9013.1975.3139-.044.6005-.1986.8263-.4402.1072-.1148.1954-.2424.2772-.3787.0902-.1503.1714-.3059.2535-.4612L6 19.4636c-.0896-.149-.9473-1.4704-2.887-.9218m20.5861-3.0056a1.4707 1.4707 0 0 0-.779-.5407c-.1476-.0425-.2961-.0616-.4483-.0705-.1678-.0099-.3352-.0091-.503-.0091H18.648l-4.3891-7.817c-.6655.7005-.9632 1.485-1.0773 2.1976-.1655 1.0333.0367 2.0934.546 3.0004l5.2741 9.3933c.084.1494.167.299.2591.4435.0837.131.1739.2537.2836.364.231.2323.5238.3809.8449.4232.3192.0424.643-.0244.9217-.1899.2784-.1653.4968-.4204.621-.7257.1246-.3072.146-.6425.0658-.9641-.0381-.1529-.0962-.2945-.165-.4346-.0753-.1543-.1598-.303-.2438-.4524l-1.216-2.1662h1.596c.1677 0 .3351.0009.5029-.009.1522-.009.3007-.028.4483-.0705a1.4707 1.4707 0 0 0 .779-.5407A1.5386 1.5386 0 0 0 24 16.452a1.539 1.539 0 0 0-.3009-.9158Z" />
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
                <IconButton href="https://apps.apple.com/us/app/chesslet/id6759777247" label="Chesslet on the App Store">
                  <AppStoreIcon />
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
        {/* <section className="flex items-start gap-5">
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
        </section> */}
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
        {/* <section className="flex items-start gap-5">
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
                <IconButton href="https://chromewebstore.google.com/detail/convopool/fapoeadaejjihojnmojnfjnjonceakma" label="ConvoPool on Chrome Web Store">
                  <ChromeWebStoreIcon />
                </IconButton>
                <IconButton href="https://github.com/Raikhen/convopool" label="ConvoPool on GitHub">
                  <GitHubIcon />
                </IconButton>
              </span>
            </h2>
            <p>
              A Chrome extension that lets you voluntarily share your AI chat
              conversations with a public dataset for AI safety research.
            </p>
          </div>
        </section> */}
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
